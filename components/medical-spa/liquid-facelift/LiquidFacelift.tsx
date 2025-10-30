// import React from "react";

// const LiquidFacelift: React.FC = () => {
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
//                     href="/medical-spa/liquid-facelift/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Liquid Facelift
//                   </a>
//                 </li>
//               </ul>
//               <h1>Liquid (Non-Surgical) Facelift</h1>
//               <div className="text">
//                 <p>
//                   The Goldfingers Non-Surgical Facelift, most commonly known as
//                   a Liquid Facelift, turns back time, naturally.
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
//                 srcSet="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Dr. Crowley giving consultation"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Intro Module */}
//       <div
//         className="mod_intro container viewport option-1 wow fadeInUp"
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
//               <span className="small">Lift, firm, and enhance &ndash;</span>
//               No Surgery Required
//             </h2>
//             <p>
//               At Goldfingers Aesthetics &amp;Plastic Surgery, our skilled
//               aesthetic injectors have been trained to the highest diamond
//               standards and have years of experience. Our state-of-the-art
//               injection techniques are geared to achieve the changes our clients
//               envision in non-surgical facelifts.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
//         data-s3-module
//       >
//         <div className="row half-image-row top-aligned mt-0 mb-0">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009337-non-surgical-facelift.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="Brunette woman touching face"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>
//                   Refined Techniques For Beautiful,{" "}
//                   <span className="block-desktop">Natural-Looking Results</span>
//                 </h2>
//                 <p>
//                   What sets our non-surgical facelift apart is that we use
//                   advanced cannula Injection techniques to give patients a
//                   customized, naturally contoured look. Every injection is based
//                   on the MD Codes, or &ldquo;medical codes,&rdquo;which cover
//                   the target depth of injections, the ideal delivery tool, and
//                   the minimal product used to achieve results. Unlike
//                   traditional methods where the problem area was treated
//                   directly, the MD Codes &trade;and Goldfingers 8 Point Face
//                   Lift focus on adding weight and volume to the issue. That
//                   approach delivers natural, beautiful outcomes that benefit
//                   patients. Contact us today to learn more!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module>
//         <div className="row mt-30 pb-0" data-api-key="content">
//           <div className="item">
//             <h2>What is an 8-point non-surgical facelift?</h2>
//             <p>
//               The Goldfingers 8 Point Face Lift is a technique to restore lost
//               facial volume in 8 strategic areas, giving maximal lift and
//               support for all ages. The results are instant, with minimal
//               discomfort or downtime. With MD codes, the lifting occurs in all
//               the right areas, replacing lost volume rather than over-inflating
//               and creating an unnatural look. This approach is as follows:
//             </p>
//             <ul className="columns">
//               <li>
//                 <strong>Facial areas 1 and 2:</strong>
//                 These precision injections address the cheekbone structure. A
//                 small amount of volume in the area enhances the cheekbones while
//                 lifting nasolabial folds.
//               </li>
//               <li>
//                 <strong>Facial area 3:</strong>
//                 Tear trough and midface injections will reduce the appearance of
//                 tired hollows under the eyes. If you have significant hollows,
//                 you may need additional injections with a softer, more flexible
//                 dermal filler to help with this. Ask your clinician if this
//                 further treatment is right for you.
//               </li>
//               <li>
//                 <strong>Facial area 4:</strong>
//                 The nasolabial folds (smile lines) deepen with age, so adding
//                 volume here can help give a more youthful appearance. It may
//                 suit some people to have nasolabial folds, while in others, it
//                 may be undesirable so a dermal filler can be of benefit.
//               </li>
//               <li>
//                 <strong>Facial area 5:</strong>
//                 Turned-down mouth corners can give you a tired or angry look,
//                 addressed by treating the area with custom injections to lift
//                 and restore.
//               </li>
//               <li>
//                 <strong>Facial area 6:</strong>
//                 The loss of volume at the jaw, cheek, and chin area can all
//                 contribute to jowl formation, so replacing volume in the hollow
//                 along the jawline, along with the other areas of the 8 Point
//                 Lift, can all help to reduce or improve jowls.
//               </li>
//               <li>
//                 <strong>Facial area 7: </strong>
//                 The jawline angle may have lost its sculpted, youthful look. A
//                 subtle enhancement of the angle of the jaw can help lift these
//                 areas. If you have a significant loss of volume in this area,
//                 you may require more filler and specialized techniques to
//                 achieve the best results.&nbsp;
//               </li>
//               <li>
//                 <strong>Facial area 8:</strong>
//                 Lower cheek volume and buccal fat zone contribute to
//                 &ldquo;accordion &rdquo;smile lines and can make the face appear
//                 gaunt while treating this area with filler can help improve the
//                 natural curve and structure of the cheek.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* CTA Before & After Feed Module */}
//       <div
//         className="mod_cta_ba_feed cta container wow fadeInUp mt-0 mb-0"
//         data-s3-module
//       >
//         <div className="row">
//           <div className="text">
//             <h2 data-api-key="title">Before & After</h2>
//             <div className="patients" data-api-key="patients">
//               <div className="patient-wrap pslider" data-items="3">
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/liquid-facelift/item/177150332/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222273-facelift-edited.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695222273-facelift-edited.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222273-facelift-edited.png?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695222273-facelift-edited.png?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222273-facelift-edited.png?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695222273-facelift-edited.png?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="790"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/liquid-facelift/item/177150337/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222306-facelift-edited.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695222306-facelift-edited.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222306-facelift-edited.png?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695222306-facelift-edited.png?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222306-facelift-edited.png?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695222306-facelift-edited.png?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="793"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/non-surgical/liquid-facelift/item/177150341/"
//                     className="patient single"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222339-facelift-edited.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695222339-facelift-edited.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222339-facelift-edited.png?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695222339-facelift-edited.png?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695222339-facelift-edited.png?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695222339-facelift-edited.png?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="803"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <a
//               href="/gallery/non-surgical/liquid-facelift/"
//               className="btn view-more"
//               title="View before and after gallery images"
//               aria-label="View before and after gallery images"
//             >
//               View Gallery
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* CTA General Module */}
//       <div
//         className="mod_cta_general viewport container cta  thin wow fadeInRight mt-0 mb-0 background-1"
//         data-s3-module
//       >
//         <div className="row">
//           <div className="text">
//             <h2>
//               <a href="/contact/">Schedule a Consultation</a>
//             </h2>
//             <a href="/contact/" className="btn white">
//               Book an Appointment
//             </a>
//           </div>
//           <div className="media"></div>
//         </div>
//       </div>

