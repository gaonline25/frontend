// import SkinMedica from "@/components/medical-spa/skin-medica/SkinMedica";


// export default function SkinMedicas() {
//     return (
//         <>
//             <SkinMedica />
//         </>
//     )
// }


import SkinMedica from "@/components/medical-spa/skin-medica/SkinMedica";
import { fetchSkinMedicaPageData } from "@/lib/api/medicalSpa/fetchSkinMedicaPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration every 60 seconds

// ✅ Server-only data fetching (never exposed to client)
async function getData() {
  try {
    const data = await fetchSkinMedicaPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching SkinMedica page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "SkinMedica | Goldfingers Aesthetics - Advanced Skincare Solutions",
    description:
      seo.metaDescription ||
      "Rejuvenate your skin with SkinMedica treatments at Goldfingers Aesthetics. Scientifically advanced skincare that nourishes and restores youthful radiance.",
    openGraph: {
      title:
        seo.metaTitle ||
        "SkinMedica | Goldfingers Aesthetics - Professional Skincare",
      description:
        seo.metaDescription ||
        "SkinMedica treatments offer clinically proven skincare products that rejuvenate and enhance natural beauty.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "SkinMedica professional skincare products",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "SkinMedica, skincare, anti-aging, chemical peels, professional skin treatment, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function SkinMedicaPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load SkinMedica page content.
        </p>
      </main>
    );
  }

  // ✅ Render the page component with CMS data
  return <SkinMedica data={data} />;
}
