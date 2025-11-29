// // import React from "react";

// // const MountDoraContent = () => {
// //   return (
// //     <main id="main">
// //       {/* Page Layout */}
// //       {/* Hero Module */}
// //       <div className="mod_hero banner mobile-stack" data-s3-module="">
// //         <div className="wrapper">
// //           <picture className="background">
// //             {" "}
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=630 2x"
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=630 2x"
// //             />{" "}
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1200 2x"
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1200 2x"
// //             />{" "}
// //             <source
// //               media="(max-width:1400px)"
// //               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=2100 2x"
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=2100 2x"
// //             />{" "}
// //             <source
// //               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
// //             />{" "}
// //             <img
// //               src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="1994"
// //               height="1206"
// //               alt="Background Texture"
// //               draggable="false"
// //               data-lazyload-loaded="true"
// //             />
// //           </picture>
// //           <div className="row">
// //             <div className="inner">
// //               <ul className="partial_breadcrumb" data-s3-partial="">
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
// //                     href="/mount-dora/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Mount Dora
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>
// //                 <span className="small">
// //                   Goldfingers Aesthetics &amp; Plastic Surgery in
// //                 </span>{" "}
// //                 Mount Dora
// //               </h1>
// //               <div className="text">
// //                 <p>
// //                   Step into a world of beauty and transformation at Goldfingers
// //                   Aesthetics &amp; Plastic Surgery in Mount Dora. Our esteemed
// //                   medical aesthetic services encompass an array of innovative
// //                   treatments, ranging from BOTOX® &amp; Dysport® to Restylane®
// //                   and Juvéderm®. Embark on a journey of rejuvenation and
// //                   self-discovery with us today.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="media">
// //             <picture className="background">
// //               {" "}
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=630 2x"
// //               />{" "}
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=1200 2x"
// //               />{" "}
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=2100 2x"
// //               />{" "}
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=1920"
// //               />{" "}
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694093632-mount-dora-banner.jpg?auto=format,compress&amp;w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="empty pier at sunset"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Column Module */}
// //       <div className="mod_column viewport container" data-s3-module="">
// //         <div className="row mb-30" data-api-key="content">
// //           <picture className="logo">
// //             {" "}
// //             <img
// //               src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
// //               width="58"
// //               height="64"
// //               loading="lazy"
// //               alt="Goldfingers aesthetic logo"
// //               draggable="false"
// //               data-api-key="logo"
// //             />
// //           </picture>
// //           <div className="item">
// //             <div className="mw-80 text-center">
// //               <h2>Elevating Beauty with Innovation</h2>
// //               <p>
// //                 At Goldfingers Aesthetics in Mount Dora, we are committed to
// //                 achieving superior outcomes in every treatment. Our journey is
// //                 marked by remarkable achievements and an unwavering commitment
// //                 to employing advanced techniques in every procedure. Our mission
// //                 is to deliver an exceptional experience that reflects your
// //                 vision of beauty.
// //               </p>
// //               <p>
// //                 <a href="/mount-dora/medical-spa/" className="btn">
// //                   Explore Our Medical Spa Services
// //                 </a>
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Box Grid Module */}
// //       <div
// //         className="mod_box_grid viewport    container option-1 single  bkg-image"
// //         data-s3-module=""
// //       >
// //         <div className="row">
// //           <div className="boxes">
// //             <div
// //               className="box wow fadeInUp"
// //               style={{ visibility: "hidden", animationName: "none" }}
// //             >
// //               <h2>Decades of aesthetic excellence</h2>
// //               <p>
// //                 With a legacy spanning over two decades, Goldfingers Aesthetics
// //                 stands as a beacon of expertise in the aesthetics industry. Our
// //                 rich history ensures that your treatments are not only effective
// //                 but also safe and satisfying, ensuring the outcomes you desire.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           {" "}
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=1000, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=1500 2x"
// //           />{" "}
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=1200 2x"
// //           />{" "}
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=2100 2x"
// //           />{" "}
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=2200"
// //           />{" "}
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&amp;w=2200"
// //             loading="lazy"
// //             data-lazyload="img"
// //             width="2200"
// //             height="1726"
// //             alt="Background media"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>
// //       {/* Column Module */}
// //       <div
// //         className="mod_column viewport container has-media"
// //         data-s3-module=""
// //       >
// //         <div className="row mt-30 pb-0 media-left" data-api-key="content">
// //           <div className="item">
// //             <h2>Among the Nation's Top 1% for BOTOX and Juvéderm</h2>
// //             <p>
// //               Goldfingers Aesthetics &amp; Plastic Surgery proudly ranks among
// //               the top 1% of providers nationwide for BOTOX and Juvéderm
// //               treatments. This distinguished recognition underscores our
// //               unwavering commitment to excellence and our dedication to
// //               delivering remarkable outcomes to our esteemed patients.
// //             </p>
// //           </div>
// //           <picture className="media">
// //             {" "}
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025415-accent-6.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694025415-accent-6.jpg?auto=format,compress&amp;w=630 2x"
// //             />{" "}
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025415-accent-6.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694025415-accent-6.jpg?auto=format,compress&amp;w=1200 2x"
// //             />{" "}
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025415-accent-6.jpg?auto=format,compress&amp;w=904"
// //             />{" "}
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1694025415-accent-6.jpg?auto=format,compress&amp;w=904"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="904"
// //               height="1062"
// //               alt="skyline"
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       </div>
// //       {/* Two Column Module */}
// //       <div className="mod_columns_two viewport container" data-s3-module="">
// //         <div className="row ">
// //           <div className="content ">
// //             <div
// //               className="item wow fadeInLeft"
// //               data-api-key="content_left"
// //               style={{ visibility: "hidden", animationName: "none" }}
// //             >
// //               <h2>
// //                 A haven of superior{" "}
// //                 <span className="block-desktop">care in Mount Dora</span>
// //               </h2>
// //             </div>
// //             <div
// //               className="item wow fadeInRight"
// //               data-api-key="content_right"
// //               style={{ visibility: "hidden", animationName: "none" }}
// //             >
// //               <p>
// //                 Our journey has led Goldfingers Aesthetics to become Florida's
// //                 premier aesthetics center. With 24 locations spanning the region
// //                 and an ever-growing network of aesthetic centers, our commitment
// //                 to providing accessible, top-tier care is unwavering.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* CTA General Module */}
// //       <div
// //         className="mod_cta_general viewport container cta  thin wow fadeInRight mt-0 mb-0 background-2"
// //         data-s3-module=""
// //         style={{ visibility: "hidden", animationName: "none" }}
// //       >
// //         <div className="row">
// //           <div className="text">
// //             <h2>
// //               <a href="/contact/?location=165421373">Schedule a Consultation</a>
// //             </h2>
// //             <a href="/contact/?location=165421373" className="btn white">
// //               Book an Appointment
// //             </a>
// //           </div>
// //           <div className="media" />
// //         </div>
// //       </div>
// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
// //         data-s3-module=""
// //         style={{ visibility: "hidden", animationName: "none" }}
// //       >
// //         <div className="row half-image-row">
// //           <div className="media">
// //             <picture className="background">
// //               {" "}
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=630 2x"
// //               />{" "}
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1200 2x"
// //               />{" "}
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=2100 2x"
// //               />{" "}
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1832"
// //               />{" "}
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="daisies and palm trees at sunset"
// //                 draggable="false"
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy padded">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>
// //                   Meet Amy Kang, MSN, APRN, FNP-C, at Goldfingers Aesthetics in
// //                   Mt. Dora
// //                 </h2>
// //                 <p>
// //                   Amy is a board-certified Family Nurse Practitioner with a
// //                   Master’s Degree in Nursing from AdventHealth University. She
// //                   brings over 13 years of clinical experience as a registered
// //                   nurse, having worked in high-acuity medical-surgical and
// //                   cardiac units across California and at the Cancer Institute at
// //                   Orlando Health.
// //                 </p>
// //                 <p>
// //                   As a nurse practitioner, she has developed a strong foundation
// //                   in wound care and dermatology, which she now combines with her
// //                   passion for aesthetics to help clients look and feel their
// //                   best. Known for her compassionate approach and attention to
// //                   detail, Amy is dedicated to providing personalized, safe, and
// //                   results-driven care.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Divider Module */}
// //       <div className="mod_divider container" data-s3-module="">
// //         <div className="row">
// //           <div className="media">
// //             <picture className="">
// //               {" "}
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1693320285-logo-module-navy.svg"
// //                 width="55"
// //                 height="61"
// //                 loading="lazy"
// //                 alt="Logo media"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
// //         data-s3-module=""
// //         style={{ visibility: "hidden", animationName: "none" }}
// //       >
// //         <div className="row half-image-row flipped mt-0 mb-0">
// //           <div className="media">
// //             <picture className="background">
// //               {" "}
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=630 2x"
// //               />{" "}
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=1200 2x"
// //               />{" "}
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=2100 2x"
// //               />{" "}
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=1832"
// //               />{" "}
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=1832"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="1832"
// //                 height="1824"
// //                 alt="lake at sunset"
// //                 draggable="false"
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy padded">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>Patient-focused care</h2>
// //                 <p>
// //                   Experience a journey tailored to enhance your appearance at
// //                   Goldfingers Aesthetics &amp; Plastic Surgery in Mount Dora.
// //                   Our approach is characterized by empathy, compassion, and
// //                   exceptional skills, ensuring your experience is both
// //                   empowering and positive. With decades of expertise, we design
// //                   each procedure to cater to your individual needs, ensuring
// //                   remarkable and natural-looking results.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Column Module */}
// //       <div className="mod_column viewport container" data-s3-module="">
// //         <div className="row mt-30 mb-30" data-api-key="content">
// //           <div className="item">
// //             <h2>Our aesthetic services in Mount Dora</h2>
// //             <p>
// //               Discover a comprehensive array of transformative treatments at
// //               Goldfingers Aesthetics &amp; Plastic Surgery in Mount Dora:
// //             </p>
// //             <ul className="columns">
// //               <li>
// //                 <a href="/mount-dora/medical-spa/botox/">
// //                   <strong>BOTOX</strong>
// //                 </a>
// //                 : Turn back time with age-defying injections that effortlessly
// //                 erase lines and wrinkles, unveiling a revitalized and youthful
// //                 visage.
// //               </li>
// //               <li>
// //                 <a href="/mount-dora/medical-spa/facial-fillers/">
// //                   <strong>Dermal Fillers</strong>
// //                 </a>
// //                 : Restore and enhance your innate beauty with dermal fillers,
// //                 harmonizing features, softening lines, and refining facial
// //                 contours.
// //               </li>
// //               <li>
// //                 <a href="/medical-spa/hands/">
// //                   <strong>Hand Rejuvenation</strong>
// //                 </a>
// //                 : Reclaim the youthful vibrancy of your hands with our
// //                 rejuvenation treatments, addressing volume loss and improving
// //                 skin texture.
// //               </li>
// //               <li>
// //                 <a href="/medical-spa/face-lift/">
// //                   <strong>Non-Surgical Facelift</strong>
// //                 </a>
// //                 : Elevate, tighten, and refresh your appearance without
// //                 resorting to surgery through our transformative non-surgical
// //                 facelift, rejuvenating your features.
// //               </li>
// //               <li>
// //                 <a href="/medical-spa/mens-services/">
// //                   <strong>Men's Tailored Services</strong>
// //                 </a>
// //                 : Discover customized treatments catered to the unique aesthetic
// //                 needs of men, addressing wrinkles, volume loss, and masculine
// //                 contouring.
// //               </li>
// //               <li>
// //                 <a href="/medical-spa/permanent-makeup/">
// //                   <strong>Permanent Makeup</strong>
// //                 </a>
// //                 : Embrace effortless elegance with our expertly applied
// //                 permanent makeup, accentuating your features with a touch of
// //                 natural-looking enhancement.
// //               </li>
// //               <li>
// //                 <a href="/medical-spa/micro-channeling/">
// //                   <strong>Micro-Channeling</strong>
// //                 </a>
// //                 : Stimulate collagen production and unveil radiant skin with our
// //                 micro-channeling treatment, elevating skin texture and tone.
// //               </li>
// //               <li>
// //                 <a href="/mount-dora/medical-spa/weight-loss/">
// //                   <strong>Semaglutide Injections</strong>
// //                 </a>
// //                 : Explore the innovative path to weight management with
// //                 semaglutide injections, a groundbreaking approach to overall
// //                 wellness.
// //               </li>
// //               <li>
// //                 <a href="/medical-spa/skincare-services/">
// //                   <strong>Advanced Skincare</strong>
// //                 </a>
// //                 : Elevate your skincare routine with our range of advanced
// //                 skincare products, designed to maintain and amplify the outcomes
// //                 of your treatments.
// //               </li>
// //               <li>
// //                 <a href="/mount-dora/medical-spa/spa-services/">
// //                   <strong>Spa Services</strong>
// //                 </a>
// //                 : Discover our rejuvenating spa services, including acne
// //                 facials, dermaplaning, microneedling with ProCell serum,
// //                 medical-grade chemical peels, and expertly applied permanent
// //                 makeup.
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark  hide-divider viewport background-2"
// //         data-s3-module=""
// //       >
// //         <div
// //           className="row wow fadeInUp"
// //           style={{ visibility: "hidden", animationName: "none" }}
// //         >
// //           <div className="content" data-api-key="top_content">
// //             <h2>Plastic surgery – our approach</h2>
// //             <p>
// //               Goldfingers Aesthetics &amp; Plastic Surgery is a gateway to
// //               transformative plastic surgery treatments tailored to your unique
// //               aesthetic aspirations. Our expert team specializes in modern
// //               plastic surgery techniques, bringing over two decades of
// //               experience to each procedure. Our AAAAASF-certified surgical
// //               center in Lake Mary provides a safe and state-of-the-art
// //               environment for your transformations under the care of one of the
// //               most talented board-certified plastic surgeons in the region, Dr.
// //               McClure.
// //             </p>
// //             <ul>
// //               <li>
// //                 <a href="/plastic-surgery/breast-augmentation/">
// //                   <strong>Breast Augmentation</strong>
// //                 </a>
// //                 : Enhance your silhouette with precision-placed implants,
// //                 achieving your desired size and shape with remarkable artistry.
// //               </li>
// //               <li>
// //                 <a href="/plastic-surgery/breast-lift/">
// //                   <strong>Breast Lift</strong>
// //                 </a>
// //                 : Reclaim youthful contours and confidence through a breast
// //                 lift, lifting and reshaping sagging breasts for a rejuvenated
// //                 appearance.
// //               </li>
// //               <li>
// //                 <a href="/plastic-surgery/breast-reduction/">
// //                   <strong>Breast Reduction</strong>
// //                 </a>
// //                 : Find relief from discomfort and achieve balance with breast
// //                 reduction, reducing excess tissue for improved aesthetics and
// //                 comfort.
// //               </li>
// //               <li>
// //                 <a href="/plastic-surgery/breast-revision/">
// //                   <strong>Breast Revision</strong>
// //                 </a>
// //                 : Correct past procedures with breast revision, addressing
// //                 concerns and achieving your desired outcomes.
// //               </li>
// //               <li>
// //                 <a href="/plastic-surgery/mommy-makeover/">
// //                   <strong>Mommy Makeover</strong>
// //                 </a>
// //                 : Experience a comprehensive transformation with a mommy
// //                 makeover, combining procedures to restore your confidence.
// //               </li>
// //               <li>
// //                 <a href="/plastic-surgery/liposuction/">
// //                   <strong>Liposuction</strong>
// //                 </a>
// //                 : Sculpt your body by removing stubborn fat deposits with
// //                 liposuction, achieving smoother and more defined contours.
// //               </li>
// //               <li>
// //                 <strong>8-Point Facelift:</strong> Rejuvenate your face with the
// //                 transformative 8-point facelift, addressing multiple areas for a
// //                 youthful appearance.
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           {" "}
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=1200 2x"
// //           />{" "}
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=800&amp;q=85&amp;sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=1200&amp;q=85&amp;sharp=5 2x"
// //           />{" "}
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=1400&amp;q=85&amp;sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=2100&amp;q=85&amp;sharp=5 2x"
// //           />{" "}
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=2200&amp;q=85&amp;sharp=5"
// //           />{" "}
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&amp;w=2200&amp;q=85&amp;sharp=5"
// //             loading="lazy"
// //             data-lazyload="img"
// //             width="2200"
// //             height="802"
// //             alt="Banner media"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>
// //       {/* Column Module */}
// //       <div className="mod_column viewport container" data-s3-module="">
// //         <div className="row mt-30" data-api-key="content">
// //           <div className="item">
// //             <div className="columns-two vertical-align">
// //               <div>
// //                 <h2>
// //                   Discover your true{" "}
// //                   <span className="block-desktop">beauty with our help.</span>
// //                 </h2>
// //               </div>
// //               <div>
// //                 <p>
// //                   At Goldfingers Aesthetics &amp; Plastic Surgery in Mount Dora,
// //                   we redefine aesthetics through our commitment to excellence
// //                   and passion for beauty. Your journey with us unfolds in a
// //                   realm of medical spa treatments and plastic surgery that
// //                   empower you to discover your unique allure. Join us in
// //                   unveiling the transformative possibilities that await you.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default MountDoraContent;





