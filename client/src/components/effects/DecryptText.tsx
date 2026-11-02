import { useEffect, useRef, useState } from "react";
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

const randomSymbol = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

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
  const [scrambled, setScrambled] = useState<string | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.65, once });
  const shouldAnimate = !shouldReduceMotion && (!triggerOnView || isInView);

  useEffect(() => {
    if (!shouldAnimate) {
      return undefined;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const revealCount = Math.floor(progress * finalText.length);

      setScrambled(
        finalText
          .split("")
          .map((char, index) =>
            char === " " || index < revealCount ? char : randomSymbol(),
          )
          .join(""),
      );

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, finalText, shouldAnimate]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{finalText}</span>
      <span aria-hidden="true">
        {shouldAnimate && scrambled !== null ? scrambled : finalText}
      </span>
    </span>
  );
}
