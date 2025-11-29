// import KybellaGallery from "@/components/gallery/non-surgical/kybella/KybellaGallery";


// export default function Kybella() {
//     return (
//         <>
//             <KybellaGallery />
//         </>
//     )
// }



// app/gallery/non-surgical/kybella/page.tsx
import KybellaGallery from "@/components/gallery/non-surgical/kybella/KybellaGallery";
import { Metadata } from "next";

export const revalidate = 60; // ✅ Incremental Static Regeneration (60s)

// ✅ Fetch page data (server-side)
async function getKybellaData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/KybellaGallery?where[isActive][equals]=true&depth=3&limit=1`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch Kybella Gallery data:", res.status);
    return null;
  }

  const data = await res.json();
  return data.docs?.find((d: any) => d.isActive) || null;
}

// ✅ Generate SEO metadata
export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getKybellaData();

  const seo = pageData?.seo || {};
  const title =
    seo.metaTitle || "Kybella Gallery | Goldfingers Aesthetics Florida";
  const description =
    seo.metaDescription ||
    "View our Kybella treatment before & after gallery and explore real patient results by Goldfingers Aesthetics.";
  const ogImage =
    seo.ogImage?.url ||
    "https://www.goldfingersaesthetics.com/default-og.jpg";

  return {
    title,
    description,
    keywords: seo.metaKeywords || "Kybella, Goldfingers Aesthetics, Gallery",
    alternates: {
      canonical:
        "https://www.goldfingersaesthetics.com/gallery/non-surgical/kybella",
    },
    openGraph: {
      title,
      description,
      url: "https://www.goldfingersaesthetics.com/gallery/non-surgical/kybella",
      images: [{ url: ogImage }],
      siteName: "Goldfingers Aesthetics",
    },
  };
}

// ✅ Page Component
export default async function Kybella() {
  const data = await getKybellaData();
  return <KybellaGallery pageData={data} />;
}
