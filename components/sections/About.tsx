"use client";

import { motion } from "framer-motion";
import { about, personal, hero } from "@/config/content";
import { useInView } from "@/lib/hooks/useInView";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/hooks/useAnimationVariants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-surface/30">
      <SectionHeading
        title={about.heading}
        subtitle="Engineer · Builder · Problem Solver"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto px-6"
      >
        {/* Bio paragraphs */}
        <div className="space-y-6 mb-12">
          {about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-textSecondary leading-relaxed text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Key metrics strip */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
        >
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <p className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-textMuted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Resume download */}
        <motion.div variants={fadeUp} className="text-center">
          <a
            href={personal.resumeUrl}
            download="Talha_resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-medium text-lg
                       hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300
                       border border-primary/20 hover:scale-105 active:scale-95"
            id="about-download-resume"
            aria-label="Download resume as PDF"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {about.resumeLabel}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
