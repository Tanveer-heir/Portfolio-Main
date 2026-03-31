import { useEffect, useRef, useState } from "react";
import "./FooterSystemLog.css";

const LOG_LINES = [
  "Uptime: 99.9%",
  "Scanning hardware traces...",
  "GIS layers synced.",
  "Spatial index rebuilt.",
  "Telemetry heartbeat nominal.",
  "Auth channel encrypted.",
  "Compiler cache warmed.",
];

export default function FooterSystemLog() {
  const [lines, setLines] = useState<string[]>(LOG_LINES.slice(0, 4));
  const frame = useRef(4);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextLine = LOG_LINES[frame.current % LOG_LINES.length];
      frame.current += 1;
      setLines((prev) => [...prev.slice(-7), nextLine]);
    }, 1700);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }
    viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
  }, [lines]);

  return (
    <div
      className="footer-system-log glass"
      role="log"
      aria-live="polite"
      aria-label="System status logs"
    >
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
