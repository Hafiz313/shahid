"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks/useInView";
import { fadeUp } from "@/lib/hooks/useAnimationVariants";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      id={id}
      className="text-center mb-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl md:text-5xl font-bold text-textPrimary mb-4"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-lg text-textSecondary max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        variants={fadeUp}
        className="mt-6 mx-auto w-20 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </motion.div>
  );
}
