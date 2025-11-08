// import LashExtensionsGallery from "@/components/gallery/non-surgical/lash-extensions/LashExtensionsGallery";


// export default function LashExtensions() {
//     return (
//         <>
//             <LashExtensionsGallery />
//         </>
//     )

// }



import LashExtensionsGallery from "@/components/gallery/non-surgical/lash-extensions/LashExtensionsGallery";
import { fetchLashExtensionsGalleryData } from "@/lib/api/Gallery/non-surgical/fetchLashExtensionsGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate page every 60 seconds (ISR)

// ✅ Server-side CMS Data Fetch
async function getData() {
  try {
    const data = await fetchLashExtensionsGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Lash Extensions gallery data:", error);
    return null;
  }
}

// ✅ SEO Metadata Configuration
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Lash Extensions Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "Explore before and after photos of Lash Extensions by Goldfingers Aesthetics — professional med spa services for beautiful, natural lashes.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Lash Extensions Before & After Gallery",
      description:
        seo.metaDescription ||
        "View the Goldfingers Aesthetics Lash Extensions gallery and discover real transformation results from our certified beauty experts.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Lash Extensions Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Lash extensions gallery, Goldfingers Aesthetics, eyelash extension before and after, med spa Florida, lash enhancement photos, beauty treatments",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Entry
export default async function LashExtensionsGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Lash Extensions gallery content at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to client component
  return <LashExtensionsGallery data={data} />;
}
