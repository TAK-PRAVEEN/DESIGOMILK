# 10 — Glassmorphism · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 4 / 5** · Best used for: overlay UI across the site — variant info panels over product worlds (08), trace node panels (06), the Trace-your-milk result (13), the navigation bar — the "glass layer" that echoes the returnable glass bottle.

---

## 1. Style essence

Glassmorphism builds interface layers like frosted glass: translucent panels with background blur, a thin bright edge, subtle inner highlights and soft shadows, floating over colourful or photographic backgrounds. It gives depth and hierarchy without opaque cards, letting the world behind remain visible.

Origins: Windows Vista Aero (2006), iOS 7 blur (2013), Apple's macOS Big Sur (2020) and visionOS "glass" materials (2023), and Apple's 2025 "Liquid Glass" language that brought refraction and specular edges.

Three reference points:
1. **Apple visionOS / Liquid Glass** — glass panels that refract the world, edge highlights, depth by material rather than shadow.
2. **Apple product launch pages** (AirPods Pro, Vision Pro) — product + translucent spec overlays.
3. **Real glass dairy bottles in morning light** — the physical reference: frosted condensation, caustics, the milk visible through the glass.

## 2. Why it fits DESIGO® (and where it fights)

DESIGO® sells milk in **returnable glass**. Glass is part of the product's identity, so a glass interface layer is a meaningful, ownable metaphor, not a trend: panels look like the bottle's own material, cold and clear; condensation suggests the cold chain (CHILL). Glass overlays also let the product worlds stay visible behind information — exactly what the variant chapter and trace map need. It matches the "Apple product launch" part of the brief.

Where it fights: glass on flat milk-white backgrounds is invisible and pointless; it needs colour or imagery behind it. Heavy `backdrop-filter` blur is expensive on mid-range Android phones. Overused, it becomes generic "crypto dashboard" UI and harms contrast.

**Fit score: 4 / 5.** A strong secondary language: glass is the material of the information layer, used over the variant worlds, forest/charcoal chapters and photography — while the base stays minimal. Not recommended as the only style (it is a material, not a narrative).

## 3. Art direction

### Palette
| Token | Value | Role |
|---|---|---|
| `--gl-milk` | `#F7F4EC` | Base ground (glass not used on plain milk) |
| `--gl-panel-light` | `rgba(247,244,236,0.58)` | Frosted milk glass on colour/photo |
| `--gl-panel-dark` | `rgba(11,59,50,0.42)` | Forest glass on dark chapters |
| `--gl-panel-charcoal` | `rgba(23,25,24,0.55)` | Charcoal glass (Trace your milk) |
| `--gl-edge` | `rgba(255,255,255,0.55)` 1px top/left; `rgba(255,255,255,0.12)` bottom/right | Specular edge |
| `--gl-frost` | `#E9F1EE` | Chilled tint (CHILL context) |
| `--gl-condensation` | white droplets at 18% | Texture on CHILL panels only |
| `--forest` | `#0B3B32` | Dark worlds |
| `--green` | `#1E7A68` | Accent |
| `--signal` | `#7FE0B8` | Tech glow, used inside glass edges in chapter 11 |
| `--ink` / `--milk` | `#1E211F` / `#F7F4EC` | Text — always solid, never translucent |
| Variant glass tints | MASTER 26 `rgba(31,92,69,.35)` · ROOT 14 `rgba(179,32,42,.30)` · BASE 3 `rgba(232,154,28,.28)` · ESSENTIAL `rgba(205,184,154,.35)` | Panel tints over each world |

Blur scale: `--blur-1 12px` (nav), `--blur-2 24px` (panels), `--blur-3 40px` (modal); saturation boost `saturate(140%)`.

Contrast rule (2026-10-03 audit): milk glass at 0.58 keeps ink text ≥ 5.6:1 over every world. Forest glass at 0.42 and charcoal glass at 0.55 are valid only over deep/dark worlds; wherever lighter content can pass behind them (measured 2.3:1 and 3.8:1 for milk text), the fill rises to 0.72 (≥ 5:1).

Contrast rule (2026-10-03 audit): milk glass at 0.58 keeps ink text ≥ 5.6:1 over every world. Forest glass at 0.42 and charcoal glass at 0.55 are valid only over deep/dark worlds; wherever lighter content can pass behind them (measured 2.3:1 and 3.8:1 for milk text), the fill rises to 0.72 (≥ 5:1).

