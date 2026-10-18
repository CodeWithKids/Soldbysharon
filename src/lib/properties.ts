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
  images: { src: string; alt: string; label?: string }[];
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

const residentialImage = {
  src: "/images/areas-residential.jpg",
  alt: "A villa with a terracotta roof and garden at sunset",
};
const commercialImage = {
  src: "/images/areas-commercial.jpg",
  alt: "A glass office building on a tree-lined street",
};
const residentialLandImage = {
  src: "/images/areas-residential-land.jpg",
  alt: "An open residential plot with acacia trees and red soil",
};
const commercialLandImage = {
  src: "/images/areas-commercial-land.jpg",
  alt: "Open land beside a highway, with a distant city skyline",
};

const residentialCheck =
  "Before any commitment, SoldBySharon checks title, access, and the condition of the property, then stays with you through the purchase.";
const commercialCheck =
  "We review the building, the tenancy position, and the ownership documents before you decide.";
const landCheck =
  "We confirm the plot, the access, and the title before you pay, and we can stay on to coordinate the build.";

function place(spec: {
  slug: string;
  title: string;
  area: string;
  category: string;
  factCategory: string;
  type: string;
  summary: string;
  check: string;
  features: string[];
  image: { src: string; alt: string };
}): Property {
  return {
    slug: spec.slug,
    title: spec.title,
    area: spec.area,
    category: spec.category,
    priceLabel: "Price on request",
    summary: spec.summary,
    description: [spec.summary, spec.check],
    facts: [
      { label: "Type", value: spec.type },
      { label: "Area", value: spec.area },
      { label: "Category", value: spec.factCategory },
      { label: "Price", value: "Price on request" },
    ],
    features: spec.features,
    images: [spec.image],
  };
}

