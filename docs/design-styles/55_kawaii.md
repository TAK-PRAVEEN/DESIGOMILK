# 55 — Kawaii · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 1.5 / 5 for the main site, 3 / 5 for a children's explainer** · **Best used for:** a separate
family and school explainer, `/kids` ("How your milk travels"), printed school-visit sheets, a sticker set for
delivery crates, and a bottle-return reminder card for families. The main site never uses it.

---

## 1. Style essence

Kawaii (Japanese for "cute") is a design culture of round, soft, simplified forms: big heads, small bodies, dot eyes,
tiny mouths, rosy cheeks, pastel colours, thick soft outlines and gentle motion such as blinks and small wiggles. It
creates affection and approachability, and in Japan it is used everywhere from banks to public-safety signs.

Three reference points:
1. **Sanrio and Japanese public mascots** (*yuru-chara* such as Kumamon): cuteness used to make institutions
   friendly, with very simple, consistent character rules.
2. **Japanese packaging and convenience-store design**: small faces on everyday objects, pastel systems, sticker
   culture.
3. **Indian children's picture books from Pratham Books / StoryWeaver**: warm, local and inclusive illustration for
   Indian children. This sets the local tone so the result does not look imported.

## 2. Why it fits DESIGO® and where it fights

- **Families are part of the audience.** Doorstep glass bottles, returning empties and "where does milk come from?"
  are natural questions for children, and a gentle explainer can answer them with no claims at all.
- **The bottle can carry a character.** A drawn, simplified bottle with a cap-colour hat is friendly and returns the
  idea of reuse ("I come back to be filled again").
- **Stickers and school sheets** are cheap, useful and memorable.

**Where it fights, and the rules that follow:**
- **Premium positioning.** Kawaii on the main site would undo "Apple launch × luxury editorial". It stays on its
  own URL with its own nav, linked discreetly from /about.
- **Cows must never be mocked.** For many Indians the cow is sacred, and for DESIGO® the indigenous breeds are the
  source of value. Cows are therefore drawn in a *gentle* mode (rounded line, correct zebu anatomy, calm eyes) and
  never as chibi, never blushing, never speaking, never dressed up and never the punchline.
- **Advertising to children is regulated.** In India the ASCI Code (including its guidelines on food and beverage
  advertising to children) and FSSAI's advertising and claims rules apply, and the DPDP Act 2023 requires verifiable
  parental consent before processing a child's data. So: no health or growth claims ("makes you strong" or "helps you
  grow" are banned), no pester-power ("ask your parents to buy"), no prices on child-facing pages, and no data
  collection from children.

## 3. Art direction

### Palette: pastel versions of the brand, warm outline
| Token | Hex | Use |
|---|---|---|
| `--milk` | `#F7F4EC` | Page |
| `--sage` | `#D9E8DF` | MASTER 26 light; meadows |
| `--mint` | `#CDEBDD` | Pastel DESIGO green; buttons |
| `--blush` | `#F3D9D6` | ROOT 14 light; hills |
| `--butter` | `#F8E4C2` | BASE 3 light; sun |
| `--ivory` | `#F4EDE2` | ESSENTIAL light; clouds |
| `--sky` | `#D6E4F0` | Jodhpur blue, pastel; sky and houses |
| `--outline` | `#3A2F2A` | 2.5 px soft outline (warm, never black) |
| `--cheek` | `#F2A7A0` | Cheeks, on bottle characters only |
| `--forest` | `#0B3B32` | Headings |
| `--ink` | `#1E211F` | Body text |
| `--green` | `#1E7A68` | Links, focus ring |
| Caps | `#1F5C45` · `#B3202A` · `#E89A1C` · `#CDB89A` | Bottle-character hats, at full strength |

### Typography
- **Display:** *Baloo 2* (OFL) 600–800, rounded, with Latin and Devanagari in one family, ideal for a bilingual
  explainer.
