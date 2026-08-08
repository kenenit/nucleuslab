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
  title: "Nucleus Labs — Build Smarter. Grow Faster.",
  description:
    "We build innovative digital solutions that transform ideas into powerful technology. From startups to established businesses, Nucleus Labs delivers modern software, websites, and AI-powered solutions that drive growth and innovation.",
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
