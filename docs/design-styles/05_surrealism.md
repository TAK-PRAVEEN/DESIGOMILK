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
- **/about** — stepping-stone timeline; no supporters shown until written evidence is on file (KB Q34).
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
5. Hand-built CGI with consistent lighting for launch. AI-generated plates (§12.7) are allowed only as clearly artistic stage backdrops for prototypes — never presented as a real place, never containing the bottle or jar.
6. Restraint per viewport: one impossible idea per scene.
7. Palette stays in the brand family (milk, sand, forest, gold, variant colours); no neon dreams.
8. Respect sacred imagery: cows are shown naturally, never deified or used as a gimmick.
9. Every scene has a static, beautiful still — the dream must work as a photograph first.
10. Keep copy grounded: "Know where your milk comes from." — the words stay real even when the world is not.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: guardrail 5 banned all AI images, which conflicted with the house image brief (generated = backdrop/illustration only) — it now allows AI plates as clearly artistic stage backdrops for prototypes, never presented as real and never containing the bottle; /about no longer shows supporters (excluded until evidence is on file, KB Q34). Sandstone `#C98E5F` (2.5:1) is marked decorative only. Fonts already open-licence. Added component states, cursor map, motion tokens, 11 prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#0B3B32` | forest (`--forest`): primary CTA fill, night sky, deep transitions | 11.3:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on forest | 11.3:1 on primary |
| Secondary | `--c-secondary` | `#C98E5F` | Jodhpur sandstone (`--su-sandstone`): long-shadow tint, plinths, dune shading | 2.5:1 on bg; decorative only — never text |
| Accent | `--c-accent` | `#C8A96B` | gold (`--gold`): sun disc, rims, focus ring on dark/sky grounds | 2.0:1 on bg; decorative on milk; 5.5:1 on forest |
| Background | `--c-bg` | `#F7F4EC` | milk horizon (`--su-milk`); hero sky gradient `#E9E4F0` → `#F7F4EC` | text 14.8:1 |
| Surface | `--c-surface` | `#E8D6B8` | sand floor (`--su-sand`): ground plane, evidence-window mat | text on surface 11.4:1 |
| Text | `--c-text` | `#1E211F` | ink | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5E5048` | captions, evidence labels (`--su-shadow` as a solid tone) | 7.0:1 on bg |
| Line | `--c-line` | `rgba(110,90,75,0.35)` | long cast shadow tone `#6E5A4B` at 35% — hairlines on the horizon, window frames | non-text; frames also carry a 1 px ink inner edge |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#8A5A1F` / `#171918` | ok = leaf green (verified only); pending = dotted underline + 'pending verification' in burnt sienna; DEMO = plain charcoal console badge — the dream never touches it | ok 7.1:1 · pending 5.4:1 · demo 16.1:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | vertical sky gradient light → base; canopy growing inside a milk-white room; moss plinth |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | dusk sky light → base; floating clods and hanging roots over red earth |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | amber sky with three suns; dunes shaped like poured milk; text in deep |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory gallery with an open doorway onto clouds — the calmest world |

Dark-chapter inversion: night sets (02 end, 06 Traceability, 10 Heritage, 11 Technology) swap `--c-bg` → `#0B3B32`, `--c-text` → `#F7F4EC`, `--c-text-muted` → `#C9D3CE`, `--c-accent` gold becomes the active colour (5.5:1), primary buttons become milk-outline; the sun disc turns to a gold moon.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` · Google Fonts | wght 250, SOFT 100, opsz 144; italic for the 'impossible' word | clamp(3.25rem, 8vw, 8.5rem) | 1.0 | -0.02em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` | H1 300 / H2 350, SOFT 100 | H1 clamp(2.4rem, 4.6vw, 4.5rem) · H2 clamp(1.7rem, 2.8vw, 2.75rem) | 1.08 / 1.2 | -0.01em | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` | 400 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.6 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 500 | 0.72rem | 1.3 | +0.18em | UPPERCASE |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` | 400 | 0.875rem | 1.5 | 0 | As data (documentary chapters only) |
| Devanagari (optional) | Noto Serif Devanagari (variable) | `@fontsource-variable/noto-serif-devanagari` | 300 / 400 | matches display/body sizes | 1.3 / 1.6 | 0 | — |

Licence: Fraunces, Italiana (campaign one-liners, `@fontsource/italiana`, 400), Inter Tight, JetBrains Mono and Noto Serif Devanagari are SIL OFL 1.1. Pairing: weightless soft Fraunces floats in the dream; Inter Tight and mono keep the evidence grounded.

