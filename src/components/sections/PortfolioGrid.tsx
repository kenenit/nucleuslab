"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, UtensilsCrossed, Globe, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, type CaseStudy } from "@/data/case-studies";

const iconMap = { home: Home, menu: UtensilsCrossed, globe: Globe };

const filters = [
  { key: "all", label: "All work" },
  { key: "mobile", label: "Mobile" },
  { key: "web", label: "Web" },
  { key: "ai", label: "AI / IoT" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export function PortfolioGrid() {
  const [active, setActive] = useState<FilterKey>("all");

  const visible: CaseStudy[] =
    active === "all" ? caseStudies : caseStudies.filter((c) => c.categories.includes(active));

  return (
    <>
      <div className="mb-14 flex flex-wrap gap-2.5" role="group" aria-label="Filter by category">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-[18px] py-2.5 text-[.8125rem] font-semibold transition-all ${
              active === f.key
                ? "border-brand bg-brand text-white"
                : "border-themed text-ink-soft hover:border-brand hover:text-brand"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {visible.map((study, i) => {
          const Icon = iconMap[study.icon];
          const reverse = i % 2 === 1;
          return (
            <Reveal
              key={study.slug}
              delayMs={i * 60}
              className="grid overflow-hidden rounded-lg border border-themed bg-surface transition-shadow duration-300 hover:shadow-lg md:grid-cols-2"
            >
              <div
                className={`relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-brand-light to-surface-2 md:min-h-[280px] ${
                  reverse ? "md:order-2" : ""
                }`}
              >
                <span className="absolute left-[18px] top-[18px] rounded-full border border-themed bg-surface px-3.5 py-1.5 font-mono text-[.72rem]">
                  {study.tag}
                </span>
                <Icon className="h-20 w-20 text-brand opacity-50" strokeWidth={1.2} />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <h3 className="mb-3 font-display text-2xl font-semibold text-ink">{study.title}</h3>
                <p className="mb-5 text-[.9375rem] leading-relaxed text-ink-soft">{study.summary}</p>

                <div className="mb-5 flex flex-wrap gap-6">
                  {study.results.map((r) => (
                    <div key={r.label}>
                      <strong className="block font-display text-2xl font-bold text-brand">{r.value}</strong>
                      <span className="text-[.78rem] text-ink-soft">{r.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-themed px-2.5 py-1 font-mono text-[.72rem] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={study.productHref}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  View product page
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 rounded-lg bg-surface-2 p-6 text-center text-sm text-ink-soft">
        More case studies — including client projects with full before/after breakdowns — are added here as
        engagements complete. This grid is already wired to filter by category as the list grows.
      </Reveal>
    </>
  );
}
