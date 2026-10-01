"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

/**
 * MilkFlow — lightweight 2D-canvas milk ribbons (no WebGL).
 * Layered sine ribbons with soft highlights; reacts gently to the pointer; pauses when off-screen;
 * renders one static frame for reduced-motion users. ~0.3 ms/frame on a mid-range phone.
 */
export default function MilkFlow({ tone = "light", density = 7, className, style }: { tone?: "light" | "dark"; density?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    let w = 0, h = 0, raf = 0, t = 0, visible = true, px = 0.5, py = 0.5;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const resize = () => { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(c);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !reduced) loop(); });
    io.observe(c);
    const onMove = (e: PointerEvent) => { const r = c.getBoundingClientRect(); px = (e.clientX - r.left) / r.width; py = (e.clientY - r.top) / r.height; };
    addEventListener("pointermove", onMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < density; i++) {
        const k = i / density;
        const amp = h * (0.06 + k * 0.05) * (1 + (py - 0.5) * 0.4);
        const yBase = h * (0.28 + k * 0.5);
        const thick = h * (0.05 + (1 - k) * 0.07);
        const speed = 0.25 + k * 0.35;
        ctx.beginPath();
        for (let x = 0; x <= w + 20; x += 20) {
          const u = x / w;
          const y = yBase + Math.sin(u * 3.2 + t * speed + i) * amp + Math.sin(u * 7 - t * 0.6 + i * 2) * amp * 0.25 + (u - px) * (py - 0.5) * 30;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        for (let x = w + 20; x >= 0; x -= 20) {
          const u = x / w;
          const y = yBase + thick + Math.sin(u * 3.0 + t * speed + i + 0.6) * amp + Math.sin(u * 6 - t * 0.5 + i) * amp * 0.2;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        const g = ctx.createLinearGradient(0, yBase - amp, 0, yBase + thick + amp);
        const a = tone === "light" ? 0.55 - k * 0.25 : 0.12 + k * 0.08;
        g.addColorStop(0, `rgba(255,255,255,${a + 0.25})`);
        g.addColorStop(0.5, tone === "light" ? `rgba(240,235,222,${a})` : `rgba(247,244,236,${a})`);
        g.addColorStop(1, `rgba(220,212,196,${a * 0.6})`);
        ctx.fillStyle = g;
        ctx.fill();
      }
    };
    const loop = () => {
      cancelAnimationFrame(raf);
      const step = () => { if (!visible) return; t += 0.012; draw(); raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step);
    };
    if (reduced) draw(); else loop();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); removeEventListener("pointermove", onMove); };
  }, [reduced, tone, density]);

  return <canvas ref={ref} aria-hidden className={className} style={{ width: "100%", height: "100%", display: "block", ...style }} />;
}
