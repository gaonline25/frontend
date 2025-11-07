// import BreastLiftPage from "@/components/plastic-surgery/breast-lift/BreastLiftPage";


// export default function breastLift() {
//     return (
//         <>
//             <BreastLiftPage />
//         </>
//     )
// } 


import BreastLiftPage from "@/components/plastic-surgery/breast-lift/BreastLiftPage";
import { fetchBreastLiftPageData } from "@/lib/api/plasticSurgery/fetchBreastLiftPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR every 60s to keep CMS updates fresh

// ✅ Secure server-side data fetching from Payload CMS
async function getData() {
  try {
    const data = await fetchBreastLiftPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Lift page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata populated from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Breast Lift Surgery | Goldfingers Aesthetics – Restore Youthful Contours",
    description:
      seo.metaDescription ||
      "Rejuvenate your figure with Goldfingers Aesthetics’ expert breast lift procedures. Tighten and lift sagging breasts naturally with advanced surgical techniques.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Lift Surgery | Goldfingers Aesthetics – Expert Breast Enhancement",
      description:
        seo.metaDescription ||
        "Experience confidence and balance with breast lift surgery by Goldfingers Aesthetics — advanced techniques, personalized care, and natural results.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Breast lift surgery at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "breast lift, mastopexy, breast enhancement, plastic surgery, Goldfingers Aesthetics, breast contour, cosmetic surgery Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function BreastLift() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Breast Lift page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-driven page content
  return <BreastLiftPage data={data} />;
}
