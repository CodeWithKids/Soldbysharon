import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useClientLists } from "@/lib/client-lists";
import { filterProperties, propertyType, uniqueValues, type Property, type PropertyFilters } from "@/lib/properties";

const fieldClass =
  "h-12 w-full border border-neutral-300 bg-white px-3 text-sm outline-none transition focus:border-neutral-950";

export function PropertyBrowser({
  properties,
  filters,
  onChange,
  hideCategory = false,
}: {
  properties: Property[];
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
  hideCategory?: boolean;
}) {
  const results = filterProperties(properties, filters);
  const categories = uniqueValues(properties, (property) => property.category);
  const areas = uniqueValues(properties, (property) => property.area);
  const types = uniqueValues(properties, propertyType);
  const active = Boolean(filters.q || filters.category || filters.area || filters.type || filters.sort);
  const { saved, compare, toggleSaved, toggleCompare } = useClientLists();

  function setFilter(key: keyof PropertyFilters, value: string) {
    onChange({ ...filters, [key]: value || undefined });
  }

  return (
    <div>
      <form
        className="grid gap-3 md:grid-cols-2 lg:grid-cols-4"
        onSubmit={(event) => event.preventDefault()}
        role="search"
      >
        <label className="lg:col-span-4">
          <span className="sr-only">Search properties</span>
          <span className="flex h-12 items-center gap-3 border border-neutral-300 bg-white px-3 focus-within:border-neutral-950">
            <Search className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.5} />
            <input
              value={filters.q ?? ""}
              onChange={(event) => setFilter("q", event.target.value)}
              placeholder="Search by name, area, or type"
              className="h-full w-full bg-transparent text-sm outline-none"
            />
          </span>
        </label>
        {hideCategory ? null : (
          <FilterSelect
            label="Category"
            value={filters.category ?? ""}
            onChange={(value) => setFilter("category", value)}
            options={categories}
            allLabel="All categories"
          />
        )}
        <FilterSelect
          label="Area"
          value={filters.area ?? ""}
          onChange={(value) => setFilter("area", value)}
          options={areas}
          allLabel="All areas"
        />
        <FilterSelect
          label="Type"
          value={filters.type ?? ""}
          onChange={(value) => setFilter("type", value)}
          options={types}
          allLabel="All types"
        />
      </form>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-600">
        <p>
          {results.length} {results.length === 1 ? "property" : "properties"}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <label className="flex items-center gap-2">
            <span className="sr-only">Sort</span>
            <select
              value={filters.sort ?? ""}
              onChange={(event) => setFilter("sort", event.target.value)}
              aria-label="Sort"
              className="h-10 border border-neutral-300 bg-white px-3 text-sm outline-none"
            >
              <option value="">Sort by default</option>
              <option value="name">Name</option>
              <option value="area">Area</option>
              <option value="type">Type</option>
            </select>
          </label>
          <Link to="/saved" className="uppercase tracking-[0.18em] underline">
            Saved ({saved.length})
          </Link>
          <Link to="/compare" className="uppercase tracking-[0.18em] underline">
            Compare ({compare.length})
          </Link>
          {active ? (
            <button type="button" onClick={() => onChange({})} className="uppercase tracking-[0.18em] underline">
              Clear filters
            </button>
          ) : null}
        </div>
      </div>
      {results.length > 0 ? (
        <ul className="mt-8 grid gap-10 sm:grid-cols-2">
          {results.map((property) => (
            <li key={property.slug}>
              <Link to="/properties/$slug" params={{ slug: property.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={property.images[0].src}
                    alt={property.images[0].alt}
                    width={1280}
                    height={720}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
                  {hideCategory ? property.area : property.category}
                </p>
                <h2 className="mt-2 font-display text-3xl font-normal group-hover:underline">{property.title}</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  {property.area} · {propertyType(property)} · {property.priceLabel}
                </p>
                <p className="mt-3 leading-relaxed text-neutral-600">{property.summary}</p>
                <span className="mt-4 inline-block text-sm uppercase tracking-[0.22em] underline">View property</span>
              </Link>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => toggleSaved(property.slug)}
                  aria-pressed={saved.includes(property.slug)}
                  className="h-10 border border-neutral-300 px-4 text-xs uppercase tracking-[0.16em] hover:border-neutral-950"
                >
                  {saved.includes(property.slug) ? "Saved" : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => toggleCompare(property.slug)}
                  aria-pressed={compare.includes(property.slug)}
                  disabled={!compare.includes(property.slug) && compare.length >= 3}
                  className="h-10 border border-neutral-300 px-4 text-xs uppercase tracking-[0.16em] hover:border-neutral-950 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {compare.includes(property.slug) ? "In compare" : "Compare"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-neutral-700">
          No properties match that search. Clear the filters or try another area.
        </p>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  allLabel,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  allLabel: string;
}) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className={fieldClass} aria-label={label}>
        <option value="">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
