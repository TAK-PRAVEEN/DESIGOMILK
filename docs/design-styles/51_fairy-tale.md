# 51 — Fairy Tale · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 3 / 5 for the whole site, 4 / 5 as a commissioned story layer** · **Best used for:** an illustrated
tale, *The Journey of a Bottle of Milk*, told across chapter 03 (cow → bottle), a dedicated /story page, the /about
page and printed matter (delivery inserts, school visits). It must be painted by credited artists from the Phad
and Pichwai traditions, not generated.

---

## 1. Style essence

The fairy-tale style tells the brand as a storybook: illustrated scenes, a narrator's voice, a beginning and an end,
a world slightly more wonderful than daily life but recognisably true. For DESIGO® the storybook is Indian: the
painted narrative traditions of Rajasthan, where a story unrolls across cloth and is read by lamplight.

Three reference points (all used with respect and with artists' involvement):
1. **Phad painting** of Bhilwara and Shahpura, Rajasthan: long horizontal cloth scrolls that narrate the epics of
   folk deities, traditionally unrolled at night and sung by Bhopa performers in front of a lamp. The Joshi family
   is the best-known lineage. Its visual grammar: flat colour, bold dark outlines, figures in profile, scale showing
   importance, no perspective, many episodes on one cloth.
2. **Pichwai painting** of Nathdwara, Rajasthan: devotional cloth paintings with exquisite cows, lotus ponds, trees,
   seasons and festivals, fine detail and gold. Cows are central and portrayed with great tenderness.
3. **Storybook craft**: Tara Books (Chennai), whose handmade books with Indian folk and tribal artists set the
   standard for crediting and collaborating with traditional painters.

### Respect protocol (a condition of using this style)
- **Commission, credit and pay** living artists from these traditions. Every artwork carries a credit line ("Painted
  by [artist], [place], in the Phad tradition"), approved by the artist.
- **Use no deities and no sacred narratives.** Phad and Pichwai are devotional arts. The DESIGO® tale borrows the
  visual grammar and secular motifs (cows, herders, trees, lotus, wells, seasons, the village and the town), and
  is a *new* everyday story, agreed with the artists.
- **Never generate "Phad" or "Pichwai".** Generated images may be used only as internal storyboards and are replaced
  by the painted originals before anything is published. Prompts never name living artists.
- **Explain the art forms** on a short "About the paintings" page, with the artists' own words where possible.

## 2. Why it fits DESIGO® and where it fights

- **The journey ORIGIN → TRACE → TEST → CHILL → PROCESS → FILL → DELIVER is already a story in seven episodes**,
  and the Phad scroll is literally a format of episodes arranged along a cloth.
- **Cows are treated with reverence in Pichwai.** That is the exact tone DESIGO® needs for indigenous breeds:
  dignified, cared for, never a mascot.
- **It is local.** Jodhpur, Bhilwara and Nathdwara are all in Rajasthan. Commissioning these artists is a real,
  shareable story of craft, and it supports living traditions.
- **It is honest.** A painted tale is plainly an illustration, so it can show the journey warmly without pretending
  to be documentary evidence.

**Where it fights:** a storybook can feel childish or folksy beside "Apple product launch"; it can drift into
appropriation; commissioning takes 8–12 weeks; and a painted world cannot carry prices or lab data. The remedy is to
use it as a layer, with the art framed like museum pieces on milk-white space and type that stays modern.

## 3. Art direction

### Palette: natural pigments, harmonised with the brand
| Token | Hex | Use |
|---|---|---|
| `--cloth` | `#EFE3C8` | Painted-cloth ground (warmer than `--paper`) |
| `--milk` | `#F7F4EC` | Page around the art (the "gallery wall") |
| `--phad-yellow` | `#E2B13C` | Figures, fields, the sun |
| `--phad-orange` | `#D9782D` | Turbans, accents |
| `--phad-red` | `#B3202A` | = ROOT 14 base; borders, earth |
| `--phad-green` | `#1F5C45` | = MASTER 26 base; trees, grazing land |
| `--indigo` | `#2F4F7F` | Night, wells, the blue city of Jodhpur |
| `--lamp-black` | `#171918` | Outlines (= charcoal) |
| `--pichwai-night` | `#0B3B32` | Dark grounds for night episodes (= forest) |
| `--lotus` | `#D98C8C` | Lotus, dawn sky |
| `--gold` | `#C8A96B` | Gold-leaf details, rules, ghee |
| `--green` | `#1E7A68` | Links and focus ring (UI only) |

The artists' own pigments win: tokens are adjusted to match the scanned originals, not the other way round.

### Typography
- **Storyteller voice:** *Fraunces* (OFL) 400 at opsz 72, SOFT 100, WONK 1 for the narrator's lines at
  `clamp(1.5rem, 2.6vw, 2.4rem)`. It is soft and slightly old-fashioned, like a well-set storybook.
- **Episode titles:** *Rozha One* (OFL), a high-contrast Latin and Devanagari display face with a printed-poster
  feel, at `clamp(2.4rem, 6vw, 6rem)`.
- **Hindi text:** *Tiro Devanagari Hindi* (OFL). The tale is bilingual (English and Hindi), subject to an approved
  translation.
- **UI and credits:** *Inter Tight* 500, labels at .72rem, +0.18em.
- Body `1.0625rem/1.7`, 52ch.

### Texture, imagery, iconography
- Texture: high-resolution scans of the painted cloth itself (weave, pigment variation). No artificial grain.
- Imagery: the commissioned painting is the only illustration, digitised at 600 dpi and split into episode layers
  (background, figures, foreground) by the studio, with the artists' consent, for gentle parallax.
- Icons: small motifs taken from the paintings with permission (a lotus, a lamp, a bottle) at 24 px, drawn by the
  artists or traced with their approval.

### Grid
Two modes. **Gallery mode** (most pages): 12 columns, artwork framed with 5vw milk-white margins and a thin gold
hairline, caption and credit beneath. **Scroll mode** (chapter 03 and /story): a horizontal cloth, 7 episodes long,
with fixed narration at the bottom third and a band border top and bottom like a real Phad.

### Header wordmark
The black write/un-write DESIGO® loop stays unchanged on milk white. The wordmark is never painted into the tale.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Unroll | In scroll mode, the cloth translates horizontally with scroll (`scrub: 1`); a soft roller shadow (24 px gradient) sits at the right edge, as if the cloth is unrolling from a rod |
| Lamplight | The cursor carries a warm lamp glow: a 220 px radial `rgba(232,154,28,.18)` added with `soft-light`, lifting the painting under it. The painting is fully readable without it; the lamp only warms. |
| Episode settle | Figure layers drift 8–16 px against the background (parallax 0.9–1.1×) and settle over 1200 ms `cubic-bezier(.16,1,.3,1)` |
| Narration | Lines fade up by phrase (600 ms, 120 ms stagger), never letter by letter |
| Page turn | None. There is no fake paper curl. Episodes cross-fade (600 ms) in gallery mode |

**Cursor states:** default 10 px gold dot · **painting**: the 220 px lamp glow with a flame dot · **link**: 40 px
gold-hairline ring · **360**: ring `DRAG` · **text**: native caret · **disabled**: 30% ring · touch: a fixed lamp
glows on the current episode.

**Hover:** links get a hand-drawn gold underline (an SVG stroke traced from the artists' border line) drawing in
over 400 ms; arrows travel 6 px; the primary button frame draws itself (600 ms).

## 5. The hero bottle and the four variants

Inside the tale, the bottle is **painted by the artists**: flat, in profile, its cap colour clear, carried by the
delivery person in the last episode. Outside the tale, at chapter edges, the painted bottle cross-fades into the
real render ("from the story to your doorstep"), a deliberate bridge between illustration and product.

- **Real render presence:** on product pages the render floats (±8 px over 6 s, tilt ±8°) on milk white inside a
  painted border (a band of lotus or leaf motif from the commission), never placed inside a painted scene, which
  would mix photography and painting awkwardly.
- **Before 360 frames:** ±25° turn with sheen. **After:** the Bottle360Viewer inside the painted border, with drag
  and the counter `036 / 072` in Inter Tight.

| Variant | Painted world (one commissioned panel each) |
|---|---|
| **MASTER 26** | A grove in deep `--phad-green` with a lotus pond and birds, painted in the Pichwai manner. Line: "Twenty-six herbs. The fullest expression of the source." Herb count pending, and the painting never shows a counted set of herbs. |
| **ROOT 14** | Red earth, a stepwell and grazing land under a pale sky in Phad red and ochre. "Fourteen herbs, rooted in free grazing." (pending). |
| **BASE 3** | A golden field at evening under a large plain sun disc (no sun-deity face). "The everyday foundation." |
| **ESSENTIAL** | A quiet courtyard with one tree, painted on mostly bare cloth. "Simple, balanced, honest." |

**Info panel** (outside the painting, on milk): `DESIGO® V1+` · the name in Rozha One · price and size with the dotted
underline and "pending approval" tooltip · descriptors · `RESERVE ———→`.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk white, modern. The real bottle with a small painted vignette beside it (a cow under a khejri tree), framed like a museum piece with credit. Headline "MILK / FROM THE / SOURCE." in Fraunces. |
| 02 | Bottle becomes the story | The six words orbit the bottle; each word reveals a small painted detail (a hand at a cow, a field, a test card) as an inset. Milk → forest. |
| 03 | Cow → bottle | **Signature: the unrolling scroll.** Seven episodes on one horizontal cloth: dawn grazing (ORIGIN) · the collection recorded (TRACE) · the paper test (TEST) · cooling under stars (CHILL) · the plant (PROCESS) · glass bottles filled (FILL) · early-morning doorstep in the blue city (DELIVER), ending with the empty glass going back. Narration uses only the public lines in `journey`. |
| 04 | Where it begins | Real farm photography, not painting: the tale hands over to reality. A small painted detail sits beside each photo as a caption ornament. |
| 05 | Breeds | Six cow portraits painted in the Pichwai manner, each in a lotus border, with name, region and "Breed list client-stated · approval pending". Each artwork is checked against the real breed traits. |
| 06 | Traceability | Forest. The trace path as a painted road with eight small painted stations; nodes open plain-text panels. "Illustrative journey — not live data". |
| 07 | Quality | Not painted. A clean lab layout with one painted test-card vignette; readouts "— pending lab confirmation". |
| 08 | Four milks | Four painted panels (section 5), each beside the real render on milk. |
| 09 | Milk as material | The milk ribbon drawn as a painted river of milk (a Phad-style wave pattern), animated gently. |
| 10 | Heritage | The "About the paintings" moment: the artists, their towns, their tradition, a short video of painting in progress if they agree. |
| 11 | Technology | Charcoal, modern; the seven verbs each carry a tiny painted icon from the tale. |
| 12 | Ghee | Gold. A painted bilona churning episode (commissioned separately); three grades and pending prices outside the painting. |
| 13 | Trace your milk | Charcoal, modern input; the result appears as the matching painted episodes in a mini scroll. `DEMO` always visible. |
| 14 | Story | Verified milestones on a painted horizontal border strip; text on milk. |
| 15 | Final CTA | The last episode: the bottle at a doorstep at dawn. Then the real bottle returns. "Know where your milk comes from." |

**Inner pages:** /milk shows four painted panels with renders, leading by View Transition to /milk/[variant]
(painted world, bordered 360 viewer, plain facts table) · /origin and /trace follow chapters 04 and 06 · /about is
the artists and the team · /ghee is the bilona episode · /reserve is a plain form in one painted border ·
**/story** is the full bilingual scroll with captioned human narration.

## 7. Component variants

`ScrollCloth` (horizontal unroll with roller shadow) · `LampCursor` · `EpisodeLayers` (parallax from split artwork)
· `NarrationLine` (bilingual) · `GalleryFrame` (art + credit) · `ArtistCredit` (required prop on every artwork) ·
`PaintedBorder` (frames the 360 viewer) · `BreedPortraitPainted` · `TraceMap.paintedRoad` · `MilkRiver` (MilkFlow
variant) · `PaintedIcon` · `StoryAudio` (captions) · `PendingValue`.

## 8. 20-phase build plan

Commissioning runs in parallel: brief and artist selection (2 weeks), sketches approved by DESIGO® and the artists
(3 weeks), painting (6–8 weeks), scanning and layer separation (1 week).

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Pigment palette, storybook type | Tokens, bilingual specimen | Devanagari renders correctly; fonts ≤ 200 KB | Artist brief signed | 3 |
| 2 | Grid & shell | Gallery and scroll modes | Shell, `LampCursor`, `GalleryFrame` | Credit visible on every artwork | — | 3 |
| 3 | Hero | Render + vignette | Hero | LCP ≤ 2.2 s | Vignette scan | 2 |
| 4 | Bottle → story | Painted insets | Pinned scene | Reduced motion = static list | Detail scans | 3 |
| 5 | Cow → bottle | Unrolling scroll | `ScrollCloth`, 7 episodes | Copy from `journey` only; vertical on mobile | Main commission | 6 |
| 6 | Origin / farm | Photo + ornament | Scene | Real photos only | Farm photos | 2 |
| 7 | Breeds | Painted portraits | 6 portraits | Breed traits checked by a vet or breeder; status visible | Breed commission | 3 |
| 8 | Trace map | Painted road | `TraceMap.paintedRoad` | "Not live data" visible | Road panel | 4 |
| 9 | Quality | Lab + vignette | Scene | No unconfirmed values | — | 2 |
| 10 | Four worlds + 360 | Painted panels | 4 scenes, bordered viewer | Counter correct; art credits | 4 panels, 360 frames | 6 |
| 11 | Heritage | About the paintings | Artists' page | Artists approve their text | Interviews | 3 |
| 12 | Technology | Painted icons | Scene | Public vocabulary only | Icon set | 2 |
| 13 | Ghee | Bilona episode | Scene | Prices pending-styled | Ghee commission | 2 |
| 14 | Trace-your-milk | Mini scroll result | Demo | DEMO visible; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | Pages | View Transition fallback | 360 frames | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` | Photos | 4 |
| 17 | /about, /ghee, /reserve, /story | Remaining pages | 4 templates, audio | Narration captioned; translation approved | Voice recording | 5 |
| 18 | Mobile | Vertical tale | Episodes stacked vertically | Each episode readable at 360 px | — | 3 |
| 19 | A11y + reduced motion | — | Alt text per episode, static mode | WCAG 2.2 AA; full narrative available as text | — | 3 |
| 20 | Perf, QA, handover | Ship | Image pipeline, QA | Lighthouse ≥ 92; artworks ≤ 400 KB per viewport | All | 4 |

**Total:** about 67 development days, plus 12–14 weeks of commissioning that start before phase 5.

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** budget and contracts for the artists (fee, credit, usage licence, rights to digitise and to
split layers); an approved story script (English and Hindi); farm photographs; 360 frames; consent for any
"artist at work" video.

**Images to generate:** storyboard placeholders only, never published; plus two textures that may ship.
Save in `web/public/desigo/styles/fairy-tale/_storyboard/` (not deployed) and `.../textures/`. Full spec in section 12.7.
| # | File | Size | Prompt |
|---|---|---|---|
| FT1 | `_storyboard/episode-01-dawn.png` | 3200×1200 | Storyboard sketch for an illustrated folk tale: dawn at a small Rajasthani farm, Indian zebu cows with humps grazing calmly under a khejri tree, a herder standing nearby, flat colour, bold outlines, side view, no perspective, respectful, placeholder quality, no deities, no text, no watermark, no logo, no letters |
| FT2 | `_storyboard/episode-07-doorstep.png` | 3200×1200 | Storyboard sketch: early morning in a blue-painted old town lane, a delivery person placing a glass milk bottle at a doorstep, flat colour, bold outlines, side view, calm, no deities, no text, no watermark, no logo, no letters |
| FT3 | `_storyboard/milk-river.png` | 3200×1200 | Storyboard sketch of a stylised river of milk drawn with repeated wave patterns in cream and indigo, flat, decorative, no text, no watermark, no logo, no letters |
| FT4 | `textures/cotton-cloth.png` | 2400×2400, seamless | Seamless texture of hand-woven cotton cloth primed for painting, warm cream #EFE3C8, visible weave, flat even scan lighting, no text, no watermark, no logo, no letters |
| FT5 | `textures/pigment-wash.png` | 2400×2400, seamless | Seamless subtle natural-pigment wash on cotton, faint ochre and cream variation, flat scan, no shapes, no text, no watermark, no logo, no letters |

## 10. Performance, accessibility and mobile

- Pipeline: 600 dpi masters kept private; AVIF derivatives at 1x/2x; layers lazy-loaded one episode ahead.
- Accessibility: descriptive alt text per episode, narration as real text, a plain reading view, captioned audio;
  the lamp only warms content; reduced motion turns the unroll into a vertical gallery.
- Mobile: vertical full-width episodes with narration beneath; the fixed lamp glows on the episode in view.

## 11. Risks and premium guardrails

**Risks:** cultural appropriation; depicting sacred figures in commerce; a childish tone; generated pastiche of a
living tradition; long lead time; cows drawn inaccurately.

**Premium guardrails**
1. Only commissioned, credited, fairly paid artwork is published. Generated images are storyboards only.
2. No deities, temple imagery or sacred narratives. The tale is everyday and secular, agreed with the artists.
3. Cows are portrayed with reverence: accurate zebu anatomy, calm poses, never speaking, never comic.
4. The art is framed on milk-white space like museum pieces; type and UI stay modern.
5. Narration uses only verified public lines: no health claims, no "best", no unverified numbers inside the tale.
6. Prices, codes and pending values live outside the paintings.
7. The artists approve how their tradition is described, and the "About the paintings" page exists before launch.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: respect protocol, pigment palette and type present; missing colour roles/states, body + mono faces, radius/shadow, component states, motion tokens, negatives, and hero-portrait, variant-panel and second-texture-set prompts. Added all (Inter Tight body, JetBrains Mono IDs); all generated images stay storyboard-only except two textures; folder aligned to `styles/fairy-tale/`. Fonts OFL; no claim violations.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#2F4F7F` | Jodhpur indigo: primary CTA, night episodes in UI, active nav | 7.5:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on indigo | 7.5:1 on primary |
| Secondary | `--c-secondary` | `#E2B13C` | Phad yellow: highlight fills, sun, selected episode marker (ink text on it 8.2:1) | 1.8:1 on bg |
| Accent | `--c-accent` | `#1E7A68` | links and focus ring (UI only, never inside the painting) | 4.7:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | milk 'gallery wall' around the art |  |
| Surface | `--c-surface` | `#EFE3C8` | painted-cloth ground for narration bands and panels | text on surface 12.8:1 |
| Text | `--c-text` | `#1E211F` | body, narration | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5D5042` | credits, captions | 7.1:1 on bg |
| Line | `--c-line` | `#C8A96B` | gold hairline frame round every artwork; `rgba(30,33,31,.14)` UI dividers | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#171918` | verified milestone tick · pending text + dotted underline (outside paintings only) · lamp-black DEMO badge, milk label | ok 4.7:1 · pending 5.7:1 · demo 16.1:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--phad-orange` | `#D9782D` | turbans, accents inside art tokens | |
| Style extra | `--phad-red` | `#B3202A` | = ROOT 14 base; borders, earth | |
| Style extra | `--phad-green` | `#1F5C45` | = MASTER 26 base; trees, grazing land | |
| Style extra | `--lamp-black` | `#171918` | outlines (= charcoal) | |
| Style extra | `--pichwai-night` | `#0B3B32` | dark grounds for night episodes (= forest) | |
| Style extra | `--lotus` | `#D98C8C` | lotus, dawn sky (decorative only) | |
| Style extra | `--gold` | `#C8A96B` | gold-leaf details, rules, ghee | |
| Style extra | `--lamp` | `rgba(232,154,28,.18)` | 220 px lamp glow, `soft-light` | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | commissioned grove panel: base = trees and grazing land, deep = night shadows, light = info ground; never a counted set of herbs |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red-earth stepwell panel: base red + ochre, deep for outlines of strata, light ground for the facts sheet |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | golden-field evening panel: base amber field, deep for the plain sun-disc ring (no sun-deity face), light ground |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | quiet courtyard panel on mostly bare cloth: base sand, deep outlines, light ground |

**Dark-chapter inversion:** night episodes and dark chapters (06, 11, 13) use `--c-bg` → `#0B3B32` (pichwai night), text → `#F7F4EC`, muted → `#D8CDB6`, line stays gold, primary → `#E2B13C` fill with ink label, accent → `#7FE0B8`; the painted art keeps its own pigments; the logo turns white and is never painted into the tale.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Rozha One (episode titles, Latin + Devanagari) | `@fontsource/rozha-one` | 400 | clamp(2.4rem, 6vw, 6rem) | 1.0 | 0 | Title Case |
| Headline H1–H2 | Fraunces (storyteller voice) | `@fontsource-variable/fraunces` | 400 · opsz 72 · SOFT 100 · WONK 1 | narration clamp(1.5rem, 2.6vw, 2.4rem) · H2 clamp(1.4rem, 2.2vw, 2rem) | 1.3 | −0.01em | sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | 1.0625rem, measure 52ch | 1.7 | 0 | sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 500 | .72rem (credits, labels) | 1.3 | +0.18em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 · `tnum` | .85rem; 1.75rem trace input | 1.3 | 0 | as data |
| Devanagari (optional) | Tiro Devanagari Hindi (narration) · Rozha One (titles) | `@fontsource/tiro-devanagari-hindi` | 400 / 400 italic | narration +6% | 1.5 | 0 | — |

Licence: Rozha One, Fraunces, Inter Tight, JetBrains Mono and Tiro Devanagari Hindi are SIL OFL 1.1 via @fontsource. Pairing: Rozha One gives a printed-poster title in both scripts, Fraunces SOFT/WONK is the narrator, Inter Tight keeps UI and credits modern beside the paintings.

### 12.3 Layout & surfaces
- **Grid:** gallery mode: 12 columns, 5vw milk margins, 24 px gutters, max 1440 px, art framed with a gold hairline and credit beneath; scroll mode (ch. 03, /story): a horizontal cloth 7 episodes long, narration fixed in the bottom third, painted band border top and bottom
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; artwork margin ≥ 48 px of milk on every side
- **Radius scale:** sm 0 · md 0 · lg 0 (frames are square like museum mounts); pill only for the cursor
- **Border style:** 1 px `#C8A96B` hairline round artworks with 12 px milk mat; painted band borders (lotus/leaf motif from the commission) frame the 360 viewer and /reserve form
- **Shadow / elevation:** artworks flat (no drop shadow); roller shadow 24 px gradient at the scroll's right edge; bottle: contact ellipse 8 px blur at 30% + ambient 60 px at 8%
- **Texture / overlay:** high-resolution scans of the painted cloth only (no artificial grain); lamp glow `soft-light` 220 px under the cursor

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: underlined label + travelling arrow on an indigo `#2F4F7F` plate, Inter Tight 500 caps milk, 52 px high (44 px sm), padding 0 28 px, radius 0. Hover: 1 px gold frame draws itself (600 ms), arrow +6 px, magnetic ≤ 6 px · focus-visible: 2 px accent ring offset 3 px · active: plate `#253F66` · disabled: 40% · loading: a small lamp flame dot breathes beside the label (1.2 s). A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: text label + arrow with a hand-drawn gold underline (SVG stroke traced from the artists' border line, with permission); no plate. Hover: underline draws in (400 ms) · focus-visible: accent ring · active: underline 2 px · disabled: muted · loading: underline redraws in a loop.
- **Text / arrow link**: accent-green text, hand-drawn gold underline that draws in over 400 ms on hover, arrow +6 px · focus-visible: accent ring · active: ink · disabled: muted, no underline · loading: n/a.
- **Icon button** (incl. menu): 40 px square (44 px hit), 24 px painted motif icon (lotus, lamp, bottle) drawn by or approved by the artists, or a 1.5 px line icon for UI (menu, close, audio). Hover: gold hairline circle · focus-visible: accent ring · active: 0.94 scale · disabled: 30% · loading: lamp flicker-free breathing. `aria-label` required; audio button labels 'Play narration'.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px milk bar, modern; the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style); never painted into the tale. Six links in Inter Tight caps + RESERVE indigo primary. A small 'Story' link to /story. Mobile: 56 px bar, menu = full-screen milk sheet with Fraunces links and one painted border band at the top; Esc closes.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 10 px gold dot · hover: 40 px gold-hairline ring · ROTATE: ring with `DRAG` on the bordered 360 viewer · EXPLORE: the 220 px lamp glow with a flame dot over paintings (warms only; art is readable without it) · ENTER: ring with `UNROLL` at the start of the scroll / /story · VIEW: ring with `VIEW` on gallery frames (opens full-size with credit) · TRACE: ring with a tiny painted-lamp mark on painted-road stations. Disabled: 30% ring. Touch: no cursor; a fixed lamp glows on the episode in view.
- **Card / panel / info block**: `GalleryFrame`: artwork + 12 px milk mat + gold hairline + credit line beneath (`Painted by [artist], [place], in the Phad tradition`, required prop). Text panels: cloth `#EFE3C8` fill, radius 0, padding 32 px. Hover (if linked): mat widens 4 px · focus-visible: accent ring · loading: low-res scan blur-up (LQIP).
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Inter Tight 500 .66rem caps. Pending verification: cloth fill, `--c-pending` text + dotted underline `PENDING APPROVAL` (always outside the painting); DEMO · not live data: lamp-black fill, milk `DEMO · NOT LIVE DATA`, always visible on the trace demo; `ILLUSTRATION` tag on every painted journey episode; artist-credit tag is mandatory.
- **Input + form field** (Trace-your-milk bottle ID): modern on charcoal: JetBrains Mono 1.75rem, 64 px high, milk 1 px frame, label above, prefilled `DSG-BTL-000001-3 (sample format)`. Default · hover: frame gold · focus-visible: 2 px accent ring · active: caret · disabled: 40% · loading: lamp dot walks along the frame (1.2 s) · result: the matching painted episodes appear as a mini scroll with plain-text lines (`aria-live=polite`) · error: pending-earth text.
- **Divider / ornament**: a strip of the commissioned painted border band (lotus or leaf), 24–40 px high, credited; or a 1 px gold hairline. Never generated motifs.
- **Section header** (chapter number + title pattern): episode number in Rozha One numerals (`०३ / 03` bilingual) + Inter Tight caps label + title in Rozha One; narration line in Fraunces beneath, fading up by phrase.
- **Product info block** (variant name, code, price-pending, size, descriptors): outside the painting, on milk: code line in mono, name in Rozha One, Fraunces line; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; `RESERVE ———→`. Prices, codes and pending values never sit inside a painting.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the real render on milk inside a painted border band (commissioned), never placed inside a painted scene; contact shadow on milk. Float ±8 px / 6 s, tilt ±8°. A painted bottle (by the artists) cross-fades into the real render at chapter edges. Before 360 frames: ±25° turn with sheen; after: Bottle360Viewer inside the border, counter `036 / 072` in Inter Tight.
- **Trace node / timeline step**: a painted road with eight small painted stations (commissioned); each station is a 44 px button hotspot with a gold ring. Default: ring · hover: lamp glow warms the station · focus-visible: accent ring · active: plain-text panel opens on cloth · disabled/not reached: 50% · loading: ring breathes. "Illustrative journey — not live data" visible on the panel and the map.

### 12.5 Iconography & illustration
Icons: small motifs from the commissioned paintings (lotus, lamp, bottle) at 24 px, drawn by the artists or traced with approval; UI glyphs (menu, close, audio, arrows) as 1.5 px line icons. Illustration: only commissioned, credited Phad/Pichwai-grammar paintings are published, digitised at 600 dpi and split into layers with consent; no deities, no sacred narratives. Photo treatment: real farm photography where the tale hands over to reality (ch. 04), warm grade, framed on milk like the paintings.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | episode layers settle (8–16 px parallax) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | gallery cross-fades |
| `--dur-micro` | `240ms` | ring, arrow travel |
| `--dur-reveal` | `600ms` | narration phrase fade (120 ms stagger) |
| `--dur-scene` | `1200ms` | episode settle |
| `--draw` | `400ms` | hand-drawn gold underline |
| `--unroll` | `scrub: 1` | horizontal cloth translates with scroll |

Signature: the unrolling scroll with a roller shadow and the lamp-light cursor. No page curl, no letter-by-letter text, no animated faces. Reduced motion: the scroll becomes a vertical gallery, no parallax, lamp off (art fully lit), narration static; full narrative available as text.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *storyboard placeholder in a flat folk storybook grammar, flat colour, bold dark outlines, side view, no perspective, natural pigment palette of cloth cream #EFE3C8, yellow #E2B13C, red #B3202A, green #1F5C45 and indigo #2F4F7F, respectful, secular, no deities, no text, no watermark, no logo, no letters*

| # | File path (web/public/desigo/styles/fairy-tale/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| FT-H1 | `web/public/desigo/styles/fairy-tale/_storyboard/hero-vignette.png` | 3200×2000 (16:10) | no | Storyboard sketch of an Indian zebu cow with hump and dewlap resting calmly under a khejri tree on a small Rajasthani farm at dawn, wide empty sky | base negatives + deities, temple, halo, sacred symbols, named artist style, cow with human expression | Ch. 01 hero vignette (storyboard only; replaced by commission) |
| FT-H2 | `web/public/desigo/styles/fairy-tale/_storyboard/hero-vignette-portrait.png` | 1400×2400 (7:12) | no | Vertical storyboard sketch of a zebu cow under a khejri tree with a small herder figure in profile, dawn sky above, calm | base negatives + deities, temple, halo, named artist style | Ch. 01 mobile (storyboard only) |
| FT-V1 | `web/public/desigo/styles/fairy-tale/_storyboard/world-master-grove.png` | 3200×2000 + 1400×2400 portrait | no | Storyboard sketch of a deep green #1F5C45 grove with a lotus pond and birds, zebu cows grazing at the edge, no counted herbs | base negatives + deities, Krishna, temple, numbered plants | MASTER 26 panel brief |
| FT-V2 | `web/public/desigo/styles/fairy-tale/_storyboard/world-root-stepwell.png` | 3200×2000 + 1400×2400 portrait | no | Storyboard sketch of red earth #B3202A and ochre land with a stepwell and grazing land under a pale sky | base negatives + deities, shrine, people bathing | ROOT 14 panel brief |
| FT-V3 | `web/public/desigo/styles/fairy-tale/_storyboard/world-base-field.png` | 3200×2000 + 1400×2400 portrait | no | Storyboard sketch of a golden amber #E89A1C field at evening under a large plain sun disc, a few zebu cows walking home | base negatives + sun face, sun deity, rays with faces | BASE 3 panel brief |
| FT-V4 | `web/public/desigo/styles/fairy-tale/_storyboard/world-essential-courtyard.png` | 3200×2000 + 1400×2400 portrait | no | Storyboard sketch of a quiet courtyard with one tree painted on mostly bare cream cloth, sand #CDB89A walls, very little detail | base negatives + shrine, idols, crowds | ESSENTIAL panel brief |
| FT-J1 | `web/public/desigo/styles/fairy-tale/_storyboard/episode-01-dawn.png` | 3200×1200 (8:3) | no | Storyboard sketch for an illustrated folk tale: dawn at a small Rajasthani farm, Indian zebu cows with humps grazing calmly under a khejri tree, a herder standing nearby | base negatives + deities, temple, named artist style | Ch. 03 scroll episode 1 (storyboard) |
| FT-J2 | `web/public/desigo/styles/fairy-tale/_storyboard/episode-07-doorstep.png` | 3200×1200 (8:3) | no | Storyboard sketch: early morning in a blue-painted old town lane, a delivery person placing a milk bottle at a doorstep, calm | base negatives + detailed bottle label, brand marks, deities | Ch. 03 episode 7 / ch. 15 (storyboard) |
| FT-J3 | `web/public/desigo/styles/fairy-tale/_storyboard/milk-river.png` | 3200×1200 (8:3) | no | Storyboard sketch of a stylised river of milk drawn with repeated wave patterns in cream and indigo, flat, decorative | base negatives + deities, sacred river iconography | Ch. 09 `MilkRiver` brief |
| FT-T1 | `web/public/desigo/styles/fairy-tale/textures/cotton-cloth.png` | 2400×2400, seamless | no | Seamless texture of hand-woven cotton cloth primed for painting, warm cream #EFE3C8, visible weave, flat even scan lighting | base negatives + painted figures, stains, folds | Narration bands, panels (may ship) |
| FT-T2 | `web/public/desigo/styles/fairy-tale/textures/pigment-wash.png` | 2400×2400, seamless | no | Seamless subtle natural-pigment wash on cotton, faint ochre and cream variation, flat scan, no shapes | base negatives + figures, motifs, stains | Ground behind text panels (may ship) |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Files under `_storyboard/` are never deployed and are replaced by the commissioned, credited paintings before publication; only the two `textures/` files may ship. Prompts never name living artists or the words Phad/Pichwai.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/51_fairy-tale.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/fairy-tale/
