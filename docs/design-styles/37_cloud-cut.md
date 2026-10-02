# 37 · Cloud Cut — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Cloud Cut is a layered paper-and-vector look: clouds, hills and horizons are cut out as flat shapes with crisp edges, stacked in depth with soft drop shadows between layers, so the page looks like a shallow paper theatre. Scrolling moves each layer at a slightly different speed (soft parallax), and chapter changes happen by layers sliding apart like stage flats. Each layer is flat and matte; all the depth comes from overlap, shadow and motion.

For DESIGO® we treat the clouds as **milk-white paper**. The same five or six cut shapes come back in every chapter. Together they form the "sky" the bottle rises through, and they part to reveal each new world.

Reference points:
1. **Layered paper illustration** (Owen Gildersleeve, Zim & Zou, Rob Ryan): precise cut paper, real shadows, a handmade feel at a premium finish.
2. **Paper-cloud motion on product sites** (2023 onward, Spline and Lottie cloud scenes): vector cloud stacks with depth-of-field parallax.
3. **Sanjhi, the Indian paper-stencil craft from the Braj region**: very fine hand-cut stencils. We borrow only its *cutting precision and lace edges*, not its devotional motifs.

## 2. Fit for DESIGO® — score 3.5 / 5

**Why it fits.** Milk and cloud are an easy visual rhyme: white, soft, layered, light. The style is calm and gives the transparent bottle renders a clean stage that needs no 3D, which suits the current asset situation. Layer parallax is cheap to build and performs well. Cut paper also fits the handmade, Sanganer-paper side of the brand.

**Where it fights.** (1) Cloud imagery drifts towards a children's book or a sleep app, which can lose the "Apple launch" precision. (2) "Head in the clouds" is the opposite of traceability: evidence chapters (Trace, Quality, Technology) need hard ground, not sky. (3) White clouds can wash out a white milk bottle unless the shadows and edges are disciplined.

**Recommendation.** Not the lead style for the whole site. Use it as the **atmospheric transition layer**: chapter 02 opening, the parting reveal of the four milks (08), Milk as Material (09) and the final CTA (15), plus the ESSENTIAL world.

## 3. Art direction

### Palette ("paper sky")
| Token | Hex | Role |
|---|---|---|
| `--cc-milk` | `#F7F4EC` | Base sky, brand milk |
| `--cc-cloud-1` | `#FBF9F4` | Nearest cloud layer (brightest) |
| `--cc-cloud-2` | `#F1ECE0` | Mid cloud |
| `--cc-cloud-3` | `#E6DFCF` | Far cloud |
| `--cc-cloud-4` | `#D8CFBC` | Farthest cloud, haze |
| `--cc-dawn` | `#EBD8C2` | Thar-dawn peach band behind clouds |
| `--cc-gold` | `#C8A96B` | Paper edge highlight, sun disc |
| `--cc-earth` | `#8C6A43` | Ground layer, rules |
| `--cc-green` | `#1E7A68` | Links, active states |
| `--cc-forest` | `#0B3B32` | Night layer, nav, footer |
| `--cc-ink` | `#171918` | Body text (charcoal, 16.1:1 on milk) |
| `--cc-ink-muted` | `#5C5A52` | Muted text: captions, labels (6.3:1 on milk) |
| `--cc-shadow` | `rgba(23,25,24,.12)` | Inter-layer shadow |

Inter-layer shadow token: `0 6px 14px rgba(23,25,24,.10), 0 1px 0 rgba(23,25,24,.06)`. Every cut layer gets the same shadow; depth is shown by scale and parallax, not by heavier shadows.

### Typography
- Display: **Fraunces** (OFL) variable, opsz 144, SOFT 100, weight 360. Soft serifs echo the rounded cloud edge. Headlines sit *between* layers (a cloud can overlap the bottom of a word), which is the signature move.
- Text/UI: **Inter Tight** (OFL) 400/500, 16–17px, line-height 1.65.
- Data: **JetBrains Mono** (OFL), small, used only in the evidence chapters.

### Texture and imagery
- Clouds are **vector shapes** (SVG paths) with a 2% paper-fibre fill (one 512px WebP tile, multiplied). Edges are crisp; a 1px lighter top edge (`--cc-cloud-1`) suggests a cut paper edge catching light.
- One cloud family of **six master silhouettes** (cumulus bank, long stratus, small puff, crown, low mist strip, round "milk drop" cloud). Reuse them, recolour them and mirror them. Never draw a new cloud per section.
- Ground layers: Thar dunes, khejri tree silhouettes and field strips, also cut-paper vectors.
- Photography (farm, cows, people) is never cut into clouds. It appears in clean rectangular frames *between* layers, like a photograph slid into the theatre.

