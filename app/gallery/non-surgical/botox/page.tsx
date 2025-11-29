// import BotoxGallery from "@/components/gallery/non-surgical/botox/BotoxGallery";


// export default function Botox() {
//     return (
//         <>
//             <BotoxGallery />
//         </>
//     )
// }



// app/non-surgical/botox/page.tsx
import BotoxGallery from "@/components/gallery/non-surgical/botox/BotoxGallery";

export const revalidate = 60; // ✅ incremental static regeneration (every 60 s)

async function getData() {
  const res = await fetch(
    `${process.env.PAYLOAD_API_URL ||
      "https://backend-orpin-six-56.vercel.app/api"}/botox-page?where[isActive][equals]=true&where[componentName][equals]=BOTOX%20Gallery&depth=3&limit=1`,
    { next: { revalidate: 60 } } // ✅ cached & revalidated by Next.js
  );

  if (!res.ok) throw new Error("Failed to fetch Botox Gallery data");

  const data = await res.json();
  const activeComponent =
    data.docs?.find((component: any) => component.isActive) || null;

  return activeComponent;
}

export default async function Botox() {
  const pageData = await getData();
  return <BotoxGallery pageData={pageData} />; // ✅ pass data as prop
}
