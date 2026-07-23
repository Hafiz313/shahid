"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { hero, personal } from "@/config/content";
import {
  heroTextVariants,
  heroImageVariants,
  staggerContainer,
} from "@/lib/hooks/useAnimationVariants";
import Button from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      el.style.transform = `translate3d(${nx * 12}px, ${ny * 12}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-surface" />
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: "radial-gradient(circle, #F59E0B, transparent)" }}
        />
      </div>

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24">
          {/* Left — Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={heroTextVariants}
              className="text-primary font-medium text-lg mb-3 tracking-wide"
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              variants={heroTextVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-textPrimary leading-tight mb-4"
            >
              {hero.name}
              <span className="text-primary">.</span>
            </motion.h1>

            <motion.h2
              variants={heroTextVariants}
              className="text-2xl sm:text-3xl font-semibold text-textSecondary mb-6"
            >
              {hero.title}
            </motion.h2>

            <motion.p
              variants={heroTextVariants}
              className="text-lg text-textSecondary leading-relaxed max-w-xl mb-10"
            >
              {hero.tagline}
            </motion.p>

            <motion.div
              variants={heroTextVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("projects")}
                id="hero-cta-primary"
                ariaLabel="View my projects"
              >
                {hero.cta.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                id="hero-cta-secondary"
                ariaLabel="Get in touch with me"
              >
                {hero.cta.secondary}
              </Button>
            </motion.div>

            <motion.div
              variants={heroTextVariants}
              className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-border/50"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-textMuted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile Image with parallax (ref-based, no re-renders) */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={heroImageVariants}
          >
            <div
              ref={parallaxRef}
              className="relative"
              style={{ willChange: "transform", transition: "transform 0.1s ease-out" }}
            >
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full opacity-25 blur-xl animate-pulse-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3B82F6, #60A5FA, #3B82F6, #1E3A5F, #3B82F6)",
                }}
              />

              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl bg-[#e5e7eb]/10">
                <Image
                  src={personal.profileImage}
                  alt={`${personal.name} profile photo`}
                  fill
                  priority
                  className="object-cover object-top scale-[0.88] transition-transform duration-500"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  unoptimized
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(11,15,20,0.2)] pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
