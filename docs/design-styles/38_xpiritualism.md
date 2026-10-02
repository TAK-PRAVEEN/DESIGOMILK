# 38 · Xpiritualism — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

"Xpiritualism" (spiritual-tech) is a 2020s trend that mixes the language of mysticism with digital rendering: glowing **auras** and halos around objects, **sacred-geometry** line systems (circles, concentric rings, golden ratios), **cosmic gradients** (deep night blues and violets with nebula colour), soft grain, and chrome or iridescent accents. It is common in wellness apps, music artwork and Web3 branding. At its best it feels quiet, luminous and contemplative. At its worst it sells vague "energy".

**This is the most culturally sensitive style in the library.** In India, spiritual imagery is living religious practice, and the cow is revered by many people. A milk brand must not borrow that reverence to sell a product. Our translation therefore keeps only the *visual mechanics* (aura light, precise geometry, night-sky gradients) and grounds every one of them in something **secular, scientific and true**:

- **Aura** = light and cold. A soft glow around the bottle that reads as *chilled* and *protected*, not as holiness.
- **Sacred geometry** = **measured geometry**. The geometry of **Jantar Mantar** (the 18th-century astronomical instruments in Jaipur and Delhi), stepwell symmetry (Chand Baori), and the brand's own numbers: 16 test points, 7 journey verbs, 4 milks, 6 breeds (*pending*).
- **Cosmic gradient** = the **Thar night sky** before the early-morning delivery, which is real and local.

Reference points:
1. **Jantar Mantar, Jaipur** (UNESCO World Heritage): monumental geometry made for measurement, which is exactly our tone of "measured, not mystical".
2. **Spiritual-tech album and app art** (Calm's night skies, generative aura gradients by studios such as Hyperakt and Ines Alpha's light work): soft halos, slow light.
3. **James Turrell's light rooms**: spirituality expressed only through light and proportion, without any symbols.

## 2. Fit for DESIGO® — score 2.5 / 5

**Why it can fit.** DESIGO® has a genuine "night" story: milk collected and chilled before dawn, delivered early in the morning. Aura light is a beautiful way to show cold and care around a glass bottle, and measured geometry suits a brand built on records and testing. Used carefully, the style gives the launch moments the "exhibition" atmosphere the brief asks for.

**Where it fights.** (1) It invites exactly the language DESIGO® must not use: "pure", "sacred", "divine", "energy", "healing". Some of the brand's own legacy materials make health claims that are now blocked, and this style would pull them back in. (2) Using Om, deities, yantras, mandalas, temple motifs or a haloed cow would be disrespectful and exploitative. (3) It can feel like Web3 or a wellness app, not a farm.

**Recommendation.** Do not use it for the whole site. Use it as a **night-and-light layer** for the Technology chapter, the "4:00 AM" cold-chain moment, chapter 02's orbit, and launch films, always under the secular rules in §11.

## 3. Art direction

### Palette ("Thar night")
| Token | Hex | Role |
|---|---|---|
| `--xp-night` | `#081A17` | Deepest ground (forest-black, not purple) |
| `--xp-forest` | `#0B3B32` | Brand forest, main dark ground |
| `--xp-dusk` | `#13302E` | Gradient mid-tone |
| `--xp-indigo` | `#1B2440` | Pre-dawn sky band (used at ≤ 30% of any gradient) |
| `--xp-aura` | `#F7F4EC` | Milk-white aura core |
| `--xp-aura-cool` | `#CFE7E0` | Cold halo edge ("chilled") |
| `--xp-gold` | `#C8A96B` | Geometry lines, first light |
| `--xp-dawn` | `#E9C9A2` | Dawn horizon |
| `--xp-signal` | `#7FE0B8` | Data points (Technology only) |
| `--xp-ink-light` | `#EDEAE2` | Body text on dark (≥ 12:1 on `--xp-forest`) |

No violet or magenta. Cosmic gradients are built from forest, dusk and a little indigo, so the style stays inside the brand family.

### Typography
- Display: **Instrument Serif** (OFL) regular and italic, large, wide tracking (+0.02em), in `--xp-ink-light`. It gives a calm, slightly ceremonial tone without being ornamental.
- Labels and geometry annotations: **Space Grotesk** (OFL) 400, uppercase, +0.22em, in `--xp-gold`. They read like the scale markings on an instrument.
- Text/UI: **Inter Tight** 400, 16–17px, line-height 1.7, on dark.
- Data: **JetBrains Mono** in `--xp-signal`, Technology and Trace only.

