import { MapPin, Briefcase } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ApplyForm } from "@/components/sections/ApplyForm";
import { Reveal } from "@/components/ui/Reveal";
import { jobs } from "@/data/jobs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Open roles and internships at Nucleus Labs.",
  path: "/careers",
});

const cultureItems = [
  "Small, senior teams — you'll own real decisions, not just tickets",
  "Direct communication with clients, not layers of account management",
  "Documentation is part of the job, not an afterthought",
  "Time set aside to learn new tools and techniques",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="JOIN US"
        title="Open positions & internships."
        description="We hire deliberately, keeping teams small and senior — here's what's open right now."
        crumbLabel="Careers"
      />

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <Reveal
              key={job.slug}
              delayMs={i * 60}
              className="flex flex-col gap-4 rounded-lg border border-themed bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-ink">{job.title}</h3>
                  <span className="rounded-full bg-brand-light px-2.5 py-0.5 font-mono text-[.7rem] text-brand">
                    {job.type}
                  </span>
                </div>
                <p className="mb-2 text-sm text-ink-soft">{job.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-[.8125rem] text-ink-soft">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                </div>
              </div>
              <a
                href="#apply"
                className="inline-flex flex-none items-center justify-center rounded-sm border border-themed px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-brand hover:text-brand"
              >
                Apply
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <Reveal className="mb-10 max-w-[640px]">
            <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">COMPANY CULTURE</span>
            <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.5rem]">
              What it's like to work here.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cultureItems.map((item, i) => (
              <Reveal key={item} delayMs={i * 50} className="rounded-md border border-themed bg-surface p-5 text-sm text-ink-soft">
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-10 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">APPLY</span>
          <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.5rem]">
            Send us your application.
          </h2>
        </Reveal>
        <Reveal delayMs={60} className="max-w-2xl">
          <ApplyForm jobs={jobs} />
        </Reveal>
      </section>
    </>
  );
}