Contrast rule (2026-10-03 audit): milk glass at 0.58 keeps ink text ≥ 5.6:1 over every world. Forest glass at 0.42 and charcoal glass at 0.55 are valid only over deep/dark worlds; wherever lighter content can pass behind them (measured 2.3:1 and 3.8:1 for milk text), the fill rises to 0.72 (≥ 5:1).

### Typography
- Display: **Fraunces** 300, opsz 144 — the warm editorial voice outside the glass.
- Glass UI and text: **Inter Tight** 500 (slightly heavier than usual, because blur behind reduces apparent contrast).
- Data: **JetBrains Mono** 500 inside glass readouts.
- Alternative clean display for tech chapters: **Geist** (OFL) 300.

### Texture
Frost noise inside panels (2% monochrome noise *on* the glass, so it reads as material), optional condensation droplets for chilled contexts, caustic light patterns (soft animated gradients) cast by the bottle onto the ground.

### Imagery
Rich, colour-graded photography and variant colour worlds behind glass. The bottle renders double as light sources: their caustics tint the ground.

### Iconography
1.5px line icons in milk or ink, with a faint glow when on dark glass.

### Grid
12 columns, 5vw margins, 24px gutters. Glass panels: radius 20px (an exception to the radius-0 editorial default, justified by the material — a bottle-shoulder curve), padding 24–32px, max width 420px for side panels. Layering: background world (z 10) → bottle (z 15) → glass panels (z 20) → nav glass (z 50). Mobile: panels become bottom sheets (radius 20px top).

## 4. Motion & interaction language

- Glass behaves like a physical pane: panels slide in 24px with blur ramping from 0 → 24px (600ms `cubic-bezier(.16,1,.3,1)`) — the "frosting" effect.
- Specular highlight follows the pointer across panel edges (a radial gradient on the 1px border, updated via CSS variables at 60fps; off on touch).
- Refraction: on hero panels only, an SVG displacement filter bends the background by 4–6px at the panel edges (Liquid-Glass-like); disabled on low-power devices.
- Scroll: panels drift at 1.05× relative to the world (slight parallax gives the sense of a pane in front).
- Cursor: a 28px glass lens (backdrop blur 6px, thin edge) that slightly magnifies (scale 1.06) what is under it; **link** → lens contracts to 16px with green edge; **bottle** → lens grows to 72px with `DRAG` / `TILT` inside; touch: off.
- Hover on panels: blur deepens 24 → 32px, edge brightens, lifts 4px.
- Page transitions: a full-screen frosted pane slides up (700ms), blurs the old page, then clears to the new one.

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands on milk with real contact shadow and a soft caustic (a light green-white pattern) cast beside it as if morning light passes through the glass. Two small glass tags float near it (`RETURNABLE GLASS`, `TRACEABLE`), each anchored by a hairline. Float ±8px / 6s, tilt ±6°; caustic shifts with tilt.

**Rotation.** With 360 frames: drag to rotate; a horizontal glass strip under the bottle shows the angle and a "magnifier" lens can be dragged over the label to read it (zoom 2×, using the high-res frame). Without frames: ±20° tilt; the glass strip shows "360° view coming soon".

**Variant worlds** — the colour world behind, glass on top:
- **MASTER 26** — deep forest canopy world (`#0A2A20` → `#1F5C45`), leaf shadows moving; glass panel tinted green, milk text.
- **ROOT 14** — red earth world (`#4A0A0F` → `#B3202A`), dust particles; glass tinted red, milk text.
- **BASE 3** — golden-hour world (`#5A3304` → `#E89A1C`), warm sun flares; glass tinted amber with **ink** text (amber needs dark text).
- **ESSENTIAL** — ivory gallery world (`#F4EDE2` → `#CDB89A`); frosted milk glass panel, ink text — the subtlest.
Panel content: V-code, name, line, descriptors (pending with dotted underline + small "pending" label), price only when approved.

## 6. Page-by-page treatment

