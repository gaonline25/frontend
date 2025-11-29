// // import React from "react";

// // const SkincareServices: React.FC = () => {
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
// //                     href="/medical-spa/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Medical Spa
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="/medical-spa/skincare-services/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Skincare Services
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>Skincare Services</h1>
// //               <div className="text">
// //                 <p>Your Path to Radiant Skin Begins at Goldfingers</p>
// //                 <p>
// //                   <a className="btn white" href="/contact/" role="button">
// //                     Book an Appointment
// //                   </a>
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="media">
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1920"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="Woman receiving facial treatment"
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
// //         <div className="row ">
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
// //             <h2>
// //               Skin rejuvenation and enhancement{" "}
// //               <span className="block-desktop">at its best.</span>
// //             </h2>
// //             <p>
// //               At Goldfingers Aesthetics, we are committed to helping you achieve
// //               your skincare goals with a comprehensive range of advanced
// //               treatments and services. Our team of experienced professionals is
// //               dedicated to providing tailored solutions that enhance your
// //               natural beauty and boost your confidence. Explore our diverse
// //               skincare services designed to address a variety of concerns and
// //               deliver remarkable results.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Double Banner Module */}
// //       <div
// //         className="mod_double_banner container fadeInLeft"
// //         data-wow-duration="2s"
// //         data-s3-module
// //       >
// //         <div className="row mb-40">
// //           <div className="banner banner-left">
// //             <div className="title">
// //               <h2>BOTOX® & Dysport® Cosmetic</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Effortlessly smooth away wrinkles and fine lines with BOTOX ®and
// //                 Dysport ®injections. These FDA-approved treatments are perfect
// //                 for addressing dynamic wrinkles caused by facial muscle
// //                 movements.
// //               </p>
// //               <p>
// //                 Learn more about <a href="/medical-spa/botox/">BOTOX</a>
// //                 and <a href="/medical-spa/dysport/">Dysport Cosmetic</a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009181-botox.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="brunette woman smiling"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //           <div className="banner banner-right">
// //             <div className="title">
// //               <h2>Cheek Fillers</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Restore youthful volume and sculpted contours to your cheeks
// //                 with our specialized cheek filler treatments. Achieve a
// //                 natural-looking lift and enhancement that enhances your overall
// //                 facial aesthetics.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/cheek-fillers/">
// //                   Learn more about cheek fillers
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Woman examining cheek"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Double Banner Module */}
// //       <div
// //         className="mod_double_banner container fadeInLeft"
// //         data-wow-duration="2s"
// //         data-s3-module
// //       >
// //         <div className="row mb-40">
// //           <div className="banner banner-left">
// //             <div className="title">
// //               <h2>Chin Enhancements</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Our custom chin enhancement treatments will improve your chin
// //                 profile and proportions. Whether improving definition or adding
// //                 volume, we can customize a solution that suits your goals.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/chin/">
// //                   Learn more about chin enhancements
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009230-chin-fillers.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Womans chin"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //           <div className="banner banner-right">
// //             <div className="title">
// //               <h2>Dermal Fillers</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Our dermal filler treatments are versatile solutions for
// //                 addressing various cosmetic concerns. From softening lines and
// //                 wrinkles to adding volume, dermal fillers provide a refreshed
// //                 and revitalized look.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/dermal-fillers/">
// //                   Learn more about dermal fillers
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="James working with his patient"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Double Banner Module */}
// //       <div
// //         className="mod_double_banner container fadeInLeft"
// //         data-wow-duration="2s"
// //         data-s3-module
// //       >
// //         <div className="row mb-40">
// //           <div className="banner banner-left">
// //             <div className="title">
// //               <h2>Hand Rejuvenation</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Turn back the clock on your hands with our hand rejuvenation
// //                 treatments. We use a combination of fillers and other techniques
// //                 to improve texture, reduce visible veins, and restore a youthful
// //                 appearance.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/hands/">
// //                   Learn more about hand rejuvenation
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009260-hand-rejuvenation.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Brunette woman smiling"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //           <div className="banner banner-right">
// //             <div className="title">
// //               <h2>JUVÉDERM</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Discover the power of JUVÉDERM fillers, known for their
// //                 exceptional quality and results. We offer tailored treatments
// //                 for various concerns, whether it's VOLUMA, VOLBELLA, VOLLURE, or
// //                 other JUVÉDERM products.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/juvederm/">Learn more about JUVÉDERM</a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694721673-juvederm.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Brunnette woman looking in mirror"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Double Banner Module */}
// //       <div
// //         className="mod_double_banner container fadeInLeft"
// //         data-wow-duration="2s"
// //         data-s3-module
// //       >
// //         <div className="row mb-40">
// //           <div className="banner banner-left">
// //             <div className="title">
// //               <h2>Lines & Wrinkles</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Combat signs of aging like fine lines and wrinkles with our
// //                 specialized treatments. Our experienced team utilizes a range of
// //                 injectables and techniques to smooth and rejuvenate your skin.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/lines-and-wrinkles/">
// //                   Learn more about combatting lines & wrinkles
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009292-lines-and-wrinkles.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Specialist putting syringe in patient's face"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //           <div className="banner banner-right">
// //             <div className="title">
// //               <h2>Lip Fillers</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Achieve plump, naturally beautiful lips with our lip filler
// //                 treatments. Whether you want volume, definition, or both, we can
// //                 customize your lip enhancement to match your desired outcome.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/lips/">Learn more about lip fillers</a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009299-lip-fillers.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Woman touching lips"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Double Banner Module */}
// //       <div
// //         className="mod_double_banner container fadeInLeft"
// //         data-wow-duration="2s"
// //         data-s3-module
// //       >
// //         <div className="row mb-40">
// //           <div className="banner banner-left">
// //             <div className="title">
// //               <h2>Men's Services</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Our men's services cater to the unique needs and preferences of
// //                 our male clientele. From skincare to facial contouring, we offer
// //                 personalized treatments that help you look and feel your best.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/mens-services/">
// //                   Learn more about our services for men
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009312-mens-services.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Man getting a facial"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //           <div className="banner banner-right">
// //             <div className="title">
// //               <h2>Micro-Channeling</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 <span style={{ fontWeight: 400 }}>
// //                   Experience the benefits of micro-channeling, a revolutionary
// //                   treatment that stimulates collagen production and rejuvenates
// //                   your skin. Enjoy smoother, more youthful skin with minimal
// //                   downtime.
// //                 </span>
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/micro-channeling/">
// //                   <span style={{ fontWeight: 400 }}>
// //                     Learn more about micro-channeling
// //                   </span>
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Specialist working with patient"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Double Banner Module */}
// //       <div
// //         className="mod_double_banner container fadeInLeft"
// //         data-wow-duration="2s"
// //         data-s3-module
// //       >
// //         <div className="row mb-40">
// //           <div className="banner banner-left">
// //             <div className="title">
// //               <h2>Restylane</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Discover the transformative effects of Restylane fillers.
// //                 Address wrinkles, volume loss, and more with these versatile
// //                 treatments that provide natural-looking results.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/restylane/">Learn more baout Restylane</a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009357-restylane.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Woman in robe looking at mirror"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //           <div className="banner banner-right">
// //             <div className="title">
// //               <h2>Restylane Contour</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Get the sculpted contours you desire with Restylane Contour.
// //                 This filler is designed to enhance and define your facial
// //                 features, creating a harmonious balance in your appearance.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/restylane-contour/">
// //                   Learn more about Restylane Contour
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009365-retylane-contour.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Woman at the beach"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Double Banner Module */}
// //       <div
// //         className="mod_double_banner container fadeInLeft"
// //         data-wow-duration="2s"
// //         data-s3-module
// //       >
// //         <div className="row mb-80-desktop mb-40-tablet-down">
// //           <div className="banner banner-left">
// //             <div className="title">
// //               <h2>Permanent Makeup</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Achieve long-lasting makeup effects with our permanent makeup
// //                 solutions. From defined eyebrows to beautifully enhanced eyes
// //                 and lips, our treatments save you time and effort in your daily
// //                 routine.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/permanent-makeup/">
// //                   Learn more about permanent makeup
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009342-permanent-makeup.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Woman's eyelid"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //           <div className="banner banner-right">
// //             <div className="title">
// //               <h2>SkinMedica Skin Care</h2>
// //             </div>
// //             <div className="content">
// //               <p>
// //                 Elevate your skincare routine with SkinMedica's advanced
// //                 products. Backed by scientific research, these products deliver
// //                 exceptional results, targeting various skin concerns and
// //                 promoting a radiant complexion.
// //               </p>
// //               <p>
// //                 <a href="/medical-spa/skin-medica/">
// //                   Learn more about Skinmedica
// //                 </a>
// //               </p>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=1832"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009379-skin-medica.jpg?auto=format,compress&w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="Nurse wearing gloves examines female patient's forehead"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* CTA General Module */}
// //       <div
// //         className="mod_cta_general viewport container cta  thin wow fadeInRight mt-0 mb-0 background-1"
// //         data-s3-module
// //       >
// //         <div className="row">
// //           <div className="text">
// //             <h2>
// //               <a href="/contact/">Schedule a Consultation</a>
// //             </h2>
// //             <a href="/contact/" className="btn white">
// //               Book an Appointment
// //             </a>
// //           </div>
// //           <div className="media"></div>
// //         </div>
// //       </div>

// //       {/* Column Module */}
// //       <div className="mod_column viewport container has-media" data-s3-module>
// //         <div className="row mt-30 pb-0 media-left" data-api-key="content">
// //           <div className="item">
// //             <h2>
// //               Discover a comprehensive range of skincare solutions at
// //               Goldfingers
// //             </h2>
// //             <p>
// //               Aesthetics, where our dedicated team of experienced professionals
// //               is committed to enhancing your unique beauty. With over 25 years
// //               of expertise in aesthetics, we offer a personalized approach to
// //               skincare with a variety of cutting-edge treatments, including:
// //             </p>
// //             <ul className="columns">
// //               <li>Facials</li>
// //               <li>Microdermabrasion</li>
// //               <li>Chemical peels</li>
// //               <li>And more</li>
// //             </ul>
// //           </div>
// //           <picture className="media">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=630 2x"
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=1200 2x"
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=904"
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1694025427-accent-8.jpg?auto=format,compress&w=904"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="904"
// //               height="1062"
// //               alt="boardwalk and palm trees on the beach"
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       </div>

// //       {/* Column Module */}
// //       <div className="mod_column viewport container" data-s3-module>
// //         <div className="row " data-api-key="content">
// //           <div className="item">
// //             <h3>
// //               Here are some of the reasons why you can trust us with your skin:
// //             </h3>
// //             <ul>
// //               <li>
// //                 As Florida's largest aesthetics center with over 24 locations,
// //                 we are renowned for delivering exceptional results
// //               </li>
// //               <li>We have over 25 years of aesthetic experience</li>
// //               <li>
// //                 In BOTOX ®and Juvéderm ®injections, we rank among the top 1%
// //                 nationwide
// //               </li>
// //               <li>
// //                 Our Allergan-trained facial contour aesthetic injectors ensure
// //                 precision and artistry in every treatment, all while emphasizing
// //                 100% personalized care
// //               </li>
// //             </ul>
// //             <p>
// //               Whether you seek smoother skin, enhanced contours, or a more
// //               youthful appearance, choose Goldfingers Aesthetics as your premier
// //               destination for achieving aesthetic goals.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default SkincareServices;

// // // // "use client";

// // // // import React, { useEffect, useState } from "react";
// // // // import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

// // // // // Lexical to HTML converter
// // // // function lexicalToHtml(lexicalJSON: any): string {
// // // //   if (!lexicalJSON || !lexicalJSON.root) return "";

// // // //   const processNode = (node: any): string => {
// // // //     if (!node) return "";

// // // //     if (node.type === "text") {
// // // //       let text = node.text || "";
// // // //       if (node.format) {
// // // //         if (node.format & 1) text = `<strong>${text}</strong>`;
// // // //         if (node.format & 2) text = `<em>${text}</em>`;
// // // //         if (node.format & 4) text = `<s>${text}</s>`;
// // // //         if (node.format & 8) text = `<u>${text}</u>`;
// // // //         if (node.format & 16) text = `<code>${text}</code>`;
// // // //       }
// // // //       return text;
// // // //     }

// // // //     if (node.children && Array.isArray(node.children)) {
// // // //       const childrenHtml = node.children.map(processNode).join("");

