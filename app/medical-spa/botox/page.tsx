// import BotoxPage from "@/components/medical-spa/botox/BotoxPage";


// export default function BotoxPages() {
//     return (
//         <>
//             <BotoxPage />
//         </>
//     )
// }



import BotoxPage from "@/components/medical-spa/botox/BotoxPage";
import { fetchBotoxPageData } from "@/lib/api/medicalSpa/fetchBotoxPageData";
import type { Metadata } from "next";

export const revalidate = 60; // Rebuild page every 60s (ISR)

// Server-side data fetch (faster + cached)
async function getData() {
  try {
    const data = await fetchBotoxPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Botox page data:", error);
    return null;
  }
}

// Dynamic metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};
  return {
    title: seo?.metaTitle || "Botox Treatments | Goldfingers Aesthetics",
    description:
      seo?.metaDescription ||
      "Discover safe and effective Botox treatments to rejuvenate your appearance.",
    openGraph: {
      title: seo?.metaTitle || "Botox Treatments | Goldfingers Aesthetics",
      description:
        seo?.metaDescription ||
        "Explore our advanced Botox procedures by certified professionals.",
      images: [
        {
          url:
            seo?.openGraphImage ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Botox Treatments",
        },
      ],
    },
  };
}

export default async function BotoxPages() {
  const data = await getData();

  if (!data) {
    return (
      <main id="main" className="flex items-center justify-center min-h-[60vh]">
        <div className="text-gray-600">Failed to load page data.</div>
      </main>
    );
  }

  return <BotoxPage data={data} />;
}
