# 52 — Cozy Blanket · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 3 / 5 for the whole site, 4 / 5 as a seasonal layer** · **Best used for:** a winter season skin
(November to February) built around early-morning delivery, the Ghee chapter and /ghee (winter is ghee season), the
delivery and subscription pages, and email and social. The year-round site stays on the minimal base.

---

## 1. Style essence

The cozy-blanket style makes the screen feel soft and warm: knit and quilted textures, pillowy surfaces with stitched
edges, warm low-angle light, soft shadows, rounded forms and a slow, damped motion that sinks rather than snaps. It
is the visual equivalent of being under a quilt on a cold morning with something warm in your hands.

For DESIGO® the textile is local: the **rajai (razai)**, the light cotton-filled quilt of Jaipur, often hand-block
printed in Sanganer or Bagru, and the woollen shawls and knitwear of a Rajasthan winter, where desert nights are
genuinely cold.

Three reference points:
1. **Jaipuri rajai and block-printed textiles**: small repeat motifs (buti), madder red, indigo and saffron, with
   quilting lines running through.
2. **Scandinavian *hygge* interiors and knitwear photography**: undyed wool, cable knits, morning window light.
3. **Winter-morning photography in Rajasthan**: shawls, mist over fields, a cup of chai, the first light in a
   doorway.

## 2. Why it fits DESIGO® and where it fights

- **The delivery moment is an early-morning ritual.** "Delivered cold, early morning" is public copy. The honest
  emotional contrast is **cold milk, warm home**: the chilled glass bottle arriving at a warm doorstep.
- **It is the right register for ghee.** Bilona ghee, winter kitchens and gifting season belong together.
- **It is human and local** without needing any claim: textiles, light and mornings carry the feeling.

**Where it fights:** softness can look generic (a candle brand, a mattress brand), rounded padded UI can feel like
an app template, and warmth must never imply the milk is delivered warm or "boosts immunity in winter" (a health
claim that is never allowed). The remedy is a seasonal skin with real local textiles, a strict surface set and copy
that talks about mornings, never about the body.

## 3. Art direction

### Palette: undyed wool, madder, indigo, saffron
| Token | Hex | Use |
|---|---|---|
| `--wool` | `#F3EADB` | Main ground (undyed wool, warmer than milk) |
| `--milk` | `#F7F4EC` | Raised soft surfaces |
| `--madder` | `#A8352E` | Rajai red (a softened ROOT 14 red) |
| `--indigo` | `#2D3E5C` | Block-print indigo, night before dawn |
| `--saffron` | `#E3A13B` | Shawl, morning sun (a softened BASE 3 amber) |
| `--moss` | `#3E6650` | Knit green (a softened MASTER 26 green) |
| `--earth` | `#8C6A43` | Dhurrie, wood, stitching thread |
| `--forest` | `#0B3B32` | Dark chapters, footer |
| `--ember` | `#D9782D` | Lamp and chai warmth, highlights only |
| `--ink` | `#2A2622` | Body text (warm, never black) |
| `--green` | `#1E7A68` | Links and focus ring on milk; on wool use `#18705F` (5.0:1; `#1E7A68` is 4.36:1, see 12.1) |
| `--soft-shadow` | `0 14px 34px rgba(140,106,67,.18)` | Pillowed surfaces |

Variant textiles (ground / textile colour / text):
| Variant | Ground | Textile | Text |
|---|---|---|---|
| MASTER 26 | `#0A2A20` | Moss cable knit `#3E6650` with `#D9E8DF` highlights | `#F7F4EC` |
| ROOT 14 | `#F3D9D6` | Madder block-printed rajai `#A8352E` | `#2A2622` |
| BASE 3 | `#F8E4C2` | Saffron woollen shawl `#E3A13B` | `#2A2622` |
| ESSENTIAL | `#F4EDE2` | Undyed cotton and wool `#E6DCCB` | `#2A2622` |

### Typography
- **Display:** *Fraunces* (OFL) 350, opsz 144, **SOFT 100**, WONK 0: the softest setting of the brand face, so the
  style stays inside the brand family.
