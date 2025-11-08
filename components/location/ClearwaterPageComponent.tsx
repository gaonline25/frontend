// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchClearwaterPageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
//   getImageUrl,
// } from "@/lib/api/locations/fetchClearwaterPageData";

// const ClearwaterPageComponent: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       const pageData = await fetchClearwaterPageData();
//       setData(pageData);
//       setLoading(false);
//     };
//     loadData();
//   }, []);

//   if (loading) {
//     return <div className="text-center p-4">Loading...</div>;
//   }

//   if (!data) {
//     return <div className="text-center p-4">No data available</div>;
//   }

//   const {
//     heroSection,
//     introColumnSection,
//     halfImageSection1,
//     boxGridSection1,
//     goldfingersWaySection,
//     nonSurgicalSection,
//     goldfingersStoryBanner,
//     twoColumnSection,
//     ctaGeneralSection,
//     plasticSurgerySection,
//     boxGridSection2,
//     sectionOrder,
//     globalStyles,
//     accessibilitySettings,
//   } = data;

//   const renderRichText = (content: any) => {
//     if (!content) return null;
//     const html = lexicalToHtml(content);
//     return <div dangerouslySetInnerHTML={{ __html: html }} />;
//   };

//   const renderSection = (sectionKey: string) => {
//     switch (sectionKey) {
//       case "hero":
//         if (!heroSection?.show) return null;
//         const heroBackground = getResponsiveImageUrls(
//           heroSection?.backgroundImage
//         );
//         const heroMedia = getResponsiveImageUrls(heroSection?.mediaImage);

//         return (
//           <div
//             className={
//               heroSection.moduleClass || "mod_hero banner mobile-stack"
//             }
//             data-s3-module
//             key="hero"
//             style={{
//               backgroundColor: heroSection.backgroundColor || undefined,
//             }}
//           >
//             <div className="wrapper">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${heroBackground.mobile}, ${heroBackground.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${heroBackground.tablet}, ${heroBackground.tablet} 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${heroBackground.desktop}, ${heroBackground.desktop} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={heroBackground.large}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={heroBackground.large}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="1994"
//                   height="1206"
//                   alt={heroBackground.alt || "Background Texture"}
//                   draggable="false"
//                 />
//               </picture>
//               <div className="row">
//                 <div className="inner">
//                   {heroSection.breadcrumbs &&
//                     heroSection.breadcrumbs.length > 0 && (
//                       <ul className="partial_breadcrumb" data-s3-partial>
//                         {heroSection.breadcrumbs.map(
//                           (crumb: any, idx: number) => (
//                             <li key={idx}>
//                               <a
//                                 href={crumb.url}
//                                 role="link"
//                                 aria-label={crumb.ariaLabel}
//                               >
//                                 {crumb.label}
//                               </a>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     )}
//                   <h1
//                     style={{
//                       color: heroSection.titleColor || undefined,
//                       fontSize: heroSection.titleFontSize || undefined,
//                     }}
//                   >
//                     {heroSection.title || "Clearwater"}
//                   </h1>
//                 </div>
//               </div>
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
//                     data-lazyload-srcset={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
//                     data-lazyload-srcset={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
//                     data-lazyload-srcset={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
//                   />
//                   <source
//                     srcSet={heroMedia.large}
//                     data-lazyload-srcset={heroMedia.large}
//                   />
//                   <img
//                     src={heroMedia.large}
//                     width="1920"
//                     height="1206"
//                     alt={heroMedia.alt || "Beach in Clearwater, FL"}
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//         );

//       case "introColumn":
//         if (!introColumnSection?.show) return null;
//         const introLogo = getImageUrl(introColumnSection?.logo);

//         return (
//           <div
//             className={
//               introColumnSection.moduleClass || "mod_column viewport container"
//             }
//             data-s3-module
//             key="introColumn"
//             style={{
//               backgroundColor: introColumnSection.backgroundColor || undefined,
//               color: introColumnSection.textColor || undefined,
//             }}
//           >
//             <div className="row" data-api-key="content">
//               {introLogo && (
//                 <picture className="logo">
//                   <img
//                     src={introLogo}
//                     width={introColumnSection.logoWidth || "58"}
//                     height={introColumnSection.logoHeight || "64"}
//                     loading="lazy"
//                     alt={
//                       introColumnSection.logoAlt || "Goldfingers aesthetic logo"
//                     }
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}
//               <div className="item">
//                 <div
//                   className={`${introColumnSection.maxWidth || "mw-80"} text-${
//                     introColumnSection.contentAlignment || "center"
//                   }`}
//                 >
//                   {introColumnSection.heading && (
//                     <h2
//                       style={{
//                         color: introColumnSection.headingColor || undefined,
//                       }}
//                     >
//                       {renderRichText(introColumnSection.heading)}
//                     </h2>
//                   )}
//                   {renderRichText(introColumnSection.content)}
//                   {introColumnSection.ctaButton?.show && (
//                     <p>
//                       <a
//                         href={introColumnSection.ctaButton.url || "#"}
//                         className={
//                           introColumnSection.ctaButton.className || "btn"
//                         }
//                         style={{
//                           backgroundColor:
//                             introColumnSection.ctaButton.backgroundColor ||
//                             undefined,
//                           color:
//                             introColumnSection.ctaButton.textColor || undefined,
//                         }}
//                       >
//                         {introColumnSection.ctaButton.text || "Learn More"}
//                       </a>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "halfImageSection1":
//         if (!halfImageSection1?.show) return null;
//         const halfImg1 = getResponsiveImageUrls(halfImageSection1?.image);

