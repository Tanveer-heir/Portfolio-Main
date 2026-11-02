import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { site } from "../../config/content";
import "./FooterSystemLog.css";

const LOG_LINES = site.footer.terminalLines;

export default function FooterSystemLog() {
  const shouldReduceMotion = useReducedMotion();
  const [lines, setLines] = useState<string[]>(LOG_LINES.slice(0, 4));
  const frame = useRef(4);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion || LOG_LINES.length === 0) {
      return undefined;
    }

    const timer = setInterval(() => {
      const nextLine = LOG_LINES[frame.current % LOG_LINES.length];
      frame.current += 1;
      setLines((prev) => [...prev.slice(-7), nextLine]);
    }, 1700);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }
    viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
  }, [lines]);

  if (LOG_LINES.length === 0) {
    return null;
  }

  return (
    <div className="footer-system-log glass" aria-hidden="true">
      <div className="footer-system-log__head">terminal://status</div>
      <div className="footer-system-log__viewport" ref={viewportRef}>
        {lines.map((line, index) => (
          <div className="footer-system-log__line" key={`${line}-${index}`}>
            <span className="footer-system-log__prompt">&gt;</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
