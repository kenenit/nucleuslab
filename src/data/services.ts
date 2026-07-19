import type { ServiceContent } from "@/types";

// This mirrors prisma/seed.ts. Components import from here for static rendering;
// swap these calls for `prisma.service.findMany()` once your database is seeded
// and you want the admin dashboard to control this content live.
export const services: ServiceContent[] = [
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
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary: "Native-feel iOS and Android apps, wireframe to store release.",
    description:
      "Native-feel iOS and Android apps, from the first wireframe through App Store and Play Store release.",
    benefits: [
      "One codebase, both platforms",
      "Native performance and feel, not a wrapped webview",
      "Push notifications and offline support built in",
      "Store submission handled for you",
    ],
    process: ["Scoping", "Prototype", "Build & test", "Release"],
    technologies: ["React Native", "Swift / Kotlin", "Firebase", "App Store Connect", "Play Console"],
    icon: "smartphone",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary: "Interfaces designed around how people actually work.",
    description:
      "Interfaces designed around how people actually work — researched, tested, and refined before a single line of code ships.",
    benefits: [
      "Grounded in real user research, not guesswork",
      "Reusable design systems, not one-off screens",
      "Accessible by default — WCAG 2.2 AA",
      "Tested with real users before we build",
    ],
    process: ["Research", "Wireframes", "Visual system", "Usability testing"],
    technologies: ["Figma", "Design tokens", "Component libraries", "Accessibility audits"],
    icon: "pen-tool",
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
  },
];
