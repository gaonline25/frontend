// "use client";

// import React, { useEffect, useState } from "react";
// import ImageCarousel from "@/components/gallery/ImageCarousel";
// import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";
// import { ChevronLeft } from "lucide-react";
// import { useParams } from "next/navigation";

// interface BotoxGalleryPageData {
//     componentName: string;
//     slug: string;
//     isActive: boolean;
//     heroSection: {
//       title: string;
//       backgroundColor?: string;
//       textColor?: string;
//       backgroundImage: {
//         desktop?: any;
//         tablet?: any;
//         mobile?: any;
//         smallMobile?: any;
//         altText?: string;
//       };
//       breadcrumbs: Array<{
//         label: string;
//         url: string;
//         ariaLabel?: string;
//       }>;
//       breadcrumbTextColor?: string;
//       breadcrumbLinkColor?: string;
//       breadcrumbHoverColor?: string;
//     };
//     dropdownSection: {
//       backgroundColor?: string;
//       selectedItemLabel: string;
//       dropdownItems: Array<{
//         label: string;
//         url: string;
//         isActive: boolean;
//       }>;
//       backButton: {
//         label?: string;
//         url?: string;
//         iconClass?: string;
//       };
//       textColor?: string;
//       linkColor?: string;
//       linkHoverColor?: string;
//       borderColor?: string;
//     };
//     gallerySection: {
//       backgroundColor?: string;
//       sectionPadding?: string;
//       galleryItems: Array<{
//         image?: any;
//         imageUrl?: string;
//         itemUrl: string;
//         altText: string;
//         patientId?: string;
//         imageNumber: number;
//         width?: number;
//         height?: number;
//         customCss?: string;
//       }>;
//       itemBackgroundColor?: string;
//       itemBorderColor?: string;
//       itemHoverEffect?: "none" | "scale" | "opacity" | "shadow";
//     };
//     paginationSection: {
//       enabled: boolean;
//       backgroundColor?: string;
//       textColor?: string;
//       activePageColor?: string;
//       activePageBackground?: string;
//       hoverColor?: string;
//       currentPage: number;
//       totalPages: number;
//       baseUrl?: string;
//       pages: Array<{
//         pageNumber: number;
//         url: string;
//         isCurrent: boolean;
//         hideOnPhone: boolean;
//       }>;
//       nextButton: {
//         label?: string;
//         url?: string;
//         enabled: boolean;
//       };
//       prevButton: {
//         label?: string;
//         url?: string;
//         enabled: boolean;
//       };
//     };
//     globalStyling: {
//       containerBackgroundColor?: string;
//       containerMaxWidth?: string;
//       fontFamily?: string;
//       primaryColor?: string;
//       secondaryColor?: string;
//       customCss?: string;
//     };
//     sectionOrder: Array<{
//       sectionType: "hero" | "dropdown" | "gallery" | "pagination";
//       enabled: boolean;
//       customId?: string;
//       customClass?: string;
//     }>;
//     seo: {
//       metaTitle?: string;
//       metaDescription?: string;
//       metaKeywords?: string;
//       ogImage?: any;
//     };
//   }

// const LipFillerGalleryPaginated: React.FC = () => {
//   const params = useParams();
//   const currentPage = parseInt(params.page as string) || 1;
  
