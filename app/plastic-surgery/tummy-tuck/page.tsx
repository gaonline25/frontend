// // import TummyTuckPage from "@/components/plastic-surgery/tummy-tuck/TummyTuckPage";


// // export default function TummyTuck() {
// //     return (
// //         <>
// //             <TummyTuckPage />
// //         </>
// //     )
// // }


// import TummyTuckPage from "@/components/plastic-surgery/tummy-tuck/TummyTuckPage";
// import { fetchTummyTuckPageData } from "@/lib/api/plasticSurgery/fetchTummyTuckPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Regenerate static page every 60s

// // ✅ Secure server-side fetching
// async function getData() {
//   try {
//     const data = await fetchTummyTuckPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Tummy Tuck page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO metadata from CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Tummy Tuck (Abdominoplasty) | Goldfingers Aesthetics – Sculpted Confidence",
//     description:
//       seo.metaDescription ||
//       "Goldfingers Aesthetics offers expert Tummy Tuck (Abdominoplasty) procedures to remove excess fat and skin, tighten muscles, and enhance your abdominal contour.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Tummy Tuck | Goldfingers Aesthetics – Expert Abdominoplasty Surgery",
//       description:
//         seo.metaDescription ||
//         "Achieve a flatter, toned abdomen with Tummy Tuck surgery at Goldfingers Aesthetics. Precision contouring and natural-looking results.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Tummy Tuck procedure at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "tummy tuck, abdominoplasty, plastic surgery, body contouring, Goldfingers Aesthetics, cosmetic surgery, Florida",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function TummyTuck() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Tummy Tuck page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-driven page
//   return <TummyTuckPage data={data} />;
// }



import TummyTuckPage from "@/components/plastic-surgery/tummy-tuck/TummyTuckPage";
import { fetchTummyTuckPageData } from "@/lib/api/plasticSurgery/fetchTummyTuckPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchTummyTuckPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Tummy Tuck page data:", error);
    return null;
  }
}

// ==============================
// ✅ ADVANCED SEO METADATA
// ==============================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url =
    "https://www.goldfingersaesthetics.com/plastic-surgery/tummy-tuck";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Tummy Tuck in Florida | Abdominoplasty Surgery | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Looking for a Tummy Tuck in Florida? Goldfingers Aesthetics offers advanced abdominoplasty surgery to remove excess skin, tighten abdominal muscles, and restore a flatter, firmer contour.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Tummy Tuck (Abdominoplasty) in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Achieve a flatter, sculpted abdomen with expert tummy tuck surgery at Goldfingers Aesthetics. Customized procedures for natural, confident results.",
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
          alt: "Tummy tuck surgery at Goldfingers Aesthetics",
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
      "tummy tuck Florida",
      "abdominoplasty Florida",
      "tummy tuck near me",
      "mini tummy tuck",
      "full tummy tuck surgery",
      "tummy tuck cost Florida",
      "loose skin removal surgery",
      "post pregnancy tummy tuck",
      "Goldfingers tummy tuck",
    ],
  };
}

// ==============================
// ✅ STRUCTURED DATA (SURGICAL AUTHORITY)
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
      name: "Tummy Tuck (Abdominoplasty)",
      procedureType: "SurgicalProcedure",
      description:
        "Tummy tuck surgery removes excess abdominal skin and fat while tightening weakened muscles to restore a flatter, firmer midsection.",
      followup: "Post-operative care and follow-up visits required.",
      bodyLocation: "Abdomen",
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
export default async function TummyTuck() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Tummy Tuck page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="tummy-tuck-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <TummyTuckPage data={data} />
    </>
  );
}
