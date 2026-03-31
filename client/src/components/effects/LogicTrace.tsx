import { useEffect, useState, type RefObject } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./LogicTrace.css";

interface LogicTraceProps {
  containerRef: RefObject<HTMLElement | null>;
  nodeSelector: string;
  className?: string;
}

export default function LogicTrace({
  containerRef,
  nodeSelector,
  className = "",
}: LogicTraceProps) {
  const [polyline, setPolyline] = useState("");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 30%"],
  });
  const draw = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.5,
  });

  useEffect(() => {
    const updatePath = () => {
      const root = containerRef.current;
      if (!root) {
        return;
      }

      const nodes = Array.from(
        root.querySelectorAll<HTMLElement>(nodeSelector),
      );
      if (nodes.length < 2) {
        setPolyline("");
        return;
      }

      const rect = root.getBoundingClientRect();
      const points = nodes
        .map((node) => {
          const nRect = node.getBoundingClientRect();
          const x = nRect.left - rect.left + nRect.width / 2;
          const y = nRect.top - rect.top + nRect.height / 2;
          return `${x},${y}`;
        })
        .join(" ");

      setPolyline(points);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, nodeSelector]);

  return (
    <svg className={`logic-trace ${className}`} aria-hidden="true">
      <polyline className="logic-trace__base" points={polyline} />
      <motion.polyline
        className="logic-trace__live"
        points={polyline}
        pathLength={draw}
      />
    </svg>
  );
}
