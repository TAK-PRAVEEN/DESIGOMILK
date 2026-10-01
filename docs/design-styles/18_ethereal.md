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
| **ESSENTIAL** | "Pure light": almost nothing, milk-on-milk glow with one ivory halo `#F4EDE2`. Ethereal's purest expression, and ESSENTIAL's natural home. |

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
