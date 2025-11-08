// import MarionetteLineGallery from "@/components/gallery/non-surgical/marionette-lines/MarionetteLineGallery";


// export default function MarionetteLine() {
//     return (
//         <>
//             <MarionetteLineGallery />
//         </>
//     )
// }



import MarionetteLineGallery from "@/components/gallery/non-surgical/marionette-lines/MarionetteLineGallery";
import { fetchMarionetteLineGalleryData } from "@/lib/api/Gallery/non-surgical/fetchMarionetteLineGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate page every 60 seconds (ISR)

// ✅ Server-side CMS Data Fetch
async function getData() {
  try {
    const data = await fetchMarionetteLineGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Marionette Line Gallery data:", error);
    return null;
  }
}

// ✅ SEO Metadata (Dynamic)
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Marionette Line Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "Explore before and after photos of Marionette Line filler treatments at Goldfingers Aesthetics. Smooth lines and restore youthful definition naturally.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Marionette Line Filler Before & After",
      description:
        seo.metaDescription ||
        "See real Marionette Line filler results at Goldfingers Aesthetics. Non-surgical treatments that restore balance and soften facial lines.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Marionette Line Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "marionette line filler, nasolabial folds, facial filler, Goldfingers Aesthetics, before and after gallery, med spa Florida, anti-aging injectables",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function MarionetteLineGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Marionette Line gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass the fetched CMS data to the client component
  return <MarionetteLineGallery data={data} />;
}
