# 21 — Cyberpunk · DESIGO® build plan

**Fit score: 1 / 5 for the whole site** · **Best used for:** one heavily toned-down chapter, 11 *Technology*, or a
single after-dark campaign page ("4:00 AM — The Cold Chain Never Sleeps") about the night-time delivery and cold-chain
operation. Never for the product, the cows or heritage.

---

## 1. Style essence

Cyberpunk is "high tech, low life": dense neon cities at night, rain-slick streets, holographic signage, glitch,
scan-lines, HUD overlays, megacorporation logos and a mood of dystopian tension. Its visual grammar comes from
*Blade Runner* (1982), *Akira*, William Gibson's novels and *Ghost in the Shell*, and in games from *Cyberpunk 2077*.
Its core palette is magenta and cyan neon on near-black, with type in condensed techno faces, often with Asian-script
signage.

Three reference points:
1. ***Blade Runner* / *Blade Runner 2049*:** light through rain and haze, and the sodium-amber versus neon-teal palette (2049 is the more restrained, premium version).
2. ***Ghost in the Shell* (1995):** data overlays on a dense city, and information as atmosphere.
3. **Indian night streets:** neon shop signs in Devanagari, the blue-washed old city of Jodhpur at 4 a.m. under
   sodium lamps, and milk vans before dawn. The only honest local bridge.

## 2. Why it fits DESIGO® and where it fights

**Fits (narrowly)**
- DESIGO® runs a **real night operation**: chilling, plant processing and pre-dawn delivery, plus a technology
  layer (RTCOM: QR identities, apps, temperature logs). A "night shift" story can be told in neon light.
- Glowing data paths are already scripted in chapters 06 and 11. Cyberpunk is the extreme end of that.
- It can make a youth campaign memorable.

**Fights (fundamentally)**
- Cyberpunk is **dystopian**: corporate control, decay and artificial bodies. DESIGO®'s story is the opposite:
  natural, indigenous, rooted, transparent, small farms.
- Neon magenta and cyan on food looks synthetic and artificial. Milk in that light looks unappetising.
- Surveillance aesthetics (HUDs, tracking reticles) next to "trace your milk" can make traceability feel like
  surveillance of farmers and customers. That is a real reputational risk.
- Glitch effects imply broken systems, the exact opposite of "every hand-off is recorded".

**Verdict: 1/5.** Use it only as a **restrained "night shift" chapter** that ends in dawn, a visual argument that
*technology works through the night so the morning is simple*. The full 20-phase plan is provided as requested, with
the recommended scope marked.

## 3. Art direction

