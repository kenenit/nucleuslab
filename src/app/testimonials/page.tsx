import { Star } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Testimonials",
  description: "What clients say about working with Nucleus Labs.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const average = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <>
      <PageHero
        eyebrow="CLIENT REVIEWS"
        title="What clients say."
        description={`An average rating of ${average} out of 5 across our engagements so far — placeholder reviews, ready to swap for the real thing.`}
        crumbLabel="Testimonials"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delayMs={i * 60}
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
      <ContactCta />
    </>
  );
}
