import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Nucleus Labs to start a software, AI, or design project.",
  path: "/contact",
});

const details = [
  { icon: Mail, label: "Email", value: "hello@nucleuslabs.com" },
  { icon: Phone, label: "Phone", value: "+251 (0) 00 000 0000" },
  { icon: MapPin, label: "Office", value: "Addis Ababa, Ethiopia" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00–18:00 EAT" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's talk about what you're building."
        description="Tell us about your project and we'll reply within one business day with next steps."
        crumbLabel="Contact"
      />

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_0.7fr] md:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delayMs={80} className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {details.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.label} className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-sm bg-brand-light text-brand">
                    <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide text-ink-soft">{d.label}</div>
                      <div className="text-sm font-medium text-ink">{d.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-themed bg-surface-2">
              {/* Swap for a real embed once you have an office address, e.g.:
                  <iframe src="https://www.google.com/maps/embed?..." className="h-full w-full" loading="lazy" /> */}
              <div className="flex h-full w-full items-center justify-center text-sm text-ink-soft">
                Google Map placeholder
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
