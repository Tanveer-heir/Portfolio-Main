import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface DecryptTextProps {
  text: string;
  revealText?: string;
  className?: string;
  duration?: number;
}

const SYMBOLS = "!<>-_\\/[]{}=+*^?#________";

export default function DecryptText({
  text,
  revealText,
  className,
  duration = 1200,
}: DecryptTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const finalText = revealText ?? text;
  const [output, setOutput] = useState(shouldReduceMotion ? finalText : "");

  const placeholders = useMemo(() => {
    return text
      .split("")
      .map((char) =>
        char === " "
          ? " "
          : SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      )
      .join("");
  }, [text]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setOutput(finalText);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const revealCount = Math.floor(progress * finalText.length);

      const next = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") {
            return " ";
          }

          if (index < revealCount) {
            return char;
          }

          return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        })
        .join("");

      setOutput(next);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setOutput(placeholders);
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [duration, finalText, placeholders, shouldReduceMotion]);

  return <span className={className}>{output}</span>;
}
