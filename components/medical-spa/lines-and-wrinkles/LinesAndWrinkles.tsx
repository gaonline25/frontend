// import React from "react";

// const LinesAndWrinkles: React.FC = () => {
//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Hero Module */}
//       <div className="mod_hero banner mobile-stack" data-s3-module>
//         <div className="wrapper">
//           <picture className="background">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               media="(max-width:1400px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
//               loading="lazy"
//               data-lazyload="img"
//               width="1994"
//               height="1206"
//               alt="Background Texture"
//               draggable="false"
//             />
//           </picture>
//           <div className="row">
//             <div className="inner">
//               <ul className="partial_breadcrumb" data-s3-partial>
//                 <li>
//                   <a
//                     href="/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/medical-spa/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Medical Spa
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/medical-spa/lines-and-wrinkles/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Lines And Wrinkles
//                   </a>
//                 </li>
//               </ul>
//               <h1>Lines & Wrinkles</h1>
//               <div className="text">
//                 <p>
//                   Erase the Years with Goldfingers' Expert Line & Wrinkle
//                   Treatments
//                 </p>
//                 <p>
//                   <a className="btn white" href="/contact/" role="button">
//                     Book an Appointment
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1917"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1917"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1917"
//                 width="1917"
//                 height="1206"
//                 alt="Dr Young with working with patient"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Intro Module */}
//       <div
//         className="mod_intro container viewport option-1 wide wow fadeInUp"
//         data-s3-module
//       >
//         <div className="row pb-0">
//           <picture className="logo">
//             <img
//               src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
//               width={58}
//               height={64}
//               loading="lazy"
//               alt="Goldfingers aesthetic logo"
//               draggable="false"
//               data-api-key="logo"
//             />
//           </picture>
//           <div className="inner" data-api-key="content">
//             <h2>A Refreshed, Youthful Appearance is an Injection Away</h2>
//             <p>
//               Goldfingers is proud to offer a range of injectables for lines and
//               wrinkles to help you achieve a more youthful, refreshed
//               appearance. Whether you're looking to smooth out fine lines or
//               reduce the appearance of deeper wrinkles, our Aesthetic Facial
//               Contour Specialists have a solution to help you look and feel your
//               best!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft "
//         data-s3-module
//       >
//         <div className="row half-image-row top-aligned">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="Specialist putting syringe in patient's face"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy ">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>
//                   Why Lines and Wrinkles Happen, and What You Can Do About That
//                 </h2>
//                 <p>
//                   As we age, the naturally occurring substance in our skin,
//                   known as hyaluronic acid, diminishes, leading to a loss of
//                   volume and elasticity. This can increase the likelihood of
//                   wrinkles and folds appearing. While serums and creams can help
//                   on the surface, dermal fillers work below the skin's surface
//                   to replace lost volume, resulting in long-lasting, naturally
//                   beautiful results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Before & After Feed Module */}
//       <div
//         className="mod_cta_ba_feed cta container wow fadeInUp mb-0"
//         data-s3-module
//       >
//         <div className="row">
//           <div className="text">
//             <h2 data-api-key="title">Before & After</h2>
//             <div className="patients" data-api-key="patients">
//               <div className="patient-wrap pslider" data-items="2">
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/botox/item/Ic3ghOIDRna53Jxc-CMCWg/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="301"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/botox/item/RIb1uz5DTQmUVTdB8ClD8Q/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="397"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/botox/item/eNwS3ADdQgmEG541_vQYlQ/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="778"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/botox/item/187063752/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="407"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/botox/item/187063738/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="407"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <a
//               href="/gallery/non-surgical/botox/"
//               className="btn view-more"
//               title="View before and after gallery images"
//               aria-label="View before and after gallery images"
//             >
//               View Gallery
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-7"
//         data-s3-module
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2 className="text-center">
//               <span className="small">Injectables Done Right:</span>
//               The Goldfingers Difference
//             </h2>
//             <p>
//               Discover the transformative effects of our injectable treatments
//               and let Goldfingers Aesthetics help you regain your youthful
//               radiance! Here are some reasons why we're the best choice:
//             </p>
//             <ul className="columns">
//               <li>
//                 <strong>Expertise:</strong>
//                 Our injectors are highly trained and experienced in injectable
//                 treatments, ensuring safe and effective results.
//               </li>
//               <li>
//                 <strong>Personalized Approach:</strong>
//                 We understand that each individual's facial structure and aging
//                 process are unique. Our injectors customize treatments to your
//                 specific needs, providing results that enhance your natural
//                 beauty.
//               </li>
//               <li>
//                 <strong>Top-tier Products:</strong>
//                 We use FDA-approved injectables from trusted brands like
//                 Allergan and Galderma, ensuring quality and safety.
//               </li>
//               <li>
//                 <strong>Clinical Excellence:</strong>
//                 With over 25 years of experience in aesthetics and being in the
//                 top 1% in the nation for BOTOX and Juvéderm, Goldfingers
//                 Aesthetics is a leader in the field.
//               </li>
//               <li>
//                 <strong>Comprehensive Care:</strong>
//                 Our expansive range of treatments, including dermal fillers,
//                 facial contouring, hand rejuvenation, and more, ensures you can
//                 achieve your desired results in one convenient location.
//               </li>
//               <li>
//                 <strong>State-of-the-Art Facilities:</strong>
//                 With over 24 locations and a commitment to providing advanced
//                 skincare services, Goldfingers Aesthetics is the premier medical
//                 spa in Florida.
//               </li>
//             </ul>
//             <p>
//               Contact us today for a personalized consultation and experience
//               the difference our expertise can make in your appearance.
//             </p>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="802"
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport three-boxes   container option-1 no-stacking  no-bg "
//         data-s3-module
//       >
//         <div className="row">
//           <div className="content-before">
//             <h2>Cheeks, Chin, and Jawline</h2>
//             <p>
//               A well-defined chin, jawline, and cheeks can significantly improve
//               overall facial harmony and aesthetics. Our expert injectors
//               specialize in enhancing these areas using advanced dermal fillers
//               and innovative techniques tailored to your unique facial structure
//               and goals. We take a personalized approach to treating wrinkles
//               and lines in these areas, rooted in expertise, artistry, and a
//               deep understanding of facial anatomy.
//             </p>
//           </div>
//           <div className="boxes">
//             <div className="box wow fadeInUp">
//               <h3>Cheeks</h3>
//               <p>
//                 Wrinkles and fine lines can develop on the cheeks over time,
//                 affecting overall facial expression. Using advanced dermal
//                 fillers like JUVÉDERM VOLLURE® XC and Restylane Lyft, we can
//                 gently plump and smoothen the skin, reducing the appearance of
//                 wrinkles and enhancing your cheek's natural contours.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Chin Line Refinements</h3>
//               <p>
//                 Vertical lines and wrinkles on the chin can detract from the
//                 smoothness of your lower face. Through precise injections of
//                 products like JUVÉDERM VOLUX® XC and other dermal fillers, we
//                 can soften these lines and restore a smoother, more youthful
//                 appearance to your chin area.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Jawline</h3>
//               <p>
//                 Lines and wrinkles along the jawline can contribute to the
//                 appearance of aging and sagging skin. Our skilled injectors
//                 utilize innovative techniques and fillers to target these
//                 concerns, resulting in a revitalized jawline with reduced lines
//                 and improved skin texture.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-1"
//         data-s3-module
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2 className="text-center">
//               Laugh Lines, Frown Lines,{" "}
//               <span className="block-desktop">and Everything in Between</span>
//             </h2>
//             <p className="text-center">
//               The most common types of wrinkles that we treat with injectables
//               include:
//             </p>
//             <ul className="columns">
//               <li>
//                 Dynamic wrinkles, which appear when facial muscles contract,
//                 such as when smiling, frowning, or raising your eyebrows
//               </li>
//               <li>
//                 Smile lines (nasolabial folds, parentheses lines) which run from
//                 the sides of the nose to the corners of the mouth and deepen
//                 with age
//               </li>
//               <li>
//                 Frown lines (glabellar lines) are vertical lines between the
//                 eyebrows caused by repeated facial expressions
//               </li>
//               <li>
//                 Forehead wrinkles are horizontal lines that appear on the
//                 forehead due to muscle movement and aging
//               </li>
//               <li>
//                 Vertical lip lines, or "smoker's lines," form around the lips
//                 and can be exacerbated by sun exposure
//               </li>
//               <li>
//                 Chin wrinkles appear over time due to aging and facial
//                 expressions, including marionette lines
//               </li>
//               <li>Aging lips can take on a wrinkled appearance</li>
//             </ul>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="802"
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport three-boxes   container option-1 default  no-bg wider "
//         data-s3-module
//       >
//         <div className="row">
//           <div className="content-before">
//             <h2>Our Favorite Injectables For Wrinkles and Lines</h2>
//           </div>
//           <div className="boxes wider">
//             <div className="box wow fadeInUp">
//               <h3>Neuromodulators: BOTOX® and Dysport®</h3>
//               <p>
//                 BOTOX is a popular, FDA-approved treatment for lines and
//                 wrinkles caused by muscle movement. It works by temporarily
//                 relaxing the muscles that cause wrinkles, resulting in a
//                 smoother, more youthful appearance. BOTOX is particularly
//                 effective in treating:
//               </p>
//               <ul>
//                 <li>Crow's feet</li>
//                 <li>Forehead lines</li>
//                 <li>Frown lines between the eyebrows</li>
//               </ul>
//               <p>
//                 Dysport is another popular injectable treatment for lines and
//                 wrinkles caused by muscle movement. Like BOTOX, it temporarily
//                 relaxes the muscles, resulting in a smoother, more youthful
//                 appearance. Dysport is particularly effective in treating frown
//                 lines between the eyebrows. Both treatments are quick and
//                 relatively painless, with most patients experiencing little to
//                 no downtime. Results typically last several months, after which
//                 the treatment can be repeated to maintain the desired effect.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Dermal Fillers: JUVÉDERM® and Restylane®</h3>
//               <p>
//                 JUVÉDERM® is best for treating lines and wrinkles caused by skin
//                 volume loss. It is made of hyaluronic acid and is particularly
//                 effective in treating:
//               </p>
//               <ul>
//                 <li>Nasolabial folds</li>
//                 <li>Marionette lines</li>
//                 <li>Other wrinkles around the mouth and nose</li>
//               </ul>
//               <p>
//                 Like JUVÉDERM®, Restylane® is made of hyaluronic acid and is
//                 particularly effective in treating the same concerns. However,
//                 Restylane® is also used to enhance lip volume and contour and
//                 improve the appearance of under-eye circles and hollows. The
//                 treatment is quick and relatively painless, with most patients
//                 experiencing little to no downtime. Results typically last
//                 several months to a year, depending on the specific product used
//                 and the area treated. When injected by our Allergen-trained
//                 facial contouring experts, these fillers produce a natural
//                 enhancement, not overdone.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Sculptra</h3>
//               <p>
//                 Sculptra is an exciting new injectable treatment that helps your
//                 body produce more collagen naturally. The Poly-L-lactic acid in
//                 the injection stimulates your body's collagen production,
//                 resulting in gradual skin rejuvenation. For the best and
//                 longest-lasting results, multiple treatment sessions are usually
//                 recommended. Over time, Sculptra can improve skin texture,
//                 reduce wrinkles, and restore facial volume, giving you a more
//                 youthful and refreshed appearance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container has-media" data-s3-module>
//         <div className="row pt-0 media-right" data-api-key="content">
//           <div className="item">
//             <h2>
//               Aspire to Receive{" "}
//               <span className="block-desktop">Brilliant Rewards</span>
//             </h2>
//             <p>
//               At Goldfingers Aesthetics, we offer two reward programs - Aspire®
//               and Brilliant Distinctions® - that allow patients to earn points
//               towards instant savings on qualifying Allergan® & Galderma®
//               aesthetic treatments. For every 100 points earned, you can save
//               $10. Signing up is easy - simply visit our website and enroll
//               today to save on your favorite treatments!
//             </p>
//           </div>
//           <picture className="media">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=904"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=904"
//               loading="lazy"
//               data-lazyload="img"
//               width="904"
//               height="1062"
//               alt="white sand beach"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default LinesAndWrinkles;


