"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  // False until the client has hydrated and confirmed the real theme.
  // Components that render different markup per-theme (icons, etc.)
  // should gate on this to avoid a server/client hydration mismatch —
  // SSR always assumes "light" since it can't know a saved preference.
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Reads the already-resolved theme synchronously on the client (matches the
// inline script in layout.tsx that sets the "dark" class before paint), so
// components that branch on `theme` — like the logo — render the right
// variant on the very first frame instead of flashing the wrong one after
// hydration.
function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nucleus-theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("nucleus-theme", next);
      return next;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
