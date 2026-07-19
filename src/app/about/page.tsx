import { Compass, Target, Wrench, Eye, Users, Search, Shield, Zap } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { IconCard } from "@/components/cards/IconCard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "The story, vision, mission, and values behind Nucleus Labs.",
  path: "/about",
});

const values = [
  { icon: Wrench, title: "Craftsmanship", description: "We sweat details most teams skip — spacing, error states, edge cases — because those details are what \"production-ready\" actually means." },
  { icon: Eye, title: "Transparency", description: "You always know what stage your project is in, what's blocking it, and what happens next — no status updates that dodge the real answer." },
  { icon: Shield, title: "Ownership", description: "Every engineer on a project can speak to the whole system, not just their corner of it — because they helped design the whole thing." },
  { icon: Search, title: "Curiosity", description: "We stay close to how AI and tooling are changing month to month, and bring what's actually useful into client work." },
  { icon: Users, title: "Reliability", description: "Systems we ship are built to still be running — and still be maintainable — years after launch, not just at the demo." },
  { icon: Zap, title: "Impact", description: "We measure a project's success by what changes for the people using it, not lines of code shipped or hours billed." },
];

const timeline = [
  { year: "Year 1", title: "Nucleus Labs founded", body: "Started as a small team of engineers and designers taking on early client projects." },
  { year: "Year 1", title: "First client project delivered", body: "Shipped our first production website and back-office system for an early client." },
  { year: "Year 2", title: "AI Solutions practice launched", body: "Formalized applied-AI as a core service line rather than a one-off add-on." },
  { year: "Year 2", title: "Biku Home Solution & Digital Menu shipped", body: "Launched our first two in-house products, built and maintained by the same team." },
  { year: "Today", title: "Company Profile Website product line", body: "Rounded out our product suite and expanded into new industries." },
];

const cultureItems = [
  { title: "Small, senior teams", body: "Every project is staffed by people who can own decisions, not just execute tickets." },
  { title: "Direct communication", body: "Clients talk to the people building their product — not through layers of account management." },
  { title: "Documented by default", body: "Decisions, architecture, and processes are written down, not kept in one person's head." },
  { title: "Room to learn", body: "Time is set aside for the team to explore new tools and techniques, not just deliver." },
];

