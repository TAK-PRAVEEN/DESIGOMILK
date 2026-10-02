# 47 — Camera Interface · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 3.5 / 5 for the whole site, 4.5 / 5 as a layer** · **Best used for:** chapter 13 *Trace your milk*
(the QR scanner is literally a camera), chapter 04 as a farm documentary, /trace and /origin. The rest of the site
keeps the minimal or luxury-typography base and borrows only the focus brackets.

---

## 1. Style essence

The camera-interface style frames the screen as a viewfinder: corner brackets, a blinking red REC dot, a running
timecode, autofocus boxes that lock onto a subject, and small exposure readouts (ISO, shutter, white balance) in the
corners. Safe-frame guides and a rule-of-thirds grid complete the vocabulary. The viewer becomes the operator:
*you are filming this, so it is real*.

Three reference points:
1. **Cinema camera monitors** (ARRI and RED on-board displays): hairline white UI, monospace data, nothing decorative.
2. **The phone camera app**: tap-to-focus and the QR-detection frame, the UI DESIGO® customers will actually use
   when they scan a bottle.
3. **Documentary farm openings** (Chef's Table, BBC natural-history field footage), where the camera is a witness,
   not an advertiser.

## 2. Why it fits DESIGO® and where it fights

- **Traceability is about evidence, and the camera is the shorthand for evidence.** A viewfinder says "recorded on the
  spot", matching the public copy "Each collection is recorded with where and when it happened".
- **Every bottle's QR identity is scanned with a phone camera.** Chapter 13 can *become* the scanner rather than
  imitate one.
- **It protects honesty.** A documentary frame demands real farm footage and makes generated "farm" pictures look
  wrong, which keeps them off the site.

**Where it fights:** a permanent HUD is noisy and reads as tech or surveillance; crosshairs on animals or people
read as targeting; readouts invite fake numbers. The remedy is to use it as a *layer*: brackets and REC appear only
where something is being witnessed, and every readout is real metadata or an honest dash.

## 3. Art direction

### Palette: dark monitor, hairline milk UI, one red dot
| Token | Hex | Use |
|---|---|---|
| `--vf-black` | `#171918` | Viewfinder surround, letterbox bars (charcoal) |
| `--vf-deep` | `#0B3B32` | Forest monitor background |
| `--vf-ui` | `#F7F4EC` at 88% | Brackets, safe frames, readouts (milk) |
| `--vf-ui-dim` | `rgba(247,244,236,.38)` | Thirds grid, inactive readouts |
| `--rec` | `#E0463A` | REC dot only: ROOT red `#B3202A` lifted to 4.3:1 on charcoal |
| `--af-lock` | `#7FE0B8` | Focus confirmed (signal), 600 ms only |
| `--af-hunt` | `#C8A96B` | Focus searching (gold) |
| `--zebra` | `#E89A1C` | Exposure stripes, BASE 3 world only |
| `--paper-ui` | `#1E211F` | Brackets when the viewfinder sits on milk white |
| `--green` | `#1E7A68` | Links and focus ring |

Variant "camera profiles":
| Variant | Base | Ground | UI | Profile label |
|---|---|---|---|---|
| MASTER 26 | `#1F5C45` | `#0A2A20` | `#D9E8DF` | `PROFILE · CANOPY` |
| ROOT 14 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | `PROFILE · RED EARTH` |
| BASE 3 | `#E89A1C` | `#5A3304` | `#F8E4C2` | `PROFILE · GOLDEN HOUR` |
| ESSENTIAL | `#CDB89A` | `#F4EDE2` | `#4D4130` | `PROFILE · CLEAN FEED` |

### Typography
- **Readouts:** *JetBrains Mono* 500 (OFL), 11–13 px, uppercase, tabular numerals, +0.06em.
- **Labels:** *Inter Tight* 600, 10–11 px, +0.2em.
- **Title cards:** *Fraunces* 300, opsz 144, SOFT 30, centred in the title-safe frame. It is the warm voice that keeps
  the style from becoming a dashboard. *Tiro Devanagari Hindi* for Hindi cards.
- Scale: readouts `.72rem` · labels `.66rem` · title card `clamp(2.6rem, 6vw, 6.5rem)` · body `1rem/1.6`, 56ch.

### Texture, imagery, iconography
- 3% film grain on footage only, never on UI. 16 mm gate weave (±0.6 px) only in Heritage.
- **Real footage and photography only inside a viewfinder.** Generated imagery is limited to out-of-focus bokeh plates
  and grain, because a frame around a generated image claims it was filmed.
- Icons: 1 px camera glyphs (REC, battery, lens, scan corners). No other icon set.

### Grid
A 12-column grid sits inside a **safe frame**: action-safe 93%, title-safe 90%. Readouts dock to the four corners.
The thirds overlay (1 px, 38% milk) shows only while a scene is focusing. Aspect masks: 2.39:1 letterbox for
documentary chapters, 16:9 for product scenes, **9:16 on mobile** (the native phone-camera frame). Gutter 16 px → 5vw.

### Header wordmark
The black write/un-write DESIGO® loop stays. On dark chapters the nav turns milk-white and the wordmark sits in the
letterbox bar, outside the frame, never under a bracket.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Focus pull (scene entry) | Footage blur 14 → 0 px, 900 ms `cubic-bezier(.16,1,.3,1)`; brackets 1.12 → 1.04 → 1.0 in `steps(3)` over 420 ms. Mechanical, no overshoot |
| Focus lock | Brackets tint hunt-gold → lock-mint for 600 ms, then return to milk |
| REC dot | 1 s on / 1 s off, `steps(1)`; static in reduced motion |
| Timecode | Scroll progress mapped to `HH:MM:SS:FF` at 25 fps: a chapter position, not real time |
| Exposure in | `brightness(.55) → 1`, 600 ms, like an iris opening |
| Chapter cut | Letterbox bars close (180 ms `--ease-inout`) and reopen (240 ms). No iris wipes, no flares |
| Rack focus | Two layers swap sharpness (0 ↔ 10 px blur) over 700 ms |

**Cursor states:** default 14 px hairline "+" · **link**: four corner brackets snap around the target (240 ms) ·
**image or video**: 48 px spot-meter circle with `FOCUS` · **360**: `◄ DRAG ►` under a turntable arc · **QR zone**:
scan corners pulsing at 1.6 s · **text**: native caret · **disabled**: brackets at 30% · touch: none.

**Hover:** buttons are camera soft keys: a label whose frame corners draw first (240 ms), then the full 1 px frame
(600 ms). Arrows travel 6 px; magnetic offset ≤ 6 px.

## 5. The hero bottle and the four variants

The bottle is the **subject in focus**, centre-frame on a tripod-steady float (±6 px over 6 s; a locked-off camera
feels premium). AF brackets hug its silhouette with a 24 px margin and lock once the hero has loaded. Contact shadow
and pointer sheen stay.

- **Before 360 frames:** a ±25° turn with sheen sweep, and an honest corner readout `SINGLE FRAME · 360 SEQUENCE PENDING`.
- **After:** the Bottle360Viewer becomes a **turntable shoot**. Drag with 900 ms inertia, readout `TURNTABLE · 036 / 072`,
  and a 0–360° hairline angle scale along the bottom of the safe frame.

| Variant | Camera-interface world |
|---|---|
| **MASTER 26** | Forest canopy (C1); dappled leaf light crosses the bottle. Lower-third caption: "Twenty-six herbs. The fullest expression of the source." with the herb count dotted-underlined as pending. |
| **ROOT 14** | Red earth strata (C2), warm grade, a slow 4% dolly push-in. "Fourteen herbs, rooted in free grazing." (count pending). |
| **BASE 3** | Golden-hour field (C3). The only place with **zebra stripes** (45°, amber, 20%) over the sun disc; they vanish when the bottle locks focus. "The everyday foundation." |
| **ESSENTIAL** | Ivory gallery (C4), ink UI, `CLEAN FEED`: no zebras, no grid, only four brackets and the bottle. "Simple, balanced, honest." |

**Info panel** (bottom-right): `DESIGO® V1+` · name in Fraunces 48 px · price and size as readouts with dotted
underline and "pending approval" tooltip · descriptors as a mono list · `RESERVE ———→`.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk white, ink UI. Brackets around the bottle, `● REC` top-left, location tag `JODHPUR, RAJASTHAN` top-right (pending approval, like `contact.city`). "MILK / FROM THE / SOURCE." as a left title card; two soft-key CTAs. |
| 02 | Bottle becomes the story | Bottle pinned. Each of the six words arrives by **rack focus**: the word sharpens while the bottle softens, then focus returns. Milk → forest; UI flips to milk. |
| 03 | Cow → bottle | A **contact sheet**: seven frames on a sprocketed strip, each with timecode and station name, the current one ringed in a gold grease-pencil loop. E1–E7 frames are tagged `ILLUSTRATION`. |
| 04 | Where it begins | **Documentary.** Real farm footage in 2.39:1, REC, timecode, location at region level only ("WESTERN RAJASTHAN"). Until footage arrives: an AssetSlot reading "NO SIGNAL · FARM FOOTAGE PENDING". |
| 05 | Breeds | **Portrait framing guides** (4:5, eye-line thirds), never detection boxes. Name lower-left, region in mono, "Breed list client-stated · approval pending". |
| 06 | Traceability | **GPS-track playback** on forest: the path drawn as a recorded track with an editor scrub bar whose markers are the eight nodes. Watermark readout `ILLUSTRATIVE JOURNEY — NOT LIVE DATA`. |
| 07 | Quality | **Macro lens** on the 16-point test card (real photo when supplied). Each parameter is a focus point; all result readouts say `— PENDING LAB CONFIRMATION`. A histogram computed from the actual image is honest decoration. |
| 08 | Four milks | Four camera profiles (section 5), with a 01–04 mode list on the left edge. |
| 09 | Milk as material | High-speed look on the canvas ribbon; the readout says `SIMULATION`, never a frame rate. |
| 10 | Heritage | **Archival 16 mm**: rounded gate, sepia, grain, gold hairline. No REC: the archive is not live. |
| 11 | Technology | Charcoal monitor. The seven verbs sit on a **mode dial** that clicks one detent per verb with scroll. Statement as a title card. |
| 12 | Ghee | Warm tungsten grade, slow push-in on the jar; three grades as lower thirds linked to their milks; prices pending. |
| 13 | Trace your milk | **Signature.** Mobile: tap "SCAN BOTTLE" → permission → live viewfinder with QR corners ("Align the code on the bottle"). Desktop or refusal: manual 32 px mono input with the demo ID prefilled. The result reveals as a clip log. `DEMO` badge always visible. |
| 14 | Story | A **clip bin** of verified milestones as dated thumbnails; pending ones hidden in production. |
| 15 | Final CTA | `■ STOP`. The frame freezes on the returning bottle, then "Know where your milk comes from." Milk → forest. |

**Inner pages:** /milk is a **monitor wall** of four muted 6 s bottle loops, each expanding to full frame via View
Transition · /milk/[variant] has the profile world, the turntable viewer and a "clip info" facts sheet with pending
values · /origin is a documentary with transcripts · /trace combines track playback and scanner · /technology has
the mode dial over seven 100vh scenes · /about uses interview lower thirds and the clip bin · /ghee is tungsten with
a 3-shot bilona sequence · /reserve is a single bracketed frame with no REC dot (nobody is recorded while typing).

## 7. Component variants

`ViewfinderFrame` · `FocusBrackets` (lock, hunt, snap) · `RecIndicator` · `Timecode` · `ExposureReadout` (reads
`Claim.status`; pending shows a dash) · `RackFocus` · `LetterboxCut` · `ContactSheet` · `GpsTrackPlayback` · `ScrubBar` ·
`ModeDial` · `QRScanner` (`getUserMedia` + `BarcodeDetector`, JS fallback) · `ClipBin` · `LowerThird` · `FilmGate16` ·
`ImageHistogram` · `CameraCursor` · `SoftKeyButton` · `NoSignalSlot`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Monitor palette, readout system | Tokens, readout specimen, profile tokens | Tabular numerals; REC ≥ 3:1; fonts ≤ 140 KB | Wordmark vector | 2 |
| 2 | Grid & shell | Safe frames, nav, cursor | `ViewfinderFrame`, `CameraCursor` | Wordmark loop never overlapped | — | 3 |
| 3 | Hero | Bottle in focus | Hero, bracket lock | LCP ≤ 2.2 s; brackets aligned at 4 breakpoints | Render (have) | 3 |
| 4 | Bottle → story | Rack-focus words | Pinned scene | Reduced motion = static list | — | 3 |
| 5 | Cow → bottle | Contact sheet | Strip + timecodes | Illustrations tagged; vertical on mobile | E1–E7 | 3 |
| 6 | Origin / farm | Documentary | Letterbox player, captions | Real footage only; region-level location | Farm footage | 4 |
| 7 | Breeds | Portrait guides | 6 framed portraits | No reticle on animals; status visible | D1–D6 | 2 |
| 8 | Trace map | Track playback | `GpsTrackPlayback`, `ScrubBar` | Keyboard scrub; "not live data" visible | — | 4 |
| 9 | Quality | Macro test card | Focus points, histogram | Zero unconfirmed values | Test-card photo | 3 |
| 10 | Four worlds + 360 | Profiles, turntable | 4 scenes, viewer | UI text ≥ 4.5:1 per profile; counter correct | C1–C4, 360 frames | 7 |
| 11 | Heritage | 16 mm archive | `FilmGate16` | Weave off in reduced motion | Archive photos | 2 |
| 12 | Technology | Mode dial | 7 verbs | Public vocabulary only | — | 3 |
| 13 | Ghee | Tungsten scene | Push-in, captions | Prices pending-styled | Jar cut-out | 2 |
| 14 | Trace-your-milk | Real scanner | `QRScanner`, manual entry | iOS Safari + Android Chrome; refusal handled; nothing stored; DEMO visible | Real QR sample | 5 |
| 15 | /milk, /milk/[variant] | Monitor wall + product | Wall, transitions, facts sheet | Videos paused off-screen; fallback fade | 360 frames | 5 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Every video captioned with transcript | Footage | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | Portraits | 4 |
| 18 | Mobile | 9:16 viewfinder | Vertical frames, scan-first ch. 13 | No horizontal scroll; HUD in 2 corners | — | 3 |
| 19 | A11y + reduced motion | Quiet mode | Static frames | WCAG 2.2 AA; HUD `aria-hidden`; nothing flashes > 1 Hz | — | 2 |
| 20 | Perf, QA, handover | Ship | Video budget, QA list | Lighthouse ≥ 92; CLS < 0.05 | All | 4 |

**Total:** about 68 days (about 34 as a layer on chapters 04, 06, 13, /trace and /origin).

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** 6–10 farm clips (10–20 s, 4K, locked-off, natural sound: grazing, milking, collection,
chilling, filling, early delivery); a macro photo of the real test card; a bottle-neck QR close-up plus one live
sample ID (or approval to use the sample format only); the 72-frame turntable; consented interview portraits.

**Images to generate** (illustration, texture or backdrop only; `web/public/desigo/styles/camera-interface/`; append the
house-style tail; full spec in section 12.7). Brackets, REC, timecode and scan corners are built in code, never generated.
| # | File | Size | Prompt |
|---|---|---|---|
| CAM1 | `bokeh-forest.png` | 3200×2000 | Completely out-of-focus deep forest greens with large soft circular bokeh, no recognisable objects, empty center, no text, no watermark, no logo, no letters |
| CAM2 | `bokeh-golden.png` | 3200×2000 | Defocused golden-hour light, soft amber bokeh discs on deep brown, abstract, empty center, no text, no watermark, no logo, no letters |
| CAM3 | `grain-16mm.png` | 2048×2048, seamless | Seamless 16 mm film grain on neutral mid-grey, fine and even, no scratches, no text, no watermark, no logo, no letters |
| CAM4 | `film-gate.png` | 3200×1800, transparent | Black 16 mm projector gate mask with softly rounded, slightly irregular corners, transparent center, no sprockets, no text, no watermark, no logo, no letters |
| CAM5 | `lens-dust.png` | 3200×2000, transparent | Barely visible lens dust specks and a faint warm-gold light leak at one edge, transparent background, no text, no watermark, no logo, no letters |

## 10. Performance, accessibility and mobile

- Video: AV1 + H.264, ≤ 2.5 MB per 10 s loop at 1080p, AVIF posters for LCP, `preload="none"` except the first clip,
  auto-pause off-screen.
- HUD is CSS and SVG only; timecode updates only while in view.
- Scanner: decoding is on-device, nothing is uploaded or stored, the camera stops when the chapter leaves view, and
  a privacy note sits under the viewfinder.
- Accessibility: readouts are `aria-hidden` except result lines (`aria-live="polite"`); captions and transcripts on
  every video; no blinking in reduced motion; 2 px `--green` focus rings outside the brackets.
- Mobile: 9:16 frames, HUD in two corners only, scan button first in chapter 13, readouts ≥ 12 px, info panel as a
  bottom sheet.

## 11. Risks and premium guardrails

**Risks:** a surveillance connotation, HUD clutter, fake readout data, generated images framed as "filmed here", and
camera-permission anxiety.

**Premium guardrails**
1. The full HUD appears only in witnessing chapters (04, 06, 13, /origin, /trace). Elsewhere, brackets only.
2. Never put crosshairs, detection boxes or tracking reticles on cows, farmers or customers.
3. Every readout is real metadata, a scroll position or an honest dash. "— pending lab confirmation" is a valid readout.
4. Only real footage goes inside a REC frame.
5. A maximum of 4 readouts per viewport, one REC dot and one accent per profile.
6. Farm locations are shown at region level only.
7. Motion is mechanical and quiet: stepped brackets, no flares, no glitch, no shake.
8. The scanner asks for permission only on a tap, says why, and works fully without it.
9. Never write superlatives on title cards. The frame provides the authority.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: body had palette, type and motion but no colour roles, states, success/pending/demo tokens, radius/shadow scale, component states, motion tokens or negative prompts, and only 5 image prompts (no hero portrait or variant worlds). Added all; REC contrast corrected to 4.3:1; ESSENTIAL profile table relabelled (ground/UI) to match system base/deep/light; image folder aligned to `styles/camera-interface/`. Fonts already OFL. No claim violations found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#171918` | viewfinder charcoal: soft-key fill, letterbox bars, monitor surround | 16.1:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk hairline UI and labels on charcoal | 16.1:1 on primary |
| Secondary | `--c-secondary` | `#0B3B32` | forest monitor ground for witnessing chapters (04, 06, 13) | 11.3:1 on bg |
| Accent | `--c-accent` | `#1E7A68` | links, focus ring on light; swaps to `#7FE0B8` focus-lock on dark | 4.7:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | milk page (hero, product chapters) |  |
| Surface | `--c-surface` | `#EFE9DC` | info panel, clip-info facts sheet, input well | text on surface 13.4:1 |
| Text | `--c-text` | `#1E211F` | body and title-card text on milk | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5E625C` | readout labels, captions, timecode on light | 5.7:1 on bg |
| Line | `--c-line` | `rgba(30,33,31,.16)` | thirds grid / safe-frame hairlines on light; `rgba(247,244,236,.38)` on dark | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#C8A96B` | verified source tick · "— pending lab confirmation" readout + dotted underline · DEMO soft-key badge fill; charcoal label 7.9:1 on it | ok 4.7:1 · pending 5.7:1 · demo 2.0:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--rec` | `#E0463A` | REC dot only (4.3:1 on charcoal); never text, never on animals or people | |
| Style extra | `--af-lock` | `#7FE0B8` | focus confirmed, 600 ms only; accent on dark | |
| Style extra | `--af-hunt` | `#C8A96B` | focus searching brackets | |
| Style extra | `--zebra` | `#E89A1C` | exposure stripes, BASE 3 world only, 20% | |
| Style extra | `--vf-ui` | `rgba(247,244,236,.88)` | brackets, safe frames, readouts on dark | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | PROFILE · CANOPY: ground = deep, UI = light; bokeh plate CAM-V1 behind; lower-third in milk |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | PROFILE · RED EARTH: ground = deep, UI = light; warm grade, 4% dolly push-in |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | PROFILE · GOLDEN HOUR: ground = deep, UI = light; the only world with `--zebra` stripes |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | PROFILE · CLEAN FEED: ground = light, UI = deep (ink brackets), no zebras, no grid |

**Dark-chapter inversion:** in witnessing chapters (04, 06, 11, 13, /trace, /origin) `--c-bg` → `#171918` (or `#0B3B32` for 06), `--c-text` → `#F7F4EC` (14.8:1), `--c-text-muted` → `#A7ABA5` (7.6:1), `--c-line` → `rgba(247,244,236,.38)`, `--c-primary` ↔ `--c-on-primary` (milk soft keys with charcoal labels), `--c-accent` → `#7FE0B8`; the logo turns white and sits in the letterbox bar, outside the frame.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | 300 · opsz 144 · SOFT 30 | clamp(2.6rem, 6vw, 6.5rem) | 0.95 | −0.03em | sentence; title card in title-safe frame |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | 300–400 · opsz 72–144 | H1 clamp(2.2rem, 4.5vw, 4.5rem) · H2 clamp(1.6rem, 2.8vw, 2.6rem) | 1.05 | −0.02em | sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | 1rem (16 px), measure 56ch | 1.6 | 0 | sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 600 | .66rem (10.5 px; ≥ 12 px on mobile) | 1.2 | +0.2em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 500 · `tnum` | .72rem readouts; 2rem trace input | 1.3 | +0.06em | UPPERCASE readouts |
| Devanagari (optional) | Tiro Devanagari Hindi | `@fontsource/tiro-devanagari-hindi` | 400 / 400 italic | title cards +6% size | 1.25 | 0 | — |

Licence: Fraunces, Inter Tight, JetBrains Mono and Tiro Devanagari Hindi are all SIL OFL 1.1, self-hosted from @fontsource. Pairing: monospace readouts give the camera's evidence voice, Fraunces title cards keep the brand's warmth, so it never becomes a dashboard.

### 12.3 Layout & surfaces
- **Grid:** 12 columns inside a safe frame (action-safe 93%, title-safe 90%), gutter 16 px mobile → 5vw desktop, max content width 1440 px; readouts dock to the four corners; aspect masks 2.39:1 (documentary), 16:9 (product), 9:16 (mobile)
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; corner readouts inset 24 px (16 px mobile)
- **Radius scale:** sm 0 · md 0 · lg 0 (hard monitor edges); pill 999 px for the REC dot and badge only; film-gate mask uses its own rounded image
- **Border style:** 1 px `--vf-ui` hairlines; focus brackets are four 16 px L-corners (24 px on the bottle), 1.5 px stroke
- **Shadow / elevation:** UI is flat (no shadows); bottle gets contact shadow `0 24px 40px -18px rgba(23,25,24,.35)` + ellipse 8 px blur at 35%
- **Texture / overlay:** 3% film grain on footage only (never UI); 16 mm gate weave ±0.6 px only in Heritage; thirds grid at 38% milk only while focusing

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: camera soft key: uppercase Inter Tight 600 label + travelling arrow inside a 1 px frame whose four corners draw first. Sizes 44 px (sm) / 52 px (md) height, padding 0 24 px, radius 0. Default: charcoal `#171918` fill, milk label · hover: corner brackets draw (240 ms) then full frame (600 ms), arrow +6 px, magnetic ≤ 6 px · focus-visible: 2 px `--c-accent` ring 3 px outside the brackets · active: brackets snap in 1.04 → 1.0 `steps(3)` · disabled: 30% label, no brackets · loading: label replaced by `● REC`-style blinking dash `steps(1)` 1 s (static in reduced motion). A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: ghost soft key: transparent fill, 1 px `--c-text` frame (milk on dark), same sizes. Hover: fill `rgba(30,33,31,.06)`, corners thicken to 2 px · focus-visible: accent ring · active: inverted fill · disabled: 30% · loading: frame corners rotate through the four positions (stepped, 240 ms each). Used for "SCAN BOTTLE" on desktop and secondary CTAs.
- **Text / arrow link**: Inter Tight 500 underline 1 px + `———→`; hover: four mini-brackets snap around the word (240 ms) and arrow travels 6 px · focus-visible: accent ring · active: underline 2 px · disabled: muted, no arrow · loading: n/a. Visited is not styled.
- **Icon button** (incl. menu): 40 × 40 px (44 px hit area) square, 1 px glyph (REC, lens, battery, scan-corners, menu = three horizontal safe-frame lines). Hover: brackets around the square · focus-visible: accent ring · active: 0.96 scale stepped · disabled: 30% · loading: corner pulse 1.6 s. Every icon button has an `aria-label`.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px bar sitting in the top letterbox band, outside the safe frame: logo left, six links in Inter Tight 600 caps, RESERVE as a primary soft key right; the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style). Hides on scroll down, returns on up (240 ms). Mobile: 56 px bar, menu icon opens a full-screen 9:16 viewfinder sheet with links as large title-card lines and `● MENU` readout; Esc/close returns focus. The logo is never placed under a bracket or readout.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 14 px hairline "+" · hover (link): four corner brackets snap around the target (240 ms) · ROTATE: `◄ DRAG ►` under a turntable arc on the 360 viewer · EXPLORE: 48 px spot-meter circle with `FOCUS` on images/video · ENTER: brackets + `REC ●` on a chapter entry link · VIEW: spot-meter with `VIEW` on thumbnails/monitor wall · TRACE: scan corners pulsing 1.6 s over QR zones and trace nodes. Text: native caret; disabled: brackets at 30%. Touch: no custom cursor; tap shows a one-off focus-lock flash (600 ms) on the tapped element.
- **Card / panel / info block**: clip-info panel: `--c-surface` fill (or `rgba(23,25,24,.72)` on dark), radius 0, four corner brackets, mono header readout (`CLIP 04 · WESTERN RAJASTHAN`), Inter Tight body. Padding 24 px (16 px mobile). Hover (if linked): brackets tighten 1.02 → 1.0 · focus-visible: accent ring · loading: `NO SIGNAL` slot with grain.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): 16–20 px high, mono .66rem caps, 0 8 px padding, pill radius only here. Pending verification: transparent, `--c-pending` text + 1 px dotted underline, label `— PENDING APPROVAL`; DEMO · not live data: `--c-demo` gold fill, charcoal label `DEMO · NOT LIVE DATA`, always visible on demo content; ILLUSTRATION tag for E1–E7 frames; `SIMULATION` for ch. 09. Static (never blinking).
- **Input + form field** (Trace-your-milk bottle ID): Trace-your-milk: 32 px JetBrains Mono 500 input on a bracketed field (min-height 64 px), placeholder/demo value `DSG-BTL-000001-3 (sample format)`, label above in caps. States: default 1 px milk hairline · hover: brackets appear · focus-visible: brackets lock mint + 2 px accent ring · active/typing: caret only · disabled: 30% · loading: scan line sweeps once (900 ms) and `SEARCHING…` readout · error: `--rec` text "No record for this ID · check the code" with icon. Mobile primary path is the camera scanner (tap → permission → viewfinder with QR corners); manual input is always available.
- **Divider / ornament**: 1 px safe-frame hairline (`--c-line`) or a timecode rule: a hairline with `00:04:12:08` mono readout at its left end. In Heritage, a gold `#C8A96B` 0.5 px rule.
- **Section header** (chapter number + title pattern): readout line `CH 06 · TRACEABILITY` (mono caps, muted) + timecode `HH:MM:SS:FF` mapped to scroll + title card in Fraunces 300 at H1 inside the title-safe frame; REC dot only in witnessing chapters.
- **Product info block** (variant name, code, price-pending, size, descriptors): bottom-right clip-info panel: mono code line, name in Fraunces 48 px, editorial line, then readouts PRICE / SIZE / HERBS each as `₹94 · PENDING` with dotted underline and tooltip; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; `RESERVE ———→` soft key. Mobile: bottom sheet.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the bottle is the subject in focus: centred, AF brackets 24 px outside its silhouette, lock on load; contact shadow on milk or on the variant ground; no plinth. Float ±6 px over 6 s (tripod-steady), tilt ±6°. Before 360 frames: ±25° turn + readout `SINGLE FRAME · 360 SEQUENCE PENDING`; after: turntable readout `TURNTABLE · 036 / 072` and a 0–360° hairline scale along the safe frame bottom.
- **Trace node / timeline step**: GPS-track playback: node = 12 px ring on the recorded track with a scrub-bar marker below; label mono caps (`COLLECTION · ORIGIN`). States: default milk ring · hover: brackets snap around · focus-visible: accent ring · active/current: filled `--af-lock` dot + panel opens · disabled (not yet reached): 30% · loading: `SEARCHING` readout. Watermark readout `ILLUSTRATIVE JOURNEY — NOT LIVE DATA` always on. Nodes are buttons in a list (keyboard ← →).

