import { useEffect, useMemo, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import "./TopographicBackground.css";

const TOPO_PATHS = [
  "M0,70 C120,20 260,120 420,70 C580,20 720,120 900,60 C1080,0 1260,80 1440,40",
  "M0,140 C140,90 280,190 460,140 C640,90 760,180 940,130 C1120,80 1260,170 1440,120",
  "M0,220 C120,160 260,280 440,230 C620,180 780,270 940,220 C1100,170 1260,250 1440,210",
  "M0,300 C120,250 240,350 420,300 C600,250 760,340 920,300 C1080,250 1240,330 1440,280",
  "M0,380 C110,330 260,430 430,370 C600,310 780,420 940,370 C1100,320 1250,410 1440,350",
  "M0,460 C120,410 260,500 420,450 C580,400 760,490 920,440 C1080,390 1260,470 1440,430",
  "M0,540 C140,500 280,580 440,530 C600,480 780,570 960,520 C1140,470 1260,550 1440,500",
];

export default function TopographicBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const driftY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const driftOpacity = useTransform(scrollYProgress, [0, 0.9], [0.6, 0.25]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 24,
        y: (event.clientY / window.innerHeight - 0.5) * 18,
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const transition = useMemo(
    () => ({
      duration: 12,
      repeat: shouldReduceMotion ? 0 : Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut" as const,
    }),
    [shouldReduceMotion],
  );

  return (
    <div className="topographic-bg" aria-hidden="true">
      <motion.div
        className="topographic-bg__mesh"
        style={
          shouldReduceMotion ? undefined : { y: driftY, opacity: driftOpacity }
        }
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: mouse.x,
                y: mouse.y,
                scale: [1, 1.012, 1],
              }
        }
        transition={transition}
      >
        <svg
          className="topographic-bg__svg"
          viewBox="0 0 1440 640"
          preserveAspectRatio="none"
        >
          {TOPO_PATHS.map((path, index) => (
            <path
              key={path}
              d={path}
              className="topographic-bg__path"
              style={{ animationDelay: `${index * -1.2}s` }}
            />
          ))}
        </svg>
      </motion.div>
      <div className="topographic-bg__vignette" />
    </div>
  );
}
