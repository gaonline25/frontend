import type { Metadata } from "next";
import LashExtensions from "@/components/medical-spa/lash-extensions/LashExtensions";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://goldfingersaesthetics.com"),

    title: "Lash Extensions | Goldfingers Aesthetics Medical Spa",

    description:
      "Enhance your look with professional lash extensions at Goldfingers Aesthetics. Our skilled techs deliver full, natural lashes tailored to your style.",

    alternates: {
      canonical:
        "https://goldfingersaesthetics.com/medical-spa/lash-extensions",
    },
  };
}

export default function LashExtension() {
  return (
    <>
      <LashExtensions />
    </>
  );
}
