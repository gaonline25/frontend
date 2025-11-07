// import MicroChanneling from "@/components/medical-spa/micro-channeling/MicroChanneling";


// export default function MicroChannelings() {
//     return (
//         <>
//             <MicroChanneling />
//         </>
//     )
// }


import MicroChannelingPage from "@/components/medical-spa/micro-channeling/MicroChanneling";
import { fetchMicroFillersPageData } from "@/lib/api/medicalSpa/fetchMicroChannelingPageComponent";

import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR - Refresh page every 60 seconds

// ✅ Server-only data fetching
async function getData() {
  try {
    const data = await fetchMicroFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Micro Channeling page data:", error);
    return null;
  }
}

// ✅ Auto-generate SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Micro Channeling | Goldfingers Aesthetics - Skin Rejuvenation Treatment",
    description:
      seo.metaDescription ||
      "Micro Channeling at Goldfingers Aesthetics helps rejuvenate your skin by stimulating collagen production and improving skin texture naturally.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Micro Channeling | Goldfingers Aesthetics - Skin Rejuvenation Treatment",
      description:
        seo.metaDescription ||
        "Experience micro channeling at Goldfingers Aesthetics — a non-invasive skin rejuvenation treatment for smoother, youthful skin.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Micro Channeling treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "micro channeling, skin rejuvenation, collagen induction, non-invasive facial, anti-aging, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function MicroChanneling() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Micro Channeling page content.
        </p>
      </main>
    );
  }

  // ✅ Pass pre-rendered CMS data directly to component
  return <MicroChannelingPage data={data} />;
}
