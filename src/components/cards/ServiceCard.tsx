import Link from "next/link";
import { ArrowRight, Code2, Atom, LayoutTemplate, Smartphone, PenTool, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { ServiceContent } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  "code-2": Code2,
  atom: Atom,
  "layout-template": LayoutTemplate,
  smartphone: Smartphone,
  "pen-tool": PenTool,
  sparkles: Sparkles,
};

export function ServiceCard({ service, delayMs = 0 }: { service: ServiceContent; delayMs?: number }) {
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <Reveal
      delayMs={delayMs}
      className="group rounded-lg border border-themed bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lg"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-light text-brand">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mb-4 text-sm text-ink-soft">{service.summary}</p>
      <Link
        href={`/services#${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
      >
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Reveal>
  );
}
