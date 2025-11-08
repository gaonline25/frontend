// import BreastLiftGallery from "@/components/gallery/surgical/breast-lift/BreastLiftGallery";


// export default function BreastLift() {
//     return (
//         <>
//             <BreastLiftGallery />
//         </>
//     )
// }



import BreastLiftGallery from "@/components/gallery/surgical/breast-lift/BreastLiftGallery";
import { fetchBreastLiftGalleryData } from "@/lib/api/Gallery/surgical/fetchBreastLiftGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate every 60 seconds (ISR)

// ✅ Fetch data from Payload CMS
async function getData() {
  try {
    const data = await fetchBreastLiftGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Lift Gallery data:", error);
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
      "Breast Lift Gallery | Goldfingers Aesthetics & Plastic Surgery",
    description:
      seo.metaDescription ||
      "View before and after photos of Breast Lift procedures performed by the expert surgeons at Goldfingers Aesthetics. Natural, youthful results.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Breast Lift Before & After Gallery",
      description:
        seo.metaDescription ||
        "Explore beautiful Breast Lift results by Goldfingers Aesthetics. See real patient transformations with expert care and precision surgery.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Breast Lift Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "breast lift, mastopexy, cosmetic surgery, before and after gallery, Goldfingers Aesthetics, plastic surgery Florida, breast rejuvenation",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function BreastLiftGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Breast Lift gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS-fetched data to the client-side gallery component
  return <BreastLiftGallery data={data} />;
}
