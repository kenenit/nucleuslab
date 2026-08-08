import { Code2, Atom, LayoutTemplate, Smartphone, PenTool, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceSubnav } from "@/components/sections/ServiceSubnav";
import { ServiceBlock } from "@/components/sections/ServiceBlock";
import { ContactCta } from "@/components/sections/ContactCta";
import { getServices } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description: "Software development, AI solutions, website and mobile app development, UI/UX design, and custom solutions.",
  path: "/services",
});

export const revalidate = 60;

const iconMap = {
  "code-2": Code2,
  atom: Atom,
  "layout-template": LayoutTemplate,
  smartphone: Smartphone,
  "pen-tool": PenTool,
  sparkles: Sparkles,
} as const;

const ctaLabels: Record<string, string> = {
  "software-development": "Discuss a software project",
  "ai-solutions": "Explore an AI use case",
  "website-development": "Start a website project",
  "mobile-app-development": "Plan a mobile app",
  "ui-ux-design": "Start a design engagement",
  "custom-solutions": "Tell us the problem",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="WHAT WE DO"
        title="Six disciplines. Full ownership."
        description="Every engagement draws on the same in-house team across design, engineering, and AI — so nothing gets lost in a handoff between agencies."
        crumbLabel="Services"
      />
      <ServiceSubnav services={services} />
      {services.map((service, i) => (
        <ServiceBlock
          key={service.slug}
          service={service}
          index={i + 1}
          total={services.length}
          icon={iconMap[service.icon as keyof typeof iconMap] ?? Sparkles}
          reverse={i % 2 === 1}
          ctaLabel={ctaLabels[service.slug] ?? "Get in touch"}
          isLast={i === services.length - 1}
        />
      ))}
      <ContactCta />
    </>
  );
}
