// import SpecialsRewards from "@/components/specials-and-rewards/SpecialsRewards";


// export default function SpecialsAndRewards() {
//     return (
//         <>
//             <SpecialsRewards />
//         </>
//     )
// }


import SpecialsRewards from "@/components/specials-and-rewards/SpecialsRewards";
import { fetchSpecialFillersPageData } from "@/lib/api/specials/fetchSpecialsRewardsPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR - Rebuild static page every 60s

// ✅ Secure server-side data fetch from Payload CMS
async function getData() {
  try {
    const data = await fetchSpecialFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Specials & Rewards page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO pulled from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Specials & Rewards | Goldfingers Aesthetics – Exclusive Offers for You",
    description:
      seo.metaDescription ||
      "Discover the latest specials, rewards, and loyalty offers at Goldfingers Aesthetics. Save on injectables, skin treatments, and more.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Specials & Rewards | Goldfingers Aesthetics – Save on Beauty Treatments",
      description:
        seo.metaDescription ||
        "Join our rewards program and explore exclusive offers on aesthetic treatments and skincare at Goldfingers Aesthetics.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Specials & Rewards at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Goldfingers Aesthetics specials, beauty discounts, injectables offers, rewards program, Florida med spa deals",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function SpecialsAndRewards() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Specials & Rewards page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-driven content
  return <SpecialsRewards data={data} />;
}
