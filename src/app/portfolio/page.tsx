import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  description: "Case studies covering Nucleus Labs' completed projects, results achieved, and technologies used.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Selected work, in detail."
        description="A closer look at what we've shipped — the problem, the approach, and what changed as a result."
        crumbLabel="Portfolio"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <PortfolioGrid />
      </section>
      <ContactCta />
    </>
  );
}