// // "use client";

// // import React, { useEffect, useState } from "react";
// // import {
// //   fetchLinesAndWrinklesPageData,
// //   getResponsiveImageUrls,
// //   lexicalToHtml,
// //   getImageUrl,
// // } from "@/lib/api/medicalSpa/fetchLinesAndWrinklesPageData";

// // const LinesAndWrinklesPageComponent: React.FC = () => {
// //   const [data, setData] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const loadData = async () => {
// //       const pageData = await fetchLinesAndWrinklesPageData();
// //       setData(pageData);
// //       setLoading(false);
// //     };
// //     loadData();
// //   }, []);

// //   if (loading) {
// //     return <div className="text-center p-4">Loading...</div>;
// //   }

// //   console.log(data, 'this is data')

// //   if (!data) {
// //     return <div className="text-center p-4">No data available</div>;
// //   }

// //   const {
// //     heroSection,
// //     introSection,
// //     halfImageSection1,
// //     beforeAfterSection,
// //     bannerSection1,
// //     boxGridSection1,
// //     bannerSection2,
// //     boxGridSection2,
// //     columnSection,
// //     sectionOrder,
// //     globalStyles,
// //     accessibilitySettings,
// //   } = data;

// //   const renderRichText = (content: any) => {
// //     if (!content) return null;
// //     const html = lexicalToHtml(content);
// //     return <div dangerouslySetInnerHTML={{ __html: html }} />;
// //   };

