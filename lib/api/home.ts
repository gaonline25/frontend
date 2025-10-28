// // lib/api/home.ts
// // API functions to fetch home page data from Payload CMS

// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";

// export interface HomePageData {
//   accessibilityMenu: {
//     enabled: boolean;
//     items: Array<{
//       text: string;
//       href: string;
//       ariaLabel?: string;
//     }>;
//   };
//   sections: Section[];
//   seo: {
//     metaTitle?: string;
//     metaDescription?: string;
//     ogImage?: any;
//   };
// }

// export interface Section {
//   sectionType: string;
//   visibility: boolean;
//   customClasses?: string;
//   backgroundColor?: string;
//   textColor?: string;
//   heroBanner?: any;
//   anchorLinks?: any;
//   introSection?: any;
//   twoColumn?: any;
//   threeColumnStats?: any;
//   homeGrid?: any;
//   homeBanner?: any;
//   halfImage?: any;
//   reviewsSlider?: any;
//   doubleBanner?: any;
//   locationsBanner?: any;
//   ctaGallery?: any;
//   tabsModule?: any;
//   id: string;
// }

// /**
//  * Fetch home page data from Payload CMS Global
//  */
// export async function fetchHomePage(): Promise<HomePageData | null> {
//   try {
//     const res = await fetch(`${PAYLOAD_API_URL}/api/globals/home?depth=10`, {
//       next: { revalidate: 60 }, // Cache for 60 seconds
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch home page: ${res.status}`);
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching home page:", error);
//     return null;
//   }
// }

// /**
//  * Fetch home page data (client-side)
//  */
// export async function fetchHomePageClient(): Promise<HomePageData | null> {
//   try {
//     const PAYLOAD_URL =
//       process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";
//     const res = await fetch(`${PAYLOAD_URL}/api/globals/home?depth=2`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch home page: ${res.status}`);
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching home page:", error);
//     return null;
//   }
// }

// /**
//  * Helper function to get image URL from media object
//  */
// export function getImageUrl(media: any): string {
//   if (!media) return "";

//   // If it's a string, return as-is
//   if (typeof media === "string") return media;

//   // Check for Cloudinary URL
//   if (media.cloudinary_url) {
//     return media.cloudinary_url;
//   }

//   // Check for regular URL
//   if (media.url) {
//     const PAYLOAD_URL =
//       process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";
//     return `${PAYLOAD_URL}${media.url}`;
//   }

//   return "";
// }
import { populateMediaFields } from "./populate-media";

// lib/api/home.ts
const PAYLOAD_API_URL = "https://goldfingerbackend.vercel.app";

export interface HomePageData {
  accessibilityMenu: {
    enabled: boolean;
    items: Array<{
      text: string;
      href: string;
      ariaLabel?: string;
    }>;
  };
  sections: Section[];
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: any;
  };
}

export interface Section {
  sectionType: string;
  visibility: boolean;
  customClasses?: string;
  backgroundColor?: string;
  textColor?: string;
  heroBanner?: any;
  anchorLinks?: any;
  introSection?: any;
  twoColumn?: any;
  threeColumnStats?: any;
  homeGrid?: any;
  homeBanner?: any;
  halfImage?: any;
  reviewsSlider?: any;
  doubleBanner?: any;
  locationsBanner?: any;
  ctaGallery?: any;
  tabsModule?: any;
  id: string;
}

/**
 * Fetch home page data from Payload CMS Global
 */
export async function fetchHomePage(): Promise<HomePageData | null> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/api/globals/home`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch home page: ${res.status}`);
    }

    let data = await res.json();

    // Manually populate all media fields
    console.log("Populating media fields...");
    data = await populateMediaFields(data);
    console.log("Media fields populated!");

    return data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    return null;
  }
}

/**
 * Helper function to get image URL from media object
 */
export function getImageUrl(media: any): string {
  if (!media) {
    return "";
  }

  if (typeof media === "string") {
    console.warn("Media is still just an ID string:", media);
    return "";
  }

  if (media.cloudinary_url) {
    return media.cloudinary_url;
  }

  if (media.url) {
    const PAYLOAD_URL =
      process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";
    if (media.url.startsWith("http")) {
      return media.url;
    }
    return `${PAYLOAD_URL}${media.url}`;
  }

  return "";
}

export function lexicalToHtml(lexicalJSON: any): string {
  if (!lexicalJSON || !lexicalJSON.root) return "";

  const processNode = (node: any): string => {
    if (!node) return "";

    if (node.type === "text") {
      let text = node.text || "";
      if (node.format) {
        if (node.format & 1) text = `<strong>${text}</strong>`;
        if (node.format & 2) text = `<em>${text}</em>`;
        if (node.format & 4) text = `<s>${text}</s>`;
        if (node.format & 8) text = `<u>${text}</u>`;
        if (node.format & 16) text = `<code>${text}</code>`;
      }
      return text;
    }

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