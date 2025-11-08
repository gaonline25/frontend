// import LiquidFaceliftGallery from "@/components/gallery/non-surgical/iquid-facelift/LiquidFaceliftGallery";


// export default function LiqiuidFace() {
//     return (
//         <>
//             <LiquidFaceliftGallery />
//         </>
//     )
// }




import LiquidFaceliftGallery from "@/components/gallery/non-surgical/iquid-facelift/LiquidFaceliftGallery";
import { fetchLiquidFaceliftGalleryData } from "@/lib/api/Gallery/non-surgical/fetchLiquidFaceliftGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild the page every 60 seconds (ISR)

// ✅ Server-side CMS Data Fetch
async function getData() {
  try {
    const data = await fetchLiquidFaceliftGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liquid Facelift Gallery data:", error);
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
      "Liquid Facelift Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "See before-and-after results from Goldfingers Aesthetics’ Liquid Facelift treatments. Discover natural-looking rejuvenation with non-surgical techniques.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Liquid Facelift Before & After",
      description:
        seo.metaDescription ||
        "View stunning transformations from Liquid Facelift procedures at Goldfingers Aesthetics. Non-surgical results that lift, tighten, and rejuvenate.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Liquid Facelift Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "liquid facelift gallery, non-surgical facelift, aesthetic injectables, Goldfingers Aesthetics, med spa Florida, before and after gallery, facial rejuvenation",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function LiquidFaceliftGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Liquid Facelift gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass the CMS data to the client-side gallery component
  return <LiquidFaceliftGallery data={data} />;
}
