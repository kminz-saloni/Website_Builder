import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webcrest.studio";

  return [
    "",
    "/projects",
    "/experiments",
    "/about",
    "/contact"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
    lastModified: new Date()
  }));
}
