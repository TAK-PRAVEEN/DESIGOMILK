"use client";

import Bottle from "../Bottle";
import MilkFlow from "../MilkFlow";
import DesigoLogo from "../DesigoLogo";
import { contact, supporters, timeline } from "@/content/desigo";

/** Chapter 14 — STORY. Editorial archive timeline. Unknown dates are shown honestly as TBC. */
export function StoryTimeline() {
  return (
    <section id="about" className="chapter grain" data-tone="light" aria-labelledby="st-title" style={{ background: "var(--paper)", color: "var(--ink)", padding: "var(--s-section) 0" }}>
      <div className="wrap">
        <p className="chapter-num">14 — STORY</p>
        <h2 id="st-title" className="f-display" style={{ fontSize: "var(--fs-h1)", color: "var(--forest)", margin: "14px 0 56px", maxWidth: "16ch" }}>
          A story we&apos;ll only tell <em>once it&apos;s checked.</em>
        </h2>
        <ol className="st-list">
          {timeline.map((t, i) => (
            <li key={i} data-reveal>
              <p className={`f-display reveal ${t.year === "TBC" ? "st-tbc" : ""}`} style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", margin: 0, color: "var(--earth)" }}>{t.year}</p>
              <div className="hair" style={{ margin: "14px 0 18px" }} />
              <h3 className="f-display reveal" style={{ fontSize: "1.6rem", margin: 0, color: "var(--forest)" }}>{t.title}</h3>
              <p className="reveal" style={{ opacity: 0.72, fontSize: 15, marginTop: 10, textDecoration: "underline dotted rgba(140,106,67,.6)", textUnderlineOffset: 4 }} title={t.claim.note ?? "Pending verification"}>{t.claim.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
        .st-list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(5, 1fr); gap: 2.4vw; }
        .st-tbc { -webkit-text-stroke: 1px var(--earth); color: transparent !important; }
        @media (max-width: 899px) { .st-list { grid-template-columns: 1fr; gap: 48px; } }
      `}</style>
    </section>
  );
}

/** Chapter 15 — FINAL CTA + footer. The bottle returns, floating in milk. */
export function FinalCTA() {
  return (
    <>
      <section id="reserve" className="chapter" data-tone="light" aria-labelledby="fc-title" style={{ background: "var(--milk)", minHeight: "110svh", overflow: "hidden", display: "grid", alignItems: "center" }}>
        <MilkFlow style={{ position: "absolute", inset: "35% 0 0 0", height: "65%" }} density={6} />
        <div className="wrap fc-grid">
          <div>
            <p className="chapter-num" style={{ color: "var(--forest)" }}>15 — RESERVE</p>
            <h2 id="fc-title" className="f-display" style={{ fontSize: "var(--fs-display)", color: "var(--forest)", margin: "18px 0 30px" }}>
              Know where<br /><em>your milk</em><br />comes from.
            </h2>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              <a href={`tel:${contact.phone.text.replace(/\s/g, "")}`} className="dbtn" data-cursor="ENTER"><span>Reserve DESIGO® milk</span><span className="arrow" /></a>
              <a href="#trace" className="dlink" style={{ color: "var(--forest)" }} data-cursor="TRACE"><span>Explore traceability</span><span className="arrow" /></a>
            </div>
          </div>
          <div className="fc-bottle" data-cursor="ROTATE">
            <Bottle src="/desigo/products/essential.webp" alt="DESIGO® ESSENTIAL milk bottle in an ivory milk splash" strength={8} />
          </div>
        </div>
      </section>

      <footer className="on-dark" data-tone="dark" style={{ background: "var(--forest)", color: "var(--milk)", padding: "80px var(--gutter) 40px" }}>
        <div className="ft-grid">
          <div style={{ maxWidth: 360 }}>
            <div style={{ width: 200 }}><DesigoLogo /></div>
            <p style={{ opacity: 0.7, marginTop: 20 }}>Traceable milk from indigenous Indian cows, in returnable glass.</p>
          </div>
          <div>
            <p className="label" style={{ opacity: 0.55 }}>Contact</p>
            <p style={{ marginTop: 12 }}><a href={`tel:${contact.phone.text.replace(/\s/g, "")}`}>{contact.phone.text}</a></p>
            <p><a href={`mailto:${contact.email.text}`}>{contact.email.text}</a></p>
            <p style={{ opacity: 0.7 }}>{contact.city.text}</p>
          </div>
          {supporters.length > 0 && <div>
            <p className="label" style={{ opacity: 0.55 }}>Initiative supported by</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "grid", gap: 6, fontSize: 14, opacity: 0.8 }}>
              {supporters.map((s) => <li key={s.text} title={s.note ?? "Pending verification"} style={{ textDecoration: "underline dotted rgba(247,244,236,.4)", textUnderlineOffset: 4 }}>{s.text}</li>)}
            </ul>
          </div>}
        </div>
        <div className="hair" style={{ margin: "60px 0 20px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", fontSize: 12, opacity: 0.55 }}>
          <span>© DESIGO®. Design demo — not for publication.</span>
          <span>Dotted-underlined statements are pending verification.</span>
        </div>
      </footer>
      <style>{`
        .fc-grid { position: relative; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4vw; align-items: center; }
        .fc-bottle { width: min(28vw, 50vh); justify-self: center; }
        .ft-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; }
        @media (max-width: 899px) { .fc-grid, .ft-grid { grid-template-columns: 1fr; } .fc-bottle { width: min(60vw, 44vh); } }
      `}</style>
    </>
  );
}
