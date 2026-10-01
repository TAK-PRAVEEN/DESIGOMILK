"use client";

import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/motion";

const verbs = [
  { k: "Origin", t: "Where and when every collection happened." },
  { k: "Trace", t: "Each hand-off recorded, lot by lot." },
  { k: "Test", t: "Screened at the source, re-tested at the plant." },
  { k: "Chill", t: "Cold, close to the source." },
  { k: "Process", t: "Each variant composed from its own traced milk." },
  { k: "Fill", t: "Every bottle carries its own identity." },
  { k: "Deliver", t: "Cold to your door. The glass comes back." },
];

/**
 * Chapter 11 — TECHNOLOGY. Heritage → future: dark forest, perspective grid, thin data lines.
 * Public vocabulary only; no internal hardware, device names or operating detail.
 */
export default function Technology() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".tg-floor", { rotationX: 78, yPercent: 30 }, { rotationX: 62, yPercent: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 } });
      gsap.from(".tg-line > span", { yPercent: 110, stagger: 0.1, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".tg-title", start: "top 75%" } });
      gsap.from(".tg-verb", { opacity: 0, y: 30, stagger: 0.07, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".tg-verbs", start: "top 80%" } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="technology" className="chapter on-dark" data-tone="dark" aria-labelledby="tg-title" style={{ background: "radial-gradient(ellipse at 50% 0%, #0f3d33 0%, #07211c 55%, #050f0d 100%)", color: "var(--milk)", padding: "var(--s-section) 0", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: "40% -20% -10% -20%", perspective: 900 }}>
        <div className="tg-floor" />
      </div>
      <svg aria-hidden viewBox="0 0 1200 600" preserveAspectRatio="none" className="tg-data">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M-20 ${420 - i * 40} C 300 ${380 - i * 60}, 600 ${470 - i * 30}, 1220 ${300 - i * 45}`} fill="none" stroke="var(--signal)" strokeOpacity={0.12 + i * 0.05} strokeWidth="1" strokeDasharray="2 10" style={{ animation: `tgflow ${14 + i * 3}s linear infinite` }} />
        ))}
      </svg>
      <div className="wrap" style={{ position: "relative" }}>
        <p className="chapter-num" style={{ color: "var(--signal)" }}>11 — TECHNOLOGY</p>
        <h2 id="tg-title" className="f-display tg-title" style={{ fontSize: "var(--fs-display)", margin: "20px 0 0", lineHeight: 0.92 }}>
          <span className="tg-line" style={{ display: "block", overflow: "hidden" }}><span style={{ display: "inline-block" }}>Tradition is</span></span>
          <span className="tg-line" style={{ display: "block", overflow: "hidden" }}><span style={{ display: "inline-block" }}><em>the source.</em></span></span>
          <span className="tg-line" style={{ display: "block", overflow: "hidden", color: "var(--signal)" }}><span style={{ display: "inline-block", fontSize: "0.48em" }}>Technology protects the journey.</span></span>
        </h2>

        <ol className="tg-verbs">
          {verbs.map((v, i) => (
            <li key={v.k} className="tg-verb">
              <span className="f-mono" style={{ fontSize: 11, color: "var(--signal)" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="label" style={{ fontSize: 13, letterSpacing: ".26em" }}>{v.k}</span>
              <span style={{ fontSize: 14, opacity: 0.7 }}>{v.t}</span>
            </li>
          ))}
        </ol>
        <p className="f-mono" style={{ fontSize: 12, opacity: 0.55, marginTop: 40 }}>
          <span style={{ textDecoration: "underline dotted", textUnderlineOffset: 4 }} title="Public naming pending approval">Built in-house by DESIGO® — its own traceability system.</span>
        </p>
      </div>
      <style>{`
        .tg-floor { position: absolute; inset: 0; transform-origin: 50% 0; background-image: linear-gradient(rgba(127,224,184,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(127,224,184,.22) 1px, transparent 1px); background-size: 70px 70px; mask-image: linear-gradient(180deg, transparent, #000 30%, #000 60%, transparent); }
        .tg-data { position: absolute; inset: 0; width: 100%; height: 100%; }
        @keyframes tgflow { to { stroke-dashoffset: -240; } }
        .tg-verbs { list-style: none; margin: 90px 0 0; padding: 0; display: grid; grid-template-columns: repeat(7, 1fr); border-top: 1px solid rgba(127,224,184,.25); }
        .tg-verb { display: grid; gap: 10px; align-content: start; padding: 22px 16px 0 0; border-right: 1px solid rgba(127,224,184,.12); margin-right: 16px; }
        .tg-verb:last-child { border-right: 0; }
        @media (max-width: 1100px) { .tg-verbs { grid-template-columns: 1fr 1fr; } .tg-verb { border-right: 0; border-bottom: 1px solid rgba(127,224,184,.12); padding-bottom: 20px; } }
        @media (max-width: 560px) { .tg-verbs { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
