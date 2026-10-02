# 11 — Claymorphism / Clay style · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 2 / 5 for the whole site** · Best used for: an explainer page for families and schools — "How your milk travels" (`/journey-for-kids` or an "Explain it simply" mode of chapter 03) — and the illustrated cow-to-bottle journey; not for product worlds.

---

## 1. Style essence

Claymorphism renders interface elements and illustrations as soft, inflated, clay-like 3D objects: rounded forms, double inner shadows (a light inner highlight top-left and a darker inner shadow bottom-right), a soft outer drop shadow, matte pastel colour and playful, toy-like proportions. Clay *style* extends this into whole 3D scenes that look sculpted from plasticine or ceramic clay.

Origins: Michal Malewicz's 2021 "claymorphism" articles; the popularity of Blender clay renders (2020 →), Aardman stop-motion (Wallace & Gromit, *Shaun the Sheep*), and Indian terracotta toy traditions.

Three reference points:
1. **Aardman Animations** — handmade clay, fingerprints visible, warmth and humour; *Shaun the Sheep*'s farm.
2. **Molela terracotta plaques (Rajasthan) and Bankura horses (West Bengal)** — the Indian clay tradition, earthy and folk.
3. **Clay 3D illustration in product UI** (e.g. Headspace, Duolingo 3D sets) — friendly onboarding through soft objects.

## 2. Why it fits DESIGO® (and where it fights)

The journey from cow to bottle is complex (collection, batch, chiller, barrel, plant, QR). A clay diorama can explain it simply and lovably to families and children, and clay connects to Rajasthani terracotta and the soil (*matti*) of the farms. Earthenware also echoes traditional *matka* milk pots and bilona churning pots — a real heritage link for ghee.

Where it fights: claymorphism is toy-like and casual; a premium glass bottle rendered as clay would lose its material truth and look like a children's product. Inflated UI cards conflict with the design system's flat, card-free principle. The premium brief ("Apple launch × luxury editorial") is hard to reach in clay.

**Fit score: 2 / 5 for the whole site.** Recommendation: use clay as an illustration language for one explainer experience (cow → farm → test → chill → plant → bottle → doorstep → glass returns), possibly as an "Explain it simply" toggle on chapter 03 and on /technology. The real bottle is never turned into clay. The full plan is still given.

## 3. Art direction

### Palette — "terracotta and milk"
| Token | Hex | Role |
|---|---|---|
| `--cl-milk` | `#F7F4EC` | Ground |
| `--cl-cream` | `#F1E7D3` | Clay surfaces (cards, platforms) |
| `--cl-terracotta` | `#C4704A` | Terracotta clay (soil, pots) — decorative only (3.3:1 on milk; ink on it 4.46:1) |
| `--cl-terracotta-deep` | `#8A4A2E` | Inner shadow tone |
| `--cl-sand` | `#E3C9A0` | Desert ground |
| `--cl-leaf` | `#5E9C7E` | Grass / leaves (soft tint of DESIGO® green) |
| `--cl-green` | `#1E7A68` | Buttons, links |
| `--cl-sky` | `#CFE3E6` | Sky (cool, CHILL) |
| `--cl-gold` | `#D9B877` | Ghee, sun |
| `--ink` | `#1E211F` | Text |
| Variant clay | MASTER 26 `#3F7D62` · ROOT 14 `#C9454B` · BASE 3 `#EDAA45` · ESSENTIAL `#DCCBB0` | Matte clay versions of cap colours (softened from `#1F5C45`, `#B3202A`, `#E89A1C`, `#CDB89A`) |

Clay shadow recipe: `inset 6px 6px 12px rgba(255,255,255,.55), inset -8px -8px 16px rgba(138,74,46,.18), 0 18px 36px rgba(30,33,31,.12)`; radius 32px (cards), 50% (tokens).

### Typography
- Display: **Bricolage Grotesque** 700, optical size 96 — rounded, characterful, not childish.
- Soft display alternative: **Fraunces** 600 with SOFT 100 (rounded serif terminals feel like clay).
- Text: **Inter Tight** 400/500 (keeps it adult and readable).
- Data: **JetBrains Mono** (rare in this style; used in the demo trace only).
- Devanagari: **Baloo 2** (rounded, Latin + Devanagari) for bilingual kids' labels, subject to approval.

