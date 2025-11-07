// import PlasticSurgery from "@/components/plastic-surgery/PlasticSurgery";


// export default function PlasticSurgerys() {
//     return (
//         <>
//         <PlasticSurgery />
//         </>
//     )
// }



import PlasticSurgery from "@/components/plastic-surgery/PlasticSurgery";
import { fetchPlasticSurgeryPageData } from "@/lib/api/plasticSurgery/fetchPlasticSurgeryPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration (updates every 60 seconds)

// ✅ Server-side data fetching from Payload CMS (secure)
async function getData() {
  try {
    const data = await fetchPlasticSurgeryPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Plastic Surgery page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Plastic Surgery | Goldfingers Aesthetics – Expert Cosmetic Enhancements",
    description:
      seo.metaDescription ||
      "Discover transformative plastic surgery procedures at Goldfingers Aesthetics. Expert surgeons, advanced techniques, and personalized care for natural, lasting beauty.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Plastic Surgery | Goldfingers Aesthetics – Enhance Your Natural Beauty",
      description:
        seo.metaDescription ||
        "Explore Goldfingers Aesthetics' plastic surgery services — from facelifts to body contouring — with safety, precision, and artistry.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Plastic surgery and cosmetic enhancement at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "plastic surgery, cosmetic surgery, facial surgery, body contouring, breast augmentation, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function PlasticSurgeryPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Plastic Surgery page content.
        </p>
      </main>
    );
  }

  // ✅ Render CMS-managed data via component
  return <PlasticSurgery data={data} />;
}
