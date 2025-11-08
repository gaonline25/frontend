// import BreastAugmentationGallery from "@/components/gallery/surgical/breast-augmentation/BreastAugmentationGallery";


// export default function BreastAugmentation() {
//     return (
//         <>
//             <BreastAugmentationGallery />
//         </>
//     )
// }



import BreastAugmentationGallery from "@/components/gallery/surgical/breast-augmentation/BreastAugmentationGallery";
import { fetchBreastAugmentationGalleryData } from "@/lib/api/Gallery/surgical/fetchBreastAugmentationGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuilds the page every 60 seconds (ISR)

// ✅ Server-side CMS data fetcher
async function getData() {
  try {
    const data = await fetchBreastAugmentationGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Augmentation Gallery data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Breast Augmentation Gallery | Goldfingers Aesthetics & Plastic Surgery",
    description:
      seo.metaDescription ||
      "Explore before and after photos of Breast Augmentation procedures by Goldfingers Aesthetics. Real results, natural outcomes, expert care.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Breast Augmentation Before & After Gallery",
      description:
        seo.metaDescription ||
        "View stunning before and after results from Breast Augmentation procedures at Goldfingers Aesthetics, Florida’s trusted plastic surgery experts.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Breast Augmentation Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "breast augmentation, breast implants, cosmetic surgery, before and after gallery, Goldfingers Aesthetics, Florida plastic surgery, natural results",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function BreastAugmentationGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Breast Augmentation gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS-fetched data to the client-side component
  return <BreastAugmentationGallery data={data} />;
}
