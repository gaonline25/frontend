// // import PlasticSurgeryBody from "@/components/plastic-surgery/body/PlasticSurgeryBody";


// // export default function Body() {
// //     return (
// //         <>
// //             <PlasticSurgeryBody />
// //         </>
// //     )
// // }



// import PlasticSurgeryBody from "@/components/plastic-surgery/body/PlasticSurgeryBody";
// import { fetchPlasticSurgeryBodyData } from "@/lib/api/plasticSurgery/fetchPlasticSurgeryBodyComponent";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Regenerate every 60 seconds (ISR)

// // ✅ Server-side CMS Data Fetching
// async function getData() {
//   try {
//     const data = await fetchPlasticSurgeryBodyData();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Plastic Surgery Body page data:", error);
//     return null;
//   }
// }

// // ✅ Dynamic SEO Metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getData();
//   const seo = (data as any)?.seoSettings || {};

//   return {
//     title:
//       seo.metaTitle ||
//       "Body Plastic Surgery | Goldfingers Aesthetics & Plastic Surgery",
//     description:
//       seo.metaDescription ||
//       "Explore Goldfingers Aesthetics’ body plastic surgery procedures — from tummy tucks to liposuction, achieving beautiful contours with expert care.",
//     openGraph: {
//       title:
//         seo.metaTitle ||
//         "Goldfingers Aesthetics | Body Plastic Surgery Experts",
//       description:
//         seo.metaDescription ||
//         "Discover transformative body plastic surgery procedures by Goldfingers Aesthetics, including tummy tucks, liposuction, and body contouring.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Goldfingers Aesthetics Body Plastic Surgery",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "body plastic surgery, tummy tuck, liposuction, body contouring, mommy makeover, Goldfingers Aesthetics, cosmetic surgery Florida",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function BodyPlasticSurgeryPage() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
//         <p>Unable to load body plastic surgery content at the moment.</p>
//       </main>
//     );
//   }

//   // ✅ Pass CMS data to the Body component
//   return <PlasticSurgeryBody data={data} />;
// }



import PlasticSurgeryBody from "@/components/plastic-surgery/body/PlasticSurgeryBody";
import { fetchPlasticSurgeryBodyData } from "@/lib/api/plasticSurgery/fetchPlasticSurgeryBodyComponent";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==============================
// ✅ SERVER DATA FETCH
// ==============================
async function getData() {
  try {
    const data = await fetchPlasticSurgeryBodyData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Plastic Surgery Body page data:", error);
    return null;
  }
}

// ==============================
// ✅ HIGH-INTENT SEO METADATA
// ==============================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const url = "https://goldfingersaesthetics.com/plastic-surgery/body";

  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title:
      seo.metaTitle ||
      "Body Plastic Surgery in Florida | Tummy Tuck, Liposuction & Body Contouring | Goldfingers Aesthetics",

    description:
      seo.metaDescription ||
      "Transform your silhouette with advanced body plastic surgery at Goldfingers Aesthetics. Procedures include tummy tuck, liposuction, mommy makeover, and body contouring performed by experienced surgical professionals in Florida.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        seo.metaTitle ||
        "Body Plastic Surgery in Florida | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Explore expert body contouring procedures including tummy tuck, liposuction, and mommy makeover at Goldfingers Aesthetics.",
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
          alt: "Body Plastic Surgery procedures at Goldfingers Aesthetics",
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
      "body plastic surgery Florida",
      "tummy tuck Florida",
      "liposuction Florida",
      "mommy makeover Florida",
      "body contouring surgery",
      "cosmetic body surgery",
      "board certified plastic surgeon Florida",
      "Goldfingers plastic surgery",
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
      "@type": "Service",
      name: "Body Plastic Surgery",
      description:
        "Surgical body contouring procedures including tummy tuck, liposuction, mommy makeover, and body sculpting performed by experienced professionals.",
      provider: {
        "@type": "MedicalBusiness",
        name: "Goldfingers Aesthetics",
      },
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
  ],
};

// ==============================
// ✅ PAGE COMPONENT
// ==============================
export default async function BodyPlasticSurgeryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load body plastic surgery content at the moment.</p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="body-plastic-surgery-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PlasticSurgeryBody data={data} />
    </>
  );
}
