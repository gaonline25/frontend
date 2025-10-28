// // import React from "react";

// // const LashExtensionsGallery: React.FC = () => {
// //   return (
// //     <main id="main">
// //       {/* Gallery Hero Partial */}
// //       <div className="partial_gallery_hero banner bg" data-s3-partial="">
// //         <div className="row">
// //           <div className="inner">
// //             <h1>Lash Extensions Gallery</h1>
// //             <ul className="partial_breadcrumb" data-s3-partial="">
// //               <li>
// //                 <a
// //                   href="/"
// //                   role="link"
// //                   aria-label="Breadcrumbs to help navigate the user"
// //                 >
// //                   Home
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/gallery/"
// //                   role="link"
// //                   aria-label="Breadcrumbs to help navigate the user"
// //                 >
// //                   Gallery
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/gallery/non-surgical/"
// //                   role="link"
// //                   aria-label="Breadcrumbs to help navigate the user"
// //                 >
// //                   Non Surgical
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/gallery/non-surgical/lash-extensions/"
// //                   role="link"
// //                   aria-label="Breadcrumbs to help navigate the user"
// //                 >
// //                   Lash Extensions
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=630 2x"
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=630 2x"
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1200 2x"
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1200 2x"
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2100 2x"
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2100 2x"
// //           />
// //           <source
// //             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
// //           />
// //           <img
// //             src="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
// //             width="2200"
// //             height="691"
// //             alt="Marble"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>
// //       <div className="container partial_gallery_item_index" data-s3-partial="">
// //         <div className="row">
// //           <div className="partial_gallery_dropdown" data-s3-partial="">
// //             <ul className="dropdown">
// //               <li>
// //                 <div className="selector">
// //                   <span>Lash Extensions</span>
// //                   <span className="icon-left-open"></span>
// //                   <ul className="children">
// //                     <li>
// //                       <a href="/gallery/non-surgical/lip-fillers/">
// //                         Lip Fillers
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/botox/">BOTOX</a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/juvederm/">JUVÉDERM</a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/kybella/">KYBELLA</a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/micro-channeling/">
// //                         Micro-Channeling
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/restylane-r/">Restylane</a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/skinmedica/">SkinMedica</a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/dermal-filler/">
// //                         Dermal Filler
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/cheek-contour/">
// //                         Cheek Contour
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/liquid-chin-and-jaw-contouring/">
// //                         Liquid Chin & Jaw Contouring
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/liquid-rhinoplasty/">
// //                         Liquid Rhinoplasty
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/marionette-lines/">
// //                         Marionette Lines
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/liquid-facelift/">
// //                         Liquid (Non-Surgical) Facelift
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/weight-loss/">
// //                         Weight Loss
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="/gallery/non-surgical/lash-extensions/">
// //                         Lash Extensions
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </li>
// //             </ul>
// //             <a href="/gallery/non-surgical/" className="link">
// //               <span className="icon-left-open"></span>
// //               Back to Gallery
// //             </a>
// //           </div>
// //           <div
// //             className="partial_gallery_default_item_index"
// //             data-s3-partial=""
// //           >
// //             <a
// //               href="/gallery/non-surgical/lash-extensions/item/bpbHcwGSQ--apY-VCpLUHg/"
// //               className="item single"
// //             >
// //               <picture className="">
// //                 <source
// //                   srcSet="https://www.datocms-assets.com/105497/1717559164-lashes.png?auto=format,compress&w=400"
// //                   data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559164-lashes.png?auto=format,compress&w=400"
// //                 />
// //                 <img
// //                   src="https://www.datocms-assets.com/105497/1717559164-lashes.png?auto=format,compress&w=400"
// //                   width="400"
// //                   height="401"
// //                   alt="Lash Extensions Before & After Gallery - Patient 999230 - Image 1"
// //                   draggable="false"
// //                 />
// //               </picture>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default LashExtensionsGallery;


