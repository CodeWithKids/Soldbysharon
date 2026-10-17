import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { pageMeta } from "@/lib/page-meta";
import { getProperty, properties } from "@/lib/properties";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return property;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(`/properties/${loaderData.slug}`, loaderData.title, loaderData.summary)
      : pageMeta("/properties", "Property", "Property details from Sold by Sharon."),
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const property = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);
  const image = property.images[activeImage] ?? property.images[0];
  const others = properties.filter((item) => item.slug !== property.slug);

  return (
    <SiteLayout>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden px-6 pb-12 pt-32 text-white md:px-10">
        <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full max-w-6xl">
          <Link to="/properties" className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            All properties
          </Link>
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-white/70">
            {property.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-normal leading-tight sm:text-6xl">
            {property.title}
          </h1>
          <p className="mt-3 text-white/85">{property.area}</p>
        </div>
      </section>

      {property.images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto bg-neutral-950 px-6 py-4 md:px-10">
          {property.images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show photo ${index + 1} of ${property.title}`}
              aria-pressed={index === activeImage}
              className={`shrink-0 border-2 ${index === activeImage ? "border-white" : "border-transparent"}`}
            >
              <img src={item.src} alt="" className="h-20 w-32 object-cover" />
            </button>
          ))}
        </div>
      ) : null}

      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.4fr_0.7fr]">
          <div>
            <dl className="grid grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-4">
              {property.facts.map((fact) => (
                <div key={fact.label} className="bg-white px-4 py-5">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl font-normal">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 space-y-4 leading-relaxed text-neutral-700">
              {property.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-12 font-display text-3xl font-normal">Property details</h2>
            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li key={feature} className="border-b border-neutral-200 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit border border-neutral-200 p-8 lg:sticky lg:top-28">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">Price</p>
            <p className="mt-3 font-display text-3xl font-normal">{property.priceLabel}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Ask for the price, the title position, and a viewing. We reply with a clear next step.
            </p>
            <Link
              to="/contact"
              search={{ property: property.slug }}
              className="mt-8 inline-flex w-full items-center justify-center border border-neutral-950 px-6 py-4 text-sm tracking-wide transition hover:bg-neutral-950 hover:text-white"
            >
              Enquire about this property
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-normal">Other properties</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to="/properties/$slug" params={{ slug: item.slug }} className="group block">
                  <img
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">{item.area}</p>
                  <h3 className="mt-1 font-display text-2xl font-normal group-hover:underline">{item.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