// "use client";

// import React, { useEffect, useState } from "react";
// // import { MountDoraPageData } from "../types/payload";
// import {
//   getResponsiveImageUrls,
//   lexicalToHtml,
//   getImageUrl,
// } from "@/lib/api/locations/fetchMountDoraPageData";

// export interface PayloadImage {
//   cloudinary_url?: string;
//   url?: string;
//   alt?: string;
// }

// export interface ResponsiveImageGroup {
//   mobile?: PayloadImage | string;
//   tablet?: PayloadImage | string;
//   desktop?: PayloadImage | string;
//   large?: PayloadImage | string;
//   alt?: string;
// }

// export interface LexicalContent {
//   root: any;
// }

// export interface MountDoraPageData {
//   componentName?: string;
//   heroSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     backgroundImage?: ResponsiveImageGroup;
//     breadcrumbs?: Array<{
//       label: string;
//       url: string;
//       ariaLabel?: string;
//     }>;
//     title?: LexicalContent;
//     titleColor?: string;
//     description?: LexicalContent;
//     descriptionColor?: string;
//     mediaImage?: ResponsiveImageGroup;
//   };
//   columnSection1?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     marginBottom?: string;
//     logo?: PayloadImage | string;
//     logoAlt?: string;
//     heading?: LexicalContent;
//     headingColor?: string;
//     content?: LexicalContent;
//     ctaButton?: {
//       show?: boolean;
//       text?: string;
//       url?: string;
//       className?: string;
//       backgroundColor?: string;
//       textColor?: string;
//     };
//   };
//   boxGridSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     className?: string;
//     boxes?: Array<{
//       heading?: string;
//       headingColor?: string;
//       content?: LexicalContent;
//       textColor?: string;
//       animationClass?: string;
//     }>;
//     backgroundImage?: ResponsiveImageGroup;
//   };
//   columnMediaSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     marginTop?: string;
//     paddingBottom?: string;
//     mediaPosition?: string;
//     heading?: string;
//     headingColor?: string;
//     content?: LexicalContent;
//     mediaImage?: ResponsiveImageGroup;
//   };
//   twoColumnSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     columns?: Array<{
//       content?: LexicalContent;
//       animationClass?: string;
//       textColor?: string;
//     }>;
//   };
//   ctaGeneralSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     className?: string;
//     marginTop?: string;
//     marginBottom?: string;
//     animationClass?: string;
//     heading?: string;
//     headingLink?: string;
//     headingColor?: string;
//     ctaButton?: {
//       show?: boolean;
//       text?: string;
//       url?: string;
//       className?: string;
//       backgroundColor?: string;
//       textColor?: string;
//     };
//   };
//   halfImageSection1?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     flipped?: boolean;
//     animationClass?: string;
//     heading?: LexicalContent;
//     headingColor?: string;
//     content?: LexicalContent;
//     image?: ResponsiveImageGroup;
//   };
//   dividerSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     logo?: PayloadImage | string;
//     logoAlt?: string;
//   };
//   halfImageSection2?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     flipped?: boolean;
//     marginTop?: string;
//     marginBottom?: string;
//     animationClass?: string;
//     heading?: LexicalContent;
//     headingColor?: string;
//     content?: LexicalContent;
//     image?: ResponsiveImageGroup;
//   };
//   columnSection2?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     marginTop?: string;
//     marginBottom?: string;
//     heading?: string;
//     headingColor?: string;
//     introContent?: LexicalContent;
//     servicesList?: Array<{
//       serviceName?: string;
//       serviceNameBold?: boolean;
//       serviceUrl?: string;
//       description?: string;
//       textColor?: string;
//     }>;
//     columnsLayout?: boolean;
//   };
//   bannerSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     isDark?: boolean;
//     hideDivider?: boolean;
//     animationClass?: string;
//     backgroundImage?: ResponsiveImageGroup;
//     heading?: string;
//     headingColor?: string;
//     introContent?: LexicalContent;
//     servicesList?: Array<{
//       serviceName?: string;
//       serviceNameBold?: boolean;
//       serviceUrl?: string;
//       description?: string;
//       textColor?: string;
//     }>;
//   };
//   finalColumnSection?: {
//     show?: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     marginTop?: string;
//     layout?: string;
//     columns?: Array<{
//       content?: LexicalContent;
//       textColor?: string;
//     }>;
//   };
//   sectionOrder?: Array<{
//     section: string;
//   }>;
// }


// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://backend-orpin-six-56.vercel.app/api";

// const MountDoraContent: React.FC = () => {
//   const [data, setData] = useState<MountDoraPageData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `${PAYLOAD_API_URL}/mount-dora-page-component?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`
//         );
//         if (!res.ok) {
//           throw new Error(`Failed to fetch data: ${res.statusText}`);
//         }
//         const json = await res.json();
//         const activeComponent =
//           json.docs?.find((component: any) => component.isActive) || null;
//         setData(activeComponent);
//       } catch (error) {
//         console.error("Error fetching Mount Dora page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//         }}
//       >
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (!data) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//         }}
//       >
//         <p>No data available</p>
//       </div>
//     );
//   }

//   const heroBgImage = getResponsiveImageUrls(data.heroSection?.backgroundImage);
//   const heroMediaImage = getResponsiveImageUrls(data.heroSection?.mediaImage);
//   const columnSection1Logo = getImageUrl(data.columnSection1?.logo);
//   const boxGridBgImage = getResponsiveImageUrls(
//     data.boxGridSection?.backgroundImage
//   );
//   const columnMediaImage = getResponsiveImageUrls(
//     data.columnMediaSection?.mediaImage
//   );
//   const halfImage1 = getResponsiveImageUrls(data.halfImageSection1?.image);
//   const dividerLogo = getImageUrl(data.dividerSection?.logo);
//   const halfImage2 = getResponsiveImageUrls(data.halfImageSection2?.image);
//   const bannerBgImage = getResponsiveImageUrls(
//     data.bannerSection?.backgroundImage
//   );

