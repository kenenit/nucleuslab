import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Insights on AI, technology, automation, software, business, and innovation from Nucleus Labs.",
  path: "/blog",
});

const categoryColors: Record<string, string> = {
  AI: "text-brand",
  Technology: "text-brand",
  Automation: "text-brand",
  Software: "text-brand",
  Business: "text-brand",
  Innovation: "text-brand",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="Notes on AI, software, and building well."
        description="Placeholder posts — this page is ready to connect to the Blog model in the admin dashboard."
        crumbLabel="Blog"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal
              key={post.slug}
              delayMs={i * 50}
              className="flex flex-col overflow-hidden rounded-lg border border-themed bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-light to-surface-2">
                <span className={`font-mono text-xs font-semibold uppercase tracking-wide ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mb-4 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                <div className="flex items-center gap-2 font-mono text-[.72rem] text-ink-soft">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