### Home
| # | Chapter | Glass treatment |
|---|---|---|
| 01 | Hero | Minimal milk hero; bottle with caustic; two floating glass tags; glass nav appears only after scroll. |
| 02 | Bottle becomes the story | Background goes milk → forest; six words appear as small glass chips orbiting the pinned bottle; active chip expands into a glass card with one line. |
| 03 | Cow to bottle | Seven stations drawn on paper; a glass "viewfinder" slides along the track and magnifies each station as it passes. |
| 04 | Where it begins | Full-bleed real farm photography; text in a glass panel lower-left (blur 24px, milk-glass). |
| 05 | Breeds | Portrait full-bleed; breed name and region in a glass label; index list in a glass rail. Pending labels. |
| 06 | Traceability | **Signature use**: deep forest map; node panels are dark glass sliding from the right; the glowing path visible through the panel. "Illustrative journey — not live data". |
| 07 | Quality | Lab white with a glass "sample slide": 16 parameters on a frosted panel over a macro photo of milk; values pending. |
| 08 | Four milks | **Signature use**: four worlds with tinted glass panels. |
| 09 | Milk as material | Milk ribbon seen through a thick glass pane (refraction filter) — milk and glass together. |
| 10 | Heritage | Paper chapter — glass off. |
| 11 | Technology | Dark grid; seven verbs on glass tiles with signal-green edges; "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | Warm-gold world; three jars; glass labels; source-milk link lines. |
| 13 | Trace your milk | Charcoal ground with a large glass console; results stack as glass steps; DEMO badge solid (not translucent). |
| 14 | Story | Paper timeline — glass off. |
| 15 | Final CTA | Milk → forest; bottle returns with caustics; CTA in glass bar; footer solid forest. |

### Inner pages
- **/milk** — four bottles; hovering one fills the background with its world and raises a glass mini-panel.
- **/milk/[variant]** — full world + viewer + glass spec panel + label magnifier.
- **/ghee** — gold world, glass labels.
- **/origin** — photo essay with glass captions.
- **/trace** — dark map + glass panels + console. **/technology** — glass tiles.
- **/about** — paper, glass off except the nav.
- **/reserve** — form on a frosted panel over a soft variant world matching the chosen milk.

## 7. Component variants

`GlassPanel` (light/dark/charcoal/tinted) · `GlassNav` · `GlassChip` · `LensCursor` · `CausticLight` · `RefractionFilter` · `LabelMagnifier` (360 viewer add-on) · `Viewfinder` (journey) · `GlassTraceSheet` · `GlassConsole` · `FrostedSheet` (mobile bottom sheet) · `FrostTransition` · `ClaimText` · `AssetSlot` (frosted empty frame with the missing asset named).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Glass material system | Panel tokens, blur scale, edge highlights, fallback opaque tokens | Text on every glass/world combo ≥ 4.5:1 (tested at worst background point) | Brand colours | 3 |
| 2 | Shell | Glass nav, lens cursor, frost transition | Components + `@supports` fallback | Without backdrop-filter, panels become 92% opaque and still pass contrast | Wordmark | 3 |
| 3 | Hero | Bottle + caustics + tags | CausticLight, glass tags | LCP ≤ 2.0s; caustic off on low-power | Renders | 3 |
| 4 | Story sequence | Glass chips orbit | Chips → card | Reduced motion = list | — | 3 |
| 5 | Cow → bottle | Viewfinder track | Magnifier along 7 stations | Magnifier optional; content readable without | — | 3 |
| 6 | Origin | Photo + glass captions | Panels on photos | Caption contrast checked per photo | B1, B2 | 2 |
| 7 | Breeds | Glass labels/rail | Portrait + rail | Pending labels | B3, approval | 2 |
| 8 | Trace map | Dark glass sheets | Map + sliding sheets | Esc closes; focus trapped in sheet; DEMO solid | Trace wording | 3 |
| 9 | Quality | Sample-slide panel | Frosted panel + macro photo | No invented values | Macro milk photo, lab approval | 2 |
| 10 | Four worlds + 360 | Tinted glass worlds + magnifier | 4 worlds, viewer, LabelMagnifier | Magnifier uses high-res frames; 50fps mid Android | **360 sequences (A)** 2400px | 6 |
| 11 | Heritage | Glass-off paper chapter | Statement | — | Heritage line | 1 |
| 12 | Technology | Glass tiles | 7 tiles | Public verbs | — | 2 |
| 13 | Ghee | Gold world + labels | Jars, links | Mapping correct | Jar cutouts | 2 |
| 14 | Trace demo | Glass console | Console + steps | DEMO opaque; errors in text | — | 3 |
| 15 | /milk pages | World-on-hover lineup + variant pages | Pages | World swap ≤ 600ms | A, pricing | 4 |
| 16 | /origin, /trace, /technology | Inner pages | Pages | ≤ 2 MB first load | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining | Frosted form | Form fields opaque inside glass | Milestones | 3 |
| 18 | Mobile pass | Bottom sheets, reduced blur | FrostedSheet, blur 12px max | Mid Android 55fps scroll | — | 4 |
| 19 | A11y + reduced motion | Contrast & transparency prefs | `prefers-reduced-transparency` → opaque panels | axe clean; reduced transparency honoured | — | 2 |
| 20 | Perf, QA, handover | Ship | Blur budget audit, docs | ≤ 3 simultaneous blurred layers per viewport; INP ≤ 180ms | Approvals | 4 |

