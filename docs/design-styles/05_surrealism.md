# 05 — Surrealism · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 3 / 5** · Best used for: Chapter 09 (Milk as material), the variant-world transitions in Chapter 08, and launch/campaign films — not as the information layer.

---

## 1. Style essence

Surrealism sets ordinary objects in impossible situations so that the viewer sees them anew: scale shifts, floating objects, dream logic, soft shadows on infinite horizons, objects that become landscapes. In contemporary digital design it appears as "surreal 3D" — clean renders of impossible scenes, calm and luminous rather than disturbing.

Origins: René Magritte, Salvador Dalí, Giorgio de Chirico's metaphysical piazzas; in commercial work, the 2010s–2020s surreal product photography and CGI (e.g. Six N. Five, Andrés Reisinger).

Three reference points:
1. **Magritte, *The Empire of Light* and *Personal Values*** — everyday objects at impossible scale; calm, not grotesque.
2. **De Chirico's long shadows and empty piazzas** — translatable to Rajasthani sandstone courtyards and Thar desert light.
3. **Contemporary surreal CGI for luxury brands** (Six N. Five for Apple/Nike campaigns) — pastel infinity rooms, floating objects, soft light.

## 2. Why it fits DESIGO® (and where it fights)

The brief asks for "Apple product launch × interactive 3D exhibition", and surrealism is the most cinematic way to stage a single object. Milk lends itself to dream imagery: a milk river across the Thar, a bottle as tall as a haveli, a cow grazing on a cloud of milk foam, the trace path as a road through the sky. It can make DESIGO® unforgettable.

Where it fights: DESIGO®'s claim is *reality* — real farms, real cows, real records. Surreal imagery can make the product look fictional or AI-generated, and the brand promises never to use AI imagery as real. Surreal scenes also must never imply health effects (no glowing children, no magical strength).

**Fit score: 3 / 5.** Strong for emotion and memorability in clearly *artistic* moments (Chapter 09, transitions between variant worlds, campaign hero), but the evidence chapters (farm, breeds, trace, quality) must stay documentary. A rule: **surreal stage, real product, real data.**

## 3. Art direction

### Palette — "dream of the Thar at dawn"
| Token | Hex | Role |
|---|---|---|
| `--su-sky` | `#E9E4F0` | Dawn sky lilac (top of gradients) |
| `--su-milk` | `#F7F4EC` | Horizon / milk |
| `--su-sand` | `#E8D6B8` | Desert sand floor |
| `--su-sandstone` | `#C98E5F` | Jodhpur sandstone / long shadows |
| `--su-shadow` | `#6E5A4B` at 35% | Long cast shadows |
| `--forest` | `#0B3B32` | Night sky, deep transitions |
| `--gold` | `#C8A96B` | Sun disc, rims |
| `--ink` | `#1E211F` | Text |
| Variant skies | MASTER 26 `#D9E8DF→#1F5C45` · ROOT 14 `#F3D9D6→#B3202A` · BASE 3 `#F8E4C2→#E89A1C` · ESSENTIAL `#F4EDE2→#CDB89A` | Vertical sky gradients per world |

### Typography
- Display: **Fraunces** variable, weight 250, SOFT 100, opsz 144 — soft, dreamlike curves; italic for the "impossible" word.
- Alternative display for campaign: **Italiana** (thin, elegant, OFL) for single-line statements.
- Text: **Inter Tight** 400; Data: **JetBrains Mono** (only in documentary chapters).
- Type is set floating in space — never on cards — with long soft shadows on the "ground" when it sits on a horizon line.

### Texture
Soft volumetric light, 3% film grain, atmospheric haze (fog gradients from horizon). No hard outlines.

