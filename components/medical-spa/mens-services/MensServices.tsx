// import React from "react";

// const MensServices: React.FC = () => {
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
//                     href="/medical-spa/mens-services/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Mens Services
//                   </a>
//                 </li>
//               </ul>
//               <h1>Men's Services</h1>
//               <div className="text">
//                 <p>Effortless Elegance for the Modern Man</p>
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
//                 srcSet="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Brunette man smiling"
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
//         <div className="row ">
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
//             <h2>
//               Goldfingers Aesthetics: The clinic men trust for natural-looking
//               outcomes
//             </h2>
//             <p>
//               Aesthetic services like dermal fillers and body sculpting, once
//               exclusively aimed at women, are becoming increasingly popular
//               among men. Goldfingers Aesthetics &amp;Plastic Surgery offers the
//               services men need to ward off the signs of aging and continue to
//               look and feel youthful, healthy, and fit. We provide natural
//               results that maintain the edginess of a man &rsquo;s appearance
//               while restoring a more youthful look.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-9"
//         data-s3-module
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2>BOTOX Cosmetic &reg;&ldquo;Bro-tox &rdquo;</h2>
//             <p>
//               Soften the lines, not your edge, with BOTOX Cosmetic &reg;. We
//               proudly offer BOTOX and Dysport injectables at $9.99 per unit.
//               BOTOX Cosmetic &reg;&amp;Dysport treat the following areas:
//             </p>
//             <ul>
//               <li>Forehead lines &nbsp;</li>
//               <li>Crow &rsquo;s feet around the eyes</li>
//               <li>Glabellar lines (between the eyebrows)</li>
//             </ul>
//             <p>
//               We provide free consultations to patients seeking natural and
//               noticeable outcomes. Our team comprises three male physician
//               experts in injectables who can address your concerns and
//               anti-aging issues, producing refined subtlety.
//             </p>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257074-banner-bgd-9.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="802"
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module>
//         <div className="row pt-30 mb-30" data-api-key="content">
//           <div className="item">
//             <h2>Sculptra &reg;</h2>
//             <p>
//               Sculptra is an FDA-approved injectable that helps the skin
//               regenerate collagen and elastin fibers for firmer, more resilient
//               skin. It &rsquo;s also used to correct shallow to deep facial
//               wrinkles and folds. If you want to appear more youthful-looking
//               without looking like you &rsquo;ve had work done, Sculptra may be
//               the solution!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-14"
//         data-s3-module
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <div className="columns-two vertical-align">
//               <div>
//                 <h2>KYBELLA &reg;</h2>
//                 <p>
//                   Watch under-chin fat melt away with the FDA-approved
//                   injectable KYBELLA &reg;. The active ingredient in KYBELLA is
//                   deoxycholic acid, a naturally occurring molecule that aids in
//                   the breakdown and absorption of dietary fat. When injected
//                   into the submental area, KYBELLA destroys fat cells, resulting
//                   in a more contoured and defined jawline.
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   The treatment is non-invasive and typically requires multiple
//                   sessions to achieve optimal results. KYBELLA &reg;may be right
//                   for you if:
//                 </p>
//                 <ul>
//                   <li>
//                     You &rsquo;re bothered (unhappy, self-conscious,
//                     embarrassed) by fat under the chin, also known as submental
//                     fullness
//                   </li>
//                   <li>
//                     You feel the condition makes you look older or heavier than
//                     you are
//                   </li>
//                   <li>You don &rsquo;t want to have surgery</li>
//                   <li>
//                     You eat well and exercise, but double chin fat never
//                     entirely disappears
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257101-banner-bgd-14.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="802"
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container has-media" data-s3-module>
//         <div className="row mt-30 mb-30 media-right" data-api-key="content">
//           <div className="item">
//             <h2>Non-Surgical Facelift For Men</h2>
//             <p>
//               At Goldfingers Aesthetics, we offer the innovative 8-point
//               facelift with fillers specifically designed for men. This advanced
//               non-surgical treatment targets critical areas of the face to
//               restore a more youthful and rejuvenated appearance. Our skilled
//               practitioners understand men &rsquo;s distinct facial anatomy and
//               aesthetic preferences, tailoring the treatment to enhance
//               masculinity while addressing common signs of aging. By
//               strategically placing dermal fillers in eight key areas, we can:
//             </p>
//             <ul className="columns">
//               <li>Lift and contour the face</li>
//               <li>Soften lines and wrinkles</li>
//               <li>Restore lost volume</li>
//             </ul>
//             <p>
//               This approach results in a natural, refreshed look that boosts
//               confidence and maintains masculine features. Whether you &rsquo;re
//               concerned about sagging skin, hollow cheeks, or other aging
//               concerns, our 8-point facelift with fillers offers a comprehensive
//               solution specifically designed for the modern man.
//             </p>
//           </div>
//           <picture className="media">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695240781-accent-4.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695240781-accent-4.jpg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695240781-accent-4.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695240781-accent-4.jpg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695240781-accent-4.jpg?auto=format,compress&w=904"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1695240781-accent-4.jpg?auto=format,compress&w=904"
//               loading="lazy"
//               data-lazyload="img"
//               width="904"
//               height="1062"
//               alt="stone wall"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
//         data-s3-module
//       >
//         <div className="row half-image-row mt-0 mb-0">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="Man getting a facial"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>
//                   <span className="small">Gentlemen &rsquo;s Facial:</span>
//                   60 min/$115
//                 </h2>
//                 <p>
//                   Treat yourself to a luxurious 60-minute gentlemen's facial
//                   that will leave your skin looking fresh, vibrant, and healthy.
//                   This indulgent treatment includes clarifying extractions,
//                   exfoliation, and a nourishing, moisturizing treatment that
//                   revitalizes your complexion and removes dull, tired skin.
//                   Schedule your appointment today! And while you're at it, look
//                   at our menu to explore the full range of medical-grade
//                   services we offer.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default MensServices;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import {
// //   fetchMensFillersPageData,
// //   getResponsiveImageUrls,
// //   lexicalToHtml,
// // } from "@/lib/api/medicalSpa/fetchMensServicesPageComponent"; // Adjust path to your API utilities

