// // import BreastAugmentationPage from "@/components/plastic-surgery/breast-augmentation/BreastAugmentationPage";


// // export default function BreastAugmentation() { 
// //     return (
// //         <>
// //             <BreastAugmentationPage />
// //         </>
// //     )

// // }


// import BreastAugmentationPage from "@/components/plastic-surgery/breast-augmentation/BreastAugmentationPage";
// import { fetchBreastAugmentationPageData } from "@/lib/api/plasticSurgery/fetchBreastAugmentationPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR every 60 seconds for updated CMS content

// // ✅ Server-side data fetching from Payload CMS
// async function getData() {
//   try {
//     const data = await fetchBreastAugmentationPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Breast Augmentation page data:", error);
//     return null;
//   }
// }

// // ✅ SEO metadata populated dynamically from CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Breast Augmentation | Goldfingers Aesthetics – Enhance Your Confidence",
//     description:
//       seo.metaDescription ||
//       "Transform your appearance with Goldfingers Aesthetics’ expert breast augmentation. Natural results, personalized care, and advanced surgical precision for every patient.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Breast Augmentation | Goldfingers Aesthetics – Natural, Beautiful Results",
//       description:
//         seo.metaDescription ||
//         "Goldfingers Aesthetics offers customized breast augmentation with advanced techniques and experienced surgeons for natural enhancement and symmetry.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Breast augmentation at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "breast augmentation, breast implants, cosmetic surgery, plastic surgery, breast enhancement, Goldfingers Aesthetics, Florida",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function BreastAugmentation() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Breast Augmentation page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-managed content component
//   return <BreastAugmentationPage data={data} />;
// }



import BreastAugmentationPage from "@/components/plastic-surgery/breast-augmentation/BreastAugmentationPage";
import { fetchBreastAugmentationPageData } from "@/lib/api/plasticSurgery/fetchBreastAugmentationPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchBreastAugmentationPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Augmentation page data:", error);
    return null;
  }
}

// ==============================
// ✅ HIGH-COMPETITION SEO METADATA
// ==============================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url =
    "https://www.goldfingersaesthetics.com/plastic-surgery/breast-augmentation";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Breast Augmentation in Florida | Breast Implants & Enhancement Surgery | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Looking for breast augmentation in Florida? Goldfingers Aesthetics offers personalized breast implant surgery with advanced techniques, natural results, and expert surgical precision.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Augmentation in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Enhance your confidence with customized breast implant surgery at Goldfingers Aesthetics. Natural results. Advanced surgical techniques.",
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
          alt: "Breast augmentation surgery at Goldfingers Aesthetics",
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
      "breast enhancement surgery",
      "cosmetic breast surgery",
      "breast implant surgeon Florida",
      "plastic surgery Florida",
      "natural breast augmentation results",
      "Goldfingers breast augmentation",
    ],
  };
}

// ==============================
// ✅ STRUCTURED DATA (SURGERY)
// ==============================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Goldfingers Aesthetics",
      url: "https://www.goldfingersaesthetics.com",
      medicalSpecialty: "PlasticSurgery",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Breast Augmentation",
      procedureType: "SurgicalProcedure",
      bodyLocation: "Breast",
      description:
        "Breast augmentation is a surgical procedure designed to enhance breast size and shape using implants or fat transfer techniques.",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
    },
  ],
};

// ==============================
// ✅ PAGE COMPONENT
// ==============================
export default async function BreastAugmentation() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Breast Augmentation page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="breast-augmentation-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BreastAugmentationPage data={data} />
    </>
  );
}