//   const [pageData, setPageData] = useState<BotoxGalleryPageData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [isCarouselOpen, setIsCarouselOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Calculate pagination
//   const ITEMS_PER_PAGE = 12; // Adjust this number as needed
//   const totalItems = pageData?.gallerySection?.galleryItems?.length || 0;
//   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentPageItems = pageData?.gallerySection?.galleryItems?.slice(startIndex, endIndex) || [];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `${
//             process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
//             "https://goldfingerbackend.vercel.app/api"
//           }/ChinFillersPage?where[isActive][equals]=true&depth=3&limit=1`,
//           {
//             next: { revalidate: 60 },
//             cache: "force-cache",
//           }
//         );
//         if (!res.ok) {
//           throw new Error(
//             `Failed to fetch Lip Filler Gallery data: ${res.statusText}`
//           );
//         }
//         const data = await res.json();
//         const activeComponent =
//           data.docs?.find((component: any) => component.isActive) || null;
//         setPageData(activeComponent);
//       } catch (error) {
//         console.error("Error fetching Lip Filler Gallery data:", error);
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
//     // Adjust index to account for pagination
//     const globalIndex = startIndex + index;
//     setCurrentImageIndex(globalIndex);
//     setIsCarouselOpen(true);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const {
//     heroSection,
//     dropdownSection,
//     gallerySection,
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
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${backgroundImage.mobile}?auto=format,compress&w=800, ${backgroundImage.mobile}?auto=format,compress&w=1200 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={`${backgroundImage.tablet}?auto=format,compress&w=1400, ${backgroundImage.tablet}?auto=format,compress&w=2100 2x`}
//                 />
//                 <source
//                   srcSet={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
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
//                   <ChevronLeft
//                     className={
//                       dropdownSection.backButton.iconClass || "icon-left-open"
//                     }
//                     style={{ marginTop: "3px" }}
//                   />
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
            
//               href={dropdownSection.backButton.url}
//               className="link"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//               }}
//             >
//               <ChevronLeft
//                 className={
//                   dropdownSection.backButton.iconClass || "icon-left-open"
//                 }
//                 style={{ marginTop: "0" }}
//               />
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
//             {currentPageItems.map((item, index) => {
//               const imageUrl =
//                 item.imageUrl ||
//                 getResponsiveImageUrls({ desktop: item.image }).desktop;
//               return (
                
//                   key={index}
//                   href="#"
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
//         if (totalPages <= 1) return null;

//         const baseUrl = "/gallery/non-surgical/lip-fillers";
//         const prevPage = currentPage > 1 ? currentPage - 1 : null;
//         const nextPage = currentPage < totalPages ? currentPage + 1 : null;

//         // Generate page numbers to display
//         const getPageNumbers = () => {
//           const pages = [];
//           const maxPagesToShow = 5;
          
//           if (totalPages <= maxPagesToShow) {
//             // Show all pages if total is less than max
//             for (let i = 1; i <= totalPages; i++) {
//               pages.push(i);
//             }
//           } else {
//             // Always show first page
//             pages.push(1);
            
//             let startPage = Math.max(2, currentPage - 1);
//             let endPage = Math.min(totalPages - 1, currentPage + 1);
            
//             if (currentPage <= 2) {
//               endPage = 4;
//             } else if (currentPage >= totalPages - 1) {
//               startPage = totalPages - 3;
//             }
            
//             if (startPage > 2) {
//               pages.push('...');
//             }
            
//             for (let i = startPage; i <= endPage; i++) {
//               pages.push(i);
//             }
            
//             if (endPage < totalPages - 1) {
//               pages.push('...');
//             }
            
//             // Always show last page
//             pages.push(totalPages);
//           }
          
//           return pages;
//         };

//         return (
//           <div className="partial_pagination pagination" data-s3-partial="">
//             {prevPage && (
              
//                 href={prevPage === 1 ? baseUrl : `${baseUrl}/${prevPage}`}
//                 className="page-numbers"
//               >
//                 Previous
//               </a>
//             )}
            
//             {getPageNumbers().map((page, index) => {
//               if (page === '...') {
//                 return (
//                   <span key={`ellipsis-${index}`} className="page-numbers dots">
//                     ...
//                   </span>
//                 );
//               }
              
//               const pageNum = page as number;
//               return (
                
//                   key={pageNum}
//                   href={pageNum === 1 ? baseUrl : `${baseUrl}/${pageNum}`}
//                   className={`page-numbers ${
//                     pageNum === currentPage ? "current" : ""
//                   }`}
//                 >
//                   {pageNum}
//                 </a>
//               );
//             })}
            
//             {nextPage && (
              
//                 href={`${baseUrl}/${nextPage}`}
//                 className="page-numbers"
//               >
//                 Next
//               </a>
//             )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   // Use all gallery items for carousel
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

// export default LipFillerGalleryPaginated;


"use client";

