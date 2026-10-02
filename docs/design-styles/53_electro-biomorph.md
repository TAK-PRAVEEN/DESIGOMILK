# 53 — Electro-Biomorph · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 2.5 / 5 for the whole site, 3.5 / 5 in three chapters** · **Best used for:** chapter 06
*Traceability* as a living network, chapter 09 *Milk as material*, chapter 11 *Technology*, and launch films and
social loops. Elsewhere it is reduced to a single soft halo behind the bottle, or absent.

---

## 1. Style essence

Electro-biomorphism mixes organic, soft-bodied forms (blobs, droplets, fronds, tendrils, membranes) with electric
light: inner glow, bioluminescent edges, iridescent gradients and pulses travelling along filaments. The forms look
alive and slightly unknown, as if data had grown a body. In current digital art it appears as 3D renders with
subsurface scattering, metaball simulations and generative "data organisms".

Three reference points:
1. **Ernst Haeckel, *Kunstformen der Natur* (1904)**: radiolarians, jellyfish and diatoms, the classic catalogue of
   biomorphic beauty and symmetry.
2. **Bioluminescence**: plankton glowing blue on night beaches and deep-sea creatures whose light is their form.
3. **Refik Anadol's data sculptures and generative "living data" installations**: information shown as a flowing,
   breathing mass of light.

## 2. Why it fits DESIGO® and where it fights

- **"Living data" is a fair image for traceability.** The trace network (farm → collection → batch → chiller →
  barrel → plant → bottle → you) can be shown as glowing filaments with a pulse travelling along them, which says
  "connected and alive" without inventing a number.
- **Milk is a natural biomorph.** Droplets, crowns and ribbons are already soft organic forms; giving them an inner
  glow on forest makes a striking chapter 09.
- **It suits the "interactive 3D exhibition" part of the brief.** A single shader organism reacting to the pointer
  is a memorable exhibition moment.

**Where it fights, seriously:**
- **Biological imagery invites biological claims.** A glowing "milk cell" could be read as a statement about fat
  globules, protein, bacteria, somatic cells or "living nutrients". None of that may be said. The forms must be
  plainly abstract and never labelled as anything biological.
- It is cold, digital and sci-fi, which fights heritage, farms and cows.
- WebGL cost on mid-range phones.

The remedy is restraint: one organism per viewport, only in three dark chapters, never near animals, people or data
values, and never captioned as science.

## 3. Art direction

### Palette: dark ground, one glow per scene
| Token | Hex | Use |
|---|---|---|
| `--abyss` | `#07211C` | Deepest ground (from the Technology plate F1) |
| `--forest` | `#0B3B32` | Main dark ground |
| `--charcoal` | `#171918` | Technology ground |
| `--signal` | `#7FE0B8` | Primary glow, filaments, pulses |
| `--pearl` | `#F7F4EC` | Organism core (milk-white light) |
| `--membrane` | `rgba(217,232,223,.22)` | Soft outer skin of organisms |
| `--iris` | `linear-gradient(120deg, #7FE0B8, #D9E8DF 45%, #C8A96B)` | The only iridescence: mint → pale green → gold, never rainbow |
| `--gold` | `#C8A96B` | Ghee glow, warm rims |
| `--milk` / `--ink` | `#F7F4EC` / `#1E211F` | Text: always solid, never glowing |
| `--green` | `#1E7A68` | Links and focus ring on light pages |

Variant glows (ground / core / edge glow):
| Variant | Ground | Core | Edge glow |
|---|---|---|---|
| MASTER 26 | `#0A2A20` | `#D9E8DF` | `#7FE0B8` |
| ROOT 14 | `#4A0A0F` | `#F3D9D6` | `#E0463A` |
| BASE 3 | `#5A3304` | `#F8E4C2` | `#F2B84B` |
| ESSENTIAL | `#4D4130` | `#F4EDE2` | `#E6DCCB` (almost no glow: pearl) |

### Typography
- **Display and UI:** *Instrument Sans* (OFL, variable width and weight) 300–500. Its slightly condensed, soft
  geometry sits well beside organic forms without looking like sci-fi type.
