export const serviceLinks = [
  { label: "Software Development", href: "/services#software-development", description: "Custom systems built for scale", icon: "code-2" },
  { label: "AI Solutions", href: "/services#ai-solutions", description: "Applied AI, built into your product", icon: "atom" },
  { label: "Website Development", href: "/services#website-development", description: "Fast, accessible, production-grade", icon: "layout-template" },
  { label: "Mobile App Development", href: "/services#mobile-app-development", description: "Native-feel apps, iOS & Android", icon: "smartphone" },
  { label: "UI/UX Design", href: "/services#ui-ux-design", description: "Interfaces people trust immediately", icon: "pen-tool" },
  { label: "Custom Solutions", href: "/services#custom-solutions", description: "When off-the-shelf won't cut it", icon: "sparkles" },
];

export const productLinks = [
  { label: "Biku Home Solution", href: "/products#biku-home-solution", description: "Smart home control, made simple", icon: "home" },
  { label: "Digital Menu", href: "/products#digital-menu", description: "QR ordering for modern restaurants", icon: "utensils" },
  { label: "Company Profile Website", href: "/products#company-profile-website", description: "A credible web presence, fast", icon: "globe" },
];

export const aboutLinks = [
  { label: "About Nucleus Labs", href: "/about", description: "Our story, vision & values" },
  { label: "Team", href: "/team", description: "Who's building with you" },
  { label: "Careers", href: "/careers", description: "Open roles & internships" },
  { label: "Industries We Serve", href: "/industries", description: "Sectors we build for" },
  { label: "Our Process", href: "/process", description: "How a project runs, start to finish" },
  { label: "Testimonials", href: "/testimonials", description: "What clients say" },
  { label: "FAQ", href: "/faq", description: "Common questions answered" },
];

export const footerServiceLinks = serviceLinks.map(({ label, href }) => ({ label, href }));
export const footerProductLinks = productLinks.map(({ label, href }) => ({ label, href }));

export const footerCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerResourceLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Our Process", href: "/process" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];