// //   const renderSection = (sectionKey: string) => {
// //     switch (sectionKey) {
// //       case "hero":
// //         if (!heroSection?.show) return null;
// //         const heroBackground = getResponsiveImageUrls(
// //           heroSection?.backgroundImage
// //         );
// //         const heroMedia = getResponsiveImageUrls(heroSection?.mediaImage);

// //         return (
// //           <div
// //             className="mod_hero banner mobile-stack"
// //             data-s3-module
// //             key="hero"
// //           >
// //             <div className="wrapper">
// //               <picture className="background">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${heroBackground.mobile}, ${heroBackground.mobile} 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${heroBackground.tablet}, ${heroBackground.tablet} 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:1400px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${heroBackground.desktop}, ${heroBackground.desktop} 2x`}
// //                 />
// //                 <source
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={heroBackground.large}
// //                 />
// //                 <img
// //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-src={heroBackground.large}
// //                   loading="lazy"
// //                   data-lazyload="img"
// //                   width="1994"
// //                   height="1206"
// //                   alt={heroBackground.alt || "Background Texture"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //               <div className="row">
// //                 <div className="inner">
// //                   {heroSection.breadcrumbs &&
// //                     heroSection.breadcrumbs.length > 0 && (
// //                       <ul className="partial_breadcrumb" data-s3-partial>
// //                         {heroSection.breadcrumbs.map(
// //                           (crumb: any, idx: number) => (
// //                             <li key={idx}>
// //                               <a
// //                                 href={crumb.url}
// //                                 role="link"
// //                                 aria-label={crumb.ariaLabel}
// //                               >
// //                                 {crumb.label}
// //                               </a>
// //                             </li>
// //                           )
// //                         )}
// //                       </ul>
// //                     )}
// //                   <h1
// //                     style={{
// //                       color: heroSection.titleColor || undefined,
// //                       fontSize: heroSection.titleFontSize || undefined,
// //                     }}
// //                   >
// //                     {heroSection.title || "Lines & Wrinkles"}
// //                   </h1>
// //                   {heroSection.description && (
// //                     <div
// //                       className="text"
// //                       style={{
// //                         color: heroSection.descriptionColor || undefined,
// //                       }}
// //                     >
// //                       {renderRichText(heroSection.description)}
// //                     </div>
// //                   )}
// //                   {heroSection.ctaButton?.show && (
// //                     <div className="text">
// //                       <p>
// //                         <a
// //                           className="btn white"
// //                           href={heroSection.ctaButton.url || "/contact/"}
// //                           role="button"
// //                           style={{
// //                             backgroundColor:
// //                               heroSection.ctaButton.backgroundColor ||
// //                               undefined,
// //                             color: heroSection.ctaButton.textColor || undefined,
// //                           }}
// //                         >
// //                           {heroSection.ctaButton.text || "Book an Appointment"}
// //                         </a>
// //                       </p>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //               <div className="media">
// //                 <picture className="background">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
// //                     data-lazyload-srcset={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
// //                     data-lazyload-srcset={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
// //                   />
// //                   <source
// //                     media="(max-width:1400px)"
// //                     srcSet={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
// //                     data-lazyload-srcset={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
// //                   />
// //                   <source
// //                     srcSet={heroMedia.large}
// //                     data-lazyload-srcset={heroMedia.large}
// //                   />
// //                   <img
// //                     src={heroMedia.large}
// //                     width="1917"
// //                     height="1206"
// //                     alt={heroMedia.alt || "Dr Young with working with patient"}
// //                     draggable="false"
// //                   />
// //                 </picture>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "intro":
// //         if (!introSection?.show) return null;
// //         const introLogo = getImageUrl(introSection?.logo);

