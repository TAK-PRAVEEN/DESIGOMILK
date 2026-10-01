<p align="center">
  <img src="docs/media/logo-intro.gif" alt="DESIGO® logo stroke-draw animation" width="520" />
</p>

<h1 align="center">DESIGO® — desigomilk.com</h1>
<p align="center"><b>Milk, from the source.</b> Traceable milk from indigenous Indian cows, in returnable glass.</p>
<p align="center"><i>Design demo · v0.1 · October 2026 · not for indexing</i></p>

---

## Watch it

https://github.com/TAK-PRAVEEN/DESIGOMILK/raw/main/docs/media/desigo-scroll.mp4

▶ **[Full scroll-through video (MP4)](docs/media/desigo-scroll.mp4)** · 🎞 **[Preview GIF](docs/media/desigo-scroll-preview.gif)**

<p align="center"><img src="docs/media/desigo-scroll-preview.gif" alt="Scrolling through the DESIGO® home page" width="860" /></p>

## Screenshots

| | |
|---|---|
| ![Hero](docs/media/desktop-01-hero.png) **01 Hero.** One bottle, almost nothing else | ![Bottle story](docs/media/desktop-02-bottle-story.png) **02 The bottle becomes the story.** Milk → forest |
| ![Journey](docs/media/desktop-03-journey.png) **03 From cow to bottle.** Seven steps on one line | ![Origin](docs/media/desktop-04-origin.png) **04 Where it begins.** Real DESIGO® photographs |
| ![Breeds](docs/media/desktop-05-breeds.png) **05 Breeds.** Natural-history plates | ![Trace](docs/media/desktop-06-trace.png) **06 Traceability.** A living map |
| ![Quality](docs/media/desktop-07-quality.png) **07 Quality.** Sixteen checks on a single card | ![Master 26](docs/media/desktop-08-master-26.png) **08 MASTER 26.** Forest canopy world |
| ![Root 14](docs/media/desktop-09-root-14.png) **ROOT 14.** Red earth world | ![Base 3](docs/media/desktop-10-base-3.png) **BASE 3.** Golden hour world |
| ![Essential](docs/media/desktop-11-essential.png) **ESSENTIAL.** Ivory gallery world | ![Heritage](docs/media/desktop-12-heritage.png) **10 Heritage.** Before there were brands, there were breeds |
| ![Technology](docs/media/desktop-13-technology.png) **11 Technology.** Tradition is the source | ![Ghee](docs/media/desktop-14-ghee.png) **12 Ghee.** Churned from the milk you know |
| ![Trace your milk](docs/media/desktop-15-trace-your-milk.png) **13 Trace your milk.** Demo lookup | ![Final](docs/media/desktop-16-final.png) **15 Know where your milk comes from** |

**Mobile (designed separately, not shrunk)**

<p>
<img src="docs/media/mobile-01-hero.png" width="200" alt="Mobile hero" />
<img src="docs/media/mobile-02-journey.png" width="200" alt="Mobile journey" />
<img src="docs/media/mobile-03-milk.png" width="200" alt="Mobile product world" />
<img src="docs/media/mobile-04-final.png" width="200" alt="Mobile final" />
</p>

---

## Animations & text effects

Every effect is caused by the user (scroll, pointer, click), is slow and physical, and switches off under
`prefers-reduced-motion`.

### Brand
| Effect | Where | How |
|---|---|---|
| **Logo stroke-draw, then fill green** | Top-left logo | Vector DESIGO® wordmark. D · three waves · S · I · G · O write themselves (480 ms each, 95 ms stagger); the arrowhead and ® fade in at 900 ms, then the mark turns DESIGO® green with a 1.07× pop at 1150 ms. No ring, no sound. Replays on hover. `src/components/DesigoLogo.tsx` |
| Nav tone switching | Header | The header reads the chapter underneath it (`data-tone`) and flips between forest and milk ink. It condenses after the hero, and a hairline scroll-progress bar runs along the top. |

### Typography
| Effect | Where |
|---|---|
| **Line-mask rise.** Each headline line slides up out of its own mask (`yPercent 110 → 0`, expo-out, 80 ms stagger) | Hero, Origin, Technology |
| **Scroll-exit.** Hero lines leave upward as the bottle takes over | Hero |
| **Editorial serif × grotesk.** Fraunces (variable, optical size + italic) for display, Inter Tight for text, JetBrains Mono for data | Everywhere |
| **Outlined giant numerals.** "26 · 14 · 3 · E" drawn as hairline outlines behind each bottle | Product worlds |
| **Ghost word.** A huge italic *desi* fades in behind the bottle as the page turns forest green | Chapter 02 |
| **Blur-in words.** ORIGIN · BREED · FEED · FARM · QUALITY · TRACE arrive from blur, then dim as the next one lands | Chapter 02 |
| **Dotted underline = pending claim.** Any statement not yet verified is visibly marked | Everywhere |
| **Arrow link-buttons.** No pills: an underline that redraws and an arrow that stretches on hover; the primary button fills from below | CTAs |

