// // import SkinMedica from "@/components/medical-spa/skin-medica/SkinMedica";


// // export default function SkinMedicas() {
// //     return (
// //         <>
// //             <SkinMedica />
// //         </>
// //     )
// // }


// import SkinMedica from "@/components/medical-spa/skin-medica/SkinMedica";
// import { fetchSkinMedicaPageData } from "@/lib/api/medicalSpa/fetchSkinMedicaPageData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Incremental Static Regeneration every 60 seconds

// // ✅ Server-only data fetching (never exposed to client)
// async function getData() {
//   try {
//     const data = await fetchSkinMedicaPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching SkinMedica page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO metadata from Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "SkinMedica | Goldfingers Aesthetics - Advanced Skincare Solutions",
//     description:
//       seo.metaDescription ||
//       "Rejuvenate your skin with SkinMedica treatments at Goldfingers Aesthetics. Scientifically advanced skincare that nourishes and restores youthful radiance.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "SkinMedica | Goldfingers Aesthetics - Professional Skincare",
//       description:
//         seo.metaDescription ||
//         "SkinMedica treatments offer clinically proven skincare products that rejuvenate and enhance natural beauty.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "SkinMedica professional skincare products",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "SkinMedica, skincare, anti-aging, chemical peels, professional skin treatment, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function SkinMedicaPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load SkinMedica page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render the page component with CMS data
//   return <SkinMedica data={data} />;
// }



import SkinMedica from "@/components/medical-spa/skin-medica/SkinMedica";
import { fetchSkinMedicaPageData } from "@/lib/api/medicalSpa/fetchSkinMedicaPageData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ SERVER FETCH
// ==========================
async function getData() {
  try {
    const data = await fetchSkinMedicaPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching SkinMedica page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/medical-spa/skin-medica";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "SkinMedica® in Florida | Medical-Grade Skincare | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Shop and experience SkinMedica® at Goldfingers Aesthetics. Advanced, medical-grade skincare solutions available across Florida locations.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "SkinMedica® Professional Skincare | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Discover clinically proven SkinMedica® products and treatments at Goldfingers Aesthetics.",
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
          alt: "SkinMedica medical grade skincare products",
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
      "SkinMedica Florida",
      "SkinMedica near me",
      "medical grade skincare Florida",
      "SkinMedica products",
      "SkinMedica authorized provider",
      "anti-aging skincare Florida",
      "professional skincare clinic Florida",
      "Goldfingers Aesthetics SkinMedica",
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
      medicalSpecialty: "Dermatology",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "Product",
      name: "SkinMedica® Professional Skincare",
      brand: {
        "@type": "Brand",
        name: "SkinMedica",
      },
      description:
        "SkinMedica® offers advanced, clinically tested skincare products designed to rejuvenate and restore healthy-looking skin.",
      category: "Medical Grade Skincare",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function SkinMedicaPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load SkinMedica page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="skinmedica-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SkinMedica data={data} />
    </>
  );
}