- **Body:** *Nunito* (OFL) 500, 18 px minimum for young readers, line-height 1.6, measure 44ch.
- **Grown-up notes** (for parents and teachers): *Inter Tight* 400, 15 px, in a clearly separate "For grown-ups" box.
- The DESIGO® wordmark appears in its real form, small, and is never made cute.

### Characters and imagery
- **The bottle character** (working name pending client approval): a drawn, simplified returnable bottle with two dot
  eyes, a small smile, cheeks and a cap-colour "hat". It is an illustration only: **the real product render never
  gets a face**.
- **Variant bottles** differ only visually (hat colour and one small prop: a leaf, a root, a sun, a plain ribbon).
  They have no personalities that imply one is stronger, healthier or better.
- **Cows in gentle mode:** an Indian zebu with hump, dewlap and long ears, drawn with the same soft line but at
  natural proportions, calm, grazing or resting. They do not blink on cue or wiggle.
- **People:** a farmer, a tester, a driver and a family, drawn inclusively and respectfully, with no caricature.
- **Icons:** rounded 2.5 px outline stickers with a 6 px white sticker border.

### Grid
A single-column story on mobile and a 12-column grid on desktop with large illustrations. Tap targets are at least
56 px. Radius 28 px on cards and stickers: this explainer is the one place in the brand where rounded cards are
correct.

### Header wordmark
The black write/un-write DESIGO® loop stays as is in the /kids header, small, beside the page title "How your milk
travels". It is never replaced by the character.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Blink | Bottle characters blink at random every 4–7 s (120 ms close, 80 ms open) |
| Wiggle | On tap, a bottle character rotates ±3° twice (500 ms total, `ease-in-out`) |
| Soft pop (exception) | Stickers enter with a gentle spring, max 3% overshoot (`cubic-bezier(.34,1.3,.64,1)`, 500 ms). This is an explicit exception to the brand's no-overshoot rule, limited to /kids |
| Scene move | Scenes slide horizontally like picture-book spreads (700 ms `--ease-inout`), with buttons rather than scroll-jacking |
| Milk line | A soft dotted path draws between scenes (1200 ms) |
| Cows | No interaction animation: cows only breathe (±1% over 6 s) or graze in a slow 3-frame loop |

**Cursor states** (desktop, mainly for teachers on classroom screens): default is the native pointer, enlarged
(clarity matters more than style here) · **link and button**: native hand plus a mint hover halo · **360**: a
rounded `↻ Turn me` label beside the pointer · **text**: native caret · **disabled**: 40% opacity. On touch, every
interaction is a tap.

**Hover and press:** buttons are mint pills with an outline; on press they move down 2 px and the shadow shrinks
(120 ms). Every interactive element has a visible 3 px `--green` focus ring.

## 5. The hero bottle and the four variants

On /kids, the **drawn bottle character** is the guide through the story. At the end, a clear bridge shows the real
render: "This is the real bottle. It comes back to be washed and filled again." The real render floats as on the
main site (±8 px over 6 s) on milk, with no face, hat or cheeks.

- **Before 360 frames:** the real bottle tilts ±25° when dragged, with the label "Turn the bottle around".
  (Never "spin the bottle", which is a party game.)
- **After 360 frames:** children can drag to turn the real bottle; the counter is hidden and replaced by a small
  circular progress ring.

| Variant | Kawaii world (drawn) |
|---|---|
| **MASTER 26** | A sage meadow with round trees; the character wears a deep green hat with a small leaf. Caption: "My hat is green." (no herb numbers on child pages) |
| **ROOT 14** | Blush hills with drawn roots below the ground; red hat with a tiny root curl. "My hat is red." |
| **BASE 3** | A butter-yellow sun over fields; amber hat with a little sun. "My hat is amber." |
| **ESSENTIAL** | An ivory cloud room; ivory hat with a plain ribbon. "My hat is ivory." |

These worlds teach colour-matching (find the bottle with the red hat), not product differences. Product details,
herbs and prices stay on the main site for grown-ups.

## 6. Page-by-page treatment

The main site is not restyled. The table shows the main-site use (almost none) and the matching scene in /kids.

