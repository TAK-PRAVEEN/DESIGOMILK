# 40 · Cutaway World — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Cutaway World is the **isometric diorama shown in section**: a building, a machine or a whole landscape sliced open so you can see inside every room and pipe at once, drawn in a fixed isometric (or dimetric) projection with no perspective distortion. It joins two traditions: technical cutaway drawing (engineering and museum illustration) and the miniature-world look of isometric game art and editorial explainers. It invites exploration: you pan, zoom and click into small rooms where something is happening.

For DESIGO® the diorama is **one continuous world, sliced along the milk's journey**: farm, collection, chiller, transport, plant, bottling, delivery and home. It is shown as a long cross-section the camera travels along, with the milk visible as a white line running through everything. It is the most literal way to show "traceable".

Reference points:
1. **Stephen Biesty's *Incredible Cross-Sections*** (1992): the canonical cutaway, dense, accurate and full of small human stories.
2. **Isometric explainer illustration** (Monument Valley's clarity; editorial isometrics by Kurzgesagt-adjacent studios; Apple's Environment progress-report dioramas): clean, colour-coded systems.
3. **Museum section models**: the physical cut-open building model, quiet and precise.

## 2. Fit for DESIGO® — score 4 / 5

**Why it fits.** DESIGO®'s core promise is a journey that can be followed: ORIGIN, TRACE, TEST, CHILL, PROCESS, FILL and DELIVER. A cutaway shows every step at once *and* lets the visitor zoom in on any one. It explains the system to everyone, from families to investors, without claims, through drawing. It gives the "interactive 3D exhibition" part of the brief a strong, original centrepiece. It also solves the lack of real plant photography for now, *as long as the drawing is honest*.

