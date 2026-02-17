// // import SemaglutideInjectionsPage from "@/components/medical-spa/semaglutide-injections/SemaglutideInjectionsPage";


// // export default function SemaglutideInjections() {
// //     return (
// //         <>
// //             <SemaglutideInjectionsPage />
// //         </>
// //     )
// // }




// import SemaglutideInjectionsPage from "@/components/medical-spa/semaglutide-injections/SemaglutideInjectionsPage";
// import { fetchSemaglutideInjectionsPageData } from "@/lib/api/medicalSpa/fetchSemaglutideInjectionsPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR: Automatically revalidates every 60 seconds

// // ✅ Secure server-side data fetching
// async function getData() {
//   try {
//     const data = await fetchSemaglutideInjectionsPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Semaglutide Injections page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO Metadata pulled from Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Semaglutide Injections | Goldfingers Aesthetics - Safe & Effective Weight Loss Treatment",
//     description:
//       seo.metaDescription ||
//       "Achieve sustainable weight loss with Semaglutide injections at Goldfingers Aesthetics. A proven medical approach to support your health and wellness goals.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Semaglutide Injections | Goldfingers Aesthetics - Medical Weight Loss Experts",
//       description:
//         seo.metaDescription ||
//         "Lose weight safely with medically supervised Semaglutide Injections at Goldfingers Aesthetics. Expert guidance for long-term wellness and confidence.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Semaglutide Injections at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "semaglutide injections, weight loss treatment, medical spa, ozempic alternative, body sculpting, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function SemaglutideInjections() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Semaglutide Injections page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render the Semaglutide Injections component with CMS data
//   return <SemaglutideInjectionsPage data={data} />;
// }



import SemaglutideInjectionsPage from "@/components/medical-spa/semaglutide-injections/SemaglutideInjectionsPage";
import { fetchSemaglutideInjectionsPageData } from "@/lib/api/medicalSpa/fetchSemaglutideInjectionsPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchSemaglutideInjectionsPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Semaglutide page data:", error);
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
    "https://www.goldfingersaesthetics.com/medical-spa/semaglutide-injections";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Semaglutide Injections in Florida | Medical Weight Loss Treatment",

    description:
      seo.metaDescription ||
      "Medically supervised Semaglutide injections at Goldfingers Aesthetics help support safe, sustainable weight loss. Available across Florida locations.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Semaglutide Weight Loss Injections | Florida Medical Spa",
      description:
        seo.metaDescription ||
        "Explore GLP-1 Semaglutide injections for weight management under professional medical supervision.",
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
          alt: "Semaglutide weight loss injections",
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
      "Semaglutide injections Florida",
      "GLP-1 weight loss treatment",
      "medical weight loss injections",
      "Ozempic alternative Florida",
      "weekly weight loss injections",
      "weight loss clinic Florida",
      "Semaglutide near me",
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
      url: "https://www.goldfingersaesthetics.com",
      medicalSpecialty: "WeightManagement",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Semaglutide Injections",
      procedureType: "Non-Surgical",
      description:
        "Semaglutide is a GLP-1 receptor agonist injection used as part of a medically supervised weight management program.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Semaglutide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Semaglutide is a GLP-1 receptor agonist medication used to support weight management under medical supervision.",
          },
        },
        {
          "@type": "Question",
          name: "How often are Semaglutide injections administered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Semaglutide is typically administered as a once-weekly injection as part of a personalized medical weight loss plan.",
          },
        },
        {
          "@type": "Question",
          name: "Is Semaglutide safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When prescribed and monitored by qualified medical professionals, Semaglutide can be part of a safe and structured weight management program.",
          },
        },
      ],
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function SemaglutideInjections() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Semaglutide Injections page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="semaglutide-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SemaglutideInjectionsPage data={data} />
    </>
  );
}