### Texture
Matte clay with subtle fingerprint/tool marks (normal maps baked into renders), 2% grain, soft global illumination; no gloss — except the real glass bottle.

### Imagery
1. **Clay scenes**: commissioned Blender renders (or real hand-sculpted clay photographed — the premium option) of cows, farm, chiller, van, house; Rathi/Tharparkar/Gir-like cow figures must be respectful and anatomically recognisable (humps, dewlaps) without claiming specific breeds unless approved.
2. **Real product**: the actual bottle render placed *into* the clay scene, unaltered — a real object in a handmade world (like a real prop in a stop-motion set).
3. Real photographs appear elsewhere on the site, never clayified.

### Iconography
Small clay tokens (inflated 3D icons) for the seven verbs: pin (ORIGIN), thread (TRACE), flask (TEST), snowflake (CHILL), gear (PROCESS), bottle (FILL), house (DELIVER).

### Grid
12 columns, 5vw margins, 32px gutters; clay elements need breathing room (min 32px). Diorama chapters are full-viewport stages with an isometric-ish camera (30° elevation). Mobile: 4 columns, diorama scenes cropped to vertical framings (separate renders).

## 4. Motion & interaction language

- Soft and squishy — but the design system bans bounce and overshoot. Clay physics are expressed through **squash on press** (scale 0.96 × 1.03 over 120ms, return 280ms `cubic-bezier(.22,.9,.24,1)`) without overshoot.
- Stop-motion feel for scene animations: 12fps stepped animation (`steps()`) for cow walking, milk can travelling — a handmade charm that is also cheap to run.
- Scroll: the diorama camera pans through the journey (sprite sequences or a lightweight three.js scene with baked lighting).
- Cursor: a 20px clay ball (inflated shading); **link** → squashes slightly; **draggable** → grabbing hand in clay; **bottle** → clay ring `DRAG` / `TILT`; touch: off.
- Hover on clay cards: lift 6px, outer shadow deepens; press squashes.
- Page transitions: a clay curtain (rounded blob shape) rolls across, 700ms.

## 5. The hero bottle and the four variant worlds

**Presence.** In product moments the bottle is the real glass render on a clay plinth (terracotta disc with inner shadow) — a deliberate material contrast: handmade clay vs clear glass. Float ±6px / 6s; tilt ±5°. In the explainer, the same real bottle appears inside the clay diorama (e.g. on a clay doorstep).

