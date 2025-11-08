// // import React from "react";

// // const BreastPage: React.FC = () => {
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
// //                     href="/plastic-surgery/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Plastic Surgery
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="/plastic-surgery/breast/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Breast
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>Breast</h1>
// //             </div>
// //           </div>
// //           <div className="media">
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1920"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="Doctor showing breast implant to patient"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Index Static Module */}
// //       <div className="mod_index_static mod_index container" data-s3-module>
// //         <div className="row subcontent">
// //           <div className="inner">
// //             <div className="item">
// //               <a
// //                 href="/plastic-surgery/breast-augmentation/"
// //                 className="media-btn"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       media="(max-width:1400px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=2100 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=1920"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=1920"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="1920"
// //                       height="1206"
// //                       alt="Breast Media"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Breast Augmentation</span>
// //                   </div>
// //                 </div>
// //               </a>
// //               <div className="copy">
// //                 <a
// //                   href="/plastic-surgery/breast-augmentation/"
// //                   className="title"
// //                 >
// //                   <h2>Breast Augmentation</h2>
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <a href="/plastic-surgery/breast-lift/" className="media-btn">
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       media="(max-width:1400px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=2100 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=1920"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=1920"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="1920"
// //                       height="1206"
// //                       alt="Breast Lift Media"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Breast Lift</span>
// //                   </div>
// //                 </div>
// //               </a>
// //               <div className="copy">
// //                 <a href="/plastic-surgery/breast-lift/" className="title">
// //                   <h2>Breast Lift</h2>
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <a
// //                 href="/plastic-surgery/breast-reduction/"
// //                 className="media-btn"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       media="(max-width:1400px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=2100 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=1920"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=1920"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="1920"
// //                       height="1206"
// //                       alt="Breast Reduction Media"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Breast Reduction</span>
// //                   </div>
// //                 </div>
// //               </a>
// //               <div className="copy">
// //                 <a href="/plastic-surgery/breast-reduction/" className="title">
// //                   <h2>Breast Reduction</h2>
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <a href="/plastic-surgery/breast-revision/" className="media-btn">
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       media="(max-width:1400px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=2100 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=1920"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=1920"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="1920"
// //                       height="1206"
// //                       alt="Breast Revision Media"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Breast Revision</span>
// //                   </div>
// //                 </div>
// //               </a>
// //               <div className="copy">
// //                 <a href="/plastic-surgery/breast-revision/" className="title">
// //                   <h2>Breast Revision</h2>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default BreastPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchBreastPageData,
//   getResponsiveImageUrls,
// } from "@/lib/api/plasticSurgery/fetchBreastPageComponent";

// interface BreastData {
//   heroSection: any;
//   indexStaticSection: any;
// }

// const BreastPage: React.FC = () => {
//   const [pageData, setPageData] = useState<BreastData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchBreastPageData("breast-page-component");
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching Breast page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const { heroSection, indexStaticSection } = pageData;

//   const getResponsiveSrcSet = (images: any, width: number) => {
//     const baseUrl = getResponsiveImageUrls(images);
//     return `${baseUrl.large}?auto=format,compress&w=${width}, ${
//       baseUrl.large
//     }?auto=format,compress&w=${Math.floor(width * 1.5)} 2x`;
//   };

