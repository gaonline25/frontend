// import PermanentMakeupPage from "@/components/medical-spa/permanent-makeup/PermanentMakeupPage";



// export default function PermanentMakeups() {
//     return (
//         <>
//             <PermanentMakeupPage />
//         </>
//     )
// }



import PermanentMakeupPage from "@/components/medical-spa/permanent-makeup/PermanentMakeupPage";
import { fetchPermanentFillersPageData } from "@/lib/api/medicalSpa/fetchPermanentMakeupPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration every 60 seconds

// ✅ Secure Server-side Fetch
async function getData() {
  try {
    const data = await fetchPermanentFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Permanent Makeup page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Permanent Makeup | Goldfingers Aesthetics - Enhance Your Natural Beauty",
    description:
      seo.metaDescription ||
      "Experience long-lasting beauty with Permanent Makeup at Goldfingers Aesthetics. Wake up flawless every day with professional microblading and lip tinting services.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Permanent Makeup | Goldfingers Aesthetics - Enhance Your Natural Beauty",
      description:
        seo.metaDescription ||
        "Permanent makeup treatments at Goldfingers Aesthetics — achieve natural, lasting beauty through expert microblading, eyeliner, and lip tinting services.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Permanent Makeup at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "permanent makeup, microblading, lip tint, permanent eyeliner, semi-permanent makeup, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function PermanentMakeup() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Permanent Makeup page content.
        </p>
      </main>
    );
  }

  // ✅ Pass pre-fetched server data to component
  return <PermanentMakeupPage data={data} />;
}
