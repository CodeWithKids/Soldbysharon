import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PropertyBrowser } from "@/components/property-browser";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { pageMeta } from "@/lib/page-meta";
import { properties, type PropertyFilters, type PropertySort } from "@/lib/properties";

function readFilter(value: unknown) {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function readSort(value: unknown): PropertySort | undefined {
  return value === "name" || value === "area" || value === "type" ? value : undefined;
}

export const Route = createFileRoute("/properties/")({
  validateSearch: (search: Record<string, unknown>): PropertyFilters => ({
    q: readFilter(search.q),
    category: readFilter(search.category),
    area: readFilter(search.area),
    type: readFilter(search.type),
    sort: readSort(search.sort),
  }),
  component: PropertiesPage,
  head: () =>
    pageMeta(
      "/properties",
      "Properties",
      "Homes, commercial space, and land across Nairobi and its outskirts. Ask for the details of any property.",
    ),
});

function PropertiesPage() {
  const filters = Route.useSearch();
  const navigate = useNavigate({ from: "/properties/" });

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Properties"
        title="View a property"
        lede="Search by name or area, then filter by category and type."
        image="/images/hero-estate.jpg"
      />
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <PropertyBrowser
            properties={properties}
            filters={filters}
            onChange={(next) => {
              navigate({ search: next, replace: true });
            }}
          />
        </div>
      </section>
    </SiteLayout>
  );
}
