// import MedicalFinancingSection from "@/components/financing/MedicalFinancingSection";


// export default function Financing() {
//     return (
//         <>
//             <MedicalFinancingSection />
//         </>
//     )
// }


import MedicalFinancingSection from "@/components/financing/MedicalFinancingSection";
import { fetchMedicalFillersPageData } from "@/lib/api/finance/fetchMedicalFinancingPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Regenerate page every 60 seconds (ISR)

// ✅ Server-side data fetcher
async function getData() {
  try {
    const data = await fetchMedicalFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching medical financing data:", error);
    return null;
  }
}

// ✅ SEO Metadata from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Goldfingers Aesthetics | Medical Financing & Payment Plans",
    description:
      seo.metaDescription ||
      "Learn about medical financing and payment options at Goldfingers Aesthetics. Affordable plans for Botox, fillers, and med spa treatments near you.",
    openGraph: {
      title:
        seo.metaTitle || "Goldfingers Aesthetics | Medical Financing Options",
      description:
        seo.metaDescription ||
        "Goldfingers Aesthetics offers flexible medical financing and payment plans for aesthetic treatments in Florida.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Financing Options",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Goldfingers Aesthetics, medical financing, aesthetic financing, Botox payment plans, med spa financing Florida, Goldfingers credit options",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Entry Point
export default async function FinancingPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center text-gray-500">
        <p>Unable to load Medical Financing content at the moment.</p>
      </main>
    );
  }

  return <MedicalFinancingSection data={data} />;
}
