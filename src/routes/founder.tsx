import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/founder")({
  component: FounderPage,
  head: () =>
    pageMeta(
      "/founder",
      "Founder",
      "Sharon is a seasoned real estate professional with over 10 years of experience across property sales, advisory, and real estate development.",
    ),
});

const expertise = [
  "Diaspora property investment advisory",
  "Property due diligence and risk management",
  "Development and project coordination",
  "Portfolio growth and long-term wealth strategies",
];

function FounderPage() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Founder"
        title="Sharon — Founder & Lead Property Advisor"
        image="/images/areas-residential.jpg"
      />
      <section className="grid lg:grid-cols-2">
        <img
          src="/images/hero-estate.jpg"
          alt="A premium residence in Kenya"
          className="h-full min-h-[360px] w-full object-cover"
        />
        <div className="bg-neutral-950 px-6 py-16 text-white md:px-12 md:py-20">
          <div className="space-y-4 leading-relaxed text-white/85">
            <p>
              Sharon is a seasoned real estate professional with over 10 years of experience across
              property sales, advisory, and real estate development.
            </p>
            <p>
              Having worked with a leading premium real estate firm in Kenya for over three years,
              she has built a strong track record in high-value transactions and client
              trust—particularly with international and diaspora clients.
            </p>
            <p>
              With a Master's degree in Project Management, Sharon brings structure, professionalism,
              and strategic oversight to every client engagement. She is passionate about helping
              diaspora clients invest back home with confidence, clarity, and peace of mind.
            </p>
          </div>
          <h2 className="mt-10 font-display text-2xl font-normal">Her expertise includes:</h2>
          <ul className="mt-6 grid gap-3">
            {expertise.map((item) => (
              <li key={item} className="border-b border-white/15 py-3 text-sm text-white/90">
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            search={{ property: undefined }}
            className="mt-10 inline-flex border border-white/80 px-6 py-4 text-sm tracking-wide transition hover:bg-white hover:text-neutral-950"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
