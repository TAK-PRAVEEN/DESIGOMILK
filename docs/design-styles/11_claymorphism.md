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
| `--cl-terracotta` | `#C4704A` | Terracotta clay (soil, pots) |
| `--cl-terracotta-deep` | `#8A4A2E` | Inner shadow tone |
| `--cl-sand` | `#E3C9A0` | Desert ground |
| `--cl-leaf` | `#5E9C7E` | Grass / leaves (soft tint of DESIGO green) |
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
