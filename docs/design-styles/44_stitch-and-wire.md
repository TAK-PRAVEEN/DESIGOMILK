# 44 · Stitch and Wire — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Stitch and Wire combines two kinds of line: **embroidery stitches** (running stitch, cross-stitch, chain stitch, satin fill, visible thread on cloth) and **wire-frame lines** (the thin vector or 3D mesh lines of technical drawing and digital modelling). The trend pairs the hand-made line with the machine-made line: a thread that becomes a vector path, a mesh that is "sewn" onto fabric, UI borders made of stitches. It feels tactile, crafted and precise at once.

We **adapt the embroidery side to Indian textile craft**, with origins credited correctly:
- **Kantha** (Bengal and Odisha): long rows of running stitch on layered cloth. Our **trace line** is a kantha running stitch, one thread connecting farm to door.
- **Gota patti** (Rajasthan, especially Jaipur and Ajmer): appliqué of woven gold and silver ribbon cut into leaves and borders. It becomes our **gold accent and ghee language**.
- **Mirror work, shisha or abhla bharat** (Rajasthan, Gujarat, Kutch): small mirrors held by buttonhole stitch. These become **nodes and highlights** (each traceability node is a mirror held by stitches).

The wire side is the **bottle in wireframe**: the glass bottle drawn as a fine mesh of lines that "sews" itself into the real render.

Reference points:
1. **Kantha and Kutch embroidery collections** (Calico Museum of Textiles, Ahmedabad; Crafts Museum, Delhi): authentic stitch vocabulary and colour.
2. **Embroidery-meets-digital design** (e.g., embroidered UI and type experiments by Danielle Clough and Maricor/Maricar; stitched brand identities in fashion and craft retail).
3. **Wireframe product visualisation** (CAD reveals in Apple and automotive launches): a precise mesh that resolves into the finished object.

## 2. Fit for DESIGO® — score 3.5 / 5

**Why it fits.** "One thread from farm to door" is a perfect visual metaphor for traceability, and a running stitch is the oldest way of drawing a continuous line by hand. Rajasthani gota and mirror work are local, festive and premium, and suit ghee and gifting. The wireframe-to-render reveal gives the "Apple product launch" moment for the bottle. Together they express the brand line itself: tradition (stitch) and technology (wire).

**Where it fights.** (1) Textile craft can tip into tourist-shop cliché or wedding décor. (2) Using embroidery without crediting or paying artisans would be appropriation. (3) Stitch texture everywhere is busy and hurts legibility. (4) Thread lines next to milk are fine; fabric "dirt" or fraying near food is not.

**Recommendation.** Strong for **traceability (chapter 06, /trace)**, the **cow-to-bottle line (03)**, **Ghee (12)** and **Heritage (10)**, plus the wireframe bottle reveal in the hero. Use on a Minimalism or Editorial base; stitches are lines and accents, not wallpaper.

## 3. Art direction

### Palette ("cloth, thread, gota and wire")
| Token | Hex | Role |
|---|---|---|
| `--sw-cloth` | `#F4EFE3` | Unbleached cotton (mulmul) ground |
| `--sw-cloth-2` | `#E9E1D0` | Second cloth layer (kantha layering) |
| `--sw-milk` | `#F7F4EC` | Page ground for UI pages |
| `--sw-thread-forest` | `#0B3B32` | Main thread: the trace line |
| `--sw-thread-green` | `#1E7A68` | Second thread, active stitches |
| `--sw-thread-madder` | `#9E2B25` | Madder-red thread (ROOT 14, accents) |
| `--sw-thread-turmeric` | `#C98A1E` | Turmeric thread (BASE 3) |
| `--sw-thread-indigo` | `#2E3F6B` | Indigo thread (rare accent) |
| `--sw-gota` | `#C8A96B` | Gota gold ribbon |
| `--sw-gota-bright` | `#E3C98E` | Gota highlight |
| `--sw-mirror` | `#C9CED1` | Mirror disc |
| `--sw-wire` | `#1E7A68` at 60% | Wireframe lines on light |
| `--sw-wire-dark` | `#7FE0B8` at 50% | Wireframe on forest (Technology only) |
| `--sw-ink` | `#171918` | Body text |

