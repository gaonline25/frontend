// import LiposuctionGallery from "@/components/gallery/surgical/liposuction/LiposuctionGallery";


// export default function Liposuction() {
//     return (
//         <>
//             <LiposuctionGallery />
//         </>
//     )
// }


import LiposuctionGallery from "@/components/gallery/surgical/liposuction/LiposuctionGallery";
import { fetchLiposuctionGalleryData } from "@/lib/api/Gallery/surgical/fetchLiposuctionGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60 seconds for ISR updates

// ✅ Server-side CMS Data Fetching
async function getData() {
  try {
    const data = await fetchLiposuctionGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liposuction Gallery data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata Generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Liposuction Gallery | Goldfingers Aesthetics & Plastic Surgery",
    description:
      seo.metaDescription ||
      "Explore before and after photos of Liposuction procedures performed by Goldfingers Aesthetics. Real transformations with natural, sculpted results.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Liposuction Before & After Gallery",
      description:
        seo.metaDescription ||
        "See real Liposuction results from Goldfingers Aesthetics. Precision body contouring for confidence and beauty.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Liposuction Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "liposuction, body contouring, fat removal, cosmetic surgery, before and after gallery, Goldfingers Aesthetics, plastic surgery Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function LiposuctionGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Liposuction gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Render Client Gallery Component with CMS Data
  return <LiposuctionGallery data={data} />;
}
