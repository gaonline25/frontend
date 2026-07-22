// // import MommyMakeoverPage from "@/components/plastic-surgery/mommy-makeover/MommyMakeoverPage";


// // export default function MommyMakeover() {
// //     return (
// //         <>
// //             <MommyMakeoverPage />
// //         </>
// //     )
// // }


// import MommyMakeoverPage from "@/components/plastic-surgery/mommy-makeover/MommyMakeoverPage";
// import { fetchMommyMakeoverPageData } from "@/lib/api/plasticSurgery/fetchMommyMakeoverPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Revalidate every 60 seconds

// // ✅ Secure server-side data fetching
// async function getData() {
//   try {
//     const data = await fetchMommyMakeoverPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Mommy Makeover page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO (pulled from Payload CMS)
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Mommy Makeover Surgery | Goldfingers Aesthetics – Restore Confidence & Contour",
//     description:
//       seo.metaDescription ||
//       "Goldfingers Aesthetics specializes in Mommy Makeover surgery to help women restore body confidence after pregnancy through personalized, advanced cosmetic procedures.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Mommy Makeover | Goldfingers Aesthetics – Restore Your Body & Confidence",
//       description:
//         seo.metaDescription ||
//         "Experience complete rejuvenation with Mommy Makeover surgery at Goldfingers Aesthetics. Custom-tailored treatments to enhance body shape and confidence.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Mommy Makeover procedure at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "mommy makeover, post-pregnancy surgery, body contouring, breast lift, tummy tuck, Goldfingers Aesthetics, Florida cosmetic surgery",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function MommyMakeover() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Mommy Makeover page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-based content
//   return <MommyMakeoverPage data={data} />;
// }




import MommyMakeoverPage from "@/components/plastic-surgery/mommy-makeover/MommyMakeoverPage";
import { fetchMommyMakeoverPageData } from "@/lib/api/plasticSurgery/fetchMommyMakeoverPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchMommyMakeoverPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Mommy Makeover page data:", error);
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
    "https://goldfingersaesthetics.com/plastic-surgery/mommy-makeover";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Mommy Makeover in Florida | Tummy Tuck & Breast Surgery | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Considering a Mommy Makeover in Florida? Goldfingers Aesthetics offers customized tummy tuck, breast lift, augmentation, and liposuction procedures to restore your pre-pregnancy body safely and beautifully.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Mommy Makeover Surgery in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Restore confidence after pregnancy with a customized Mommy Makeover. Combining tummy tuck, breast enhancement, and body contouring for natural results.",
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
          alt: "Mommy Makeover surgery at Goldfingers Aesthetics",
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
      "mommy makeover Florida",
      "mommy makeover near me",
      "tummy tuck and breast lift",
      "post pregnancy body surgery",
      "mommy makeover cost Florida",
      "liposuction and tummy tuck",
      "plastic surgeon mommy makeover",
      "Goldfingers mommy makeover",
    ],
  };
}

// ==============================
// ✅ STRUCTURED DATA (SURGICAL)
// ==============================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Goldfingers Aesthetics",
      url: "https://goldfingersaesthetics.com",
      medicalSpecialty: "PlasticSurgery",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Mommy Makeover",
      procedureType: "SurgicalProcedure",
      description:
        "Mommy Makeover is a combination of cosmetic surgical procedures including tummy tuck, breast lift or augmentation, and liposuction to restore body contours after pregnancy.",
      followup: "Post-operative recovery and follow-up visits required.",
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
export default async function MommyMakeover() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Mommy Makeover page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="mommy-makeover-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <MommyMakeoverPage data={data} />
    </>
  );
}
