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
| `--green` | `#1E7A68` | Links, focus ring |
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

**Images to generate** (textures and backdrops only; `web/public/desigo/styles/cozy/`; append the house-style tail):
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
