// // import CheekFillers from "@/components/medical-spa/cheek-fillers/CheekFillers";


// // export default function CheekFiller() {
// //     return (
// //         <>
// //             <CheekFillers />
// //         </>
// //     )
// // }


// import CheekFillers from "@/components/medical-spa/cheek-fillers/CheekFillers";
// import { fetchCheekFillersPageData } from "@/lib/api/medicalSpa/fetchCheekFillersPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // Rebuild every 60 seconds with ISR

// async function getData() {
//   try {
//     const data = await fetchCheekFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Cheek Fillers data:", error);
//     return null;
//   }
// }

// // Dynamic SEO Metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seo || {};

//   return {
//     title:
//       seo?.metaTitle ||
//       "Cheek Fillers - Enhance Your Natural Beauty | Goldfingers Aesthetics",
//     description:
//       seo?.metaDescription ||
//       "Discover natural-looking cheek filler treatments at Goldfingers Aesthetics. Restore youthful volume and achieve balance safely.",
//     openGraph: {
//       title:
//         seo?.metaTitle ||
//         "Cheek Fillers - Enhance Your Natural Beauty | Goldfingers Aesthetics",
//       description:
//         seo?.metaDescription ||
//         "Expert cheek filler services with safe, natural-looking results.",
//       images: [
//         {
//           url:
//             seo?.openGraphImage ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Cheek Fillers at Goldfingers Aesthetics",
//         },
//       ],
//     },
//   };
// }

// export default async function CheekFillerPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">Failed to load page data.</p>
//       </main>
//     );
//   }

//   return <CheekFillers data={data} />;
// }




import CheekFillers from "@/components/medical-spa/cheek-fillers/CheekFillers";
import { fetchCheekFillersPageData } from "@/lib/api/medicalSpa/fetchCheekFillersPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchCheekFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Cheek Fillers data:", error);
    return null;
  }
}

// ==========================
// ✅ Advanced SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};

  const url = "https://www.goldfingersaesthetics.com/medical-spa/cheek-fillers";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo?.metaTitle ||
      "Cheek Fillers in Florida | Non-Surgical Cheek Augmentation | Goldfingers Aesthetics",

    description:
      seo?.metaDescription ||
      "Enhance facial contour and restore youthful volume with expert cheek filler injections at Goldfingers Aesthetics. Safe, natural-looking dermal fillers available across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo?.metaTitle || "Cheek Filler Injections | Goldfingers Aesthetics",
      description:
        seo?.metaDescription ||
        "Professional cheek filler treatments to lift, contour, and restore facial balance with natural results.",
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
          alt: "Cheek Fillers at Goldfingers Aesthetics",
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
      "Cheek fillers Florida",
      "Cheek filler injections",
      "Dermal fillers for cheeks",
      "Non-surgical cheek augmentation",
      "Cheek contouring filler",
      "Voluma cheek filler",
      "Facial volume restoration",
      "Goldfingers Aesthetics cheek fillers",
    ],
  };
}

// ==========================
// ✅ Structured Data (MedicalProcedure)
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      name: "Cheek Filler Injections",
      procedureType: "Minimally Invasive",
      description:
        "Cheek filler injections restore lost facial volume, enhance cheek contour, and create natural-looking lift without surgery.",
      bodyLocation: "Cheeks",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
    {
      "@type": "WebPage",
      name: "Cheek Fillers",
      url: "https://www.goldfingersaesthetics.com/medical-spa/cheek-fillers",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
  ],
};

// ==========================
// ✅ Page Component
// ==========================
export default async function CheekFillerPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">Failed to load page data.</p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="cheek-fillers-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <CheekFillers data={data} />
    </>
  );
}
