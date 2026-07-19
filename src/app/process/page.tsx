import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Process",
  description: "How Nucleus Labs works — from consultation through deployment and ongoing support.",
  path: "/process",
});

const steps = [
  { title: "Consultation", body: "We start by understanding the problem, not jumping to a solution — goals, constraints, and what success looks like." },
  { title: "Research", body: "Looking at the market, the users, and the technical landscape before committing to an approach." },
  { title: "Planning", body: "Scoping the work into a clear roadmap: what gets built, in what order, and why." },
  { title: "Design", body: "Wireframes through to a full visual system, tested against real use cases before build begins." },
  { title: "Development", body: "Iterative builds with regular check-ins — you see progress, not just a final reveal." },
  { title: "Testing", body: "Functional, accessibility, and performance testing before anything reaches production." },
  { title: "Deployment", body: "A controlled launch, with rollback plans and monitoring in place from day one." },
  { title: "Maintenance & Support", body: "The relationship doesn't end at launch — ongoing support keeps things running and improving." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW WE WORK"
        title="A process built for no surprises."
        description="Eight stages, one team, full visibility the whole way through."
        crumbLabel="Process"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="relative pl-14">
          <div className="absolute bottom-1.5 left-5 top-1.5 w-px bg-themed-line" />
          {steps.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 50} className="relative pb-12 last:pb-0">
              <div className="absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-themed bg-surface font-mono text-xs font-semibold text-brand shadow-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-1.5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="max-w-[560px] text-sm text-ink-soft">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
