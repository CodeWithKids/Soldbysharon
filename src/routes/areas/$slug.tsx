import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { getArea, getCategoriesForArea } from "@/lib/areas";
import { pageMeta } from "@/lib/page-meta";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }) => {
    const area = getArea(params.slug);
    if (!area) throw notFound();
    const categories = getCategoriesForArea(area.name).map((category) => ({
      id: category.id,
      index: category.index,
      title: category.title,
      description: category.description,
      image: category.image,
      count: properties.filter((property) => property.category === category.title).length,
    }));
    return { area, categories };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(
          `/areas/${loaderData.area.slug}`,
          loaderData.area.name,
          `Homes, commercial space, and land in ${loaderData.area.name}. Choose a category to see the properties.`,
        )
      : pageMeta("/areas", "Areas", "Properties across Nairobi and its outskirts."),
  component: AreaPropertiesPage,
});

function AreaPropertiesPage() {
  const { area, categories } = Route.useLoaderData();
  const cover = categories[0]?.image ?? "/images/areas-residential-land.jpg";

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="All of Nairobi and Its Outskirts"
        title={area.name}
        lede="Choose a category to see the properties."
        image={cover}
      />
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link to="/areas" activeOptions={{ exact: true }} className="text-sm uppercase tracking-[0.22em] underline">
            All areas
          </Link>
          <ul className="mt-10 grid gap-px bg-neutral-200 sm:grid-cols-2">
            {categories.map((category) => (
              <li key={category.id} className="bg-white">
                <Link
                  to="/areas/$slug/$category"
                  params={{ slug: area.slug, category: category.id }}
                  className="group block h-full"
                >
                  <img src={category.image} alt="" className="aspect-[16/9] w-full object-cover" />
                  <div className="px-5 py-6">
                    <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-400">{category.index}</p>
                    <h2 className="mt-2 font-display text-3xl font-normal group-hover:underline">{category.title}</h2>
                    <p className="mt-3 leading-relaxed text-neutral-600">{category.description}</p>
                    <p className="mt-4 text-sm uppercase tracking-[0.22em] underline">
                      {category.count} {category.count === 1 ? "property" : "properties"}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
