"use client";

import { motion } from "framer-motion";
import { experiences } from "@/config/content";
import { useInView } from "@/lib/hooks/useInView";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainerSlow,
} from "@/lib/hooks/useAnimationVariants";
import SectionHeading from "@/components/ui/SectionHeading";

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const isLeft = index % 2 === 0;

  const typeLabel = {
    fulltime: "Full-time",
    internship: "Internship",
    contract: "Contract",
  };

  const typeColor = {
    fulltime: "bg-primary/20 text-primary",
    internship: "bg-accent/20 text-accent",
    contract: "bg-emerald-500/20 text-emerald-400",
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={isLeft ? slideInLeft : slideInRight}
    >
      {/* Card - Left side on desktop for even, right for odd */}
      <div
        className={`w-full lg:w-1/2 ${
          isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:order-2"
        }`}
      >
        <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors duration-300">
          {/* Header */}
          <div
            className={`flex items-start gap-3 mb-4 ${
              isLeft ? "lg:flex-row-reverse lg:text-right" : ""
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-lg font-semibold text-textPrimary">
                  {experience.company}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    typeColor[experience.type]
                  }`}
                >
                  {typeLabel[experience.type]}
                </span>
              </div>
              <p className="text-primary font-medium text-sm">
                {experience.role}
              </p>
              <p className="text-textMuted text-sm mt-1">
                {experience.duration}
              </p>
            </div>
          </div>

          {/* Accomplishments */}
          <ul className={`space-y-2 ${isLeft ? "lg:text-left" : ""}`}>
            {experience.accomplishments.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                <span className="text-textSecondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg z-10" />

      {/* Empty space for the other side */}
      <div
        className={`hidden lg:block lg:w-1/2 ${isLeft ? "lg:order-2" : ""}`}
      />
    </motion.div>
  );
}

export default function Experience() {
  const { ref: lineRef, isInView: lineInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-surface/30">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey building production applications"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={lineRef} className="relative">
          {/* Animated vertical line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px]">
            <motion.div
              className="w-full bg-gradient-to-b from-primary/60 via-primary/30 to-transparent origin-top"
              initial={{ height: 0 }}
              animate={lineInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Cards */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate={lineInView ? "visible" : "hidden"}
            className="space-y-12 lg:space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={fadeUp}>
                <TimelineCard experience={exp} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
