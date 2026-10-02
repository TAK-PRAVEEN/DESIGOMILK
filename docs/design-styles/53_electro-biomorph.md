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

**Images to generate** (backdrops and fallback stills only; `web/public/desigo/styles/electro-biomorph/`; full spec in section 12.7; replace the
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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: glow palette, type, motion and claim guardrails present; missing colour roles, surface/muted/ok/pending/demo, Devanagari, radius/shadow, component states, motion tokens, negatives and hero, ROOT-world and texture prompts. Added all (Noto Sans Devanagari); ok tick set to non-glowing pale green so glow never means 'pass'; folder aligned to `styles/electro-biomorph/`. Fonts OFL; no biological claims found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#7FE0B8` | signal: CTA frame + faint 4 px glow, filaments, pulses, focus ring on dark | 7.9:1 on bg |
| Primary ink | `--c-on-primary` | `#07211C` | abyss label on a filled signal button | 10.7:1 on primary |
| Secondary | `--c-secondary` | `#D9E8DF` | pale-green organism core / membrane tone (decorative) | 9.8:1 on bg |
| Accent | `--c-accent` | `#C8A96B` | warm rims, ghee glow, the gold end of the only iridescence | 5.5:1 on bg |
| Background | `--c-bg` | `#0B3B32` | forest: main dark ground of the three biomorph chapters |  |
| Surface | `--c-surface` | `#0F4A3F` | solid, never-glowing info and node panels | text on surface 9.2:1 |
| Text | `--c-text` | `#F7F4EC` | solid milk text, never glowing | 11.3:1 on bg |
| Muted text | `--c-text-muted` | `#B5C7BF` | captions, labels on dark | 7.1:1 on bg |
| Line | `--c-line` | `rgba(217,232,223,.22)` | membrane hairlines, dividers | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#D9E8DF` / `#C8A96B` / `#F7F4EC` | verified-source tick (pale, never glowing; glow never means pass) · pending text + dotted underline on dark · DEMO badge fill, abyss label 15:1 | ok 9.8:1 · pending 5.5:1 · demo 11.3:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--abyss` | `#07211C` | deepest ground (Technology plate F1), transition fade colour | |
| Style extra | `--charcoal` | `#171918` | Technology ground | |
| Style extra | `--pearl` | `#F7F4EC` | organism core light | |
| Style extra | `--membrane` | `rgba(217,232,223,.22)` | soft outer skin of organisms | |
| Style extra | `--iris` | `linear-gradient(120deg, #7FE0B8, #D9E8DF 45%, #C8A96B)` | the only iridescence; never rainbow | |
| Style extra | `--glow-root / --glow-base / --glow-essential` | `#E0463A / #F2B84B / #E6DCCB` | variant edge glows (organisms only, never text) | |
| Style extra | `--green` | `#1E7A68` | links and focus ring on light pages | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | ground = deep; core = light; edge glow `#7FE0B8`; frond-like branching organism (never 26 visible parts) |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | ground = deep; core = light; edge glow `#E0463A` (ember); rooted form with downward tendrils |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | ground = deep; core = light; edge glow `#F2B84B`; one round warm body like a low sun |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | ground = deep `#4D4130`; core = light; edge `#E6DCCB` (almost no glow); a single still pearl |

**Dark-chapter inversion:** light chapters (01 hero, 03, 04, 05, 07, 10, 14, /origin, /about) invert to the system light set: `--c-bg` → `#F7F4EC`, `--c-surface` → `#EFE9DC`, text → `#1E211F`, muted → `#5E625C`, primary → `#1E7A68` (links, focus, 1 px button frame, no glow), pending → `#7A5B37`, demo → `#171918`; organisms are absent there except the 25% pearl halo behind the hero bottle. Logo: white on dark chapters, charcoal on light; it never glows.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Instrument Sans | `@fontsource-variable/instrument-sans` | 300 · width 85 | clamp(3rem, 8vw, 9rem) | 0.95 | −0.02em | UPPERCASE hero, sentence elsewhere |
| Headline H1–H2 | Instrument Sans · Fraunces 300 italic (one poetic line per scene) | `@fontsource-variable/instrument-sans` · `@fontsource-variable/fraunces` | Instrument 400 · Fraunces 300i opsz 144 | H1 clamp(2.4rem, 5vw, 5rem) · H2 clamp(1.6rem, 2.8vw, 2.8rem) | 1.05 | −0.01em | sentence |
| Body | Instrument Sans | `@fontsource-variable/instrument-sans` | 400 · width 100 | 1rem, measure 56ch | 1.65 | 0 | sentence |
| Label / UI | Instrument Sans | `@fontsource-variable/instrument-sans` | 500 · width 90 | .72rem | 1.2 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 · `tnum` | .8rem node IDs; 1.75rem trace input | 1.3 | +0.02em | as data |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` | 300–500 | display +6% | 1.3 | 0 | — |

Licence: Instrument Sans, Fraunces, JetBrains Mono and Noto Sans Devanagari are SIL OFL 1.1 via @fontsource. Pairing: Instrument Sans' soft, slightly condensed geometry sits beside organic forms without reading as sci-fi; Fraunces italic keeps the brand voice. Text never glows.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 5vw margins, 24 px gutters, max 1440 px; one organism per viewport placed on a thirds intersection, text in the opposite third on solid ground, never over the glow core
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Radius scale:** sm 4 px (inputs, badges) · md 12 px (solid panels, a soft echo of the forms) · lg 999 px (cursor, DEMO pill)
- **Border style:** 1 px `--c-line` membrane hairline on panels; buttons 1 px signal frame
- **Shadow / elevation:** no drop shadows on UI; glow only on organisms and a faint `0 0 4px rgba(127,224,184,.35)` on dark button frames; bottle: pearl metaball halo at 40% behind + glass rim-light mask, contact ellipse on light chapters
- **Texture / overlay:** one WebGL organism canvas per page (0.5× DPR, 30 fps cap mobile) or AV1/H.264 loop or still; 2% abyss grain on dark grounds

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: 1 px signal frame + milk label (Instrument Sans 500 caps) + arrow, radius 0, transparent fill on dark, 52 px high (44 px sm), padding 0 28 px. Hover: frame draws itself (600 ms) with a faint 4 px glow, arrow +6 px, magnetic ≤ 6 px · focus-visible: 2 px signal ring offset 3 px · active: fills signal with abyss label (120 ms) · disabled: 30%, no glow · loading: a pulse travels round the frame (1.6 s per lap, slower than 1 Hz). On light chapters the frame is `#1E7A68`, no glow. A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: underline button: milk label + arrow, 1 px underline in signal on dark / green on light (240 ms). Focus-visible: ring · active: underline 2 px · disabled: muted · loading: underline pulse.
- **Text / arrow link**: milk text with signal underline on dark (`#1E7A68` on light) drawing in 240 ms, arrow +6 px · focus-visible: ring · active: underline 2 px · disabled: muted · loading: n/a. No text-shadow glow ever.
- **Icon button** (incl. menu): 44 px circle, 1.5 px round-cap line icon; on dark a 6 px soft glow at 25% on the icon only. Hover: membrane circle appears · focus-visible: ring · active: 0.94 · disabled: 30% · loading: slow pulse. `aria-label` required.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px bar, transparent over light chapters, `rgba(11,59,50,.92)` over dark; the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style); it never glows. Six links + RESERVE primary. Mobile: 56 px bar; menu opens a solid abyss sheet with large Instrument Sans links (no organism behind text); Esc closes.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 8 px pearl dot with a 24 px soft mint halo (dark) / 6 px ink dot (light) · hover: halo condenses into a 36 px ring · ROTATE: ring with `DRAG` on the synced-halo viewer · EXPLORE: halo grows to 80 px and the organism leans toward it (critically damped) · ENTER: ring with `ENTER` on chapter links · VIEW: ring with `VIEW` on photographs (no glow on photo chapters) · TRACE: ring with a travelling pulse dot over mycelium nodes. Disabled: 30% dot. Touch: tap creates one slow ripple in the organism; no cursor.
- **Card / panel / info block**: `SolidPanel`: `#0F4A3F` fill (or `#EFE9DC` on light), radius 12 px, 1 px membrane line, padding 32 px; never glowing, never translucent over a glow core. Hover (if linked): line brightens to 40% · focus-visible: ring · loading: skeleton lines at 20% milk.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): radius 4 px (DEMO pill 999 px), Instrument Sans 500 .66rem caps. Pending verification: gold `--c-pending` text + dotted underline `PENDING APPROVAL`; DEMO · not live data: milk fill, abyss label `DEMO · NOT LIVE DATA`, always visible on the trace demo; `SIMULATION` on ch. 09; `ILLUSTRATIVE` on the mycelium map. Badges never glow.
- **Input + form field** (Trace-your-milk bottle ID): charcoal ground, JetBrains Mono 1.75rem, 64 px high, radius 4 px, 1 px membrane frame, label above, prefilled `DSG-BTL-000001-3 (sample format)`. Default · hover: frame 40% · focus-visible: 2 px signal ring · active: caret · disabled: 30% · loading: a pulse travels a filament through the demo nodes; each result line appears in solid text (`aria-live=polite`) · error: gold text "No record for this ID".
- **Divider / ornament**: a 1 px membrane hairline, or a single mint filament with one slow pulse on dark chapters; none on light chapters.
- **Section header** (chapter number + title pattern): chapter number in mono + label caps + Instrument Sans 300 title; one Fraunces italic word per biomorph scene ("*Material.*").
- **Product info block** (variant name, code, price-pending, size, descriptors): solid panel, never glowing: code line in mono, name in Instrument Sans 400, Fraunces italic line; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; `RESERVE ———→`.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the bottle stands in front of a slow pearl metaball halo (40%) that works as its light source; glow catches the glass via a CSS gradient rim mask on the render. Float ±8 px / 6 s, tilt ±8°, halo leans against the tilt. Hero on milk uses the halo at 25%. Before 360 frames: ±25° turn with sheen, halo highlight follows; after: drag, halo lobes rotate in sync with frame index, counter `036 / 072` mono.
- **Trace node / timeline step**: mycelium map: glowing filaments link eight nodes; node = 14 px pearl core with a 1 px signal ring (44 px hit). Default: dim core · hover: halo 24 px · focus-visible: signal ring · active: pulse arrives, solid panel opens · disabled/not reached: 30%, filament unlit · loading: pulse 1.6 s per segment. "Illustrative journey — not live data" in solid text; glow encodes progress only, never results.

