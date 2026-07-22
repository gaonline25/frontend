// // import RestylanePageComponent from "@/components/medical-spa/restylane/RestylanePageComponent";


// // export default function Restylane() {
// //     return (
// //         <>
// //             <RestylanePageComponent />
// //         </>
// //     )
// // }



// import RestylanePageComponent from "@/components/medical-spa/restylane/RestylanePageComponent";
// import { fetchRestylanePageData } from "@/lib/api/medicalSpa/fetchRestylanePageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Incremental Static Regeneration (ISR) every 60 seconds

// // ✅ Server-side fetch for Restylane page data
// async function getData() {
//   try {
//     const data = await fetchRestylanePageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Restylane page data:", error);
//     return null;
//   }
// }

// // ✅ SEO metadata configuration
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Restylane | Goldfingers Aesthetics - Dermal Filler for Smooth, Natural Results",
//     description:
//       seo.metaDescription ||
//       "Discover the benefits of Restylane at Goldfingers Aesthetics — a hyaluronic acid dermal filler designed to restore volume and smooth fine lines for natural beauty.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Restylane | Goldfingers Aesthetics - Natural Volume & Youthful Look",
//       description:
//         seo.metaDescription ||
//         "Restylane treatments at Goldfingers Aesthetics help restore skin volume, enhance contours, and smooth fine lines naturally.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Restylane filler treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "Restylane, dermal filler, hyaluronic acid, facial rejuvenation, wrinkle filler, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function RestylanePage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Restylane page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render the Restylane page component with fetched CMS data
//   return <RestylanePageComponent data={data} />;
// }




import RestylanePageComponent from "@/components/medical-spa/restylane/RestylanePageComponent";
import { fetchRestylanePageData } from "@/lib/api/medicalSpa/fetchRestylanePageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchRestylanePageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Restylane page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/medical-spa/restylane";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Restylane Filler in Florida | Lips, Cheeks & Facial Contouring",

    description:
      seo.metaDescription ||
      "Restylane dermal fillers at Goldfingers Aesthetics restore volume, smooth wrinkles, and enhance lips and cheeks with natural-looking results across Florida locations.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle || "Restylane Dermal Fillers | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Enhance lips, smooth lines, and restore youthful contours with Restylane fillers performed by expert injectors.",
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
          alt: "Restylane filler treatment",
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
      "Restylane Florida",
      "Restylane near me",
      "Restylane lip filler",
      "Restylane cheek filler",
      "Restylane under eye filler",
      "hyaluronic acid filler",
      "Restylane cost Florida",
      "dermal fillers Florida",
      "Goldfingers Aesthetics Restylane",
    ],
  };
}

// ==========================
// ✅ STRUCTURED DATA
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Goldfingers Aesthetics",
      url: "https://goldfingersaesthetics.com",
      medicalSpecialty: "Cosmetic",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Restylane Dermal Filler",
      procedureType: "Minimally Invasive",
      description:
        "Restylane is a hyaluronic acid dermal filler used to restore facial volume, enhance lips, smooth wrinkles, and contour cheeks and jawline.",
    },
    {
      "@type": "Service",
      name: "Restylane Fillers",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
    },
    {
      "@type": "WebPage",
      name: "Restylane",
      url: "https://goldfingersaesthetics.com/medical-spa/restylane",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function RestylanePage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Restylane page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="restylane-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <RestylanePageComponent data={data} />
    </>
  );
}
