// import RestylaneGallery from "@/components/gallery/non-surgical/restylane-r/RestylaneGallery";



// export default function Restylane() {
//     return (
//         <>
//             <RestylaneGallery />
//         </>
//     )
// }


import RestylaneGallery from "@/components/gallery/non-surgical/restylane-r/RestylaneGallery";
import { fetchRestylaneGalleryData } from "@/lib/api/Gallery/non-surgical/fetchRestylaneGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration (every 60s)

// ✅ Server-side CMS data fetching
async function getData() {
  try {
    const data = await fetchRestylaneGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Restylane Gallery data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle || "Restylane Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "View before and after results from Restylane treatments at Goldfingers Aesthetics. Enhance lips, smooth lines, and restore natural volume beautifully.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Restylane Before & After Gallery",
      description:
        seo.metaDescription ||
        "Discover real Restylane results from Goldfingers Aesthetics. Safe, effective dermal filler treatments for facial rejuvenation and contouring.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Restylane Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "restylane, dermal fillers, lip filler, anti-aging, Goldfingers Aesthetics, before and after gallery, med spa Florida, facial filler treatments",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function RestylaneGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Restylane gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to client-side component
  return <RestylaneGallery data={data} />;
}
