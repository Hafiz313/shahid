// ============================================
// Design Tokens — Premium Dark Fintech Aesthetic
// ============================================

export const colors = {
  bg: "#0B0F14",
  surface: "#111827",
  card: "#161D2A",
  cardHover: "#1C2435",

  primary: "#3B82F6",       // Aurora Blue
  primaryGlow: "#60A5FA",
  primaryMuted: "#1E3A5F",

  accent: "#F59E0B",        // Gold — luxury hover glows
  accentGlow: "#FBBF24",
  accentMuted: "#78350F",

  textPrimary: "#E5E7EB",
  textSecondary: "#94A3B8",
  textMuted: "#64748B",

  border: "#1E293B",
  borderHover: "#334155",
  borderGlow: "rgba(59, 130, 246, 0.3)",

  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",

  // Overlay & Glass
  overlay: "rgba(11, 15, 20, 0.85)",
  glass: "rgba(17, 24, 39, 0.6)",
  glassBorder: "rgba(255, 255, 255, 0.06)",
} as const;

export const typography = {
  fontFamily: {
    display: "'Inter', system-ui, -apple-system, sans-serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
    "7xl": "4.5rem",   // 72px
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  lineHeight: {
    tight: "1.1",
    snug: "1.25",
    normal: "1.5",
    relaxed: "1.625",
    loose: "1.8",
  },
} as const;

export const spacing = {
  section: {
    paddingY: "6rem",        // py-24
    paddingYMobile: "4rem",  // py-16
    gap: "4rem",             // gap-16
  },
  container: {
    maxWidth: "1280px",
    paddingX: "1.5rem",      // px-6
  },
} as const;

export const borderRadius = {
  sm: "0.375rem",   // 6px
  md: "0.5rem",     // 8px
  lg: "0.75rem",    // 12px
  xl: "1rem",       // 16px
  "2xl": "1.5rem",  // 24px
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
  md: "0 4px 6px rgba(0, 0, 0, 0.4)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.5)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.5)",
  glow: {
    primary: "0 0 20px rgba(59, 130, 246, 0.15)",
    accent: "0 0 20px rgba(245, 158, 11, 0.15)",
    primaryStrong: "0 0 40px rgba(59, 130, 246, 0.25)",
    accentStrong: "0 0 40px rgba(245, 158, 11, 0.25)",
  },
  card: "0 4px 24px rgba(0, 0, 0, 0.3)",
  cardHover: "0 8px 40px rgba(0, 0, 0, 0.4)",
} as const;

export const animation = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    xslow: 0.8,
  },
  ease: {
    default: [0.25, 0.1, 0.25, 1],
    out: [0, 0, 0.2, 1],
    in: [0.4, 0, 1, 1],
    inOut: [0.42, 0, 0.58, 1],
    spring: { type: "spring" as const, stiffness: 300, damping: 30 },
    smooth: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animation,
  breakpoints,
} as const;

export default theme;
