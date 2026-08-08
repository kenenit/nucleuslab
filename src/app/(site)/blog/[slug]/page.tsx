import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Post not found", path: `/blog/${slug}`, noIndex: true });
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// Splits on blank lines into paragraphs, and renders **bold** segments —
// enough to make the seeded posts read well without pulling in a full
// markdown renderer for a handful of fields.
function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="mb-5 text-[1.0625rem] leading-relaxed text-ink-soft last:mb-0">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part.replace(/^- /, "")
          )
        )}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category.toUpperCase()}
        title={post.title}
        description={post.excerpt}
        crumbLabel="Blog"
      />
      <article className="mx-auto max-w-[760px] px-5 py-16 md:px-10 md:py-24">
        <Link href="/blog" className="mb-10 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blog
        </Link>
        <div>{renderContent(post.content)}</div>
        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-themed pt-8">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-themed px-3 py-1 font-mono text-xs text-ink-soft">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
      <ContactCta />
    </>
  );
}
