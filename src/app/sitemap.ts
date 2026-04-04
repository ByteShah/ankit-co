import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankitshahco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "",            priority: 1.0,  changeFrequency: "weekly"  as const },
    { path: "/services",   priority: 0.9,  changeFrequency: "monthly" as const },
    { path: "/about",      priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/resources",  priority: 0.7,  changeFrequency: "weekly"  as const },
    { path: "/contact",    priority: 0.9,  changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
