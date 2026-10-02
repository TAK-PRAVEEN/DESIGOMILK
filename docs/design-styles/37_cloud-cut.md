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
| `--cc-ink` | `#171918` | Body text (charcoal, ≥ 12:1 on milk) |
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
