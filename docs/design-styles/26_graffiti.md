# 26 · Graffiti — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion script `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked. "DESIGO®" always with ®.

---

## 1. Style essence

Graffiti design borrows the energy of street walls: spray-painted letterforms, stencils, drips, layered tags, posters pasted over posters and hand-lettered signs. It feels made by hand, in public, fast. On the web it shows up as painted headlines, stencil labels, wall textures and work that seems to be "applied" as you scroll.

Reference points:
1. **Indian wall-writing and hand-painted signage**: painted shop shutters, lime-washed walls with brand names, painted truck tailboards ("HORN OK PLEASE"). This is India's own vernacular "graffiti" and our main source.
2. **St+art India Foundation murals** (Lodhi Art District, Delhi; Sassoon Dock, Mumbai): large commissioned murals, closer to art than vandalism.
3. **Banksy's stencil discipline**: one colour, one idea, a lot of empty wall.

## 2. Fit for DESIGO® — score 2 / 5 (whole site) · 3.5 / 5 (local campaign)

**Where it fights the brand.** Graffiti signals rebellion, the city and youth culture. DESIGO® signals care, origin, cleanliness and premium craft. Drips and overspray near a milk bottle can read as dirt. Food brands need hygiene cues, and graffiti's grit works against them. Its density also fights the principle "the bottle is the hero".