// "use client";

// import React, { useEffect, useState } from "react";
// import ImageCarousel from "@/components/gallery/ImageCarousel";
// import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

// interface BotoxGalleryPageData {
//   componentName: string;
//   slug: string;
//   isActive: boolean;
//   heroSection: {
//     title: string;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundImage: {
//       desktop?: any;
//       tablet?: any;
//       mobile?: any;
//       smallMobile?: any;
//       altText?: string;
//     };
//     breadcrumbs: Array<{
//       label: string;
//       url: string;
//       ariaLabel?: string;
//     }>;
//     breadcrumbTextColor?: string;
//     breadcrumbLinkColor?: string;
//     breadcrumbHoverColor?: string;
//   };
//   dropdownSection: {
//     backgroundColor?: string;
//     selectedItemLabel: string;
//     dropdownItems: Array<{
//       label: string;
//       url: string;
//       isActive: boolean;
//     }>;
//     backButton: {
//       label?: string;
//       url?: string;
//       iconClass?: string;
//     };
//     textColor?: string;
//     linkColor?: string;
//     linkHoverColor?: string;
//     borderColor?: string;
//   };
//   gallerySection: {
//     backgroundColor?: string;
//     sectionPadding?: string;
//     galleryItems: Array<{
//       image?: any;
//       imageUrl?: string;
//       itemUrl: string;
//       altText: string;
//       patientId?: string;
//       imageNumber: number;
//       width?: number;
//       height?: number;
//       customCss?: string;
//     }>;
//     itemBackgroundColor?: string;
//     itemBorderColor?: string;
//     itemHoverEffect?: "none" | "scale" | "opacity" | "shadow";
//   };
//   paginationSection: {
//     enabled: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     activePageColor?: string;
//     activePageBackground?: string;
//     hoverColor?: string;
//     currentPage: number;
//     totalPages: number;
//     baseUrl?: string;
//     pages: Array<{
//       pageNumber: number;
//       url: string;
//       isCurrent: boolean;
//       hideOnPhone: boolean;
//     }>;
//     nextButton: {
//       label?: string;
//       url?: string;
//       enabled: boolean;
//     };
//     prevButton: {
//       label?: string;
//       url?: string;
//       enabled: boolean;
//     };
//   };
//   globalStyling: {
//     containerBackgroundColor?: string;
//     containerMaxWidth?: string;
//     fontFamily?: string;
//     primaryColor?: string;
//     secondaryColor?: string;
//     customCss?: string;
//   };
//   sectionOrder: Array<{
//     sectionType: "hero" | "dropdown" | "gallery" | "pagination";
//     enabled: boolean;
//     customId?: string;
//     customClass?: string;
//   }>;
//   seo: {
//     metaTitle?: string;
//     metaDescription?: string;
//     metaKeywords?: string;
//     ogImage?: any;
//   };
// }

// const LashExtensionsGallery: React.FC = () => {
//   const [pageData, setPageData] = useState<BotoxGalleryPageData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [isCarouselOpen, setIsCarouselOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `${
//             process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
//             "https://goldfingerbackend.vercel.app/api"
//           }/LashExtensionsGallery?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
//           {
//             next: { revalidate: 60 },
//             cache: "force-cache",
//           }
//         );
//         if (!res.ok) {
//           throw new Error(
//             `Failed to fetch Botox Gallery data: ${res.statusText}`
//           );
//         }
//         const data = await res.json();
//         const activeComponent =
//           data.docs?.find((component: any) => component.isActive) || null;
//         console.log("Fetched Botox Gallery data:", activeComponent);
//         setPageData(activeComponent);
//       } catch (error) {
//         console.error("Error fetching Botox Gallery data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (pageData?.globalStyling?.customCss) {
//       const style = document.createElement("style");
//       style.innerHTML = pageData.globalStyling.customCss;
//       document.head.appendChild(style);
//     }
//   }, [pageData]);

