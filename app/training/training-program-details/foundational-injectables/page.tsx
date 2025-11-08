// import FoundationalProgram from "@/components/training/training-program-details/foundational-injectables/FoundationalProgram";


// export default function OundationalInjectables() {
//     return (
//         <>
//             <FoundationalProgram />
//         </>
//     )
// }


import FoundationalProgram from "@/components/training/training-program-details/foundational-injectables/FoundationalProgram";
import { fetchFoundationalProgramPageData } from "@/lib/api/traning/fetchFoundationalProgram";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR: Regenerate every 60 seconds

// ✅ Server-side CMS data fetch
async function getData() {
  try {
    const data = await fetchFoundationalProgramPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Foundational Injectables data:", error);
    return null;
  }
}

// ✅ Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Foundational Injectables Training | Goldfingers Aesthetics Academy",
    description:
      seo.metaDescription ||
      "Join Goldfingers Aesthetics’ Foundational Injectables Training — learn safe, effective Botox and dermal filler injection techniques for beginners.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Foundational Injectables Training | Goldfingers Academy",
      description:
        seo.metaDescription ||
        "Kickstart your aesthetics career with Goldfingers Aesthetics Foundational Injectables Training — hands-on instruction in Botox and filler techniques.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Foundational Injectables Training - Goldfingers Aesthetics",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "injectables training, botox certification, filler training, beginner injectables course, aesthetic academy, Goldfingers Aesthetics training",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Page Component
export default async function FoundationalInjectablesPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Unable to load Foundational Injectables Training content.</p>
      </main>
    );
  }

  // ✅ Pass CMS data to the client component
  return <FoundationalProgram data={data} />;
}
