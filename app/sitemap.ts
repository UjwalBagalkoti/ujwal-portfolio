import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://ujwal-portfolio-bice.vercel.app", lastModified: new Date() }];
}