//   const handleImageClick = (index: number) => {
//     setCurrentImageIndex(index);
//     setIsCarouselOpen(true);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const {
//     heroSection,
//     dropdownSection,
//     gallerySection,
//     paginationSection,
//     globalStyling,
//     sectionOrder,
//     seo,
//   } = pageData;

//   const renderSection = (
//     sectionType: string,
//     enabled: boolean,
//     customId?: string,
//     customClass?: string
//   ) => {
//     if (!enabled) return null;

//     switch (sectionType) {
//       case "hero":
//         const backgroundImage = getResponsiveImageUrls(
//           heroSection.backgroundImage
//         );
//         return (
//           <div className="partial_gallery_hero banner bg" data-s3-partial="">
//             <div className="row">
//               <div className="inner">
//                 <h1>{heroSection.title}</h1>
//                 <ul className="partial_breadcrumb" data-s3-partial="">
//                   {heroSection.breadcrumbs.map((breadcrumb, index) => (
//                     <li key={index}>
//                       <a
//                         href={breadcrumb.url}
//                         role="link"
//                         aria-label={breadcrumb.ariaLabel}
//                       >
//                         {breadcrumb.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             {backgroundImage.desktop && (
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={`${backgroundImage.smallMobile}?auto=format,compress&w=420, ${backgroundImage.smallMobile}?auto=format,compress&w=630 2x`}
//                   data-lazyload-srcset={`${backgroundImage.smallMobile}?auto=format,compress&w=420, ${backgroundImage.smallMobile}?auto=format,compress&w=630 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${backgroundImage.mobile}?auto=format,compress&w=800, ${backgroundImage.mobile}?auto=format,compress&w=1200 2x`}
//                   data-lazyload-srcset={`${backgroundImage.mobile}?auto=format,compress&w=800, ${backgroundImage.mobile}?auto=format,compress&w=1200 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={`${backgroundImage.tablet}?auto=format,compress&w=1400, ${backgroundImage.tablet}?auto=format,compress&w=2100 2x`}
//                   data-lazyload-srcset={`${backgroundImage.tablet}?auto=format,compress&w=1400, ${backgroundImage.tablet}?auto=format,compress&w=2100 2x`}
//                 />
//                 <source
//                   srcSet={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
//                   data-lazyload-srcset={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
//                 />
//                 <img
//                   src={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
//                   width="2200"
//                   height="691"
//                   alt={heroSection.backgroundImage.altText || "Marble"}
//                   draggable="false"
//                 />
//               </picture>
//             )}
//           </div>
//         );

//       case "dropdown":
//         return (
//           <div className="partial_gallery_dropdown" data-s3-partial="">
//             <ul className="dropdown">
//               <li>
//                 <div className="selector">
//                   <span>{dropdownSection.selectedItemLabel}</span>
//                   <span
//                     className={
//                       dropdownSection.backButton.iconClass || "icon-left-open"
//                     }
//                   ></span>
//                   <ul className="children">
//                     {dropdownSection.dropdownItems.map((item, index) => (
//                       <li key={index}>
//                         <a href={item.url}>{item.label}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//             <a href={dropdownSection.backButton.url} className="link">
//               <span
//                 className={
//                   dropdownSection.backButton.iconClass || "icon-left-open"
//                 }
//               ></span>
//               {dropdownSection.backButton.label}
//             </a>
//           </div>
//         );

