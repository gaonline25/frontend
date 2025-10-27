const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "http://localhost:3001/api";

export async function fetchConfidentialityStatementData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/confidentiality-statement-component?depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch confidentiality statement data");
    }

    const data = await res.json();

    // Filter active components and return the first one
    const activeComponent =
      data.docs?.find((component: any) => component.isActive) || null;

    return activeComponent;
  } catch (error) {
    console.error("Error fetching confidentiality statement data:", error);
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

export function renderRichText(richTextContent: any): string {
  if (!richTextContent) return "";

  // Handle Lexical editor format from Payload CMS
  if (richTextContent.root && richTextContent.root.children) {
    return renderLexicalNodes(richTextContent.root.children);
  }

  // Fallback for string content
  if (typeof richTextContent === "string") {
    return richTextContent;
  }

  return "";
}

function renderLexicalNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return "";

  return nodes
    .map((node: any) => {
      // Handle paragraph nodes
      if (node.type === "paragraph") {
        const alignment = node.format || "start";
        const alignClass =
          alignment !== "start" ? ` style="text-align: ${alignment}"` : "";
        const content = node.children ? renderLexicalNodes(node.children) : "";

        // Don't render empty paragraphs
        if (!content.trim()) {
          return "<br />";
        }

        return `<p${alignClass}>${content}</p>`;
      }

      // Handle text nodes
      if (node.type === "text") {
        let text = node.text || "";

        // Apply formatting
        if (node.format === 1 || node.format === "bold") {
          text = `<strong>${text}</strong>`;
        }
        if (node.format === 2 || node.format === "italic") {
          text = `<em>${text}</em>`;
        }
        if (node.format === 4 || node.format === "underline") {
          text = `<u>${text}</u>`;
        }

        return text;
      }

      // Handle line breaks
      if (node.type === "linebreak") {
        return "<br />";
      }

      // Handle heading nodes
      if (node.type === "heading") {
        const tag = node.tag || "h2";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${tag}>${content}</${tag}>`;
      }

      // Handle list nodes
      if (node.type === "list") {
        const listTag = node.listType === "number" ? "ol" : "ul";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${listTag}>${content}</${listTag}>`;
      }

      // Handle list item nodes
      if (node.type === "listitem") {
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<li>${content}</li>`;
      }

      // Handle link nodes
      if (node.type === "link") {
        const url = node.url || "#";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<a href="${url}">${content}</a>`;
      }

      return "";
    })
    .join("");
}
