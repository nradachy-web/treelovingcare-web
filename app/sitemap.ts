import type { MetadataRoute } from "next";
import { services, serviceAreas, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/service-areas", priority: 0.8 },
    { path: "/gallery", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceAreas.map((a) => ({
      url: `${site.url}/service-areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