### 12.5 Iconography & illustration
Icons: 1 px (1.5 px at 24 px) camera glyph set on a 24 px grid, square caps, no fill except the REC dot: REC, battery, lens, scan corners, play/stop, turntable, menu. Illustration: none generated inside a REC frame; E1–E7 journey drawings appear only as contact-sheet frames tagged `ILLUSTRATION`. Photo treatment: real footage/photos only inside viewfinders, graded warm-neutral (lifted blacks, +4 warmth), 2.39:1 or 9:16 crops, 3% grain; generated plates are out-of-focus bokeh, grain and gate masks only.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | focus pull, reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | letterbox cut, scene changes |
| `--ease-step` | `steps(3)` | bracket snap 1.12 → 1.04 → 1.0 |
| `--dur-micro` | `240ms` | bracket snap, hover, arrow travel |
| `--dur-reveal` | `600ms` | exposure in, focus-lock tint |
| `--dur-scene` | `900ms` | focus pull (blur 14 → 0 px) |
| `--dur-cut` | `180ms / 240ms` | letterbox close / reopen |
| `--rec-blink` | `1s steps(1)` | REC dot on/off |

Signature transitions: focus pull on scene entry; rack focus (two layers swap 0 ↔ 10 px blur, 700 ms) for chapter 02 words; letterbox cut between chapters (no iris wipes, flares, glitch or shake). Scroll: Lenis + ScrollTrigger `scrub: 1`; timecode is scroll position at 25 fps, never real time. Reduced motion: no blur pulls, REC static, letterbox cuts become 0 ms swaps, timecode frozen, scanner still works; nothing flashes faster than 1 Hz.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *documentary camera look, shallow depth of field, natural light, restrained palette of milk white #F7F4EC, deep forest green #0B3B32, charcoal #171918 and warm gold #C8A96B, subtle film grain, calm, high-end, no text, no watermark, no logo, no letters*