### Texture and imagery
- **Aura**: a radial gradient (milk core to `--xp-aura-cool` at 40% to transparent) rendered as a WebGL quad with blue-noise dithering to avoid banding, or as a pre-rendered 10-bit-graded AVIF.
- **Geometry**: 0.75px gold hairlines forming concentric rings, arcs with degree ticks (like a Jantar Mantar dial), and radial lines. Every geometric figure must *mean* something: 16 ticks = 16 test parameters, 7 rings = 7 verbs, 4 arcs = 4 milks.
- **Night sky**: a real astrophotograph of the Thar night sky (commissioned or licensed) at low opacity, or a generated star field marked as illustration. Stars are sparse; no nebula fireworks.
- **Grain**: 3% film grain over all dark grounds.
- Farm photography appears in the *pre-dawn blue hour* (real shoot): lanterns, steel cans, breath in cold air. It is documentary, never staged worship.

### Iconography
Instrument-style line icons: 1px gold lines with degree ticks, built on a 24px circle grid.

### Grid
A **radial grid** layered on a standard 12-column grid. Every hero composition has one centre point (the bottle) with rings at 18%, 30%, 44% and 60% of viewport height. Text blocks sit in columns 1–4 or 9–12 and never cross a ring line at body size. Margins 6vw; mobile 16px.

## 4. Motion & interaction language
- **Tempo.** Slow, breathing. Aura pulse 8s loop (scale 1 → 1.04, opacity .85 → 1, `cubic-bezier(.45,0,.55,1)`). Ring reveals draw as strokes in 1200ms `cubic-bezier(.16,1,.3,1)`; scene transitions 1400ms `cubic-bezier(.65,0,.35,1)`.
- **Scroll.** Rings rotate very slowly with scroll (max 30° across a chapter), each ring at its own rate, like the gears of an instrument. Stars drift at 0.1×. Scrubbed with `scrub: 1.2`.
- **Cursor.** A 16px milk-white dot with a 48px faint aura (`--xp-aura-cool` at 18%). Over links: the aura tightens to 28px and turns gold. Over the bottle: two thin gold arcs appear around the cursor, with the label "drag · turn" in Space Grotesk. Over data nodes: a degree readout follows the cursor (decorative, `aria-hidden`).
- **Hover.** Links get a gold hairline that draws from the centre outward (280ms). Buttons: the brand underline-and-arrow, with a small ring that closes around the arrow tip.
- **Transitions.** "Dawn": the night ground brightens from the bottom edge with a gold horizon line, which then becomes the next chapter's top rule.
- **Reduced motion.** No pulse, no ring rotation; rings are drawn complete and static.

### The bottle
The bottle stands **at the centre of the ring system** with a milk-white aura behind it. The aura reads as cold light (its outer edge is the cool `#CFE7E0`). Idle float ±6px over 7s; pointer tilt ±6°. A gold hairline ellipse at its base acts as the contact shadow, an instrument "stage". On scroll the rings rotate and a single gold tick marks the bottle's current angle (when 360 frames arrive, this tick is the angle readout: 0–359°). No rays, no halo crown and no sparkles above the bottle. The aura sits *behind*, never above.

## 5. Variant worlds — four lights

| Variant | Ground gradient | Aura colour | Geometry | Notes |
|---|---|---|---|---|
| MASTER 26 (V1+) | `#0A2A20` to `#1F5C45` | Milk core, green edge `#D9E8DF` | 26 short ticks on the outer ring (herb count *pending*; the ticks are labelled only by the pending claim) | Deepest, richest light |
| ROOT 14 (V1) | `#2A0A0E` to `#4A0A0F`, horizon `#B3202A` at 20% | Milk core, warm edge `#F3D9D6` | 14 ticks (*pending*) on a ring set low like a sunset arc | Red earth at night |
| BASE 3 (V2) | `#2A1803` to `#5A3304`, gold dawn band `#E89A1C` | Milk core, amber edge `#F8E4C2` | Three arcs (herb count conflict noted: show the arcs without a number until resolved) | First light |
| ESSENTIAL (V3) | `#1E1A14` to `#4D4130` | Pure milk aura, ivory edge `#F4EDE2` | One single ring | Simplicity: one ring, one light |

Info panel: a thin gold-ruled panel at columns 9–12. V-CODE in mono, name in Instrument Serif, the `desigo.ts` line, price *pending*, descriptors *pending*. The tick counts are only shown when the herb claims are approved. Until then they render as an even, unnumbered ring.

## 6. Page-by-page treatment