//   return (
//     <main id="main">
//       {/* Hero Module */}
//       {data.heroSection?.show !== false && (
//         <div className="mod_hero banner mobile-stack" data-s3-module="">
//           <div className="wrapper">
//             <picture className="background">
//               {heroBgImage.mobile && (
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={`${heroBgImage.mobile}, ${heroBgImage.mobile} 2x`}
//                 />
//               )}
//               {heroBgImage.tablet && (
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${heroBgImage.tablet}, ${heroBgImage.tablet} 2x`}
//                 />
//               )}
//               {heroBgImage.desktop && (
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={`${heroBgImage.desktop}, ${heroBgImage.desktop} 2x`}
//                 />
//               )}
//               {heroBgImage.large && <source srcSet={heroBgImage.large} />}
//               <img
//                 src={
//                   heroBgImage.large || heroBgImage.desktop || "/placeholder.jpg"
//                 }
//                 loading="lazy"
//                 width="1994"
//                 height="1206"
//                 alt={heroBgImage.alt || "Background Texture"}
//                 draggable="false"
//               />
//             </picture>
//             <div className="row">
//               <div className="inner">
//                 {data.heroSection?.breadcrumbs &&
//                   data.heroSection.breadcrumbs.length > 0 && (
//                     <ul className="partial_breadcrumb" data-s3-partial="">
//                       {data.heroSection.breadcrumbs.map((crumb, index) => (
//                         <li key={index}>
//                           <a
//                             href={crumb.url}
//                             role="link"
//                             aria-label={
//                               crumb.ariaLabel ||
//                               "Breadcrumbs to help navigate the user"
//                             }
//                           >
//                             {crumb.label}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 {data.heroSection?.title && (
//                   <h1
//                     style={{ color: data.heroSection?.titleColor }}
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(data.heroSection.title),
//                     }}
//                   />
//                 )}
//                 {data.heroSection?.description && (
//                   <div
//                     className="text"
//                     style={{ color: data.heroSection?.descriptionColor }}
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(data.heroSection.description),
//                     }}
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="media">
//               <picture className="background">
//                 {heroMediaImage.mobile && (
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={`${heroMediaImage.mobile}, ${heroMediaImage.mobile} 2x`}
//                   />
//                 )}
//                 {heroMediaImage.tablet && (
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={`${heroMediaImage.tablet}, ${heroMediaImage.tablet} 2x`}
//                   />
//                 )}
//                 {heroMediaImage.desktop && (
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={`${heroMediaImage.desktop}, ${heroMediaImage.desktop} 2x`}
//                   />
//                 )}
//                 {heroMediaImage.large && (
//                   <source srcSet={heroMediaImage.large} />
//                 )}
//                 <img
//                   src={
//                     heroMediaImage.large ||
//                     heroMediaImage.desktop ||
//                     "/placeholder.jpg"
//                   }
//                   width="1920"
//                   height="1206"
//                   alt={heroMediaImage.alt || "empty pier at sunset"}
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Column Module */}
//       {data.columnSection1?.show !== false && (
//         <div className="mod_column viewport container" data-s3-module="">
//           <div
//             className={`row ${data.columnSection1?.marginBottom || "mb-30"}`}
//             data-api-key="content"
//           >
//             {columnSection1Logo && (
//               <picture className="logo">
//                 <img
//                   src={columnSection1Logo}
//                   width="58"
//                   height="64"
//                   loading="lazy"
//                   alt={
//                     data.columnSection1?.logoAlt || "Goldfingers aesthetic logo"
//                   }
//                   draggable="false"
//                   data-api-key="logo"
//                 />
//               </picture>
//             )}
//             <div className="item">
//               <div className="mw-80 text-center">
//                 {data.columnSection1?.heading && (
//                   <div
//                     style={{ color: data.columnSection1?.headingColor }}
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(data.columnSection1.heading),
//                     }}
//                   />
//                 )}
//                 {data.columnSection1?.content && (
//                   <div
//                     style={{ color: data.columnSection1?.textColor }}
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(data.columnSection1.content),
//                     }}
//                   />
//                 )}
//                 {data.columnSection1?.ctaButton?.show !== false &&
//                   data.columnSection1?.ctaButton?.url && (
//                     <p>
//                       <a
//                         href={data.columnSection1.ctaButton.url}
//                         className={
//                           data.columnSection1.ctaButton.className || "btn"
//                         }
//                         style={{
//                           backgroundColor:
//                             data.columnSection1.ctaButton.backgroundColor,
//                           color: data.columnSection1.ctaButton.textColor,
//                         }}
//                       >
//                         {data.columnSection1.ctaButton.text ||
//                           "Explore Our Medical Spa Services"}
//                       </a>
//                     </p>
//                   )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Box Grid Module */}
//       {data.boxGridSection?.show !== false && (
//         <div
//           className={`mod_box_grid viewport container ${
//             data.boxGridSection?.className || "option-1 single bkg-image"
//           }`}
//           data-s3-module=""
//         >
//           <div className="row">
//             <div className="boxes">
//               {data.boxGridSection?.boxes?.map((box, index) => (
//                 <div
//                   key={index}
//                   className={`box wow ${box.animationClass || "fadeInUp"}`}
//                   style={{ visibility: "hidden", animationName: "none" }}
//                 >
//                   {box.heading && (
//                     <h2 style={{ color: box.headingColor }}>{box.heading}</h2>
//                   )}
//                   {box.content && (
//                     <div
//                       style={{ color: box.textColor }}
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(box.content),
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           {boxGridBgImage.large && (
//             <picture className="background">
//               {boxGridBgImage.mobile && (
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={`${boxGridBgImage.mobile}, ${boxGridBgImage.mobile} 2x`}
//                 />
//               )}
//               {boxGridBgImage.tablet && (
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${boxGridBgImage.tablet}, ${boxGridBgImage.tablet} 2x`}
//                 />
//               )}
//               {boxGridBgImage.desktop && (
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={`${boxGridBgImage.desktop}, ${boxGridBgImage.desktop} 2x`}
//                 />
//               )}
//               <source srcSet={boxGridBgImage.large} />
//               <img
//                 src={boxGridBgImage.large}
//                 loading="lazy"
//                 width="2200"
//                 height="1726"
//                 alt={boxGridBgImage.alt || "Background media"}
//                 draggable="false"
//               />
//             </picture>
//           )}
//         </div>
//       )}

//       {/* Column Module with Media */}
//       {data.columnMediaSection?.show !== false && (
//         <div
//           className="mod_column viewport container has-media"
//           data-s3-module=""
//         >
//           <div
//             className={`row ${data.columnMediaSection?.marginTop || "mt-30"} ${
//               data.columnMediaSection?.paddingBottom || "pb-0"
//             } ${data.columnMediaSection?.mediaPosition || "media-left"}`}
//             data-api-key="content"
//           >
//             <div className="item">
//               {data.columnMediaSection?.heading && (
//                 <h2 style={{ color: data.columnMediaSection?.headingColor }}>
//                   {data.columnMediaSection.heading}
//                 </h2>
//               )}
//               {data.columnMediaSection?.content && (
//                 <div
//                   style={{ color: data.columnMediaSection?.textColor }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(data.columnMediaSection.content),
//                   }}
//                 />
//               )}
//             </div>
//             <picture className="media">
//               {columnMediaImage.mobile && (
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={`${columnMediaImage.mobile}, ${columnMediaImage.mobile} 2x`}
//                 />
//               )}
//               {columnMediaImage.tablet && (
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${columnMediaImage.tablet}, ${columnMediaImage.tablet} 2x`}
//                 />
//               )}
//               {columnMediaImage.desktop && (
//                 <source srcSet={columnMediaImage.desktop} />
//               )}
//               <img
//                 src={
//                   columnMediaImage.desktop ||
//                   columnMediaImage.tablet ||
//                   "/placeholder.jpg"
//                 }
//                 loading="lazy"
//                 width="904"
//                 height="1062"
//                 alt={columnMediaImage.alt || "skyline"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       )}

//       {/* Two Column Module */}
//       {data.twoColumnSection?.show !== false && (
//         <div className="mod_columns_two viewport container" data-s3-module="">
//           <div className="row">
//             <div className="content">
//               {data.twoColumnSection?.columns?.map((column, index) => (
//                 <div
//                   key={index}
//                   className={`item wow ${column.animationClass || ""}`}
//                   data-api-key={`content_${index === 0 ? "left" : "right"}`}
//                   style={{ visibility: "hidden", animationName: "none" }}
//                 >
//                   {column.content && (
//                     <div
//                       style={{ color: column.textColor }}
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(column.content),
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA General Module */}
//       {data.ctaGeneralSection?.show !== false && (
//         <div
//           className={`mod_cta_general viewport container ${
//             data.ctaGeneralSection?.className || "cta thin"
//           } wow ${data.ctaGeneralSection?.animationClass || "fadeInRight"} ${
//             data.ctaGeneralSection?.marginTop || "mt-0"
//           } ${data.ctaGeneralSection?.marginBottom || "mb-0"} ${
//             data.ctaGeneralSection?.backgroundColor || "background-2"
//           }`}
//           data-s3-module=""
//           style={{ visibility: "hidden", animationName: "none" }}
//         >
//           <div className="row">
//             <div className="text">
//               {data.ctaGeneralSection?.heading && (
//                 <h2 style={{ color: data.ctaGeneralSection?.headingColor }}>
//                   {data.ctaGeneralSection.headingLink ? (
//                     <a href={data.ctaGeneralSection.headingLink}>
//                       {data.ctaGeneralSection.heading}
//                     </a>
//                   ) : (
//                     data.ctaGeneralSection.heading
//                   )}
//                 </h2>
//               )}
//               {data.ctaGeneralSection?.ctaButton?.show !== false &&
//                 data.ctaGeneralSection?.ctaButton?.url && (
//                   <a
//                     href={data.ctaGeneralSection.ctaButton.url}
//                     className={
//                       data.ctaGeneralSection.ctaButton.className || "btn white"
//                     }
//                     style={{
//                       backgroundColor:
//                         data.ctaGeneralSection.ctaButton.backgroundColor,
//                       color: data.ctaGeneralSection.ctaButton.textColor,
//                     }}
//                   >
//                     {data.ctaGeneralSection.ctaButton.text ||
//                       "Book an Appointment"}
//                   </a>
//                 )}
//             </div>
//             <div className="media" />
//           </div>
//         </div>
//       )}

//       {/* Half Image Module 1 */}
//       {data.halfImageSection1?.show !== false && (
//         <div
//           className={`mod_half_image viewport half-image container wow ${
//             data.halfImageSection1?.animationClass || "fadeInLeft"
//           } ${data.halfImageSection1?.backgroundColor || "background-navy"}`}
//           data-s3-module=""
//           style={{ visibility: "hidden", animationName: "none" }}
//         >
//           <div
//             className={`row half-image-row ${
//               data.halfImageSection1?.flipped ? "flipped" : ""
//             }`}
//           >
//             <div className="media">
//               <picture className="background">
//                 {halfImage1.mobile && (
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={`${halfImage1.mobile}, ${halfImage1.mobile} 2x`}
//                   />
//                 )}
//                 {halfImage1.tablet && (
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={`${halfImage1.tablet}, ${halfImage1.tablet} 2x`}
//                   />
//                 )}
//                 {halfImage1.desktop && (
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={`${halfImage1.desktop}, ${halfImage1.desktop} 2x`}
//                   />
//                 )}
//                 {halfImage1.large && <source srcSet={halfImage1.large} />}
//                 <img
//                   src={
//                     halfImage1.large || halfImage1.desktop || "/placeholder.jpg"
//                   }
//                   loading="lazy"
//                   width="1832"
//                   height="1824"
//                   alt={halfImage1.alt || "provider portrait"}
//                   draggable="false"
//                   data-api-key="image"
//                 />
//               </picture>
//             </div>
//             <div className="copy padded">
//               <div className="inner">
//                 <div className="content" data-api-key="content">
//                   {data.halfImageSection1?.heading && (
//                     <div
//                       style={{ color: data.halfImageSection1?.headingColor }}
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(data.halfImageSection1.heading),
//                       }}
//                     />
//                   )}
//                   {data.halfImageSection1?.content && (
//                     <div
//                       style={{ color: data.halfImageSection1?.textColor }}
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(data.halfImageSection1.content),
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Divider Module */}
//       {data.dividerSection?.show !== false && (
//         <div className="mod_divider container" data-s3-module="">
//           <div className="row">
//             <div className="media">
//               {dividerLogo && (
//                 <picture className="">
//                   <img
//                     src={dividerLogo}
//                     width="55"
//                     height="61"
//                     loading="lazy"
//                     alt={data.dividerSection?.logoAlt || "Logo media"}
//                     draggable="false"
//                   />
//                 </picture>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Half Image Module 2 */}
//       {data.halfImageSection2?.show !== false && (
//         <div
//           className={`mod_half_image viewport half-image container wow ${
//             data.halfImageSection2?.animationClass || "fadeInLeft"
//           } ${data.halfImageSection2?.backgroundColor || "background-navy"}`}
//           data-s3-module=""
//           style={{ visibility: "hidden", animationName: "none" }}
//         >
//           <div
//             className={`row half-image-row ${
//               data.halfImageSection2?.flipped ? "flipped" : ""
//             } ${data.halfImageSection2?.marginTop || "mt-0"} ${
//               data.halfImageSection2?.marginBottom || "mb-0"
//             }`}
//           >
//             <div className="media">
//               <picture className="background">
//                 {halfImage2.mobile && (
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={`${halfImage2.mobile}, ${halfImage2.mobile} 2x`}
//                   />
//                 )}
//                 {halfImage2.tablet && (
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={`${halfImage2.tablet}, ${halfImage2.tablet} 2x`}
//                   />
//                 )}
//                 {halfImage2.desktop && (
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={`${halfImage2.desktop}, ${halfImage2.desktop} 2x`}
//                   />
//                 )}
//                 {halfImage2.large && <source srcSet={halfImage2.large} />}
//                 <img
//                   src={
//                     halfImage2.large || halfImage2.desktop || "/placeholder.jpg"
//                   }
//                   loading="lazy"
//                   width="1832"
//                   height="1824"
//                   alt={halfImage2.alt || "lake at sunset"}
//                   draggable="false"
//                   data-api-key="image"
//                 />
//               </picture>
//             </div>
//             <div className="copy padded">
//               <div className="inner">
//                 <div className="content" data-api-key="content">
//                   {data.halfImageSection2?.heading && (
//                     <div
//                       style={{ color: data.halfImageSection2?.headingColor }}
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(data.halfImageSection2.heading),
//                       }}
//                     />
//                   )}
//                   {data.halfImageSection2?.content && (
//                     <div
//                       style={{ color: data.halfImageSection2?.textColor }}
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(data.halfImageSection2.content),
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Column Module 2 (Services) */}
//       {data.columnSection2?.show !== false && (
//         <div className="mod_column viewport container" data-s3-module="">
//           <div
//             className={`row ${data.columnSection2?.marginTop || "mt-30"} ${
//               data.columnSection2?.marginBottom || "mb-30"
//             }`}
//             data-api-key="content"
//           >
//             <div className="item">
//               {data.columnSection2?.heading && (
//                 <h2 style={{ color: data.columnSection2?.headingColor }}>
//                   {data.columnSection2.heading}
//                 </h2>
//               )}
//               {data.columnSection2?.introContent && (
//                 <div
//                   style={{ color: data.columnSection2?.textColor }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(data.columnSection2.introContent),
//                   }}
//                 />
//               )}
//               {data.columnSection2?.servicesList &&
//                 data.columnSection2.servicesList.length > 0 && (
//                   <ul
//                     className={
//                       data.columnSection2?.columnsLayout ? "columns" : ""
//                     }
//                   >
//                     {data.columnSection2.servicesList.map((service, index) => (
//                       <li key={index} style={{ color: service.textColor }}>
//                         {service.serviceUrl ? (
//                           <a href={service.serviceUrl}>
//                             {service.serviceNameBold ? (
//                               <strong>{service.serviceName}</strong>
//                             ) : (
//                               service.serviceName
//                             )}
//                           </a>
//                         ) : service.serviceNameBold ? (
//                           <strong>{service.serviceName}</strong>
//                         ) : (
//                           service.serviceName
//                         )}
//                         {service.description && `: ${service.description}`}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Banner Module */}
//       {data.bannerSection?.show !== false && (
//         <div
//           className={`mod_banner ${data.bannerSection?.isDark ? "dark" : ""} ${
//             data.bannerSection?.hideDivider ? "hide-divider" : ""
//           } viewport ${data.bannerSection?.backgroundColor || "background-2"}`}
//           data-s3-module=""
//         >
//           <div
//             className={`row wow ${
//               data.bannerSection?.animationClass || "fadeInUp"
//             }`}
//             style={{ visibility: "hidden", animationName: "none" }}
//           >
//             <div className="content" data-api-key="top_content">
//               {data.bannerSection?.heading && (
//                 <h2 style={{ color: data.bannerSection?.headingColor }}>
//                   {data.bannerSection.heading}
//                 </h2>
//               )}
//               {data.bannerSection?.introContent && (
//                 <div
//                   style={{ color: data.bannerSection?.textColor }}
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(data.bannerSection.introContent),
//                   }}
//                 />
//               )}
//               {data.bannerSection?.servicesList &&
//                 data.bannerSection.servicesList.length > 0 && (
//                   <ul>
//                     {data.bannerSection.servicesList.map((service, index) => (
//                       <li key={index} style={{ color: service.textColor }}>
//                         {service.serviceUrl ? (
//                           <a href={service.serviceUrl}>
//                             {service.serviceNameBold ? (
//                               <strong>{service.serviceName}</strong>
//                             ) : (
//                               service.serviceName
//                             )}
//                           </a>
//                         ) : service.serviceNameBold ? (
//                           <strong>{service.serviceName}</strong>
//                         ) : (
//                           service.serviceName
//                         )}
//                         {service.description && `: ${service.description}`}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//             </div>
//           </div>
//           {bannerBgImage.large && (
//             <picture className="background">
//               {bannerBgImage.mobile && (
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={`${bannerBgImage.mobile}, ${bannerBgImage.mobile} 2x`}
//                 />
//               )}
//               {bannerBgImage.tablet && (
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${bannerBgImage.tablet}, ${bannerBgImage.tablet} 2x`}
//                 />
//               )}
//               {bannerBgImage.desktop && (
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={`${bannerBgImage.desktop}, ${bannerBgImage.desktop} 2x`}
//                 />
//               )}
//               <source srcSet={bannerBgImage.large} />
//               <img
//                 src={bannerBgImage.large}
//                 loading="lazy"
//                 width="2200"
//                 height="802"
//                 alt={bannerBgImage.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           )}
//         </div>
//       )}

//       {/* Final Column Module */}
//       {data.finalColumnSection?.show !== false && (
//         <div className="mod_column viewport container" data-s3-module="">
//           <div
//             className={`row ${data.finalColumnSection?.marginTop || "mt-30"}`}
//             data-api-key="content"
//           >
//             <div className="item">
//               <div
//                 className={
//                   data.finalColumnSection?.layout ||
//                   "columns-two vertical-align"
//                 }
//               >
//                 {data.finalColumnSection?.columns?.map((column, index) => (
//                   <div key={index}>
//                     {column.content && (
//                       <div
//                         style={{ color: column.textColor }}
//                         dangerouslySetInnerHTML={{
//                           __html: lexicalToHtml(column.content),
//                         }}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default MountDoraContent;





import MountDoraContent from "@/components/location/MountDoraContent";
import { fetchMountDoraPageData } from "@/lib/api/locations/fetchMountDoraPageData";
import type { Metadata } from "next";

export const revalidate = 60; // ✅ ISR: Regenerate every 60 seconds

// ✅ Server-side CMS data fetch
async function getData() {
  try {
    const data = await fetchMountDoraPageData();
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching Mount Dora page data:", error);
    return null;
  }
}

// ✅ Dynamic SEO metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const seo = (data as any)?.seoSettings || {};

  return {
    title:
      seo.metaTitle ||
      "Goldfingers Aesthetics Mount Dora | Botox, Fillers & Med Spa Experts",
    description:
      seo.metaDescription ||
      "Experience Goldfingers Aesthetics Mount Dora — experts in Botox, fillers, and rejuvenating med spa treatments for beautiful, youthful skin.",
    openGraph: {
      title:
        seo.metaTitle ||
        "Goldfingers Aesthetics Mount Dora | Botox & Med Spa Experts",
      description:
        seo.metaDescription ||
        "Discover Goldfingers Aesthetics Mount Dora — your premier destination for Botox, fillers, and luxury med spa services in Central Florida.",
      images: [
        {
          url:
            seo.ogImage?.url ||
            "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Goldfingers Aesthetics Mount Dora Med Spa",
        },
      ],
    },
    keywords:
      seo.keywords ||
      "Mount Dora med spa, Botox Mount Dora, Fillers Mount Dora, Goldfingers Aesthetics, facial rejuvenation, skincare, medspa near me, Florida aesthetics",
    robots: seo.robots || "index, follow",
    alternates: { canonical: seo.canonicalUrl },
  };
}

// ✅ Server-rendered page entry
export default async function MountDoraPage() {
  const data = await getData();

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Mount Dora page content.
        </p>
      </main>
    );
  }

  // ✅ Pass fetched CMS data to client component
  return <MountDoraContent data={data} />;
}
