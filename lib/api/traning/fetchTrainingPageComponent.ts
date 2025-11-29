// // lib/api.ts or utils/api.ts

// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://backend-orpin-six-56.vercel.app/api";

// // Fetch Lip Fillers Page Data
// export async function fetchTrainingFillersPageData() {
//   try {
//     const res = await fetch(
//       `${PAYLOAD_API_URL}/training-page-component?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
//       {
//         next: { revalidate: 60 },
//         cache: "force-cache",
//       }
//     );
//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch Lip Fillers page data: ${res.statusText}`
//       );
//     }
//     const data = await res.json();
//     const activeComponent =
//       data.docs?.find((component: any) => component.isActive) || null;
//     console.log("Fetched Lip Fillers data:", activeComponent);
//     return activeComponent;
//   } catch (error) {
//     console.error("Error fetching Lip Fillers page data:", error);
//     return null;
//   }
// }

// // Helper function to get image URL
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

// // Helper function to get responsive image URLs
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

// // Convert Lexical JSON to HTML
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





// lib/api/training/fetchTrainingApplication.ts

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'https://backend-orpin-six-56.vercel.app/api';

export interface TrainingApplicationData {
  componentName?: string;
  heroSection?: any;
  enrollSection?: any;
  formSection?: any;
  faqSection?: any;
  finalCtaSection?: any;
  sectionOrder?: Array<{ section: string }>;
  globalStyles?: any;
}

/**
 * Fetch Training Application page data from Payload CMS
 */
export async function fetchTrainingApplicationPageData(): Promise<TrainingApplicationData | null> {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/training-page-component?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch training application data: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.docs && data.docs.length > 0) {
      return data.docs[0] as TrainingApplicationData;
    }

    return null;
  } catch (error) {
    console.error('Error fetching training application page data:', error);
    return null;
  }
}

/**
 * Submit form data to Payload CMS
 */
export async function submitTrainingForm(formData: any): Promise<{ success: boolean; message: string; id?: string }> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/form-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'training',
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        preferredTrainingMonth: formData.preferred_training_month || '',
        preferredTrainingProgram: formData.preferred_training_program,
        questionsOrComments: formData.questions_or_comments || '',
        optinForSmsTexting: formData.optin_for_sms_texting === 'Yes',
        permissionToFollowUp: formData.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text === 'Yes',
        rawFormData: formData,
        submittedAt: new Date().toISOString(),
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Form submitted successfully',
        id: result.doc?.id || result.id,
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to submit form',
      };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'An error occurred while submitting the form',
    };
  }
}

/**
 * Convert Lexical JSON to HTML
 */
export function lexicalToHtml(lexicalData: any): string {
  if (!lexicalData) return '';
  
  if (typeof lexicalData === 'string') {
    return lexicalData;
  }

  if (lexicalData.root && lexicalData.root.children) {
    return convertLexicalNodes(lexicalData.root.children);
  }

  return '';
}

function convertLexicalNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return '';

  return nodes
    .map((node) => {
      switch (node.type) {
        case 'paragraph':
          return `<p>${convertLexicalNodes(node.children || [])}</p>`;
        
        case 'heading':
          const level = node.tag || 'h2';
          return `<${level}>${convertLexicalNodes(node.children || [])}</${level}>`;
        
        case 'list':
          const listTag = node.listType === 'number' ? 'ol' : 'ul';
          return `<${listTag}>${convertLexicalNodes(node.children || [])}</${listTag}>`;
        
        case 'listitem':
          return `<li>${convertLexicalNodes(node.children || [])}</li>`;
        
        case 'link':
          const url = node.fields?.url || node.url || '#';
          const target = node.fields?.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
          return `<a href="${url}"${target}>${convertLexicalNodes(node.children || [])}</a>`;
        
        case 'text':
          let text = node.text || '';
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
          return node.text || '';
      }
    })
    .join('');
}

/**
 * Get image URL from Payload media object
 */
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