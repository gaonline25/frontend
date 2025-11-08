// import LiquidRhinoplastyGallery from "@/components/gallery/non-surgical/liquid-rhinoplasty/LiquidRhinoplastyGallery";



// export default function LiquidRhinoplasty() {
//     return (
//         <>
//             <LiquidRhinoplastyGallery />
//         </>
//     )
// }



import LiquidRhinoplastyGallery from "@/components/gallery/non-surgical/liquid-rhinoplasty/LiquidRhinoplastyGallery";
import { fetchLiquidRhinoplastyGalleryData } from "@/lib/api/Gallery/non-surgical/fetchLiquidRhinoplastyGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild the page every 60 seconds (ISR)

// ✅ Server-side data fetch from Payload CMS
async function getData() {
  try {
    const data = await fetchLiquidRhinoplastyGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liquid Rhinoplasty Gallery data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata setup
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Liquid Rhinoplasty Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "View before and after photos of Liquid Rhinoplasty at Goldfingers Aesthetics. Discover non-surgical nose reshaping results that enhance facial balance.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Liquid Rhinoplasty Before & After",
      description:
        seo.metaDescription ||
        "See real Liquid Rhinoplasty transformations from Goldfingers Aesthetics — experience subtle, non-surgical enhancements with injectables.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Liquid Rhinoplasty Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "liquid rhinoplasty, non-surgical nose job, Goldfingers Aesthetics, before and after gallery, injectable rhinoplasty, med spa Florida, facial aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page component
export default async function LiquidRhinoplastyGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Liquid Rhinoplasty gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to client-side gallery component
  return <LiquidRhinoplastyGallery data={data} />;
}
