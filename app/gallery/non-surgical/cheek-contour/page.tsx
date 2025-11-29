// import CheekContourGallery from "@/components/gallery/non-surgical/cheek-contour/CheekContourGallery";


// export default function CheckContour() {
//     return (
//         <>
//             <CheekContourGallery />
//         </>
//     )
// }


// app/non-surgical/cheek-contour/page.tsx
import CheekContourGallery from "@/components/gallery/non-surgical/cheek-contour/CheekContourGallery";
import type { Metadata } from "next";

// Revalidate page every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Cheek Contour Gallery | Goldfingers Aesthetics",
  description:
    "Explore our Cheek Contour before and after results at Goldfingers Aesthetics. Real transformations that highlight your natural beauty.",
  alternates: {
    canonical: "https://goldfingersaesthetics.com/non-surgical/cheek-contour",
  },
  openGraph: {
    title: "Cheek Contour Gallery | Goldfingers Aesthetics",
    description:
      "Explore our Cheek Contour transformations and real client results.",
    url: "https://goldfingersaesthetics.com/non-surgical/cheek-contour",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto/v12345/cheek-contour-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Cheek Contour Results - Goldfingers Aesthetics",
      },
    ],
  },
};

async function getData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/CheekContourGallery?where[isActive][equals]=true&depth=3&limit=1`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch Cheek Contour Gallery data");
    return null;
  }

  const data = await res.json();
  const activeComponent =
    data.docs?.find((component: any) => component.isActive) || null;

  return activeComponent;
}

export default async function CheckContour() {
  const pageData = await getData();
  return <CheekContourGallery pageData={pageData} />;
}
