"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/config/content";
import { projectLinks } from "@/config/links";
import { useInView } from "@/lib/hooks/useInView";
import { fadeUp, staggerContainer } from "@/lib/hooks/useAnimationVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <Card onClick={onOpen} className="group" id={`project-${project.id}`}>
      {/* Image Container */}
      <div
        className="relative h-48 overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <motion.div
          animate={{ scale: isImageHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}15, ${project.color}08)`,
            }}
          >
            <div
              className="text-6xl font-bold opacity-20"
              style={{ color: project.color }}
            >
              {project.title.charAt(0)}
            </div>
          </div>
        </motion.div>

        {/* Top gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-textPrimary group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-textMuted">{project.subtitle}</p>
          </div>
        </div>
        {project.role && (
          <p className="text-xs font-medium text-primary mb-3">
            Role: {project.role}
          </p>
        )}

        <p className="text-sm text-textSecondary leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-textMuted"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-textMuted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const links = projectLinks[project.title] || {};
  const hasLinks = Object.values(links).some((url) => url && url.length > 0);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg/90 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface/80 border border-border flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-primary/30 transition-all cursor-pointer"
          aria-label="Close project details"
        >
          ✕
        </button>

        {/* Header image area */}
        <div
          className="h-48 sm:h-56 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
          }}
        >
          <div
            className="text-8xl font-bold opacity-15"
            style={{ color: project.color }}
          >
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-3xl font-bold text-textPrimary mb-2">
            {project.title}
          </h3>
          <p className="text-primary font-medium mb-1">{project.subtitle}</p>
          {project.role && (
            <p className="text-sm text-textMuted mb-4">
              <span className="font-semibold text-textPrimary">Role:</span> {project.role}
            </p>
          )}
          <p className="text-textSecondary leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-textMuted uppercase tracking-wider mb-4">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="text-textSecondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-textMuted uppercase tracking-wider mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-border text-textSecondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {hasLinks && (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
              {links.playStore && (
                <a
                  href={links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="sm">
                    ▶ Play Store
                  </Button>
                </a>
              )}
              {links.appStore && (
                <a
                  href={links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="sm">
                     App Store
                  </Button>
                </a>
              )}
              {links.website && (
                <a
                  href={links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="sm">
                    🌐 Website
                  </Button>
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    GitHub
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of production applications I've built and shipped"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <ProjectCard
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