- **UI and body:** *Figtree* (OFL) 400–600, a friendly geometric sans with open forms, 17 px body.
- **Data:** *JetBrains Mono* 400 only where IDs appear (trace demo, codes).
- **Devanagari:** *Tiro Devanagari Hindi*.
- Scale: display `clamp(3rem, 7vw, 8rem)`, line-height 1.0 · lead `1.35rem` · body `1.0625rem/1.7`, 56ch.

### Texture, imagery, iconography
- Textures: **photographed real textiles** (a Jaipuri rajai, a hand-knit shawl, a dhurrie) bought from named makers
  and credited; generated knit and quilt textures only as backups. Applied at 100% as surfaces, not as overlays.
- Stitching: a 1.5 px dashed line (`6 4` dash, `--earth` at 70%) inset 10 px from every soft surface, like a quilt
  channel.
- Imagery: real morning photography (delivery, doorsteps, kitchens, shawled herders with consent), warm grade, low
  sun. People are never asked to stage "cozy" for a claim.
- Icons: 1.75 px rounded-cap line icons with soft corners (radius 2 px on joins).

### Grid and surfaces
12 columns, 5vw margins, 28 px gutters (generous). This style is the one exception to the brand's `--r-0` rule:
soft surfaces use **radius 24 px** and a padded inner stitch, but there are **at most two soft surfaces per
viewport**; everything else stays flat on the wool ground. Spacing runs one step larger than the base system.

### Header wordmark
The black write/un-write DESIGO® loop is unchanged on the wool ground (black on `#F3EADB` passes AAA). It never sits
on a textile texture.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Sink (press) | Scale 1 → .98, shadow 34 → 14 px blur, 320 ms `cubic-bezier(.3,.7,.4,1)`; release 480 ms |
| Settle (enter) | Surfaces rise 24 px and settle, 1000 ms `cubic-bezier(.16,1,.3,1)`; no overshoot |
| Stitch draw | Dashed stitch lines draw along a path (stroke-dashoffset), 1200 ms `--ease-inout` |
| Thread line | The journey's milk line is a thread pulled through stitches, scroll-scrubbed with `scrub: 1.5` (extra lag feels soft) |
| Breathing | The bottle and soft surfaces drift ±4 px over 7 s, slower than the base 6 s float |
| Morning light | Section backgrounds warm by 2–3% (wool → saffron tint) as the page progresses from dawn to morning |
| Transition | Cross-fade through `--wool`, 700 ms |

**Cursor states:** default 18 px soft felt dot (radial gradient, `--earth` at 60%) · **link**: a 44 px dashed
stitch ring that rotates once every 20 s · **soft surface**: the dot flattens to an ellipse (sinking into fabric) ·
**360**: 72 px ring labelled `DRAG` with a stitched edge · **text**: native caret · **disabled**: 30% dot · touch: none.

**Hover:** soft surfaces lift 4 px and their shadow deepens (320 ms); text links get a stitched dashed underline that
"sews" from left to right (400 ms); the arrow travels 6 px; magnetic offset ≤ 6 px.

## 5. The hero bottle and the four variants

The bottle rests **on a folded rajai**, the only cold object in a warm scene. A light condensation layer on the render
(12%) says it has just come out of the cold. The contact shadow becomes a fabric dent: a darker soft ellipse with a
faint lighter rim where the cloth rises. Breathing float ±4 px over 7 s, pointer tilt ±6°.

- **Before 360 frames:** ±25° turn with sheen; the fold of the quilt under it stays still, which keeps the turn
  believable.
- **After 360 frames:** the Bottle360Viewer sits on a quilted square (a soft surface with stitched edge); drag with
  900 ms damped inertia; frame counter `036 / 072` in Figtree tabular numerals stitched into the corner.

| Variant | Cozy world |
|---|---|
| **MASTER 26** | A deep forest ground with a moss-green cable-knit throw, morning light from the left. Line: "Twenty-six herbs. The fullest expression of the source." (herb count pending). |
| **ROOT 14** | A madder block-printed rajai on blush, small buti motifs, the bottle on the fold. "Fourteen herbs, rooted in free grazing." (pending). |
| **BASE 3** | A saffron shawl in low golden sun across a charpai, long soft shadows. "The everyday foundation." |
| **ESSENTIAL** | Undyed cotton and wool in pale ivory, almost no pattern. "Simple, balanced, honest." |

