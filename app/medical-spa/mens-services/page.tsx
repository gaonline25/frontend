// import MensServices from "@/components/medical-spa/mens-services/MensServices";


// export default function MensService() {
//     return (
//         <>
//             <MensServices />
//         </>
//     )
// }


import MensServicesPage from "@/components/medical-spa/mens-services/MensServices";
import { fetchMensFillersPageData } from "@/lib/api/medicalSpa/fetchMensServicesPageComponent";

import type { Metadata } from "next";

export const revalidate = 60; // ✅ Page auto-rebuilds every 60s

// ✅ Server-side data fetch
async function getData() {
  try {
    const data = await fetchMensFillersPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Men's Services page data:", error);
    return null;
  }
}

// ✅ SEO metadata powered by Payload CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Men’s Services | Goldfingers Aesthetics - Grooming & Treatments",
    description:
      seo.metaDescription ||
      "Discover specialized aesthetic treatments for men at Goldfingers Aesthetics. From anti-aging solutions to skincare, designed exclusively for men.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Men’s Services | Goldfingers Aesthetics - Grooming & Treatments",
      description:
        seo.metaDescription ||
        "Tailored medical spa services for men — rejuvenate, refresh, and restore confidence with expert care at Goldfingers Aesthetics.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Men’s Aesthetic Treatments at Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "men’s aesthetic treatments, men’s facial rejuvenation, men’s skincare, men’s Botox, Goldfingers Aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function MensServices() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Men's Services page content.
        </p>
      </main>
    );
  }

  // ✅ Pass data directly to the page component
  return <MensServicesPage data={data} />;
}
