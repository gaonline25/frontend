// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://goldfingerbackend.vercel.app/api";

// export async function fetchDysportPageData(id = "68e765a6d0c254fea6f304d1") {
//   try {
//     const url = `${PAYLOAD_API_URL}/dysport-page-component/${id}?depth=2&draft=false&trash=false`;
//     const res = await fetch(url, {
//       next: { revalidate: 60 },
//       cache: "force-cache",
//     });
//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch Dysport page data: ${res.status} ${res.statusText}`
//       );
//     }
//     const data = await res.json();
//     console.log("Fetched data:", JSON.stringify(data, null, 2)); // Debug log
//     return data.isActive ? data : null;
//   } catch (error) {
//     console.error("Error fetching Dysport page data:", error);
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
//     return { mobile: "", tablet: "", desktop: "", large: "", alt: "" };
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
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://goldfingerbackend.vercel.app/api";

export async function fetchDysportPageData(id = "68ea6e1a8253bd170bd9d752") {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/dysport-page-component/${id}?depth=2&draft=false&trash=false`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch Dysport page data: ${res.status} ${res.statusText}`
      );
    }
    const data = await res.json();
    console.log("Fetched Dysport data:", data); // Debug log
    return data.isActive ? data : null;
  } catch (error) {
    console.error("Error fetching Dysport page data:", error);
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