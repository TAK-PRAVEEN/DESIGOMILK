"use client";

import { forwardRef, useEffect, useRef } from "react";
import { gsap, useFinePointer, useReducedMotion } from "@/lib/motion";

type Props = {
  src: string;
  alt: string;
  /** react to the pointer with a physical tilt + moving highlight */
  tilt?: boolean;
  /** max tilt in degrees */
  strength?: number;
  float?: boolean;
  shadow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  sizes?: string;
};

/**
 * A single supplied render, presented as a physical object:
 * perspective tilt toward the pointer, a specular highlight that follows the light, a contact shadow
 * that stretches opposite, and a slow float. This is honest 2.5D — it never pretends to show the
 * back of the bottle. Full rotation comes from Bottle360Viewer once frame sequences exist.
 *
 * The outer element is exposed via ref so scroll timelines can move/scale/rotate it.
 */
const Bottle = forwardRef<HTMLDivElement, Props>(function Bottle(
  { src, alt, tilt = true, strength = 9, float = true, shadow = true, className, style, priority },
  ref,
) {
  const inner = useRef<HTMLDivElement>(null);
  const shade = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!tilt || !fine || reduced || !inner.current) return;
    const el = inner.current;
    const rx = gsap.quickTo(el, "rotationX", { duration: 1.1, ease: "power3.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 1.1, ease: "power3.out" });
    const sx = gsap.quickTo(shade.current, "xPercent", { duration: 1.1, ease: "power3.out" });
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / innerWidth - 0.5;
      const ny = e.clientY / innerHeight - 0.5;
      ry(nx * strength * 2);
      rx(-ny * strength);
      sx(-nx * 14);
      el.style.setProperty("--sx", `${50 + nx * 70}%`);
      el.style.setProperty("--sy", `${30 + ny * 50}%`);
    };
    addEventListener("pointermove", onMove, { passive: true });
    return () => removeEventListener("pointermove", onMove);
  }, [tilt, fine, reduced, strength]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", perspective: 1400, ...style }}>
      <div className={float && !reduced ? "float" : undefined} style={{ position: "relative" }}>
        <div ref={inner} className="bottle" style={{ ["--mask" as string]: `url(${src})` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bottle-img" src={src} alt={alt} draggable={false} fetchPriority={priority ? "high" : "auto"} />
          <div className="bottle-sheen" aria-hidden />
        </div>
      </div>
      {shadow && <div ref={shade} className="contact-shadow" aria-hidden />}
    </div>
  );
});

export default Bottle;
