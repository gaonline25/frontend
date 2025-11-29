// import GalleryHero from "@/components/gallery/non-surgical/dermal-filler/DermanGalleryHero";

// export default function DermanFiller() {
//     return (
//         <>
//             <GalleryHero />
//         </>
//     )
// }



// app/non-surgical/dermal-filler/page.tsx
import DermanGalleryHero from "@/components/gallery/non-surgical/dermal-filler/DermanGalleryHero";
import type { Metadata } from "next";

export const revalidate = 60; // ISR (rebuild every 60 seconds)

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Dermal Filler Gallery | Goldfingers Aesthetics",
  description:
    "Explore our Dermal Filler before and after gallery showcasing real patient transformations at Goldfingers Aesthetics.",
  alternates: {
    canonical: "https://goldfingersaesthetics.com/non-surgical/dermal-filler",
  },
  openGraph: {
    title: "Dermal Filler Gallery | Goldfingers Aesthetics",
    description:
      "Real Dermal Filler transformations by Goldfingers Aesthetics. Explore our gallery of natural, refined results.",
    url: "https://goldfingersaesthetics.com/non-surgical/dermal-filler",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto/v12345/dermal-filler-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Dermal Filler Results - Goldfingers Aesthetics",
      },
    ],
  },
};

async function getData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/DermanGalleryHero?where[isActive][equals]=true&depth=3&limit=1`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch Dermal Filler Gallery data");
    return null;
  }

  const data = await res.json();
  const activeComponent =
    data.docs?.find((component: any) => component.isActive) || null;

  return activeComponent;
}

export default async function DermanFiller() {
  const pageData = await getData();
  return <DermanGalleryHero pageData={pageData} />;
}
