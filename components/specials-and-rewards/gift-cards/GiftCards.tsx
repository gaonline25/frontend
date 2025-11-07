// // import React from "react";

// // const GiftCards: React.FC = () => {
// //   return (
// //     <main id="main">
// //       {/* Page Layout */}
// //       {/* Hero Module */}
// //       <div className="mod_hero banner mobile-stack" data-s3-module>
// //         <div className="wrapper">
// //           <picture className="background">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
// //             />
// //             <source
// //               media="(max-width:1400px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="1994"
// //               height="1206"
// //               alt="Background Texture"
// //               draggable="false"
// //             />
// //           </picture>
// //           <div className="row">
// //             <div className="inner">
// //               <ul className="partial_breadcrumb" data-s3-partial>
// //                 <li>
// //                   <a
// //                     href="/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Home
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="/specials-and-rewards/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Specials And Rewards
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="/specials-and-rewards/gift-cards/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Gift Cards
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>Gift Cards</h1>
// //             </div>
// //           </div>
// //           <div className="media">
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1920"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="woman smiling at nurse holding clipboard"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Intro Module */}
// //       <div
// //         className="mod_intro container viewport option-1 wide wow fadeInUp"
// //         data-s3-module
// //       >
// //         <div className="row pb-0">
// //           <picture className="logo">
// //             <img
// //               src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
// //               width={58}
// //               height={64}
// //               loading="lazy"
// //               alt="Goldfingers aesthetic logo"
// //               draggable="false"
// //               data-api-key="logo"
// //             />
// //           </picture>
// //           <div className="inner" data-api-key="content">
// //             <h2>Goldfingers Aesthetics Specials</h2>
// //             <p>
// //               Goldfingers Aesthetics offers instant online gift certificates for
// //               friends, family, and co-workers. It &rsquo;s the perfect
// //               last-minute online gift for a birthday, graduation, wedding,
// //               holiday, and more.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image  viewport half-image container wow fadeInLeft "
// //         data-s3-module
// //       >
// //         <div className="row half-image-row">
// //           <div className="media">
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Blonde woman laughing"
// //                 draggable="false"
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy ">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>Goldfingers Aesthetics Gift Cards</h2>
// //                 <p>
// //                   Now, you can enhance your natural beauty with Goldfingers
// //                   Aesthetics &mdash;like BOTOX, Skin Rejuvenation, and Facial
// //                   Services &mdash;in a trusted and relaxing environment.
// //                 </p>
// //                 <ul>
// //                   <li>
// //                     Our gift certificates can be used at any Goldfingers
// //                     Aesthetic location for any treatment or product.
// //                   </li>
// //                   <li>Gift certificates never expire.</li>
// //                   <li>No cash refunds are given for our gift certificates.</li>
// //                   <li>
// //                     We gladly offer gift certificate transfers from patient to
// //                     patient.
// //                   </li>
// //                   <li>
// //                     We require 24 hours notice for cancellation of treatments to
// //                     avoid any charges.
// //                   </li>
// //                   <li>
// //                     Gift certificates cannot be reissued if lost or stolen.
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default GiftCards;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchGiftCardsFillersPageData,
//   getResponsiveImageUrls,
//   getImageUrl,
//   lexicalToHtml,
// } from "@/lib/api/medicalSpa/fetchGiftCardsPageComponent"; // Adjust path to your API utilities