### 12.3 Layout & surfaces
- **Grid:** stage-based — each chapter is a full-viewport set with the horizon at 62% height (58% on mobile); a 12-column underlay (5vw margins, 24 px gutters, max-width 1600 px) aligns text; the bottle anchors on the horizon at centre or the golden-section axis.
- **Spacing scale:** design-system 4 px scale; text blocks float with ≥ 96 px clear space from the bottle.
- **Radius:** 0 for text and evidence windows (they are frames); `--r-pill` for cursor and tags only.
- **Borders:** evidence windows: 10 px sand mat `#E8D6B8` + 1 px ink inner edge + label `REAL PHOTOGRAPH`.
- **Elevation:** no cards; depth from long soft cast shadows (3× object height, `#6E5A4B` at 35%, blur 24 px) and a milk-pool reflection under the bottle.
- **Texture/overlay:** 3% film grain, horizon fog gradient (milk → transparent over 18% of height).

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — anatomy: forest `#0B3B32` fill, milk Inter Tight 500 label uppercase +0.18em, travelling arrow; 52 px tall, padding 0 28 px, radius 0; casts a soft long shadow on the horizon when it sits on it · hover lifts 8 px over 900 ms (`--ease-sine`) while its shadow shortens, arrow travels 6 px · focus-visible 2 px gold ring + 3 px milk offset · active lift 0 · disabled `#C9C6BD` fill, ink 55% · loading a milk droplet falls inside the button (stepped, 3 loops max).
- **Secondary button** — 1 px forest frame, transparent, forest label + arrow; on night sets milk frame/label · hover lift 8 px + frame fills 6% · focus-visible gold ring · active · disabled 40% · loading droplet.
- **Text / arrow link** — design-system underlined label + arrow; ink with 1 px forest underline; hover the underline 'drips' 2 px down and the arrow travels 8 px (240 ms); focus-visible 2 px forest outline.
- **Icon button (incl. menu)** — 48 px circle, no fill, 1 px ink edge, 20 px 1 px-line icon; menu icon = two lines that drift apart; hover float up 4 px; focus-visible gold ring; active; disabled 40%; `aria-label` / `aria-expanded`.
- **Navigation bar** — transparent bar floating over the set (72 px), milk 70% veil appears after 120 px scroll; logo left, five links Inter Tight 500 uppercase, Reserve as secondary button; on night sets everything inverts to milk. Mobile: logo + menu; menu = full-screen dawn sky with links in Fraunces 300, 2rem. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default: 18 px milk droplet with 30 px blur halo · hover (link): droplet stretches into a short drip · ROTATE (bottle): halo ring 72 px + `ROTATE` · EXPLORE (dream set): halo widens + `EXPLORE` · ENTER (variant world door): ring becomes a doorway outline + `ENTER` · VIEW (evidence window): droplet becomes a small frame + `REAL PHOTO` / `VIEW` · TRACE (lantern node): small lantern glow + `TRACE`. Mix-blend difference off; ink outline keeps it visible on milk. Touch: off; tap hints appear as captions under the element.
- **Card / panel / info block** — no cards: floating text blocks (max 42ch) on the sky; documentary info sits in an `EvidenceWindow` (sand mat + ink edge + `REAL PHOTOGRAPH` label) · hover window floats 8 px, its shadow shortens · focus-visible ring · active · disabled n/a · loading the window shows the static AVIF poster first, then the live set.
- **Badge / tag** — Inter Tight 500 0.68rem uppercase, pill radius, 24 px: neutral milk with ink edge; **pending verification** = dotted underline on the claim + small sienna `PENDING` tag with popover; **DEMO · not live data** = plain charcoal `#171918` badge, milk text, never floating or animated.
- **Input + form field** — the Trace console is plain: charcoal panel in a 'doorway in the sky', label above, 56 px input with 1 px milk edge, JetBrains Mono, placeholder `DSG-BTL-000001-3 (sample format)` · hover edge 2 px · focus-visible 2 px gold ring · invalid 2 px `#E36B6B` edge + message (5.5:1 on charcoal) · disabled 40% · loading a single milk drop pulses (opacity, not scale).
- **Divider / ornament** — the horizon line itself (1 px `#6E5A4B` 35%) is the only divider; between chapters the camera passes through milk instead of a rule.
- **Section header** — chapter number as small Fraunces italic `09` floating above a short horizon line, eyebrow label Inter Tight uppercase, title Fraunces 300 with one italic word; casts a faint long shadow when it 'stands' on the horizon.
- **Product info block** — floating text block beside the bottle (never a card): V-code JetBrains Mono, name Fraunces 300 uppercase, line in italic, size `1 L glass · 900 g` (pending), price 'Price pending confirmation' until approved, descriptors with pending markers; sky-gradient-safe because text sits in the milk band below the horizon.
- **Bottle stage** — the real bottle stands on an endless sand-and-milk horizon at dawn; de Chirico shadow 3× its height toward the viewer (separate layer); faint mirror reflection in a milk pool; sun disc parallax 0.2× opposite the pointer; float 8 s ±14 px, tilt ±6°; with 360 frames the sun moves with rotation so the shadow sweeps like a sundial.
- **Trace node / timeline step** — lantern node: 14 px warm gold glow on a night-desert road of light; states upcoming (dim 30%) · active (full glow + label, documentary panel slides in) · visited (steady 60%) · hover brighten · focus-visible gold ring. Panel text is documentary; 'Illustrative journey — not live data' badge on top.