Total ≈ 57 days.

## 9. Assets needed from DESIGO®

1. 360 sequences (A) at 2400px (the label magnifier needs resolution).
2. Optional: a real photo/video of the bottle in morning light showing caustics (reference for CausticLight).
3. Macro photograph of milk in glass (quality chapter backdrop).
4. Photography B1–B8; ghee jar cut-outs.
5. Confirmation of the CHILL story (temperatures only if approved) — condensation visuals must not imply specific temperatures.

## 10. Performance, accessibility and mobile

- Performance: `backdrop-filter` is GPU-heavy. Budget: max 3 blurred layers per viewport, blur ≤ 24px desktop / 12px mobile; never animate blur radius continuously on mobile (step it); refraction filter desktop-only; detect low-power (`hardwareConcurrency ≤ 4`, Save-Data) → opaque mode.
- Accessibility: text is always solid; panels have a minimum 0.58 opacity fill so contrast never depends on blur; honour `prefers-reduced-transparency` and `prefers-contrast: more` with opaque panels; never put DEMO/pending labels on translucent backgrounds.
- Reduced motion: no frosting animation, no specular following, no caustic movement.
- Mobile: glass bottom sheets with drag handles; nav glass becomes solid after 200px scroll to save GPU.

## 11. Risks and premium guardrails

Risks: generic fintech/crypto look; illegible text over busy backgrounds; poor performance on Indian mid-range phones; glass on milk-white looking like nothing.

**Premium guardrails**
1. Glass because the bottle is glass — tie every use to the product's material story.
2. Only over colour, photography or dark grounds; never glass-on-plain-milk.
3. Text is solid and high-contrast; translucency is for the surface, never for words.
4. Thin, precise edges (1px) and modest radii (20px) — no thick neon borders, no rainbow gradients.
5. No floating "orbs" or random gradient blobs behind glass; backgrounds are the real variant worlds and real photos.
6. Max three glass layers per viewport.
7. Condensation and frost only in CHILL contexts — meaning, not decoration.
8. Caustics subtle (≤ 12% opacity) and physically plausible.
9. Copy inside glass is short and factual: "Every bottle carries its own identity."
10. Always design the opaque fallback first; glass is the enhancement.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: forest glass at 0.42 and charcoal glass at 0.55 fail milk-text contrast when light content passes behind (2.3:1 and 3.8:1) — they are now valid only over deep worlds, with a 0.72 fill elsewhere (≥ 5:1); milk glass 0.58 was verified ≥ 5.6:1 over every world. Fonts already OFL (Geist included). Added glass tokens as a fallback-safe system, all states, cursor map, motion tokens and 11 image prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#1E7A68` | DESIGO® green (`--green`): primary CTA fill, links, focus ring on light | 4.7:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on green | 4.7:1 on primary |
| Secondary | `--c-secondary` | `#0B3B32` | forest (`--forest`): dark worlds, forest glass tint, footer (solid) | 11.3:1 on bg |
| Accent | `--c-accent` | `#7FE0B8` | signal mint (`--signal`): tech glow inside glass edges (ch. 11), focus ring on dark glass | 1.4:1 on bg; decorative on milk; 7.9:1 on forest |
| Background | `--c-bg` | `#F7F4EC` | milk base ground — glass is never used on plain milk | text 14.8:1 |
| Surface | `--c-surface` | `rgba(247,244,236,0.58)` | frosted milk glass `--gl-panel-light` + `backdrop-filter: blur(24px) saturate(140%)` + 2% frost noise; opaque fallback `#F1EDE4` (92%) | ink on the 0.58 fill measured ≥ 5.6:1 over every variant world and charcoal |
| Text | `--c-text` | `#1E211F` | ink — always solid, never translucent | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#4D504C` | secondary text on milk and opaque fallbacks | 7.4:1 on bg; only 2.8–3.6:1 on milk glass over dark worlds → inside glass, secondary text stays ink at a smaller size |
| Line | `--c-line` | `rgba(255,255,255,0.55)` | specular edge: top/left 1 px `rgba(255,255,255,.55)`, bottom/right `rgba(255,255,255,.12)` | decorative; interactive glass adds a 1 px `rgba(30,33,31,.35)` inner stroke |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#7A5A12` / `#171918` | ok = leaf green (verified only); pending = dotted underline + small 'pending' label in dark amber on a solid chip; DEMO = solid charcoal badge — never on a translucent background | ok 7.1:1 · pending 5.8:1 · demo 16.1:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | world `#0A2A20` → `#1F5C45` canopy; glass tint `rgba(31,92,69,.35)`; milk text |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | world `#4A0A0F` → `#B3202A` red earth; glass tint `rgba(179,32,42,.30)`; milk text |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | world `#5A3304` → `#E89A1C` golden hour; glass tint `rgba(232,154,28,.28)`; **ink** text |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | world `#F4EDE2` → `#CDB89A` ivory gallery; frosted milk glass; ink text |

