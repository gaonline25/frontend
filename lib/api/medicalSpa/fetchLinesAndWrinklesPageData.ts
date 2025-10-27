// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "http://localhost:3001/api";

// export async function fetchLinesAndWrinklesPageData() {
//   try {
//     // First, try to get all documents to find the active one
//     const listEndpoint = `${PAYLOAD_API_URL}/lines-wrinkles-page-component`;
//     console.log("Fetching list from:", listEndpoint);

//     const listRes = await fetch(
//       `${listEndpoint}?where[isActive][equals]=true&depth=2&limit=1&draft=false&trash=false`,
//       {
//         next: { revalidate: 60 },
//         cache: "no-store",
//       }
//     );

//     if (!listRes.ok) {
//       console.error("List fetch failed:", listRes.status, listRes.statusText);
//       throw new Error(`Failed to fetch list: ${listRes.statusText}`);
//     }

//     const listData = await listRes.json();
//     console.log("List API Response:", listData);

//     // If we found documents in the list
//     if (
//       listData.docs &&
//       Array.isArray(listData.docs) &&
//       listData.docs.length > 0
//     ) {
//       const activeDoc = listData.docs[0];
//       console.log("Found active document:", activeDoc);

//       // Now fetch the full document by ID
//       const docId = activeDoc.id;
//       const docEndpoint = `${PAYLOAD_API_URL}/lines-wrinkles-page-component/${docId}`;
//       console.log("Fetching full document from:", docEndpoint);

//       const docRes = await fetch(
//         `${docEndpoint}?depth=2&draft=false&trash=false`,
//         {
//           next: { revalidate: 60 },
//           cache: "no-store",
//         }
//       );

//       if (!docRes.ok) {
//         console.error(
//           "Document fetch failed:",
//           docRes.status,
//           docRes.statusText
//         );
//         throw new Error(`Failed to fetch document: ${docRes.statusText}`);
//       }

//       const fullDoc = await docRes.json();
//       console.log("Full document:", fullDoc);
//       return fullDoc;
//     }

//     // Fallback: Try to fetch by the known ID if list fails
//     const knownId = "68ea9bcc8253bd170bd9eafc";
//     const fallbackEndpoint = `${PAYLOAD_API_URL}/lines-wrinkles-page-component/${knownId}`;
//     console.log("Trying fallback with known ID:", fallbackEndpoint);

//     const fallbackRes = await fetch(
//       `${fallbackEndpoint}?depth=2&draft=false&trash=false`,
//       {
//         next: { revalidate: 60 },
//         cache: "no-store",
//       }
//     );

//     if (!fallbackRes.ok) {
//       throw new Error(`Fallback fetch failed: ${fallbackRes.statusText}`);
//     }

//     const fallbackDoc = await fallbackRes.json();
//     console.log("Fallback document:", fallbackDoc);
//     return fallbackDoc;
//   } catch (error) {
//     console.error("Error fetching Lines And Wrinkles page data:", error);
//     return null;
//   }
// }

// export function getImageUrl(imageField: any): string {
//   if (!imageField) return "";
//   if (typeof imageField === "object" && imageField.cloudinary_url) {
//     return imageField.cloudinary_url;
//   }
//   if (typeof imageField === "object" && imageField.url) {
//     return imageField.url;
//   }
//   if (typeof imageField === "string") {
//     return imageField;
//   }
//   return "";
// }

// export function getResponsiveImageUrls(imageGroup: any) {
//   if (!imageGroup) {
//     return {
//       mobile: "",
//       tablet: "",
//       desktop: "",
//       large: "",
//       alt: "",
//     };
//   }
//   return {
//     mobile: getImageUrl(imageGroup.mobile),
//     tablet: getImageUrl(imageGroup.tablet),
//     desktop: getImageUrl(imageGroup.desktop),
//     large: getImageUrl(imageGroup.large),
//     alt: imageGroup.alt || "",
//   };
// }

// export function lexicalToHtml(lexicalJSON: any): string {
//   if (!lexicalJSON || !lexicalJSON.root) return "";
//   const processNode = (node: any): string => {
//     if (!node) return "";
//     if (node.type === "text") {
//       let text = node.text || "";
//       if (node.format) {
//         if (node.format & 1) text = `<strong>${text}</strong>`;
//         if (node.format & 2) text = `<em>${text}</em>`;
//         if (node.format & 4) text = `<s>${text}</s>`;
//         if (node.format & 8) text = `<u>${text}</u>`;
//         if (node.format & 16) text = `<code>${text}</code>`;
//       }
//       return text;
//     }
//     if (node.children && Array.isArray(node.children)) {
//       const childrenHtml = node.children.map(processNode).join("");
//       switch (node.type) {
//         case "paragraph":
//           const format = node.format || "";
//           const className = format === "center" ? ' class="text-center"' : "";
//           return `<p${className}>${childrenHtml}</p>`;
//         case "heading":
//           const tag = node.tag || "h2";
//           return `<${tag}>${childrenHtml}</${tag}>`;
//         case "list":
//           const listTag = node.listType === "number" ? "ol" : "ul";
//           return `<${listTag}>${childrenHtml}</${listTag}>`;
//         case "listitem":
//           return `<li>${childrenHtml}</li>`;
//         case "quote":
//           return `<blockquote>${childrenHtml}</blockquote>`;
//         case "link":
//           const url = node.url || "#";
//           const target = node.newTab
//             ? ' target="_blank" rel="noopener noreferrer"'
//             : "";
//           return `<a href="${url}"${target}>${childrenHtml}</a>`;
//         case "root":
//           return childrenHtml;
//         default:
//           return childrenHtml;
//       }
//     }
//     return "";
//   };
//   return processNode(lexicalJSON.root);
// }


const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "http://localhost:3001/api";

export async function fetchLinesAndWrinklesPageData() {
  try {
    // Fetch the collection to find the active document
    const endpoint = `${PAYLOAD_API_URL}/lines-wrinkles-page-component`;
    console.log("Fetching from:", endpoint);

    const res = await fetch(
      `${endpoint}?where[isActive][equals]=true&depth=2&limit=1`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("API Response:", data);

    // Check if we got docs array
    if (data.docs && Array.isArray(data.docs) && data.docs.length > 0) {
      console.log("Found active document:", data.docs[0]);
      return data.docs[0];
    }

    console.warn("No active document found");
    return null;
  } catch (error) {
    console.error("Error fetching Lines And Wrinkles page data:", error);
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