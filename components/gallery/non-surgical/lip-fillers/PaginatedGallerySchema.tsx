import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

interface PaginatedGallerySchemaProps {
  pageData: any;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  baseUrl: string;
  galleryType: "lip-fillers" | "botox" | "juvederm" | "chin-fillers" | string;
}

export function PaginatedGallerySchema({
  pageData,
  currentPage,
  totalPages,
  itemsPerPage,
  baseUrl,
  galleryType,
}: PaginatedGallerySchemaProps) {
  if (!pageData) return null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";
  const fullBaseUrl = `${siteUrl}${baseUrl}`;
  const currentPageUrl =
    currentPage === 1 ? fullBaseUrl : `${fullBaseUrl}/${currentPage}`;

  // Calculate items for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems =
    pageData.gallerySection?.galleryItems?.slice(startIndex, endIndex) || [];

  // Build image gallery schema for current page items
  const galleryImages = currentPageItems.map((item: any, index: number) => {
    const imageUrl =
      item.imageUrl || getResponsiveImageUrls({ desktop: item.image }).desktop;
    return {
      "@type": "ImageObject",
      contentUrl: imageUrl,
      description:
        item.altText ||
        `${galleryType} treatment result ${startIndex + index + 1}`,
      name: item.altText || `Image ${startIndex + index + 1}`,
      thumbnailUrl: `${imageUrl}?auto=format,compress&w=400`,
    };
  });

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
      `Professional ${galleryType} treatments and aesthetic services`,
    medicalSpecialty: ["Dermatology", "Cosmetic Medicine"],
    priceRange: "$$-$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address", // Update
      addressLocality: "Your City", // Update
      addressRegion: "Your State", // Update
      postalCode: "Your Zip", // Update
      addressCountry: "US", // Update
    },
  };

  // Image Gallery Schema with pagination
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${pageData.heroSection?.title || `${galleryType} Gallery`}${currentPage > 1 ? ` - Page ${currentPage}` : ""}`,
    description:
      pageData.seo?.metaDescription ||
      `Gallery showcasing ${galleryType} treatment results${currentPage > 1 ? ` - Page ${currentPage} of ${totalPages}` : ""}`,
    url: currentPageUrl,
    image: galleryImages,
    associatedMedia: galleryImages,
    numberOfItems: currentPageItems.length,
    // Add pagination information
    ...(totalPages > 1 && {
      isPartOf: {
        "@type": "CollectionPage",
        "@id": fullBaseUrl,
        name: pageData.heroSection?.title || `${galleryType} Gallery`,
      },
    }),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...(pageData.heroSection?.breadcrumbs?.map(
        (breadcrumb: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: breadcrumb.label,
          item: `${siteUrl}${breadcrumb.url}`,
        })
      ) || []),
      // Add current page to breadcrumb if paginated
      ...(currentPage > 1
        ? [
            {
              "@type": "ListItem",
              position: (pageData.heroSection?.breadcrumbs?.length || 0) + 1,
              name: `Page ${currentPage}`,
              item: currentPageUrl,
            },
          ]
        : []),
    ],
  };

  // WebPage Schema with pagination
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": currentPageUrl,
    url: currentPageUrl,
    name: `${pageData.seo?.metaTitle || `${galleryType} Gallery`}${currentPage > 1 ? ` - Page ${currentPage}` : ""}`,
    description:
      pageData.seo?.metaDescription ||
      `View our ${galleryType} treatment gallery`,
    isPartOf: {
      "@type": "WebSite",
      "@id": siteUrl,
      url: siteUrl,
      name: "Your Clinic Name", // Update this
    },
    breadcrumb: {
      "@id": `${currentPageUrl}#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${currentPageUrl}#primaryimage`,
      url: galleryImages[0]?.contentUrl || "",
    },
    // Pagination links
    ...(currentPage > 1 && {
      previousPage:
        currentPage === 2 ? fullBaseUrl : `${fullBaseUrl}/${currentPage - 1}`,
    }),
    ...(currentPage < totalPages && {
      nextPage: `${fullBaseUrl}/${currentPage + 1}`,
    }),
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
