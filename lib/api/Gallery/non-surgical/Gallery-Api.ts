const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://backend-orpin-six-56.vercel.app/api";

// Fetch gallery page data by slug
export async function fetchGalleryPageBySlug(slug: string) {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/gallery-item-page-component?where[pageSlug][equals]=${slug}&where[isActive][equals]=true&depth=2&limit=1`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch gallery page: ${slug}`);
    }

    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error(`Error fetching gallery page ${slug}:`, error);
    return null;
  }
}

// Fetch all gallery pages by category
export async function fetchGalleryPagesByCategory(category: string) {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/gallery-item-page-component?where[categoryType][equals]=${category}&where[isActive][equals]=true&depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch gallery pages for category: ${category}`
      );
    }

    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error(`Error fetching gallery pages for ${category}:`, error);
    return [];
  }
}

// Get image URL helper
export function getImageUrl(imageField: any): string {
  if (!imageField) return "";

  if (typeof imageField === "object" && imageField.cloudinary_url) {
    return imageField.cloudinary_url;
  }

  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }

  if (typeof imageField === "string") {
    return imageField;
  }

  return "";
}

// Get responsive image URLs
export function getResponsiveImageUrls(imageGroup: any) {
  if (!imageGroup) {
    return {
      mobile: "",
      tablet: "",
      desktop: "",
      large: "",
      alt: "",
      width: 2200,
      height: 691,
    };
  }

  return {
    mobile: getImageUrl(imageGroup.mobile),
    tablet: getImageUrl(imageGroup.tablet),
    desktop: getImageUrl(imageGroup.desktop),
    large: getImageUrl(imageGroup.large),
    alt: imageGroup.alt || "",
    width: imageGroup.width || 2200,
    height: imageGroup.height || 691,
  };
}

// Get section by type
export function getSectionByType(sections: any[], type: string) {
  return sections?.find((section: any) => section.sectionType === type) || null;
}

// Get gallery items from a page
export function getGalleryItems(pageData: any) {
  const indexSection = getSectionByType(pageData.sections, "galleryItemIndex");
  return indexSection?.galleryItemIndexSection?.galleryItems || [];
}

// Get specific gallery item by ID
export function getGalleryItemById(pageData: any, itemId: string) {
  const items = getGalleryItems(pageData);
  const currentIndex = items.findIndex(
    (item: any) =>
      item.itemId === itemId || item.itemUrl?.includes(`/item/${itemId}/`)
  );

  if (currentIndex === -1) {
    return { current: null, previous: null, next: null, index: -1 };
  }

  return {
    current: items[currentIndex],
    previous: currentIndex > 0 ? items[currentIndex - 1] : null,
    next: currentIndex < items.length - 1 ? items[currentIndex + 1] : null,
    index: currentIndex,
  };
}

// Generate navigation items for dropdown
export function generateNavigationItems(allPages: any[]) {
  return allPages.map((page: any) => ({
    label: page.pageName,
    url: `/gallery/${page.categoryType}/${page.pageSlug}/`,
    slug: page.pageSlug,
  }));
}