- **Poetic lines:** *Fraunces* 300 italic, opsz 144, one line per scene, so the style keeps the brand voice.
- **Data:** *JetBrains Mono* 400 for node IDs in the trace demo.
- Text never glows: no `text-shadow` glow on body or headings, which protects legibility and keeps it premium.
- Scale: display `clamp(3rem, 8vw, 9rem)` at width 85 · body `1rem/1.65`, 56ch.

### Texture, imagery, iconography
- Organisms are generated in real time by one WebGL shader (signed-distance metaballs with smooth union and a
  fresnel rim), or as pre-rendered video loops on weaker devices.
- Imagery: no photographs inside biomorph chapters. Photographs live in other chapters, unglowed.
- Icons: 1.5 px line icons with round caps; on dark chapters, a 6 px soft glow at 25% on icons only.

### Grid
12 columns, 5vw margins. Each biomorph chapter has **one organism** placed off-centre on a thirds intersection;
text sits in the opposite third, on solid ground, never on top of the glow core.

### Header wordmark
The black write/un-write DESIGO® loop stays unchanged on light chapters and turns milk-white on dark ones. It never
glows.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Breathing | Organisms scale 1 ± .03 on a 5 s sine (`ease-in-out`), the only continuous motion |
| Pointer lean | The organism's nearest lobe leans toward the pointer through a critically damped spring (stiffness 60, damping 2√k): no overshoot, no wobble |
| Merge and split | With scroll, droplets separate from or rejoin the main body (smooth-union radius 0.35 → 0.05), scrubbed with `scrub: 1` |
| Pulse | A light pulse travels along filaments at 1.6 s per segment with `cubic-bezier(.65,0,.35,1)`; it fades in its last 20% |
| Glow-in | Scene entry: glow intensity 0 → 1 over 1200 ms `cubic-bezier(.16,1,.3,1)` |
| Transition | Light → dark chapters fade through `--abyss` (700 ms); the organism dissolves into particles of 2 px (400 ms) on exit |

**Cursor states:** default 8 px pearl dot with a 24 px soft mint halo (on dark) or a 6 px ink dot (on light) ·
**link**: halo condenses into a 36 px ring · **organism**: the halo grows to 80 px and the organism leans toward it
· **360**: ring labelled `DRAG` · **text**: native caret · **disabled**: 30% dot · touch: tap creates one slow ripple
in the organism.

**Hover:** text links underline in `--signal` (240 ms) on dark, `--green` on light; arrows travel 6 px; buttons draw a
1 px frame (600 ms), and on dark the frame carries a faint 4 px glow. Magnetic offset ≤ 6 px.

## 5. The hero bottle and the four variants

