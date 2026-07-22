// // import SkincareServices from "@/components/medical-spa/skincare-services/SkincareServices";


// // export default function SkincareService() {
// //     return (
// //         <>
// //             <SkincareServices />
// //         </>
// //     )
// // }


// import SkincareServices from "@/components/medical-spa/skincare-services/SkincareServices";
// import { fetchSkincareServicesPageData } from "@/lib/api/medicalSpa/fetchSkincareServicesPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Automatically revalidates every 60 seconds

// // ✅ Secure, server-side data fetching
// async function getData() {
//   try {
//     const data = await fetchSkincareServicesPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Skincare Services page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamically generate SEO metadata from Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Skincare Services | Goldfingers Aesthetics - Professional Skin Treatments",
//     description:
//       seo.metaDescription ||
//       "Experience advanced skincare services at Goldfingers Aesthetics. Our professional treatments rejuvenate, nourish, and restore youthful, radiant skin.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Skincare Services | Goldfingers Aesthetics - Expert Facial Care",
//       description:
//         seo.metaDescription ||
//         "Explore customized skincare treatments from Goldfingers Aesthetics — designed to hydrate, brighten, and enhance your natural glow.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Professional skincare treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "skincare, facial treatments, hydrafacial, medical spa, anti-aging skincare, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function SkincareServicesPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Skincare Services page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render the Skincare Services component with fetched data
//   return <SkincareServices data={data} />;
// }




import SkincareServices from "@/components/medical-spa/skincare-services/SkincareServices";
import { fetchSkincareServicesPageData } from "@/lib/api/medicalSpa/fetchSkincareServicesPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ SERVER FETCH
// ==========================
async function getData() {
  try {
    const data = await fetchSkincareServicesPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Skincare Services page data:", error);
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
    "https://goldfingersaesthetics.com/medical-spa/skincare-services";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Professional Skincare Services in Florida | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Discover advanced medical-grade skincare services at Goldfingers Aesthetics. From anti-aging facials to skin rejuvenation treatments available across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Medical Skincare Services | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Expert facial treatments and advanced skincare services designed to rejuvenate and restore healthy, glowing skin.",
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
          alt: "Professional skincare treatment at Goldfingers Aesthetics",
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
      "skincare services Florida",
      "medical spa skincare",
      "facial treatments Florida",
      "anti-aging facial treatments",
      "professional skincare clinic",
      "chemical peels Florida",
      "HydraFacial Florida",
      "skin rejuvenation treatments",
      "Goldfingers Aesthetics skincare",
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
      "@type": "Service",
      name: "Professional Skincare Services",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
      description:
        "Advanced skincare services including facials, anti-aging treatments, chemical peels, and medical-grade skin rejuvenation therapies.",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function SkincareServicesPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Skincare Services page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="skincare-services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SkincareServices data={data} />
    </>
  );
}