| # | Chapter | Main site | /kids explainer scene |
|---|---|---|---|
| 01 | Hero | Not used | "Hello! I am a milk bottle. Shall we find out where my milk comes from?" Character, big Start button. |
| 02 | Bottle becomes the story | Not used | Six round stickers around the bottle: Where? Which cows? What do they eat? Which farm? Is it checked? Can we trace it? |
| 03 | Cow → bottle | Not used | **The core journey**, seven picture-book spreads: Cow · Farm · Milk · Test · Chill · Plant · Bottle, each with one sentence adapted from `journey` for children. |
| 04 | Where it begins | Not used | A drawn farm at dawn; a "For grown-ups" box links to real farm photos on /origin. |
| 05 | Breeds | Not used | Six gentle-mode cow drawings with breed names and home regions, and a "Did you know? India has many indigenous cow breeds" line. Breed list marked "to be confirmed" in the grown-ups box until approved. |
| 06 | Traceability | Not used | A board-game path from farm to home; children tap each square. Grown-ups box: "This is a picture of the journey, not live data." |
| 07 | Quality | Not used | "The milk is checked with a paper test card." A drawn card; no results and no numbers. |
| 08 | Four milks | Not used | The four hats colour game (section 5). |
| 09 | Milk as material | Not used | A gentle pour animation: a milk ribbon becomes a dotted path to the next scene. |
| 10 | Heritage | Not used | A drawn grandmother churning with a bilona: "Long ago and today, people make ghee by churning." |
| 11 | Technology | Not used | "Every bottle has its own code, like a name tag." A drawn QR on the bottle. |
| 12 | Ghee | Not used | Covered in scene 10; no products or prices. |
| 13 | Trace your milk | Not used | "Ask a grown-up to scan the code on the bottle." Links to the main /trace for adults; no input on /kids. |
| 14 | Story | Not used | Not shown to children. |
| 15 | Final CTA | Not used | "When I am empty, I go back to be washed and filled again!" A bottle-return colouring sheet (PDF) to download. |

**Inner pages:** /milk, /milk/[variant], /origin, /trace, /technology, /about, /ghee and /reserve are untouched.
/about carries a discreet "For families and schools" link to /kids. /kids has two children: /kids/teachers (lesson
notes, printable sheets, contact for school visits pending approval) and /kids/stickers (printable set).

## 7. Component variants

`BottleCharacter` (blink, wiggle, hat colour; illustration only) · `GentleCow` (breathing only) · `PictureSpread`
(button-driven scenes) · `StickerButton` · `GrownUpsBox` (adult notes, links to the real site) · `ColourGame` (four
hats) · `BoardPath` (TraceMap for kids) · `PrintableSheet` (PDF links) · `RealBottleBridge` (the faceless render with
"Turn the bottle around") · `KidsNav` (Back · Next · Home, 56 px).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Pastel palette, Baloo/Nunito | Tokens, bilingual specimen | Body ≥ 18 px; text ≥ 7:1 on pastels | Wordmark vector | 2 |
| 2 | Grid & shell | /kids shell, nav, focus | `KidsNav`, layout | 56 px targets; no third-party trackers | — | 2 |
| 3 | Hero | Character intro | `BottleCharacter` | Character sheet approved by DESIGO® | Character design | 3 |
| 4 | Bottle → story | Question stickers | Scene | Reduced motion = static stickers | — | 1 |
| 5 | Cow → bottle | Seven spreads | `PictureSpread` × 7 | Copy reviewed by a teacher and legal; no claims | Illustrations | 5 |
| 6 | Origin / farm | Farm scene | Scene + grown-ups box | Links to real photos only | — | 1 |
| 7 | Breeds | Gentle cows | `GentleCow` × 6 | Reviewed for respect and anatomy | Cow drawings | 3 |
| 8 | Trace map | Board path | `BoardPath` | "Not live data" in grown-ups box | — | 2 |
| 9 | Quality | Test card | Scene | No values at all | — | 1 |
| 10 | Four worlds + 360 | Hat game, real bottle | `ColourGame`, `RealBottleBridge` | Real render has no face; 360 works by touch | 360 frames | 4 |
| 11 | Heritage | Bilona scene | Scene | Respectful depiction | — | 1 |
| 12 | Technology | QR name tag | Scene | Public vocabulary | — | 1 |
| 13 | Ghee | (merged into 11) | — | No products for children | — | 0 |
| 14 | Trace-your-milk | Grown-up hand-off | Link card | No input fields on /kids | — | 1 |
| 15 | /milk, /milk/[variant] | Untouched | Link from /about | Main pages unchanged | — | 0 |
| 16 | /kids/teachers | Lesson notes | Page + printable PDFs | Teacher-reviewed | Lesson plan | 3 |
| 17 | /kids/stickers, colouring | Printables | PDFs, sticker sheet | Print-ready (CMYK, bleed) | Print specs | 2 |
| 18 | Mobile and tablet | Classroom tablets | Touch pass | Works offline once loaded (PWA cache) | — | 2 |
| 19 | A11y + reduced motion | — | Narration option, captions | WCAG 2.2 AA; read-aloud text; no flashing | Voice recording | 3 |
| 20 | Compliance, QA, handover | Ship | ASCI/FSSAI review, DPDP check | Zero data collection; no prices or claims; Lighthouse ≥ 95 | Legal | 3 |

