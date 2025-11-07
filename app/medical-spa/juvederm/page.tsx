// import JuvedermPage from "@/components/medical-spa/juvederm/JuvedermPage";


// export default function Juvederm() {
//     return (
//         <>
//             <JuvedermPage />
//         </>
//     )
// }


import JuvedermPage from "@/components/medical-spa/juvederm/JuvedermPage";
import { fetchJuvedermPageData } from "@/lib/api/medicalSpa/fetchJuvedermPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR every 60s (rebuilds automatically)

async function getData() {
  try {
    const data = await fetchJuvedermPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Juvederm page data:", error);
    return null;
  }
}

// ✅ Auto SEO metadata from CMS or fallback values
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Juvederm | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Restore youthful volume and smoothness with Juvederm dermal fillers at Goldfingers Aesthetics.",
    openGraph: {
      title: seo.metaTitle || "Juvederm | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Professional Juvederm filler treatments to rejuvenate and contour your face with natural results.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Juvederm dermal filler treatment",
        },
      ],
    },
    keywords:
      seo.metaKeywords ||
      "Juvederm, dermal fillers, facial rejuvenation, lip fillers, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

export default async function Juvederm() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Juvederm page content.
        </p>
      </main>
    );
  }

  // ✅ Pass pre-fetched data to the component
  return <JuvedermPage data={data} />;
}
