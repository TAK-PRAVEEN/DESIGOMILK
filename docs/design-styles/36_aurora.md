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

**Why it fits.** DESIGO®'s day starts **before dawn**: collection, chilling and delivery happen in the blue hour (timings *pending ops confirmation*), then the sun rises over the Thar. An aurora rebuilt as a **"Thar dawn"** (milk white, soft gold, mint and forest) gives the site a living atmosphere that changes with scroll, like dawn breaking as you follow the milk. It's cheap to render (one shader or CSS layers), it frames the bottle beautifully, and it can carry each **variant's colour** as a soft light around the bottle.

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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Good Thar-dawn palette and performance notes; missing were colour roles (surface, muted text, states), font packages and sizes, component states, motion token table, image prompts and acceptance list. All added. Fonts already OFL (Fraunces, Inter Tight, JetBrains Mono). Body fix: blue-hour collection/chilling/delivery timing in §2 marked pending ops confirmation.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | brand forest: primary CTAs, headlines on light, dark grounds | 11.3:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#F7F4EC` | text on forest | 11.3:1 on primary |
| Secondary | --c-secondary | `#1E7A68` | DESIGO green light, links | 4.7:1 vs bg (text-safe) |
| Accent | --c-accent | `#E9C98A` | dawn gold: light fields, highlights, active halo | decorative light only, never text; focus ring uses --c-primary on light / `#BFE6D4` on dark |
| Background | --c-bg | `#F7F4EC` | milk ground (day); pre-dawn ground `#08201B` in dark chapters | 14.8:1 with text |
| Surface | --c-surface | `#FFF8E8` | legibility veil: cream at 72% + `backdrop-filter: blur(24px)` + 1 px hairline | text on surface 15.4:1 |
| Text | --c-text | `#1E211F` | body text on light (only in clearings or on veils) | 14.8:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#5B5C58` | captions, labels (ink at 72%) | 6.1:1 vs bg (text-safe) |
| Line | --c-line | `rgba(11,59,50,.14)` | hairlines on veils and dividers | decorative |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#E9C98A` / `#0B3B32` | ok = green filled node; pending = 1px dotted dawn-gold underline + "PENDING" tag (ink text); DEMO = forest badge "DEMO · not live data", milk text, never over aurora without a veil | DEMO badge milk on forest = 11.6:1; gold underline is a marker only |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | ground `#0A2A20`, blobs `#1F5C45`, `#BFE6D4`, small `#E9C98A`: forest at first light |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | ground `#2A0A0D`, blobs `#B3202A` 50%, `#F2C7A5`, `#E9C98A`: red earth dawn |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | ground `#F8E4C2`, blobs `#E89A1C` 45%, `#FFF8E8`, `#F2C7A5`: golden hour, light ground |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | ground `#F4EDE2`, blobs `#CDB89A` 40%, `#FFF8E8`: soft ivory morning, the quietest |

Dark-chapter inversion: hero, ch. 02, Traceability, Technology and Trace-your-milk run pre-dawn: `--c-bg` → `#08201B`, `--c-surface` → night veil `rgba(8,32,27,.64)` + blur 24 px, `--c-text` → `#F7F4EC`, muted → `#A9C9C6`, `--c-primary` → `#BFE6D4` (mint, CTA frame/focus), line → `rgba(247,244,236,.16)`, logo → white. Scroll interpolates night → blue hour → dawn gold → milk day.

Additional style tokens (kept from §3): Light fields (blurred, never text): `--au-dawn-gold` `#E9C98A`, `--au-peach` `#F2C7A5`, `--au-mint` `#BFE6D4`, `--au-sky` `#A9C9C6`, `--au-cream` `#FFF8E8`; grounds `--au-night` `#08201B`, `--au-forest` `#0B3B32`. Banned: purple, magenta, pink, electric blue. Every aurora contains ≥ 1 warm and ≥ 1 green tone.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | wght 300, opsz 144, SOFT 100 | `clamp(3.5rem, 2rem + 7vw, 9rem)` | 1.0 | −0.01em | Sentence |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | 300 / 400, SOFT 100 | H1 `clamp(2.6rem, 1.6rem + 4vw, 5rem)` · H2 `clamp(1.8rem, 1.3rem + 2vw, 3rem)` | 1.05 · 1.15 | −0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.65 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 500 | `.75rem` | 1.2 | +0.18em | Upper |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400, tabular | `.875rem` | 1.4 | +0.02em | Upper for IDs |
| Devanagari (optional) | Noto Serif Devanagari | `@fontsource-variable/noto-serif-devanagari` | 300 / 400 | matches H2 / body | 1.6 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Fraunces, Inter Tight, JetBrains Mono, Noto Serif Devanagari: OFL 1.1, no replacement needed. Pairing: soft, light Fraunces matches soft light; Inter Tight on veils keeps text crisp.

