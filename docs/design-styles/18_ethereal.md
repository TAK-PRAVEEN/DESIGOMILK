# 18 — Ethereal · DESIGO® build plan

**Fit score: 4 / 5** · **Best used for:** the "milk as light and material" moments: chapter 02 *The bottle becomes the
story*, chapter 09 *Milk as material* and chapter 15 *Final CTA*, plus the ESSENTIAL variant world. It can carry the
whole site as a soft, luminous layer over Luxury Typography, but it needs grounding in the farm and lab chapters.

---

## 1. Style essence

Ethereal design is light, air and translucency: soft-focus gradients, mist, glow, slow drifting particles, pale
near-white palettes, thin elegant type and a dreamlike calm. Objects seem to float in luminous space with no hard
edges, and the visual temperature is morning, not noon. Done well it feels *pure* and contemplative. Done badly it
feels like a spa template.

Three reference points:
1. **James Turrell's light installations**: colour as a physical, breathable atmosphere.
2. **Fragrance and skincare launches** (Aesop's quieter campaigns, Byredo's pale films): restrained luminous product staging.
3. **Indian dawn imagery**, the *brahma muhurta* light of early-morning milking and delivery, and the haze over the Thar
   at sunrise. This is DESIGO®'s real delivery hour, so the mood is grounded in fact.

## 2. Why it fits DESIGO®

- **Milk is literally luminous and translucent-white.** Ethereal is the most natural visual metaphor for the material itself.
- **Early-morning delivery** (an approved journey fact: "Delivered cold, early morning") gives the softness a reason.
- **Purity without claims.** The style *feels* clean and pure, so copy never needs to say "pure" (a regulated word).
  Atmosphere does the work.
- It pairs perfectly with the hero bottle: glass plus light.

**Where it fights:** it can float away from the soil. DESIGO®'s story is also earth, cows, testing and data.
Without grounding it looks like a cosmetics brand. The remedy is to keep chapters 04–07 and 11 in documentary or
Swiss treatments and use the ethereal layer as the "breath" between them. Score 4.

## 3. Art direction