**Where it works.** Jodhpur is the **Blue City**. Its indigo lime-washed walls are among the most photographed in India. Rajasthan has a living tradition of hand-painted wall advertising. A campaign rooted in **"painted on the blue walls of Jodhpur"** (DESIGO®'s home city, *pending public confirmation*) would be local, warm and premium if the lettering is done by a real sign painter rather than taken from a font.

**Recommendation.** Do not build the whole site in Graffiti. Use it for a **local launch / delivery-area campaign page** (`/jodhpur`), for out-of-home and social, and possibly for the /reserve page as a "your street, your doorstep" moment. The full plan below is kept for completeness, and phases 1–3, 10, 17 and 18 are the reusable core.

## 3. Art direction

### Palette ("Blue City wall")
| Token | Hex | Role |
|---|---|---|
| `--gf-wall` | `#5B86B5` | Jodhpur indigo-blue lime wash (base wall) |
| `--gf-wall-deep` | `#2F5A88` | Shadowed wall, footer |
| `--gf-wall-chalk` | `#DCE6EE` | Faded lime-wash highlight |
| `--gf-milk` | `#F7F4EC` | Painted panel ground (the sign board) |
| `--gf-forest` | `#0B3B32` | Primary lettering colour |
| `--gf-green` | `#1E7A68` | Secondary lettering, links |
| `--gf-gold` | `#C8A96B` | Pin-stripes and outlines |
| `--gf-sindoor` | `#C2412D` | Truck-art accent, used sparingly |
| `--gf-ink` | `#171918` | Body text (always on milk panels) |

Body text never sits directly on the textured blue wall. It always sits on a painted milk panel, so hygiene and legibility are preserved.

### Typography
- Display: **commissioned hand-lettering** from a Jodhpur sign painter (Latin plus Devanagari) for 8–12 key words (DESIGO® is *never* redrawn; we use the vector wordmark). Fallback font for prototyping: **Big Shoulders Stencil Display** (OFL) 800.
- Stencil labels: **Big Shoulders Stencil Text** 600, uppercase, +0.12em.
- Editorial: **Fraunces** 400 for single sentences, so it stays DESIGO®.
- UI and body: **Inter Tight**.
- Devanagari: **Tiro Devanagari Hindi** (OFL) for painted Hindi words like "दूध" (milk) and "बोतल वापस" (bottle back).
- Avoid: Permanent Marker, Rock Salt and Rubik Wet Paint. They read as stock "street" fonts.

### Texture and imagery
- Wall texture: one real photographed lime-wash wall (shot in Jodhpur, 4000px, tileable crop), used as a background at 100% in hero and CTA and at 0% elsewhere.
- Paint: SVG masks reveal lettering in brush-stroke order. No drips on anything near the bottle or milk. Drips are allowed only on the wall far from the product (max 2 per screen).
- Stencil: a clean-edged stencil of the bottle silhouette is a recurring motif (one colour, no overspray).
- Photography: real DESIGO® photos framed as **pasted posters** (wheat-paste) with a 2px white border and a slightly lifted corner.

### Iconography
Stencil-cut icons (bridges in the shapes, 2px) for the seven verbs. Arrows are painted single strokes.

### Grid
Desktop 12 columns, 64px gutters. Composition is "wall plus panels": the wall is full-bleed and content panels are placed on columns 2–7 or 7–12 with a ±1.5° rotation (max), aligned to a hidden 8px baseline. Mobile: single column, rotation 0°.

## 4. Motion and interaction language
- **Scroll.** Lettering "paints in": SVG stroke-dashoffset per stroke, 700ms each, `cubic-bezier(.33,0,.15,1)` (a hand slowing as it lifts). Posters "paste in": scale 1.03 → 1 and opacity 0 → 1 over 500ms, then the corner flips down at 240ms.
- **Cursor.** A 14px round "spray nozzle" ring in `--gf-forest`. Over links it shows a short painted underline. Over the bottle it becomes a stencil-cut `DRAG`. **No cursor-painting trail on the wall by default.** It is offered only as an opt-in toy on the campaign page, clears itself after 4s and never paints on content.
- **Hover.** Buttons are painted label plus arrow. On hover, a second coat of paint (8% darker) sweeps across in 300ms.
- **Transitions.** Wall-to-wall transitions use a roller wipe: a 120px vertical band of fresh lime wash sweeps across in 900ms with `cubic-bezier(.65,0,.35,1)`.

### The bottle
The bottle never touches paint. It stands **in front of** the wall on a real contact shadow, with a soft wall shadow cast up-left (light from the upper right, like late-afternoon sun on a Jodhpur lane). Behind it a painted stencil echo of the bottle in `--gf-wall-deep` sits offset by 24px. Pointer tilt is ±8°. The 360 viewer uses the clean render. Paint is environment only.

## 5. Variant worlds — four walls

| Variant | Wall | Lettering | Accent motif |
|---|---|---|---|
| MASTER 26 (V1+) | Deep green-painted door `#1F5C45` in a blue wall | Milk `#F7F4EC` with gold pin-stripe | Painted herb-leaf border (stencil); "26" large in hand-lettering, "26 herbs" *pending* |
| ROOT 14 (V1) | Red-oxide painted shutter `#B3202A` | Milk lettering, black `#4A0A0F` shadow | Truck-art scallop border in milk |
| BASE 3 (V2) | Amber/haldi wall `#E89A1C` | Forest `#0B3B32` lettering | Simple painted "3" in a circle, like a house number |
| ESSENTIAL (V3) | Fresh ivory lime wash `#F4EDE2` | Charcoal lettering | No ornament: a clean wall, one sign |

The info panel is a painted milk sign board with V-CODE, name, price (*pending*) and descriptors (*pending*) in Inter Tight. Only the name is hand-lettered.

## 6. Page-by-page treatment

### Home
1. **Hero.** A full-bleed blue wall. The bottle in front, its stencil echo behind. "Milk from the source." paints in letter by letter in forest. Mono line beneath: Jodhpur, Rajasthan (*pending*).
2. **Bottle becomes the story.** Six words painted as small wall signs around the bottle (ORIGIN, BREED, FEED, FARM, QUALITY, TRACE), each with a painted arrow to the bottle.
3. **Cow to bottle.** A long lane wall scrolls horizontally. Seven painted panels like a shop-sign series, each with a pasted photo. A single painted milk-white line runs along the wall's base.
4. **Farm.** Style eases off: large real photos pasted edge-to-edge as wheat-paste posters on a pale wall. The farm should look real, not painted.
5. **Breeds.** Six portrait posters pasted in a row with stencil name labels, "awaiting confirmation" where needed.
6. **Traceability.** A painted route map on the wall (chalk lines, stencil node circles). The animated pulse is a painted dot that moves along it. "Illustrative journey — not live data" on a stencil tag.
7. **Quality.** Calm on purpose: a clean milk-white panel (no wall) with the 16 parameters as a numbered painted list. Values pending. Hygiene cue: a lab chapter must look clean.
8. **Four milks.** The four walls (§5), pinned one after the other.
9. **Milk as material.** A milk-white lime-wash roller sweeps the whole screen white. This is the ribbon, done as paint.
10. **Heritage.** A painted mural in the style of Rajasthani folk wall painting (mandana floor art, phad-scroll borders), commissioned and credited.
11. **Technology.** A wall of stencilled verbs in a grid: ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER, with the statement on a sign board.
12. **Ghee.** A warm haldi wall, the jar in front, the folk border from the jar label painted around it.
13. **Trace your milk.** A painted "enter your bottle number" sign with a real input inside a milk panel, and the DEMO stencil tag.
14. **Story.** Dates painted like house numbers on doors along a lane. Only the 2019 verified item shows in production.
15. **Final CTA.** "Know where your milk comes from." painted large. Then a roller sweeps to forest green for the footer.

### Inner pages
- **/milk**: four painted doors side by side. Hover opens a door to reveal the bottle.
- **/milk/[variant]**: the variant wall at the top, then a clean milk panel for the 360 viewer and facts.
- **/ghee**: the haldi wall; three jars on a painted shelf.
- **/origin**: documentary, posters only.
- **/trace**: the painted route map, full page, with keyboard nodes.
- **/technology**: the stencil verbs, each opening a short explanation panel.
- **/about**: the sign-painter collaboration story and verified milestones.
- **/reserve**: "Your street, your doorstep." A painted lane with the form on a milk board.

## 7. Component variants
`WallScene` (AmbientBackground) · `PaintedHeadline` (SVG stroke reveal) · `StencilLabel` · `PosterPhoto` (wheat-paste frame) · `PaintedDoor` (variant card) · `BottleWithStencilEcho` · `PaintedRouteMap` (TraceMap) · `SignBoardPanel` (QualityPanel / info panel) · `LaneTrack` (JourneyTrack) · `RollerTransition` · `PaintedButton` · `AssetSlot` as a blank pasted poster reading "PHOTO PENDING — farm landscape (B1)".

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Blue City palette, stencil + Fraunces stack | Tokens, specimen, lettering brief to sign painter | Body text only on milk panels; ≥ 4.5:1 | Sign-painter lettering (commission) | 3 |
| 2 | Grid and shell | Wall + panel layout, nav, cursor | `WallScene`, panel rotation system, nozzle cursor | Rotation ≤ 1.5°; 0° on mobile | Wall texture photo | 3 |
| 3 | Hero and bottle | Bottle with stencil echo | Hero, paint-in headline | No paint touches the bottle; LCP image < 180 KB | Renders (have), lettering SVG | 3 |
| 4 | Bottle → story | Painted signs around the bottle | Chapter 02 | Words readable; arrows aligned | Lettering | 2 |
| 5 | Cow → bottle | Lane wall track | `LaneTrack` | Smooth horizontal pin; vertical on mobile | Photos B4, B8 | 4 |
| 6 | Origin / farm | Poster documentary | Chapter 04 | Untreated photos; slots named | B1, B2 | 2 |
| 7 | Breeds | Poster row | Chapter 05 | Pending labels visible | B3 | 2 |
| 8 | Trace map | Painted route | `PaintedRouteMap` | Keyboard nodes; DEMO label | traceNodes | 4 |
| 9 | Quality / lab | Clean sign-board list | Chapter 07 | No texture; no invented values | Lab approval | 2 |
| 10 | Four worlds + 360 | Four walls, doors | Chapter 08 | Bottle stays clean; viewer frames scrub | 360 sequences A | 5 |
| 11 | Heritage | Commissioned folk mural | Chapter 10 | Artist credited; motifs from Rajasthan | Mural commission | 3 |
| 12 | Technology | Stencil verb wall | Chapter 11 | Public vocabulary only | none | 2 |
| 13 | Ghee | Haldi wall | Chapter 12 | Prices pending | Jar render, label art | 2 |
| 14 | Trace demo | Painted sign + input | Chapter 13 | DEMO visible at all times | demoProvider | 2 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Viewer on clean panel | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Origin documentary | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Verified milestones only; delivery area pending | Delivery-area confirmation | 3 |
| 18 | Mobile | Vertical lanes | Mobile layouts | No rotation; texture at 50% res | none | 3 |
| 19 | A11y + reduced motion | Static paint | All lettering shown complete; roller off | AA; SVG headlines have real text alternatives | none | 2 |
| 20 | Perf, QA, handover | Ship | Report, QA, handover | Texture ≤ 2 × 200 KB AVIF per page; LCP < 2.5s | all | 3 |

Total ≈ 58 days (plus sign-painter and mural commissions, roughly 2–3 weeks of their time running in parallel).

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- Permission and budget to commission a **Jodhpur sign painter** (8–12 words, Latin and Devanagari, painted on board and scanned at 600 dpi) and optionally a **mural artist** for the heritage chapter.
- Photographs of real blue walls near DESIGO® operations, and of delivery in the old city lanes (no faces without consent).
- Confirmation that "Jodhpur" may be used publicly, and the delivery-area list.

## 10. Performance, accessibility and mobile
- Lettering is SVG paths (≤ 12 KB each) with an `aria-label` carrying the real text. The page must read correctly with CSS off.
- One wall texture per page, AVIF, 1600px on mobile and 2560px on desktop, lazy after the hero.
- Contrast is checked on panels, never on the textured wall.
- Reduced motion: lettering appears complete, no roller wipes, posters appear without the corner flip.
- Mobile: panels full-width at 0°, wall texture visible only in 24px margins and section breaks.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Real hand-lettering by a named local painter, credited. No stock graffiti fonts in production.
2. **Paint never touches the product, the milk or the lab chapter.** Hygiene first.
3. Max two drips per screen, and none near food.
4. No tags, no vandalism imagery, no spray cans as props, no "urban" slang.
5. Lots of empty wall, Banksy-level restraint: one idea per wall.
6. The DESIGO® wordmark is never painted or distorted. It is applied as clean vector "signage".
7. Real photos remain documentary and are not painted over.
8. All pending claims (prices, herbs, breeds, city) still carry the dotted pending underline even inside painted panels.

**Risks**: dirt and hygiene associations, looking like a youth streetwear brand, and cultural tokenism. Mitigation: Indian sign-painting tradition (craft, not vandalism), Blue City specificity, commissioned and credited artists, and the style kept to a campaign.

**Best used for:** a Jodhpur local-launch / delivery-area campaign page and out-of-home work, with hand-painted signage on Blue City walls.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Palette and guardrails were clear; missing were colour roles (incl. a muted text tone and state colours), font packages and sizes, component states, motion tokens, image prompts and acceptance list. All added. Fonts already OFL (Big Shoulders Stencil, Fraunces, Inter Tight, Tiro Devanagari Hindi); no claim violations found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | painted lettering colour, primary CTA plate, key accents | 11.3:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#F7F4EC` | label on forest-painted plates | 11.3:1 on primary |
| Secondary | --c-secondary | `#1E7A68` | secondary lettering, links, stencil labels | 4.7:1 vs bg (text-safe) |
| Accent | --c-accent | `#C2412D` | sindoor truck-art accent: focus ring, active marker (sparingly) | 4.7:1 vs bg (text-safe) |
| Background | --c-bg | `#F7F4EC` | reading ground = painted milk sign-board; the blue wall (`--gf-wall` `#5B86B5`) is a scene layer and never sits under text | 16.1:1 with text |
| Surface | --c-surface | `#DCE6EE` | faded lime-wash panels, nav sheet, secondary boards | text on surface 14.0:1 |
| Text | --c-text | `#171918` | body copy, always on milk or chalk panels | 16.1:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#2F5A88` | captions, stencil sub-labels (shadowed-wall blue) | 6.5:1 vs bg (text-safe) |
| Line | --c-line | `#C8A96B` | gold pin-stripe outlines on boards, dividers | decorative, 2.1:1, never text |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#C8A96B` / `#C2412D` | ok = painted green tick on verified steps; pending = 1px dotted gold underline + stencil PENDING tag (even inside painted panels); DEMO = sindoor stencil tag with milk text | DEMO tag milk `#F7F4EC` on `#C2412D` = 4.7:1; pending tag text stays `#171918` |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | deep green painted door `#1F5C45` in a blue wall, milk lettering with gold pin-stripe, stencil herb-leaf border; "26 herbs" *pending* |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red-oxide shutter `#B3202A`, milk lettering with `#4A0A0F` shadow, truck-art scallop border |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | haldi wall `#E89A1C`, forest `#0B3B32` lettering, painted "3" in a house-number circle |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | fresh ivory lime wash `#F4EDE2`, charcoal lettering, no ornament: one clean sign |

Dark-chapter inversion: footer and the final-CTA roller sweep switch to forest: `--c-bg` → `#0B3B32`, `--c-text` → `#F7F4EC`, `--c-primary` → `#F7F4EC` (plate) with `#0B3B32` label, muted → `#DCE6EE`, line stays gold, logo → white. The wall-deep `#2F5A88` is used only as a scene colour on dark.

Additional style tokens (kept from §3): `--gf-wall` `#5B86B5` (Jodhpur indigo lime wash, scene only), `--gf-wall-deep` `#2F5A88`, `--gf-wall-chalk` `#DCE6EE`, `--gf-gold` `#C8A96B`. Drips max 2 per screen, never near product or milk.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Commissioned Jodhpur sign-painter lettering (SVG) · prototype fallback Big Shoulders Stencil Display | `@fontsource/big-shoulders-stencil-display` (Google Fonts) | 800 | `clamp(3.5rem, 2.2rem + 6vw, 8.5rem)` | 0.9 | +0.01em | Upper, 8–12 key words only |
| Headline H1–H2 | Big Shoulders Stencil Display (H1) · Fraunces (H2 sentence) | `@fontsource/big-shoulders-stencil-display` · `@fontsource-variable/fraunces` | 800 · 400 | H1 `clamp(2.6rem, 1.6rem + 4vw, 5rem)` · H2 `clamp(1.6rem, 1.2rem + 1.8vw, 2.6rem)` | 0.95 · 1.2 | +0.01em · 0 | H1 upper · H2 sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.6 | 0 | Sentence |
| Label / UI | Big Shoulders Stencil Text | `@fontsource/big-shoulders-stencil-text` | 600 | `clamp(.8rem, .76rem + .2vw, .9rem)` | 1.1 | +0.12em | Upper |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 | `.875rem` | 1.4 | +0.02em | Upper for IDs |
| Devanagari (optional) | Tiro Devanagari Hindi (fallback for painted Hindi words like "दूध", "बोतल वापस") | `@fontsource/tiro-devanagari-hindi` | 400 | display sizes only | 1.3 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Big Shoulders Stencil Display/Text, Fraunces, Inter Tight, JetBrains Mono and Tiro Devanagari Hindi are OFL 1.1; production display is commissioned lettering licensed to DESIGO®. Pairing: condensed stencil = painted signage, Fraunces keeps one sincere DESIGO® sentence, Inter Tight carries reading.

### 12.3 Layout & surfaces
- Grid: 12 columns, 64 px gutters desktop / 16 px mobile, max-width 1360 px; "wall plus panels": wall full-bleed, panels on cols 2–7 or 7–12.
- Panel rotation ±1.5° max on desktop, 0° on mobile; hidden 8 px baseline.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; section padding 128 px desktop / 72 px mobile; ≥ 40% of each wall left empty.
- Radius: `sm 0` · `md 2px` (badges, inputs) · `lg 4px` (sign boards, with a ≤ 1 px painted-edge SVG mask); no pills except cursor.
- Border: 2 px gold pin-stripe inset 6 px on sign boards; posters get a 2 px white border + lifted corner.
- Shadow: boards `0 2px 0 rgba(23,25,24,.08), 0 12px 24px -12px rgba(23,25,24,.25)`; wall shadow of the bottle cast up-left.
- Texture: one photographed lime-wash wall per page (AVIF), 100% in hero and CTA only; drips ≤ 2 per screen, away from food.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: painted plate: forest `#0B3B32` board with milk stencil label + painted single-stroke arrow, 52 px tall, padding 16 px 24 px, radius 2 px with painted-edge mask. States: default · hover a second coat (8% darker) sweeps left → right 300 ms, arrow travels 6 px · focus-visible 3 px `#C2412D` ring offset 3 px · active plate presses 1 px · disabled 35% with diagonal hatching, `aria-disabled` · loading arrow replaced by a painted 3-dot sequence. 44 px min target.
- **Secondary button**: milk board with 2 px forest outline and forest stencil label + arrow, 48 px. Hover: outline repaints gold → forest 300 ms; focus-visible sindoor ring; active fill chalk `#DCE6EE`; disabled 35%; loading painted dots.
- **Text / arrow link**: Inter Tight with a hand-painted SVG underline (2 px, slight width variation) in green; arrow links add a painted stroke arrow. Hover: underline repaints in 240 ms; focus-visible sindoor ring.
- **Icon button (incl. menu)**: 44 px round stencil disc (milk on forest), 2 px stencil glyph with bridges. Menu = three painted strokes → X. Hover second-coat sweep; focus sindoor ring; active pressed; disabled 35%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: milk sign-board bar 72 px (56 px mobile), gold pin-stripe bottom edge, logo left, links in stencil label type, RESERVE as a forest painted plate. Over the wall it stays an opaque board (never transparent text on wall). Mobile: menu opens a full-height chalk lime-wash sheet, links 36 px stencil, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default 14 px spray-nozzle ring in forest · hover short painted underline appears under the ring · ROTATE stencil-cut `DRAG` over the bottle · EXPLORE ring 44 px + `LOOK` stencil on walls · ENTER `OPEN →` over painted doors · VIEW `VIEW` over posters · TRACE crosshair with painted dot over route nodes. No painting trail by default (opt-in toy on /jodhpur only, auto-clears 4 s). Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: sign-board panel: milk ground, 2 px gold pin-stripe inset, radius 4 px, padding 28 px, ±1.5° rotation desktop; poster variant: photo with 2 px white border and lifted corner. Hover (interactive): lifts 2 px, shadow deepens. Text only on boards.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: stencil tag: Big Shoulders Stencil Text 600 11 px upper, 24 px tall, 1 px border. Pending verification: claim keeps a dotted gold underline + `PENDING` tag (forest outline, ink text). DEMO · not live data: sindoor plate, milk text, always visible on the route map and lookup.
- **Input + form field (Trace-your-milk bottle ID)**: painted sign "enter your bottle number" above a real input on a milk board: 56 px, 2 px forest border, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`. States: hover border green · focus-visible sindoor ring 3 px · error `#B3202A` border + message · disabled 35% · loading painted dots. Visible `<label>`, DEMO tag beside it.
- **Divider / ornament**: a hand-painted single brush stroke (SVG, 3 px, forest) with a small stencil bottle silhouette at one end; on walls, a gold pin-stripe double line.
- **Section header (chapter number + title pattern)**: stencil chapter number on a small house-number circle (`05`) + painted headline that paints in stroke by stroke (700 ms per stroke) + one Fraunces sentence on a milk board.
- **Product info block (variant name, code, price-pending, size, descriptors)**: milk sign board: name hand-lettered (only element painted), V-CODE mono, size `1 L glass · 900 g` + price from `desigo.ts` each with dotted pending underline, descriptors in Inter Tight with pending marks, CTA plate `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: the bottle never touches paint: it stands in front of the wall on a real contact shadow (ellipse `rgba(23,25,24,.35)` blur 20 px), a soft wall shadow cast up-left, and a forest stencil echo of the bottle offset 24 px behind. Tilt ±8°; Bottle360Viewer uses the clean render on a milk panel.
- **Trace node / timeline step**: route node = stencil-cut circle (16 px) on chalk lines; pulse = a painted dot moving along the route. Timeline step = date painted like a house number on a door. States idle · hover circle fills green · focus-visible sindoor ring · active panel opens on a sign board · pending dashed outline. `<button>` nodes, keyboard order follows the route.

### 12.5 Iconography & illustration
- Icons: stencil-cut, 24 px grid, 2 px bridges, filled forest on milk; arrows are single painted strokes. Seven verbs as stencils.
- Illustration: commissioned sign-painter lettering and a credited Rajasthani folk mural (heritage); one-colour stencil of the bottle silhouette as a motif.
- Photography: real DESIGO® photos as wheat-paste posters (2 px white border, lifted corner), untreated; no faces without consent; nothing painted over photos.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 600 / 1200 ms | hover · reveals · scenes |
| `--gf-paint` | 700 ms per stroke, `cubic-bezier(.33,0,.15,1)` | lettering paint-in (stroke-dashoffset) |
| `--gf-paste` | 500 ms scale 1.03 → 1 + corner flip 240 ms | poster paste-in |
| `--gf-coat` | 300 ms | second-coat hover sweep |
| `--gf-roller` | 900 ms, ease-inout, 120 px band | roller wipe between walls |

- Signature: the roller wipe (fresh lime wash sweeping across) between walls; lettering paints in the brush order of the commissioned SVG.
- One painted reveal per viewport; no spray particles, no drips animating.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: lettering appears complete, no roller, posters without corner flip.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *Jodhpur Blue City street-wall aesthetic, indigo lime wash #5B86B5 and #2F5A88, milk white #F7F4EC, deep forest #0B3B32, gold pin-stripe #C8A96B, late-afternoon sun from the upper right, clean and hygienic, hand-crafted sign-painting tradition, calm, premium, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/graffiti/hero-landscape.png` | 3200×2000 (16:10) | no | Sunlit indigo-blue lime-washed wall in an old Jodhpur lane, soft late-afternoon light from the upper right, layered lime-wash texture, a stone doorstep and a strip of lane at the bottom, large empty clean wall in the centre | graffiti tags, spray cans, drips, posters with writing, rubbish, people, vandalism | Hero (ch. 01), /jodhpur |
| 2 | `web/public/desigo/styles/graffiti/hero-portrait.png` | 1400×2400 (7:12) | no | Tall view of an indigo-blue lime-washed Jodhpur wall with a stone step at the bottom, soft side light, empty clean centre | graffiti tags, spray cans, drips, people | Hero mobile |
| 3 | `web/public/desigo/styles/graffiti/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Deep bottle-green #1F5C45 painted wooden door set in an indigo-blue lime-washed wall, a thin hand-painted gold pin-stripe border around the frame, a stencilled herb-leaf border pattern, soft light, empty space in front of the door | graffiti tags, drips, padlocks, rust | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/graffiti/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Red-oxide #B3202A painted shop shutter in a blue lime-washed wall, a milk-white scalloped truck-art style border painted along the top, warm side light, clean | graffiti tags, rust stains, drips, blood-like streaks | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/graffiti/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Wall freshly washed in haldi amber #E89A1C lime wash, a simple empty painted circle like a house-number plate, warm morning light, clean plaster | numbers, graffiti tags, drips, stains | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/graffiti/world-essential.png` | 3200×2000 + 1400×2400 crop | no | Fresh ivory #F4EDE2 lime-washed wall, perfectly clean, soft diffuse daylight, a small stone step at the base, minimal and calm | graffiti, stains, cracks, drips | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/graffiti/trace-route.png` | 3000×2000 | yes (real alpha) | Hand-painted route diagram of chalk-white brush lines connecting small stencil-cut circles from scattered points into one hub, painterly but tidy, isolated on transparent background | labels, arrows with words, map borders, drips | Traceability ch. 06, /trace (PaintedRouteMap) |
| 8 | `web/public/desigo/styles/graffiti/journey-lane.png` | 3600×1200 (3:1) | no | Long horizontal sunlit lane wall in Jodhpur blue with seven evenly spaced blank pale painted panels like empty shop signboards, a single thin milk-white painted line along the base of the wall | writing on panels, graffiti tags, people, vehicles | Cow → bottle ch. 03 (LaneTrack) |
| 9 | `web/public/desigo/styles/graffiti/texture-limewash.png` | 2400×2400, seamless | no | Seamless tileable texture of indigo-blue lime wash on old plaster, subtle brush marks, faint chalky patches, flat even light, top-down | graffiti, cracks, stains, vignette, shadows | WallScene background |
| 10 | `web/public/desigo/styles/graffiti/heritage-mandana.png` | 3200×2000 | no | Rajasthani folk wall painting in the mandana tradition, white lime geometric patterns on a red-ochre earth wall, a respectful zebu cow motif with hump and curved horns at the centre, symmetrical, hand-made (prototype placeholder for the commissioned, credited mural) | cartoon cow, religious idols, graffiti, modern objects | Heritage ch. 10 (placeholder) |
| 11 | `web/public/desigo/styles/graffiti/ghee-haldi-wall.png` | 3200×2000 | no | Warm haldi-yellow lime-washed wall with a simple painted wooden shelf, soft dusk light, empty shelf centre, clean | jars, pots on shelf, graffiti, drips | Ghee ch. 12, /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/26_graffiti.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/graffiti/
- [ ] Paint never touches the bottle, milk or the Quality chapter
- [ ] Every SVG lettering has an `aria-label` with the real text
