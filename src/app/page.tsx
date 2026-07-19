import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ContactCta } from "@/components/sections/ContactCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nucleus Labs — Build from the core.",
  description:
    "Nucleus Labs designs and engineers the software, AI systems, and digital products companies build their operations on — from first prototype to production scale.",
  path: "/",
});

// Re-check the database at most once a minute rather than only at build time,
// so edits made in /admin (Services, in this page's case) show up without
// needing a full redeploy.
export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesGrid />
      <WhyChooseUs />
      <ImpactStats />
      <Testimonials />
      <ProjectsPreview />
      <ContactCta />
    </>
  );
}