import React, { useEffect, useState } from "react";
import ImageCarousel from "@/components/gallery/ImageCarousel";
import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";
import { ChevronLeft } from "lucide-react";
import { useParams } from "next/navigation";

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

const LipFillerGalleryPaginated: React.FC = () => {
  const params = useParams();
  const currentPage = parseInt(params.page as string) || 1;

  const [pageData, setPageData] = useState<BotoxGalleryPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Calculate pagination
  const ITEMS_PER_PAGE = 12; // Adjust this number as needed
  const totalItems = pageData?.gallerySection?.galleryItems?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageItems =
    pageData?.gallerySection?.galleryItems?.slice(startIndex, endIndex) || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
            "https://goldfingerbackend.vercel.app/api"
          }/ChinFillersPage?where[isActive][equals]=true&depth=3&limit=1`,
          {
            next: { revalidate: 60 },
            cache: "force-cache",
          }
        );
        if (!res.ok) {
          throw new Error(
            `Failed to fetch Lip Filler Gallery data: ${res.statusText}`
          );
        }
        const data = await res.json();
        const activeComponent =
          data.docs?.find((component: any) => component.isActive) || null;
        setPageData(activeComponent);
      } catch (error) {
        console.error("Error fetching Lip Filler Gallery data:", error);
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
    // Adjust index to account for pagination
    const globalIndex = startIndex + index;
    setCurrentImageIndex(globalIndex);
    setIsCarouselOpen(true);
  };

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const {
    heroSection,
    dropdownSection,
    gallerySection,
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
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${backgroundImage.mobile}?auto=format,compress&w=800, ${backgroundImage.mobile}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${backgroundImage.tablet}?auto=format,compress&w=1400, ${backgroundImage.tablet}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={`${backgroundImage.desktop}?auto=format,compress&w=2200`}
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
            
              href={dropdownSection.backButton.url}
              className="link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
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
            {currentPageItems.map((item, index) => {
              const imageUrl =
                item.imageUrl ||
                getResponsiveImageUrls({ desktop: item.image }).desktop;
              return (
                
                  key={index}
                  href="#"
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
        if (totalPages <= 1) return null;

        const baseUrl = "/gallery/non-surgical/lip-fillers";
        const prevPage = currentPage > 1 ? currentPage - 1 : null;
        const nextPage = currentPage < totalPages ? currentPage + 1 : null;

        // Generate page numbers to display
        const getPageNumbers = () => {
          const pages: (number | string)[] = [];
          const maxPagesToShow = 5;

          if (totalPages <= maxPagesToShow) {
            // Show all pages if total is less than max
            for (let i = 1; i <= totalPages; i++) {
              pages.push(i);
            }
          } else {
            // Always show first page
            pages.push(1);

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage <= 2) {
              endPage = 4;
            } else if (currentPage >= totalPages - 1) {
              startPage = totalPages - 3;
            }

            if (startPage > 2) {
              pages.push("...");
            }

            for (let i = startPage; i <= endPage; i++) {
              pages.push(i);
            }

            if (endPage < totalPages - 1) {
              pages.push("...");
            }

            // Always show last page
            pages.push(totalPages);
          }

          return pages;
        };

        return (
          <div className="partial_pagination pagination" data-s3-partial="">
            {prevPage && (
              
                href={prevPage === 1 ? baseUrl : `${baseUrl}/${prevPage}`}
                className="page-numbers"
              >
                Previous
              </a>
            )}

            {getPageNumbers().map((page, index) => {
              if (page === "...") {
                return (
                  <span key={`ellipsis-${index}`} className="page-numbers dots">
                    ...
                  </span>
                );
              }

              const pageNum = page as number;
              return (
                
                  key={pageNum}
                  href={pageNum === 1 ? baseUrl : `${baseUrl}/${pageNum}`}
                  className={`page-numbers ${
                    pageNum === currentPage ? "current" : ""
                  }`}
                >
                  {pageNum}
                </a>
              );
            })}

            {nextPage && (
              <a href={`${baseUrl}/${nextPage}`} className="page-numbers">
                Next
              </a>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Use all gallery items for carousel
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

export default LipFillerGalleryPaginated;
