// // import BreastPage from "@/components/plastic-surgery/breast/BreastPage";


// // export default function Breast() {
// //     return (
// //         <>
// //             <BreastPage />
// //         </>
// //     )
// // }


// import BreastPage from "@/components/plastic-surgery/breast/BreastPage";
// import { fetchBreastPageData } from "@/lib/api/plasticSurgery/fetchBreastPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Rebuild the page every 60 seconds (ISR)

// // ✅ Server-side CMS data fetch
// async function getData() {
//   try {
//     const data = await fetchBreastPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Breast Plastic Surgery page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO Metadata Generation
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Breast Plastic Surgery | Goldfingers Aesthetics & Plastic Surgery",
//     description:
//       seo.metaDescription ||
//       "Explore breast plastic surgery options at Goldfingers Aesthetics — from augmentation to lift and reduction, tailored to enhance confidence and natural beauty.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Goldfingers Aesthetics | Breast Plastic Surgery Experts",
//       description:
//         seo.metaDescription ||
//         "Discover advanced breast plastic surgery procedures at Goldfingers Aesthetics — including augmentation, lift, and reduction for natural results.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Goldfingers Aesthetics Breast Surgery",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "breast surgery, breast augmentation, breast lift, breast reduction, plastic surgery, Goldfingers Aesthetics, Florida cosmetic surgery",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function BreastPlasticSurgeryPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
//         <p>Unable to load breast plastic surgery content at the moment.</p>
//       </main>
//     );
//   }

//   // ✅ Render with CMS Data
//   return <BreastPage data={data} />;
// }




import BreastPage from "@/components/plastic-surgery/breast/BreastPage";
import { fetchBreastPageData } from "@/lib/api/plasticSurgery/fetchBreastPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchBreastPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Plastic Surgery page data:", error);
    return null;
  }
}

// ==============================
// ✅ HIGH-INTENT SEO METADATA
// ==============================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/plastic-surgery/breast";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Breast Plastic Surgery in Florida | Breast Augmentation, Lift & Reduction | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Enhance your confidence with expert breast plastic surgery at Goldfingers Aesthetics. We offer breast augmentation, breast lift, breast reduction, and implant procedures performed by experienced surgical professionals in Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Plastic Surgery in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Explore breast augmentation, lift, and reduction procedures at Goldfingers Aesthetics — delivering natural, beautiful results in Florida.",
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
          alt: "Breast plastic surgery at Goldfingers Aesthetics",
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
      "breast augmentation Florida",
      "breast implants Florida",
      "breast lift Florida",
      "breast reduction Florida",
      "breast surgery Florida",
      "cosmetic breast surgery",
      "board certified plastic surgeon Florida",
      "Goldfingers breast surgery",
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
      url: "https://goldfingersaesthetics.com",
      medicalSpecialty: "PlasticSurgery",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "Service",
      name: "Breast Plastic Surgery",
      description:
        "Surgical breast procedures including breast augmentation, lift, reduction, and implant placement performed by experienced plastic surgery professionals.",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
  ],
};

// ==============================
// ✅ PAGE COMPONENT
// ==============================
export default async function BreastPlasticSurgeryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load breast plastic surgery content at the moment.</p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="breast-plastic-surgery-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BreastPage data={data} />
    </>
  );
}
