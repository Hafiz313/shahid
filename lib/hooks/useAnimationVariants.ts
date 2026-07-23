"use client";

import { Variants } from "framer-motion";
import { animation } from "@/config/theme";

// ============================================
// Reusable Framer Motion Animation Variants
// ============================================

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: animation.duration.slow,
      ease: animation.ease.out,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: animation.duration.normal,
      ease: animation.ease.out,
    },
  },
};

export const fadeInBlur: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: animation.duration.slow,
      ease: animation.ease.out,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: animation.duration.slow,
      ease: animation.ease.out,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: animation.duration.slow,
      ease: animation.ease.out,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: animation.duration.slow,
      ease: animation.ease.out,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animation.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animation.stagger.slow,
      delayChildren: 0.2,
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const heroImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const timelineLineVariants: Variants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
