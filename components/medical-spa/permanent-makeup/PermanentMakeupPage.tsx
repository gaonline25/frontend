// import React from "react";

// const PermanentMakeupPage: React.FC = () => {
//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Hero Module */}
//       <div className="mod_hero banner mobile-stack" data-s3-module="">
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
//               <ul className="partial_breadcrumb" data-s3-partial="">
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
//                     href="/medical-spa/permanent-makeup/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Permanent Makeup
//                   </a>
//                 </li>
//               </ul>
//               <h1>Permanent Makeup</h1>
//               <div className="text">
//                 <p>
//                   At Goldfingers, we offer permanent makeup services to help
//                   enhance your natural beauty. Our skilled technicians use
//                   high-quality pigments and advanced techniques to create a
//                   natural, long-lasting look. With our personalized approach and
//                   attention to detail, you can trust that you'll leave our
//                   facility feeling confident and beautiful.
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
//                 srcSet="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Blonde woman with makeup"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Intro Module */}
//       <div
//         className="mod_intro container viewport option-1 wide wow fadeInUp"
//         data-s3-module=""
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
//             <h2>Flawless beauty, all day, every day</h2>
//             <p>
//               At Goldfingers, we offer permanent makeup services to help enhance
//               your natural beauty. Our skilled technicians use high-quality
//               pigments and advanced techniques to create a natural, long-lasting
//               look. With our personalized approach and attention to detail, you
//               can trust that you'll leave our facility feeling confident and
//               beautiful.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Column Module */}
//       <div
//         className="mod_column viewport container has-media"
//         data-s3-module=""
//       >
//         <div className="row mb-30 media-left" data-api-key="content">
//           <div className="item">
//             <h2>The Permanent Makeup Experts</h2>
//             <p>
//               We prioritize open communication, actively listening to your
//               desires, and addressing any questions or concerns you may have. As
//               such, we take the time to understand your preferences and
//               customize treatments to suit your unique features and aesthetic
//               goals. Choose Goldfingers Aesthetics for an experience that's
//               centered around you. Contact us today to learn more about our
//               services!
//             </p>
//           </div>
//           <picture className="media">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695238739-permanent-makeup.jpeg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695238739-permanent-makeup.jpeg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695238739-permanent-makeup.jpeg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695238739-permanent-makeup.jpeg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695238739-permanent-makeup.jpeg?auto=format,compress&w=1290"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1695238739-permanent-makeup.jpeg?auto=format,compress&w=1290"
//               loading="lazy"
//               data-lazyload="img"
//               width="1290"
//               height="1284"
//               alt=""
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark hide-divider viewport background-1"
//         data-s3-module=""
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2>Simplify Your Beauty Routine With Goldfingers</h2>
//             <p>
//               Goldfingers Aesthetics offers permanent makeup treatments to
//               enhance your natural features and simplify your daily beauty
//               routine. Having specialized in permanent makeup for over a decade,
//               our skilled practitioners use advanced techniques to deliver
//               effortlessly beautiful and long-lasting results.
//             </p>
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

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module="">
//         <div className="row mt-30 mb-30" data-api-key="content">
//           <div className="item">
//             <div className="columns-two vertical-align">
//               <div>
//                 <h2>
//                   <span className="small">
//                     Wake Up With Perfectly Defined Eyes:
//                   </span>
//                   Upper and Lower Eyeliner
//                 </h2>
//               </div>
//               <div>
//                 <p>
//                   Upper and lower eyeliner permanent makeup enhances the shape
//                   and definition of your eyes. This technique is perfect for
//                   those who want to save time and money on their daily makeup
//                   routine or struggle with applying eyeliner. Our skilled
//                   artists can create various eyeliner styles, from a subtle lash
//                   enhancement to a more dramatic look. This treatment can make
//                   your eyes appear larger, more awake, and beautifully defined,
//                   giving you a refreshed and youthful appearance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA General Module */}
//       <div
//         className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
//         data-s3-module=""
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

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module="">
//         <div className="row mt-30 mb-30" data-api-key="content">
//           <div className="item">
//             <h2>
//               Frame Your Eyes Beautifully{" "}
//               <span className="block-desktop">
//                 With Microblading Brow Shaping
//               </span>
//             </h2>
//             <p>
//               Eyebrow microblading is a semi-permanent technique that manually
//               delivers pigment into the skin in natural-looking hair-like
//               strokes. Whether you want to achieve fuller, more defined eyebrows
//               or enhance shape, microblading can give you the desired results.
//               Our experts customize the pigment color and stroke pattern to
//               match your unique features, providing a flattering, natural frame
//               for your eyes.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport container option-1 single bkg-image"
//         data-s3-module=""
//       >
//         <div className="row">
//           <div className="boxes">
//             <div className="box wow fadeInUp">
//               <h2>
//                 Get Perfectly Defined Lips{" "}
//                 <span className="block-desktop">With Permanent Lip Liner</span>
//               </h2>
//               <p>
//                 Permanent lip liner is perfect for those who want to enhance
//                 their lips' shape and definition without needing daily lipstick
//                 application. Our state-of-the-art facility and sterile
//                 environment ensure you receive the highest quality of care
//                 during your procedure. With lip liner permanent makeup, you can
//                 wake up daily with perfectly defined lips that enhance your
//                 natural beauty. Say goodbye to the hassle of smudged lipstick
//                 and hello to a more effortless and confident look!
//               </p>
//             </div>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1000, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1500 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=2100 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=2200"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=2200"
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="1726"
//             alt="Background media"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module="">
//         <div className="row mt-30" data-api-key="content">
//           <div className="item">
//             <h2>Effortlessly Kissable Lips With Lip Blush</h2>
//             <p>
//               Lip blush tattoo is a technique that adds a natural hint of color
//               and definition to your lips, making them look vibrantly beautiful.
//               Our skilled practitioners will work closely with you to select the
//               perfect shade to complement your skin tone and personal style,
//               whether you desire a soft tint or a more intense hue. Lip blushing
//               can correct uneven lip color or create a fuller appearance, so
//               you'll look your best when you wake up without using lipstick.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image viewport half-image container wow fadeInLeft"
//         data-s3-module=""
//       >
//         <div className="row half-image-row">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="Woman's eyelid"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>Full, Beautiful Lashes With Eyelash Extensions</h2>
//                 <p>
//                   At Goldfingers, we use high-quality materials and advanced
//                   techniques to deliver customized and natural-looking results
//                   that enhance your eyes' beauty. Eyelash extensions are perfect
//                   for those who want to save time on their daily makeup routine
//                   or have sparse or uneven lashes. With various lengths,
//                   thicknesses, and styles to choose from, our team will work
//                   with you to create the perfect set of lashes that complements
//                   your style and preference.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Column Module */}
//       <div
//         className="mod_column viewport container has-media"
//         data-s3-module=""
//       >
//         <div className="row mb-30 media-right" data-api-key="content">
//           <div className="item">
//             <h2>The Treatment Experience</h2>
//             <p>
//               Undergoing aesthetic treatments can sometimes bring a mix of
//               excitement and nervousness. That's why we have designed our
//               practice to ensure your comfort and ease throughout the entire
//               process. From the moment you walk through our doors, you'll be
//               greeted by our friendly and supportive staff, who are dedicated to
//               creating a warm and welcoming environment. Our treatment rooms are
//               designed to provide a serene and calming atmosphere, helping you
//               feel at ease as you embark on your beauty journey.
//             </p>
//           </div>
//           <picture className="media">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=904"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=904"
//               loading="lazy"
//               data-lazyload="img"
//               width="904"
//               height="1062"
//               alt="boardwalk and palm trees on the beach"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark hide-divider viewport background-10"
//         data-s3-module=""
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2>How Long Does Permanent Makeup Last?</h2>
//             <p>
//               How long your permanent makeup lasts depends on several factors,
//               such as:
//             </p>
//             <ul>
//               <li>Your skin type</li>
//               <li>Your lifestyle</li>
//               <li>The specific treatment you choose</li>
//             </ul>
//             <p>
//               For instance, eyebrow microblading usually maintains its effects
//               for around a year or even longer. Over time, you'll notice a
//               gradual fading of the pigment, giving you the flexibility to tweak
//               your appearance as your tastes evolve.
//             </p>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="802"
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>
//     </main>
//   );
// };