// // // //       switch (node.type) {
// // // //         case "paragraph":
// // // //           const format = node.format || "";
// // // //           const className = format === "center" ? ' class="text-center"' : "";
// // // //           return `<p${className}>${childrenHtml}</p>`;
// // // //         case "heading":
// // // //           const tag = node.tag || "h2";
// // // //           return `<${tag}>${childrenHtml}</${tag}>`;
// // // //         case "list":
// // // //           const listTag = node.listType === "number" ? "ol" : "ul";
// // // //           return `<${listTag}>${childrenHtml}</${listTag}>`;
// // // //         case "listitem":
// // // //           return `<li>${childrenHtml}</li>`;
// // // //         case "quote":
// // // //           return `<blockquote>${childrenHtml}</blockquote>`;
// // // //         case "link":
// // // //           const url = node.url || "#";
// // // //           const target = node.newTab
// // // //             ? ' target="_blank" rel="noopener noreferrer"'
// // // //             : "";
// // // //           return `<a href="${url}"${target}>${childrenHtml}</a>`;
// // // //         case "root":
// // // //           return childrenHtml;
// // // //         default:
// // // //           return childrenHtml;
// // // //       }
// // // //     }

// // // //     return "";
// // // //   };

// // // //   return processNode(lexicalJSON.root);
// // // // }

// // // // interface DoubleBannerModule {
// // // //   enabled: boolean;
// // // //   className?: string;
// // // //   rowClassName?: string;
// // // //   backgroundColor?: string;
// // // //   leftBanner: {
// // // //     title: string;
// // // //     titleColor?: string;
// // // //     content?: any;
// // // //     contentColor?: string;
// // // //     image: {
// // // //       desktop?: any;
// // // //       tablet?: any;
// // // //       mobile?: any;
// // // //       smallMobile?: any;
// // // //       altText?: string;
// // // //     };
// // // //   };
// // // //   rightBanner: {
// // // //     title: string;
// // // //     titleColor?: string;
// // // //     content?: any;
// // // //     contentColor?: string;
// // // //     image: {
// // // //       desktop?: any;
// // // //       tablet?: any;
// // // //       mobile?: any;
// // // //       smallMobile?: any;
// // // //       altText?: string;
// // // //     };
// // // //   };
// // // // }

// // // // interface ColumnModule {
// // // //   enabled: boolean;
// // // //   className?: string;
// // // //   rowClassName?: string;
// // // //   backgroundColor?: string;
// // // //   textColor?: string;
// // // //   hasMedia: boolean;
// // // //   mediaPosition?: string;
// // // //   title?: string;
// // // //   titleTag?: string;
// // // //   titleColor?: string;
// // // //   content?: any;
// // // //   contentColor?: string;
// // // //   listItems: Array<{
// // // //     text: string;
// // // //     textColor?: string;
// // // //   }>;
// // // //   listColumns?: boolean;
// // // //   mediaImage?: {
// // // //     desktop?: any;
// // // //     tablet?: any;
// // // //     mobile?: any;
// // // //     smallMobile?: any;
// // // //     altText?: string;
// // // //     width?: number;
// // // //     height?: number;
// // // //   };
// // // // }

// // // // interface SkincareServicesPageData {
// // // //   componentName: string;
// // // //   slug: string;
// // // //   isActive: boolean;
// // // //   heroModule: {
// // // //     enabled: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     textColor?: string;
// // // //     backgroundTexture: {
// // // //       desktop?: any;
// // // //       tablet?: any;
// // // //       mobile?: any;
// // // //       smallMobile?: any;
// // // //       altText?: string;
// // // //     };
// // // //     breadcrumbs: Array<{
// // // //       label: string;
// // // //       url: string;
// // // //       ariaLabel?: string;
// // // //     }>;
// // // //     breadcrumbLinkColor?: string;
// // // //     breadcrumbHoverColor?: string;
// // // //     title: string;
// // // //     titleColor?: string;
// // // //     description?: any;
// // // //     descriptionColor?: string;
// // // //     ctaButton: {
// // // //       enabled: boolean;
// // // //       label?: string;
// // // //       url?: string;
// // // //       className?: string;
// // // //     };
// // // //     mediaImage: {
// // // //       desktop?: any;
// // // //       tablet?: any;
// // // //       mobile?: any;
// // // //       smallMobile?: any;
// // // //       altText?: string;
// // // //     };
// // // //   };
// // // //   introModule: {
// // // //     enabled: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     textColor?: string;
// // // //     logo?: any;
// // // //     logoAltText?: string;
// // // //     title?: string;
// // // //     titleColor?: string;
// // // //     content?: any;
// // // //     contentColor?: string;
// // // //   };
// // // //   doubleBannerModules: DoubleBannerModule[];
// // // //   ctaGeneralModule: {
// // // //     enabled: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     textColor?: string;
// // // //     title?: string;
// // // //     titleUrl?: string;
// // // //     titleColor?: string;
// // // //     button: {
// // // //       label?: string;
// // // //       url?: string;
// // // //       className?: string;
// // // //     };
// // // //   };
// // // //   columnModules: ColumnModule[];
// // // //   sectionOrder: Array<{
// // // //     sectionType: string;
// // // //     enabled: boolean;
// // // //     customId?: string;
// // // //     customClass?: string;
// // // //   }>;
// // // //   globalStyling: {
// // // //     containerBackgroundColor?: string;
// // // //     containerMaxWidth?: string;
// // // //     fontFamily?: string;
// // // //     primaryColor?: string;
// // // //     secondaryColor?: string;
// // // //     accentColor?: string;
// // // //     linkColor?: string;
// // // //     linkHoverColor?: string;
// // // //     customCss?: string;
// // // //   };
// // // //   seo: {
// // // //     metaTitle?: string;
// // // //     metaDescription?: string;
// // // //     metaKeywords?: string;
// // // //     ogImage?: any;
// // // //     canonicalUrl?: string;
// // // //   };
// // // // }

