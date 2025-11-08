// import ComprehensiveProgram from "@/components/training/training-program-details/comprehensive-injectables/ComprehensiveProgram";


// export default function ComprehensiveInjectables() {
//     return (
//         <>
//             <ComprehensiveProgram />
//         </>
//     )

// }



import ComprehensiveProgram from "@/components/training/training-program-details/comprehensive-injectables/ComprehensiveProgram";
import { fetchComprehensiveProgramPageData } from "@/lib/api/traning/fetchComprehensiveProgram";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Rebuild the page every 60 seconds (ISR)

// ✅ Server-side CMS data fetch
async function getData() {
  try {
    const data = await fetchComprehensiveProgramPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Comprehensive Injectables data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Comprehensive Injectables Training | Goldfingers Aesthetics Academy",
    description:
      seo.metaDescription ||
      "Enroll in Goldfingers Aesthetics’ Comprehensive Injectables Training Program — learn advanced Botox, dermal filler, and aesthetic injection techniques from industry experts.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Comprehensive Injectables Training | Goldfingers Academy",
      description:
        seo.metaDescription ||
        "Master injectables with Goldfingers Aesthetics — professional training in Botox, fillers, and aesthetic procedures with real-world hands-on guidance.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Comprehensive Injectables Training - Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "injectables training, botox training, filler training, aesthetic academy, cosmetic injectables course, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function ComprehensiveInjectablesPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Comprehensive Injectables Training content.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to the client component
  return <ComprehensiveProgram data={data} />;
}
