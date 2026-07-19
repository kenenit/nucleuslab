import { Home, UtensilsCrossed, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Biku Home Solution",
    description: "A smart-home control app that turns any household into a connected, manageable space.",
    tags: ["Mobile", "IoT", "React Native"],
    icon: Home,
  },
  {
    title: "Digital Menu",
    description: "QR-code ordering that lets restaurants update menus instantly and serve guests faster.",
    tags: ["Web", "Real-time", "Next.js"],
    icon: UtensilsCrossed,
  },
  {
    title: "Company Profile Website",
    description: "A template-driven profile site that gets small businesses a credible web presence fast.",
    tags: ["Web", "CMS", "SEO"],
    icon: Globe,
  },
];

export function ProjectsPreview() {
  return (
    <section className="mx-auto max-w-[1280px] rounded-lg bg-surface-2 px-5 py-16 md:px-10 md:py-20">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">OUR WORK</span>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[2.85rem]">
            Latest projects.
          </h2>
        </Reveal>
        <Button href="/portfolio" variant="ghost">
          View all work
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <Reveal
              key={project.title}
              delayMs={i * 70}
              className="overflow-hidden rounded-lg border border-themed bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="relative flex aspect-[16/11] items-center justify-center bg-gradient-to-br from-brand-light to-surface-2">
                <span className="absolute left-3.5 top-3.5 rounded-full border border-themed bg-surface px-3 py-1 font-mono text-[.7rem]">
                  Product
                </span>
                <Icon className="h-16 w-16 text-brand opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="mb-1.5 text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mb-4 text-sm text-ink-soft">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-themed px-2.5 py-1 font-mono text-[.7rem] text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