Dark-chapter inversion: forest and charcoal chapters (02, 06, 11, 13, 15) switch panels to dark glass: `--c-surface` → `rgba(11,59,50,.42)` over deep worlds only (`rgba(11,59,50,.72)` wherever lighter content can pass behind) or charcoal `rgba(23,25,24,.55)` (0.72 fallback); `--c-text` → `#F7F4EC`, `--c-text-muted` → `#C9D3CE`, focus ring → signal `#7FE0B8`.

Glass tokens: `--blur-1 12px` (nav) · `--blur-2 24px` (panels) · `--blur-3 40px` (modal) · `saturate(140%)`; mobile ≤ 12 px. Max three glass layers per viewport. `@supports not (backdrop-filter)` and `prefers-reduced-transparency` → opaque fills (`#F1EDE4`, `#0F4A3F`, `#1F2321`).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` · Google Fonts | 300, opsz 144 | clamp(3.25rem, 8vw, 8.5rem) | 1.0 | -0.02em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` | H1 300 / H2 400 | H1 clamp(2.4rem, 4.6vw, 4.5rem) · H2 clamp(1.6rem, 2.6vw, 2.5rem) | 1.05 / 1.15 | -0.01em | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` | 500 inside glass / 400 outside | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.55 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 600 | 0.72rem | 1.3 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` | 500 | 0.875rem | 1.45 | 0 | As data (glass readouts) |
| Devanagari (optional) | Noto Sans Devanagari (variable) | `@fontsource-variable/noto-sans-devanagari` | 400 / 500 | matches body | 1.6 | 0 | — |

