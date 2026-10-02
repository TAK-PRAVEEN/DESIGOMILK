# 22 — Anthropomorphic · DESIGO® build plan

**Fit score: 2 / 5** (classic mascot anthropomorphism scores 0 for this brand) · **Best used for:** giving the **bottle**
a personality and a life story ("every bottle has its own identity", the returnable glass that travels and comes
home), in chapter 13 *Trace your milk*, a returnable-glass explainer and a children's or school education page.
**The cow is never a cartoon character.** Cows are given *individuality and dignity*, not a costume.

---

## 1. Style essence

Anthropomorphic design gives human traits (faces, emotions, speech, gestures, names, biographies) to animals, objects
or brands. It ranges from full mascots (Amul's girl is a human mascot, while Elsie the Borden cow and the California
"Happy Cows" ads are animal ones) to subtle object personality (Pixar's lamp, Mailchimp's Freddie, the Michelin Man).
It builds affection and memorability, and it can easily patronise or trivialise.

Three reference points:
1. **Pixar's Luxo Jr.**: personality expressed *only through movement* (tilt, pause, hop), with no face added.
   This is the model for the DESIGO® bottle.
2. **Amul's long-running topical campaigns**: proof that Indian dairy audiences love character-led storytelling, and
   that the *human* mascot carries it, not the cow.
3. **Indian miniature painting and Pichwai art**, where cows appear with individuality, adornment and grace,
   observed rather than caricatured. This is the model for depicting cows with respect.

## 2. Why it fits DESIGO® and where it fights

**The cultural constraint comes first.** In India the cow is widely revered, and for many families it is a
sacred and household presence. Cartoon cows with human clothes, comic udders, "moo" jokes or a cow selling its own milk
read as mockery or as exploitation, and can offend. Religious iconography used to sell milk is equally inappropriate
(and divisive). The design therefore does **not** anthropomorphise the cow.

**Where personality *does* fit:**
- **The bottle.** DESIGO® is building a QR identity for every returnable glass bottle. A bottle that has an ID, a
  journey, and returns home again and again is a perfect, respectful anthropomorphic subject. "This bottle has been
  home 0 times" (demo) makes the reuse loop tangible and lovable.
- **Individual cows as individuals.** Farmers often know their cows by name. With consent from the partner farms,
  real names and portraits (format example: "[Name], a Tharparkar at a partner farm") give personhood through *fact*, not fiction.
  This is anthropomorphism in its most respectful form: recognising the animal as an individual.
- **Children and education:** a gentle, illustrated "journey of a bottle" story for school outreach.

**Fights:** premium luxury and character design are hard to reconcile. Mascots read as mass-market FMCG. Hence 2/5:
the style is a *personality layer* (motion and voice of the bottle), not a site-wide look.

## 3. Art direction

### Palette: "Warm Companion" (brand palette, softened for character warmth)
| Token | Hex | Use |
|---|---|---|
| `--milk` | `#F7F4EC` | Base |
| `--paper` | `#EDE4D0` | Storybook pages |
| `--forest` | `#0B3B32` | Text, outlines |
| `--green` | `#1E7A68` | Bottle's "voice" colour (speech captions) |
| `--earth` | `#8C6A43` | Ground, farm |
| `--gold` | `#C8A96B` | Adornment details (pichwai-inspired) |
| `--blush` | `#F3D9D6` | Warm highlights (ROOT light) |
| `--sky` | `#DCE7E6` | Morning sky in illustrations |
| `--ink` | `#1E211F` | Body |

