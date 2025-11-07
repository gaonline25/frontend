// import TummyTuckPage from "@/components/plastic-surgery/tummy-tuck/TummyTuckPage";


// export default function TummyTuck() {
//     return (
//         <>
//             <TummyTuckPage />
//         </>
//     )
// }


import TummyTuckPage from "@/components/plastic-surgery/tummy-tuck/TummyTuckPage";
import { fetchTummyTuckPageData } from "@/lib/api/plasticSurgery/fetchTummyTuckPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate static page every 60s

// ✅ Secure server-side fetching
async function getData() {
  try {
    const data = await fetchTummyTuckPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Tummy Tuck page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Tummy Tuck (Abdominoplasty) | Goldfingers Aesthetics – Sculpted Confidence",
    description:
      seo.metaDescription ||
      "Goldfingers Aesthetics offers expert Tummy Tuck (Abdominoplasty) procedures to remove excess fat and skin, tighten muscles, and enhance your abdominal contour.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Tummy Tuck | Goldfingers Aesthetics – Expert Abdominoplasty Surgery",
      description:
        seo.metaDescription ||
        "Achieve a flatter, toned abdomen with Tummy Tuck surgery at Goldfingers Aesthetics. Precision contouring and natural-looking results.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Tummy Tuck procedure at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "tummy tuck, abdominoplasty, plastic surgery, body contouring, Goldfingers Aesthetics, cosmetic surgery, Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function TummyTuck() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Tummy Tuck page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-driven page
  return <TummyTuckPage data={data} />;
}