### Typography
- Display: **Fraunces** 400, opsz 144. On selected titles, a **stitched outline variant**: the title's outline traced as an SVG running stitch (dash 7px, gap 5px, round caps) in forest thread, drawn in as you scroll. Use it once per page.
- Text/UI: **Inter Tight** 400/500.
- Labels: **Inter Tight** 500, uppercase, +0.18em.
- Data and wire annotations: **JetBrains Mono** 400, 11–12px, in `--sw-thread-green`.

### Texture and imagery
- **Cloth**: a scanned unbleached cotton weave tile (512px, 4% visible) for stitched chapters only. UI pages stay on smooth milk.
- **Stitches** are SVG: running stitch (dashes with round caps and a 0.5px darker centre line to read as twisted thread), chain stitch (small linked loops) for borders, satin fill for small solid shapes. Thread width 2–3px at desktop.
- **Gota**: real gota ribbon photographed (or a precise vector with a woven gold texture) cut into leaf and border shapes; used for ghee and heritage.
- **Mirrors**: real shisha mirror photographs (small, 8–14mm) with stitched surrounds; in the UI, mirror nodes reflect a soft environment map and catch the cursor light.
- **Real embroidery**: commissioned pieces by named artisans for key moments (hero cloth, ghee border, heritage panel), photographed in macro.
- **Wireframe**: the bottle's silhouette rebuilt as a clean vector mesh (latitude and longitude lines, 0.75px) from the real render's outline, or a mesh from the GLB once it exists.

### Iconography
Icons as **running-stitch outlines** (dash 4, gap 3, 1.75px) in forest thread on cloth chapters; as plain 1.5px lines on UI pages.

### Grid
12 columns, margins 6vw. **A thread grid**: all stitch paths snap to an 8px grid so dashes align and look machine-perfect where it matters (trace route, borders) and hand-placed only in commissioned artwork. Wireframes snap to the bottle's real proportions.

## 4. Motion & interaction language
- **Stitching.** Stitch paths draw in as running stitch: each dash appears in sequence (not a continuous stroke) at 24–36 dashes per second, with a tiny "pull" (each dash scales from 0.6 to 1 along its length, 120ms). Feels like a needle, not a pen.
- **Wire to render.** The bottle reveal: wire lines draw in (900ms, `cubic-bezier(.16,1,.3,1)`), then the real render fades in *through* the mesh (600ms), then the mesh fades to 0 (400ms). Total about 1.9s, once per session, skippable.
- **Scroll.** In journey and trace chapters, the thread stitches forward exactly with scroll (scrubbed); scrolling back unpicks it.
- **Cursor.** Default: a 12px forest dot with a 3px "needle eye" gap. Over links: a short thread follows the cursor (four dashes trailing, 120ms lag). Over mirror nodes: the mirror brightens and reflects a small highlight toward the cursor. Over the bottle: the wireframe appears faintly over the render (20%) with "drag · turn". Over gota elements: a soft gold shimmer passes across (600ms).
- **Hover.** Text links: a running-stitch underline stitches in (300ms). Buttons: the brand underlined label and travelling arrow, the underline as running stitch that becomes solid on hover.
- **Scenes.** Chapter transitions are a "seam": a horizontal chain-stitch line closes across the screen (700ms, `cubic-bezier(.65,0,.35,1)`) and the next chapter opens below it.
- **Reduced motion.** Stitches and wires appear complete; no reveal sequence; no shimmer.

### The bottle
The bottle floats on milk ground over a **square of unbleached cloth** with a fine kantha border, as if placed on a hand-stitched cloth. Its contact shadow falls on the cloth. Idle float ±6px over 6s; pointer tilt ±6°, with the faint wire mesh rotating in sync to suggest volume. With only single renders, the mesh is a 2.5D illustration that never pretends to be a 360 turn. When 360 frames arrive, the mesh is generated from the GLB or traced per frame, and dragging shows the mesh briefly, which then settles into the render.