//         return (
//           <div
//             className={
//               halfImageSection1.moduleClass ||
//               "mod_half_image viewport half-image container"
//             }
//             data-s3-module
//             key="halfImageSection1"
//             style={{
//               backgroundColor: halfImageSection1.backgroundColor || undefined,
//               color: halfImageSection1.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row half-image-row ${
//                 halfImageSection1.marginTop || "mt-0"
//               }`}
//             >
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImg1.mobile}, ${halfImg1.mobile} 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImg1.tablet}, ${halfImg1.tablet} 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImg1.desktop}, ${halfImg1.desktop} 2x`}
//                   />
//                   <source
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={halfImg1.large}
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src={halfImg1.large}
//                     loading="lazy"
//                     data-lazyload="img"
//                     width="1832"
//                     height="1824"
//                     alt={halfImg1.alt || "pier on beach at sunset"}
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div
//                 className={`copy ${halfImageSection1.paddingClass || "padded"}`}
//               >
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     {halfImageSection1.heading && (
//                       <h2
//                         style={{
//                           color: halfImageSection1.headingColor || undefined,
//                         }}
//                       >
//                         {renderRichText(halfImageSection1.heading)}
//                       </h2>
//                     )}
//                     {renderRichText(halfImageSection1.content)}
//                     {halfImageSection1.bulletPoints &&
//                       Array.isArray(halfImageSection1.bulletPoints) && (
//                         <ul>
//                           {halfImageSection1.bulletPoints.map(
//                             (bullet: any, idx: number) => (
//                               <li key={idx}>{bullet.text}</li>
//                             )
//                           )}
//                         </ul>
//                       )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "boxGridSection1":
//         if (!boxGridSection1?.show) return null;

//         return (
//           <div
//             className={
//               boxGridSection1.moduleClass || "mod_box_grid viewport container"
//             }
//             data-s3-module
//             key="boxGridSection1"
//             style={{
//               backgroundColor: boxGridSection1.backgroundColor || undefined,
//               color: boxGridSection1.textColor || undefined,
//             }}
//           >
//             <div className="row">
//               <div className="boxes">
//                 <div
//                   className={`box wow ${
//                     boxGridSection1.animationClass || "fadeInUp"
//                   }`}
//                 >
//                   {boxGridSection1.heading && (
//                     <h2
//                       style={{
//                         color: boxGridSection1.headingColor || undefined,
//                       }}
//                     >
//                       {renderRichText(boxGridSection1.heading)}
//                     </h2>
//                   )}
//                   {renderRichText(boxGridSection1.content)}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "goldfingersWay":
//         if (!goldfingersWaySection?.show) return null;

//         return (
//           <div
//             className={
//               goldfingersWaySection.moduleClass ||
//               "mod_column viewport container"
//             }
//             data-s3-module
//             key="goldfingersWay"
//             style={{
//               backgroundColor:
//                 goldfingersWaySection.backgroundColor || undefined,
//               color: goldfingersWaySection.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row ${goldfingersWaySection.marginTop || "mt-30"} ${
//                 goldfingersWaySection.paddingBottom || "pb-20"
//               }`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 {goldfingersWaySection.heading && (
//                   <h2
//                     className={`text-${
//                       goldfingersWaySection.headingAlignment || "center"
//                     }`}
//                     style={{
//                       color: goldfingersWaySection.headingColor || undefined,
//                     }}
//                   >
//                     {renderRichText(goldfingersWaySection.heading)}
//                   </h2>
//                 )}
//                 {renderRichText(goldfingersWaySection.introContent)}
//                 {goldfingersWaySection.servicesList &&
//                   Array.isArray(goldfingersWaySection.servicesList) && (
//                     <ul className="columns">
//                       {goldfingersWaySection.servicesList.map(
//                         (service: any, idx: number) => (
//                           <li key={idx}>
//                             {service.serviceUrl ? (
//                               <a href={service.serviceUrl}>
//                                 <strong>{service.serviceName}</strong>
//                               </a>
//                             ) : (
//                               <strong>{service.serviceName}</strong>
//                             )}
//                             {service.description && `: ${service.description}`}
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   )}
//                 {renderRichText(goldfingersWaySection.closingContent)}
//               </div>
//             </div>
//           </div>
//         );

