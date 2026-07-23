import type { Metadata } from "next";
import SurgicalGallery from "@/components/gallery/surgical/SurgicalGallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title: "Surgical Before & After Gallery | Goldfingers Aesthetics",

    description:
      "Browse our surgical before and after gallery showcasing real results from Goldfingers Aesthetics & Plastic Surgery's board-certified specialists.",

    alternates: {
      canonical: "https://goldfingersaesthetics.com/gallery/surgical",
    },
  };
}

export default function Surgical() {
  return (
    <>
      <SurgicalGallery />
    </>
  );
}
