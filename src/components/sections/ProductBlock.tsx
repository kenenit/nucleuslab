import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { products } from "@/data/products";

type Product = (typeof products)[number];

export function ProductBlock({ product, reverse = false, isLast = false }: { product: Product; reverse?: boolean; isLast?: boolean }) {
  return (
    <section id={product.slug} className="mx-auto max-w-[1280px] scroll-mt-[100px] px-5 md:px-10">
      <div className={`grid items-center gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24 ${isLast ? "" : "border-b border-themed"}`}>
        <div className={reverse ? "md:order-2" : ""}>
          <Reveal>
            <span className="mb-3 block font-mono text-[.8125rem] text-brand">{product.intro}</span>
          </Reveal>
          <Reveal delayMs={40}>
            <h2 className="mb-2 font-display text-[1.8rem] font-semibold text-ink md:text-[2.4rem]">{product.name}</h2>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="mb-5 text-lg text-ink-soft">{product.tagline}</p>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mb-5 max-w-[520px] text-[1.0625rem] text-ink-soft">{product.overview}</p>
          </Reveal>
          <Reveal delayMs={140} className="mb-6 flex flex-col gap-3">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <Check className="mt-0.5 h-[18px] w-[18px] flex-none text-brand" />
                {feature}
              </div>
            ))}
          </Reveal>
          <Reveal delayMs={180} className="flex flex-wrap items-center gap-4">
            <a
              href={product.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md"
            >
              {product.primaryCta.label}
            </a>
            {product.secondaryCta && (
              <a
                href={product.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-sm border border-themed px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                {product.secondaryCta.label}
              </a>
            )}
            {product.socialLinks?.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-ink-soft hover:text-brand">
                {link.label}
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal className={`grid aspect-[4/3.2] grid-cols-2 gap-3 ${reverse ? "md:order-1" : ""}`}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-md border border-themed bg-surface-2 text-[.7rem] text-ink-soft"
            >
              Screenshot {i + 1}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
