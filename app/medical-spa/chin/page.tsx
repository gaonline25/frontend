// import ChinPage from "@/components/medical-spa/chin/ChinPage";


// export default function Chin() {
//     return (
//         <>
//             <ChinPage />
//         </>
//     )
// }



import ChinPage from "@/components/medical-spa/chin/ChinPage";
import { fetchChinFillersPageData } from "@/lib/api/medicalSpa/fetchChinPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ISR - rebuild every 60 seconds

// Fetch CMS data securely server-side
async function getData() {
  try {
    const data = await fetchChinFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Chin Page data:", error);
    return null;
  }
}

// Dynamic SEO metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};

  return {
    title:
      seo?.metaTitle ||
      "Chin Fillers - Define and Balance Your Profile | Goldfingers Aesthetics",
    description:
      seo?.metaDescription ||
      "Achieve a naturally balanced and contoured jawline with expert chin filler treatments by Goldfingers Aesthetics.",
    openGraph: {
      title:
        seo?.metaTitle ||
        "Chin Fillers - Define and Balance Your Profile | Goldfingers Aesthetics",
      description:
        seo?.metaDescription ||
        "Professional chin filler treatments designed for facial harmony and confidence.",
      images: [
        {
          url:
            seo?.openGraphImage ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Chin Filler Treatment at Goldfingers Aesthetics",
        },
      ],
    },
  };
}

// Server component rendering
export default async function Chin() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-600">Failed to load Chin Page data.</p>
      </main>
    );
  }

  return <ChinPage data={data} />;
}
