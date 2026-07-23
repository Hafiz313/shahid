"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  tiltEnabled?: boolean;
  hoverGlow?: boolean;
  onClick?: () => void;
  id?: string;
}

export default function Card({
  children,
  className,
  tiltEnabled = true,
  hoverGlow = true,
  onClick,
  id,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      x: (y - 0.5) * -10,
      y: (x - 0.5) * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      data-cursor-magnetic
      className={cn(
        "relative bg-card border border-border rounded-2xl overflow-hidden transition-colors duration-300",
        hoverGlow && "hover:border-primary/30",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        y: isHovered ? -8 : 0,
        boxShadow: isHovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.1)"
          : "0 4px 24px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
