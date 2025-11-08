// import BreastPage from "@/components/plastic-surgery/breast/BreastPage";


// export default function Breast() {
//     return (
//         <>
//             <BreastPage />
//         </>
//     )
// }


import BreastPage from "@/components/plastic-surgery/breast/BreastPage";
import { fetchBreastPageData } from "@/lib/api/plasticSurgery/fetchBreastPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild the page every 60 seconds (ISR)

// ✅ Server-side CMS data fetch
async function getData() {
  try {
    const data = await fetchBreastPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Plastic Surgery page data:", error);
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
      "Breast Plastic Surgery | Goldfingers Aesthetics & Plastic Surgery",
    description:
      seo.metaDescription ||
      "Explore breast plastic surgery options at Goldfingers Aesthetics — from augmentation to lift and reduction, tailored to enhance confidence and natural beauty.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics | Breast Plastic Surgery Experts",
      description:
        seo.metaDescription ||
        "Discover advanced breast plastic surgery procedures at Goldfingers Aesthetics — including augmentation, lift, and reduction for natural results.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Breast Surgery",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "breast surgery, breast augmentation, breast lift, breast reduction, plastic surgery, Goldfingers Aesthetics, Florida cosmetic surgery",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function BreastPlasticSurgeryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load breast plastic surgery content at the moment.</p>
      </main>
    );
  }

  // ✅ Render with CMS Data
  return <BreastPage data={data} />;
}