**Info panel:** one soft surface (radius 24 px, stitched edge): `DESIGO® V1+` · name in Fraunces SOFT 100 · price and
size with dotted underline and "pending approval" tooltip · descriptors · `RESERVE ———→`.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Winter dawn. The bottle on a folded rajai by a window, low sun. "MILK / FROM THE / SOURCE." in Fraunces SOFT 100. CTAs as stitched links. Season line in small caps: "Early mornings" (not a claim). |
| 02 | Bottle becomes the story | Six woven labels (like sewn-in garment tags) appear around the bottle: ORIGIN, BREED, FEED, FARM, QUALITY, TRACE, each with its line. Wool → forest. |
| 03 | Cow → bottle | **Signature: a patchwork.** Seven quilt squares sewn into a strip, one per station with the line illustrations (E1–E7) printed on cloth; a thread (the milk line) pulls through each seam as you scroll. |
| 04 | Where it begins | Real winter-morning farm photography: mist, shawls, warm light. Captions on a soft surface. AssetSlots read "Winter farm photograph needed". |
| 05 | Breeds | Breed plates on linen-mounted cards. Cows appear only as plates or real photos, never dressed up; if real photos show winter jute blankets on cows, they are documented practice, not styling. Status line visible. |
| 06 | Traceability | A quilt map: the trace path stitched in thread across an indigo cloth, nodes as sewn buttons that open panels. "Illustrative journey — not live data". |
| 07 | Quality | The calmest chapter: a flat linen surface, the 16 parameters in a clean two-column list, readouts "— pending lab confirmation". No textile pattern behind data. |
| 08 | Four milks | Four textile worlds (section 5) with a stitched 01–04 index. |
| 09 | Milk as material | The milk ribbon rendered with softer shading, drifting over undyed wool. |
| 10 | Heritage | Craft heritage side by side: hand block printing and bilona churning, both slow, both by hand. Gold hairlines, italic statement. |
| 11 | Technology | Charcoal with a dark knit texture at 6%. "TRADITION IS THE SOURCE. / TECHNOLOGY PROTECTS THE JOURNEY." Seven verbs stitched one by one. No insulation or temperature claims. |
| 12 | Ghee | **The natural home of this style.** A winter kitchen in warm gold, a quilt corner, the jar and bilona; three grades and their milks; prices pending. |
| 13 | Trace your milk | A pillowed input surface on charcoal, results appearing as stitched lines. `DEMO` badge in a woven-label style, always visible. |
| 14 | Story | A patchwork timeline: one square per verified milestone. |
| 15 | Final CTA | Dawn at a doorstep: the bottle waiting, a folded shawl on the step. "Know where your milk comes from." Wool → forest. |

**Inner pages:** /milk has four textile squares in a 2×2 patchwork that hands off to /milk/[variant] (textile world,
quilted 360 viewer, flat facts table with pending values) · /origin is the winter photo essay · /trace is the quilt
map and demo · /technology is dark knit with seven verbs · /about uses patchwork milestones and team portraits in
morning light · /ghee is the winter kitchen with gifting · /reserve is one soft surface with a calm form and the
four variants as fabric swatches.

## 7. Component variants

