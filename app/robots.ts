import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Rule for all user agents (default behavior)
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/pdpa/"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
