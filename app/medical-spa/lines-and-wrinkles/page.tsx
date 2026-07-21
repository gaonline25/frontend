// // import LinesAndWrinkles from "@/components/medical-spa/lines-and-wrinkles/LinesAndWrinkles";



// // export default function LinesAndWrinkle() {
// //     return (
// //         <>
// //             <LinesAndWrinkles />
// //         </>
// //     )
// // }



// import LinesAndWrinklesPage from "@/components/medical-spa/lines-and-wrinkles/LinesAndWrinkles";
// import { fetchLinesAndWrinklesPageData } from "@/lib/api/medicalSpa/fetchLinesAndWrinklesPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Revalidate every 60 seconds

// async function getData() {
//   try {
//     const data = await fetchLinesAndWrinklesPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Lines & Wrinkles data:", error);
//     return null;
//   }
// }

// // ✅ Auto-generate SEO metadata from CMS or fallback defaults
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Lines & Wrinkles | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Reduce fine lines and wrinkles with Goldfingers Aesthetics' expert treatments for smoother, youthful-looking skin.",
//     openGraph: {
//       title: seo.metaTitle || "Lines & Wrinkles | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Professional wrinkle reduction treatments using Botox and fillers for natural, rejuvenated results.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Lines and Wrinkles Treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "botox, wrinkle reduction, anti-aging, fillers, Goldfingers Aesthetics, fine lines",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// export default async function LinesAndWrinkles() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Lines & Wrinkles page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Server-side data passed directly to component
//   return <LinesAndWrinklesPage data={data} />;
// }



import LinesAndWrinklesPage from "@/components/medical-spa/lines-and-wrinkles/LinesAndWrinkles";
import { fetchLinesAndWrinklesPageData } from "@/lib/api/medicalSpa/fetchLinesAndWrinklesPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Data Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchLinesAndWrinklesPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Lines & Wrinkles data:", error);
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
    "https://goldfingersaesthetics.com/medical-spa/lines-and-wrinkles";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Wrinkle Treatment in Florida | Botox & Fillers | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Smooth fine lines, crow’s feet, forehead lines, and frown lines with expert Botox and dermal filler treatments at Goldfingers Aesthetics across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Wrinkle & Fine Line Treatments | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Looking for wrinkle treatment in Florida? Reduce forehead lines, crow’s feet, and smile lines with safe, FDA-approved injectables.",
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
          alt: "Wrinkle treatment at Goldfingers Aesthetics",
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
      "wrinkle treatment Florida",
      "Botox for forehead lines",
      "crow's feet treatment",
      "frown lines Botox",
      "fine lines treatment",
      "anti aging injections Florida",
      "smile lines filler",
      "wrinkle reduction near me",
      "Botox and fillers Florida",
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
      "@type": "MedicalCondition",
      name: "Facial Wrinkles",
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Botox and Dermal Fillers",
      },
    },
    {
      "@type": "WebPage",
      name: "Lines & Wrinkles Treatment",
      url: "https://goldfingersaesthetics.com/medical-spa/lines-and-wrinkles",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function LinesAndWrinkles() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Lines & Wrinkles page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="lines-and-wrinkles-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <LinesAndWrinklesPage data={data} />
    </>
  );
}