`SoftSurface` (radius 24, stitched inset, sink on press) · `StitchLine` · `ThreadPath` (JourneyTrack, TraceMap) ·
`Patchwork` (journey, timeline) · `WovenLabel` (orbit words, DEMO badge) · `QuiltMap` (TraceMap) · `SewnButton`
(trace nodes) · `TextileWorld` (ProductScene) · `QuiltedViewer` (Bottle360Viewer wrapper) · `FabricDent` (contact
shadow) · `FeltCursor` · `MorningLight` (scroll-warmed background) · `PendingValue`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Wool palette, SOFT type | Tokens, specimen, season switch | Body ≥ 7:1; fonts ≤ 150 KB | Wordmark vector | 2 |
| 2 | Grid & shell | Soft surfaces, nav, cursor | `SoftSurface`, `FeltCursor` | Max 2 soft surfaces per viewport | — | 3 |
| 3 | Hero | Bottle on rajai | Hero, `FabricDent` | LCP ≤ 2.2 s | Rajai photo, render | 3 |
| 4 | Bottle → story | Woven labels | Pinned scene | Reduced motion = static list | — | 3 |
| 5 | Cow → bottle | Patchwork + thread | `Patchwork`, `ThreadPath` | Vertical patchwork on mobile | E1–E7 | 4 |
| 6 | Origin / farm | Winter photos | Photo scene | Real photos, consent on file | Winter farm shoot | 2 |
| 7 | Breeds | Mounted plates | Breed cards | No styled animals; status visible | D1–D6 | 2 |
| 8 | Trace map | Quilt map | `QuiltMap`, `SewnButton` | Keyboard nodes; label visible | Indigo cloth photo | 4 |
| 9 | Quality | Flat linen data | Scene | No unconfirmed values; no pattern behind data | — | 2 |
| 10 | Four worlds + 360 | Textile worlds | 4 scenes, `QuiltedViewer` | Text contrast per world; counter correct | Textile photos, 360 | 6 |
| 11 | Heritage | Craft parallel | Scene | Makers credited | Block-print photo | 2 |
| 12 | Technology | Dark knit | Scene | Public vocabulary; no insulation claims | — | 2 |
| 13 | Ghee | Winter kitchen | Scene | Prices pending-styled | Kitchen photo, jar | 3 |
| 14 | Trace-your-milk | Pillowed input | Demo | DEMO visible; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Patchwork line-up | Pages | View Transition fallback | 360 | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` | Photos | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | Portraits | 3 |
| 18 | Mobile | Soft but light | Mobile surfaces | Textures ≤ 150 KB each; no horizontal scroll | — | 3 |
| 19 | A11y + reduced motion | — | Static mode | WCAG 2.2 AA; textures never behind body text | — | 2 |
| 20 | Perf, QA, season switch | Ship | Season toggle (date-based), QA | Lighthouse ≥ 93; switch reverts on 1 March | All | 3 |

**Total:** about 60 days for the full site, about 25 days as a seasonal skin on hero, 03, 12, 15, /ghee and /reserve.

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** a winter photo shoot (doorstep at dawn, delivery, kitchens, the farm in mist, with consent);
three or four real textiles from named Rajasthani makers, photographed flat (top-down, raking light) and credited;
the 360 frames; a ghee jar photo in winter light.

**Images to generate** (textures and backdrops only; `web/public/desigo/styles/cozy-blanket/`; full spec in section 12.7; append the house-style tail):
| # | File | Size | Prompt |
|---|---|---|---|
| CZ1 | `knit-moss.png` | 2400×2400, seamless | Seamless tileable texture of hand-knitted cable-knit wool in muted moss green #3E6650, soft raking light, close-up, no text, no watermark, no logo, no letters |
| CZ2 | `rajai-madder.png` | 2400×2400, seamless | Seamless tileable texture of a cotton quilt with small hand-block-printed floral buti motifs in madder red #A8352E on cream, visible quilting lines, soft light, no text, no watermark, no logo, no letters |
| CZ3 | `shawl-saffron.png` | 3200×2000 | Folded saffron #E3A13B woollen shawl on a wooden charpai in low golden morning sun, long soft shadows, empty space at center, no people, no text, no watermark, no logo, no letters |
| CZ4 | `undyed-wool.png` | 2400×2400, seamless | Seamless texture of undyed cream wool felt, very soft, subtle fibres, flat light, no text, no watermark, no logo, no letters |
| CZ5 | `dawn-window.png` | 3200×2000 | Soft winter dawn light through a window onto a folded cotton quilt on a bed, warm cream and ember tones, mist outside, calm, empty center, no people, no text, no watermark, no logo, no letters |

The bottle and jar are composited in code, never generated; real homes and people are photographed, not generated.

## 10. Performance, accessibility and mobile

- Textures as AVIF at 1024 px tiles (≤ 150 KB each), at most two textured surfaces per viewport; shadows are static
  (no animated blur).
- Accessibility: body text always on plain wool or milk, never on a textile pattern; stitched underlines plus colour
  change for links; focus ring 2 px `--green` outside the stitch; reduced motion removes breathing and thread motion.
- Mobile: surfaces go full width with 16 px radius; the patchwork becomes a vertical strip; the bottle sits on the
  rajai photo cropped tightly.

## 11. Risks and premium guardrails

**Risks:** generic candle-brand or mattress-brand look; app-template padding; implied health claims about winter;
implying warm milk; textiles from unnamed or misattributed sources.

**Premium guardrails**
1. Seasonal skin by default (November to February); the year-round site remains minimal.
2. Real, credited local textiles first; generated textures only as backups.
3. Copy talks about mornings, light and ritual, never immunity, warmth "inside" or the body.
4. The bottle is always cold: condensation on, never steam near the bottle.
5. At most two soft surfaces per viewport; data and prices sit on flat surfaces.
6. Cows are never dressed up or posed for coziness.
7. Motion sinks and settles; nothing bounces, wobbles or squishes.
8. One accent per scene; the warm palette never turns orange-on-orange.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: palette, textile rules, type and motion present; missing colour roles, ok/pending/demo tokens, radius scale, component states, motion tokens, negatives and hero-portrait, four variant-world and journey/trace prompts. Added all; link green darkened to `#18705F` on wool (`#1E7A68` was 4.36:1 on `#F3EADB`); folder aligned to `styles/cozy-blanket/`. Fonts OFL (Figtree, Fraunces); copy already avoids winter-health claims.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#2D3E5C` | block-print indigo (the night before dawn): primary CTA plate, active states; neutral to all four variants | 9.0:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on indigo | 9.8:1 on primary |
| Secondary | `--c-secondary` | `#A8352E` | madder rajai red: woven labels, stitched accents, ghee/winter highlights | 5.5:1 on bg |
| Accent | `--c-accent` | `#18705F` | links and focus ring on wool (DESIGO green darkened for 5.0:1); `#1E7A68` on milk | 5.0:1 on bg |
| Background | `--c-bg` | `#F3EADB` | undyed wool ground |  |
| Surface | `--c-surface` | `#F7F4EC` | raised soft surfaces (max two per viewport) | text on surface 13.7:1 |
| Text | `--c-text` | `#2A2622` | warm body ink, never black | 12.6:1 on bg |
| Muted text | `--c-text-muted` | `#6A5D50` | captions, season line, labels | 5.3:1 on bg |
| Line | `--c-line` | `rgba(140,106,67,.70)` | 1.5 px dashed stitch `6 4`, inset 10 px from soft surfaces | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#3E6650` / `#7A5B37` / `#2A2622` | moss tick for verified items · pending text + dotted underline · woven-label DEMO badge: ink fill, wool label, stitched edge | ok 5.5:1 · pending 5.2:1 · demo 12.6:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--saffron` | `#E3A13B` | shawl, morning sun (softened BASE 3 amber), fills only | |
| Style extra | `--moss` | `#3E6650` | knit green (softened MASTER 26 green) | |
| Style extra | `--madder` | `#A8352E` | rajai red (softened ROOT 14 red) | |
| Style extra | `--earth` | `#8C6A43` | dhurrie, wood, stitching thread | |
| Style extra | `--forest` | `#0B3B32` | dark chapters, footer | |
| Style extra | `--ember` | `#D9782D` | lamp and chai warmth, highlights only | |
| Style extra | `--soft-shadow` | `0 14px 34px rgba(140,106,67,.18)` | pillowed surfaces | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | ground = deep `#0A2A20`; moss cable-knit throw `#3E6650` with light `#D9E8DF` highlights; milk text |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | ground = light `#F3D9D6`; madder block-printed rajai `#A8352E` (softened base); ink `#2A2622` text |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | ground = light `#F8E4C2`; saffron shawl `#E3A13B` (softened base) on a charpai; ink text |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | ground = light `#F4EDE2`; undyed cotton and wool `#E6DCCB`; ink text; almost no pattern |

