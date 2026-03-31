import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../components/Button";
import { DecryptText } from "../../components/effects";
import { hero } from "../../data/portfolio-data";
import "./HeroSection.css";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const meshY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const meshOpacity = useTransform(scrollYProgress, [0, 0.7], [0.34, 0.1]);

  return (
    <section ref={sectionRef} className="hero" id="hero-section">
      {/* Animated background grid */}
      <motion.div
        className="hero__grid"
        style={{ y: meshY, opacity: meshOpacity }}
        aria-hidden="true"
      >
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className="hero__grid-dot" />
        ))}
      </motion.div>

      {/* Radial glow */}
      <div className="hero__glow" aria-hidden="true" />

      <motion.div className="hero__content container" style={{ y, opacity }}>
        <motion.span
          className="hero__overline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {hero.overline}
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <DecryptText
            text={`${hero.titleLines[0]} ${hero.titleAccent}`}
            className="hero__title-decrypt"
            triggerOnView
          />
          <br />
          one
          <br />
          {hero.titleLines[2]}
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button variant="solid" size="lg">
            {hero.ctaPrimary.label}
          </Button>
          <Button variant="outline" size="lg">
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
