import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webcrest.studio";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0, lastModified: new Date() },
    { url: `${baseUrl}/projects`, changeFrequency: "weekly", priority: 0.9, lastModified: new Date() },
    { url: `${baseUrl}/blog`, changeFrequency: "daily", priority: 0.9, lastModified: new Date() },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${baseUrl}/experiments`, changeFrequency: "weekly", priority: 0.7, lastModified: new Date() },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...blogPages];
}
