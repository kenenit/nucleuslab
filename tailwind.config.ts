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
        // NOTE: "ink" and "surface" are intentionally NOT registered here.
        // text-ink / text-ink-soft / bg-surface / bg-surface-2 / border-themed
        // are defined in src/app/globals.css using CSS variables (see :root
        // and .dark), so they respond correctly to dark mode. Registering
        // them here too would generate a second, static (non-theme-aware)
        // version of each class under the same name — Tailwind's generated
        // utilities can win the cascade over the custom ones, which is
        // exactly what caused text to go unreadable in dark mode / white-on-
        // white backgrounds. Don't re-add them without renaming.
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
