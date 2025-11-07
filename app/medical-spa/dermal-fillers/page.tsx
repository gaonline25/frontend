// import DermalFillersPage from "@/components/medical-spa/dermal-fillers/DermalFillersPage";


// export default function DermalFillers() {
//     return (
//         <>
//             <DermalFillersPage />
//         </>
//     )
// }



import DermalFillersPage from "@/components/medical-spa/dermal-fillers/DermalFillersPage";
import { fetchDermalFillersPageData } from "@/lib/api/medicalSpa/fetchDermalFillersPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ISR: rebuild every 60 seconds

async function getData() {
  try {
    const data = await fetchDermalFillersPageData();
    return data || null;
  } catch (err) {
    console.error("❌ Error fetching Dermal Fillers data:", err);
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
      "Dermal Fillers - Restore Youthful Volume | Goldfingers Aesthetics",
    description:
      seo?.metaDescription ||
      "Discover natural, safe, and effective dermal filler treatments at Goldfingers Aesthetics. Enhance facial features and rejuvenate your look.",
    openGraph: {
      title:
        seo?.metaTitle ||
        "Dermal Fillers - Restore Youthful Volume | Goldfingers Aesthetics",
      description:
        seo?.metaDescription ||
        "Professional dermal filler services for natural and balanced enhancement.",
      images: [
        {
          url:
            seo?.openGraphImage ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Dermal Fillers Treatment at Goldfingers Aesthetics",
        },
      ],
    },
  };
}

export default async function DermalFillers() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Dermal Fillers page content.
        </p>
      </main>
    );
  }

  return <DermalFillersPage data={data} />;
}
