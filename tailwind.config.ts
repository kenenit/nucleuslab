import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1552F0",
          dark: "#0F3DBD",
          light: "#E7EDFE",
        },
        accent: "#2FD5C8",
        // These read from the CSS variables in globals.css (:root / .dark),
        // so text-ink, bg-surface-2, border-themed, etc. — and every Tailwind
        // variant of them (hover:, dark:, group-hover:, md:, ...) — stay
        // theme-aware automatically. Don't hand-write duplicate .text-ink /
        // .bg-surface classes in globals.css instead of this: Tailwind can't
        // generate variants for hand-written classes, which is exactly what
        // caused several buttons' hover states and one section's background
        // to silently do nothing.
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        themed: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      spacing: {
        18: "4.5rem",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(10,17,40,.05)",
        md: "0 8px 24px rgba(10,17,40,.08)",
        lg: "0 24px 56px rgba(10,17,40,.14)",
      },
      keyframes: {
        spin60: { to: { transform: "rotate(360deg)" } },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gridDrift: { to: { transform: "translate(54px, 54px)" } },
      },
      animation: {
        "spin-slow": "spin60 40s linear infinite",
        "spin-slow-reverse": "spin60 60s linear infinite reverse",
        float: "floatY 6s ease-in-out infinite",
        "grid-drift": "gridDrift 70s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
