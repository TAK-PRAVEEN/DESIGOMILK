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