properties.push(
  place({
    slug: "kilimani-apartment",
    title: "Apartment in Kilimani",
    area: "Kilimani",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Apartment",
    summary: "A city apartment in Kilimani, for a client who wants a home close to the centre of Nairobi.",
    check: residentialCheck,
    features: ["City neighborhood", "Apartment", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "lavington-townhouse",
    title: "Townhouse in Lavington",
    area: "Lavington",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Townhouse",
    summary: "A townhouse in Lavington, for a family who want a quieter street and room to live.",
    check: residentialCheck,
    features: ["Townhouse", "Quiet street", "Family home", "Title checked before you commit"],
    image: residentialImage,
  }),
  place({
    slug: "kileleshwa-apartment",
    title: "Apartment in Kileleshwa",
    area: "Kileleshwa",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Apartment",
    summary: "An apartment in Kileleshwa, in a residential part of the city.",
    check: residentialCheck,
    features: ["Apartment", "Residential neighborhood", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "riverside-apartment",
    title: "Apartment in Riverside",
    area: "Riverside",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Apartment",
    summary: "An apartment in Riverside, close to the city and set back from the main roads.",
    check: residentialCheck,
    features: ["Apartment", "Close to the city", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "runda-family-home",
    title: "Family home in Runda",
    area: "Runda",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Family home",
    summary: "A family home in Runda, with space around it, in an established suburb.",
    check: residentialCheck,
    features: ["Family home", "Established suburb", "Space around the house", "Title checked before you commit"],
    image: residentialImage,
  }),
  place({
    slug: "kitisuru-villa",
    title: "Villa in Kitisuru",
    area: "Kitisuru",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Villa",
    summary: "A villa in Kitisuru, for a family who want privacy and a garden.",
    check: residentialCheck,
    features: ["Villa", "Private garden", "Family home", "Title checked before you commit"],
    image: residentialImage,
  }),
  place({
    slug: "parklands-apartment",
    title: "Apartment in Parklands",
    area: "Parklands",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Apartment",
    summary: "An apartment in Parklands, for a home in a well-known Nairobi neighborhood.",
    check: residentialCheck,
    features: ["Apartment", "Established neighborhood", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "muthaiga-family-home",
    title: "Family home in Muthaiga",
    area: "Muthaiga",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Family home",
    summary: "A family home in Muthaiga, one of Nairobi's most established addresses.",
    check: residentialCheck,
    features: ["Family home", "Established address", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "spring-valley-villa",
    title: "Villa in Spring Valley",
    area: "Spring Valley",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Villa",
    summary: "A villa in Spring Valley, in a quiet residential part of Nairobi.",
    check: residentialCheck,
    features: ["Villa", "Quiet setting", "Family home", "Title checked before you commit"],
    image: residentialImage,
  }),
  place({
    slug: "loresho-family-home",
    title: "Family home in Loresho",
    area: "Loresho",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Family home",
    summary: "A family home in Loresho, for clients who want a house rather than an apartment.",
    check: residentialCheck,
    features: ["Family home", "House", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "rosslyn-villa",
    title: "Villa in Rosslyn",
    area: "Rosslyn",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Villa",
    summary: "A villa in Rosslyn, in a leafy part of the city.",
    check: residentialCheck,
    features: ["Villa", "Leafy setting", "Family home", "Title checked before you commit"],
    image: residentialImage,
  }),
  place({
    slug: "gigiri-residence",
    title: "Residence in Gigiri",
    area: "Gigiri",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Residence",
    summary: "A residence in Gigiri, for a client who wants a settled neighborhood.",
    check: residentialCheck,
    features: ["Residence", "Settled neighborhood", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "upper-hill-office",
    title: "Office in Upper Hill",
    area: "Upper Hill",
    category: "Commercial Properties",
    factCategory: "Commercial",
    type: "Office",
    summary: "An office in Upper Hill, for a business or an investor who wants a central commercial address.",
    check: commercialCheck,
    features: ["Office", "Central address", "Investor or occupier", "Ownership checked before you decide"],
    image: commercialImage,
  }),
  place({
    slug: "embakasi-residential-plot",
    title: "Residential plot in Embakasi",
    area: "Embakasi",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot in Embakasi, for a home you build or a longer hold.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Title checked before you pay", "On-the-ground coordination"],
    image: residentialLandImage,
  }),
  place({
    slug: "syokimau-residential-plot",
    title: "Residential plot in Syokimau",
    area: "Syokimau",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot in Syokimau, in a suburb where many clients buy to build.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Growing suburb", "Title checked before you pay"],
    image: residentialLandImage,
  }),
  place({
    slug: "rongai-residential-plot",
    title: "Residential plot in Rongai",
    area: "Rongai",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot in Rongai, on the outskirts, for a build or a longer hold.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Outskirts", "Title checked before you pay"],
    image: residentialLandImage,
  }),
  place({
    slug: "thika-road-residential-plot",
    title: "Residential plot on Thika Road",
    area: "Thika Road",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot along Thika Road, for a client building a home outside the city centre.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Outside the city centre", "Title checked before you pay"],
    image: residentialLandImage,
  }),
  place({
    slug: "kiambu-road-residential-plot",
    title: "Residential plot on Kiambu Road",
    area: "Kiambu Road",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot along Kiambu Road, for a home or a longer hold.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Title checked before you pay", "On-the-ground coordination"],
    image: residentialLandImage,
  }),
  place({
    slug: "athi-river-residential-plot",
    title: "Residential plot in Athi River",
    area: "Athi River",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot in Athi River, for clients looking at the growing outskirts.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Growing outskirts", "Title checked before you pay"],
    image: residentialLandImage,
  }),
);

properties.push(
  place({
    slug: "kilimani-office",
    title: "Office in Kilimani",
    area: "Kilimani",
    category: "Commercial Properties",
    factCategory: "Commercial",
    type: "Office",
    summary: "An office in Kilimani, for a business or an investor who wants a city address.",
    check: commercialCheck,
    features: ["Office", "City address", "Investor or occupier", "Ownership checked before you decide"],
    image: commercialImage,
  }),
  place({
    slug: "parklands-office",
    title: "Office in Parklands",
    area: "Parklands",
    category: "Commercial Properties",
    factCategory: "Commercial",
    type: "Office",
    summary: "An office in Parklands, for a business that wants a known Nairobi address.",
    check: commercialCheck,
    features: ["Office", "Known address", "Investor or occupier", "Ownership checked before you decide"],
    image: commercialImage,
  }),
  place({
    slug: "westlands-apartment",
    title: "Apartment in Westlands",
    area: "Westlands",
    category: "Mid to High-End Residential",
    factCategory: "Residential",
    type: "Apartment",
    summary: "An apartment in Westlands, for a home close to the offices and the shops.",
    check: residentialCheck,
    features: ["Apartment", "Close to the city", "Title checked before you commit", "Looked after while you are away"],
    image: residentialImage,
  }),
  place({
    slug: "mombasa-road-commercial",
    title: "Commercial space on Mombasa Road",
    area: "Mombasa Road",
    category: "Commercial Properties",
    factCategory: "Commercial",
    type: "Commercial space",
    summary: "A commercial space on Mombasa Road, for a business or an investor on a major corridor.",
    check: commercialCheck,
    features: ["Commercial space", "Major corridor", "Investor or occupier", "Ownership checked before you decide"],
    image: commercialImage,
  }),
  place({
    slug: "karen-residential-plot",
    title: "Residential plot in Karen",
    area: "Karen",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot in Karen, for a home you build in an established neighborhood.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Established neighborhood", "Title checked before you pay"],
    image: residentialLandImage,
  }),
  place({
    slug: "runda-residential-plot",
    title: "Residential plot in Runda",
    area: "Runda",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot in Runda, for a home you build or a longer hold.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Established suburb", "Title checked before you pay"],
    image: residentialLandImage,
  }),
  place({
    slug: "muthaiga-residential-plot",
    title: "Residential plot in Muthaiga",
    area: "Muthaiga",
    category: "Residential Land",
    factCategory: "Land",
    type: "Residential plot",
    summary: "A residential plot in Muthaiga, for a home on one of Nairobi's established addresses.",
    check: landCheck,
    features: ["Open plot", "Build or hold", "Established address", "Title checked before you pay"],
    image: residentialLandImage,
  }),
  place({
    slug: "upper-hill-development-land",
    title: "Development land in Upper Hill",
    area: "Upper Hill",
    category: "Commercial Land",
    factCategory: "Land",
    type: "Commercial land",
    summary: "Development land in Upper Hill, for a commercial project in the city.",
    check: landCheck,
    features: ["Development land", "City location", "Portfolio holding", "Title checked before you pay"],
    image: commercialLandImage,
  }),
  place({
    slug: "embakasi-development-land",
    title: "Development land in Embakasi",
    area: "Embakasi",
    category: "Commercial Land",
    factCategory: "Land",
    type: "Commercial land",
    summary: "Development land in Embakasi, for a commercial project or a longer hold.",
    check: landCheck,
    features: ["Development land", "Portfolio holding", "Title checked before you pay", "On-the-ground coordination"],
    image: commercialLandImage,
  }),
  place({
    slug: "syokimau-development-land",
    title: "Development land in Syokimau",
    area: "Syokimau",
    category: "Commercial Land",
    factCategory: "Land",
    type: "Commercial land",
    summary: "Development land in Syokimau, on the outskirts, for a project or a longer hold.",
    check: landCheck,
    features: ["Development land", "Outskirts", "Portfolio holding", "Title checked before you pay"],
    image: commercialLandImage,
  }),
  place({
    slug: "kitengela-development-land",
    title: "Development land in Kitengela",
    area: "Kitengela",
    category: "Commercial Land",
    factCategory: "Land",
    type: "Commercial land",
    summary: "Development land in Kitengela, for a commercial project in a growing suburb.",
    check: landCheck,
    features: ["Development land", "Growing suburb", "Portfolio holding", "Title checked before you pay"],
    image: commercialLandImage,
  }),
  place({
    slug: "thika-road-development-land",
    title: "Development land on Thika Road",
    area: "Thika Road",
    category: "Commercial Land",
    factCategory: "Land",
    type: "Commercial land",
    summary: "Development land along Thika Road, for a commercial project outside the city centre.",
    check: landCheck,
    features: ["Development land", "Outside the city centre", "Portfolio holding", "Title checked before you pay"],
    image: commercialLandImage,
  }),
  place({
    slug: "athi-river-development-land",
    title: "Development land in Athi River",
    area: "Athi River",
    category: "Commercial Land",
    factCategory: "Land",
    type: "Commercial land",
    summary: "Development land in Athi River, for a commercial project on the growing outskirts.",
    check: landCheck,
    features: ["Development land", "Growing outskirts", "Portfolio holding", "Title checked before you pay"],
    image: commercialLandImage,
  }),
);

const featuredSlugs = [
  "karen-family-villa",
  "westlands-office",
  "kitengela-residential-plot",
  "mombasa-road-development-land",
];

const interiorShots: Record<string, { src: string; alt: string; label: string }[]> = {
  residential: [
    {
      src: "/images/room-living.jpg",
      alt: "A bright living room with a linen sofa",
      label: "Living room",
    },
    {
      src: "/images/room-bedroom.jpg",
      alt: "A bedroom with linen bedding and morning light",
      label: "Bedroom",
    },
    {
      src: "/images/room-kitchen.jpg",
      alt: "A kitchen with stone counters and timber cabinets",
      label: "Kitchen",
    },
    {
      src: "/images/room-bathroom.jpg",
      alt: "A bathroom with a stone vanity and walk-in shower",
      label: "Bathroom",
    },
  ],
  commercial: [
    {
      src: "/images/office-interior.jpg",
      alt: "An office floor with a glass meeting room",
      label: "Office floor",
    },
  ],
  land: [
    {
      src: "/images/land-access.jpg",
      alt: "An access track across open land",
      label: "Access",
    },
  ],
};

function galleryKind(category: string) {
  if (category.includes("Land")) return "land";
  if (category.startsWith("Commercial")) return "commercial";
  return "residential";
}

export function getProperty(slug: string) {
  const property = properties.find((item) => item.slug === slug);
  if (!property) return undefined;
  const kind = galleryKind(property.category);
  const coverLabel = kind === "land" ? "Wide view" : "Exterior";
  const cover = { ...property.images[0], label: property.images[0].label ?? coverLabel };
  const rest = property.images.slice(1).map((image) => ({
    ...image,
    label: image.label ?? (kind === "land" ? "Another view" : "Another angle"),
  }));
  const seen = new Set([cover.src, ...rest.map((image) => image.src)]);
  const interiors = interiorShots[kind].filter((image) => !seen.has(image.src));
  return { ...property, images: [cover, ...rest, ...interiors] };
}

export function getFeaturedProperties() {
  return featuredSlugs.flatMap((slug) => {
    const property = getProperty(slug);
    return property ? [property] : [];
  });
}

export function getPropertiesInArea(area: string) {
  return properties.filter((property) => property.area === area);
}

export function propertyType(property: Property) {
  return property.facts.find((fact) => fact.label === "Type")?.value ?? "";
}

export type PropertySort = "name" | "area" | "type";

export type PropertyFilters = {
  q?: string;
  category?: string;
  area?: string;
  type?: string;
  sort?: PropertySort;
};

export function filterProperties(list: Property[], filters: PropertyFilters) {
  const query = filters.q?.trim().toLowerCase() ?? "";
  const matched = list.filter((property) => {
    if (filters.category && property.category !== filters.category) return false;
    if (filters.area && property.area !== filters.area) return false;
    if (filters.type && propertyType(property) !== filters.type) return false;
    if (!query) return true;
    const haystack = [property.title, property.area, property.category, property.summary, propertyType(property)]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
  const sorted = [...matched];
  if (filters.sort === "name") sorted.sort((a, b) => a.title.localeCompare(b.title));
  if (filters.sort === "area") sorted.sort((a, b) => a.area.localeCompare(b.area) || a.title.localeCompare(b.title));
  if (filters.sort === "type") {
    sorted.sort((a, b) => propertyType(a).localeCompare(propertyType(b)) || a.title.localeCompare(b.title));
  }
  return sorted;
}

export function uniqueValues(list: Property[], pick: (property: Property) => string) {
  return [...new Set(list.map(pick).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}
