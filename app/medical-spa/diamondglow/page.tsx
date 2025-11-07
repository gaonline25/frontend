// import DiamondGlow from "@/components/medical-spa/diamondglow/DiamondGlow";


// export default function Diamondglow() {
//     return (
//         <>
//             <DiamondGlow />
//         </>
//     )

// }



import DiamondGlowPage from "@/components/medical-spa/diamondglow/DiamondGlow";
import { fetchDiamondFillersPageData } from "@/lib/api/medicalSpa/fetchDiamondGlowPageComponent";
// import { fetchDiamondGlowPageData } from "@/lib/api/medicalSpa/fetchDiamondGlowPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ISR — rebuild every 60s

async function getData() {
  try {
    const data = await fetchDiamondFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching DiamondGlow data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle || "DiamondGlow Facial Treatment | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Rejuvenate and refresh your skin with our advanced DiamondGlow facial treatment at Goldfingers Aesthetics.",
    openGraph: {
      title:
        seo.metaTitle ||
        "DiamondGlow Facial Treatment | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Professional DiamondGlow facial treatments designed for smoother, glowing skin.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "DiamondGlow facial treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords || "DiamondGlow, facial treatment, Goldfingers, skincare",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

export default async function Diamondglow() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load DiamondGlow page content.
        </p>
      </main>
    );
  }

  return <DiamondGlowPage data={data} />;
}
