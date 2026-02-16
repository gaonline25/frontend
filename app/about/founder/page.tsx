// // import OurFounders from "@/components/founders/Founders";

// // export default function Founder() {
// //   return (
// //     <>
// //       <OurFounders />
// //     </>
// //   );
// // }



// // app/founders/page.tsx
// import OurFounders from "@/components/founders/Founders";
// import { Metadata } from "next";

// // ✅ Incremental Static Regeneration (revalidate every 5 minutes)
// export const revalidate = 300;

// // ✅ SEO Metadata Generation
// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const res = await fetch(
//       `${
//         process.env.PAYLOAD_API_URL ||
//         "https://backend-orpin-six-56.vercel.app/api"
//       }/our-founders-component?depth=2&limit=100`,
//       { next: { revalidate: 300 } }
//     );

//     if (!res.ok) throw new Error("Failed to fetch founders page data");

//     const json = await res.json();
//     const active = json.docs?.find((d: any) => d.isActive);
//     const hero = active?.heroSection || {};

//     const title =
//       hero.heading?.text || "Our Founders | Goldfingers Aesthetics";
//     const description =
//       hero.metaDescription ||
//       "Meet the founders of Goldfingers Aesthetics, the visionaries behind Florida’s premier medical aesthetics brand.";
//     const ogImage =
//       hero.mainImage?.image?.url ||
//       hero.backgroundImage?.image?.url ||
//       "https://www.goldfingersaesthetics.com/default-og.jpg";

//     return {
//       title,
//       description,
//       alternates: {
//         canonical: "https://www.goldfingersaesthetics.com/founders",
//       },
//       openGraph: {
//         title,
//         description,
//         url: "https://www.goldfingersaesthetics.com/founders",
//         images: [{ url: ogImage }],
//         siteName: "Goldfingers Aesthetics",
//         type: "website",
//       },
//       twitter: {
//         card: "summary_large_image",
//         title,
//         description,
//         images: [ogImage],
//       },
//     };
//   } catch (error) {
//     console.error("Error generating metadata:", error);
//     return {
//       title: "Our Founders | Goldfingers Aesthetics",
//       description:
//         "Meet the founders of Goldfingers Aesthetics, Florida’s trusted aesthetic experts.",
//     };
//   }
// }

// // ✅ Fetch function for data (revalidated & cached)
// async function getFoundersData() {
//   const res = await fetch(
//     `${
//       process.env.PAYLOAD_API_URL ||
//       "https://backend-orpin-six-56.vercel.app/api"
//     }/our-founders-component?depth=2&limit=100`,
//     { next: { revalidate: 300 } }
//   );

//   if (!res.ok) throw new Error("Failed to fetch founders data");

//   const json = await res.json();
//   return json.docs?.find((doc: any) => doc.isActive) || null;
// }

// // ✅ Page component (Server Component)
// export default async function Founder() {
//   const pageData = await getFoundersData();
//   return <OurFounders pageData={pageData} />; // ✅ Pass data to component
// }




// app/founders/page.tsx

import OurFounders from "@/components/founders/Founders";
import { Metadata } from "next";
import Script from "next/script";

export const revalidate = 300;

// ==========================
// ✅ SEO Metadata
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${
        process.env.PAYLOAD_API_URL ||
        "https://backend-orpin-six-56.vercel.app/api"
      }/our-founders-component?depth=2&limit=100`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) throw new Error("Failed to fetch founders page data");

    const json = await res.json();
    const active = json.docs?.find((d: any) => d.isActive);
    const hero = active?.heroSection || {};

    const title =
      hero.heading?.text ||
      "Our Founders | Leaders Behind Goldfingers Aesthetics Florida";

    const description =
      hero.metaDescription ||
      "Meet the visionary founders behind Goldfingers Aesthetics — Florida’s premier medical aesthetics and wellness brand. Discover their mission, expertise, and commitment to delivering industry-leading Botox and dermal filler treatments.";

    const ogImage =
      hero.mainImage?.image?.cloudinary_url ||
      hero.mainImage?.image?.url ||
      hero.backgroundImage?.image?.cloudinary_url ||
      hero.backgroundImage?.image?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    const url = "https://www.goldfingersaesthetics.com/founders";

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
        type: "profile",
        locale: "en_US",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: "Founders of Goldfingers Aesthetics Florida",
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
        "Goldfingers Aesthetics founders",
        "Florida med spa founders",
        "Medical aesthetics leaders Florida",
        "Botox clinic founders",
        "Aesthetic clinic leadership Florida",
        "Cosmetic injectables experts Florida",
      ],
    };
  } catch (error) {
    return {
      title:
        "Our Founders | Leaders Behind Goldfingers Aesthetics Florida",
      description:
        "Meet the founders of Goldfingers Aesthetics, Florida’s trusted medical aesthetics experts.",
    };
  }
}

// ==========================
// ✅ Fetch Data
// ==========================
async function getFoundersData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/our-founders-component?depth=2&limit=100`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) throw new Error("Failed to fetch founders data");

  const json = await res.json();
  return json.docs?.find((doc: any) => doc.isActive) || null;
}

// ==========================
// ✅ Structured Data
// ==========================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Goldfingers Aesthetics",
      url: "https://www.goldfingersaesthetics.com",
      logo: "https://www.goldfingersaesthetics.com/logo.png",
      description:
        "Florida’s premier medical aesthetics brand specializing in Botox, dermal fillers, and advanced aesthetic treatments.",
    },
    {
      "@type": "WebPage",
      name: "Our Founders",
      url: "https://www.goldfingersaesthetics.com/founders",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://www.goldfingersaesthetics.com",
      },
    },
  ],
};

// ==========================
// ✅ Page Component
// ==========================
export default async function Founder() {
  const pageData = await getFoundersData();

  return (
    <>
      <Script
        id="founders-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <OurFounders pageData={pageData} />
    </>
  );
}
