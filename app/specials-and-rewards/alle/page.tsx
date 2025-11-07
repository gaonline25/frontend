// import AlleRewards from "@/components/specials-and-rewards/alle/AlleRewards";


// export default function Alle() {
//     return (
//         <>
//             <AlleRewards />
//         </>
//     )
// }


import AlleRewards from "@/components/specials-and-rewards/alle/AlleRewards";
import { fetchAlleFillersPageData } from "@/lib/api/specials/fetchAlleRewardsPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration (ISR)

// ✅ Secure data fetch from Payload CMS
async function getData() {
  try {
    const data = await fetchAlleFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Alle Rewards page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata pulled from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Alle Rewards | Goldfingers Aesthetics – Earn Points & Exclusive Perks",
    description:
      seo.metaDescription ||
      "Join the Alle Rewards program at Goldfingers Aesthetics to earn points and enjoy exclusive discounts on Botox, fillers, and premium skincare treatments.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Alle Rewards | Goldfingers Aesthetics – Beauty Loyalty Program",
      description:
        seo.metaDescription ||
        "Earn rewards every time you enhance your look. Join the Alle Rewards program and enjoy savings on top aesthetic treatments.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Alle Rewards Program at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Alle Rewards, Botox rewards, aesthetics loyalty program, skincare discounts, Goldfingers Aesthetics, med spa offers, Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function Alle() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Alle Rewards page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-driven content
  return <AlleRewards data={data} />;
}
