"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStackMarquee from "@/components/sections/TechStackMarquee";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/ui/Navbar";
import { personal, footer } from "@/config/content";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStackMarquee />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-textMuted">{footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-textMuted hover:text-primary transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-textMuted hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm text-textMuted hover:text-primary transition-colors"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
