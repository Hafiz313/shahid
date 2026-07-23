"use client";

import { cn } from "@/lib/utils";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "textarea";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  id: string;
  required?: boolean;
  rows?: number;
}

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  id,
  required = false,
  rows = 5,
}: InputProps) {
  const baseStyles = cn(
    "w-full bg-surface border border-border rounded-xl px-4 py-3",
    "text-textPrimary placeholder:text-textMuted",
    "outline-none transition-all duration-300",
    "focus:border-primary/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    error && "border-red-500/50 focus:border-red-500/50"
  );

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-textSecondary"
        >
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={cn(baseStyles, "resize-none")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={baseStyles}
        />
      )}

      {error && (
        <p className="text-sm text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
}
