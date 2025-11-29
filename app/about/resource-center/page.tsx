// import VideoGallery from "@/components/resource-center/VideoGallery";

// export default function Resource() {
//   return (
//     <>
//       <VideoGallery />
//     </>
//   );
// }



// app/resource-center/page.tsx
import VideoGallery from "@/components/resource-center/VideoGallery";
import { Metadata } from "next";

export const revalidate = 300; // ✅ Regenerate every 5 minutes

// ✅ SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${
        process.env.PAYLOAD_API_URL ||
        "https://backend-orpin-six-56.vercel.app/api"
      }/video-gallery-component?depth=2&limit=1`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) throw new Error("Failed to fetch video gallery data");

    const json = await res.json();
    const data = json?.docs?.[0] || {};
    const hero = data.heroSection || {};

    const title = hero.title || "Video Gallery | Goldfingers Aesthetics";
    const description =
      hero.metaDescription ||
      "Watch Goldfingers Aesthetics videos featuring expert tips, procedures, and transformations from our Florida locations.";
    const ogImage =
      hero.backgroundImage?.url ||
      hero.mediaImage?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    return {
      title,
      description,
      alternates: {
        canonical: "https://www.goldfingersaesthetics.com/resource-center",
      },
      openGraph: {
        title,
        description,
        url: "https://www.goldfingersaesthetics.com/resource-center",
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
    console.error("Error generating metadata:", error);
    return {
      title: "Video Gallery | Goldfingers Aesthetics",
      description:
        "Discover educational and inspiring videos from Goldfingers Aesthetics.",
    };
  }
}

// ✅ Server-side data fetching (ISR)
async function getVideoGalleryData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/video-gallery-component?depth=2&limit=1`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) throw new Error("Failed to fetch video gallery data");

  const json = await res.json();
  return json?.docs?.[0] || null;
}

// ✅ Page Component
export default async function Resource() {
  const data = await getVideoGalleryData();
  return <VideoGallery data={data} />;
}
