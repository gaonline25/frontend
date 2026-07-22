// // import MedicalSpaInjectables from "@/components/medical-spa/injectables/MedicalSpaInjectables";


// // export default function Injectables() {
// //     return (
// //         <>
// //             <MedicalSpaInjectables />
// //         </>
// //     )
// // }



// import MedicalSpaInjectablesPage from "@/components/medical-spa/injectables/MedicalSpaInjectables";
// import { fetchMedicalSpaInjectablesData } from "@/lib/api/medicalSpa/fetchMedicalSpaInjectablesData";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ ISR every 60 seconds

// async function getData() {
//   try {
//     const data = await fetchMedicalSpaInjectablesData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Injectables data:", error);
//     return null;
//   }
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title: seo.metaTitle || "Injectables | Goldfingers Aesthetics",
//     description:
//       seo.metaDescription ||
//       "Enhance your natural beauty with professional injectables at Goldfingers Aesthetics.",
//     openGraph: {
//       title: seo.metaTitle || "Injectables | Goldfingers Aesthetics",
//       description:
//         seo.metaDescription ||
//         "Discover Goldfingers’ premium injectable treatments, expertly designed for your confidence and glow.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Injectables at Goldfingers Aesthetics",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "botox, fillers, injectables, dermal fillers, Goldfingers Aesthetics",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// export default async function Injectables() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-gray-500 text-center">
//           Unable to load Injectables page content.
//         </p>
//       </main>
//     );
//   }

//   return <MedicalSpaInjectablesPage data={data} />;
// }





import MedicalSpaInjectablesPage from "@/components/medical-spa/injectables/MedicalSpaInjectables";
import { fetchMedicalSpaInjectablesData } from "@/lib/api/medicalSpa/fetchMedicalSpaInjectablesData";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Server-side Fetch
// ==========================
async function getData() {
  try {
    const data = await fetchMedicalSpaInjectablesData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Injectables data:", error);
    return null;
  }
}

// ==========================
// ✅ ADVANCED SEO METADATA
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/medical-spa/injectables";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Injectables in Florida | Botox, Dermal Fillers & Dysport | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Explore expert injectable treatments in Florida including Botox, Dysport, dermal fillers, lip fillers, and facial contouring. Goldfingers Aesthetics delivers natural-looking, confidence-boosting results.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Botox & Dermal Fillers in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Professional injectable treatments including Botox, Dysport, and dermal fillers performed by experienced aesthetic experts.",
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
          alt: "Injectable treatments at Goldfingers Aesthetics",
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
      "Injectables Florida",
      "Botox near me",
      "Dermal fillers Florida",
      "Lip fillers Florida",
      "Dysport injections",
      "Facial contouring fillers",
      "Anti wrinkle injections",
      "Med spa injectables",
      "Cosmetic injectables Florida",
      "Botox and fillers near me",
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
      "@type": "MedicalProcedure",
      name: "Cosmetic Injectable Treatments",
      procedureType: "Minimally Invasive",
      description:
        "Cosmetic injectable treatments including Botox, Dysport, dermal fillers, and facial contouring procedures designed to reduce wrinkles and restore volume.",
      bodyLocation: "Face",
      howPerformed:
        "Administered by licensed aesthetic professionals using FDA-approved neuromodulators and dermal fillers.",
    },
    {
      "@type": "WebPage",
      name: "Injectables",
      url: "https://goldfingersaesthetics.com/medical-spa/injectables",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://goldfingersaesthetics.com",
      },
    },
  ],
};

// ==========================
// ✅ PAGE COMPONENT
// ==========================
export default async function Injectables() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Injectables page content.
        </p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="injectables-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <MedicalSpaInjectablesPage data={data} />
    </>
  );
}
