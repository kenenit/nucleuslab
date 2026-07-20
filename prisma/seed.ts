import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // --- Admin user ---
  const passwordHash = await bcrypt.hash("changeme123", 10);
  await prisma.user.upsert({
    where: { email: "admin@nucleuslabs.com" },
    update: {},
    create: {
      email: "admin@nucleuslabs.com",
      name: "Nucleus Admin",
      passwordHash,
      role: "ADMIN",
    },
  });

  // --- Services ---
  const services = [
    {
      slug: "software-development",
      title: "Software Development",
      summary: "Custom, production-grade systems engineered around your exact workflows.",
      description:
        "Custom, production-grade systems engineered around your exact workflows — from internal tools to full customer-facing platforms.",
      benefits: [
        "Built around your actual workflows, not a generic template",
        "Scalable architecture from day one",
        "Clean, documented, maintainable code",
        "Long-term maintenance and support included",
      ],
      process: ["Discovery", "Architecture", "Build", "Handover"],
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "Docker", "REST / GraphQL"],
      icon: "code-2",
      order: 1,
    },
    {
      slug: "ai-solutions",
      title: "AI Solutions",
      summary: "Applied AI built into your product, not bolted on after.",
      description:
        "Applied AI — automation, intelligent features, and data-driven systems built into your product from the architecture stage, not bolted on after.",
      benefits: [
        "Automate manual, repetitive work",
        "Surface insights already buried in your data",
        "Add intelligent features customers actually notice",
        "Built with human oversight and clear failure modes",
      ],
      process: ["Use-case fit", "Data review", "Prototype", "Integrate"],
      technologies: ["Python", "LLM APIs", "Vector databases", "PyTorch", "RAG pipelines"],
      icon: "atom",
      order: 2,
    },
    {
      slug: "website-development",
      title: "Website Development",
      summary: "Fast, accessible, SEO-ready websites engineered to convert.",
      description:
        "Fast, accessible, SEO-ready websites built on modern frameworks — engineered to convert, not just look good in a preview.",
      benefits: [
        "Lighthouse-grade performance out of the box",
        "SEO built in from the sitemap up",
        "Fully responsive across every breakpoint",
        "Easy for your team to update after launch",
      ],
      process: ["Sitemap", "Design system", "Build", "Launch"],
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Headless CMS"],
      icon: "layout-template",
      order: 3,
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      summary: "Native-feel iOS and Android apps, wireframe to store release.",
      description:
        "Native-feel iOS and Android apps, from the first wireframe through App Store and Play Store release.",
      benefits: [
        "One codebase, both platforms",
        "Native performance and feel",
        "Push notifications and offline support built in",
        "Store submission handled for you",
      ],
      process: ["Scoping", "Prototype", "Build & test", "Release"],
      technologies: ["React Native", "Swift / Kotlin", "Firebase", "App Store Connect", "Play Console"],
      icon: "smartphone",
      order: 4,
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      summary: "Interfaces designed around how people actually work.",
      description:
        "Interfaces designed around how people actually work — researched, tested, and refined before a single line of code ships.",
      benefits: [
        "Grounded in real user research",
        "Reusable design systems, not one-off screens",
        "Accessible by default — WCAG 2.2 AA",
        "Tested with real users before we build",
      ],
      process: ["Research", "Wireframes", "Visual system", "Usability testing"],
      technologies: ["Figma", "Design tokens", "Component libraries", "Accessibility audits"],
      icon: "pen-tool",
      order: 5,
    },
    {
      slug: "custom-solutions",
      title: "Custom Solutions",
      summary: "When the problem doesn't fit an off-the-shelf category.",
      description:
        "When the problem doesn't fit an off-the-shelf category, we scope, architect, and build the exact thing you need.",
      benefits: [
        "No forcing your problem into a template",
        "Right-sized architecture for the actual need",
        "Integrates with the systems you already run",
        "Built to be handed off, or maintained by us long-term",
      ],
      process: ["Define", "Feasibility", "Build", "Integrate"],
      technologies: ["Matched to the project"],
      icon: "sparkles",
      order: 6,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  // --- Products ---
  const products = [
    {
      slug: "biku-home-solution",
      name: "Biku Home Solution",
      tagline: "Smart home control, made simple.",
      overview:
        "A smart-home control app that turns any household into a connected, manageable space.",
      features: ["Device control from one app", "Automations & schedules", "Family sharing", "Energy usage insights"],
      screenshots: [],
      storeUrlAndroid: "https://play.google.com/store",
      order: 1,
    },
    {
      slug: "digital-menu",
      name: "Digital Menu",
      tagline: "QR ordering for modern restaurants.",
      overview: "QR-code ordering that lets restaurants update menus instantly and serve guests faster.",
      features: ["Instant menu updates", "QR code ordering", "Real-time kitchen sync", "Multi-location support"],
      screenshots: [],
      liveDemoUrl: "",
      order: 2,
    },
    {
      slug: "company-profile-website",
      name: "Company Profile Website",
      tagline: "A credible web presence, fast.",
      overview: "A template-driven profile site that gets small businesses a credible web presence fast.",
      features: ["Ready-made professional templates", "Portfolio / examples section", "Optional pricing page", "Launch in days, not months"],
      screenshots: [],
      order: 3,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  // --- Portfolio projects ---
  const projects = [
    {
      slug: "biku-home-solution",
      title: "Biku Home Solution",
      category: "Mobile",
      summary:
        "Households managing smart devices across three or four separate apps, with no single view of what was on, scheduled, or costing money. We built one app to control, automate, and monitor an entire home from a single, simple interface.",
      results: "4 apps consolidated into 1",
      technologies: ["React Native", "IoT", "Firebase"],
      featured: true,
      order: 1,
    },
    {
      slug: "digital-menu",
      title: "Digital Menu",
      category: "Web",
      summary:
        "Restaurants reprinting menus every time a price or dish changed, and guests waiting on staff to take orders during peak hours. Digital Menu replaced printed menus with QR-code ordering that updates instantly and syncs straight to the kitchen.",
      results: "Instant menu updates, zero reprints",
      technologies: ["Next.js", "Real-time sync", "QR ordering"],
      featured: true,
      order: 2,
    },
    {
      slug: "company-profile-website",
      title: "Company Profile Website",
      category: "Web",
      summary:
        "Small businesses needing a credible web presence without months of custom design work or ongoing agency fees. A template-driven profile site product that gets a business online, professional, and maintainable by their own team within days.",
      results: "Launch in days, not months",
      technologies: ["Next.js", "Headless CMS", "SEO"],
      featured: false,
      order: 3,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  // --- Industries ---
  const industries = [
    "Restaurants", "Hotels", "Healthcare", "Education", "Construction",
    "Manufacturing", "Retail", "NGOs", "Startups", "Corporate Businesses",
  ];
 for (const [i, name] of industries.entries()) {
    await prisma.industry.upsert({
      where: { name },
      update: {},
      create: { name, order: i },
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
