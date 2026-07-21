// // import LiquidFacelift from "@/components/medical-spa/liquid-facelift/LiquidFacelift";


// // export default function LiquidFaceLifts() {
// //     return (
// //         <>
// //             <LiquidFacelift />
// //         </>
// //     )
// // }


// import LiquidFaceliftPage from "@/components/medical-spa/liquid-facelift/LiquidFacelift";
// import { fetchLiquidFillersPageData } from "@/lib/api/medicalSpa/fetchLiquidFaceliftPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Revalidate every 60 seconds

// // ✅ Fetch function (SSR-safe, CMS-driven)
// async function getData() {
//   try {
//     const data = await fetchLiquidFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Liquid Facelift page data:", error);
//     return null;
//   }
// }

// // ✅ Auto-generate metadata from CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Liquid Facelift | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Rejuvenate your appearance with a Liquid Facelift at Goldfingers Aesthetics — a non-surgical solution for a youthful, natural look.",
//     openGraph: {
//       title: seo.metaTitle || "Liquid Facelift | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Experience non-surgical facial rejuvenation with Liquid Facelift treatments by Goldfingers Aesthetics.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Liquid Facelift Treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "liquid facelift, non-surgical facelift, dermal fillers, Botox, facial rejuvenation, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page component
// export default async function LiquidFacelift() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Liquid Facelift page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pass pre-fetched data directly to your component
//   return <LiquidFaceliftPage data={data} />;
// }




import LiquidFaceliftPage from "@/components/medical-spa/liquid-facelift/LiquidFacelift";
import { fetchLiquidFillersPageData } from "@/lib/api/medicalSpa/fetchLiquidFaceliftPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Data Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchLiquidFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liquid Facelift page data:", error);
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
    "https://goldfingersaesthetics.com/medical-spa/liquid-facelift";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Liquid Facelift in Florida | Non-Surgical Facelift | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Restore volume, contour, and youthful definition with a Liquid Facelift at Goldfingers Aesthetics. A non-surgical facelift alternative using Botox and dermal fillers across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Liquid Facelift | Non-Surgical Facial Rejuvenation | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Looking for a non-surgical facelift near you? Our Liquid Facelift combines advanced dermal fillers and neuromodulators to lift and rejuvenate without surgery.",
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
          alt: "Liquid Facelift treatment at Goldfingers Aesthetics",
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
      "liquid facelift Florida",
      "non surgical facelift Florida",
      "liquid facelift near me",
      "facelift without surgery",
      "Botox and fillers facelift",
      "facial contouring injections",
      "anti aging treatment Florida",
      "best med spa facelift alternative",
    ],
  };
}

// ==========================
// ✅ STRUCTURED DATA (Medical Authority)
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
      name: "Liquid Facelift",
      procedureType: "Minimally Invasive",
      bodyLocation: "Face",
      description:
        "A non-surgical facial rejuvenation procedure using dermal fillers and neuromodulators to restore volume, lift sagging areas, and smooth wrinkles.",
      howPerformed:
        "Strategic injections of hyaluronic acid fillers and Botox to contour cheeks, jawline, temples, and under-eye areas.",
    },
    {
      "@type": "WebPage",
      name: "Liquid Facelift",
      url: "https://goldfingersaesthetics.com/medical-spa/liquid-facelift",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function LiquidFacelift() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Liquid Facelift page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="liquid-facelift-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <LiquidFaceliftPage data={data} />
    </>
  );
}