//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport    container option-1 default  no-bg wider "
//         data-s3-module
//       >
//         <div className="row">
//           <div className="content-before">
//             <h2>
//               Why choose us for{" "}
//               <span className="block-desktop">a non-surgical facelift?</span>
//             </h2>
//             <p>
//               Goldfingers Aesthetics stands out as a premier destination for
//               non-surgical facelift treatments, offering a range of innovative
//               solutions that can help you achieve a rejuvenated and lifted
//               appearance without the need for invasive surgery. Here &rsquo;s
//               why you can trust our expert providers for this procedure:
//             </p>
//           </div>
//           <div className="boxes wider">
//             <div className="box wow fadeInUp">
//               <h3>Expertise and experience</h3>
//               <p>
//                 Our team of skilled practitioners boasts extensive experience in
//                 the field of aesthetic medicine. With a deep understanding of
//                 facial anatomy and advanced techniques, we have the expertise
//                 needed to tailor non-surgical facelift treatments to your unique
//                 needs.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Fully customized treatment plans</h3>
//               <p>
//                 We recognize that no two faces are alike. Your concerns and
//                 goals are distinct, and our approach reflects that. We work
//                 closely with you to develop personalized treatment plans that
//                 address your specific areas of concern, ensuring that you
//                 achieve natural-looking results.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Cutting-edge techniques</h3>
//               <p>
//                 At Goldfingers Aesthetics, we stay at the forefront of aesthetic
//                 advancements. Our non-surgical facelift treatments utilize
//                 state-of-the-art techniques and technologies to provide optimal
//                 lifting and rejuvenation without the need for surgical
//                 intervention.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>A comprehensive range of treatments</h3>
//               <p>
//                 From dermal fillers and BOTOX &reg;to natural regenerative
//                 treatments with Sculptra &reg;, we offer a comprehensive range
//                 of non-surgical facelift options. This allows us to tailor your
//                 treatment to achieve the most effective and satisfying results
//                 based on your preferences and desired outcomes.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Artistry and precision</h3>
//               <p>
//                 Non-surgical facelifts require both technical skill and an
//                 artistic eye. Our practitioners possess the artistry needed to
//                 enhance your natural beauty while delivering subtle yet
//                 impactful improvements that rejuvenate and refresh your
//                 appearance.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Patient-centered care</h3>
//               <p>
//                 Your comfort, safety, and satisfaction are our top priorities.
//                 From the moment you step into our clinic, you &rsquo;ll
//                 experience a warm and welcoming environment where your concerns
//                 are heard, your questions are answered, and your journey to a
//                 non-surgical facelift is guided with utmost care.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Proven success</h3>
//               <p>
//                 Our track record of successful non-surgical facelift treatments
//                 and delighted patients speaks for itself. We are dedicated to
//                 helping you achieve your aesthetic goals with confidence and a
//                 renewed sense of self.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Transformative results</h3>
//               <p>
//                 Our non-surgical facelift treatments can lead to transformative
//                 results that enhance your appearance and boost your self-esteem.
//                 Experience the rejuvenating effects of a customized,
//                 non-surgical facelift and discover a more youthful, revitalized
//                 version of yourself.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default LiquidFacelift;

