import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { useClientLists } from "@/lib/client-lists";
import { pageMeta } from "@/lib/page-meta";
import { properties, propertyType, type Property } from "@/lib/properties";

export const Route = createFileRoute("/compare")({
  component: ComparePage,
  head: () =>
    pageMeta("/compare", "Compare properties", "Compare up to three properties from Sold by Sharon, side by side."),
});

const rows: { label: string; value: (property: Property) => string }[] = [
  { label: "Area", value: (property) => property.area },
  { label: "Category", value: (property) => property.category },
  { label: "Type", value: (property) => propertyType(property) },
  { label: "Price", value: (property) => property.priceLabel },
  { label: "Amenities", value: (property) => property.features.join(", ") },
];

function ComparePage() {
  const { compare, toggleCompare } = useClientLists();
  const listings = compare
    .map((slug) => properties.find((property) => property.slug === slug))
    .filter((property) => property !== undefined);

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Compare"
        title="Look at properties side by side"
        lede="Add up to three properties, then compare the area, type, and amenities."
      />
      <section className="bg-neutral-100 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          {listings.length > 0 ? (
            <div className="overflow-x-auto bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="w-32 p-4 font-medium uppercase tracking-[0.18em] text-neutral-500"> </th>
                    {listings.map((property) => (
                      <th key={property.slug} className="p-4 align-top font-normal">
                        <Link to="/properties/$slug" params={{ slug: property.slug }} className="block">
                          <img
                            src={property.images[0].src}
                            alt=""
                            className="aspect-[16/10] w-full object-cover"
                          />
                          <span className="mt-3 block font-display text-2xl">{property.title}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleCompare(property.slug)}
                          className="mt-3 uppercase tracking-[0.16em] underline"
                        >
                          Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="border-b border-neutral-200 align-top">
                      <th className="p-4 font-medium uppercase tracking-[0.16em] text-neutral-500">{row.label}</th>
                      {listings.map((property) => (
                        <td key={property.slug} className="p-4 leading-relaxed text-neutral-700">
                          {row.value(property)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="max-w-xl text-lg leading-relaxed text-neutral-700">
              Choose two or three properties to compare.{" "}
              <Link to="/properties" className="underline">
                Browse properties
              </Link>
              .
            </p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