**Dark-chapter inversion:** Technology (11), Trace (13) and the MASTER 26 world go dark: `--c-bg` → `#171918` with a 6% dark knit texture (or `#0B3B32`), text → `#F7F4EC`, muted → `#C9C4BA`, soft surfaces → `#23262A` with stitch `rgba(232,220,203,.5)`, primary → saffron `#E3A13B` with ink label, accent → `#7FE0B8`; the logo turns white and never sits on a textile.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | 350 · opsz 144 · SOFT 100 · WONK 0 | clamp(3rem, 7vw, 8rem) | 1.0 | −0.025em | sentence; hero in caps |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | 400 · SOFT 100 | H1 clamp(2.4rem, 4.5vw, 4.5rem) · H2 clamp(1.6rem, 2.6vw, 2.6rem); lead 1.35rem | 1.1 | −0.015em | sentence |
| Body | Figtree | `@fontsource-variable/figtree` | 400 / 500 | 1.0625rem (17 px), measure 56ch | 1.7 | 0 | sentence |
| Label / UI | Figtree | `@fontsource-variable/figtree` | 600 | .75rem; season line in small caps | 1.3 | +0.12em | UPPERCASE / small caps |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 · `tnum` | .85rem; 1.75rem trace input | 1.3 | 0 | as data |
| Devanagari (optional) | Tiro Devanagari Hindi | `@fontsource/tiro-devanagari-hindi` | 400 | display +6% | 1.4 | 0 | — |

