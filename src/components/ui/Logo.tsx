"use client";

import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";

interface LogoProps {
  size?: number;
  variant?: "dark" | "white" | "auto";
  className?: string;
}

/**
 * The real Nucleus Labs icon mark (hexagon + core dot), extracted from the
 * official logo file. By default ("auto") it follows the site's light/dark
 * theme automatically — this matters anywhere the logo sits on a themed
 * background (footer, admin sidebar, admin login), since a hardcoded dark
 * icon would be invisible once the page switches to dark mode.
 *
 * Pass an explicit variant only when the logo sits somewhere whose color
 * doesn't follow the theme toggle — e.g. the header while it's transparent
 * over the always-dark hero, which needs to stay white regardless of the
 * site's light/dark mode setting.
 */
export function Logo({ size = 30, variant = "auto", className }: LogoProps) {
  const { theme } = useTheme();
  const resolved = variant === "auto" ? (theme === "dark" ? "white" : "dark") : variant;

  return (
    <Image
      key={resolved}
      src={resolved === "white" ? "/logo-icon-white.png" : "/logo-icon-dark.png"}
      alt="Nucleus Labs"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
