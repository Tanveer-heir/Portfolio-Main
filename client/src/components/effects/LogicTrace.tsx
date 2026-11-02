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

      // Offsets ignore transforms, so cards still sliding in don't skew the line
      const points = nodes
        .map((node) => {
          let x = node.offsetWidth / 2;
          let y = node.offsetHeight / 2;
          let current: HTMLElement | null = node;
          while (current && current !== root) {
            x += current.offsetLeft;
            y += current.offsetTop;
            current = current.offsetParent as HTMLElement | null;
          }
          return `${x},${y}`;
        })
        .join(" ");

      setPolyline(points);
    };

    updatePath();
    // Also re-measures when late fonts or images change the height of the cards
    const observer = new ResizeObserver(updatePath);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
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