Licence: Fraunces, Figtree, JetBrains Mono and Tiro Devanagari Hindi are SIL OFL 1.1 via @fontsource. Pairing: Fraunces at SOFT 100 is the softest setting of the brand face; Figtree's open, friendly forms read warm without turning childish.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 5vw margins, 28 px gutters, max 1400 px; spacing runs one step larger than the base system
- **Spacing scale:** 4 px base, shifted up one step: 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160
- **Radius scale:** sm 8 px (inputs, badges) · md 16 px (mobile soft surfaces) · lg 24 px (desktop soft surfaces, max two per viewport); everything else flat at 0
- **Border style:** 1.5 px dashed stitch `6 4` in `--earth` at 70%, inset 10 px from every soft surface; no solid frames
- **Shadow / elevation:** soft surfaces `0 14px 34px rgba(140,106,67,.18)`; pressed `0 6px 14px rgba(140,106,67,.18)`; bottle: fabric dent (darker soft ellipse with a faint lighter rim) instead of a contact shadow; shadows static, never animated blur
- **Texture / overlay:** real photographed textiles (rajai, shawl, dhurrie) at 100% as surfaces, AVIF 1024 px tiles ≤ 150 KB, max two textured surfaces per viewport; never behind body text

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: stitched soft button: indigo `#2D3E5C` plate, radius 24 px, inset stitch line in `rgba(247,244,236,.5)`, Figtree 600 caps milk + arrow. 52 px high (44 px sm), padding 0 28 px. Hover: lifts 4 px, shadow deepens (320 ms), arrow +6 px, magnetic ≤ 6 px · focus-visible: 2 px accent ring outside the stitch, offset 3 px · active: sink 1 → .98, shadow 34 → 14 px blur (320 ms `cubic-bezier(.3,.7,.4,1)`, release 480 ms) · disabled: 40%, no shadow · loading: stitch line draws round the plate (1200 ms loop). A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour. (Buttons are the one place outside soft surfaces allowed a radius.)
- **Secondary button**: text label + arrow with a stitched dashed underline that sews left → right on hover (400 ms); no plate. Focus-visible: accent ring · active: underline solid · disabled: muted · loading: underline re-sews in a loop.
- **Text / arrow link**: accent `#18705F` Figtree 500 with stitched dashed underline + colour change on hover (sews 400 ms), arrow +6 px · focus-visible: accent ring · active: ink · disabled: muted · loading: n/a.
- **Icon button** (incl. menu): 44 px round soft button, 1.75 px rounded-cap icon (menu = two lines with rounded ends). Hover: milk surface + soft shadow · focus-visible: accent ring · active: sink .96 · disabled: 30% · loading: stitched ring rotates (20 s/turn, static in reduced motion). `aria-label` required.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px bar on plain wool, never on a textile; the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style) (charcoal on `#F3EADB` is 14.8:1). Six Figtree links + RESERVE primary. Season toggle hidden (date-based Nov–Feb, reverts 1 March). Mobile: 56 px bar; menu opens a full-height soft surface sheet (radius 24 px top corners) with stitched dividers; Esc closes, focus returns.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 18 px soft felt dot (radial gradient, `--earth` 60%) · hover: 44 px dashed stitch ring (rotates once per 20 s) · ROTATE: 72 px stitched ring `DRAG` on the quilted viewer · EXPLORE: dot flattens into an ellipse 'sinking' into fabric over soft surfaces and textile worlds · ENTER: stitch ring with `ENTER` on chapter/inner-page links · VIEW: stitch ring `VIEW` on photographs · TRACE: ring with a sewn-button centre `TRACE` on quilt-map nodes. Disabled: 30% dot. Touch: none.
- **Card / panel / info block**: `SoftSurface`: milk fill, radius 24 px (16 mobile), stitched inset, soft shadow, padding 32 px; max two per viewport, data and prices on flat surfaces. Hover (if linked): lift 4 px · focus-visible: accent ring · active: sink · loading: stitch draws around an empty surface.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): woven-label style: 22 px high, radius 4 px, Figtree 600 .66rem caps, folded-tag notch. Pending verification: wool fill, `--c-pending` text + dotted underline `PENDING APPROVAL`; DEMO · not live data: ink `#2A2622` woven label with wool text `DEMO · NOT LIVE DATA`, always visible on demo content; ILLUSTRATIVE tag on the quilt map.
- **Input + form field** (Trace-your-milk bottle ID): pillowed input surface on charcoal: radius 16 px, 64 px high, JetBrains Mono 1.75rem, stitched inset, label above, prefilled `DSG-BTL-000001-3 (sample format)`. Default · hover: stitch brightens · focus-visible: 2 px accent ring outside stitch · active: sink .99 · disabled: 40% · loading: stitch sews round (1200 ms) · results appear as stitched lines (`aria-live=polite`) · error: pending-earth text "No record for this ID".
- **Divider / ornament**: a stitched dashed line (1.5 px, `6 4`) or a thin strip of real block-print buti border (credited maker); never generated motifs on data chapters.
- **Section header** (chapter number + title pattern): chapter number in Figtree 600 inside a sewn-button circle + label caps + Fraunces SOFT 100 title; morning-light background warmth +2–3% as the page progresses.
- **Product info block** (variant name, code, price-pending, size, descriptors): one soft surface (radius 24 px, stitched): code line in mono, name in Fraunces SOFT 100, editorial line; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; `RESERVE ———→`. Prices sit on the flat part of the surface, never on a textile.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the bottle rests on a folded rajai photo, the only cold object in a warm scene: condensation layer 12% composited on the render, fabric-dent shadow, never steam. Breathing float ±4 px / 7 s, tilt ±6°. Before 360 frames: ±25° turn with sheen, quilt fold stays still; after: Bottle360Viewer on a quilted square, 900 ms damped inertia, counter `036 / 072` in Figtree tabular, stitched into the corner.
- **Trace node / timeline step**: quilt map: the path stitched in thread across indigo cloth; nodes are sewn buttons (24 px, 44 px hit). Default: milk button with four thread holes · hover: lifts 2 px · focus-visible: accent ring · active: button pressed, soft panel opens · disabled/not reached: 40% · loading: thread pulls through to the next node (`scrub: 1.5`). "Illustrative journey — not live data" on a woven label.

