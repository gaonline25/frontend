// // import DiamondGlow from "@/components/medical-spa/diamondglow/DiamondGlow";


// // export default function Diamondglow() {
// //     return (
// //         <>
// //             <DiamondGlow />
// //         </>
// //     )

// // }



// import DiamondGlowPage from "@/components/medical-spa/diamondglow/DiamondGlow";
// import { fetchDiamondFillersPageData } from "@/lib/api/medicalSpa/fetchDiamondGlowPageComponent";
// // import { fetchDiamondGlowPageData } from "@/lib/api/medicalSpa/fetchDiamondGlowPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ISR — rebuild every 60s

// async function getData() {
//   try {
//     const data = await fetchDiamondFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching DiamondGlow data:", error);
//     return null;
//   }
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle || "DiamondGlow Facial Treatment | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Rejuvenate and refresh your skin with our advanced DiamondGlow facial treatment at Goldfingers Aesthetics.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "DiamondGlow Facial Treatment | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Professional DiamondGlow facial treatments designed for smoother, glowing skin.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "DiamondGlow facial treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords || "DiamondGlow, facial treatment, Goldfingers, skincare",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// export default async function Diamondglow() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load DiamondGlow page content.
//         </p>
//       </main>
//     );
//   }

//   return <DiamondGlowPage data={data} />;
// }




import DiamondGlowPage from "@/components/medical-spa/diamondglow/DiamondGlow";
import { fetchDiamondFillersPageData } from "@/lib/api/medicalSpa/fetchDiamondGlowPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchDiamondFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching DiamondGlow data:", error);
    return null;
  }
}

// ==========================
// ✅ Advanced SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://www.goldfingersaesthetics.com/medical-spa/diamondglow";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "DiamondGlow Facial in Florida | Advanced Skin Resurfacing | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Experience DiamondGlow® facial treatments at Goldfingers Aesthetics. Deep exfoliation, pore cleansing, and professional-grade serum infusion for smoother, brighter skin across Florida locations.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "DiamondGlow® Facial Treatment | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Professional DiamondGlow skin resurfacing and serum infusion treatments for radiant, healthy-looking skin.",
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
          alt: "DiamondGlow Facial at Goldfingers Aesthetics",
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
      "DiamondGlow facial Florida",
      "DiamondGlow near me",
      "DiamondGlow skin resurfacing",
      "DiamondGlow facial treatment",
      "SkinMedica DiamondGlow",
      "DiamondGlow vs Hydrafacial",
      "Professional facial Florida",
      "Medical spa facial treatment",
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
      name: "DiamondGlow Facial Treatment",
      procedureType: "Non-Invasive",
      description:
        "DiamondGlow is a professional-grade skin resurfacing treatment that exfoliates, extracts, and infuses condition-specific serums into the skin.",
      bodyLocation: "Face",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
    {
      "@type": "WebPage",
      name: "DiamondGlow Facial",
      url: "https://www.goldfingersaesthetics.com/medical-spa/diamondglow",
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
export default async function Diamondglow() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load DiamondGlow page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="diamondglow-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <DiamondGlowPage data={data} />
    </>
  );
}