// interface GiftCardsPageData {
//   componentName: string;
//   heroSection: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
//     breadcrumbTextColor?: string;
//     title: string;
//     titleColor?: string;
//     titleFontSize?: string;
//     mediaImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//     layoutStyle: "mobile-stack" | "full-width" | "centered";
//   };
//   introSection: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     paddingTop?: string;
//     paddingBottom?: string;
//     containerWidth: "container" | "wide" | "full-width";
//     logo?: any;
//     logoWidth?: string;
//     logoHeight?: string;
//     logoAlt?: string;
//     heading?: string;
//     headingColor?: string;
//     headingFontSize?: string;
//     content: any;
//     textAlign: "left" | "center" | "right";
//     animationClass?: string;
//   };
//   halfImageSection: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     imagePosition: "left" | "right";
//     verticalAlignment: "top" | "center" | "bottom";
//     animationClass?: string;
//     mediaImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//       imageWidth?: string;
//       imageHeight?: string;
//     };
//     heading: string;
//     headingColor?: string;
//     headingFontSize?: string;
//     content: any;
//     bulletPoints: Array<{ text: string; textColor?: string }>;
//     bulletPointColor?: string;
//     copyAlignment: "left" | "center" | "right";
//   };
//   sectionOrder: Array<{ section: "hero" | "intro" | "halfImage" }>;
//   globalStyles: {
//     containerMaxWidth?: string;
//     containerPadding?: string;
//     sectionSpacing?: string;
//     fontFamily?: string;
//     primaryColor?: string;
//     secondaryColor?: string;
//     textColor?: string;
//     linkColor?: string;
//     linkHoverColor?: string;
//     headingFontSize?: string;
//   };
//   typographySettings: {
//     h1FontSize?: string;
//     h1Color?: string;
//     h1FontWeight?: string;
//     h1LineHeight?: string;
//     h2FontSize?: string;
//     h2Color?: string;
//     h2FontWeight?: string;
//     h2LineHeight?: string;
//     bodyFontSize?: string;
//     bodyLineHeight?: string;
//     bodyFontWeight?: string;
//   };
//   animationSettings: {
//     enableAnimations: boolean;
//     enableViewportAnimations: boolean;
//     fadeInDuration?: string;
//     slideInDuration?: string;
//     animationEasing?: string;
//     animationDelay?: string;
//   };
//   lazyLoadingSettings: {
//     enableLazyLoading: boolean;
//     lazyLoadingStrategy: "native" | "custom" | "both";
//     placeholderImage: string;
//   };
//   moduleClasses: {
//     heroModuleClass?: string;
//     introModuleClass?: string;
//     halfImageModuleClass?: string;
//   };
//   customCSS: {
//     enableCustomCSS: boolean;
//     heroSectionCSS?: string;
//     introSectionCSS?: string;
//     halfImageSectionCSS?: string;
//     globalCustomCSS?: string;
//   };
//   customJavaScript: {
//     enableCustomJS: boolean;
//     headerScript?: string;
//     footerScript?: string;
//     onLoadScript?: string;
//   };
// }