//       case "nonSurgical":
//         if (!nonSurgicalSection?.show) return null;
//         const nsMedia = getResponsiveImageUrls(nonSurgicalSection?.mediaImage);
//         const nsMediaClass =
//           nonSurgicalSection.mediaPosition === "left"
//             ? "media-left"
//             : "media-right";

//         return (
//           <div
//             className={
//               nonSurgicalSection.moduleClass ||
//               "mod_column viewport container has-media"
//             }
//             data-s3-module
//             key="nonSurgical"
//             style={{
//               backgroundColor: nonSurgicalSection.backgroundColor || undefined,
//               color: nonSurgicalSection.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row ${
//                 nonSurgicalSection.marginBottom || "mb-30"
//               } ${nsMediaClass}`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 {nonSurgicalSection.heading && (
//                   <h2
//                     style={{
//                       color: nonSurgicalSection.headingColor || undefined,
//                     }}
//                   >
//                     {renderRichText(nonSurgicalSection.heading)}
//                   </h2>
//                 )}
//                 {renderRichText(nonSurgicalSection.content)}
//               </div>
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${nsMedia.mobile}, ${nsMedia.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${nsMedia.tablet}, ${nsMedia.tablet} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={nsMedia.desktop}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={nsMedia.desktop}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="904"
//                   height="1062"
//                   alt={nsMedia.alt || "boardwalk and palm trees on the beach"}
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         );

//       case "goldfingersStoryBanner":
//         if (!goldfingersStoryBanner?.show) return null;
//         const gfStoryBg = getResponsiveImageUrls(
//           goldfingersStoryBanner?.backgroundImage
//         );

