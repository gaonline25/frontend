// import MommyMakeoverPage from "@/components/plastic-surgery/mommy-makeover/MommyMakeoverPage";


// export default function MommyMakeover() {
//     return (
//         <>
//             <MommyMakeoverPage />
//         </>
//     )
// }


import MommyMakeoverPage from "@/components/plastic-surgery/mommy-makeover/MommyMakeoverPage";
import { fetchMommyMakeoverPageData } from "@/lib/api/plasticSurgery/fetchMommyMakeoverPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60 seconds

// ✅ Secure server-side data fetching
async function getData() {
  try {
    const data = await fetchMommyMakeoverPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Mommy Makeover page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO (pulled from Payload CMS)
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Mommy Makeover Surgery | Goldfingers Aesthetics – Restore Confidence & Contour",
    description:
      seo.metaDescription ||
      "Goldfingers Aesthetics specializes in Mommy Makeover surgery to help women restore body confidence after pregnancy through personalized, advanced cosmetic procedures.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Mommy Makeover | Goldfingers Aesthetics – Restore Your Body & Confidence",
      description:
        seo.metaDescription ||
        "Experience complete rejuvenation with Mommy Makeover surgery at Goldfingers Aesthetics. Custom-tailored treatments to enhance body shape and confidence.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Mommy Makeover procedure at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "mommy makeover, post-pregnancy surgery, body contouring, breast lift, tummy tuck, Goldfingers Aesthetics, Florida cosmetic surgery",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function MommyMakeover() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Mommy Makeover page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-based content
  return <MommyMakeoverPage data={data} />;
}