### Palette: "Sodium & Signal" (DESIGO®-tuned, no magenta)
The classic magenta/cyan palette is replaced by a palette derived from the brand and from real Indian night light
(sodium street lamps, the indigo walls of Jodhpur, the green of the brand).
| Token | Hex | Use |
|---|---|---|
| `--cp-night` | `#07090A` | Base night |
| `--cp-asphalt` | `#121615` | Surfaces |
| `--cp-jodhpur` | `#1B2A4A` | Indigo city haze (Jodhpur's blue walls at night) |
| `--cp-forest` | `#0B3B32` | Brand dark, data planes |
| `--cp-signal` | `#7FE0B8` | Primary neon (brand signal) |
| `--cp-signal-hot` | `#B8FFE3` | Neon core highlight |
| `--cp-sodium` | `#F2A93A` | Sodium-lamp amber (= BASE accent lifted) |
| `--cp-rose` | `#D8424B` | Alert / ROOT accent, rarely |
| `--cp-milk` | `#F1EDE3` | Text and the milk itself |
| `--cp-dim` | `#8C938F` | Secondary text (≥ 5:1 on night) |

Neon recipe: text-shadow stack `0 0 2px #B8FFE3, 0 0 8px #7FE0B8, 0 0 24px rgba(127,224,184,.45)` on display type only.

### Typography
- **Display:** *Chakra Petch* (Cadson Demak, OFL), a squared techno face that is more refined than Orbitron.
- **Secondary:** *Rajdhani* (Indian Type Foundry, OFL, Latin and Devanagari), condensed with a native Devanagari
  companion. It allows neon signage in Hindi, the authentic Indian-street touch, for example "दूध" (milk) on a neon
  sign, used only as ambient signage, never for claims.
- **Body:** *Inter* 16/26 on night. Body stays legible.
- **Data / HUD:** *Share Tech Mono* (OFL).

### Texture, imagery, iconography
- **Haze and rain:** a shader-free approach using two pre-rendered rain-streak video loops (WebM, 6 s, ≤ 600 KB each)
  plus CSS haze gradients in indigo.
- **Scan-lines:** a 2 px repeating gradient at 4% on HUD panels only, never over the bottle or photos.
- **Glitch:** restricted to a single 120 ms RGB-split on chapter entry, and *never* on data, IDs or prices.
- **Photography:** real night or pre-dawn photos of the plant, cold room and delivery (if supplied), graded with
  sodium amber and indigo, never neon-tinted faces.
- **Icons:** 1.5 px neon line icons, with the seven verbs as "modules" in hexagonal or chamfered frames (chamfer 8 px).

### Grid
12 columns with a 16 px gutter plus a HUD overlay grid (corner brackets, edge ticks every 64 px). Panels have
chamfered corners (`clip-path: polygon(...)` with 8–12 px cuts). Vertical rhythm is 8 px.

## 4. Motion and interaction language

- **Snappy but not chaotic.** UI: 160–300 ms, `cubic-bezier(.16,1,.3,1)`. Scenes: 900 ms `cubic-bezier(.65,0,.35,1)`.
- **Neon flicker on:** display words light up with a 2-step flicker (opacity 0 → 0.6 → 0.2 → 1 over 420 ms),
  once only and never looping (photosensitivity).
- **Scroll:** parallax city layers (far haze 0.2×, signage 0.5×, foreground rain 1.1×). Data streams flow along the
  trace path with scroll.
- **Hover:** chamfered buttons fill with signal at 12% and the border glows. Links get a neon underline.
- **Cursor states:** default = 4-tick crosshair, 20 px, signal · link = crosshair expands with a bracket frame ·
  drag (360) = rotating bracket ring · view = bracket plus "SCAN" · disabled = dim crosshair. *Note:* crosshairs suggest
  targeting, so in the recommended scope use a soft signal dot instead.
- **Transitions:** a 300 ms "signal cut", a horizontal slice wipe in 6 bands.

## 5. The hero bottle and the four variants

The bottle is **never neon-tinted**. It is lit by a white key light so the milk stays milk-white, and the neon city
only *reflects* on the glass edge (a thin signal-green rim on one side, amber on the other).

- Float ±10 px over 6 s, pointer tilt ±8°. Reflections slide across the glass as the pointer moves (masked gradient on
  the render's alpha).
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards the viewer gets HUD brackets, a
  frame counter and an angle readout in Share Tech Mono.

| Variant | Night world |
|---|---|
| **MASTER 26** | A forest-green neon canopy: green signage light through haze, with the bottle on a wet reflective floor. |
| **ROOT 14** | Red sodium rim from a street sign, deep indigo haze. Restrained; red neon is used as a sliver only. |
| **BASE 3** | A full sodium-amber street-lamp pool, the warmest of the four and the most "Indian street at 4 a.m.". |
| **ESSENTIAL** | Dawn breaking: the neon fading into a pale sky, the bottle in natural light. It is the "after the night" world. |

## 6. Page-by-page treatment

(Full-site version. In the **recommended scope** only chapter 11 and a campaign page use this; the rest of the site
stays in the base brand style.)

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Night street, haze, the white-lit bottle, "Milk from the source." in Chakra Petch with neon flicker on, and one Devanagari neon sign in the background depth layer. |
| 02 | Bottle becomes the story | Six words as holographic signs around the bottle. Night → dawn colour shift begins. |
| 03 | Cow → bottle | **Break the style:** the journey begins at the farm in daylight, so use a natural paper chapter. The cow is never in neon. |
| 04 | Where it begins | Daylight documentary. No cyberpunk. |
| 05 | Breeds | Archival paper. No cyberpunk. |
| 06 | Traceability | Data streams along an indigo city map, chamfered node panels and an illustrative label in HUD style: "ILLUSTRATIVE JOURNEY — NOT LIVE DATA". |
| 07 | Quality | A clean lab chapter, but on night: 16 parameters in chamfered tiles with "— pending lab confirmation". No glitch. |
| 08 | Four milks | The four night worlds (section 5), ending with ESSENTIAL at dawn. |
| 09 | Milk as material | White milk ribbon cutting through neon haze: the light that is *real* against the artificial city. |
| 10 | Heritage | Daylight paper. No cyberpunk. |
| 11 | Technology | **Recommended scope.** "4:00 AM": the cold chain at night. Seven verbs light up as neon modules along a delivery route through an abstract Jodhpur night. "Tradition is the source. Technology protects the journey." The chapter ends at sunrise, transitioning into the next warm chapter. |
| 12 | Ghee | Warm, no neon. |
| 13 | Trace your milk | HUD terminal input "BOTTLE ID ▸" and a step-by-step scan reveal, with a DEMO stamp in sodium amber. |
| 14 | Story | Paper timeline. No cyberpunk. |
| 15 | Final CTA | Dawn breaks over the city, the neon fades and the bottle stands in morning light. "Know where your milk comes from." |

**Inner pages:** /milk has night worlds · /milk/[variant] has the night world plus the HUD 360 viewer · /trace has the
city-map trace explorer · /technology is the "4:00 AM" long scroll (the strongest use of the style) · /ghee, /origin and
/about are in the base brand style (daylight) · /reserve is a clean form, no HUD. Campaign page: `/4am`.

## 7. Component variants

`NeonText` (flicker-on once) · `HazeLayers` · `RainLoop` (video, paused off-screen) · `ChamferPanel` · `HUDBrackets`
· `ScanlineOverlay` (HUD only) · `DataStream` (trace path particles) · `NeonSign.devanagari` (ambient) ·
`SignalCut` transition · `ProductScene.night` · `TraceMap.city` · `TechnologyGrid.4am` · `TerminalInput` ·
`DawnTransition` · `AssetSlot.night`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Sodium & Signal palette, Chakra Petch / Rajdhani | Tokens, neon recipe, specimen | No magenta; body AA; neon only ≥ 32 px | — | 2 |
| 2 | Grid & shell | HUD grid, chamfers, cursor | `ChamferPanel`, `HUDBrackets`, cursor (soft dot in scope) | No targeting reticles in production scope | — | 3 |
| 3 | Hero | Night hero, white-lit bottle | Haze, rain loop, rim reflections | Milk stays white (colour-checked); LCP ≤ 2.5 s with video deferred | Render | 4 |
| 4 | Bottle → story | Holographic words | Pinned scene | Flicker once; reduced motion static | — | 3 |
| 5 | Cow → bottle | Daylight break | Base-style journey | Cow never in neon | B4 | 2 |
| 6 | Origin / farm | Daylight | Base style | — | B1, B2 | 1 |
| 7 | Breeds | Daylight | Base style | — | B3 | 1 |
| 8 | Trace map | City data map | `TraceMap.city`, `DataStream` | Illustrative label; no surveillance language ("tracking", "target") | — | 5 |
| 9 | Quality | Night lab tiles | 16 chamfer tiles | No glitch on data; pending values | — | 2 |
| 10 | Four worlds + 360 | Night worlds, HUD viewer | 4 worlds, HUD | ESSENTIAL ends in dawn; frame readout real | 360 (A) | 7 |
| 11 | Heritage | Daylight | Base style | — | — | 1 |
| 12 | Technology | **"4:00 AM" chapter** | Night-route scene, 7 modules, dawn transition | Copy approved; public vocabulary; ends at sunrise | Night photos (optional) | 6 |
| 13 | Ghee | Warm, no neon | Base style | — | — | 1 |
| 14 | Trace-your-milk | Terminal demo | `TerminalInput` | DEMO stamp per step | — | 3 |
| 15 | /milk, /milk/[variant] | Night product pages | 2 templates | Pending styling | 360 (A) | 4 |
| 16 | /origin, /trace, /technology | /technology long scroll, /trace explorer | 2 night templates, /origin base | — | B7, B8 | 6 |
| 17 | /about, /ghee, /reserve | Base style pages, plus campaign `/4am` | 3 templates + campaign | Campaign end date set | Delivery photos B9 | 4 |
| 18 | Mobile | Lighter night | No rain video, static haze | 60 fps on mid Android | — | 3 |
| 19 | A11y + reduced motion | Safe neon | No flicker, no glitch, static haze | WCAG 2.3.1 (no flashes > 3/s); AA contrast | — | 3 |
| 20 | Perf, QA, handover | Ship | Video budget, perf report | Video ≤ 1.2 MB total, lazy; LCP ≤ 2.5 s | All | 4 |

**Total:** about 65 days (full). **Recommended scope** (phases 1, 2, 12, 16-/technology, 19, 20): about 20 days.

## 9. Assets needed from DESIGO®

- **Real night and pre-dawn footage or photos** of the cold room, plant and delivery riders (consented, no customer
  faces). Without them the chapter becomes fiction, which this brand must avoid.
- Approved public description of the cold chain and delivery timing.
- 360 sequences with clean alpha (for rim-reflection masking).
- Approval for any Devanagari signage words used as ambience.

## 10. Performance, accessibility and mobile

- Video loops are short, muted, `playsinline`, lazy-loaded, paused off-screen, and replaced with a poster image on
  Save-Data or reduced motion.
- Neon glows are text-shadow on large type only. Do not stack them on body.
- **Photosensitivity:** no repeating flicker; glitch ≤ 1 occurrence per chapter, ≤ 120 ms, never red flashes.
- Contrast: neon on night passes easily, but secondary text must stay ≥ 4.5:1 (`--cp-dim`).
- Mobile: no rain video, a single haze layer and a HUD reduced to corner brackets.

## 11. Risks and premium guardrails

**Risks:** dystopian mood contaminating a food brand; surveillance connotation for traceability; artificial colour on
milk; gamer-ad look; photosensitive-seizure risk.

**Premium guardrails**
1. Never colour the milk, the bottle or the cows with neon. Natural white light on the product always.
2. No cyberpunk on farm, breeds, heritage or ghee, the human and natural parts of the story.
3. No magenta/cyan cliché: the palette is brand signal-green, sodium amber and Jodhpur indigo.
4. Narrative must resolve to dawn. The night exists to end in a simple morning delivery.
5. Avoid surveillance and weapon semantics: no reticles, "target", "scan subject" or tracking language about people.
6. Glitch never touches data, IDs, prices or the DEMO label, since broken-looking data destroys trust.
7. No dystopian copy: no "megacorp", "system override" or "hack".
8. Time-box any campaign use. Night-shift imagery must be real DESIGO® operations, not CGI cities presented as real.
