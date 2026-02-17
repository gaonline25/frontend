// // import LiposuctionPage from "@/components/plastic-surgery/liposuction/LiposuctionPage";


// // export default function Liposuction() {
// //     return (
// //         <>
// //             <LiposuctionPage />
// //         </>
// //     )
// // }


// import LiposuctionPage from "@/components/plastic-surgery/liposuction/LiposuctionPage";
// import { fetchLiposuctionPageData } from "@/lib/api/plasticSurgery/fetchLiposuctionPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Refresh content every 60s (ISR)

// // ✅ Secure server-side data fetching from Payload CMS
// async function getData() {
//   try {
//     const data = await fetchLiposuctionPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Liposuction page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO Metadata (CMS-driven)
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Liposuction Surgery | Goldfingers Aesthetics – Sculpt Your Confidence",
//     description:
//       seo.metaDescription ||
//       "Goldfingers Aesthetics offers advanced liposuction procedures to contour and refine your body shape with precision and care.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Liposuction | Goldfingers Aesthetics – Advanced Body Contouring",
//       description:
//         seo.metaDescription ||
//         "Experience advanced liposuction at Goldfingers Aesthetics. Remove stubborn fat, enhance definition, and achieve lasting confidence.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Liposuction procedure at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "liposuction, body contouring, fat removal, cosmetic surgery, Goldfingers Aesthetics, body sculpting, Florida plastic surgery",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function Liposuction() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Liposuction page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-managed content
//   return <LiposuctionPage data={data} />;
// }




import LiposuctionPage from "@/components/plastic-surgery/liposuction/LiposuctionPage";
import { fetchLiposuctionPageData } from "@/lib/api/plasticSurgery/fetchLiposuctionPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchLiposuctionPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liposuction page data:", error);
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
    "https://www.goldfingersaesthetics.com/plastic-surgery/liposuction";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Liposuction in Florida | Body Contouring & Fat Removal | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Looking for liposuction in Florida? Goldfingers Aesthetics offers advanced body contouring procedures to remove stubborn fat and sculpt natural, long-lasting results.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: seo.metaTitle || "Liposuction in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Advanced liposuction and body sculpting procedures performed by expert plastic surgeons. Refine your shape and boost confidence.",
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
          alt: "Liposuction surgery at Goldfingers Aesthetics",
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
      "liposuction Florida",
      "body contouring surgery",
      "fat removal surgery",
      "liposuction near me",
      "abdominal liposuction",
      "liposuction cost Florida",
      "plastic surgeon liposuction",
      "Goldfingers liposuction",
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
      url: "https://www.goldfingersaesthetics.com",
      medicalSpecialty: "PlasticSurgery",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Liposuction",
      procedureType: "SurgicalProcedure",
      bodyLocation: "Abdomen, thighs, arms, chin, back",
      description:
        "Liposuction is a surgical body contouring procedure that removes excess fat deposits to improve body shape and definition.",
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
export default async function Liposuction() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Liposuction page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="liposuction-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <LiposuctionPage data={data} />
    </>
  );
}
