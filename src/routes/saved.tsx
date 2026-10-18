import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { useClientLists } from "@/lib/client-lists";
import { pageMeta } from "@/lib/page-meta";
import { properties, propertyType } from "@/lib/properties";

export const Route = createFileRoute("/saved")({
  component: SavedPage,
  head: () =>
    pageMeta("/saved", "Saved properties", "Properties you have saved while looking with Sold by Sharon."),
});

function SavedPage() {
  const { saved, toggleSaved } = useClientLists();
  const listings = saved
    .map((slug) => properties.find((property) => property.slug === slug))
    .filter((property) => property !== undefined);

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Saved"
        title="Properties you want to come back to"
        lede="Saved properties stay on this device. Ask about any of them when you are ready."
      />
      <section className="bg-neutral-100 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          {listings.length > 0 ? (
            <ul className="grid gap-10 sm:grid-cols-2">
              {listings.map((property) => (
                <li key={property.slug}>
                  <Link to="/properties/$slug" params={{ slug: property.slug }} className="group block">
                    <img
                      src={property.images[0].src}
                      alt={property.images[0].alt}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
                      {property.area}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-normal group-hover:underline">{property.title}</h2>
                    <p className="mt-2 text-sm text-neutral-600">
                      {propertyType(property)} · {property.priceLabel}
                    </p>
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => toggleSaved(property.slug)}
                      className="text-sm uppercase tracking-[0.18em] underline"
                    >
                      Remove
                    </button>
                    <Link
                      to="/contact"
                      search={{ property: property.slug }}
                      className="text-sm uppercase tracking-[0.18em] underline"
                    >
                      Enquire
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-xl text-lg leading-relaxed text-neutral-700">
              You have not saved a property yet.{" "}
              <Link to="/properties" className="underline">
                Browse properties
              </Link>{" "}
              and save the ones you want to revisit.
            </p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
