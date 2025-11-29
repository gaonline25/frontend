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

// ✅ Incremental Static Regeneration (every 5 minutes)
export const revalidate = 300;

// ✅ SEO Metadata
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
      hero.title || "About Goldfingers Aesthetics";
    const description =
      hero.metaDescription ||
      "Learn about Goldfingers Aesthetics — Florida’s trusted experts in aesthetic and wellness care.";
    const ogImage =
      hero.backgroundImage?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    return {
      title,
      description,
      alternates: {
        canonical: "https://www.goldfingersaesthetics.com/about",
      },
      openGraph: {
        title,
        description,
        url: "https://www.goldfingersaesthetics.com/about",
        siteName: "Goldfingers Aesthetics",
        images: [{ url: ogImage }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch {
    return {
      title: "About Goldfingers Aesthetics",
      description:
        "Learn about Goldfingers Aesthetics — Florida’s trusted experts in aesthetic and wellness care.",
    };
  }
}

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
  return <AboutHero pageData={pageData} />; // ✅ Pass data to your component
}
