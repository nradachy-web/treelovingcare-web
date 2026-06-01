import { googleRating, services, serviceAreas, site } from "@/lib/site";

/** LocalBusiness / TreeService schema for the homepage. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/og.jpg`,
    logo: `${site.url}/icon.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: `${a.city}, WI`,
    })),
    openingHours: "Mo-Sa 07:00-18:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleRating.score,
      reviewCount: googleRating.count,
      bestRating: "5",
    },
    sameAs: [site.facebook],
    knowsAbout: services.map((s) => s.name),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.promise },
    })),
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    serviceType: service.name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: `${a.city}, WI` })),
    url: `${site.url}/services/${service.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