### Iconography
Single-weight 1.5px line icons with rounded caps, in `--cc-ink`. Each icon sits on a small paper disc with the layer shadow.

### Grid
A 12-column grid (gutter 24px desktop, 16px mobile; margins 6vw) plus a **depth stack of six planes**:

| Plane | Content | Parallax factor |
|---|---|---|
| z0 | Sky gradient | 0 |
| z1 | Far clouds `--cc-cloud-4` | 0.15× |
| z2 | Mid clouds `--cc-cloud-3` | 0.35× |
| z3 | Text and bottle | 1× (reference) |
| z4 | Near clouds `--cc-cloud-1` | 1.25× |
| z5 | Foreground mist strip | 1.6× (desktop only) |

## 4. Motion & interaction language
- **Tempo.** Soft and buoyant, never bouncy. Reveals 700ms `cubic-bezier(.16,1,.3,1)`; layer parts 1100ms `cubic-bezier(.65,0,.35,1)`; idle cloud drift 40–90s linear loops (2–6px horizontal), so the sky is alive but almost still.
- **Scroll.** Parallax by plane factor (§3), scrubbed with `scrub: 1`. Within pinned chapters, the near layer (z4) rises over the text at the chapter's end and becomes the wipe into the next chapter.
- **Chapter transition ("the parting").** The two near cloud banks slide outward (left bank −60vw, right bank +60vw) over 1100ms while the mid layer lifts 12vh, revealing the next world behind. Reverse on scroll-up.
- **Cursor.** Default: a 20px milk-white paper disc with the layer shadow and a 1px `--cc-ink` 20% ring. Over links: the disc grows to 44px and its edge becomes scalloped (a cloud outline morph, 240ms). Over the bottle: the disc shows "drag · turn" in 11px Inter Tight. Over cloud layers: the cursor gently pushes the nearest layer 4px away (pointer repulsion, 600ms ease-out). Over form fields: the standard caret.
- **Hover.** Text links: a cloud-edge underline (a short scalloped SVG path) draws in 300ms. Buttons follow the brand rule (underlined label, travelling arrow) with a paper disc behind the arrow.
- **Reduced motion.** Planes are static, partings become 300ms cross-fades and drift stops.

### The bottle
The bottle floats **in the gap between cloud planes z2 and z4**: clouds pass behind it and in front of its base, so it seems to rise through the sky. Idle float is ±8px over 6s (`--ease-inout`), tilt on pointer ±6°. The contact shadow does not land on the ground. It is a soft ellipse cast onto the cloud below (`rgba(23,25,24,.14)`, 40px blur), which moves as the bottle floats. A thin `--cc-gold` rim light on the bottle's shoulder keeps the white bottle separate from the white clouds. When 360 frames arrive, the viewer's frame index is driven by drag with gentle inertia (decay 0.92 per frame) and clouds drift 2px opposite the turn direction.

## 5. Variant worlds — four skies

Behind each parting a different sky waits. The bottle is composited in code.

| Variant | Sky (z0) | Cloud tint | Ground cut layer | Accent | Mood |
|---|---|---|---|---|---|
| MASTER 26 (V1+) | `#D9E8DF` to `#1F5C45` vertical | Clouds tinted `#E9F1EC` | Layered forest-canopy silhouettes in `#1F5C45` and `#0A2A20` | Pollen dots in `--cc-gold` | Morning in a green forest |
| ROOT 14 (V1) | `#F3D9D6` to `#B3202A` at the horizon | Clouds warm `#F7E9E5` | Stepped red-earth cliff strata `#B3202A`, `#7E1A20`, `#4A0A0F` | Low sun rim on cloud edges | Red earth at dusk |
| BASE 3 (V2) | `#F8E4C2` to `#E89A1C` | Clouds `#FBF0DD` | Wheat-field strips in `#E89A1C`, `#B8741A`, `#5A3304`, plus a large cut-paper sun disc behind the bottle | Amber sun disc | Golden hour |
| ESSENTIAL (V3) | Pure `#F4EDE2` | Clouds in four ivories only | None: just clouds and a pale sandstone plinth layer `#CDB89A` | Shadow only | Calm and simple. The purest expression of the style |

The info panel slides in on a paper card from the right, sitting on the z3 plane: V-CODE in mono, name in Fraunces, the `line` from `desigo.ts` (for example "Fourteen herbs, rooted in free grazing." with the herb count shown as *pending*), price *pending*, descriptors *pending* with a dotted underline.

## 6. Page-by-page treatment