// // interface MensServicesData {
// //   heroSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
// //     title: string;
// //     titleColor?: string;
// //     titleFontSize?: string;
// //     description?: any;
// //     descriptionColor?: string;
// //     ctaButton: {
// //       show: boolean;
// //       text: string;
// //       url: string;
// //       backgroundColor?: string;
// //       textColor?: string;
// //       hoverBackgroundColor?: string;
// //     };
// //     mediaImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //   };
// //   introSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     logo?: any;
// //     logoAlt?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content: any;
// //   };
// //   bannerSection1: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     isDark?: boolean;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //     bulletPoints?: Array<{ text: string }>;
// //   };
// //   columnSection1: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //   };
// //   bannerSection2: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     isDark?: boolean;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //     useColumnLayout?: boolean;
// //     bulletPoints?: Array<{ text: string }>;
// //   };
// //   columnSection2: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     mediaPosition?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //     bulletPoints?: Array<{ text: string }>;
// //     mediaImage: { mobile?: any; tablet?: any; desktop?: any; alt?: string };
// //   };
// //   halfImageSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     imagePosition?: string;
// //     verticalAlignment?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     smallHeading?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //     contentPadded?: boolean;
// //     image: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //   };
// //   sectionOrder: Array<{ section: string }>;
// //   globalStyles: {
// //     containerMaxWidth?: string;
// //     containerPadding?: string;
// //     sectionSpacing?: string;
// //     fontFamily?: string;
// //     primaryColor?: string;
// //     secondaryColor?: string;
// //     textColor?: string;
// //     linkColor?: string;
// //     linkHoverColor?: string;
// //     headingFontSize?: string;
// //   };
// //   buttonStyles: {
// //     defaultBackgroundColor?: string;
// //     defaultTextColor?: string;
// //     defaultHoverBackground?: string;
// //     whiteBackgroundColor?: string;
// //     whiteTextColor?: string;
// //     whiteHoverBackground?: string;
// //     borderRadius?: string;
// //     padding?: string;
// //     fontSize?: string;
// //     fontWeight?: string;
// //   };
// //   listStyles: {
// //     bulletColor?: string;
// //     bulletStyle?: string;
// //     useColumnsForBullets?: boolean;
// //   };
// //   animationSettings: {
// //     enableAnimations?: boolean;
// //     fadeInDuration?: string;
// //     slideInDuration?: string;
// //     animationEasing?: string;
// //     viewportAnimations?: Array<{ section: string; animationType: string }>;
// //   };
// // }

// // const MensServices: React.FC = () => {
// //   const [pageData, setPageData] = useState<MensServicesData | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const data = await fetchMensFillersPageData(
// //           "mens-services-page-component"
// //         );
// //         setPageData(data);
// //       } catch (error) {
// //         console.error("Error fetching MensServices page data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (loading) return <div>Loading...</div>;
// //   if (!pageData) return <div>No data available</div>;

// //   const {
// //     heroSection,
// //     introSection,
// //     bannerSection1,
// //     columnSection1,
// //     bannerSection2,
// //     columnSection2,
// //     halfImageSection,
// //     sectionOrder,
// //     globalStyles,
// //     buttonStyles,
// //     listStyles,
// //     animationSettings,
// //   } = pageData;

// //   const getAnimationClass = (section: string) => {
// //     if (!animationSettings.enableAnimations) return "";
// //     const anim = animationSettings.viewportAnimations?.find(
// //       (a) => a.section === section
// //     );
// //     switch (anim?.animationType) {
// //       case "fadeInUp":
// //         return `wow fadeInUp`;
// //       case "fadeInLeft":
// //         return `wow fadeInLeft`;
// //       case "fadeInRight":
// //         return `wow fadeInRight`;
// //       case "fadeIn":
// //         return `wow fadeIn`;
// //       default:
// //         return "";
// //     }
// //   };

