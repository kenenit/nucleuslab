export interface CaseStudy {
  slug: string;
  title: string;
  categories: ("startup" | "hospitality" | "business")[];
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
    categories: ["startup"],
    tag: "Startup Product",
    summary:
      "Finding a trustworthy plumber, electrician, or cleaner usually means asking around and hoping for the best. Biku is a digital platform connecting customers with trusted home service professionals — plumbing, electrical work, cleaning, painting, furniture assembly, and more — booked through a seamless mobile experience.",
    results: [
      { value: "1", label: "App for all home services" },
      { value: "5+", label: "Service categories" },
      { value: "Live", label: "On Google Play" },
    ],
    tech: ["React Native", "Node.js", "PostgreSQL"],
    icon: "home",
    productHref: "/products#biku-home-solution",
  },
  {
    slug: "digital-menu",
    title: "Digital Menu",
    categories: ["hospitality"],
    tag: "Hospitality Solution",
    summary:
      "Restaurants reprinting menus every time a price or dish changed, and guests waiting on staff during peak hours. Digital Menu replaced printed menus with a QR code-powered digital menu — no app install required — that's simple for owners to manage and instant to update.",
    results: [
      { value: "Instant", label: "Menu updates" },
      { value: "0", label: "App install needed" },
      { value: "Simple", label: "Menu management" },
    ],
    tech: ["Next.js", "QR ordering", "Real-time sync"],
    icon: "menu",
    productHref: "/products#digital-menu",
  },
  {
    slug: "company-profile-website",
    title: "Company Profile Website",
    categories: ["business"],
    tag: "Business Website",
    summary:
      "Businesses need a strong online presence to be taken seriously — but building one from scratch takes time most teams don't have. Company Profile Website is a professional solution that showcases a business's company, services, portfolio, contact information, and brand identity, live in days.",
    results: [
      { value: "Days", label: "Not months to launch" },
      { value: "SEO", label: "Ready by default" },
      { value: "Full", label: "Brand identity showcase" },
    ],
    tech: ["Next.js", "Headless CMS", "SEO"],
    icon: "globe",
    productHref: "/products#company-profile-website",
  },
];
