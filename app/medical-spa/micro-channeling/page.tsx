// // import MicroChanneling from "@/components/medical-spa/micro-channeling/MicroChanneling";


// // export default function MicroChannelings() {
// //     return (
// //         <>
// //             <MicroChanneling />
// //         </>
// //     )
// // }


// import MicroChannelingPage from "@/components/medical-spa/micro-channeling/MicroChanneling";
// import { fetchMicroFillersPageData } from "@/lib/api/medicalSpa/fetchMicroChannelingPageComponent";

// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR - Refresh page every 60 seconds

// // ✅ Server-only data fetching
// async function getData() {
//   try {
//     const data = await fetchMicroFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Micro Channeling page data:", error);
//     return null;
//   }
// }

// // ✅ Auto-generate SEO Metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Micro Channeling | Goldfingers Aesthetics - Skin Rejuvenation Treatment",
//     description:
//       seo.metaDescription ||
//       "Micro Channeling at Goldfingers Aesthetics helps rejuvenate your skin by stimulating collagen production and improving skin texture naturally.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Micro Channeling | Goldfingers Aesthetics - Skin Rejuvenation Treatment",
//       description:
//         seo.metaDescription ||
//         "Experience micro channeling at Goldfingers Aesthetics — a non-invasive skin rejuvenation treatment for smoother, youthful skin.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Micro Channeling treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "micro channeling, skin rejuvenation, collagen induction, non-invasive facial, anti-aging, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function MicroChanneling() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Micro Channeling page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pass pre-rendered CMS data directly to component
//   return <MicroChannelingPage data={data} />;
// }




import MicroChannelingPage from "@/components/medical-spa/micro-channeling/MicroChanneling";
import { fetchMicroFillersPageData } from "@/lib/api/medicalSpa/fetchMicroChannelingPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchMicroFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Micro Channeling page data:", error);
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
    "https://goldfingersaesthetics.com/medical-spa/micro-channeling";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Micro-Channeling in Florida | Advanced Collagen Induction Therapy",

    description:
      seo.metaDescription ||
      "Micro-Channeling at Goldfingers Aesthetics stimulates collagen production to improve acne scars, fine lines, skin texture, and overall radiance. Serving multiple Florida locations.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Micro-Channeling & Microneedling | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Advanced collagen induction therapy designed to improve acne scars, wrinkles, pigmentation, and skin tone. Professional micro-channeling treatments across Florida.",
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
          alt: "Micro-Channeling collagen induction therapy",
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
      "micro channeling Florida",
      "microneedling near me",
      "collagen induction therapy",
      "acne scar treatment Florida",
      "skin rejuvenation treatment",
      "anti aging facial treatment",
      "microneedling med spa",
      "wrinkle reduction treatment",
      "Goldfingers Aesthetics facial treatments",
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
      name: "Micro-Channeling (Collagen Induction Therapy)",
      procedureType: "Minimally Invasive",
      bodyLocation: "Face",
      description:
        "Micro-Channeling treatment that stimulates natural collagen production to reduce acne scars, fine lines, wrinkles, and improve overall skin texture.",
    },
    {
      "@type": "WebPage",
      name: "Micro-Channeling Treatment",
      url: "https://goldfingersaesthetics.com/medical-spa/micro-channeling",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function MicroChanneling() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Micro Channeling page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="micro-channeling-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <MicroChannelingPage data={data} />
    </>
  );
}
