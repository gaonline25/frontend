// // import WeightLossPage from "@/components/medical-spa/weightloss/WeightLossPage";


// // export default function Weightloss() {
// //     return (
// //         <>
// //             <WeightLossPage />
// //         </>
// //     )
// // }



// import WeightLossPage from "@/components/medical-spa/weightloss/WeightLossPage";
// import { fetchWeightLossPageData } from "@/lib/api/medicalSpa/fetchWeightLossPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Incremental Static Regeneration (refresh every 60 seconds)

// // ✅ Secure server-side data fetching from Payload CMS
// async function getData() {
//   try {
//     const data = await fetchWeightLossPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Weight Loss page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO metadata generation from Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Medical Weight Loss | Goldfingers Aesthetics – Personalized Weight Management",
//     description:
//       seo.metaDescription ||
//       "Transform your health with Goldfingers Aesthetics' medical weight loss program. Expert care, personalized plans, and real results using proven treatments.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Medical Weight Loss | Goldfingers Aesthetics – Professional Weight Management",
//       description:
//         seo.metaDescription ||
//         "Goldfingers Aesthetics offers medical weight loss solutions including Semaglutide injections and customized nutrition programs to help you achieve your goals.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Medical weight loss treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "medical weight loss, semaglutide injections, weight management, fat loss, healthy lifestyle, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function WeightLoss() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Weight Loss page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pass CMS data to the page component
//   return <WeightLossPage data={data} />;
// }



import WeightLossPage from "@/components/medical-spa/weightloss/WeightLossPage";
import { fetchWeightLossPageData } from "@/lib/api/medicalSpa/fetchWeightLossPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ SERVER FETCH
// ==========================
async function getData() {
  try {
    const data = await fetchWeightLossPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Weight Loss page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/medical-spa/weight-loss";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Medical Weight Loss in Florida | Semaglutide & GLP-1 Programs | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Achieve sustainable weight loss with medically supervised programs at Goldfingers Aesthetics. Offering Semaglutide injections and personalized treatment plans across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Medical Weight Loss | Semaglutide & GLP-1 Treatments in Florida",
      description:
        seo.metaDescription ||
        "Safe, physician-guided weight loss programs including Semaglutide and GLP-1 treatments. Personalized care at Goldfingers Aesthetics.",
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
          alt: "Medical Weight Loss treatment at Goldfingers Aesthetics",
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
      "medical weight loss Florida",
      "semaglutide injections Florida",
      "GLP-1 weight loss",
      "doctor supervised weight loss",
      "Ozempic alternative Florida",
      "weight loss clinic near me",
      "fat loss injections",
      "Goldfingers Aesthetics weight loss",
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
      medicalSpecialty: "WeightLoss",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalCondition",
      name: "Obesity",
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Semaglutide Injections",
      },
    },
    {
      "@type": "Service",
      name: "Medical Weight Loss Program",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
      description:
        "Physician-guided weight loss program using Semaglutide and GLP-1 treatments for safe, sustainable fat reduction.",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function WeightLoss() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Weight Loss page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="weight-loss-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <WeightLossPage data={data} />
    </>
  );
}
