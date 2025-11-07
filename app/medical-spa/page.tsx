// import MedicalSpa from "@/components/medical-spa/MedicalSpa";


// export default function MedicalSpas() {
//     return (
//         <>
//             <MedicalSpa />
//         </>
//     )   
// }


import MedicalSpa from "@/components/medical-spa/MedicalSpa";
import { fetchMedicalSpaData } from "@/lib/api/medicalSpa/fetchMedicalSpaData";
import type { Metadata } from "next";

export const revalidate = 60; // ISR

async function getData() {
  // Use your existing server util for correctness and auth handling
  const data = await fetchMedicalSpaData();
  return data || null;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seo || {};
  return {
    title: seo?.metaTitle || "Medical Spa",
    description: seo?.metaDescription || "",
  };
}

export default async function MedicalSpas() {
  const data = await getData();

  // Small guard (keeps your current UX)
  if (!data) {
    return (
      <main id="main">
        <div>Loading...</div>
      </main>
    );
  }

  // ✅ Pass pre-fetched data into the component (no client fetches)
  return (
    <>
      <MedicalSpa data={data} />
    </>
  );
}
