// import React from "react";
// import Home from "../components/Home";

// // import "./page.css"

// function GoldfingersAesthetics() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default GoldfingersAesthetics;




import Home from "@/components/Home";
import { fetchHomePage } from "@/lib/api/home";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate every 60 seconds (ISR)

// ✅ Fetch Homepage data from Payload CMS
async function getData() {
  try {
    const data = await fetchHomePage();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Home Page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Goldfingers Aesthetics | Florida’s Premier Med Spa & Aesthetic Experts",
    description:
      seo.metaDescription ||
      "Goldfingers Aesthetics offers expert Botox, fillers, and aesthetic treatments across Florida. Experience beauty, confidence, and innovation with our award-winning med spa.",
    openGraph: {
      title:
        seo.metaTitle || "Goldfingers Aesthetics | Florida’s Premier Med Spa",
      description:
        seo.metaDescription ||
        "Discover expert aesthetic treatments, Botox, and skincare services by Goldfingers Aesthetics — the trusted med spa of Florida.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Med Spa",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Goldfingers Aesthetics, med spa Florida, Botox, fillers, skincare, beauty treatments, anti-aging, aesthetics clinic",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function GoldfingersAesthetics() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load homepage content.</p>
      </main>
    );
  }

  // ✅ Pass CMS-fetched data into Home component
  return <Home data={data} />;
}