// const GiftCards: React.FC = () => {
//   const [pageData, setPageData] = useState<GiftCardsPageData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `${
//             process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
//             "https://goldfingerbackend.vercel.app/api"
//           }/gift-cards-page-component?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
//           {
//             next: { revalidate: 60 },
//             cache: "force-cache",
//           }
//         );
//         if (!res.ok) {
//           throw new Error(
//             `Failed to fetch Gift Cards page data: ${res.statusText}`
//           );
//         }
//         const data = await res.json();
//         const activeComponent =
//           data.docs?.find((component: any) => component.isActive) || null;
//         console.log("Fetched Gift Cards data:", activeComponent);
//         setPageData(activeComponent);
//       } catch (error) {
//         console.error("Error fetching Gift Cards page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (pageData?.customJavaScript?.enableCustomJS) {
//       if (pageData.customJavaScript.headerScript) {
//         const script = document.createElement("script");
//         script.innerHTML = pageData.customJavaScript.headerScript;
//         document.head.appendChild(script);
//       }
//       if (pageData.customJavaScript.footerScript) {
//         const script = document.createElement("script");
//         script.innerHTML = pageData.customJavaScript.footerScript;
//         document.body.appendChild(script);
//       }
//       if (pageData.customJavaScript.onLoadScript) {
//         window.addEventListener("load", () => {
//           eval(pageData.customJavaScript.onLoadScript);
//         });
//       }
//     }
//   }, [pageData]);

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const {
//     heroSection,
//     introSection,
//     halfImageSection,
//     sectionOrder,
//     globalStyles,
//     typographySettings,
//     animationSettings,
//     lazyLoadingSettings,
//     moduleClasses,
//     customCSS,
//   } = pageData;

//   const placeholder = lazyLoadingSettings.placeholderImage;

//   const renderSection = (section: string) => {
//     const animationClass = animationSettings.enableAnimations
//       ? animationSettings.enableViewportAnimations
//         ? `wow ${
//             section === "hero"
//               ? "fadeIn"
//               : section === "intro"
//               ? introSection.animationClass
//               : halfImageSection.animationClass
//           }`
//         : ""
//       : "";

//     switch (section) {
//       case "hero":
//         if (!heroSection.show) return null;
//         const heroBgImages = getResponsiveImageUrls(
//           heroSection.backgroundImage
//         );
//         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
//         return (
//           <div
//             className={`mod_hero banner ${heroSection.layoutStyle} ${
//               moduleClasses.heroModuleClass || ""
//             } ${animationClass}`}
//             data-s3-module
//             style={{
//               backgroundColor: heroSection.backgroundColor,
//               color: heroSection.textColor,
//               ...(customCSS.enableCustomCSS && customCSS.heroSectionCSS
//                 ? { cssText: customCSS.heroSectionCSS }
//                 : {}),
//             }}
//           >
//             <div className="wrapper">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
//                 />
//                 <source
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
//                 />
//                 <img
//                   src={placeholder}
//                   data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
//                   loading={
//                     lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
//                   }
//                   data-lazyload={
//                     lazyLoadingSettings.lazyLoadingStrategy === "custom" ||
//                     lazyLoadingSettings.lazyLoadingStrategy === "both"
//                       ? "img"
//                       : undefined
//                   }
//                   width="1994"
//                   height="1206"
//                   alt={heroBgImages.alt || "Background Texture"}
//                   draggable="false"
//                 />
//               </picture>
//               <div className="row">
//                 <div className="inner">
//                   <ul
//                     className="partial_breadcrumb"
//                     data-s3-partial
//                     style={{ color: heroSection.breadcrumbTextColor }}
//                   >
//                     {heroSection.breadcrumbs.map((crumb, index) => (
//                       <li key={index}>
//                         <a
//                           href={crumb.url}
//                           role="link"
//                           aria-label={
//                             crumb.ariaLabel ||
//                             "Breadcrumbs to help navigate the user"
//                           }
//                           style={{ color: heroSection.breadcrumbTextColor }}
//                         >
//                           {crumb.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                   <h1
//                     style={{
//                       color:
//                         heroSection.titleColor || typographySettings.h1Color,
//                       fontSize:
//                         heroSection.titleFontSize ||
//                         typographySettings.h1FontSize,
//                       fontWeight: typographySettings.h1FontWeight,
//                       lineHeight: typographySettings.h1LineHeight,
//                     }}
//                   >
//                     {heroSection.title}
//                   </h1>
//                 </div>
//               </div>
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
//                     data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
//                     data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
//                     data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
//                   />
//                   <source
//                     srcSet={`${heroMediaImages.large}?auto=format,compress&w=1920`}
//                     data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1920`}
//                   />
//                   <img
//                     src={`${heroMediaImages.large}?auto=format,compress&w=1920`}
//                     loading={
//                       lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
//                     }
//                     data-lazyload={
//                       lazyLoadingSettings.lazyLoadingStrategy === "custom" ||
//                       lazyLoadingSettings.lazyLoadingStrategy === "both"
//                         ? "img"
//                         : undefined
//                     }
//                     width="1920"
//                     height="1206"
//                     alt={
//                       heroMediaImages.alt ||
//                       "woman smiling at nurse holding clipboard"
//                     }
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//         );

//       case "intro":
//         if (!introSection.show) return null;
//         const introLogo = getImageUrl(introSection.logo);
//         return (
//           <div
//             className={`mod_intro ${
//               introSection.containerWidth
//             } viewport option-1 ${
//               moduleClasses.introModuleClass || ""
//             } ${animationClass}`}
//             data-s3-module
//             style={{
//               backgroundColor: introSection.backgroundColor,
//               color: introSection.textColor,
//               paddingTop: introSection.paddingTop,
//               paddingBottom: introSection.paddingBottom,
//               ...(customCSS.enableCustomCSS && customCSS.introSectionCSS
//                 ? { cssText: customCSS.introSectionCSS }
//                 : {}),
//             }}
//           >
//             <div className="row pb-0">
//               {introLogo && (
//                 <picture className="logo">
//                   <img
//                     src={introLogo}
//                     width={introSection.logoWidth || 58}
//                     height={introSection.logoHeight || 64}
//                     loading={
//                       lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
//                     }
//                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}
//               <div
//                 className="inner"
//                 data-api-key="content"
//                 style={{ textAlign: introSection.textAlign }}
//               >
//                 {introSection.heading && (
//                   <h2
//                     style={{
//                       color:
//                         introSection.headingColor || typographySettings.h2Color,
//                       fontSize:
//                         introSection.headingFontSize ||
//                         typographySettings.h2FontSize,
//                       fontWeight: typographySettings.h2FontWeight,
//                       lineHeight: typographySettings.h2LineHeight,
//                     }}
//                   >
//                     {introSection.heading}
//                   </h2>
//                 )}
//                 <div
//                   style={{
//                     fontSize: typographySettings.bodyFontSize,
//                     lineHeight: typographySettings.bodyLineHeight,
//                     fontWeight: typographySettings.bodyFontWeight,
//                   }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(introSection.content),
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         );

