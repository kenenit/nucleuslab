import { Check, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import type { ServiceContent } from "@/types";

interface ServiceBlockProps {
  service: ServiceContent;
  index: number;
  total: number;
  icon: LucideIcon;
  reverse?: boolean;
  ctaLabel: string;
  isLast?: boolean;
}

export function ServiceBlock({ service, index, total, icon: Icon, reverse = false, ctaLabel, isLast = false }: ServiceBlockProps) {
  return (
    <section id={service.slug} className="mx-auto max-w-[1280px] scroll-mt-[140px] px-5 md:px-10">
      <div
        className={`grid items-center gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24 ${
          isLast ? "" : "border-b border-themed"
        }`}
      >
        <div className={reverse ? "md:order-2" : ""}>
          <Reveal>
            <span className="mb-3 block font-mono text-[.8125rem] text-brand">
              {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </Reveal>
          <Reveal delayMs={40}>
            <h2 className="mb-4 font-display text-[1.6rem] font-semibold text-ink md:text-[2.25rem]">
              {service.title}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mb-5 max-w-[520px] text-[1.0625rem] text-ink-soft">{service.description}</p>
          </Reveal>
          <Reveal delayMs={120} className="mb-5 flex flex-col gap-3">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <Check className="mt-0.5 h-[18px] w-[18px] flex-none text-brand" />
                {benefit}
              </div>
            ))}
          </Reveal>
          <Reveal delayMs={160}>
            <span className="mb-2.5 block font-mono text-[.72rem] uppercase tracking-[.08em] text-ink-soft">
              Process
            </span>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              {service.process.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="flex items-center gap-2">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-light font-mono text-[.7rem] font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[.8125rem] text-ink-soft">{step}</span>
                  </span>
                  {i < service.process.length - 1 && <span className="text-ink-soft">→</span>}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={200}>
            <span className="mb-2.5 block font-mono text-[.72rem] uppercase tracking-[.08em] text-ink-soft">
              Technologies
            </span>
            <div className="mb-6 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-themed px-2.5 py-1 font-mono text-[.72rem] text-ink-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={240}>
            <Button href="/contact" variant="primary">
              {ctaLabel}
            </Button>
          </Reveal>
        </div>

        <Reveal className={`relative flex aspect-[4/3.4] items-center justify-center overflow-hidden rounded-lg border border-themed bg-surface-2 shadow-md ${reverse ? "md:order-1" : ""}`}>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 70% 25%, var(--brand-light), transparent 60%)", opacity: 0.7 }}
          />
          <Icon className="relative z-10 h-[38%] w-[38%] text-brand" strokeWidth={1.3} />
        </Reveal>
      </div>
    </section>
  );
}
