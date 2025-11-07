// import Lip from "@/components/medical-spa/lips/LipsPage";


// export default function Lips() {
//     return (
//         <>
//             <Lip />
//         </>
//     )
// }



import LipsPage from "@/components/medical-spa/lips/LipsPage";
import { fetchLipFillersPageData } from "@/lib/api/medicalSpa/fetchLipFillersPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild page every 60s automatically

async function getData() {
  try {
    const data = await fetchLipFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Lips page data:", error);
    return null;
  }
}

// ✅ Auto SEO metadata from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Lip Fillers | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Enhance your lips with Goldfingers Aesthetics' premium lip filler treatments for a natural, youthful look.",
    openGraph: {
      title: seo.metaTitle || "Lip Fillers | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Get the perfect pout with professional lip augmentation and filler services at Goldfingers Aesthetics.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Lip Filler Treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "lip fillers, lip augmentation, dermal fillers, lip enhancement, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

export default async function Lips() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Lips page content.
        </p>
      </main>
    );
  }

  // ✅ Pre-fetched data passed directly to your LipsPage component
  return <LipsPage data={data} />;
}