1. **Hero.** Milk sky with a faint dawn band. Three cloud planes, and the bottle risen in the gap at 52% height. "MILK FROM THE SOURCE." in Fraunces, with a near cloud overlapping the foot of "SOURCE." by 8%. Sub-line: "Traceable milk from indigenous Indian cows." CTAs below. On scroll, the near clouds rise and the bottle shrinks 1 → 0.82.
2. **The bottle becomes the story.** The six words (ORIGIN · BREED · FEED · FARM · QUALITY · TRACE) are printed on six small cut-paper clouds that drift into orbit around the pinned bottle, one per 45vh. The sky darkens from milk to forest by the last word; clouds turn from white to `#0F4A3F` paper.
3. **From cow to bottle.** The style changes register here: clouds lift away and a **horizontal paper landscape** appears, seven stations cut as layered vignettes (cow, farm, milk can, test card, chiller, plant, bottle). The milk line is a white paper ribbon that unrolls. The clouds stay above as a thin band.
4. **Where it begins.** Cut-paper Thar ground (dunes, khejri) frames real farm photographs set as rectangular prints between planes z2 and z4. `AssetSlot` shows the photographs that are still missing.
5. **Breeds.** A quiet page: the breed plate (D-set illustration or real photo) on a paper card, with a single small cloud above. Each breed reads "In DESIGO® rotation, *pending approval*".
6. **Traceability.** Clouds are cleared away completely. A forest-green night ground, the route drawn as a white paper strip with round paper nodes. The pulse is a small paper disc travelling 1.4s per hop. "Illustrative journey, not live data" sits on a paper tag.
7. **Quality.** Lab-white, no clouds. Crisp Swiss layout, the large "16", the 16-parameter list. Values read "— pending lab confirmation". This chapter proves the style knows when to stop.
8. **The four milks.** §5 skies, one per 120vh, each revealed by a parting.
9. **Milk as material.** The style's peak: clouds turn into pouring milk. The cloud-1 layer stretches into a milk ribbon (B2/B3 renders) falling past the bottle. Reduced motion shows one still composition.
10. **Heritage.** Paper sky in `--paper #EDE4D0`, a single gold-edged cloud, and the hand-drawn cow line art on a lower plane. An italic serif statement taken from approved copy.
11. **Technology.** Night sky in forest, clouds reduced to thin hairline outlines (the paper "blueprint" of a cloud). Seven verbs on one line. "Tradition is the source. Technology protects the journey."
12. **Ghee.** Warm gold sky, clouds tinted `#F3E6C8`, the ghee jar cutout on a sandstone layer, three grades linked to their source milks; prices *pending*.
13. **Trace your milk.** Charcoal ground with one paper card. The demo ID is prefilled; the result reveals as a vertical paper strip with a large DEMO tag.
14. **Story.** Horizontal paper timeline on archival paper. Only the verified 2019 milestone appears in production.
15. **Final CTA.** All planes return; the bottle rises through them one last time; the clouds part to deep forest for the footer. "Know where your milk comes from."

### Inner pages
- **/milk**: four small skies side by side as paper panels; hovering one parts its clouds.
- **/milk/[variant]**: that variant's sky as the hero, the 360 viewer in the gap, facts below on milk ground, "Trace this bottle".
- **/ghee**: gold sky hero, then a plain editorial process page.
- **/origin**: cut-paper Thar ground plus photo essays.
- **/trace**: no clouds; full-screen paper route.
- **/technology**: hairline-cloud night sky header, then a flat grid.
- **/about**: paper sky header, letter-like body.
- **/reserve**: plain milk form; one small drifting cloud as the only decoration. The glass-return cycle is drawn as a paper loop.

