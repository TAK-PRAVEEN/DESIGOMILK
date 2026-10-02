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

**Images to generate** (illustration only; `web/public/desigo/styles/kawaii/`; replace the house-style tail with
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
