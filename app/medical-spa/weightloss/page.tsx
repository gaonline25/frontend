// import WeightLossPage from "@/components/medical-spa/weightloss/WeightLossPage";


// export default function Weightloss() {
//     return (
//         <>
//             <WeightLossPage />
//         </>
//     )
// }



import WeightLossPage from "@/components/medical-spa/weightloss/WeightLossPage";
import { fetchWeightLossPageData } from "@/lib/api/medicalSpa/fetchWeightLossPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration (refresh every 60 seconds)

// ✅ Secure server-side data fetching from Payload CMS
async function getData() {
  try {
    const data = await fetchWeightLossPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Weight Loss page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata generation from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Medical Weight Loss | Goldfingers Aesthetics – Personalized Weight Management",
    description:
      seo.metaDescription ||
      "Transform your health with Goldfingers Aesthetics' medical weight loss program. Expert care, personalized plans, and real results using proven treatments.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Medical Weight Loss | Goldfingers Aesthetics – Professional Weight Management",
      description:
        seo.metaDescription ||
        "Goldfingers Aesthetics offers medical weight loss solutions including Semaglutide injections and customized nutrition programs to help you achieve your goals.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Medical weight loss treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "medical weight loss, semaglutide injections, weight management, fat loss, healthy lifestyle, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function WeightLoss() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Weight Loss page content.
        </p>
      </main>
    );
  }

  // ✅ Pass CMS data to the page component
  return <WeightLossPage data={data} />;
}