**Total:** about 40 days for /kids and printables (no main-site rebuild).

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** approval of the character and its name; legal review of all child-facing copy; a teacher
or educator reviewer; 360 frames; approval of the school-visit offer (or removal of that line); printing specs for
stickers.

**Images to generate** (illustration only; `web/public/desigo/styles/kawaii/`; full spec in section 12.7; replace the house-style tail with
"soft pastel palette of milk white, sage, blush, butter and ivory, warm brown soft outline, gentle, calm, no text,
no watermark, no logo, no letters"). All drawings are then redrawn or cleaned by an illustrator for consistency; the
bottle character and cows must come from one approved character sheet.
| # | File | Size | Prompt |
|---|---|---|---|
| K1 | `meadow-sage.png` | 3200×2000 | Cute soft pastel children's book landscape of a sage-green meadow with round trees under a pale sky, simple shapes, warm brown outline, empty center, no characters, no text, no watermark, no logo, no letters |
| K2 | `hills-blush.png` | 3200×2000 | Soft pastel blush-pink rounded hills with simple drawn roots visible under the ground, children's picture-book style, empty center, no characters, no text, no watermark, no logo, no letters |
| K3 | `sun-butter.png` | 3200×2000 | Gentle children's book scene of a big butter-yellow sun over soft rounded fields, pastel, warm outline, empty center, no characters, no text, no watermark, no logo, no letters |
| K4 | `blue-lanes.png` | 3200×2000 | Soft pastel children's illustration of a quiet lane of small blue-painted houses at early morning, rounded shapes, calm, no people, no text, no watermark, no logo, no letters |
| K5 | `gentle-zebu.png` | 2000×2000, transparent | Gentle children's book illustration of an Indian zebu cow with hump, dewlap and long ears, natural proportions, calm, grazing, soft rounded line, pastel cream coat, respectful, not cartoonish, no blush, no human expression, transparent background, no text, no watermark, no logo, no letters |

Never generate the bottle character from prompts alone; it is designed once by an illustrator and used as a fixed
sheet. Never generate a face on the real bottle render.

## 10. Performance, accessibility and mobile

- Illustrations as SVG where possible (characters, stickers) and AVIF for backgrounds; the whole /kids site under
  1.5 MB initial load so it works on school Wi-Fi.
- Accessibility: read-aloud narration (human voice, captioned) for every spread; large type; navigation by buttons,
  not scroll-jacking; reduced motion removes blinks, wiggles and pops; colour game also works by hat *name*, not colour
  alone (for colour-blind children).
- Mobile and tablet: landscape spreads become portrait cards; all targets ≥ 56 px; works offline once loaded.
- Privacy: no analytics cookies, no forms, no accounts, no third-party embeds on /kids.

## 11. Risks and premium guardrails

**Risks:** cheapening the brand; disrespecting cows; child-directed advertising issues; implied health or growth
claims; a character that drifts off-model.

**Premium guardrails**
1. /kids only, with its own nav. Nothing kawaii appears on the main site, the product pages or the reserve flow.
2. Cows are always in gentle mode: correct zebu anatomy, calm, never chibi, never speaking, never dressed up, never a
   joke or pun.
3. The real product render never gets a face, hat or cheeks.
4. No health, growth, strength or "best" claims; no prices; no "ask your parents to buy".
5. No data collection from children; adult actions are handed off to the main site.
6. Variant bottles differ only in colour and prop, never in rank or virtue.
7. One character sheet, one illustrator, one outline weight. Consistency is what makes cute feel premium.
8. Every child-facing line is reviewed by DESIGO®, an educator and a legal reviewer before launch.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: pastel palette, child-safety rules (ASCI/FSSAI/DPDP) and type present; missing colour roles/states, ok/pending/demo, radius/shadow tokens, component states (incl. no-input trace hand-off), motion tokens, negatives and hero, ESSENTIAL-world and texture prompts. Added all; mint buttons get a 2.5 px outline because mint on milk is 1.2:1. Baloo 2/Nunito OFL; no claim violations; no prices or herb counts on child pages.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#CDEBDD` | mint pill buttons (always with the 2.5 px `#3A2F2A` outline, 11.8:1 boundary on milk) | 1.2:1 on bg |
| Primary ink | `--c-on-primary` | `#0B3B32` | forest label on mint | 9.8:1 on primary |
| Secondary | `--c-secondary` | `#D6E4F0` | pastel Jodhpur blue: sky, houses, secondary pills | 1.2:1 on bg |
| Accent | `--c-accent` | `#1E7A68` | links and the 3 px focus ring | 4.7:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | milk page |  |
| Surface | `--c-surface` | `#F4EDE2` | ivory cards and stickers (radius 28 px) | text on surface 14.0:1 |
| Text | `--c-text` | `#1E211F` | body text, 18 px minimum | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5E5450` | small captions (still ≥ 16 px) | 6.7:1 on bg |
| Line | `--c-line` | `#3A2F2A` | 2.5 px warm soft outline on drawings, stickers and buttons; dividers at 20% | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#0B3B32` | tick on the grown-ups box (rare) · "to be confirmed" in the grown-ups box only · "picture of the journey, not live data" label in the grown-ups box | ok 4.7:1 · pending 5.7:1 · demo 11.3:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--sage` | `#D9E8DF` | MASTER 26 light; meadows | |
| Style extra | `--blush` | `#F3D9D6` | ROOT 14 light; hills | |
| Style extra | `--butter` | `#F8E4C2` | BASE 3 light; sun | |
| Style extra | `--ivory` | `#F4EDE2` | ESSENTIAL light; clouds | |
| Style extra | `--forest` | `#0B3B32` | headings | |
| Style extra | `--cheek` | `#F2A7A0` | cheeks on bottle characters only, never on cows | |
| Style extra | `--caps` | `#1F5C45 · #B3202A · #E89A1C · #CDB89A` | bottle-character hats at full strength | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | sage meadow world (light); hat = base green with a small leaf; deep for outline accents; caption "My hat is green." — no herb numbers |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | blush hills world (light) with drawn roots; hat = base red with a root curl; "My hat is red." |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | butter sun over fields (light); hat = base amber with a little sun; "My hat is amber." |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory cloud room (light); hat = base sand with a plain ribbon; "My hat is ivory." |

**Dark-chapter inversion:** none: /kids has no dark chapters (bright, calm, classroom-projector friendly). The only swap is the 'For grown-ups' box: `--c-surface` → `#EFE9DC`, type → Inter Tight 15 px ink, outline → 1 px `rgba(30,33,31,.2)` (adult register). The DESIGO® logo stays charcoal, small, beside the page title.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Baloo 2 | `@fontsource-variable/baloo-2` | 700–800 | clamp(2.4rem, 7vw, 4.5rem) | 1.05 | 0 | sentence |
| Headline H1–H2 | Baloo 2 | `@fontsource-variable/baloo-2` | 600–700 | H1 clamp(2rem, 5vw, 3.25rem) · H2 clamp(1.5rem, 3.5vw, 2.25rem) | 1.15 | 0 | sentence |
| Body | Nunito | `@fontsource-variable/nunito` | 500 | 1.125rem (18 px) minimum, measure 44ch | 1.6 | +0.01em | sentence |
| Label / UI | Nunito (children) · Inter Tight 400 (grown-ups box) | `@fontsource-variable/nunito` · `@fontsource-variable/inter-tight` | Nunito 700 · Inter Tight 400 | Nunito 1rem buttons · Inter Tight 15 px notes | 1.3 | 0 | sentence (no tiny tracked caps for young readers) |
| Data / mono | — (not used: /kids shows no IDs, numbers or inputs) | — | — | — | — | — | — |
| Devanagari (optional) | Baloo 2 (same family, Latin + Devanagari) | `@fontsource-variable/baloo-2` | 500–700 | body 1.2rem | 1.6 | 0 | — |

Licence: Baloo 2, Nunito and Inter Tight are SIL OFL 1.1 via @fontsource. Pairing: Baloo 2 is rounded and bilingual in one family; Nunito's rounded terminals read easily for young readers; Inter Tight marks the separate adult register.

### 12.3 Layout & surfaces
- **Grid:** single-column story on mobile; 12 columns (5vw margins, 24 px gutters, max 1280 px) on desktop with large illustrations; spreads are button-driven, never scroll-jacked
- **Spacing scale:** 8 px base (larger for small hands): 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96; tap targets ≥ 56 px with 8 px gaps
- **Radius scale:** sm 12 px (small tags) · md 28 px (cards, stickers) · lg 999 px (pill buttons); the one place in the brand where rounded cards are correct
- **Border style:** 2.5 px `#3A2F2A` soft outline (warm, never black) on drawings, stickers and buttons; stickers add a 6 px `#FBF9F3` sticker border
- **Shadow / elevation:** buttons `0 4px 0 rgba(58,47,42,.25)` → `0 2px 0` on press; stickers flat; the real bottle keeps the main-site contact shadow (8 px ellipse 35% + 60 px ambient 8%)
- **Texture / overlay:** a faint pastel paper grain (K-T1) on scene backgrounds only; none behind text

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: mint pill: `#CDEBDD` fill, 2.5 px `#3A2F2A` outline, forest Baloo 2/Nunito 700 label ("Start", "Next"), 56 px high minimum, padding 0 28 px, radius 999 px, `0 4px 0` shadow. Hover: mint halo `rgba(205,235,221,.6)` 8 px · focus-visible: 3 px `--c-accent` ring offset 3 px · active: moves down 2 px, shadow to `0 2px 0` (120 ms) · disabled: 40% with outline dashed · loading: three soft dots breathe (no spinner). A11y: real buttons, 56 px targets, read-aloud label.
- **Secondary button**: sky `#D6E4F0` pill with the same outline and sizes ("Back", "Listen"). Same states as primary.
- **Text / arrow link**: accent-green Nunito 600 underlined 2 px, `›` arrow; hover: underline thickens + mint highlight · focus-visible: 3 px ring · active: ink · disabled: muted. Links out to the main site live only inside the 'For grown-ups' box.
- **Icon button** (incl. menu): 56 px round sticker button, 2.5 px outline icon with rounded caps (home, back, next, sound). Hover: mint halo · focus-visible: 3 px ring · active: down 2 px · disabled: 40% · loading: dots. Each has a visible text label below for early readers + `aria-label`.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: `KidsNav`: header with the real the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style) — small, beside the page title "How your milk travels", never replaced by the character. Bottom bar of three 56 px sticker buttons Back · Next · Home (spreads move by buttons, not scroll). Mobile/tablet: same bar fixed at the bottom; no hamburger, no hidden menu. A discreet 'For families and schools' link on the main /about leads here.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: native pointer, enlarged (clarity first, for classroom screens) · hover: native hand + mint halo · ROTATE: rounded `↻ Turn me` label beside the pointer on the real bottle · EXPLORE: hand + halo with a `?` sticker over question stickers · ENTER: hand + `Start ›` on the opening spread · VIEW: hand + halo over drawings that open bigger · TRACE: hand + halo over board-path squares. Disabled: 40%. Touch (primary on tablets): every interaction is a tap, no hover-only content.
- **Card / panel / info block**: ivory card, radius 28 px, 2.5 px outline, padding 24 px, one sentence + one drawing; the 'For grown-ups' box is a separate, plainer card (radius 12 px, 1 px line, Inter Tight 15 px) with links to /origin, /trace, /about. Hover (if tappable): halo · focus-visible: ring · loading: soft pastel placeholder shape.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): round stickers (Baloo 2 600) for questions: Where? Which cows? What do they eat?… Pending verification: only inside the grown-ups box, `--c-pending` "to be confirmed" with dotted underline (e.g. breed list); DEMO · not live data: grown-ups box label "This is a picture of the journey, not live data." in forest. No prices, numbers or results on any badge.
- **Input + form field** (Trace-your-milk bottle ID): none on /kids by rule (no data from children, DPDP Act 2023). The Trace-your-milk component becomes a hand-off card: drawn QR on a bottle + "Ask a grown-up to scan the code on the bottle" + grown-ups link to the main /trace, where the standard bottle-ID input (`DSG-BTL-000001-3`, DEMO-labelled) lives. States: default · hover halo · focus-visible ring · active down 2 px.
- **Divider / ornament**: a soft dotted milk path (dots 6 px, 2.5 px outline colour at 40%) that draws between scenes (1200 ms).
- **Section header** (chapter number + title pattern): spread number as a round sticker (`3 of 7`) + Baloo 2 title + one read-aloud sentence; Hindi line beneath in Baloo 2 when the approved translation exists.
- **Product info block** (variant name, code, price-pending, size, descriptors): child version: hat-colour card only ("My hat is green.") with the bottle-character drawing; no price, no size, no herb count, no ranking. A grown-ups box links to the main /milk/[variant] page, where the standard block (code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined) applies.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): bridge spread: the real render on milk with no face, hat or cheeks, main-site contact shadow, float ±8 px / 6 s, caption "This is the real bottle. It comes back to be washed and filled again." Before 360 frames: drag tilts ±25° with label "Turn the bottle around"; after: drag to turn, counter hidden, replaced by a small circular progress ring.
- **Trace node / timeline step**: board-game path: rounded square tiles (64 px) from farm to home on a dotted path, each with a drawing and one sentence from `journey`. Default: pastel tile · hover/tap: halo + read-aloud · focus-visible: 3 px ring · active: tile pops gently (≤ 3% overshoot, /kids exception) · disabled/not reached: 50% · loading: n/a. Grown-ups box: "This is a picture of the journey, not live data."