//       case "gallery":
//         return (
//           <div
//             className="partial_gallery_default_item_index"
//             data-s3-partial=""
//           >
//             {gallerySection.galleryItems.map((item, index) => {
//               const imageUrl =
//                 item.imageUrl ||
//                 getResponsiveImageUrls({ desktop: item.image }).desktop;
//               return (
//                 <a
//                   key={index}
//                   href={item.itemUrl}
//                   className="item single"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleImageClick(index);
//                   }}
//                 >
//                   <picture className="">
//                     <source
//                       srcSet={`${imageUrl}?auto=format,compress&w=${
//                         item.width || 400
//                       }`}
//                       data-lazyload-srcset={`${imageUrl}?auto=format,compress&w=${
//                         item.width || 400
//                       }`}
//                     />
//                     <img
//                       src={`${imageUrl}?auto=format,compress&w=${
//                         item.width || 400
//                       }`}
//                       width={item.width || 400}
//                       height={item.height || 300}
//                       alt={item.altText}
//                       draggable="false"
//                     />
//                   </picture>
//                 </a>
//               );
//             })}
//           </div>
//         );

//       case "pagination":
//         if (!paginationSection.enabled) return null;
//         return (
//           <div className="partial_pagination pagination" data-s3-partial="">
//             {paginationSection.prevButton.enabled &&
//               paginationSection.prevButton.url && (
//                 <a
//                   href={paginationSection.prevButton.url}
//                   className="page-numbers"
//                 >
//                   {paginationSection.prevButton.label || "Previous"}
//                 </a>
//               )}
//             {paginationSection.pages.map((page, index) => (
//               <a
//                 key={index}
//                 href={page.url}
//                 className={`page-numbers ${page.isCurrent ? "current" : ""} ${
//                   page.hideOnPhone ? "hide-phone" : ""
//                 }`}
//               >
//                 {page.pageNumber}
//               </a>
//             ))}
//             {paginationSection.nextButton.enabled &&
//               paginationSection.nextButton.url && (
//                 <a
//                   href={paginationSection.nextButton.url}
//                   className="page-numbers"
//                 >
//                   {paginationSection.nextButton.label || "Next"}
//                 </a>
//               )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   const carouselImages = gallerySection.galleryItems.map((item) => ({
//     src:
//       item.imageUrl || getResponsiveImageUrls({ desktop: item.image }).desktop,
//     alt: item.altText,
//   }));

//   return (
//     <main id="main">
//       {seo.metaTitle && <title>{seo.metaTitle}</title>}
//       {seo.metaDescription && (
//         <meta name="description" content={seo.metaDescription} />
//       )}
//       {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
//       {seo.ogImage && (
//         <meta
//           property="og:image"
//           content={getResponsiveImageUrls({ desktop: seo.ogImage }).desktop}
//         />
//       )}

//       {sectionOrder.map((section, index) => {
//         if (section.sectionType === "hero" && section.enabled) {
//           return (
//             <React.Fragment key={index}>
//               {renderSection(
//                 section.sectionType,
//                 section.enabled,
//                 section.customId,
//                 section.customClass
//               )}
//             </React.Fragment>
//           );
//         }
//         return null;
//       })}

//       <div className="container partial_gallery_item_index" data-s3-partial="">
//         <div className="row">
//           {sectionOrder.map((section, index) => {
//             if (section.sectionType === "dropdown" && section.enabled) {
//               return (
//                 <React.Fragment key={index}>
//                   {renderSection(
//                     section.sectionType,
//                     section.enabled,
//                     section.customId,
//                     section.customClass
//                   )}
//                 </React.Fragment>
//               );
//             }
//             return null;
//           })}

//           {sectionOrder.map((section, index) => {
//             if (section.sectionType === "gallery" && section.enabled) {
//               return (
//                 <React.Fragment key={index}>
//                   {renderSection(
//                     section.sectionType,
//                     section.enabled,
//                     section.customId,
//                     section.customClass
//                   )}
//                 </React.Fragment>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>

//       {sectionOrder.map((section, index) => {
//         if (section.sectionType === "pagination" && section.enabled) {
//           return (
//             <React.Fragment key={index}>
//               {renderSection(
//                 section.sectionType,
//                 section.enabled,
//                 section.customId,
//                 section.customClass
//               )}
//             </React.Fragment>
//           );
//         }
//         return null;
//       })}