// export default PermanentMakeupPage;

"use client";

import React, { useEffect, useState } from "react";
import {
  fetchPermanentFillersPageData,
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchPermanentMakeupPageComponent"; // Adjust path to your API utilities

interface PermanentMakeupData {
  componentName: string;
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
    content: any;
  };
  columnSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    mediaPosition?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    mediaImage: { mobile?: any; tablet?: any; desktop?: any; alt?: string };
  };
  bannerSection1: {
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
    heading: string;
    headingColor?: string;
    content?: any;
  };
  columnSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    layout?: string;
    heading: string;
    headingColor?: string;
    smallText?: string;
    content?: any;
  };
  ctaGeneralSection1: {
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
  };
  columnSection3: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    content?: any;
  };
  boxGridSection: {
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
    boxes: Array<{ heading: string; headingColor?: string; content?: any }>;
  };
  columnSection4: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    content?: any;
  };
  halfImageSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    imagePosition?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    image: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
  };
  columnSection5: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    mediaPosition?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    mediaImage: { mobile?: any; tablet?: any; desktop?: any; alt?: string };
  };
  bannerSection2: {
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
    heading: string;
    headingColor?: string;
    content?: any;
    bulletPoints?: Array<{ text: string }>;
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
  typographySettings: {
    h1FontSize?: string;
    h1Color?: string;
    h1FontWeight?: string;
    h2FontSize?: string;
    h2Color?: string;
    h2FontWeight?: string;
    bodyFontSize?: string;
    bodyLineHeight?: string;
  };
  buttonStyles: {
    defaultBackgroundColor?: string;
    defaultTextColor?: string;
    defaultHoverBackground?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  animationSettings: {
    enableAnimations?: boolean;
    fadeInDuration?: string;
    slideInDuration?: string;
    animationEasing?: string;
  };
  seoSettings: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: any;
    keywords?: string;
    canonicalUrl?: string;
    robots?: string;
  };
  accessibilitySettings: {
    skipToContent?: boolean;
    ariaLabelsEnabled?: boolean;
    altTextRequired?: boolean;
    focusVisibleColor?: string;
    contrastMode?: string;
  };
  mobileSettings: {
    mobileBreakpoint?: string;
    tabletBreakpoint?: string;
    mobileFontSizeAdjustment?: string;
    mobileSpacingAdjustment?: string;
  };
  isActive: boolean;
}

