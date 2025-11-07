// import SkinVive from "@/components/medical-spa/skinvive/SkinVive";


// export default function SkinVives() {
//     return (
//         <>
//             <SkinVive />
//         </>
//     )
// }




import SkinVive from "@/components/medical-spa/skinvive/SkinVive";
import { fetchSkinFillersPageData } from "@/lib/api/medicalSpa/fetchSkinVivePageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration (refresh every 60 seconds)

// ✅ Secure server-side data fetching (for Payload CMS)
async function getData() {
  try {
    const data = await fetchSkinFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching SkinVive page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata pulled from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "SkinVive | Goldfingers Aesthetics – Radiant, Hydrated Skin from Within",
    description:
      seo.metaDescription ||
      "Discover SkinVive by Juvéderm at Goldfingers Aesthetics — the revolutionary injectable skin booster for smooth, glowing, and deeply hydrated skin.",
    openGraph: {
      title:
        seo.metaTitle ||
        "SkinVive | Goldfingers Aesthetics – Injectable Skin Booster",
      description:
        seo.metaDescription ||
        "SkinVive by Juvéderm is a cutting-edge injectable for hydration and glow, available at Goldfingers Aesthetics.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "SkinVive by Juvéderm treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "SkinVive, Juvederm SkinVive, injectable hydration, skin booster, skin glow treatment, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component (rendered on server)
export default async function SkinVivePage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load SkinVive page content.
        </p>
      </main>
    );
  }

  // ✅ Render the main component with CMS-driven data
  return <SkinVive data={data} />;
}