const goals = [
  { icon: Zap, title: "Grow the AI practice", description: "Deepen applied-AI work across every service line, not just as a standalone offering." },
  { icon: Compass, title: "Expand the product line", description: "Grow beyond Biku, Digital Menu, and Company Profile Website into new verticals." },
  { icon: Target, title: "Serve more industries", description: "Bring the same engineering rigor to sectors we haven't worked in yet." },
  { icon: Users, title: "Grow the team", description: "Hire deliberately, keeping teams small and senior even as we take on more work." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT NUCLEUS LABS"
        title="We build the systems companies run on."
        description="Nucleus Labs started as a small team convinced that software, AI, and design shouldn't be treated as separate disciplines. Today we design and build the products, platforms, and internal tools our clients depend on daily."
        crumbLabel="About"
      />

      {/* Company story */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-14 md:grid-cols-[1fr_0.8fr] md:gap-20">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">OUR STORY</span>
            </Reveal>
            <Reveal delayMs={60}>
              <h2 className="my-5 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
                Started by builders, not just planners.
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="mb-4 text-[1.0625rem] leading-relaxed text-ink-soft">
                Nucleus Labs was founded on a simple frustration: too many software projects get handed between
                agencies, designers, and developers, losing quality — and momentum — at every handoff.
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mb-4 text-[1.0625rem] leading-relaxed text-ink-soft">
                We built Nucleus Labs as a single team that owns a project end to end: from the first conversation
                about the problem, through design, engineering, and the years of maintenance that follow launch.
              </p>
            </Reveal>
            <Reveal delayMs={180}>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
                That structure is still how we work today, whether we&apos;re shipping a client&apos;s product or one
                of our own.
              </p>
            </Reveal>
          </div>
          <Reveal className="aspect-[4/5] overflow-hidden rounded-lg border border-themed bg-surface-2 shadow-md">
            <svg viewBox="0 0 400 500" width="100%" height="100%" aria-hidden="true">
              <rect width="400" height="500" fill="var(--surface-2)" />
              <ellipse cx="200" cy="240" rx="130" ry="55" transform="rotate(18 200 240)" fill="none" stroke="var(--border)" strokeWidth="1.5" />
              <ellipse cx="200" cy="240" rx="130" ry="55" transform="rotate(-18 200 240)" fill="none" stroke="var(--border)" strokeWidth="1.5" />
              <circle cx="200" cy="240" r="28" fill="#1552F0" />
              <circle cx="310" cy="200" r="5" fill="#2FD5C8" />
              <circle cx="95" cy="290" r="5" fill="#1552F0" />
            </svg>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <Reveal className="mb-12 max-w-[640px]">
            <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">VISION &amp; MISSION</span>
            <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
              Where we&apos;re headed, and why it matters.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal className="rounded-lg border border-themed bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-light text-brand">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">Vision</h3>
              <p className="text-sm text-ink-soft">
                A future where every ambitious team — not just those who can afford a big-tech engineering org — has
                access to software built to the same standard.
              </p>
            </Reveal>
            <Reveal delayMs={80} className="rounded-lg border border-themed bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-light text-brand">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">Mission</h3>
              <p className="text-sm text-ink-soft">
                To design and engineer software, AI, and digital products with the same rigor as an in-house
                engineering team — for clients who don&apos;t have one yet.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">CORE VALUES</span>
          <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
            What we hold ourselves to.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <IconCard key={value.title} icon={value.icon} title={value.title} description={value.description} delayMs={i * 60} />
          ))}
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <Reveal className="mb-14 max-w-[640px]">
            <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">OUR JOURNEY</span>
            <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
              Still early — moving with intent.
            </h2>
            <p className="mt-3 text-ink-soft">Placeholder milestones — replace with the real founding history and dates.</p>
          </Reveal>
          <div className="relative pl-14">
            <div className="absolute bottom-1.5 left-5 top-1.5 w-px bg-themed" />
            {timeline.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 60} className="relative pb-14 last:pb-0">
                <div className="absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-themed bg-surface font-mono text-xs font-semibold text-brand shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="mb-1.5 block font-mono text-[.78rem] text-brand">{item.year}</span>
                <h3 className="mb-1.5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="max-w-[560px] text-sm text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why we started */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="rounded-lg bg-surface-2 p-10 md:p-16">
          <span className="mb-5 inline-flex font-mono text-xs uppercase tracking-[.14em] text-brand">
            WHY WE STARTED
          </span>
          <blockquote className="max-w-[800px] font-display text-xl font-medium leading-snug tracking-[-0.01em] text-ink md:text-2xl">
            &ldquo;We kept seeing good businesses held back by software that was either too expensive to get right,
            or too rushed to last. Nucleus Labs exists to close that gap — real engineering quality, without the
            overhead of building an in-house team.&rdquo;
          </blockquote>
          <cite className="mt-5 block font-mono text-[.8125rem] not-italic text-ink-soft">— Founding team, Nucleus Labs</cite>
        </Reveal>
      </section>

      {/* Company culture */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">COMPANY CULTURE</span>
          <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
            How we work, day to day.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cultureItems.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 60} className="rounded-md border border-themed bg-surface p-5">
              <span className="mb-3 block font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mb-1.5 text-base font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-ink-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 flex items-center gap-2.5 font-mono text-[.8125rem] text-ink-soft">
          Team photos coming soon — this section is ready for real photography.
        </Reveal>
      </section>

      {/* Future goals */}
      <section className="mx-auto max-w-[1280px] rounded-lg bg-surface-2 px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">FUTURE GOALS</span>
          <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
            What we&apos;re building toward.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, i) => (
            <IconCard key={goal.title} icon={goal.icon} title={goal.title} description={goal.description} delayMs={i * 60} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
