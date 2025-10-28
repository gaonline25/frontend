// lib/api/training/fetchTrainingApplicationSimple.ts

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://goldfingerbackend.vercel.app/api";

export interface TrainingApplicationSimpleData {
  componentName?: string;
  introSection?: any;
  formSection?: any;
  sectionOrder?: Array<{ section: string }>;
  globalStyles?: any;
}

/**
 * Fetch Training Application Simple page data from Payload CMS
 */
export async function fetchTrainingApplicationSimplePageData(): Promise<TrainingApplicationSimpleData | null> {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/training-application-simple-component?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch training application simple data: ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data.docs && data.docs.length > 0) {
      return data.docs[0] as TrainingApplicationSimpleData;
    }

    return null;
  } catch (error) {
    console.error(
      "Error fetching training application simple page data:",
      error
    );
    return null;
  }
}

/**
 * Submit form data to Payload CMS
 */
export async function submitTrainingFormSimple(
  formData: any
): Promise<{ success: boolean; message: string; id?: string }> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/form-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "training",
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        preferredTrainingMonth: formData.preferred_training_month || "",
        preferredTrainingProgram: formData.preferred_training_program,
        questionsOrComments: formData.questions_or_comments || "",
        optinForSmsTexting: formData.optin_for_sms_texting === "Yes",
        permissionToFollowUp:
          formData.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
          "Yes",
        rawFormData: formData,
        submittedAt: new Date().toISOString(),
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: "Form submitted successfully",
        id: result.doc?.id || result.id,
      };
    } else {
      return {
        success: false,
        message: result.message || "Failed to submit form",
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "An error occurred while submitting the form",
    };
  }
}

/**
 * Convert Lexical JSON to HTML
 */
export function lexicalToHtml(lexicalData: any): string {
  if (!lexicalData) return "";

  if (typeof lexicalData === "string") {
    return lexicalData;
  }

  if (lexicalData.root && lexicalData.root.children) {
    return convertLexicalNodes(lexicalData.root.children);
  }

  return "";
}

function convertLexicalNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return "";

  return nodes
    .map((node) => {
      switch (node.type) {
        case "paragraph":
          return `<p>${convertLexicalNodes(node.children || [])}</p>`;

        case "heading":
          const level = node.tag || "h2";
          return `<${level}>${convertLexicalNodes(
            node.children || []
          )}</${level}>`;

        case "list":
          const listTag = node.listType === "number" ? "ol" : "ul";
          return `<${listTag}>${convertLexicalNodes(
            node.children || []
          )}</${listTag}>`;

        case "listitem":
          return `<li>${convertLexicalNodes(node.children || [])}</li>`;

        case "link":
          const url = node.fields?.url || node.url || "#";
          const target = node.fields?.newTab
            ? ' target="_blank" rel="noopener noreferrer"'
            : "";
          return `<a href="${url}"${target}>${convertLexicalNodes(
            node.children || []
          )}</a>`;

        case "text":
          let text = node.text || "";
          if (node.format) {
            if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
            if (node.format & 2) text = `<em>${text}</em>`; // Italic
            if (node.format & 8) text = `<u>${text}</u>`; // Underline
          }
          return text;

        default:
          if (node.children) {
            return convertLexicalNodes(node.children);
          }
          return node.text || "";
      }
    })
    .join("");
}

/**
 * Get image URL from Payload media object
 */
// Helper function to get image URL
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
  
  // Helper function to get responsive image URLs
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
 * Get placeholder for lazy loading
 */
export function getPlaceholderImage(): string {
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
}