## 5. Variant worlds — four threads

| Variant | Thread | Cloth | Craft accent | Wire | World |
|---|---|---|---|---|---|
| MASTER 26 (V1+) | Forest-green thread `#1F5C45` | Cloth tinted `#E4ECE6` | A border of stitched leaves (satin stitch), with herb count shown as *pending* | Mesh in `#1F5C45` 50% | Deep forest gradient `#0A2A20` behind the cloth |
| ROOT 14 (V1) | Madder-red thread `#B3202A` | Cloth `#F1E2DE` | Chain-stitch strata lines like layered earth | Mesh in madder 45% | Red-earth gradient `#4A0A0F` |
| BASE 3 (V2) | Turmeric/amber thread `#E89A1C` toned to `#C98A1E` for contrast | Cloth `#F5EAD6` | Running-stitch wheat rows and one large mirror as a sun | Mesh amber 45% | Amber gradient `#5A3304` |
| ESSENTIAL (V3) | Ivory thread on ivory cloth `#CDB89A` on `#F4EDE2` | Plain cloth | A single line of white-on-white kantha | Mesh in taupe `#4D4130` 35% | Ivory |

Info panel on milk: V-CODE (mono), name (Fraunces), the `desigo.ts` line, price *pending*, descriptors *pending*, each descriptor bulleted with a single cross-stitch.

## 6. Page-by-page treatment

1. **Hero.** Milk ground with a cloth square; the wire-to-render bottle reveal; "MILK FROM THE SOURCE." in Fraunces with a stitched outline drawn in; "Traceable milk from indigenous Indian cows."
2. **The bottle becomes the story.** One forest thread stitches an orbit around the pinned bottle; at six points it passes through six mirror discs, each carrying one word (ORIGIN · BREED · FEED · FARM · QUALITY · TRACE) and its line.
3. **From cow to bottle.** **The thread chapter.** A single running-stitch line travels horizontally across seven cloth panels (layered like kantha), stitching through each station drawing (cow, farm, milk, test, chill, plant, bottle). Scroll stitches; scrolling back unpicks.
4. **Where it begins.** Real farm photographs, each "tacked" onto cloth with four small corner stitches. `AssetSlot`s as empty tacked frames.
5. **Breeds.** Breed plates framed by a thin chain-stitch border. Each breed's home region is a small stitched map outline. "*Pending approval*" on each.
6. **Traceability.** The style's strongest chapter: on indigo-forest cloth, eight **mirror nodes** joined by a forest-green running stitch. The pulse is a gleam of light travelling along the thread (1.5s per hop) and lighting each mirror. Nodes open stitched-edge panels. "Illustrative journey, not live data".
7. **Quality.** Stitches stop: crisp milk-white page with the large "16" and the list, where only the rule lines are fine wire. Values "— pending lab confirmation".
8. **The four milks.** §5 threads, each with its own wire reveal.
9. **Milk as material.** The milk ribbon pours across a cloth, and a thread follows its edge.
10. **Heritage.** A commissioned embroidery panel (kantha or Rajasthani work, credited by name) photographed in macro, beside approved heritage copy. Craft and maker credited on the page.
11. **Technology.** **The wire chapter**: on forest, the seven verbs connected by wireframe lines in `--sw-wire-dark`, with a single forest thread running beneath them. "Tradition is the source. Technology protects the journey." Thread and wire side by side.
12. **Ghee.** **Gota patti**: the ghee jar framed by a gota leaf border, with three grades as three gota-edged cards tied to their source milks; prices *pending*.
13. **Trace your milk.** The result stitches itself, node by node, on a cloth card, with mirrors lighting. DEMO badge stitched in red thread (and present as text).
14. **Story.** A long cloth strip with a stitched timeline; only verified 2019 in production.
15. **Final CTA.** The thread from chapter 03 returns and ties a small knot under the bottle. "Know where your milk comes from."

