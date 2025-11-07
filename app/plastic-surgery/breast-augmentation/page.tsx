// import BreastAugmentationPage from "@/components/plastic-surgery/breast-augmentation/BreastAugmentationPage";


// export default function BreastAugmentation() { 
//     return (
//         <>
//             <BreastAugmentationPage />
//         </>
//     )

// }


import BreastAugmentationPage from "@/components/plastic-surgery/breast-augmentation/BreastAugmentationPage";
import { fetchBreastAugmentationPageData } from "@/lib/api/plasticSurgery/fetchBreastAugmentationPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR every 60 seconds for updated CMS content

// ✅ Server-side data fetching from Payload CMS
async function getData() {
  try {
    const data = await fetchBreastAugmentationPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Breast Augmentation page data:", error);
    return null;
  }
}

// ✅ SEO metadata populated dynamically from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Breast Augmentation | Goldfingers Aesthetics – Enhance Your Confidence",
    description:
      seo.metaDescription ||
      "Transform your appearance with Goldfingers Aesthetics’ expert breast augmentation. Natural results, personalized care, and advanced surgical precision for every patient.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Breast Augmentation | Goldfingers Aesthetics – Natural, Beautiful Results",
      description:
        seo.metaDescription ||
        "Goldfingers Aesthetics offers customized breast augmentation with advanced techniques and experienced surgeons for natural enhancement and symmetry.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Breast augmentation at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "breast augmentation, breast implants, cosmetic surgery, plastic surgery, breast enhancement, Goldfingers Aesthetics, Florida",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function BreastAugmentation() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Breast Augmentation page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-managed content component
  return <BreastAugmentationPage data={data} />;
}
