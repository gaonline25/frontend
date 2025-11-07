// import GiftCards from "@/components/specials-and-rewards/gift-cards/GiftCards";


// export default function GiftCard() {
//     return (
//         <>
//             <GiftCards />
//         </>
//     )
// }


import GiftCards from "@/components/specials-and-rewards/gift-cards/GiftCards";
import { fetchGiftCardsPageData } from "@/lib/api/specials/fetchGiftCardsPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild page every 60 seconds (ISR)

// ✅ Server-side secure fetch
async function getData() {
  try {
    const data = await fetchGiftCardsPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Gift Cards page data:", error);
    return null;
  }
}

// ✅ Dynamic metadata (SEO + OG)
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Gift Cards | Goldfingers Aesthetics – Perfect Gift for Every Occasion",
    description:
      seo.metaDescription ||
      "Give the gift of confidence with Goldfingers Aesthetics Gift Cards. Redeemable on injectables, skincare treatments, and med spa services.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Gift Cards | Goldfingers Aesthetics – Give the Gift of Beauty",
      description:
        seo.metaDescription ||
        "Surprise someone special with a Goldfingers Aesthetics Gift Card. Perfect for injectables, facials, and rejuvenation services.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Gift Cards",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "gift cards, med spa gift cards, beauty gift card, aesthetics gifts, Goldfingers Aesthetics Florida, injectables offers",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main page component
export default async function GiftCard() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Gift Cards page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-based component with server-fetched data
  return <GiftCards data={data} />;
}
