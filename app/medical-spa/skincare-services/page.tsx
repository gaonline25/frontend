// import SkincareServices from "@/components/medical-spa/skincare-services/SkincareServices";


// export default function SkincareService() {
//     return (
//         <>
//             <SkincareServices />
//         </>
//     )
// }


import SkincareServices from "@/components/medical-spa/skincare-services/SkincareServices";
import { fetchSkincareServicesPageData } from "@/lib/api/medicalSpa/fetchSkincareServicesPageComponent";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ Automatically revalidates every 60 seconds

// ✅ Secure, server-side data fetching
async function getData() {
  try {
    const data = await fetchSkincareServicesPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Skincare Services page data:", error);
    return null;
  }
}

// ✅ Dynamically generate SEO metadata from Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Skincare Services | Goldfingers Aesthetics - Professional Skin Treatments",
    description:
      seo.metaDescription ||
      "Experience advanced skincare services at Goldfingers Aesthetics. Our professional treatments rejuvenate, nourish, and restore youthful, radiant skin.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Skincare Services | Goldfingers Aesthetics - Expert Facial Care",
      description:
        seo.metaDescription ||
        "Explore customized skincare treatments from Goldfingers Aesthetics — designed to hydrate, brighten, and enhance your natural glow.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Professional skincare treatment at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "skincare, facial treatments, hydrafacial, medical spa, anti-aging skincare, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Main Page Component
export default async function SkincareServicesPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Skincare Services page content.
        </p>
      </main>
    );
  }

  // ✅ Render the Skincare Services component with fetched data
  return <SkincareServices data={data} />;
}