//         return (
//           <div
//             className={
//               goldfingersStoryBanner.moduleClass ||
//               "mod_banner dark hide-divider viewport"
//             }
//             data-s3-module
//             key="goldfingersStoryBanner"
//             style={{
//               backgroundColor:
//                 goldfingersStoryBanner.backgroundColor || undefined,
//               color: goldfingersStoryBanner.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row wow ${
//                 goldfingersStoryBanner.animationClass || "fadeInUp"
//               }`}
//             >
//               <div className="content" data-api-key="top_content">
//                 <h2
//                   className={`text-${
//                     goldfingersStoryBanner.headingAlignment || "center"
//                   }`}
//                   style={{
//                     color: goldfingersStoryBanner.headingColor || undefined,
//                   }}
//                 >
//                   {goldfingersStoryBanner.heading ||
//                     "The Goldfingers Aesthetics story"}
//                 </h2>
//                 {goldfingersStoryBanner.columns &&
//                   Array.isArray(goldfingersStoryBanner.columns) && (
//                     <div
//                       className={
//                         goldfingersStoryBanner.columnLayout || "columns-three"
//                       }
//                     >
//                       {goldfingersStoryBanner.columns.map(
//                         (col: any, idx: number) => (
//                           <div key={idx}>{renderRichText(col.content)}</div>
//                         )
//                       )}
//                     </div>
//                   )}
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${gfStoryBg.mobile}, ${gfStoryBg.mobile} 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${gfStoryBg.tablet}, ${gfStoryBg.tablet} 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${gfStoryBg.desktop}, ${gfStoryBg.desktop} 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={gfStoryBg.large}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={gfStoryBg.large}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={gfStoryBg.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "twoColumn":
//         if (!twoColumnSection?.show) return null;

//         return (
//           <div
//             className={
//               twoColumnSection.moduleClass ||
//               "mod_columns_two viewport container"
//             }
//             data-s3-module
//             key="twoColumn"
//             style={{
//               backgroundColor: twoColumnSection.backgroundColor || undefined,
//               color: twoColumnSection.textColor || undefined,
//             }}
//           >
//             <div className="row">
//               {twoColumnSection.columns &&
//                 Array.isArray(twoColumnSection.columns) && (
//                   <div
//                     className={`content ${
//                       twoColumnSection.verticalAlign ? "vertical-align" : ""
//                     }`}
//                   >
//                     {twoColumnSection.columns.map((col: any, idx: number) => (
//                       <div
//                         key={idx}
//                         className={`item wow ${col.animationClass || ""}`}
//                         data-api-key={
//                           idx === 0 ? "content_left" : "content_right"
//                         }
//                       >
//                         {renderRichText(col.content)}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//             </div>
//           </div>
//         );

//       case "ctaGeneral":
//         if (!ctaGeneralSection?.show) return null;

//         return (
//           <div
//             className={
//               ctaGeneralSection.moduleClass ||
//               "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0"
//             }
//             data-s3-module
//             key="ctaGeneral"
//             style={{
//               backgroundColor: ctaGeneralSection.backgroundColor || undefined,
//               color: ctaGeneralSection.textColor || undefined,
//             }}
//           >
//             <div className="row">
//               <div className="text">
//                 <h2
//                   style={{
//                     color: ctaGeneralSection.headingColor || undefined,
//                   }}
//                 >
//                   {ctaGeneralSection.headingLink ? (
//                     <a href={ctaGeneralSection.headingLink}>
//                       {ctaGeneralSection.heading || "Schedule a Consultation"}
//                     </a>
//                   ) : (
//                     ctaGeneralSection.heading || "Schedule a Consultation"
//                   )}
//                 </h2>
//                 {ctaGeneralSection.ctaButton && (
//                   <a
//                     href={ctaGeneralSection.ctaButton.url || "#"}
//                     className={
//                       ctaGeneralSection.ctaButton.className || "btn white"
//                     }
//                     style={{
//                       backgroundColor:
//                         ctaGeneralSection.ctaButton.backgroundColor ||
//                         undefined,
//                       color: ctaGeneralSection.ctaButton.textColor || undefined,
//                     }}
//                   >
//                     {ctaGeneralSection.ctaButton.text || "Book an Appointment"}
//                   </a>
//                 )}
//               </div>
//               <div className="media"></div>
//             </div>
//           </div>
//         );

//       case "plasticSurgery":
//         if (!plasticSurgerySection?.show) return null;

//         return (
//           <div
//             className={
//               plasticSurgerySection.moduleClass ||
//               "mod_column viewport container"
//             }
//             data-s3-module
//             key="plasticSurgery"
//             style={{
//               backgroundColor:
//                 plasticSurgerySection.backgroundColor || undefined,
//               color: plasticSurgerySection.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row ${plasticSurgerySection.marginTop || "mt-30"} ${
//                 plasticSurgerySection.marginBottom || "mb-30"
//               }`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 <h2
//                   className={`text-${
//                     plasticSurgerySection.headingAlignment || "center"
//                   }`}
//                   style={{
//                     color: plasticSurgerySection.headingColor || undefined,
//                   }}
//                 >
//                   {plasticSurgerySection.heading || "Plastic Surgery"}
//                 </h2>
//                 {renderRichText(plasticSurgerySection.introContent)}
//                 {plasticSurgerySection.servicesList &&
//                   Array.isArray(plasticSurgerySection.servicesList) && (
//                     <ul className="columns">
//                       {plasticSurgerySection.servicesList.map(
//                         (service: any, idx: number) => (
//                           <li key={idx}>
//                             {service.serviceUrl ? (
//                               <a href={service.serviceUrl}>
//                                 <strong>{service.serviceName}</strong>
//                               </a>
//                             ) : (
//                               <strong>{service.serviceName}</strong>
//                             )}
//                             {service.description && `: ${service.description}`}
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   )}
//               </div>
//             </div>
//           </div>
//         );

//       case "boxGridSection2":
//         if (!boxGridSection2?.show) return null;
//         const box2Bg = getResponsiveImageUrls(boxGridSection2?.backgroundImage);

