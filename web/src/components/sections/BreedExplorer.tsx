"use client";

import { useState } from "react";
import { breeds } from "@/content/desigo";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

/**
 * Chapter 05 — BREEDS. Victorian natural-history plate × wabi-sabi paper.
 * No portraits exist yet, so each plate is typographic, with a framed slot for the engraving/photo.
 * The breeds shown are those named in DESIGO®'s own farm records; herd composition is flagged as pending.
 */
export default function BreedExplorer() {
  const [i, setI] = useState(0);
  const b = breeds[i];

  return (
    <section className="chapter grain" data-tone="light" aria-labelledby="br-title" style={{ background: "var(--paper)", color: "var(--ink)", padding: "var(--s-section) 0" }}>
      <div className="wrap br-grid">
        <div>
          <p className="chapter-num">05 — BREED</p>
          <h2 id="br-title" className="f-display" style={{ fontSize: "var(--fs-h1)", color: "var(--forest)", margin: "14px 0 18px" }}>
            The cows <em>of this land.</em>
          </h2>
          <p className="measure" style={{ opacity: 0.75, marginBottom: 36 }}>
            Indigenous breeds named in DESIGO®&apos;s farm records. <span className="br-flag">Herd composition awaiting confirmation.</span>
          </p>
          <ol role="tablist" aria-label="Breeds" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {breeds.map((x, k) => (
              <li key={x.name}>
                <button
                  role="tab"
                  aria-selected={k === i}
                  aria-controls="br-plate"
                  onClick={() => setI(k)}
                  onMouseEnter={() => setI(k)}
                  onFocus={() => setI(k)}
                  data-cursor="VIEW"
                  className="br-item"
                >
                  <span className="f-mono" style={{ fontSize: 11, opacity: 0.55, width: 34 }}>{ROMAN[k]}</span>
                  <span className="f-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>{x.name}</span>
                  <span className="br-region">{x.region}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div id="br-plate" role="tabpanel" aria-live="polite" className="br-plate">
          <div className="br-frame">
            <p className="label" style={{ textAlign: "center", letterSpacing: ".4em", opacity: 0.7 }}>Plate {ROMAN[i]}</p>
            <div className="br-art" key={b.name}>
              <svg viewBox="0 0 400 300" aria-hidden className="br-orn">
                <g fill="none" stroke="currentColor" strokeWidth="0.8">
                  <ellipse cx="200" cy="150" rx="170" ry="120" />
                  <ellipse cx="200" cy="150" rx="160" ry="110" strokeDasharray="2 4" />
                  <path d="M40 150c40-20 80-20 120 0M240 150c40-20 80-20 120 0" />
                </g>
              </svg>
              <p className="f-display br-name">{b.name}</p>
              <p className="label" style={{ opacity: 0.6, marginTop: 10 }}>Portrait to be supplied</p>
            </div>
            <div className="br-meta">
              <div><span className="label">Breed</span><span className="f-display" style={{ fontSize: 22 }}>{b.name}</span></div>
              <div><span className="label">Native tract</span><span>{b.region}</span></div>
              <div><span className="label">Status</span><span className="br-flag">{b.claim.note ?? "Pending verification"}</span></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .br-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 6vw; align-items: start; }
        .br-item { width: 100%; display: grid; grid-template-columns: 34px auto 1fr; align-items: baseline; gap: 18px; text-align: left; background: none; border: 0; border-top: 1px solid rgba(30,33,31,.16); padding: 16px 0; color: var(--forest); cursor: pointer; transition: padding .6s var(--ease-out), color .4s; }
        .br-item[aria-selected="true"] { padding-left: 14px; color: var(--earth); }
        .br-region { font-size: 13px; opacity: 0; text-align: right; transition: opacity .5s; color: var(--ink); }
        .br-item[aria-selected="true"] .br-region { opacity: .65; }
        .br-plate { position: sticky; top: 110px; }
        .br-frame { border: 1px solid rgba(140,106,67,.5); outline: 1px solid rgba(140,106,67,.25); outline-offset: 8px; padding: 36px; background: rgba(247,244,236,.45); }
        .br-art { position: relative; aspect-ratio: 4/3; display: grid; place-content: center; text-align: center; color: var(--earth); animation: brIn 1s var(--ease-out); }
        .br-orn { position: absolute; inset: 0; width: 100%; height: 100%; opacity: .55; }
        .br-name { font-size: clamp(3.2rem, 7vw, 6.5rem); font-style: italic; color: var(--forest); margin: 0; position: relative; }
        .br-meta { display: grid; grid-template-columns: 1fr 1.4fr 1.2fr; gap: 18px; border-top: 1px solid rgba(140,106,67,.4); padding-top: 18px; font-size: 14px; }
        .br-meta > div { display: grid; gap: 6px; }
        .br-meta .label { opacity: .55; }
        .br-flag { text-decoration: underline dotted var(--earth); text-underline-offset: 4px; }
        @keyframes brIn { from { opacity: 0; transform: translateY(14px); filter: blur(4px); } }
        @media (max-width: 899px) {
          .br-grid { grid-template-columns: 1fr; }
          .br-plate { position: relative; top: 0; }
          .br-frame { padding: 20px; }
          .br-meta { grid-template-columns: 1fr; }
          .br-region { display: none; }
        }
      `}</style>
    </section>
  );
}
