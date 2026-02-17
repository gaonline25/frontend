// // import BotoxPage from "@/components/medical-spa/botox/BotoxPage";


// // export default function BotoxPages() {
// //     return (
// //         <>
// //             <BotoxPage />
// //         </>
// //     )
// // }



// import BotoxPage from "@/components/medical-spa/botox/BotoxPage";
// import { fetchBotoxPageData } from "@/lib/api/medicalSpa/fetchBotoxPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // Rebuild page every 60s (ISR)

// // Server-side data fetch (faster + cached)
// async function getData() {
//   try {
//     const data = await fetchBotoxPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Botox page data:", error);
//     return null;
//   }
// }

// // Dynamic metadata for SEO
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seo || {};
//   return {
//     title: seo?.metaTitle || "Botox Treatments | Goldfingers Aesthetics",
//     description:
//       seo?.metaDescription ||
//       "Discover safe and effective Botox treatments to rejuvenate your appearance.",
//     openGraph: {
//       title: seo?.metaTitle || "Botox Treatments | Goldfingers Aesthetics",
//       description:
//         seo?.metaDescription ||
//         "Explore our advanced Botox procedures by certified professionals.",
//       images: [
//         {
//           url:
//             seo?.openGraphImage ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Botox Treatments",
//         },
//       ],
//     },
//   };
// }

// export default async function BotoxPages() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main id="main" className="flex items-center justify-center min-h-[60vh]">
//         <div className="text-gray-600">Failed to load page data.</div>
//       </main>
//     );
//   }

//   return <BotoxPage data={data} />;
// }



import BotoxPage from "@/components/medical-spa/botox/BotoxPage";
import { fetchBotoxPageData } from "@/lib/api/medicalSpa/fetchBotoxPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchBotoxPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Botox page data:", error);
    return null;
  }
}

// ==========================
// ✅ Advanced SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};

  const url = "https://www.goldfingersaesthetics.com/medical-spa/botox";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo?.metaTitle ||
      "Botox Injections in Florida | Goldfingers Aesthetics Med Spa",

    description:
      seo?.metaDescription ||
      "Looking for Botox in Florida? Goldfingers Aesthetics offers expert Botox injections to reduce wrinkles, smooth forehead lines, and rejuvenate your appearance safely and effectively.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: seo?.metaTitle || "Botox Injections | Goldfingers Aesthetics",
      description:
        seo?.metaDescription ||
        "Professional Botox treatments by certified aesthetic experts across Florida.",
      url,
      siteName: "Goldfingers Aesthetics",
      type: "website",
      locale: "en_US",
      images: [
        {
          url:
            seo?.openGraphImage ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Botox Injections at Goldfingers Aesthetics",
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
      "Botox Florida",
      "Botox near me",
      "Botox injections",
      "Forehead Botox",
      "Botox for wrinkles",
      "Best Botox provider Florida",
      "Botox med spa",
      "Goldfingers Aesthetics Botox",
    ],
  };
}

// ==========================
// ✅ Structured Data (MedicalProcedure)
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      name: "Botox Injections",
      procedureType: "Minimally Invasive",
      description:
        "Botox injections reduce facial wrinkles, forehead lines, and crow’s feet for a smoother, youthful appearance.",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
    {
      "@type": "WebPage",
      name: "Botox Treatments",
      url: "https://www.goldfingersaesthetics.com/medical-spa/botox",
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
export default async function BotoxPages() {
  const data = await getData();

  if (!data) {
    return (
      <main id="main" className="flex items-center justify-center min-h-[60vh]">
        <div className="text-gray-600">Failed to load page data.</div>
      </main>
    );
  }

  return (
    <>
      <Script
        id="botox-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BotoxPage data={data} />
    </>
  );
}
