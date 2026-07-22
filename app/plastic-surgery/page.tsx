// // import PlasticSurgery from "@/components/plastic-surgery/PlasticSurgery";


// // export default function PlasticSurgerys() {
// //     return (
// //         <>
// //         <PlasticSurgery />
// //         </>
// //     )
// // }



// import PlasticSurgery from "@/components/plastic-surgery/PlasticSurgery";
// import { fetchPlasticSurgeryPageData } from "@/lib/api/plasticSurgery/fetchPlasticSurgeryPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Incremental Static Regeneration (updates every 60 seconds)

// // ✅ Server-side data fetching from Payload CMS (secure)
// async function getData() {
//   try {
//     const data = await fetchPlasticSurgeryPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Plastic Surgery page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO metadata from Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Plastic Surgery | Goldfingers Aesthetics – Expert Cosmetic Enhancements",
//     description:
//       seo.metaDescription ||
//       "Discover transformative plastic surgery procedures at Goldfingers Aesthetics. Expert surgeons, advanced techniques, and personalized care for natural, lasting beauty.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Plastic Surgery | Goldfingers Aesthetics – Enhance Your Natural Beauty",
//       description:
//         seo.metaDescription ||
//         "Explore Goldfingers Aesthetics' plastic surgery services — from facelifts to body contouring — with safety, precision, and artistry.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Plastic surgery and cosmetic enhancement at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "plastic surgery, cosmetic surgery, facial surgery, body contouring, breast augmentation, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function PlasticSurgeryPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Plastic Surgery page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-managed data via component
//   return <PlasticSurgery data={data} />;
// }



import PlasticSurgery from "@/components/plastic-surgery/PlasticSurgery";
import { fetchPlasticSurgeryPageData } from "@/lib/api/plasticSurgery/fetchPlasticSurgeryPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ SERVER FETCH
// ==========================
async function getData() {
  try {
    const data = await fetchPlasticSurgeryPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Plastic Surgery page data:", error);
    return null;
  }
}

// ==========================
// ✅ STRONG SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/plastic-surgery";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Plastic Surgery in Florida | Board-Certified Cosmetic Surgeons | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Goldfingers Aesthetics offers advanced plastic surgery procedures in Florida including facelifts, body contouring, breast augmentation, and cosmetic enhancements performed by experienced professionals.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle || "Plastic Surgery in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Explore surgical and cosmetic enhancement procedures performed with precision and artistry at Goldfingers Aesthetics.",
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
          alt: "Plastic surgery procedures at Goldfingers Aesthetics",
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
      "plastic surgery Florida",
      "cosmetic surgery Florida",
      "board certified plastic surgeon",
      "facelift Florida",
      "breast augmentation Florida",
      "body contouring surgery",
      "cosmetic surgeon near me",
      "Goldfingers plastic surgery",
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
      medicalSpecialty: "PlasticSurgery",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "Service",
      name: "Plastic Surgery Procedures",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
      description:
        "Comprehensive plastic surgery services including facial rejuvenation, breast surgery, and body contouring procedures.",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function PlasticSurgeryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Plastic Surgery page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="plastic-surgery-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PlasticSurgery data={data} />
    </>
  );
}
