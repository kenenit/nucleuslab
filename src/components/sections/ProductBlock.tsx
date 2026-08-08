import Image from "next/image";
import { Check, Send, Instagram, Music2, Link as LinkIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { ProductDisplay } from "@/lib/content";

const socialLabels: Record<string, { label: string; icon: typeof LinkIcon }> = {
  telegramChannel: { label: "Telegram Channel", icon: Send },
  telegramSupport: { label: "Telegram Support", icon: Send },
  instagram: { label: "Instagram", icon: Instagram },
  tiktok: { label: "TikTok", icon: Music2 },
};

// Biku has its own sub-brand identity, distinct from the main Nucleus Labs
// mark — shown next to its name here rather than a generic label.
const productLogos: Record<string, string> = {
  "biku-home-solution": "/products/biku/logo.png",
};

export function ProductBlock({ product, reverse = false, isLast = false }: { product: ProductDisplay; reverse?: boolean; isLast?: boolean }) {
  const ctas: { label: string; href: string }[] = [];
  if (product.storeUrlAndroid) ctas.push({ label: "Get it on Google Play", href: product.storeUrlAndroid });
  if (product.storeUrlIos) ctas.push({ label: "Get it on the App Store", href: product.storeUrlIos });
  if (product.liveDemoUrl) ctas.push({ label: "See live demo", href: product.liveDemoUrl });
  if (product.learnMoreUrl) ctas.push({ label: "Learn more", href: product.learnMoreUrl });
  const primaryCta = ctas[0] ?? { label: "Request a quote", href: "/contact" };
  const restCtas = ctas.slice(1);

  const logoSrc = productLogos[product.slug];
  const screenshots = product.screenshots ?? [];

  return (
    <section id={product.slug} className="mx-auto max-w-[1280px] scroll-mt-[100px] px-5 md:px-10">
      <div className={`grid items-start gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24 ${isLast ? "" : "border-b border-themed"}`}>
        <div className={reverse ? "md:order-2" : ""}>
          <Reveal>
            <span className="mb-3 block font-mono text-[.8125rem] text-brand">A Nucleus Labs product</span>
          </Reveal>
          <Reveal delayMs={40} className="mb-2 flex items-center gap-3">
            {logoSrc && (
              <Image src={logoSrc} alt={`${product.name} logo`} width={40} height={40} className="rounded-md" />
            )}
            <h2 className="font-display text-[1.8rem] font-semibold text-ink md:text-[2.4rem]">{product.name}</h2>
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
              href={primaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md"
            >
              {primaryCta.label}
            </a>
            {restCtas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-sm border border-themed px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                {cta.label}
              </a>
            ))}
          </Reveal>
          {product.socialLinks && Object.keys(product.socialLinks).length > 0 && (
            <Reveal delayMs={200} className="mt-5 flex flex-wrap items-center gap-4">
              {Object.entries(product.socialLinks).map(([key, url]) => {
                const meta = socialLabels[key] ?? { label: key, icon: LinkIcon };
                const Icon = meta.icon;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                    {meta.label}
                  </a>
                );
              })}
            </Reveal>
          )}
        </div>

        <Reveal className={`grid grid-cols-2 gap-4 self-start ${reverse ? "md:order-1" : ""}`}>
          {screenshots.length > 0
            ? screenshots.slice(0, 4).map((src, i) => (
                <div
                  key={src}
                  className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-lg border border-themed bg-surface-2 shadow-sm sm:h-[260px]"
                >
                  <Image
                    src={src}
                    alt={`${product.name} screenshot ${i + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))
            : [0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex h-[220px] items-center justify-center rounded-lg border border-themed bg-surface-2 text-[.7rem] text-ink-soft sm:h-[260px]"
                >
                  Screenshot {i + 1}
                </div>
              ))}
        </Reveal>
      </div>
    </section>
  );
}
