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
    slug: "future-of-ai-for-small-businesses",
    title: "The Future of AI for Small Businesses",
    excerpt: "Artificial Intelligence is no longer reserved for large corporations. Discover how small businesses can leverage AI to automate repetitive tasks, improve customer service, and make smarter decisions.",
    category: "AI",
    date: "",
    readTime: "4 min read",
  },
  {
    slug: "why-every-business-needs-a-professional-website",
    title: "Why Every Business Needs a Professional Website",
    excerpt: "Your website is your digital storefront. Learn how a professional website builds credibility, attracts customers, and creates new business opportunities.",
    category: "Business",
    date: "",
    readTime: "3 min read",
  },
  {
    slug: "digital-menus-the-future-of-restaurants",
    title: "Digital Menus: The Future of Restaurants",
    excerpt: "Explore how QR code menus reduce printing costs, simplify menu updates, and improve the dining experience for customers.",
    category: "Technology",
    date: "",
    readTime: "3 min read",
  },
  {
    slug: "introducing-biku-home-solution",
    title: "Introducing Biku Home Solution",
    excerpt: "Meet Biku Home Solution, our startup focused on making home maintenance services easier, faster, and more reliable through technology.",
    category: "Innovation",
    date: "",
    readTime: "3 min read",
  },
  {
    slug: "common-website-mistakes-businesses-should-avoid",
    title: "Common Website Mistakes Businesses Should Avoid",
    excerpt: "From slow loading pages to poor mobile optimization, discover the most common website mistakes and how to avoid them.",
    category: "Software",
    date: "",
    readTime: "4 min read",
  },
  {
    slug: "custom-software-vs-ready-made-software",
    title: "Custom Software vs Ready-Made Software",
    excerpt: "Which solution is right for your business? Compare the advantages of custom-built software with off-the-shelf applications.",
    category: "Software",
    date: "",
    readTime: "4 min read",
  },
];
