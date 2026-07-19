import type { ProductContent } from "@/types";

export const products: (ProductContent & {
  intro: string;
  socialLinks?: { label: string; href: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
})[] = [
  {
    slug: "biku-home-solution",
    name: "Biku Home Solution",
    tagline: "Smart home control, made simple.",
    intro: "A Nucleus Labs product, built and maintained in-house.",
    overview: "A smart-home control app that turns any household into a connected, manageable space.",
    features: ["Device control from one app", "Automations & schedules", "Family sharing", "Energy usage insights"],
    storeUrlAndroid: "https://play.google.com/store",
    primaryCta: { label: "Get it on Google Play", href: "https://play.google.com/store" },
    secondaryCta: { label: "Learn more", href: "#biku-home-solution" },
    socialLinks: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    slug: "digital-menu",
    name: "Digital Menu",
    tagline: "QR ordering for modern restaurants.",
    intro: "A Nucleus Labs product for the hospitality industry.",
    overview: "QR-code ordering that lets restaurants update menus instantly and serve guests faster.",
    features: ["Instant menu updates", "QR code ordering", "Real-time kitchen sync", "Multi-location support"],
    liveDemoUrl: "#",
    primaryCta: { label: "See live demo", href: "#" },
    secondaryCta: { label: "Get started", href: "/contact" },
  },
  {
    slug: "company-profile-website",
    name: "Company Profile Website",
    tagline: "A credible web presence, fast.",
    intro: "A Nucleus Labs product for small and growing businesses.",
    overview: "A template-driven profile site that gets small businesses a credible web presence fast.",
    features: [
      "Ready-made professional templates",
      "Portfolio / examples section",
      "Optional pricing page",
      "Launch in days, not months",
    ],
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "Get started", href: "/contact" },
  },
];

