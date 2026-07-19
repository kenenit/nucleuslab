import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/products",
  "/industries",
  "/process",
  "/team",
  "/testimonials",
  "/faq",
  "/blog",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
