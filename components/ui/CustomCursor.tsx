"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const isVisible = useRef(false);

  const animate = useCallback(() => {
    // Lerp ring toward mouse
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${mousePos.current.x - 3}px, ${mousePos.current.y - 3}px, 0)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px, 0)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "0.5";
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    // Button/link hover — enlarge ring
    const onPointerOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input[type="submit"]')) {
        if (ringRef.current) {
          ringRef.current.style.width = "50px";
          ringRef.current.style.height = "50px";
          ringRef.current.style.borderColor = "rgba(245, 158, 11, 0.5)";
        }
      }
    };
    const onPointerOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input[type="submit"]')) {
        if (ringRef.current) {
          ringRef.current.style.width = "36px";
          ringRef.current.style.height = "36px";
          ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.25)";
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: 0, willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] rounded-full border border-white/25 pointer-events-none z-[9998]"
        style={{ opacity: 0, willChange: "transform", transition: "width 0.2s, height 0.2s, border-color 0.2s" }}
      />
    </>
  );
}
