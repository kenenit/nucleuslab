import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { getTeamMembers } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Team",
  description: "The people building Nucleus Labs' products and client work.",
  path: "/team",
});

export const revalidate = 60;

// Shown only if nothing has been added in the admin dashboard yet.
const placeholderLeadership = [
  { id: "ph-1", name: "Founder name", role: "Founder & CEO", isLeadership: true, photoUrl: null },
  { id: "ph-2", name: "Co-founder name", role: "Head of Engineering", isLeadership: true, photoUrl: null },
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function PersonCard({
  name,
  role,
  delayMs,
  large = false,
}: {
  name: string;
  role: string;
  delayMs: number;
  large?: boolean;
}) {
  return (
    <Reveal
      delayMs={delayMs}
      className="rounded-lg border border-themed bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className={`mx-auto mb-4 flex items-center justify-center rounded-full bg-brand-light font-display font-semibold text-brand ${
          large ? "h-24 w-24 text-2xl" : "h-20 w-20 text-xl"
        }`}
      >
        {initialsOf(name)}
      </div>
      <h3 className="text-base font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{role}</p>
    </Reveal>
  );
}

export default async function TeamPage() {
  const members = await getTeamMembers();
  const usingPlaceholders = members.length === 0;

  const leadership = usingPlaceholders ? placeholderLeadership : members.filter((m) => m.isLeadership);
  const team = usingPlaceholders ? [] : members.filter((m) => !m.isLeadership);

  return (
    <>
      <PageHero
        eyebrow="WHO WE ARE"
        title="The people behind the work."
        description="A small, senior team across design, engineering, and AI."
        crumbLabel="Team"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        {leadership.length > 0 && (
          <>
            <span className="mb-8 block font-mono text-xs uppercase tracking-[.14em] text-brand">Leadership</span>
            <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-[520px]">
              {leadership.map((person, i) => (
                <PersonCard key={person.id} name={person.name} role={person.role} delayMs={i * 60} large />
              ))}
            </div>
          </>
        )}

        {team.length > 0 && (
          <>
            <span className="mb-8 block font-mono text-xs uppercase tracking-[.14em] text-brand">Team</span>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {team.map((person, i) => (
                <PersonCard key={person.id} name={person.name} role={person.role} delayMs={i * 50} />
              ))}
            </div>
          </>
        )}

        <p className="mt-8 flex items-center gap-2.5 font-mono text-[.8125rem] text-ink-soft">
          {usingPlaceholders
            ? "Placeholder names shown — add real team members from the admin dashboard."
            : "Real headshots can be added by setting a Photo URL for each team member in the admin dashboard."}
        </p>
      </section>
      <ContactCta
        title="Want to join the team?"
        body="Check open roles on the careers page — we're hiring deliberately, not constantly."
      />
    </>
  );
}