Variant personalities (colour plus temperament of the bottle's motion, not faces):
| Variant | Cap | Temperament |
|---|---|---|
| MASTER 26 | `#1F5C45` | Calm, unhurried, the "elder": slowest float (8 s), deepest tilt damping |
| ROOT 14 | `#B3202A` | Grounded, steady: firm settle, small nod |
| BASE 3 | `#E89A1C` | Warm, everyday, friendly: quicker float (5 s), the most responsive to the cursor |
| ESSENTIAL | `#CDB89A` | Quiet, simple: minimal motion, a single slow turn |

### Typography
- **Display:** *Fraunces* (brand), SOFT 100 and WONK on, weight 500. It has a friendly, characterful serif with no
  need for a cartoon face.
- **Bottle "voice":** *Fraunces* italic in `--green`, always in first person, short and factual.
- **Body:** *Inter Tight* 17/28.
- **Storybook (education page only):** *Baloo 2* (Ek Type, OFL, Latin and Devanagari), rounded, friendly and Indian-made.
- **Data:** *JetBrains Mono* (bottle IDs, the bottle's "passport").

### Imagery and illustration
- **Cows:** **real photography** wherever possible (portrait series, eye level, natural light and calm). Illustration
  (education page) uses a **Pichwai- or miniature-inspired line-and-wash** language, by a commissioned Indian
  illustrator, with correct breed anatomy (hump, dewlap, horns, ears, coat) and no human expressions, clothing or speech.
- **Bottle:** the real render. Personality comes from **motion only** (Luxo Jr. principle). No googly eyes, no drawn
  face, no arms.
- **Speech:** captions next to the bottle, never speech bubbles from cows.
- **Icons:** the bottle silhouette as a recurring glyph (for "returns home", "filled", "on its way").

### Grid
12 columns with 5vw margins. Storytelling layouts use a "companion column": the bottle travels in columns 9–12 beside
content (sticky), like a companion walking with the reader.

## 4. Motion and interaction language (where the anthropomorphism actually lives)

The design-system rule "no bounce, no overshoot" stays. Personality comes from **timing, anticipation and attention**,
not from springiness.
- **Attention:** the bottle subtly turns (±6° Y tilt) toward the cursor or the focused element, with an 80 ms delay,
  as if noticing.
- **Anticipation:** before travelling to the next chapter, the bottle dips 4 px (120 ms), then moves (`--ease-milk`,
  900 ms).
- **Idle "breathing":** the float cycle varies by variant temperament (5–8 s).
- **Reaction to scroll speed:** fast scrolling makes the bottle lean back slightly (max 4°), which returns smoothly.
  It reads as "holding on", gently.
- **Homecoming:** in the returnable-glass section, the bottle travels back to the crate and settles with a small
  satisfied tilt (single 400 ms ease-out, no overshoot).
- **Cursor states:** default = 8 px dot · link = 32 px ring · drag (360) = ring with ⟲ ("turn me around" tooltip
  on first hover only) · view = ring "VIEW" · disabled = 30% ring. On hover over the bottle the cursor softens and
  the bottle "looks" toward it.
- **Transitions:** the bottle is a shared element across pages (View Transitions), so it *walks you* into
  /milk/[variant], keeping continuity as a character.

## 5. The hero bottle and the four variants

- **Hero:** the bottle floats (±10 px), notices the cursor (attention tilt) and, on first visit, gives one slow ±25°
  turn to "show its label", the bottle introducing itself. Until 360 frames arrive this is the 2.5D turn with a sheen
  sweep. Afterwards the introduction uses real frames (frames 001 → 018 → 001).
- **Voice line** (Fraunces italic, green): "I carry milk from the source. Scan me to see where I've been." This is
  factual, since every bottle carries a QR identity (pending public approval of wording).
- **Bottle passport** (JetBrains Mono): `Bottle · DSG-BTL-000001-3 (sample format) · Filled · On its way · Returned`,
  always with a DEMO label until live.

| Variant | World and character |
|---|---|
| **MASTER 26** | A forest morning. The "elder" bottle moves slowly and deliberately. Voice: "I come from cows grazed on the MasterHerb™ concept (pending)." |
| **ROOT 14** | Red-earth fields. Steady and grounded. Voice: "Free grazing is where I start." |
| **BASE 3** | Golden-hour lane, the friendliest bottle (most responsive). Voice: "I'm the everyday one." |
| **ESSENTIAL** | Ivory gallery, the quiet bottle with one slow turn. Voice: "Simple, balanced, honest." |

All voice lines avoid health or benefit claims and are approved by DESIGO® before launch.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | The bottle introduces itself (one turn, attention to cursor) with "Milk from the source." and the voice line beneath. |
| 02 | Bottle becomes the story | The bottle "looks" at each of the six words as it appears (tilt toward the word), so the reader follows its gaze. |
| 03 | Cow → bottle | The bottle travels the seven stations as a companion *in reverse*, "going back to where I began", and arrives at a real cow photograph, where it simply stops and waits. No interaction is imposed on the cow. |
| 04 | Where it begins | Documentary photos, dignified. Optional named cows (consented farms) with captions in the format "[Name] · Tharparkar · partner farm (name used with farmer's permission)". |
| 05 | Breeds | Respectful portraits plus factual regions (`breeds[]`), and status "Client-stated · approval pending". No personality text for breeds. |
| 06 | Traceability | The bottle as a small glyph travelling the path node to node, "this is where I was batched", with the illustrative label. |
| 07 | Quality | The bottle steps aside (a respectful pause) and the lab content is plain and Swiss. Readouts "— pending lab confirmation". |
| 08 | Four milks | Four bottles, four temperaments (section 5). |
| 09 | Milk as material | No character, only milk. A breath. |
| 10 | Heritage | Pichwai-inspired cow illustration (commissioned), adorned and serene, gold detailing, Fraunces italic. A tribute, not a mascot. |
| 11 | Technology | The bottle "receives its identity": a QR appears on the label with a soft glow. "Every bottle carries its own identity." |
| 12 | Ghee | No anthropomorphism for the jar. Calm product photography, three grades. |
| 13 | Trace your milk | **Signature.** Enter the demo ID and the bottle tells its journey in first person, step by step ("I was filled at the plant…"). DEMO is shown on every line. |
| 14 | Story | A timeline (verified only), with no character. |
| 15 | Final CTA | **Homecoming.** The bottle returns, settles and tilts once toward the CTAs. "Know where your milk comes from." plus the returnable-glass line "And send me back when I'm empty." (wording pending approval). |

**Inner pages:** /milk has four temperaments side by side, each reacting differently to hover · /milk/[variant]
uses the shared-element bottle walk-in, the 360 viewer ("turn me around") and a facts table · /ghee is calm product ·
/origin is documentary with named cows (consent-based) · /trace is the first-person bottle journey · /technology has
the bottle receiving its identity · /about has a timeline and the team · /reserve has "Your bottle will come back to
us. Here's how." with the return-loop explainer · **/learn** (optional) is the children's storybook "The Journey of a
Glass Bottle", in Baloo 2 and Hindi + English, with Pichwai-style illustrations.

## 7. Component variants

`CharacterBottle` (attention tilt, anticipation, temperament presets) · `BottleVoice` (first-person caption) ·
`BottlePassport` (ID plus status chips, DEMO aware) · `CompanionColumn` (sticky travelling bottle) ·
`SharedBottleTransition` · `ReturnHome` (crate animation) · `NamedCowCaption` (with consent flag) · `PichwaiPlate`
(commissioned illustration frame) · `TraceYourMilk.firstPerson` · `Storybook` (education page) · `AssetSlot.portrait`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Warm palette, voice style, temperament presets | Tokens, voice style guide (do/don't), 4 motion presets | Voice guide signed off by DESIGO®; no cow speech anywhere | Cultural review partner | 3 |
| 2 | Grid & shell | Companion column, cursor, shared element | `CompanionColumn`, cursor, View Transition setup | Fallback without View Transitions | — | 4 |
| 3 | Hero | Bottle introduces itself | `CharacterBottle` attention plus intro turn | Intro plays once per session; LCP ≤ 2.5 s | Render | 4 |
| 4 | Bottle → story | Gaze-following words | Pinned scene | Reduced motion: no gaze, static list | — | 3 |
| 5 | Cow → bottle | Bottle travels back to the source | Journey with companion | Cow imagery real or respectful; bottle stops before the cow | B2, B4 | 5 |
| 6 | Origin / farm | Named cows (optional) | `NamedCowCaption` | Written consent from farms recorded | B1, B2, names plus consent | 3 |
| 7 | Breeds | Dignified portraits | Breed grid | No personality copy on breeds | B3 | 2 |
| 8 | Trace map | Bottle glyph traveller | Trace path with glyph | Illustrative label | — | 4 |
| 9 | Quality | Plain lab | Panel | No unconfirmed values | — | 2 |
| 10 | Four worlds + 360 | Four temperaments | 4 worlds, viewer "turn me around" | Temperaments distinguishable but subtle (user test n=5) | 360 (A) | 7 |
| 11 | Heritage | Pichwai-style tribute | Commissioned plate | Reviewed by the illustrator and DESIGO® for cultural respect; no deities | Illustrator commission | 4 |
| 12 | Technology | Bottle receives identity | QR reveal | Wording approved | Real label/QR art | 2 |
| 13 | Ghee | Calm product | Scene | No character on the jar | Jar photo | 2 |
| 14 | Trace-your-milk | First-person journey | `TraceYourMilk.firstPerson`, `BottlePassport` | DEMO per line; first-person copy approved | — | 4 |
| 15 | /milk, /milk/[variant] | Product pages with walk-in | 2 templates | Shared-element works across pages | 360 (A) | 5 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Consent flags enforced in content | B1–B8 | 5 |
| 17 | /about, /ghee, /reserve (+ /learn) | Remaining pages, return loop, optional storybook | 3–4 templates | Return process facts approved; storybook reviewed for children's suitability | Return facts, illustrations | 6 |
| 18 | Mobile | Bottle companion at the bottom | Mobile companion (small, docked) | Never covers content; can be hidden | — | 3 |
| 19 | A11y + reduced motion | Character without motion | Static poses, voice as text | WCAG 2.2 AA; voice captions readable by screen readers, not decorative | — | 2 |
| 20 | Perf, QA, handover | Ship | Motion presets doc, cultural QA checklist | LCP ≤ 2.5 s; cultural checklist signed | All | 4 |

**Total:** about 77 days (including illustration). Bottle-personality layer only (phases 1–3, 10, 14, 15, 19, 20):
about 30 days.

## 9. Assets needed from DESIGO®

- 360 sequences (the personality depends on smooth turns) and the real label/QR artwork.
- **Consent-based cow names and portraits** from partner farms (optional but powerful), with a recorded farmer
  permission for each.
- A commissioned Indian illustrator for Pichwai/miniature-inspired plates (or DESIGO®'s preferred artist).
- Approved return-loop facts (deposit, pickup, cleaning: public-safe wording).
- A cultural review: one internal reviewer plus one external (for example, the illustrator or a community advisor).

## 10. Performance, accessibility and mobile

- Character motion is transform-only with presets in a single JS module (≤ 6 KB). The attention tilt is throttled
  to rAF.
- The voice is real text with `aria-live="polite"` only in the trace demo, so it is not announced on every scroll.
- Reduced motion: the bottle is static, and personality persists through the voice lines.
- Mobile: no cursor attention; instead the bottle responds to the scroll direction (lean ≤ 3°). The companion docks
  small at the bottom-right and can be dismissed.

## 11. Risks and premium guardrails

**Risks:** offending audiences with cow caricature; religious exploitation; childish FMCG look; first-person copy
drifting into claims; consent issues with named animals or farms.

**Premium guardrails**
1. **No cow mascots:** no faces, clothes, speech, winks, "moo" jokes or cows "selling" milk.
2. **No religious iconography** (Kamadhenu, deities, Om, tilak on cows) used to market milk.
3. Cows are depicted at eye level, calm and anatomically correct, in real photos or respectful commissioned art.
4. The bottle never gets a face. Personality comes from motion, timing and a short first-person voice.
5. Voice lines are factual and approved, with no health, purity or "made with love" sentimentality.
6. Named cows only with recorded farmer consent, and no named cow ever "endorses" a product.
7. Motion keeps brand physics (no bounce or overshoot), so the character feels mature.
8. The children's storybook lives on its own page and never leaks a childish tone into commerce or lab chapters.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added Warm Companion tokens plus muted/line/state colours that were undefined, temperament motion presets, Baloo 2 storybook role, all 14 components and 10 image prompts (cows never characters). Fonts already OFL; no claim violations found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | forest: headlines, outlines, primary button | 11.3:1 vs bg. AAA. |
| Primary ink | --c-on-primary | `#F7F4EC` | milk on forest | 11.3:1 on primary. |
| Secondary | --c-secondary | `#1E7A68` | DESIGO green: the bottle's "voice" captions (Fraunces italic), links | 4.7:1 vs bg. AA: voice captions are ≥ 20 px italic. |
| Accent | --c-accent | `#C8A96B` | gold: pichwai-inspired adornment details, focus halo | 2.0:1 vs bg. Never text; focus ring forest 2 px + 3 px gold halo. |
| Background | --c-bg | `#F7F4EC` | milk base |  |
| Surface | --c-surface | `#EDE4D0` | paper: storybook pages, passport card, panels |  |
| Text | --c-text | `#1E211F` | ink body | 14.8:1 on bg · 12.9:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#55584F` | captions, passport labels (added in audit; brand-neutral grey-green) | 6.6:1 on bg · 5.7:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#CFC5AF` | hairlines and dividers (added in audit) | decorative only; never the sole carrier of meaning |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#8C6A43` / `#0B3B32` | green = recorded passport step; earth dotted underline = pending; forest badge with milk text = DEMO | DEMO badge milk on forest 11.3:1. Blush `#F3D9D6` and sky `#DCE7E6` are illustration-only tints. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | forest morning; the "elder": slowest float (8 s), deepest tilt damping; voice "I come from cows grazed on the MasterHerb™ concept (pending)." |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red-earth fields; grounded: firm settle, small nod; voice "Free grazing is where I start." |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | golden-hour lane; friendliest: quicker float (5 s), most responsive to the cursor; voice "I'm the everyday one." |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory gallery; quiet: minimal motion, one slow turn; voice "Simple, balanced, honest." |

**Dark-chapter inversion:** Technology / trace chapters (11, 13): bg → forest `#0B3B32`, surface → `#0F4A3F`, text → `#F7F4EC`, muted → `#C9D3CD`, voice colour → `#7FE0B8` (the QR identity glow in ch. 11), primary → milk outline with forest-on-milk hover. Storybook /learn never goes dark.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz auto, wght 500, SOFT 100, WONK 1 | clamp(3.5rem, 8vw, 8rem) | 0.98 | -0.02em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | SOFT 100, WONK 1, wght 400–500; italic for the bottle voice | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) · voice clamp(1.25rem, 2vw, 1.75rem) | 1.06 / 1.15 / 1.3 | -0.01em | Sentence; voice in first person |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 400–500 | clamp(1.0625rem, 1rem + 0.2vw, 1.125rem) (17–18 px) | 1.65 (28 px) | 0 | Sentence |
| Label / UI | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 600 | 0.72rem | 1.2 | +0.18em | UPPER |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` (Google Fonts: JetBrains Mono) | wght 400–500 | 0.8125rem | 1.45 | 0 | bottle passport IDs as issued |
| Devanagari (optional) | Baloo 2 (variable) | `@fontsource-variable/baloo-2` (Google Fonts: Baloo 2) | wght 400–800 (Latin + Devanagari) | storybook body 1.25rem, titles clamp(2rem, 5vw, 3.5rem) | 1.5 | 0 | n/a (/learn only) |

Licence: Fraunces, Inter Tight, JetBrains Mono and Baloo 2 (Ek Type) are SIL OFL 1.1.
Pairing: Fraunces with SOFT/WONK gives a characterful but adult voice without a cartoon face; Inter Tight keeps facts plain; Baloo 2 is confined to the children's /learn storybook.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutter, 5vw margin, max-width 1440 px; companion column: the sticky travelling bottle in cols 9–12 beside content (docks bottom-right on mobile, dismissible).
- **Spacing:** 4-px base, brand scale 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- **Radius:** sm 2px · md 4px (passport card, storybook pages) · lg 999px (cursor, chips).
- **Border:** 1 px `#CFC5AF` hairlines; passport card 1 px forest.
- **Shadow / elevation:** UI flat; passport card `0 12px 24px -16px rgba(11,59,50,.25)`; bottle contact + ambient shadow.
- **Texture / overlay:** Paper grain 2% on storybook and heritage; none elsewhere.

### 12.4 Components
All interactive components: `focus-visible` = 2 px forest `#0B3B32` outline, offset 3 px, with a 3 px gold `#C8A96B` halo; the bottle also tilts toward the focused element; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Brand underlined label + arrow (Inter Tight 600 caps, forest), 1 px frame draws on hover (600 ms), arrow travels 8 px; the companion bottle tilts toward a hovered CTA. Active: frame fills forest, label milk. Disabled: muted label. Loading: arrow pauses and a 1 px rule sweeps. 48 px min height.
- **Secondary button**: Same label in ink with 1 px underline; hover 2 px + arrow travel (240 ms); active green; disabled / loading as primary.
- **Text / arrow link**: Inter Tight 500 green with 1 px underline offset 3 px; hover 2 px + arrow +6 px; disabled muted.
- **Icon button** (incl. menu): 44×44, 20 px 1.5 px stroke icons; the recurring bottle-silhouette glyph for "returns home / filled / on its way". Menu = two lines → ×. `aria-label` always.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 64 px milk bar, Inter Tight caps links, active = 2 px forest underline. Mobile: full-screen milk sheet with Fraunces 36 px links; the docked companion bottle hides while the menu is open. Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default = 8 px forest dot · hover = 32 px ring · ROTATE = ring with ⟲ (tooltip "turn me around" on first hover only) · EXPLORE = ring with → · ENTER = ring with "ENTER" · VIEW = ring "VIEW" · TRACE = ring with the bottle-silhouette glyph. Over the bottle the cursor softens and the bottle "looks" toward it (80 ms delay). Touch: no cursor; the bottle leans ≤ 3° with scroll direction instead.
- **Card / panel / info block**: Paper panel, radius 4, 24 px padding, 1 px hairline; Bottle passport card: mono ID `DSG-BTL-000001-3 (sample format)` + status chips. Hover (clickable): bottle glyph in the corner tilts 6°.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Inter Tight 11 px caps pill (radius 999, 24 px). Verified: green outline. Pending verification: earth `#8C6A43` dotted underline on the claim + chip "PENDING VERIFICATION" (voice lines awaiting approval also carry it). DEMO: forest badge "DEMO · NOT LIVE DATA" on every passport and first-person trace line. Static.
- **Input + form field** (Trace-your-milk bottle ID): Label "Bottle ID", 56 px milk field with 1 px forest border radius 2, JetBrains Mono 18 px, placeholder `DSG-BTL-000001-3 (sample format)`; helper voice line "Scan me or type my ID." Focus: ring token + the bottle turns toward the field. Error: ROOT red `#B3202A` border + text. Loading: the bottle dips 4 px (anticipation) then the first-person steps appear (`aria-live="polite"`).
- **Divider / ornament**: 1 px hairline with a small bottle-silhouette glyph at the centre, or a gold pichwai-inspired dot row on heritage only.
- **Section header** (chapter number + title pattern): Inter Tight caps chapter number + Fraunces H2; optional bottle voice line beneath in green italic; the bottle "looks" at the title as it enters.
- **Product info block** (variant name, code, price-pending, size, descriptors): Fraunces variant name + temperament line in the voice, mono code, size and price in Inter Tight with earth dotted pending underline + chip, descriptors with status. Voice lines never state health or benefit claims.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): Real render with contact + ambient shadow on milk or the variant world; personality via motion only (attention tilt ±6°, anticipation dip, temperament float 5–8 s, homecoming settle). No face, eyes or arms ever. Before 360 frames ±25° "introduction" turn + sheen; with frames 001 → 018 → 001. Shared-element View Transition into /milk/[variant].
- **Trace node / timeline step**: Small bottle glyph travelling node to node with a first-person caption ("this is where I was batched"); active node = filled dot + label; every line prefixed DEMO; ordered-list equivalent.

### 12.5 Iconography & illustration
- **Icons:** 1.5 px stroke, 20 px, rounded caps; the bottle silhouette is the signature glyph.
- **Illustration:** Pichwai / miniature-inspired line-and-wash plates by a commissioned Indian illustrator: correct breed anatomy, no human expressions, clothing, speech or religious iconography.
- **Photo treatment:** Cows photographed at eye level, natural light, calm; named cows only with recorded farmer consent; no filters.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, homecoming settle (400 ms) |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel (900 ms) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | page transitions |
| `--dur-micro` | `240ms` | hovers |
| `--dur-reveal` | `600ms` | text reveals |
| `--dur-scene` | `900ms` | bottle travel between chapters |
| `--attention` | `rotateY ±6deg, 80ms delay` | bottle notices cursor/focus |
| `--anticipation` | `translateY 4px / 120ms` | dip before travel |
| `--float` | `±10px over 8000 / 6000 / 5000 / 6000 ms` | MASTER / ROOT / BASE / ESSENTIAL temperaments |

- **Signature:** the bottle introducing itself (one slow turn), travelling as a companion, and coming home to the crate.
- **Rules:** no bounce, no overshoot; scroll-speed lean ≤ 4°; attention throttled to rAF; presets in one ≤ 6 KB module.
- **Reduced motion:** static bottle; personality persists through voice lines only; logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *gentle storybook line-and-wash illustration inspired by Indian miniature painting, observed and respectful, warm morning light, milk white #F7F4EC, paper #EDE4D0, forest #0B3B32, earth #8C6A43, gold #C8A96B, blush #F3D9D6 and morning sky #DCE7E6, calm, adult and dignified, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/anthropomorphic/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-landscape.png` | 3200×2000 (16:10) | no | Calm dawn pasture at the edge of a Rajasthan village, low mist, a khejri tree, two zebu cows grazing far left seen side-on at eye level, an empty sunlit path leading to an empty centre | cartoon, mascot, cow faces looking at viewer, smiling animals (+ base negative) | Ch. 01 hero |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Same dawn pasture as a tall portrait, path rising into the empty centre, one zebu cow small at lower left | cartoon, mascot (+ base negative) | Mobile hero |
| 3 | `worlds/master-26.png` | 3200×2000 (16:10) | no | Forest morning in soft line-and-wash, deep greens #1F5C45 and #0A2A20, dappled light, an empty clearing in the centre | named herbs, characters (+ base negative) | Ch. 08 / /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 (16:10) | no | Red-earth fields in line-and-wash, crimson #B3202A to oxblood #4A0A0F soil bands, a lone khejri, empty centre | characters, people (+ base negative) | Ch. 08 / /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 (16:10) | no | Golden-hour village lane in line-and-wash, amber #E89A1C light, long shadows, an empty doorstep in the centre | characters, people's faces (+ base negative) | Ch. 08 / /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 (16:10) | no | Ivory gallery room in line-and-wash, warm ivory #F4EDE2 walls, soft skylight, a pale stone plinth in the centre | objects on plinth, characters (+ base negative) | Ch. 08 / /milk/essential |
| 7 | `journey/path-home.png` | 4800×1600 (3:1) | no | A long storybook panorama: a farm with zebu cows at left, a dirt path past a collection hut and a small dairy plant, ending at a town doorstep at dawn on the right, the path itself left clear | vehicles with branding, cartoon faces, speech bubbles (+ base negative) | Ch. 03 reverse journey, /learn storybook |
| 8 | `return/empty-crate.png` | 2400×1600 (3:2) | yes | An empty wooden milk crate with empty slots on a doorstep step, soft morning light, isolated on transparent background | bottles, jars, objects in crate (+ base negative) | Ch. 15 homecoming, /reserve return loop |
| 9 | `heritage/pichwai-cow-reference.png` | 1600×2000 (4:5) | yes | Miniature-painting inspired study of a Kankrej zebu cow, silver-grey coat, large lyre-shaped horns, simple gold ornament on the neck band, calm side profile, on transparent background | deities, Krishna, Kamadhenu, tilak, human expressions, cartoon (+ base negative) | Ch. 10 mood reference for the commissioned illustrator |
| 10 | `textures/storybook-paper.png` | 2400×2400 seamless | no | Seamless tileable soft handmade paper #EDE4D0 with faint fibres, flat light | stains, text (+ base negative) | Storybook pages, passport card |

The bottle is always the real render and never drawn with a face; final cow plates are commissioned and culturally reviewed, generated plates are references only.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/22_anthropomorphic.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/anthropomorphic/
- [ ] No cow mascots, faces, clothes, speech or religious iconography; bottle personality via motion only
- [ ] Every voice line approved by DESIGO® and free of health / purity claims; named cows only with recorded consent
