// import LinesAndWrinkles from "@/components/medical-spa/lines-and-wrinkles/LinesAndWrinkles";



// export default function LinesAndWrinkle() {
//     return (
//         <>
//             <LinesAndWrinkles />
//         </>
//     )
// }



import LinesAndWrinklesPage from "@/components/medical-spa/lines-and-wrinkles/LinesAndWrinkles";
import { fetchLinesAndWrinklesPageData } from "@/lib/api/medicalSpa/fetchLinesAndWrinklesPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60 seconds

async function getData() {
  try {
    const data = await fetchLinesAndWrinklesPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Lines & Wrinkles data:", error);
    return null;
  }
}

// ✅ Auto-generate SEO metadata from CMS or fallback defaults
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Lines & Wrinkles | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Reduce fine lines and wrinkles with Goldfingers Aesthetics' expert treatments for smoother, youthful-looking skin.",
    openGraph: {
      title: seo.metaTitle || "Lines & Wrinkles | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Professional wrinkle reduction treatments using Botox and fillers for natural, rejuvenated results.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Lines and Wrinkles Treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "botox, wrinkle reduction, anti-aging, fillers, Goldfingers Aesthetics, fine lines",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

export default async function LinesAndWrinkles() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Lines & Wrinkles page content.
        </p>
      </main>
    );
  }

  // ✅ Server-side data passed directly to component
  return <LinesAndWrinklesPage data={data} />;
}
