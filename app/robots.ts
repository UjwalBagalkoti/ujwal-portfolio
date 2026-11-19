import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://ujwal-portfolio-bice.vercel.app/sitemap.xml" };
}
