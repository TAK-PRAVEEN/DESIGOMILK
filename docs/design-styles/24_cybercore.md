# 24 — Cybercore · DESIGO® build plan

**Fit score: 1 / 5 for the whole site** · **Best used for:** one "open the source" experience, `/trace/source`, a
playful raw-data view of a **demo** bottle journey (windows, logs, wireframes) that celebrates transparency, plus
youth social content. It can also be a hidden easter egg reached from the footer ("view the system"). It must never
be used for the product, the farm or heritage.

---

## 1. Style essence

Cybercore is an internet-born aesthetic (named and spread through Tumblr and TikTok around 2019–2022) that
romanticises *the computer itself*: early-web interfaces (Windows 95/98 dialogs, pop-ups, pixel cursors), wireframe
globes and grids, binary and hex streams, loading bars, glitter and holographic textures, digital collage and
information overload. Where Y2K is optimistic consumer design and Cyberpunk is dystopian fiction, Cybercore is
**nostalgic screen culture**: the joy of windows, files and data as objects.

Three reference points:
1. **Windows 95/98 and early-web UI** (bevelled buttons, title bars, "Loading… 47%"). Instantly recognisable,
   warm for millennials and ironic for Gen Z.
2. **Net art**: JODI.org, Olia Lialina's *My Boyfriend Came Back from the War*, which treat the browser as material.
3. **Wireframe data imagery**: rotating vector globes, terrain meshes and the "Matrix rain" vernacular.

## 2. Why it fits DESIGO® and where it fights

**Fits (very narrowly)**
- **Radical transparency.** "Open the hood" is on-message: DESIGO® records collection, batch, chiller, barrel, plant
  and bottle. A playful "view source" of a demo journey makes the claim *every hand-off is recorded* feel concrete.
- The QR-per-bottle and RTCOM apps give the brand genuine digital substance to celebrate.
- It works as youth social content ("POV: your milk has a log file").

**Fights (almost everywhere)**
- Information overload contradicts principle 2 ("every effect must earn its place") and the calm luxury target.
- Pop-ups, fake dialogs and loading bars mimic *bad* UX and malware tropes, which erodes trust on a commerce site.
- Exposing "raw data" aesthetics risks implying that internal operational detail is public (forbidden by IA §3).
- Glitter and holographic textures cheapen food.

**Verdict: 1/5.** A single, bounded, clearly-labelled DEMO experience at most. The full 20-phase plan is still
specified as requested, with "bounded scope" markers.

## 3. Art direction