## 7. Component variants
`CloudStack` (six-plane parallax container) · `CloudShape` (six master SVG silhouettes, tint props) · `CloudParting` (chapter transition) · `GapBottle` (bottle between planes with cloud-cast shadow) · `PaperCard` (info panel) · `PaperTag` (DEMO / pending) · `PaperRibbonLine` (JourneyTrack) · `PaperRoute` (TraceMap) · `CloudCursor` · `ScallopUnderline` · `SkyGradient` (variant sky) · `AssetSlot` as an empty paper card on a cloud, naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Paper-sky palette, Fraunces soft, shadow token | Tokens, type specimen | Body ≥ 7:1; one shadow token used everywhere | none | 3 |
| 2 | Shell (nav, footer, cursor) | Grid, six-plane stack, cloud cursor | `CloudStack`, `CloudCursor`, nav | 60fps parallax on a mid-range Android; cursor hidden on touch | none | 3 |
| 3 | Hero + bottle | Bottle in the cloud gap | Hero | Gold rim keeps bottle legible on white; cloud never covers the label | Bottle renders (have) | 4 |
| 4 | Bottle → story | Six paper-cloud words | Chapter 02 | Sky tween without banding (dithered gradient) | Copy | 3 |
| 5 | Cow → bottle | Layered paper vignettes | `PaperRibbonLine` | Ribbon synced to scroll; vertical on mobile | E1–E7 or cut-paper set | 4 |
| 6 | Origin / farm | Cut ground + real photos | Chapter 04 | Photos never cut into shapes | Real farm photos | 2 |
| 7 | Breeds | Breed cards | Chapter 05 | Pending labels on every breed | D1–D6 | 2 |
| 8 | Traceability map | Paper route at night | `PaperRoute` | Keyboard-operable nodes; DEMO tag | `traceNodes` | 4 |
| 9 | Quality | Cloud-free lab page | Chapter 07 | No decorative layers; values pending | Lab approval | 2 |
| 10 | Four worlds + 360 | Four skies + parting | Chapter 08, `CloudParting` | Each parting ≤ 1100ms; viewer works with frames or single render | C-set skies, 360 frames (A) | 5 |
| 11 | Heritage | Gold-edged paper sky | Chapter 10 | Statement from approved copy only | Line-art cow | 2 |
| 12 | Technology | Hairline clouds | Chapter 11 | Public vocabulary only (no internal system names) | none | 2 |
| 13 | Ghee | Gold sky + jar | Chapter 12 | Prices pending; grade-to-milk links correct | Jar cutout | 3 |
| 14 | Trace-your-milk demo | Paper card lookup | Chapter 13 | DEMO always visible; errors handled | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Viewer in the gap; facts readable on milk | A, C-set | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Evidence pages cloud-free | Farm photos | 4 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Verified milestones only; form accessible | Copy approval | 3 |
| 18 | Mobile pass | Three planes, vertical partings | Mobile layouts | No horizontal scroll; bottle 50vh | none | 3 |
| 19 | A11y + reduced motion | Static sky | Static compositions | No parallax or drift; clouds `aria-hidden` | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | SVG cloud set ≤ 60 KB total; LCP < 2.5s; CLS < 0.05 | all | 3 |

Total ≈ 61 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- Real farm, cow and people photographs for chapters 04 and /origin (clouds never replace evidence).
- Optional: a real cut-paper master set made by a paper artist (six clouds, dunes, khejri) and scanned at 600 dpi. This gives the most premium result; the vector set is the fallback.

### Images to generate (illustration only; save under `web/public/desigo/styles/cloud-cut/`)
Append the house-style tail from `05_IMAGE_GENERATION_PROMPTS.md` to each prompt. No text, no logos, no bottles.

| # | File | Size | Prompt |
|---|---|---|---|
| CC1 | `hero.png` | 3200×2000 + 1400×2400 | Layered cut-paper sky diorama, five stacked planes of matte milk-white paper clouds with crisp hand-cut edges and soft shadows between layers, faint peach dawn band behind, large empty gap at the centre, shallow depth of field |
| CC2 | `clouds-set.png` (transparent) | 4000×2000 | Six separate cut-paper cloud shapes laid out flat with space between them (cumulus bank, long stratus, small puff, crown, low mist strip, round droplet cloud), matte white handmade paper, crisp edges, soft contact shadows, transparent background |
| CC3 | `thar-ground.png` (transparent) | 3600×1200 | Cut-paper layers of low Thar desert dunes and two khejri tree silhouettes, three tones of sand and earth #8C6A43, crisp edges, soft shadow between layers, transparent background |
| CC4 | `sky-master-26.png` | 3200×2000 | Cut-paper forest canopy layers in deep bottle green #1F5C45 and #0A2A20 under pale green paper clouds, tiny gold pollen dots, empty centre |
| CC5 | `sky-root-14.png` | 3200×2000 | Stepped cut-paper red-earth cliff strata in crimson #B3202A to oxblood #4A0A0F under warm white paper clouds at dusk, empty centre |
| CC6 | `sky-base-3.png` | 3200×2000 | Cut-paper wheat-field strips in amber #E89A1C and brown #5A3304, a large flat paper sun disc low at the centre, cream paper clouds, empty centre |
| CC7 | `sky-essential.png` | 3200×2000 | Only ivory paper clouds in four close tones of #F4EDE2 and a pale sandstone paper plinth at the centre, minimal, gallery calm |
| CC8 | `paper-fibre.png` | 1024×1024, seamless | Seamless macro texture of white handmade cotton paper fibre, flat light, very subtle |