//       {isCarouselOpen && (
//         <ImageCarousel
//           images={carouselImages}
//           currentIndex={currentImageIndex}
//           onClose={() => setIsCarouselOpen(false)}
//           onNavigate={(index) => setCurrentImageIndex(index)}
//         />
//       )}
//     </main>
//   );
// };

// export default LashExtensionsGallery;


"use client";

import React, { useEffect, useState } from "react";
import ImageCarousel from "@/components/gallery/ImageCarousel";
import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";
import { ChevronLeft } from "lucide-react";

interface BotoxGalleryPageData {
  componentName: string;
  slug: string;
  isActive: boolean;
  heroSection: {
    title: string;
    backgroundColor?: string;
    textColor?: string;
    backgroundImage: {
      desktop?: any;
      tablet?: any;
      mobile?: any;
      smallMobile?: any;
      altText?: string;
    };
    breadcrumbs: Array<{
      label: string;
      url: string;
      ariaLabel?: string;
    }>;
    breadcrumbTextColor?: string;
    breadcrumbLinkColor?: string;
    breadcrumbHoverColor?: string;
  };
  dropdownSection: {
    backgroundColor?: string;
    selectedItemLabel: string;
    dropdownItems: Array<{
      label: string;
      url: string;
      isActive: boolean;
    }>;
    backButton: {
      label?: string;
      url?: string;
      iconClass?: string;
    };
    textColor?: string;
    linkColor?: string;
    linkHoverColor?: string;
    borderColor?: string;
  };
  gallerySection: {
    backgroundColor?: string;
    sectionPadding?: string;
    galleryItems: Array<{
      image?: any;
      imageUrl?: string;
      itemUrl: string;
      altText: string;
      patientId?: string;
      imageNumber: number;
      width?: number;
      height?: number;
      customCss?: string;
    }>;
    itemBackgroundColor?: string;
    itemBorderColor?: string;
    itemHoverEffect?: "none" | "scale" | "opacity" | "shadow";
  };
  paginationSection: {
    enabled: boolean;
    backgroundColor?: string;
    textColor?: string;
    activePageColor?: string;
    activePageBackground?: string;
    hoverColor?: string;
    currentPage: number;
    totalPages: number;
    baseUrl?: string;
    pages: Array<{
      pageNumber: number;
      url: string;
      isCurrent: boolean;
      hideOnPhone: boolean;
    }>;
    nextButton: {
      label?: string;
      url?: string;
      enabled: boolean;
    };
    prevButton: {
      label?: string;
      url?: string;
      enabled: boolean;
    };
  };
  globalStyling: {
    containerBackgroundColor?: string;
    containerMaxWidth?: string;
    fontFamily?: string;
    primaryColor?: string;
    secondaryColor?: string;
    customCss?: string;
  };
  sectionOrder: Array<{
    sectionType: "hero" | "dropdown" | "gallery" | "pagination";
    enabled: boolean;
    customId?: string;
    customClass?: string;
  }>;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    ogImage?: any;
  };
}

