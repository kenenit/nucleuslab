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
      tagline: "Trusted home services, booked in minutes.",
      overview:
        "A digital platform connecting customers with trusted home service professionals. Biku simplifies booking services such as plumbing, electrical work, cleaning, painting, furniture assembly, and other home maintenance services through a seamless mobile experience.",
      features: [
        "Browse and book trusted home service professionals",
        "Plumbing, electrical, cleaning, painting & furniture assembly",
        "Simple, seamless mobile booking experience",
        "Built for both customers and service providers",
      ],
      screenshots: [
        "/products/biku/screenshot-home.png",
        "/products/biku/screenshot-explore-map.png",
        "/products/biku/screenshot-technicians.png",
        "/products/biku/screenshot-ai-chat.png",
      ],
      storeUrlAndroid: "https://play.google.com/store/apps/details?id=com.nucleuslabs.bikuhomesolution",
      socialLinks: {
        telegramChannel: "https://t.me/Biku_Home_Solution",
        telegramSupport: "https://t.me/BIKUSupport",
        instagram: "https://www.instagram.com/biku_home_solution",
        tiktok: "https://vm.tiktok.com/ZS9rfvDVoCsk9-x1Iyg/",
      },
      order: 1,
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
      screenshots: [
        "/products/digital-menu/screenshot-home.png",
        "/products/digital-menu/screenshot-menu-list.png",
        "/products/digital-menu/screenshot-item-detail.png",
        "/products/digital-menu/screenshot-settings.png",
      ],
      liveDemoUrl: "https://biku-menu.vercel.app/",
      order: 2,
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
      screenshots: [
        "/products/company-profile-hero.png",
        "/products/company-profile-portfolio.png",
      ],
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
      category: "Startup Product",
      summary:
        "Finding a trustworthy plumber, electrician, or cleaner usually means asking around and hoping for the best. Biku is a digital platform connecting customers with trusted home service professionals — plumbing, electrical work, cleaning, painting, furniture assembly, and more — booked through a seamless mobile experience.",
      results: "Home services booked in minutes",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      coverImage: "/products/biku/screenshot-home.png",
      featured: true,
      order: 1,
    },
    {
      slug: "digital-menu",
      title: "Digital Menu",
      category: "Hospitality Solution",
      summary:
        "Restaurants reprinting menus every time a price or dish changed, and guests waiting on staff during peak hours. Digital Menu replaced printed menus with a QR code-powered digital menu — no app install required — that's simple for owners to manage and instant to update.",
      results: "Menu updates go live instantly, zero reprints",
      technologies: ["Next.js", "QR ordering", "Real-time sync"],
      coverImage: "/products/digital-menu/screenshot-home.png",
      featured: true,
      order: 2,
    },
    {
      slug: "company-profile-website",
      title: "Company Profile Website",
      category: "Business Website",
      summary:
        "Businesses need a strong online presence to be taken seriously — but building one from scratch takes time most teams don't have. Company Profile Website is a professional solution that showcases a business's company, services, portfolio, contact information, and brand identity, live in days.",
      results: "A credible online presence, launched fast",
      technologies: ["Next.js", "Headless CMS", "SEO"],
      coverImage: "/products/company-profile-hero.png",
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

  // --- Blog posts ---
  const blogPosts = [
    {
      slug: "future-of-ai-for-small-businesses",
      title: "The Future of AI for Small Businesses",
      excerpt: "Artificial Intelligence is no longer reserved for large corporations. Discover how small businesses can leverage AI to automate repetitive tasks, improve customer service, and make smarter decisions.",
      content: `Artificial Intelligence is no longer reserved for large corporations with dedicated data science teams. Today, small and growing businesses can access the same category of tools — often at a fraction of the cost, and with far less setup than most people expect.

For small businesses, the real value of AI usually isn't in something flashy. It's in the quiet, repetitive work that eats up hours every week: sorting customer inquiries, scheduling, drafting responses, tracking inventory, or summarizing feedback. AI can take a lot of that off your plate.

A few practical examples we see businesses benefit from:

- **Customer service**: AI-assisted chat can answer common questions instantly, day or night, while routing anything complex to a real person.
- **Automation**: Repetitive tasks like data entry, appointment reminders, and follow-up emails can run in the background without anyone having to remember to do them.
- **Smarter decisions**: AI can spot patterns in your sales or customer data that would take a person days to notice manually.

At Nucleus Labs, we don't treat AI as a buzzword to bolt onto a product. We look at where it genuinely saves time or improves an outcome, and build it into the systems we create for our clients from the start.`,
      category: "AI",
      tags: ["AI", "Small Business", "Automation"],
      published: true,
      order: 1,
    },
    {
      slug: "why-every-business-needs-a-professional-website",
      title: "Why Every Business Needs a Professional Website",
      excerpt: "Your website is your digital storefront. Learn how a professional website builds credibility, attracts customers, and creates new business opportunities.",
      content: `Your website is your digital storefront — often the very first interaction a potential customer has with your business, long before they ever walk through your door or pick up the phone.

A professional website does more than look good. It builds credibility the moment someone lands on it: clear information, a design that feels trustworthy, and an experience that doesn't leave visitors confused about what you do or how to reach you.

Beyond first impressions, a well-built website actively works for your business:

- It attracts customers who are searching for exactly what you offer.
- It gives you a place to showcase your work, services, and reputation.
- It creates opportunities — partnerships, inquiries, and sales — that wouldn't exist if you were relying on word of mouth alone.

Many businesses put this off, assuming a website is a "someday" project. In practice, it's one of the highest-leverage investments a growing business can make — and with the right approach, it doesn't have to take months or cost a fortune to get right.`,
      category: "Business",
      tags: ["Websites", "Business Growth", "Branding"],
      published: true,
      order: 2,
    },
    {
      slug: "digital-menus-the-future-of-restaurants",
      title: "Digital Menus: The Future of Restaurants",
      excerpt: "Explore how QR code menus reduce printing costs, simplify menu updates, and improve the dining experience for customers.",
      content: `Printed menus feel simple, until a price changes, a dish sells out, or a new seasonal item needs adding — and suddenly every printed copy in the restaurant is out of date.

QR code-powered digital menus solve this cleanly. A customer scans a code at their table and instantly sees your full, current menu on their own phone — no app to download, no waiting for a physical menu to be handed over.

The benefits go both ways:

- **For customers**: a faster, more convenient way to browse, often with better formatting, photos, and descriptions than a printed page allows.
- **For restaurant owners**: menu updates go live instantly, with zero reprinting costs, and no risk of a customer ordering something that's no longer available.

It's a small change in how a menu is delivered, but it removes a surprising amount of everyday friction — for the kitchen, the front of house, and the guest. That's exactly the problem our Digital Menu product was built to solve.`,
      category: "Technology",
      tags: ["Digital Menu", "Hospitality", "QR Code"],
      published: true,
      order: 3,
    },
    {
      slug: "introducing-biku-home-solution",
      title: "Introducing Biku Home Solution",
      excerpt: "Meet Biku Home Solution, our startup focused on making home maintenance services easier, faster, and more reliable through technology.",
      content: `Finding a plumber you trust, or an electrician who'll actually show up on time, usually means asking around and hoping for the best. We built Biku Home Solution to change that.

Biku is a digital platform connecting customers with trusted home service professionals — plumbing, electrical work, cleaning, painting, furniture assembly, and other home maintenance needs — all bookable through a seamless mobile experience.

Instead of relying on word of mouth or a search that turns up more questions than answers, Biku gives customers a simple way to browse verified professionals and book the service they need, when they need it. For service providers, it's a direct channel to new customers without having to build their own marketing or booking systems from scratch.

Biku is one of our own in-house products — built, maintained, and continuously improved by the same team that builds for our clients. It's a good example of how we think about technology at Nucleus Labs: solve a real, everyday problem, and build it properly enough that people actually rely on it.`,
      category: "Innovation",
      tags: ["Biku Home Solution", "Startup", "Product Launch"],
      published: true,
      order: 4,
    },
    {
      slug: "common-website-mistakes-businesses-should-avoid",
      title: "Common Website Mistakes Businesses Should Avoid",
      excerpt: "From slow loading pages to poor mobile optimization, discover the most common website mistakes and how to avoid them.",
      content: `A website that looks fine on the surface can still be quietly costing a business customers. Here are some of the most common issues we see — and why they matter more than they might seem.

**Slow loading pages.** Every extra second a page takes to load increases the chance a visitor leaves before they even see what you offer. Performance isn't a nice-to-have, it's often the difference between a visit and a bounce.

**Poor mobile optimization.** Most visitors are on their phones. A site that only looks right on a desktop screen is failing the majority of the people who find it.

**Confusing navigation.** If a visitor can't quickly find what they came for — your services, your contact details, your pricing — they'll assume you don't have it, even if you do.

**No clear call to action.** Every page should make it obvious what to do next: contact you, book a service, browse a product. Without that, even interested visitors leave without taking action.

**Outdated or missing content.** An old blog post, a broken link, or a "coming soon" page that's been "coming soon" for a year all quietly erode trust.

None of these are hard to fix individually — but they're easy to miss without someone actively checking for them. It's exactly the kind of detail we build in from the start, rather than patching in after launch.`,
      category: "Software",
      tags: ["Web Development", "Best Practices"],
      published: true,
      order: 5,
    },
    {
      slug: "custom-software-vs-ready-made-software",
      title: "Custom Software vs Ready-Made Software",
      excerpt: "Which solution is right for your business? Compare the advantages of custom-built software with off-the-shelf applications.",
      content: `One of the first decisions any growing business faces with technology is whether to buy something off the shelf or build something custom. Both are legitimate choices — the right one depends on what you actually need.

**Ready-made software** is fast to get started with and usually cheaper upfront. If your workflow is fairly standard — accounting, basic scheduling, general project management — an existing tool built for exactly that purpose can be a perfectly good fit.

**Custom software** earns its cost when your business doesn't work like everyone else's. If you're bending an off-the-shelf tool into shapes it wasn't designed for, adding workaround after workaround, that's usually a sign it's time for something built specifically around how you actually operate.

The trade-offs are fairly clear-cut:

- Ready-made software is quicker to start, but you adapt your process to fit the tool.
- Custom software takes longer to build, but the tool adapts to fit your process — and it scales with you, rather than becoming something you outgrow.

Our advice is usually simple: start with ready-made tools where they genuinely fit, and invest in custom software at the points where your business's specific way of working is actually your advantage.`,
      category: "Software",
      tags: ["Custom Software", "Business Strategy"],
      published: true,
      order: 6,
    },
  ];

  for (const post of blogPosts) {
    const { order, ...postData } = post;
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: { ...postData, publishedAt: new Date() },
      create: { ...postData, publishedAt: new Date() },
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

// Retries the whole seed run once after a delay if the database was asleep
// (Neon free-tier auto-suspend) — safe because every write in main() is an
// upsert, so re-running the entire thing is idempotent.
async function runWithRetry(retries = 2, delayMs = 3000) {
  try {
    await main();
  } catch (err) {
    if (retries <= 0) throw err;
    console.log(`Seed failed (database may be waking up) — retrying in ${delayMs / 1000}s...`);
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    await runWithRetry(retries - 1, delayMs);
  }
}

runWithRetry()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
