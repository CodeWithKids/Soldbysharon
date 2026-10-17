import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { pageMeta } from "@/lib/page-meta";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/properties/")({
  component: PropertiesPage,
  head: () =>
    pageMeta(
      "/properties",
      "Properties",
      "Homes, commercial space, and land across Nairobi and its outskirts. Ask for the details of any property.",
    ),
});

function PropertiesPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Properties"
        title="View a property"
        lede="Open any property for the full details, then ask us about price, title, and a viewing."
        image="/images/hero-estate.jpg"
      />
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <ul className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2">
          {properties.map((property) => (
            <li key={property.slug}>
              <Link
                to="/properties/$slug"
                params={{ slug: property.slug }}
                className="group block"
              >
                <div className="overflow-hidden">
                  <img
                    src={property.images[0].src}
                    alt={property.images[0].alt}
                    width={1280}
                    height={720}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
                  {property.category}
                </p>
                <h2 className="mt-2 font-display text-3xl font-normal group-hover:underline">
                  {property.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  {property.area} · {property.priceLabel}
                </p>
                <p className="mt-3 leading-relaxed text-neutral-600">{property.summary}</p>
                <span className="mt-4 inline-block text-sm uppercase tracking-[0.22em] underline">
                  View property
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
