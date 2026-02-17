// // import DermalFillersPage from "@/components/medical-spa/dermal-fillers/DermalFillersPage";


// // export default function DermalFillers() {
// //     return (
// //         <>
// //             <DermalFillersPage />
// //         </>
// //     )
// // }



// import DermalFillersPage from "@/components/medical-spa/dermal-fillers/DermalFillersPage";
// import { fetchDermalFillersPageData } from "@/lib/api/medicalSpa/fetchDermalFillersPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ISR: rebuild every 60 seconds

// async function getData() {
//   try {
//     const data = await fetchDermalFillersPageData();
//     return data || null;
//   } catch (err) {
//     console.error("❌ Error fetching Dermal Fillers data:", err);
//     return null;
//   }
// }

// // Dynamic SEO metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seo || {};

//   return {
//     title:
//       seo?.metaTitle ||
//       "Dermal Fillers - Restore Youthful Volume | Goldfingers Aesthetics",
//     description:
//       seo?.metaDescription ||
//       "Discover natural, safe, and effective dermal filler treatments at Goldfingers Aesthetics. Enhance facial features and rejuvenate your look.",
//     openGraph: {
//       title:
//         seo?.metaTitle ||
//         "Dermal Fillers - Restore Youthful Volume | Goldfingers Aesthetics",
//       description:
//         seo?.metaDescription ||
//         "Professional dermal filler services for natural and balanced enhancement.",
//       images: [
//         {
//           url:
//             seo?.openGraphImage ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Dermal Fillers Treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//   };
// }

// export default async function DermalFillers() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Dermal Fillers page content.
//         </p>
//       </main>
//     );
//   }

//   return <DermalFillersPage data={data} />;
// }




import DermalFillersPage from "@/components/medical-spa/dermal-fillers/DermalFillersPage";
import { fetchDermalFillersPageData } from "@/lib/api/medicalSpa/fetchDermalFillersPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchDermalFillersPageData();
    return data || null;
  } catch (err) {
    console.error("❌ Error fetching Dermal Fillers data:", err);
    return null;
  }
}

// ==========================
// ✅ Advanced SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};

  const url =
    "https://www.goldfingersaesthetics.com/medical-spa/dermal-fillers";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo?.metaTitle ||
      "Dermal Fillers in Florida | Lip, Cheek & Facial Fillers | Goldfingers Aesthetics",

    description:
      seo?.metaDescription ||
      "Restore volume and enhance facial contours with expert dermal filler injections at Goldfingers Aesthetics. Lip fillers, cheek fillers, jawline contouring, and more across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo?.metaTitle || "Dermal Fillers | Goldfingers Aesthetics Florida",
      description:
        seo?.metaDescription ||
        "Natural-looking dermal filler treatments for lips, cheeks, chin, jawline, and facial rejuvenation.",
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
          alt: "Dermal Fillers at Goldfingers Aesthetics",
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
      "Dermal fillers Florida",
      "Facial fillers near me",
      "Lip fillers Florida",
      "Cheek fillers Florida",
      "Jawline fillers Florida",
      "Chin fillers Florida",
      "Non-surgical facial contouring",
      "Hyaluronic acid fillers",
      "Goldfingers Aesthetics dermal fillers",
    ],
  };
}

// ==========================
// ✅ Structured Data (Strong Medical Schema)
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      name: "Dermal Filler Injections",
      procedureType: "Minimally Invasive",
      description:
        "Dermal filler injections restore facial volume, enhance lips, contour cheeks and jawline, and smooth wrinkles using hyaluronic acid-based fillers.",
      bodyLocation: ["Lips", "Cheeks", "Chin", "Jawline", "Nasolabial folds"],
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
    {
      "@type": "WebPage",
      name: "Dermal Fillers",
      url: "https://www.goldfingersaesthetics.com/medical-spa/dermal-fillers",
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
export default async function DermalFillers() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Dermal Fillers page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="dermal-fillers-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <DermalFillersPage data={data} />
    </>
  );
}