// //   const renderSection = (section: string) => {
// //     switch (section) {
// //       case "hero":
// //         if (!heroSection.show) return null;
// //         const heroBgImages = getResponsiveImageUrls(
// //           heroSection.backgroundImage
// //         );
// //         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
// //         return (
// //           <div
// //             className={`mod_hero banner ${
// //               pageData.mobileSettings?.mobileStackBehavior ? "mobile-stack" : ""
// //             }`}
// //             data-s3-module
// //             style={{ backgroundColor: heroSection.backgroundColor }}
// //           >
// //             <div className="wrapper">
// //               <picture className="background">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet={heroBgImages.mobile}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet={heroBgImages.tablet}
// //                 />
// //                 <source
// //                   media="(max-width:1400px)"
// //                   srcSet={heroBgImages.desktop}
// //                 />
// //                 <source srcSet={heroBgImages.large} />
// //                 <img
// //                   src={heroBgImages.large}
// //                   loading="lazy"
// //                   alt={heroBgImages.alt || "Background Texture"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //               <div className="row">
// //                 <div className="inner">
// //                   <ul className="partial_breadcrumb" data-s3-partial>
// //                     {heroSection.breadcrumbs.map((crumb, index) => (
// //                       <li key={index}>
// //                         <a
// //                           href={crumb.url}
// //                           role="link"
// //                           aria-label={
// //                             pageData.accessibilitySettings?.ariaLabelsEnabled
// //                               ? crumb.ariaLabel
// //                               : undefined
// //                           }
// //                           style={{ color: globalStyles.linkColor }}
// //                           onMouseOver={(e) =>
// //                             globalStyles.linkHoverColor &&
// //                             (e.currentTarget.style.color =
// //                               globalStyles.linkHoverColor)
// //                           }
// //                           onMouseOut={(e) =>
// //                             globalStyles.linkColor &&
// //                             (e.currentTarget.style.color =
// //                               globalStyles.linkColor)
// //                           }
// //                         >
// //                           {crumb.label}
// //                         </a>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <h1
// //                     style={{
// //                       color: heroSection.titleColor,
// //                       fontSize: heroSection.titleFontSize,
// //                     }}
// //                   >
// //                     {heroSection.title}
// //                   </h1>
// //                   <div
// //                     className="text"
// //                     style={{ color: heroSection.descriptionColor }}
// //                   >
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(heroSection.description),
// //                       }}
// //                     />
// //                     {heroSection.ctaButton.show && (
// //                       <p>
// //                         <a
// //                           className="btn white"
// //                           href={heroSection.ctaButton.url}
// //                           role="button"
// //                           style={{
// //                             backgroundColor:
// //                               heroSection.ctaButton.backgroundColor ||
// //                               buttonStyles.whiteBackgroundColor,
// //                             color:
// //                               heroSection.ctaButton.textColor ||
// //                               buttonStyles.whiteTextColor,
// //                             borderRadius: buttonStyles.borderRadius,
// //                             padding: buttonStyles.padding,
// //                             fontSize: buttonStyles.fontSize,
// //                             fontWeight: buttonStyles.fontWeight,
// //                           }}
// //                           onMouseOver={(e) => {
// //                             const hoverColor =
// //                               heroSection.ctaButton.hoverBackgroundColor ||
// //                               buttonStyles.whiteHoverBackground;
// //                             hoverColor &&
// //                               (e.currentTarget.style.backgroundColor =
// //                                 hoverColor);
// //                           }}
// //                           onMouseOut={(e) => {
// //                             const bgColor =
// //                               heroSection.ctaButton.backgroundColor ||
// //                               buttonStyles.whiteBackgroundColor;
// //                             bgColor &&
// //                               (e.currentTarget.style.backgroundColor = bgColor);
// //                           }}
// //                         >
// //                           {heroSection.ctaButton.text}
// //                         </a>
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="media">
// //                 <picture className="background">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={heroMediaImages.mobile}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={heroMediaImages.tablet}
// //                   />
// //                   <source
// //                     media="(max-width:1400px)"
// //                     srcSet={heroMediaImages.desktop}
// //                   />
// //                   <source srcSet={heroMediaImages.large} />
// //                   <img
// //                     src={heroMediaImages.large}
// //                     loading="lazy"
// //                     alt={heroMediaImages.alt || "Brunette man smiling"}
// //                     draggable="false"
// //                   />
// //                 </picture>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "intro":
// //         if (!introSection.show) return null;
// //         return (
// //           <div
// //             className={`mod_intro container viewport option-1 wide ${getAnimationClass(
// //               "intro"
// //             )}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: introSection.backgroundColor,
// //               color: introSection.textColor,
// //             }}
// //           >
// //             <div className="row">
// //               {introSection.logo && (
// //                 <picture className="logo">
// //                   <img
// //                     src={getResponsiveImageUrls(introSection.logo).large}
// //                     loading="lazy"
// //                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
// //                     draggable="false"
// //                     data-api-key="logo"
// //                   />
// //                 </picture>
// //               )}
// //               <div className="inner" data-api-key="content">
// //                 <h2 style={{ color: introSection.headingColor }}>
// //                   {introSection.heading}
// //                 </h2>
// //                 <div
// //                   dangerouslySetInnerHTML={{
// //                     __html: lexicalToHtml(introSection.content),
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "bannerSection1":
// //         if (!bannerSection1.show) return null;
// //         const banner1Images = getResponsiveImageUrls(
// //           bannerSection1.backgroundImage
// //         );
// //         return (
// //           <div
// //             className={`mod_banner ${
// //               bannerSection1.isDark ? "dark" : ""
// //             } hide-divider viewport background-9 ${getAnimationClass(
// //               "bannerSection1"
// //             )}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: bannerSection1.backgroundColor,
// //               color: bannerSection1.textColor,
// //             }}
// //           >
// //             <div className="row">
// //               <div className="content" data-api-key="top_content">
// //                 <h2 style={{ color: bannerSection1.headingColor }}>
// //                   {bannerSection1.heading}
// //                 </h2>
// //                 {bannerSection1.content && (
// //                   <div
// //                     dangerouslySetInnerHTML={{
// //                       __html: lexicalToHtml(bannerSection1.content),
// //                     }}
// //                   />
// //                 )}
// //                 {bannerSection1.bulletPoints && (
// //                   <ul
// //                     style={{
// //                       listStyleType: listStyles.bulletStyle,
// //                       color: listStyles.bulletColor,
// //                     }}
// //                   >
// //                     {bannerSection1.bulletPoints.map((point, index) => (
// //                       <li key={index}>{point.text}</li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </div>
// //             </div>
// //             <picture className="background">
// //               <source media="(max-width:420px)" srcSet={banner1Images.mobile} />
// //               <source media="(max-width:800px)" srcSet={banner1Images.tablet} />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet={banner1Images.desktop}
// //               />
// //               <source srcSet={banner1Images.large} />
// //               <img
// //                 src={banner1Images.large}
// //                 loading="lazy"
// //                 alt={banner1Images.alt || "Banner media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         );

// //       case "columnSection1":
// //         if (!columnSection1.show) return null;
// //         return (
// //           <div
// //             className="mod_column viewport container"
// //             data-s3-module
// //             style={{
// //               backgroundColor: columnSection1.backgroundColor,
// //               color: columnSection1.textColor,
// //               paddingTop: columnSection1.paddingTop,
// //               paddingBottom: columnSection1.paddingBottom,
// //             }}
// //           >
// //             <div className="row pt-30 mb-30" data-api-key="content">
// //               <div className="item">
// //                 <h2 style={{ color: columnSection1.headingColor }}>
// //                   {columnSection1.heading}
// //                 </h2>
// //                 {columnSection1.content && (
// //                   <div
// //                     dangerouslySetInnerHTML={{
// //                       __html: lexicalToHtml(columnSection1.content),
// //                     }}
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "bannerSection2":
// //         if (!bannerSection2.show) return null;
// //         const banner2Images = getResponsiveImageUrls(
// //           bannerSection2.backgroundImage
// //         );
// //         return (
// //           <div
// //             className={`mod_banner ${
// //               bannerSection2.isDark ? "dark" : ""
// //             } hide-divider viewport background-14 ${getAnimationClass(
// //               "bannerSection2"
// //             )}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: bannerSection2.backgroundColor,
// //               color: bannerSection2.textColor,
// //             }}
// //           >
// //             <div className="row">
// //               <div className="content" data-api-key="top_content">
// //                 <div
// //                   className={
// //                     bannerSection2.useColumnLayout
// //                       ? "columns-two vertical-align"
// //                       : ""
// //                   }
// //                 >
// //                   <div>
// //                     <h2 style={{ color: bannerSection2.headingColor }}>
// //                       {bannerSection2.heading}
// //                     </h2>
// //                     {bannerSection2.content && (
// //                       <div
// //                         dangerouslySetInnerHTML={{
// //                           __html: lexicalToHtml(bannerSection2.content),
// //                         }}
// //                       />
// //                     )}
// //                     {bannerSection2.bulletPoints && (
// //                       <ul
// //                         style={{
// //                           listStyleType: listStyles.bulletStyle,
// //                           color: listStyles.bulletColor,
// //                         }}
// //                       >
// //                         {bannerSection2.bulletPoints.map((point, index) => (
// //                           <li key={index}>{point.text}</li>
// //                         ))}
// //                       </ul>
// //                     )}
// //                   </div>
// //                   {bannerSection2.useColumnLayout && <div />}
// //                 </div>
// //               </div>
// //             </div>
// //             <picture className="background">
// //               <source media="(max-width:420px)" srcSet={banner2Images.mobile} />
// //               <source media="(max-width:800px)" srcSet={banner2Images.tablet} />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet={banner2Images.desktop}
// //               />
// //               <source srcSet={banner2Images.large} />
// //               <img
// //                 src={banner2Images.large}
// //                 loading="lazy"
// //                 alt={banner2Images.alt || "Banner media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         );