### Motion
| Effect | Where |
|---|---|
| **2.5D bottle.** Perspective tilt toward the pointer, a specular sheen that follows the light, a contact shadow that stretches the other way, and a 6.5 s float | Hero, product worlds, ghee, final CTA |
| **Bottle → story.** Pinned stage: the bottle travels to centre and turns ±25°, the background tweens milk → forest, a halo blooms, and six words orbit in sequence | Chapter 02 |
| **Horizontal journey.** Pinned horizontal track; a forest line draws itself through seven hand-drawn stations | Chapter 03 (vertical on mobile) |
| **Layered parallax.** Three photo depths react to both scroll and pointer | Origin |
| **Plate transition.** Breed plates swap with a soft blur-rise; hovering the list selects the plate | Breeds |
| **Trace pulse.** A glowing pulse travels the serpentine chain as you scroll; nodes light up as it passes, and clicking a node pins its explanation | Traceability |
| **16-pad diagram.** The test-card diagram turns slowly; hovering a parameter lights its pad | Quality |
| **Four worlds.** One pinned stage: the outgoing bottle turns away and fades up, the incoming one rises and turns in, while the environment, numeral, info and nav tone change together | The four milks |
| **Milk ribbons.** A lightweight 2D canvas of layered sine ribbons that bend toward the pointer and pause off-screen | Milk as material, final CTA |
| **Perspective grid + data lines.** CSS 3D floor that tilts with scroll; SVG dashes flow along curves | Technology |
| **Staggered journey reveal.** Trace steps cascade in with glowing dots | Trace your milk |
| **Custom cursor.** Dot and lagging ring with labelled states: ROTATE · EXPLORE · ENTER · VIEW · TRACE. Inverts on dark chapters. Touch devices keep the native cursor | Everywhere |
| **Smooth scroll.** Lenis, synced to the GSAP ticker; no scroll-jacking, so keyboard, anchors and find-in-page all work | Everywhere |

---

## Run it

```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Stack: **Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · GSAP + ScrollTrigger · Lenis**. Fonts are self-hosted
through `@fontsource-variable`. WebGL is deliberately not used yet: everything is DOM, SVG or 2D canvas, and the
viewer has a slot ready for a GLB model.

## Project structure

```
web/
  src/app/                 layout, page, global design tokens (globals.css)
  src/components/          DesigoLogo · DesigoNav · DesigoCursor · SmoothScroll · Bottle (2.5D) ·
                           Bottle360Viewer · MilkFlow · AssetSlot · JourneyIcons
  src/components/sections/ HeroStory · Journey · FarmScene · BreedExplorer · TraceMap · QualityPanel ·
                           ProductWorlds · Interludes · Technology · GheeScene · TraceYourMilk · StoryAndClose
  src/content/desigo.ts    ALL copy and product data, each claim tagged verified / pending / blocked
  src/lib/trace.ts         TraceProvider interface (demo now → live API later)
  public/desigo/           brand · products · farms · cows · 360/<variant>/ (awaiting frames)
  scripts/capture-media.js records the README screenshots and video
docs/
  website/                 information architecture · design system · wireframe · asset requests · image prompts
  design-styles/           36 design styles × a 20-phase build plan each + recommendation
  media/                   screenshots, video, GIFs used in this README
```

## Honesty rules built into the code
- **Claims carry a status.** `verified` shows normally, `pending` shows with a dotted underline, and `blocked` never renders.
  Blocked examples: "world's best", "world's first", health claims, "organic / certified A2" without a certificate.
- **Demo data is labelled.** The trace map and "Trace your milk" display *Illustrative journey · not live data*.
- **No fake 3D.** Single renders get an honest 2.5D tilt. A full 360° rotation needs the frame sequences (`Bottle360Viewer`).
- **No stock or AI photos presented as real farms, cows or people.** Missing photos show a labelled *Asset needed* slot.
- **Internal operations stay internal.** RTCOM operating detail, hardware, pricing rules and people data are not in this repository.

## What's needed next from DESIGO®
1. **360° bottle frames** for each variant: 72 transparent frames, locked camera. Spec in [`docs/website/04_ASSET_REQUESTS.md`](docs/website/04_ASSET_REQUESTS.md).
2. **Real photography**: farms, breeds, testing, plant, delivery.
3. **Generated illustrations and textures**: ready-to-use prompts in [`docs/website/05_IMAGE_GENERATION_PROMPTS.md`](docs/website/05_IMAGE_GENERATION_PROMPTS.md).
4. **Style direction**: see [`docs/design-styles/99_RECOMMENDATION.md`](docs/design-styles/99_RECOMMENDATION.md).
5. **Approval of pending claims**: names, prices, pack sizes, herb counts, breed list.

---
© DESIGO® · Bhairaj Organics Pvt. Ltd. Design demo.
