// import BreastRevisionPage from "@/components/plastic-surgery/breast-revision/BreastRevisionPage";


// export default function BreastRevision() {
//     return (
//         <>
//             <BreastRevisionPage />
//         </>
//     )
// }



import BreastRevisionPage from "@/components/plastic-surgery/breast-revision/BreastRevisionPage";
import { fetchBreastRevisionPageData } from "@/lib/api/plasticSurgery/fetchBreastRevisionPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate static page every 60s (fresh from CMS)

// ✅ Server-side data fetching (secure)
async function getData() {
  try {
    const data = await fetchBreastRevisionPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Revision page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata (auto from Payload CMS)
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Breast Revision Surgery | Goldfingers Aesthetics – Correct, Restore, Perfect",
    description:
      seo.metaDescription ||
      "Goldfingers Aesthetics specializes in breast revision surgery to correct, refine, and restore balance after previous augmentation or reconstruction procedures.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Revision | Goldfingers Aesthetics – Precision and Confidence",
      description:
        seo.metaDescription ||
        "Expert breast revision surgery at Goldfingers Aesthetics — for enhanced symmetry, comfort, and natural results after prior cosmetic surgery.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Breast revision surgery at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "breast revision, breast implant correction, revision surgery, plastic surgery, cosmetic surgery, Goldfingers Aesthetics, Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function BreastRevision() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Breast Revision page content.
        </p>
      </main>
    );
  }

  // ✅ Render component with CMS data
  return <BreastRevisionPage data={data} />;
}
