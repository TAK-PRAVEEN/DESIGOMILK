# Build-ready spec sheet: template (section 12 of every style document)

All 55 style documents end with this section, with the same headings in the same order, so any style can be
built as a standalone prototype and compared side by side. Machine-readable tokens live in `specs/NN_<slug>.json`.

```markdown
## 12. Build-ready spec sheet

> Audit 2026-10-03: <one line: complete / what was missing and has now been added>

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | #...... | main brand colour of this style (CTAs, key accents) | vs background ≥ 4.5:1 for text use |
| Primary ink | --c-on-primary | #...... | text/icons on primary | |
| Secondary | --c-secondary | #...... | | |
| Accent | --c-accent | #...... | highlights, focus ring, data | |
| Background | --c-bg | #...... | page | |
| Surface | --c-surface | #...... | panels / cards / raised areas | |
| Text | --c-text | #...... | body text | ≥ 7:1 on bg |
| Muted text | --c-text-muted | #...... | captions, labels | ≥ 4.5:1 |
| Line | --c-line | #...... / rgba | hairlines, dividers | |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | | trace states, "pending verification", DEMO badge | |
Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).
Dark-chapter inversion: which tokens swap.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | | | | | | | |
| Headline H1–H2 | | | | | | | |
| Body | | | | | | | |
| Label / UI | | | | | | | |
| Data / mono | | | | | | | |
| Devanagari (optional) | | | | | | | |
Licence: all fonts must be open-licence (OFL/Apache). Pairing rationale in one line.

### 12.3 Layout & surfaces
Grid (columns / gutter / max-width), spacing scale, radius scale, border style, shadow/elevation, texture/overlay.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**
- **Secondary button**
- **Text / arrow link**
- **Icon button** (incl. menu)
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback
- **Card / panel / info block**
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data")
- **Input + form field** (Trace-your-milk bottle ID)
- **Divider / ornament**
- **Section header** (chapter number + title pattern)
- **Product info block** (variant name, code, price-pending, size, descriptors)
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background)
- **Trace node / timeline step**

### 12.5 Iconography & illustration
Icon style (stroke width, corner, fill), illustration technique, photo treatment (grade/crop/frame).

### 12.6 Motion tokens
| Token | Value | Use |
Easing curves, durations, signature transitions, scroll behaviour, reduced-motion fallback.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.
| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
Minimum 8 prompts: hero backdrop (landscape + portrait), the 4 variant worlds, one journey/trace illustration, one texture,
plus anything else the style needs.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/NN_<slug>.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/<slug>/
```

## `specs/NN_<slug>.json` format
```json
{
  "id": 29, "slug": "wabi-sabi", "name": "Wabi-Sabi", "priority": true, "fit": 4.5,
  "colors": { "primary": "#", "onPrimary": "#", "secondary": "#", "accent": "#", "bg": "#", "surface": "#",
              "text": "#", "textMuted": "#", "line": "#", "ok": "#", "pending": "#", "demo": "#" },
  "variants": { "master-26": {"base":"#","deep":"#","light":"#"}, "root-14": {}, "base-3": {}, "essential": {} },
  "fonts": { "display": {"family":"", "package":"", "weights":[]}, "body": {}, "label": {}, "mono": {}, "devanagari": {} },
  "type": { "display": "clamp(...)", "h1": "", "h2": "", "body": "", "label": "" },
  "radius": { "sm": "", "md": "", "lg": "" },
  "shadow": { "bottle": "", "panel": "" },
  "motion": { "easeOut": "", "easeInOut": "", "durMicro": 0, "durReveal": 0, "durScene": 0 },
  "button": { "primary": {"bg":"", "fg":"", "radius":"", "padding":"", "hover":""}, "secondary": {}, "link": {} },
  "images": [ { "file": "", "size": "", "transparent": false, "prompt": "", "negative": "" } ]
}
```
