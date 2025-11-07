// import LiquidFacelift from "@/components/medical-spa/liquid-facelift/LiquidFacelift";


// export default function LiquidFaceLifts() {
//     return (
//         <>
//             <LiquidFacelift />
//         </>
//     )
// }


import LiquidFaceliftPage from "@/components/medical-spa/liquid-facelift/LiquidFacelift";
import { fetchLiquidFillersPageData } from "@/lib/api/medicalSpa/fetchLiquidFaceliftPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60 seconds

// ✅ Fetch function (SSR-safe, CMS-driven)
async function getData() {
  try {
    const data = await fetchLiquidFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liquid Facelift page data:", error);
    return null;
  }
}

// ✅ Auto-generate metadata from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Liquid Facelift | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Rejuvenate your appearance with a Liquid Facelift at Goldfingers Aesthetics — a non-surgical solution for a youthful, natural look.",
    openGraph: {
      title: seo.metaTitle || "Liquid Facelift | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Experience non-surgical facial rejuvenation with Liquid Facelift treatments by Goldfingers Aesthetics.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Liquid Facelift Treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "liquid facelift, non-surgical facelift, dermal fillers, Botox, facial rejuvenation, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page component
export default async function LiquidFacelift() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Liquid Facelift page content.
        </p>
      </main>
    );
  }

  // ✅ Pass pre-fetched data directly to your component
  return <LiquidFaceliftPage data={data} />;
}
