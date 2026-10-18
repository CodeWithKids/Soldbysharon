import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PropertyBrowser } from "@/components/property-browser";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { getArea, propertyCategories } from "@/lib/areas";
import { pageMeta } from "@/lib/page-meta";
import { properties, type PropertyFilters } from "@/lib/properties";

export const Route = createFileRoute("/areas_/$slug/$category")({
  loader: ({ params }) => {
    const area = getArea(params.slug);
    const category = propertyCategories.find((item) => item.id === params.category);
    if (!area || !category || !(category.areas as readonly string[]).includes(area.name)) throw notFound();
    const listings = properties
      .filter((property) => property.category === category.title)
      .sort((a, b) => Number(b.area === area.name) - Number(a.area === area.name));
    return {
      area,
      category: {
        id: category.id,
        title: category.title,
        description: category.description,
        image: category.image,
      },
      listings,
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(
          `/areas/${loaderData.area.slug}/${loaderData.category.id}`,
          loaderData.category.title,
          `${loaderData.category.description} Properties in ${loaderData.area.name} are listed first.`,
        )
      : pageMeta("/areas", "Areas", "Properties across Nairobi and its outskirts."),
  component: CategoryPropertiesPage,
});

function CategoryPropertiesPage() {
  const { area, category, listings } = Route.useLoaderData();
  const [filters, setFilters] = useState<PropertyFilters>({});

  return (
    <SiteLayout>
      <PageBanner
        eyebrow={area.name}
        title={category.title}
        lede={category.description}
        image={category.image}
      />
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/areas/$slug"
            params={{ slug: area.slug }}
            className="text-sm uppercase tracking-[0.22em] underline"
          >
            {area.name}
          </Link>
          <p className="mt-6 max-w-2xl text-neutral-600">
            All properties in this category. Search or filter by area and type.
          </p>
          <div className="mt-8">
            <PropertyBrowser properties={listings} filters={filters} onChange={setFilters} hideCategory />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