// // // // const SkincareServices: React.FC = () => {
// // // //   const [pageData, setPageData] = useState<SkincareServicesPageData | null>(
// // // //     null
// // // //   );
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         const res = await fetch(
// // // //           `${
// // // //             process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
// // // //             "https://backend-orpin-six-56.vercel.app/api"
// // // //           }/skincareServicesPage?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
// // // //           {
// // // //             next: { revalidate: 60 },
// // // //             cache: "force-cache",
// // // //           }
// // // //         );
// // // //         if (!res.ok) {
// // // //           throw new Error(
// // // //             `Failed to fetch Skincare Services data: ${res.statusText}`
// // // //           );
// // // //         }
// // // //         const data = await res.json();
// // // //         const activeComponent =
// // // //           data.docs?.find((component: any) => component.isActive) || null;
// // // //         console.log("Fetched Skincare Services data:", activeComponent);
// // // //         setPageData(activeComponent);
// // // //       } catch (error) {
// // // //         console.error("Error fetching Skincare Services data:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     fetchData();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (pageData?.globalStyling?.customCss) {
// // // //       const style = document.createElement("style");
// // // //       style.innerHTML = pageData.globalStyling.customCss;
// // // //       document.head.appendChild(style);
// // // //       return () => {
// // // //         document.head.removeChild(style);
// // // //       };
// // // //     }
// // // //   }, [pageData]);

// // // //   if (loading) return <div>Loading...</div>;
// // // //   if (!pageData) return <div>No data available</div>;

// // // //   const {
// // // //     heroModule,
// // // //     introModule,
// // // //     doubleBannerModules,
// // // //     ctaGeneralModule,
// // // //     columnModules,
// // // //     sectionOrder,
// // // //     globalStyling,
// // // //     seo,
// // // //   } = pageData;

// // // //   const renderSection = (sectionType: string, enabled: boolean) => {
// // // //     if (!enabled) return null;

// // // //     switch (sectionType) {
// // // //       case "hero":
// // // //         if (!heroModule.enabled) return null;
// // // //         const heroBackgroundTexture = getResponsiveImageUrls(
// // // //           heroModule.backgroundTexture
// // // //         );
// // // //         const heroMediaImage = getResponsiveImageUrls(heroModule.mediaImage);

// // // //         return (
// // // //           <div
// // // //             className={heroModule.className || "mod_hero banner mobile-stack"}
// // // //             data-s3-module
// // // //           >
// // // //             <div className="wrapper">
// // // //               <picture className="background">
// // // //                 <source
// // // //                   media="(max-width:420px)"
// // // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                   data-lazyload-srcset={`${heroBackgroundTexture.smallMobile}?auto=format,compress&w=420, ${heroBackgroundTexture.smallMobile}?auto=format,compress&w=630 2x`}
// // // //                 />
// // // //                 <source
// // // //                   media="(max-width:800px)"
// // // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                   data-lazyload-srcset={`${heroBackgroundTexture.mobile}?auto=format,compress&w=800, ${heroBackgroundTexture.mobile}?auto=format,compress&w=1200 2x`}
// // // //                 />
// // // //                 <source
// // // //                   media="(max-width:1400px)"
// // // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                   data-lazyload-srcset={`${heroBackgroundTexture.tablet}?auto=format,compress&w=1400, ${heroBackgroundTexture.tablet}?auto=format,compress&w=2100 2x`}
// // // //                 />
// // // //                 <source
// // // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                   data-lazyload-srcset={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
// // // //                 />
// // // //                 <img
// // // //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                   data-lazyload-src={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
// // // //                   loading="lazy"
// // // //                   data-lazyload="img"
// // // //                   width="1994"
// // // //                   height="1206"
// // // //                   alt={
// // // //                     heroModule.backgroundTexture.altText || "Background Texture"
// // // //                   }
// // // //                   draggable="false"
// // // //                 />
// // // //               </picture>
// // // //               <div className="row">
// // // //                 <div className="inner">
// // // //                   <ul className="partial_breadcrumb" data-s3-partial>
// // // //                     {heroModule.breadcrumbs.map((breadcrumb, index) => (
// // // //                       <li key={index}>
// // // //                         <a
// // // //                           href={breadcrumb.url}
// // // //                           role="link"
// // // //                           aria-label={breadcrumb.ariaLabel}
// // // //                         >
// // // //                           {breadcrumb.label}
// // // //                         </a>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                   <h1>{heroModule.title}</h1>
// // // //                   <div className="text">
// // // //                     {heroModule.description && (
// // // //                       <div
// // // //                         dangerouslySetInnerHTML={{
// // // //                           __html: lexicalToHtml(heroModule.description),
// // // //                         }}
// // // //                       />
// // // //                     )}
// // // //                     {heroModule.ctaButton.enabled && (
// // // //                       <p>
// // // //                         <a
// // // //                           className={
// // // //                             heroModule.ctaButton.className || "btn white"
// // // //                           }
// // // //                           href={heroModule.ctaButton.url}
// // // //                           role="button"
// // // //                         >
// // // //                           {heroModule.ctaButton.label}
// // // //                         </a>
// // // //                       </p>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="media">
// // // //                 <picture className="background">
// // // //                   <source
// // // //                     media="(max-width:420px)"
// // // //                     srcSet={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // // //                     data-lazyload-srcset={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // // //                   />
// // // //                   <source
// // // //                     media="(max-width:800px)"
// // // //                     srcSet={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // // //                     data-lazyload-srcset={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // // //                   />
// // // //                   <source
// // // //                     media="(max-width:1400px)"
// // // //                     srcSet={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
// // // //                     data-lazyload-srcset={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
// // // //                   />
// // // //                   <source
// // // //                     srcSet={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // // //                     data-lazyload-srcset={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // // //                   />
// // // //                   <img
// // // //                     src={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // // //                     width="1920"
// // // //                     height="1206"
// // // //                     alt={
// // // //                       heroModule.mediaImage.altText ||
// // // //                       "Woman receiving facial treatment"
// // // //                     }
// // // //                     draggable="false"
// // // //                   />
// // // //                 </picture>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "intro":
// // // //         if (!introModule.enabled) return null;
// // // //         const logoUrl = introModule.logo
// // // //           ? getResponsiveImageUrls({ desktop: introModule.logo }).desktop
// // // //           : "";

// // // //         return (
// // // //           <div
// // // //             className={
// // // //               introModule.className ||
// // // //               "mod_intro container viewport option-1 wide wow fadeInUp"
// // // //             }
// // // //             data-s3-module
// // // //           >
// // // //             <div className="row">
// // // //               {logoUrl && (
// // // //                 <picture className="logo">
// // // //                   <img
// // // //                     src={logoUrl}
// // // //                     width={58}
// // // //                     height={64}
// // // //                     loading="lazy"
// // // //                     alt={
// // // //                       introModule.logoAltText || "Goldfingers aesthetic logo"
// // // //                     }
// // // //                     draggable="false"
// // // //                     data-api-key="logo"
// // // //                   />
// // // //                 </picture>
// // // //               )}
// // // //               <div className="inner" data-api-key="content">
// // // //                 {introModule.title && <h2>{introModule.title}</h2>}
// // // //                 {introModule.content && (
// // // //                   <div
// // // //                     dangerouslySetInnerHTML={{
// // // //                       __html: lexicalToHtml(introModule.content),
// // // //                     }}
// // // //                   />
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "doubleBanners":
// // // //         return (
// // // //           <>
// // // //             {doubleBannerModules.map((module, moduleIndex) => {
// // // //               if (!module.enabled) return null;

// // // //               const leftBannerImage = getResponsiveImageUrls(
// // // //                 module.leftBanner.image
// // // //               );
// // // //               const rightBannerImage = getResponsiveImageUrls(
// // // //                 module.rightBanner.image
// // // //               );

// // // //               return (
// // // //                 <div
// // // //                   key={moduleIndex}
// // // //                   className={
// // // //                     module.className || "mod_double_banner container fadeInLeft"
// // // //                   }
// // // //                   data-wow-duration="2s"
// // // //                   data-s3-module
// // // //                 >
// // // //                   <div className={module.rowClassName || "row mb-40"}>
// // // //                     <div className="banner banner-left">
// // // //                       <div className="title">
// // // //                         <h2>{module.leftBanner.title}</h2>
// // // //                       </div>
// // // //                       <div className="content">
// // // //                         {module.leftBanner.content && (
// // // //                           <div
// // // //                             dangerouslySetInnerHTML={{
// // // //                               __html: lexicalToHtml(module.leftBanner.content),
// // // //                             }}
// // // //                           />
// // // //                         )}
// // // //                       </div>
// // // //                       <picture className="background">
// // // //                         <source
// // // //                           media="(max-width:420px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${leftBannerImage.smallMobile}?auto=format,compress&w=420, ${leftBannerImage.smallMobile}?auto=format,compress&w=630 2x`}
// // // //                         />
// // // //                         <source
// // // //                           media="(max-width:800px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${leftBannerImage.mobile}?auto=format,compress&w=800, ${leftBannerImage.mobile}?auto=format,compress&w=1200 2x`}
// // // //                         />
// // // //                         <source
// // // //                           media="(max-width:1400px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${leftBannerImage.tablet}?auto=format,compress&w=1400, ${leftBannerImage.tablet}?auto=format,compress&w=2100 2x`}
// // // //                         />
// // // //                         <source
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${leftBannerImage.desktop}?auto=format,compress&w=1832`}
// // // //                         />
// // // //                         <img
// // // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-src={`${leftBannerImage.desktop}?auto=format,compress&w=1832`}
// // // //                           loading="lazy"
// // // //                           data-lazyload="img"
// // // //                           width="1832"
// // // //                           height="1824"
// // // //                           alt={
// // // //                             module.leftBanner.image.altText || "Banner image"
// // // //                           }
// // // //                           draggable="false"
// // // //                         />
// // // //                       </picture>
// // // //                     </div>
// // // //                     <div className="banner banner-right">
// // // //                       <div className="title">
// // // //                         <h2>{module.rightBanner.title}</h2>
// // // //                       </div>
// // // //                       <div className="content">
// // // //                         {module.rightBanner.content && (
// // // //                           <div
// // // //                             dangerouslySetInnerHTML={{
// // // //                               __html: lexicalToHtml(module.rightBanner.content),
// // // //                             }}
// // // //                           />
// // // //                         )}
// // // //                       </div>
// // // //                       <picture className="background">
// // // //                         <source
// // // //                           media="(max-width:420px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${rightBannerImage.smallMobile}?auto=format,compress&w=420, ${rightBannerImage.smallMobile}?auto=format,compress&w=630 2x`}
// // // //                         />
// // // //                         <source
// // // //                           media="(max-width:800px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${rightBannerImage.mobile}?auto=format,compress&w=800, ${rightBannerImage.mobile}?auto=format,compress&w=1200 2x`}
// // // //                         />
// // // //                         <source
// // // //                           media="(max-width:1400px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${rightBannerImage.tablet}?auto=format,compress&w=1400, ${rightBannerImage.tablet}?auto=format,compress&w=2100 2x`}
// // // //                         />
// // // //                         <source
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${rightBannerImage.desktop}?auto=format,compress&w=1832`}
// // // //                         />
// // // //                         <img
// // // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-src={`${rightBannerImage.desktop}?auto=format,compress&w=1832`}
// // // //                           loading="lazy"
// // // //                           data-lazyload="img"
// // // //                           width="1832"
// // // //                           height="1824"
// // // //                           alt={
// // // //                             module.rightBanner.image.altText || "Banner image"
// // // //                           }
// // // //                           draggable="false"
// // // //                         />
// // // //                       </picture>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </>
// // // //         );

// // // //       case "ctaGeneral":
// // // //         if (!ctaGeneralModule.enabled) return null;

// // // //         return (
// // // //           <div
// // // //             className={
// // // //               ctaGeneralModule.className ||
// // // //               "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
// // // //             }
// // // //             data-s3-module
// // // //           >
// // // //             <div className="row">
// // // //               <div className="text">
// // // //                 <h2>
// // // //                   <a href={ctaGeneralModule.titleUrl}>
// // // //                     {ctaGeneralModule.title}
// // // //                   </a>
// // // //                 </h2>
// // // //                 <a
// // // //                   href={ctaGeneralModule.button.url}
// // // //                   className={ctaGeneralModule.button.className || "btn white"}
// // // //                 >
// // // //                   {ctaGeneralModule.button.label}
// // // //                 </a>
// // // //               </div>
// // // //               <div className="media"></div>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "columnModules":
// // // //         return (
// // // //           <>
// // // //             {columnModules.map((module, moduleIndex) => {
// // // //               if (!module.enabled) return null;

// // // //               const TitleTag = (module.titleTag ||
// // // //                 "h2") as keyof JSX.IntrinsicElements;
// // // //               const mediaImage =
// // // //                 module.hasMedia && module.mediaImage
// // // //                   ? getResponsiveImageUrls(module.mediaImage)
// // // //                   : null;

// // // //               return (
// // // //                 <div
// // // //                   key={moduleIndex}
// // // //                   className={
// // // //                     module.className ||
// // // //                     `mod_column viewport container${
// // // //                       module.hasMedia ? " has-media" : ""
// // // //                     }`
// // // //                   }
// // // //                   data-s3-module
// // // //                 >
// // // //                   <div
// // // //                     className={`${module.rowClassName || "row"}${
// // // //                       module.hasMedia && module.mediaPosition === "left"
// // // //                         ? " media-left"
// // // //                         : ""
// // // //                     }`}
// // // //                     data-api-key="content"
// // // //                   >
// // // //                     <div className="item">
// // // //                       {module.title && <TitleTag>{module.title}</TitleTag>}
// // // //                       {module.content && (
// // // //                         <div
// // // //                           dangerouslySetInnerHTML={{
// // // //                             __html: lexicalToHtml(module.content),
// // // //                           }}
// // // //                         />
// // // //                       )}
// // // //                       {module.listItems && module.listItems.length > 0 && (
// // // //                         <ul className={module.listColumns ? "columns" : ""}>
// // // //                           {module.listItems.map((item, itemIndex) => (
// // // //                             <li key={itemIndex}>{item.text}</li>
// // // //                           ))}
// // // //                         </ul>
// // // //                       )}
// // // //                     </div>
// // // //                     {module.hasMedia && mediaImage && (
// // // //                       <picture className="media">
// // // //                         <source
// // // //                           media="(max-width:420px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${mediaImage.smallMobile}?auto=format,compress&w=420, ${mediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // // //                         />
// // // //                         <source
// // // //                           media="(max-width:800px)"
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${mediaImage.mobile}?auto=format,compress&w=800, ${mediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // // //                         />
// // // //                         <source
// // // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-srcset={`${
// // // //                             mediaImage.desktop
// // // //                           }?auto=format,compress&w=${
// // // //                             module.mediaImage?.width || 904
// // // //                           }`}
// // // //                         />
// // // //                         <img
// // // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // // //                           data-lazyload-src={`${
// // // //                             mediaImage.desktop
// // // //                           }?auto=format,compress&w=${
// // // //                             module.mediaImage?.width || 904
// // // //                           }`}
// // // //                           loading="lazy"
// // // //                           data-lazyload="img"
// // // //                           width={module.mediaImage?.width || 904}
// // // //                           height={module.mediaImage?.height || 1062}
// // // //                           alt={module.mediaImage?.altText || "Column image"}
// // // //                           draggable="false"
// // // //                         />
// // // //                       </picture>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </>
// // // //         );

// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <main id="main">
// // // //       {seo.metaTitle && <title>{seo.metaTitle}</title>}
// // // //       {seo.metaDescription && (
// // // //         <meta name="description" content={seo.metaDescription} />
// // // //       )}
// // // //       {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
// // // //       {seo.ogImage && (
// // // //         <meta
// // // //           property="og:image"
// // // //           content={getResponsiveImageUrls({ desktop: seo.ogImage }).desktop}
// // // //         />
// // // //       )}
// // // //       {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}

// // // //       {sectionOrder.map((section, index) =>
// // // //         section.enabled ? (
// // // //           <React.Fragment key={index}>
// // // //             {renderSection(section.sectionType, section.enabled)}
// // // //           </React.Fragment>
// // // //         ) : null
// // // //       )}
// // // //     </main>
// // // //   );
// // // // };

// // // // export default SkincareServices;

// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

// // // // Lexical to HTML converter
// // // function lexicalToHtml(lexicalJSON: any): string {
// // //   if (!lexicalJSON || !lexicalJSON.root) return "";

// // //   const processNode = (node: any): string => {
// // //     if (!node) return "";

// // //     if (node.type === "text") {
// // //       let text = node.text || "";
// // //       if (node.format) {
// // //         if (node.format & 1) text = `<strong>${text}</strong>`;
// // //         if (node.format & 2) text = `<em>${text}</em>`;
// // //         if (node.format & 4) text = `<s>${text}</s>`;
// // //         if (node.format & 8) text = `<u>${text}</u>`;
// // //         if (node.format & 16) text = `<code>${text}</code>`;
// // //       }
// // //       return text;
// // //     }

// // //     if (node.children && Array.isArray(node.children)) {
// // //       const childrenHtml = node.children.map(processNode).join("");

// // //       switch (node.type) {
// // //         case "paragraph":
// // //           const format = node.format || "";
// // //           const className = format === "center" ? ' class="text-center"' : "";
// // //           return `<p${className}>${childrenHtml}</p>`;
// // //         case "heading":
// // //           const tag = node.tag || "h2";
// // //           return `<${tag}>${childrenHtml}</${tag}>`;
// // //         case "list":
// // //           const listTag = node.listType === "number" ? "ol" : "ul";
// // //           return `<${listTag}>${childrenHtml}</${listTag}>`;
// // //         case "listitem":
// // //           return `<li>${childrenHtml}</li>`;
// // //         case "quote":
// // //           return `<blockquote>${childrenHtml}</blockquote>`;
// // //         case "link":
// // //           const url = node.url || "#";
// // //           const target = node.newTab
// // //             ? ' target="_blank" rel="noopener noreferrer"'
// // //             : "";
// // //           return `<a href="${url}"${target}>${childrenHtml}</a>`;
// // //         case "root":
// // //           return childrenHtml;
// // //         default:
// // //           return childrenHtml;
// // //       }
// // //     }

// // //     return "";
// // //   };

// // //   return processNode(lexicalJSON.root);
// // // }

// // // interface DoubleBannerModule {
// // //   enabled: boolean;
// // //   className?: string;
// // //   rowClassName?: string;
// // //   backgroundColor?: string;
// // //   leftBanner: {
// // //     title: string;
// // //     titleColor?: string;
// // //     content?: any;
// // //     contentColor?: string;
// // //     image: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //   };
// // //   rightBanner: {
// // //     title: string;
// // //     titleColor?: string;
// // //     content?: any;
// // //     contentColor?: string;
// // //     image: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //   };
// // // }

// // // interface ColumnModule {
// // //   enabled: boolean;
// // //   className?: string;
// // //   rowClassName?: string;
// // //   backgroundColor?: string;
// // //   textColor?: string;
// // //   hasMedia: boolean;
// // //   mediaPosition?: string;
// // //   title?: string;
// // //   titleTag?: string;
// // //   titleColor?: string;
// // //   content?: any;
// // //   contentColor?: string;
// // //   listItems: Array<{
// // //     text: string;
// // //     textColor?: string;
// // //   }>;
// // //   listColumns?: boolean;
// // //   mediaImage?: {
// // //     desktop?: any;
// // //     tablet?: any;
// // //     mobile?: any;
// // //     smallMobile?: any;
// // //     altText?: string;
// // //     width?: number;
// // //     height?: number;
// // //   };
// // // }

// // // interface SkincareServicesPageData {
// // //   componentName: string;
// // //   slug: string;
// // //   isActive: boolean;
// // //   heroModule: {
// // //     enabled: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     backgroundTexture: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //     breadcrumbs: Array<{
// // //       label: string;
// // //       url: string;
// // //       ariaLabel?: string;
// // //     }>;
// // //     breadcrumbLinkColor?: string;
// // //     breadcrumbHoverColor?: string;
// // //     title: string;
// // //     titleColor?: string;
// // //     description?: any;
// // //     descriptionColor?: string;
// // //     ctaButton: {
// // //       enabled: boolean;
// // //       label?: string;
// // //       url?: string;
// // //       className?: string;
// // //     };
// // //     mediaImage: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //   };
// // //   introModule: {
// // //     enabled: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     logo?: any;
// // //     logoAltText?: string;
// // //     title?: string;
// // //     titleColor?: string;
// // //     content?: any;
// // //     contentColor?: string;
// // //   };
// // //   doubleBannerModules: DoubleBannerModule[];
// // //   ctaGeneralModule: {
// // //     enabled: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     title?: string;
// // //     titleUrl?: string;
// // //     titleColor?: string;
// // //     button: {
// // //       label?: string;
// // //       url?: string;
// // //       className?: string;
// // //     };
// // //   };
// // //   columnModules: ColumnModule[];
// // //   sectionOrder: Array<{
// // //     sectionType: string;
// // //     enabled: boolean;
// // //     customId?: string;
// // //     customClass?: string;
// // //   }>;
// // //   globalStyling: {
// // //     containerBackgroundColor?: string;
// // //     containerMaxWidth?: string;
// // //     fontFamily?: string;
// // //     primaryColor?: string;
// // //     secondaryColor?: string;
// // //     accentColor?: string;
// // //     linkColor?: string;
// // //     linkHoverColor?: string;
// // //     customCss?: string;
// // //   };
// // //   seo: {
// // //     metaTitle?: string;
// // //     metaDescription?: string;
// // //     metaKeywords?: string;
// // //     ogImage?: any;
// // //     canonicalUrl?: string;
// // //   };
// // // }

// // // const SkincareServices: React.FC = () => {
// // //   const [pageData, setPageData] = useState<SkincareServicesPageData | null>(
// // //     null
// // //   );
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const res = await fetch(
// // //           `${
// // //             process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
// // //             "https://backend-orpin-six-56.vercel.app/api"
// // //           }/skincareServicesPage?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
// // //           {
// // //             next: { revalidate: 60 },
// // //             cache: "force-cache",
// // //           }
// // //         );
// // //         if (!res.ok) {
// // //           throw new Error(
// // //             `Failed to fetch Skincare Services data: ${res.statusText}`
// // //           );
// // //         }
// // //         const data = await res.json();
// // //         const activeComponent =
// // //           data.docs?.find((component: any) => component.isActive) || null;
// // //         console.log("Fetched Skincare Services data:", activeComponent);
// // //         setPageData(activeComponent);
// // //       } catch (error) {
// // //         console.error("Error fetching Skincare Services data:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (pageData?.globalStyling?.customCss) {
// // //       const style = document.createElement("style");
// // //       style.innerHTML = pageData.globalStyling.customCss;
// // //       document.head.appendChild(style);
// // //       return () => {
// // //         document.head.removeChild(style);
// // //       };
// // //     }
// // //   }, [pageData]);

// // //   if (loading) return <div>Loading...</div>;
// // //   if (!pageData) return <div>No data available</div>;

// // //   const {
// // //     heroModule,
// // //     introModule,
// // //     doubleBannerModules,
// // //     ctaGeneralModule,
// // //     columnModules,
// // //     sectionOrder,
// // //     globalStyling,
// // //     seo,
// // //   } = pageData;

// // //   const renderSection = (sectionType: string, enabled: boolean) => {
// // //     if (!enabled) return null;

// // //     switch (sectionType) {
// // //       case "hero":
// // //         if (!heroModule.enabled) return null;
// // //         const heroBackgroundTexture = getResponsiveImageUrls(
// // //           heroModule.backgroundTexture
// // //         );
// // //         const heroMediaImage = getResponsiveImageUrls(heroModule.mediaImage);

// // //         return (
// // //           <div
// // //             className={heroModule.className || "mod_hero banner mobile-stack"}
// // //             data-s3-module
// // //           >
// // //             <div className="wrapper">
// // //               <picture className="background">
// // //                 <source
// // //                   media="(max-width:420px)"
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.smallMobile}?auto=format,compress&w=420, ${heroBackgroundTexture.smallMobile}?auto=format,compress&w=630 2x`}
// // //                 />
// // //                 <source
// // //                   media="(max-width:800px)"
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.mobile}?auto=format,compress&w=800, ${heroBackgroundTexture.mobile}?auto=format,compress&w=1200 2x`}
// // //                 />
// // //                 <source
// // //                   media="(max-width:1400px)"
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.tablet}?auto=format,compress&w=1400, ${heroBackgroundTexture.tablet}?auto=format,compress&w=2100 2x`}
// // //                 />
// // //                 <source
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
// // //                 />
// // //                 <img
// // //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-src={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
// // //                   loading="lazy"
// // //                   data-lazyload="img"
// // //                   width="1994"
// // //                   height="1206"
// // //                   alt={
// // //                     heroModule.backgroundTexture.altText || "Background Texture"
// // //                   }
// // //                   draggable="false"
// // //                 />
// // //               </picture>
// // //               <div className="row">
// // //                 <div className="inner">
// // //                   <ul className="partial_breadcrumb" data-s3-partial>
// // //                     {heroModule.breadcrumbs.map((breadcrumb, index) => (
// // //                       <li key={index}>
// // //                         <a
// // //                           href={breadcrumb.url}
// // //                           role="link"
// // //                           aria-label={breadcrumb.ariaLabel}
// // //                         >
// // //                           {breadcrumb.label}
// // //                         </a>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                   <h1>{heroModule.title}</h1>
// // //                   <div className="text">
// // //                     {heroModule.description && (
// // //                       <div
// // //                         dangerouslySetInnerHTML={{
// // //                           __html: lexicalToHtml(heroModule.description),
// // //                         }}
// // //                       />
// // //                     )}
// // //                     {heroModule.ctaButton.enabled && (
// // //                       <p>
// // //                         <a
// // //                           className={
// // //                             heroModule.ctaButton.className || "btn white"
// // //                           }
// // //                           href={heroModule.ctaButton.url}
// // //                           role="button"
// // //                         >
// // //                           {heroModule.ctaButton.label}
// // //                         </a>
// // //                       </p>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="media">
// // //                 <picture className="background">
// // //                   <source
// // //                     media="(max-width:420px)"
// // //                     srcSet={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                   />
// // //                   <source
// // //                     media="(max-width:800px)"
// // //                     srcSet={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                   />
// // //                   <source
// // //                     media="(max-width:1400px)"
// // //                     srcSet={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                   />
// // //                   <source
// // //                     srcSet={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // //                     data-lazyload-srcset={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // //                   />
// // //                   <img
// // //                     src={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // //                     width="1920"
// // //                     height="1206"
// // //                     alt={
// // //                       heroModule.mediaImage.altText ||
// // //                       "Woman receiving facial treatment"
// // //                     }
// // //                     draggable="false"
// // //                   />
// // //                 </picture>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "intro":
// // //         if (!introModule.enabled) return null;
// // //         const logoUrl = introModule.logo
// // //           ? getResponsiveImageUrls({ desktop: introModule.logo }).desktop
// // //           : "";

// // //         return (
// // //           <div
// // //             className={
// // //               introModule.className ||
// // //               "mod_intro container viewport option-1 wide wow fadeInUp"
// // //             }
// // //             data-s3-module
// // //           >
// // //             <div className="row">
// // //               {logoUrl && (
// // //                 <picture className="logo">
// // //                   <img
// // //                     src={logoUrl}
// // //                     width={58}
// // //                     height={64}
// // //                     loading="lazy"
// // //                     alt={
// // //                       introModule.logoAltText || "Goldfingers aesthetic logo"
// // //                     }
// // //                     draggable="false"
// // //                     data-api-key="logo"
// // //                   />
// // //                 </picture>
// // //               )}
// // //               <div className="inner" data-api-key="content">
// // //                 {introModule.title && <h2>{introModule.title}</h2>}
// // //                 {introModule.content && (
// // //                   <div
// // //                     dangerouslySetInnerHTML={{
// // //                       __html: lexicalToHtml(introModule.content),
// // //                     }}
// // //                   />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "doubleBanners":
// // //         return (
// // //           <>
// // //             {doubleBannerModules.map((module, moduleIndex) => {
// // //               if (!module.enabled) return null;

// // //               const leftBannerImage = getResponsiveImageUrls(
// // //                 module.leftBanner.image
// // //               );
// // //               const rightBannerImage = getResponsiveImageUrls(
// // //                 module.rightBanner.image
// // //               );

// // //               return (
// // //                 <div
// // //                   key={moduleIndex}
// // //                   className={
// // //                     module.className || "mod_double_banner container fadeInLeft"
// // //                   }
// // //                   data-wow-duration="2s"
// // //                   data-s3-module
// // //                 >
// // //                   <div className={module.rowClassName || "row mb-40"}>
// // //                     <div className="banner banner-left">
// // //                       <div className="title">
// // //                         <h2>{module.leftBanner.title}</h2>
// // //                       </div>
// // //                       <div className="content">
// // //                         {module.leftBanner.content && (
// // //                           <div
// // //                             dangerouslySetInnerHTML={{
// // //                               __html: lexicalToHtml(module.leftBanner.content),
// // //                             }}
// // //                           />
// // //                         )}
// // //                       </div>
// // //                       <picture className="background">
// // //                         <source
// // //                           media="(max-width:420px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.smallMobile}?auto=format,compress&w=420, ${leftBannerImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:800px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.mobile}?auto=format,compress&w=800, ${leftBannerImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:1400px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.tablet}?auto=format,compress&w=1400, ${leftBannerImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                         />
// // //                         <source
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                         />
// // //                         <img
// // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-src={`${leftBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                           loading="lazy"
// // //                           data-lazyload="img"
// // //                           width="1832"
// // //                           height="1824"
// // //                           alt={
// // //                             module.leftBanner.image.altText || "Banner image"
// // //                           }
// // //                           draggable="false"
// // //                         />
// // //                       </picture>
// // //                     </div>
// // //                     <div className="banner banner-right">
// // //                       <div className="title">
// // //                         <h2>{module.rightBanner.title}</h2>
// // //                       </div>
// // //                       <div className="content">
// // //                         {module.rightBanner.content && (
// // //                           <div
// // //                             dangerouslySetInnerHTML={{
// // //                               __html: lexicalToHtml(module.rightBanner.content),
// // //                             }}
// // //                           />
// // //                         )}
// // //                       </div>
// // //                       <picture className="background">
// // //                         <source
// // //                           media="(max-width:420px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.smallMobile}?auto=format,compress&w=420, ${rightBannerImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:800px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.mobile}?auto=format,compress&w=800, ${rightBannerImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:1400px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.tablet}?auto=format,compress&w=1400, ${rightBannerImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                         />
// // //                         <source
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                         />
// // //                         <img
// // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-src={`${rightBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                           loading="lazy"
// // //                           data-lazyload="img"
// // //                           width="1832"
// // //                           height="1824"
// // //                           alt={
// // //                             module.rightBanner.image.altText || "Banner image"
// // //                           }
// // //                           draggable="false"
// // //                         />
// // //                       </picture>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </>
// // //         );

// // //       case "ctaGeneral":
// // //         if (!ctaGeneralModule.enabled) return null;

// // //         return (
// // //           <div
// // //             className={
// // //               ctaGeneralModule.className ||
// // //               "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
// // //             }
// // //             data-s3-module
// // //           >
// // //             <div className="row">
// // //               <div className="text">
// // //                 <h2>
// // //                   <a href={ctaGeneralModule.titleUrl}>
// // //                     {ctaGeneralModule.title}
// // //                   </a>
// // //                 </h2>
// // //                 <a
// // //                   href={ctaGeneralModule.button.url}
// // //                   className={ctaGeneralModule.button.className || "btn white"}
// // //                 >
// // //                   {ctaGeneralModule.button.label}
// // //                 </a>
// // //               </div>
// // //               <div className="media"></div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "columnModules":
// // //         return (
// // //           <>
// // //             {columnModules.map((module, moduleIndex) => {
// // //               if (!module.enabled) return null;

// // //               const TitleTag = (module.titleTag ||
// // //                 "h2") as keyof JSX.IntrinsicElements;
// // //               const mediaImage =
// // //                 module.hasMedia && module.mediaImage
// // //                   ? getResponsiveImageUrls(module.mediaImage)
// // //                   : null;

// // //               return (
// // //                 <div
// // //                   key={moduleIndex}
// // //                   className={
// // //                     module.className || "mod_column viewport container"
// // //                   }
// // //                   data-s3-module
// // //                 >
// // //                   <div
// // //                     className={module.rowClassName || "row"}
// // //                     data-api-key="content"
// // //                   >
// // //                     <div className="item">
// // //                       {module.title && <TitleTag>{module.title}</TitleTag>}
// // //                       {module.content && (
// // //                         <div
// // //                           dangerouslySetInnerHTML={{
// // //                             __html: lexicalToHtml(module.content),
// // //                           }}
// // //                         />
// // //                       )}
// // //                       {module.listItems && module.listItems.length > 0 && (
// // //                         <ul className={module.listColumns ? "columns" : ""}>
// // //                           {module.listItems.map((item, itemIndex) => (
// // //                             <li key={itemIndex}>{item.text}</li>
// // //                           ))}
// // //                         </ul>
// // //                       )}
// // //                     </div>
// // //                     {module.hasMedia && mediaImage && (
// // //                       <picture className="media">
// // //                         <source
// // //                           media="(max-width:420px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${mediaImage.smallMobile}?auto=format,compress&w=420, ${mediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:800px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${mediaImage.mobile}?auto=format,compress&w=800, ${mediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                         />
// // //                         <source
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${
// // //                             mediaImage.desktop
// // //                           }?auto=format,compress&w=${
// // //                             module.mediaImage?.width || 904
// // //                           }`}
// // //                         />
// // //                         <img
// // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-src={`${
// // //                             mediaImage.desktop
// // //                           }?auto=format,compress&w=${
// // //                             module.mediaImage?.width || 904
// // //                           }`}
// // //                           loading="lazy"
// // //                           data-lazyload="img"
// // //                           width={module.mediaImage?.width || 904}
// // //                           height={module.mediaImage?.height || 1062}
// // //                           alt={module.mediaImage?.altText || "Column image"}
// // //                           draggable="false"
// // //                         />
// // //                       </picture>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </>
// // //         );

// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <main id="main">
// // //       {seo.metaTitle && <title>{seo.metaTitle}</title>}
// // //       {seo.metaDescription && (
// // //         <meta name="description" content={seo.metaDescription} />
// // //       )}
// // //       {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
// // //       {seo.ogImage && (
// // //         <meta
// // //           property="og:image"
// // //           content={getResponsiveImageUrls({ desktop: seo.ogImage }).desktop}
// // //         />
// // //       )}
// // //       {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}

// // //       {sectionOrder.map((section, index) =>
// // //         section.enabled ? (
// // //           <React.Fragment key={index}>
// // //             {renderSection(section.sectionType, section.enabled)}
// // //           </React.Fragment>
// // //         ) : null
// // //       )}
// // //     </main>
// // //   );
// // // };

// // // export default SkincareServices;

// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

// // // // Lexical to HTML converter
// // // function lexicalToHtml(lexicalJSON: any): string {
// // //   if (!lexicalJSON || !lexicalJSON.root) return "";

// // //   const processNode = (node: any): string => {
// // //     if (!node) return "";

// // //     if (node.type === "text") {
// // //       let text = node.text || "";
// // //       if (node.format) {
// // //         if (node.format & 1) text = `<strong>${text}</strong>`;
// // //         if (node.format & 2) text = `<em>${text}</em>`;
// // //         if (node.format & 4) text = `<s>${text}</s>`;
// // //         if (node.format & 8) text = `<u>${text}</u>`;
// // //         if (node.format & 16) text = `<code>${text}</code>`;
// // //       }
// // //       return text;
// // //     }

// // //     if (node.children && Array.isArray(node.children)) {
// // //       const childrenHtml = node.children.map(processNode).join("");

// // //       switch (node.type) {
// // //         case "paragraph":
// // //           const format = node.format || "";
// // //           const className = format === "center" ? ' class="text-center"' : "";
// // //           return `<p${className}>${childrenHtml}</p>`;
// // //         case "heading":
// // //           const tag = node.tag || "h2";
// // //           return `<${tag}>${childrenHtml}</${tag}>`;
// // //         case "list":
// // //           const listTag = node.listType === "number" ? "ol" : "ul";
// // //           return `<${listTag}>${childrenHtml}</${listTag}>`;
// // //         case "listitem":
// // //           return `<li>${childrenHtml}</li>`;
// // //         case "quote":
// // //           return `<blockquote>${childrenHtml}</blockquote>`;
// // //         case "link":
// // //           const url = node.url || "#";
// // //           const target = node.newTab
// // //             ? ' target="_blank" rel="noopener noreferrer"'
// // //             : "";
// // //           return `<a href="${url}"${target}>${childrenHtml}</a>`;
// // //         case "root":
// // //           return childrenHtml;
// // //         default:
// // //           return childrenHtml;
// // //       }
// // //     }

// // //     return "";
// // //   };

// // //   return processNode(lexicalJSON.root);
// // // }

// // // interface DoubleBannerModule {
// // //   enabled: boolean;
// // //   className?: string;
// // //   rowClassName?: string;
// // //   backgroundColor?: string;
// // //   leftBanner: {
// // //     title: string;
// // //     titleColor?: string;
// // //     content?: any;
// // //     contentColor?: string;
// // //     image: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //   };
// // //   rightBanner: {
// // //     title: string;
// // //     titleColor?: string;
// // //     content?: any;
// // //     contentColor?: string;
// // //     image: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //   };
// // // }

// // // interface ColumnModule {
// // //   enabled: boolean;
// // //   className?: string;
// // //   rowClassName?: string;
// // //   backgroundColor?: string;
// // //   textColor?: string;
// // //   hasMedia: boolean;
// // //   mediaPosition?: string;
// // //   title?: string;
// // //   titleTag?: string;
// // //   titleColor?: string;
// // //   content?: any;
// // //   contentColor?: string;
// // //   listItems: Array<{
// // //     text: string;
// // //     textColor?: string;
// // //   }>;
// // //   listColumns?: boolean;
// // //   mediaImage?: {
// // //     desktop?: any;
// // //     tablet?: any;
// // //     mobile?: any;
// // //     smallMobile?: any;
// // //     altText?: string;
// // //     width?: number;
// // //     height?: number;
// // //   };
// // // }

// // // interface SkincareServicesPageData {
// // //   componentName: string;
// // //   slug: string;
// // //   isActive: boolean;
// // //   heroModule: {
// // //     enabled: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     backgroundTexture: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //     breadcrumbs: Array<{
// // //       label: string;
// // //       url: string;
// // //       ariaLabel?: string;
// // //     }>;
// // //     breadcrumbLinkColor?: string;
// // //     breadcrumbHoverColor?: string;
// // //     title: string;
// // //     titleColor?: string;
// // //     description?: any;
// // //     descriptionColor?: string;
// // //     ctaButton: {
// // //       enabled: boolean;
// // //       label?: string;
// // //       url?: string;
// // //       className?: string;
// // //     };
// // //     mediaImage: {
// // //       desktop?: any;
// // //       tablet?: any;
// // //       mobile?: any;
// // //       smallMobile?: any;
// // //       altText?: string;
// // //     };
// // //   };
// // //   introModule: {
// // //     enabled: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     logo?: any;
// // //     logoAltText?: string;
// // //     title?: string;
// // //     titleColor?: string;
// // //     content?: any;
// // //     contentColor?: string;
// // //   };
// // //   doubleBannerModules: DoubleBannerModule[];
// // //   ctaGeneralModule: {
// // //     enabled: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     title?: string;
// // //     titleUrl?: string;
// // //     titleColor?: string;
// // //     button: {
// // //       label?: string;
// // //       url?: string;
// // //       className?: string;
// // //     };
// // //   };
// // //   columnModules: ColumnModule[];
// // //   sectionOrder: Array<{
// // //     sectionType: string;
// // //     enabled: boolean;
// // //     customId?: string;
// // //     customClass?: string;
// // //   }>;
// // //   globalStyling: {
// // //     containerBackgroundColor?: string;
// // //     containerMaxWidth?: string;
// // //     fontFamily?: string;
// // //     primaryColor?: string;
// // //     secondaryColor?: string;
// // //     accentColor?: string;
// // //     linkColor?: string;
// // //     linkHoverColor?: string;
// // //     customCss?: string;
// // //   };
// // //   seo: {
// // //     metaTitle?: string;
// // //     metaDescription?: string;
// // //     metaKeywords?: string;
// // //     ogImage?: any;
// // //     canonicalUrl?: string;
// // //   };
// // // }

// // // const SkincareServices: React.FC = () => {
// // //   const [pageData, setPageData] = useState<SkincareServicesPageData | null>(
// // //     null
// // //   );
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const res = await fetch(
// // //           `${
// // //             process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
// // //             "https://backend-orpin-six-56.vercel.app/api"
// // //           }/skincareServicesPage?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
// // //           {
// // //             next: { revalidate: 60 },
// // //             cache: "force-cache",
// // //           }
// // //         );
// // //         if (!res.ok) {
// // //           throw new Error(
// // //             `Failed to fetch Skincare Services data: ${res.statusText}`
// // //           );
// // //         }
// // //         const data = await res.json();
// // //         const activeComponent =
// // //           data.docs?.find((component: any) => component.isActive) || null;
// // //         console.log("Fetched Skincare Services data:", activeComponent);
// // //         setPageData(activeComponent);
// // //       } catch (error) {
// // //         console.error("Error fetching Skincare Services data:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (pageData?.globalStyling?.customCss) {
// // //       const style = document.createElement("style");
// // //       style.innerHTML = pageData.globalStyling.customCss;
// // //       document.head.appendChild(style);
// // //       return () => {
// // //         document.head.removeChild(style);
// // //       };
// // //     }
// // //   }, [pageData]);

// // //   if (loading) return <div>Loading...</div>;
// // //   if (!pageData) return <div>No data available</div>;

// // //   const {
// // //     heroModule,
// // //     introModule,
// // //     doubleBannerModules,
// // //     ctaGeneralModule,
// // //     columnModules,
// // //     sectionOrder,
// // //     globalStyling,
// // //     seo,
// // //   } = pageData;

// // //   const renderSection = (sectionType: string, enabled: boolean) => {
// // //     if (!enabled) return null;

// // //     switch (sectionType) {
// // //       case "hero":
// // //         if (!heroModule.enabled) return null;
// // //         const heroBackgroundTexture = getResponsiveImageUrls(
// // //           heroModule.backgroundTexture
// // //         );
// // //         const heroMediaImage = getResponsiveImageUrls(heroModule.mediaImage);

// // //         return (
// // //           <div
// // //             className={heroModule.className || "mod_hero banner mobile-stack"}
// // //             data-s3-module
// // //           >
// // //             <div className="wrapper">
// // //               <picture className="background">
// // //                 <source
// // //                   media="(max-width:420px)"
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.smallMobile}?auto=format,compress&w=420, ${heroBackgroundTexture.smallMobile}?auto=format,compress&w=630 2x`}
// // //                 />
// // //                 <source
// // //                   media="(max-width:800px)"
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.mobile}?auto=format,compress&w=800, ${heroBackgroundTexture.mobile}?auto=format,compress&w=1200 2x`}
// // //                 />
// // //                 <source
// // //                   media="(max-width:1400px)"
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.tablet}?auto=format,compress&w=1400, ${heroBackgroundTexture.tablet}?auto=format,compress&w=2100 2x`}
// // //                 />
// // //                 <source
// // //                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-srcset={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
// // //                 />
// // //                 <img
// // //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                   data-lazyload-src={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
// // //                   loading="lazy"
// // //                   data-lazyload="img"
// // //                   width="1994"
// // //                   height="1206"
// // //                   alt={
// // //                     heroModule.backgroundTexture.altText || "Background Texture"
// // //                   }
// // //                   draggable="false"
// // //                 />
// // //               </picture>
// // //               <div className="row">
// // //                 <div className="inner">
// // //                   <ul className="partial_breadcrumb" data-s3-partial>
// // //                     {heroModule.breadcrumbs.map((breadcrumb, index) => (
// // //                       <li key={index}>
// // //                         <a
// // //                           href={breadcrumb.url}
// // //                           role="link"
// // //                           aria-label={breadcrumb.ariaLabel}
// // //                         >
// // //                           {breadcrumb.label}
// // //                         </a>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                   <h1>{heroModule.title}</h1>
// // //                   <div className="text">
// // //                     {heroModule.description && (
// // //                       <div
// // //                         dangerouslySetInnerHTML={{
// // //                           __html: lexicalToHtml(heroModule.description),
// // //                         }}
// // //                       />
// // //                     )}
// // //                     {heroModule.ctaButton.enabled && (
// // //                       <p>
// // //                         <a
// // //                           className={
// // //                             heroModule.ctaButton.className || "btn white"
// // //                           }
// // //                           href={heroModule.ctaButton.url}
// // //                           role="button"
// // //                         >
// // //                           {heroModule.ctaButton.label}
// // //                         </a>
// // //                       </p>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="media">
// // //                 <picture className="background">
// // //                   <source
// // //                     media="(max-width:420px)"
// // //                     srcSet={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                   />
// // //                   <source
// // //                     media="(max-width:800px)"
// // //                     srcSet={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                   />
// // //                   <source
// // //                     media="(max-width:1400px)"
// // //                     srcSet={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                   />
// // //                   <source
// // //                     srcSet={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // //                     data-lazyload-srcset={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // //                   />
// // //                   <img
// // //                     src={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
// // //                     width="1920"
// // //                     height="1206"
// // //                     alt={
// // //                       heroModule.mediaImage.altText ||
// // //                       "Woman receiving facial treatment"
// // //                     }
// // //                     draggable="false"
// // //                   />
// // //                 </picture>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "intro":
// // //         if (!introModule.enabled) return null;
// // //         const logoUrl = introModule.logo
// // //           ? getResponsiveImageUrls({ desktop: introModule.logo }).desktop
// // //           : "";

// // //         return (
// // //           <div
// // //             className={
// // //               introModule.className ||
// // //               "mod_intro container viewport option-1 wide wow fadeInUp"
// // //             }
// // //             data-s3-module
// // //           >
// // //             <div className="row">
// // //               {logoUrl && (
// // //                 <picture className="logo">
// // //                   <img
// // //                     src={logoUrl}
// // //                     width={58}
// // //                     height={64}
// // //                     loading="lazy"
// // //                     alt={
// // //                       introModule.logoAltText || "Goldfingers aesthetic logo"
// // //                     }
// // //                     draggable="false"
// // //                     data-api-key="logo"
// // //                   />
// // //                 </picture>
// // //               )}
// // //               <div className="inner" data-api-key="content">
// // //                 {introModule.title && <h2>{introModule.title}</h2>}
// // //                 {introModule.content && (
// // //                   <div
// // //                     dangerouslySetInnerHTML={{
// // //                       __html: lexicalToHtml(introModule.content),
// // //                     }}
// // //                   />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "doubleBanners":
// // //         return (
// // //           <>
// // //             {doubleBannerModules.map((module, moduleIndex) => {
// // //               if (!module.enabled) return null;

// // //               const leftBannerImage = getResponsiveImageUrls(
// // //                 module.leftBanner.image
// // //               );
// // //               const rightBannerImage = getResponsiveImageUrls(
// // //                 module.rightBanner.image
// // //               );

// // //               return (
// // //                 <div
// // //                   key={moduleIndex}
// // //                   className={
// // //                     module.className || "mod_double_banner container fadeInLeft"
// // //                   }
// // //                   data-wow-duration="2s"
// // //                   data-s3-module
// // //                 >
// // //                   <div className={module.rowClassName || "row mb-40"}>
// // //                     <div className="banner banner-left">
// // //                       <div className="title">
// // //                         <h2>{module.leftBanner.title}</h2>
// // //                       </div>
// // //                       <div className="content">
// // //                         {module.leftBanner.content && (
// // //                           <div
// // //                             dangerouslySetInnerHTML={{
// // //                               __html: lexicalToHtml(module.leftBanner.content),
// // //                             }}
// // //                           />
// // //                         )}
// // //                       </div>
// // //                       <picture className="background">
// // //                         <source
// // //                           media="(max-width:420px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.smallMobile}?auto=format,compress&w=420, ${leftBannerImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:800px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.mobile}?auto=format,compress&w=800, ${leftBannerImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:1400px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.tablet}?auto=format,compress&w=1400, ${leftBannerImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                         />
// // //                         <source
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${leftBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                         />
// // //                         <img
// // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-src={`${leftBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                           loading="lazy"
// // //                           data-lazyload="img"
// // //                           width="1832"
// // //                           height="1824"
// // //                           alt={
// // //                             module.leftBanner.image.altText || "Banner image"
// // //                           }
// // //                           draggable="false"
// // //                         />
// // //                       </picture>
// // //                     </div>
// // //                     <div className="banner banner-right">
// // //                       <div className="title">
// // //                         <h2>{module.rightBanner.title}</h2>
// // //                       </div>
// // //                       <div className="content">
// // //                         {module.rightBanner.content && (
// // //                           <div
// // //                             dangerouslySetInnerHTML={{
// // //                               __html: lexicalToHtml(module.rightBanner.content),
// // //                             }}
// // //                           />
// // //                         )}
// // //                       </div>
// // //                       <picture className="background">
// // //                         <source
// // //                           media="(max-width:420px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.smallMobile}?auto=format,compress&w=420, ${rightBannerImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:800px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.mobile}?auto=format,compress&w=800, ${rightBannerImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:1400px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.tablet}?auto=format,compress&w=1400, ${rightBannerImage.tablet}?auto=format,compress&w=2100 2x`}
// // //                         />
// // //                         <source
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${rightBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                         />
// // //                         <img
// // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-src={`${rightBannerImage.desktop}?auto=format,compress&w=1832`}
// // //                           loading="lazy"
// // //                           data-lazyload="img"
// // //                           width="1832"
// // //                           height="1824"
// // //                           alt={
// // //                             module.rightBanner.image.altText || "Banner image"
// // //                           }
// // //                           draggable="false"
// // //                         />
// // //                       </picture>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </>
// // //         );

// // //       case "ctaGeneral":
// // //         if (!ctaGeneralModule.enabled) return null;

// // //         return (
// // //           <div
// // //             className={
// // //               ctaGeneralModule.className ||
// // //               "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
// // //             }
// // //             data-s3-module
// // //           >
// // //             <div className="row">
// // //               <div className="text">
// // //                 <h2>
// // //                   <a href={ctaGeneralModule.titleUrl}>
// // //                     {ctaGeneralModule.title}
// // //                   </a>
// // //                 </h2>
// // //                 <a
// // //                   href={ctaGeneralModule.button.url}
// // //                   className={ctaGeneralModule.button.className || "btn white"}
// // //                 >
// // //                   {ctaGeneralModule.button.label}
// // //                 </a>
// // //               </div>
// // //               <div className="media"></div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "columnModules":
// // //         return (
// // //           <>
// // //             {columnModules.map((module, moduleIndex) => {
// // //               if (!module.enabled) return null;

// // //               const TitleTag = (module.titleTag ||
// // //                 "h2") as keyof JSX.IntrinsicElements;
// // //               const mediaImage =
// // //                 module.hasMedia && module.mediaImage
// // //                   ? getResponsiveImageUrls(module.mediaImage)
// // //                   : null;

// // //               // If module has media, render with image layout
// // //               if (module.hasMedia && mediaImage) {
// // //                 return (
// // //                   <div
// // //                     key={moduleIndex}
// // //                     className={
// // //                       module.className ||
// // //                       "mod_column viewport container has-media"
// // //                     }
// // //                     data-s3-module
// // //                   >
// // //                     <div
// // //                       className={
// // //                         "row mt-30 pb-0 media-left"
// // //                       }
// // //                       data-api-key="content"
// // //                     >
// // //                       <div className="item">
// // //                         {module.title && <TitleTag>{module.title}</TitleTag>}
// // //                         {module.content && (
// // //                           <div
// // //                             dangerouslySetInnerHTML={{
// // //                               __html: lexicalToHtml(module.content),
// // //                             }}
// // //                           />
// // //                         )}
// // //                         {module.listItems && module.listItems.length > 0 && (
// // //                           <ul className={module.listColumns ? "columns" : ""}>
// // //                             {module.listItems.map((item, itemIndex) => (
// // //                               <li key={itemIndex}>{item.text}</li>
// // //                             ))}
// // //                           </ul>
// // //                         )}
// // //                       </div>
// // //                       <picture className="media">
// // //                         <source
// // //                           media="(max-width:420px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${mediaImage.smallMobile}?auto=format,compress&w=420, ${mediaImage.smallMobile}?auto=format,compress&w=630 2x`}
// // //                         />
// // //                         <source
// // //                           media="(max-width:800px)"
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${mediaImage.mobile}?auto=format,compress&w=800, ${mediaImage.mobile}?auto=format,compress&w=1200 2x`}
// // //                         />
// // //                         <source
// // //                           srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-srcset={`${
// // //                             mediaImage.desktop
// // //                           }?auto=format,compress&w=${
// // //                             module.mediaImage?.width || 904
// // //                           }`}
// // //                         />
// // //                         <img
// // //                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //                           data-lazyload-src={`${
// // //                             mediaImage.desktop
// // //                           }?auto=format,compress&w=${
// // //                             module.mediaImage?.width || 904
// // //                           }`}
// // //                           loading="lazy"
// // //                           data-lazyload="img"
// // //                           width={module.mediaImage?.width || 904}
// // //                           height={module.mediaImage?.height || 1062}
// // //                           alt={
// // //                             module.mediaImage?.altText ||
// // //                             "boardwalk and palm trees on the beach"
// // //                           }
// // //                           draggable="false"
// // //                         />
// // //                       </picture>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               }

// // //               // If module has no media, render without image layout
// // //               return (
// // //                 <div
// // //                   key={moduleIndex}
// // //                   className={
// // //                     module.className || "mod_column viewport container"
// // //                   }
// // //                   data-s3-module
// // //                 >
// // //                   <div
// // //                     className={module.rowClassName || "row"}
// // //                     data-api-key="content"
// // //                   >
// // //                     <div className="item">
// // //                       {module.title && <TitleTag>{module.title}</TitleTag>}
// // //                       {module.content && (
// // //                         <div
// // //                           dangerouslySetInnerHTML={{
// // //                             __html: lexicalToHtml(module.content),
// // //                           }}
// // //                         />
// // //                       )}
// // //                       {module.listItems && module.listItems.length > 0 && (
// // //                         <ul className={module.listColumns ? "columns" : ""}>
// // //                           {module.listItems.map((item, itemIndex) => (
// // //                             <li key={itemIndex}>{item.text}</li>
// // //                           ))}
// // //                         </ul>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </>
// // //         );

// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <main id="main">
// // //       {seo.metaTitle && <title>{seo.metaTitle}</title>}
// // //       {seo.metaDescription && (
// // //         <meta name="description" content={seo.metaDescription} />
// // //       )}
// // //       {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
// // //       {seo.ogImage && (
// // //         <meta
// // //           property="og:image"
// // //           content={getResponsiveImageUrls({ desktop: seo.ogImage }).desktop}
// // //         />
// // //       )}
// // //       {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}

// // //       {sectionOrder.map((section, index) =>
// // //         section.enabled ? (
// // //           <React.Fragment key={index}>
// // //             {renderSection(section.sectionType, section.enabled)}
// // //           </React.Fragment>
// // //         ) : null
// // //       )}
// // //     </main>
// // //   );
// // // };

// // // export default SkincareServices;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchSkincareServicesPageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
// } from "@/lib/api/medicalSpa/fetchSkincareServicesPageComponent";

// interface SkincareServicesData {
//   heroModule: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundTexture?: any;
//     breadcrumbs?: Array<{ label: string; url: string; ariaLabel?: string }>;
//     breadcrumbLinkColor?: string;
//     breadcrumbHoverColor?: string;
//     title: string;
//     titleColor?: string;
//     description?: any;
//     descriptionColor?: string;
//     ctaButton?: {
//       enabled: boolean;
//       label: string;
//       url: string;
//       className?: string;
//     };
//     mediaImage?: any;
//   };
//   introModule: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     logo?: any;
//     logoAltText?: string;
//     title: string;
//     titleColor?: string;
//     content?: any;
//     contentColor?: string;
//   };
//   doubleBannerModules?: Array<{
//     enabled: boolean;
//     className?: string;
//     rowClassName?: string;
//     backgroundColor?: string;
//     leftBanner: {
//       title: string;
//       titleColor?: string;
//       content?: any;
//       contentColor?: string;
//       image?: any;
//     };
//     rightBanner: {
//       title: string;
//       titleColor?: string;
//       content?: any;
//       contentColor?: string;
//       image?: any;
//     };
//   }>;
//   ctaGeneralModule: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     title: string;
//     titleUrl?: string;
//     titleColor?: string;
//     button?: {
//       label: string;
//       url: string;
//       className?: string;
//     };
//   };
//   columnModules?: Array<{
//     enabled: boolean;
//     className?: string;
//     rowClassName?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     hasMedia: boolean;
//     mediaPosition?: string;
//     title?: string;
//     titleTag?: string;
//     titleColor?: string;
//     content?: any;
//     contentColor?: string;
//     listItems?: Array<{ text: string; textColor?: string }>;
//     listColumns?: boolean;
//     mediaImage?: any;
//   }>;
//   sectionOrder?: Array<{
//     sectionType: string;
//     enabled: boolean;
//     customId?: string;
//     customClass?: string;
//   }>;
//   globalStyling?: any;
// }

// const SkincareServices: React.FC = () => {
//   const [pageData, setPageData] = useState<SkincareServicesData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchSkincareServicesPageData(
//           "skincare-services-page-component"
//         );
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching SkincareServices page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const renderHeroModule = () => {
//     if (!pageData.heroModule?.enabled) return null;

//     const hero = pageData.heroModule;
//     const bgTexture = hero.backgroundTexture
//       ? getResponsiveImageUrls(hero.backgroundTexture)
//       : null;
//     const mediaImg = hero.mediaImage
//       ? getResponsiveImageUrls(hero.mediaImage)
//       : null;

//     return (
//       <div
//         className={hero.className || "mod_hero banner mobile-stack"}
//         data-s3-module
//       >
//         <div className="wrapper">
//           {bgTexture && (
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgTexture.smallMobile}?auto=format,compress&w=420, ${bgTexture.smallMobile}?auto=format,compress&w=630 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgTexture.mobile}?auto=format,compress&w=800, ${bgTexture.mobile}?auto=format,compress&w=1200 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgTexture.tablet}?auto=format,compress&w=1400, ${bgTexture.tablet}?auto=format,compress&w=2100 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgTexture.desktop}?auto=format,compress&w=1994`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${bgTexture.desktop}?auto=format,compress&w=1994`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1994"
//                 height="1206"
//                 alt={bgTexture.altText || "Background Texture"}
//                 draggable="false"
//               />
//             </picture>
//           )}
//           <div className="row">
//             <div className="inner">
//               {hero.breadcrumbs && hero.breadcrumbs.length > 0 && (
//                 <ul className="partial_breadcrumb" data-s3-partial>
//                   {hero.breadcrumbs.map((crumb, index) => (
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
//               )}
//               <h1 style={{ color: hero.titleColor }}>{hero.title}</h1>
//               {hero.description && (
//                 <div
//                   className="text"
//                   style={{ color: hero.descriptionColor }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(hero.description),
//                   }}
//                 />
//               )}
//               {hero.ctaButton?.enabled && (
//                 <p>
//                   <a
//                     className={hero.ctaButton.className || "btn white"}
//                     href={hero.ctaButton.url}
//                     role="button"
//                   >
//                     {hero.ctaButton.label}
//                   </a>
//                 </p>
//               )}
//             </div>
//           </div>
//           {mediaImg && (
//             <div className="media">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={`${mediaImg.smallMobile}?auto=format,compress&w=420, ${mediaImg.smallMobile}?auto=format,compress&w=630 2x`}
//                   data-lazyload-srcset={`${mediaImg.smallMobile}?auto=format,compress&w=420, ${mediaImg.smallMobile}?auto=format,compress&w=630 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${mediaImg.mobile}?auto=format,compress&w=800, ${mediaImg.mobile}?auto=format,compress&w=1200 2x`}
//                   data-lazyload-srcset={`${mediaImg.mobile}?auto=format,compress&w=800, ${mediaImg.mobile}?auto=format,compress&w=1200 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={`${mediaImg.tablet}?auto=format,compress&w=1400, ${mediaImg.tablet}?auto=format,compress&w=2100 2x`}
//                   data-lazyload-srcset={`${mediaImg.tablet}?auto=format,compress&w=1400, ${mediaImg.tablet}?auto=format,compress&w=2100 2x`}
//                 />
//                 <source
//                   srcSet={`${mediaImg.desktop}?auto=format,compress&w=1920`}
//                   data-lazyload-srcset={`${mediaImg.desktop}?auto=format,compress&w=1920`}
//                 />
//                 <img
//                   src={`${mediaImg.desktop}?auto=format,compress&w=1920`}
//                   width={mediaImg.width || 1920}
//                   height={mediaImg.height || 1206}
//                   alt={mediaImg.altText || "Woman receiving facial treatment"}
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderIntroModule = () => {
//     if (!pageData.introModule?.enabled) return null;

//     const intro = pageData.introModule;
//     const logo = intro.logo ? getResponsiveImageUrls(intro.logo) : null;

//     return (
//       <div
//         className={
//           intro.className ||
//           "mod_intro container viewport option-1 wide wow fadeInUp"
//         }
//         data-s3-module
//         style={{
//           backgroundColor: intro.backgroundColor,
//           color: intro.textColor,
//         }}
//       >
//         <div className="row">
//           {logo && (
//             <picture className="logo">
//               <img
//                 src={logo.desktop}
//                 width={58}
//                 height={64}
//                 loading="lazy"
//                 alt={intro.logoAltText || "Goldfingers aesthetic logo"}
//                 draggable="false"
//                 data-api-key="logo"
//               />
//             </picture>
//           )}
//           <div className="inner" data-api-key="content">
//             <h2
//               style={{ color: intro.titleColor }}
//               dangerouslySetInnerHTML={{ __html: intro.title }}
//             />
//             {intro.content && (
//               <div
//                 style={{ color: intro.contentColor }}
//                 dangerouslySetInnerHTML={{
//                   __html: lexicalToHtml(intro.content),
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderDoubleBannerModules = () => {
//     if (
//       !pageData.doubleBannerModules ||
//       pageData.doubleBannerModules.length === 0
//     )
//       return null;

//     return pageData.doubleBannerModules.map((module, index) => {
//       if (!module.enabled) return null;

//       const leftImg = module.leftBanner.image
//         ? getResponsiveImageUrls(module.leftBanner.image)
//         : null;
//       const rightImg = module.rightBanner.image
//         ? getResponsiveImageUrls(module.rightBanner.image)
//         : null;

//       return (
//         <div
//           key={index}
//           className={
//             module.className || "mod_double_banner container fadeInLeft"
//           }
//           data-wow-duration="2s"
//           data-s3-module
//           style={{ backgroundColor: module.backgroundColor }}
//         >
//           <div className={module.rowClassName || "row mb-40"}>
//             <div className="banner banner-left">
//               <div className="title">
//                 <h2 style={{ color: module.leftBanner.titleColor }}>
//                   {module.leftBanner.title}
//                 </h2>
//               </div>
//               {module.leftBanner.content && (
//                 <div
//                   className="content"
//                   style={{ color: module.leftBanner.contentColor }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(module.leftBanner.content),
//                   }}
//                 />
//               )}
//               {leftImg && (
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${leftImg.smallMobile}?auto=format,compress&w=420, ${leftImg.smallMobile}?auto=format,compress&w=630 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${leftImg.mobile}?auto=format,compress&w=800, ${leftImg.mobile}?auto=format,compress&w=1200 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${leftImg.tablet}?auto=format,compress&w=1400, ${leftImg.tablet}?auto=format,compress&w=2100 2x`}
//                   />
//                   <source
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${leftImg.desktop}?auto=format,compress&w=1832`}
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src={`${leftImg.desktop}?auto=format,compress&w=1832`}
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={leftImg.width || 1832}
//                     height={leftImg.height || 1824}
//                     alt={leftImg.altText || ""}
//                     draggable="false"
//                   />
//                 </picture>
//               )}
//             </div>
//             <div className="banner banner-right">
//               <div className="title">
//                 <h2 style={{ color: module.rightBanner.titleColor }}>
//                   {module.rightBanner.title}
//                 </h2>
//               </div>
//               {module.rightBanner.content && (
//                 <div
//                   className="content"
//                   style={{ color: module.rightBanner.contentColor }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(module.rightBanner.content),
//                   }}
//                 />
//               )}
//               {rightImg && (
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${rightImg.smallMobile}?auto=format,compress&w=420, ${rightImg.smallMobile}?auto=format,compress&w=630 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${rightImg.mobile}?auto=format,compress&w=800, ${rightImg.mobile}?auto=format,compress&w=1200 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${rightImg.tablet}?auto=format,compress&w=1400, ${rightImg.tablet}?auto=format,compress&w=2100 2x`}
//                   />
//                   <source
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${rightImg.desktop}?auto=format,compress&w=1832`}
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src={`${rightImg.desktop}?auto=format,compress&w=1832`}
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={rightImg.width || 1832}
//                     height={rightImg.height || 1824}
//                     alt={rightImg.altText || ""}
//                     draggable="false"
//                   />
//                 </picture>
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };

//   const renderCtaGeneralModule = () => {
//     if (!pageData.ctaGeneralModule?.enabled) return null;

//     const cta = pageData.ctaGeneralModule;

//     return (
//       <div
//         className={
//           cta.className ||
//           "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
//         }
//         data-s3-module
//         style={{ backgroundColor: cta.backgroundColor, color: cta.textColor }}
//       >
//         <div className="row">
//           <div className="text">
//             <h2 style={{ color: cta.titleColor }}>
//               <a href={cta.titleUrl || "/contact/"}>{cta.title}</a>
//             </h2>
//             {cta.button && (
//               <a
//                 href={cta.button.url}
//                 className={cta.button.className || "btn white"}
//               >
//                 {cta.button.label}
//               </a>
//             )}
//           </div>
//           <div className="media"></div>
//         </div>
//       </div>
//     );
//   };

//   const renderColumnModules = () => {
//     if (!pageData.columnModules || pageData.columnModules.length === 0)
//       return null;

//     return pageData.columnModules.map((module, index) => {
//       if (!module.enabled) return null;

//       const mediaImg =
//         module.hasMedia && module.mediaImage
//           ? getResponsiveImageUrls(module.mediaImage)
//           : null;
//       const TitleTag = (module.titleTag || "h2") as keyof JSX.IntrinsicElements;