Licence: Fraunces, Inter Tight, JetBrains Mono, Noto Sans Devanagari and Geist (tech-chapter display alternative, `@fontsource-variable/geist`, 300) are SIL OFL 1.1. Pairing: warm editorial Fraunces outside the glass, a slightly heavier Inter Tight inside it because blur behind lowers apparent contrast.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 5vw margins, 24 px gutters, max-width 1600 px; side panels max 420 px. Layers: world (z 10) → bottle (z 15) → glass panels (z 20) → nav glass (z 50). Mobile: panels become bottom sheets.
- **Spacing scale:** design-system 4 px scale; glass padding 24–32 px.
- **Radius:** `sm 12px` (chips, inputs) · `md 20px` (panels — the bottle-shoulder curve; documented exception to radius 0) · `lg 28px` (console) · bottom sheets 20 px top only.
- **Borders:** 1 px specular edge (bright top/left, faint bottom/right); interactive glass adds a 1 px dark inner stroke for ≥ 3:1 boundary.
- **Elevation:** `0 24px 48px rgba(11,59,50,.18)` under panels; hover lifts 4 px; bottle keeps contact shadow + soft caustic (≤ 12% opacity).
- **Texture/overlay:** 2% frost noise *on* the glass; condensation droplets only in CHILL contexts; caustics cast by the bottle.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — solid (not glass) green `#1E7A68` pill-free rectangle, radius 12 px, milk Inter Tight 600 label + arrow; 52 px tall, padding 0 28 px; inside glass panels it keeps its solid fill · hover arrow travels 6 px, fill `#0F4A3F`, specular edge appears · focus-visible 2 px `#1E211F` ring + 2 px milk offset (on dark: signal ring) · active fill `#0B3B32` · disabled `#C9C6BD` fill, ink 55% · loading a thin specular sweep crosses the button (1.2 s loop, stops under reduced motion).
- **Secondary button** — glass button: milk glass fill (0.58) + blur 12 px, 1 px specular edge + 1 px dark inner stroke, ink label; on dark worlds forest glass with milk label · hover blur 24 px and edge brightens, lift 2 px · focus-visible ring · active fill 0.72 · disabled 40% · loading specular sweep.
- **Text / arrow link** — design-system underlined label + arrow; ink on light, milk on dark; hover underline green (signal on dark), arrow travels 8 px; focus-visible outline.
- **Icon button (incl. menu)** — 44 px circular milk-glass disc, blur 12 px, specular edge, 20 px 1.5 px-line icon; menu = two lines; hover edge brightens, scale 1.04; focus-visible ring; active fill 0.72; disabled 40%; `aria-label`, `aria-expanded`.
- **Navigation bar** — glass nav appears after the hero scroll: 64 px, milk glass (blur 12 px, saturate 140%), specular bottom edge, logo left, links Inter Tight 500, Reserve primary; becomes solid `#F1EDE4` after 200 px on mobile to save GPU; on dark chapters forest glass with milk text. Mobile menu: full-height frosted sheet (blur 40 px) with large Fraunces links. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default 28 px glass lens (blur 6 px, thin edge, magnify 1.06) · hover (link): lens contracts to 16 px with a green edge · ROTATE (bottle): lens 72 px + `ROTATE` inside · EXPLORE (world): lens 48 px + `EXPLORE` · ENTER (variant world/tile): lens + `ENTER` · VIEW (label magnifier/photo): lens 2× + `VIEW` · TRACE (node): signal-edged lens + `TRACE`. Touch: off; the label magnifier becomes a draggable bottom-sheet lens.
- **Card / panel / info block** — `GlassPanel` light/dark/charcoal/tinted: radius 20 px, padding 24–32 px, blur 24 px, 2% frost noise, specular edge, min fill per token · hover blur 32 px, edge brightens, lift 4 px · focus-visible ring · active fill +0.1 · disabled n/a · loading the panel frosts in (blur 0 → 24 px, 600 ms) with solid skeleton lines.
- **Badge / tag** — solid chips (not translucent), radius 12, 26 px: neutral milk `#F1EDE4`; variant light fill + deep text; **pending verification** = dotted underline on the claim + solid milk chip 'pending' in `#7A5A12` + popover; **DEMO · not live data** = solid charcoal `#171918` chip, milk text — never on glass alone.
- **Input + form field** — inside the charcoal glass console: label above, 56 px input on a solid `#1F2321` field, radius 12, 1 px `rgba(255,255,255,.35)` edge, JetBrains Mono, placeholder `DSG-BTL-000001-3 (sample format)` · hover edge .55 · focus-visible 2 px signal ring · invalid `#E36B6B` edge + message · disabled 40% · loading results stack in as glass steps, each with the solid DEMO badge first.
- **Divider / ornament** — a 1 px specular hairline `rgba(255,255,255,.4)` on dark glass, `rgba(30,33,31,.12)` on light; no ornament.
- **Section header** — chapter number in JetBrains Mono inside a small glass chip, title Fraunces 300 outside the glass, eyebrow label Inter Tight uppercase.
- **Product info block** — tinted glass panel over the variant world: V-code mono, name Fraunces, line, size `1 L glass · 900 g` (pending), price only when approved ('Price pending confirmation'), descriptors with pending chips; text colour per world (milk on MASTER 26/ROOT 14, ink on BASE 3/ESSENTIAL).
- **Bottle stage** — bottle on milk (hero) or inside its world with real contact shadow and a soft green-white caustic cast beside it (≤ 12%, shifts with tilt); two small glass tags (`RETURNABLE GLASS`, `TRACEABLE`) anchored by hairlines; float ±8 px / 6 s, tilt ±6°; 360 frames add a glass angle strip and a draggable label magnifier (2×, from the high-res frame).
- **Trace node / timeline step** — glowing node 12 px (signal ring) on the forest map; states upcoming (ring 40%) · active (filled signal + dark glass panel slides in from the right) · visited (milk fill) · hover glow · focus-visible signal ring 2 px offset; 'Illustrative journey — not live data' badge solid.

