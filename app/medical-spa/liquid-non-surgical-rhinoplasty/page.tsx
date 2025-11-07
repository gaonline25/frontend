// import LiquidRhinoplasty from "@/components/medical-spa/liquid-non-surgical-rhinoplasty/LiquidRhinoplasty";


// export default function LiquidNonSurgicalRhinoplastys() {
//     return (
//         <>
//             <LiquidRhinoplasty />
//         </>
//     )
// }



import LiquidRhinoplastyPage from "@/components/medical-spa/liquid-non-surgical-rhinoplasty/LiquidRhinoplasty";
import { fetchLiquidRhinoplastyPageData } from "@/lib/api/medicalSpa/fetchLiquidRhinoplastyPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild automatically every 60 seconds

// ✅ Server-side fetch (no client exposure)
async function getData() {
  try {
    const data = await fetchLiquidRhinoplastyPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Liquid Rhinoplasty page data:", error);
    return null;
  }
}

// ✅ Auto SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Liquid Rhinoplasty | Non-Surgical Nose Job | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Enhance your nose shape with Liquid Rhinoplasty — a non-surgical nose job using dermal fillers for perfect contouring at Goldfingers Aesthetics.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Liquid Rhinoplasty | Non-Surgical Nose Job | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Non-surgical rhinoplasty using dermal fillers to refine and contour your nose — performed by experts at Goldfingers Aesthetics.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Liquid Rhinoplasty Treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "liquid rhinoplasty, non-surgical nose job, dermal fillers, nose contouring, Goldfingers Aesthetics, non-invasive rhinoplasty",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function LiquidRhinoplasty() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Liquid Rhinoplasty page content.
        </p>
      </main>
    );
  }

  // ✅ Pass SSR-fetched data to the component
  return <LiquidRhinoplastyPage data={data} />;
}
