export type Property = {
  slug: string;
  title: string;
  area: string;
  category: string;
  priceLabel: string;
  summary: string;
  description: string[];
  facts: { label: string; value: string }[];
  features: string[];
  images: { src: string; alt: string }[];
};

export const properties: Property[] = [
  {
    slug: "karen-family-villa",
    title: "Family villa in Karen",
    area: "Karen",
    category: "Mid to High-End Residential",
    priceLabel: "Price on request",
    summary:
      "A private family villa with a garden and covered outdoor living, in one of Nairobi's most established neighborhoods.",
    description: [
      "A quiet villa for a family who want space, a garden, and a home that can be looked after while they are abroad.",
      "Before any commitment, SoldBySharon checks title, access, and the condition of the property, then stays with you through the purchase.",
    ],
    facts: [
      { label: "Type", value: "Villa" },
      { label: "Area", value: "Karen" },
      { label: "Category", value: "Residential" },
      { label: "Price", value: "Price on request" },
    ],
    features: ["Private garden", "Covered veranda", "Family home", "Established neighborhood"],
    images: [
      {
        src: "/images/hero-estate.jpg",
        alt: "A villa with a pool and garden at dusk",
      },
      {
        src: "/images/areas-residential.jpg",
        alt: "A villa with a terracotta roof and garden at sunset",
      },
    ],
  },
  {
    slug: "westlands-office",
    title: "Office building in Westlands",
    area: "Westlands",
    category: "Commercial Properties",
    priceLabel: "Price on request",
    summary:
      "A contemporary office building on a tree-lined street, for an investor or a business that wants a Westlands address.",
    description: [
      "Glass offices with street frontage, suited to a business occupant or an investor looking for a commercial holding in Westlands.",
      "We review the building, the tenancy position, and the ownership documents before you decide.",
    ],
    facts: [
      { label: "Type", value: "Office building" },
      { label: "Area", value: "Westlands" },
      { label: "Category", value: "Commercial" },
      { label: "Price", value: "Price on request" },
    ],
    features: ["Street frontage", "Office floors", "Tree-lined setting", "Investor or occupier"],
    images: [
      {
        src: "/images/areas-commercial.jpg",
        alt: "A glass office building on a tree-lined street",
      },
    ],
  },
  {
    slug: "kitengela-residential-plot",
    title: "Residential plot in Kitengela",
    area: "Kitengela",
    category: "Residential Land",
    priceLabel: "Price on request",
    summary:
      "An open plot in a growing suburb, for a home you build yourself or a longer hold.",
    description: [
      "Open land with red soil and scattered trees, in a suburb where many diaspora clients buy to build.",
      "We confirm the plot, the access, and the title before you pay, and we can stay on to coordinate the build.",
    ],
    facts: [
      { label: "Type", value: "Residential plot" },
      { label: "Area", value: "Kitengela" },
      { label: "Category", value: "Land" },
      { label: "Price", value: "Price on request" },
    ],
    features: ["Open plot", "Build or hold", "Growing suburb", "Title checked before you pay"],
    images: [
      {
        src: "/images/areas-residential-land.jpg",
        alt: "An open residential plot with acacia trees and red soil",
      },
    ],
  },
  {
    slug: "mombasa-road-development-land",
    title: "Development land on Mombasa Road",
    area: "Mombasa Road",
    category: "Commercial Land",
    priceLabel: "Price on request",
    summary:
      "Open land on a major Nairobi corridor, for development, income, or a longer commercial hold.",
    description: [
      "A wide parcel beside a highway corridor, with the city in view. It suits a client planning a commercial project or adding land to a portfolio.",
      "SoldBySharon handles the site questions, the professionals, and the reporting, including while you are outside Kenya.",
    ],
    facts: [
      { label: "Type", value: "Commercial land" },
      { label: "Area", value: "Mombasa Road" },
      { label: "Category", value: "Land" },
      { label: "Price", value: "Price on request" },
    ],
    features: ["Highway corridor", "Development land", "Portfolio holding", "On-the-ground coordination"],
    images: [
      {
        src: "/images/areas-commercial-land.jpg",
        alt: "Open land beside a highway, with a distant city skyline",
      },
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
