// import SkinMedicaGallery from "@/components/gallery/non-surgical/skinmedica/SkinMedicaGallery";


// export default function SkinMedica() {
//     return (
//         <>
//             <SkinMedicaGallery />
//         </>
//     )
// }



import SkinMedicaGallery from "@/components/gallery/non-surgical/skinmedica/SkinMedicaGallery";
import { fetchSkinMedicaGalleryData } from "@/lib/api/Gallery/non-surgical/fetchSkinMedicaGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate page every 60 seconds (ISR)

// ✅ Server-side Payload CMS data fetcher
async function getData() {
  try {
    const data = await fetchSkinMedicaGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching SkinMedica Gallery data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle || "SkinMedica Gallery | Goldfingers Aesthetics & Med Spa",
    description:
      seo.metaDescription ||
      "View SkinMedica treatment results at Goldfingers Aesthetics. Rejuvenate your skin with professional-grade skincare and advanced procedures.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | SkinMedica Before & After Gallery",
      description:
        seo.metaDescription ||
        "Explore SkinMedica before-and-after results from Goldfingers Aesthetics. Medical-grade skincare that delivers glowing, youthful skin.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics SkinMedica Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "SkinMedica, medical grade skincare, Goldfingers Aesthetics, before and after gallery, med spa Florida, facial rejuvenation, professional skincare",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function SkinMedicaGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load SkinMedica gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass Payload CMS data to the client-side component
  return <SkinMedicaGallery data={data} />;
}
