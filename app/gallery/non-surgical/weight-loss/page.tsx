// import WeightLossGallery from "@/components/gallery/non-surgical/weight-loss/WeightLossGallery";



// export default function WeightLoss() {
//     return (
//         <>
//             <WeightLossGallery />
//         </>
//     )
// }



import WeightLossGallery from "@/components/gallery/non-surgical/weight-loss/WeightLossGallery";
import { fetchWeightLossGalleryData } from "@/lib/api/Gallery/non-surgical/fetchWeightLossGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60 seconds (ISR)

// ✅ Server-side Payload CMS data fetch
async function getData() {
  try {
    const data = await fetchWeightLossGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Weight Loss Gallery data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle || "Weight Loss Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "Explore before and after results from Weight Loss treatments at Goldfingers Aesthetics. Real transformations through medical weight loss programs.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Weight Loss Before & After Gallery",
      description:
        seo.metaDescription ||
        "See real patient transformations from Goldfingers Aesthetics Weight Loss programs. Safe, effective, and medically guided body transformation.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Weight Loss Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "medical weight loss, fat reduction, body transformation, before and after gallery, Goldfingers Aesthetics, semaglutide, med spa Florida, wellness",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function WeightLossGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Weight Loss gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to client-side gallery component
  return <WeightLossGallery data={data} />;
}