### 12.5 Iconography & illustration
- **Icons:** thin 1 px line icons, round caps, 24 px grid, no fill; used sparingly (nav, controls).
- **Illustration:** hand-built CGI sets (Blender) for launch; AI plates below are prototype stage backdrops only — artistic, never presented as a real place, never containing the bottle.
- **Photo treatment:** real photographs only inside `EvidenceWindow` frames labelled `REAL PHOTOGRAPH`; natural grade, no dream filters on evidence.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | set changes |
| `--ease-sine` | `cubic-bezier(.37,0,.63,1)` | idle float loops |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, camera |
| `--dur-micro` | `240ms` | link/arrow |
| `--dur-reveal` | `900ms` | hover float, text reveal |
| `--dur-scene` | `1400ms` | pour transition between variant worlds |
| `--float-cycle` | `8s` | translateY ±14px, rotate ±1.5° |
| `--scrub` | `1.5` | ScrollTrigger scrub weight for camera travel |

Signature: scale shift (bottle 1 → 6 until the camera passes through the milk into the next set); milk-dive page transition (white-out 900 ms). One impossible idea per scene. Reduced motion + in-page 'Calm mode': no camera travel, no floating, sets become still posters, transitions 200 ms fades, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Every plate keeps an empty horizon centre for the composited bottle. Plates are art; they never depict a 'DESIGO® farm'.

**Tail prompt (append to every prompt):** *calm Magritte and de Chirico inspired surreal stage, soft volumetric dawn light over the Thar, milk white #F7F4EC, lilac sky #E9E4F0, sand #E8D6B8, sandstone #C98E5F long soft shadows, forest #0B3B32 and gold #C8A96B, 3 percent film grain, serene, dreamlike but clean, premium CGI look, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/surrealism/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Endless calm sea of milk meeting a pale sand desert at dawn, horizon at 62 percent height, pale lilac sky, a single distant khejri tree standing in the milk, long soft shadows, empty centre on the horizon | boats, people, buildings, dramatic storm | 01 Hero, 15 Final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical dawn scene: milk sea meeting pale sand at 58 percent height, lilac sky, one distant khejri tree, empty centre on the horizon | people, buildings | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | A lush forest canopy growing inside a vast milk-white room with no ceiling, leaves drifting upward, sky deepening from #1F5C45 to #0A2A20 above, a small moss-covered round plinth empty in the centre | animals, mushrooms, fantasy creatures | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Red earth desert at dusk with clods of soil and fine roots floating weightlessly in the air, crimson #B3202A sky fading to oxblood #4A0A0F, an empty patch of ground in the centre | blood, violence, horror, skulls | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Eternal golden hour with three low suns in an amber #E89A1C sky, smooth sand dunes shaped like poured milk, very long shadows, empty centre | faces in suns, neon | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Minimal ivory #F4EDE2 gallery room with an open doorway in the back wall leading straight onto soft clouds, soft skylight, empty floor in the centre | furniture, art on walls | 08 Four milks · /milk/essential |
| 7 | `journey/milk-river.png` | 6000×2000 (horizontal) | no | Wide desert panorama with a calm milk-white river winding across pale sand toward the horizon, seven small empty rectangular picture frames standing upright on the sand along its bank, dawn light, long shadows | pictures inside the frames, people, bottles | 03 Cow to bottle |
| 8 | `trace/lantern-road.png` | 3600×2000 | no | Night desert under a deep forest-green sky, a faint road of soft warm light winding across the dunes toward the horizon, scattered small warm glows along it, stars, calm | cars, people, neon, city | 06 Traceability, /trace |
| 9 | `heritage/constellation.png` | 3200×2000 | no | Night sky over a quiet dune horizon where faint stars form the gentle outline of a standing Indian zebu cow with hump and dewlap, respectful, natural, subtle | halo, glowing deity, ornaments, mythological figures | 10 Heritage |
| 10 | `ghee/sunrise.png` | 3200×2000 + 1400×2400 | no | A large soft golden sun rising over three gentle dunes, honey-gold light, three empty flat-topped dune crests waiting for objects, thin threads of light connecting them to the horizon | jars, bottles, faces | 12 Ghee · /ghee |
| 11 | `textures/haze-grain.png` | 2048×2048, seamless | no | Seamless tileable soft atmospheric haze texture with very fine film grain on neutral warm grey, even, subtle | clouds with shapes, banding | global grain + horizon fog overlay |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/05_surrealism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/surrealism/
- [ ] Every set has a static AVIF poster that works as a photograph; WebGL hydrates after idle
- [ ] Every real photo sits in an EvidenceWindow labelled 'Real photograph'; no AI plate is shown as a real place
