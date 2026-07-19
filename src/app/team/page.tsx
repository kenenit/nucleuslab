import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Team",
  description: "The people building Nucleus Labs' products and client work.",
  path: "/team",
});

const leadership = [
  { initials: "F.T.", name: "Founder name", role: "Founder & CEO" },
  { initials: "C.T.", name: "Co-founder name", role: "Head of Engineering" },
];

const team = [
  { initials: "D.S.", name: "Team member", role: "Product Designer" },
  { initials: "B.E.", name: "Team member", role: "Backend Engineer" },
  { initials: "F.E.", name: "Team member", role: "Frontend Engineer" },
  { initials: "A.E.", name: "Team member", role: "AI Engineer" },
  { initials: "P.M.", name: "Team member", role: "Project Manager" },
  { initials: "Q.A.", name: "Team member", role: "QA Engineer" },
];

function PersonCard({ initials, name, role, delayMs, large = false }: { initials: string; name: string; role: string; delayMs: number; large?: boolean }) {
  return (
    <Reveal delayMs={delayMs} className="rounded-lg border border-themed bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`mx-auto mb-4 flex items-center justify-center rounded-full bg-brand-light font-display font-semibold text-brand ${
          large ? "h-24 w-24 text-2xl" : "h-20 w-20 text-xl"
        }`}
      >
        {initials}
      </div>
      <h3 className="text-base font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{role}</p>
    </Reveal>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="WHO WE ARE"
        title="The people behind the work."
        description="A small, senior team across design, engineering, and AI — placeholder names and photos below, ready to swap for the real team."
        crumbLabel="Team"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <span className="mb-8 block font-mono text-xs uppercase tracking-[.14em] text-brand">Leadership</span>
        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-[520px]">
          {leadership.map((person, i) => (
            <PersonCard key={person.name} {...person} delayMs={i * 60} large />
          ))}
        </div>

        <span className="mb-8 block font-mono text-xs uppercase tracking-[.14em] text-brand">Team</span>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((person, i) => (
            <PersonCard key={person.name} {...person} delayMs={i * 50} />
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2.5 font-mono text-[.8125rem] text-ink-soft">
          Real names, roles, and headshots go here — this section is ready for real photography.
        </p>
      </section>
      <ContactCta title="Want to join the team?" body="Check open roles on the careers page — we're hiring deliberately, not constantly." />
    </>
  );
}
