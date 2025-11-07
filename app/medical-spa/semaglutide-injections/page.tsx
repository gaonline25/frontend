// import SemaglutideInjectionsPage from "@/components/medical-spa/semaglutide-injections/SemaglutideInjectionsPage";


// export default function SemaglutideInjections() {
//     return (
//         <>
//             <SemaglutideInjectionsPage />
//         </>
//     )
// }




import SemaglutideInjectionsPage from "@/components/medical-spa/semaglutide-injections/SemaglutideInjectionsPage";
import { fetchSemaglutideInjectionsPageData } from "@/lib/api/medicalSpa/fetchSemaglutideInjectionsPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR: Automatically revalidates every 60 seconds

// ✅ Secure server-side data fetching
async function getData() {
  try {
    const data = await fetchSemaglutideInjectionsPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Semaglutide Injections page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata pulled from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Semaglutide Injections | Goldfingers Aesthetics - Safe & Effective Weight Loss Treatment",
    description:
      seo.metaDescription ||
      "Achieve sustainable weight loss with Semaglutide injections at Goldfingers Aesthetics. A proven medical approach to support your health and wellness goals.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Semaglutide Injections | Goldfingers Aesthetics - Medical Weight Loss Experts",
      description:
        seo.metaDescription ||
        "Lose weight safely with medically supervised Semaglutide Injections at Goldfingers Aesthetics. Expert guidance for long-term wellness and confidence.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Semaglutide Injections at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "semaglutide injections, weight loss treatment, medical spa, ozempic alternative, body sculpting, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function SemaglutideInjections() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Semaglutide Injections page content.
        </p>
      </main>
    );
  }

  // ✅ Render the Semaglutide Injections component with CMS data
  return <SemaglutideInjectionsPage data={data} />;
}
