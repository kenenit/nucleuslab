import {
  Sparkles, Palette, Wrench, Headphones, Rocket, DollarSign,
  Eye, Target, Code2, Globe2, Smartphone, Atom, LayoutGrid, PenTool,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { IconCard } from "@/components/cards/IconCard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Who Nucleus Labs is, our mission, our vision, and why businesses choose us.",
  path: "/about",
});

// "Why Choose Nucleus Labs" — from the real company brief
const whyChooseUs = [
  { icon: Sparkles, title: "Innovative & future-focused", description: "We build solutions with where technology is headed in mind, not just where it is today." },
  { icon: Palette, title: "Clean, modern design", description: "User-friendly interfaces that are as easy to use as they are to look at." },
  { icon: Wrench, title: "Custom-built systems", description: "Every business is different — we build around your goals, not a one-size-fits-all template." },
  { icon: Headphones, title: "Reliable technical support", description: "We're still there after launch, not just for the demo." },
  { icon: Rocket, title: "Fast development & deployment", description: "We move quickly without cutting corners on quality." },
  { icon: DollarSign, title: "Affordable, without compromise", description: "Quality technology solutions that don't require an enterprise budget." },
];

const whatWeDo = [
  { icon: Code2, label: "Custom Software Solutions" },
  { icon: Globe2, label: "Business Websites" },
  { icon: Smartphone, label: "Mobile Applications" },
  { icon: Atom, label: "AI-powered Solutions" },
  { icon: LayoutGrid, label: "Digital Business Tools" },
  { icon: PenTool, label: "UI/UX Design" },
  { icon: Globe2, label: "Company Profile Websites" },
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
  { icon: Rocket, title: "Become a leading African tech company", description: "Working toward being recognized as one of Africa's leading technology companies." },
  { icon: Sparkles, title: "Lead with innovation", description: "Stay known for innovation, quality, and impactful digital transformation." },
  { icon: Target, title: "Deepen our impact", description: "Help more businesses improve efficiency, customer experience, and long-term growth." },
  { icon: Wrench, title: "Expand what we build", description: "Grow our product line and service offerings as the team and expertise grow." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT NUCLEUS LABS"
        title="Who We Are"
        description="An Ethiopian technology company dedicated to building innovative digital products and custom software solutions that solve real-world business challenges."
        crumbLabel="About"
      />

      {/* Who We Are */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-14 md:grid-cols-[1fr_0.8fr] md:gap-20">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">WHO WE ARE</span>
            </Reveal>
            <Reveal delayMs={60}>
              <h2 className="my-5 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
                Technology built for real business challenges.
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="mb-4 text-[1.0625rem] leading-relaxed text-ink-soft">
                Nucleus Labs is an Ethiopian technology company dedicated to building innovative digital products
                and custom software solutions that solve real-world business challenges.
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
                We combine creativity, engineering, and emerging technologies to help businesses grow, automate
                processes, and strengthen their digital presence.
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
                To become one of Africa&apos;s leading technology companies, recognized for innovation, quality, and
                impactful digital transformation.
              </p>
            </Reveal>
            <Reveal delayMs={80} className="rounded-lg border border-themed bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-light text-brand">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">Mission</h3>
              <p className="text-sm text-ink-soft">
                To empower businesses through innovative, reliable, and accessible technology solutions that improve
                efficiency, customer experience, and long-term growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-12 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">WHAT WE DO</span>
          <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
            We design and develop:
          </h2>
          <p className="mt-3 text-ink-soft">
            Every solution is built around our clients&apos; unique goals, ensuring quality, scalability, and ease
            of use.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {whatWeDo.map((item, i) => (
            <Reveal
              key={item.label}
              delayMs={i * 40}
              className="flex items-center gap-3 rounded-md border border-themed bg-surface p-4"
            >
              <item.icon className="h-5 w-5 flex-none text-brand" />
              <span className="text-sm font-medium text-ink">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <Reveal className="mb-14 max-w-[640px]">
            <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">WHY CHOOSE NUCLEUS LABS</span>
            <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
              What sets us apart.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((value, i) => (
              <IconCard key={value.title} icon={value.icon} title={value.title} description={value.description} delayMs={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">OUR JOURNEY</span>
          <h2 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.75rem]">
            Still early — moving with intent.
          </h2>
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
      </section>

      {/* Company culture */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
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
        </div>
      </section>

      {/* Future goals */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">LOOKING AHEAD</span>
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