### Palette: "System Milk" (Win98 grey is replaced by brand milk tones)
| Token | Hex | Use |
|---|---|---|
| `--sys-desktop` | `#0B3B32` | "Desktop" background (brand forest, instead of teal #008080) |
| `--sys-window` | `#EFE9DC` | Window body (brand milk-2) |
| `--sys-face` | `#E3DCCB` | Button face |
| `--sys-hilite` | `#F7F4EC` | Bevel highlight (brand milk) |
| `--sys-shadow` | `#8E8778` | Bevel shadow |
| `--sys-dark` | `#171918` | Bevel outer, text (brand charcoal) |
| `--sys-title` | `#1E7A68` | Active title bar (DESIGO green, instead of navy) |
| `--sys-title-2` | `#7FE0B8` | Title gradient end (brand signal) |
| `--sys-terminal` | `#0E100F` | Log windows |
| `--sys-phosphor` | `#7FE0B8` | Terminal text (≈ 12:1 on terminal) |
| `--sys-amber` | `#E89A1C` | Warnings, "DEMO" (BASE cap) |
| `--sys-select` | `#C8A96B` | Selection highlight (brand gold) |

Variant "file icons": MASTER `#1F5C45`, ROOT `#B3202A`, BASE `#E89A1C`, ESSENTIAL `#CDB89A`, each as a 32×32 icon
of the bottle with its cap colour.

### Typography
- **System UI:** *W95FA*-style bitmap fonts are not freely licensed for commercial web, so use *Pixelify Sans* (OFL)
  for title bars and *VT323* (OFL) for terminal logs.
- **Readable text inside windows:** *Inter Tight* 15/24, because nobody should read paragraphs in pixel type.
- **Data:** *Space Mono* (OFL) for hex, IDs and JSON-like views.
- **Display (wireframe moments):** *Major Mono Display* (OFL), used sparingly for words like "SOURCE".
- **Brand anchor:** the DESIGO® wordmark (vector) appears unaltered in the "taskbar".

### Texture, imagery, iconography
- **Bevels:** 2 px inset/outset borders using the token set. These are built in CSS, not images.
- **Wireframe globe and terrain:** an SVG or lightweight canvas wireframe of *India / Rajasthan* (not a fake 3D
  farm), with breed homeland regions as vertices (labelled "breed homelands", not farm locations).
- **Data rain:** not Matrix katakana. It uses the *public verbs* and demo IDs streaming slowly
  (ORIGIN · TRACE · TEST …), at 20% opacity, as background only.
- **Pop-ups:** at most one at a time, user-triggered only, never auto-opening.
- **Glitter / holographic:** **excluded** (cheapens food).
- **Icons:** 32×32 desktop icons for "Farm.dir", "Batch.log", "Chiller.tmp", "Bottle.qr", "You.home": these are
  playful file metaphors of the trace nodes.

### Grid
The "desktop" is a free canvas (windows are draggable on desktop), but the default layout snaps windows to a
12-column grid at 8 px increments so the composition is designed, not random. Mobile ignores the desktop metaphor:
windows become stacked full-width cards.

## 4. Motion and interaction language

- **Instant like a real OS:** windows open with a 120 ms scale 0.96 → 1 plus outline-rectangle "zoom" (the Win95
  minimise trail), using `cubic-bezier(.16,1,.3,1)`.
- **Loading bars** are used *only* where something actually loads (360 frames), and they show real progress
  (frames loaded / total). There are no fake progress bars.
- **Scroll:** on the home chapter, scroll opens windows in sequence (one per trace node). On /trace/source the page is
  a desktop and scroll is disabled within it, replaced by clicks.
- **Hover:** buttons invert their bevel (pressed state), icons get a gold selection box, and title bars brighten.
- **Cursor states:** default = classic arrow (pixel sprite, 2× scaled) · link = pointing hand · drag (window/360) =
  four-way move cursor · busy (only during real loading) = hourglass rendered as a *milk bottle* filling up ·
  text = I-beam · disabled = "not-allowed" sprite.
- **Sound:** off by default. An optional "startup" chime, behind a visible speaker icon in the taskbar.
- **Transitions:** windows minimise into the taskbar when leaving the chapter.

## 5. The hero bottle and the four variants

The bottle is opened **as a file in a viewer window**: "MASTER_26.bottle". Inside the window, the real render (later
the 360 sequence) floats on milk white, untouched by retro effects. The window chrome is the joke and the product is
serious.

- Float ±10 px over 6 s inside the window, pointer tilt ±8°, contact shadow on the window's milk background.
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards the "Bottle Viewer.exe" window
  has a real frame-loading progress bar, a slider ("Rotate: 0°–355°"), ◀ ▶ step buttons (5° steps = 1 frame of 72)
  and an "Auto-rotate" checkbox. These map directly to Bottle360Viewer props.

| Variant | Cybercore window |
|---|---|
| **MASTER 26** | `MASTER_26.bottle` with a forest title bar, the "Properties" tab listing code V1+ and descriptors (pending chips). |
| **ROOT 14** | `ROOT_14.bottle` with a red title bar. |
| **BASE 3** | `BASE_3.bottle` with an amber title bar. |
| **ESSENTIAL** | `ESSENTIAL.bottle` with an ivory title bar and almost-empty properties: "Simple, balanced, honest." |

The **Properties** dialog shows `size` and `price` with a "Status: pending approval" field, a literal rendering of
the `Claim.status` model.

## 6. Page-by-page treatment

(Full-site version. In the **bounded scope**, only `/trace/source` and an optional chapter-13 variant use this style.)

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | A forest "desktop" with one open window, "Milk from the source.", containing the bottle. The taskbar shows the DESIGO® wordmark and the nav as "Start" menu items. |
| 02 | Bottle becomes the story | Six desktop icons (ORIGIN, BREED, FEED, FARM, QUALITY, TRACE) appear around the bottle window, and each opens a small dialog with its one-line explanation. |
| 03 | Cow → bottle | **Style break to daylight paper**: real journey content. The cow is never a "file". |
| 04 | Where it begins | Base style (documentary). |
| 05 | Breeds | Base style (portraits). |
| 06 | Traceability | A "File Explorer" tree: Farm.dir → Collection.log → Batch.log → Chiller.tmp → Barrel.dat → Plant.sys → Bottle.qr → You.home. Each opens the public explanation from `traceNodes[]`. The address bar reads "C:\DEMO\illustrative-journey". |
| 07 | Quality | A "System Check" window listing the 16 parameters as checkboxes with status "— pending lab confirmation". Nothing is ticked until confirmed. |
| 08 | Four milks | Four `.bottle` files (section 5) in a folder view, which open as viewer windows. |
| 09 | Milk as material | A "screensaver": milk ribbons as a slow, elegant canvas animation (a nod to the old Windows "Mystify" screensaver). |
| 10 | Heritage | Base style. Paper. No cybercore. |
| 11 | Technology | A terminal window prints the seven verbs as a boot sequence: `> ORIGIN ... ok`. A wireframe India map rotates slowly. "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | Base style. |
| 13 | Trace your milk | **Signature (bounded scope).** A terminal: `trace DSG-BTL-000001-3` (sample format) prints a demo log, one line per node, each prefixed `[DEMO]`, next to a File Explorer view of the same journey. |
| 14 | Story | Base style, or a "changelog.txt" of verified milestones only. |
| 15 | Final CTA | Windows close one by one, leaving milk white, the bottle and "Know where your milk comes from." The style dissolves into the brand. |

**Inner pages:** `/trace/source` is the complete desktop experience (Explorer, Terminal, Bottle Viewer, Properties),
the only page fully in this style · /milk and /milk/[variant] are optional `.bottle` windows in campaign scope, base
style otherwise · /trace, /technology, /origin, /ghee and /about stay in base style · /reserve is **never**
cybercore: commerce must not look like a 1998 dialog box.

## 7. Component variants

`Desktop` (canvas, snap grid) · `Window` (title bar, bevel, minimise/close, drag) · `Taskbar` (wordmark, nav as Start
menu, sound toggle) · `DesktopIcon` · `FileExplorer` (trace tree) · `Terminal` (typed log, `[DEMO]` prefixes) ·
`PropertiesDialog` (claims with status) · `BottleViewerWindow` (wraps Bottle360Viewer with real progress) ·
`SystemCheck` (quality) · `WireframeIndia` (SVG) · `Screensaver` (MilkFlow) · `PixelCursor.system` ·
`AssetSlot.missingFile` ("File not found: farm-landscape.jpg. Requested from DESIGO®").

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | System Milk palette, bevel recipe | Tokens, Pixelify/VT323/Space Mono specimen | No Win-teal/navy; window body text in Inter Tight; AA contrast | — | 2 |
| 2 | Grid & shell | Desktop, window, taskbar, cursors | `Desktop`, `Window`, `Taskbar`, cursor set | Windows keyboard-operable (focus, Esc closes, arrow-move); snap grid | Wordmark vector | 5 |
| 3 | Hero | Bottle in a window | Hero desktop | Bottle untouched by effects; LCP ≤ 2.5 s | Render | 3 |
| 4 | Bottle → story | Desktop icons and dialogs | 6 icons, dialogs | Dialogs user-triggered only; static list in reduced motion | — | 3 |
| 5 | Cow → bottle | Daylight base journey | Base-style chapter | Cow never framed as a file | B4 | 2 |
| 6 | Origin / farm | Base style | — | — | B1, B2 | 1 |
| 7 | Breeds | Base style | — | — | B3 | 1 |
| 8 | Trace map | File Explorer trace | `FileExplorer` | Path "C:\DEMO\illustrative-journey"; public vocabulary only; no internal schema | — | 5 |
| 9 | Quality | System Check | `SystemCheck` | Nothing ticked without confirmed data | — | 2 |
| 10 | Four worlds + 360 | `.bottle` viewer windows | `BottleViewerWindow`, `PropertiesDialog` | Progress bar reflects real frame loading; slider maps 72 frames | 360 (A) | 6 |
| 11 | Heritage | Base style | — | — | — | 1 |
| 12 | Technology | Boot-sequence terminal, wireframe India | `Terminal`, `WireframeIndia` | Breed-homeland labels correct; not presented as farm map | — | 4 |
| 13 | Ghee | Base style | — | — | — | 1 |
| 14 | Trace-your-milk | Terminal demo | Terminal plus Explorer sync | `[DEMO]` on every line; screen-reader log (`role="log"`) | — | 4 |
| 15 | /milk, /milk/[variant] | Optional file views | Folder view template | Base-style fallback ready | 360 (A) | 3 |
| 16 | /origin, /trace, /technology | `/trace/source` page plus base pages | Full desktop page | Works fully with keyboard; mobile card mode | — | 6 |
| 17 | /about, /ghee, /reserve | Base style; optional changelog | Templates | /reserve has no cybercore | B11 | 3 |
| 18 | Mobile | Windows to cards | Stacked card mode | No draggable windows on touch; no horizontal scroll | — | 3 |
| 19 | A11y + reduced motion | Usable OS metaphor | ARIA dialogs, focus management, static rain | WCAG 2.2 AA; no auto-opening dialogs; no fake system warnings | — | 3 |
| 20 | Perf, QA, handover | Ship | Perf report, copy QA (no malware tropes) | JS for desktop ≤ 40 KB gz; LCP ≤ 2.5 s | All | 3 |

**Total:** about 61 days (full). **Bounded scope** (`/trace/source` plus chapter 13: phases 1, 2, 8, 10, 14, 16, 18–20):
about 30 days.

## 9. Assets needed from DESIGO®

- Approval of a **public demo journey** (which fields may be shown, in public vocabulary), because a "source view"
  must not leak real internal data or formats.
- The real bottle ID *format* approval (currently "DSG-BTL-000001-3 (sample format)").
- 360 sequences (the viewer window is the centrepiece) and the wordmark vector.
- Optional: real (anonymised) screenshots of the RTCOM apps, only if DESIGO® wants them public.

## 10. Performance, accessibility and mobile

- Windows are real HTML dialogs (`<dialog>` or ARIA `role="dialog"`) with focus trap, Esc to close and
  keyboard move (arrow keys while the title bar is focused).
- Data rain and the wireframe pause off-screen. Rain is disabled in reduced motion and on Save-Data.
- Pixel fonts only in title bars and short logs, with all content in Inter Tight.
- Terminal output uses `role="log"` with `aria-live="polite"` and throttled lines (≥ 300 ms apart).
- Mobile: no desktop metaphor. Windows become stacked cards with title-bar headers, and the terminal is full-width.

## 11. Risks and premium guardrails

**Risks:** looks like malware or spam pop-ups; information overload; cheap glitter aesthetics; implying internal data
is public; trivialising food safety ("System Check" looking like a joke).

**Premium guardrails**
1. Bounded: one page (plus optionally chapter 13). Never on hero commerce, /reserve, farm, breeds or heritage.
2. No fake system warnings, no "virus detected", no auto pop-ups and no fake progress bars.
3. The bottle and milk are never retro-filtered. Windows frame real, high-quality renders.
4. No glitter, holographic stickers or GIF clutter.
5. Every data surface says DEMO, uses public vocabulary only and never shows internal IDs, locus codes or staff info.
6. The quality "System Check" stays serious: no jokes about adulterants, only the list and pending status.
7. Brand colours replace the Windows teal/navy, so the nostalgia is quoted, not copied (no Microsoft trade dress).
8. The style dissolves back into milk-white DESIGO® at the end of every experience.
