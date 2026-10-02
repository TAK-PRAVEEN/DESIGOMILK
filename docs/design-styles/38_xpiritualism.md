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
| `--xp-ink-light` | `#EDEAE2` | Body text on dark (10.4:1 on `--xp-forest`) |
| `--xp-ink-muted` | `#B7BDB5` | Muted text on dark (6.5:1 on `--xp-forest`) |

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
| MASTER 26 (V1+) | `#0A2A20` to `#1F5C45` | Milk core, green edge `#D9E8DF` | An even, unnumbered outer ring; 26 ticks only once the herb claim (*pending*) is approved | Deepest, richest light |
| ROOT 14 (V1) | `#2A0A0E` to `#4A0A0F`, horizon `#B3202A` at 20% | Milk core, warm edge `#F3D9D6` | A ring set low like a sunset arc, unnumbered until the 14-herb claim (*pending*) is approved | Red earth at night |
| BASE 3 (V2) | `#2A1803` to `#5A3304`, gold dawn band `#E89A1C` | Milk core, amber edge `#F8E4C2` | Three arcs (herb count conflict noted: show the arcs without a number until resolved) | First light |
| ESSENTIAL (V3) | `#1E1A14` to `#4D4130` | Plain milk aura, ivory edge `#F4EDE2` | One single ring | Simplicity: one ring, one light |

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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: secular translation and palette were complete. Missing: muted, pending and DEMO tokens, the daylight (light-chapter) inversion, component states, a portrait hero, a trace prompt and negatives. Added. Fixed: body-text contrast stated as ≥ 12:1 is really 10.4:1 (`#EDEAE2` on `#0B3B32`); MASTER 26 / ROOT 14 rows now follow the doc's own rule (unnumbered ring until herb claims are approved); "pure" removed from the ESSENTIAL row.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#C8A96B` | Gold: geometry hairlines, instrument labels, primary CTA | 5.5:1 on bg; gold labels ≥ 12 px uppercase and geometry hairlines |
| Primary ink | --c-on-primary | `#081A17` | Night ink on a gold fill (rare: active dial segment) | 8.0:1 on primary |
| Secondary | --c-secondary | `#CFE7E0` | Cold-halo aura edge; inline links; focus ring | 9.6:1 on bg |
| Accent | --c-accent | `#7FE0B8` | Signal mint: data points, live values (DEMO only) | 7.9:1 on bg; signal mint for data in Technology and Trace only |
| Background | --c-bg | `#0B3B32` | Brand forest night (`--xp-forest`); deepest `#081A17` for hero vignette | — |
| Surface | --c-surface | `#13302E` | Dusk panels (`--xp-dusk`) | text on surface 11.7:1 |
| Text | --c-text | `#EDEAE2` | Light ink (`--xp-ink-light`) | 10.4:1 on bg |
| Muted text | --c-text-muted | `#B7BDB5` | Captions, annotations (new token `--xp-ink-muted`) | 6.5:1 on bg, 7.4:1 on surface |
| Line | --c-line | `rgba(200,169,107,.35)` | Gold hairlines at 35% (rings at 100% 0.75 px) | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#7FE0B8` / `#E9C9A2` / `#F7F4EC` | Mint verified dot / dawn dotted underline / milk-white DEMO label in a gold outline | 7.9 / 7.9 / 11.3 :1 on `#0B3B32` |

