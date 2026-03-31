import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface DecryptTextProps {
  text: string;
  revealText?: string;
  className?: string;
  duration?: number;
  triggerOnView?: boolean;
  once?: boolean;
}

const SYMBOLS = "0123456789ABCDEF<>-_[]{}=+*^?#";

export default function DecryptText({
  text,
  revealText,
  className,
  duration = 1200,
  triggerOnView = false,
  once = true,
}: DecryptTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const finalText = revealText ?? text;
  const [output, setOutput] = useState(shouldReduceMotion ? finalText : "");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.65, once });

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

    if (triggerOnView && !isInView) {
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
  }, [
    duration,
    finalText,
    placeholders,
    shouldReduceMotion,
    triggerOnView,
    isInView,
  ]);

  return (
    <span ref={ref} className={className}>
      {output}
    </span>
  );
}
