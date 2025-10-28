const PAYLOAD_API_URL = "https://goldfingerbackend.vercel.app/api";

/**
 * Fetch Clearwater page data from Payload CMS
 * @returns Active Clearwater page component data or null
 */
export async function fetchClearwaterPageData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/clearwater-page-component?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Clearwater page data: ${res.statusText}`
      );
    }

    const data = await res.json();
    const activeComponent =
      data.docs?.find((component: any) => component.isActive) || null;

    console.log("Fetched Clearwater data:", activeComponent);
    return activeComponent;
  } catch (error) {
    console.error("Error fetching Clearwater page data:", error);
    return null;
  }
}

/**
 * Get image URL from various image field formats
 * @param imageField - Image field from Payload (can be object with url/cloudinary_url or string)
 * @returns Image URL string or empty string
 */
export function getImageUrl(imageField: any): string {
  if (!imageField) return "";

  // Check for Cloudinary URL
  if (typeof imageField === "object" && imageField.cloudinary_url) {
    return imageField.cloudinary_url;
  }

  // Check for standard URL
  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }

  // If it's already a string URL
  if (typeof imageField === "string") {
    return imageField;
  }

  return "";
}

/**
 * Get responsive image URLs for different breakpoints
 * @param imageGroup - Group containing mobile, tablet, desktop, and large images
 * @returns Object with URLs for each breakpoint and alt text
 */
export function getResponsiveImageUrls(imageGroup: any) {
  if (!imageGroup) {
    return {
      mobile: "",
      tablet: "",
      desktop: "",
      large: "",
      alt: "",
    };
  }

  return {
    mobile: getImageUrl(imageGroup.mobile),
    tablet: getImageUrl(imageGroup.tablet),
    desktop: getImageUrl(imageGroup.desktop),
    large: getImageUrl(imageGroup.large),
    alt: imageGroup.alt || "",
  };
}

/**
 * Convert Lexical JSON to HTML
 * @param lexicalJSON - Lexical editor JSON content
 * @returns HTML string
 */
export function lexicalToHtml(lexicalJSON: any): string {
  if (!lexicalJSON || !lexicalJSON.root) return "";

  const processNode = (node: any): string => {
    if (!node) return "";

    // Handle text nodes
    if (node.type === "text") {
      let text = node.text || "";

      // Apply text formatting
      if (node.format) {
        if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
        if (node.format & 2) text = `<em>${text}</em>`; // Italic
        if (node.format & 4) text = `<s>${text}</s>`; // Strikethrough
        if (node.format & 8) text = `<u>${text}</u>`; // Underline
        if (node.format & 16) text = `<code>${text}</code>`; // Code
      }

      return text;
    }

    // Handle nodes with children
    if (node.children && Array.isArray(node.children)) {
      const childrenHtml = node.children.map(processNode).join("");

      switch (node.type) {
        case "paragraph":
          const format = node.format || "";
          const className = format === "center" ? ' class="text-center"' : "";
          return `<p${className}>${childrenHtml}</p>`;

        case "heading":
          const tag = node.tag || "h2";
          return `<${tag}>${childrenHtml}</${tag}>`;

        case "list":
          const listTag = node.listType === "number" ? "ol" : "ul";
          return `<${listTag}>${childrenHtml}</${listTag}>`;

        case "listitem":
          return `<li>${childrenHtml}</li>`;

        case "quote":
          return `<blockquote>${childrenHtml}</blockquote>`;

        case "link":
          const url = node.url || "#";
          const target = node.newTab
            ? ' target="_blank" rel="noopener noreferrer"'
            : "";
          return `<a href="${url}"${target}>${childrenHtml}</a>`;

        case "root":
          return childrenHtml;

        default:
          return childrenHtml;
      }
    }

    return "";
  };

  return processNode(lexicalJSON.root);
}