### 12.3 Layout & surfaces
- Grid: 12 columns (4 on mobile), 5vw margins, 24 px gutters, max-width 1440 px; aurora is a fixed full-viewport layer (z: scene) behind content.
- Clearings: the layout passes a keep-clear rectangle per section to the shader so control points sit away from text columns; otherwise text goes on a veil.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160.
- Radius: `sm 2px` · `md 12px` (veils, inputs) · `lg 20px` (large frosted panels); pill for cursor and tags.
- Border: 1 px hairline `rgba(11,59,50,.14)` (light) / `rgba(247,244,236,.16)` (dark) on veils.
- Shadow: none on UI; bottle: contact shadow on light, faint reflected glow on dark; variant halo (two blobs, 60%) behind.
- Texture: static 3–4% monochrome grain over every aurora (anti-banding); blobs 3–5 per scene (3 on mobile), 40–90vw, blur 80–140 px or a WebGL mesh shader with 4–6 control points.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: master DESIGO® button: underlined label + travelling arrow inside a 1 px forest frame (mint `#BFE6D4` on dark), 48 px, padding 14 px 22 px, radius 2 px. States: default · hover frame draws itself (400 ms), nearest blob brightens 6%, magnetic ≤ 6 px · focus-visible 2 px forest ring (mint on dark) offset 3 px · active fill forest, milk label · disabled 40%, no glow · loading arrow replaced by a slow breathing dot (1.8 s). 44 px target.
- **Secondary button**: label + arrow with 1 px underline; hover underline draws (240 ms); focus ring; active label green; disabled 40%; loading breathing dot.
- **Text / arrow link**: Inter Tight with 1 px green underline (milk on dark); arrow travels 4 px; focus ring.
- **Icon button (incl. menu)**: 44 px round veil button (cream 72% + blur), 1.25 px line glyph in forest (milk on dark), no glow on icons. Menu = two lines → X. Hover veil to 85% · focus ring · active forest fill · disabled 40%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: transparent over aurora; becomes a veil (cream 72% / night 64%, blur 24 px, hairline) after 80 px scroll; 72 px (56 px mobile); logo left, links label style, RESERVE primary. Mobile: menu opens a full-screen veil over a static dawn gradient, links 32 px Fraunces 300, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default master 12 px ring plus a soft 160 px light (radial cream 18%, lerp 0.08) that brightens the aurora where you look · hover ring fills milk · ROTATE `DRAG` over the bottle · EXPLORE `EXPLORE` ring 48 px · ENTER `ENTER →` over variant lights · VIEW over photos (light off over photos) · TRACE ring snaps to map nodes. On touch the light follows the last touch and fades after 1.5 s. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: LegibilityVeil panel: cream 72% (night 64%) + blur 24 px, 1 px hairline, radius 20 px, padding 28 px. Hover (interactive) veil 80% + hairline 30%; focus ring. Text never directly on blobs.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: Inter Tight 500 11 px upper, 24 px pill on a veil. Pending verification: dotted dawn-gold underline + `PENDING` tag (ink text). DEMO · not live data: forest pill, milk text, on the map and the lookup.
- **Input + form field (Trace-your-milk bottle ID)**: veil input: 56 px, cream 72% + blur, 1 px forest hairline, radius 12 px, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`. States: hover hairline 40% · focus-visible ring (forest / mint on charcoal) · error `#B3202A` hairline + message · disabled 40% · loading breathing dot. Visible `<label>`; DEMO pill beside.
- **Divider / ornament**: a 1 px hairline that fades at both ends (gradient mask), or a thin dawn band (2 px, gold → mint) as chapter progress line.
- **Section header (chapter number + title pattern)**: mono chapter number + Fraunces 300 title in a clearing + one lead line; the section palette shift starts as the header enters.
- **Product info block (variant name, code, price-pending, size, descriptors)**: frosted veil: V-CODE (mono), name Fraunces, size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline + PENDING tag, descriptors pending-marked, CTA `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: LitMilkBottle: variant-coloured aurora halo behind (base + light blobs, 60%), a cream radial behind the glass so milk looks lit from within, contact shadow on light / reflected glow on dark. Float 6 s ±10 px, tilt ±8°, halo parallax 12 px opposite. In Bottle360Viewer the halo stays fixed while the bottle turns.
- **Trace node / timeline step**: deep forest ground with a mint aurora pooled behind; nodes crisp 12 px rings, path pulse `#7FE0B8` (≥ 1.6 s per hop). States idle · hover ring glow · focus mint ring · active veil panel opens · pending dashed ring. Map never blurred.