**Where it fights.** (1) Accuracy: a cutaway that invents equipment, processes or capacities is a claim. Every room must be checked with DESIGO® operations. (2) Internal system details (the internal monitoring system's components, device names, data flows) must not be drawn. (3) Isometric worlds can look like a game or a SaaS landing page if the palette and detail level are wrong. (4) It is illustration-heavy and costly to produce well.

**Recommendation.** Strong candidate for **chapter 03 (cow to bottle)**, **chapter 06 (traceability)**, **/technology** and **/trace**. Pair it with an Editorial or Minimalism base for the product and brand chapters.

## 3. Art direction

### Palette ("section drawing")
| Token | Hex | Role |
|---|---|---|
| `--cw-milk` | `#F7F4EC` | Page ground and the milk line |
| `--cw-section` | `#EFE9DC` | Cut faces of walls and ground (the "hatched" plane) |
| `--cw-hatch` | `#D9CFBA` | Section hatch lines |
| `--cw-soil` | `#8C6A43` | Ground strata |
| `--cw-soil-deep` | `#5E4529` | Deep strata |
| `--cw-sand` | `#E3D2B0` | Thar sand surface |
| `--cw-leaf` | `#4F8A6E` | Grass, trees (a muted DESIGO green) |
| `--cw-green` | `#1E7A68` | Interactive hotspots, active room |
| `--cw-forest` | `#0B3B32` | Line work, labels, night version |
| `--cw-steel` | `#BFC6C3` | Steel cans, chiller, tanks |
| `--cw-cold` | `#CFE3E6` | Cold zones (chiller, cold van) as a pale tint |
| `--cw-gold` | `#C8A96B` | Sunlight, ghee room |
| `--cw-ink` | `#171918` | Text |
| `--cw-ink-muted` | `#5C5A52` | Muted text, station counts (6.3:1 on milk) |

The cold-chain zones are tinted `--cw-cold` so "chilled" can be read across the whole diorama at a glance.

### Typography
- Display: **Fraunces** 400, opsz 96, for chapter titles above the diorama.
- Callouts and room labels: **IBM Plex Sans Condensed** (OFL) 500, uppercase +0.12em, 12–13px, in `--cw-forest`, with a 1px leader line to the object, as on a technical drawing.
- Text: **Inter Tight** 400, 16px.
- Data and IDs: **IBM Plex Mono** (OFL) for DEMO IDs, temperatures (only illustrative and labelled) and node codes.

### Texture and imagery
- **Projection:** true isometric (30°/30°, 120° between axes) for the vector diorama. All objects share one light direction (top-left, 45°) with exactly two shade tones per material (light face, dark face) plus the section face.
- **Section faces:** every cut surface is `--cw-section` with 45° hatch lines in `--cw-hatch` at 6px spacing, which immediately says "this is a cut".
- **Detail level:** "Biesty-light": enough to tell a story (a person checking a test card, a can being poured, a van door open), not so much that it becomes busy. People are simple, respectful figures without faces, dressed accurately for rural Rajasthan and for plant hygiene (caps, gloves in the plant).
- **Cows:** small but anatomically zebu (hump, dewlap, ears), never cartoon.
- **Milk line:** a 3px milk-white line with a 1px `--cw-forest` 30% outline, running through cans, pipes and bottles across the entire world.
- **Photography:** real photos appear in pop-up "lenses" when a room is opened, showing the real thing behind the drawing (or an `AssetSlot` saying which photo is needed).

### Iconography
Isometric mini-icons (cube-based, 1.25px forest line, two-tone fill) for the seven verbs.

### Grid
The diorama lives on an **isometric grid with a 32px unit**. Page text follows a 12-column grid. The diorama is a long horizontal strip about 8 screens wide on desktop, divided into eight **stations** that match the `traceNodes` (farm, collection, batch, chiller, barrel, plant, bottle, you). Callouts snap to the 12-column grid above or below the strip, never over the drawing's key action.

## 4. Motion & interaction language
- **Camera.** Orthographic. Scroll pans the camera along the strip (scrubbed, `scrub: 1`), with a 600ms `cubic-bezier(.22,.9,.24,1)` settle at each station. Zoom into a room: 900ms `cubic-bezier(.65,0,.35,1)`, scale 1 → 2.4, centred on the room.
- **Life.** Small loops (2–4s, linear or `ease-in-out`): a tail flick, a van wheel, the chiller's cold shimmer, the milk line's slow flow (dash offset 40px/s). All loops pause when off-screen.
- **Section reveal.** On entering a station, its front wall "lifts away" (translateY −40px, opacity 1 → 0, 500ms) to show the cut, as a museum model's lid would lift.
- **Cursor.** Default: a 16px forest ring. Over a hotspot room: the ring becomes a small isometric cube outline with the room name (Plex Condensed). Over the diorama background: a grab hand (drag to pan on desktop). Over the bottle in the home room: "drag · turn". During zoom: the cursor hides.
- **Hover.** Rooms highlight with a 2px `--cw-green` outline that traces the room's edges (240ms) and a soft lift (2px). Leader lines draw from the label to the object (300ms).
- **Keyboard.** Arrow keys move station to station; Enter opens a room; Esc closes.
- **Reduced motion.** No camera travel: stations become a vertical list of static cutaway panels, and loops are off.

### The bottle
The real bottle render is **never drawn in isometric**. Inside the diorama, the bottling room shows small, simple glass bottle shapes (clearly illustration, no label). At the **home station**, the camera stops and the real product render rises out of the drawing into the foreground in true perspective: 900ms, scale 0.3 → 1, with the isometric world blurring 6px behind it. This is the signature moment: "from the drawing to the real thing". The bottle then floats ±8px over 6s with ±6° pointer tilt and becomes the 360 viewer when frames exist.

## 5. Variant worlds — four slices

Each variant gets its own cutaway "slice" of the world, focused on what differs (feed and setting), drawn in the same projection.

| Variant | Slice | Palette shift | Room highlights | Notes |
|---|---|---|---|---|
| MASTER 26 (V1+) | A grazing landscape with a tree canopy cut in section, roots and soil visible | Greens `#1F5C45`, `#0A2A20`, light `#D9E8DF` | Herb-feed store room ("26 herbs", *pending*), extended cold-chain van ("prime service", *pending*) | Richest slice |
| ROOT 14 (V1) | Red-earth slice: stepped strata `#B3202A` to `#4A0A0F` under open grazing | Earth reds, light `#F3D9D6` | Herb-feed store ("14 herbs", *pending*) and open grazing | Strata as the signature |
| BASE 3 (V2) | A golden field slice with a low sun | Ambers `#E89A1C`, `#5A3304`, light `#F8E4C2` | Feed room (herb count *to be confirmed*) | Warm, everyday |
| ESSENTIAL (V3) | The simplest slice: one shed, one field, one path | Ivory `#F4EDE2`, `#CDB89A`, `#4D4130` | Balanced-diet feed room (*pending*) | Fewest objects |

In every slice, the variant's real bottle rises out at the end, with the info panel (V-CODE, name, `line`, price *pending*, descriptors *pending*) to the right.

## 6. Page-by-page treatment

1. **Hero.** Milk ground. A small, beautiful isometric "island" (farm, chiller, plant and home on one floating block of ground, cut in section underneath to show soil strata) sits behind and below the real bottle, which floats in front at full size. "MILK FROM THE SOURCE." and "Traceable milk from indigenous Indian cows." The island turns very slowly (±4° on the vertical axis, pointer-driven).
2. **The bottle becomes the story.** The bottle stays pinned; the island behind it opens, and each of the six words lights the part of the island it refers to (BREED: the cows; FEED: the feed store; QUALITY: the test card; TRACE: the milk line).
3. **From cow to bottle.** **The centrepiece**: the full horizontal cutaway strip, seven stations, the milk line running through. Each station opens on click to show the room with a real photo lens.
4. **Where it begins.** Zoom into the farm section: grazing, the shed, the khejri tree, soil strata. Real farm photos in lenses. `AssetSlot`s name what is missing.
5. **Breeds.** Breaks the isometric for respect: natural-history plates of the six breeds, with small isometric "home region" map tiles beside each one. All marked *pending approval*.
6. **Traceability.** The diorama at **night** (forest ground, cold zones glowing `--cw-cold`). The eight `traceNodes` become hotspots; the pulse travels the milk line at 1.5s per hop. "Illustrative journey, not live data".
7. **Quality.** Zoom into the test room: a person with the paper test card (16 spots), then a flat Swiss-style panel with the 16 parameters. Values "— pending lab confirmation". Only tests DESIGO® confirms are drawn.
8. **The four milks.** §5 slices.
9. **Milk as material.** The milk line leaves the diorama and becomes a real milk ribbon (B2/B3) pouring across the screen.
10. **Heritage.** A different cut: a **section through a traditional Rajasthani home** with a matka, a bilona churn and a courtyard, in sepia line. Approved heritage copy.
11. **Technology.** A cutaway of the *journey*, not of systems: seven verbs as seven rooms. Data is shown only as a public idea (an ID tag travelling with the milk). No hardware internals or software architecture. "Tradition is the source. Technology protects the journey."
12. **Ghee.** A cutaway of the bilona kitchen: churning, butter, slow heating, the jar. Three grades linked to their milks; prices *pending*.
13. **Trace your milk.** Enter the demo bottle ID: the camera flies backwards through the diorama from home to farm, each station lighting in turn. DEMO badge.
14. **Story.** A small isometric timeline of the company; only verified 2019 in production.
15. **Final CTA.** Zoom out to the whole island, and the real bottle rises once more. "Know where your milk comes from."

### Inner pages
- **/milk**: four small slices in a 2×2 grid, each with its bottle.
- **/milk/[variant]**: the variant slice as hero, then the 360 viewer, facts and "Trace this bottle".
- **/ghee**: the bilona kitchen cutaway with five steps.
- **/origin**: farm section plus photo essays.
- **/trace**: the full night diorama, explorable.
- **/technology**: the seven-room cutaway.
- **/about**: a calm editorial page with one small island illustration.
- **/reserve**: a home-station cutaway (doorstep, glass bottles going back into the van), then the form. The return loop is drawn as the van's route.

## 7. Component variants
`IsoWorld` (pan/zoom orthographic container) · `IsoStation` (room with lift-away wall, hotspot, lens) · `SectionHatch` · `MilkLine` (flowing path) · `PhotoLens` (real-photo pop-up / AssetSlot) · `RiseBottle` (drawing to real render transition) · `IsoIsland` (hero) · `NightDiorama` (TraceMap) · `VariantSlice` · `LeaderCallout` · `CubeCursor` · `StationNav` (keyboard and dot navigation).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Section palette, projection rules | Tokens, iso style guide (light, faces, hatch) | Two tones per material; callouts ≥ 12px | none | 3 |
| 2 | Shell (nav, footer, cursor) | Grid, cube cursor, station nav | Shell components | Keyboard station navigation | none | 3 |
| 3 | Hero + bottle | Island + real bottle in front | `IsoIsland`, hero | Island ≤ 400 KB; bottle never iso-drawn | Bottle renders | 4 |
| 4 | Bottle → story | Words light island parts | Chapter 02 | Each highlight readable without colour alone | Copy | 3 |
| 5 | Cow → bottle | Full cutaway strip | `IsoWorld`, `IsoStation` ×7 | **Ops review of every room signed off** | Ops walkthrough, reference photos | 6 |
| 6 | Origin / farm | Farm section + lenses | Chapter 04 | Lenses show real photos or named AssetSlots | Farm photos | 3 |
| 7 | Breeds | Plates + region tiles | Chapter 05 | Pending labels | D1–D6 | 2 |
| 8 | Traceability map | Night diorama | `NightDiorama` | Eight nodes match `traceNodes`; DEMO label | `traceNodes` | 5 |
| 9 | Quality | Test room | Chapter 07 | Only confirmed tests drawn | Lab approval | 3 |
| 10 | Four worlds + 360 | Four slices + rise | `VariantSlice` ×4 | Feed rooms show pending claims only | A, ops review | 5 |
| 11 | Heritage | Traditional home section | Chapter 10 | Cultural accuracy check | Reference photos | 2 |
| 12 | Technology | Seven-room journey | Chapter 11 | No internal systems, devices or architecture drawn | Ops/legal review | 4 |
| 13 | Ghee | Bilona kitchen | Chapter 12 | Process matches DESIGO®'s real method | Ghee process walkthrough | 3 |
| 14 | Trace-your-milk demo | Reverse fly-through | Chapter 13 | DEMO visible; reduced-motion list version | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Slice hero loads lazily; viewer works | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Explorable diorama with keyboard | Ops sign-off | 5 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Return loop accurate to service rules | Reserve rules | 3 |
| 18 | Mobile pass | Vertical stations | Mobile layouts | Stations stacked; pinch-zoom on lens only | none | 3 |
| 19 | A11y + reduced motion | Static panels | Text alternatives per room | Every room has a text description | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover, source files | Strip tiles lazy-loaded; LCP < 2.5s; INP < 200ms | all | 4 |

Total ≈ 70 days (illustration production runs in parallel from phase 1).

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- **An operations walkthrough** (video call or visit) of a farm, collection point, chiller, plant and delivery, with reference photos, so the illustrator draws what actually exists.
- Written sign-off on each station drawing by DESIGO® operations, plus a list of what must *not* be shown (internal systems, security-sensitive layouts).
- Real photographs for every lens (or named AssetSlots until they arrive).
- An isometric illustrator (or a 3D artist for a GLB version) on a 4–5 week production schedule.

### Images to generate (illustration only, for concept and mood; final diorama is drawn by an illustrator; save under `web/public/desigo/styles/cutaway-world/`)
Append the house-style tail. No text, no labels, no logos, no brand bottles.

| # | File | Size | Prompt |
|---|---|---|---|
| CW1 | `hero-island.png` (transparent) | 3000×2400 | Isometric floating island diorama cut in cross-section, showing a small Rajasthani farm with zebu cows and a khejri tree, a small steel milk chiller room, a clean small dairy plant and a simple home, soil strata visible in the cut underside with hatch lines, muted milk white, earth brown and forest green, precise clean vector illustration, transparent background |
| CW2 | `strip-concept.png` | 6000×1600 | Long horizontal isometric cutaway cross-section showing a continuous milk journey from farm to collection point to chiller to transport van to dairy plant to bottling room to a home doorstep, a thin white line running through all rooms, small faceless respectful figures, clean editorial vector style, pale section hatching |
| CW3 | `night-diorama.png` | 6000×1600 | The same long isometric cutaway at night in deep forest green #0B3B32, cold rooms softly tinted pale ice blue, a glowing milk-white line connecting eight rooms, calm and precise |
| CW4 | `slice-master-26.png` | 3200×2000 | Isometric cross-section slice of a grazing landscape with a tree canopy and visible roots and soil, deep bottle greens #1F5C45 and #0A2A20, a small feed store room, clean vector, empty space at right |
| CW5 | `slice-root-14.png` | 3200×2000 | Isometric cross-section slice of red earth strata in crimson #B3202A to oxblood #4A0A0F under open grazing land, clean vector, empty space at right |
| CW6 | `slice-base-3.png` | 3200×2000 | Isometric cross-section slice of a golden wheat field with a low sun, amber #E89A1C and brown #5A3304, clean vector, empty space at right |
| CW7 | `slice-essential.png` | 3200×2000 | Minimal isometric cross-section slice with one shed, one field and one path in ivory #F4EDE2 and taupe #4D4130, very few objects, clean vector, empty space at right |
| CW8 | `heritage-home.png` | 3200×2000 | Isometric cutaway of a traditional Rajasthani village home with a courtyard, an earthen matka and a wooden bilona churn, sepia line drawing with light wash, respectful, no people's faces |

## 10. Performance, accessibility and mobile
- The strip is split into station tiles (AVIF, about 1600px each at 2× density) loaded one station ahead. Hotspots and the milk line are SVG on top, so they stay sharp and accessible.
- Optional GLB version (orthographic Three.js) only after the 2D version ships; budget ≤ 3 MB, Draco-compressed, lazy.
- Every station has a heading and a text description; hotspots are real `<button>`s in reading order.
- Reduced motion: vertical static panels, no camera travel, no loops.
- Mobile: stations stack vertically, each a square cutaway crop; the milk line runs down the page; lenses open as bottom sheets.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **Draw only what exists.** Every room is checked against reality and signed off. Unknowns are drawn as simple closed boxes with an "awaiting confirmation" label, never invented.
2. **No internal systems.** No internal monitoring-system components (its name is never shown), sensors, screens, network diagrams or device names. The public story is the seven verbs.
3. **The real bottle is never isometric.** It always rises out of the drawing as the real render.
4. Muted section palette, one light direction and two tones per material. No candy colours and no game UI.
5. People and cows are drawn with dignity: no cartoon faces, no comic poses, accurate dress and hygiene.
6. Illustrative numbers (temperatures, quantities) appear only inside DEMO contexts and are labelled.
7. Real photographs (lenses) sit beside the drawing to keep the illustration honest.

**Risks**: accidental claims, a game-like or SaaS look, production cost and time. Mitigation: ops sign-off as an acceptance criterion, the restrained palette, the illustrator started in phase 1, and a 2D-first build.

**Best used for:** chapter 03 (cow to bottle), chapter 06 (traceability), Trace-your-milk, /technology and /trace: the explaining backbone of the site.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: projection rules, palette and type were complete. Missing: muted, pending and DEMO tokens, radius/shadow scale, component states, a portrait hero, a texture prompt and negatives. Added. Fixed: the internal system name in §2 and §11 replaced by "internal monitoring system" (the name is never shown); image folder `styles/cutaway/` → `styles/cutaway-world/`. IBM Plex Sans Condensed / Plex Mono confirmed OFL.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#1E7A68` | DESIGO green: hotspots, active room outline, primary CTA | 4.7:1 on bg; interactive hotspots, active room, primary CTA |
| Primary ink | --c-on-primary | `#F7F4EC` | Milk label on a green fill | 4.7:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | Forest: line work, labels, leader lines, night ground | 11.3:1 on bg |
| Accent | --c-accent | `#CFE3E6` | Cold-zone tint so "chilled" reads across the diorama | 1.2:1 on bg; cold-chain tint, fill only (chiller, cold van, cold zones); never text |
| Background | --c-bg | `#F7F4EC` | Milk page ground and the milk line (`--cw-milk`) | — |
| Surface | --c-surface | `#EFE9DC` | Section faces of walls and ground (`--cw-section`), callout panels | text on surface 14.6:1 |
| Text | --c-text | `#171918` | Ink (`--cw-ink`) | 16.1:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions, station counts (new token `--cw-ink-muted`) | 6.3:1 on bg, 5.7:1 on surface |
| Line | --c-line | `rgba(11,59,50,.30)` | Leader lines and rules; section hatch is `#D9CFBA` | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#0B3B32` | Verified / pending dotted underline + "awaiting confirmation" closed box / forest DEMO tag | 7.1 / 7.1 / 11.3 :1 on `#F7F4EC` |

Focus ring: `--c-focus` `#0B3B32` (11.3:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Grazing slice with canopy cut in section, roots and soil; herb-feed store (26 herbs *pending*), cold-chain van (*pending*) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | Red-earth strata `#B3202A` → `#4A0A0F` under open grazing; herb-feed store (14 herbs *pending*) |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | Golden field slice with a low sun; feed room (herb count *to be confirmed*) |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | Simplest slice: one shed, one field, one path; balanced-diet feed room (*pending*) |

Dark-chapter inversion: the Traceability night diorama and /trace use forest `#0B3B32` as ground; text `#F7F4EC` (11.3:1), muted `#B9C4BE`, line work `rgba(247,244,236,.22)`, cold zones glow `#CFE3E6`, hotspots switch from green to `#CFE3E6` outlines, focus `#CFE3E6`; the milk line stays milk-white; the logo loop renders white.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400, opsz 96 | clamp(2.75rem, 1.4rem + 5.5vw, 7rem) | 0.98 | −0.01em | UPPERCASE (hero), sentence elsewhere |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400, opsz 72 | H1 clamp(2.25rem, 1.5rem + 3vw, 4.5rem) · H2 clamp(1.6rem, 1.2rem + 1.6vw, 2.5rem) | 1.05 | 0 | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | 1rem (16 px) | 1.65 | 0 | Sentence |
| Label / UI | IBM Plex Sans Condensed | `@fontsource/ibm-plex-sans-condensed` (Google Fonts) | 500 / 600 | 0.75–0.8125rem (12–13 px) | 1.3 | +0.12em | UPPERCASE |
| Data / mono | IBM Plex Mono | `@fontsource/ibm-plex-mono` (Google Fonts) | 400 / 500 | 0.8125rem | 1.5 | 0 | As data |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` (Google Fonts) | 400 / 500 | matches body | 1.7 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Pairing rationale: condensed Plex labels with leader lines read as a technical drawing; Fraunces adds warmth to chapter titles so the site never feels like SaaS.

### 12.3 Layout & surfaces
- **Grid:** page text on 12 columns (gutter 24 px, 16 px mobile), margins 6vw, max-width 1440 px; the diorama on a true isometric grid (30°/30°, 32 px unit), a strip about 8 screens wide divided into eight stations matching `traceNodes`; callouts snap to the 12-column grid above or below the strip
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Radius scale:** sm 0 px (technical frames, inputs) · md 4 px (photo lenses, panels) · lg 999 px (hotspot rings, cursor)
- **Border style:** 1 px forest leader lines and frames with 6 px end ticks; section faces `#EFE9DC` with 45° hatch `#D9CFBA` at 6 px spacing
- **Shadow / elevation:** diorama objects use two tones per material and no drop shadows; photo lenses `0 12px 32px rgba(11,59,50,.18)`; the rising bottle gets a real contact shadow with the world blurred 6 px behind
- **Texture / overlay:** no grain; the only texture is section hatching; station tiles AVIF ~1600 px, hotspots and milk line as SVG on top

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Green label (IBM Plex Sans Condensed 600, 14 px, +0.12em, uppercase) with a 1 px underline and travelling arrow; 48 px tall, padding 14 px 0. **States:** default green label + underline · hover a 1 px frame with corner ticks draws itself around the label (400 ms), arrow +6 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active frame fills forest, label turns milk · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading a small isometric cube outline rotates beside the label, `aria-busy`. **Motion:** 240 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Forest label, same type, 1 px hairline + arrow. **States:** default forest label · hover hairline traces left → right (240 ms) and gets an end tick · focus-visible 2 px `#0B3B32` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading cube loader. **Motion:** 240 ms. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Forest body link with 1 px underline; arrow links end in →. **States:** default forest + hairline · hover underline draws like a leader line with a 6 px end tick · focus-visible 2 px `#0B3B32` ring, 3 px offset · active green · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 240 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px square hit area, 1.25 px forest isometric icon with two-tone fill; menu icon = three isometric lines. **States:** default icon · hover a cube outline traces around it (240 ms) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active scale 0.96 · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 240 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 64 px milk bar with a 1 px forest rule beneath; links Plex Condensed 500 13 px uppercase; RESERVE as a primary text button; inside the diorama a StationNav dot rail (8 dots) appears at the bottom. Mobile: menu sheet on milk with a small isometric map of the stations above the link list. **States:** default forest links · hover leader-line underline · focus-visible 2 px `#0B3B32` ring, 3 px offset · active current page: green 2 px underline · disabled n/a · loading n/a. **Motion:** sheet slides 600 ms `--ease-inout`. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 16 px forest ring; labels IBM Plex Sans Condensed 500 11 px uppercase; hidden during camera zoom. **States:** default 16 px forest ring · hover ring grows to 28 px over links · ROTATE "drag · turn" over the real bottle at the home station · EXPLORE grab hand over the diorama background (drag to pan on desktop) · ENTER small isometric cube outline with the room name over a hotspot room · VIEW 48 px lens ring reading "view photo" over a PhotoLens · TRACE cube with a milk-line dot reading "trace". **Touch fallback:** no cursor; swipe pans station to station with snap; pinch-zoom only inside lenses; hotspots are visible buttons; Arrow keys / Enter / Esc on keyboard. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — LeaderCallout: Plex Condensed 12–13 px label with a 1 px leader to its object; PhotoLens: 4:3 popup (bottom sheet on mobile) with the real photo, caption and source, radius 4 px, lens shadow. **States:** default callout · hover leader line and room outline highlight · focus-visible 2 px `#0B3B32` ring, 3 px offset · active lens opens 500 ms · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading lens shows an `AssetSlot` naming the photo still needed. **Motion:** 500 ms `--ease-out`. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Technical tag: 1 px forest rectangle, Plex Condensed 600 11 px uppercase. **Pending verification**: earth-ink label + dotted underline; unknown rooms drawn as closed boxes tagged "awaiting confirmation". **DEMO · not live data**: forest fill with milk text, pinned top-left of the night diorama and on every Trace-your-milk result; illustrative numbers appear only beside it. **States:** default tag · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** fades in 240 ms. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — 56 px field with a 1 px forest frame and corner ticks like a drawing border, radius 0; bottle ID in IBM Plex Mono 18 px; label above in Plex Condensed; demo ID prefilled; error in earth-ink + icon. **States:** default framed field · hover frame darkens · focus-visible 2 px `#0B3B32` ring, 3 px offset · active 2 px green frame · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the camera flies backwards from home to farm, each station lighting in turn (600 ms per station). **Motion:** fly-through 600 ms/station. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — a 12 px band of 45° section hatching (`#D9CFBA` on `#EFE9DC`) between sections, or a 1 px forest rule with end ticks. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** none. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Plex Condensed label ("03 — FROM COW TO BOTTLE"), Fraunces title above the strip, station counter "Station 1 of 8" in Plex Mono. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** title settles 16 px in 500 ms. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — Info panel to the right of the variant slice: V-code (Plex Mono), name in Fraunces H2, the `desigo.ts` line, price *pending* (hidden in production), size, descriptors *pending*; feed-room callouts in the slice show pending claims only. **States:** default static · hover descriptor highlights its room in the slice · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton rules. **Motion:** rows settle 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — The real render is never isometric: at the home station it rises out of the drawing into true perspective (900 ms, scale 0.3 → 1) with the isometric world blurred 6 px behind and a contact shadow on milk. **States:** default idle float ±8 px over 6 s · hover pointer tilt ±6° · focus-visible 2 px `#0B3B32` ring, 3 px offset · active drag turns the 360 viewer · disabled n/a · loading static render + `AssetSlot`. **Motion:** rise 900 ms `--ease-inout`. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — Station hotspot: 20 px green ring over the room, which gains a 2 px green outline on hover; nodes are linked by the 3 px milk line with a 1 px forest 30% outline; label Plex Condensed + mono ID. **States:** default ring · hover room outline traces (240 ms) and lifts 2 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active the front wall lifts away (500 ms) and the room opens; pulse travels the milk line 1500 ms per hop · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading milk line flows (dash offset 40 px/s). **Motion:** hop 1500 ms. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** isometric mini-icons, cube-based, 1.25 px forest line with a two-tone fill, 24 px grid; one per journey verb
- **Illustration technique:** true isometric vector cutaway, one light from top-left 45°, two shade tones per material + hatched section faces; Biesty-light detail; faceless respectful figures in accurate dress and plant hygiene; anatomically zebu cows; drawn by a commissioned illustrator and signed off by DESIGO® operations
- **Photo treatment:** real photographs only inside PhotoLens popups, natural grade, 4:3 crop, captioned with what and where

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | UI, wall lift |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | zoom into a room, bottle rise |
| `--ease-settle` | `cubic-bezier(.22,.9,.24,1)` | camera settle at each station (signature) |
| `--dur-micro` | 240 ms | hover outlines |
| `--dur-reveal` | 500 ms | front-wall lift, lens open |
| `--dur-scene` | 900 ms | zoom (scale 1 → 2.4), bottle rise |
| `--settle` | 600 ms | station settle after scroll pan |
| `--loops` | 2–4 s linear, paused off-screen | tail flick, van wheel, chiller shimmer |
| `--milk-flow` | dash offset 40 px/s | milk line |
| `--hop` | 1500 ms | trace pulse |
| `--scrub` | 1 | camera pan |

- **Signature transition:** section reveal (a station's front wall lifts away like a museum model lid) and the drawing-to-real bottle rise at the home station
- **Scroll behaviour:** orthographic camera pans along the strip; arrow keys move station to station
- **Reduced-motion fallback:** no camera travel: stations become a vertical list of static cutaway panels; loops off; lenses open instantly

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _precise isometric cutaway illustration, true 30-degree isometric projection, one light from top-left, two tones per material and pale hatched section faces, muted palette of milk white #F7F4EC, section cream #EFE9DC, earth #8C6A43, leaf green #4F8A6E and forest line work #0B3B32, calm editorial vector, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| CW1 | `web/public/desigo/styles/cutaway-world/hero-island.png` | 3000×2400, transparent | Yes (real alpha) | Isometric floating island diorama cut in cross-section, showing a small Rajasthani farm with Indian zebu cows (hump, dewlap) and a khejri tree, a small steel milk chiller room, a clean small dairy plant and a simple home, soil strata visible in the cut underside with hatch lines, transparent background | perspective, game UI, candy colours, screens, sensors, bottle | Hero desktop |
| CW2 | `web/public/desigo/styles/cutaway-world/hero-island-portrait.png` | 1400×2400, transparent | Yes (real alpha) | Tall isometric island stacked vertically: farm on top, chiller and plant in the middle, a home at the bottom, cut section showing soil strata, transparent background | perspective, game UI, screens, bottle | Hero mobile |
| CW3 | `web/public/desigo/styles/cutaway-world/slice-master-26.png` | 3200×2000 + 1400×2400 | No | Isometric cross-section slice of a grazing landscape with a tree canopy and visible roots and soil, deep bottle greens #1F5C45 and #0A2A20, a small feed store room, empty space at right | labels, numbers, herbs counted, game style | MASTER 26 world |
| CW4 | `web/public/desigo/styles/cutaway-world/slice-root-14.png` | 3200×2000 + 1400×2400 | No | Isometric cross-section slice of red earth strata in crimson #B3202A to oxblood #4A0A0F under open grazing land, empty space at right | lava, game style | ROOT 14 world |
| CW5 | `web/public/desigo/styles/cutaway-world/slice-base-3.png` | 3200×2000 + 1400×2400 | No | Isometric cross-section slice of a golden wheat field with a low sun, amber #E89A1C and brown #5A3304, empty space at right | neon, game style | BASE 3 world |
| CW6 | `web/public/desigo/styles/cutaway-world/slice-essential.png` | 3200×2000 + 1400×2400 | No | Minimal isometric cross-section slice with one shed, one field and one path in ivory #F4EDE2 and taupe #4D4130, very few objects, empty space at right | clutter, people | ESSENTIAL world |
| CW7 | `web/public/desigo/styles/cutaway-world/strip-concept.png` | 6000×1600 | No | Long horizontal isometric cutaway showing a continuous milk journey from farm to collection point to chiller to transport van to dairy plant to bottling room to a home doorstep, a thin white line running through all rooms, small faceless respectful figures in caps and gloves inside the plant | screens, control panels, sensors, network diagrams, bottle labels, Holstein | Cow → bottle (ch. 03) concept for the illustrator |
| CW8 | `web/public/desigo/styles/cutaway-world/night-diorama.png` | 6000×1600 | No | The same long isometric cutaway at night in deep forest green #0B3B32, cold rooms softly tinted pale ice blue #CFE3E6, a glowing milk-white line connecting eight rooms, calm and precise | neon, screens, data dashboards | Traceability (ch. 06), /trace |
| CW9 | `web/public/desigo/styles/cutaway-world/section-hatch.png` | 1024×1024, seamless | No | Seamless pattern of fine 45-degree technical hatch lines in pale sand #D9CFBA on cream #EFE9DC, evenly spaced, flat | moiré, noise, shading | Section faces texture |
| CW10 | `web/public/desigo/styles/cutaway-world/heritage-home.png` | 3200×2000 | No | Isometric cutaway of a traditional Rajasthani village home with a courtyard, an earthen matka and a wooden bilona churn, sepia line drawing with light wash, respectful | people's faces, deities, shrines | Heritage (ch. 10) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/40_cutaway-world.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/cutaway-world/
- [ ] Every station drawing signed off by DESIGO® operations; nothing invented
- [ ] No internal systems, sensors, screens or device names drawn
- [ ] Every room has a heading and a text description; hotspots are real buttons in reading order