//       case "halfImage":
//         if (!halfImageSection.show) return null;
//         const halfImages = getResponsiveImageUrls(halfImageSection.mediaImage);
//         return (
//           <div
//             className={`mod_half_image viewport half-image container ${
//               moduleClasses.halfImageModuleClass || ""
//             } ${animationClass}`}
//             data-s3-module
//             style={{
//               backgroundColor: halfImageSection.backgroundColor,
//               color: halfImageSection.textColor,
//               ...(customCSS.enableCustomCSS && customCSS.halfImageSectionCSS
//                 ? { cssText: customCSS.halfImageSectionCSS }
//                 : {}),
//             }}
//           >
//             <div
//               className={`row half-image-row ${
//                 halfImageSection.imagePosition === "right" ? "flipped" : ""
//               } align-${halfImageSection.verticalAlignment}`}
//             >
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={placeholder}
//                     data-lazyload-srcset={`${halfImages.mobile}?auto=format,compress&w=420, ${halfImages.mobile}?auto=format,compress&w=630 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={placeholder}
//                     data-lazyload-srcset={`${halfImages.tablet}?auto=format,compress&w=800, ${halfImages.tablet}?auto=format,compress&w=1200 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={placeholder}
//                     data-lazyload-srcset={`${halfImages.desktop}?auto=format,compress&w=1400, ${halfImages.desktop}?auto=format,compress&w=2100 2x`}
//                   />
//                   <source
//                     srcSet={placeholder}
//                     data-lazyload-srcset={`${halfImages.large}?auto=format,compress&w=1832`}
//                   />
//                   <img
//                     src={placeholder}
//                     data-lazyload-src={`${halfImages.large}?auto=format,compress&w=1832`}
//                     loading={
//                       lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
//                     }
//                     data-lazyload={
//                       lazyLoadingSettings.lazyLoadingStrategy === "custom" ||
//                       lazyLoadingSettings.lazyLoadingStrategy === "both"
//                         ? "img"
//                         : undefined
//                     }
//                     width={halfImages.imageWidth || "1832"}
//                     height={halfImages.imageHeight || "1824"}
//                     alt={halfImages.alt || "Blonde woman laughing"}
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div className={`copy text-${halfImageSection.copyAlignment}`}>
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     <h2
//                       style={{
//                         color:
//                           halfImageSection.headingColor ||
//                           typographySettings.h2Color,
//                         fontSize:
//                           halfImageSection.headingFontSize ||
//                           typographySettings.h2FontSize,
//                         fontWeight: typographySettings.h2FontWeight,
//                         lineHeight: typographySettings.h2LineHeight,
//                       }}
//                     >
//                       {halfImageSection.heading}
//                     </h2>
//                     <div
//                       style={{
//                         fontSize: typographySettings.bodyFontSize,
//                         lineHeight: typographySettings.bodyLineHeight,
//                         fontWeight: typographySettings.bodyFontWeight,
//                       }}
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(halfImageSection.content),
//                       }}
//                     />
//                     {halfImageSection.bulletPoints && (
//                       <ul style={{ color: halfImageSection.bulletPointColor }}>
//                         {halfImageSection.bulletPoints.map((bullet, index) => (
//                           <li
//                             key={index}
//                             style={{
//                               color:
//                                 bullet.textColor ||
//                                 halfImageSection.bulletPointColor,
//                             }}
//                           >
//                             {bullet.text}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <main
//       id={pageData.advancedSettings?.customMainID || "main"}
//       style={{
//         maxWidth: globalStyles.containerMaxWidth,
//         padding: globalStyles.containerPadding,
//         fontFamily: globalStyles.fontFamily,
//         color: globalStyles.textColor,
//         margin: "0 auto",
//         ...(customCSS.enableCustomCSS && customCSS.globalCustomCSS
//           ? { cssText: customCSS.globalCustomCSS }
//           : {}),
//       }}
//     >
//       {sectionOrder.map((item, index) => (
//         <React.Fragment key={index}>
//           {renderSection(item.section)}
//         </React.Fragment>
//       ))}
//     </main>
//   );
// };

