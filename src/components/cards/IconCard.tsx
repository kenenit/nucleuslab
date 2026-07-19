import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delayMs?: number;
}

export function IconCard({ icon: Icon, title, description, delayMs = 0 }: IconCardProps) {
  return (
    <Reveal
      delayMs={delayMs}
      className="rounded-lg border border-themed bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-light text-brand">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm text-ink-soft">{description}</p>
    </Reveal>
  );
}
