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
  layer (QR bottle identities and recorded cold-chain temperatures, in public vocabulary only). A "night shift" story can be told in neon light.
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

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added Sodium & Signal tokens, Chakra Petch/Rajdhani/Share Tech Mono packages, all 14 components (soft dot replaces crosshair cursor), motion tokens, 10 image prompts. Body: RTCOM internals reference reworded to public vocabulary. Fonts already OFL.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#7FE0B8` | brand signal as the primary neon: CTAs, active data, trace streams | 12.6:1 vs bg. AAA; neon glow only on display type. |
| Primary ink | --c-on-primary | `#07090A` | night label on signal | 12.6:1 on primary. AAA. |
| Secondary | --c-secondary | `#F2A93A` | sodium-lamp amber: warm light, DEMO stamp, pending | 10.0:1 vs bg. AAA. |
| Accent | --c-accent | `#B8FFE3` | neon core highlight: focus ring core, neon text-shadow inner stop | 17.5:1 vs bg. Focus ring 2 px `#B8FFE3` + 6 px `#7FE0B8` glow. |
| Background | --c-bg | `#07090A` | base night |  |
| Surface | --c-surface | `#121615` | asphalt: panels, chamfered tiles |  |
| Text | --c-text | `#F1EDE3` | milk text (and the milk itself) | 17.1:1 on bg · 15.6:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#8C938F` | dim secondary text | 6.4:1 on bg · 5.8:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#1B2A4A` | Jodhpur indigo hairlines, HUD brackets, haze edges | Decorative (1.4:1); HUD hairlines never carry meaning. |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#7FE0B8` / `#F2A93A` / `#F2A93A` | signal = recorded; sodium outline chip + dotted underline = pending; sodium filled stamp = DEMO; rose `#D8424B` reserved for errors | DEMO stamp text `#07090A` on sodium is high contrast; glitch never touches these. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | forest-green neon canopy: green signage light through haze, bottle on a wet reflective floor |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red sodium rim from a street sign (a sliver of `#D8424B` only), deep indigo `#1B2A4A` haze |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | full sodium-amber `#F2A93A` street-lamp pool: "Indian street at 4 a.m." |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | dawn breaking: neon fades into a pale sky, the bottle in natural light ("after the night") |

**Dark-chapter inversion:** Dark-first. The narrative inverts to **dawn** at the end of every use: bg `#07090A` → `#F7F4EC`, surface → `#EFE9DC`, text → `#1E211F`, muted → `#55584F`, primary → `#1E7A68`, neon glows switch off (600 ms fade). Farm, breeds, heritage and ghee chapters always use the base brand light tokens.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Chakra Petch | `@fontsource/chakra-petch` (Google Fonts: Chakra Petch) | 300–700 static (use 500, 600) | clamp(3rem, 8vw, 8rem) | 0.95 | 0.01em | UPPER for neon lines, sentence for statements |
| Headline H1–H2 | Chakra Petch | `@fontsource/chakra-petch` (Google Fonts: Chakra Petch) | 500 | H1 clamp(2.4rem, 4.6vw, 4.5rem) · H2 clamp(1.6rem, 2.8vw, 2.6rem) | 1.05 / 1.15 | 0 | Sentence |
| Body | Inter (variable) | `@fontsource-variable/inter` (Google Fonts: Inter) | opsz auto, wght 420 on night | 1rem | 1.625 (26 px) | +0.005em | Sentence |
| Label / UI | Rajdhani | `@fontsource/rajdhani` (Google Fonts: Rajdhani) | 300–700 static (use 600) | 0.8125rem | 1.2 | +0.12em | UPPER |
| Data / mono | Share Tech Mono | `@fontsource/share-tech-mono` (Google Fonts: Share Tech Mono) | 400 | 0.8125rem | 1.4 | 0.02em | UPPER HUD labels, IDs as issued |
| Devanagari (optional) | Rajdhani | `@fontsource/rajdhani` (Google Fonts: Rajdhani) | Latin + Devanagari, static | ambient neon signage only (e.g. "दूध"), clamp(2rem, 5vw, 5rem) | 1.0 | 0 | n/a |

