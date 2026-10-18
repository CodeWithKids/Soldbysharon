import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { areaSlug, propertyCategories } from "@/lib/areas";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/areas/")({
  component: AreasPage,
  head: () =>
    pageMeta(
      "/areas",
      "Areas",
      "From the heart of Nairobi to the fast-growing outskirts, SoldBySharon covers the full property landscape.",
    ),
});

const categories = propertyCategories;

function AreasPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Areas We Cover"
        title="All of Nairobi and Its Outskirts"
        image="/images/areas-residential-land.jpg"
      />

      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            Mid to High-End Properties and Land
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
            From the heart of Nairobi to the fast-growing outskirts, SoldBySharon covers the full
            property landscape—so you can invest wherever opportunity meets your goals.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-neutral-600">
            Whether you are looking for a city apartment, suburban family home, commercial space, or
            land for development, we bring you verified options across Nairobi and beyond.
          </p>
          <nav className="mt-12 grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4" aria-label="Property categories">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="bg-white px-5 py-5 transition hover:bg-neutral-50"
              >
                <span className="text-[11px] font-medium tracking-[0.28em] text-neutral-400">
                  {category.index}
                </span>
                <span className="mt-2 block font-display text-xl font-normal">{category.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {categories.map((category, index) => (
        <section id={category.id} key={category.id} className="scroll-mt-24 border-t border-neutral-200">
          <div className="grid lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <img
                src={category.image}
                alt={category.imageAlt}
                width={1280}
                height={720}
                className="h-full min-h-[280px] w-full object-cover lg:min-h-[680px]"
              />
            </div>
            <div className="flex flex-col justify-center bg-white px-6 py-14 md:px-12 lg:px-16">
              <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-400">{category.index}</p>
              <h2 className="mt-3 font-display text-4xl font-normal leading-tight sm:text-5xl">
                {category.title}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-neutral-600">{category.description}</p>
              <Link
                to="/properties/$slug"
                params={{ slug: category.propertySlug }}
                className="mt-6 inline-block text-sm uppercase tracking-[0.22em] underline"
              >
                View property
              </Link>
              <ul className="mt-8 grid grid-cols-2 gap-x-8">
                {category.areas.map((area) => (
                  <li key={area} className="border-b border-neutral-200 py-3 font-display text-lg font-normal">
                    <Link to="/areas/$slug" params={{ slug: areaSlug(area) }} className="hover:underline">
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden px-6 py-24 text-center text-white md:py-32">
        <img
          src="/images/areas-commercial-land.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <p className="font-display text-5xl font-normal sm:text-6xl">And more</p>
          <Link
            to="/contact"
            search={{ property: undefined }}
            className="mt-8 inline-flex items-center justify-center border border-white/80 px-8 py-4 text-sm tracking-wide transition hover:bg-white hover:text-neutral-950"
          >
            Ask about an area
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