//         return (
//           <div
//             className={
//               boxGridSection2.moduleClass || "mod_box_grid viewport container"
//             }
//             data-s3-module
//             key="boxGridSection2"
//             style={{
//               backgroundColor: boxGridSection2.backgroundColor || undefined,
//               color: boxGridSection2.textColor || undefined,
//             }}
//           >
//             <div className="row">
//               <div className="boxes">
//                 <div
//                   className={`box wow ${
//                     boxGridSection2.animationClass || "fadeInUp"
//                   }`}
//                 >
//                   <h2
//                     style={{
//                       color: boxGridSection2.headingColor || undefined,
//                     }}
//                   >
//                     {boxGridSection2.heading || "Skincare services"}
//                   </h2>
//                   {renderRichText(boxGridSection2.content)}
//                 </div>
//               </div>
//             </div>
//             {box2Bg.large && (
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${box2Bg.mobile}, ${box2Bg.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${box2Bg.tablet}, ${box2Bg.tablet} 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${box2Bg.desktop}, ${box2Bg.desktop} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={box2Bg.large}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={box2Bg.large}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="2200"
//                   height="979"
//                   alt={box2Bg.alt || "Background media"}
//                   draggable="false"
//                 />
//               </picture>
//             )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <main
//       id="main"
//       style={{
//         fontFamily: globalStyles?.fontFamily || undefined,
//         color: globalStyles?.textColor || undefined,
//       }}
//     >
//       {accessibilitySettings?.skipToContent && (
//         <a href="#content" className="sr-only focus:not-sr-only">
//           Skip to content
//         </a>
//       )}
//       {sectionOrder && Array.isArray(sectionOrder) ? (
//         sectionOrder.map((section: any, idx: number) =>
//           renderSection(section.section)
//         )
//       ) : (
//         <>
//           {renderSection("hero")}
//           {renderSection("introColumn")}
//           {renderSection("halfImageSection1")}
//           {renderSection("boxGridSection1")}
//           {renderSection("goldfingersWay")}
//           {renderSection("nonSurgical")}
//           {renderSection("goldfingersStoryBanner")}
//           {renderSection("twoColumn")}
//           {renderSection("ctaGeneral")}
//           {renderSection("plasticSurgery")}
//           {renderSection("boxGridSection2")}
//         </>
//       )}
//     </main>
//   );
// };

// export default ClearwaterPageComponent;

"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/locations/fetchClearwaterPageData";

interface ClearwaterPageComponentProps {
  data: any;
}

const ClearwaterPageComponent: React.FC<ClearwaterPageComponentProps> = ({
  data,
}) => {
  if (!data) {
    return <div className="text-center p-4">No data available</div>;
  }

  const {
    heroSection,
    introColumnSection,
    halfImageSection1,
    boxGridSection1,
    goldfingersWaySection,
    nonSurgicalSection,
    goldfingersStoryBanner,
    twoColumnSection,
    ctaGeneralSection,
    plasticSurgerySection,
    boxGridSection2,
    sectionOrder,
    globalStyles,
    accessibilitySettings,
  } = data;

  const renderRichText = (content: any) => {
    if (!content) return null;
    const html = lexicalToHtml(content);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const renderSection = (sectionKey: string) => {
    switch (sectionKey) {
      case "hero":
        if (!heroSection?.show) return null;
        const heroBackground = getResponsiveImageUrls(
          heroSection?.backgroundImage
        );
        const heroMedia = getResponsiveImageUrls(heroSection?.mediaImage);

        return (
          <div
            className={
              heroSection.moduleClass || "mod_hero banner mobile-stack"
            }
            data-s3-module
            key="hero"
            style={{
              backgroundColor: heroSection.backgroundColor || undefined,
            }}
          >
            <div className="wrapper">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackground.mobile}, ${heroBackground.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackground.tablet}, ${heroBackground.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackground.desktop}, ${heroBackground.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={heroBackground.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={heroBackground.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="1994"
                  height="1206"
                  alt={heroBackground.alt || "Background Texture"}
                  draggable="false"
                />
              </picture>
              <div className="row">
                <div className="inner">
                  {heroSection.breadcrumbs &&
                    heroSection.breadcrumbs.length > 0 && (
                      <ul className="partial_breadcrumb" data-s3-partial>
                        {heroSection.breadcrumbs.map(
                          (crumb: any, idx: number) => (
                            <li key={idx}>
                              <a
                                href={crumb.url}
                                role="link"
                                aria-label={crumb.ariaLabel}
                              >
                                {crumb.label}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  <h1
                    style={{
                      color: heroSection.titleColor || undefined,
                      fontSize: heroSection.titleFontSize || undefined,
                    }}
                  >
                    {heroSection.title || "Clearwater"}
                  </h1>
                </div>
              </div>
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
                    data-lazyload-srcset={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
                    data-lazyload-srcset={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
                    data-lazyload-srcset={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
                  />
                  <source
                    srcSet={heroMedia.large}
                    data-lazyload-srcset={heroMedia.large}
                  />
                  <img
                    src={heroMedia.large}
                    width="1920"
                    height="1206"
                    alt={heroMedia.alt || "Beach in Clearwater, FL"}
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "introColumn":
        if (!introColumnSection?.show) return null;
        const introLogo = getImageUrl(introColumnSection?.logo);

        return (
          <div
            className={
              introColumnSection.moduleClass || "mod_column viewport container"
            }
            data-s3-module
            key="introColumn"
            style={{
              backgroundColor: introColumnSection.backgroundColor || undefined,
              color: introColumnSection.textColor || undefined,
            }}
          >
            <div className="row" data-api-key="content">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width={introColumnSection.logoWidth || "58"}
                    height={introColumnSection.logoHeight || "64"}
                    loading="lazy"
                    alt={
                      introColumnSection.logoAlt || "Goldfingers aesthetic logo"
                    }
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="item">
                <div
                  className={`${introColumnSection.maxWidth || "mw-80"} text-${
                    introColumnSection.contentAlignment || "center"
                  }`}
                >
                  {introColumnSection.heading && (
                    <h2
                      style={{
                        color: introColumnSection.headingColor || undefined,
                      }}
                    >
                      {renderRichText(introColumnSection.heading)}
                    </h2>
                  )}
                  {renderRichText(introColumnSection.content)}
                  {introColumnSection.ctaButton?.show && (
                    <p>
                      <a
                        href={introColumnSection.ctaButton.url || "#"}
                        className={
                          introColumnSection.ctaButton.className || "btn"
                        }
                        style={{
                          backgroundColor:
                            introColumnSection.ctaButton.backgroundColor ||
                            undefined,
                          color:
                            introColumnSection.ctaButton.textColor || undefined,
                        }}
                      >
                        {introColumnSection.ctaButton.text || "Learn More"}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case "halfImageSection1":
        if (!halfImageSection1?.show) return null;
        const halfImg1 = getResponsiveImageUrls(halfImageSection1?.image);

        return (
          <div
            className={
              halfImageSection1.moduleClass ||
              "mod_half_image viewport half-image container"
            }
            data-s3-module
            key="halfImageSection1"
            style={{
              backgroundColor: halfImageSection1.backgroundColor || undefined,
              color: halfImageSection1.textColor || undefined,
            }}
          >
            <div
              className={`row half-image-row ${
                halfImageSection1.marginTop || "mt-0"
              }`}
            >
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg1.mobile}, ${halfImg1.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg1.tablet}, ${halfImg1.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg1.desktop}, ${halfImg1.desktop} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={halfImg1.large}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={halfImg1.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="1832"
                    height="1824"
                    alt={halfImg1.alt || "pier on beach at sunset"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div
                className={`copy ${halfImageSection1.paddingClass || "padded"}`}
              >
                <div className="inner">
                  <div className="content" data-api-key="content">
                    {halfImageSection1.heading && (
                      <h2
                        style={{
                          color: halfImageSection1.headingColor || undefined,
                        }}
                      >
                        {renderRichText(halfImageSection1.heading)}
                      </h2>
                    )}
                    {renderRichText(halfImageSection1.content)}
                    {halfImageSection1.bulletPoints &&
                      Array.isArray(halfImageSection1.bulletPoints) && (
                        <ul>
                          {halfImageSection1.bulletPoints.map(
                            (bullet: any, idx: number) => (
                              <li key={idx}>{bullet.text}</li>
                            )
                          )}
                        </ul>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "boxGridSection1":
        if (!boxGridSection1?.show) return null;

        return (
          <div
            className={
              boxGridSection1.moduleClass || "mod_box_grid viewport container"
            }
            data-s3-module
            key="boxGridSection1"
            style={{
              backgroundColor: boxGridSection1.backgroundColor || undefined,
              color: boxGridSection1.textColor || undefined,
            }}
          >
            <div className="row">
              <div className="boxes">
                <div
                  className={`box wow ${
                    boxGridSection1.animationClass || "fadeInUp"
                  }`}
                >
                  {boxGridSection1.heading && (
                    <h2
                      style={{
                        color: boxGridSection1.headingColor || undefined,
                      }}
                    >
                      {renderRichText(boxGridSection1.heading)}
                    </h2>
                  )}
                  {renderRichText(boxGridSection1.content)}
                </div>
              </div>
            </div>
          </div>
        );

      case "goldfingersWay":
        if (!goldfingersWaySection?.show) return null;

        return (
          <div
            className={
              goldfingersWaySection.moduleClass ||
              "mod_column viewport container"
            }
            data-s3-module
            key="goldfingersWay"
            style={{
              backgroundColor:
                goldfingersWaySection.backgroundColor || undefined,
              color: goldfingersWaySection.textColor || undefined,
            }}
          >
            <div
              className={`row ${goldfingersWaySection.marginTop || "mt-30"} ${
                goldfingersWaySection.paddingBottom || "pb-20"
              }`}
              data-api-key="content"
            >
              <div className="item">
                {goldfingersWaySection.heading && (
                  <h2
                    className={`text-${
                      goldfingersWaySection.headingAlignment || "center"
                    }`}
                    style={{
                      color: goldfingersWaySection.headingColor || undefined,
                    }}
                  >
                    {renderRichText(goldfingersWaySection.heading)}
                  </h2>
                )}
                {renderRichText(goldfingersWaySection.introContent)}
                {goldfingersWaySection.servicesList &&
                  Array.isArray(goldfingersWaySection.servicesList) && (
                    <ul className="columns">
                      {goldfingersWaySection.servicesList.map(
                        (service: any, idx: number) => (
                          <li key={idx}>
                            {service.serviceUrl ? (
                              <a href={service.serviceUrl}>
                                <strong>{service.serviceName}</strong>
                              </a>
                            ) : (
                              <strong>{service.serviceName}</strong>
                            )}
                            {service.description && `: ${service.description}`}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                {renderRichText(goldfingersWaySection.closingContent)}
              </div>
            </div>
          </div>
        );

      case "nonSurgical":
        if (!nonSurgicalSection?.show) return null;
        const nsMedia = getResponsiveImageUrls(nonSurgicalSection?.mediaImage);
        const nsMediaClass =
          nonSurgicalSection.mediaPosition === "left"
            ? "media-left"
            : "media-right";

        return (
          <div
            className={
              nonSurgicalSection.moduleClass ||
              "mod_column viewport container has-media"
            }
            data-s3-module
            key="nonSurgical"
            style={{
              backgroundColor: nonSurgicalSection.backgroundColor || undefined,
              color: nonSurgicalSection.textColor || undefined,
            }}
          >
            <div
              className={`row ${
                nonSurgicalSection.marginBottom || "mb-30"
              } ${nsMediaClass}`}
              data-api-key="content"
            >
              <div className="item">
                {nonSurgicalSection.heading && (
                  <h2
                    style={{
                      color: nonSurgicalSection.headingColor || undefined,
                    }}
                  >
                    {renderRichText(nonSurgicalSection.heading)}
                  </h2>
                )}
                {renderRichText(nonSurgicalSection.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${nsMedia.mobile}, ${nsMedia.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${nsMedia.tablet}, ${nsMedia.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={nsMedia.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={nsMedia.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={nsMedia.alt || "boardwalk and palm trees on the beach"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "goldfingersStoryBanner":
        if (!goldfingersStoryBanner?.show) return null;
        const gfStoryBg = getResponsiveImageUrls(
          goldfingersStoryBanner?.backgroundImage
        );

        return (
          <div
            className={
              goldfingersStoryBanner.moduleClass ||
              "mod_banner dark hide-divider viewport"
            }
            data-s3-module
            key="goldfingersStoryBanner"
            style={{
              backgroundColor:
                goldfingersStoryBanner.backgroundColor || undefined,
              color: goldfingersStoryBanner.textColor || undefined,
            }}
          >
            <div
              className={`row wow ${
                goldfingersStoryBanner.animationClass || "fadeInUp"
              }`}
            >
              <div className="content" data-api-key="top_content">
                <h2
                  className={`text-${
                    goldfingersStoryBanner.headingAlignment || "center"
                  }`}
                  style={{
                    color: goldfingersStoryBanner.headingColor || undefined,
                  }}
                >
                  {goldfingersStoryBanner.heading ||
                    "The Goldfingers Aesthetics story"}
                </h2>
                {goldfingersStoryBanner.columns &&
                  Array.isArray(goldfingersStoryBanner.columns) && (
                    <div
                      className={
                        goldfingersStoryBanner.columnLayout || "columns-three"
                      }
                    >
                      {goldfingersStoryBanner.columns.map(
                        (col: any, idx: number) => (
                          <div key={idx}>{renderRichText(col.content)}</div>
                        )
                      )}
                    </div>
                  )}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfStoryBg.mobile}, ${gfStoryBg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfStoryBg.tablet}, ${gfStoryBg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfStoryBg.desktop}, ${gfStoryBg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={gfStoryBg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={gfStoryBg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={gfStoryBg.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "twoColumn":
        if (!twoColumnSection?.show) return null;

        return (
          <div
            className={
              twoColumnSection.moduleClass ||
              "mod_columns_two viewport container"
            }
            data-s3-module
            key="twoColumn"
            style={{
              backgroundColor: twoColumnSection.backgroundColor || undefined,
              color: twoColumnSection.textColor || undefined,
            }}
          >
            <div className="row">
              {twoColumnSection.columns &&
                Array.isArray(twoColumnSection.columns) && (
                  <div
                    className={`content ${
                      twoColumnSection.verticalAlign ? "vertical-align" : ""
                    }`}
                  >
                    {twoColumnSection.columns.map((col: any, idx: number) => (
                      <div
                        key={idx}
                        className={`item wow ${col.animationClass || ""}`}
                        data-api-key={
                          idx === 0 ? "content_left" : "content_right"
                        }
                      >
                        {renderRichText(col.content)}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        );

      case "ctaGeneral":
        if (!ctaGeneralSection?.show) return null;

        return (
          <div
            className={
              ctaGeneralSection.moduleClass ||
              "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0"
            }
            data-s3-module
            key="ctaGeneral"
            style={{
              backgroundColor: ctaGeneralSection.backgroundColor || undefined,
              color: ctaGeneralSection.textColor || undefined,
            }}
          >
            <div className="row">
              <div className="text">
                <h2
                  style={{
                    color: ctaGeneralSection.headingColor || undefined,
                  }}
                >
                  {ctaGeneralSection.headingLink ? (
                    <a href={ctaGeneralSection.headingLink}>
                      {ctaGeneralSection.heading || "Schedule a Consultation"}
                    </a>
                  ) : (
                    ctaGeneralSection.heading || "Schedule a Consultation"
                  )}
                </h2>
                {ctaGeneralSection.ctaButton && (
                  <a
                    href={ctaGeneralSection.ctaButton.url || "#"}
                    className={
                      ctaGeneralSection.ctaButton.className || "btn white"
                    }
                    style={{
                      backgroundColor:
                        ctaGeneralSection.ctaButton.backgroundColor ||
                        undefined,
                      color: ctaGeneralSection.ctaButton.textColor || undefined,
                    }}
                  >
                    {ctaGeneralSection.ctaButton.text || "Book an Appointment"}
                  </a>
                )}
              </div>
              <div className="media"></div>
            </div>
          </div>
        );

      case "plasticSurgery":
        if (!plasticSurgerySection?.show) return null;

        return (
          <div
            className={
              plasticSurgerySection.moduleClass ||
              "mod_column viewport container"
            }
            data-s3-module
            key="plasticSurgery"
            style={{
              backgroundColor:
                plasticSurgerySection.backgroundColor || undefined,
              color: plasticSurgerySection.textColor || undefined,
            }}
          >
            <div
              className={`row ${plasticSurgerySection.marginTop || "mt-30"} ${
                plasticSurgerySection.marginBottom || "mb-30"
              }`}
              data-api-key="content"
            >
              <div className="item">
                <h2
                  className={`text-${
                    plasticSurgerySection.headingAlignment || "center"
                  }`}
                  style={{
                    color: plasticSurgerySection.headingColor || undefined,
                  }}
                >
                  {plasticSurgerySection.heading || "Plastic Surgery"}
                </h2>
                {renderRichText(plasticSurgerySection.introContent)}
                {plasticSurgerySection.servicesList &&
                  Array.isArray(plasticSurgerySection.servicesList) && (
                    <ul className="columns">
                      {plasticSurgerySection.servicesList.map(
                        (service: any, idx: number) => (
                          <li key={idx}>
                            {service.serviceUrl ? (
                              <a href={service.serviceUrl}>
                                <strong>{service.serviceName}</strong>
                              </a>
                            ) : (
                              <strong>{service.serviceName}</strong>
                            )}
                            {service.description && `: ${service.description}`}
                          </li>
                        )
                      )}
                    </ul>
                  )}
              </div>
            </div>
          </div>
        );

      case "boxGridSection2":
        if (!boxGridSection2?.show) return null;
        const box2Bg = getResponsiveImageUrls(boxGridSection2?.backgroundImage);

        return (
          <div
            className={
              boxGridSection2.moduleClass || "mod_box_grid viewport container"
            }
            data-s3-module
            key="boxGridSection2"
            style={{
              backgroundColor: boxGridSection2.backgroundColor || undefined,
              color: boxGridSection2.textColor || undefined,
            }}
          >
            <div className="row">
              <div className="boxes">
                <div
                  className={`box wow ${
                    boxGridSection2.animationClass || "fadeInUp"
                  }`}
                >
                  <h2
                    style={{
                      color: boxGridSection2.headingColor || undefined,
                    }}
                  >
                    {boxGridSection2.heading || "Skincare services"}
                  </h2>
                  {renderRichText(boxGridSection2.content)}
                </div>
              </div>
            </div>
            {box2Bg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${box2Bg.mobile}, ${box2Bg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${box2Bg.tablet}, ${box2Bg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${box2Bg.desktop}, ${box2Bg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={box2Bg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={box2Bg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="979"
                  alt={box2Bg.alt || "Background media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main
      id="main"
      style={{
        fontFamily: globalStyles?.fontFamily || undefined,
        color: globalStyles?.textColor || undefined,
      }}
    >
      {accessibilitySettings?.skipToContent && (
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
      )}
      {sectionOrder && Array.isArray(sectionOrder) ? (
        sectionOrder.map((section: any, idx: number) =>
          renderSection(section.section)
        )
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("introColumn")}
          {renderSection("halfImageSection1")}
          {renderSection("boxGridSection1")}
          {renderSection("goldfingersWay")}
          {renderSection("nonSurgical")}
          {renderSection("goldfingersStoryBanner")}
          {renderSection("twoColumn")}
          {renderSection("ctaGeneral")}
          {renderSection("plasticSurgery")}
          {renderSection("boxGridSection2")}
        </>
      )}
    </main>
  );
};

export default ClearwaterPageComponent;