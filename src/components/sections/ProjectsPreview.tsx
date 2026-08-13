import Image from "next/image";
import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getPortfolioProjects } from "@/lib/content";

export async function ProjectsPreview() {
  const projects = await getPortfolioProjects();
  const featured = projects.slice(0, 3);

  if (featured.length === 0) return null;

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
        {featured.map((project, i) => (
          <Reveal
            key={project.slug}
            delayMs={i * 70}
            className="overflow-hidden rounded-lg border border-themed bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
          >
            <Link href="/portfolio" className="block">
              <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light to-surface-2">
                <span className="absolute left-3.5 top-3.5 z-10 rounded-full border border-themed bg-surface px-3 py-1 font-mono text-[.7rem]">
                  Product
                </span>
                {project.coverImage ? (
                  <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
                ) : (
                  <FolderKanban className="h-16 w-16 text-brand opacity-50" strokeWidth={1.2} />
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-1.5 text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mb-4 text-sm text-ink-soft">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-themed px-2.5 py-1 font-mono text-[.7rem] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