const LashExtensionsGallery: React.FC = () => {
  const [pageData, setPageData] = useState<BotoxGalleryPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
            "https://goldfingerbackend.vercel.app/api"
          }/LashExtensionsGallery?where[isActive][equals]=true&depth=3&limit=1`,
          {
            next: { revalidate: 60 },
            cache: "force-cache",
          }
        );
        if (!res.ok) {
          throw new Error(
            `Failed to fetch Botox Gallery data: ${res.statusText}`
          );
        }
        const data = await res.json();
        const activeComponent =
          data.docs?.find((component: any) => component.isActive) || null;
        console.log("Fetched Botox Gallery data:", activeComponent);
        console.log(
          "Gallery Items Count:",
          activeComponent?.gallerySection?.galleryItems?.length || 0
        );
        setPageData(activeComponent);
      } catch (error) {
        console.error("Error fetching Botox Gallery data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (pageData?.globalStyling?.customCss) {
      const style = document.createElement("style");
      style.innerHTML = pageData.globalStyling.customCss;
      document.head.appendChild(style);
    }
  }, [pageData]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const {
    heroSection,
    dropdownSection,
    gallerySection,
    paginationSection,
    globalStyling,
    sectionOrder,
    seo,
  } = pageData;

  const renderSection = (
    sectionType: string,
    enabled: boolean,
    customId?: string,
    customClass?: string
  ) => {
    if (!enabled) return null;

    switch (sectionType) {
      case "hero":
        const backgroundImage = getResponsiveImageUrls(
          heroSection.backgroundImage
        );
        return (
          <div className="partial_gallery_hero banner bg" data-s3-partial="">
            <div className="row">
              <div className="inner">
                <h1>{heroSection.title}</h1>
                <ul className="partial_breadcrumb" data-s3-partial="">
                  {heroSection.breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                      <a
                        href={breadcrumb.url}
                        role="link"
                        aria-label={breadcrumb.ariaLabel}
                      >
                        {breadcrumb.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {backgroundImage.desktop && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={`${backgroundImage.smallMobile}?auto=format,compress&w=420, ${backgroundImage.smallMobile}?auto=format,compress&w=630 2x`}
                  data-lazyload-srcset={`${backgroundImage.smallMobile}?auto=format,compress&w=420, ${backgroundImage.smallMobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${backgroundImage.mobile}?auto=format,compress&w=800, ${backgroundImage.mobile}?auto=format,compress&w=1200 2x`}
                  data-lazyload-srcset={`${backgroundImage.mobile}?auto=format,compress&w=800, ${backgroundImage.mobile}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${backgroundImage.tablet}?auto=format,compress&w=1400, ${backgroundImage.tablet}?auto=format,compress&w=2100 2x`}
                  data-lazyload-srcset={`${backgroundImage.tablet}?auto=format,compress&w=1400, ${backgroundImage.tablet}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
                  data-lazyload-srcset={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
                />
                <img
                  src={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
                  width="2200"
                  height="691"
                  alt={heroSection.backgroundImage.altText || "Marble"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "dropdown":
        return (
          <div className="partial_gallery_dropdown" data-s3-partial="">
            <ul className="dropdown">
              <li>
                <div className="selector">
                  <span>{dropdownSection.selectedItemLabel}</span>
                  {/* <span
                    className={
                      dropdownSection.backButton.iconClass || "icon-left-open"
                    }
                  ></span> */}
                  <ChevronLeft
                    className={
                      dropdownSection.backButton.iconClass || "icon-left-open"
                    }
                    style={{ marginTop: "3px" }}
                  />
                  <ul className="children">
                    {dropdownSection.dropdownItems.map((item, index) => (
                      <li key={index}>
                        <a href={item.url}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            {/* <a href={dropdownSection.backButton.url} className="link">
              <span
                className={
                  dropdownSection.backButton.iconClass || "icon-left-open"
                }
              ></span>
              {dropdownSection.backButton.label}
            </a> */}
            <a
              href={dropdownSection.backButton.url}
              className="link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px", // space between icon and text
              }}
            >
              <ChevronLeft
                className={
                  dropdownSection.backButton.iconClass || "icon-left-open"
                }
                style={{ marginTop: "0" }}
              />
              {dropdownSection.backButton.label}
            </a>
          </div>
        );

      case "gallery":
        return (
          <div
            className="partial_gallery_default_item_index"
            data-s3-partial=""
          >
            {gallerySection.galleryItems.map((item, index) => {
              const imageUrl =
                item.imageUrl ||
                getResponsiveImageUrls({ desktop: item.image }).desktop;
              return (
                <a
                  key={index}
                  href={item.itemUrl}
                  className="item single"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(index);
                  }}
                >
                  <picture className="">
                    <source
                      srcSet={`${imageUrl}?auto=format,compress&w=${
                        item.width || 400
                      }`}
                      data-lazyload-srcset={`${imageUrl}?auto=format,compress&w=${
                        item.width || 400
                      }`}
                    />
                    <img
                      src={`${imageUrl}?auto=format,compress&w=${
                        item.width || 400
                      }`}
                      width={item.width || 400}
                      height={item.height || 300}
                      alt={item.altText}
                      draggable="false"
                    />
                  </picture>
                </a>
              );
            })}
          </div>
        );

      case "pagination":
        if (!paginationSection.enabled) return null;
        return (
          <div className="partial_pagination pagination" data-s3-partial="">
            {paginationSection.prevButton.enabled &&
              paginationSection.prevButton.url && (
                <a
                  href={paginationSection.prevButton.url}
                  className="page-numbers"
                >
                  {paginationSection.prevButton.label || "Previous"}
                </a>
              )}
            {paginationSection.pages.map((page, index) => (
              <a
                key={index}
                href={page.url}
                className={`page-numbers ${page.isCurrent ? "current" : ""} ${
                  page.hideOnPhone ? "hide-phone" : ""
                }`}
              >
                {page.pageNumber}
              </a>
            ))}
            {paginationSection.nextButton.enabled &&
              paginationSection.nextButton.url && (
                <a
                  href={paginationSection.nextButton.url}
                  className="page-numbers"
                >
                  {paginationSection.nextButton.label || "Next"}
                </a>
              )}
          </div>
        );

      default:
        return null;
    }
  };

  const carouselImages = gallerySection.galleryItems.map((item) => ({
    src:
      item.imageUrl || getResponsiveImageUrls({ desktop: item.image }).desktop,
    alt: item.altText,
  }));

  return (
    <main id="main">
      {seo.metaTitle && <title>{seo.metaTitle}</title>}
      {seo.metaDescription && (
        <meta name="description" content={seo.metaDescription} />
      )}
      {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
      {seo.ogImage && (
        <meta
          property="og:image"
          content={getResponsiveImageUrls({ desktop: seo.ogImage }).desktop}
        />
      )}

      {sectionOrder.map((section, index) => {
        if (section.sectionType === "hero" && section.enabled) {
          return (
            <React.Fragment key={index}>
              {renderSection(
                section.sectionType,
                section.enabled,
                section.customId,
                section.customClass
              )}
            </React.Fragment>
          );
        }
        return null;
      })}

      <div className="container partial_gallery_item_index" data-s3-partial="">
        <div className="row">
          {sectionOrder.map((section, index) => {
            if (section.sectionType === "dropdown" && section.enabled) {
              return (
                <React.Fragment key={index}>
                  {renderSection(
                    section.sectionType,
                    section.enabled,
                    section.customId,
                    section.customClass
                  )}
                </React.Fragment>
              );
            }
            return null;
          })}

          {sectionOrder.map((section, index) => {
            if (section.sectionType === "gallery" && section.enabled) {
              return (
                <React.Fragment key={index}>
                  {renderSection(
                    section.sectionType,
                    section.enabled,
                    section.customId,
                    section.customClass
                  )}
                </React.Fragment>
              );
            }
            return null;
          })}
        </div>
      </div>

      {sectionOrder.map((section, index) => {
        if (section.sectionType === "pagination" && section.enabled) {
          return (
            <React.Fragment key={index}>
              {renderSection(
                section.sectionType,
                section.enabled,
                section.customId,
                section.customClass
              )}
            </React.Fragment>
          );
        }
        return null;
      })}

      {isCarouselOpen && (
        <ImageCarousel
          images={carouselImages}
          currentIndex={currentImageIndex}
          onClose={() => setIsCarouselOpen(false)}
          onNavigate={(index) => setCurrentImageIndex(index)}
        />
      )}
    </main>
  );
};

export default LashExtensionsGallery;