// //         return (
// //           <div
// //             className="mod_intro container viewport option-1 wide wow fadeInUp"
// //             data-s3-module
// //             key="intro"
// //           >
// //             <div className="row pb-0">
// //               {introLogo && (
// //                 <picture className="logo">
// //                   <img
// //                     src={introLogo}
// //                     width="58"
// //                     height="64"
// //                     loading="lazy"
// //                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
// //                     draggable="false"
// //                     data-api-key="logo"
// //                   />
// //                 </picture>
// //               )}
// //               <div className="inner" data-api-key="content">
// //                 <h2>
// //                   {introSection.heading ||
// //                     "A Refreshed, Youthful Appearance is an Injection Away"}
// //                 </h2>
// //                 {renderRichText(introSection.content)}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "halfImageSection1":
// //         if (!halfImageSection1?.show) return null;
// //         const halfImg = getResponsiveImageUrls(halfImageSection1?.image);

// //         return (
// //           <div
// //             className="mod_half_image viewport half-image container wow fadeInLeft"
// //             data-s3-module
// //             key="halfImageSection1"
// //           >
// //             <div className="row half-image-row top-aligned">
// //               <div className="media">
// //                 <picture className="background">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                     data-lazyload-srcset={`${halfImg.mobile}, ${halfImg.mobile} 2x`}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                     data-lazyload-srcset={`${halfImg.tablet}, ${halfImg.tablet} 2x`}
// //                   />
// //                   <source
// //                     media="(max-width:1400px)"
// //                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                     data-lazyload-srcset={`${halfImg.desktop}, ${halfImg.desktop} 2x`}
// //                   />
// //                   <source
// //                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                     data-lazyload-srcset={halfImg.large}
// //                   />
// //                   <img
// //                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                     data-lazyload-src={halfImg.large}
// //                     loading="lazy"
// //                     data-lazyload="img"
// //                     width="1832"
// //                     height="1824"
// //                     alt={
// //                       halfImg.alt ||
// //                       "Specialist putting syringe in patient's face"
// //                     }
// //                     draggable="false"
// //                     data-api-key="image"
// //                   />
// //                 </picture>
// //               </div>
// //               <div className="copy">
// //                 <div className="inner">
// //                   <div className="content" data-api-key="content">
// //                     <h2>
// //                       {halfImageSection1.heading ||
// //                         "Why Lines and Wrinkles Happen, and What You Can Do About That"}
// //                     </h2>
// //                     {renderRichText(halfImageSection1.content)}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "beforeAfterSection":
// //       case "beforeAfter":
// //         if (!beforeAfterSection?.show) return null;

