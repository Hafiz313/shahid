"use client";

import { motion } from "framer-motion";
import { techStackItems } from "@/config/content";
import { useInView } from "@/lib/hooks/useInView";
import { fadeUp } from "@/lib/hooks/useAnimationVariants";
import SectionHeading from "@/components/ui/SectionHeading";

function TechPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-card/80 border border-border/60 backdrop-blur-sm whitespace-nowrap shrink-0 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt={`${name} logo`}
        width={28}
        height={28}
        className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <span className="text-sm font-medium text-textSecondary group-hover:text-primary transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof techStackItems;
  direction?: "left" | "right";
  speed?: number;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

      <div
        className={`flex gap-4 w-max hover:[animation-play-state:paused] ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <TechPill key={`${item.name}-${i}`} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const midpoint = Math.ceil(techStackItems.length / 2);
  const row1 = techStackItems.slice(0, midpoint);
  const row2 = techStackItems.slice(midpoint);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
      />

      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I use to bring ideas to life"
      />

      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-5 max-w-[100vw]"
      >
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={40} />
      </motion.div>
    </section>
  );
}
