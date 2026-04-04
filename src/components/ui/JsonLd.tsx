import { FIRM, SERVICES } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankitshahco.com";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── LocalBusiness / ProfessionalService ──────────────────────────────
      {
        "@type": ["AccountingService", "ProfessionalService"],
        "@id": `${BASE_URL}/#firm`,
        name: FIRM.name,
        alternateName: FIRM.nameShort,
        description: FIRM.description,
        url: BASE_URL,
        foundingDate: String(FIRM.foundedYear),
        address: {
          "@type": "PostalAddress",
          streetAddress: `${FIRM.address.line1}, ${FIRM.address.line2}`,
          addressLocality: FIRM.address.city,
          addressRegion: FIRM.address.state,
          postalCode: FIRM.address.pin,
          addressCountry: FIRM.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          // Update with real lat/lng once address is confirmed
          latitude: "18.9220",
          longitude: "72.8347",
        },
        telephone: FIRM.phone,
        email: FIRM.email,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "CA Services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.shortDesc,
            },
          })),
        },
        sameAs: [
          // Add LinkedIn, Twitter/X URLs here when available
        ],
        priceRange: "₹₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Bank Transfer, UPI",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },

      // ── WebSite (enables Sitelinks search box) ───────────────────────────
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: FIRM.name,
        publisher: { "@id": `${BASE_URL}/#firm` },
        inLanguage: "en-IN",
      },

      // ── Person — Founding Partner ─────────────────────────────────────────
      {
        "@type": "Person",
        "@id": `${BASE_URL}/about#partner`,
        name: "CA Ankit Shah",
        jobTitle: "Founding Partner",
        worksFor: { "@id": `${BASE_URL}/#firm` },
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "FCA — Fellow Chartered Accountant, ICAI" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "DISA — Diploma in Information Systems Audit" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
