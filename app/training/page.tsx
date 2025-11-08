// import GoldfingersTraining from "@/components/training/GoldfingersTraining";


// export default function Training() {
//     return (

//         <>
//             <GoldfingersTraining />
//         </>
//     )
// }


import GoldfingersTraining from "@/components/training/GoldfingersTraining";
import { fetchTrainingApplicationPageData } from "@/lib/api/traning/fetchTrainingPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild every 60s with new CMS data

// ✅ Server-side CMS data fetch
async function getData() {
  try {
    const data = await fetchTrainingApplicationPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Goldfingers Training data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Goldfingers Aesthetics Training Programs",
    description:
      seo.metaDescription ||
      "Join Goldfingers Aesthetics for professional injectables and aesthetic medicine training. Learn from experts through certified, hands-on programs designed for all skill levels.",
    openGraph: {
      title: seo.metaTitle || "Goldfingers Aesthetics Training Programs",
      description:
        seo.metaDescription ||
        "Advance your aesthetics career with Goldfingers’ injectables and aesthetic training programs — hands-on courses led by medical professionals.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Training Programs",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "aesthetic training, injectables courses, botox training, filler certification, cosmetic training, medical aesthetics academy, Goldfingers training",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function TrainingPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Goldfingers Training content.</p>
      </main>
    );
  }

  // ✅ Pass CMS data into the Training component
  return <GoldfingersTraining data={data} />;
}
