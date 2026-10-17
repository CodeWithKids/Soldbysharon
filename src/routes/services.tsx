import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () =>
    pageMeta(
      "/services",
      "Services",
      "From discovery to development, SoldBySharon guides every step of your property journey in Kenya.",
    ),
});

const services = [
  {
    title: "Verified Property Acquisition",
    description:
      "We source and secure high-quality, vetted properties including luxury apartments, villas, townhouses, and land in prime locations—ensuring transparency and due diligence at every step.",
  },
  {
    title: "Diaspora Property Advisory",
    description:
      "Expert guidance tailored to clients abroad: safe acquisition, investment planning, legal processes, ownership structures, and market insights.",
    points: [
      "Safe and strategic property acquisition",
      "Investment planning and portfolio building",
      "Legal processes and ownership structures",
      "Market insights and risk assessment",
    ],
  },
  {
    title: "End-to-End Property Management",
    description:
      "We manage your property as if it were our own, with regular inspections, maintenance, fencing, construction, tenant management, and detailed reporting.",
    points: [
      "Regular inspections and maintenance",
      "Fencing, construction, and upgrades",
      "Tenant management (if applicable)",
      "Detailed reporting and updates",
    ],
  },
];

const specialisms = [
  {
    title: "Mid to High-End Residential",
    description:
      "Premium apartments, villas, townhouses, and family homes in Nairobi's most sought-after neighborhoods.",
    image: "/images/areas-residential.jpg",
    slug: "karen-family-villa",
  },
  {
    title: "Commercial Properties",
    description: "Office spaces, retail units, and mixed-use developments for investors and businesses.",
    image: "/images/areas-commercial.jpg",
    slug: "westlands-office",
  },
  {
    title: "Residential Land",
    description:
      "Verified plots in prime and emerging suburbs—ideal for building your dream home or long-term investment.",
    image: "/images/areas-residential-land.jpg",
    slug: "kitengela-residential-plot",
  },
  {
    title: "Commercial Land",
    description:
      "Strategically located parcels for development, income-generating projects, and portfolio growth.",
    image: "/images/areas-commercial-land.jpg",
    slug: "mombasa-road-development-land",
  },
];

const partners = [
  {
    title: "Property Lawyers",
    description: "Vetted conveyancing and real estate lawyers to safeguard every transaction.",
  },
  {
    title: "Architects",
    description: "Award-winning architects for bespoke residential and commercial design.",
  },
  {
    title: "Interior Designers",
    description: "Trusted interior designers to bring elegance and functionality to your space.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Core Services"
        title="Everything You Need to Invest with Confidence"
        lede="From discovery to development, we guide every step of your property journey."
        image="/images/areas-commercial.jpg"
      />

      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col border border-neutral-200 p-8 transition hover:border-neutral-950">
              <h2 className="font-display text-2xl font-normal">{service.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{service.description}</p>
              {service.points ? (
                <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                  {service.points.map((point) => (
                    <li key={point}>✓ {point}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="border border-neutral-200 bg-white p-8">
            <h2 className="font-display text-2xl font-normal">Development & Project Support</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              For clients looking to build or develop: feasibility studies, site analysis, contractor
              coordination, progress updates, and budget oversight.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>✓ Feasibility and site analysis</li>
              <li>✓ Contractor coordination</li>
              <li>✓ Project monitoring and progress updates</li>
              <li>✓ Budget and timeline oversight</li>
            </ul>
          </article>
          <article className="border border-neutral-200 bg-white p-8">
            <h2 className="font-display text-2xl font-normal">Trusted Network Access</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              We connect you with vetted professionals including property lawyers, surveyors,
              architects, and contractors.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            What We Specialise In
          </p>
          <h2 className="mt-4 font-display text-4xl font-normal sm:text-5xl">
            Mid to High-End Properties and Land
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            We focus on premium residential and commercial opportunities—curated for discerning
            clients seeking value, quality, and long-term returns.
          </p>
          <ul className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {specialisms.map((item) => (
              <li key={item.title}>
                <Link
                  to="/properties/$slug"
                  params={{ slug: item.slug }}
                  className="group block h-full border border-neutral-200 transition hover:border-neutral-950"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-normal">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                    <span className="mt-4 inline-block text-sm uppercase tracking-[0.22em] underline">
                      View property
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            Trusted Partner Network
          </p>
          <h2 className="mt-4 font-display text-4xl font-normal sm:text-5xl">
            Access to Vetted Service Providers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Beyond property, we connect you with a network of trusted professionals to support every
            stage of ownership and development.
          </p>
          <ul className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {partners.map((partner) => (
              <li key={partner.title} className="border border-neutral-200 bg-white p-6">
                <h3 className="font-display text-xl font-normal">{partner.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{partner.description}</p>
              </li>
            ))}
          </ul>
          <Link to="/contact" search={{ property: undefined }} className="mt-12 inline-block text-sm uppercase tracking-[0.22em] underline">
            Tell us what you need
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
