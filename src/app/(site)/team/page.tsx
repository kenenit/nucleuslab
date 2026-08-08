import Image from "next/image";
import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
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

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface PersonCardProps {
  name: string;
  role: string;
  photoUrl?: string | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  portfolioUrl?: string | null;
  email?: string | null;
  phone?: string | null;
  delayMs: number;
  large?: boolean;
}

function PersonCard({ name, role, photoUrl, linkedinUrl, githubUrl, portfolioUrl, email, phone, delayMs, large = false }: PersonCardProps) {
  const links = [
    linkedinUrl && { href: linkedinUrl, label: "LinkedIn", Icon: Linkedin },
    githubUrl && { href: githubUrl, label: "GitHub", Icon: Github },
    portfolioUrl && { href: portfolioUrl, label: "Portfolio", Icon: Globe },
    email && { href: `mailto:${email}`, label: "Email", Icon: Mail },
    phone && { href: `tel:${phone}`, label: "Phone", Icon: Phone },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Linkedin }[];

  return (
    <Reveal
      delayMs={delayMs}
      className="flex flex-col items-center rounded-lg border border-themed bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {photoUrl ? (
        <Image
          src={photoUrl}
          alt={name}
          width={large ? 96 : 80}
          height={large ? 96 : 80}
          className={`mb-4 rounded-full object-cover ${large ? "h-24 w-24" : "h-20 w-20"}`}
        />
      ) : (
        <div
          className={`mb-4 flex items-center justify-center rounded-full bg-brand-light font-display font-semibold text-brand ${
            large ? "h-24 w-24 text-2xl" : "h-20 w-20 text-xl"
          }`}
        >
          {initialsOf(name)}
        </div>
      )}
      <h3 className="text-base font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{role}</p>
      {links.length > 0 && (
        <div className="mt-3 flex items-center gap-2">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-themed text-ink-soft transition-colors hover:border-brand hover:text-brand"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      )}
    </Reveal>
  );
}

export default async function TeamPage() {
  const members = await getTeamMembers();
  const leadership = members.filter((m) => m.isLeadership);
  const team = members.filter((m) => !m.isLeadership);

  return (
    <>
      <PageHero
        eyebrow="WHO WE ARE"
        title="The people behind the work."
        description="A small, senior team across design, engineering, and AI."
        crumbLabel="Team"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        {members.length === 0 ? (
          <div className="rounded-lg border border-dashed border-themed bg-surface-2 p-10 text-center">
            <p className="text-sm text-ink-soft">
              Team members haven&apos;t been added yet — add leadership and team profiles from the admin dashboard
              and they&apos;ll appear here.
            </p>
          </div>
        ) : (
          <>
            {leadership.length > 0 && (
              <>
                <span className="mb-8 block font-mono text-xs uppercase tracking-[.14em] text-brand">Leadership</span>
                <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-[520px]">
                  {leadership.map((person, i) => (
                    <PersonCard
                      key={person.id}
                      name={person.name}
                      role={person.role}
                      photoUrl={person.photoUrl}
                      linkedinUrl={person.linkedinUrl}
                      githubUrl={person.githubUrl}
                      portfolioUrl={person.portfolioUrl}
                      email={person.email}
                      phone={person.phone}
                      delayMs={i * 60}
                      large
                    />
                  ))}
                </div>
              </>
            )}

            {team.length > 0 && (
              <>
                <span className="mb-8 block font-mono text-xs uppercase tracking-[.14em] text-brand">Team</span>
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {team.map((person, i) => (
                    <PersonCard
                      key={person.id}
                      name={person.name}
                      role={person.role}
                      photoUrl={person.photoUrl}
                      linkedinUrl={person.linkedinUrl}
                      githubUrl={person.githubUrl}
                      portfolioUrl={person.portfolioUrl}
                      email={person.email}
                      phone={person.phone}
                      delayMs={i * 50}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>
      <ContactCta
        title="Want to join the team?"
        body="Check open roles on the careers page — we're hiring deliberately, not constantly."
      />
    </>
  );
}