## 10. Performance, accessibility and mobile
- Clouds are inline SVG (one `<symbol>` sprite, `<use>` per instance), not large PNGs. Painted illustrations (CC4–CC7) are AVIF/WebP at 1600px and 3200px with `srcset`.
- Parallax uses `transform: translate3d` only, with `will-change` set on z1–z4 while their chapter is active and removed afterwards.
- Every cloud is decorative (`aria-hidden="true"`). Text never sits on a cloud edge where contrast drops: a text-safe zone is checked per breakpoint.
- Mobile: three planes (z1, z3, z4), partings become vertical (clouds slide up and down), the bottle at 50vh, idle drift disabled to save battery.
- Reduced motion: static layered compositions, cross-fades only, no pointer repulsion.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **Six cloud shapes only**, reused with discipline. More shapes look like clip art.
2. **No faces, rainbows, sun characters or cartoon birds.** It is a paper theatre, not a picture book.
3. **Evidence chapters (Trace, Quality, Technology, Trace-your-milk) stand on the ground.** Clouds are removed or reduced to hairlines.
4. **The bottle is never cut from paper or turned into a cloud.** It stays the real render with a gold rim light.
5. One shadow token, one paper texture, one edge highlight. Consistency is what makes it look expensive.
6. Copy never uses sky metaphors that suggest claims ("heavenly", "pure as clouds", "light as air"). Use only approved lines from `desigo.ts`.
7. Real photographs appear as clean rectangular prints and are never masked into cloud shapes.

**Risks**: a childish or dreamy read, a white-on-white bottle, and over-layering on mobile. Mitigation: a strict shape set, the gold rim and cloud-cast shadow, cloud-free evidence chapters and a three-plane mobile stack.

**Best used for:** atmospheric transitions (chapters 02, 08 partings, 09, 15), the ESSENTIAL world, and hero openings on inner pages, used as a layer over a Minimalism or Editorial base.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: palette, type, grid and motion were complete. Missing: muted-text, pending and DEMO tokens, focus colour, radius scale, component states, a portrait hero, a journey prompt and negative prompts. All added; gold `#C8A96B` confirmed decorative only (2.1:1 on milk), focus uses green. No claim or licence problems found (Fraunces, Inter Tight, JetBrains Mono are OFL).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | Forest: primary CTA label, nav, night layer, footer | 11.3:1 on bg; forest night layer, nav and primary CTA |
| Primary ink | --c-on-primary | `#F7F4EC` | Milk on forest panels and the footer | 11.3:1 on primary |
| Secondary | --c-secondary | `#1E7A68` | DESIGO green: inline links, active states, focus ring | 4.7:1 on bg |
| Accent | --c-accent | `#C8A96B` | Gold paper-edge highlight, bottle shoulder rim, sun disc | 2.0:1 on bg; decorative only: paper-edge highlight, bottle rim light, sun disc; never text or focus |
| Background | --c-bg | `#F7F4EC` | Milk sky (`--cc-milk`) | — |
| Surface | --c-surface | `#FBF9F4` | Nearest cloud paper (`--cc-cloud-1`): cards, tags, info panel | text on surface 16.8:1 |
| Text | --c-text | `#171918` | Charcoal ink (`--cc-ink`) | 16.1:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions and labels (new token `--cc-ink-muted`) | 6.3:1 on bg, 6.6:1 on surface |
| Line | --c-line | `rgba(23,25,24,.12)` | Hairlines and the inter-layer shadow colour (`--cc-shadow`) | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#171918` | Verified tick / pending dotted underline / ink-on-gold-edged paper DEMO tag | 7.1 / 7.1 / 16.1 :1 on `#F7F4EC` |