// //         return (
// //           <div
// //             className="mod_cta_ba_feed cta container wow fadeInUp mb-0"
// //             data-s3-module
// //             key="beforeAfterSection"
// //           >
// //             <div className="row">
// //               <div className="text">
// //                 <h2 data-api-key="title">
// //                   {beforeAfterSection.heading || "Before & After"}
// //                 </h2>
// //                 {beforeAfterSection.patients &&
// //                   Array.isArray(beforeAfterSection.patients) && (
// //                     <div className="patients" data-api-key="patients">
// //                       <div className="patient-wrap pslider" data-items="2">
// //                         {beforeAfterSection.patients.map(
// //                           (patient: any, idx: number) => {
// //                             const patientImg = getResponsiveImageUrls(
// //                               patient.image
// //                             );
// //                             return (
// //                               <div key={idx}>
// //                                 <a
// //                                   href={patient.link || "#"}
// //                                   className="patient single"
// //                                 >
// //                                   <picture className="background">
// //                                     <source
// //                                       media="(max-width:420px)"
// //                                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                                       data-lazyload-srcset={`${patientImg.mobile}, ${patientImg.mobile} 2x`}
// //                                     />
// //                                     <source
// //                                       media="(max-width:800px)"
// //                                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                                       data-lazyload-srcset={`${patientImg.tablet}, ${patientImg.tablet} 2x`}
// //                                     />
// //                                     <source
// //                                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                                       data-lazyload-srcset={patientImg.desktop}
// //                                     />
// //                                     <img
// //                                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                                       data-lazyload-src={patientImg.desktop}
// //                                       loading="lazy"
// //                                       data-lazyload="img"
// //                                       width="1200"
// //                                       height="301"
// //                                       alt={patientImg.alt || ""}
// //                                       draggable="false"
// //                                     />
// //                                   </picture>
// //                                 </a>
// //                               </div>
// //                             );
// //                           }
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}
// //                 {beforeAfterSection.galleryButton?.show && (
// //                   <a
// //                     href={
// //                       beforeAfterSection.galleryButton.url ||
// //                       "/gallery/non-surgical/botox/"
// //                     }
// //                     className="btn view-more"
// //                     title="View before and after gallery images"
// //                     aria-label="View before and after gallery images"
// //                   >
// //                     {beforeAfterSection.galleryButton.text || "View Gallery"}
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "bannerSection1":
// //         if (!bannerSection1?.show) return null;
// //         const banner1Bg = getResponsiveImageUrls(
// //           bannerSection1?.backgroundImage
// //         );

// //         return (
// //           <div
// //             className="mod_banner dark hide-divider viewport background-7"
// //             data-s3-module
// //             key="bannerSection1"
// //           >
// //             <div className="row wow fadeInUp">
// //               <div className="content" data-api-key="top_content">
// //                 <h2 className="text-center">
// //                   {bannerSection1.heading || "The Goldfingers Difference"}
// //                 </h2>
// //                 {renderRichText(bannerSection1.content)}
// //                 {bannerSection1.bulletPoints &&
// //                   Array.isArray(bannerSection1.bulletPoints) && (
// //                     <ul className="columns">
// //                       {bannerSection1.bulletPoints.map(
// //                         (bullet: any, idx: number) => (
// //                           <li key={idx}>{renderRichText(bullet.content)}</li>
// //                         )
// //                       )}
// //                     </ul>
// //                   )}
// //                 {bannerSection1.closingContent &&
// //                   renderRichText(bannerSection1.closingContent)}
// //               </div>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${banner1Bg.mobile}, ${banner1Bg.mobile} 2x`}
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${banner1Bg.tablet}, ${banner1Bg.tablet} 2x`}
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${banner1Bg.desktop}, ${banner1Bg.desktop} 2x`}
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={banner1Bg.large}
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src={banner1Bg.large}
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="2200"
// //                 height="802"
// //                 alt={banner1Bg.alt || "Banner media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         );

// //       case "boxGridSection1":
// //         if (!boxGridSection1?.show) return null;

// //         return (
// //           <div
// //             className="mod_box_grid viewport three-boxes container option-1 no-stacking no-bg"
// //             data-s3-module
// //             key="boxGridSection1"
// //           >
// //             <div className="row">
// //               {boxGridSection1.headingBefore && (
// //                 <div className="content-before">
// //                   <h2>{boxGridSection1.headingBefore}</h2>
// //                   {renderRichText(boxGridSection1.contentBefore)}
// //                 </div>
// //               )}
// //               <div className="boxes">
// //                 {boxGridSection1.boxes &&
// //                   Array.isArray(boxGridSection1.boxes) &&
// //                   boxGridSection1.boxes.map((box: any, idx: number) => (
// //                     <div
// //                       className={`box ${box.animationClass || "wow fadeInUp"}`}
// //                       key={idx}
// //                     >
// //                       <h3>{box.heading || "Box Title"}</h3>
// //                       {renderRichText(box.content)}
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "bannerSection2":
// //         if (!bannerSection2?.show) return null;
// //         const banner2Bg = getResponsiveImageUrls(
// //           bannerSection2?.backgroundImage
// //         );

// //         return (
// //           <div
// //             className="mod_banner dark hide-divider viewport background-1"
// //             data-s3-module
// //             key="bannerSection2"
// //           >
// //             <div className="row wow fadeInUp">
// //               <div className="content" data-api-key="top_content">
// //                 <h2 className="text-center">
// //                   {bannerSection2.heading ||
// //                     "Laugh Lines, Frown Lines, and Everything in Between"}
// //                 </h2>
// //                 {renderRichText(bannerSection2.content)}
// //                 {bannerSection2.bulletPoints &&
// //                   Array.isArray(bannerSection2.bulletPoints) && (
// //                     <ul className="columns">
// //                       {bannerSection2.bulletPoints.map(
// //                         (bullet: any, idx: number) => (
// //                           <li key={idx}>{renderRichText(bullet.content)}</li>
// //                         )
// //                       )}
// //                     </ul>
// //                   )}
// //               </div>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${banner2Bg.mobile}, ${banner2Bg.mobile} 2x`}
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${banner2Bg.tablet}, ${banner2Bg.tablet} 2x`}
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${banner2Bg.desktop}, ${banner2Bg.desktop} 2x`}
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={banner2Bg.large}
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src={banner2Bg.large}
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="2200"
// //                 height="802"
// //                 alt={banner2Bg.alt || "Banner media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         );