Focus ring: `--c-focus` `#CFE7E0` (9.6:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Ground `#0A2A20` → `#1F5C45`; milk aura with green edge `#D9E8DF`; unnumbered outer ring (26 ticks only after the herb claim is approved) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#2A0A0E` | `#F3D9D6` | Ground `#2A0A0E` → `#4A0A0F`, horizon `#B3202A` at 20%; warm aura edge `#F3D9D6`; low sunset ring, unnumbered until approved |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#2A1803` | `#F8E4C2` | Ground `#2A1803` → `#5A3304`, amber dawn band `#E89A1C`; three arcs without a number (herb-count conflict) |
| ESSENTIAL (V3, ivory cap) | `#4D4130` | `#1E1A14` | `#F4EDE2` | Ground `#1E1A14` → `#4D4130`; plain milk aura with ivory edge; one single ring |

Dark-chapter inversion: this is a dark-first style, so the inversion is to **daylight**: /about, /reserve, the facts below each variant and the final CTA after dawn use bg `#F7F4EC`, text `#171918`, muted `#5C5A52`, primary becomes forest `#0B3B32` (gold `#C8A96B` is only 2.1:1 on milk, so it stays a hairline colour there), line `rgba(11,59,50,.15)`, focus `#1E7A68`; the logo loop renders charcoal.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Instrument Serif | `@fontsource/instrument-serif` (Google Fonts) | 400, 400 italic | clamp(3rem, 1.4rem + 7vw, 8.5rem) | 0.95 | +0.02em | UPPERCASE (hero), sentence elsewhere |
| Headline H1–H2 | Instrument Serif | `@fontsource/instrument-serif` (Google Fonts) | 400, italic for emphasis | H1 clamp(2.4rem, 1.5rem + 3.4vw, 5rem) · H2 clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem) | 1.05 | +0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) | 1.7 | 0.005em | Sentence |
| Label / UI | Space Grotesk | `@fontsource-variable/space-grotesk` (Google Fonts) | 400 / 500 | 0.75rem (min 12 px on dark) | 1.4 | +0.22em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 | 0.8125rem | 1.5 | +0.02em | As data (Technology, Trace only) |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` (Google Fonts) | 400 | matches body | 1.7 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Pairing rationale: a calm, slightly ceremonial serif against instrument-like grotesk labels reads as an observatory, not a temple; Inter Tight carries long text on dark.

### 12.3 Layout & surfaces
- **Grid:** 12 columns (gutter 24 px, 16 px mobile), margins 6vw / 16 px mobile, max-width 1440 px, plus a radial grid: one centre point (the bottle) with rings at 18%, 30%, 44% and 60% of viewport height; text in columns 1–4 or 9–12, never crossing a ring at body size
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Radius scale:** sm 0 px (panels, inputs) · md 2 px (badges) · lg 999 px (rings, nodes, cursor)
- **Border style:** 0.75 px gold hairlines (rings at 100%, rules at 35%); panels ruled top and bottom only
- **Shadow / elevation:** no drop shadows on dark: elevation is light (aura glow `0 0 48px rgba(207,231,224,.18)`); the bottle has a gold hairline ellipse at its base as its stage plus a soft dark contact shadow
- **Texture / overlay:** 3% film grain on all dark grounds; sparse star field at 0.1× scroll (static on mobile); aura as one WebGL quad with blue-noise dither or a pre-graded AVIF

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Gold label (Space Grotesk 500, 12 px, +0.22em, uppercase) over a 1 px gold underline with an arrow; 48 px tall, padding 14 px 0. **States:** default gold label + hairline · hover the underline draws from the centre outward (280 ms) and a 0.75 px ring closes around the arrow tip (400 ms) · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active the ring fills with gold at 20% · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the ring around the arrow turns like a dial (1.2 s per turn), `aria-busy`. **Motion:** 280–400 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Light-ink label `#EDEAE2`, same type, hairline at 40%. **States:** default light label · hover hairline turns gold and draws from the centre (280 ms) · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading hairline pulses opacity. **Motion:** 280 ms. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Inline link in aura-cool `#CFE7E0` with a 1 px underline. **States:** default aura-cool + hairline · hover a gold hairline draws from the centre outward (280 ms) · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active gold text · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 280 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px circle with a 0.75 px gold ring and a 1 px instrument-style icon; menu = two concentric arcs that rotate into ×. **States:** default gold ring · hover ring tightens 44 → 40 px and gains an 18% aura · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active ring fills 15% · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** arc rotation 400 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 72 px bar, transparent over night, then `#081A17` at 88% + 10 px blur after scroll; links Space Grotesk 12 px uppercase +0.22em in `#EDEAE2`; RESERVE as a gold text button. Mobile: full-screen night sheet with a ring drawing itself (1200 ms) and links in Instrument Serif 2.5rem. **States:** default light links · hover gold hairline from centre · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active current page marked by a gold degree tick · disabled n/a · loading n/a. **Motion:** sheet ring draws 1200 ms `--ease-out`. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 16 px milk-white dot with a 48 px aura (`#CFE7E0` at 18%); labels Space Grotesk 11 px uppercase. **States:** default dot + soft aura · hover aura tightens to 28 px and turns gold · ROTATE two thin gold arcs around the cursor + "drag · turn" and a degree readout (`aria-hidden`) · EXPLORE 60 px gold ring with 16 fine ticks reading "explore" · ENTER 24 px gold ring with an arrow → · VIEW 40 px aura reading "view" · TRACE 8 px node with a 20 px gold ring reading "trace". **Touch fallback:** no custom cursor; a tap blooms a 300 ms soft aura; the bottle's angle readout stays visible under it. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — NightPanel: `#13302E` at 80%, 0.75 px gold rules top and bottom only, radius 0, padding 32 px (24 px mobile). **States:** default ruled panel · hover rules brighten to 100%, aura 10% · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active returns · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading rules draw in from the centre (1200 ms loop). **Motion:** reveal 1200 ms. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — 2 px-radius label, Space Grotesk 500 11 px uppercase. **Pending verification**: dawn `#E9C9A2` text + dotted underline on the claim. **DEMO · not live data**: milk-white text in a 1 px gold outline, always visible on constellation and trace result. **States:** default outlined label · hover none · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** fades in 280 ms. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Dial field: 56 px on `#081A17`, 0.75 px gold underline, a 40 px ring at the right that advances one tick per character; JetBrains Mono 18 px `#EDEAE2`; label above in Space Grotesk; demo ID prefilled; errors in dawn with an icon. **States:** default hairline + dial · hover underline to 100% · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active dial ring turns gold while typing · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the dial rotates and its ticks light one by one; result plays as a constellation. **Motion:** dial 1200 ms per turn. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — 0.75 px gold hairline with a centre tick, or a 120° arc segment; geometry appears only where it encodes a real count (16, 7, 4). **States:** default static · hover none · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** draws in 1200 ms. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Gold Space Grotesk label ("06 — TRACEABILITY"), Instrument Serif title, one line beneath; a thin ring arc behind (`aria-hidden`). **States:** default static · hover none · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** arc draws 1200 ms; title settles 16 px. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — NightPanel at columns 9–12: V-code (mono `#CFE7E0`), name in Instrument Serif H2, the `desigo.ts` line, price *pending* (hidden in production), size, descriptors *pending*; tick counts stay hidden until the herb claims are approved; the full facts repeat on a daylight section below. **States:** default static · hover descriptor shows its source note · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading rules draw. **Motion:** rows fade 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Bottle at the centre of the ring system with a milk aura behind it (radial `#F7F4EC` → `#CFE7E0` at 40% → transparent, dithered); a gold hairline ellipse at its base as the stage; a gold tick marks the current angle (0–359°). No rays, halo crown or sparkles; the aura is never above the bottle. **States:** default idle float ±6 px over 7 s, aura pulse 8 s · hover pointer tilt ±6° · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active drag turns the viewer; the angle tick follows · disabled n/a · loading static render + an empty gold circle `AssetSlot`. **Motion:** rings rotate ≤ 30° per chapter with scroll. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — Constellation node: 8 px milk dot in a 20 px gold ring, joined by 0.75 px gold hairlines; label Space Grotesk 12 px + mono ID. **States:** default dim node (60%) · hover ring gains an 18% aura · focus-visible 2 px `#CFE7E0` ring, 3 px offset · active a soft light travels 1600 ms per hop and the node blooms to 24 px; panel opens · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading nodes light one by one. **Motion:** hop 1600 ms `--ease-inout`. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** instrument-style 1 px gold line icons on a 24 px circle grid with fine degree ticks; no fill
- **Illustration technique:** precise hairline geometry (rings, arcs, ticks) inspired by Jantar Mantar instruments, where every count means something (16 tests, 7 verbs, 4 milks); no religious symbols
- **Photo treatment:** real blue-hour and dawn documentary photography (lanterns, steel cans, the chiller at night), cool shadows, warm highlights, 3% grain; never an aura or glow on people or cows

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | ring and hairline draws |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scenes, dawn transition |
| `--ease-breathe` | `cubic-bezier(.45,0,.55,1)` | aura pulse (signature) |
| `--dur-micro` | 280 ms | hover hairlines |
| `--dur-reveal` | 1200 ms | ring draws, panel reveals |
| `--dur-scene` | 1400 ms | dawn transition |
| `--pulse` | 8000 ms, scale 1 → 1.04, opacity .85 → 1 | aura behind the bottle |
| `--ring-rotate` | ≤ 30° per chapter, each ring its own rate | scroll-linked rings |
| `--float` | ±6 px / 7000 ms | bottle idle |
| `--hop` | 1600 ms | constellation pulse |
| `--scrub` | 1.2 | scroll scrub |

