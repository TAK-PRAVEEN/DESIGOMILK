# Shared rules for all 55 styles (these win over any single style document)

Audit 2026-10-03. Every style document has section 12 "Build-ready spec sheet" plus `specs/NN_<slug>.json`.
Where a document and this page disagree, **this page wins**.

## 1. Logo (identical in every style)
- Black DESIGO® vector wordmark (`web/src/components/DesigoLogo.tsx`), infinite write / un-write loop, 4.6 s cycle:
  D · 3 waves · S · I · G · O draw 0–1.2 s (480 ms each, 95 ms stagger) → arrow + ® fade in at 0.9 s → hold to 3.0 s →
  arrow + ® fade out → un-write in reverse (O first) 3.0–4.2 s → rest to 4.6 s → repeat.
- Colour: charcoal `#171918` on light grounds, milk `#F7F4EC` on dark grounds. No other colour, no ring, no pop, no hover trigger.
- Reduced motion: static wordmark. No style may recolour, redraw or restyle the logo.

## 2. Shared semantic colours (text-safe)
| Token | Hex | Rule |
|---|---|---|
| `--c-pending` (text on light grounds) | `#7A5B37` | 5.6:1 on milk. Always together with the dotted underline |
| `--c-pending` (on dark grounds) | `#C8A96B` | gold, dotted underline |
| `--c-demo` | badge: solid outline, plain text "DEMO · not live data" | never colour-only |
| Earth `#8C6A43` | decorative only | 4.49:1 on milk, so never use for body text |
| DESIGO green `#1E7A68` as text/link | only on milk `#F7F4EC` | on warmer or cooler grounds use `#18705F` |
| Gold / sandstone / terracotta / ash greys | decorative or large text only, unless the style's section 12 lists a measured ≥ 4.5:1 ratio | |

Style documents may keep their own pending hex if section 12 shows it at ≥ 4.5:1. Otherwise use the values above.

## 3. Content rules (unchanged, from `web/src/content/desigo.ts`)
- Prices, pack sizes, herb counts, breeds, city, operation times → **pending** (dotted underline) until approved.
- **Blocked everywhere:** supporters (NIAM / Govt. of India / UK aid), health claims, "world's best/first", organic, certified A2,
  RFID, "pure/purest", and any internal system or hardware names.
- Trace content is always labelled DEMO / illustrative.

## 4. Images
- Generated = illustration, texture or backdrop only, **never** shown as real farms, cows, people, the plant or test results.
- Never generate the bottle, the ghee jar, the logo, letters or text. Cows are zebu breeds, shown with respect. No deity imagery.
- Maps come from compliant vector data, never AI.
- Save to `web/public/desigo/styles/<slug>/` where `<slug>` is the spec filename (e.g. `29_wabi-sabi` → `wabi-sabi`).

## 5. Fonts
- Open licence only (OFL / Apache), self-hosted via `@fontsource-variable/<name>` where a variable build exists, else `@fontsource/<name>`.
  Verify the package name at install time; two names (Big Shoulders Stencil, Doto) may have changed upstream.

## 6. JSON specs
`specs/NN_<slug>.json` follows `_SPEC_TEMPLATE.md`. Some files add extra keys (`logo`, `tailPrompt`, `colorsDark`, extra font
roles). Builders must treat unknown keys as optional.

## 7. Known overlaps (align tokens if both are prototyped)
10 Glassmorphism ↔ 48 Frosted glass · 11 Claymorphism ↔ 42 Clay render · 17 Y2K ↔ 50 2000 web · 03 Swiss ↔ 54 Scientism ↔ 23 Victorian.

## 8. Deliberate exceptions
- 55 Kawaii primary mint `#CDEBDD` (1.2:1 on milk) needs a mandatory outline. Only for the `/kids` page.
- 39 Kirana primary button is a 6 px painted-board chip. Every other style uses the underlined-label button.
- 17 Y2K uses large radii (pods and pills), as a campaign-only exception.
