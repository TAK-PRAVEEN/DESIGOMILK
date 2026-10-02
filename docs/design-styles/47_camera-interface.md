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
| `--rec` | `#E0463A` | REC dot only: ROOT red `#B3202A` lifted to 4.2:1 on charcoal |
| `--af-lock` | `#7FE0B8` | Focus confirmed (signal), 600 ms only |
| `--af-hunt` | `#C8A96B` | Focus searching (gold) |
| `--zebra` | `#E89A1C` | Exposure stripes, BASE 3 world only |
| `--paper-ui` | `#1E211F` | Brackets when the viewfinder sits on milk white |
| `--green` | `#1E7A68` | Links and focus ring |

Variant "camera profiles":
| Variant | Base | Deep | UI | Profile label |
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

**Images to generate** (illustration, texture or backdrop only; `web/public/desigo/styles/camera/`; append the
house-style tail). Brackets, REC, timecode and scan corners are built in code, never generated.
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