const PermanentMakeupPage: React.FC = () => {
  const [pageData, setPageData] = useState<PermanentMakeupData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPermanentFillersPageData(
          "permanent-makeup-page-component"
        );
        setPageData(data);
      } catch (error) {
        console.error("Error fetching Permanent Makeup page data:", error);
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
    columnSection1,
    bannerSection1,
    columnSection2,
    ctaGeneralSection1,
    columnSection3,
    boxGridSection,
    columnSection4,
    halfImageSection,
    columnSection5,
    bannerSection2,
    sectionOrder,
    globalStyles,
    typographySettings,
    buttonStyles,
    animationSettings,
    accessibilitySettings,
    mobileSettings,
  } = pageData;

  const getAnimationClass = (section: string) => {
    if (!animationSettings.enableAnimations) return "";
    switch (section) {
      case "intro":
        return `wow fadeInUp`;
      case "bannerSection1":
        return `wow fadeInUp`;
      case "ctaGeneralSection1":
        return `wow fadeInRight`;
      case "boxGridSection":
        return `wow fadeInUp`;
      case "halfImageSection":
        return `wow fadeInLeft`;
      case "bannerSection2":
        return `wow fadeInUp`;
      default:
        return "";
    }
  };

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
                          aria-label={
                            accessibilitySettings.ariaLabelsEnabled
                              ? crumb.ariaLabel
                              : undefined
                          }
                          style={{ color: globalStyles.linkColor }}
                          onMouseOver={(e) =>
                            globalStyles.linkHoverColor &&
                            (e.currentTarget.style.color =
                              globalStyles.linkHoverColor)
                          }
                          onMouseOut={(e) =>
                            globalStyles.linkColor &&
                            (e.currentTarget.style.color =
                              globalStyles.linkColor)
                          }
                        >
                          {crumb.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h1
                    style={{
                      color: heroSection.titleColor,
                      fontSize:
                        heroSection.titleFontSize ||
                        typographySettings.h1FontSize,
                      fontWeight: typographySettings.h1FontWeight,
                    }}
                  >
                    {heroSection.title}
                  </h1>
                  <div
                    className="text"
                    style={{
                      color:
                        heroSection.descriptionColor || globalStyles.textColor,
                    }}
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
                              heroSection.ctaButton.backgroundColor ||
                              buttonStyles.defaultBackgroundColor,
                            color:
                              heroSection.ctaButton.textColor ||
                              buttonStyles.defaultTextColor,
                            borderRadius: buttonStyles.borderRadius,
                            padding: buttonStyles.padding,
                            fontSize: buttonStyles.fontSize,
                            fontWeight: buttonStyles.fontWeight,
                          }}
                          onMouseOver={(e) =>
                            heroSection.ctaButton.hoverBackgroundColor &&
                            (e.currentTarget.style.backgroundColor =
                              heroSection.ctaButton.hoverBackgroundColor)
                          }
                          onMouseOut={(e) =>
                            heroSection.ctaButton.backgroundColor &&
                            (e.currentTarget.style.backgroundColor =
                              heroSection.ctaButton.backgroundColor ||
                              buttonStyles.defaultBackgroundColor)
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
                    alt={heroMediaImages.alt || "Blonde woman with makeup"}
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
            className={`mod_intro container viewport option-1 wide ${getAnimationClass(
              "intro"
            )}`}
            data-s3-module
            style={{
              backgroundColor: introSection.backgroundColor,
              color: introSection.textColor,
            }}
          >
            <div className="row pb-0">
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
                <h2
                  style={{
                    color:
                      introSection.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
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

      case "columnSection1":
        if (!columnSection1.show) return null;
        const column1Images = getResponsiveImageUrls(columnSection1.mediaImage);
        return (
          <div
            className={`mod_column viewport container ${
              columnSection1.mediaPosition ? "has-media" : ""
            }`}
            data-s3-module
            style={{
              backgroundColor: columnSection1.backgroundColor,
              color: columnSection1.textColor,
            }}
          >
            <div
              className={`row mb-30 media-${
                columnSection1.mediaPosition || "left"
              }`}
              data-api-key="content"
            >
              <div className="item">
                <h2
                  style={{
                    color:
                      columnSection1.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {columnSection1.heading}
                </h2>
                {columnSection1.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection1.content),
                    }}
                  />
                )}
              </div>
              {columnSection1.mediaPosition && columnSection1.mediaImage && (
                <picture className="media">
                  <source
                    media="(max-width:420px)"
                    srcSet={column1Images.mobile}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={column1Images.tablet}
                  />
                  <source srcSet={column1Images.desktop} />
                  <img
                    src={column1Images.desktop}
                    loading="lazy"
                    alt={column1Images.alt}
                    draggable="false"
                  />
                </picture>
              )}
            </div>
          </div>
        );

      case "bannerSection1":
        if (!bannerSection1.show) return null;
        const banner1Images = getResponsiveImageUrls(
          bannerSection1.backgroundImage
        );
        return (
          <div
            className={`mod_banner dark hide-divider viewport background-1 ${getAnimationClass(
              "bannerSection1"
            )}`}
            data-s3-module
            style={{
              backgroundColor: bannerSection1.backgroundColor,
              color: bannerSection1.textColor,
            }}
          >
            <div className="row">
              <div className="content" data-api-key="top_content">
                <h2
                  style={{
                    color:
                      bannerSection1.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {bannerSection1.heading}
                </h2>
                {bannerSection1.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerSection1.content),
                    }}
                  />
                )}
              </div>
            </div>
            <picture className="background">
              <source media="(max-width:420px)" srcSet={banner1Images.mobile} />
              <source media="(max-width:800px)" srcSet={banner1Images.tablet} />
              <source
                media="(max-width:1400px)"
                srcSet={banner1Images.desktop}
              />
              <source srcSet={banner1Images.large} />
              <img
                src={banner1Images.large}
                loading="lazy"
                alt={banner1Images.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "columnSection2":
        if (!columnSection2.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            style={{
              backgroundColor: columnSection2.backgroundColor,
              color: columnSection2.textColor,
            }}
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                <div
                  className={
                    columnSection2.layout === "two-column"
                      ? "columns-two vertical-align"
                      : ""
                  }
                >
                  <div>
                    {columnSection2.smallText && (
                      <h2>
                        <span className="small">
                          {columnSection2.smallText}
                        </span>
                        {columnSection2.heading}
                      </h2>
                    )}
                    {!columnSection2.smallText && (
                      <h2
                        style={{
                          color:
                            columnSection2.headingColor ||
                            typographySettings.h2Color,
                          fontSize: typographySettings.h2FontSize,
                          fontWeight: typographySettings.h2FontWeight,
                        }}
                      >
                        {columnSection2.heading}
                      </h2>
                    )}
                  </div>
                  {columnSection2.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(columnSection2.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case "ctaGeneralSection1":
        if (!ctaGeneralSection1.show) return null;
        return (
          <div
            className={`mod_cta_general viewport container cta thin background-1 ${getAnimationClass(
              "ctaGeneralSection1"
            )}`}
            data-s3-module
            style={{
              backgroundColor: ctaGeneralSection1.backgroundColor,
              color: ctaGeneralSection1.textColor,
            }}
          >
            <div className="row">
              <div className="text">
                <h2
                  style={{
                    color:
                      ctaGeneralSection1.headingColor ||
                      typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {ctaGeneralSection1.headingLink ? (
                    <a href={ctaGeneralSection1.headingLink}>
                      {ctaGeneralSection1.heading}
                    </a>
                  ) : (
                    ctaGeneralSection1.heading
                  )}
                </h2>
                <a
                  className="btn white"
                  href={ctaGeneralSection1.ctaButton.url}
                  role="button"
                  style={{
                    backgroundColor:
                      ctaGeneralSection1.ctaButton.backgroundColor ||
                      buttonStyles.defaultBackgroundColor,
                    color:
                      ctaGeneralSection1.ctaButton.textColor ||
                      buttonStyles.defaultTextColor,
                    borderRadius: buttonStyles.borderRadius,
                    padding: buttonStyles.padding,
                    fontSize: buttonStyles.fontSize,
                    fontWeight: buttonStyles.fontWeight,
                  }}
                  onMouseOver={(e) =>
                    ctaGeneralSection1.ctaButton.hoverBackgroundColor &&
                    (e.currentTarget.style.backgroundColor =
                      ctaGeneralSection1.ctaButton.hoverBackgroundColor)
                  }
                  onMouseOut={(e) =>
                    ctaGeneralSection1.ctaButton.backgroundColor &&
                    (e.currentTarget.style.backgroundColor =
                      ctaGeneralSection1.ctaButton.backgroundColor ||
                      buttonStyles.defaultBackgroundColor)
                  }
                >
                  {ctaGeneralSection1.ctaButton.text}
                </a>
              </div>
              <div className="media"></div>
            </div>
          </div>
        );

      case "columnSection3":
        if (!columnSection3.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            style={{
              backgroundColor: columnSection3.backgroundColor,
              color: columnSection3.textColor,
            }}
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                <h2
                  style={{
                    color:
                      columnSection3.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {columnSection3.heading}
                  {columnSection3.heading.includes("Microblading") && (
                    <span className="block-desktop">
                      With Microblading Brow Shaping
                    </span>
                  )}
                </h2>
                {columnSection3.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection3.content),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        );

      case "boxGridSection":
        if (!boxGridSection.show) return null;
        const boxGridImages = getResponsiveImageUrls(
          boxGridSection.backgroundImage
        );
        return (
          <div
            className={`mod_box_grid viewport container option-1 single bkg-image ${getAnimationClass(
              "boxGridSection"
            )}`}
            data-s3-module
            style={{
              backgroundColor: boxGridSection.backgroundColor,
              color: boxGridSection.textColor,
            }}
          >
            <div className="row">
              <div className="boxes">
                {boxGridSection.boxes.map((box, index) => (
                  <div className="box" key={index}>
                    <h2
                      style={{
                        color: box.headingColor || typographySettings.h2Color,
                        fontSize: typographySettings.h2FontSize,
                        fontWeight: typographySettings.h2FontWeight,
                      }}
                    >
                      {box.heading}
                      {box.heading.includes("Lip Liner") && (
                        <span className="block-desktop">
                          With Permanent Lip Liner
                        </span>
                      )}
                    </h2>
                    {box.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(box.content),
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <picture className="background">
              <source media="(max-width:420px)" srcSet={boxGridImages.mobile} />
              <source media="(max-width:800px)" srcSet={boxGridImages.tablet} />
              <source
                media="(max-width:1400px)"
                srcSet={boxGridImages.desktop}
              />
              <source srcSet={boxGridImages.large} />
              <img
                src={boxGridImages.large}
                loading="lazy"
                alt={boxGridImages.alt || "Background media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "columnSection4":
        if (!columnSection4.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            style={{
              backgroundColor: columnSection4.backgroundColor,
              color: columnSection4.textColor,
            }}
          >
            <div className="row mt-30" data-api-key="content">
              <div className="item">
                <h2
                  style={{
                    color:
                      columnSection4.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {columnSection4.heading}
                </h2>
                {columnSection4.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection4.content),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        );

      case "halfImageSection":
        if (!halfImageSection.show) return null;
        const halfImages = getResponsiveImageUrls(halfImageSection.image);
        return (
          <div
            className={`mod_half_image viewport half-image container ${getAnimationClass(
              "halfImageSection"
            )}`}
            data-s3-module
            style={{
              backgroundColor: halfImageSection.backgroundColor,
              color: halfImageSection.textColor,
            }}
          >
            <div
              className={`row half-image-row ${
                halfImageSection.imagePosition === "right" ? "flipped" : ""
              }`}
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
                    alt={halfImages.alt || "Woman's eyelid"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded">
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2
                      style={{
                        color:
                          halfImageSection.headingColor ||
                          typographySettings.h2Color,
                        fontSize: typographySettings.h2FontSize,
                        fontWeight: typographySettings.h2FontWeight,
                      }}
                    >
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
        );

      case "columnSection5":
        if (!columnSection5.show) return null;
        const column5Images = getResponsiveImageUrls(columnSection5.mediaImage);
        return (
          <div
            className={`mod_column viewport container ${
              columnSection5.mediaPosition ? "has-media" : ""
            }`}
            data-s3-module
            style={{
              backgroundColor: columnSection5.backgroundColor,
              color: columnSection5.textColor,
            }}
          >
            <div
              className={`row mb-30 media-${
                columnSection5.mediaPosition || "right"
              }`}
              data-api-key="content"
            >
              <div className="item">
                <h2
                  style={{
                    color:
                      columnSection5.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {columnSection5.heading}
                </h2>
                {columnSection5.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection5.content),
                    }}
                  />
                )}
              </div>
              {columnSection5.mediaPosition && columnSection5.mediaImage && (
                <picture className="media">
                  <source
                    media="(max-width:420px)"
                    srcSet={column5Images.mobile}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={column5Images.tablet}
                  />
                  <source srcSet={column5Images.desktop} />
                  <img
                    src={column5Images.desktop}
                    loading="lazy"
                    alt={
                      column5Images.alt ||
                      "boardwalk and palm trees on the beach"
                    }
                    draggable="false"
                  />
                </picture>
              )}
            </div>
          </div>
        );

      case "bannerSection2":
        if (!bannerSection2.show) return null;
        const banner2Images = getResponsiveImageUrls(
          bannerSection2.backgroundImage
        );
        return (
          <div
            className={`mod_banner dark hide-divider viewport background-10 ${getAnimationClass(
              "bannerSection2"
            )}`}
            data-s3-module
            style={{
              backgroundColor: bannerSection2.backgroundColor,
              color: bannerSection2.textColor,
            }}
          >
            <div className="row">
              <div className="content" data-api-key="top_content">
                <h2
                  style={{
                    color:
                      bannerSection2.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {bannerSection2.heading}
                </h2>
                {bannerSection2.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerSection2.content),
                    }}
                  />
                )}
                {bannerSection2.bulletPoints && (
                  <ul>
                    {bannerSection2.bulletPoints.map((point, index) => (
                      <li key={index}>{point.text}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <picture className="background">
              <source media="(max-width:420px)" srcSet={banner2Images.mobile} />
              <source media="(max-width:800px)" srcSet={banner2Images.tablet} />
              <source
                media="(max-width:1400px)"
                srcSet={banner2Images.desktop}
              />
              <source srcSet={banner2Images.large} />
              <img
                src={banner2Images.large}
                loading="lazy"
                alt={banner2Images.alt || "Banner media"}
                draggable="false"
              />
            </picture>
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
      {accessibilitySettings.skipToContent && (
        <a
          href="#main"
          className="skip-to-content"
          style={{ position: "absolute", left: "-9999px", top: 0 }}
        >
          Skip to content
        </a>
      )}
      {sectionOrder.map((item, index) => (
        <React.Fragment key={index}>
          {renderSection(item.section)}
        </React.Fragment>
      ))}
    </main>
  );
};

export default PermanentMakeupPage;