Focus ring: `--c-focus` `#1E7A68` (4.7:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Sky `#D9E8DF` → `#1F5C45`, clouds `#E9F1EC`, cut forest canopy, gold pollen dots |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | Sky `#F3D9D6` → `#B3202A` at the horizon, clouds `#F7E9E5`, cliff strata `#B3202A` / `#7E1A20` / `#4A0A0F` |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | Sky `#F8E4C2` → `#E89A1C`, clouds `#FBF0DD`, wheat strips `#E89A1C` / `#B8741A` / `#5A3304`, paper sun disc |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | Pure `#F4EDE2` sky, four ivory clouds, sandstone plinth layer `#CDB89A`; the purest expression |

Dark-chapter inversion: Traceability, Technology and Trace-your-milk run on forest `#0B3B32` (Trace-your-milk on charcoal `#171918`); clouds become `#0F4A3F` paper or hairline outlines; text `#F7F4EC` (11.3:1), muted `#B9C4BE`, line `rgba(247,244,236,.16)`, focus `#7FE0B8`; the gold rim stays; the logo loop renders white.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 360, opsz 144, SOFT 100, WONK 0 | clamp(3.25rem, 1.5rem + 7vw, 9rem) | 0.92 | −0.01em | UPPERCASE (hero), sentence elsewhere |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400, opsz 72, SOFT 100 | H1 clamp(2.5rem, 1.6rem + 3.2vw, 5rem) · H2 clamp(1.8rem, 1.3rem + 1.8vw, 3rem) | 1.02 | −0.005em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) | 1.65 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 500 / 600 | 0.75rem | 1.4 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 | 0.8125rem | 1.5 | +0.02em | As data (evidence chapters only) |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` (Google Fonts) | 400 / 500 | matches body | 1.7 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Pairing rationale: soft-axis Fraunces rhymes with rounded cloud edges while Inter Tight keeps UI crisp; mono appears only where evidence is shown.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, gutter 24 px (16 px mobile), margins 6vw, max-width 1440 px; plus a six-plane depth stack z0 sky (0×) · z1 far clouds (0.15×) · z2 mid (0.35×) · z3 text + bottle (1×) · z4 near (1.25×) · z5 mist (1.6×, desktop only); mobile keeps z1, z3, z4
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; chapters are 100–120vh tall with partings between
- **Radius scale:** sm 4 px (inputs) · md 16 px (paper cards, soft cut corners) · lg 999 px (paper discs, tags' holes, cursor)
- **Border style:** no visible borders on paper: edges are a 1 px lighter top edge `#FFFFFF` at 60% + the layer shadow; form fields 1 px ink at 20%
- **Shadow / elevation:** one token for every cut layer: `0 6px 14px rgba(23,25,24,.10), 0 1px 0 rgba(23,25,24,.06)`; depth is shown by scale and parallax, never heavier shadows. Bottle: cloud-cast ellipse `rgba(23,25,24,.14)` 40 px blur
- **Texture / overlay:** 2% paper-fibre tile (512 px WebP, multiply) inside cloud shapes only; text-safe zones checked per breakpoint so text never sits on a cloud edge

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Forest label (Inter Tight 600, 13 px, +0.16em, uppercase) with an underline and a travelling arrow seated on a 28 px milk paper disc with the layer shadow; 48 px tall, padding 14 px 0. **States:** default forest label, underline, arrow disc · hover a 1 px frame draws itself around the label (400 ms) and the disc slides 6 px right; magnetic offset ≤ 6 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active the disc presses flat (shadow collapses to `0 2px 4px`) · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the disc's edge becomes a slowly turning scalloped ring, `aria-busy`. **Motion:** 240 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Ink label, same type, scalloped cloud-edge underline, no disc; 48 px tall. **States:** default ink label + straight hairline · hover the hairline redraws as a scallop (300 ms), arrow +6 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading scallop underline pulses opacity .4 ↔ 1. **Motion:** 300 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Inline link in green `#1E7A68` with a 1 px underline; arrow links end in →. **States:** default green + hairline · hover cloud-edge scallop underline draws in 300 ms · focus-visible 2 px `#1E7A68` ring, 3 px offset · active colour deepens to forest · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 300 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px milk paper disc with the layer shadow and a 1.5 px line icon; menu icon = three stratus strokes of unequal length that collapse into ×. **States:** default paper disc · hover disc rises 2 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active disc presses flat · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** icon morph 300 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 72 px bar on plane z3: transparent over the sky, then a `#FBF9F4` paper strip with the layer shadow after 80 px of scroll; links Inter Tight 500 13 px uppercase in forest; RESERVE as a compact primary button. Mobile: the menu icon opens a full-screen sky where two cloud banks part (600 ms) to reveal links in Fraunces 2.25rem. **States:** default forest links · hover scallop underline · focus-visible 2 px `#1E7A68` ring, 3 px offset · active current page marked by a 6 px paper disc beneath · disabled n/a · loading n/a. **Motion:** bar fades in 240 ms; mobile parting 600 ms `--ease-inout`. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 20 px milk paper disc with the layer shadow and a 1 px ink ring at 20%; labels Inter Tight 500 11 px. **States:** default 20 px paper disc · hover grows to 44 px and its edge morphs into a scallop (240 ms) · ROTATE disc reads "drag · turn" over the bottle · EXPLORE 56 px scalloped disc reading "explore"; the nearest cloud layer is pushed 4 px away (600 ms) · ENTER 32 px disc with an arrow → · VIEW 48 px disc reading "view" · TRACE 16 px disc with a forest centre dot reading "trace" on the route. **Touch fallback:** no custom cursor or repulsion; partings and the bottle turn respond to swipe; a one-time "Drag to turn" hint under the bottle. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — Paper card `#FBF9F4`, radius 16 px, the layer shadow, padding 32 px (24 px mobile), 1 px lighter top edge; sits on plane z3. **States:** default paper on sky · hover lifts 4 px (shadow unchanged: depth by translate) · focus-visible 2 px `#1E7A68` ring, 3 px offset · active returns · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton bars `#F1ECE0`, no shimmer. **Motion:** slides in from the right 700 ms. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Paper tag, 24 px tall, punched hole and 1 px string line, Inter Tight 600 11 px uppercase. **Pending verification**: earth-ink `#6B4C2A` label + dotted underline on the claim. **DEMO · not live data**: ink on a gold-edged paper tag, shown large on the trace chapters. **States:** default tag on its string · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** tag swings in 4° and settles (600 ms, no overshoot). **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Paper field 56 px, `#FBF9F4`, radius 12 px, 1 px ink border at 20%; bottle ID in JetBrains Mono 18 px; label above, hint below; demo ID prefilled; error text in earth-ink with an icon. **States:** default paper field · hover border to 40% · focus-visible 2 px `#1E7A68` ring, 3 px offset · active 2 px green border while typing · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading a small cloud puff pulses beside the submit arrow; result reveals as a vertical paper strip. **Motion:** result strip unrolls 700 ms. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — the low mist-strip master cloud (24 px tall) in `#E6DFCF`, or a 1 px hairline on evidence chapters; one per screen. **States:** default static · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** drifts 2–6 px on a 60 s loop. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Mono 12 px chapter number in forest ("02 —"), Fraunces title with the near cloud overlapping its foot by 8%, one-line intro in Inter Tight. **States:** default static · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** title rises 24 px in 700 ms; the near cloud rises over it at 1.25×. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — Paper card sliding in from the right at columns 9–12: V-code (mono), name (Fraunces H2), the `desigo.ts` line with the herb count *pending*, price with a pending tag (hidden in production), size, descriptors with dotted underlines, "Trace this bottle →". **States:** default static facts · hover a descriptor reveals its source note · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton bars. **Motion:** rows rise 12 px, 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Bottle in the gap between planes z2 and z4 at 52% height; clouds pass behind it and in front of its base; cloud-cast contact ellipse moves with the float; 1 px gold rim on the shoulder keeps white glass off white cloud. **States:** default idle float ±8 px over 6 s · hover pointer tilt ±6° · focus-visible 2 px `#1E7A68` ring, 3 px offset · active drag turns the 360 viewer with inertia (decay 0.92/frame); clouds drift 2 px opposite · disabled n/a · loading static render + paper-card `AssetSlot` naming the missing frames. **Motion:** `--ease-inout` float. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — 16 px round paper node with the layer shadow on a white paper-strip route over the forest night ground; label Inter Tight 13 px + mono ID. **States:** default paper node · hover node lifts 3 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active a paper-disc pulse travels 1400 ms per hop; the node gains a gold edge and opens its panel · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading nodes drop in with 80 ms stagger. **Motion:** hop 1400 ms `--ease-inout`. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** single-weight 1.5 px line icons, rounded caps, ink `#171918`, 24 px grid; each sits on a 32 px paper disc with the layer shadow
- **Illustration technique:** six master cloud silhouettes as inline SVG `<symbol>`s (cumulus bank, long stratus, small puff, crown, mist strip, round droplet cloud), recoloured and mirrored, never redrawn; cut-paper vector Thar ground; optional real cut-paper set by a paper artist scanned at 600 dpi
- **Photo treatment:** real photographs only as clean rectangular prints slid between planes z2 and z4, natural grade, never masked into cloud shapes

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | partings, bottle float |
| `--dur-micro` | 240 ms | hover, cursor morph |
| `--dur-reveal` | 700 ms | text and card reveals |
| `--dur-scene` | 1100 ms | the parting |
| `--drift` | 40–90 s linear loops, 2–6 px | idle cloud drift |
| `--parallax` | 0 / 0.15 / 0.35 / 1 / 1.25 / 1.6 | planes z0–z5 |
| `--float` | ±8 px / 6000 ms | bottle idle |
| `--hop` | 1400 ms | trace pulse per node |
| `--scrub` | 1 | scroll-linked planes |

