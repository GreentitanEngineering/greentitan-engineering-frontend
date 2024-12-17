import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://acme.com/en",
          th: "https://acme.com/th",
        },
      },
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://acme.com/es/aboen",
          th: "https://acme.com/de/aboth",
        },
      },
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://acme.com/es/blen",
          th: "https://acme.com/de/blth",
        },
      },
    },
  ];
}
