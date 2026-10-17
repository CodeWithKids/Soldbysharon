import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site-layout";
import { pageMeta } from "@/lib/page-meta";
import { getProperty } from "@/lib/properties";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    property: typeof search.property === "string" && search.property ? search.property : undefined,
  }),
  component: ContactPage,
  head: () =>
    pageMeta(
      "/contact",
      "Contact",
      "Tell Sold by Sharon what you are looking for in Kenya. We reply with a clear next step.",
    ),
});

const fieldClass =
  "h-12 w-full border border-neutral-300 bg-white px-3 text-sm outline-none transition focus:border-neutral-900";

function ContactPage() {
  const { property: propertySlug } = Route.useSearch();
  const property = propertySlug ? getProperty(propertySlug) : undefined;

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Contact"
        title="Begin your property journey"
        lede="Tell us what you are looking for. We reply with a clear next step, not a pile of listings."
        image="/images/areas-commercial-land.jpg"
      />
      <section className="bg-neutral-100 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <dl className="space-y-8 self-center text-sm">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">Phone</dt>
              <dd className="mt-2 font-display text-2xl font-normal text-neutral-950">+254 XXX XXX XXX</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">Email</dt>
              <dd className="mt-2 font-display text-2xl font-normal">
                <a href="mailto:info@soldbysharon.co.ke" className="underline">
                  info@soldbysharon.co.ke
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">Studio</dt>
              <dd className="mt-2 font-display text-2xl font-normal text-neutral-950">Nairobi, Kenya</dd>
            </div>
          </dl>
          <form className="space-y-4 bg-white p-6 md:p-8" onSubmit={(event) => event.preventDefault()}>
            {property ? (
              <p className="text-sm text-neutral-600">
                You are asking about <span className="text-neutral-950">{property.title}</span>.
              </p>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block text-neutral-600">Full name</span>
                <input id="name" name="name" type="text" className={fieldClass} required />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-neutral-600">Email</span>
                <input id="email" name="email" type="email" className={fieldClass} required />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-2 block text-neutral-600">I am interested in</span>
              <select id="interest" name="interest" className={fieldClass} defaultValue="Buying a property">
                <option>Buying a property</option>
                <option>Property management</option>
                <option>Development support</option>
                <option>General advisory</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-neutral-600">Message</span>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${fieldClass} h-auto py-3`}
                defaultValue={
                  property
                    ? `I would like the details of ${property.title}, including the price and a viewing.`
                    : undefined
                }
              />
            </label>
            <button
              type="submit"
              className="h-12 w-full bg-neutral-950 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-neutral-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
