// import HandRejuvenation from "@/components/medical-spa/hands/HandRejuvenation";


// export default function Hands() {
//     return (
//         <>
//             <HandRejuvenation />
//         </>
//     )
// }



import HandRejuvenationPage from "@/components/medical-spa/hands/HandRejuvenation";
import { fetchHandFillersPageData } from "@/lib/api/medicalSpa/fetchHandRejuvenationPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR: rebuild every 60 seconds

async function getData() {
  try {
    const data = await fetchHandFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Hand Rejuvenation data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Hand Rejuvenation | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Restore youthfulness to your hands with advanced rejuvenation treatments at Goldfingers Aesthetics.",
    openGraph: {
      title: seo.metaTitle || "Hand Rejuvenation | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Professional hand rejuvenation treatments designed to smooth, plump, and restore your hands.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Hand Rejuvenation Treatment",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "hand fillers, rejuvenation, Goldfingers Aesthetics, cosmetic treatments",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

export default async function Hands() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Hand Rejuvenation page content.
        </p>
      </main>
    );
  }

  return <HandRejuvenationPage data={data} />;
}
