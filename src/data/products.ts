import type { ProductDisplay } from "@/lib/content";

// Fallback data only — used if the database's Product table is ever empty.
// Shape must match ProductDisplay exactly (see src/lib/content.ts).
export const products: ProductDisplay[] = [
  {
    slug: "biku-home-solution",
    name: "Biku Home Solution",
    tagline: "Trusted home services, booked in minutes.",
    overview:
      "A digital platform connecting customers with trusted home service professionals. Biku simplifies booking services such as plumbing, electrical work, cleaning, painting, furniture assembly, and other home maintenance services through a seamless mobile experience.",
    features: [
      "Browse and book trusted home service professionals",
      "Plumbing, electrical, cleaning, painting & furniture assembly",
      "Simple, seamless mobile booking experience",
      "Built for both customers and service providers",
    ],
    storeUrlAndroid: "https://play.google.com/store",
    socialLinks: {
      telegramChannel: "https://t.me/Biku_Home_Solution",
      telegramSupport: "https://t.me/Nucleus_Labs",
      instagram: "https://www.instagram.com/biku_home_solution",
      tiktok: "https://vm.tiktok.com/ZS9rfvDVoCsk9-x1Iyg/",
    },
  },
  {
    slug: "digital-menu",
    name: "Digital Menu",
    tagline: "QR-code menus for modern restaurants.",
    overview:
      "A QR code-powered restaurant menu that allows customers to browse food and drinks digitally without installing an application. The platform improves customer experience while making menu management simple for restaurant owners.",
    features: [
      "No app install required — scan and browse instantly",
      "Update prices and items in real time",
      "Improves the dining experience for guests",
      "Simple menu management for restaurant owners",
    ],
  },
  {
    slug: "company-profile-website",
    name: "Company Profile Website",
    tagline: "A professional online presence, done right.",
    overview:
      "A professional website solution designed to help businesses establish a strong online presence by showcasing their company, services, portfolio, contact information, and brand identity.",
    features: [
      "Showcase your company, services, and portfolio",
      "Professional design that reflects your brand identity",
      "Contact information and inquiry forms built in",
      "Launch in days, not months",
    ],
  },
];