### Inner pages
- **/milk**: four cloth squares with four threads, bottles on each.
- **/milk/[variant]**: the variant thread world, the 360 viewer with mesh, facts, "Trace this bottle".
- **/ghee**: gota-framed hero; bilona process in five stitched panels.
- **/origin**: tacked photo essays.
- **/trace**: the mirror-node map full screen.
- **/technology**: the wire chapter extended.
- **/about**: a calm page with the artisan credits and the commissioned panel.
- **/reserve**: a plain form with a thin stitched border; the return loop is a closed circle of running stitch.

## 7. Component variants
`StitchPath` (running, chain, cross; scroll-scrubbed) · `StitchedTitle` · `MirrorNode` (TraceMap node with reflection) · `ThreadRoute` (TraceMap) · `ThreadTrack` (JourneyTrack) · `WireBottle` (wire-to-render reveal) · `GotaBorder` · `ClothSquare` (bottle stage) · `SeamTransition` · `TackedPhoto` · `NeedleCursor` · `ArtisanCredit` · `AssetSlot` as an empty tacked frame naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Thread palette, stitch specs | Tokens, stitch library spec | Stitch dashes align to 8px grid; body ≥ 7:1 | none | 3 |
| 2 | Shell (nav, footer, cursor) | Needle cursor, seam transition | Shell components | Cursor 60fps; seam ≤ 700ms | Cloth scan | 3 |
| 3 | Hero + bottle | Wire-to-render reveal | `WireBottle`, hero | Reveal ≤ 1.9s, once per session, skippable | Bottle renders, outline trace | 4 |
| 4 | Bottle → story | Thread orbit with mirrors | Chapter 02 | Words are real text, focusable | Mirror photos | 3 |
| 5 | Cow → bottle | Thread through seven panels | `ThreadTrack` | Stitch synced to scroll; mobile vertical | E1–E7 | 4 |
| 6 | Origin / farm | Tacked photos | Chapter 04 | Real photos only | Farm photos | 2 |
| 7 | Breeds | Chain-stitch frames, stitched maps | Chapter 05 | Pending labels | D1–D6 | 3 |
| 8 | Traceability map | Mirror nodes, gleam pulse | `ThreadRoute`, `MirrorNode` | Keyboard nodes; DEMO label | `traceNodes` | 4 |
| 9 | Quality | Stitch-free lab page | Chapter 07 | Values pending | Lab approval | 2 |
| 10 | Four worlds + 360 | Four threads + mesh | Chapter 08 | Mesh never fakes rotation without frames | A, GLB optional | 5 |
| 11 | Heritage | Commissioned panel | Chapter 10 | Artisan named, paid and consenting | Commissioned embroidery | 3 |
| 12 | Technology | Wire chapter | Chapter 11 | Public vocabulary only | none | 2 |
| 13 | Ghee | Gota frames | `GotaBorder`, chapter 12 | Prices pending | Gota ribbon photos, jar | 4 |
| 14 | Trace-your-milk demo | Stitched result | Chapter 13 | DEMO visible as text | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Facts on smooth milk, not cloth | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Stitch used as line, not wallpaper | Photos | 3 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Artisan credits complete | Credits | 3 |
| 18 | Mobile pass | Lighter stitches | Mobile layouts | Thread 2px; no cloth texture below 400px | none | 3 |
| 19 | A11y + reduced motion | Complete static lines | Static versions | Stitches `aria-hidden`; route has text list | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | SVG stitch set ≤ 80 KB; LCP < 2.5s | all | 3 |

