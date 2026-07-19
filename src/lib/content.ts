import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { services as staticServices } from "@/data/services";
import { products as staticProducts } from "@/data/products";
import { caseStudies as staticCaseStudies } from "@/data/case-studies";
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
  storeUrlIos?: string | null;
  storeUrlAndroid?: string | null;
  liveDemoUrl?: string | null;
  learnMoreUrl?: string | null;
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
      storeUrlIos: r.storeUrlIos,
      storeUrlAndroid: r.storeUrlAndroid,
      liveDemoUrl: r.liveDemoUrl,
      learnMoreUrl: r.learnMoreUrl,
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
      }));
    }
    return rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      category: r.category,
      summary: r.summary,
      results: r.results ? [{ value: r.results, label: "Result" }] : [],
      tech: r.technologies,
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
    }));
  }
}

export interface TeamMemberDisplay {
  id: string;
  name: string;
  role: string;
  isLeadership: boolean;
  photoUrl: string | null;
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
    }));
  } catch (err) {
    console.error("[content] getTeamMembers falling back to placeholders", err);
    return [];
  }
}