//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Hero Module */}
//       {heroSection?.show && (
//         <div className="mod_hero banner mobile-stack" data-s3-module>
//           <div className="wrapper">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   heroSection.backgroundImage,
//                   420
//                 )}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   heroSection.backgroundImage,
//                   800
//                 )}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   heroSection.backgroundImage,
//                   1400
//                 )}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   getResponsiveImageUrls(heroSection.backgroundImage).large
//                 }?auto=format,compress&w=1994`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${
//                   getResponsiveImageUrls(heroSection.backgroundImage).large
//                 }?auto=format,compress&w=1994`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1994"
//                 height="1206"
//                 alt={heroSection.backgroundImage?.alt || "Background Texture"}
//                 draggable="false"
//               />
//             </picture>
//             <div className="row">
//               <div className="inner">
//                 <ul className="partial_breadcrumb" data-s3-partial>
//                   {heroSection.breadcrumbs?.map((crumb: any, index: number) => (
//                     <li key={index}>
//                       <a
//                         href={crumb.url}
//                         role="link"
//                         aria-label={
//                           crumb.ariaLabel ||
//                           "Breadcrumbs to help navigate the user"
//                         }
//                       >
//                         {crumb.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//                 <h1>{heroSection.title}</h1>
//               </div>
//             </div>
//             <div className="media">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={getResponsiveSrcSet(heroSection.mediaImage, 420)}
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     heroSection.mediaImage,
//                     420
//                   )}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={getResponsiveSrcSet(heroSection.mediaImage, 800)}
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     heroSection.mediaImage,
//                     800
//                   )}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={getResponsiveSrcSet(heroSection.mediaImage, 1400)}
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     heroSection.mediaImage,
//                     1400
//                   )}
//                 />
//                 <source
//                   srcSet={`${
//                     getResponsiveImageUrls(heroSection.mediaImage).large
//                   }?auto=format,compress&w=1920`}
//                   data-lazyload-srcset={`${
//                     getResponsiveImageUrls(heroSection.mediaImage).large
//                   }?auto=format,compress&w=1920`}
//                 />
//                 <img
//                   src={`${
//                     getResponsiveImageUrls(heroSection.mediaImage).large
//                   }?auto=format,compress&w=1920`}
//                   width="1920"
//                   height="1206"
//                   alt={
//                     heroSection.mediaImage?.alt ||
//                     "Doctor showing breast implant to patient"
//                   }
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Index Static Module */}
//       {indexStaticSection?.show && (
//         <div className="mod_index_static mod_index container" data-s3-module>
//           <div className="row subcontent">
//             <div className="inner">
//               {indexStaticSection.items?.map((item: any, index: number) => (
//                 <div key={index} className="item">
//                   <a href={item.url} className="media-btn">
//                     <div className="media">
//                       <picture className="background">
//                         <source
//                           media="(max-width:420px)"
//                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                           data-lazyload-srcset={getResponsiveSrcSet(
//                             item.image,
//                             420
//                           )}
//                         />
//                         <source
//                           media="(max-width:800px)"
//                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                           data-lazyload-srcset={getResponsiveSrcSet(
//                             item.image,
//                             800
//                           )}
//                         />
//                         <source
//                           media="(max-width:1400px)"
//                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                           data-lazyload-srcset={getResponsiveSrcSet(
//                             item.image,
//                             1400
//                           )}
//                         />
//                         <source
//                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                           data-lazyload-srcset={`${
//                             getResponsiveImageUrls(item.image).large ||
//                             getResponsiveImageUrls(item.image).desktop
//                           }?auto=format,compress&w=1920`}
//                         />
//                         <img
//                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                           data-lazyload-src={`${
//                             getResponsiveImageUrls(item.image).large ||
//                             getResponsiveImageUrls(item.image).desktop
//                           }?auto=format,compress&w=1920`}
//                           loading="lazy"
//                           data-lazyload="img"
//                           width="1920"
//                           height="1206"
//                           alt={item.image?.alt || "Breast Media"}
//                           draggable="false"
//                         />
//                       </picture>
//                       <div className="content">
//                         <span>{item.overlayText || item.title}</span>
//                       </div>
//                     </div>
//                   </a>
//                   <div className="copy">
//                     <a href={item.url} className="title">
//                       <h2>{item.title}</h2>
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default BreastPage;

"use client";

import React from "react";
import { getResponsiveImageUrls } from "@/lib/api/plasticSurgery/fetchBreastPageComponent";

interface BreastData {
  heroSection: {
    show: boolean;
    title: string;
    backgroundImage: any;
    mediaImage: any;
    breadcrumbs: Array<{
      label: string;
      url: string;
      ariaLabel?: string;
    }>;
  };
  indexStaticSection: {
    show: boolean;
    items: Array<{
      url: string;
      title: string;
      overlayText?: string;
      image: any;
    }>;
  };
}

interface BreastPageProps {
  data: BreastData | null;
}