// export default GiftCards;

"use client";

import React, { useEffect } from "react";
import {
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchGiftCardsPageComponent"; // Adjust path to your API utilities

interface GiftCardsPageData {
  componentName: string;
  heroSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    backgroundImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
    breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
    breadcrumbTextColor?: string;
    title: string;
    titleColor?: string;
    titleFontSize?: string;
    mediaImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
    layoutStyle: "mobile-stack" | "full-width" | "centered";
  };
  introSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
    containerWidth: "container" | "wide" | "full-width";
    logo?: any;
    logoWidth?: string;
    logoHeight?: string;
    logoAlt?: string;
    heading?: string;
    headingColor?: string;
    headingFontSize?: string;
    content: any;
    textAlign: "left" | "center" | "right";
    animationClass?: string;
  };
  halfImageSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    imagePosition: "left" | "right";
    verticalAlignment: "top" | "center" | "bottom";
    animationClass?: string;
    mediaImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
      imageWidth?: string;
      imageHeight?: string;
    };
    heading: string;
    headingColor?: string;
    headingFontSize?: string;
    content: any;
    bulletPoints: Array<{ text: string; textColor?: string }>;
    bulletPointColor?: string;
    copyAlignment: "left" | "center" | "right";
  };
  sectionOrder: Array<{ section: "hero" | "intro" | "halfImage" }>;
  globalStyles: {
    containerMaxWidth?: string;
    containerPadding?: string;
    sectionSpacing?: string;
    fontFamily?: string;
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
    linkColor?: string;
    linkHoverColor?: string;
    headingFontSize?: string;
  };
  typographySettings: {
    h1FontSize?: string;
    h1Color?: string;
    h1FontWeight?: string;
    h1LineHeight?: string;
    h2FontSize?: string;
    h2Color?: string;
    h2FontWeight?: string;
    h2LineHeight?: string;
    bodyFontSize?: string;
    bodyLineHeight?: string;
    bodyFontWeight?: string;
  };
  animationSettings: {
    enableAnimations: boolean;
    enableViewportAnimations: boolean;
    fadeInDuration?: string;
    slideInDuration?: string;
    animationEasing?: string;
    animationDelay?: string;
  };
  lazyLoadingSettings: {
    enableLazyLoading: boolean;
    lazyLoadingStrategy: "native" | "custom" | "both";
    placeholderImage: string;
  };
  moduleClasses: {
    heroModuleClass?: string;
    introModuleClass?: string;
    halfImageModuleClass?: string;
  };
  customCSS: {
    enableCustomCSS: boolean;
    heroSectionCSS?: string;
    introSectionCSS?: string;
    halfImageSectionCSS?: string;
    globalCustomCSS?: string;
  };
  customJavaScript: {
    enableCustomJS: boolean;
    headerScript?: string;
    footerScript?: string;
    onLoadScript?: string;
  };
  advancedSettings?: {
    customMainID?: string;
  };
}

interface GiftCardsProps {
  data: GiftCardsPageData;
}

