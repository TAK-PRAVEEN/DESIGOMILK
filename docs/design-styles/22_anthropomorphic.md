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
