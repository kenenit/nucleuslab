import type { ServiceContent } from "@/types";

export function ServiceSubnav({ services }: { services: ServiceContent[] }) {
  return (
    <nav
      aria-label="Jump to a service"
      className="sticky top-[76px] z-[60] border-b border-themed backdrop-blur-md"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)" }}
    >
      <div className="mx-auto flex max-w-[1280px] gap-2.5 overflow-x-auto px-5 py-3.5 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {services.map((service) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className="flex-none whitespace-nowrap rounded-full border border-themed px-4 py-2 text-[.8125rem] font-semibold text-ink-soft transition-all hover:border-brand hover:bg-brand-light hover:text-brand"
          >
            {service.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
