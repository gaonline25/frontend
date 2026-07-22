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
import Script from "next/script";

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

    const title =
      hero.title || "Video Gallery | Goldfingers Aesthetics Florida Med Spa";

    const description =
      hero.metaDescription ||
      "Explore expert video content from Goldfingers Aesthetics featuring Botox treatments, dermal fillers, patient transformations, and aesthetic education across Florida locations.";

    const ogImage =
      hero.backgroundImage?.cloudinary_url ||
      hero.backgroundImage?.url ||
      hero.mediaImage?.cloudinary_url ||
      hero.mediaImage?.url ||
      "https://goldfingersaesthetics.com/default-og.jpg";

    const url = "https://goldfingersaesthetics.com/resource-center";

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
            alt: "Goldfingers Aesthetics Video Gallery",
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
        "Goldfingers Aesthetics videos",
        "Florida Botox videos",
        "Dermal filler transformations",
        "Medical spa video gallery",
        "Aesthetic treatment videos Florida",
        "Botox before and after video",
      ],
    };
  } catch (error) {
    return {
      title: "Video Gallery | Goldfingers Aesthetics Florida Med Spa",
      description:
        "Watch expert treatment videos and aesthetic transformations from Goldfingers Aesthetics.",
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


const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Video Gallery",
      url: "https://goldfingersaesthetics.com/resource-center",
      description:
        "Video gallery featuring Botox treatments, dermal fillers, and aesthetic education from Goldfingers Aesthetics Florida.",
      isPartOf: {
        "@type": "WebSite",
        name: "Goldfingers Aesthetics",
        url: "https://goldfingersaesthetics.com",
      },
    },
    {
      "@type": "Organization",
      name: "Goldfingers Aesthetics",
      url: "https://goldfingersaesthetics.com",
      logo: "https://goldfingersaesthetics.com/logo.png",
    },
  ],
};

// ✅ Page Component
export default async function Resource() {
  const data = await getVideoGalleryData();
  return (
    <>
      <Script
        id="video-gallery-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <VideoGallery data={data} />
    </>
  );
}
