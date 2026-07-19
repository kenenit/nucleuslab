export interface CaseStudy {
  slug: string;
  title: string;
  categories: ("mobile" | "web" | "ai")[];
  tag: string;
  summary: string;
  results: { value: string; label: string }[];
  tech: string[];
  icon: "home" | "menu" | "globe";
  productHref: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "biku-home-solution",
    title: "Biku Home Solution",
    categories: ["mobile", "ai"],
    tag: "Mobile · IoT",
    summary:
      "Households managing smart devices across three or four separate apps, with no single view of what was on, scheduled, or costing money. We built one app to control, automate, and monitor an entire home from a single, simple interface.",
    results: [
      { value: "1", label: "Unified control app" },
      { value: "4→1", label: "Apps consolidated" },
      { value: "Live", label: "On Google Play" },
    ],
    tech: ["React Native", "IoT", "Firebase"],
    icon: "home",
    productHref: "/products#biku-home-solution",
  },
  {
    slug: "digital-menu",
    title: "Digital Menu",
    categories: ["web", "ai"],
    tag: "Web · Real-time",
    summary:
      "Restaurants reprinting menus every time a price or dish changed, and guests waiting on staff to take orders during peak hours. Digital Menu replaced printed menus with QR-code ordering that updates instantly and syncs straight to the kitchen.",
    results: [
      { value: "Instant", label: "Menu updates" },
      { value: "0", label: "Reprints needed" },
      { value: "Multi", label: "Location ready" },
    ],
    tech: ["Next.js", "Real-time sync", "QR ordering"],
    icon: "menu",
    productHref: "/products#digital-menu",
  },
  {
    slug: "company-profile-website",
    title: "Company Profile Website",
    categories: ["web"],
    tag: "Web · CMS",
    summary:
      "Small businesses needing a credible web presence without months of custom design work or ongoing agency fees. A template-driven profile site product that gets a business online, professional, and maintainable by their own team within days.",
    results: [
      { value: "Days", label: "Not months to launch" },
      { value: "SEO", label: "Ready by default" },
      { value: "Self", label: "Serve updates" },
    ],
    tech: ["Next.js", "Headless CMS", "SEO"],
    icon: "globe",
    productHref: "/products#company-profile-website",
  },
];
