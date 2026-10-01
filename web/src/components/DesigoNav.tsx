"use client";

import { useEffect, useRef, useState } from "react";
import DesigoLogo from "./DesigoLogo";

const links = [
  { href: "#origin", label: "Origin" },
  { href: "#trace", label: "Trace" },
  { href: "#milk", label: "Milk" },
  { href: "#farms", label: "Farms" },
  { href: "#technology", label: "Technology" },
  { href: "#about", label: "About" },
];

/**
 * Minimal navigation. Transparent at the top; condenses after the hero.
 * Tone follows the chapter beneath it: any section with data-tone="dark" flips the nav to light ink.
 */
export default function DesigoNav() {
  const [dark, setDark] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const probeY = 36;
      let tone = "light";
      document.querySelectorAll<HTMLElement>("[data-tone]").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= probeY && r.bottom > probeY) tone = s.dataset.tone!;
      });
      setDark(tone === "dark");
      setCondensed(scrollY > innerHeight * 0.6);
      const max = document.documentElement.scrollHeight - innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const ink = dark || open ? "var(--milk)" : "var(--forest)";

  return (
    <header
      className={dark || open ? "on-dark" : ""}
      style={{
        position: "fixed", inset: "0 0 auto 0", zIndex: 50, color: ink,
        transition: "color .6s var(--ease-out), padding .6s var(--ease-out)",
        padding: condensed ? "14px var(--gutter)" : "26px var(--gutter)",
      }}
    >
      <div ref={progress} aria-hidden style={{ position: "absolute", left: 0, right: 0, top: 0, height: 2, background: "currentColor", opacity: 0.55, transformOrigin: "0 50%", transform: "scaleX(0)" }} />
      <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#top" aria-label="DESIGO home" style={{ display: "block", width: condensed ? 108 : 132, transition: "width .6s var(--ease-out)" }}>
          <DesigoLogo loop style={{ color: dark || open ? "var(--milk)" : "var(--charcoal)" }} />
        </a>
        <ul className="hidden lg:flex" style={{ gap: 34, listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.href}><a className="label navlink" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <a href="#reserve" className="label" data-cursor="ENTER" style={{ padding: "11px 16px 10px", border: "1px solid currentColor" }}>Reserve</a>
          <button
            className="lg:hidden label"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            style={{ background: "none", border: 0, color: "inherit", padding: "10px 0" }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" style={{ position: "fixed", inset: 0, zIndex: -1, background: "var(--forest)", padding: "120px var(--gutter) 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((l, i) => (
              <li key={l.href} style={{ borderTop: "1px solid rgba(247,244,236,.15)" }}>
                <a href={l.href} onClick={() => setOpen(false)} className="f-display" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "clamp(2.4rem, 11vw, 4rem)", padding: "14px 0" }}>
                  {l.label}<span className="chapter-num">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="label" style={{ opacity: 0.6 }}>Traceable milk from indigenous Indian cows</p>
        </div>
      )}
      <style>{`.navlink{position:relative;opacity:.85;transition:opacity .3s}.navlink:hover{opacity:1}.navlink::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:1px;background:currentColor;transform:scaleX(0);transform-origin:right;transition:transform .6s var(--ease-out)}.navlink:hover::after{transform:scaleX(1);transform-origin:left}`}</style>
    </header>
  );
}