### 12.5 Iconography & illustration
Icons: 1.75 px rounded-cap line icons with 2 px join radius, 24 px grid, ink or milk. Illustration: E1–E7 line drawings printed onto quilt squares (patchwork); no generated people or homes. Photo treatment: real winter-morning photography (doorsteps, delivery, kitchens, shawled herders with consent), warm low-sun grade, soft highlights; real credited textiles photographed flat with raking light. Cows are never dressed up or posed.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | settle: surfaces rise 24 px and settle |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | stitch draw, cross-fade through wool |
| `--ease-sink` | `cubic-bezier(.3,.7,.4,1)` | press sink |
| `--dur-micro` | `320ms` | sink, lift |
| `--dur-reveal` | `1000ms` | settle |
| `--dur-scene` | `700ms` | transition cross-fade through `--wool` |
| `--dur-stitch` | `1200ms` | dashed stitch draw |
| `--breath` | `±4px / 7s` | bottle and soft-surface drift (slower than the base 6 s) |
| `--scrub-soft` | `scrub: 1.5` | thread line (extra lag feels soft) |

Motion sinks and settles; nothing bounces, wobbles or squishes. Morning light warms section backgrounds 2–3% from dawn to morning. Reduced motion: no breathing, no thread motion, stitches shown complete, presses change colour only.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *soft winter-morning light, undyed wool, madder, indigo and saffron palette with milk white #F7F4EC and earth brown #8C6A43, tactile, calm, premium, subtle film grain, no text, no watermark, no logo, no letters*

