"use client";

import { useState } from "react";
import { qualityScreen } from "@/content/desigo";

const instruments = [
  { k: "Temperature", unit: "°C", note: "Chilled close to the source. Public value awaiting approval." },
  { k: "Fat", unit: "%", note: "Measured on every collection. Published spec awaiting lab confirmation." },
  { k: "SNF", unit: "%", note: "Solids-not-fat, measured with fat. Published spec awaiting lab confirmation." },
];

/**
 * Chapter 07 — QUALITY. Swiss / laboratory: white space, hairlines, precise numerals, green data accents.
 * The 16-point paper adulteration screen is drawn as a diagram (no third-party branding).
 * No numeric values are shown until officially confirmed for public use.
 */
export default function QualityPanel() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="chapter" data-tone="light" aria-labelledby="q-title" style={{ background: "#FBFAF6", color: "var(--ink)", padding: "var(--s-section) 0" }}>
      <div className="wrap">
        <div className="q-top">
          <p className="chapter-num">07 — TEST</p>
          <p className="label" style={{ color: "var(--green)" }}>Quality, before trust</p>
        </div>
        <div className="hair" style={{ margin: "18px 0 56px" }} />

        <div className="q-grid">
          <div>
            <p className="f-display q-num" aria-hidden>16</p>
            <h2 id="q-title" className="f-display" style={{ fontSize: "var(--fs-h2)", margin: "0 0 18px", color: "var(--forest)" }}>
              Sixteen checks <em>on a single card.</em>
            </h2>
            <p className="measure" style={{ opacity: 0.75 }}>
              At the source, milk is screened on a paper test card that reacts to sixteen common adulterants and freshness markers.
              A camera reads the card so results are recorded, not remembered.
            </p>
          </div>

          <div className="q-card" aria-label="Diagram of the 16-point test card">
            <svg viewBox="0 0 360 360" className="q-svg">
              <rect x="20" y="20" width="320" height="320" fill="none" stroke="rgba(30,33,31,.25)" />
              <g className="q-spin">
                {qualityScreen.map((_, i) => {
                  const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
                  const on = hover === i;
                  return (
                    <g key={i}>
                      <line x1={180} y1={180} x2={180 + Math.cos(a) * 92} y2={180 + Math.sin(a) * 92} stroke="rgba(30,33,31,.12)" />
                      <circle cx={180 + Math.cos(a) * 110} cy={180 + Math.sin(a) * 110} r={on ? 15 : 11} fill={on ? "var(--green)" : "#fff"} stroke="var(--forest)" strokeWidth="1" style={{ transition: "all .4s var(--ease-out)" }} />
                    </g>
                  );
                })}
              </g>
              <circle cx="180" cy="180" r="34" fill="none" stroke="var(--forest)" />
              <text x="180" y="186" textAnchor="middle" style={{ font: "500 13px var(--font-jetbrains)", fill: "var(--forest)" }}>{hover === null ? "16" : String(hover + 1).padStart(2, "0")}</text>
            </svg>
          </div>

          <ol className="q-list">
            {qualityScreen.map((p, i) => (
              <li key={p} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} tabIndex={0} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
                <span className="f-mono">{String(i + 1).padStart(2, "0")}</span>{p}
              </li>
            ))}
          </ol>
        </div>

        <div className="hair" style={{ margin: "80px 0 0" }} />
        <div className="q-inst">
          {instruments.map((m) => (
            <div key={m.k}>
              <p className="label" style={{ opacity: 0.6 }}>{m.k}</p>
              <p className="f-display" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", margin: "6px 0", color: "var(--forest)" }}>
                —<span style={{ fontSize: "0.35em", marginLeft: 8, opacity: 0.6 }}>{m.unit}</span>
              </p>
              <p style={{ fontSize: 14, opacity: 0.7, maxWidth: "32ch" }}>{m.note}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .q-top { display: flex; justify-content: space-between; }
        .q-grid { display: grid; grid-template-columns: 1.1fr 1fr 0.9fr; gap: 4vw; align-items: start; }
        .q-num { font-size: clamp(8rem, 18vw, 17rem); line-height: .8; margin: 0 0 24px; color: var(--green); font-weight: 250; }
        .q-svg { width: 100%; height: auto; }
        .q-spin { transform-origin: 180px 180px; animation: qspin 80s linear infinite; }
        @keyframes qspin { to { transform: rotate(360deg); } }
        .q-list { list-style: none; margin: 0; padding: 0; columns: 2; column-gap: 24px; font-size: 14px; }
        .q-list li { display: flex; gap: 12px; padding: 9px 0; border-top: 1px solid rgba(30,33,31,.1); break-inside: avoid; cursor: default; transition: color .3s, padding .4s var(--ease-out); }
        .q-list li:hover, .q-list li:focus { color: var(--green); padding-left: 6px; outline: none; }
        .q-list .f-mono { font-size: 11px; opacity: .5; padding-top: 2px; }
        .q-inst { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4vw; padding-top: 28px; }
        @media (max-width: 899px) {
          .q-grid, .q-inst { grid-template-columns: 1fr; }
          .q-card { max-width: 340px; }
        }
      `}</style>
    </section>
  );
}
