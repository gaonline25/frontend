// // import HandRejuvenation from "@/components/medical-spa/hands/HandRejuvenation";


// // export default function Hands() {
// //     return (
// //         <>
// //             <HandRejuvenation />
// //         </>
// //     )
// // }



// import HandRejuvenationPage from "@/components/medical-spa/hands/HandRejuvenation";
// import { fetchHandFillersPageData } from "@/lib/api/medicalSpa/fetchHandRejuvenationPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR: rebuild every 60 seconds

// async function getData() {
//   try {
//     const data = await fetchHandFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Hand Rejuvenation data:", error);
//     return null;
//   }
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Hand Rejuvenation | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Restore youthfulness to your hands with advanced rejuvenation treatments at Goldfingers Aesthetics.",
//     openGraph: {
//       title: seo.metaTitle || "Hand Rejuvenation | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Professional hand rejuvenation treatments designed to smooth, plump, and restore your hands.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Hand Rejuvenation Treatment",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "hand fillers, rejuvenation, Goldfingers Aesthetics, cosmetic treatments",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// export default async function Hands() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Hand Rejuvenation page content.
//         </p>
//       </main>
//     );
//   }

//   return <HandRejuvenationPage data={data} />;
// }




import HandRejuvenationPage from "@/components/medical-spa/hands/HandRejuvenation";
import { fetchHandFillersPageData } from "@/lib/api/medicalSpa/fetchHandRejuvenationPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchHandFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Hand Rejuvenation data:", error);
    return null;
  }
}

// ==========================
// ✅ Advanced SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url =
    "https://www.goldfingersaesthetics.com/medical-spa/hand-rejuvenation";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Hand Rejuvenation in Florida | Hand Fillers & Radiesse | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Restore youthful-looking hands with professional hand rejuvenation treatments in Florida. Goldfingers Aesthetics offers hand fillers and Radiesse to reduce wrinkles and volume loss.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Hand Rejuvenation Treatment | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Smooth wrinkles, restore lost volume, and rejuvenate aging hands with expert hand filler treatments.",
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
          alt: "Hand rejuvenation treatment at Goldfingers Aesthetics",
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
      "Hand rejuvenation Florida",
      "Hand fillers near me",
      "Radiesse for hands",
      "Hand wrinkle treatment",
      "Restore volume in hands",
      "Aging hands treatment",
      "Cosmetic hand fillers Florida",
      "Med spa hand rejuvenation",
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
      name: "Hand Rejuvenation Treatment",
      procedureType: "Non-Invasive",
      description:
        "Hand rejuvenation treatments using dermal fillers such as Radiesse to restore lost volume, smooth wrinkles, and improve skin texture.",
      bodyLocation: "Hands",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
    {
      "@type": "WebPage",
      name: "Hand Rejuvenation",
      url: "https://www.goldfingersaesthetics.com/medical-spa/hand-rejuvenation",
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
export default async function Hands() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Hand Rejuvenation page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="hand-rejuvenation-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HandRejuvenationPage data={data} />
    </>
  );
}