const BreastPage: React.FC<BreastPageProps> = ({ data }) => {
  if (!data) {
    return null; // Error handled in server component
  }

  const { heroSection, indexStaticSection } = data;

  const getResponsiveSrcSet = (images: any, width: number) => {
    const baseUrl = getResponsiveImageUrls(images);
    return `${baseUrl.large}?auto=format,compress&w=${width}, ${
      baseUrl.large
    }?auto=format,compress&w=${Math.floor(width * 1.5)} 2x`;
  };

  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      {heroSection?.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module>
          <div className="wrapper">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  heroSection.backgroundImage,
                  420
                )}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  heroSection.backgroundImage,
                  800
                )}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  heroSection.backgroundImage,
                  1400
                )}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(heroSection.backgroundImage).large
                }?auto=format,compress&w=1994`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${
                  getResponsiveImageUrls(heroSection.backgroundImage).large
                }?auto=format,compress&w=1994`}
                loading="lazy"
                data-lazyload="img"
                width="1994"
                height="1206"
                alt={heroSection.backgroundImage?.alt || "Background Texture"}
                draggable="false"
              />
            </picture>
            <div className="row">
              <div className="inner">
                <ul className="partial_breadcrumb" data-s3-partial>
                  {heroSection.breadcrumbs?.map((crumb: any, index: number) => (
                    <li key={index}>
                      <a
                        href={crumb.url}
                        role="link"
                        aria-label={
                          crumb.ariaLabel ||
                          "Breadcrumbs to help navigate the user"
                        }
                      >
                        {crumb.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <h1>{heroSection.title}</h1>
              </div>
            </div>
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={getResponsiveSrcSet(heroSection.mediaImage, 420)}
                  data-lazyload-srcset={getResponsiveSrcSet(
                    heroSection.mediaImage,
                    420
                  )}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={getResponsiveSrcSet(heroSection.mediaImage, 800)}
                  data-lazyload-srcset={getResponsiveSrcSet(
                    heroSection.mediaImage,
                    800
                  )}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={getResponsiveSrcSet(heroSection.mediaImage, 1400)}
                  data-lazyload-srcset={getResponsiveSrcSet(
                    heroSection.mediaImage,
                    1400
                  )}
                />
                <source
                  srcSet={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1920`}
                />
                <img
                  src={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1920`}
                  width="1920"
                  height="1206"
                  alt={
                    heroSection.mediaImage?.alt ||
                    "Doctor showing breast implant to patient"
                  }
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Index Static Module */}
      {indexStaticSection?.show && (
        <div className="mod_index_static mod_index container" data-s3-module>
          <div className="row subcontent">
            <div className="inner">
              {indexStaticSection.items?.map((item: any, index: number) => (
                <div key={index} className="item">
                  <a href={item.url} className="media-btn">
                    <div className="media">
                      <picture className="background">
                        <source
                          media="(max-width:420px)"
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={getResponsiveSrcSet(
                            item.image,
                            420
                          )}
                        />
                        <source
                          media="(max-width:800px)"
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={getResponsiveSrcSet(
                            item.image,
                            800
                          )}
                        />
                        <source
                          media="(max-width:1400px)"
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={getResponsiveSrcSet(
                            item.image,
                            1400
                          )}
                        />
                        <source
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={`${
                            getResponsiveImageUrls(item.image).large ||
                            getResponsiveImageUrls(item.image).desktop
                          }?auto=format,compress&w=1920`}
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-src={`${
                            getResponsiveImageUrls(item.image).large ||
                            getResponsiveImageUrls(item.image).desktop
                          }?auto=format,compress&w=1920`}
                          loading="lazy"
                          data-lazyload="img"
                          width="1920"
                          height="1206"
                          alt={item.image?.alt || "Breast Media"}
                          draggable="false"
                        />
                      </picture>
                      <div className="content">
                        <span>{item.overlayText || item.title}</span>
                      </div>
                    </div>
                  </a>
                  <div className="copy">
                    <a href={item.url} className="title">
                      <h2>{item.title}</h2>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* /Page Layout */}
    </main>
  );
};

export default BreastPage;