// import MicroChannelingGallery from "@/components/gallery/non-surgical/micro-channeling/MicroChannelingGallery";


// export default function MicroChanneling() {
//     return (
//         <>
//             <MicroChannelingGallery />
//         </>
//     )
// }



import MicroChannelingGallery from "@/components/gallery/non-surgical/micro-channeling/MicroChannelingGallery";
import { fetchMicroChannelingGalleryData } from "@/lib/api/Gallery/non-surgical/fetchMicroChannelingGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60s for ISR freshness

// ✅ Fetch CMS data server-side
async function getData() {
  try {
    const data = await fetchMicroChannelingGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching MicroChanneling Gallery data:", error);
    return null;
  }
}

// ✅ SEO Metadata setup
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "MicroChanneling Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "Explore before-and-after results from MicroChanneling treatments at Goldfingers Aesthetics. Enhance collagen, refine texture, and rejuvenate your skin.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | MicroChanneling Before & After",
      description:
        seo.metaDescription ||
        "See MicroChanneling transformation results from Goldfingers Aesthetics. Natural skin rejuvenation through collagen stimulation and advanced techniques.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics MicroChanneling Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "microchanneling, skin rejuvenation, microneedling, Goldfingers Aesthetics, before and after gallery, med spa Florida, collagen treatment",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function MicroChannelingGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load MicroChanneling gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to client component
  return <MicroChannelingGallery data={data} />;
}