| # | File path (web/public/desigo/styles/cozy-blanket/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| CZ-H1 | `web/public/desigo/styles/cozy-blanket/dawn-window.png` | 3200×2000 (16:10) | no | Soft winter dawn light through a window onto a folded cotton quilt on a bed, warm cream and ember tones, mist outside, calm, empty center, no people | base negatives + people, steam, candles, mattress advertising look, hot drinks | Ch. 01 hero backdrop |
| CZ-H2 | `web/public/desigo/styles/cozy-blanket/dawn-window-portrait.png` | 1400×2400 (7:12) | no | Vertical view of winter dawn light falling across a folded block-printed cotton quilt near a window, warm cream and ember tones, empty lower center | base negatives + people, steam, candles | Ch. 01 hero (mobile) |
| CZ-V1 | `web/public/desigo/styles/cozy-blanket/world-moss-knit.png` | 3200×2000 + 1400×2400 portrait | no | Moss-green #3E6650 hand-knitted cable-knit throw folded on a deep forest #0A2A20 ground, morning light from the left, soft shadows, empty space at center | base negatives + people, pets, steam | MASTER 26 world |
| CZ-V2 | `web/public/desigo/styles/cozy-blanket/rajai-madder.png` | 3200×2000 + 1400×2400 portrait | no | Cotton quilt with small hand-block-printed floral buti motifs in madder red #A8352E on cream, folded on a blush #F3D9D6 ground, visible quilting lines, soft light, empty center | base negatives + people, deity motifs, logos on fabric | ROOT 14 world |
| CZ-V3 | `web/public/desigo/styles/cozy-blanket/shawl-saffron.png` | 3200×2000 + 1400×2400 portrait | no | Folded saffron #E3A13B woollen shawl on a wooden charpai in low golden morning sun, long soft shadows, empty space at center | base negatives + people, steam, cups | BASE 3 world |
| CZ-V4 | `web/public/desigo/styles/cozy-blanket/world-undyed.png` | 3200×2000 + 1400×2400 portrait | no | Folded undyed cotton and cream wool blankets in pale ivory #F4EDE2 and #E6DCCB, almost no pattern, soft diffuse morning light, very calm, empty center | base negatives + people, patterns, colour accents | ESSENTIAL world |
| CZ-J1 | `web/public/desigo/styles/cozy-blanket/patchwork-strip.png` | 3600×800 (9:2) | no | Top-down strip of seven plain undyed cotton quilt squares sewn together with visible running stitches, empty square centers, flat raking light | base negatives + printed images in squares, pictures, words | Ch. 03 patchwork journey ground |
| CZ-J2 | `web/public/desigo/styles/cozy-blanket/indigo-cloth.png` | 3200×2000 | no | Top-down flat indigo #2D3E5C hand-dyed cotton cloth with subtle block-print texture and soft natural creases, even light | base negatives + map, lines, words, faces | Ch. 06 quilt map background (backup to real cloth photo) |
| CZ-T1 | `web/public/desigo/styles/cozy-blanket/knit-moss.png` | 2400×2400, seamless | no | Seamless tileable texture of hand-knitted cable-knit wool in muted moss green #3E6650, soft raking light, close-up | base negatives + seams, labels, holes | Dark knit (Technology 6%), backup textile |
| CZ-T2 | `web/public/desigo/styles/cozy-blanket/undyed-wool.png` | 2400×2400, seamless | no | Seamless texture of undyed cream wool felt, very soft, subtle fibres, flat light | base negatives + stains, pilling clumps | Soft-surface backup texture |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Real, credited textiles from named Rajasthani makers come first; generated textiles are backups. The bottle and jar are composited in code; real homes and people are photographed, not generated.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/52_cozy-blanket.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/cozy-blanket/
