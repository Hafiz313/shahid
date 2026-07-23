"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personal } from "@/config/content";
import { scrollToSection, getAssetPath } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold text-textPrimary tracking-tight hover:text-primary transition-colors cursor-pointer"
          aria-label="Go to top"
        >
          {personal.firstName}
          <span className="text-primary">.</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-primary"
                    : "text-textSecondary hover:text-textPrimary"
                }`}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Resume Download Button */}
          <a
            href={getAssetPath(personal.resumeUrl)}
            download="Talha_resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       bg-primary/10 text-primary border border-primary/30
                       hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                       transition-all duration-300 cursor-pointer"
            id="navbar-download-resume"
            aria-label="Download resume as PDF"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          aria-label="Toggle mobile menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-textPrimary transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-textPrimary transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-textPrimary transition-colors"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-base font-medium py-2 transition-colors cursor-pointer ${
                      isActive
                        ? "text-primary"
                        : "text-textSecondary hover:text-textPrimary"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              {/* Mobile Resume Download */}
              <a
                href={getAssetPath(personal.resumeUrl)}
                download="Talha_resume.pdf"
                className="flex items-center gap-2 text-base font-medium py-2 text-primary hover:text-primaryGlow transition-colors cursor-pointer"
                id="mobile-download-resume"
                aria-label="Download resume as PDF"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
