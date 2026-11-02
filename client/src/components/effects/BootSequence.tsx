import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./BootSequence.css";

const WIREFRAME_LINES = Array.from({ length: 7 }).map((_, index) => ({
  id: index,
  delay: index * 0.1,
}));

// Plays once per visit, not on every page change
let hasBooted = false;

const shouldSkip = () =>
  hasBooted || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function BootSequence() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(shouldSkip);

  useEffect(() => {
    if (done) {
      return undefined;
    }

    const start = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const elapsed = now - start;
      const next = Math.min((elapsed / 1700) * 100, 100);
      setProgress(next);

      if (next >= 100) {
        hasBooted = true;
        setDone(true);
      } else {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="boot-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="boot-sequence__bar">
            <motion.span
              className="boot-sequence__fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="boot-sequence__label">
            Booting cinematic engine {Math.round(progress)}%
          </span>

          <div className="boot-sequence__wireframes">
            {WIREFRAME_LINES.map((line) => (
              <motion.span
                key={line.id}
                className="boot-sequence__wire"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.45, delay: line.delay }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
