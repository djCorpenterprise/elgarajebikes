export default function sitemap() {
  const base = "https://elgarajebikes.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