//       return (
//         <div
//           key={index}
//           className={module.className || "mod_column viewport container"}
//           data-s3-module
//           style={{
//             backgroundColor: module.backgroundColor,
//             color: module.textColor,
//           }}
//         >
//           <div className={module.rowClassName || "row"} data-api-key="content">
//             <div className="item">
//               {module.title && (
//                 <TitleTag style={{ color: module.titleColor }}>
//                   {module.title}
//                 </TitleTag>
//               )}
//               {module.content && (
//                 <div
//                   style={{ color: module.contentColor }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(module.content),
//                   }}
//                 />
//               )}
//               {module.listItems && module.listItems.length > 0 && (
//                 <ul className={module.listColumns ? "columns" : ""}>
//                   {module.listItems.map((item, idx) => (
//                     <li key={idx} style={{ color: item.textColor }}>
//                       {item.text}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             {mediaImg && (
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${mediaImg.smallMobile}?auto=format,compress&w=420, ${mediaImg.smallMobile}?auto=format,compress&w=630 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${mediaImg.mobile}?auto=format,compress&w=800, ${mediaImg.mobile}?auto=format,compress&w=1200 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${mediaImg.desktop}?auto=format,compress&w=${mediaImg.width || 904}`}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={`${mediaImg.desktop}?auto=format,compress&w=${mediaImg.width || 904}`}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width={mediaImg.width || 904}
//                   height={mediaImg.height || 1062}
//                   alt={mediaImg.altText || ""}
//                   draggable="false"
//                 />
//               </picture>
//             )}
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <main id="main">
//       {renderHeroModule()}
//       {renderIntroModule()}
//       {renderDoubleBannerModules()}
//       {renderCtaGeneralModule()}
//       {renderColumnModules()}
//     </main>
//   );
// };

// export default SkincareServices;

"use client";

import React, { useEffect } from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchSkincareServicesPageComponent";

interface SkincareServicesData {
  heroModule: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    backgroundTexture?: any;
    breadcrumbs?: Array<{ label: string; url: string; ariaLabel?: string }>;
    breadcrumbLinkColor?: string;
    breadcrumbHoverColor?: string;
    title: string;
    titleColor?: string;
    description?: any;
    descriptionColor?: string;
    ctaButton?: {
      enabled: boolean;
      label: string;
      url: string;
      className?: string;
    };
    mediaImage?: any;
  };
  introModule: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    logo?: any;
    logoAltText?: string;
    title: string;
    titleColor?: string;
    content?: any;
    contentColor?: string;
  };
  doubleBannerModules?: Array<{
    enabled: boolean;
    className?: string;
    rowClassName?: string;
    backgroundColor?: string;
    leftBanner: {
      title: string;
      titleColor?: string;
      content?: any;
      contentColor?: string;
      image?: any;
    };
    rightBanner: {
      title: string;
      titleColor?: string;
      content?: any;
      contentColor?: string;
      image?: any;
    };
  }>;
  ctaGeneralModule: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    title: string;
    titleUrl?: string;
    titleColor?: string;
    button?: {
      label: string;
      url: string;
      className?: string;
    };
  };
  columnModules?: Array<{
    enabled: boolean;
    className?: string;
    rowClassName?: string;
    backgroundColor?: string;
    textColor?: string;
    hasMedia: boolean;
    mediaPosition?: string;
    title?: string;
    titleTag?: string;
    titleColor?: string;
    content?: any;
    contentColor?: string;
    listItems?: Array<{ text: string; textColor?: string }>;
    listColumns?: boolean;
    mediaImage?: any;
  }>;
  sectionOrder?: Array<{
    sectionType: string;
    enabled: boolean;
    customId?: string;
    customClass?: string;
  }>;
  globalStyling?: any;
}

interface SkincareServicesProps {
  data: SkincareServicesData | null;
}

const SkincareServices: React.FC<SkincareServicesProps> = ({
  data: pageData,
}) => {
  useEffect(() => {
    if (pageData?.globalStyling?.customCss) {
      const style = document.createElement("style");
      style.innerHTML = pageData.globalStyling.customCss;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [pageData?.globalStyling?.customCss]);

  if (!pageData) return <div>No data available</div>;

  const renderHeroModule = () => {
    if (!pageData.heroModule?.enabled) return null;

    const hero = pageData.heroModule;
    const bgTexture = hero.backgroundTexture
      ? getResponsiveImageUrls(hero.backgroundTexture)
      : null;
    const mediaImg = hero.mediaImage
      ? getResponsiveImageUrls(hero.mediaImage)
      : null;

    return (
      <div
        className={hero.className || "mod_hero banner mobile-stack"}
        data-s3-module
      >
        <div className="wrapper">
          {bgTexture && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bgTexture.smallMobile}?auto=format,compress&w=420, ${bgTexture.smallMobile}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bgTexture.mobile}?auto=format,compress&w=800, ${bgTexture.mobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bgTexture.tablet}?auto=format,compress&w=1400, ${bgTexture.tablet}?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bgTexture.desktop}?auto=format,compress&w=1994`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${bgTexture.desktop}?auto=format,compress&w=1994`}
                loading="lazy"
                data-lazyload="img"
                width="1994"
                height="1206"
                alt={bgTexture.altText || "Background Texture"}
                draggable="false"
              />
            </picture>
          )}
          <div className="row">
            <div className="inner">
              {hero.breadcrumbs && hero.breadcrumbs.length > 0 && (
                <ul className="partial_breadcrumb" data-s3-partial>
                  {hero.breadcrumbs.map((crumb, index) => (
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
              )}
              <h1 style={{ color: hero.titleColor }}>{hero.title}</h1>
              {hero.description && (
                <div
                  className="text"
                  style={{ color: hero.descriptionColor }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(hero.description),
                  }}
                />
              )}
              {hero.ctaButton?.enabled && (
                <p>
                  <a
                    className={hero.ctaButton.className || "btn white"}
                    href={hero.ctaButton.url}
                    role="button"
                  >
                    {hero.ctaButton.label}
                  </a>
                </p>
              )}
            </div>
          </div>
          {mediaImg && (
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={`${mediaImg.smallMobile}?auto=format,compress&w=420, ${mediaImg.smallMobile}?auto=format,compress&w=630 2x`}
                  data-lazyload-srcset={`${mediaImg.smallMobile}?auto=format,compress&w=420, ${mediaImg.smallMobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${mediaImg.mobile}?auto=format,compress&w=800, ${mediaImg.mobile}?auto=format,compress&w=1200 2x`}
                  data-lazyload-srcset={`${mediaImg.mobile}?auto=format,compress&w=800, ${mediaImg.mobile}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${mediaImg.tablet}?auto=format,compress&w=1400, ${mediaImg.tablet}?auto=format,compress&w=2100 2x`}
                  data-lazyload-srcset={`${mediaImg.tablet}?auto=format,compress&w=1400, ${mediaImg.tablet}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={`${mediaImg.desktop}?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${mediaImg.desktop}?auto=format,compress&w=1920`}
                />
                <img
                  src={`${mediaImg.desktop}?auto=format,compress&w=1920`}
                  width={mediaImg.width || 1920}
                  height={mediaImg.height || 1206}
                  alt={mediaImg.altText || "Woman receiving facial treatment"}
                  draggable="false"
                />
              </picture>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderIntroModule = () => {
    if (!pageData.introModule?.enabled) return null;

    const intro = pageData.introModule;
    const logo = intro.logo ? getResponsiveImageUrls(intro.logo) : null;

    return (
      <div
        className={
          intro.className ||
          "mod_intro container viewport option-1 wide wow fadeInUp"
        }
        data-s3-module
        style={{
          backgroundColor: intro.backgroundColor,
          color: intro.textColor,
        }}
      >
        <div className="row">
          {logo && (
            <picture className="logo">
              <img
                src={logo.desktop}
                width={58}
                height={64}
                loading="lazy"
                alt={intro.logoAltText || "Goldfingers aesthetic logo"}
                draggable="false"
                data-api-key="logo"
              />
            </picture>
          )}
          <div className="inner" data-api-key="content">
            <h2
              style={{ color: intro.titleColor }}
              dangerouslySetInnerHTML={{ __html: intro.title }}
            />
            {intro.content && (
              <div
                style={{ color: intro.contentColor }}
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(intro.content),
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderDoubleBannerModules = () => {
    if (
      !pageData.doubleBannerModules ||
      pageData.doubleBannerModules.length === 0
    )
      return null;

    return pageData.doubleBannerModules.map((module, index) => {
      if (!module.enabled) return null;

      const leftImg = module.leftBanner.image
        ? getResponsiveImageUrls(module.leftBanner.image)
        : null;
      const rightImg = module.rightBanner.image
        ? getResponsiveImageUrls(module.rightBanner.image)
        : null;

      return (
        <div
          key={index}
          className={
            module.className || "mod_double_banner container fadeInLeft"
          }
          data-wow-duration="2s"
          data-s3-module
          style={{ backgroundColor: module.backgroundColor }}
        >
          <div className={module.rowClassName || "row mb-40"}>
            <div className="banner banner-left">
              <div className="title">
                <h2 style={{ color: module.leftBanner.titleColor }}>
                  {module.leftBanner.title}
                </h2>
              </div>
              {module.leftBanner.content && (
                <div
                  className="content"
                  style={{ color: module.leftBanner.contentColor }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(module.leftBanner.content),
                  }}
                />
              )}
              {leftImg && (
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${leftImg.smallMobile}?auto=format,compress&w=420, ${leftImg.smallMobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${leftImg.mobile}?auto=format,compress&w=800, ${leftImg.mobile}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${leftImg.tablet}?auto=format,compress&w=1400, ${leftImg.tablet}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${leftImg.desktop}?auto=format,compress&w=1832`}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={`${leftImg.desktop}?auto=format,compress&w=1832`}
                    loading="lazy"
                    data-lazyload="img"
                    width={leftImg.width || 1832}
                    height={leftImg.height || 1824}
                    alt={leftImg.altText || ""}
                    draggable="false"
                  />
                </picture>
              )}
            </div>
            <div className="banner banner-right">
              <div className="title">
                <h2 style={{ color: module.rightBanner.titleColor }}>
                  {module.rightBanner.title}
                </h2>
              </div>
              {module.rightBanner.content && (
                <div
                  className="content"
                  style={{ color: module.rightBanner.contentColor }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(module.rightBanner.content),
                  }}
                />
              )}
              {rightImg && (
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${rightImg.smallMobile}?auto=format,compress&w=420, ${rightImg.smallMobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${rightImg.mobile}?auto=format,compress&w=800, ${rightImg.mobile}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${rightImg.tablet}?auto=format,compress&w=1400, ${rightImg.tablet}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${rightImg.desktop}?auto=format,compress&w=1832`}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={`${rightImg.desktop}?auto=format,compress&w=1832`}
                    loading="lazy"
                    data-lazyload="img"
                    width={rightImg.width || 1832}
                    height={rightImg.height || 1824}
                    alt={rightImg.altText || ""}
                    draggable="false"
                  />
                </picture>
              )}
            </div>
          </div>
        </div>
      );
    });
  };

  const renderCtaGeneralModule = () => {
    if (!pageData.ctaGeneralModule?.enabled) return null;

    const cta = pageData.ctaGeneralModule;

    return (
      <div
        className={
          cta.className ||
          "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
        }
        data-s3-module
        style={{ backgroundColor: cta.backgroundColor, color: cta.textColor }}
      >
        <div className="row">
          <div className="text">
            <h2 style={{ color: cta.titleColor }}>
              <a href={cta.titleUrl || "/contact/"}>{cta.title}</a>
            </h2>
            {cta.button && (
              <a
                href={cta.button.url}
                className={cta.button.className || "btn white"}
              >
                {cta.button.label}
              </a>
            )}
          </div>
          <div className="media"></div>
        </div>
      </div>
    );
  };

  const renderColumnModules = () => {
    if (!pageData.columnModules || pageData.columnModules.length === 0)
      return null;

    return pageData.columnModules.map((module, index) => {
      if (!module.enabled) return null;

      const mediaImg =
        module.hasMedia && module.mediaImage
          ? getResponsiveImageUrls(module.mediaImage)
          : null;
      const TitleTag = (module.titleTag || "h2") as keyof JSX.IntrinsicElements;

      return (
        <div
          key={index}
          className={module.className || "mod_column viewport container"}
          data-s3-module
          style={{
            backgroundColor: module.backgroundColor,
            color: module.textColor,
          }}
        >
          <div className={module.rowClassName || "row"} data-api-key="content">
            <div className="item">
              {module.title && (
                <TitleTag style={{ color: module.titleColor }}>
                  {module.title}
                </TitleTag>
              )}
              {module.content && (
                <div
                  style={{ color: module.contentColor }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(module.content),
                  }}
                />
              )}
              {module.listItems && module.listItems.length > 0 && (
                <ul className={module.listColumns ? "columns" : ""}>
                  {module.listItems.map((item, idx) => (
                    <li key={idx} style={{ color: item.textColor }}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {mediaImg && (
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${mediaImg.smallMobile}?auto=format,compress&w=420, ${mediaImg.smallMobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${mediaImg.mobile}?auto=format,compress&w=800, ${mediaImg.mobile}?auto=format,compress&w=1200 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${mediaImg.desktop}?auto=format,compress&w=${mediaImg.width || 904}`}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={`${mediaImg.desktop}?auto=format,compress&w=${mediaImg.width || 904}`}
                  loading="lazy"
                  data-lazyload="img"
                  width={mediaImg.width || 904}
                  height={mediaImg.height || 1062}
                  alt={mediaImg.altText || ""}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <main id="main">
      {renderHeroModule()}
      {renderIntroModule()}
      {renderDoubleBannerModules()}
      {renderCtaGeneralModule()}
      {renderColumnModules()}
    </main>
  );
};

export default SkincareServices;