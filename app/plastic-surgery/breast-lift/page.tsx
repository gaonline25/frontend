// // import BreastLiftPage from "@/components/plastic-surgery/breast-lift/BreastLiftPage";


// // export default function breastLift() {
// //     return (
// //         <>
// //             <BreastLiftPage />
// //         </>
// //     )
// // } 


// import BreastLiftPage from "@/components/plastic-surgery/breast-lift/BreastLiftPage";
// import { fetchBreastLiftPageData } from "@/lib/api/plasticSurgery/fetchBreastLiftPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR every 60s to keep CMS updates fresh

// // ✅ Secure server-side data fetching from Payload CMS
// async function getData() {
//   try {
//     const data = await fetchBreastLiftPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Breast Lift page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO Metadata populated from CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Breast Lift Surgery | Goldfingers Aesthetics – Restore Youthful Contours",
//     description:
//       seo.metaDescription ||
//       "Rejuvenate your figure with Goldfingers Aesthetics’ expert breast lift procedures. Tighten and lift sagging breasts naturally with advanced surgical techniques.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Breast Lift Surgery | Goldfingers Aesthetics – Expert Breast Enhancement",
//       description:
//         seo.metaDescription ||
//         "Experience confidence and balance with breast lift surgery by Goldfingers Aesthetics — advanced techniques, personalized care, and natural results.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Breast lift surgery at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "breast lift, mastopexy, breast enhancement, plastic surgery, Goldfingers Aesthetics, breast contour, cosmetic surgery Florida",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function BreastLift() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Breast Lift page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-driven page content
//   return <BreastLiftPage data={data} />;
// }




import BreastLiftPage from "@/components/plastic-surgery/breast-lift/BreastLiftPage";
import { fetchBreastLiftPageData } from "@/lib/api/plasticSurgery/fetchBreastLiftPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchBreastLiftPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Lift page data:", error);
    return null;
  }
}

// ==============================
// ✅ HIGH-COMPETITION SEO METADATA
// ==============================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url =
    "https://www.goldfingersaesthetics.com/plastic-surgery/breast-lift";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Breast Lift in Florida (Mastopexy) | Restore Shape & Firmness | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Considering a breast lift in Florida? Goldfingers Aesthetics offers advanced mastopexy procedures to restore youthful contours, firmness, and symmetry with natural-looking results.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Lift Surgery in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Lift and reshape sagging breasts with expert mastopexy surgery at Goldfingers Aesthetics. Personalized care and advanced surgical techniques.",
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
          alt: "Breast lift surgery at Goldfingers Aesthetics in Florida",
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
      "breast lift Florida",
      "mastopexy Florida",
      "breast lift surgery",
      "breast lift near me",
      "plastic surgeon Florida",
      "sagging breast correction",
      "cosmetic breast surgery",
      "Goldfingers breast lift",
    ],
  };
}

// ==============================
// ✅ STRUCTURED DATA (SURGERY)
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
      name: "Breast Lift (Mastopexy)",
      procedureType: "SurgicalProcedure",
      bodyLocation: "Breast",
      description:
        "Breast lift surgery, also known as mastopexy, is a surgical procedure designed to raise and reshape sagging breasts by removing excess skin and tightening surrounding tissue.",
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
export default async function BreastLift() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Breast Lift page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="breast-lift-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BreastLiftPage data={data} />
    </>
  );
}
