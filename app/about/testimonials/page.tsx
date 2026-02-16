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
import Script from "next/script";

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
      hero.title ||
      "Client Reviews & Testimonials | Goldfingers Aesthetics Florida";

    const description =
      hero.metaDescription ||
      "Read real client testimonials from Goldfingers Aesthetics — Florida’s premier medical spa specializing in Botox, dermal fillers, and advanced aesthetic treatments. Trusted results. Proven expertise.";

    const ogImage =
      hero.backgroundImage?.cloudinary_url ||
      hero.backgroundImage?.url ||
      hero.mediaImage?.cloudinary_url ||
      hero.mediaImage?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    const url = "https://www.goldfingersaesthetics.com/testimonials";

    return {
      title,
      description,
      metadataBase: new URL("https://www.goldfingersaesthetics.com"),
      alternates: {
        canonical: url,
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Goldfingers Aesthetics",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: "Goldfingers Aesthetics Client Reviews",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
      robots: {
        index: true,
        follow: true,
      },
      keywords: [
        "Goldfingers Aesthetics reviews",
        "Florida med spa testimonials",
        "Botox clinic reviews Florida",
        "Dermal filler testimonials",
        "Medical spa ratings Florida",
        "Aesthetic clinic client feedback",
      ],
    };
  } catch {
    return {
      title: "Client Reviews & Testimonials | Goldfingers Aesthetics Florida",
      description:
        "Read trusted client testimonials from Goldfingers Aesthetics across Florida.",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Goldfingers Aesthetics",
      url: "https://www.goldfingersaesthetics.com",
      logo: "https://www.goldfingersaesthetics.com/logo.png",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9", // <-- update with real data
        reviewCount: "1000", // <-- update with real data
      },
    },
    {
      "@type": "WebPage",
      name: "Client Reviews & Testimonials",
      url: "https://www.goldfingersaesthetics.com/testimonials",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
  ],
};

// ✅ Page Component (Server Component)
export default async function Testimonials() {
  const testimonialsData = await getTestimonialsData();
  return (
    <>
      <Script
        id="testimonials-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <TestimonialsPage testimonialsData={testimonialsData} />
    </>
  );
}
