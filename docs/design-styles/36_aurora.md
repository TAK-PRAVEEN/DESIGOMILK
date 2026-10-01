# 36 · Aurora — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

The Aurora style (also "aurora gradients" or "mesh gradient UI", popular since about 2021) uses soft, slowly moving, blurred colour fields that look like northern lights or diffused light through mist. Colour blobs blend into each other with heavy blur, often over dark or very light grounds, sometimes with grain. It feels atmospheric, calm, alive and premium, and it is widely used in AI, fintech and audio products.

Reference points:
1. **Stripe's animated mesh-gradient header (2020–22)**: the archetype of a moving gradient made with WebGL.
2. **Apple's macOS / iOS wallpapers and Apple Music's dynamic gradients**: soft colour light sampled from the content.
3. **James Turrell's light installations**: colour as an atmosphere you stand inside. This is the fine-art reference for restraint.

## 2. Fit for DESIGO® — score 3 / 5 (whole site) · 4 / 5 (atmosphere layer)

**Why it fits.** DESIGO®'s day starts **before dawn**: collection, chilling and delivery happen in the blue hour, then the sun rises over the Thar. An aurora rebuilt as a **"Thar dawn"** (milk white, soft gold, mint and forest) gives the site a living atmosphere that changes with scroll, like dawn breaking as you follow the milk. It's cheap to render (one shader or CSS layers), it frames the bottle beautifully, and it can carry each **variant's colour** as a soft light around the bottle.

**Where it fights.** Aurora gradients are now generic, especially in tech and AI. Purple-blue-pink auroras say "SaaS" or "crypto", not dairy. They carry no heritage, no soil, no craft, and the style alone cannot tell a provenance story. Heavy blur behind text also hurts legibility.

**Recommendation.** Use Aurora as an **atmosphere layer**, not as the identity: the hero background light, Chapter 09 "Milk as material", the four variant worlds' glow, and the Final CTA dawn. Pair with Editorial, Wabi-Sabi or Futuristic for structure, and real photography for proof. Never use purple or pink.

## 3. Art direction

### Palette ("Thar dawn aurora")
Base grounds:
| Token | Hex | Role |
|---|---|---|
| `--au-milk` | `#F7F4EC` | Light ground |
| `--au-night` | `#08201B` | Pre-dawn ground (forest pushed dark) |
| `--au-forest` | `#0B3B32` | Brand dark |
| `--au-ink` | `#1E211F` | Body text on light |

Light colours (blob fills; always blurred, never used for text):
| Token | Hex | Meaning |
|---|---|---|
| `--au-dawn-gold` | `#E9C98A` | First sun (softened gold) |
| `--au-peach` | `#F2C7A5` | Dawn warmth |
| `--au-mint` | `#BFE6D4` | Cool morning air (tint of signal) |
| `--au-green` | `#1E7A68` | DESIGO green light |
| `--au-sky` | `#A9C9C6` | Blue-hour haze (green-grey, not blue) |
| `--au-cream` | `#FFF8E8` | The milk glow |

**Banned**: purple, magenta, electric blue, pink. The aurora must always contain at least one warm (gold/peach/cream) and one green tone, so it reads as DESIGO® dawn rather than tech.

### Typography
- Display: **Fraunces** 300 (opsz 144, SOFT 100). Soft letterforms suit soft light. Big, airy, generous tracking (−0.01em).
- Text and UI: **Inter Tight** 400; labels uppercase +0.18em.
- Data: **JetBrains Mono**.
- Text always sits on a **legibility veil** when over aurora: a 60–80% milk (or night) panel with `backdrop-filter: blur(24px)`, or a solid zone of the gradient engineered to be calm behind type.

### Texture and imagery
- Grain: 3–4% monochrome film grain over every aurora (prevents banding, adds tactility). Static, not animated (animated grain reads as video noise).
- Blobs: 3–5 per scene, 40–90vw diameter, `filter: blur(80–140px)` (CSS) or a WebGL mesh-gradient shader with 4–6 control points.
- Photography: real DESIGO® photos at dawn, graded to match the aurora's palette (warm highlights, green-grey shadows), shown sharp. Aurora never overlays a photograph.

### Iconography
Thin 1.25px line icons in forest (on light) or milk (on dark). No glows on icons.

### Grid
12 columns, 5vw margins. Aurora is a fixed, full-viewport background layer (z: scene) behind content. Typography sits in calm "clearings": the shader's control points are positioned **away** from text columns per section (the layout passes a "keep-clear" rectangle to the shader). Mobile: 4 columns, blobs reduced to 3.

