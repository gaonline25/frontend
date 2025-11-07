// import SpecialsPage from "@/components/specials-and-rewards/specials/SpecialsPage";


// export default function Specials() {
//     return (
//         <>
//             <SpecialsPage />
//         </>
//     )
// }


import SpecialsPage from "@/components/specials-and-rewards/specials/SpecialsPage";
import { fetchSpecicalFillersPageData } from "@/lib/api/specials/fetchSpecialsPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuilds every 60s (ISR)

// ✅ Secure server-side data fetch
async function getData() {
  try {
    const data = await fetchSpecicalFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Specials page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Special Offers | Goldfingers Aesthetics – Exclusive Deals on Treatments",
    description:
      seo.metaDescription ||
      "Explore current special offers and promotions at Goldfingers Aesthetics. Save on injectables, skincare, and cosmetic treatments.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Specials | Goldfingers Aesthetics – Limited-Time Beauty Deals",
      description:
        seo.metaDescription ||
        "Discover exclusive specials and beauty offers at Goldfingers Aesthetics. Enhance your glow and save today.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Special offers and deals at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "aesthetic specials, beauty offers, injectables deals, med spa discounts, Goldfingers Aesthetics Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function Specials() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Specials page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-based Specials Page Component
  return <SpecialsPage data={data} />;
}
