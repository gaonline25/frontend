// import ConfidentialityStatement from "@/components/confidentiality-statement/ConfidentialityStatement";

// export default function ConfidentialityStatements() {
//   return (
//     <>
//       <ConfidentialityStatement />
//     </>
//   );
// }



// app/confidentiality-statement/page.tsx
import ConfidentialityStatement from "@/components/confidentiality-statement/ConfidentialityStatement";
import { Metadata } from "next";
import Script from "next/script";


// export const revalidate = 300; // ✅ Rebuild every 5 minutes (ISR)

// // ✅ SEO Metadata
// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const res = await fetch(
//       `${
//         process.env.PAYLOAD_API_URL ||
//         "https://backend-orpin-six-56.vercel.app/api"
//       }/confidentiality-statement-component?depth=2&limit=1`,
//       { next: { revalidate: 300 } }
//     );

//     if (!res.ok) throw new Error("Failed to fetch metadata");

//     const json = await res.json();
//     const data = json?.docs?.[0] || {};
//     const hero = data.sections?.find((s: any) => s.sectionType === "hero")
//       ?.heroSection || {};

//     const title =
//       hero.title || "Confidentiality Statement | Goldfingers Aesthetics";
//     const description =
//       hero.metaDescription ||
//       "Review Goldfingers Aesthetics confidentiality statement regarding data protection, client information, and privacy policies.";
//     const ogImage =
//       hero.backgroundImage?.url ||
//       hero.mediaImage?.url ||
//       "https://www.goldfingersaesthetics.com/default-og.jpg";

//     return {
//       title,
//       description,
//       alternates: {
//         canonical:
//           "https://www.goldfingersaesthetics.com/confidentiality-statement",
//       },
//       openGraph: {
//         title,
//         description,
//         url: "https://www.goldfingersaesthetics.com/confidentiality-statement",
//         images: [{ url: ogImage }],
//         siteName: "Goldfingers Aesthetics",
//       },
//       twitter: {
//         card: "summary_large_image",
//         title,
//         description,
//         images: [ogImage],
//       },
//     };
//   } catch (err) {
//     console.error("Metadata fetch error:", err);
//     return {
//       title: "Confidentiality Statement | Goldfingers Aesthetics",
//       description:
//         "Learn about Goldfingers Aesthetics confidentiality and privacy policy.",
//     };
//   }
// }


export const revalidate = 300; // ISR every 5 minutes

// ==========================
// ✅ SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${
        process.env.PAYLOAD_API_URL ||
        "https://backend-orpin-six-56.vercel.app/api"
      }/confidentiality-statement-component?depth=2&limit=1`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) throw new Error("Failed to fetch metadata");

    const json = await res.json();
    const data = json?.docs?.[0] || {};
    const hero =
      data.sections?.find((s: any) => s.sectionType === "hero")?.heroSection ||
      {};

    const title =
      hero.title ||
      "Confidentiality & Privacy Policy | Goldfingers Aesthetics Florida";

    const description =
      hero.metaDescription ||
      "Goldfingers Aesthetics is committed to protecting patient confidentiality and safeguarding personal health information across all Florida locations. Review our privacy and data protection practices.";

    const ogImage =
      hero.backgroundImage?.cloudinary_url ||
      hero.backgroundImage?.url ||
      hero.mediaImage?.cloudinary_url ||
      hero.mediaImage?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    const url =
      "https://www.goldfingersaesthetics.com/confidentiality-statement";

    return {
      title,
      description,
      metadataBase: new URL("https://www.goldfingersaesthetics.com"),
      alternates: {
        canonical: url,
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Goldfingers Aesthetics",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: "Goldfingers Aesthetics Privacy & Confidentiality Policy",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
      robots: {
        index: true,
        follow: true,
      },
      keywords: [
        "Goldfingers Aesthetics privacy policy",
        "Confidentiality statement Florida med spa",
        "Patient confidentiality med spa",
        "Medical spa data protection",
        "HIPAA compliance aesthetics clinic",
      ],
    };
  } catch (err) {
    return {
      title:
        "Confidentiality & Privacy Policy | Goldfingers Aesthetics Florida",
      description:
        "Review Goldfingers Aesthetics confidentiality statement and data protection practices for patient privacy across Florida locations.",
    };
  }
}


// ✅ Server-side data fetching
async function getConfidentialityData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/confidentiality-statement-component?depth=2&limit=1`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch confidentiality data:", res.status);
    return null;
  }

  const json = await res.json();
  return json?.docs?.[0] || null;
}


const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Confidentiality & Privacy Policy",
  url: "https://www.goldfingersaesthetics.com/confidentiality-statement",
  description:
    "Goldfingers Aesthetics confidentiality and privacy statement outlining patient data protection, HIPAA-aligned practices, and medical information security across Florida locations.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Goldfingers Aesthetics",
    url: "https://www.goldfingersaesthetics.com",
  },
  publisher: {
    "@type": "MedicalBusiness",
    name: "Goldfingers Aesthetics",
    url: "https://www.goldfingersaesthetics.com",
  },
};

// ✅ Page Component
export default async function ConfidentialityStatements() {
  const data = await getConfidentialityData();
  return (
    <>
      <Script
        id="confidentiality-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ConfidentialityStatement data={data} />
    </>
  );
}
