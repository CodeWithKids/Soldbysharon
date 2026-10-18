import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { areaNames, areaSlug } from "@/lib/areas";
import { properties } from "@/lib/properties";

const BASE_URL = "https://www.soldbysharon.co.ke";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/areas", changefreq: "monthly", priority: "0.8" },
          { path: "/properties", changefreq: "weekly", priority: "0.9" },
          { path: "/saved", changefreq: "monthly", priority: "0.4" },
          { path: "/compare", changefreq: "monthly", priority: "0.4" },
          ...areaNames.map((area) => ({
            path: `/areas/${areaSlug(area)}`,
            changefreq: "weekly" as const,
            priority: "0.7",
          })),
          ...properties.map((property) => ({
            path: `/properties/${property.slug}`,
            changefreq: "weekly" as const,
            priority: "0.7",
          })),
          { path: "/founder", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