### 12.5 Iconography & illustration
Icons: rounded 2.5 px outline stickers with a 6 px sticker border, 32/48 px. Illustration: one approved character sheet by one illustrator (bottle character with dot eyes and cap-colour hat — illustration only); cows in gentle mode (correct zebu anatomy, calm, never chibi, blushing, speaking or dressed); inclusive, respectful people. Photo treatment: none on /kids except links to real farm photos in the grown-ups box; the real render appears once, faceless.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | dotted path draw, card reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | spread slide (700 ms) |
| `--ease-pop` | `cubic-bezier(.34,1.3,.64,1)` | sticker soft pop, max 3% overshoot (explicit /kids-only exception) |
| `--dur-micro` | `120ms` | button press |
| `--dur-reveal` | `500ms` | sticker pop, wiggle (±3° twice) |
| `--dur-scene` | `700ms` | picture-book spread slide |
| `--blink` | `120ms close / 80ms open, every 4–7s` | bottle characters only |
| `--cow-breathe` | `±1% / 6s` | cows only breathe or graze in a slow 3-frame loop |

Scenes move by buttons, never scroll-jacking. Cows never blink on cue or wiggle. Reduced motion: no blinks, wiggles or pops; spreads cross-fade (200 ms); narration remains.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *soft pastel palette of milk white, sage, blush, butter and ivory, warm brown soft outline, gentle, calm, children's picture-book illustration, no text, no watermark, no logo, no letters*

