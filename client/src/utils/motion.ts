/* ============================================
   MOTION UTILITIES — Shared Framer Motion Variants
   ============================================
   Centralized animation constants for consistent
   scroll-reveal, stagger, and hover patterns.
   ============================================ */

import type { Variants, Transition } from 'framer-motion';

// ——— Easings ———

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ——— Fade In Up (scroll-reveal for individual elements) ———

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE_OUT_EXPO },
};

// ——— Fade In Left (experience timeline) ———

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: EASE_OUT_EXPO },
};

// ——— Stagger Container + Item (card grids) ———

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

// ——— Scale-On-Hover (cards, buttons) ———

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 17 } as Transition,
};

// ——— Magnetic Hover (social icons, CTAs) ———

export const magneticHover = {
  whileHover: { scale: 1.12, y: -4 },
  whileTap: { scale: 0.92 },
  transition: { type: 'spring', stiffness: 350, damping: 12 } as Transition,
};

// ——— Scale In (hobby gallery) ———

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: EASE_OUT_EXPO },
};

// ——— Helper: Create stagger delay for index ———

export function staggerDelay(index: number, baseDelay = 0.08): Transition {
  return {
    duration: 0.5,
    delay: index * baseDelay,
    ease: EASE_OUT_EXPO,
  };
}
