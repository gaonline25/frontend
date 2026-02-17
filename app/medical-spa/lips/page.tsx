// // import Lip from "@/components/medical-spa/lips/LipsPage";


// // export default function Lips() {
// //     return (
// //         <>
// //             <Lip />
// //         </>
// //     )
// // }



// import LipsPage from "@/components/medical-spa/lips/LipsPage";
// import { fetchLipFillersPageData } from "@/lib/api/medicalSpa/fetchLipFillersPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Rebuild page every 60s automatically

// async function getData() {
//   try {
//     const data = await fetchLipFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Lips page data:", error);
//     return null;
//   }
// }

// // ✅ Auto SEO metadata from Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Lip Fillers | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Enhance your lips with Goldfingers Aesthetics' premium lip filler treatments for a natural, youthful look.",
//     openGraph: {
//       title: seo.metaTitle || "Lip Fillers | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Get the perfect pout with professional lip augmentation and filler services at Goldfingers Aesthetics.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Lip Filler Treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "lip fillers, lip augmentation, dermal fillers, lip enhancement, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// export default async function Lips() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Lips page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pre-fetched data passed directly to your LipsPage component
//   return <LipsPage data={data} />;
// }




import LipsPage from "@/components/medical-spa/lips/LipsPage";
import { fetchLipFillersPageData } from "@/lib/api/medicalSpa/fetchLipFillersPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Data Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchLipFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Lips page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://www.goldfingersaesthetics.com/medical-spa/lip-fillers";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Lip Fillers in Florida | Natural Lip Enhancement | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Enhance volume, shape, and definition with expert lip filler treatments at Goldfingers Aesthetics. Natural-looking lip augmentation available across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Lip Fillers & Lip Augmentation | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Looking for lip fillers near you? Achieve fuller, balanced lips with FDA-approved dermal fillers administered by licensed professionals.",
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
          alt: "Lip filler treatment at Goldfingers Aesthetics",
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
      "lip fillers Florida",
      "lip augmentation Florida",
      "lip injections near me",
      "lip filler cost Florida",
      "natural lip enhancement",
      "Juvederm lips",
      "lip flip Botox",
      "dermal fillers for lips",
      "best lip fillers in Florida",
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
      name: "Lip Filler Treatment",
      procedureType: "Minimally Invasive",
      bodyLocation: "Lips",
      description:
        "Lip filler injections using hyaluronic acid dermal fillers to enhance lip volume, definition, and symmetry.",
      howPerformed:
        "Administered via precise injection techniques by licensed aesthetic providers for natural-looking results.",
    },
    {
      "@type": "WebPage",
      name: "Lip Fillers",
      url: "https://www.goldfingersaesthetics.com/medical-spa/lip-fillers",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function Lips() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Lips page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="lip-fillers-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <LipsPage data={data} />
    </>
  );
}
