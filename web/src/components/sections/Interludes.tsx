"use client";

import MilkFlow from "../MilkFlow";
import { JourneyIcon } from "../JourneyIcons";

/** Chapter 09 — MILK AS MATERIAL. A breath between the products and the heritage chapter. */
export function MilkMaterial() {
  return (
    <section className="chapter" data-tone="light" aria-label="Milk as material" style={{ height: "110svh", background: "var(--milk)", overflow: "hidden" }}>
      <MilkFlow style={{ position: "absolute", inset: 0 }} />
      <div className="wrap" style={{ position: "relative", height: "100%", display: "grid", placeItems: "center", textAlign: "center" }}>
        <div data-reveal>
          <p className="chapter-num reveal" style={{ color: "var(--forest)" }}>09 — MATERIAL</p>
          <p className="f-display reveal" style={{ fontSize: "var(--fs-display)", color: "var(--forest)", margin: "18px 0 0" }}>
            Nutrition — <em>as natural.</em>
          </p>
          <p className="reveal" style={{ marginTop: 22, color: "var(--ink)", opacity: 0.7 }}>
            <span style={{ textDecoration: "underline dotted", textUnderlineOffset: 4 }} title="Brand line from the lineup card · pending approval">Whole milk, not standardised.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Chapter 10 — HERITAGE. Victorian engraving × wabi-sabi paper × editorial. */
export function Heritage() {
  return (
    <section className="chapter grain" data-tone="light" aria-labelledby="h-title" style={{ background: "var(--paper)", color: "var(--ink)", padding: "var(--s-section) 0", overflow: "hidden" }}>
      <div className="wrap he-grid">
        <div className="he-ornament" aria-hidden>
          <svg viewBox="0 0 400 40" width="100%" height="40"><g fill="none" stroke="var(--gold)" strokeWidth="1"><path d="M0 20h160M240 20h160" /><path d="M170 20c10-14 20-14 30 0s20 14 30 0" /><circle cx="200" cy="20" r="3" fill="var(--gold)" /></g></svg>
        </div>
        <p className="chapter-num" style={{ textAlign: "center" }}>10 — HERITAGE</p>
        <h2 id="h-title" className="f-display" data-reveal style={{ fontSize: "var(--fs-h1)", textAlign: "center", color: "var(--forest)", maxWidth: "18ch", margin: "26px auto 0" }}>
          <span className="reveal" style={{ display: "block" }}>Before there were brands,</span>
          <em className="reveal" style={{ display: "block", color: "var(--earth)" }}>there were breeds.</em>
        </h2>
        <div className="he-row">
          <div className="he-cow" aria-hidden><JourneyIcon k="cow" size={420} /></div>
          <div className="he-text">
            <p className="f-display" style={{ fontSize: "clamp(1.4rem, 2vw, 1.9rem)", fontStyle: "italic", lineHeight: 1.35, color: "var(--forest)" }}>
              India&apos;s indigenous cattle were shaped over centuries by their land — the Thar, Saurashtra, Kutch, Punjab.
            </p>
            <p style={{ opacity: 0.75, marginTop: 18 }} className="measure">
              DESIGO® begins with these breeds and the farms that keep them, and asks a simple modern question of an old
              tradition: can every bottle remember where it came from?
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .he-ornament { max-width: 420px; margin: 0 auto 18px; }
        .he-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 5vw; align-items: center; margin-top: 70px; }
        .he-cow { color: var(--earth); opacity: .85; display: grid; place-items: center; border: 1px solid rgba(140,106,67,.35); outline: 1px solid rgba(140,106,67,.18); outline-offset: 10px; padding: 30px; background: radial-gradient(ellipse at center, rgba(247,244,236,.6), transparent 70%); }
        .he-cow svg { width: 100%; height: auto; max-width: 440px; }
        @media (max-width: 899px) { .he-row { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
