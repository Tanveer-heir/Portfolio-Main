import { useEffect, useRef, useState } from "react";
import "./CinematicCursor.css";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, .btn, .card';

export default function CinematicCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    setEnabled(true);
    document.documentElement.classList.add("has-cinematic-cursor");

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) {
      return undefined;
    }

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let rafId = 0;

    const render = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) {
        return;
      }
      const interactive = target.closest(INTERACTIVE_SELECTOR);
      ring.classList.toggle(
        "cinematic-cursor__ring--active",
        Boolean(interactive),
      );
      dot.classList.toggle(
        "cinematic-cursor__dot--active",
        Boolean(interactive),
      );
    };

    const onLeave = () => {
      ring.classList.remove("cinematic-cursor__ring--active");
      dot.classList.remove("cinematic-cursor__dot--active");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("has-cinematic-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        className="cinematic-cursor__ring"
        ref={ringRef}
        aria-hidden="true"
      />
      <div className="cinematic-cursor__dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
