import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Globe,
  Check,
  Building2,
  Home,
  Shield,
  Users,
  Award,
  Briefcase,
  ArrowRight,
  Landmark,
  HardHat,
  FileCheck,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Market", href: "#market" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Home,
    title: "Verified Property Acquisition",
    description:
      "We source and secure high-quality, vetted properties including luxury apartments, villas, townhouses, and land in prime locations—ensuring transparency and due diligence at every step.",
  },
  {
    icon: Globe,
    title: "Diaspora Property Advisory",
    description:
      "Expert guidance tailored to clients abroad: safe acquisition, investment planning, legal processes, ownership structures, and market insights.",
    bullets: [
      "Safe and strategic property acquisition",
      "Investment planning and portfolio building",
      "Legal processes and ownership structures",
      "Market insights and risk assessment",
    ],
  },
  {
    icon: Shield,
    title: "End-to-End Property Management",
    description:
      "We manage your property as if it were our own, with regular inspections, maintenance, fencing, construction, tenant management, and detailed reporting.",
    bullets: [
      "Regular inspections and maintenance",
      "Fencing, construction, and upgrades",
      "Tenant management (if applicable)",
      "Detailed reporting and updates",
    ],
  },
  {
    icon: Building2,
    title: "Development & Project Support",
    description:
      "For clients looking to build or develop: feasibility studies, site analysis, contractor coordination, progress updates, and budget oversight.",
    bullets: [
      "Feasibility and site analysis",
      "Contractor coordination",
      "Project monitoring and progress updates",
      "Budget and timeline oversight",
    ],
  },
  {
    icon: Users,
    title: "Trusted Network Access",
    description:
      "We connect you with vetted professionals including property lawyers, surveyors, architects, and contractors.",
  },
];

const coverageAreas = [
  "Kilimani",
  "Lavington",
  "Kileleshwa",
  "Riverside",
  "Upper Hill",
  "Karen",
  "Runda",
  "Kitisuru",
  "Westlands",
  "Parklands",
  "Muthaiga",
  "Spring Valley",
  "Loresho",
  "Rosslyn",
  "Gigiri",
  "Embakasi",
  "Syokimau",
  "Kitengela",
  "Rongai",
  "Thika Road",
  "Kiambu Road",
  "Mombasa Road",
  "Athi River",
  "And more",
];

const reasons = [
  { title: "Trust & Transparency", description: "Verified properties and clear processes" },
  { title: "On-the-Ground Representation", description: "Your reliable partner in Kenya" },
  { title: "End-to-End Service", description: "From purchase to management and beyond" },
  { title: "Premium Market Access", description: "Curated, high-quality investment opportunities" },
  {
    title: "Consistent Communication",
    description: "Regular updates, reports, and accountability",
  },
  { title: "Peace of Mind", description: "We handle everything—so you don't have to" },
];

const values = [
  { title: "Integrity", description: "We do what is right, always" },
  { title: "Trust", description: "We protect our clients' investments and interests" },
  { title: "Excellence", description: "We deliver premium service and results" },
  { title: "Accountability", description: "We take full responsibility for execution" },
  { title: "Client-Centricity", description: "Your goals are our priority" },
];

const founderExpertise = [
  "Diaspora property investment advisory",
  "Property due diligence and risk management",
  "Development and project coordination",
  "Portfolio growth and long-term wealth strategies",
];

const targetMarket = [
  {
    title: "Mid to High-End Residential",
    description:
      "Premium apartments, villas, townhouses, and family homes in Nairobi's most sought-after neighborhoods.",
  },
  {
    title: "Commercial Properties",
    description:
      "Office spaces, retail units, and mixed-use developments for investors and businesses.",
  },
  {
    title: "Residential Land",
    description:
      "Verified plots in prime and emerging suburbs—ideal for building your dream home or long-term investment.",
  },
  {
    title: "Commercial Land",
    description:
      "Strategically located parcels for development, income-generating projects, and portfolio growth.",
  },
];

