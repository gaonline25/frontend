// import LiquidChinJawGallery from "@/components/gallery/non-surgical/liquid-chin-and-jaw-contouring/LiquidChinJawGallery";


// export default function LiquidChinJaw() {
//     return (
//         <>
//             <LiquidChinJawGallery />
//         </>
//     )
// }


import LiquidChinJawGallery from "@/components/gallery/non-surgical/liquid-chin-and-jaw-contouring/LiquidChinJawGallery";
import { fetchLiquidChinJawGalleryData } from "@/lib/api/Gallery/non-surgical/fetchLiquidChinJawGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60 seconds (ISR)

// ✅ Server-side CMS Data Fetcher
async function getData() {
  try {
    const data = await fetchLiquidChinJawGalleryData();
    return data || null;
  } catch (error) {
    console.error(
      "❌ Error fetching Liquid Chin & Jaw Contouring data:",
      error
    );
    return null;
  }
}

// ✅ SEO Metadata Generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Liquid Chin & Jaw Contouring Gallery | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Explore real before-and-after photos of Liquid Chin & Jaw Contouring at Goldfingers Aesthetics. Discover how non-surgical contouring can enhance your facial definition.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Liquid Chin & Jaw Contouring Before & After",
      description:
        seo.metaDescription ||
        "View our Liquid Chin & Jaw Contouring gallery at Goldfingers Aesthetics — see stunning transformations using advanced injectable techniques.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Liquid Chin & Jaw Contouring Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "liquid chin contouring, jawline contouring, non-surgical contouring, aesthetic injectables, Goldfingers Aesthetics, before and after gallery, med spa Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function LiquidChinJawGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>
          Unable to load Liquid Chin & Jaw Contouring gallery at the moment.
        </p>
      </main>
    );
  }

  // ✅ Pass CMS data into the client-side gallery component
  return <LiquidChinJawGallery data={data} />;
}
