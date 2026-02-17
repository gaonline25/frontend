// // import JuvedermVoluxPage from "@/components/medical-spa/juvederm-volux/JuvedermVoluxPage";


// // export default function JuvedermVlux() {
// //     return (
// //         <>
// //             <JuvedermVoluxPage />
// //         </>
// //     )
// // }


// import JuvedermVoluxPage from "@/components/medical-spa/juvederm-volux/JuvedermVoluxPage";
// import { fetchJuvedermVoluxPageData } from "@/lib/api/medicalSpa/fetchJuvedermVoluxPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR every 60s (auto content refresh)

// async function getData() {
//   try {
//     const data = await fetchJuvedermVoluxPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Juvederm Volux data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO metadata from CMS (with fallbacks)
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Juvederm Volux | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Define and contour your jawline with Juvederm Volux fillers at Goldfingers Aesthetics. Expert treatments for facial sculpting and rejuvenation.",
//     openGraph: {
//       title: seo.metaTitle || "Juvederm Volux | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Experience advanced facial contouring with Juvederm Volux — premium dermal filler designed to enhance your natural structure.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Juvederm Volux filler treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "Juvederm Volux, dermal fillers, jawline filler, chin filler, facial contouring, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// export default async function JuvedermVolux() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Juvederm Volux page content.
//         </p>
//       </main>
//     );
//   }

//   return <JuvedermVoluxPage data={data} />;
// }




import JuvedermVoluxPage from "@/components/medical-spa/juvederm-volux/JuvedermVoluxPage";
import { fetchJuvedermVoluxPageData } from "@/lib/api/medicalSpa/fetchJuvedermVoluxPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Data Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchJuvedermVoluxPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Juvederm Volux data:", error);
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
    "https://www.goldfingersaesthetics.com/medical-spa/juvederm-volux";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "JUVÉDERM® VOLUX™ in Florida | Jawline & Chin Filler | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Enhance jawline definition and chin projection with JUVÉDERM® VOLUX™ at Goldfingers Aesthetics. FDA-approved dermal filler for sculpted facial contouring across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "JUVÉDERM® VOLUX™ Jawline Filler | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Looking for jawline fillers in Florida? JUVÉDERM® VOLUX™ provides long-lasting facial contouring and structure with natural-looking results.",
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
          alt: "JUVÉDERM® VOLUX™ jawline filler treatment",
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
      "Juvederm Volux Florida",
      "Jawline filler Florida",
      "Chin filler Florida",
      "Jawline contouring filler",
      "Juvederm Volux near me",
      "Jawline enhancement injections",
      "Facial sculpting filler",
      "Non surgical jawline contouring",
      "Jawline filler cost Florida",
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
      name: "JUVÉDERM® VOLUX™ Jawline Filler",
      procedureType: "Minimally Invasive",
      bodyLocation: "Jawline and Chin",
      description:
        "JUVÉDERM® VOLUX™ is an FDA-approved hyaluronic acid dermal filler designed specifically to improve jawline definition and chin projection.",
      howPerformed:
        "Administered via precise injection techniques by licensed aesthetic providers to enhance lower facial structure.",
    },
    {
      "@type": "WebPage",
      name: "JUVÉDERM® VOLUX™",
      url: "https://www.goldfingersaesthetics.com/medical-spa/juvederm-volux",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function JuvedermVolux() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Juvederm Volux page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="juvederm-volux-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <JuvedermVoluxPage data={data} />
    </>
  );
}
