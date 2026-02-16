// // import React from "react";
// // import Home from "../components/Home";

// // // import "./page.css"

// // function GoldfingersAesthetics() {
// //   return (
// //     <>
// //       <Home />
// //     </>
// //   );
// // }

// // export default GoldfingersAesthetics;




// import Home from "@/components/Home";
// import { fetchHomePage } from "@/lib/api/home";
// import type { Metadata } from "next";

// export const revalidate = 60; // ✅ Regenerate every 60 seconds (ISR)

// // ✅ Fetch Homepage data from Payload CMS
// async function getData() {
//   try {
//     const data = await fetchHomePage();
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching Home Page data:", error);
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
//       "Goldfingers Aesthetics | Florida’s Premier Med Spa & Aesthetic Experts",
//     description:
//       seo.metaDescription ||
//       "Goldfingers Aesthetics offers expert Botox, fillers, and aesthetic treatments across Florida. Experience beauty, confidence, and innovation with our award-winning med spa.",
//     openGraph: {
//       title:
//         seo.metaTitle || "Goldfingers Aesthetics | Florida’s Premier Med Spa",
//       description:
//         seo.metaDescription ||
//         "Discover expert aesthetic treatments, Botox, and skincare services by Goldfingers Aesthetics — the trusted med spa of Florida.",
//       images: [
//         {
//           url:
//             seo.ogImage?.url ||
//             "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Goldfingers Aesthetics Med Spa",
//         },
//       ],
//     },
//     keywords:
//       seo.keywords ||
//       "Goldfingers Aesthetics, med spa Florida, Botox, fillers, skincare, beauty treatments, anti-aging, aesthetics clinic",
//     robots: seo.robots || "index, follow",
//     alternates: { canonical: seo.canonicalUrl },
//   };
// }

// // ✅ Main Page Component
// export default async function GoldfingersAesthetics() {
//   const data = await getData();

//   if (!data) {
//     return (
//       <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
//         <p>Unable to load homepage content.</p>
//       </main>
//     );
//   }

//   // ✅ Pass CMS-fetched data into Home component
//   return <Home data={data} />;
// }




// app/page.tsx

import Home from "@/components/Home";
import { fetchHomePage } from "@/lib/api/home";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

// ==========================
// ✅ Fetch Homepage Data
// ==========================
async function getData() {
  try {
    const data = await fetchHomePage();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Home Page data:", error);
    return null;
  }
}

// ==========================
// ✅ Dynamic SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  const title =
    seo.metaTitle ||
    "Goldfingers Aesthetics | Florida’s Premier Med Spa & Botox Experts";

  const description =
    seo.metaDescription ||
    "Goldfingers Aesthetics is Florida’s premier medical spa specializing in Botox, dermal fillers, skincare, and advanced aesthetic treatments. Trusted experts delivering natural, confidence-boosting results.";

  const ogImage =
    seo.ogImage?.cloudinary_url ||
    seo.ogImage?.url ||
    "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg";

  const canonical =
    seo.canonicalUrl ||
    "https://www.goldfingersaesthetics.com/";

  return {
    title,
    description,
    metadataBase: new URL("https://www.goldfingersaesthetics.com"),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Goldfingers Aesthetics",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Florida Med Spa",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords:
      seo.keywords || [
        "Goldfingers Aesthetics",
        "Florida med spa",
        "Botox Florida",
        "Dermal fillers Florida",
        "Aesthetic clinic Florida",
        "Medical spa near me",
        "Anti-aging treatments Florida",
      ],
  };
}

// ==========================
// ✅ Structured Data
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Goldfingers Aesthetics",
      url: "https://www.goldfingersaesthetics.com",
      logo: "https://www.goldfingersaesthetics.com/logo.png",
      image:
        "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
      description:
        "Florida’s premier medical spa specializing in Botox, dermal fillers, skincare, and advanced aesthetic treatments.",
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
      sameAs: [
        "https://www.instagram.com/goldfingersaesthetics",
        "https://www.facebook.com/goldfingersaesthetics",
      ],
    },
    {
      "@type": "WebSite",
      name: "Goldfingers Aesthetics",
      url: "https://www.goldfingersaesthetics.com",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.goldfingersaesthetics.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ==========================
// ✅ Page Component
// ==========================
export default async function GoldfingersAesthetics() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load homepage content.</p>
      </main>
    );
  }

  return (
    <>
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Home data={data} />
    </>
  );
}