const partnerServices = [
  {
    title: "Property Lawyers",
    description:
      "Vetted conveyancing and real estate lawyers to safeguard every transaction.",
  },
  {
    title: "Architects",
    description:
      "Award-winning architects for bespoke residential and commercial design.",
  },
  {
    title: "Interior Designers",
    description:
      "Trusted interior designers to bring elegance and functionality to your space.",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 shadow-sm backdrop-blur-md"
            : "bg-primary/40 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 flex h-24 items-center justify-between text-primary-foreground">
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="flex items-center md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            <img
              src="/logo.jpg"
              alt="Sold by Sharon"
              width={512}
              height={512}
              className="h-16 w-16 rounded-md bg-white object-contain sm:h-20 sm:w-20"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="border-t border-primary-foreground/10 bg-primary md:hidden">
            <nav className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/80 transition-colors hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-estate.jpg"
            alt="Luxury villa in Kenya at sunset"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/55 to-primary/80" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-24 text-primary-foreground">
          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-accent">
              SoldBySharon Properties · Kenya
            </p>
            <h1 className="text-balance font-display text-5xl font-normal leading-[1.05] sm:text-6xl lg:text-7xl">
              Your Trusted <span className="italic text-accent">Property</span> Partner
            </h1>
            <div className="mt-8 h-px w-24 bg-accent" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Verified properties, diaspora advisory, and end-to-end management—wherever
              you are in the world, SoldBySharon brings you home, securely.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-none bg-accent px-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-foreground hover:bg-accent/90"
              >
                <a href="#contact">
                  Start Your Investment <ArrowRight className="ml-3 h-4 w-4" />
                </a>
              </Button>
              <a
                href="#services"
                className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-foreground/90 border-b border-accent pb-1 hover:text-accent"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-background">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
                Premium Real Estate Advisory for the Diaspora
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                SoldBySharon is a premium real estate and property advisory brand based in Kenya,
                dedicated to serving diaspora clients seeking secure, transparent, and high-value
                property investments back home.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We understand the unique challenges of investing in property from abroad—distance,
                trust, and reliable execution. That's why we offer a seamless, end-to-end experience
                that goes beyond buying and selling. From sourcing verified opportunities to
                managing and protecting your investment, we act as your eyes, ears, and trusted
                partner on the ground.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our focus is simple: to help you invest confidently, build wealth, and stay
                connected to home—without the stress.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/images/hero-estate.jpg"
                  alt="Premium Kenyan property"
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl bg-card p-6 shadow-lg lg:block">
                <p className="font-display text-3xl font-semibold text-foreground">10+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years of real estate experience across sales, advisory, and development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary/50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/60 bg-card">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To become the most trusted real estate partner for diaspora investors across
                  Africa, delivering premium property solutions with global standards and local
                  expertise.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/60 bg-card">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Landmark className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To simplify property ownership in Kenya for diaspora clients through trusted
                  advisory, verified opportunities, and seamless management solutions that protect
                  and grow their investments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-background">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Core Services
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
              Everything You Need to Invest with Confidence
            </h2>
            <p className="mt-4 text-muted-foreground">
              From discovery to development, we guide every step of your property journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-border/60 bg-card transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  {service.bullets && (
                    <ul className="mt-4 space-y-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Focus */}
      <section id="market" className="section-padding bg-secondary/50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {coverageAreas.map((area) => (
                  <Card key={area} className="border-border/60 bg-card text-center">
                    <CardContent className="p-4">
                      <MapPin className="mx-auto h-4 w-4 text-accent" />
                      <p className="mt-2 font-display text-sm font-semibold">{area}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Areas We Cover
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
                All of Nairobi & Its Outskirts
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                From the heart of Nairobi to the fast-growing outskirts, SoldBySharon covers the
                full property landscape—so you can invest wherever opportunity meets your goals.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Whether you are looking for a city apartment, suburban family home, commercial
                space, or land for development, we bring you verified options across Nairobi and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="section-padding bg-background">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              What We Specialise In
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
              Mid to High-End Properties & Land
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We focus on premium residential and commercial opportunities—curated for discerning
              clients seeking value, quality, and long-term returns.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {targetMarket.map((item) => (
              <Card key={item.title} className="border-border/60 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="section-padding bg-secondary/50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Trusted Partner Network
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
              Access to Vetted Service Providers
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Beyond property, we connect you with a network of trusted professionals to support
              every stage of ownership and development.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {partnerServices.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/60 bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why SoldBySharon
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
              Why Diaspora Clients Choose Us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const icons = [Shield, Users, Award, Briefcase, MessageCircle, FileCheck];
              const Icon = icons[index % icons.length];
              return (
                <div key={reason.title} className="flex gap-4 rounded-xl bg-secondary/50 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{reason.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="section-padding bg-primary text-primary-foreground">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Founder</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
                Sharon — Founder & Lead Property Advisor
              </h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/85">
                Sharon is a seasoned real estate professional with over 10 years of experience
                across property sales, advisory, and real estate development.
              </p>
              <p className="mt-4 leading-relaxed text-primary-foreground/85">
                Having worked with a leading premium real estate firm in Kenya for over three years,
                she has built a strong track record in high-value transactions and client
                trust—particularly with international and diaspora clients.
              </p>
              <p className="mt-4 leading-relaxed text-primary-foreground/85">
                With a Master's degree in Project Management, Sharon brings structure,
                professionalism, and strategic oversight to every client engagement. She is
                passionate about helping diaspora clients invest back home with confidence, clarity,
                and peace of mind.
              </p>

              <div className="mt-8">
                <p className="font-display text-lg font-semibold">Her expertise includes:</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {founderExpertise.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Values</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-border/60 bg-card text-center transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-secondary/50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
                Let's Start Your Property Journey
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Ready to invest in Kenya? Reach out for a confidential consultation. We'll listen to
                your goals, answer your questions, and outline a clear path forward.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+254 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">hello@soldbysharon.co.ke</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <p className="font-medium text-foreground">www.soldbysharon.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-border/60 bg-card">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold">Send a Message</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>
                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Buying a property</option>
                      <option>Property management</option>
                      <option>Development support</option>
                      <option>General advisory</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your goals..."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <a href="#" className="flex items-center">
              <img
                src="/logo.jpg"
                alt="Sold by Sharon"
                width={512}
                height={512}
                className="h-24 w-24 object-contain"
                loading="lazy"
              />
            </a>
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>&copy; {new Date().getFullYear()} SoldBySharon. All rights reserved.</p>
            <p className="text-center md:text-right">Bringing You Home, Securely.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
