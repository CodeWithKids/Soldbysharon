import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "SoldBySharon | Premium Real Estate Partner in Kenya" },
      {
        name: "description",
        content:
          "SoldBySharon helps diaspora clients buy, manage, and grow premium property investments in Kenya with verified opportunities and trusted on-the-ground support.",
      },
      {
        property: "og:title",
        content: "SoldBySharon | Premium Real Estate Partner in Kenya",
      },
      {
        property: "og:description",
        content:
          "Your trusted property partner in Kenya—wherever you are in the world. Verified properties, diaspora advisory, and end-to-end management.",
      },
      { property: "og:url", content: "https://www.soldbysharon.co.ke" },
    ],
  }),
});

const highlights = [
  {
    title: "Verified Property Acquisition",
    text: "High-quality, vetted homes, villas, townhouses, and land in prime locations.",
    to: "/properties",
    image: "/images/areas-residential.jpg",
  },
  {
    title: "End-to-End Property Management",
    text: "Inspections, maintenance, and reporting, as if the property were our own.",
    to: "/services",
    image: "/images/hero-estate.jpg",
  },
  {
    title: "All of Nairobi and Its Outskirts",
    text: "From the heart of Nairobi to the fast-growing outskirts, wherever opportunity meets your goals.",
    to: "/areas",
    image: "/images/areas-residential-land.jpg",
  },
] as const;

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative min-h-screen">
        <img
          src="/images/hero-estate.jpg"
          alt="A residence in Kenya at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/45" />

        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center text-white">
          <p className="text-[11px] font-medium uppercase tracking-[0.55em] text-white/80">Presents</p>
          <p className="mt-3 font-display text-4xl font-normal tracking-[0.18em] sm:text-5xl">KENYA</p>
          <h1 className="mt-10 max-w-4xl text-balance font-display text-3xl font-normal leading-tight sm:text-5xl">
            Your trusted property partner in Kenya
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            Find a home, a piece of land, or a commercial property — then let us look after it while
            you are anywhere in the world.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              search={{ property: undefined }}
              className="inline-flex flex-1 items-center justify-center gap-3 border border-white/80 px-6 py-4 text-sm tracking-wide transition hover:bg-white hover:text-neutral-950"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
              Begin your property journey
            </Link>
            <Link
              to="/properties"
              className="inline-flex flex-1 items-center justify-center border border-white/40 px-6 py-4 text-sm tracking-wide text-white/90 transition hover:border-white hover:bg-white hover:text-neutral-950"
            >
              View a property
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <Link key={item.title} to={item.to} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-5 font-display text-3xl font-normal group-hover:underline">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
                Properties
              </p>
              <h2 className="mt-4 font-display text-4xl font-normal sm:text-5xl">View a property</h2>
            </div>
            <Link to="/properties" className="text-sm uppercase tracking-[0.22em] underline">
              View property
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Open any property for the full details, then ask us about price, title, and a viewing.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {properties.map((property) => (
              <li key={property.slug}>
                <Link to="/properties/$slug" params={{ slug: property.slug }} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={property.images[0].src}
                      alt={property.images[0].alt}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                    {property.area}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-normal group-hover:underline">
                    {property.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{property.priceLabel}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/60">About Us</p>
            <h2 className="mt-4 font-display text-4xl font-normal leading-tight sm:text-5xl">
              Premium Real Estate Advisory for the Diaspora
            </h2>
          </div>
          <div>
            <p className="text-white/75">
              SoldBySharon is a premium real estate and property advisory brand based in Kenya,
              dedicated to serving diaspora clients seeking secure, transparent, and high-value
              property investments back home.
            </p>
            <Link to="/about" className="mt-6 inline-block text-sm uppercase tracking-[0.22em] underline">
              Read about us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