### 12.5 Iconography & illustration
- **Icons:** 1.5 px line icons, 24 px grid, round caps; milk or ink; faint glow (`drop-shadow 0 0 6px rgba(127,224,184,.5)`) only on dark glass.
- **Illustration:** none; the variant worlds, caustics and condensation are the atmosphere (AI plates below for prototypes; real morning-light bottle footage is the reference for caustics).
- **Photo treatment:** rich, colour-graded photography behind glass; text never sits on a photo without a glass panel at its minimum fill.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | frosting in (blur 0 → 24px, slide 24px) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | frost page transition |
| `--dur-micro` | `240ms` | hover, edge highlight |
| `--dur-reveal` | `600ms` | panel frosting |
| `--dur-scene` | `700ms` | full-screen frosted pane slides up |
| `--parallax-glass` | `1.05` | glass drifts relative to the world |
| `--specular` | `60fps CSS vars, off on touch` | pointer-following edge highlight |

Refraction (SVG displacement 4–6 px) on hero panels only, desktop only. Never animate blur continuously on mobile (step it). Reduced motion: no frosting animation, no specular following, no caustic movement; logo static. Low-power (hardwareConcurrency ≤ 4, Save-Data) → opaque mode.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Backdrops are the colour worlds and light effects the glass sits over; no product in any plate.

**Tail prompt (append to every prompt):** *premium glass-and-light photography, morning light through clear glass, soft caustics and gentle condensation, deep forest #0B3B32, brand green #1E7A68, signal mint #7FE0B8 accents and milk white #F7F4EC, shallow depth of field, clean, cool, calm, Apple-launch quality, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/glassmorphism/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Milk-white surface in early morning light with a soft green-white caustic light pattern cast across it, as if sunlight passed through clear glass, vast empty centre | objects, glasses, bottles, reflections of objects | 01 Hero |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical milk-white surface with a soft caustic light pattern in the lower third, empty centre, morning light | objects, bottles | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | Deep forest canopy interior, dark green #0A2A20 to #1F5C45, moving leaf shadows and dappled light, soft bokeh, empty clearing in the centre | animals, people, paths | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Red earth landscape at dusk, oxblood #4A0A0F to red #B3202A, fine dust particles catching low light, soft bokeh, empty centre | people, vehicles | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Golden-hour field dissolving into amber haze, deep brown #5A3304 to amber #E89A1C, warm sun flares, soft bokeh, empty centre | people, harsh lens flare streaks | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Ivory gallery room #F4EDE2 with soft skylight and pale beige #CDB89A shadows, a pale sandstone plinth in the centre, empty | art on walls, people | 08 Four milks · /milk/essential |
| 7 | `trace/night-map.png` | 3600×2000 | no | Deep forest-green night landscape seen from above, an abstract glowing mint path winding through it with small soft light points, very minimal, misty | city lights, roads with cars, labels | 06 Traceability, /trace |
| 8 | `technology/glass-grid.png` | 3600×2000 | no | Dark forest #07211C void with a faint mint perspective grid receding to a horizon and thin luminous lines curving across, soft depth | neon pink, text, screens | 11 Technology |
| 9 | `textures/condensation.png` | 2400×2400 | yes (real alpha) | Fine water condensation droplets of varied size on clear glass, macro, isolated on transparent background, crisp | frost text, smudges | CHILL panels (ch. 02, 06, 11) |
| 10 | `textures/frost-noise.png` | 1024×1024, seamless | yes (real alpha) | Seamless tileable fine monochrome frost noise like sandblasted glass, isolated on transparent background | patterns, banding | glass frost noise (2%) |
| 11 | `ghee/gold-world.png` | 3200×2000 + 1400×2400 | no | Warm honey-gold light falling across a softly blurred rustic Rajasthani kitchen corner with earthen pots and a wooden churn far out of focus, empty foreground centre | jars, bottles, people | 12 Ghee · /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/10_glassmorphism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/glassmorphism/
- [ ] Opaque fallback designed first: `@supports not (backdrop-filter)`, `prefers-reduced-transparency`, `prefers-contrast: more` and low-power mode all pass contrast
- [ ] Max three blurred layers per viewport; never glass on plain milk
