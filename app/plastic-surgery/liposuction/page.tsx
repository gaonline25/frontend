// import LiposuctionPage from "@/components/plastic-surgery/liposuction/LiposuctionPage";


// export default function Liposuction() {
//     return (
//         <>
//             <LiposuctionPage />
//         </>
//     )
// }


import LiposuctionPage from "@/components/plastic-surgery/liposuction/LiposuctionPage";
import { fetchLiposuctionPageData } from "@/lib/api/plasticSurgery/fetchLiposuctionPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Refresh content every 60s (ISR)

// ✅ Secure server-side data fetching from Payload CMS
async function getData() {
  try {
    const data = await fetchLiposuctionPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liposuction page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata (CMS-driven)
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Liposuction Surgery | Goldfingers Aesthetics – Sculpt Your Confidence",
    description:
      seo.metaDescription ||
      "Goldfingers Aesthetics offers advanced liposuction procedures to contour and refine your body shape with precision and care.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Liposuction | Goldfingers Aesthetics – Advanced Body Contouring",
      description:
        seo.metaDescription ||
        "Experience advanced liposuction at Goldfingers Aesthetics. Remove stubborn fat, enhance definition, and achieve lasting confidence.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Liposuction procedure at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "liposuction, body contouring, fat removal, cosmetic surgery, Goldfingers Aesthetics, body sculpting, Florida plastic surgery",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function Liposuction() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Liposuction page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-managed content
  return <LiposuctionPage data={data} />;
}