"use client";

import React, { useEffect, useState } from "react";
import {
  fetchLiquidFillersPageData,
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchLiquidFaceliftPageComponent"; // Adjust path to your API utilities

interface LiquidFaceliftData {
  heroSection: {
    show: boolean;
    backgroundColor?: string;
    backgroundImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
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
    mediaImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
  };
  introSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    logo?: any;
    logoAlt?: string;
    heading: string;
    headingColor?: string;
    headingSmallText?: string;
    content: any;
  };
  halfImageSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    imagePosition: string;
    verticalAlignment: string;
    heading: string;
    headingColor?: string;
    headingBlockText?: string;
    content?: any;
    image: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
    marginTop?: string;
    marginBottom?: string;
  };
  columnSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    introContent?: any;
    facialAreas?: Array<{ areaNumber: string; description: any }>;
    marginTop?: string;
    paddingBottom?: string;
  };
  ctaBeforeAfterSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    patients: Array<{
      url: string;
      image: { mobile?: any; tablet?: any; desktop?: any; alt?: string };
    }>;
    sliderItemsCount: string;
    viewGalleryButton: {
      show: boolean;
      text: string;
      url: string;
      title?: string;
      ariaLabel?: string;
      backgroundColor?: string;
      textColor?: string;
    };
    marginTop?: string;
    marginBottom?: string;
  };
  ctaGeneralSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingLink?: string;
    headingColor?: string;
    ctaButton: {
      text: string;
      url: string;
      backgroundColor?: string;
      textColor?: string;
      hoverBackgroundColor?: string;
    };
    layoutStyle: string;
    marginTop?: string;
    marginBottom?: string;
  };
  boxGridSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    headingBlockText?: string;
    introContent?: any;
    boxes: Array<{ title: string; content: any }>;
    gridLayout: string;
  };
  sectionOrder: Array<{ section: string }>;
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
}

