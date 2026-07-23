import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { getBlogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Insights on AI, technology, automation, software, business, and innovation from Nucleus Labs.",
  path: "/blog",
});

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="Notes on AI, software, and building well."
        description="Thoughts from the team building Nucleus Labs' products and client work."
        crumbLabel="Blog"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        {posts.length === 0 && (
          <p className="rounded-lg bg-surface-2 p-8 text-center text-sm text-ink-soft">
            No posts published yet — check back soon.
          </p>
        )}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal
              key={post.slug}
              delayMs={i * 50}
              className="flex flex-col overflow-hidden rounded-lg border border-themed bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-light to-surface-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wide text-brand">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mb-4 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                {post.publishedAt && (
                  <div className="font-mono text-[.72rem] text-ink-soft">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
