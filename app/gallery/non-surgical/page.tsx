import type { Metadata } from "next";
import NonSurgicalGallery from "@/components/gallery/non-surgical/NonSurgicalGallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title: "Non-Surgical Before & After Gallery | Goldfingers Aesthetics",

    description:
      "Explore non-surgical before and after photos from Goldfingers Aesthetics, including Botox, fillers, and other injectable treatment results in Florida.",

    alternates: {
      canonical: "https://goldfingersaesthetics.com/gallery/non-surgical",
    },
  };
}

export default function NonSurgical() {
  return (
    <>
      <NonSurgicalGallery />
    </>
  );
}
