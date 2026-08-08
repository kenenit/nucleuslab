import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { services as staticServices } from "@/data/services";
import { products as staticProducts } from "@/data/products";
import { caseStudies as staticCaseStudies } from "@/data/case-studies";
import { blogPosts as staticBlogPosts } from "@/data/blog-posts";
import { testimonials as staticTestimonials } from "@/data/testimonials";
import { jobs as staticJobs } from "@/data/jobs";
import type { ServiceContent } from "@/types";

/**
 * These functions are the bridge between the admin dashboard and the public
 * site: they query the database first (so edits made in /admin actually show
 * up), and fall back to the static files in src/data/ only if the table is
 * empty (nothing seeded/added yet) or the database is briefly unreachable
 * (e.g. Neon waking up from idle). That fallback means the site never shows
 * a broken/empty section, even on a cold start.
 */

export async function getServices(): Promise<ServiceContent[]> {
  try {
    const rows = await withRetry(() =>
      prisma.service.findMany({ where: { published: true }, orderBy: { order: "asc" } })
    );
    if (rows.length === 0) return staticServices;
    return rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      summary: r.summary,
      description: r.description,
      benefits: r.benefits,
      process: r.process,
      technologies: r.technologies,
      icon: r.icon ?? "sparkles",
    }));
  } catch (err) {
    console.error("[content] getServices falling back to static data", err);
    return staticServices;
  }
}

export interface ProductDisplay {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  features: string[];
  screenshots?: string[];
  storeUrlIos?: string | null;
  storeUrlAndroid?: string | null;
  liveDemoUrl?: string | null;
  learnMoreUrl?: string | null;
  socialLinks?: Record<string, string> | null;
}

export async function getProducts(): Promise<ProductDisplay[]> {
  try {
    const rows = await withRetry(() =>
      prisma.product.findMany({ where: { published: true }, orderBy: { order: "asc" } })
    );
    if (rows.length === 0) return staticProducts;
    return rows.map((r) => ({
      slug: r.slug,
      name: r.name,
      tagline: r.tagline,
      overview: r.overview,
      features: r.features,
      screenshots: r.screenshots,
      storeUrlIos: r.storeUrlIos,
      storeUrlAndroid: r.storeUrlAndroid,
      liveDemoUrl: r.liveDemoUrl,
      learnMoreUrl: r.learnMoreUrl,
      socialLinks: r.socialLinks as Record<string, string> | null,
    }));
  } catch (err) {
    console.error("[content] getProducts falling back to static data", err);
    return staticProducts;
  }
}

export interface CaseStudyDisplay {
  slug: string;
  title: string;
  category: string;
  summary: string;
  results: { value: string; label: string }[];
  tech: string[];
  coverImage: string | null;
}

export async function getPortfolioProjects(): Promise<CaseStudyDisplay[]> {
  try {
    const rows = await withRetry(() =>
      prisma.project.findMany({ where: { published: true }, orderBy: { order: "asc" } })
    );
    if (rows.length === 0) {
      return staticCaseStudies.map((c) => ({
        slug: c.slug,
        title: c.title,
        category: c.categories.join(" "),
        summary: c.summary,
        results: c.results,
        tech: c.tech,
        coverImage: null,
      }));
    }
    return rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      category: r.category,
      summary: r.summary,
      results: r.results ? [{ value: r.results, label: "Result" }] : [],
      tech: r.technologies,
      coverImage: r.coverImage,
    }));
  } catch (err) {
    console.error("[content] getPortfolioProjects falling back to static data", err);
    return staticCaseStudies.map((c) => ({
      slug: c.slug,
      title: c.title,
      category: c.categories.join(" "),
      summary: c.summary,
      results: c.results,
      tech: c.tech,
      coverImage: null,
    }));
  }
}

export interface TeamMemberDisplay {
  id: string;
  name: string;
  role: string;
  isLeadership: boolean;
  photoUrl: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;
  email: string | null;
  phone: string | null;
}

export async function getTeamMembers(): Promise<TeamMemberDisplay[]> {
  try {
    const rows = await withRetry(() =>
      prisma.teamMember.findMany({ where: { published: true }, orderBy: { order: "asc" } })
    );
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      role: r.role,
      isLeadership: r.isLeadership,
      photoUrl: r.photoUrl,
      linkedinUrl: r.linkedinUrl,
      githubUrl: r.githubUrl,
      portfolioUrl: r.portfolioUrl,
      email: r.email,
      phone: r.phone,
    }));
  } catch (err) {
    console.error("[content] getTeamMembers falling back to placeholders", err);
    return [];
  }
}

export interface BlogPostDisplay {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string | null;
  publishedAt: string | null;
}