Licence: Chakra Petch (Cadson Demak), Rajdhani (Indian Type Foundry), Inter and Share Tech Mono are all SIL OFL 1.1.
Pairing: Chakra Petch is a squared but refined techno face; Rajdhani gives condensed labels with a native Devanagari partner for ambient signage; Inter keeps body legible on night.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 16 px gutter, 5vw margin, max-width 1440 px, plus HUD overlay grid (corner brackets, edge ticks every 64 px). Recommended scope: ch. 11 "4:00 AM" + `/4am` campaign + /technology.
- **Spacing:** 8 px vertical rhythm: 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- **Radius:** 0 (sm 0 · md 0 · lg 0); panels use chamfered corners via `clip-path` (8 px small, 12 px large).
- **Border:** 1 px `#1B2A4A` hairlines; active panels 1 px signal at 60% with outer glow.
- **Shadow / elevation:** Glow instead of shadow: `0 0 24px rgba(127,224,184,.25)` on active elements; neon text-shadow `0 0 2px #B8FFE3, 0 0 8px #7FE0B8, 0 0 24px rgba(127,224,184,.45)` on display type only.
- **Texture / overlay:** Indigo haze gradients, two rain-streak WebM loops (≤ 600 KB, desktop only), 2 px scan-lines at 4% on HUD panels only (never over the bottle or photos).

### 12.4 Components
All interactive components: `focus-visible` = 2 px `#B8FFE3` ring, offset 2 px, with a 6 px `#7FE0B8` glow; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Chamfered (8 px) signal `#7FE0B8` fill, `#07090A` Rajdhani 600 caps label + arrow, 48 px, padding 14×24. Hover: outer glow appears, arrow +6 px (200 ms). Active: fill `#6BCCA4`. Disabled: asphalt fill, dim label, no glow. Loading: a data-stream dash runs along the bottom edge (900 ms loop).
- **Secondary button**: Chamfered outline: 1 px signal border, signal label on transparent; hover fills signal at 12% with glowing border; active 20%; disabled dim border.
- **Text / arrow link**: Inter 500 signal with a 1 px neon underline; hover underline glows (200 ms), arrow +6 px; disabled dim.
- **Icon button** (incl. menu): 44 px chamfered square, 20 px 1.5 px neon line icon; menu = three lines collapsing to × via signal cut (300 ms). Hover: glow. `aria-label` always.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 56 px night bar with a 1 px indigo bottom line and corner brackets at both ends, Rajdhani caps links in `#8C938F`, active in milk with a signal underline. Mobile: full-screen night sheet, Chakra Petch 32 px links, opens with a 6-band signal-cut wipe (300 ms; fade in reduced motion). Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: Recommended (non-targeting) set: default = 10 px soft signal dot · hover = 32 px soft ring · ROTATE = bracket ring rotating slowly · EXPLORE = ring with → · ENTER = ring with "ENTER" (mono 9 px) · VIEW = bracket frame with "VIEW" · TRACE = ring with a data-stream arc. No crosshairs or "SCAN" in production (surveillance semantics, guardrail 5). Touch: native.
- **Card / panel / info block**: Chamfered asphalt panel (12 px cut), 1 px indigo border, HUD corner brackets, 24 px padding, scan-lines at 4%. Hover (clickable): border signal 60% + glow (200 ms).
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Rajdhani 600 caps 12 px in chamfered chips, 22 px. Verified: signal outline. Pending verification: sodium `#F2A93A` outline chip "PENDING VERIFICATION" + sodium dotted underline on the claim. DEMO: filled sodium stamp "DEMO · NOT LIVE DATA" in night text; HUD label variant "ILLUSTRATIVE JOURNEY — NOT LIVE DATA". Never glitched; static.
- **Input + form field** (Trace-your-milk bottle ID): Terminal input: prompt glyph "BOTTLE ID ▸", chamfered asphalt field 56 px, Share Tech Mono 18 px, placeholder `DSG-BTL-000001-3 (sample format)`. Focus: ring token. Error: rose `#D8424B` border + message text. Loading: step-by-step reveal lines (≥ 300 ms apart) each prefixed DEMO.
- **Divider / ornament**: HUD edge ticks / corner brackets, or a thin data-stream line; `aria-hidden`.
- **Section header** (chapter number + title pattern): Mono chapter code "11 // 4:00 AM" + Chakra Petch title with one-time neon flicker-on (0 → .6 → .2 → 1 over 420 ms, never looping).
- **Product info block** (variant name, code, price-pending, size, descriptors): Chamfered panel: Chakra Petch variant name, mono code, size and price in Inter with sodium dotted pending underline + chip, descriptors as chips with status. No glitch, no neon on prices.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): White-key-lit render (the milk stays milk-white) on a wet reflective floor; neon only reflects as a thin signal rim on one glass edge and amber on the other (masked to alpha). Float ±10 px / 6 s, tilt ±8°; before 360 frames ±25° + sheen; with frames, HUD brackets, frame counter and angle readout in Share Tech Mono.
- **Trace node / timeline step**: Chamfered node on an indigo city map; data particles stream along the path with scroll; active node = signal border + "current" label; demo values in mono with DEMO stamp; ordered-list equivalent.

