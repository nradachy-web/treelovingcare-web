import type { MetadataRoute } from "next";
import { pageUrl, services, serviceAreas } from "@/lib/site";
import { landingPath, landingRoutes } from "@/lib/landing";

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
      url: pageUrl(p.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: pageUrl(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceAreas.map((a) => ({
      url: pageUrl(`/service-areas/${a.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...landingRoutes.map((r) => ({
      url: pageUrl(landingPath(r.track, r.town)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
