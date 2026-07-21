// // import JuvedermPage from "@/components/medical-spa/juvederm/JuvedermPage";


// // export default function Juvederm() {
// //     return (
// //         <>
// //             <JuvedermPage />
// //         </>
// //     )
// // }


// import JuvedermPage from "@/components/medical-spa/juvederm/JuvedermPage";
// import { fetchJuvedermPageData } from "@/lib/api/medicalSpa/fetchJuvedermPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR every 60s (rebuilds automatically)

// async function getData() {
//   try {
//     const data = await fetchJuvedermPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Juvederm page data:", error);
//     return null;
//   }
// }

// // ✅ Auto SEO metadata from CMS or fallback values
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Juvederm | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Restore youthful volume and smoothness with Juvederm dermal fillers at Goldfingers Aesthetics.",
//     openGraph: {
//       title: seo.metaTitle || "Juvederm | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Professional Juvederm filler treatments to rejuvenate and contour your face with natural results.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Juvederm dermal filler treatment",
//         },
//       ],
//     },
//     keywords:
//       seo.metaKeywords ||
//       "Juvederm, dermal fillers, facial rejuvenation, lip fillers, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// export default async function Juvederm() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Juvederm page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pass pre-fetched data to the component
//   return <JuvedermPage data={data} />;
// }




import JuvedermPage from "@/components/medical-spa/juvederm/JuvedermPage";
import { fetchJuvedermPageData } from "@/lib/api/medicalSpa/fetchJuvedermPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Data Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchJuvedermPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Juvederm page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/medical-spa/juvederm";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "JUVÉDERM® Fillers in Florida | Lip, Cheek & Facial Contouring | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Enhance lips, restore cheek volume, and smooth facial lines with JUVÉDERM® dermal fillers at Goldfingers Aesthetics. Natural-looking results from experienced aesthetic experts across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "JUVÉDERM® Dermal Fillers in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Book JUVÉDERM® lip fillers and facial contouring treatments in Florida. Safe, FDA-approved dermal fillers for smooth, youthful results.",
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
          alt: "JUVÉDERM® dermal filler treatment at Goldfingers Aesthetics",
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
      "Juvederm Florida",
      "Juvederm near me",
      "Juvederm lip fillers",
      "Juvederm cheek fillers",
      "Juvederm cost",
      "Juvederm injections Florida",
      "Lip augmentation Florida",
      "Dermal fillers Florida",
      "Facial contouring fillers",
      "Juvederm Voluma",
      "Juvederm Volbella",
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
      name: "JUVÉDERM® Dermal Filler Treatment",
      procedureType: "Minimally Invasive",
      description:
        "JUVÉDERM® injectable dermal fillers used to restore facial volume, enhance lips, and smooth wrinkles for natural-looking rejuvenation.",
      bodyLocation: "Face",
      howPerformed:
        "Administered by licensed aesthetic professionals using FDA-approved hyaluronic acid fillers.",
    },
    {
      "@type": "WebPage",
      name: "JUVÉDERM® Fillers",
      url: "https://goldfingersaesthetics.com/medical-spa/juvederm",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://goldfingersaesthetics.com",
      },
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function Juvederm() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Juvederm page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="juvederm-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <JuvedermPage data={data} />
    </>
  );
}
