// import MedicalSpaInjectables from "@/components/medical-spa/injectables/MedicalSpaInjectables";


// export default function Injectables() {
//     return (
//         <>
//             <MedicalSpaInjectables />
//         </>
//     )
// }



import MedicalSpaInjectablesPage from "@/components/medical-spa/injectables/MedicalSpaInjectables";
import { fetchMedicalSpaInjectablesData } from "@/lib/api/medicalSpa/fetchMedicalSpaInjectablesData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR every 60 seconds

async function getData() {
  try {
    const data = await fetchMedicalSpaInjectablesData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Injectables data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title: seo.metaTitle || "Injectables | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Enhance your natural beauty with professional injectables at Goldfingers Aesthetics.",
    openGraph: {
      title: seo.metaTitle || "Injectables | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Discover Goldfingers’ premium injectable treatments, expertly designed for your confidence and glow.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Injectables at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "botox, fillers, injectables, dermal fillers, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

export default async function Injectables() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Injectables page content.
        </p>
      </main>
    );
  }

  return <MedicalSpaInjectablesPage data={data} />;
}
