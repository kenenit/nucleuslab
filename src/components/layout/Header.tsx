"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Moon, Sun, ArrowRight } from "lucide-react";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { serviceLinks, productLinks, aboutLinks } from "@/data/nav";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function updateHeaderState() {
      const hero = document.querySelector("[data-hero]");
      const header = headerRef.current;
      if (!hero || !header) {
        setScrolled(window.scrollY > 40);
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= header.offsetHeight);
    }
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);
    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  const megaMenus = [
    { key: "services", label: "Services", items: serviceLinks },
    { key: "products", label: "Products", items: productLinks },
    { key: "about", label: "About", items: aboutLinks },
  ];

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-[100] border-b transition-all duration-300",
        scrolled ? "border-themed backdrop-blur-md" : "border-transparent"
      )}
      style={scrolled ? { backgroundColor: "color-mix(in srgb, var(--bg) 90%, transparent)" } : undefined}
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 font-display text-lg font-bold transition-colors",
            scrolled ? "text-ink" : "text-[#EAF0FF]"
          )}
        >
          <OrbitMark size={30} />
          Nucleus Labs
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {megaMenus.map((menu) => (
              <li key={menu.key} className="group relative">
                <button
                  className={cn(
                    "flex items-center gap-1.5 py-2.5 text-[15px] font-medium transition-colors hover:text-brand",
                    scrolled ? "text-ink" : "text-[#EAF0FF]"
                  )}
                >
                  {menu.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 translate-y-2 rounded-lg border border-themed bg-surface p-5 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-md p-3 transition-colors hover:bg-surface-2"
                      >
                        <div className="text-[15px] font-semibold text-ink">{item.label}</div>
                        {item.description && (
                          <div className="mt-0.5 text-[13px] text-ink-soft">{item.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            <li>
              <Link
                href="/portfolio"
                className={cn(
                  "py-2.5 text-[15px] font-medium transition-colors hover:text-brand",
                  scrolled ? "text-ink" : "text-[#EAF0FF]"
                )}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={cn(
                  "py-2.5 text-[15px] font-medium transition-colors hover:text-brand",
                  scrolled ? "text-ink" : "text-[#EAF0FF]"
                )}
              >
                Blog
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className={cn(
              "flex h-[38px] w-[38px] items-center justify-center rounded-full border transition-colors",
              scrolled ? "border-themed text-ink" : "border-white/30 text-[#EAF0FF]"
            )}
          >
            {theme === "dark" ? <Sun className="h-[17px] w-[17px]" /> : <Moon className="h-[17px] w-[17px]" />}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "flex h-[38px] w-[38px] items-center justify-center lg:hidden",
              scrolled ? "text-ink" : "text-[#EAF0FF]"
            )}
          >
            <Menu className="h-[22px] w-[22px]" />
          </button>
        </div>
      </div>

      {/* Mobile off-canvas nav */}
      <div
        className={cn(
          "fixed inset-0 z-[110] bg-surface transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-[76px] items-center justify-between px-5">
          <span className="font-display text-lg font-bold text-ink">Menu</span>
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-ink">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-1 overflow-y-auto px-5 pb-8">
          {megaMenus.map((menu) => (
            <div key={menu.key} className="border-b border-themed">
              <button
                className="flex w-full items-center justify-between py-4 text-[15px] font-medium text-ink"
                onClick={() => setOpenMobileSection((prev) => (prev === menu.key ? null : menu.key))}
              >
                {menu.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openMobileSection === menu.key && "rotate-180"
                  )}
                />
              </button>
              {openMobileSection === menu.key && (
                <div className="flex flex-col gap-1 pb-3">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md p-2.5 text-sm text-ink-soft hover:bg-surface-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/portfolio"
            onClick={() => setMobileOpen(false)}
            className="border-b border-themed py-4 text-[15px] font-medium text-ink"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="border-b border-themed py-4 text-[15px] font-medium text-ink"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-[15px] font-semibold text-white"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