The bottle stands **in front of a soft organism halo**, which works as its light source. The halo is a slow pearl
metaball behind the bottle at 40% opacity; its glow catches the glass as a rim light (a CSS gradient mask on the
render's edge). Float ±8 px over 6 s, tilt ±8°; the halo leans against the tilt.

- **Before 360 frames:** ±25° turn with sheen; the halo's highlight moves with the turn so the light stays coherent.
- **After 360 frames:** drag to rotate; the halo's lobes rotate in sync with the frame index; counter `036 / 072` in
  mono.

| Variant | Biomorph world |
|---|---|
| **MASTER 26** | Deep forest; a frond-like branching organism (canopy-shaped) in pale-green light, with mint edges. Line: "Twenty-six herbs. The fullest expression of the source." Herb count pending; the organism never has 26 visible parts. |
| **ROOT 14** | Oxblood; a rooted form with tendrils reaching downward, ember-red edge glow. "Fourteen herbs, rooted in free grazing." (pending). |
| **BASE 3** | Deep brown; one round, warm amber body like a low sun, the calmest organism. "The everyday foundation." |
| **ESSENTIAL** | Earth-brown ground; a single still pearl with almost no glow. "Simple, balanced, honest." |

**Info panel** (solid, never glowing): `DESIGO® V1+` · name in Instrument Sans 400 · price and size with dotted
underline and "pending approval" tooltip · descriptors · `RESERVE ———→`.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk white. Only a pale pearl halo behind the bottle (light-mode biomorph, 25% opacity). "MILK / FROM THE / SOURCE." in Instrument Sans 300. Two CTAs. |
| 02 | Bottle becomes the story | Milk → forest. As the ground darkens, six droplets split from the halo, each carrying one word (ORIGIN … TRACE) and its line in solid text beside it. |
| 03 | Cow → bottle | Paper, no organisms. The E1–E7 line illustrations stay; a single mint filament (the milk line) runs between them and pulses once per station. |
| 04 | Where it begins | Real photography, no glow. Biomorphism is kept away from the farm. |
| 05 | Breeds | Paper plates, no glow; status "Breed list client-stated · approval pending". Organisms never appear near animals. |
| 06 | Traceability | **Signature.** On abyss green, the trace network grows as glowing filaments, like mycelium, linking eight nodes; a pulse travels the path with scroll. Nodes open solid panels. "Illustrative journey — not live data" in solid text. |
| 07 | Quality | Lab white, no organisms. The 16 parameters as a clean list; readouts "— pending lab confirmation". Glow is never used to suggest a "pass". |
| 08 | Four milks | Four organisms (section 5), one per scene, with a 01–04 index. |
| 09 | Milk as material | **The big organism.** A milk-white metaball mass on forest that the pointer can gently push; droplets separate and merge. One Fraunces italic word: "*Material.*" |
| 10 | Heritage | Paper, warm, no glow. |
| 11 | Technology | Charcoal with the F1 grid; seven small organisms, one per verb, light up in sequence along a filament. Statement in Instrument Sans 300 caps. |
| 12 | Ghee | Warm gold; a single slow golden droplet halo behind the jar, no other effect. Prices pending. |
| 13 | Trace your milk | Charcoal; the bottle-ID input in mono; on submit, a pulse travels a filament through the demo nodes and each result line appears in solid text. `DEMO` always visible. |
| 14 | Story | Paper, no glow; verified milestones only. |
| 15 | Final CTA | The four variant glows merge into one pearl halo behind the returning bottle. "Know where your milk comes from." |

**Inner pages:** /milk shows four small organisms in a row behind four bottles, each expanding by View Transition into
/milk/[variant] (organism world, synced-halo 360 viewer, solid facts table with pending values) · /trace is the
mycelium network plus the demo, the most appropriate page for this style · /technology has the seven verb organisms ·
/origin, /about and /ghee are photographic or paper with no organisms · /reserve has a faint pearl halo behind the
selected variant only.

## 7. Component variants

`OrganismCanvas` (single WebGL shader, quality tiers) · `OrganismVideo` (pre-rendered fallback) · `PearlHalo`
(behind bottles) · `DropletSplit` (orbit words) · `MyceliumMap` (TraceMap) · `FilamentPulse` · `VerbOrganisms`
(TechnologyGrid) · `MetaballMilk` (MilkFlow) · `GlowRimMask` (render edge light) · `HaloCursor` · `SolidPanel` (info
and node panels, no glow) · `PendingValue`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Glow palette, Instrument Sans | Tokens, specimen | Text never glows; fonts ≤ 140 KB | Wordmark vector | 2 |
| 2 | Grid & shell | Nav, cursor, shader host | `HaloCursor`, `OrganismCanvas` scaffold, quality tiers | One WebGL context per page | — | 4 |
| 3 | Hero | Pearl halo | Hero, `PearlHalo`, `GlowRimMask` | LCP ≤ 2.2 s (render LCP; shader after idle) | Render | 3 |
| 4 | Bottle → story | Droplet split | Pinned scene | Reduced motion = static list | — | 3 |
| 5 | Cow → bottle | Filament between stations | Track | Organism-free; vertical on mobile | E1–E7 | 2 |
| 6 | Origin / farm | Photo, no glow | Scene | Real photos only | Farm photos | 2 |
| 7 | Breeds | Plates | Index | No organisms near animals | D1–D6 | 2 |
| 8 | Trace map | Mycelium | `MyceliumMap`, `FilamentPulse` | Keyboard nodes; label visible; 60 fps desktop / 30 fps mobile | — | 6 |
| 9 | Quality | Clean list | Scene | No glow semantics; no unconfirmed values | — | 1 |
| 10 | Four worlds + 360 | Four organisms | 4 shader presets, synced halo viewer | Each organism ≤ 4 ms GPU per frame on a mid-range phone | 360 frames | 7 |
| 11 | Heritage | Paper | Scene | — | — | 1 |
| 12 | Technology | Verb organisms | `VerbOrganisms` | Public vocabulary only | F1 | 3 |
| 13 | Ghee | Gold droplet | Scene | Prices pending-styled | Jar | 2 |
| 14 | Trace-your-milk | Pulse result | Demo | DEMO visible; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | Pages | View Transition fallback | 360 | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` | Photos | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | — | 3 |
| 18 | Mobile | Video fallback | `OrganismVideo` loops, 30 fps cap | Battery-friendly; no horizontal scroll | Rendered loops | 4 |
| 19 | A11y + reduced motion | — | Static organism stills | WCAG 2.2 AA; no flashing; canvases `aria-hidden` | — | 2 |
| 20 | Perf, QA, handover | Ship | GPU profiling, QA | Lighthouse ≥ 90; INP ≤ 200 ms; shader ≤ 8 KB | All | 4 |

**Total:** about 62 days (about 26 for chapters 06, 09, 11 and /trace only).

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** 360 frames (transparent, for the halo to sit behind); approval of the trace vocabulary;
nothing biological. This style needs no real photographs of its own, which is part of why it must stay small.

**Images to generate** (backdrops and fallback stills only; `web/public/desigo/styles/biomorph/`; replace the
house-style tail with "deep forest green and milk-white light, restrained, premium, no text, no watermark, no logo,
no letters"):
| # | File | Size | Prompt |
|---|---|---|---|
| BM1 | `pearl-organism.png` | 3000×3000, transparent | Abstract soft glowing organic form like a pearl of light with a translucent membrane and a faint mint rim, smooth, calm, not a cell, not a microbe, transparent background, no text, no watermark, no logo, no letters |
| BM2 | `mycelium-network.png` | 3600×2000 | Abstract network of fine glowing mint filaments branching organically across a deep forest-green void, a few brighter junctions, sparse, elegant, no text, no watermark, no logo, no letters |
| BM3 | `frond-glow.png` | 3000×3000, transparent | Abstract branching frond-like glowing form in pale green light with soft mint edges, symmetrical, Haeckel-inspired, transparent background, no text, no watermark, no logo, no letters |
| BM4 | `amber-body.png` | 3000×3000, transparent | Single round abstract glowing body in warm amber light with a soft membrane, like a low sun made of light, transparent background, no text, no watermark, no logo, no letters |
| BM5 | `milk-metaballs.png` | 3600×2000 | Abstract milk-white liquid blobs merging and separating on deep forest green, soft inner glow, glossy, minimal, no text, no watermark, no logo, no letters |

Prompts must never ask for "cells", "bacteria", "microscope" or "molecules".

## 10. Performance, accessibility and mobile

- One WebGL canvas per page, rendered at 0.5× device pixel ratio and upscaled; paused off-screen and on tab blur;
  capped at 30 fps on mobile. Three quality tiers chosen by a 1-second GPU probe; the lowest tier uses video loops,
  and the floor is a still image.
- Accessibility: canvases are `aria-hidden`; meaning is always in solid text beside them; no flashing; pulses are
  slower than 1 Hz; reduced motion shows stills and stops pointer lean.
- Mobile: organisms as AV1 or H.264 loops (≤ 1.5 MB), placed above the text rather than behind it.

## 11. Risks and premium guardrails

**Risks:** implied biological or nutritional claims; sci-fi coldness against heritage; GPU drain; a generic
"AI startup blob" look; glow used to imply quality results.

**Premium guardrails**
1. Forms are abstract. Never label, caption or describe them as cells, globules, bacteria, nutrients or molecules.
2. One organism per viewport, in three chapters plus the bottle halo. Nothing glows on farm, breed, heritage, story
   or quality chapters.
3. Text never glows and never sits on a glow core.
4. One glow hue per scene; iridescence is limited to mint → pale green → gold, never rainbow.
5. Glow carries no meaning about results: no green "pass", no red "fail".
6. Motion is slow and critically damped: breathe, lean and merge, never wobble, jiggle or explode.
7. Cows, people and the farm are never turned into biomorphs.
8. If a mid-range phone stutters, the style drops a tier. Smoothness is worth more than the effect.