// //       case "boxGridSection2":
// //         if (!boxGridSection2?.show) return null;

// //         return (
// //           <div
// //             className="mod_box_grid viewport three-boxes container option-1 default no-bg wider"
// //             data-s3-module
// //             key="boxGridSection2"
// //           >
// //             <div className="row">
// //               {boxGridSection2.headingBefore && (
// //                 <div className="content-before">
// //                   <h2>{boxGridSection2.headingBefore}</h2>
// //                   {renderRichText(boxGridSection2.contentBefore)}
// //                 </div>
// //               )}
// //               <div className="boxes wider">
// //                 {boxGridSection2.boxes &&
// //                   Array.isArray(boxGridSection2.boxes) &&
// //                   boxGridSection2.boxes.map((box: any, idx: number) => (
// //                     <div
// //                       className={`box ${box.animationClass || "wow fadeInUp"}`}
// //                       key={idx}
// //                     >
// //                       <h3>{box.heading || "Box Title"}</h3>
// //                       {renderRichText(box.content)}
// //                       {box.bulletPoints && Array.isArray(box.bulletPoints) && (
// //                         <ul>
// //                           {box.bulletPoints.map((bullet: any, bIdx: number) => (
// //                             <li key={bIdx}>{bullet.text || "Bullet"}</li>
// //                           ))}
// //                         </ul>
// //                       )}
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "columnSection":
// //         if (!columnSection?.show) return null;
// //         const colMedia = getResponsiveImageUrls(columnSection?.mediaImage);

// //         return (
// //           <div
// //             className="mod_column viewport container has-media"
// //             data-s3-module
// //             key="columnSection"
// //           >
// //             <div className="row pt-0 media-right" data-api-key="content">
// //               <div className="item">
// //                 <h2>
// //                   {columnSection.heading ||
// //                     "Aspire to Receive Brilliant Rewards"}
// //                 </h2>
// //                 {renderRichText(columnSection.content)}
// //               </div>
// //               <picture className="media">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${colMedia.mobile}, ${colMedia.mobile} 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${colMedia.tablet}, ${colMedia.tablet} 2x`}
// //                 />
// //                 <source
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={colMedia.desktop}
// //                 />
// //                 <img
// //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-src={colMedia.desktop}
// //                   loading="lazy"
// //                   data-lazyload="img"
// //                   width="904"
// //                   height="1062"
// //                   alt={colMedia.alt || "white sand beach"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //             </div>
// //           </div>
// //         );

// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <main
// //       id="main"
// //       style={{
// //         fontFamily: globalStyles?.fontFamily || undefined,
// //         color: globalStyles?.textColor || undefined,
// //       }}
// //     >
// //       {accessibilitySettings?.skipToContent && (
// //         <a href="#content" className="sr-only focus:not-sr-only">
// //           Skip to content
// //         </a>
// //       )}
// //       {sectionOrder && Array.isArray(sectionOrder) ? (
// //         sectionOrder.map((section: any, idx: number) =>
// //           renderSection(section.section)
// //         )
// //       ) : (
// //         <>
// //           {renderSection("hero")}
// //           {renderSection("intro")}
// //           {renderSection("halfImageSection1")}
// //           {renderSection("beforeAfter")}
// //           {renderSection("bannerSection1")}
// //           {renderSection("boxGridSection1")}
// //           {renderSection("bannerSection2")}
// //           {renderSection("boxGridSection2")}
// //           {renderSection("columnSection")}
// //         </>
// //       )}
// //     </main>
// //   );
// // };

// // export default LinesAndWrinklesPageComponent;

"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  fetchLinesAndWrinklesPageData,
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchLinesAndWrinklesPageData";

const LinesAndWrinkles: React.FC = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function loadData() {
      const data = await fetchLinesAndWrinklesPageData();
      setPageData(data);
      setLoading(false);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!pageData?.beforeAfterSection?.patients?.length || !sliderRef.current)
      return;

    const slider = sliderRef.current;
    const totalSlides = pageData.beforeAfterSection.patients.length;
    const autoPlayInterval = 5000;

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const intervalId = setInterval(nextSlide, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [pageData?.beforeAfterSection?.patients?.length]);

  useEffect(() => {
    if (!sliderRef.current || !pageData?.beforeAfterSection?.patients?.length)
      return;

    const slider = sliderRef.current;
    const slideWidth = slider.children[0]?.clientWidth || 0;
    slider.scrollTo({
      left: currentSlide * slideWidth,
      behavior: "smooth",
    });
  }, [currentSlide, pageData?.beforeAfterSection?.patients?.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">No data available</div>
      </div>
    );
  }

  const heroImages = getResponsiveImageUrls(
    pageData.heroSection?.backgroundImage
  );
  const heroMediaImages = getResponsiveImageUrls(
    pageData.heroSection?.mediaImage
  );

  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      {pageData.heroSection?.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module>
          <div className="wrapper">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={heroImages.mobile}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={heroImages.tablet}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={heroImages.desktop}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={heroImages.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={heroImages.large}
                loading="lazy"
                data-lazyload="img"
                width="1994"
                height="1206"
                alt={heroImages.alt}
                draggable="false"
              />
            </picture>
            <div className="row">
              <div className="inner">
                {pageData.heroSection?.breadcrumbs?.length > 0 && (
                  <ul className="partial_breadcrumb" data-s3-partial>
                    {pageData.heroSection.breadcrumbs.map(
                      (breadcrumb: any, index: number) => (
                        <li key={index}>
                          <a
                            href={breadcrumb.url}
                            role="link"
                            aria-label={breadcrumb.ariaLabel}
                          >
                            {breadcrumb.label}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                )}
                <h1>{pageData.heroSection?.title}</h1>
                {pageData.heroSection?.description && (
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(pageData.heroSection.description),
                    }}
                  />
                )}
                {pageData.heroSection?.ctaButton?.show && (
                  <p>
                    <a
                      className="btn white"
                      href={pageData.heroSection.ctaButton.url}
                      role="button"
                    >
                      {pageData.heroSection.ctaButton.text}
                    </a>
                  </p>
                )}
              </div>
            </div>
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={heroMediaImages.mobile}
                  data-lazyload-srcset={heroMediaImages.mobile}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={heroMediaImages.tablet}
                  data-lazyload-srcset={heroMediaImages.tablet}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={heroMediaImages.desktop}
                  data-lazyload-srcset={heroMediaImages.desktop}
                />
                <source
                  srcSet={heroMediaImages.large}
                  data-lazyload-srcset={heroMediaImages.large}
                />
                <img
                  src={heroMediaImages.large}
                  width="1917"
                  height="1206"
                  alt={heroMediaImages.alt}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Intro Module */}
      {pageData.introSection?.show && (
        <div
          className="mod_intro container viewport option-1 wide wow fadeInUp"
          data-s3-module
        >
          <div className="row pb-0">
            {pageData.introSection?.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(pageData.introSection.logo)}
                  width={58}
                  height={64}
                  loading="lazy"
                  alt={pageData.introSection?.logoAlt}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="inner" data-api-key="content">
              {pageData.introSection?.heading && (
                <h2>{pageData.introSection.heading}</h2>
              )}
              {pageData.introSection?.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(pageData.introSection.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Half Image Module */}
      {pageData.halfImageSection1?.show && (
        <div
          className="mod_half_image  viewport half-image container wow fadeInLeft "
          data-s3-module
        >
          <div className="row half-image-row top-aligned">
            <div className="media">
              <picture className="background">
                {(() => {
                  const images = getResponsiveImageUrls(
                    pageData.halfImageSection1.image
                  );
                  return (
                    <>
                      <source
                        media="(max-width:420px)"
                        srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-lazyload-srcset={images.mobile}
                      />
                      <source
                        media="(max-width:800px)"
                        srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-lazyload-srcset={images.tablet}
                      />
                      <source
                        media="(max-width:1400px)"
                        srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-lazyload-srcset={images.desktop}
                      />
                      <source
                        srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-lazyload-srcset={images.large}
                      />
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-lazyload-src={images.large}
                        loading="lazy"
                        data-lazyload="img"
                        width="1832"
                        height="1824"
                        alt={images.alt}
                        draggable="false"
                        data-api-key="image"
                      />
                    </>
                  );
                })()}
              </picture>
            </div>
            <div className="copy ">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {pageData.halfImageSection1?.heading && (
                    <h2>{pageData.halfImageSection1.heading}</h2>
                  )}
                  {pageData.halfImageSection1?.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(
                          pageData.halfImageSection1.content
                        ),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Before & After Feed Module */}
      {pageData.beforeAfterSection?.show && (
        <div
          className="mod_cta_ba_feed cta container wow fadeInUp mb-0"
          data-s3-module
        >
          <div className="row">
            <div className="text">
              {pageData.beforeAfterSection?.heading && (
                <h2 data-api-key="title">
                  {pageData.beforeAfterSection.heading}
                </h2>
              )}
              <div className="patients" data-api-key="patients">
                <div
                  className="patient-wrap pslider"
                  data-items="2"
                  ref={sliderRef}
                  // style={{
                  //   display: "flex",
                  //   overflowX: "auto",
                  //   scrollSnapType: "x mandatory",
                  //   scrollBehavior: "smooth",
                  // }}
                >
                  {pageData.beforeAfterSection?.patients?.map(
                    (patient: any, index: number) => {
                      const images = getResponsiveImageUrls(patient.image);
                      return (
                        <div
                          key={index}
                          style={{
                            minWidth: "50%",
                            scrollSnapAlign: "start",
                          }}
                        >
                          <a
                            href={patient.linkUrl || "#"}
                            className="patient single"
                          >
                            <picture className="background">
                              <source
                                media="(max-width:420px)"
                                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-lazyload-srcset={images.mobile}
                              />
                              <source
                                media="(max-width:800px)"
                                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-lazyload-srcset={images.tablet}
                              />
                              <source
                                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-lazyload-srcset={images.desktop}
                              />
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-lazyload-src={images.desktop}
                                loading="lazy"
                                data-lazyload="img"
                                width="1200"
                                height="301"
                                alt={images.alt}
                                draggable="false"
                              />
                            </picture>
                          </a>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              {pageData.beforeAfterSection?.galleryButton?.show && (
                <a
                  href={pageData.beforeAfterSection.galleryButton.url}
                  className="btn view-more"
                  title="View before and after gallery images"
                  aria-label="View before and after gallery images"
                >
                  {pageData.beforeAfterSection.galleryButton.text}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Banner Module 1 */}
      {pageData.bannerSection1?.show && (
        <div
          className="mod_banner dark  hide-divider viewport background-7"
          data-s3-module
        >
          <div className="row wow fadeInUp">
            <div className="content" data-api-key="top_content">
              {pageData.bannerSection1?.heading && (
                <h2 className="text-center">
                  {pageData.bannerSection1.subheading && (
                    <span className="small">
                      {pageData.bannerSection1.subheading}
                    </span>
                  )}
                  {pageData.bannerSection1.heading}
                </h2>
              )}
              {pageData.bannerSection1?.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(pageData.bannerSection1.content),
                  }}
                />
              )}
              {pageData.bannerSection1?.bulletPoints?.length > 0 && (
                <ul className="columns">
                  {pageData.bannerSection1.bulletPoints.map(
                    (bullet: any, index: number) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(bullet.content),
                        }}
                      />
                    )
                  )}
                </ul>
              )}
              {pageData.bannerSection1?.closingContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(
                      pageData.bannerSection1.closingContent
                    ),
                  }}
                />
              )}
            </div>
          </div>
          <picture className="background">
            {(() => {
              const images = getResponsiveImageUrls(
                pageData.bannerSection1.backgroundImage
              );
              return (
                <>
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.mobile}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.tablet}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.desktop}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.large}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={images.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="2200"
                    height="802"
                    alt={images.alt}
                    draggable="false"
                  />
                </>
              );
            })()}
          </picture>
        </div>
      )}

      {/* Box Grid Module 1 */}
      {pageData.boxGridSection1?.show && (
        <div
          className="mod_box_grid viewport three-boxes   container option-1 no-stacking  no-bg "
          data-s3-module
        >
          <div className="row">
            {(pageData.boxGridSection1?.headingBefore ||
              pageData.boxGridSection1?.contentBefore) && (
              <div className="content-before">
                {pageData.boxGridSection1?.headingBefore && (
                  <h2>{pageData.boxGridSection1.headingBefore}</h2>
                )}
                {pageData.boxGridSection1?.contentBefore && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(
                        pageData.boxGridSection1.contentBefore
                      ),
                    }}
                  />
                )}
              </div>
            )}
            <div className="boxes">
              {pageData.boxGridSection1?.boxes?.map(
                (box: any, index: number) => (
                  <div className="box wow fadeInUp" key={index}>
                    {box.heading && <h3>{box.heading}</h3>}
                    {box.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(box.content),
                        }}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Banner Module 2 */}
      {pageData.bannerSection2?.show && (
        <div
          className="mod_banner dark  hide-divider viewport background-1"
          data-s3-module
        >
          <div className="row wow fadeInUp">
            <div className="content" data-api-key="top_content">
              {pageData.bannerSection2?.heading && (
                <h2 className="text-center">
                  {pageData.bannerSection2.heading}
                </h2>
              )}
              {pageData.bannerSection2?.content && (
                <div
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(pageData.bannerSection2.content),
                  }}
                />
              )}
              {pageData.bannerSection2?.bulletPoints?.length > 0 && (
                <ul className="columns">
                  {pageData.bannerSection2.bulletPoints.map(
                    (bullet: any, index: number) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(bullet.content),
                        }}
                      />
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
          <picture className="background">
            {(() => {
              const images = getResponsiveImageUrls(
                pageData.bannerSection2.backgroundImage
              );
              return (
                <>
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.mobile}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.tablet}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.desktop}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={images.large}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={images.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="2200"
                    height="802"
                    alt={images.alt}
                    draggable="false"
                  />
                </>
              );
            })()}
          </picture>
        </div>
      )}

      {/* Box Grid Module 2 */}
      {pageData.boxGridSection2?.show && (
        <div
          className="mod_box_grid viewport three-boxes   container option-1 default  no-bg wider "
          data-s3-module
        >
          <div className="row">
            {pageData.boxGridSection2?.headingBefore && (
              <div className="content-before">
                <h2>{pageData.boxGridSection2.headingBefore}</h2>
              </div>
            )}
            <div className="boxes wider">
              {pageData.boxGridSection2?.boxes?.map(
                (box: any, index: number) => (
                  <div className="box wow fadeInUp" key={index}>
                    {box.heading && <h3>{box.heading}</h3>}
                    {box.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(box.content),
                        }}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Column Module */}
      {pageData.columnSection?.show && (
        <div className="mod_column viewport container has-media" data-s3-module>
          <div className="row pt-0 media-right" data-api-key="content">
            <div className="item">
              {pageData.columnSection?.heading && (
                <h2>{pageData.columnSection.heading}</h2>
              )}
              {pageData.columnSection?.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(pageData.columnSection.content),
                  }}
                />
              )}
            </div>
            <picture className="media">
              {(() => {
                const images = getResponsiveImageUrls(
                  pageData.columnSection.mediaImage
                );
                return (
                  <>
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset={images.mobile}
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset={images.tablet}
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset={images.desktop}
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src={images.desktop}
                      loading="lazy"
                      data-lazyload="img"
                      width="904"
                      height="1062"
                      alt={images.alt}
                      draggable="false"
                    />
                  </>
                );
              })()}
            </picture>
          </div>
        </div>
      )}
      {/* /Page Layout */}
    </main>
  );
};

export default LinesAndWrinkles;
