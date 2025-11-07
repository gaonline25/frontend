// import JuvedermVoluxPage from "@/components/medical-spa/juvederm-volux/JuvedermVoluxPage";


// export default function JuvedermVlux() {
//     return (
//         <>
//             <JuvedermVoluxPage />
//         </>
//     )
// }


import JuvedermVoluxPage from "@/components/medical-spa/juvederm-volux/JuvedermVoluxPage";
import { fetchJuvedermVoluxPageData } from "@/lib/api/medicalSpa/fetchJuvedermVoluxPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR every 60s (auto content refresh)

async function getData() {
  try {
    const data = await fetchJuvedermVoluxPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Juvederm Volux data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata from CMS (with fallbacks)
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Juvederm Volux | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Define and contour your jawline with Juvederm Volux fillers at Goldfingers Aesthetics. Expert treatments for facial sculpting and rejuvenation.",
    openGraph: {
      title: seo.metaTitle || "Juvederm Volux | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Experience advanced facial contouring with Juvederm Volux — premium dermal filler designed to enhance your natural structure.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Juvederm Volux filler treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Juvederm Volux, dermal fillers, jawline filler, chin filler, facial contouring, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

export default async function JuvedermVolux() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Juvederm Volux page content.
        </p>
      </main>
    );
  }

  return <JuvedermVoluxPage data={data} />;
}
