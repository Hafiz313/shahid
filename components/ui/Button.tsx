"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

const variantStyles = {
  primary:
    "bg-primary text-white border border-primary/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  secondary:
    "bg-card text-textPrimary border border-border hover:border-primary/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  outline:
    "bg-transparent text-textPrimary border border-border hover:border-accent/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className,
  id,
  ariaLabel,
}: ButtonProps) {
  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || undefined}
      className={cn(
        "relative font-medium transition-colors duration-300 cursor-pointer select-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      whileHover={disabled ? {} : { scale: 1.08 }}
      whileTap={disabled ? {} : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.button>
  );
}
