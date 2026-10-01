"use client";

import { useEffect, useRef } from "react";
import { useFinePointer } from "@/lib/motion";

/**
 * Custom cursor. Reads intent from the hovered element:
 *   data-cursor="ROTATE" | "EXPLORE" | "ENTER" | "VIEW" | "DRAG" | "TRACE"  → labelled ring
 *   a, button (without data-cursor)                                          → enlarged ring
 * Tone flips automatically inside elements marked .on-dark.
 * Only mounted for fine pointers; touch devices keep their native behaviour.
 */
export default function DesigoCursor() {
  const fine = useFinePointer();
  const root = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!fine) return;
    document.documentElement.classList.add("has-cursor");
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    let raf = 0;
    let visible = false;

    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      if (!visible && root.current) { root.current.style.opacity = "1"; visible = true; }
      const t = e.target as HTMLElement;
      const intent = t.closest<HTMLElement>("[data-cursor]");
      const interactive = t.closest("a, button, [role='button'], input, label");
      const dark = !!t.closest(".on-dark");
      const r = root.current!;
      r.dataset.tone = dark ? "dark" : "light";
      if (intent) {
        r.dataset.state = "label";
        label.current!.textContent = intent.dataset.cursor ?? "";
      } else if (interactive) {
        r.dataset.state = "hover";
        label.current!.textContent = "";
      } else {
        r.dataset.state = "default";
        label.current!.textContent = "";
      }
    };
    const leave = () => { if (root.current) root.current.style.opacity = "0"; visible = false; };
    const tick = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [fine]);

  if (!fine) return null;
  return (
    <div ref={root} className="cursor" data-state="default" aria-hidden="true" style={{ opacity: 0 }}>
      <div ref={dot} className="cursor-dot" style={{ position: "fixed", left: 0, top: 0 }} />
      <div ref={ring} className="cursor-ring" style={{ position: "fixed", left: 0, top: 0 }}>
        <span ref={label} />
      </div>
    </div>
  );
}
