// import ConfidentialityStatement from "@/components/confidentiality-statement/ConfidentialityStatement";

// export default function ConfidentialityStatements() {
//   return (
//     <>
//       <ConfidentialityStatement />
//     </>
//   );
// }



// app/confidentiality-statement/page.tsx
import ConfidentialityStatement from "@/components/confidentiality-statement/ConfidentialityStatement";
import { Metadata } from "next";

export const revalidate = 300; // ✅ Rebuild every 5 minutes (ISR)

// ✅ SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${
        process.env.PAYLOAD_API_URL ||
        "https://backend-orpin-six-56.vercel.app/api"
      }/confidentiality-statement-component?depth=2&limit=1`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) throw new Error("Failed to fetch metadata");

    const json = await res.json();
    const data = json?.docs?.[0] || {};
    const hero = data.sections?.find((s: any) => s.sectionType === "hero")
      ?.heroSection || {};

    const title =
      hero.title || "Confidentiality Statement | Goldfingers Aesthetics";
    const description =
      hero.metaDescription ||
      "Review Goldfingers Aesthetics confidentiality statement regarding data protection, client information, and privacy policies.";
    const ogImage =
      hero.backgroundImage?.url ||
      hero.mediaImage?.url ||
      "https://www.goldfingersaesthetics.com/default-og.jpg";

    return {
      title,
      description,
      alternates: {
        canonical:
          "https://www.goldfingersaesthetics.com/confidentiality-statement",
      },
      openGraph: {
        title,
        description,
        url: "https://www.goldfingersaesthetics.com/confidentiality-statement",
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
  } catch (err) {
    console.error("Metadata fetch error:", err);
    return {
      title: "Confidentiality Statement | Goldfingers Aesthetics",
      description:
        "Learn about Goldfingers Aesthetics confidentiality and privacy policy.",
    };
  }
}

// ✅ Server-side data fetching
async function getConfidentialityData() {
  const res = await fetch(
    `${
      process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"
    }/confidentiality-statement-component?depth=2&limit=1`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch confidentiality data:", res.status);
    return null;
  }

  const json = await res.json();
  return json?.docs?.[0] || null;
}

// ✅ Page Component
export default async function ConfidentialityStatements() {
  const data = await getConfidentialityData();
  return <ConfidentialityStatement data={data} />;
}
