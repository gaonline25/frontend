// import TestimonialsPage from "@/components/testimonials/TestimonialsPage";

// export default function Testimonials() {
//   return (
//     <>
//       <TestimonialsPage />
//     </>
//   );
// }



// app/testimonials/page.tsx
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";
import { Metadata } from "next";

export const revalidate = 300; // ✅ Regenerate every 5 minutes

// ✅ Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${
        process.env.PAYLOAD_API_URL ||
        "https://backend-orpin-six-56.vercel.app/api"
      }/testimonials-component?depth=2&limit=100`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) throw new Error("Failed to fetch metadata");

    const data = await res.json();
    const hero = data?.docs?.[0]?.heroSection || {};

    const title =
      hero.title || "Client Testimonials | Goldfingers Aesthetics";
    const description =
      hero.metaDescription ||
      "Discover what clients say about their experiences at Goldfingers Aesthetics — trusted experts in Florida’s aesthetic and wellness treatments.";
    const ogImage =
      hero.backgroundImage?.url ||
      hero.mediaImage?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    return {
      title,
      description,
      alternates: {
        canonical: "https://www.goldfingersaesthetics.com/testimonials",
      },
      openGraph: {
        title,
        description,
        url: "https://www.goldfingersaesthetics.com/testimonials",
        images: [{ url: ogImage }],
        siteName: "Goldfingers Aesthetics",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    console.error("Error generating testimonials metadata:", error);
    return {
      title: "Client Testimonials | Goldfingers Aesthetics",
      description:
        "Read what clients say about Goldfingers Aesthetics — delivering trusted care and stunning results across Florida.",
    };
  }
}

// ✅ Fetch function for testimonials (cached + safe)
async function getTestimonialsData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/testimonials-component?depth=2&limit=100`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) throw new Error("Failed to fetch testimonials data");

  const json = await res.json();
  return json?.docs?.[0] || null;
}

// ✅ Page Component (Server Component)
export default async function Testimonials() {
  const testimonialsData = await getTestimonialsData();
  return <TestimonialsPage testimonialsData={testimonialsData} />;
}