1. **Hero.** Forest-night ground, sparse stars, the bottle at the ring centre with a milk aura. "MILK FROM THE SOURCE." in Instrument Serif. Sub-line: "Traceable milk from indigenous Indian cows." A thin gold dawn line at the bottom edge.
2. **The bottle becomes the story.** The six words sit on six positions of a gold ring around the pinned bottle (one every 60°). The ring rotates to bring each word to the top as you scroll. This is the style's best use of "orbit".
3. **From cow to bottle.** The style steps back: a horizontal pre-dawn timeline of seven stations as small instrument dials, each with a real blue-hour photograph. The milk line is a thin milk-white light path.
4. **Where it begins.** Real farm photography at blue hour and dawn. No auras on animals or people. Text on dark.
5. **Breeds.** Breed plates on a dark ground, each inside a plain gold circle like a museum specimen lens. Names, regions, "*pending approval*". **No halos or glow around the cows.**
6. **Traceability.** Natural home of the style: the route as a constellation of eight nodes joined by gold hairlines, the pulse as a soft light travelling 1.6s per hop. "Illustrative journey, not live data".
7. **Quality.** The 16 test parameters as 16 ticks around a dial, each tick labelled on hover/focus, with the full list as text beside it. Values: "— pending lab confirmation". A measuring instrument, not a talisman.
8. **The four milks.** §5 lights.
9. **Milk as material.** Milk ribbon lit from within against night, with the aura becoming the milk's own glow. Static fallback.
10. **Heritage.** Lighter: a dawn-gold ground, a large Jantar Mantar–style arc drawn in hairline, and a statement from approved copy about breeds and farms. No religious reference.
11. **Technology.** The fullest version: rings, radial data lines in `--xp-signal`, the seven verbs on seven rings. "Tradition is the source. Technology protects the journey." Internal system names never appear.
12. **Ghee.** Warm amber night (a lamp-lit kitchen photo, real), jar on a gold ellipse, three grades. **No diya, aarti or festival imagery** unless it is a dated, opt-in festive campaign approved separately.
13. **Trace your milk.** A dial-like input; the result plays as a constellation, each node lighting up. DEMO badge always visible.
14. **Story.** A timeline as an arc across the night. Only the verified 2019 milestone in production.
15. **Final CTA.** Dawn breaks: the ground turns from forest-night to milk white, the aura dissolves into daylight. "Know where your milk comes from."

### Inner pages
- **/milk**: four small aura cards on a single dark band.
- **/milk/[variant]**: the variant light as hero, the viewer with an angle readout, facts on a milk-white section below.
- **/ghee**: lamp-lit hero, then a plain light process page.
- **/origin**: blue-hour photo essay, light pages.
- **/trace**: full constellation map.
- **/technology**: rings and verbs.
- **/about**: daylight page. The style withdraws completely.
- **/reserve**: daylight form; "early morning delivery" shown as a small dawn arc.

## 7. Component variants
`AuraField` (WebGL/AVIF aura with dither) · `RingSystem` (concentric rings, meaningful tick counts) · `InstrumentDial` (16-point quality dial, accessible) · `ConstellationRoute` (TraceMap) · `DawnTransition` · `StarField` (sparse, static on mobile) · `AuraCursor` · `GoldHairline` · `NightPanel` (info panel) · `AssetSlot` as an empty gold circle naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Night palette, instrument type | Tokens, specimen, **cultural review brief** | Body ≥ 7:1 on dark; no violet/magenta | Cultural reviewer named | 3 |
| 2 | Shell | Radial grid, aura cursor, nav | Shell components | Cursor 60fps; nav readable on all grounds | none | 3 |
| 3 | Hero + bottle | Bottle in aura at ring centre | Hero | No banding (dithered); aura behind bottle only | Bottle renders | 4 |
| 4 | Bottle → story | Six words on a rotating ring | Chapter 02 | Words reachable by keyboard as a list | Copy | 3 |
| 5 | Cow → bottle | Seven dials, blue-hour photos | Chapter 03 | Mobile vertical; photo slots named | Blue-hour farm shoot | 3 |
| 6 | Origin / farm | Documentary night/dawn | Chapter 04 | No glow on people or animals | Real photos | 2 |
| 7 | Breeds | Specimen circles | Chapter 05 | No halos; pending labels | D1–D6 | 2 |
| 8 | Traceability map | Constellation route | `ConstellationRoute` | DEMO label; node panels accessible | `traceNodes` | 4 |
| 9 | Quality | 16-tick instrument dial | `InstrumentDial` | Full list as text; values pending | Lab approval | 3 |
| 10 | Four worlds + 360 | Four lights + angle readout | Chapter 08 | Tick counts hidden until claims approved | A, C-set | 5 |
| 11 | Heritage | Jantar Mantar arc | Chapter 10 | Cultural review sign-off | Copy approval | 3 |
| 12 | Technology | Full ring system | Chapter 11 | Public vocabulary only | none | 3 |
| 13 | Ghee | Lamp-lit, restrained | Chapter 12 | No ritual imagery; prices pending | Jar, kitchen photo | 3 |
| 14 | Trace-your-milk demo | Constellation reveal | Chapter 13 | DEMO visible at all times | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Facts on light ground; viewer readout | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Night only where it serves the story | Photos | 4 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Daylight register; verified milestones | Copy approval | 3 |
| 18 | Mobile pass | Lighter rings, static stars | Mobile layouts | Aura as AVIF on mobile; no WebGL needed | none | 3 |
| 19 | A11y + reduced motion | Static light | Static rings | No pulse; geometry `aria-hidden` with text equivalents | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover, **final cultural review** | LCP < 2.5s; GPU ≤ 1 WebGL context; sign-off logged | all | 3 |

