// // import RestylaneContourComponent from "@/components/medical-spa/restylane-contour/RestylaneContourComponent";



// // export default function RestylaneContour() {
// //     return (
// //         <>
// //             <RestylaneContourComponent />
// //         </>
// //     )
// // }



// import RestylaneContourComponent from "@/components/medical-spa/restylane-contour/RestylaneContourComponent";
// import { fetchRestylaneContourPageData } from "@/lib/api/medicalSpa/fetchRestylaneContourPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Incremental Static Regeneration every 60s

// // ✅ Secure server-only data fetching
// async function getData() {
//   try {
//     const data = await fetchRestylaneContourPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Restylane Contour page data:", error);
//     return null;
//   }
// }

// // ✅ SEO metadata pulled from Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Restylane Contour | Goldfingers Aesthetics - Sculpt, Lift, and Define",
//     description:
//       seo.metaDescription ||
//       "Enhance your natural features with Restylane Contour at Goldfingers Aesthetics. Expert facial filler treatment designed to lift, sculpt, and restore youthful definition.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Restylane Contour | Goldfingers Aesthetics - Facial Contouring Experts",
//       description:
//         seo.metaDescription ||
//         "Restylane Contour provides smooth, natural facial definition and volume restoration for a youthful, balanced look.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Restylane Contour treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "Restylane Contour, cheek filler, facial contouring, dermal fillers, hyaluronic acid filler, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function RestylaneContourPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Restylane Contour page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pass the fetched CMS data to your React component
//   return <RestylaneContourComponent data={data} />;
// }



import RestylaneContourComponent from "@/components/medical-spa/restylane-contour/RestylaneContourComponent";
import { fetchRestylaneContourPageData } from "@/lib/api/medicalSpa/fetchRestylaneContourPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchRestylaneContourPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Restylane Contour page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url =
    "https://www.goldfingersaesthetics.com/medical-spa/restylane-contour";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Restylane® Contour in Florida | Cheek Filler & Facial Sculpting",

    description:
      seo.metaDescription ||
      "Restylane® Contour cheek filler at Goldfingers Aesthetics enhances midface volume, restores youthful lift, and provides natural facial definition across Florida locations.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Restylane® Contour | Natural Cheek Filler & Sculpting",
      description:
        seo.metaDescription ||
        "Enhance cheek definition and restore youthful contours with Restylane® Contour performed by expert injectors.",
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
          alt: "Restylane Contour cheek filler treatment",
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
      "Restylane Contour Florida",
      "Restylane cheek filler",
      "cheek filler near me",
      "midface volume restoration",
      "facial contouring filler",
      "hyaluronic acid cheek filler",
      "Restylane Contour cost Florida",
      "Goldfingers Aesthetics fillers",
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
      url: "https://www.goldfingersaesthetics.com",
      medicalSpecialty: "Cosmetic",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Restylane Contour Cheek Filler",
      procedureType: "Minimally Invasive",
      description:
        "Restylane Contour is a hyaluronic acid dermal filler designed to restore midface volume and enhance cheek definition with natural-looking results.",
    },
    {
      "@type": "Service",
      name: "Restylane Contour Treatment",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
    },
    {
      "@type": "WebPage",
      name: "Restylane Contour",
      url: "https://www.goldfingersaesthetics.com/medical-spa/restylane-contour",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function RestylaneContourPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Restylane Contour page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="restylane-contour-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <RestylaneContourComponent data={data} />
    </>
  );
}