- **Signature transition:** Dawn: the night ground brightens from the bottom edge with a gold horizon line that becomes the next chapter's top rule (1400 ms)
- **Scroll behaviour:** rings rotate slowly like instrument gears; stars drift at 0.1×; one WebGL context at most
- **Reduced-motion fallback:** no pulse, no ring rotation, no star drift; rings drawn complete and static; 200 ms fades

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _palette of deep forest green #0B3B32, near-black green #081A17, milk white #F7F4EC and warm gold #C8A96B, soft cold light, fine film grain, calm, secular, the precision of an astronomical instrument, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| XP1 | `web/public/desigo/styles/xpiritualism/hero.png` | 3200×2000 (16:10) | No | Deep forest-green night sky over a faint flat desert horizon, sparse small stars, a soft milk-white glow at the centre like cold light, a thin warm-gold dawn line on the horizon, empty centre | religious symbols, om, mandala, yantra, halo, rays, violet nebula, magenta, lens flare | Hero desktop |
| XP2 | `web/public/desigo/styles/xpiritualism/hero-portrait.png` | 1400×2400 (7:12) | No | Vertical forest-green night sky, sparse stars, soft milk-white cold glow in the middle third, thin gold dawn line near the bottom edge | religious symbols, halo, rays, violet, magenta, lens flare | Hero mobile |
| XP3 | `web/public/desigo/styles/xpiritualism/aura-master-26.png` | 3200×2000 + 1400×2400 | No | Soft luminous milk-white glow fading into deep bottle green #1F5C45 and #0A2A20, subtle grain, empty centre | rays, sparkles, halo crown, violet | MASTER 26 world |
| XP4 | `web/public/desigo/styles/xpiritualism/aura-root-14.png` | 3200×2000 + 1400×2400 | No | Soft milk-white glow over oxblood #4A0A0F night with a faint crimson #B3202A horizon, grain, empty centre | fire, blood, rays, violet | ROOT 14 world |
| XP5 | `web/public/desigo/styles/xpiritualism/aura-base-3.png` | 3200×2000 + 1400×2400 | No | Soft milk-white glow over dark brown #5A3304 with an amber #E89A1C first-light band, grain, empty centre | sun rays, flare, orange neon | BASE 3 world |
| XP6 | `web/public/desigo/styles/xpiritualism/aura-essential.png` | 3200×2000 + 1400×2400 | No | Soft ivory #F4EDE2 glow on warm dark taupe #4D4130 with a single faint hairline ring, grain, empty centre | multiple rings, symbols, sparkles | ESSENTIAL world |
| XP7 | `web/public/desigo/styles/xpiritualism/constellation-route.png` | 3600×2000, transparent | Yes (real alpha) | Eight small soft milk-white points of light joined by fine warm-gold hairlines into a gentle route across the frame, like a measured constellation chart, isolated on transparent background | zodiac figures, symbols, numbers, labels | Traceability (ch. 06), /trace, Trace-your-milk |
| XP8 | `web/public/desigo/styles/xpiritualism/starfield.png` | 2400×2400, seamless | No | Sparse realistic star field on near-black green #081A17, very few stars, no nebula, no colour fringing | nebula, galaxy, violet, shooting stars | Night texture sitewide |
| XP9 | `web/public/desigo/styles/xpiritualism/rings.png` | 3000×3000, transparent | Yes (real alpha) | Precise concentric thin gold hairline rings with fine degree tick marks, like an antique astronomical instrument dial, flat front view, transparent background | numbers, letters, zodiac, yantra, mandala | RingSystem reference (rebuild as SVG) |
| XP10 | `web/public/desigo/styles/xpiritualism/instrument-arc.png` | 3200×1600, transparent | Yes (real alpha) | Hairline architectural drawing of a large curved stone astronomical instrument arc inspired by Jaipur's 18th-century observatory, gold lines on transparent background | temples, people, text | Heritage (ch. 10) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/38_xpiritualism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/xpiritualism/
- [ ] Cultural review sign-off logged with reviewer name and date for every page
- [ ] Banned-word lint passes (pure, sacred, divine, holy, blessed, energy, healing, cosmic, vibration, immunity)
- [ ] No glow, halo or cosmic background on cows or people; tick counts hidden until herb claims are approved