Total ≈ 63 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- A **blue-hour and dawn farm shoot**: collection by lantern light, steel cans, the chiller at night, an early-morning delivery. All real and with consent.
- A real Thar night-sky photograph (commissioned or licensed).
- A named **cultural reviewer** (ideally two people from different communities) who signs off every page before launch.
- Approval of any herb counts before tick numbers appear.

### Images to generate (illustration only; save under `web/public/desigo/styles/xpiritualism/`)
Append the house-style tail, but swap the palette words for "deep forest green #0B3B32, near-black green #081A17, milk white #F7F4EC and warm gold #C8A96B". No text, no symbols, no religious imagery, no cows.

| # | File | Size | Prompt |
|---|---|---|---|
| XP1 | `hero.png` | 3200×2000 + 1400×2400 | Deep forest-green night sky over a faint flat desert horizon, sparse small stars, a soft milk-white glow at the centre like cold light, thin warm-gold dawn line on the horizon, fine grain, calm, empty centre, no symbols |
| XP2 | `rings.png` (transparent) | 3000×3000 | Precise concentric thin gold hairline rings with fine degree tick marks, like an antique astronomical instrument dial, flat front view, transparent background, no numbers, no letters |
| XP3 | `instrument-arc.png` (transparent) | 3200×1600 | Hairline architectural drawing of a large curved stone astronomical instrument arc inspired by Jaipur's 18th-century observatory, gold lines on transparent background, no text |
| XP4 | `aura-master-26.png` | 3200×2000 | Soft luminous milk-white glow fading into deep bottle green #1F5C45 and #0A2A20, subtle grain, empty centre |
| XP5 | `aura-root-14.png` | 3200×2000 | Soft milk-white glow over oxblood #4A0A0F night with a faint crimson #B3202A horizon, grain, empty centre |
| XP6 | `aura-base-3.png` | 3200×2000 | Soft milk-white glow over dark brown #5A3304 with an amber #E89A1C first-light band, grain, empty centre |
| XP7 | `aura-essential.png` | 3200×2000 | Soft pure ivory #F4EDE2 glow on warm dark taupe #4D4130, single faint ring, grain, empty centre |
| XP8 | `starfield.png` | 2400×2400, seamless | Sparse realistic star field on near-black green, very few stars, no nebula, no colour fringing |

## 10. Performance, accessibility and mobile
- One WebGL context at most (the aura). On mobile and low-power devices, the aura is a pre-graded AVIF with blue-noise dither.
- Rings are SVG strokes, drawn with `stroke-dashoffset`. Each ring set is under 20 KB.
- Dark grounds: all body text ≥ 7:1, and gold labels are used only at ≥ 14px uppercase with ≥ 4.5:1 on `--xp-forest` (`#C8A96B` on `#0B3B32` ≈ 5.6:1).
- Geometry is decorative (`aria-hidden`). Every meaningful count (16, 7, 4) also appears as text.
- Reduced motion: static rings, no pulse, no star drift.
- Mobile: one ring set per screen, bottle at 50vh, text below the ring system, never over it.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **No religious symbols as decoration.** No Om, swastika, trishul, lotus-as-deity, yantra, mandala, temple bell, diya or deity imagery. The festive exception needs separate approval.
2. **Cow reverence is not a marketing tool.** No halos, glows, rays, garlands or cosmic backgrounds on cows; no "gau mata" or "sacred cow" language. Cows appear only as documentary photographs or respectful natural-history plates.
3. **Geometry must mean something** (16, 7, 4, 6). Never decorative "sacred" ratios.
4. **Banned words in all copy:** pure, sacred, divine, holy, blessed, energy, aura (in copy), healing, cosmic, vibration, immunity. Light describes *cold and care*, nothing else.
5. No violet nebulae, no chrome orbs, no lens flares. Forest, gold and milk only.
6. The aura sits behind the bottle and never above it.
7. Every page passes cultural review before launch, logged with the reviewer's name and date.

**Risks**: cultural offence, health-claim drift, a crypto or wellness-app feel. Mitigation: a secular translation (instruments, night, cold), the banned-word list in the CMS linting, cultural sign-off as an acceptance criterion, and limiting the style to night chapters.

**Best used for:** the Technology chapter, the "early morning" cold-chain moment, chapter 02's ring orbit and launch films. Not for Breeds, Ghee or /about.
