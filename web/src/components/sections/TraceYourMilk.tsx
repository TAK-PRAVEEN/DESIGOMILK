"use client";

import { useState } from "react";
import { traceProvider, type TraceResult } from "@/lib/trace";

/**
 * Chapter 13 — TRACE YOUR MILK. A working demo of the future customer lookup.
 * Talks only to the TraceProvider interface, so swapping in the live RTCOM API is a one-line change.
 * Results from the demo provider are visibly labelled DEMO.
 */
export default function TraceYourMilk() {
  const [id, setId] = useState("DSG-BTL-000001-3");
  const [state, setState] = useState<"idle" | "loading" | "error" | "done">("idle");
  const [res, setRes] = useState<TraceResult | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    const r = await traceProvider.lookup(id);
    if (!r) { setState("error"); setRes(null); return; }
    setRes(r); setState("done");
  };

  return (
    <section className="chapter on-dark" data-tone="dark" aria-labelledby="ty-title" style={{ background: "var(--charcoal)", color: "var(--milk)", padding: "var(--s-section) 0" }}>
      <div className="wrap ty-grid">
        <div>
          <p className="chapter-num" style={{ color: "var(--signal)" }}>13 — TRACE YOUR MILK</p>
          <h2 id="ty-title" className="f-display" style={{ fontSize: "var(--fs-h1)", margin: "14px 0 18px" }}>
            Scan the bottle. <em>Read its journey.</em>
          </h2>
          <p className="measure" style={{ opacity: 0.75 }}>Every DESIGO® bottle carries a QR identity. In future, scanning it will open this page with the journey of the milk inside.</p>

          <form onSubmit={submit} className="ty-form" aria-describedby="ty-hint">
            <label htmlFor="ty-id" className="label" style={{ opacity: 0.7 }}>Bottle ID</label>
            <div className="ty-row">
              <input id="ty-id" value={id} onChange={(e) => setId(e.target.value)} className="f-mono" autoComplete="off" spellCheck={false} />
              <button type="submit" className="dbtn" data-cursor="TRACE"><span>{state === "loading" ? "Tracing…" : "Trace"}</span><span className="arrow" /></button>
            </div>
            <p id="ty-hint" className="f-mono" style={{ fontSize: 11, opacity: 0.5, marginTop: 10 }}>Format DSG-BTL-000000-0 · demo accepts any ID in this format</p>
            {state === "error" && <p role="alert" style={{ color: "#f0a58a", marginTop: 10 }}>That doesn&apos;t look like a DESIGO® bottle ID.</p>}
          </form>
          <span className="demo-badge" style={{ marginTop: 30 }}>Demonstration · not live data</span>
        </div>

        <div className="ty-result" aria-live="polite">
          {state !== "done" && (
            <div className="ty-empty">
              <svg viewBox="0 0 100 100" width="120" aria-hidden><g fill="none" stroke="var(--signal)" strokeWidth="1"><rect x="10" y="10" width="26" height="26" /><rect x="64" y="10" width="26" height="26" /><rect x="10" y="64" width="26" height="26" /><path d="M50 10v20M50 40h10M64 50h26M50 54v36M64 70h10v20M80 64v10" /></g></svg>
              <p className="label" style={{ opacity: 0.6, marginTop: 16 }}>Journey appears here</p>
            </div>
          )}
          {state === "done" && res && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <p className="f-mono" style={{ color: "var(--signal)", fontSize: 13 }}>{res.bottleId}</p>
                {res.isDemo && <span className="demo-badge">Demo</span>}
              </div>
              <p className="f-display" style={{ fontSize: "2.4rem", margin: "6px 0 20px" }}>{res.variant}</p>
              <ol className="ty-steps">
                {res.steps.map((s, i) => (
                  <li key={s.key} style={{ animationDelay: `${i * 90}ms` }}>
                    <span className="ty-dot" aria-hidden />
                    <span className="label" style={{ width: 110 }}>{s.title}</span>
                    <span style={{ flex: 1, opacity: 0.8 }}>{s.detail}</span>
                    {s.at && <span className="f-mono" style={{ fontSize: 11, opacity: 0.55 }}>{s.at}</span>}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .ty-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6vw; align-items: start; }
        .ty-form { margin-top: 40px; display: grid; gap: 10px; }
        .ty-row { display: flex; gap: 0; border-bottom: 1px solid rgba(247,244,236,.4); }
        .ty-row input { flex: 1; min-width: 0; background: transparent; border: 0; color: var(--milk); font-size: clamp(1rem, 2vw, 1.4rem); padding: 14px 0; letter-spacing: .06em; }
        .ty-row input:focus { outline: none; }
        .ty-row:focus-within { border-color: var(--signal); }
        .ty-result { border: 1px solid rgba(247,244,236,.14); padding: clamp(20px, 3vw, 40px); min-height: 460px; }
        .ty-empty { height: 100%; min-height: 380px; display: grid; place-content: center; text-align: center; justify-items: center; opacity: .8; }
        .ty-steps { list-style: none; margin: 0; padding: 0; position: relative; }
        .ty-steps::before { content: ""; position: absolute; left: 4px; top: 12px; bottom: 12px; width: 1px; background: rgba(127,224,184,.35); }
        .ty-steps li { display: flex; gap: 16px; align-items: baseline; padding: 11px 0; font-size: 14px; animation: tyIn .7s var(--ease-out) both; flex-wrap: wrap; }
        .ty-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--signal); box-shadow: 0 0 12px var(--signal); flex: none; position: relative; top: 1px; }
        @keyframes tyIn { from { opacity: 0; transform: translateX(-10px); } }
        @media (max-width: 899px) { .ty-grid { grid-template-columns: 1fr; } .ty-steps .label { width: auto !important; } }
      `}</style>
    </section>
  );
}