const GiftCards: React.FC<GiftCardsProps> = ({ data }) => {
  useEffect(() => {
    if (data?.customJavaScript?.enableCustomJS) {
      if (data.customJavaScript.headerScript) {
        const script = document.createElement("script");
        script.innerHTML = data.customJavaScript.headerScript;
        document.head.appendChild(script);
      }
      if (data.customJavaScript.footerScript) {
        const script = document.createElement("script");
        script.innerHTML = data.customJavaScript.footerScript;
        document.body.appendChild(script);
      }
      if (data.customJavaScript.onLoadScript) {
        window.addEventListener("load", () => {
          eval(data.customJavaScript.onLoadScript);
        });
      }
    }
  }, [data]);

  const {
    heroSection,
    introSection,
    halfImageSection,
    sectionOrder,
    globalStyles,
    typographySettings,
    animationSettings,
    lazyLoadingSettings,
    moduleClasses,
    customCSS,
  } = data;

  const placeholder = lazyLoadingSettings.placeholderImage;

  const renderSection = (section: string) => {
    const animationClass = animationSettings.enableAnimations
      ? animationSettings.enableViewportAnimations
        ? `wow ${
            section === "hero"
              ? "fadeIn"
              : section === "intro"
                ? introSection.animationClass
                : halfImageSection.animationClass
          }`
        : ""
      : "";

    switch (section) {
      case "hero":
        if (!heroSection.show) return null;
        const heroBgImages = getResponsiveImageUrls(
          heroSection.backgroundImage
        );
        const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
        return (
          <div
            className={`mod_hero banner ${heroSection.layoutStyle} ${
              moduleClasses.heroModuleClass || ""
            } ${animationClass}`}
            data-s3-module
            style={{
              backgroundColor: heroSection.backgroundColor,
              color: heroSection.textColor,
              ...(customCSS.enableCustomCSS && customCSS.heroSectionCSS
                ? { cssText: customCSS.heroSectionCSS }
                : {}),
            }}
          >
            <div className="wrapper">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
                />
                <img
                  src={placeholder}
                  data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
                  loading={
                    lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
                  }
                  data-lazyload={
                    lazyLoadingSettings.lazyLoadingStrategy === "custom" ||
                    lazyLoadingSettings.lazyLoadingStrategy === "both"
                      ? "img"
                      : undefined
                  }
                  width="1994"
                  height="1206"
                  alt={heroBgImages.alt || "Background Texture"}
                  draggable="false"
                />
              </picture>
              <div className="row">
                <div className="inner">
                  <ul
                    className="partial_breadcrumb"
                    data-s3-partial
                    style={{ color: heroSection.breadcrumbTextColor }}
                  >
                    {heroSection.breadcrumbs.map((crumb, index) => (
                      <li key={index}>
                        <a
                          href={crumb.url}
                          role="link"
                          aria-label={
                            crumb.ariaLabel ||
                            "Breadcrumbs to help navigate the user"
                          }
                          style={{ color: heroSection.breadcrumbTextColor }}
                        >
                          {crumb.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h1
                    style={{
                      color:
                        heroSection.titleColor || typographySettings.h1Color,
                      fontSize:
                        heroSection.titleFontSize ||
                        typographySettings.h1FontSize,
                      fontWeight: typographySettings.h1FontWeight,
                      lineHeight: typographySettings.h1LineHeight,
                    }}
                  >
                    {heroSection.title}
                  </h1>
                </div>
              </div>
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
                    data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                    data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
                    data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet={`${heroMediaImages.large}?auto=format,compress&w=1920`}
                    data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1920`}
                  />
                  <img
                    src={`${heroMediaImages.large}?auto=format,compress&w=1920`}
                    loading={
                      lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
                    }
                    data-lazyload={
                      lazyLoadingSettings.lazyLoadingStrategy === "custom" ||
                      lazyLoadingSettings.lazyLoadingStrategy === "both"
                        ? "img"
                        : undefined
                    }
                    width="1920"
                    height="1206"
                    alt={
                      heroMediaImages.alt ||
                      "woman smiling at nurse holding clipboard"
                    }
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "intro":
        if (!introSection.show) return null;
        const introLogo = getImageUrl(introSection.logo);
        return (
          <div
            className={`mod_intro ${
              introSection.containerWidth
            } viewport option-1 ${
              moduleClasses.introModuleClass || ""
            } ${animationClass}`}
            data-s3-module
            style={{
              backgroundColor: introSection.backgroundColor,
              color: introSection.textColor,
              paddingTop: introSection.paddingTop,
              paddingBottom: introSection.paddingBottom,
              ...(customCSS.enableCustomCSS && customCSS.introSectionCSS
                ? { cssText: customCSS.introSectionCSS }
                : {}),
            }}
          >
            <div className="row pb-0">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width={introSection.logoWidth || 58}
                    height={introSection.logoHeight || 64}
                    loading={
                      lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
                    }
                    alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div
                className="inner"
                data-api-key="content"
                style={{ textAlign: introSection.textAlign }}
              >
                {introSection.heading && (
                  <h2
                    style={{
                      color:
                        introSection.headingColor || typographySettings.h2Color,
                      fontSize:
                        introSection.headingFontSize ||
                        typographySettings.h2FontSize,
                      fontWeight: typographySettings.h2FontWeight,
                      lineHeight: typographySettings.h2LineHeight,
                    }}
                  >
                    {introSection.heading}
                  </h2>
                )}
                <div
                  style={{
                    fontSize: typographySettings.bodyFontSize,
                    lineHeight: typographySettings.bodyLineHeight,
                    fontWeight: typographySettings.bodyFontWeight,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(introSection.content),
                  }}
                />
              </div>
            </div>
          </div>
        );

      case "halfImage":
        if (!halfImageSection.show) return null;
        const halfImages = getResponsiveImageUrls(halfImageSection.mediaImage);
        return (
          <div
            className={`mod_half_image viewport half-image container ${
              moduleClasses.halfImageModuleClass || ""
            } ${animationClass}`}
            data-s3-module
            style={{
              backgroundColor: halfImageSection.backgroundColor,
              color: halfImageSection.textColor,
              ...(customCSS.enableCustomCSS && customCSS.halfImageSectionCSS
                ? { cssText: customCSS.halfImageSectionCSS }
                : {}),
            }}
          >
            <div
              className={`row half-image-row ${
                halfImageSection.imagePosition === "right" ? "flipped" : ""
              } align-${halfImageSection.verticalAlignment}`}
            >
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={placeholder}
                    data-lazyload-srcset={`${halfImages.mobile}?auto=format,compress&w=420, ${halfImages.mobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={placeholder}
                    data-lazyload-srcset={`${halfImages.tablet}?auto=format,compress&w=800, ${halfImages.tablet}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={placeholder}
                    data-lazyload-srcset={`${halfImages.desktop}?auto=format,compress&w=1400, ${halfImages.desktop}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet={placeholder}
                    data-lazyload-srcset={`${halfImages.large}?auto=format,compress&w=1832`}
                  />
                  <img
                    src={placeholder}
                    data-lazyload-src={`${halfImages.large}?auto=format,compress&w=1832`}
                    loading={
                      lazyLoadingSettings.enableLazyLoading ? "lazy" : "eager"
                    }
                    data-lazyload={
                      lazyLoadingSettings.lazyLoadingStrategy === "custom" ||
                      lazyLoadingSettings.lazyLoadingStrategy === "both"
                        ? "img"
                        : undefined
                    }
                    width={halfImages.imageWidth || "1832"}
                    height={halfImages.imageHeight || "1824"}
                    alt={halfImages.alt || "Blonde woman laughing"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className={`copy text-${halfImageSection.copyAlignment}`}>
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2
                      style={{
                        color:
                          halfImageSection.headingColor ||
                          typographySettings.h2Color,
                        fontSize:
                          halfImageSection.headingFontSize ||
                          typographySettings.h2FontSize,
                        fontWeight: typographySettings.h2FontWeight,
                        lineHeight: typographySettings.h2LineHeight,
                      }}
                    >
                      {halfImageSection.heading}
                    </h2>
                    <div
                      style={{
                        fontSize: typographySettings.bodyFontSize,
                        lineHeight: typographySettings.bodyLineHeight,
                        fontWeight: typographySettings.bodyFontWeight,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImageSection.content),
                      }}
                    />
                    {halfImageSection.bulletPoints && (
                      <ul style={{ color: halfImageSection.bulletPointColor }}>
                        {halfImageSection.bulletPoints.map((bullet, index) => (
                          <li
                            key={index}
                            style={{
                              color:
                                bullet.textColor ||
                                halfImageSection.bulletPointColor,
                            }}
                          >
                            {bullet.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main
      id={data.advancedSettings?.customMainID || "main"}
      style={{
        maxWidth: globalStyles.containerMaxWidth,
        padding: globalStyles.containerPadding,
        fontFamily: globalStyles.fontFamily,
        color: globalStyles.textColor,
        margin: "0 auto",
        ...(customCSS.enableCustomCSS && customCSS.globalCustomCSS
          ? { cssText: customCSS.globalCustomCSS }
          : {}),
      }}
    >
      {sectionOrder.map((item, index) => (
        <React.Fragment key={index}>
          {renderSection(item.section)}
        </React.Fragment>
      ))}
    </main>
  );
};

export default GiftCards;