### 12.5 Iconography & illustration
Icons: 1.5 px round-cap line icons on a 24 px grid; on dark a 6 px soft glow at 25% on icons only. Illustration: abstract organisms (one WebGL shader with signed-distance metaballs + fresnel rim, or pre-rendered loops); never labelled as cells, globules, bacteria, nutrients or molecules; never near cows, people or data values. Photo treatment: no photographs inside biomorph chapters; photos elsewhere stay unglowed, warm natural grade.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | glow-in (0 → 1) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | filament pulse, chapter fade through abyss |
| `--ease-breathe` | `ease-in-out (sine)` | organism scale 1 ± .03 |
| `--dur-micro` | `240ms` | link underline, ring condense |
| `--dur-reveal` | `1200ms` | glow-in on scene entry |
| `--dur-scene` | `700ms` | light → dark fade through `--abyss` |
| `--pulse` | `1600ms / segment` | pulse along filaments (fades in last 20%) |
| `--breathe` | `5000ms` | organism breathing cycle |
| `--spring` | `stiffness 60, damping 2√k` | pointer lean (critically damped, no overshoot) |

Merge/split scrubbed with `scrub: 1` (smooth-union radius 0.35 → 0.05); organisms dissolve into 2 px particles on exit (400 ms). Never wobble, jiggle or explode. Reduced motion: organism stills, no pointer lean, no pulses; pulses are always slower than 1 Hz; quality tier drops if a mid-range phone stutters.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *abstract, not biological, deep forest green #0B3B32 and milk-white light #F7F4EC with soft mint #7FE0B8 rim, restrained, premium, calm, no text, no watermark, no logo, no letters*

