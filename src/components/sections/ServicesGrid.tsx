import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
      <Reveal className="mb-16 max-w-[640px]">
        <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">WHAT WE DO</span>
        <h2 className="mt-4 font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[2.85rem]">
          Six disciplines. One team.
        </h2>
        <p className="mt-3 text-lg text-ink-soft">
          Every engagement draws on the same core team — no handoffs between agencies, no context lost between
          design and code.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard key={service.slug} service={service} delayMs={i * 60} />
        ))}
      </div>
    </section>
  );
}