### 12.5 Iconography & illustration
- Icons: thin 1.25 px line, round caps, 24 px grid, forest on light / milk on dark; no glows.
- Illustration: none; the aurora field is the only graphic and carries meaning (blue hour = collection, gold = sunrise delivery, milk = the product).
- Photography: real dawn photos graded to the aurora palette (warm highlights, green-grey shadows), shown sharp; aurora never overlays photographs, labels or data.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 600 / 1200 ms | hover · content rise · palette crossfade |
| `--au-drift` | Lissajous periods 18–40 s, amplitude ≤ 6% viewport | blob breathing (only autonomous motion) |
| `--au-palette` | ≥ 1200 ms of scroll per change, `scrub: 1` | night → blue hour → dawn → milk |
| `--au-cursor-light` | lerp 0.08, 160 px, fade 1.5 s on touch | cursor light |
| `--au-float` | 6000 ms, ±10 px | bottle float |

- Nothing pulses or flashes; drift pauses when the tab is hidden or off-screen.
- One WebGL canvas per page at 0.5× resolution; CSS-blob fallback; static AVIF gradient per section (≤ 30 KB) for low memory / Save-Data.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: no drift, no cursor light, palette changes as instant section states.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *Thar dawn aurora light, soft blurred veils of dawn gold #E9C98A, peach #F2C7A5, cream #FFF8E8, mint #BFE6D4, green-grey #A9C9C6 and DESIGO green #1E7A68 over milk white #F7F4EC or pre-dawn forest #08201B, very soft focus, static fine film grain, calm, premium, no purple, no pink, no magenta, no electric blue, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/aurora/hero-landscape.png` | 3200×2000 (16:10) | no | Pre-dawn sky over a flat desert horizon, soft gold and mint aurora-like light veils low on the horizon, deep forest-night #08201B above, heavy soft blur, fine static grain, large empty centre | purple, pink, magenta, electric blue, stars, northern lights green-purple, mountains, people | Hero (ch. 01) static fallback |
| 2 | `web/public/desigo/styles/aurora/hero-portrait.png` | 1400×2400 (7:12) | no | Tall pre-dawn gradient: forest-night at the top, soft gold and mint light low, very blurred, grain, empty centre | purple, pink, stars, landscape detail | Hero mobile |
| 3 | `web/public/desigo/styles/aurora/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Soft blurred light fields of bottle green #1F5C45, mint #BFE6D4 and a small dawn-gold #E9C98A glow on deep forest #0A2A20, aurora-like veils, fine grain, empty centre | purple, pink, blue, hard edges, objects | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/aurora/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Soft blurred light fields on a deep red-black #2A0A0D ground: crimson #B3202A at half strength, peach #F2C7A5 and dawn gold #E9C98A, red-earth dawn mood, fine grain, empty centre | pink, magenta, purple, fire, hard edges | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/aurora/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Light golden-hour aurora on a pale wheat #F8E4C2 ground: amber #E89A1C at 45%, cream #FFF8E8 and peach #F2C7A5, very soft, fine grain, empty centre | orange neon, purple, lens flare, hard edges | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/aurora/world-essential.png` | 3200×2000 + 1400×2400 crop | no | Quietest soft ivory morning light on #F4EDE2: faint sand #CDB89A and cream #FFF8E8 veils, almost uniform, fine grain | colour casts, purple, objects | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/aurora/milk-fold.png` | 3200×2000 | no | Cream and white soft forms folding over each other like milk poured slowly into milk, high-key, extremely soft, minimal and hypnotic, milk-white ground | splashes, glass, bottle, blue-white tint, hard edges | Milk as material ch. 09 (shader reference / fallback) |
| 8 | `web/public/desigo/styles/aurora/trace-mint-pool.png` | 3200×2000 | no | Deep forest #0B3B32 ground with a soft pooled mint #BFE6D4 aurora glow left of centre, very blurred, calm, for behind a crisp map | lines, nodes, map shapes, purple, blue | Traceability ch. 06, /trace backdrop |
| 9 | `web/public/desigo/styles/aurora/texture-grain.png` | 1024×1024, seamless | no | Seamless tileable monochrome photographic film grain on neutral mid-grey, fine and even | colour noise, scratches, banding, vignette | Static grain overlay (3–4%) |
| 10 | `web/public/desigo/styles/aurora/sunrise-strip.png` | 2000×4000 (1:2) | no | Tall vertical sunrise gradient from pre-dawn forest-night at the top through blue-hour green-grey and dawn gold to milk white at the bottom, extremely soft, fine grain | sun disc, landscape, purple, pink | Final CTA ch. 15 (full sunrise) |
| 11 | `web/public/desigo/styles/aurora/ghee-gold-light.png` | 3200×2000 | no | Warm gold aurora light (#E9C98A, #C8A96B, #F2C7A5) as if from a low sun, soft veils on a warm cream ground, empty centre | fire, candles, jars, purple | Ghee ch. 12, /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/36_aurora.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/aurora/
- [ ] No purple/pink/magenta/electric blue; every aurora has a warm and a green tone
- [ ] Contrast checked against the rendered background (sampled), not the token; Quality/Origin/Story run aurora-off
