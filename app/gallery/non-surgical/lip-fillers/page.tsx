// import LipFillerGallery from "@/components/gallery/non-surgical/lip-fillers/LipFillersGallery";
// // import LipFillersGallery from "@/components/gallery/non-surgical/lip-fillers/LipFillersGallery";

// export default function LipFillers() {
//     return (
//       <>
//         <LipFillerGallery />
//       </>
//     );
// }

import { redirect } from "next/navigation";
import { Metadata } from "next";

// Metadata for the root redirect page
export const metadata: Metadata = {
  title: "Lip Filler Gallery",
  robots: {
    index: false, // Don't index redirect pages
    follow: true,
  },
};

export default function LipFillerGalleryRoot() {
  // Permanent redirect to page 1 (301 redirect for SEO)
  redirect("/gallery/non-surgical/lip-fillers/1");
}