const LiquidFacelift: React.FC = () => {
  const [pageData, setPageData] = useState<LiquidFaceliftData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLiquidFillersPageData(
          "liquid-facelift-page-component"
        ); // Fetch from liquid-facelift-page-component
        setPageData(data);
      } catch (error) {
        console.error("Error fetching liquid facelift page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getLogoUrl = (logo: any) => {
    if (!logo) return null;

    // If logo is a string, return it as is
    if (typeof logo === "string") return logo;

    // Prioritize cloudinary_url if available
    if (logo.cloudinary_url) return logo.cloudinary_url;

    // Fallback to url property
    if (logo.url) return logo.url;

    return null;
  };

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const {
    heroSection,
    introSection,
    halfImageSection,
    columnSection,
    ctaBeforeAfterSection,
    ctaGeneralSection,
    boxGridSection,
    sectionOrder,
    globalStyles,
  } = pageData;

  const renderSection = (section: string) => {
    switch (section) {
      case "hero":
        if (!heroSection.show) return null;
        const heroBgImages = getResponsiveImageUrls(
          heroSection.backgroundImage
        );
        const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
        return (
          <div
            className="mod_hero banner mobile-stack"
            data-s3-module
            style={{ backgroundColor: heroSection.backgroundColor }}
          >
            <div className="wrapper">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={heroBgImages.mobile}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={heroBgImages.tablet}
                />
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
                          aria-label={crumb.ariaLabel}
                        >
                          {crumb.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h1
                    style={{
                      color: heroSection.titleColor,
                      fontSize: heroSection.titleFontSize,
                    }}
                  >
                    {heroSection.title}
                  </h1>
                  <div
                    className="text"
                    style={{ color: heroSection.descriptionColor }}
                  >
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
                          style={{
                            backgroundColor:
                              heroSection.ctaButton.backgroundColor,
                            color: heroSection.ctaButton.textColor,
                          }}
                          onMouseOver={(e) =>
                            heroSection.ctaButton.hoverBackgroundColor &&
                            (e.currentTarget.style.backgroundColor =
                              heroSection.ctaButton.hoverBackgroundColor)
                          }
                          onMouseOut={(e) =>
                            heroSection.ctaButton.backgroundColor &&
                            (e.currentTarget.style.backgroundColor =
                              heroSection.ctaButton.backgroundColor)
                          }
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
                    loading="lazy"
                    alt={
                      heroMediaImages.alt || "Dr. Crowley giving consultation"
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
        return (
          <div
            className="mod_intro container viewport option-1 wow fadeInUp"
            data-s3-module
            style={{
              backgroundColor: introSection.backgroundColor,
              color: introSection.textColor,
            }}
          >
            <div className="row">
              {introSection.logo && (
                <picture className="logo">
                  <img
                    // src={getResponsiveImageUrls(introSection.logo).large}
                    src={getLogoUrl(introSection.logo)}
                    loading="lazy"
                    alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="inner" data-api-key="content">
                <h2 style={{ color: introSection.headingColor }}>
                  {introSection.headingSmallText && (
                    <span className="small">
                      {introSection.headingSmallText} &ndash;
                    </span>
                  )}
                  {introSection.heading}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(introSection.content),
                  }}
                />
              </div>
            </div>
          </div>
        );

      case "halfImageSection":
        if (!halfImageSection.show) return null;
        const halfImages = getResponsiveImageUrls(halfImageSection.image);
        return (
          <div
            className={`mod_half_image viewport half-image container wow fadeInLeft background-navy`}
            data-s3-module
            style={{
              backgroundColor: halfImageSection.backgroundColor,
              color: halfImageSection.textColor,
            }}
          >
            <div
              className={`row half-image-row ${
                halfImageSection.verticalAlignment === "top"
                  ? "top-aligned"
                  : halfImageSection.verticalAlignment === "center"
                    ? ""
                    : "bottom-aligned"
              } ${
                halfImageSection.imagePosition === "left" ? "" : "flipped"
              } mt-0 mb-0`}
              style={{
                marginTop: halfImageSection.marginTop,
                marginBottom: halfImageSection.marginBottom,
              }}
            >
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={halfImages.mobile}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={halfImages.tablet}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={halfImages.desktop}
                  />
                  <source srcSet={halfImages.large} />
                  <img
                    src={halfImages.large}
                    loading="lazy"
                    alt={halfImages.alt || "Brunette woman touching face"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded">
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2 style={{ color: halfImageSection.headingColor }}>
                      {halfImageSection.heading}
                      {halfImageSection.headingBlockText && (
                        <span className="block-desktop">
                          {halfImageSection.headingBlockText}
                        </span>
                      )}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImageSection.content),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "columnSection":
        if (!columnSection.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            style={{
              backgroundColor: columnSection.backgroundColor,
              color: columnSection.textColor,
            }}
          >
            <div
              className="row mt-30 pb-0"
              data-api-key="content"
              style={{
                marginTop: columnSection.marginTop,
                paddingBottom: columnSection.paddingBottom,
              }}
            >
              <div className="item">
                <h2 style={{ color: columnSection.headingColor }}>
                  {columnSection.heading}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnSection.introContent),
                  }}
                />
                {columnSection.facialAreas && (
                  <ul className="columns">
                    {columnSection.facialAreas.map((area, index) => (
                      <li key={index}>
                        <strong>Facial area {area.areaNumber}:</strong>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: lexicalToHtml(area.description),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );

      case "ctaBeforeAfterSection":
        if (!ctaBeforeAfterSection.show) return null;
        return (
          <div
            className="mod_cta_ba_feed cta container wow fadeInUp mt-0 mb-0"
            data-s3-module
            style={{
              backgroundColor: ctaBeforeAfterSection.backgroundColor,
              color: ctaBeforeAfterSection.textColor,
              marginTop: ctaBeforeAfterSection.marginTop,
              marginBottom: ctaBeforeAfterSection.marginBottom,
            }}
          >
            <div className="row">
              <div className="text">
                <h2
                  data-api-key="title"
                  style={{ color: ctaBeforeAfterSection.headingColor }}
                >
                  {ctaBeforeAfterSection.heading}
                </h2>
                <div className="patients" data-api-key="patients">
                  <div
                    className="patient-wrap pslider"
                    data-items={ctaBeforeAfterSection.sliderItemsCount}
                  >
                    {ctaBeforeAfterSection.patients.map((patient, index) => {
                      const patientImages = getResponsiveImageUrls(
                        patient.image
                      );
                      return (
                        <div key={index}>
                          <a href={patient.url} className="patient single">
                            <picture className="background">
                              <source
                                media="(max-width:420px)"
                                srcSet={patientImages.mobile}
                              />
                              <source
                                media="(max-width:800px)"
                                srcSet={patientImages.tablet}
                              />
                              <source srcSet={patientImages.desktop} />
                              <img
                                src={patientImages.desktop}
                                loading="lazy"
                                alt={patientImages.alt || ""}
                                draggable="false"
                              />
                            </picture>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {ctaBeforeAfterSection.viewGalleryButton.show && (
                  <a
                    href={ctaBeforeAfterSection.viewGalleryButton.url}
                    className="btn view-more"
                    title={ctaBeforeAfterSection.viewGalleryButton.title}
                    aria-label={
                      ctaBeforeAfterSection.viewGalleryButton.ariaLabel
                    }
                    style={{
                      backgroundColor:
                        ctaBeforeAfterSection.viewGalleryButton.backgroundColor,
                      color: ctaBeforeAfterSection.viewGalleryButton.textColor,
                    }}
                  >
                    {ctaBeforeAfterSection.viewGalleryButton.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        );

      case "ctaGeneralSection":
        if (!ctaGeneralSection.show) return null;
        return (
          <div
            className={`mod_cta_general viewport container cta ${ctaGeneralSection.layoutStyle} wow fadeInRight mt-0 mb-0 background-1`}
            data-s3-module
            style={{
              backgroundColor: ctaGeneralSection.backgroundColor,
              color: ctaGeneralSection.textColor,
              marginTop: ctaGeneralSection.marginTop,
              marginBottom: ctaGeneralSection.marginBottom,
            }}
          >
            <div className="row">
              <div className="text">
                <h2 style={{ color: ctaGeneralSection.headingColor }}>
                  {ctaGeneralSection.headingLink ? (
                    <a href={ctaGeneralSection.headingLink}>
                      {ctaGeneralSection.heading}
                    </a>
                  ) : (
                    ctaGeneralSection.heading
                  )}
                </h2>
                <a
                  href={ctaGeneralSection.ctaButton.url}
                  className="btn white"
                  style={{
                    backgroundColor:
                      ctaGeneralSection.ctaButton.backgroundColor,
                    color: ctaGeneralSection.ctaButton.textColor,
                  }}
                  onMouseOver={(e) =>
                    ctaGeneralSection.ctaButton.hoverBackgroundColor &&
                    (e.currentTarget.style.backgroundColor =
                      ctaGeneralSection.ctaButton.hoverBackgroundColor)
                  }
                  onMouseOut={(e) =>
                    ctaGeneralSection.ctaButton.backgroundColor &&
                    (e.currentTarget.style.backgroundColor =
                      ctaGeneralSection.ctaButton.backgroundColor)
                  }
                >
                  {ctaGeneralSection.ctaButton.text}
                </a>
              </div>
              <div className="media"></div>
            </div>
          </div>
        );

      case "boxGridSection":
        if (!boxGridSection.show) return null;
        return (
          <div
            className={`mod_box_grid viewport container option-1 ${boxGridSection.gridLayout} no-bg wider`}
            data-s3-module
            style={{
              backgroundColor: boxGridSection.backgroundColor,
              color: boxGridSection.textColor,
            }}
          >
            <div className="row">
              <div className="content-before">
                <h2 style={{ color: boxGridSection.headingColor }}>
                  {boxGridSection.heading}
                  {boxGridSection.headingBlockText && (
                    <span className="block-desktop">
                      {boxGridSection.headingBlockText}
                    </span>
                  )}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(boxGridSection.introContent),
                  }}
                />
              </div>
              <div className={`boxes ${boxGridSection.gridLayout}`}>
                {boxGridSection.boxes.map((box, index) => (
                  <div key={index} className="box wow fadeInUp">
                    <h3>{box.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(box.content),
                      }}
                    />
                  </div>
                ))}
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
      id="main"
      style={{
        maxWidth: globalStyles.containerMaxWidth,
        padding: globalStyles.containerPadding,
        fontFamily: globalStyles.fontFamily,
        color: globalStyles.textColor,
        margin: "0 auto",
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

export default LiquidFacelift;