## 4. Motion and interaction language
- **Breathing.** Blobs drift on slow Lissajous paths (periods 18–40s), amplitude ≤ 6% of viewport. This is the only autonomous motion and it pauses when the tab is hidden.
- **Scroll.** Section progress interpolates the palette (CSS variables or shader uniforms): night → blue hour → dawn gold → milk day. `scrub: 1`. Transitions between section palettes take ≥ 1200ms of scroll.
- **Cursor.** A soft 160px light (radial `--au-cream` at 18%) follows the pointer with 0.08 lerp, gently brightening the aurora where you look; plus the master 12px ring for precision. Over links: the ring fills milk. Over the bottle: `DRAG`. On touch devices the light follows the last touch and fades after 1.5s.
- **Hover.** Buttons: master underline-and-arrow; the 1px frame draws itself; the nearest blob brightens 6%.
- **Transitions.** Page changes crossfade the aurora palette (1200ms `cubic-bezier(.65,0,.35,1)`) while content fades and rises (600ms `cubic-bezier(.16,1,.3,1)`).

### The bottle
The bottle floats in its own light. A **variant-coloured aurora halo** sits behind it (two blobs, the variant's base and light colours, 60% opacity) plus a cream glow through the milk (a radial highlight placed behind the glass so the milk appears lit from within). Contact shadow on light grounds; on dark grounds a faint reflected glow on the floor instead. 6s float ±10px, tilt ±8°. The halo shifts opposite to the tilt (parallax 12px). In the 360 viewer the halo stays fixed while the bottle turns.

## 5. Variant worlds — four lights

| Variant | Ground | Aurora blobs | Mood |
|---|---|---|---|
| MASTER 26 (V1+) | `#0A2A20` | `#1F5C45`, `#BFE6D4`, `#E9C98A` (small) | Forest at first light |
| ROOT 14 (V1) | `#2A0A0D` | `#B3202A` at 50%, `#F2C7A5`, `#E9C98A` | Red earth dawn |
| BASE 3 (V2) | `#F8E4C2` | `#E89A1C` at 45%, `#FFF8E8`, `#F2C7A5` | Golden hour, light ground |
| ESSENTIAL (V3) | `#F4EDE2` | `#CDB89A` at 40%, `#FFF8E8` | Soft ivory morning, the quietest |

Info panel: a frosted panel (milk at 72% or night at 64%, blur 24px, 1px hairline) with V-CODE, name, price (*pending*), descriptors (*pending*).

## 6. Page-by-page treatment

1. **Hero.** Pre-dawn ground `#08201B` with a gold-and-mint aurora low on the horizon; the bottle lit from within. "Milk from the source." in Fraunces 300, milk white. As you scroll, dawn rises (gold spreads upward).
2. **Bottle becomes the story.** Six words appear around the bottle; each word nudges the aurora (ORIGIN warms gold, QUALITY cools mint). Ground ends in forest.
3. **Cow to bottle.** Aurora fades to milk paper; the journey uses the paired style (linework or vector). A thin dawn band runs along the top as a progress line.
4. **Farm.** Paired style with real dawn photography; no aurora over photos.
5. **Breeds.** Paired style; a very faint warm aurora in the margins only.
6. **Traceability.** Deep forest ground, mint aurora pooled behind the map; nodes crisp, path pulse in `#7FE0B8`. DEMO label.
7. **Quality.** **Aurora off.** Clinical milk white. "16" and the list. Values pending.
8. **Four milks.** The four lights (§5), crossfading between variants as you scroll.
9. **Milk as material.** **The style's best chapter**: the aurora becomes milk, cream and white blobs folding over each other like milk poured into milk (shader with high-viscosity flow), on a milk ground. Pure, minimal, hypnotic.
10. **Heritage.** Paired heritage style; a warm gold aurora at 10% behind the paper.
11. **Technology.** Night ground with a thin mint aurora above a hairline grid. "Tradition is the source. Technology protects the journey."
12. **Ghee.** Warm gold aurora (`#E9C98A`, `#C8A96B`, `#F2C7A5`) behind the jar, as if lit by low sun. Three grades.
13. **Trace your milk.** Charcoal ground, a faint mint aurora; a crisp input; DEMO badge.
14. **Story.** Paired editorial, aurora off.
15. **Final CTA.** **Full sunrise**: night → gold → milk white across 100vh; the bottle returns. "Know where your milk comes from."

### Inner pages
- **/milk**: four lights side by side as tall columns; hovering one expands its light.
- **/milk/[variant]**: variant light hero, 360 viewer with fixed halo, facts on a frosted panel.
- **/ghee**: golden light.
- **/origin**: paired style; dawn light only in the hero.
- **/trace**: deep forest with mint light behind the map.
- **/technology**: night + mint.
- **/about**: paired editorial.
- **/reserve**: milk ground with a faint dawn in the corner; a calm form.

## 7. Component variants
`AuroraField` (WebGL mesh gradient with CSS fallback; palette uniforms; keep-clear rects) · `DawnScroll` (palette interpolation by section) · `VariantHalo` · `LitMilkBottle` · `LegibilityVeil` (frosted panel) · `CursorLight` · `MilkFold` (Chapter 09 shader) · `GrainOverlay` (static) · `AssetSlot` as a frosted panel labelled with the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Thar-dawn palette, Fraunces 300 | Tokens, palette rules, specimen | No purple/pink/blue; every aurora has warm + green | Brand colours | 2 |
| 2 | Shell | `AuroraField` + fallbacks, nav, cursor light | Shader, CSS fallback, shell | 60fps on mid Android; fallback on no-WebGL / low memory | none | 5 |
| 3 | Hero and bottle | Lit-from-within bottle in pre-dawn | Hero, `VariantHalo` | Milk reads white; text ≥ 7:1 via clearing | Renders | 3 |
| 4 | Bottle → story | Word-driven light shifts | Chapter 02 | Palette shifts ≥ 1200ms of scroll | Copy | 2 |
| 5 | Cow → bottle | Paired-style journey + dawn progress | Chapter 03 | Aurora never over photos | Paired style, B4, B8 | 3 |
| 6 | Origin | Paired style | Chapter 04 | — | B1, B2 | 2 |
| 7 | Breeds | Paired, margin light | Chapter 05 | Pending labels | B3 | 2 |
| 8 | Trace map | Mint pool behind map | TraceMap skin | Map crisp; DEMO; keyboard | traceNodes | 3 |
| 9 | Quality | Aurora off | Chapter 07 | Clinical; no invented values | Lab approval | 1 |
| 10 | Four worlds + 360 | Four lights | Chapter 08 | Halo fixed during spin; crossfades smooth | A | 5 |
| 11 | Heritage | Warm 10% light | Chapter 10 | Paper texture unaffected | Line art | 2 |
| 12 | Technology | Night + mint | Chapter 11 | Public vocabulary | none | 2 |
| 13 | Ghee | Gold light | Chapter 12 | Prices pending | Jar render | 2 |
| 14 | Trace demo | Charcoal + mint | Chapter 13 | DEMO prominent | demoProvider | 2 |
| 15 | /milk pages | Light columns + variant | 5 routes | Frosted facts AA | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Shader instance shared across pages | B1–B8 | 3 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Verified only | none | 3 |
| 18 | Mobile | 3-blob aurora, touch light | Mobile pass | Shader ≤ 2ms/frame; DPR capped at 1.5 | none | 3 |
| 19 | A11y + reduced motion | Static dawn | Still gradient image per section | No drift; text AA in every state | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, shader docs, handover | Shader JS ≤ 25 KB gz; LCP < 2.5s; no banding on 8-bit displays | all | 3 |

Total ≈ 54 days (plus the paired style's chapters).

## 9. Assets needed from DESIGO®
- 360 sequences (A). The fixed halo with a turning bottle depends on them.
- **Dawn photography**: real farm and Thar horizon at blue hour and sunrise (used to sample the aurora palette, so the light is literally DESIGO®'s dawn).
- Confirmation of variant cap colours (C) for halos.
- Optional: a slow-motion milk-pour clip to calibrate the Chapter 09 milk-fold shader.

## 10. Performance, accessibility and mobile
- One WebGL canvas for the whole page (not one per section), resolution scaled to 0.5× and upsampled (blur hides it). Pause on `visibilitychange` and when off-screen.
- Fallbacks: CSS blurred blobs (3 layers, `will-change: transform`) and, for reduced data or low memory, a static AVIF gradient per section (≤ 30 KB).
- Static grain prevents banding; test on 8-bit sRGB laptops and budget Android screens.
- Legibility: text only in clearings or on veils; automated contrast checks sample the rendered background.
- Reduced motion: no drift, no cursor light, palette changes as instant section states.
- Mobile: 3 blobs, DPR capped, cursor light replaced by a touch glow that fades.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Dawn palette only (gold, peach, cream, mint, green-grey, forest). Never purple, pink, magenta or electric blue.
2. Aurora is atmosphere, never content. It never overlays photographs, labels or data.
3. Slow motion only (periods ≥ 18s). Nothing pulses or flashes.
4. Static grain at 3–4%, so the gradients feel physical rather than digital.
5. Quality, Origin and Story chapters run with aurora off. Truth stays sharp.
6. Every chapter's light means something: blue hour = collection, gold = sunrise delivery, milk = the product.
7. Text contrast is checked against the actual rendered background in QA, not against the token.

**Risks**: generic SaaS look, legibility, GPU cost, no heritage. Mitigation: Thar-dawn palette, paired structural style, performance budgets, keep-clear text zones.

**Best used for:** an atmosphere layer: the hero pre-dawn light, the four variant halos, the "milk as material" chapter and the sunrise final CTA.