### Imagery
Two strictly separated categories:
1. **Stage (art)**: CGI or compositing scenes — horizon, sky, sand, impossible scale — clearly artistic, never presented as a real farm.
2. **Evidence (documentary)**: real DESIGO® photographs, presented in a "window" or frame within the dream (Magritte's painting-within-the-scene device), so the viewer always knows what is real.
The bottle is always the real render/360 frames, never a generated image.

### Iconography
Thin 1px line icons; minimal — the scenes do the work.

### Grid
Stage-based, not column-based: each chapter is a full-viewport "set" with a horizon line at 62% height. Text uses a 12-column underlay (5vw margins) for alignment; the bottle anchors on the horizon at the centre or golden-section axis. Mobile: horizon at 58%, text below the bottle.

## 4. Motion & interaction language

- Dream physics: slow, weightless, continuous. Float cycles 8s (translateY ±14px, rotate ±1.5°). Easing `cubic-bezier(.37,0,.63,1)` (sine) for idle loops; `--ease-milk cubic-bezier(.22,.9,.24,1)` for travel.
- Scroll: camera moves *through* sets (a single fixed WebGL/CSS-3D stage, depth z 0 → −3000px), ScrollTrigger `scrub: 1.5` for extra weight.
- Scale shifts as the signature: e.g. scrolling makes the bottle grow from object to monument (scale 1 → 6) until the camera passes through the milk into the next set.
- Cursor: a soft 18px milk droplet with blur halo; **link**: droplet stretches into a short drip; **bottle**: halo ring `DRAG` / `TILT`; **evidence window**: droplet becomes a small frame `REAL PHOTO`; touch: off.
- Hover: elements float up 8px over 900ms; the long shadow shortens.
- Page transitions: the camera dives into a pool of milk (white-out 900ms), resurfaces in the next scene.

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands on an endless sand-and-milk horizon at dawn, casting a de Chirico shadow (long, soft, 3× its height) toward the viewer. A faint mirror reflection in a milk pool at its base. Float 8s, pointer tilt ±6°, the sun disc behind moves 0.2× opposite the pointer.

**Rotation.** Single render: ±20° skew, the long shadow rotates accordingly (a separate shadow layer, so the illusion stays honest). With 360 frames: drag rotates the bottle; the sun moves around the horizon in sync, so the shadow sweeps like a sundial — a poetic, real-feeling rotation.

**Variant worlds** (each a dream landscape; transitions between them are the surreal highlight):
- **MASTER 26** — a forest canopy growing *inside* a vast milk-white room; leaves drift upward; green sky `#1F5C45` deepening to `#0A2A20`. The bottle stands on a moss plinth.
- **ROOT 14** — red earth desert with floating clods of soil and roots hanging in the air; `#B3202A` dusk sky.
- **BASE 3** — eternal golden hour: three suns in an amber sky (`#E89A1C`), long shadows; sand dunes shaped like poured milk.
- **ESSENTIAL** — an ivory gallery with an open doorway onto clouds; the calmest world, `#F4EDE2`.
Transitions: the bottle stays fixed while the world behind it "pours" into the next (a liquid wipe shader, 1400ms).
Info panel: floating text block (no card) with V-code, name, line and descriptors with pending markers.

## 6. Page-by-page treatment

### Home
| # | Chapter | Surreal treatment |
|---|---|---|
| 01 | Hero | Bottle on the dawn horizon, long shadow; "Milk from the source." floating above the horizon in Fraunces 250. |
| 02 | Bottle becomes the story | Six words float as weightless objects orbiting the bottle in 3D depth; each settles on the horizon and casts a shadow as it becomes active. Sky shifts dawn → night forest. |
| 03 | Cow to bottle | A milk river runs across the desert; seven stations as small real-photo windows standing on the sand along it (evidence inside the dream). |
| 04 | Where it begins | **Documentary**: a giant Magritte-style window frame opens in the sky; through it, the real farm photograph. |
| 05 | Breeds | Real breed portraits as framed paintings hanging in a sandstone courtyard (de Chirico arcades). Pending tags on the frames. |
| 06 | Traceability | The trace path as a road of light across a night desert; eight nodes as lanterns. Panel text documentary. "Illustrative journey — not live data." |
| 07 | Quality | The dream pauses: a clean lab-white room, Swiss-plain. 16 parameters, pending values. Contrast makes it trustworthy. |
| 08 | Four milks | The four dream worlds with pour transitions. |
| 09 | Milk as material | **Signature chapter**: milk flowing upward like a waterfall in reverse, forming the shape of the bottle, then the DESIGO® wave-E. WebGL fluid, real-time but lightweight. |
| 10 | Heritage | A cow line drawing as a constellation in the night sky; one italic sentence. |
| 11 | Technology | Floating grid plane at night, data lines as light threads; seven verbs as floating plinths. |
| 12 | Ghee | A golden sun of ghee rising over the horizon; three jars standing on three dunes; each grade connected to its milk by a light thread. |
| 13 | Trace your milk | Plain charcoal console in a doorway in the sky — the tool itself is clean. |
| 14 | Story | Milestones as stepping stones across the milk river; verified only. |
| 15 | Final CTA | Return to dawn; the bottle on the horizon; "Know where your milk comes from." |

### Inner pages
- **/milk** — four bottles standing on four dunes at different horizons.
- **/milk/[variant]** — full dream world with viewer; facts in a clean column.
- **/ghee** — sunrise world; bilona process shown with real photos in windows.
- **/origin** — mostly documentary, framed by one surreal opening scene.
- **/trace** — the lantern road + demo.
- **/technology** — night grid world.
- **/about** — stepping-stone timeline; supporters plain.
- **/reserve** — clean form, horizon in the background at 20% opacity.

## 7. Component variants

`DreamStage` (single fixed WebGL/CSS-3D stage with sets) · `HorizonBottle` (long shadow + reflection) · `SundialViewer` (360 + sun sync) · `EvidenceWindow` (frame labelled "Real photograph") · `PourTransition` (liquid wipe shader) · `FloatingWords` · `LanternTraceMap` · `MilkFountain` (Ch. 09 fluid) · `DropletCursor` · `PlainLabRoom` · `ClaimText` · `AssetSlot` (empty frame on the horizon labelled with the missing asset).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Dream palette + type | Sky gradients, Fraunces SOFT, Italiana | Text ≥ 4.5:1 on every sky stop | Brand colours | 2 |
| 2 | Shell + stage | Fixed stage, nav, cursor | DreamStage, droplet cursor, milk-dive transition | Stage renders 60fps desktop / 45fps mid Android | Wordmark | 5 |
| 3 | Hero | Horizon bottle | Shadow layer, reflection, sun parallax | LCP ≤ 2.5s with static poster first | Renders | 4 |
| 4 | Story sequence | Floating words in depth | 3D orbit, settle + shadow | Reduced motion = list on horizon | 360 frames optional | 4 |
| 5 | Cow → bottle | Milk river + windows | River shader, 7 evidence windows | Windows labelled real; vertical on mobile | B4, B7, B8 | 5 |
| 6 | Origin | Window in the sky | EvidenceWindow transition | Real photo unaltered | B1, B2 | 2 |
| 7 | Breeds | Courtyard gallery | Arcade set, framed portraits | Pending on unapproved | B3, approval | 3 |
| 8 | Trace map | Lantern road | Night set, 8 lanterns, info panel | Keyboard nodes; DEMO label | Trace wording | 4 |
| 9 | Quality | Plain lab room | White set, parameter list | No surreal effect inside data | Lab approval, B6 | 2 |
| 10 | Four worlds + 360 | Dream worlds + sundial | 4 sets, pour transition, SundialViewer | Pour ≤ 1.4s; viewer works without WebGL | **360 sequences (A)**, set renders | 8 |
| 11 | Heritage | Constellation cow | Star-line SVG, sentence | — | Heritage line | 2 |
| 12 | Technology | Night grid | Floating plinths, light threads | Public verbs only | — | 3 |
| 13 | Ghee | Ghee sunrise | Sun, dunes, jars | Grade ↔ milk mapping | Jar cutout, prices | 3 |
| 14 | Trace demo | Console in doorway | TraceYourMilk | Demo always flagged | — | 2 |
| 15 | /milk pages | Dune lineup + worlds | Pages | Shared stage reused, no reload jank | A, pricing | 4 |
| 16 | /origin, /trace, /technology | Inner pages | Mostly documentary pages | ≤ 2.5 MB first load | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining | Timeline stones, sunrise page, form | Form plain and usable | Milestones | 4 |
| 18 | Mobile pass | Lightweight dream | Pre-rendered video/AVIF sets instead of WebGL | Mid Android ≥ 45fps; no WebGL required | — | 5 |
| 19 | A11y + reduced motion | Calm mode | Static posters per set | Reduced motion = still images + text | — | 3 |
| 20 | Perf, QA, handover | Ship | GPU profiling, fallbacks, docs | LCP ≤ 2.5s, INP ≤ 200ms; WebGL lost-context handled | Approvals | 5 |

Total ≈ 78 days (+ CGI set production, 3–4 weeks in parallel).

## 9. Assets needed from DESIGO®

1. 360 sequences (A) — essential; the product must be real inside the dream. A GLB model (future) would allow true lighting integration.
2. Approval of the "art vs evidence" principle and of each surreal set concept (avoid cultural or religious misreadings).
3. Real documentary photography B1–B9 for the evidence windows.
4. Budget for CGI set production (Blender) or a 3D artist; we produce sets from scratch, no AI-generated scenes presented as real.
5. Optional: real milk-pour high-speed footage as reference for the fluid simulation.

## 10. Performance, accessibility and mobile

- Performance: the heaviest style so far. One shared WebGL context (three.js/OGL), sets as baked textures (KTX2/Basis), fluid sim at half resolution and paused off-screen. Static AVIF poster for each set as LCP element; WebGL hydrates after interaction or idle.
- Accessibility: the dream must never hide information. All text is DOM (not in canvas). Evidence windows have alt text that says "Photograph: …". Motion sickness risk from camera dives → reduced-motion and an in-page "Calm mode" toggle.
- Reduced motion: no camera travel, no floating; sets are still images; transitions are 200ms fades.
- Mobile: pre-rendered video loops (H.265/AV1, ≤ 1.5 MB each) or AVIF stills replace WebGL; the bottle viewer stays interactive.

## 11. Risks and premium guardrails

Risks: looking AI-generated; implying the farm is fictional; implying miraculous/health effects; heavy pages; cultural misreading of imagery.

**Premium guardrails**
1. **Surreal stage, real product, real data.** The bottle is always the real asset; facts always documentary.
2. Label evidence: every real photo in a dream sits in a visible frame marked as a real photograph.
3. Calm surrealism (Magritte), never grotesque (Dalí's melting) — no distortion of animals, no hybrid creatures.
4. No miracle imagery: no glowing bodies, halos, superheroes, babies — nothing that reads as a health claim.
5. Hand-built CGI with consistent lighting; no AI-generated images.
6. Restraint per viewport: one impossible idea per scene.
7. Palette stays in the brand family (milk, sand, forest, gold, variant colours); no neon dreams.
8. Respect sacred imagery: cows are shown naturally, never deified or used as a gimmick.
9. Every scene has a static, beautiful still — the dream must work as a photograph first.
10. Keep copy grounded: "Know where your milk comes from." — the words stay real even when the world is not.
