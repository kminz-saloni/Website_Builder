export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebDesignBusiness",
    "name": "WEB CREST LAB",
    "url": "https://webcrest.studio",
    "logo": "https://webcrest.studio/android-chrome-512x512.png",
    "description": "Professional website development and web engineering laboratory specializing in high-performance digital products.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "serviceType": [
      "Website Development",
      "Custom Web Engineering",
      "Next.js Development",
      "UI/UX Design"
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