// //       case "columnSection2":
// //         if (!columnSection2.show) return null;
// //         const column2Images = getResponsiveImageUrls(columnSection2.mediaImage);
// //         return (
// //           <div
// //             className={`mod_column viewport container has-media ${getAnimationClass(
// //               "columnSection2"
// //             )}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: columnSection2.backgroundColor,
// //               color: columnSection2.textColor,
// //               paddingTop: columnSection2.paddingTop,
// //               paddingBottom: columnSection2.paddingBottom,
// //             }}
// //           >
// //             <div
// //               className={`row mt-30 mb-30 media-${
// //                 columnSection2.mediaPosition || "right"
// //               }`}
// //               data-api-key="content"
// //             >
// //               <div className="item">
// //                 <h2 style={{ color: columnSection2.headingColor }}>
// //                   {columnSection2.heading}
// //                 </h2>
// //                 {columnSection2.content && (
// //                   <div
// //                     dangerouslySetInnerHTML={{
// //                       __html: lexicalToHtml(columnSection2.content),
// //                     }}
// //                   />
// //                 )}
// //                 {columnSection2.bulletPoints && (
// //                   <ul
// //                     className={listStyles.useColumnsForBullets ? "columns" : ""}
// //                     style={{
// //                       listStyleType: listStyles.bulletStyle,
// //                       color: listStyles.bulletColor,
// //                     }}
// //                   >
// //                     {columnSection2.bulletPoints.map((point, index) => (
// //                       <li key={index}>{point.text}</li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </div>
// //               {columnSection2.mediaImage && (
// //                 <picture className="media">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={column2Images.mobile}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={column2Images.tablet}
// //                   />
// //                   <source srcSet={column2Images.desktop} />
// //                   <img
// //                     src={column2Images.desktop}
// //                     loading="lazy"
// //                     alt={column2Images.alt}
// //                     draggable="false"
// //                   />
// //                 </picture>
// //               )}
// //             </div>
// //           </div>
// //         );

// //       case "halfImageSection":
// //         if (!halfImageSection.show) return null;
// //         const halfImages = getResponsiveImageUrls(halfImageSection.image);
// //         return (
// //           <div
// //             className={`mod_half_image viewport half-image container ${getAnimationClass(
// //               "halfImageSection"
// //             )} background-navy`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: halfImageSection.backgroundColor,
// //               color: halfImageSection.textColor,
// //               paddingTop: halfImageSection.paddingTop,
// //               paddingBottom: halfImageSection.paddingBottom,
// //             }}
// //           >
// //             <div
// //               className={`row half-image-row mt-0 mb-0 ${
// //                 halfImageSection.imagePosition === "right" ? "flipped" : ""
// //               } align-${halfImageSection.verticalAlignment || "center"}`}
// //             >
// //               <div className="media">
// //                 <picture className="background">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={halfImages.mobile}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={halfImages.tablet}
// //                   />
// //                   <source
// //                     media="(max-width:1400px)"
// //                     srcSet={halfImages.desktop}
// //                   />
// //                   <source srcSet={halfImages.large} />
// //                   <img
// //                     src={halfImages.large}
// //                     loading="lazy"
// //                     alt={halfImages.alt}
// //                     draggable="false"
// //                     data-api-key="image"
// //                   />
// //                 </picture>
// //               </div>
// //               <div
// //                 className={`copy ${
// //                   halfImageSection.contentPadded ? "padded" : ""
// //                 }`}
// //               >
// //                 <div className="inner">
// //                   <div className="content" data-api-key="content">
// //                     <h2 style={{ color: halfImageSection.headingColor }}>
// //                       {halfImageSection.smallHeading && (
// //                         <span className="small">
// //                           {halfImageSection.smallHeading}
// //                         </span>
// //                       )}
// //                       {halfImageSection.heading}
// //                     </h2>
// //                     {halfImageSection.content && (
// //                       <div
// //                         dangerouslySetInnerHTML={{
// //                           __html: lexicalToHtml(halfImageSection.content),
// //                         }}
// //                       />
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
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
// //         maxWidth: globalStyles.containerMaxWidth,
// //         padding: globalStyles.containerPadding,
// //         fontFamily: globalStyles.fontFamily,
// //         color: globalStyles.textColor,
// //         margin: "0 auto",
// //       }}
// //     >
// //       {pageData.accessibilitySettings?.skipToContent && (
// //         <a
// //           href="#main"
// //           className="skip-to-content"
// //           style={{ position: "absolute", left: "-9999px", top: 0 }}
// //         >
// //           Skip to content
// //         </a>
// //       )}
// //       {sectionOrder.map((item, index) => (
// //         <React.Fragment key={index}>
// //           {renderSection(item.section)}
// //         </React.Fragment>
// //       ))}
// //     </main>
// //   );
// // };

// // export default MensServices;

// // "use client";

// // import React, { useEffect, useState } from "react";

// // interface MensServicesData {
// //   heroSection?: any;
// //   introSection?: any;
// //   bannerSection1?: any;
// //   columnSection1?: any;
// //   bannerSection2?: any;
// //   columnSection2?: any;
// //   halfImageSection?: any;
// //   sectionOrder?: Array<{ section: string }>;
// // }

// // const MensServices: React.FC = () => {
// //   const [data, setData] = useState<MensServicesData | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(
// //           "https://goldfingerbackend.vercel.app/api/mens-services-page-component?where[isActive][equals]=true&limit=1"
// //         );
// //         const result = await response.json();
// //         if (result.docs && result.docs.length > 0) {
// //           setData(result.docs[0]);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching Mens Services data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //    function getImageUrl(imageField: any): string {
// //     if (!imageField) return "";
// //     if (typeof imageField === "object" && imageField.cloudinary_url) {
// //       return imageField.cloudinary_url;
// //     }
// //     if (typeof imageField === "object" && imageField.url) {
// //       return imageField.url;
// //     }
// //     if (typeof imageField === "string") {
// //       return imageField;
// //     }
// //     return "";
// //   }

