// // import PermanentMakeupPage from "@/components/medical-spa/permanent-makeup/PermanentMakeupPage";



// // export default function PermanentMakeups() {
// //     return (
// //         <>
// //             <PermanentMakeupPage />
// //         </>
// //     )
// // }



// import PermanentMakeupPage from "@/components/medical-spa/permanent-makeup/PermanentMakeupPage";
// import { fetchPermanentFillersPageData } from "@/lib/api/medicalSpa/fetchPermanentMakeupPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Incremental Static Regeneration every 60 seconds

// // ✅ Secure Server-side Fetch
// async function getData() {
//   try {
//     const data = await fetchPermanentFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Permanent Makeup page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO Metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Permanent Makeup | Goldfingers Aesthetics - Enhance Your Natural Beauty",
//     description:
//       seo.metaDescription ||
//       "Experience long-lasting beauty with Permanent Makeup at Goldfingers Aesthetics. Wake up flawless every day with professional microblading and lip tinting services.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Permanent Makeup | Goldfingers Aesthetics - Enhance Your Natural Beauty",
//       description:
//         seo.metaDescription ||
//         "Permanent makeup treatments at Goldfingers Aesthetics — achieve natural, lasting beauty through expert microblading, eyeliner, and lip tinting services.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Permanent Makeup at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "permanent makeup, microblading, lip tint, permanent eyeliner, semi-permanent makeup, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function PermanentMakeup() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Permanent Makeup page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pass pre-fetched server data to component
//   return <PermanentMakeupPage data={data} />;
// }



import PermanentMakeupPage from "@/components/medical-spa/permanent-makeup/PermanentMakeupPage";
import { fetchPermanentFillersPageData } from "@/lib/api/medicalSpa/fetchPermanentMakeupPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchPermanentFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Permanent Makeup page data:", error);
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
    "https://goldfingersaesthetics.com/medical-spa/permanent-makeup";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Permanent Makeup in Florida | Microblading, Lip Blushing & Eyeliner",

    description:
      seo.metaDescription ||
      "Permanent Makeup at Goldfingers Aesthetics includes microblading, lip blushing, and permanent eyeliner for natural, long-lasting beauty across Florida locations.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Permanent Makeup & Microblading | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Expert permanent makeup services including microblading, lip blush, and eyeliner tattoo. Enhance your natural beauty with long-lasting results.",
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
          alt: "Permanent Makeup & Microblading treatment",
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
      "permanent makeup Florida",
      "microblading near me",
      "lip blushing Florida",
      "permanent eyeliner",
      "semi permanent eyebrows",
      "eyebrow tattoo Florida",
      "lip blush treatment",
      "cosmetic tattoo Florida",
      "Goldfingers Aesthetics permanent makeup",
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
      name: "Permanent Makeup",
      procedureType: "Minimally Invasive",
      description:
        "Permanent makeup services including microblading, lip blushing, and permanent eyeliner designed to enhance natural facial features.",
    },
    {
      "@type": "Service",
      name: "Microblading & Lip Blush",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
    },
    {
      "@type": "WebPage",
      name: "Permanent Makeup",
      url: "https://goldfingersaesthetics.com/medical-spa/permanent-makeup",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function PermanentMakeup() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Permanent Makeup page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="permanent-makeup-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PermanentMakeupPage data={data} />
    </>
  );
}