**Rotation.** With 360 frames: drag rotates the real bottle; the clay plinth turns with it (a turntable, like a potter's wheel — a nice Indian craft echo). Without frames: ±18° tilt; plinth shows a "360° coming soon" clay tag.

**Variant worlds** — four small clay landscapes on turntables:
- **MASTER 26** — lush clay meadow with herb plants (generic, not counted), green clay hills `#3F7D62`, the bottle on a mossy plinth.
- **ROOT 14** — terracotta-red earth `#C9454B`/`#8A4A2E` with exposed clay roots.
- **BASE 3** — amber dunes `#EDAA45` at golden hour, clay sun.
- **ESSENTIAL** — ivory clay courtyard `#DCCBB0`, minimal, one tree.
Info panel: a flat (not inflated) text panel beside the diorama, V-code, name, line, descriptors with pending markers — information stays flat and adult.

## 6. Page-by-page treatment

### Home (if built in full)
| # | Chapter | Clay treatment |
|---|---|---|
| 01 | Hero | Real bottle on terracotta plinth; "Milk from the source." in Bricolage Grotesque; soft clay CTA buttons. |
| 02 | Bottle becomes the story | Six clay tokens orbit the bottle; each presses into a flat explanation card. |
| 03 | Cow to bottle | **Signature chapter**: a continuous clay diorama — cow, farm, collection, test, chiller, plant, bottle — the camera pans; a milk-white clay "river" runs through; real bottle appears at the end. |
| 04 | Where it begins | Real photography (no clay) — the explainer is illustration, origin is evidence. |
| 05 | Breeds | Real portraits; optional clay cow figurine as a decorative intro only. |
| 06 | Traceability | Clay map table: small clay nodes on a terracotta board connected by a thread; flat side panel with text; "Illustrative journey — not live data". |
| 07 | Quality | Flat lab panel (no clay) — 16 parameters; values pending. |
| 08 | Four milks | Four clay turntable worlds with the real bottle. |
| 09 | Milk as material | A clay-like milk wave (soft, rounded) rolling across, stop-motion. |
| 10 | Heritage | Terracotta relief tiles (Molela-inspired) of cows and farming; one sentence. |
| 11 | Technology | Seven clay tokens on a clay control board; "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | Clay bilona pot and churning stick (madhani) diorama; three real jar renders beside it, each linked to its milk. |
| 13 | Trace your milk | Flat console; results illustrated by small clay icons per step; DEMO label. |
| 14 | Story | Flat timeline with small clay milestone markers; verified only. |
| 15 | Final CTA | Clay doorstep at sunrise with the real bottle; "Know where your milk comes from." |

### Explainer page (recommended)
`/how-it-works` — "How your milk travels": nine clay scenes in sequence (cow · farm · collection · test · chill · plant · bottle · doorstep · glass returns), each with one simple sentence in the public vocabulary, a narration-free audio-optional design, and a final link to the real /trace page. Suitable for school visits and social sharing.

### Inner pages
- **/milk** — four turntables. **/milk/[variant]** — turntable + viewer + flat spec panel.
- **/ghee** — bilona clay diorama + real jars. **/origin** — real photography.
- **/trace** — clay map + console. **/technology** — clay control board.
- **/about** — flat timeline. **/reserve** — flat form with clay step tokens.

## 7. Component variants

`ClayCard` (used sparingly) · `ClayButton` (squash press) · `ClayToken` (verb icons) · `ClayPlinth` / `TurntableViewer` · `ClayDiorama` (scene sequence, sprite or three.js) · `ClayTraceBoard` · `StopMotionSprite` · `ClayCursor` · `ClayCurtainTransition` · `FlatInfoPanel` (information always flat) · `ClaimText` · `AssetSlot` (a clay placeholder block labelled with the missing asset).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Clay system | Clay shadow recipe, Bricolage/Inter Tight/Baloo 2, tokens | Text never on inflated surfaces below 4.5:1 | Brand colours | 2 |
| 2 | Shell | Nav, cursor, transitions | Flat nav, clay cursor, curtain | Press feedback ≤ 120ms; no overshoot | Wordmark | 3 |
| 3 | Hero | Real bottle on clay plinth | Plinth render, tilt | Bottle unaltered | Renders, plinth render | 3 |
| 4 | Story sequence | Clay tokens orbit | 6 tokens | Reduced motion = list | Token renders | 3 |
| 5 | Cow → bottle | Clay diorama | 7–9 scene renders/sprites, camera pan | Each scene ≤ 200 KB AVIF; vertical framings on mobile | **3D artist/sculptor (3–5 weeks)** | 8 |
| 6 | Origin | Real photo chapter | Photo layout | No clay over evidence | B1, B2 | 2 |
| 7 | Breeds | Real portraits | Portrait list | Pending visible | B3, approval | 2 |
| 8 | Trace map | Clay board | Nodes, thread, flat panel | DEMO label; keyboard | Trace wording | 4 |
| 9 | Quality | Flat lab panel | List | No values without approval | Lab approval | 1 |
| 10 | Four worlds + 360 | Turntable worlds | 4 dioramas, TurntableViewer | Bottle and turntable in sync | **360 sequences (A)**, 4 world renders | 6 |
| 11 | Heritage | Terracotta reliefs | Relief tiles | Folk motifs respectful, commissioned | Artist | 3 |
| 12 | Technology | Clay control board | 7 tokens | Public verbs | Token renders | 2 |
| 13 | Ghee | Bilona diorama | Pot + madhani scene, jars | Mapping correct | Jar cutouts | 3 |
| 14 | Trace demo | Console + clay icons | TraceYourMilk | Demo flagged | — | 2 |
| 15 | /milk pages | Turntables + variant pages | Pages | Viewer usable without dioramas loaded | A, pricing | 3 |
| 16 | /origin, /trace, /technology + /how-it-works | Inner + explainer | Explainer page | Explainer copy approved; plain-language | Return process confirmation | 6 |
| 17 | /about, /ghee, /reserve | Remaining | Pages | Form flat and usable | Milestones | 3 |
| 18 | Mobile pass | Vertical scenes | Mobile renders, reduced shadows | No horizontal scroll | Vertical renders | 4 |
| 19 | A11y + reduced motion | Calm clay | Static scenes, alt text describing each scene | axe clean | — | 2 |
| 20 | Perf, QA, handover | Ship | Sprite optimisation, docs | LCP ≤ 2.3s; diorama lazy | Approvals | 4 |

Total ≈ 66 days (+ clay/3D production in parallel).

## 9. Assets needed from DESIGO®

1. 360 sequences (A) — the real bottle must stand in the clay world.
2. Approval of the clay-illustration concept, especially of cow figures (respectful, natural, not caricatured).
3. Budget for a 3D artist (Blender clay renders) or, the premium path, a real clay sculptor + photographer (e.g. a Molela terracotta artisan collaboration).
4. Confirmation of the delivery and bottle-return process for the explainer.
5. Ghee jar cut-outs; photography B1–B3 for evidence chapters.

## 10. Performance, accessibility and mobile

- Performance: pre-rendered AVIF scenes and stepped sprites (12fps) are far lighter than live 3D; only the turntable uses the 360 viewer. Diorama images lazy-load per scene; total ≤ 2.5 MB per page.
- Accessibility: each clay scene has a descriptive alt and a visible one-line caption; inflated buttons keep a 2px focus ring; no information only in illustration.
- Reduced motion: stop-motion stops on the first frame; camera pan becomes a vertical sequence of stills.
- Mobile: vertical scene crops (separately rendered, not cropped automatically); clay shadows reduced to keep it light.

## 11. Risks and premium guardrails

Risks: looking childish or like a fintech onboarding illustration; trivialising farmers and animals; clashing with the glass bottle; extra production cost.

**Premium guardrails**
1. The real bottle never becomes clay — glass is truth, clay is explanation.
2. Information panels stay flat and adult; clay is illustration, not UI everywhere.
3. Handmade over plastic: matte, fingerprint-textured clay (Aardman/terracotta), never shiny candy 3D.
4. Earth palette from Rajasthan soil and the brand; no candy pastels.
5. Cows depicted with respect and accuracy; no cartoon faces, no anthropomorphic jokes.
6. Confine the style to explainer contexts where simplicity is the goal.
7. Copy stays simple but exact: "Milk is chilled close to the source." — no "magic", no health claims.
8. Motion without bounce — squash on press only, settle without overshoot.
9. Consistent lighting and camera across all renders (one scene file, one light rig).
10. Commission local craft (terracotta artisans) — authenticity is what lifts clay to premium.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: 'DESIGO green' → 'DESIGO® green'; contrast notes added — terracotta `#C4704A` is 3.3:1 on milk and ink on it 4.46:1 (borderline), so terracotta is decorative and secondary buttons use cream clay; clay variant greens/reds (4.3–4.4:1 with milk) never carry small text. Fonts already OFL (Bricolage Grotesque, Baloo 2). Added states, cursor map, motion tokens, 11 prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#1E7A68` | DESIGO® green (`--cl-green`): clay buttons, links, active tokens | 4.7:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on green clay | 4.7:1 on primary |
| Secondary | `--c-secondary` | `#C4704A` | terracotta (`--cl-terracotta`): plinths, soil, pots, clay curtain | 3.3:1 on bg; decorative only; ink on terracotta 4.46:1 → no small text on it |
| Accent | `--c-accent` | `#D9B877` | ghee gold (`--cl-gold`): sun, ghee, highlight chips; focus ring uses ink | 1.7:1 on bg; decorative |
| Background | `--c-bg` | `#F7F4EC` | milk ground (`--cl-milk`) | text 14.8:1 |
| Surface | `--c-surface` | `#F1E7D3` | cream clay (`--cl-cream`): clay cards, platforms, secondary button | text on surface 13.2:1 |
| Text | `--c-text` | `#1E211F` | ink | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5A4D44` | captions, scene captions (new token `--cl-muted`) | 7.4:1 on bg; 6.6:1 on cream clay |
| Line | `--c-line` | `rgba(138,74,46,0.25)` | soft terracotta hairline for flat info panels and dividers | decorative |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#8A4A2E` / `#171918` | ok = small green clay check token + text (verified only); pending = terracotta-deep 'pending verification' label + dotted underline; DEMO = flat charcoal label — never clay | ok 7.1:1 · pending 6.2:1 · demo 16.1:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#3F7D62` | `#1F5C45` | `#D9E8DF` | matte clay meadow, generic herb plants (not counted), green clay hills, mossy plinth |
| ROOT 14 | V1 · red cap | `#C9454B` | `#8A4A2E` | `#F3D9D6` | terracotta-red clay earth with exposed clay roots |
| BASE 3 | V2 · amber cap | `#EDAA45` | `#5A3304` | `#F8E4C2` | amber clay dunes at golden hour, clay sun |
| ESSENTIAL | V3 · ivory cap | `#DCCBB0` | `#4D4130` | `#F4EDE2` | ivory clay courtyard, minimal, one tree |

Dark-chapter inversion: the clay style has no dark mode; the Trace console (13) and DEMO labels are flat charcoal `#171918` panels with milk text and a signal `#7FE0B8` focus ring. Night is shown only inside illustrations (clay doorstep at dawn).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Bricolage Grotesque (variable) | `@fontsource-variable/bricolage-grotesque` · Google Fonts | 700, opsz 96, wdth 100 | clamp(3rem, 8vw, 8rem) | 0.98 | -0.025em | Sentence |
| Headline H1–H2 | Bricolage Grotesque (variable) | `@fontsource-variable/bricolage-grotesque` | H1 700 / H2 600 | H1 clamp(2.3rem, 4.4vw, 4.25rem) · H2 clamp(1.6rem, 2.6vw, 2.5rem) | 1.05 / 1.15 | -0.015em | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` | 400 / 500 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.6 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 600 | 0.75rem | 1.3 | +0.12em | UPPERCASE |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` | 400 | 0.875rem | 1.5 | 0 | As data (trace demo only) |
| Devanagari (optional) | Baloo 2 (variable) | `@fontsource-variable/baloo-2` · Google Fonts | 500 / 700 | matches headline/body | 1.25 / 1.6 | 0 | — (bilingual kids' labels, subject to approval) |

Licence: Bricolage Grotesque, Fraunces (soft display alternative, 600 SOFT 100, `@fontsource-variable/fraunces`), Inter Tight, JetBrains Mono and Baloo 2 are SIL OFL 1.1. Pairing: rounded, characterful Bricolage gives clay warmth without being childish; Inter Tight keeps information adult.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 5vw margins, 32 px gutters, max-width 1440 px; diorama chapters are full-viewport stages with an isometric-ish 30° camera. Mobile: 4 columns; dioramas use separately rendered vertical crops.
- **Spacing scale:** 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px; ≥ 32 px around clay elements.
- **Radius:** `sm 16px` (chips, inputs) · `md 32px` (clay cards, buttons 24 px) · `lg 50%` (tokens, plinth).
- **Borders:** none on clay (form comes from shading); flat info panels use a 1 px terracotta hairline.
- **Elevation:** clay recipe `inset 6px 6px 12px rgba(255,255,255,.55), inset -8px -8px 16px rgba(138,74,46,.18), 0 18px 36px rgba(30,33,31,.12)`; hover outer shadow `0 24px 44px rgba(30,33,31,.16)`.
- **Texture/overlay:** matte clay with subtle fingerprint/tool marks baked into renders; 2% grain; no gloss except the real glass bottle. Information panels stay flat.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — inflated clay button: green `#1E7A68` with clay shadow recipe, radius 24 px, milk Bricolage 600 label + arrow; 56 px tall, padding 0 32 px · hover lift 4 px, outer shadow deepens (240 ms) · focus-visible 2 px ink ring + 3 px milk offset · active squash `scale(1.03, 0.96)` over 120 ms, return 280 ms `--ease-milk`, no overshoot · disabled cream `#F1E7D3` flat (no inner shadow), ink 50% · loading three clay dots step through (12 fps).
- **Secondary button** — cream clay `#F1E7D3` with clay shadow, ink label; states as primary.
- **Text / arrow link** — design-system underlined label + arrow in ink, 2 px green underline with round caps; hover arrow travels 8 px; focus-visible 2 px ink outline.
- **Icon button (incl. menu)** — 52 px clay token (50% radius, clay shadow), 24 px clay-shaded icon; menu = three rounded bars; hover lift; focus-visible ink ring; active squash; disabled flat 40%; `aria-label`, `aria-expanded`.
- **Navigation bar** — flat (not clay): 68 px milk bar, 1 px terracotta hairline below; logo left, Inter Tight 500 links, Reserve as a clay primary button. Mobile: logo + clay menu token; menu = flat cream sheet with large links and small clay verb tokens. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default 20 px clay ball (inflated shading) · hover (link): ball squashes slightly · ROTATE (bottle/turntable): clay ring + `ROTATE` · EXPLORE (diorama): ball + `EXPLORE` · ENTER (variant turntable): ring + `ENTER` · VIEW (scene still): ball + `VIEW` · TRACE (clay node): small clay pin + `TRACE`; draggable → clay grabbing hand. Touch: off; captions under each scene.
- **Card / panel / info block** — two kinds: `ClayCard` (cream clay, radius 32, clay shadow, padding 32) used sparingly for tokens/steps, and `FlatInfoPanel` (milk, 1 px terracotta hairline, radius 16) for all information · hover clay lift 6 px · focus-visible ink ring · active squash · disabled flat · loading flat panel with cream skeleton bars.
- **Badge / tag** — flat chips (information stays flat), radius 16, 26 px, Inter Tight 600: neutral cream; variant light fill + deep text; **pending verification** = terracotta-deep `#8A4A2E` label + dotted underline + popover; **DEMO · not live data** = flat charcoal chip, milk text.
- **Input + form field** — flat console (charcoal `#171918`, radius 16): label above, 56 px input on `#1F2321`, 1 px `rgba(255,255,255,.35)` edge, JetBrains Mono, placeholder `DSG-BTL-000001-3 (sample format)` · hover edge .55 · focus-visible 2 px signal ring · invalid `#E36B6B` edge + message · disabled 40% · loading clay dots; results illustrated by small clay icons per step + DEMO chip.
- **Divider / ornament** — a soft rounded clay groove (4 px tall, inner shadow) between diorama scenes; flat 1 px hairline in info zones.
- **Section header** — chapter number in a small clay token, title Bricolage 700, eyebrow Inter Tight uppercase; optional Baloo 2 Hindi label (approved copy only).
- **Product info block** — flat text panel beside the diorama (never inflated): V-code mono, name Bricolage 700, line, size `1 L glass · 900 g` (pending), price 'Price pending confirmation' until approved, descriptors with pending markers.
- **Bottle stage** — the real glass render (never clay) on a terracotta clay plinth with inner shadow — material contrast handmade clay vs clear glass; contact shadow; float ±6 px / 6 s, tilt ±5°; with 360 frames the plinth turns like a potter's wheel; without frames ±18° + a clay tag '360° coming soon'.
- **Trace node / timeline step** — small clay pins on a terracotta board joined by a thread; states upcoming (cream pin) · active (green pin lifts, flat side panel with text) · visited (terracotta pin) · hover lift · focus-visible ink ring; 'Illustrative journey — not live data' chip on the board.

### 12.5 Iconography & illustration
- **Icons:** small inflated clay tokens (3D renders, 48–96 px) for the seven verbs: pin (ORIGIN), thread (TRACE), flask (TEST), snowflake (CHILL), gear (PROCESS), bottle silhouette (FILL — a generic clay shape, never the real bottle), house (DELIVER); UI icons 2 px rounded line.
- **Illustration:** commissioned Blender clay renders or (premium) hand-sculpted clay by a Molela terracotta artisan; one scene file, one light rig. AI plates below are prototype stand-ins.
- **Photo treatment:** real photographs appear only in evidence chapters (origin, breeds, quality) and are never clayified.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | clay curtain transition |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | squash return (no overshoot) |
| `--dur-micro` | `120ms` | squash on press |
| `--dur-reveal` | `280ms` | squash return; hover lift 240 ms |
| `--dur-scene` | `700ms` | clay curtain rolls across |
| `--stop-motion` | `steps(n) at 12fps` | cow walking, can travelling |

No bounce, no overshoot (design-system rule) — clay physics is squash on press only. Diorama camera pan uses sprite sequences or a light three.js scene with baked lighting. Reduced motion: stop-motion stops on the first frame, camera pan becomes a vertical sequence of stills, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Cows are recognisable Indian zebu (hump, dewlap, long ears), respectful, no cartoon faces, no specific breed claimed. The real bottle and jars are composited.

**Tail prompt (append to every prompt):** *handmade matte clay diorama, plasticine and terracotta with subtle fingerprints and tool marks, soft global illumination, isometric 30 degree camera, earthy palette of milk #F7F4EC, cream clay #F1E7D3, terracotta #C4704A, sand #E3C9A0, leaf #5E9C7E, sky #CFE3E6 and gold #D9B877, Aardman and Molela craft feeling, warm, calm, premium, no gloss, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/claymorphism/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Soft matte clay diorama of rolling pastures and a tiny farm with a thatched shed, a round terracotta plinth empty in the centre, studio light | candy colours, glossy plastic, cartoon faces | 01 Hero, 15 Final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical clay diorama with pastures at the bottom, soft sky above, an empty terracotta plinth in the centre | glossy plastic, faces | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | Small clay landscape on a round turntable: lush green clay meadow #3F7D62 with generic herb plants, soft green hills, an empty mossy clay plinth in the centre | counted plants in rows, labels | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Small clay landscape on a round turntable: terracotta-red earth #C9454B with exposed clay roots and layered soil, an empty plinth in the centre | blood, faces | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Small clay landscape on a round turntable: amber clay dunes #EDAA45 at golden hour, a round clay sun, an empty plinth in the centre | sun with face | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Small clay landscape on a round turntable: minimal ivory clay courtyard #DCCBB0 with one small tree, an empty plinth in the centre | clutter | 08 Four milks · /milk/essential |
| 7 | `journey/diorama-strip.png` | 7200×1600 (horizontal) | no | Continuous horizontal clay diorama: a respectful Indian zebu cow with hump and dewlap grazing, a small farm, a milk can on a cart, a round test card with sixteen dots, a steel chiller, a small dairy building, and an empty doorstep at the end; a milk-white clay river runs through | glass bottle, cartoon faces, anthropomorphic cows, people's faces | 03 Cow to bottle, /how-it-works |
| 8 | `trace/clay-board.png` | 3600×2000 | no | Top-down terracotta clay board with eight small cream clay pins connected by a thread in a winding path, soft studio light | labels, numbers | 06 Traceability, /trace |
| 9 | `textures/terracotta.png` | 2048×2048, seamless | no | Seamless tileable unglazed terracotta clay surface like a kulhad cup, fine tool marks, warm earth tones, flat light | cracks, glaze, seams | plinths, clay curtain |
| 10 | `ghee/bilona-diorama.png` | 3200×2000 + 1400×2400 | no | Clay diorama of a traditional earthen bilona pot with a wooden churning stick (madhani) and rope in a warm kitchen corner, golden light, empty space on the right | jars, people's faces, deities | 12 Ghee · /ghee |
| 11 | `heritage/molela-tiles.png` | 3200×2000 | no | Row of Molela-inspired terracotta relief tiles showing zebu cows, grass and farmers' tools in simple folk forms, warm side light | deities, religious figures, text | 10 Heritage |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/11_claymorphism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/claymorphism/
- [ ] The real bottle is never clay; information panels are flat everywhere
- [ ] Every clay scene has descriptive alt text and a visible one-line caption; cow figures approved for respect and accuracy