### Palette: "First Light"
| Token | Hex | Use |
|---|---|---|
| `--dawn-milk` | `#F7F4EC` | Base (brand milk) |
| `--dawn-mist` | `#FBF9F4` | Highest glow centre (never #FFF) |
| `--dawn-haze` | `#EFE9DC` | Mist bands |
| `--dawn-blush` | `#F3E6DE` | Sunrise warmth (between ROOT light and milk) |
| `--dawn-gold` | `#E9D9B4` | Low sun glow (softened brand gold) |
| `--dawn-sage` | `#DCE7E0` | Cool glow (softened MASTER light) |
| `--gold` | `#C8A96B` | Hairlines only |
| `--forest` | `#0B3B32` | Text on light (≈ 11:1 on milk) and final CTA dusk |
| `--ink` | `#1E211F` | Body text |
| `--green` | `#1E7A68` | Links |

Glow recipes are radial gradients with 3–4 stops, always blended from milk, for example
`radial-gradient(60% 50% at 50% 40%, #FBF9F4 0%, #F3E6DE 45%, #F7F4EC 100%)`. Variant glows use each variant's *light*
tone at ≤ 60% strength.

### Typography
- **Display:** *Cormorant Garamond* (OFL) Light 300 / Light Italic, with tall, delicate letterforms that suit the
  feeling of air. Use it at ≥ 40 px only.
- **Secondary display:** *Fraunces* (brand) at weight 250, SOFT 100, for statements where Cormorant is too fragile.
- **Body:** *Manrope* (OFL) 400 at 17/28 with an open, light tone. Inter Tight remains for UI labels to keep system continuity.
- **Data:** *JetBrains Mono* Light.
- **Devanagari:** *Martel* (OFL, light weights) for Hindi lines.

Type colour on light is always `--forest` or `--ink`, never pale grey. Ethereal must not mean low contrast.

### Texture, imagery, iconography
- **Mist layers:** 2–3 large blurred SVG shapes (`filter: blur(60px)`, pre-rendered to WebP for performance) drifting slowly.
- **Particles:** fine "milk motes", 40–120 particles on canvas, 1–2 px, 30% opacity, rising slowly. Off on mobile and
  in reduced motion.
- **Photography:** high-key, morning light, slight bloom (done in grading, not CSS). Real DESIGO® dawn photos are
  requested: delivery, mist on fields, the milking hour.
- **Icons:** 1 px line icons with rounded caps, 28 px, `--forest` at 80%.
- **Rules:** gold hairlines, 0.5 px, fading at both ends (gradient stroke).

### Grid
12 columns, *wide* margins (8vw desktop), and a centred composition bias. Ethereal prefers symmetry and a single
focal point. Text max-width 48ch. Vertical rhythm on a 32 px baseline, with 1.6× the system's section spacing
(e.g. 200 px between blocks).

## 4. Motion and interaction language

- **Slow and continuous.** Reveals: opacity 0 → 1 with blur 12 px → 0 and a 16 px rise over 1600 ms, eased with
  `cubic-bezier(.22,.9,.24,1)` (`--ease-milk`). Nothing under 600 ms except micro-interactions.
- **Breathing:** mist layers scale 1 ↔ 1.04 over 14 s. Glows drift ±3% position over 20 s. The bottle floats ±10 px over 6 s.
- **Scroll:** glows follow scroll progress (the "sun rises" as you scroll a chapter). The background hue goes from
  blush to milk to sage within a chapter.
- **Hover:** links fade-in an underline glow (a 2 px soft box-shadow under the text, 400 ms). The primary button's
  hairline frame draws itself (600 ms) with a soft inner glow.
- **Cursor states:** default = 10 px soft milk orb with 8 px blur halo (mix-blend `multiply` on light) · link = orb
  expands to 44 px, halo brightens · drag (360) = halo ring with slow rotation · view = orb with "VIEW" in Inter Tight
  9 px · disabled = halo only. A faint trail (3 ghost orbs, 120 ms decay) only on desktop.
- **Transitions:** "dissolve to light", where the outgoing page fades into `--dawn-mist` and the new page emerges (900 ms).

## 5. The hero bottle and the four variants

The bottle floats in **light, not on a surface**, though it keeps its contact shadow (softer, 10% opacity) so it
never looks pasted.

- Float ±10 px over 6 s, pointer tilt ±8°. A light source follows the pointer: a soft radial glow behind the bottle
  moves opposite the pointer, giving a backlit glass rim.
- Rim light is a masked gradient along the bottle's alpha edge (from the render's alpha channel), giving glowing glass edges.
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards scroll drives the frame index
  with heavy smoothing (`scrub: 1.5`), so the bottle turns as slowly as dawn.

