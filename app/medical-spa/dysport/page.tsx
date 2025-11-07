// import DysportPage from "@/components/medical-spa/dysport/DysportPage";


// export default function Dysport() {
//     return (
//         <>
//             <DysportPage />
//         </>
//     )
// }



import DysportPage from "@/components/medical-spa/dysport/DysportPage";
import { fetchDysportPageData } from "@/lib/api/medicalSpa/fetchDysportPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ISR every 60 seconds

async function getData() {
  try {
    const data = await fetchDysportPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Dysport data:", error);
    return null;
  }
}

// ✅ SEO Metadata (auto from Payload or fallback)
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Dysport Treatments | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Smooth fine lines and restore youthfulness with Dysport injections at Goldfingers Aesthetics.",
    openGraph: {
      title: seo.metaTitle || "Dysport Treatments | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Non-surgical Dysport treatment for wrinkle reduction and rejuvenation.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Dysport cosmetic treatment",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Dysport, anti-wrinkle injections, facial rejuvenation, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page component
export default async function Dysport() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Dysport page content.
        </p>
      </main>
    );
  }

  return <DysportPage data={data} />;
}
