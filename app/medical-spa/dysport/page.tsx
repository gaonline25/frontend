// // import DysportPage from "@/components/medical-spa/dysport/DysportPage";


// // export default function Dysport() {
// //     return (
// //         <>
// //             <DysportPage />
// //         </>
// //     )
// // }



// import DysportPage from "@/components/medical-spa/dysport/DysportPage";
// import { fetchDysportPageData } from "@/lib/api/medicalSpa/fetchDysportPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ISR every 60 seconds

// async function getData() {
//   try {
//     const data = await fetchDysportPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Dysport data:", error);
//     return null;
//   }
// }

// // ✅ SEO Metadata (auto from Payload or fallback)
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Dysport Treatments | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Smooth fine lines and restore youthfulness with Dysport injections at Goldfingers Aesthetics.",
//     openGraph: {
//       title: seo.metaTitle || "Dysport Treatments | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Non-surgical Dysport treatment for wrinkle reduction and rejuvenation.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Dysport cosmetic treatment",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "Dysport, anti-wrinkle injections, facial rejuvenation, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page component
// export default async function Dysport() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex justify-center items-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Dysport page content.
//         </p>
//       </main>
//     );
//   }

//   return <DysportPage data={data} />;
// }




import DysportPage from "@/components/medical-spa/dysport/DysportPage";
import { fetchDysportPageData } from "@/lib/api/medicalSpa/fetchDysportPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchDysportPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Dysport data:", error);
    return null;
  }
}

// ==========================
// ✅ Advanced SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://www.goldfingersaesthetics.com/medical-spa/dysport";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Dysport Injections in Florida | Wrinkle Reduction Experts | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Looking for Dysport near you? Goldfingers Aesthetics offers expert Dysport injections across Florida to smooth forehead lines, frown lines, and wrinkles with natural-looking results.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Dysport® Wrinkle Treatment | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Non-surgical Dysport injections to smooth dynamic wrinkles and restore a youthful appearance.",
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
          alt: "Dysport cosmetic treatment at Goldfingers Aesthetics",
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
      "Dysport Florida",
      "Dysport near me",
      "Dysport injections",
      "Dysport vs Botox",
      "Dysport for forehead lines",
      "Dysport for frown lines",
      "Dysport cost Florida",
      "Wrinkle reduction treatment",
      "Anti-aging injections Florida",
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
      name: "Dysport Injection Treatment",
      procedureType: "Non-Invasive",
      description:
        "Dysport is an FDA-approved injectable treatment that temporarily reduces the appearance of dynamic wrinkles such as forehead lines and frown lines.",
      bodyLocation: "Face",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
    {
      "@type": "WebPage",
      name: "Dysport Treatment",
      url: "https://www.goldfingersaesthetics.com/medical-spa/dysport",
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
export default async function Dysport() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Dysport page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="dysport-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <DysportPage data={data} />
    </>
  );
}
