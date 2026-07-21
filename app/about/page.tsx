// import React from "react";

// // import "../page.css"
// // import AboutPage from "../components/About";
// import AboutHero from "../../components/About";

// function GoldfingersAesthetics() {
//   return (
//     <>
//       {/* <AboutPage /> */}
//       <AboutHero />
//     </>
//   );
// }

// export default GoldfingersAesthetics;




// app/about/page.tsx
import React from "react";
import AboutHero from "@/components/About";
import { Metadata } from "next";
import Script from "next/script";

// ✅ Incremental Static Regeneration (every 5 minutes)
export const revalidate = 300;

// ✅ SEO Metadata
// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const res = await fetch(
//       `${
//         process.env.PAYLOAD_API_URL ||
//         "https://backend-orpin-six-56.vercel.app/api"
//       }/about-hero-component?depth=2&limit=100`,
//       { next: { revalidate: 300 } }
//     );

//     if (!res.ok) throw new Error("Failed to fetch About Page metadata");

//     const data = await res.json();
//     const active = data.docs?.find((item: any) => item.isActive);
//     const hero = active?.heroSection || {};

//     const title =
//       hero.title || "About Goldfingers Aesthetics";
//     const description =
//       hero.metaDescription ||
//       "Learn about Goldfingers Aesthetics — Florida’s trusted experts in aesthetic and wellness care.";
//     const ogImage =
//       hero.backgroundImage?.url ||
//       "https://www.goldfingersaesthetics.com/default-og.jpg";

//     return {
//       title,
//       description,
//       alternates: {
//         canonical: "https://www.goldfingersaesthetics.com/about",
//       },
//       openGraph: {
//         title,
//         description,
//         url: "https://www.goldfingersaesthetics.com/about",
//         siteName: "Goldfingers Aesthetics",
//         images: [{ url: ogImage }],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title,
//         description,
//         images: [ogImage],
//       },
//     };
//   } catch {
//     return {
//       title: "About Goldfingers Aesthetics",
//       description:
//         "Learn about Goldfingers Aesthetics — Florida’s trusted experts in aesthetic and wellness care.",
//     };
//   }
// }

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${
        process.env.PAYLOAD_API_URL ||
        "https://backend-orpin-six-56.vercel.app/api"
      }/about-hero-component?depth=2&limit=100`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) throw new Error("Failed to fetch About Page metadata");

    const data = await res.json();
    const active = data.docs?.find((item: any) => item.isActive);
    const hero = active?.heroSection || {};

    const title =
      hero.title ||
      "About Goldfingers Aesthetics | Florida’s Premier Med Spa Experts";

    const description =
      hero.metaDescription ||
      "Discover the story behind Goldfingers Aesthetics — Florida’s premier med spa and aesthetic experts. Recognized among the Top 1% nationwide for Botox and dermal fillers, with 20+ locations delivering natural, confidence-boosting results.";

    const ogImage =
      hero.backgroundImage?.cloudinary_url ||
      hero.backgroundImage?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    const url = "https://goldfingersaesthetics.com/about";

    return {
      title,
      description,
      metadataBase: new URL("https://goldfingersaesthetics.com"),
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
            alt: "Goldfingers Aesthetics Florida Med Spa",
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
        "About Goldfingers Aesthetics",
        "Florida med spa",
        "Top Botox provider Florida",
        "Dermal fillers Florida",
        "Medical spa experts",
        "Aesthetic clinic Florida",
        "Cosmetic injectables Florida",
      ],
    };
  } catch {
    return {
      title: "About Goldfingers Aesthetics | Florida’s Premier Med Spa Experts",
      description:
        "Learn about Goldfingers Aesthetics — Florida’s trusted leaders in Botox, dermal fillers, and advanced aesthetic treatments.",
    };
  }
}

// ==========================
// ✅ Structured Data
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Goldfingers Aesthetics",
  url: "https://www.goldfingersaesthetics.com",
  logo: "https://www.goldfingersaesthetics.com/logo.png",
  description:
    "Florida’s premier med spa specializing in Botox, dermal fillers, and advanced aesthetic treatments.",
  areaServed: {
    "@type": "State",
    name: "Florida",
  },
  sameAs: [
    "https://www.instagram.com/goldfingersaesthetics",
    "https://www.facebook.com/goldfingersaesthetics",
  ],
};


// ✅ Fetch data once (cached & revalidated)
async function getAboutData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL || "https://backend-orpin-six-56.vercel.app/api"
    }/about-hero-component?depth=2&limit=100`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) throw new Error("Failed to fetch About Page data");

  const data = await res.json();
  const activeComponent =
    data.docs?.find((component: any) => component.isActive) || null;
  return activeComponent;
}

// ✅ Page component
export default async function GoldfingersAesthetics() {
  const pageData = await getAboutData();
  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <AboutHero pageData={pageData} />
    </>
  );
}
