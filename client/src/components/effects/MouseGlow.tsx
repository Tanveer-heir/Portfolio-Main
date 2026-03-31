import { useEffect, useRef } from "react";
import "./MouseGlow.css";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const glow = glowRef.current;
    if (!glow) {
      return undefined;
    }

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (frame === 0) {
        frame = requestAnimationFrame(update);
      }
    };

    const update = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (
        Math.abs(targetX - currentX) > 0.4 ||
        Math.abs(targetY - currentY) > 0.4
      ) {
        frame = requestAnimationFrame(update);
      } else {
        frame = 0;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return <div className="mouse-glow" ref={glowRef} aria-hidden="true" />;
}
