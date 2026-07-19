import {
  UtensilsCrossed, Building2, HeartPulse, GraduationCap, HardHat,
  Factory, ShoppingBag, HandHeart, Rocket, Briefcase,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { IconCard } from "@/components/cards/IconCard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description: "Nucleus Labs builds software for restaurants, hotels, healthcare, education, and more.",
  path: "/industries",
});

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants", description: "Ordering, menus, and operations software built for a fast-moving floor." },
  { icon: Building2, title: "Hotels", description: "Booking, guest experience, and back-office systems for hospitality." },
  { icon: HeartPulse, title: "Healthcare", description: "Patient-facing and internal tools built with data sensitivity in mind." },
  { icon: GraduationCap, title: "Education", description: "Platforms for schools and training programs to manage and teach." },
  { icon: HardHat, title: "Construction", description: "Project tracking and field-to-office coordination tools." },
  { icon: Factory, title: "Manufacturing", description: "Operational software for production and supply chain visibility." },
  { icon: ShoppingBag, title: "Retail", description: "E-commerce, inventory, and in-store systems that scale with demand." },
  { icon: HandHeart, title: "NGOs", description: "Mission-driven organizations doing more with lean technical budgets." },
  { icon: Rocket, title: "Startups", description: "MVPs and early product builds engineered to survive rapid iteration." },
  { icon: Briefcase, title: "Corporate Businesses", description: "Internal tools and customer-facing platforms for established teams." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="WHO WE WORK WITH"
        title="Industries we serve."
        description="Different sectors, the same engineering standard — software built around how each industry actually operates."
        crumbLabel="Industries"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <IconCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              delayMs={i * 50}
            />
          ))}
        </div>
      </section>
      <ContactCta
        title="Don't see your industry? Let's talk anyway."
        body="Most of what we build transfers across sectors — the fundamentals of good software don't change."
      />
    </>
  );
}
