// import CheekFillers from "@/components/medical-spa/cheek-fillers/CheekFillers";


// export default function CheekFiller() {
//     return (
//         <>
//             <CheekFillers />
//         </>
//     )
// }


import CheekFillers from "@/components/medical-spa/cheek-fillers/CheekFillers";
import { fetchCheekFillersPageData } from "@/lib/api/medicalSpa/fetchCheekFillersPageData";
import type { Metadata } from "next";

export const revalidate = 60; // Rebuild every 60 seconds with ISR

async function getData() {
  try {
    const data = await fetchCheekFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Cheek Fillers data:", error);
    return null;
  }
}

// Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};

  return {
    title:
      seo?.metaTitle ||
      "Cheek Fillers - Enhance Your Natural Beauty | Goldfingers Aesthetics",
    description:
      seo?.metaDescription ||
      "Discover natural-looking cheek filler treatments at Goldfingers Aesthetics. Restore youthful volume and achieve balance safely.",
    openGraph: {
      title:
        seo?.metaTitle ||
        "Cheek Fillers - Enhance Your Natural Beauty | Goldfingers Aesthetics",
      description:
        seo?.metaDescription ||
        "Expert cheek filler services with safe, natural-looking results.",
      images: [
        {
          url:
            seo?.openGraphImage ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Cheek Fillers at Goldfingers Aesthetics",
        },
      ],
    },
  };
}

export default async function CheekFillerPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">Failed to load page data.</p>
      </main>
    );
  }

  return <CheekFillers data={data} />;
}
