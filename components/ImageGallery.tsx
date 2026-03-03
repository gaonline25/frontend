import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

const images: GalleryItem[] = [
  {
    original:
      "https://i.postimg.cc/90XtSrNs/Whats_App_Image_2026_02_19_at_11_44_53_PM.jpg",
    thumbnail:
      "https://i.postimg.cc/90XtSrNs/Whats_App_Image_2026_02_19_at_11_44_53_PM.jpg",
  },
  {
    original:
      "https://i.postimg.cc/KjcrVRH2/Whats_App_Image_2026_02_19_at_11_45_18_PM.jpg",
    thumbnail:
      "https://i.postimg.cc/KjcrVRH2/Whats_App_Image_2026_02_19_at_11_45_18_PM.jpg",
  },
  {
    original:
      "https://i.postimg.cc/Gt3JNH5R/Whats_App_Image_2026_02_19_at_11_45_19_PM.jpg",
    thumbnail:
      "https://i.postimg.cc/Gt3JNH5R/Whats_App_Image_2026_02_19_at_11_45_19_PM.jpg",
  },
  {
    original:
      "https://i.postimg.cc/nrVY5CPZ/Whats_App_Image_2026_02_19_at_11_45_23_PM.jpg",
    thumbnail:
      "https://i.postimg.cc/nrVY5CPZ/Whats_App_Image_2026_02_19_at_11_45_23_PM.jpg",
  },
  {
    original:
      "https://i.postimg.cc/7hPMcfWw/Whats_App_Image_2026_02_19_at_11_45_23_PM_(1).jpg",
    thumbnail:
      "https://i.postimg.cc/7hPMcfWw/Whats_App_Image_2026_02_19_at_11_45_23_PM_(1).jpg",
  },
  {
    original:
      "https://i.postimg.cc/3NLCHYs4/Whats_App_Image_2026_02_19_at_11_45_24_PM.jpg",
    thumbnail:
      "https://i.postimg.cc/3NLCHYs4/Whats_App_Image_2026_02_19_at_11_45_24_PM.jpg",
  },
  {
    original:
      "https://i.postimg.cc/kGMFZBp5/Whats_App_Image_2026_02_19_at_11_45_24_PM_(1).jpg",
    thumbnail:
      "https://i.postimg.cc/kGMFZBp5/Whats_App_Image_2026_02_19_at_11_45_24_PM_(1).jpg",
  },
  {
    original:
      "https://i.postimg.cc/zvDSMVcB/Whats_App_Image_2026_02_19_at_11_45_24_PM_(2).jpg",
    thumbnail:
      "https://i.postimg.cc/zvDSMVcB/Whats_App_Image_2026_02_19_at_11_45_24_PM_(2).jpg",
  },
  {
    original:
      "https://i.postimg.cc/6q6LSymp/Whats_App_Image_2026_02_19_at_11_45_24_PM_(3).jpg",
    thumbnail:
      "https://i.postimg.cc/6q6LSymp/Whats_App_Image_2026_02_19_at_11_45_24_PM_(3).jpg",
  },
  {
    original:
      "https://i.postimg.cc/Wz96PTBv/Whats_App_Image_2026_02_19_at_11_45_24_PM_(4).jpg",
    thumbnail:
      "https://i.postimg.cc/Wz96PTBv/Whats_App_Image_2026_02_19_at_11_45_24_PM_(4).jpg",
  },
  {
    original:
      "https://i.postimg.cc/3NLCHYs8/Whats_App_Image_2026_02_19_at_11_45_24_PM_(5).jpg",
    thumbnail:
      "https://i.postimg.cc/3NLCHYs8/Whats_App_Image_2026_02_19_at_11_45_24_PM_(5).jpg",
  },
  {
    original:
      "https://i.postimg.cc/x8sySnw0/Whats_App_Image_2026_02_19_at_11_45_24_PM_(6).jpg",
    thumbnail:
      "https://i.postimg.cc/x8sySnw0/Whats_App_Image_2026_02_19_at_11_45_24_PM_(6).jpg",
  },
  {
    original:
      "https://i.postimg.cc/yxfXzsM6/Whats_App_Image_2026_02_19_at_11_45_24_PM_(7).jpg",
    thumbnail:
      "https://i.postimg.cc/yxfXzsM6/Whats_App_Image_2026_02_19_at_11_45_24_PM_(7).jpg",
  },
  {
    original:
      "https://i.postimg.cc/66zhZfy1/Whats_App_Image_2026_02_19_at_11_45_25_PM.jpg",
    thumbnail:
      "https://i.postimg.cc/66zhZfy1/Whats_App_Image_2026_02_19_at_11_45_25_PM.jpg",
  },
  {
    original:
      "https://i.postimg.cc/zvdS18sR/Whats_App_Image_2026_02_19_at_11_45_25_PM_(1).jpg",
    thumbnail:
      "https://i.postimg.cc/zvdS18sR/Whats_App_Image_2026_02_19_at_11_45_25_PM_(1).jpg",
  },
  {
    original:
      "https://i.postimg.cc/x8sySnwM/Whats_App_Image_2026_02_19_at_11_45_25_PM_(2).jpg",
    thumbnail:
      "https://i.postimg.cc/x8sySnwM/Whats_App_Image_2026_02_19_at_11_45_25_PM_(2).jpg",
  },
  {
    original:
      "https://i.postimg.cc/rshCLMBC/Whats_App_Image_2026_02_19_at_11_45_25_PM_(4).jpg",
    thumbnail:
      "https://i.postimg.cc/rshCLMBC/Whats_App_Image_2026_02_19_at_11_45_25_PM_(4).jpg",
  },
];

function MyGallery() {
  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="somehehe">
      <ImageGallery
        ref={galleryRef}
        items={images}
        onSlide={(index) => console.log("Slid to", index)}
      />
    </div>
  );
}


export default MyGallery