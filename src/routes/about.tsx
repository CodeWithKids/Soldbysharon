import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    pageMeta(
      "/about",
      "About",
      "SoldBySharon is a premium real estate and property advisory brand based in Kenya, dedicated to serving diaspora clients seeking secure, transparent, and high-value property investments back home.",
    ),
});

const values = [
  { title: "Integrity", description: "We do what is right, always" },
  { title: "Trust", description: "We protect our clients' investments and interests" },
  { title: "Excellence", description: "We deliver premium service and results" },
  { title: "Accountability", description: "We take full responsibility for execution" },
  { title: "Client-Centricity", description: "Your goals are our priority" },
];

const reasons = [
  { title: "Trust & Transparency", description: "Verified properties and clear processes" },
  { title: "On-the-Ground Representation", description: "Your reliable partner in Kenya" },
  { title: "End-to-End Service", description: "From purchase to management and beyond" },
  { title: "Premium Market Access", description: "Curated, high-quality investment opportunities" },
  { title: "Consistent Communication", description: "Regular updates, reports, and accountability" },
  { title: "Peace of Mind", description: "We handle everything—so you don't have to" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="About Us"
        title="Premium Real Estate Advisory for the Diaspora"
        image="/images/areas-residential.jpg"
      />
      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src="/images/hero-estate.jpg"
            alt="A premium residence in Kenya"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="space-y-4 text-lg leading-relaxed text-neutral-600">
            <p>
              SoldBySharon is a premium real estate and property advisory brand based in Kenya,
              dedicated to serving diaspora clients seeking secure, transparent, and high-value
              property investments back home.
            </p>
            <p>
              We understand the unique challenges of investing in property from abroad—distance,
              trust, and reliable execution. That's why we offer a seamless, end-to-end experience
              that goes beyond buying and selling. From sourcing verified opportunities to managing
              and protecting your investment, we act as your eyes, ears, and trusted partner on the
              ground.
            </p>
            <p>
              Our focus is simple: to help you invest confidently, build wealth, and stay connected
              to home—without the stress.
            </p>
            <Link to="/founder" className="inline-block pt-4 text-sm uppercase tracking-[0.22em] underline">
              Meet Sharon
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="border border-neutral-200 bg-white p-8">
            <h2 className="font-display text-3xl font-normal">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              To become the most trusted real estate partner for diaspora investors across Africa,
              delivering premium property solutions with global standards and local expertise.
            </p>
          </article>
          <article className="border border-neutral-200 bg-white p-8">
            <h2 className="font-display text-3xl font-normal">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              To simplify property ownership in Kenya for diaspora clients through trusted advisory,
              verified opportunities, and seamless management solutions that protect and grow their
              investments.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            Why SoldBySharon
          </p>
          <h2 className="mt-4 font-display text-4xl font-normal sm:text-5xl">
            Why Diaspora Clients Choose Us
          </h2>
          <ul className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <li key={reason.title} className="border border-neutral-200 p-6 transition hover:border-neutral-950">
                <h3 className="font-display text-xl font-normal">{reason.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{reason.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            Our Values
          </p>
          <h2 className="mt-4 font-display text-4xl font-normal sm:text-5xl">
            The Principles That Guide Us
          </h2>
          <ul className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <li key={value.title} className="border border-neutral-200 p-6 transition hover:border-neutral-950">
                <h3 className="font-display text-xl font-normal">{value.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