### 12.5 Iconography & illustration
- **Icons:** 1.5 px neon line icons, 20 px, square caps; the seven verbs as modules in chamfered (8 px) or hexagonal frames.
- **Illustration:** Abstract night city layers (haze, signage blocks without legible text), data streams; never neon on cows, milk or the bottle.
- **Photo treatment:** Real night / pre-dawn DESIGO® operations only (consented, no customer faces), graded sodium amber + indigo, faces never neon-tinted.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | UI 160–300 ms |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scenes |
| `--dur-micro` | `200ms` | hover glow |
| `--dur-reveal` | `420ms` | neon flicker-on (once) |
| `--dur-scene` | `900ms` | scene transitions |
| `--dur-cut` | `300ms` | 6-band signal-cut wipe |
| `--glitch` | `120ms, max 1 per chapter` | RGB split on chapter entry only |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** "4:00 AM" delivery route lighting the seven verb modules, resolving into sunrise (`DawnTransition`).
- **Scroll:** parallax city layers (haze 0.2×, signage 0.5×, rain 1.1×); data streams follow scroll.
- **Reduced motion / photosensitivity:** no flicker, no glitch, no rain video (poster image), static haze; no repeating flicker ever; logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *restrained cinematic night in the spirit of Blade Runner 2049, sodium-lamp amber #F2A93A and Jodhpur indigo #1B2A4A haze, sparing mint signal green #7FE0B8, deep night #07090A, light rain and mist, wet reflections, calm not dystopian, no magenta, no cyan, no readable signage, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/cyberpunk/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-landscape.png` | 3200×2000 (16:10) | no | The blue-washed old city of Jodhpur at 4 a.m. under sodium street lamps, narrow lane, indigo haze and light rain, wet stone reflections, blank glowing sign shapes without letters, empty lane centre | magenta, cyan, readable signs, people, cars, weapons, drones, dystopian ruins (+ base negative) | Ch. 11 / `/4am` hero |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Same Jodhpur 4 a.m. lane as a tall portrait, sodium lamp at top, wet stone, empty centre | magenta, readable signs, people (+ base negative) | Mobile hero |
| 3 | `worlds/master-26.png` | 3200×2000 (16:10) | no | Forest-green signage light glowing through night haze above a wet reflective floor, abstract canopy-like light shapes, empty centre | neon green overload, text, plants (+ base negative) | Night world MASTER 26 |
| 4 | `worlds/root-14.png` | 3200×2000 (16:10) | no | Deep indigo haze with a single thin red sodium rim of light from a blank sign at the right edge, wet floor, empty centre | red flood light, text, blood-like tones (+ base negative) | Night world ROOT 14 |
| 5 | `worlds/base-3.png` | 3200×2000 (16:10) | no | A warm sodium-amber street-lamp pool on a quiet wet lane at 4 a.m., soft mist, empty centre of the pool | people, vehicles, text (+ base negative) | Night world BASE 3 |
| 6 | `worlds/essential.png` | 3200×2000 (16:10) | no | Dawn breaking over Jodhpur rooftops, the last city lights fading into a pale ivory sky #F4EDE2, calm, empty centre | neon, text, fort landmark close-up (+ base negative) | Night world ESSENTIAL, DawnTransition |
| 7 | `technology/route-4am.png` | 4000×1600 (5:2) | no | Abstract top-down night map of old-city lanes in indigo with one thin glowing signal-green route connecting seven soft nodes from the edge of town to a doorstep | real map labels, street names, HUD text, targeting reticles (+ base negative) | Ch. 11 "4:00 AM", /technology, trace city map |
| 8 | `textures/rain-streaks.png` | 2048×2048 (1:1) | yes | Fine diagonal light rain streaks catching amber light, isolated on transparent background, sparse | drops on lens, heavy storm (+ base negative) | Poster frame for RainLoop, reduced-motion fallback |
| 9 | `textures/indigo-haze.png` | 3000×1500 (2:1) | yes | Soft band of deep indigo #1B2A4A night haze with faint amber glow at the bottom edge, isolated on transparent background | shapes, clouds with faces (+ base negative) | HazeLayers |
| 10 | `milk/ribbon-through-haze.png` | 3000×1500 (2:1) | yes | A single clean white milk ribbon curving through dark space lit by neutral white light, a faint amber reflection on one edge, isolated on transparent background | coloured milk, neon-tinted milk, glass (+ base negative) | Ch. 09 milk as material |

Night-shift imagery of the plant, cold room and riders must be real DESIGO® photographs; generated city plates are abstract environment only. Devanagari neon signage is set in code (Rajdhani), never generated.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/21_cyberpunk.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/cyberpunk/
- [ ] Milk, bottle and cows lit with natural white light; no cyberpunk on farm, breeds, heritage or ghee
- [ ] Photosensitivity: no repeating flicker; glitch ≤ 1 per chapter, ≤ 120 ms, never on data, IDs, prices or DEMO; every use ends at dawn