// //   // Helper function to get responsive image URLs
// //    function getResponsiveImageUrls(imageGroup: any) {
// //     if (!imageGroup) {
// //       return {
// //         mobile: "",
// //         tablet: "",
// //         desktop: "",
// //         large: "",
// //         alt: "",
// //       };
// //     }
// //     return {
// //       mobile: getImageUrl(imageGroup.mobile),
// //       tablet: getImageUrl(imageGroup.tablet),
// //       desktop: getImageUrl(imageGroup.desktop),
// //       large: getImageUrl(imageGroup.large),
// //       alt: imageGroup.alt || "",
// //     };
// //   }

// //   const lexicalToHtml = (lexicalJSON: any): string => {
// //     if (!lexicalJSON || !lexicalJSON.root) return "";

// //     const processNode = (node: any): string => {
// //       if (!node) return "";

// //       if (node.type === "text") {
// //         let text = node.text || "";
// //         if (node.format) {
// //           if (node.format & 1) text = `<strong>${text}</strong>`;
// //           if (node.format & 2) text = `<em>${text}</em>`;
// //         }
// //         return text;
// //       }

// //       if (node.children && Array.isArray(node.children)) {
// //         const childrenHtml = node.children.map(processNode).join("");

// //         switch (node.type) {
// //           case "paragraph":
// //             return `<p>${childrenHtml}</p>`;
// //           case "heading":
// //             const tag = node.tag || "h2";
// //             return `<${tag}>${childrenHtml}</${tag}>`;
// //           case "list":
// //             const listTag = node.listType === "number" ? "ol" : "ul";
// //             return `<${listTag}>${childrenHtml}</${listTag}>`;
// //           case "listitem":
// //             return `<li>${childrenHtml}</li>`;
// //           case "root":
// //             return childrenHtml;
// //           default:
// //             return childrenHtml;
// //         }
// //       }

// //       return "";
// //     };

// //     return processNode(lexicalJSON.root);
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   const heroData = data?.heroSection || {};
// //   const introData = data?.introSection || {};
// //   const banner1Data = data?.bannerSection1 || {};
// //   const column1Data = data?.columnSection1 || {};
// //   const banner2Data = data?.bannerSection2 || {};
// //   const column2Data = data?.columnSection2 || {};
// //   const halfImageData = data?.halfImageSection || {};

