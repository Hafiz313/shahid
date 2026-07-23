"use client";

import { motion } from "framer-motion";
import { skillCategories, educationList, achievements } from "@/config/content";
import { certificationLinks } from "@/config/links";
import { useInView } from "@/lib/hooks/useInView";
import { fadeUp, staggerContainer } from "@/lib/hooks/useAnimationVariants";
import SectionHeading from "@/components/ui/SectionHeading";

// Collect all skills into a flat list for the scrolling rows
const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ skill, category: cat.title, icon: cat.icon }))
);
const mid = Math.ceil(allSkills.length / 2);
const skillsRow1 = allSkills.slice(0, mid);
const skillsRow2 = allSkills.slice(mid);

function SkillPill({ skill, icon }: { skill: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border whitespace-nowrap shrink-0 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300 group">
      <span className="text-base group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="text-sm font-medium text-textSecondary group-hover:text-primary transition-colors duration-300">
        {skill}
      </span>
    </div>
  );
}

function SkillsMarqueeRow({
  items,
  direction = "left",
  speed = 25,
}: {
  items: typeof allSkills;
  direction?: "left" | "right";
  speed?: number;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

      <div
        className={`flex gap-3 w-max hover:[animation-play-state:paused] ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <SkillPill key={`${item.skill}-${i}`} skill={item.skill} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Categorized technologies, tools, and technical proficiency"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Animated scrolling skill pills */}
        <motion.div variants={fadeUp} className="space-y-4 mb-16 max-w-[100vw]">
          <SkillsMarqueeRow items={skillsRow1} direction="left" speed={28} />
          <SkillsMarqueeRow items={skillsRow2} direction="right" speed={32} />
        </motion.div>

        {/* Categorized Skills Grid */}
        <motion.div variants={fadeUp} className="mb-20">
          <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center gap-2">
            <span>⚡</span> Categorized Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h4 className="font-semibold text-textPrimary text-base">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-surface border border-border text-textSecondary hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-textMuted uppercase tracking-wider mb-6">
              🎓 Education & Qualifications
            </h3>
            <div className="space-y-6">
              {educationList.map((edu, i) => (
                <div key={i} className="border-b border-border/40 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-base font-semibold text-textPrimary mb-1">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-primary font-medium">{edu.institution}</span>
                    <span className="text-textMuted text-xs">{edu.duration}</span>
                  </div>
                  {edu.website && (
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-textMuted hover:text-primary transition-colors inline-block"
                    >
                      Website: {edu.website}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-textMuted uppercase tracking-wider mb-6">
              🏆 Certifications & Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const link = certificationLinks[achievement.name];
                const hasLink = link && link.url && link.url.length > 0;

                return (
                  <div
                    key={achievement.id}
                    className="p-4 rounded-xl bg-surface border border-border flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                        <div>
                          <h5 className="text-textPrimary font-semibold text-sm">
                            {achievement.name}
                          </h5>
                          <p className="text-xs text-textMuted mt-0.5">
                            {achievement.issuer} ({achievement.year})
                          </p>
                        </div>
                      </div>
                      {hasLink && (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:text-primaryGlow transition-colors shrink-0"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