| # | File path (web/public/desigo/styles/kawaii/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| K-H1 | `web/public/desigo/styles/kawaii/morning-sky.png` | 3200×2000 (16:10) | no | Gentle children's book morning sky in milk white and pale butter with a few soft round clouds and a faint sage horizon, simple shapes, empty center | base negatives + characters, faces on clouds, rainbows, glitter | /kids opening spread backdrop |
| K-H2 | `web/public/desigo/styles/kawaii/morning-sky-portrait.png` | 1400×2400 (7:12) | no | Vertical gentle children's book morning sky with soft round clouds and a low sage hill at the bottom, pastel, empty center | base negatives + characters, faces on clouds, rainbows | /kids opening spread (mobile/tablet portrait) |
| K-V1 | `web/public/desigo/styles/kawaii/meadow-sage.png` | 3200×2000 + 1400×2400 portrait | no | Cute soft pastel children's book landscape of a sage-green meadow with round trees under a pale sky, simple shapes, empty center, no characters | base negatives + characters, animals with faces, numbers | MASTER 26 hat world |
| K-V2 | `web/public/desigo/styles/kawaii/hills-blush.png` | 3200×2000 + 1400×2400 portrait | no | Soft pastel blush-pink rounded hills with simple drawn roots visible under the ground, children's picture-book style, empty center, no characters | base negatives + characters, worms with faces | ROOT 14 hat world |
| K-V3 | `web/public/desigo/styles/kawaii/sun-butter.png` | 3200×2000 + 1400×2400 portrait | no | Gentle children's book scene of a big butter-yellow sun over soft rounded fields, pastel, empty center, no characters | base negatives + sun with a face, characters | BASE 3 hat world |
| K-V4 | `web/public/desigo/styles/kawaii/cloud-room-ivory.png` | 3200×2000 + 1400×2400 portrait | no | Soft ivory children's book room made of rounded clouds, a pale floor line, gentle light, very simple, empty center, no characters | base negatives + furniture, toys with faces, characters | ESSENTIAL hat world |
| K-J1 | `web/public/desigo/styles/kawaii/blue-lanes.png` | 3200×2000 (16:10) | no | Soft pastel children's illustration of a quiet lane of small blue-painted houses at early morning, rounded shapes, calm, doorsteps visible, no people | base negatives + people, bottles, vehicles with faces | Board-path end square 'home', bottle-return spread |
| K-J2 | `web/public/desigo/styles/kawaii/gentle-zebu.png` | 2000×2000 (1:1) | yes (real alpha) | Gentle children's book illustration of an Indian zebu cow with hump, dewlap and long ears, natural proportions, calm, grazing, soft rounded line, pastel cream coat, respectful, not cartoonish, transparent background | base negatives + chibi proportions, blush cheeks, human expression, speaking, clothes, big eyes, Holstein spots | Spread 1 Cow, breeds spread (redrawn by the illustrator to the character sheet) |
| K-T1 | `web/public/desigo/styles/kawaii/pastel-paper.png` | 2048×2048, seamless | no | Seamless very soft pastel picture-book paper texture in milk white with faint warm fibres, flat light | base negatives + stains, folds, patterns | Scene backgrounds (never behind text) |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Never generate the bottle character from prompts alone (one illustrator, one approved sheet) and never put a face on the real bottle render; all generated drawings are redrawn or cleaned by the illustrator for consistency.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/55_kawaii.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/kawaii/