// //   return (
// //     <main id="main">
// //       {heroData.show !== false && (
// //         <div className="mod_hero banner mobile-stack" data-s3-module>
// //           <div className="wrapper">
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${getImageUrl(
// //                   heroData.backgroundImage?.mobile
// //                 )}?auto=format,compress&w=420, ${getImageUrl(
// //                   heroData.backgroundImage?.mobile
// //                 )}?auto=format,compress&w=630 2x`}
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${getImageUrl(
// //                   heroData.backgroundImage?.tablet
// //                 )}?auto=format,compress&w=800, ${getImageUrl(
// //                   heroData.backgroundImage?.tablet
// //                 )}?auto=format,compress&w=1200 2x`}
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${getImageUrl(
// //                   heroData.backgroundImage?.desktop
// //                 )}?auto=format,compress&w=1400, ${getImageUrl(
// //                   heroData.backgroundImage?.desktop
// //                 )}?auto=format,compress&w=2100 2x`}
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset={`${getImageUrl(
// //                   heroData.backgroundImage?.large
// //                 )}?auto=format,compress&w=1994`}
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src={`${getImageUrl(
// //                   heroData.backgroundImage?.large
// //                 )}?auto=format,compress&w=1994`}
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1994"
// //                 height="1206"
// //                 alt={heroData.backgroundImage?.alt || "Background Texture"}
// //                 draggable="false"
// //               />
// //             </picture>
// //             <div className="row">
// //               <div className="inner">
// //                 <ul className="partial_breadcrumb" data-s3-partial>
// //                   {heroData.breadcrumbs &&
// //                     heroData.breadcrumbs.map((crumb: any, index: number) => (
// //                       <li key={index}>
// //                         <a
// //                           href={crumb.url || "/"}
// //                           role="link"
// //                           aria-label={
// //                             crumb.ariaLabel ||
// //                             "Breadcrumbs to help navigate the user"
// //                           }
// //                         >
// //                           {crumb.label || "Home"}
// //                         </a>
// //                       </li>
// //                     ))}
// //                 </ul>
// //                 <h1>{heroData.title || "Men's Services"}</h1>
// //                 <div className="text">
// //                   {heroData.description && (
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(heroData.description),
// //                       }}
// //                     />
// //                   )}
// //                   {heroData.ctaButton?.show !== false && (
// //                     <p>
// //                       <a
// //                         className="btn white"
// //                         href={heroData.ctaButton?.url || "/contact/"}
// //                         role="button"
// //                       >
// //                         {heroData.ctaButton?.text || "Book an Appointment"}
// //                       </a>
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="media">
// //               <picture className="background">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet={`${getImageUrl(
// //                     heroData.mediaImage?.mobile
// //                   )}?auto=format,compress&w=420, ${getImageUrl(
// //                     heroData.mediaImage?.mobile
// //                   )}?auto=format,compress&w=630 2x`}
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     heroData.mediaImage?.mobile
// //                   )}?auto=format,compress&w=420, ${getImageUrl(
// //                     heroData.mediaImage?.mobile
// //                   )}?auto=format,compress&w=630 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet={`${getImageUrl(
// //                     heroData.mediaImage?.tablet
// //                   )}?auto=format,compress&w=800, ${getImageUrl(
// //                     heroData.mediaImage?.tablet
// //                   )}?auto=format,compress&w=1200 2x`}
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     heroData.mediaImage?.tablet
// //                   )}?auto=format,compress&w=800, ${getImageUrl(
// //                     heroData.mediaImage?.tablet
// //                   )}?auto=format,compress&w=1200 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:1400px)"
// //                   srcSet={`${getImageUrl(
// //                     heroData.mediaImage?.desktop
// //                   )}?auto=format,compress&w=1400, ${getImageUrl(
// //                     heroData.mediaImage?.desktop
// //                   )}?auto=format,compress&w=2100 2x`}
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     heroData.mediaImage?.desktop
// //                   )}?auto=format,compress&w=1400, ${getImageUrl(
// //                     heroData.mediaImage?.desktop
// //                   )}?auto=format,compress&w=2100 2x`}
// //                 />
// //                 <source
// //                   srcSet={`${getImageUrl(
// //                     heroData.mediaImage?.large
// //                   )}?auto=format,compress&w=1920`}
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     heroData.mediaImage?.large
// //                   )}?auto=format,compress&w=1920`}
// //                 />
// //                 <img
// //                   src={getImageUrl(heroData.mediaImage?.large)}
// //                   width="1920"
// //                   height="1206"
// //                   alt={heroData.mediaImage?.alt || "Brunette man smiling"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {introData.show !== false && (
// //         <div
// //           className="mod_intro container viewport option-1 wide wow fadeInUp"
// //           data-s3-module
// //         >
// //           <div className="row ">
// //             {introData.logo && (
// //               <picture className="logo">
// //                 <img
// //                   src={getImageUrl(introData.logo)}
// //                   width={58}
// //                   height={64}
// //                   loading="lazy"
// //                   alt={introData.logoAlt || "Goldfingers aesthetic logo"}
// //                   draggable="false"
// //                   data-api-key="logo"
// //                 />
// //               </picture>
// //             )}
// //             <div className="inner" data-api-key="content">
// //               {introData.heading && <h2>{introData.heading}</h2>}
// //               {introData.content && (
// //                 <div
// //                   dangerouslySetInnerHTML={{
// //                     __html: lexicalToHtml(introData.content),
// //                   }}
// //                 />
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {banner1Data.show !== false && (
// //         <div
// //           className="mod_banner dark  hide-divider viewport background-9"
// //           data-s3-module
// //         >
// //           <div className="row wow fadeInUp">
// //             <div className="content" data-api-key="top_content">
// //               {banner1Data.heading && <h2>{banner1Data.heading}</h2>}
// //               {banner1Data.content && (
// //                 <div
// //                   dangerouslySetInnerHTML={{
// //                     __html: lexicalToHtml(banner1Data.content),
// //                   }}
// //                 />
// //               )}
// //               {banner1Data.bulletPoints &&
// //                 banner1Data.bulletPoints.length > 0 && (
// //                   <ul>
// //                     {banner1Data.bulletPoints.map(
// //                       (bullet: any, index: number) => (
// //                         <li key={index}>{bullet.text}</li>
// //                       )
// //                     )}
// //                   </ul>
// //                 )}
// //             </div>
// //           </div>
// //           <picture className="background">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner1Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=800, ${getImageUrl(
// //                 banner1Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=1200 2x`}
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner1Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=800&q=85&sharp=5, ${getImageUrl(
// //                 banner1Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
// //             />
// //             <source
// //               media="(max-width:1400px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner1Data.backgroundImage?.desktop
// //               )}?auto=format,compress&w=1400&q=85&sharp=5, ${getImageUrl(
// //                 banner1Data.backgroundImage?.desktop
// //               )}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner1Data.backgroundImage?.large
// //               )}?auto=format,compress&w=2200&q=85&sharp=5`}
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src={`${getImageUrl(
// //                 banner1Data.backgroundImage?.large
// //               )}?auto=format,compress&w=2200&q=85&sharp=5`}
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="2200"
// //               height="802"
// //               alt={banner1Data.backgroundImage?.alt || "Banner media"}
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       )}

// //       {column1Data.show !== false && (
// //         <div className="mod_column viewport container" data-s3-module>
// //           <div className="row pt-30 mb-30" data-api-key="content">
// //             <div className="item">
// //               {column1Data.heading && <h2>{column1Data.heading}</h2>}
// //               {column1Data.content && (
// //                 <div
// //                   dangerouslySetInnerHTML={{
// //                     __html: lexicalToHtml(column1Data.content),
// //                   }}
// //                 />
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {banner2Data.show !== false && (
// //         <div
// //           className="mod_banner dark  hide-divider viewport background-14"
// //           data-s3-module
// //         >
// //           <div className="row wow fadeInUp">
// //             <div className="content" data-api-key="top_content">
// //               <div className="columns-two vertical-align">
// //                 <div>
// //                   {banner2Data.heading && <h2>{banner2Data.heading}</h2>}
// //                   {banner2Data.content && (
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(banner2Data.content),
// //                       }}
// //                     />
// //                   )}
// //                 </div>
// //                 <div>
// //                   {banner2Data.bulletPoints &&
// //                     banner2Data.bulletPoints.length > 0 && (
// //                       <>
// //                         <p>
// //                           The treatment is non-invasive and typically requires
// //                           multiple sessions to achieve optimal results. KYBELLA
// //                           may be right for you if:
// //                         </p>
// //                         <ul>
// //                           {banner2Data.bulletPoints.map(
// //                             (bullet: any, index: number) => (
// //                               <li key={index}>{bullet.text}</li>
// //                             )
// //                           )}
// //                         </ul>
// //                       </>
// //                     )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <picture className="background">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner2Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=800, ${getImageUrl(
// //                 banner2Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=1200 2x`}
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner2Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=800&q=85&sharp=5, ${getImageUrl(
// //                 banner2Data.backgroundImage?.tablet
// //               )}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
// //             />
// //             <source
// //               media="(max-width:1400px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner2Data.backgroundImage?.desktop
// //               )}?auto=format,compress&w=1400&q=85&sharp=5, ${getImageUrl(
// //                 banner2Data.backgroundImage?.desktop
// //               )}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset={`${getImageUrl(
// //                 banner2Data.backgroundImage?.large
// //               )}?auto=format,compress&w=2200&q=85&sharp=5`}
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src={`${getImageUrl(
// //                 banner2Data.backgroundImage?.large
// //               )}?auto=format,compress&w=2200&q=85&sharp=5`}
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="2200"
// //               height="802"
// //               alt={banner2Data.backgroundImage?.alt || "Banner media"}
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       )}

// //       {column2Data.show !== false && (
// //         <div className="mod_column viewport container has-media" data-s3-module>
// //           <div className="row mt-30 mb-30 media-right" data-api-key="content">
// //             <div className="item">
// //               {column2Data.heading && <h2>{column2Data.heading}</h2>}
// //               {column2Data.content && (
// //                 <div
// //                   dangerouslySetInnerHTML={{
// //                     __html: lexicalToHtml(column2Data.content),
// //                   }}
// //                 />
// //               )}
// //               {column2Data.bulletPoints &&
// //                 column2Data.bulletPoints.length > 0 && (
// //                   <ul className="columns">
// //                     {column2Data.bulletPoints.map(
// //                       (bullet: any, index: number) => (
// //                         <li key={index}>{bullet.text}</li>
// //                       )
// //                     )}
// //                   </ul>
// //                 )}
// //             </div>
// //             {column2Data.mediaImage && (
// //               <picture className="media">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     column2Data.mediaImage?.mobile
// //                   )}?auto=format,compress&w=420, ${getImageUrl(
// //                     column2Data.mediaImage?.mobile
// //                   )}?auto=format,compress&w=630 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     column2Data.mediaImage?.tablet
// //                   )}?auto=format,compress&w=800, ${getImageUrl(
// //                     column2Data.mediaImage?.tablet
// //                   )}?auto=format,compress&w=1200 2x`}
// //                 />
// //                 <source
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     column2Data.mediaImage?.desktop
// //                   )}?auto=format,compress&w=904`}
// //                 />
// //                 <img
// //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-src={`${getImageUrl(
// //                     column2Data.mediaImage?.desktop
// //                   )}?auto=format,compress&w=904`}
// //                   loading="lazy"
// //                   data-lazyload="img"
// //                   width="904"
// //                   height="1062"
// //                   alt={column2Data.mediaImage?.alt || "stone wall"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {halfImageData.show !== false && (
// //         <div
// //           className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
// //           data-s3-module
// //         >
// //           <div className="row half-image-row mt-0 mb-0">
// //             <div className="media">
// //               <picture className="background">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     halfImageData.image?.mobile
// //                   )}?auto=format,compress&w=420, ${getImageUrl(
// //                     halfImageData.image?.mobile
// //                   )}?auto=format,compress&w=630 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     halfImageData.image?.tablet
// //                   )}?auto=format,compress&w=800, ${getImageUrl(
// //                     halfImageData.image?.tablet
// //                   )}?auto=format,compress&w=1200 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:1400px)"
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     halfImageData.image?.desktop
// //                   )}?auto=format,compress&w=1400, ${getImageUrl(
// //                     halfImageData.image?.desktop
// //                   )}?auto=format,compress&w=2100 2x`}
// //                 />
// //                 <source
// //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-srcset={`${getImageUrl(
// //                     halfImageData.image?.large
// //                   )}?auto=format,compress&w=1832`}
// //                 />
// //                 <img
// //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                   data-lazyload-src={`${getImageUrl(
// //                     halfImageData.image?.large
// //                   )}?auto=format,compress&w=1832`}
// //                   loading="lazy"
// //                   data-lazyload="img"
// //                   width="1832"
// //                   height="1824"
// //                   alt={halfImageData.image?.alt || "Man getting a facial"}
// //                   draggable="false"
// //                   data-api-key="image"
// //                 />
// //               </picture>
// //             </div>
// //             <div className="copy padded">
// //               <div className="inner">
// //                 <div className="content" data-api-key="content">
// //                   {halfImageData.smallHeading && (
// //                     <h2>
// //                       <span className="small">
// //                         {halfImageData.smallHeading}
// //                       </span>
// //                       {halfImageData.heading}
// //                     </h2>
// //                   )}
// //                   {!halfImageData.smallHeading && halfImageData.heading && (
// //                     <h2>{halfImageData.heading}</h2>
// //                   )}
// //                   {halfImageData.content && (
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(halfImageData.content),
// //                       }}
// //                     />
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </main>
// //   );
// // };

// // export default MensServices;

"use client";

import React, { useEffect, useState } from "react";
import {
  fetchMensFillersPageData,
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchMensServicesPageComponent";

interface MensServicesData {
  heroSection: {
    show: boolean;
    backgroundColor?: string;
    backgroundImage: any;
    breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
    title: string;
    titleColor?: string;
    titleFontSize?: string;
    description?: any;
    descriptionColor?: string;
    ctaButton: {
      show: boolean;
      text: string;
      url: string;
      backgroundColor?: string;
      textColor?: string;
      hoverBackgroundColor?: string;
    };
    mediaImage: any;
  };
  introSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    logo?: any;
    logoAlt?: string;
    heading: string;
    headingColor?: string;
    content: any;
  };
  bannerSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    backgroundImage: any;
    isDark?: boolean;
    heading: string;
    headingColor?: string;
    content?: any;
    bulletPoints?: Array<{ text: string }>;
  };
  columnSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
    heading: string;
    headingColor?: string;
    content?: any;
  };
  bannerSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    backgroundImage: any;
    isDark?: boolean;
    heading: string;
    headingColor?: string;
    content?: any;
    useColumnLayout?: boolean;
    bulletPoints?: Array<{ text: string }>;
  };
  columnSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    mediaPosition?: string;
    paddingTop?: string;
    paddingBottom?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    bulletPoints?: Array<{ text: string }>;
    mediaImage: any;
  };
  halfImageSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    imagePosition?: string;
    verticalAlignment?: string;
    paddingTop?: string;
    paddingBottom?: string;
    smallHeading?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    contentPadded?: boolean;
    image: any;
  };
  globalStyles?: any;
  buttonStyles?: any;
}

const MensServices: React.FC = () => {
  const [pageData, setPageData] = useState<MensServicesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMensFillersPageData(
          "mens-services-page-component"
        );
        setPageData(data);
      } catch (error) {
        console.error("Error fetching MensServices page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const {
    heroSection,
    introSection,
    bannerSection1,
    columnSection1,
    bannerSection2,
    columnSection2,
    halfImageSection,
    globalStyles = {},
    buttonStyles = {},
  } = pageData;

  const heroBgImages = heroSection.show
    ? getResponsiveImageUrls(heroSection.backgroundImage)
    : {};
  const heroMediaImages = heroSection.show
    ? getResponsiveImageUrls(heroSection.mediaImage)
    : {};
  const banner1Images = bannerSection1.show
    ? getResponsiveImageUrls(bannerSection1.backgroundImage)
    : {};
  const banner2Images = bannerSection2.show
    ? getResponsiveImageUrls(bannerSection2.backgroundImage)
    : {};
  const column2MediaImages = columnSection2.show
    ? getResponsiveImageUrls(columnSection2.mediaImage)
    : {};
  const halfImages = halfImageSection.show
    ? getResponsiveImageUrls(halfImageSection.image)
    : {};

  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      {heroSection.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module>
          <div className="wrapper">
            <picture className="background">
              <source media="(max-width:420px)" srcSet={heroBgImages.mobile} />
              <source media="(max-width:800px)" srcSet={heroBgImages.tablet} />
              <source
                media="(max-width:1400px)"
                srcSet={heroBgImages.desktop}
              />
              <source srcSet={heroBgImages.large} />
              <img
                src={heroBgImages.large}
                loading="lazy"
                alt={heroBgImages.alt || "Background Texture"}
                draggable="false"
              />
            </picture>
            <div className="row">
              <div className="inner">
                <ul className="partial_breadcrumb" data-s3-partial>
                  {heroSection.breadcrumbs.map((crumb, index) => (
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
                <div className="text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(heroSection.description),
                    }}
                  />
                  {heroSection.ctaButton.show && (
                    <p>
                      <a
                        className="btn white"
                        href={heroSection.ctaButton.url}
                        role="button"
                      >
                        {heroSection.ctaButton.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={heroMediaImages.mobile}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={heroMediaImages.tablet}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={heroMediaImages.desktop}
                />
                <source srcSet={heroMediaImages.large} />
                <img
                  src={heroMediaImages.large}
                  alt={heroMediaImages.alt || "Brunette man smiling"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Intro Module */}
      {introSection.show && (
        <div
          className="mod_intro container viewport option-1 wide wow fadeInUp"
          data-s3-module
        >
          <div className="row ">
            {introSection.logo && (
              <picture className="logo">
                <img
                  src={getResponsiveImageUrls(introSection.logo).large}
                  loading="lazy"
                  alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="inner" data-api-key="content">
              <h2>{introSection.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(introSection.content),
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Banner Module */}
      {bannerSection1.show && (
        <div
          className={`mod_banner ${bannerSection1.isDark ? "dark" : ""}  hide-divider viewport background-9`}
          data-s3-module
        >
          <div className="row wow fadeInUp">
            <div className="content" data-api-key="top_content">
              <h2>{bannerSection1.heading}</h2>
              {bannerSection1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(bannerSection1.content),
                  }}
                />
              )}
              {bannerSection1.bulletPoints &&
                bannerSection1.bulletPoints.length > 0 && (
                  <ul>
                    {bannerSection1.bulletPoints.map((point, index) => (
                      <li key={index}>{point.text}</li>
                    ))}
                  </ul>
                )}
            </div>
          </div>
          <picture className="background">
            <source media="(max-width:420px)" srcSet={banner1Images.mobile} />
            <source media="(max-width:800px)" srcSet={banner1Images.tablet} />
            <source media="(max-width:1400px)" srcSet={banner1Images.desktop} />
            <source srcSet={banner1Images.large} />
            <img
              src={banner1Images.large}
              loading="lazy"
              alt={banner1Images.alt || "Banner media"}
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Column Module */}
      {columnSection1.show && (
        <div className="mod_column viewport container" data-s3-module>
          <div className="row pt-30 mb-30" data-api-key="content">
            <div className="item">
              <h2>{columnSection1.heading}</h2>
              {columnSection1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnSection1.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Banner Module */}
      {bannerSection2.show && (
        <div
          className={`mod_banner ${bannerSection2.isDark ? "dark" : ""}  hide-divider viewport background-14`}
          data-s3-module
        >
          <div className="row wow fadeInUp">
            <div className="content" data-api-key="top_content">
              {bannerSection2.useColumnLayout ? (
                <div className="columns-two vertical-align">
                  <div>
                    <h2>{bannerSection2.heading}</h2>
                    {bannerSection2.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(bannerSection2.content),
                        }}
                      />
                    )}
                  </div>
                  <div>
                    {bannerSection2.bulletPoints &&
                      bannerSection2.bulletPoints.length > 0 && (
                        <>
                          <p>
                            The treatment is non-invasive and typically requires
                            multiple sessions to achieve optimal results.
                            KYBELLA ®may be right for you if:
                          </p>
                          <ul>
                            {bannerSection2.bulletPoints.map((point, index) => (
                              <li key={index}>{point.text}</li>
                            ))}
                          </ul>
                        </>
                      )}
                  </div>
                </div>
              ) : (
                <>
                  <h2>{bannerSection2.heading}</h2>
                  {bannerSection2.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(bannerSection2.content),
                      }}
                    />
                  )}
                  {bannerSection2.bulletPoints &&
                    bannerSection2.bulletPoints.length > 0 && (
                      <ul>
                        {bannerSection2.bulletPoints.map((point, index) => (
                          <li key={index}>{point.text}</li>
                        ))}
                      </ul>
                    )}
                </>
              )}
            </div>
          </div>
          <picture className="background">
            <source media="(max-width:420px)" srcSet={banner2Images.mobile} />
            <source media="(max-width:800px)" srcSet={banner2Images.tablet} />
            <source media="(max-width:1400px)" srcSet={banner2Images.desktop} />
            <source srcSet={banner2Images.large} />
            <img
              src={banner2Images.large}
              loading="lazy"
              alt={banner2Images.alt || "Banner media"}
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Column Module */}
      {columnSection2.show && (
        <div className="mod_column viewport container has-media" data-s3-module>
          <div
            className={`row mt-30 mb-30 ${columnSection2.mediaPosition === "right" ? "media-right" : "media-left"}`}
            data-api-key="content"
          >
            <div className="item">
              <h2>{columnSection2.heading}</h2>
              {columnSection2.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnSection2.content),
                  }}
                />
              )}
              {columnSection2.bulletPoints &&
                columnSection2.bulletPoints.length > 0 && (
                  <ul className="columns">
                    {columnSection2.bulletPoints.map((point, index) => (
                      <li key={index}>{point.text}</li>
                    ))}
                  </ul>
                )}
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet={column2MediaImages.mobile}
              />
              <source
                media="(max-width:800px)"
                srcSet={column2MediaImages.tablet}
              />
              <source srcSet={column2MediaImages.desktop} />
              <img
                src={column2MediaImages.desktop || column2MediaImages.large}
                loading="lazy"
                alt={column2MediaImages.alt || "stone wall"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {/* Half Image Module */}
      {halfImageSection.show && (
        <div
          className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
          data-s3-module
        >
          <div className="row half-image-row mt-0 mb-0">
            <div className="media">
              <picture className="background">
                <source media="(max-width:420px)" srcSet={halfImages.mobile} />
                <source media="(max-width:800px)" srcSet={halfImages.tablet} />
                <source
                  media="(max-width:1400px)"
                  srcSet={halfImages.desktop}
                />
                <source srcSet={halfImages.large} />
                <img
                  src={halfImages.large}
                  loading="lazy"
                  alt={halfImages.alt || "Man getting a facial"}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div
              className={`copy ${halfImageSection.contentPadded ? "padded" : ""}`}
            >
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2>
                    {halfImageSection.smallHeading && (
                      <span className="small">
                        {halfImageSection.smallHeading}
                      </span>
                    )}
                    {halfImageSection.heading}
                  </h2>
                  {halfImageSection.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImageSection.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* /Page Layout */}
    </main>
  );
};

export default MensServices;