| # | File path (web/public/desigo/styles/camera-interface/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| CAM-H1 | `web/public/desigo/styles/camera-interface/hero-bokeh-milk-landscape.png` | 3200×2000 (16:10) | no | Completely out-of-focus warm milk-white morning light with a few very large soft circular bokeh discs in pale gold, airy, empty center, no recognisable objects | base negatives + sharp objects, faces, animals, lens flare streaks, HUD graphics | Ch. 01 hero backdrop (desktop) |
| CAM-H2 | `web/public/desigo/styles/camera-interface/hero-bokeh-milk-portrait.png` | 1400×2400 (9:16) | no | Vertical out-of-focus warm milk-white morning light with soft pale-gold bokeh discs concentrated in the upper third, calm, empty center | base negatives + sharp objects, faces, animals, lens flare streaks, HUD graphics | Ch. 01 hero backdrop (mobile 9:16 viewfinder) |
| CAM-V1 | `web/public/desigo/styles/camera-interface/bokeh-forest.png` | 3200×2000 + 1400×2400 portrait | no | Completely out-of-focus deep forest greens #1F5C45 and #0A2A20 with large soft circular bokeh, dappled canopy light, no recognisable objects, empty center | base negatives + sharp leaves, trees in focus, people | MASTER 26 world (PROFILE · CANOPY) |
| CAM-V2 | `web/public/desigo/styles/camera-interface/bokeh-red-earth.png` | 3200×2000 + 1400×2400 portrait | no | Defocused warm red-earth tones from crimson #B3202A to oxblood #4A0A0F, soft horizontal bands and a few warm bokeh discs, abstract, empty center | base negatives + blood, fire, sharp rocks, people | ROOT 14 world (PROFILE · RED EARTH) |
| CAM-V3 | `web/public/desigo/styles/camera-interface/bokeh-golden.png` | 3200×2000 + 1400×2400 portrait | no | Defocused golden-hour light, soft amber #E89A1C bokeh discs on deep brown #5A3304, a large soft sun glow behind center, abstract | base negatives + sharp wheat, people, zebra stripes, HUD graphics | BASE 3 world (PROFILE · GOLDEN HOUR) |
| CAM-V4 | `web/public/desigo/styles/camera-interface/bokeh-ivory.png` | 3200×2000 + 1400×2400 portrait | no | Very soft defocused ivory gallery light, warm ivory #F4EDE2 walls dissolving into pale sand #CDB89A, one faint skylight glow, almost empty | base negatives + furniture in focus, people, frames, artworks | ESSENTIAL world (PROFILE · CLEAN FEED) |
| CAM-J1 | `web/public/desigo/styles/camera-interface/track-dusk-plate.png` | 3600×2000 (16:9) | no | Defocused aerial dusk view of a Rajasthan landscape in deep forest green and charcoal tones, faint warm lights scattered far apart, soft, abstract enough that no place is identifiable, empty center for a drawn GPS track | base negatives + map labels, roads with signs, satellite map UI, identifiable villages | Ch. 06 GPS-track playback backdrop (marked ILLUSTRATIVE) |
| CAM-T1 | `web/public/desigo/styles/camera-interface/grain-16mm.png` | 2048×2048, seamless | no | Seamless 16 mm film grain on neutral mid-grey, fine and even, no scratches | base negatives + scratches, dust hairs, vignetting, colour casts | Footage overlay, Heritage chapter |
| CAM-T2 | `web/public/desigo/styles/camera-interface/film-gate.png` | 3200×1800 (16:9) | yes (real alpha) | Black 16 mm projector gate mask with softly rounded, slightly irregular corners, transparent center, no sprockets | base negatives + sprocket holes, frame numbers, edge codes | Ch. 10 Heritage `FilmGate16` |
| CAM-T3 | `web/public/desigo/styles/camera-interface/lens-dust.png` | 3200×2000 | yes (real alpha) | Barely visible lens dust specks and a faint warm-gold light leak at one edge, transparent background | base negatives + heavy dirt, scratches, rainbow flares | Ch. 15 freeze frame, optional overlay at 20% |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Brackets, REC, timecode, scan corners, histograms and readouts are built in code, never generated. Real farm footage only inside REC frames.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/47_camera-interface.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/camera-interface/
