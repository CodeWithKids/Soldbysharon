export const areaNames = [
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
] as const;

export function areaSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getArea(slug: string) {
  const name = areaNames.find((area) => areaSlug(area) === slug);
  return name ? { name, slug: areaSlug(name) } : undefined;
}

export const propertyCategories = [
  {
    id: "residential",
    index: "01",
    title: "Mid to High-End Residential",
    description:
      "Premium apartments, villas, townhouses, and family homes in Nairobi's most sought-after neighborhoods.",
    image: "/images/areas-residential.jpg",
    imageAlt: "A villa with a terracotta roof and garden at sunset",
    propertySlug: "karen-family-villa",
    areas: [
      "Kilimani",
      "Lavington",
      "Kileleshwa",
      "Riverside",
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
    ],
  },
  {
    id: "commercial",
    index: "02",
    title: "Commercial Properties",
    description: "Office spaces, retail units, and mixed-use developments for investors and businesses.",
    image: "/images/areas-commercial.jpg",
    imageAlt: "A glass office building on a tree-lined street",
    propertySlug: "westlands-office",
    areas: ["Upper Hill", "Westlands", "Kilimani", "Parklands", "Mombasa Road"],
  },
  {
    id: "residential-land",
    index: "03",
    title: "Residential Land",
    description:
      "Verified plots in prime and emerging suburbs—ideal for building your dream home or long-term investment.",
    image: "/images/areas-residential-land.jpg",
    imageAlt: "An open residential plot with acacia trees and red soil",
    propertySlug: "kitengela-residential-plot",
    areas: [
      "Karen",
      "Runda",
      "Muthaiga",
      "Kiambu Road",
      "Syokimau",
      "Kitengela",
      "Rongai",
      "Thika Road",
      "Athi River",
      "Embakasi",
    ],
  },
  {
    id: "commercial-land",
    index: "04",
    title: "Commercial Land",
    description:
      "Strategically located parcels for development, income-generating projects, and portfolio growth.",
    image: "/images/areas-commercial-land.jpg",
    imageAlt: "Open land beside a highway, with a distant city skyline",
    propertySlug: "mombasa-road-development-land",
    areas: ["Mombasa Road", "Athi River", "Thika Road", "Embakasi", "Kitengela", "Syokimau", "Upper Hill"],
  },
] as const;

export function getCategoriesForArea(area: string) {
  return propertyCategories.filter((category) =>
    (category.areas as readonly string[]).includes(area),
  );
}
