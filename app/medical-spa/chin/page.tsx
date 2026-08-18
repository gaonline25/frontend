// // import ChinPage from "@/components/medical-spa/chin/ChinPage";


// // export default function Chin() {
// //     return (
// //         <>
// //             <ChinPage />
// //         </>
// //     )
// // }



// import ChinPage from "@/components/medical-spa/chin/ChinPage";
// import { fetchChinFillersPageData } from "@/lib/api/medicalSpa/fetchChinPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ISR - rebuild every 60 seconds

// // Fetch CMS data securely server-side
// async function getData() {
//   try {
//     const data = await fetchChinFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Chin Page data:", error);
//     return null;
//   }
// }

// // Dynamic SEO metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seo || {};

//   return {
//     title:
//       seo?.metaTitle ||
//       "Chin Fillers - Define and Balance Your Profile | Goldfingers Aesthetics",
//     description:
//       seo?.metaDescription ||
//       "Achieve a naturally balanced and contoured jawline with expert chin filler treatments by Goldfingers Aesthetics.",
//     openGraph: {
//       title:
//         seo?.metaTitle ||
//         "Chin Fillers - Define and Balance Your Profile | Goldfingers Aesthetics",
//       description:
//         seo?.metaDescription ||
//         "Professional chin filler treatments designed for facial harmony and confidence.",
//       images: [
//         {
//           url:
//             seo?.openGraphImage ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Chin Filler Treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//   };
// }

// // Server component rendering
// export default async function Chin() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-600">Failed to load Chin Page data.</p>
//       </main>
//     );
//   }

//   return <ChinPage data={data} />;
// }



import ChinPage from "@/components/medical-spa/chin/ChinPage";
import { fetchChinFillersPageData } from "@/lib/api/medicalSpa/fetchChinPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchChinFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Chin Page data:", error);
    return null;
  }
}

// ==========================
// ✅ Advanced SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};

  const url = "https://goldfingersaesthetics.com/medical-spa/chin";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo?.metaTitle ||
      "Chin Fillers in Florida | Non-Surgical Chin Augmentation | Goldfingers Aesthetics",

    description:
      seo?.metaDescription ||
      "Enhance chin projection and define your jawline with expert chin filler injections at Goldfingers Aesthetics. Non-surgical chin augmentation available across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo?.metaTitle || "Chin Filler Injections | Goldfingers Aesthetics",
      description:
        seo?.metaDescription ||
        "Non-surgical chin contouring and jawline enhancement using advanced dermal fillers.",
      url,
      siteName: "Goldfingers Aesthetics",
      type: "website",
      locale: "en_US",
      images: [
        {
          url:
            seo?.openGraphImage ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Chin Filler Treatment at Goldfingers Aesthetics",
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
      "Chin fillers Florida",
      "Chin filler injections",
      "Non-surgical chin augmentation",
      "Chin contouring filler",
      "Jawline and chin filler",
      "Chin projection filler",
      "Dermal fillers for chin",
      "Goldfingers Aesthetics chin filler",
    ],
  };
}

// ==========================
// ✅ Structured Data
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      name: "Chin Filler Injections",
      procedureType: "Minimally Invasive",
      description:
        "Chin filler injections improve chin projection, enhance jawline definition, and balance facial profile without surgery.",
      bodyLocation: "Chin",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
        url: "https://goldfingersaesthetics.com",
      },
    },
    {
      "@type": "WebPage",
      name: "Chin Fillers",
      url: "https://goldfingersaesthetics.com/medical-spa/chin",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://goldfingersaesthetics.com",
      },
    },
  ],
};

// ==========================
// ✅ Page Component
// ==========================
export default async function Chin() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-600">Failed to load Chin Page data.</p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="chin-fillers-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ChinPage data={data} />
    </>
  );
}