| Variant | Ethereal world |
|---|---|
| **MASTER 26** | "Forest dawn": a sage mist `#DCE7E0` with deep-green shadows `#0A2A20` at 20% at the edges, as if light is coming through a canopy. Leaf shadows (gobo) drift across the bottle. |
| **ROOT 14** | "Red-earth sunrise": blush `#F3D9D6` glow rising from below, warm dust motes in the light. |
| **BASE 3** | "Golden hour": amber glow `#F8E4C2`, long light shafts from the left, motes glowing gold. |
| **ESSENTIAL** | "Clear light": almost nothing, milk-on-milk glow with one ivory halo `#F4EDE2`. Ethereal's most distilled expression, and ESSENTIAL's natural home. (Renamed from "Pure light" in the 2026-10-03 audit: "pure" is a blocked copy word, see guardrail 1.) |

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk white with a dawn glow behind the bottle. "Milk from the source." in Cormorant Light at display size, centred above. One CTA visible and the second revealed on scroll. |
| 02 | Bottle becomes the story | **Signature.** Six words appear as light: each emerges from blur at its position on an ellipse, glows and then settles. The background slowly darkens milk → forest as "dusk". |
| 03 | Cow → bottle | Journey stations as soft-focus vignettes (photos in feathered ovals) linked by a glowing milk line. Grounded captions in Manrope. |
| 04 | Where it begins | **Grounded:** documentary photos with a light morning haze overlay only on the top 20% (sky). The copy is factual. |
| 05 | Breeds | Portraits in soft-light vignettes, status chips in clean Inter Tight. |
| 06 | Traceability | Forest dusk with a path of soft light and nodes as small glowing stars, plus the illustrative label. |
| 07 | Quality | **Grounded:** clean lab-white Swiss layout with the 16 parameters. Ethereal is limited to a soft background glow. Readouts "— pending lab confirmation". |
| 08 | Four milks | Four luminous worlds (section 5). |
| 09 | Milk as material | **Signature.** Canvas milk ribbons, translucent and backlit, with a WebGL fallback to canvas2D. One italic word appears. |
| 10 | Heritage | Paper glowing at its edges like an old photograph by window light, Cormorant italic statement and a soft line cow. |
| 11 | Technology | Dark, but soft: a deep forest with blurred signal-green glows `#7FE0B8` at 25%. The seven verbs fade in like distant lights. |
| 12 | Ghee | Warm gold glow, the jar backlit (ghee is translucent gold, so it is an ideal subject), three grades. |
| 13 | Trace your milk | A charcoal field with a soft-glow input. Each journey step lights up as a dawn sequence. DEMO badge in solid Inter Tight. |
| 14 | Story | Paper timeline, milestones fading in, verified only. |
| 15 | Final CTA | **Signature.** The bottle returns in full dawn light, then the scene fades to forest dusk. "Know where your milk comes from." |

**Inner pages:** /milk is four glow worlds in a horizontal "light row" · /milk/[variant] has its luminous world, a
360 viewer with backlit rim and facts in clean type · /ghee has the backlit jar · /origin is grounded documentary
with dawn openers · /trace the star-path · /technology the soft dark · /about the window-light paper · /reserve a
calm milk-white form, with the delivery-hour copy "Delivered cold, early morning."

## 7. Component variants

`DawnGlow` (radial recipe plus scroll-linked position) · `MistLayer` (pre-blurred WebP) · `MilkMotes` (canvas
particles) · `RimLight` (alpha-edge glow on the render) · `LightReveal` (blur-to-sharp) · `GlowLink` · `HaloCursor` ·
`FeatheredFrame` · `ProductScene.luminous` · `TraceMap.starpath` · `MilkFlow.backlit` · `DissolveTransition` ·
`AssetSlot.haze` (soft frame with clear text naming the missing photo).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | First Light palette, Cormorant/Manrope | Tokens, glow recipes, specimen | All text ≥ 4.5:1 (body ≥ 7:1) despite the pale palette | — | 2 |
| 2 | Grid & shell | Wide-margin grid, halo cursor, dissolve | `HaloCursor`, nav (solid, not blurred), footer | Nav always readable over glows; cursor off on touch | — | 3 |
| 3 | Hero | Dawn-lit bottle with rim light | `DawnGlow`, `RimLight`, hero | Rim mask aligned; LCP ≤ 2.5 s with glows lazy-painted | Render | 4 |
| 4 | Bottle → story | Words of light | Pinned scene, blur-reveals | Blur animations ≤ 3 simultaneous; reduced motion = static | — | 4 |
| 5 | Cow → bottle | Vignette journey | 7 feathered stations, glowing line | Captions grounded and factual | B4, B6–B8 | 4 |
| 6 | Origin / farm | Grounded documentary plus sky haze | Parallax with haze | Haze never over faces or cows | B1, B2 | 3 |
| 7 | Breeds | Soft portraits | Vignette grid | Pending status clear | B3 | 2 |
| 8 | Trace map | Star-path | `TraceMap.starpath` | Illustrative label; nodes focusable | — | 4 |
| 9 | Quality | Grounded lab panel | Swiss panel plus glow | No unconfirmed values | B6 | 2 |
| 10 | Four worlds + 360 | Luminous worlds | 4 worlds, viewer with rim light | Rim light works on 360 frames (per-frame alpha) | 360 (A) | 7 |
| 11 | Heritage | Window-light paper | Scene | — | — | 2 |
| 12 | Technology | Soft dark | Scene | Public vocabulary | — | 2 |
| 13 | Ghee | Backlit jar | Scene | Jar cut-out quality | Jar photo (transparent) | 2 |
| 14 | Trace-your-milk | Dawn sequence demo | Demo | DEMO per step | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 2 templates | Pending styling | 360 (A) | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Grounded chapters stay documentary | B1–B8 | 5 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | B11 | 4 |
| 18 | Mobile | Fewer layers | Mobile pass: 1 mist, no motes, static glows | 60 fps scroll on mid Android | — | 3 |
| 19 | A11y + reduced motion | Clear, not foggy | Contrast audit, static scenes | WCAG 2.2 AA; no blur on text in reduced motion | — | 2 |
| 20 | Perf, QA, handover | Ship | Pre-blurred assets, perf report | LCP ≤ 2.5 s; no live `filter: blur` > 2 layers | All | 4 |

