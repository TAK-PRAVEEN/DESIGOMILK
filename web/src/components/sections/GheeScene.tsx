"use client";

import Bottle from "../Bottle";
import { ghee } from "@/content/desigo";

/**
 * Chapter 12 — GHEE. Warm gold editorial; the folk border is borrowed from the jar's own label
 * (dots + triangles), so the world grows out of the product rather than being imposed on it.
 */
export default function GheeScene() {
  return (
    <section className="chapter grain" data-tone="light" aria-labelledby="gh-title" style={{ background: "linear-gradient(180deg, #efd9a6 0%, #e7c57c 60%, #d9ad5c 100%)", color: "#3a2a0e", padding: "var(--s-section) 0", overflow: "hidden" }}>
      <div className="gh-border" aria-hidden />
      <div className="wrap gh-grid">
        <div className="gh-jar" data-cursor="VIEW">
          <Bottle src="/desigo/products/ghee-jar-cutout.webp" alt="DESIGO® A2 ghee in a glass jar with a teal folk-art label" strength={7} />
        </div>
        <div>
          <p className="chapter-num">12 — FROM THE SAME MILK</p>
          <h2 id="gh-title" className="f-display" style={{ fontSize: "var(--fs-h1)", margin: "14px 0 18px" }}>
            Bilona ghee, <em>churned from the milk you know.</em>
          </h2>
          <p className="measure" style={{ opacity: 0.8 }}>Each ghee grade is made from one of the DESIGO® milks — so its origin is the same traceable story.</p>
          <ul className="gh-list">
            {ghee.map((g) => (
              <li key={g.name}>
                <div>
                  <p className="f-display" style={{ fontSize: "1.7rem", margin: 0 }}>{g.name}</p>
                  <p className="label" style={{ opacity: 0.65, marginTop: 6 }}>From {g.from}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="f-display gh-pending" style={{ fontSize: "1.7rem", margin: 0 }} title={g.price.note ?? "Pending verification"}>{g.price.text}</p>
                  <p className="label gh-pending" style={{ opacity: 0.65, marginTop: 6 }} title={g.size.note ?? "Pending verification"}>{g.size.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#reserve" className="dlink" style={{ color: "#3a2a0e", marginTop: 16 }} data-cursor="ENTER"><span>Reserve ghee</span><span className="arrow" /></a>
        </div>
      </div>
      <div className="gh-border gh-border-b" aria-hidden />
      <style>{`
        .gh-border { position: absolute; left: 0; right: 0; top: 0; height: 22px; background:
          radial-gradient(circle at 11px 11px, #c0392b 4px, transparent 4.5px) 0 0 / 44px 22px,
          radial-gradient(circle at 33px 11px, transparent 3px, #7a3b12 3.2px, #7a3b12 4.4px, transparent 4.6px) 0 0 / 44px 22px,
          linear-gradient(#1aa39a, #1aa39a); opacity: .9; }
        .gh-border-b { top: auto; bottom: 0; }
        .gh-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 6vw; align-items: center; }
        .gh-jar { width: min(34vw, 460px); justify-self: center; }
        .gh-list { list-style: none; margin: 34px 0 0; padding: 0; }
        .gh-list li { display: flex; justify-content: space-between; gap: 20px; padding: 18px 0; border-top: 1px solid rgba(58,42,14,.22); }
        .gh-pending { text-decoration: underline dotted rgba(58,42,14,.5); text-underline-offset: 5px; }
        @media (max-width: 899px) { .gh-grid { grid-template-columns: 1fr; } .gh-jar { width: min(70vw, 360px); } }
      `}</style>
    </section>
  );
}
