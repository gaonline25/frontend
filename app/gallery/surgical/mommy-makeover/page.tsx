// import MommyMakeoverGallery from "@/components/gallery/surgical/mommy-makeover/MommyMakeoverGallery";


// export default function MommyMakeover() {
//     return (
//         <>
//             <MommyMakeoverGallery />
//         </>
//     )
// }


import MommyMakeoverGallery from "@/components/gallery/surgical/mommy-makeover/MommyMakeoverGallery";
import { fetchMommyMakeoverGalleryData } from "@/lib/api/Gallery/surgical/fetchMommyMakeoverGalleryData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate the page every 60 seconds (ISR)

// ✅ Server-side CMS Data Fetch
async function getData() {
  try {
    const data = await fetchMommyMakeoverGalleryData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Mommy Makeover Gallery data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata Generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Mommy Makeover Gallery | Goldfingers Aesthetics & Plastic Surgery",
    description:
      seo.metaDescription ||
      "Explore before and after photos of Mommy Makeover transformations by Goldfingers Aesthetics. Restoring confidence with expert care and artistry.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Mommy Makeover Before & After Gallery",
      description:
        seo.metaDescription ||
        "Discover beautiful Mommy Makeover results by Goldfingers Aesthetics. Real patients, real transformations, real confidence.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Mommy Makeover Gallery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "mommy makeover, post-pregnancy surgery, body contouring, tummy tuck, breast lift, Goldfingers Aesthetics, plastic surgery Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function MommyMakeoverGalleryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Mommy Makeover gallery at the moment.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to the gallery component
  return <MommyMakeoverGallery data={data} />;
}
