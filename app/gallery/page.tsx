import type { Metadata } from "next";
import Gallery from "@/components/gallery/Gallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Before & After Gallery | Goldfingers Aesthetics",

    description:
      "See stunning before and after transformations from Goldfingers Aesthetics, Florida's premier med spa and plastic surgery center across all locations.",

    alternates: {
      canonical: "https://goldfingersaesthetics.com/gallery",
    },
  };
}

export default function Gallerys() {
  return (
    <>
      <Gallery />
    </>
  );
}
