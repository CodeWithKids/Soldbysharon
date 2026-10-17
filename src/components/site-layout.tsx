import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Areas", to: "/areas" },
  { label: "Properties", to: "/properties" },
  { label: "Founder", to: "/founder" },
  { label: "Contact", to: "/contact" },
] as const;

type NavTo = (typeof navLinks)[number]["to"];

function isCurrent(pathname: string, to: NavTo) {
  if (to === "/properties") return pathname.startsWith("/properties");
  return pathname === to;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bar = scrolled ? "bg-white text-neutral-950 shadow-sm" : "text-white";
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4, 6);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${bar}`}>
        <div className="relative mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {leftLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                aria-current={isCurrent(pathname, link.to) ? "page" : undefined}
                className={`text-[11px] font-medium uppercase tracking-[0.22em] transition hover:opacity-100 ${
                  isCurrent(pathname, link.to) ? "underline underline-offset-8" : "opacity-80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 top-0 -translate-x-1/2 bg-white px-2 pb-2 pt-1 shadow-sm"
          >
            <img
              src="/logo.jpg"
              alt="Sold by Sharon"
              width={512}
              height={512}
              className="h-14 w-14 object-contain md:h-16 md:w-16"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {rightLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                aria-current={isCurrent(pathname, link.to) ? "page" : undefined}
                className={`text-[11px] font-medium uppercase tracking-[0.22em] transition hover:opacity-100 ${
                  isCurrent(pathname, link.to) ? "underline underline-offset-8" : "opacity-80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              search={{ property: undefined }}
              className={`border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition ${
                scrolled
                  ? "border-neutral-950 hover:bg-neutral-950 hover:text-white"
                  : "border-white/80 hover:bg-white hover:text-neutral-950"
              }`}
            >
              Contact
            </Link>
          </div>

          <Link
            to="/contact"
            search={{ property: undefined }}
            className="text-[11px] font-medium uppercase tracking-[0.22em] lg:hidden"
          >
            Contact
          </Link>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-neutral-950 text-white">
          <div className="flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/logo.jpg"
                alt="Sold by Sharon"
                className="h-12 w-12 bg-white object-contain"
              />
            </Link>
            <span className="w-10" />
          </div>
          <nav className="mx-auto flex max-w-3xl flex-col gap-5 px-8 pt-8" aria-label="Menu">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                aria-current={isCurrent(pathname, link.to) ? "page" : undefined}
                className={`font-display text-4xl font-normal tracking-tight hover:text-neutral-300 sm:text-5xl ${
                  isCurrent(pathname, link.to) ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main id="content">{children}</main>

      <footer className="border-t border-neutral-200 bg-white px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo.jpg" alt="Sold by Sharon" className="h-20 w-20 object-contain" />
            <p className="mt-4 text-sm text-neutral-600">Bringing you home, securely.</p>
          </div>
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              Looking to
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/properties" className="hover:underline">
                  Buy property
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Manage a property
                </Link>
              </li>
              <li>
                <Link to="/areas" className="hover:underline">
                  Explore areas
                </Link>
              </li>
              <li>
                <Link to="/contact" search={{ property: undefined }} className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              About
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: true }}
                    aria-current={isCurrent(pathname, link.to) ? "page" : undefined}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              Connect
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>
                <a href="mailto:info@soldbysharon.co.ke" className="hover:underline">
                  info@soldbysharon.co.ke
                </a>
              </li>
              <li>+254 XXX XXX XXX</li>
              <li>Nairobi, Kenya</li>
              <li>
                <a href="https://www.soldbysharon.co.ke" className="hover:underline">
                  www.soldbysharon.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Sold by Sharon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export function PageBanner({
  eyebrow,
  title,
  lede,
  image = "/images/hero-estate.jpg",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden px-6 pb-14 pt-32 text-white md:px-10">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/70">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-normal leading-tight sm:text-6xl">
          {title}
        </h1>
        {lede ? <p className="mt-4 max-w-xl text-lg text-white/80">{lede}</p> : null}
      </div>
    </section>
  );
}
