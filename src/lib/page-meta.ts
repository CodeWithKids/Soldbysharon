export function pageMeta(path: string, title: string, description: string) {
  const fullTitle = `${title} | Sold by Sharon`;
  const url = `https://www.soldbysharon.co.ke${path}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
  };
}
