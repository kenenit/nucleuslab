import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
      <Reveal className="mb-14 max-w-[640px]">
        <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">TESTIMONIALS</span>
        <h2 className="mt-4 font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[2.85rem]">
          What early partners say.
        </h2>
        <p className="mt-3 text-lg text-ink-soft">
          Placeholder quotes — swap in real client testimonials via the admin dashboard as engagements complete.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {featured.map((t, i) => (
          <Reveal
            key={t.name}
            delayMs={i * 70}
            className="flex min-h-[260px] flex-col justify-between rounded-lg border border-themed bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div className="mb-4 flex gap-0.5 text-accent">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-accent" />
                ))}
              </div>
              <p className="leading-relaxed text-ink">{t.quote}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-full bg-brand-light font-display text-sm font-semibold text-brand">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-[13px] text-ink-soft">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
