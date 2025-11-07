// import AspireRewards from "@/components/specials-and-rewards/aspire-rewards/AspireRewards";


// export default function AspireReward() {
//     return (
//         <>
//             <AspireRewards />
//         </>
//     )
// }


import AspireRewards from "@/components/specials-and-rewards/aspire-rewards/AspireRewards";
import { fetchAlleFillersPageData } from "@/lib/api/specials/fetchAspireRewards";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration every 60s

// ✅ Secure data fetch (server-side)
async function getData() {
  try {
    const data = await fetchAlleFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Aspire Rewards page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Aspire Rewards | Goldfingers Aesthetics – Earn Points & Exclusive Benefits",
    description:
      seo.metaDescription ||
      "Join the Aspire Rewards program at Goldfingers Aesthetics and earn points, enjoy discounts, and access exclusive promotions on aesthetic treatments.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Aspire Rewards | Goldfingers Aesthetics – Loyalty & Savings Program",
      description:
        seo.metaDescription ||
        "Become an Aspire Rewards member and save on premium injectables, skincare, and aesthetic services at Goldfingers Aesthetics.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Aspire Rewards Program at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Aspire Rewards, aesthetics loyalty program, beauty points, med spa rewards, Goldfingers Aesthetics, Florida skincare deals",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function AspireReward() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Aspire Rewards page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-driven Aspire Rewards content
  return <AspireRewards data={data} />;
}
