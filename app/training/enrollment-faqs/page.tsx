// import TrainingApplication from "@/components/training/enrollment-faqs/TrainingApplication";

// export default function EnrollmentFaqs() {
//     return (
//         <>
//             <TrainingApplication />
//         </>
//     )
// }

import TrainingApplicationContent from "@/components/training/enrollment-faqs/TrainingApplication";
import { fetchEnrolmentPageData } from "@/lib/api/traning/fetchEnrolmentPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR: Regenerate every 60 seconds

// ✅ Server-side CMS data fetch
async function getData() {
  try {
    const data = await fetchEnrolmentPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Enrolment page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Apply for Your Training Spot Today | Goldfingers Aesthetics",
    description:
      seo.metaDescription ||
      "Launch your career in aesthetics with Goldfingers Aesthetics Training Program. AMI-certified, hands-on training for future injectors.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Apply for Your Training Spot Today | Goldfingers Aesthetics",
      description:
        seo.metaDescription ||
        "Launch your career in aesthetics with elite training from Florida's #1 BOTOX® treatment center.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Training Program",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "aesthetics training, botox training, injector certification, medical aesthetics, AMI certification, Goldfingers training",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Server-rendered page entry
export default async function EnrollmentFaqsPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Enrollment page content.
        </p>
      </main>
    );
  }

  // ✅ Pass fetched CMS data to client component
  return <TrainingApplicationContent data={data} />;
}