// // import BreastReductionPage from "@/components/plastic-surgery/breast-reduction/BreastReductionPage";


// // export default function breastReduction() {
// //     return (
// //         <>
// //             <BreastReductionPage />
// //         </>
// //     )
// // }



// import BreastReductionPage from "@/components/plastic-surgery/breast-reduction/BreastReductionPage";
// import { fetchBreastReductionPageData } from "@/lib/api/plasticSurgery/fetchBreastReductionPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR every 60 seconds (fresh CMS updates)

// // ✅ Server-side data fetching from Payload CMS
// async function getData() {
//   try {
//     const data = await fetchBreastReductionPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Breast Reduction page data:", error);
//     return null;
//   }
// }

// // ✅ SEO metadata dynamically pulled from CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Breast Reduction Surgery | Goldfingers Aesthetics – Balanced Beauty, Expert Care",
//     description:
//       seo.metaDescription ||
//       "Achieve balance and comfort with Goldfingers Aesthetics’ advanced breast reduction surgery. Personalized care and expert precision for natural, confident results.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Breast Reduction | Goldfingers Aesthetics – Confidence Through Comfort",
//       description:
//         seo.metaDescription ||
//         "Goldfingers Aesthetics offers expert breast reduction surgery designed to enhance comfort and proportion while maintaining beautiful, natural contours.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Breast reduction at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "breast reduction, mammoplasty, plastic surgery, breast contouring, Goldfingers Aesthetics, cosmetic surgery, body balance",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function BreastReduction() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Breast Reduction page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-based content
//   return <BreastReductionPage data={data} />;
// }



import BreastReductionPage from "@/components/plastic-surgery/breast-reduction/BreastReductionPage";
import { fetchBreastReductionPageData } from "@/lib/api/plasticSurgery/fetchBreastReductionPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchBreastReductionPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Reduction page data:", error);
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
    "https://www.goldfingersaesthetics.com/plastic-surgery/breast-reduction";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Breast Reduction in Florida (Reduction Mammoplasty) | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Struggling with back, neck, or shoulder pain from large breasts? Goldfingers Aesthetics offers expert breast reduction surgery in Florida to improve comfort, balance, and confidence.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Reduction Surgery in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Restore comfort and proportion with reduction mammoplasty at Goldfingers Aesthetics. Advanced surgical techniques and personalized care.",
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
          alt: "Breast reduction surgery at Goldfingers Aesthetics in Florida",
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
      "breast reduction Florida",
      "breast reduction surgery",
      "reduction mammoplasty",
      "breast reduction near me",
      "large breast pain relief",
      "insurance breast reduction",
      "plastic surgeon Florida",
      "Goldfingers breast reduction",
    ],
  };
}

// ==============================
// ✅ STRUCTURED DATA (MEDICAL)
// ==============================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Goldfingers Aesthetics",
      url: "https://www.goldfingersaesthetics.com",
      medicalSpecialty: "PlasticSurgery",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Breast Reduction Surgery (Reduction Mammoplasty)",
      procedureType: "SurgicalProcedure",
      bodyLocation: "Breast",
      description:
        "Breast reduction surgery removes excess breast tissue and skin to relieve discomfort, improve posture, and create balanced, proportionate contours.",
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
export default async function BreastReduction() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Breast Reduction page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="breast-reduction-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BreastReductionPage data={data} />
    </>
  );
}
