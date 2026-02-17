// // import MensServices from "@/components/medical-spa/mens-services/MensServices";


// // export default function MensService() {
// //     return (
// //         <>
// //             <MensServices />
// //         </>
// //     )
// // }


// import MensServicesPage from "@/components/medical-spa/mens-services/MensServices";
// import { fetchMensFillersPageData } from "@/lib/api/medicalSpa/fetchMensServicesPageComponent";

// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Page auto-rebuilds every 60s

// // ✅ Server-side data fetch
// async function getData() {
//   try {
//     const data = await fetchMensFillersPageData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Men's Services page data:", error);
//     return null;
//   }
// }

// // ✅ SEO metadata powered by Payload CMS
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Men’s Services | Goldfingers Aesthetics - Grooming & Treatments",
//     description:
//       seo.metaDescription ||
//       "Discover specialized aesthetic treatments for men at Goldfingers Aesthetics. From anti-aging solutions to skincare, designed exclusively for men.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Men’s Services | Goldfingers Aesthetics - Grooming & Treatments",
//       description:
//         seo.metaDescription ||
//         "Tailored medical spa services for men — rejuvenate, refresh, and restore confidence with expert care at Goldfingers Aesthetics.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Men’s Aesthetic Treatments at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "men’s aesthetic treatments, men’s facial rejuvenation, men’s skincare, men’s Botox, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Page Component
// export default async function MensServices() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Men's Services page content.
//         </p>
//       </main>
//     );
//   }

//   // ✅ Pass data directly to the page component
//   return <MensServicesPage data={data} />;
// }




import MensServicesPage from "@/components/medical-spa/mens-services/MensServices";
import { fetchMensFillersPageData } from "@/lib/api/medicalSpa/fetchMensServicesPageComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchMensFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Men's Services page data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://www.goldfingersaesthetics.com/medical-spa/mens-services";

  return {
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Men’s Botox & Aesthetic Treatments in Florida | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Premium aesthetic treatments for men in Florida. From Botox and jawline fillers to skin rejuvenation, Goldfingers Aesthetics delivers natural, masculine results.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle || "Men’s Aesthetic Treatments | Botox & Fillers for Men",
      description:
        seo.metaDescription ||
        "Discover expert Botox, dermal fillers, and facial contouring treatments designed specifically for men. Discreet, natural-looking results across Florida.",
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
          alt: "Men’s Botox and aesthetic treatments",
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
      "men’s Botox Florida",
      "Botox for men near me",
      "Brotox Florida",
      "men’s jawline filler",
      "male facial contouring",
      "men’s dermal fillers",
      "anti aging treatments for men",
      "men’s med spa Florida",
      "masculine jawline enhancement",
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
      url: "https://www.goldfingersaesthetics.com",
      medicalSpecialty: "Cosmetic",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Men’s Botox and Dermal Fillers",
      procedureType: "Minimally Invasive",
      bodyLocation: "Face",
      description:
        "Specialized aesthetic treatments for men including Botox, dermal fillers, and jawline contouring designed to maintain masculine features.",
    },
    {
      "@type": "WebPage",
      name: "Men’s Aesthetic Services",
      url: "https://www.goldfingersaesthetics.com/medical-spa/mens-services",
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function MensServices() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Men's Services page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="mens-services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <MensServicesPage data={data} />
    </>
  );
}
