// // import SpaServices from "@/components/medical-spa/spa-services/SpaServices";


// // export default function SpaService() {
// //     return (
// //         <>
// //             <SpaServices />
// //         </>
// //     )
// // }



// import SpaServices from "@/components/medical-spa/spa-services/SpaServices";
// import { fetchSpaFillersPageData } from "@/lib/api/medicalSpa/fetchSpaServicesPageComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR refresh every 60 seconds

// // ✅ Secure server-side data fetching from Payload CMS
// async function getData() {
//   try {
//     const data = await fetchSpaFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Spa Services page data:", error);
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
//       "Spa Services | Goldfingers Aesthetics – Luxury Treatments for Mind & Body",
//     description:
//       seo.metaDescription ||
//       "Indulge in Goldfingers Aesthetics' spa services. Experience relaxation, rejuvenation, and skincare designed to refresh your mind, body, and spirit.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Spa Services | Goldfingers Aesthetics – Rejuvenating Treatments",
//       description:
//         seo.metaDescription ||
//         "Pamper yourself with Goldfingers Aesthetics’ luxury spa treatments — facials, massages, and skincare therapies that restore balance and beauty.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Luxury spa treatment at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "spa, skincare, relaxation, Goldfingers Aesthetics, massage, facials, beauty spa, wellness treatments",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function SpaServicesPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Spa Services page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Render CMS-driven component with fetched data
//   return <SpaServices data={data} />;
// }



import SpaServices from "@/components/medical-spa/spa-services/SpaServices";
import { fetchSpaFillersPageData } from "@/lib/api/medicalSpa/fetchSpaServicesPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ SERVER FETCH
// ==========================
async function getData() {
  try {
    const data = await fetchSpaFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Spa Services page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/medical-spa/spa-services";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Luxury Spa Services in Florida | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Experience luxury spa services at Goldfingers Aesthetics. Relax, rejuvenate, and restore your glow with professional facials and advanced skincare treatments across Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle || "Luxury Spa Services | Goldfingers Aesthetics Florida",
      description:
        seo.metaDescription ||
        "Indulge in premium spa services designed to relax the mind and rejuvenate the skin at Goldfingers Aesthetics.",
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
          alt: "Luxury spa treatment at Goldfingers Aesthetics",
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
      "spa services Florida",
      "luxury spa near me",
      "facials Florida",
      "medical spa spa treatments",
      "Goldfingers Aesthetics spa",
      "skincare spa Florida",
      "relaxation treatments",
      "advanced facial treatments",
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
      name: "Luxury Spa Services",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
      description:
        "Luxury spa treatments including facials, advanced skincare, and rejuvenation services designed to relax and restore skin health.",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function SpaServicesPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Spa Services page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="spa-services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SpaServices data={data} />
    </>
  );
}
