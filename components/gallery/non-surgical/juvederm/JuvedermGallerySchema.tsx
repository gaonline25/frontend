import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

interface SchemaProps {
  pageData: any;
}

export function JuvedermGallerySchema({ pageData }: SchemaProps) {
  if (!pageData) return null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";
  const pageUrl = `${siteUrl}/gallery/juvederm`;

  // Build image gallery schema
  const galleryImages =
    pageData.gallerySection?.galleryItems?.map((item: any, index: number) => {
      const imageUrl =
        item.imageUrl ||
        getResponsiveImageUrls({ desktop: item.image }).desktop;
      return {
        "@type": "ImageObject",
        contentUrl: imageUrl,
        description: item.altText || `Juvederm treatment result ${index + 1}`,
        name: item.altText || `Image ${index + 1}`,
      };
    }) || [];

  // Medical Business Schema
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": siteUrl,
    name: "Your Clinic Name", // Update this
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`, // Update with your logo URL
    },
    image: galleryImages.slice(0, 5).map((img: any) => img.contentUrl),
    description:
      pageData.seo?.metaDescription ||
      "Professional Juvederm treatments and aesthetic services",
    medicalSpecialty: ["Dermatology", "Cosmetic Medicine"],
    priceRange: "$$-$$$",
    // Add your actual address
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "Your Zip",
      addressCountry: "US",
    },
  };

  // Image Gallery Schema
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: pageData.heroSection?.title || "Juvederm Gallery",
    description:
      pageData.seo?.metaDescription ||
      "Gallery showcasing Juvederm treatment results",
    url: pageUrl,
    image: galleryImages,
    associatedMedia: galleryImages,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement:
      pageData.heroSection?.breadcrumbs?.map(
        (breadcrumb: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: breadcrumb.label,
          item: `${siteUrl}${breadcrumb.url}`,
        })
      ) || [],
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: pageData.seo?.metaTitle || "Juvederm Gallery",
    description:
      pageData.seo?.metaDescription || "View our Juvederm treatment gallery",
    isPartOf: {
      "@type": "WebSite",
      "@id": siteUrl,
      url: siteUrl,
      name: "Your Clinic Name", // Update this
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url:
        galleryImages[0]?.contentUrl ||
        getResponsiveImageUrls({
          desktop: pageData.heroSection?.backgroundImage,
        }).desktop,
    },
    datePublished: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
  };

  // Combine all schemas
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      medicalBusinessSchema,
      imageGallerySchema,
      breadcrumbSchema,
      webPageSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema),
      }}
    />
  );
}
