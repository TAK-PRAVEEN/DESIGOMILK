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
