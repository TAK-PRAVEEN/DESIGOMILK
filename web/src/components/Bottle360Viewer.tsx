"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Bottle from "./Bottle";
import { useReducedMotion } from "@/lib/motion";

/**
 * Bottle360Viewer — reusable product viewer.
 *
 * Source types (choose per product; the UI stays identical):
 *   { type: "sequence", frames }  image-sequence 360 (what the client will supply)
 *   { type: "image", src }        single render → honest 2.5D tilt fallback (current state)
 *   { type: "model", url }        reserved for GLB/GLTF; plug a lazy React-Three-Fiber renderer in here
 *
 * Sequence features: drag (mouse + touch) with inertia, keyboard ←/→, auto-spin when idle,
 * external scroll-driven progress (0..1), double-click / buttons zoom, progressive preloading,
 * DPR-aware canvas, highlight that follows the pointer, contact shadow, transparent background.
 */
export type ViewerSource =
  | { type: "sequence"; frames: string[] }
  | { type: "image"; src: string }
  | { type: "model"; url: string; poster: string };

type Props = {
  source: ViewerSource;
  alt: string;
  autoSpin?: boolean;
  /** degrees per second for auto-spin */
  spinSpeed?: number;
  /** if provided, the viewer is driven by this 0..1 value (e.g. scroll progress) */
  progress?: number;
  zoomable?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Bottle360Viewer(props: Props) {
  const { source } = props;
  if (source.type === "sequence" && source.frames.length > 1) return <SequenceViewer {...props} frames={source.frames} />;
  if (source.type === "model") {
    // GLB slot — keeps layout stable until a 3D renderer is added (dynamic import, client-only).
    return <Bottle src={source.poster} alt={props.alt} className={props.className} style={props.style} />;
  }
  const src = source.type === "image" ? source.src : (source as { frames: string[] }).frames[0];
  return <Bottle src={src} alt={props.alt} className={props.className} style={props.style} />;
}

function SequenceViewer({ frames, alt, autoSpin = true, spinSpeed = 24, progress, zoomable = true, className, style }: Props & { frames: string[] }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const state = useRef({ pos: 0, vel: 0, dragging: false, lastX: 0, lastT: 0, idleSince: 0 });
  const [loaded, setLoaded] = useState(0);
  const [zoom, setZoom] = useState(1);
  const reduced = useReducedMotion();
  const n = frames.length;

  // progressive preload: frame 0, then every 8th, every 4th, every 2nd, then the rest
  useEffect(() => {
    images.current = new Array(n).fill(null);
    const order: number[] = [];
    const seen = new Set<number>();
    for (const step of [n, 8, 4, 2, 1]) for (let i = 0; i < n; i += step) if (!seen.has(i)) { seen.add(i); order.push(i); }
    let cancelled = false;
    let count = 0;
    order.forEach((i) => {
      const img = new Image();
      img.decoding = "async";
      img.src = frames[i];
      img.onload = () => { if (cancelled) return; images.current[i] = img; count++; setLoaded(count); };
    });
    return () => { cancelled = true; };
  }, [frames, n]);

  const nearestLoaded = useCallback((i: number) => {
    for (let d = 0; d < n; d++) {
      const a = images.current[(i + d) % n]; if (a) return a;
      const b = images.current[(i - d + n) % n]; if (b) return b;
    }
    return null;
  }, [n]);

  const draw = useCallback(() => {
    const c = canvas.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const idx = ((Math.round(state.current.pos) % n) + n) % n;
    const img = nearestLoaded(idx); if (!img) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = c.clientWidth, h = c.clientHeight;
    if (c.width !== w * dpr || c.height !== h * dpr) { c.width = w * dpr; c.height = h * dpr; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const s = Math.min(w / img.naturalWidth, h / img.naturalHeight);
    const dw = img.naturalWidth * s, dh = img.naturalHeight * s;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  }, [n, nearestLoaded]);

  // animation loop: inertia + auto-spin
  useEffect(() => {
    let raf = 0, last = performance.now();
    const framesPerDeg = n / 360;
    const loop = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      const st = state.current;
      if (progress === undefined && !st.dragging) {
        st.pos += st.vel * dt;
        st.vel *= Math.pow(0.04, dt); // friction
        const idle = t - st.idleSince > 2200;
        if (autoSpin && !reduced && idle && Math.abs(st.vel) < 2) st.pos += spinSpeed * framesPerDeg * dt;
      }
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [autoSpin, spinSpeed, reduced, n, draw, progress]);

  useEffect(() => { if (progress !== undefined) state.current.pos = progress * (n - 1); }, [progress, n]);

  const onDown = (e: React.PointerEvent) => {
    if (progress !== undefined) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    Object.assign(state.current, { dragging: true, lastX: e.clientX, lastT: performance.now(), vel: 0 });
  };
  const onMove = (e: React.PointerEvent) => {
    const st = state.current; if (!st.dragging) return;
    const now = performance.now();
    const dx = e.clientX - st.lastX;
    const df = (dx / (canvas.current?.clientWidth || 400)) * n * 0.9;
    st.pos -= df;
    st.vel = (-df / Math.max(1, now - st.lastT)) * 1000;
    st.lastX = e.clientX; st.lastT = now;
  };
  const onUp = () => { state.current.dragging = false; state.current.idleSince = performance.now(); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { state.current.pos -= n / 36; state.current.idleSince = performance.now(); }
    if (e.key === "ArrowRight") { state.current.pos += n / 36; state.current.idleSince = performance.now(); }
    if (zoomable && (e.key === "+" || e.key === "=")) setZoom(1.6);
    if (zoomable && e.key === "-") setZoom(1);
  };

  return (
    <div className={className} style={{ position: "relative", ...style }}>
      <div style={{ transform: `scale(${zoom})`, transition: "transform .8s var(--ease-out)", height: "100%" }}>
        <canvas
          ref={canvas}
          role="img"
          aria-label={`${alt} — 360° view. Drag or use arrow keys to rotate.`}
          tabIndex={0}
          data-cursor="ROTATE"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onKeyDown={onKey}
          onDoubleClick={() => zoomable && setZoom((z) => (z > 1 ? 1 : 1.6))}
          style={{ width: "100%", height: "100%", touchAction: "pan-y", display: "block" }}
        />
      </div>
      <div className="contact-shadow" aria-hidden />
      {loaded < n && (
        <div className="label" aria-live="polite" style={{ position: "absolute", left: 0, bottom: -28, opacity: 0.6 }}>
          Loading 360° · {Math.round((loaded / n) * 100)}%
        </div>
      )}
    </div>
  );
}