**Total:** about 67 days. As an accent (chapters 02, 09, 15 plus ESSENTIAL) it takes about 15 days.

## 9. Assets needed from DESIGO®

- 360 sequences with **clean alpha**, since rim lighting depends on good edges. Ideally a second backlit pass of the
  hero variant.
- Dawn photography: early-morning milking (with consent), mist over fields, delivery at first light.
- A transparent cut-out of the ghee jar and a backlit ghee photo.
- Wordmark vector.

## 10. Performance, accessibility and mobile

- Blur is expensive, so pre-render mist as WebP and never animate `filter: blur` on large areas. Animate
  opacity and transform only.
- Particles run on canvas at ≤ 120 count, are paused off-screen, and are disabled on `deviceMemory ≤ 4` and mobile.
- Contrast discipline: pale backgrounds always carry dark text. Run an automated contrast check across glow
  positions, because glows move behind text.
- Reduced motion: no blur reveals, no motes and no drifting, but the glows remain as static gradients.
- Mobile: centred bottle, smaller glows, words as a vertical list with soft fade.

## 11. Risks and premium guardrails

**Risks:** spa or cosmetics cliché; low-contrast pale text; "purity" read as a health claim; performance cost of blur;
floating away from the farm.

**Premium guardrails**
1. Atmosphere, not adjectives: never write "pure", "divine", "heavenly" or "angelic" in copy.
2. Contrast first: text is always forest or ink, and every glow sits *behind* text, never on it.
3. Ground the story: farm, breeds, lab and technology chapters stay documentary or Swiss, and ethereal is the breath between them.
4. No lens-flare stock, no bokeh images, no "heavenly rays" clip-art. All light is built from the brand's own colours in code.
5. No religious iconography of the cow used for atmosphere. Respect is not decoration.
6. One focal point per viewport: the bottle or the sentence.
7. Slow but not sluggish: content must be readable within 600 ms even if the ambience continues.
8. The milk-white base never becomes pure white. Warmth keeps it food, not clinic.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added First Light tokens, Cormorant/Manrope/Martel packages, all 14 components, motion tokens and 11 image prompts. Body fix: ESSENTIAL world "Pure light" renamed "Clear light" ("pure" is a blocked copy word). Fonts already OFL.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | forest: headlines on light, primary button frame/fill, final CTA dusk | 11.3:1 vs bg. AAA. |
| Primary ink | --c-on-primary | `#F7F4EC` | milk on forest | 11.3:1 on primary. |
| Secondary | --c-secondary | `#1E7A68` | DESIGO green: links and glow-underlines | 4.7:1 vs bg. |
| Accent | --c-accent | `#E9D9B4` | dawn gold: low-sun glow, cursor halo, focus halo (never text) | 1.3:1 vs bg. 1.3:1, decorative glow only; focus ring = 2 px forest + 6 px dawn-gold glow. |
| Background | --c-bg | `#F7F4EC` | milk; glow centres reach `#FBF9F4` (never #FFF) |  |
| Surface | --c-surface | `#EFE9DC` | haze: mist bands, panels, info blocks |  |
| Text | --c-text | `#1E211F` | ink body text | 14.8:1 on bg · 13.4:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#0F4A3F` | forest-2 captions and labels (ethereal never means pale text) | 9.2:1 on bg · 8.4:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#C8A96B` | gold hairlines 0.5 px, faded at both ends | Decorative; meaning never carried by a hairline. |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#8C6A43` / `#0B3B32` | green = verified; earth dotted underline = pending; solid forest badge with milk text = DEMO | DEMO badge milk on forest 11.3:1; pending underline is earth, text stays ink. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | "Forest dawn": sage mist `#DCE7E0` with `#0A2A20` at 20% at the edges, drifting leaf-shadow gobo across the bottle |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | "Red-earth sunrise": blush glow rising from below, warm dust motes |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | "Golden hour": amber glow, long light shafts from the left, gold motes |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | "Clear light": milk-on-milk glow with one ivory halo: ESSENTIAL's natural home |

**Dark-chapter inversion:** "Dusk" chapters (02 end, 06, 11, 13, 15 end): bg → forest `#0B3B32`, surface → `#0F4A3F`, text → `#F7F4EC`, muted → `#D9E8DF`, primary → milk frame, glows switch to sage `#DCE7E0` at 12% and signal `#7FE0B8` at 25% (technology only); gold hairlines stay.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Cormorant Garamond (variable) | `@fontsource-variable/cormorant-garamond` (Google Fonts: Cormorant Garamond) | wght 300 + italic (≥ 40 px only) | clamp(3.5rem, 8vw, 8.5rem) | 0.98 | -0.01em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz auto, wght 250–300, SOFT 100 | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.08 / 1.18 | -0.01em | Sentence |
| Body | Manrope (variable) | `@fontsource-variable/manrope` (Google Fonts: Manrope) | wght 400–500 | clamp(1.0625rem, 1rem + 0.2vw, 1.125rem) (17–18 px) | 1.65 (28 px) | 0.005em | Sentence |
| Label / UI | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 500 | 0.72rem | 1.2 | +0.18em | UPPER |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` (Google Fonts: JetBrains Mono) | wght 300 | 0.8125rem | 1.4 | 0.02em | IDs as issued |
| Devanagari (optional) | Martel | `@fontsource/martel` (Google Fonts: Martel) | 300, 400 static | matches H2 / body | 1.6 | 0 | n/a |

Licence: Cormorant Garamond, Fraunces, Manrope, Inter Tight, JetBrains Mono and Martel are SIL OFL 1.1.
Pairing: Cormorant Light gives air at display size only; Fraunces SOFT takes over where Cormorant is too fragile; Manrope keeps body open and calm; Inter Tight keeps UI continuity.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutter, 8vw margins, max-width 1440 px, centred composition; text max-width 48ch.
- **Spacing:** 32 px vertical baseline; section spacing 1.6× system (≈ 200 px between blocks desktop, 120 px mobile); scale 8 · 16 · 32 · 48 · 64 · 96 · 128 · 200.
- **Radius:** sm 2px · md 2px · lg 999px (cursor orb and feathered oval photo frames only).
- **Border:** Gold 0.5 px hairlines with gradient fade at both ends; feathered photo masks instead of frames.
- **Shadow / elevation:** No UI shadows; elevation by glow. Bottle: softer contact shadow (10% opacity) + rim light masked to the render's alpha.
- **Texture / overlay:** 2–3 pre-blurred mist WebP layers, milk-mote canvas (40–120 particles, desktop only), glow recipe `radial-gradient(60% 50% at 50% 40%, #FBF9F4 0%, #F3E6DE 45%, #F7F4EC 100%)`. Glows always behind text.

### 12.4 Components
All interactive components: `focus-visible` = 2 px forest `#0B3B32` outline, offset 3 px, with a 6 px dawn-gold `#E9D9B4` soft glow; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Forest underlined label + arrow, Inter Tight 500 caps; the hairline frame draws itself on hover (600 ms) with a soft inner glow; arrow travels 8 px. Active: frame fills forest, label milk. Disabled: muted label, no glow. Loading: a soft glow pulses twice per second under the label (opacity only). 48 px min height.
- **Secondary button**: Same label in ink with a gold hairline underline. Hover: 2 px soft glow under the text (`box-shadow 0 2px 8px #E9D9B4`, 400 ms). Active: underline forest. Disabled / loading as primary.
- **Text / arrow link**: Manrope 500 green with glow-underline on hover (400 ms), arrow +6 px; disabled = muted text.
- **Icon button** (incl. menu): 44 px circular soft orb button, 20 px 1 px rounded-cap icon at 80% forest. Menu = two lines dissolving into × through blur (400 ms; plain swap in reduced motion). Hover: halo brightens. `aria-label` always.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: Desktop: transparent 72 px bar over milk, no rule, Inter Tight caps links; active link = gold hairline under it. On scroll the bar gains a haze `#EFE9DC` at 80% with no blur. Mobile: full-screen milk sheet, Cormorant 40 px links, dissolve-to-light opening (900 ms; instant in reduced motion). Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default = 10 px milk orb with 8 px blur halo (`multiply` on light) · hover = orb expands to 44 px, halo brightens · ROTATE = halo ring rotating slowly · EXPLORE = orb with faint 3-ghost trail · ENTER = orb with → in Inter Tight 9 px · VIEW = orb with "VIEW" · TRACE = orb with a sage core that pulses twice. Trail desktop only. Touch: native, a soft 300 ms glow at the tap point.
- **Card / panel / info block**: Haze `#EFE9DC` panel, no border, radius 2, 32 px padding, faint radial glow behind; feathered-oval photo vignettes. Hover (clickable): glow strengthens (400 ms). Text always ink/forest.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Inter Tight 11 px caps, solid (not glassy) pill radius 999, 24 px. Verified: green outline. Pending verification: claim text with earth `#8C6A43` dotted underline + chip "PENDING VERIFICATION" in forest on haze. DEMO: solid forest badge, milk "DEMO · NOT LIVE DATA", no glow, always visible. Static.
- **Input + form field** (Trace-your-milk bottle ID): On the charcoal/forest trace field: label "BOTTLE ID" Inter Tight caps, field 56 px with a soft-glow 1 px milk border at 40%, JetBrains Mono Light 18 px, placeholder `DSG-BTL-000001-3 (sample format)`. Focus: border 100% + ring token. Error: ROOT light `#F3D9D6` text + message (not colour alone). Loading: steps light up as a dawn sequence.
- **Divider / ornament**: Gold 0.5 px hairline fading at both ends, or a single soft halo dot. `aria-hidden`.
- **Section header** (chapter number + title pattern): Chapter number in Inter Tight caps with a gold hairline, title in Cormorant Light (≥ 40 px), revealed blur 12 → 0 + 16 px rise over 1600 ms.
- **Product info block** (variant name, code, price-pending, size, descriptors): Clean type on a haze panel: Cormorant variant name, mono code, size and price in Manrope with earth dotted pending underline + chip, descriptors listed with status. No glow behind numbers.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): The bottle floats in light, not on a surface: glow pool behind (moves opposite the pointer), rim light along the alpha edge, softer contact shadow at 10%. Float ±10 px / 6 s, tilt ±8°; before 360 frames ±25° + sheen; with frames scroll drives the frame index with `scrub: 1.5`.
- **Trace node / timeline step**: Small glowing star on the forest dusk path; active node brightens and its panel fades in; labels Manrope, demo values mono, DEMO badge solid. Not-glow-only: active node also gets a filled ring and "current" label.

### 12.5 Iconography & illustration
- **Icons:** 1 px line, rounded caps and joins, 28 px, forest at 80%.
- **Illustration:** Light built in code from brand colours (radial glows, mist, motes); line cow for heritage; no clip-art rays or bokeh stock.
- **Photo treatment:** High-key morning light, slight bloom in grading (not CSS), feathered oval masks; documentary chapters (04–07) stay ungraded beyond a light top-20% haze.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | UI micro-interactions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | light reveals, bottle travel |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | dissolve-to-light transition |
| `--dur-micro` | `240ms` | focus, small hovers |
| `--dur-reveal` | `1600ms` | blur-to-sharp reveals (content readable by 600 ms) |
| `--dur-scene` | `900ms` | dissolve to light |
| `--breath` | `scale 1↔1.04 / 14000ms` | mist layers |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** six words emerging from blur on an ellipse (ch. 02); backlit milk ribbons (ch. 09); dawn-to-dusk final CTA.
- **Scroll:** glow position tracks chapter progress (the sun rises); hue blush → milk → sage within a chapter.
- **Reduced motion:** no blur reveals, no motes, no drift; glows remain as static gradients; logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *soft luminous dawn atmosphere, translucent veils of pearl light, very soft focus, warm milk white #F7F4EC and #FBF9F4 with blush #F3E6DE, sage #DCE7E0 and pale gold #E9D9B4 glows, Turrell-like breathable colour, calm and contemplative, large empty centre, no lens flare, no bokeh, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/ethereal/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-landscape.png` | 3200×2000 (16:10) | no | Soft drifting veils of pearl, sage and pale-gold light like an aurora over a dawn field in the Thar, faint khejri silhouettes in the far haze, glowing, empty centre | sun rays clip-art, lens flare, religious light, angels, clouds shaped like objects (+ base negative) | Ch. 01 hero |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Same dawn veils as a tall portrait with the faint horizon in the lowest fifth, empty glowing centre | lens flare, rays (+ base negative) | Mobile hero |
| 3 | `worlds/master-26.png` | 3200×2000 (16:10) | no | Sage mist #DCE7E0 in a forest at dawn with deep green #0A2A20 shadows softly at the edges, dappled canopy light, empty luminous clearing in the centre | sharp leaves, named plants, lens flare (+ base negative) | Ch. 08 / /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 (16:10) | no | Blush #F3D9D6 sunrise glow rising from a softly blurred red-earth horizon, warm floating dust motes, empty centre | harsh sun disc, flare (+ base negative) | Ch. 08 / /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 (16:10) | no | Golden-hour amber #F8E4C2 haze with long soft light shafts entering from the left over a blurred wheat field, gold motes, empty centre | hard god rays, flare (+ base negative) | Ch. 08 / /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 (16:10) | no | Milk-on-milk glow with a single ivory #F4EDE2 halo of light in the centre, almost nothing else, airy | objects, colour, texture (+ base negative) | Ch. 08 / /milk/essential |
| 7 | `journey/dawn-path.png` | 4000×1600 (5:2) | no | A soft path of light across a misty field at dawn, distant tiny zebu cows with humps grazing at left, the path dissolving into a pale village at right, very soft focus | people's faces, vehicles, rays (+ base negative) | Ch. 03 cow → bottle backdrop |
| 8 | `trace/star-path.png` | 3200×2000 (16:10) | no | Deep forest green #0B3B32 dusk sky with a gentle curved path of eight small soft glowing points of light, faint sage haze | stars constellations shapes, sci-fi UI, lines with labels (+ base negative) | Ch. 06 traceability |
| 9 | `textures/mist-layer.png` | 3000×1500 (2:1) | yes | A single large soft blurred band of warm milk-white mist, isolated on transparent background, very low opacity edges | hard edges, shapes, clouds with faces (+ base negative) | MistLayer (pre-blurred WebP) |
| 10 | `milk/backlit-ribbon.png` | 3000×1500 (2:1) | yes | One long translucent ribbon of pouring milk curling like silk, backlit so its edges glow, isolated on transparent background | splash crown, container, glass (+ base negative) | Ch. 09 milk as material |
| 11 | `ghee/warm-glow.png` | 3200×2000 (16:10) | no | Warm honey-gold glow in a dim earthen interior, softly out-of-focus matka pots at the edges, empty luminous centre | jar, bottle, flames, religious lamps (+ base negative) | Ch. 12 ghee backdrop |

Real dawn photography (milking hour, delivery, mist on fields) is requested from DESIGO®; generated images stay atmospheric and are never presented as DESIGO® farms.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/18_ethereal.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/ethereal/
- [ ] Automated contrast check across glow positions (glows move behind text)
- [ ] Copy never uses "pure", "divine", "heavenly" or "angelic"; mist pre-rendered, no animated `filter: blur` on large areas
