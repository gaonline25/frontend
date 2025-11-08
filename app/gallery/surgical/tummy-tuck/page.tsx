// import TummyTuckGallery from "@/components/gallery/surgical/tummy-tuck/TummyTuckGallery";


// export default function TummyTuck() {
//     return (
//         <>
//             <TummyTuckGallery />
//         </>
//     )
// }



import TummyTuckGallery from "@/components/gallery/surgical/tummy-tuck/TummyTuckGallery";
import { fetchTummyTuckGalleryData } from "@/lib/api/Gallery/surgical/fetchTummyTuckGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate page every 60 seconds (ISR)

// ✅ Server-side CMS data fetching
async function getData() {
  try {
    const data = await fetchTummyTuckGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Tummy Tuck Gallery data:", error);
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
      "Tummy Tuck Gallery | Goldfingers Aesthetics & Plastic Surgery",
    description:
      seo.metaDescription ||
      "View before and after photos of Tummy Tuck procedures performed by Goldfingers Aesthetics. Sculpted results for a flatter, firmer abdomen.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Tummy Tuck Before & After Gallery",
      description:
        seo.metaDescription ||
        "See real Tummy Tuck transformations by Goldfingers Aesthetics. Expert abdominoplasty results for confidence and contour.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Tummy Tuck Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "tummy tuck, abdominoplasty, body contouring, plastic surgery, before and after gallery, Goldfingers Aesthetics, Florida surgery",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function TummyTuckGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Tummy Tuck gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Render Gallery Component with CMS Data
  return <TummyTuckGallery data={data} />;
}