| # | File path (web/public/desigo/styles/electro-biomorph/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| BM-H1 | `web/public/desigo/styles/electro-biomorph/hero-pearl-halo.png` | 3200×2000 (16:10) | yes (real alpha) | Very soft pale pearl halo of light, a smooth luminous rounded form with a faint mint-gold rim, diffuse, centred, mostly transparent edges, made for a milk-white page | base negatives + cells, bacteria, microscope, molecules, DNA, eyes, rainbow, neon pink, sci-fi HUD | Ch. 01 hero halo behind the bottle (25%) |
| BM-H2 | `web/public/desigo/styles/electro-biomorph/hero-pearl-halo-portrait.png` | 1400×2400 (7:12) | yes (real alpha) | Vertical soft pearl halo of light, tall rounded luminous form with faint mint rim, diffuse, transparent background | base negatives + cells, bacteria, microscope, molecules, eyes, rainbow | Ch. 01 hero (mobile) |
| BM-V1 | `web/public/desigo/styles/electro-biomorph/frond-glow.png` | 3000×3000 + 1400×2400 portrait | yes (real alpha) | Abstract branching frond-like glowing form in pale green #D9E8DF light with soft mint #7FE0B8 edges, symmetrical, Haeckel-inspired, transparent background | base negatives + cells, plankton species, countable parts, neurons, rainbow | MASTER 26 world still / fallback |
| BM-V2 | `web/public/desigo/styles/electro-biomorph/root-tendrils.png` | 3000×3000 + 1400×2400 portrait | yes (real alpha) | Abstract rooted glowing form with soft tendrils reaching downward, blush #F3D9D6 core and warm ember #E0463A edge glow, slow and calm, transparent background | base negatives + blood vessels, veins, roots with soil, horror, cells | ROOT 14 world still / fallback |
| BM-V3 | `web/public/desigo/styles/electro-biomorph/amber-body.png` | 3000×3000 + 1400×2400 portrait | yes (real alpha) | Single round abstract glowing body in warm amber #F2B84B light with a soft membrane, like a low sun made of light, transparent background | base negatives + egg yolk, cell nucleus, sun face, lens flare | BASE 3 world still / fallback |
| BM-V4 | `web/public/desigo/styles/electro-biomorph/pearl-organism.png` | 3000×3000 + 1400×2400 portrait | yes (real alpha) | Abstract soft still pearl of light with a translucent ivory #F4EDE2 membrane and almost no glow, smooth, calm, not a cell, not a microbe, transparent background | base negatives + cells, microbes, eyes, rainbow sheen | ESSENTIAL world still / fallback |
| BM-J1 | `web/public/desigo/styles/electro-biomorph/mycelium-network.png` | 3600×2000 (9:5) | no | Abstract network of fine glowing mint filaments branching organically across a deep forest-green #07211C void, a few brighter junctions, sparse, elegant | base negatives + neurons, brain, map labels, circuit boards, numbers | Ch. 06 / /trace mycelium fallback still |
| BM-M1 | `web/public/desigo/styles/electro-biomorph/milk-metaballs.png` | 3600×2000 (9:5) | no | Abstract milk-white liquid blobs merging and separating on deep forest green, soft inner glow, glossy, minimal | base negatives + fat globules diagram, cells, microscope view, splashes with text | Ch. 09 `MetaballMilk` still |
| BM-T1 | `web/public/desigo/styles/electro-biomorph/abyss-grain.png` | 2048×2048, seamless | no | Seamless very fine dark grain texture on deep forest-green #07211C, almost invisible, even | base negatives + stars, sparkles, patterns | 2% overlay on dark grounds |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Prompts must never ask for "cells", "bacteria", "microscope" or "molecules"; organisms are never captioned as anything biological.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/53_electro-biomorph.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/electro-biomorph/
