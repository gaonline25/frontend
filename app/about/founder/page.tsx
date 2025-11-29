// import OurFounders from "@/components/founders/Founders";

// export default function Founder() {
//   return (
//     <>
//       <OurFounders />
//     </>
//   );
// }



// app/founders/page.tsx
import OurFounders from "@/components/founders/Founders";
import { Metadata } from "next";

// ✅ Incremental Static Regeneration (revalidate every 5 minutes)
export const revalidate = 300;

// ✅ SEO Metadata Generation
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
      hero.heading?.text || "Our Founders | Goldfingers Aesthetics";
    const description =
      hero.metaDescription ||
      "Meet the founders of Goldfingers Aesthetics, the visionaries behind Florida’s premier medical aesthetics brand.";
    const ogImage =
      hero.mainImage?.image?.url ||
      hero.backgroundImage?.image?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    return {
      title,
      description,
      alternates: {
        canonical: "https://www.goldfingersaesthetics.com/founders",
      },
      openGraph: {
        title,
        description,
        url: "https://www.goldfingersaesthetics.com/founders",
        images: [{ url: ogImage }],
        siteName: "Goldfingers Aesthetics",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Our Founders | Goldfingers Aesthetics",
      description:
        "Meet the founders of Goldfingers Aesthetics, Florida’s trusted aesthetic experts.",
    };
  }
}

// ✅ Fetch function for data (revalidated & cached)
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

// ✅ Page component (Server Component)
export default async function Founder() {
  const pageData = await getFoundersData();
  return <OurFounders pageData={pageData} />; // ✅ Pass data to component
}
