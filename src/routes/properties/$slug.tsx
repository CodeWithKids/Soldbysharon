import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { rememberProperty, useClientLists } from "@/lib/client-lists";
import { pageMeta } from "@/lib/page-meta";
import { areaSlug, propertyCategories } from "@/lib/areas";
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
  const [shareNote, setShareNote] = useState<string | null>(null);
  const { saved, compare, recent, toggleSaved, toggleCompare } = useClientLists();
  useEffect(() => {
    rememberProperty(property.slug);
  }, [property.slug]);
  const image = property.images[activeImage] ?? property.images[0];
  const category = propertyCategories.find((item) => item.title === property.category);
  const isLand = property.category.includes("Land");
  const roomLabels = isLand
    ? ["Another view", "Access"]
    : ["Living room", "Bedroom", "Kitchen", "Bathroom", "Office floor"];
  const rooms = property.images.filter((item) => item.label && roomLabels.includes(item.label));
  const others = properties
    .filter((item) => item.slug !== property.slug && item.category === property.category)
    .slice(0, 3);
  const recentlyViewed = recent
    .filter((slug) => slug !== property.slug)
    .map((slug) => properties.find((item) => item.slug === slug))
    .filter((item) => item !== undefined)
    .slice(0, 3);

  async function shareProperty() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: property.title, text: property.summary, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setShareNote("Copied");
    } catch {
      setShareNote(url);
    }
  }

  return (
    <SiteLayout>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden px-6 pb-12 pt-32 text-white md:px-10">
        <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full max-w-6xl">
          {category ? (
            <Link
              to="/areas/$slug/$category"
              params={{ slug: areaSlug(property.area), category: category.id }}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80"
            >
              {property.category}
            </Link>
          ) : (
            <Link to="/properties" className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              All properties
            </Link>
          )}
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-white/70">{image.label}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-normal leading-tight sm:text-6xl">
            {property.title}
          </h1>
          <Link
            to="/areas/$slug"
            params={{ slug: areaSlug(property.area) }}
            className="mt-3 inline-block text-white/85 underline"
          >
            {property.area}
          </Link>
        </div>
      </section>

      {property.images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto bg-neutral-950 px-6 py-4 md:px-10">
          {property.images.map((item, index) => (
            <button
              key={`${item.src}-${item.label}`}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={item.label ? `Show ${item.label}` : `Show photo ${index + 1} of ${property.title}`}
              aria-pressed={index === activeImage}
              className={`shrink-0 border-2 ${index === activeImage ? "border-white" : "border-transparent"}`}
            >
              <img src={item.src} alt="" className="h-20 w-32 object-cover" />
              {item.label ? <span className="block px-1 py-1 text-[10px] tracking-wide text-white/80">{item.label}</span> : null}
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
            <h2 className="mt-12 font-display text-3xl font-normal">{isLand ? "Views" : "Rooms"}</h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {rooms.map((room) => (
                <li key={room.label}>
                  <button type="button" onClick={() => setActiveImage(property.images.indexOf(room))} className="block w-full text-left">
                    <img src={room.src} alt={room.alt} className="aspect-[16/10] w-full object-cover" />
                    <p className="mt-3 font-display text-2xl font-normal">{room.label}</p>
                    <p className="mt-1 text-sm text-neutral-600">{room.alt}</p>
                  </button>
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-3xl font-normal">Amenities</h2>
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
            <div className="mt-3 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => toggleSaved(property.slug)}
                aria-pressed={saved.includes(property.slug)}
                className="h-11 border border-neutral-300 text-xs uppercase tracking-[0.12em] hover:border-neutral-950"
              >
                {saved.includes(property.slug) ? "Saved" : "Save"}
              </button>
              <button
                type="button"
                onClick={() => toggleCompare(property.slug)}
                aria-pressed={compare.includes(property.slug)}
                disabled={!compare.includes(property.slug) && compare.length >= 3}
                className="h-11 border border-neutral-300 text-xs uppercase tracking-[0.12em] hover:border-neutral-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {compare.includes(property.slug) ? "Added" : "Compare"}
              </button>
              <button
                type="button"
                onClick={shareProperty}
                className="h-11 border border-neutral-300 text-xs uppercase tracking-[0.12em] hover:border-neutral-950"
              >
                {shareNote === "Copied" ? "Copied" : "Share"}
              </button>
            </div>
            {shareNote && shareNote !== "Copied" ? (
              <p className="mt-3 break-all text-sm text-neutral-600">{shareNote}</p>
            ) : null}
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Save it, compare up to three properties, or share the page. The enquiry asks for the price and a viewing.
            </p>
          </aside>
        </div>
      </section>

      {recentlyViewed.length > 0 ? (
        <section className="border-t border-neutral-200 bg-white px-6 py-16 md:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-normal">Recently viewed</h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
              {recentlyViewed.map((item) => (
                <li key={item.slug}>
                  <Link to="/properties/$slug" params={{ slug: item.slug }} className="group block">
                    <img src={item.images[0].src} alt={item.images[0].alt} className="aspect-[16/10] w-full object-cover" />
                    <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">{item.area}</p>
                    <h3 className="mt-1 font-display text-2xl font-normal group-hover:underline">{item.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

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
