const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "http://localhost:3001/api";

export async function fetchSurgicalGalleryData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/surgical-gallery-component?depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch surgical gallery data");
    }

    const data = await res.json();

    // Filter active components and return the first one
    const activeComponent =
      data.docs?.find((component: any) => component.isActive) || null;

    return activeComponent;
  } catch (error) {
    console.error("Error fetching surgical gallery data:", error);
    return null;
  }
}

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

// Helper to get section by type
export function getSectionByType(sections: any[], type: string) {
  return sections?.find((section: any) => section.sectionType === type) || null;
}

// Helper to render rich text content
export function renderRichText(richText: any): string {
  if (!richText) return "";

  // If it's already a string, return it
  if (typeof richText === "string") return richText;

  // If it has a root with children (Payload's rich text format)
  if (richText.root?.children) {
    return richText.root.children
      .map((child: any) => {
        if (child.type === "text") return child.text;
        return "";
      })
      .join("");
  }

  return "";
}