export async function getBlogPosts(): Promise<BlogPostDisplay[]> {
  try {
    const rows = await withRetry(() =>
      prisma.blogPost.findMany({ where: { published: true }, orderBy: { publishedAt: "desc" } })
    );
    if (rows.length === 0) {
      return staticBlogPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        content: "",
        category: p.category,
        tags: [],
        coverImage: null,
        publishedAt: null,
      }));
    }
    return rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      excerpt: r.excerpt,
      content: r.content,
      category: r.category,
      tags: r.tags,
      coverImage: r.coverImage,
      publishedAt: r.publishedAt ? r.publishedAt.toISOString() : null,
    }));
  } catch (err) {
    console.error("[content] getBlogPosts falling back to static data", err);
    return staticBlogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      content: "",
      category: p.category,
      tags: [],
      coverImage: null,
      publishedAt: null,
    }));
  }
}

export interface TestimonialDisplay {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Returns { items, usingPlaceholders } so pages can show the "placeholder —
// add real ones in the admin dashboard" note only when it's actually true.
export async function getTestimonials(): Promise<{ items: TestimonialDisplay[]; usingPlaceholders: boolean }> {
  try {
    const rows = await withRetry(() =>
      prisma.testimonial.findMany({ where: { published: true }, orderBy: { order: "asc" } })
    );
    if (rows.length === 0) {
      return {
        usingPlaceholders: true,
        items: staticTestimonials.map((t, i) => ({
          id: `ph-${i}`,
          quote: t.quote,
          name: t.name,
          role: t.role,
          initials: t.initials,
          rating: t.rating,
        })),
      };
    }
    return {
      usingPlaceholders: false,
      items: rows.map((r) => ({
        id: r.id,
        quote: r.quote,
        name: r.authorName,
        role: [r.authorRole, r.company].filter(Boolean).join(", "),
        initials: initialsOf(r.authorName),
        rating: r.rating,
      })),
    };
  } catch (err) {
    console.error("[content] getTestimonials falling back to static data", err);
    return {
      usingPlaceholders: true,
      items: staticTestimonials.map((t, i) => ({
        id: `ph-${i}`,
        quote: t.quote,
        name: t.name,
        role: t.role,
        initials: t.initials,
        rating: t.rating,
      })),
    };
  }
}

export interface JobDisplay {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

export async function getJobListings(): Promise<JobDisplay[]> {
  try {
    const rows = await withRetry(() =>
      prisma.jobListing.findMany({ where: { published: true }, orderBy: { order: "asc" } })
    );
    if (rows.length === 0) return staticJobs;
    return rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      department: r.department ?? "General",
      type: r.type,
      location: r.location,
      description: r.description,
    }));
  } catch (err) {
    console.error("[content] getJobListings falling back to static data", err);
    return staticJobs;
  }
}

export interface SiteSettingsDisplay {
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  contactHours: string;
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
    tiktok: string;
    youtube: string;
    github: string;
  };
}

const defaultSettings: SiteSettingsDisplay = {
  contactEmail: "NucleusLabs.et@gmail.com",
  contactPhone: "+251 92 324 3132",
  contactAddress: "We work remotely — no physical office right now.",
  contactHours: "Mon–Fri, 9:00–18:00 EAT",
  social: { linkedin: "", twitter: "", instagram: "https://instagram.com/biku.et", facebook: "", tiktok: "", youtube: "", github: "" },
};

export async function getSiteSettings(): Promise<SiteSettingsDisplay> {
  try {
    const row = await withRetry(() => prisma.siteSettings.findUnique({ where: { id: "main" } }));
    if (!row) return defaultSettings;
    return {
      contactEmail: row.contactEmail,
      contactPhone: row.contactPhone,
      contactAddress: row.contactAddress,
      contactHours: row.contactHours,
      social: {
        linkedin: row.socialLinkedin,
        twitter: row.socialTwitter,
        instagram: row.socialInstagram,
        facebook: row.socialFacebook,
        tiktok: row.socialTiktok,
        youtube: row.socialYoutube,
        github: row.socialGithub,
      },
    };
  } catch (err) {
    console.error("[content] getSiteSettings falling back to defaults", err);
    return defaultSettings;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDisplay | null> {
  try {
    const row = await withRetry(() => prisma.blogPost.findUnique({ where: { slug } }));
    if (!row || !row.published) return null;
    return {
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      category: row.category,
      tags: row.tags,
      coverImage: row.coverImage,
      publishedAt: row.publishedAt ? row.publishedAt.toISOString() : null,
    };
  } catch (err) {
    console.error("[content] getBlogPostBySlug failed", err);
    return null;
  }
}
