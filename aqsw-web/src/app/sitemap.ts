import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/clients", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/company-profile", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.65, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url.replace(/\/$/, "")}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
