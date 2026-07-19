import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";

const stats = [
  { target: 3, suffix: "", label: "Products shipped" },
  { target: 6, suffix: "", label: "Service lines" },
  { target: 10, suffix: "", label: "Industries served" },
  { target: 100, suffix: "%", label: "In-house team" },
];

export function ImpactStats() {
  return (
    <section className="bg-[#0A1128] py-16 md:py-28 dark:bg-surface-2">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[.14em] text-accent">OUR IMPACT</span>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-4 max-w-[520px] font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[2.85rem]">
            Early-stage, moving fast — the numbers so far.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 70} className="border-l border-white/15 pl-4">
              <div className="font-display text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
                <StatCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 text-sm text-white/65">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
