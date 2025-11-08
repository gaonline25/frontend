// import ProgramDetails from "@/components/training/training-program-details/ProgramDetails";


// export default function TrainingProgramDetails() {
//     return (
//         <>
//             <ProgramDetails />
//         </>
//     )
// }


import ProgramDetails from "@/components/training/training-program-details/ProgramDetails";
import { fetchProgramDetailsPageData } from "@/lib/api/traning/fetchProgramDetails";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Revalidate every 60 seconds (ISR)

// ✅ Server-side data fetch from Payload CMS
async function getData() {
  try {
    const data = await fetchProgramDetailsPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Training Program Details data:", error);
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
      "Training Program Details | Goldfingers Aesthetics Academy",
    description:
      seo.metaDescription ||
      "Explore Goldfingers Aesthetics’ comprehensive injectables and aesthetics training programs. Learn from industry experts and advance your medical aesthetics career.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Training Program Details | Goldfingers Aesthetics Academy",
      description:
        seo.metaDescription ||
        "Master injectables and aesthetic treatments with Goldfingers Aesthetics’ professional training programs designed for all experience levels.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Training Program Details - Goldfingers Aesthetics Academy",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "aesthetic training, injectables training, botox courses, filler certification, cosmetic training, medical aesthetics, Goldfingers Academy",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function TrainingProgramDetailsPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Training Program Details content is currently unavailable.</p>
      </main>
    );
  }

  // ✅ Pass fetched CMS data to your client-side component
  return <ProgramDetails data={data} />;
}
