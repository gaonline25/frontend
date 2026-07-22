// // import BreastRevisionPage from "@/components/plastic-surgery/breast-revision/BreastRevisionPage";


// // export default function BreastRevision() {
// //     return (
// //         <>
// //             <BreastRevisionPage />
// //         </>
// //     )
// // }



// import BreastRevisionPage from "@/components/plastic-surgery/breast-revision/BreastRevisionPage";
// import { fetchBreastRevisionPageData } from "@/lib/api/plasticSurgery/fetchBreastRevisionPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Regenerate static page every 60s (fresh from CMS)

// // ✅ Server-side data fetching (secure)
// async function getData() {
//   try {
//     const data = await fetchBreastRevisionPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Breast Revision page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO Metadata (auto from Payload CMS)
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Breast Revision Surgery | Goldfingers Aesthetics – Correct, Restore, Perfect",
//     description:
//       seo.metaDescription ||
//       "Goldfingers Aesthetics specializes in breast revision surgery to correct, refine, and restore balance after previous augmentation or reconstruction procedures.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Breast Revision | Goldfingers Aesthetics – Precision and Confidence",
//       description:
//         seo.metaDescription ||
//         "Expert breast revision surgery at Goldfingers Aesthetics — for enhanced symmetry, comfort, and natural results after prior cosmetic surgery.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Breast revision surgery at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "breast revision, breast implant correction, revision surgery, plastic surgery, cosmetic surgery, Goldfingers Aesthetics, Florida",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function BreastRevision() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Breast Revision page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render component with CMS data
//   return <BreastRevisionPage data={data} />;
// }




import BreastRevisionPage from "@/components/plastic-surgery/breast-revision/BreastRevisionPage";
import { fetchBreastRevisionPageData } from "@/lib/api/plasticSurgery/fetchBreastRevisionPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchBreastRevisionPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Revision page data:", error);
    return null;
  }
}

// ==============================
// ✅ ADVANCED SEO METADATA
// ==============================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url =
    "https://goldfingersaesthetics.com/plastic-surgery/breast-revision";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Breast Revision Surgery in Florida | Implant Correction & Removal | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Considering breast revision surgery? Goldfingers Aesthetics specializes in correcting implant complications, capsular contracture, asymmetry, and implant removal in Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Revision Surgery in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Expert breast implant revision and correction surgery. Restore symmetry, comfort, and confidence with advanced surgical techniques.",
      url,
      siteName: "Goldfingers Aesthetics",
      type: "website",
      locale: "en_US",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Breast revision surgery at Goldfingers Aesthetics",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      "breast revision surgery Florida",
      "breast implant revision",
      "capsular contracture surgery",
      "breast implant removal",
      "correct breast implants",
      "breast asymmetry correction",
      "breast surgery correction Florida",
      "Goldfingers breast revision",
    ],
  };
}

// ==============================
// ✅ STRUCTURED DATA (SURGICAL)
// ==============================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Goldfingers Aesthetics",
      url: "https://goldfingersaesthetics.com",
      medicalSpecialty: "PlasticSurgery",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Breast Revision Surgery",
      procedureType: "SurgicalProcedure",
      bodyLocation: "Breast",
      description:
        "Breast revision surgery corrects complications from previous breast augmentation or reconstruction procedures, including implant rupture, capsular contracture, asymmetry, or dissatisfaction with results.",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
    },
  ],
};

// ==============================
// ✅ PAGE COMPONENT
// ==============================
export default async function BreastRevision() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Breast Revision page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="breast-revision-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BreastRevisionPage data={data} />
    </>
  );
}