- **Signature transition:** the parting: near cloud banks slide −60vw / +60vw over 1100 ms while the mid layer lifts 12vh, revealing the next world; reversed on scroll-up
- **Scroll behaviour:** plane parallax by factor; in pinned chapters the near layer z4 rises over the text at the end and becomes the wipe
- **Reduced-motion fallback:** static planes, partings become 300 ms cross-fades, drift and pointer repulsion off

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _matte cut-paper diorama, crisp hand-cut edges, soft even shadows between layers, milk-white paper palette #F7F4EC, #F1ECE0 and #E6DFCF with warm gold #C8A96B edge light, gentle paper fibre, shallow depth of field, calm, premium, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| CC1 | `web/public/desigo/styles/cloud-cut/hero.png` | 3200×2000 (16:10) | No | Layered cut-paper sky diorama, five stacked planes of matte milk-white paper clouds with crisp hand-cut edges and soft shadows between layers, faint peach dawn band #EBD8C2 behind, large empty gap at the centre | faces on clouds, rainbows, birds, sun characters, blue sky | Hero desktop |
| CC2 | `web/public/desigo/styles/cloud-cut/hero-portrait.png` | 1400×2400 (7:12) | No | Vertical cut-paper sky diorama, cloud planes stacked top and bottom with a tall empty gap in the middle third, faint dawn band, crisp paper edges | faces on clouds, rainbows, birds, blue sky | Hero mobile |
| CC3 | `web/public/desigo/styles/cloud-cut/sky-master-26.png` | 3200×2000 + 1400×2400 | No | Cut-paper forest canopy layers in deep bottle green #1F5C45 and #0A2A20 under pale green paper clouds #E9F1EC, tiny gold pollen dots, empty centre | cartoon trees, bright lime green | MASTER 26 world |
| CC4 | `web/public/desigo/styles/cloud-cut/sky-root-14.png` | 3200×2000 + 1400×2400 | No | Stepped cut-paper red-earth cliff strata in crimson #B3202A, #7E1A20 and oxblood #4A0A0F under warm white paper clouds at dusk, empty centre | lava, fire, blood red, cartoon | ROOT 14 world |
| CC5 | `web/public/desigo/styles/cloud-cut/sky-base-3.png` | 3200×2000 + 1400×2400 | No | Cut-paper wheat-field strips in amber #E89A1C, #B8741A and brown #5A3304, a large flat paper sun disc low behind the centre, cream paper clouds, empty centre | sun face, neon orange | BASE 3 world |
| CC6 | `web/public/desigo/styles/cloud-cut/sky-essential.png` | 3200×2000 + 1400×2400 | No | Only ivory paper clouds in four close tones of #F4EDE2 and a pale sandstone paper plinth #CDB89A at the centre, minimal, gallery calm | colour accents, objects | ESSENTIAL world |
| CC7 | `web/public/desigo/styles/cloud-cut/journey-stations.png` | 6000×1600, transparent | Yes (real alpha) | Long horizontal strip of seven small layered cut-paper vignettes in milk white, sand and earth #8C6A43: an Indian zebu cow grazing (hump and dewlap visible), a small farm shed with a khejri tree, a steel milk can, a round paper test card with sixteen dots, a steel chiller, a small clean dairy plant, a doorstep with a cloth bag, joined by a thin white paper ribbon, isolated on transparent background | Holstein, cartoon cow, bottle, people | Cow → bottle (ch. 03) |
| CC8 | `web/public/desigo/styles/cloud-cut/clouds-set.png` | 4000×2000, transparent | Yes (real alpha) | Six separate cut-paper cloud shapes laid out flat with space between them (cumulus bank, long stratus, small puff, crown, low mist strip, round droplet cloud), matte white handmade paper, crisp edges, soft contact shadows, transparent background | faces, outlines, blue | Master cloud set (trace to SVG) |
| CC9 | `web/public/desigo/styles/cloud-cut/thar-ground.png` | 3600×1200, transparent | Yes (real alpha) | Cut-paper layers of low Thar desert dunes and two khejri tree silhouettes, three tones of sand and earth #8C6A43, crisp edges, soft shadow between layers, transparent background | camels, people, cacti | Origin (ch. 04), /origin |
| CC10 | `web/public/desigo/styles/cloud-cut/paper-fibre.png` | 1024×1024, seamless | No | Seamless macro texture of white handmade cotton paper fibre, flat light, very subtle | seams, vignette, folds | Cloud fill texture (2% multiply) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/37_cloud-cut.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/cloud-cut/
- [ ] Only the six master cloud silhouettes are used; SVG cloud set ≤ 60 KB
- [ ] Evidence chapters (Trace, Quality, Technology, Trace-your-milk) are cloud-free or hairline-only
- [ ] Gold rim keeps the bottle legible on white at every breakpoint
