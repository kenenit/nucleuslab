export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  category: "AI" | "Technology" | "Automation" | "Software" | "Business" | "Innovation";
  date: string;
  readTime: string;
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "why-we-build-ai-native",
    title: "Why we design for AI from day one, not as an add-on",
    excerpt: "Bolting AI onto a finished product rarely works well. Here's how we think about it during architecture instead.",
    category: "AI",
    date: "Placeholder date",
    readTime: "5 min read",
  },
  {
    slug: "choosing-a-tech-stack-2026",
    title: "How we choose a tech stack for a new client project",
    excerpt: "Fewer moving parts, more maintainability. Our checklist for picking technology that will still make sense in three years.",
    category: "Technology",
    date: "Placeholder date",
    readTime: "6 min read",
  },
  {
    slug: "automation-roi",
    title: "How to tell if an automation project is actually worth it",
    excerpt: "Not everything that can be automated should be. A framework for deciding what's worth the engineering time.",
    category: "Automation",
    date: "Placeholder date",
    readTime: "4 min read",
  },
  {
    slug: "maintainable-code-small-teams",
    title: "Writing maintainable software with a small team",
    excerpt: "Documentation habits and architectural choices that let a lean team punch above its weight.",
    category: "Software",
    date: "Placeholder date",
    readTime: "7 min read",
  },
  {
    slug: "software-budget-conversation",
    title: "How to talk to a dev shop about your budget",
    excerpt: "The conversation most founders avoid, and why having it early saves everyone time.",
    category: "Business",
    date: "Placeholder date",
    readTime: "5 min read",
  },
  {
    slug: "innovation-vs-stability",
    title: "Balancing innovation with a product that just works",
    excerpt: "Chasing every new tool isn't innovation — it's noise. Here's how we decide what's actually worth adopting.",
    category: "Innovation",
    date: "Placeholder date",
    readTime: "4 min read",
  },
];