Total ≈ 63 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A), the vector wordmark (C) and, ideally, a GLB of the bottle for an accurate mesh.
- **Commissioned embroidery** by named artisans (e.g., through a Rajasthan or Kutch craft co-operative or a women's self-help group; the Women on Wings link may help, *pending*): a hero cloth square with kantha border, a gota-patti border for ghee, a mirror-work panel, and a heritage panel. Fair payment, written consent, credits.
- Macro photography of the pieces, plus real shisha mirrors and gota ribbon.
- A scanned unbleached cotton tile.

### Images to generate (texture and concept only; real embroidery is commissioned; save under `web/public/desigo/styles/stitch-wire/`)
Append the house-style tail. No text, no letters, no logos, no bottles.

| # | File | Size | Prompt |
|---|---|---|---|
| SW1 | `hero-cloth.png` | 3200×2000 + 1400×2400 | A square of unbleached cotton cloth on a milk-white surface with a fine border of hand running stitches in deep forest-green thread, soft daylight, macro detail on the stitches, empty centre |
| SW2 | `cloth-tile.png` | 1024×1024, seamless | Seamless macro texture of unbleached handwoven cotton mulmul, soft, flat light |
| SW3 | `running-stitch-route.png` | 3600×1200 | One long continuous line of hand running stitch in forest-green thread crossing layered cream cotton cloth panels, kantha style, top-down, soft light |
| SW4 | `mirror-node.png` (transparent) | 1200×1200 | A single small round embroidery mirror held by a ring of buttonhole stitches in forest-green thread on cream cloth, macro, crisp, transparent background around the cloth circle |
| SW5 | `gota-border.png` (transparent) | 3600×600, tileable horizontally | Rajasthani gota patti border of woven gold ribbon cut into small leaves appliquéd on cream cloth, warm gold #C8A96B, macro, transparent background |
| SW6 | `cloth-master-26.png` | 3200×2000 | Pale green-tinted cotton with a border of satin-stitched leaves in deep green #1F5C45 thread, soft light, empty centre |
| SW7 | `cloth-root-14.png` | 3200×2000 | Pale rose cotton with horizontal chain-stitch lines in madder red #B3202A like layered earth strata, empty centre |
| SW8 | `cloth-base-3.png` | 3200×2000 | Cream cotton with rows of running stitch in turmeric amber like wheat rows and one round mirror as a sun, empty centre |

## 10. Performance, accessibility and mobile
- Stitches are generated SVG dashes (`stroke-dasharray` with round caps), so they are tiny and scalable. The dash-by-dash reveal uses a stepped `stroke-dashoffset` animation, not one element per dash.
- The wire mesh is SVG (2.5D) or a lightweight line render from the GLB; no heavy WebGL.
- Mirror reflections are a CSS radial-gradient highlight driven by the pointer position, disabled on touch.
- All stitches and wires are decorative; routes and lists also exist as text.
- Reduced motion: completed stitches and meshes; no shimmer or reveal.
- Mobile: stitches at 2px, cloth texture off below 400px, the thread runs vertically down the journey and trace pages.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **Line, not wallpaper.** Stitches draw routes, borders and titles; there are no all-over embroidery backgrounds.
2. **Credit the craft and the people.** Every commissioned piece names its artisan(s) and tradition, with fair pay and consent. Kantha is credited to Bengal and Odisha, gota patti and mirror work to Rajasthan and Gujarat.
3. **No religious or wedding motifs** (no deity figures, no wedding kalash or bridal patterns). Leaves, earth, fields and lines only.
4. **Wire is honest.** The wireframe never fakes a 360 turn from a single image.
5. **Clean textiles.** No fraying, stains or loose threads near milk; cloth is fresh and pressed.
6. Gold (gota) is reserved for ghee and heritage; elsewhere the thread is forest green.
7. One stitch library, one thread width and one cloth. Consistency keeps it premium.

**Risks**: craft cliché, appropriation and visual busyness. Mitigation: commissioned and credited artisans, stitches as structural lines only, and stitch-free evidence pages.

**Best used for:** the traceability thread (chapters 03, 06, 13 and /trace), Ghee in gota patti, Heritage with commissioned embroidery, and the wire-to-render hero reveal.
