import type { MetadataRoute } from "next";
import { servicePages } from "@/data/servicePages";
import { manufacturerKeyPages } from "@/data/manufacturerKeys";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aesuk.co";
  const now = new Date("2026-11-25");

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/book",
    "/services",
    "/pricing",
    "/faq",
    "/service-areas",
    "/blog",
    "/tuning/ecu-remapping",
  ];

  const dynamicSlugs = [
    ...Object.keys(servicePages),
    ...Object.keys(manufacturerKeyPages),
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...dynamicSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
