import "./globals.css";
import site from "@/data/site.json";

const SITE_URL = "https://elgarajebikes.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "El Garaje Bikes | Alquiler y Reparación de Bicicletas en L'Altet, Alicante",
  description:
    "Alquiler y taller de bicicletas y patinetes eléctricos en L'Altet, Alicante, a 5 minutos del aeropuerto. Reparamos todas las marcas. Costa Blanca.",
  keywords: [
    "alquiler bicicletas Alicante",
    "taller bicicletas L'Altet",
    "reparacion bicicletas Alicante",
    "bike rental Alicante",
    "patinete electrico Alicante",
    "El Garaje Bikes",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "El Garaje Bikes",
    title: "El Garaje Bikes | Alquiler y Reparación de Bicicletas en Alicante",
    description:
      "Alquiler y taller de bicicletas y patinetes eléctricos en L'Altet, Alicante, a 5 minutos del aeropuerto.",
    images: [{ url: "/img/logo-hero.jpeg", width: 1200, height: 630, alt: "El Garaje Bikes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Garaje Bikes | Alquiler y Reparación de Bicicletas en Alicante",
    description:
      "Alquiler y taller de bicicletas y patinetes eléctricos en L'Altet, Alicante.",
    images: ["/img/logo-hero.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BicycleStore",
  name: site.name,
  image: `${SITE_URL}/img/logo-hero.jpeg`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: site.phone,
  email: site.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postal,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "ES",
  },
  geo: { "@type": "GeoCoordinates", latitude: 38.2835, longitude: -0.5445 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [site.instagram.url],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Barlow+Condensed:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
