// import JuvedermGallery from "@/components/gallery/non-surgical/juvederm/JuvedermGallery";

// export default function Juvederm() {
//     return (
//         <>
//             <JuvedermGallery />
//         </>
//     )
// }

import { Metadata } from "next";
import JuvedermGallery from "@/components/gallery/non-surgical/juvederm/JuvedermGallery";
import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

// Generate dynamic metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
      "https://goldfingerbackend.vercel.app/api";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(
      `${apiUrl}/juvedermGallery?where[isActive][equals]=true&depth=3&limit=1`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
        cache: "force-cache",
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!res.ok) {
      // Return fallback metadata if fetch fails
      return {
        title: "Juvederm Gallery | Treatment Results",
        description:
          "View our comprehensive Juvederm treatment gallery showcasing real patient results and transformations.",
        keywords:
          "juvederm, dermal fillers, cosmetic treatments, facial aesthetics",
        robots: {
          index: true,
          follow: true,
        },
      };
    }

    const data = await res.json();
    const activeComponent =
      data.docs?.find((component: any) => component.isActive) || null;

    if (!activeComponent?.seo) {
      return {
        title: "Juvederm Gallery | Treatment Results",
        description:
          "View our comprehensive Juvederm treatment gallery showcasing real patient results and transformations.",
        keywords:
          "juvederm, dermal fillers, cosmetic treatments, facial aesthetics",
        robots: {
          index: true,
          follow: true,
        },
      };
    }

    const { seo, heroSection } = activeComponent;
    const ogImageUrl = seo.ogImage
      ? getResponsiveImageUrls({ desktop: seo.ogImage }).desktop
      : null;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";
    const pageUrl = `${siteUrl}/gallery/juvederm`; // Update with your actual path

    return {
      title: seo.metaTitle || "Juvederm Gallery | Treatment Results",
      description:
        seo.metaDescription ||
        "View our comprehensive Juvederm treatment gallery showcasing real patient results and transformations.",
      keywords:
        seo.metaKeywords || "juvederm, dermal fillers, cosmetic treatments",
      authors: [{ name: "Your Clinic Name" }], // Update with your clinic name
      openGraph: {
        title: seo.metaTitle || "Juvederm Gallery | Treatment Results",
        description:
          seo.metaDescription ||
          "View our comprehensive Juvederm treatment gallery showcasing real patient results and transformations.",
        url: pageUrl,
        siteName: "Your Clinic Name", // Update with your clinic name
        images: ogImageUrl
          ? [
              {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: seo.metaTitle || "Juvederm Gallery",
                type: "image/jpeg",
              },
            ]
          : [],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: seo.metaTitle || "Juvederm Gallery | Treatment Results",
        description:
          seo.metaDescription ||
          "View our comprehensive Juvederm treatment gallery showcasing real patient results and transformations.",
        images: ogImageUrl ? [ogImageUrl] : [],
        creator: "@yourhandle", // Update with your Twitter handle
      },
      alternates: {
        canonical: pageUrl,
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      verification: {
        // Add your verification codes
        google: "your-google-verification-code", // Optional
        // yandex: "your-yandex-verification-code", // Optional
        // bing: "your-bing-verification-code", // Optional
      },
      category: "Medical Aesthetics",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Return fallback metadata on error
    return {
      title: "Juvederm Gallery | Treatment Results",
      description:
        "View our comprehensive Juvederm treatment gallery showcasing real patient results and transformations.",
      keywords:
        "juvederm, dermal fillers, cosmetic treatments, facial aesthetics",
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

// Optional: Generate static params if you have multiple gallery pages
// export async function generateStaticParams() {
//   return [
//     { slug: 'juvederm' },
//     // Add more gallery slugs here
//   ];
// }

export default function Juvederm() {
  return (
    <>
      <JuvedermGallery />
    </>
  );
}