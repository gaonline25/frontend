// // import React from "react";

// // const SkinMedica: React.FC = () => {
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
// //                     href="/medical-spa/skin-medica/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Skin Medica
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>SkinMedica</h1>
// //               <div className="text">
// //                 <p>Rediscover Your Skin's Youthful Vitality With SkinMedica</p>
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
// //                 srcSet="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1920"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="Woman applying face cream"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Intro Module */}
// //       <div
// //         className="mod_intro container viewport option-1 wow fadeInUp"
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
// //             <h3>Discovering Healthy Skin with SkinMedica</h3>
// //             <p>
// //               If you are new to SkinMedica®or want to learn more about our
// //               award-winning products, this is the perfect place to start. We
// //               invite you to a personalized skin care consultation with our
// //               leading team of Estheticians to help design the ideal skincare
// //               regimen for you!
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Box Grid Module */}
// //       <div
// //         className="mod_box_grid viewport  five-boxes  container option-1 default  bkg-image wider "
// //         data-s3-module
// //       >
// //         <div className="row">
// //           <div className="boxes wider">
// //             <div className="box wow fadeInUp">
// //               <h2>TNS Recovery Complex®</h2>
// //               <p>
// //                 The first topical growth factor solution with the SkinMedica
// //                 patented Tissue Nutrient Solution (TNS®) is clinically shown to
// //                 reduce the appearance of skin discoloration and improve the
// //                 appearance of fine lines and wrinkles.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h2>Lytera®2.0 Pigment Correcting Serum</h2>
// //               <p>
// //                 Lytera®2.0 is an advanced Pigment Correcting Serum formulated to
// //                 address the appearance of stubborn skin discoloration for a
// //                 variety of skin types and ethnicities.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h2>Total Defense + Repair</h2>
// //               <p>
// //                 Rejuvenating superscreen powered by SOL-IR™Advanced Antioxidant
// //                 Complex to provide comprehensive protection beyond UVA/UVB rays
// //                 while supporting skin's ability to restore itself.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h2>Retinol Complex</h2>
// //               <p>
// //                 SkinMedica's three varying strengths of retinol enhance skin's
// //                 radiance, tone, texture, and resiliency.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h2>HA5®Rejuvenating Hydrator</h2>
// //               <p>
// //                 Powered by SkinMedica's exclusive VITISENSCE™Technology,
// //                 HA5®Rejuvenating Hydrator provides immediate smoothing in the
// //                 appearance of fine lines and wrinkles. It also supports the
// //                 skin's natural ability to replenish its own hyaluronic acid (HA)
// //                 for overall skin health.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1000, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1500 2x"
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1200 2x"
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=2100 2x"
// //           />
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=2200"
// //           />
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg?auto=format,compress&w=2200"
// //             loading="lazy"
// //             data-lazyload="img"
// //             width="2200"
// //             height="1726"
// //             alt="Background media"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>

// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image  viewport half-image container wow fadeInLeft "
// //         data-s3-module
// //       >
// //         <div className="row half-image-row mt-80-desktop mt-40-tablet-down mb-80-desktop mb-40-tablet-down">
// //           <div className="media">
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
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy ">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>
// //                   Lytera 2.0
// //                   <span className="block-desktop">
// //                     Advanced Pigment Correcting System{" "}
// //                     <span className="small">(8-piece system)</span>
// //                   </span>
// //                 </h2>
// //                 <p>
// //                   Create healthy and flawless-looking skin with the Lytera 2.0
// //                   Advanced Pigment Correcting System by SkinMedica. Featuring
// //                   potent aloe vera and jojoba, this set works effectively on
// //                   diminishing signs of aging and discoloration to beautify your
// //                   appearance. The Lytera 2.0 Advanced Pigment Correcting Serum
// //                   includes:
// //                 </p>
// //                 <ul>
// //                   <li>
// //                     Lytera 2.0 Advanced Pigment Correcting Serum (2 fl. oz. and
// //                     .3 fl. oz. sample size)
// //                   </li>
// //                   <li>
// //                     Total Defense + Repair Broad Spectrum Sunscreen SPF 34 (2.3
// //                     oz. and 1 fl. Oz. travel size)
// //                   </li>
// //                   <li>Retinol Complex 0.5 (1 fl. oz.)</li>
// //                   <li>AHA/BHA Exfoliating Cleanser (6 fl. oz.)</li>
// //                   <li>AHA/BHA Cream (2 oz.)</li>
// //                   <li>Rejuvenative Moisturizer (2 oz.)</li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark  hide-divider viewport background-2"
// //         data-s3-module
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2>
// //               Discover the power of SkinMedica:{" "}
// //               <span className="block-desktop">
// //                 Elevate your skincare routine
// //               </span>
// //             </h2>
// //             <p>
// //               SkinMedica products are backed by scientific research and
// //               formulated with a deep understanding of skin biology. The brand is
// //               known for utilizing potent ingredients that have been proven to
// //               address a wide range of skin concerns. From aging signs like
// //               wrinkles, fine lines, and sagging skin to issues like
// //               hyperpigmentation, dullness, and uneven texture, SkinMedica
// //               products target these concerns at their source.
// //             </p>
// //             <div className="columns-two">
// //               <div>
// //                 <p>
// //                   One critical factor that sets SkinMedica apart is its use of
// //                   growth factors and other advanced technologies. Growth factors
// //                   are naturally occurring proteins that play a crucial role in
// //                   the body's ability to repair and rejuvenate the skin.
// //                   SkinMedica harnesses the power of growth factors to support
// //                   collagen production, enhance skin elasticity, and promote a
// //                   more youthful complexion.
// //                 </p>
// //               </div>
// //               <div>
// //                 <ul className="columns">
// //                   <li>Uneven Skin Tone &amp; Dark Spots</li>
// //                   <li>Prevention &amp; Protection</li>
// //                   <li>Lines &amp; Wrinkles</li>
// //                   <li>Acne &amp; Blemishes</li>
// //                   <li>Sensitive Skin</li>
// //                   <li>Signs of Aging</li>
// //                   <li>Skin Recovery</li>
// //                   <li>Texture</li>
// //                   <li>Dry Skin</li>
// //                   <li>Eye Area</li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <p>
// //               At Goldfingers Aesthetics, we're proud to offer a range of
// //               advanced skincare products, including the renowned SkinMedica
// //               line. SkinMedica is a brand that embodies science, innovation, and
// //               the pursuit of healthier, more radiant skin. With a commitment to
// //               research-driven formulations and clinically proven ingredients,
// //               SkinMedica products are designed to transform your skin and
// //               deliver exceptional results.
// //             </p>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1200 2x"
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
// //           />
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// //           />
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// //             loading="lazy"
// //             data-lazyload="img"
// //             width="2200"
// //             height="802"
// //             alt="Banner media"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>

// //       {/* Box Grid Module */}
// //       <div
// //         className="mod_box_grid viewport  five-boxes  container option-1 default  no-bg wider "
// //         data-s3-module
// //       >
// //         <div className="row">
// //           <div className="content-before">
// //             <h2>The Goldfingers Aesthetics Experience</h2>
// //             <p>
// //               At Goldfingers Aesthetics, we believe that a comprehensive
// //               skincare routine is essential for achieving and maintaining
// //               healthy, vibrant skin. That's why we've chosen to offer SkinMedica
// //               products as part of our commitment to delivering the best skincare
// //               solutions. When you select SkinMedica products at Goldfingers
// //               Aesthetics, you can expect the following:
// //             </p>
// //           </div>
// //           <div className="boxes wider">
// //             <div className="box wow fadeInUp">
// //               <h3>Expert Guidance</h3>
// //               <p>
// //                 Our skilled skincare professionals will assess your unique skin
// //                 type, concerns, and goals to recommend the most suitable
// //                 SkinMedica products for your needs.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Tailored Regimens</h3>
// //               <p>
// //                 Whether you're targeting fine lines, sun damage, or uneven skin
// //                 tone, we'll customize a skincare regimen using SkinMedica
// //                 products that address your specific concerns.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Proven Results</h3>
// //               <p>
// //                 SkinMedica's reputation is built on delivering visible,
// //                 long-lasting results. With consistent use, you can expect to see
// //                 improvements in the tone, texture, and overall health of your
// //                 skin.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Advanced Formulations</h3>
// //               <p>
// //                 SkinMedica products are crafted with a focus on innovative,
// //                 high-quality ingredients that have been clinically proven to
// //                 enhance skin's appearance and vitality.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Ongoing Support</h3>
// //               <p>
// //                 Our team is here to guide you on how to incorporate SkinMedica
// //                 products into your daily routine and provide any necessary
// //                 guidance or adjustments.
// //               </p>
// //             </div>
// //           </div>
// //           <div className="content-after">
// //             <p>
// //               Elevate your skincare routine with SkinMedica products – a brand
// //               that embodies scientific innovation and transformative results.
// //               Experience the difference of skincare that's backed by research
// //               and delivered with a commitment to excellence at Goldfingers
// //               Aesthetics. Your journey to radiant, healthy skin starts here.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default SkinMedica;



// "use client";

// import React, { useEffect, useState } from "react";
// import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

// interface SkinMedicaPageData {
//   componentName: string;
//   slug: string;
//   isActive: boolean;
//   heroModule: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundTexture: {
//       desktop?: any;
//       tablet?: any;
//       mobile?: any;
//       smallMobile?: any;
//       altText?: string;
//     };
//     breadcrumbs: Array<{
//       label: string;
//       url: string;
//       ariaLabel?: string;
//     }>;
//     breadcrumbLinkColor?: string;
//     breadcrumbHoverColor?: string;
//     title: string;
//     titleColor?: string;
//     description?: any;
//     descriptionColor?: string;
//     ctaButton: {
//       enabled: boolean;
//       label?: string;
//       url?: string;
//       className?: string;
//       backgroundColor?: string;
//       textColor?: string;
//       hoverBackgroundColor?: string;
//     };
//     mediaImage: {
//       desktop?: any;
//       tablet?: any;
//       mobile?: any;
//       smallMobile?: any;
//       altText?: string;
//     };
//   };
//   introModule: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     logo?: any;
//     logoAltText?: string;
//     title?: string;
//     titleColor?: string;
//     content?: any;
//     contentColor?: string;
//   };
//   boxGridModule1: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundImage: {
//       desktop?: any;
//       tablet?: any;
//       mobile?: any;
//       smallMobile?: any;
//       altText?: string;
//     };
//     boxes: Array<{
//       title: string;
//       titleColor?: string;
//       content?: any;
//       contentColor?: string;
//       backgroundColor?: string;
//       borderColor?: string;
//       customClass?: string;
//     }>;
//     boxBackgroundColor?: string;
//     boxBorderColor?: string;
//     boxHoverEffect?: string;
//   };
//   halfImageModule: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     imagePosition?: string;
//     image: {
//       desktop?: any;
//       tablet?: any;
//       mobile?: any;
//       smallMobile?: any;
//       altText?: string;
//     };
//     title?: string;
//     titleColor?: string;
//     subtitle?: string;
//     subtitleColor?: string;
//     content?: any;
//     contentColor?: string;
//     listItems: Array<{
//       text: string;
//       textColor?: string;
//     }>;
//     listStyle?: string;
//   };
//   bannerModule: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundImage: {
//       desktop?: any;
//       tablet?: any;
//       mobile?: any;
//       smallMobile?: any;
//       altText?: string;
//     };
//     title?: string;
//     titleColor?: string;
//     content?: any;
//     contentColor?: string;
//     enableTwoColumns?: boolean;
//     columnOneContent?: any;
//     columnTwoContent?: any;
//     listItems: Array<{
//       text: string;
//       textColor?: string;
//     }>;
//     listColumns?: string;
//     bottomContent?: any;
//   };
//   boxGridModule2: {
//     enabled: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     contentBefore?: any;
//     contentBeforeColor?: string;
//     boxes: Array<{
//       title: string;
//       titleColor?: string;
//       content?: any;
//       contentColor?: string;
//       backgroundColor?: string;
//       borderColor?: string;
//       customClass?: string;
//     }>;
//     contentAfter?: any;
//     contentAfterColor?: string;
//     boxBackgroundColor?: string;
//     boxBorderColor?: string;
//     boxHoverEffect?: string;
//   };
//   sectionOrder: Array<{
//     sectionType: string;
//     enabled: boolean;
//     customId?: string;
//     customClass?: string;
//   }>;
//   globalStyling: {
//     containerBackgroundColor?: string;
//     containerMaxWidth?: string;
//     fontFamily?: string;
//     primaryColor?: string;
//     secondaryColor?: string;
//     accentColor?: string;
//     linkColor?: string;
//     linkHoverColor?: string;
//     customCss?: string;
//   };
//   seo: {
//     metaTitle?: string;
//     metaDescription?: string;
//     metaKeywords?: string;
//     ogImage?: any;
//     canonicalUrl?: string;
//   };
// }

// const SkinMedica: React.FC = () => {
//   const [pageData, setPageData] = useState<SkinMedicaPageData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `${
//             process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
//             "http://localhost:3001/api"
//           }/skinMedicaPage?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
//           {
//             next: { revalidate: 60 },
//             cache: "force-cache",
//           }
//         );
//         if (!res.ok) {
//           throw new Error(`Failed to fetch SkinMedica data: ${res.statusText}`);
//         }
//         const data = await res.json();
//         const activeComponent =
//           data.docs?.find((component: any) => component.isActive) || null;
//         console.log("Fetched SkinMedica data:", activeComponent);
//         setPageData(activeComponent);
//       } catch (error) {
//         console.error("Error fetching SkinMedica data:", error);
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

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const {
//     heroModule,
//     introModule,
//     boxGridModule1,
//     halfImageModule,
//     bannerModule,
//     boxGridModule2,
//     sectionOrder,
//     globalStyling,
//     seo,
//   } = pageData;

//   const renderSection = (sectionType: string, enabled: boolean) => {
//     if (!enabled) return null;

//     switch (sectionType) {
//       case "hero":
//         if (!heroModule.enabled) return null;
//         const heroBackgroundTexture = getResponsiveImageUrls(
//           heroModule.backgroundTexture
//         );
//         const heroMediaImage = getResponsiveImageUrls(heroModule.mediaImage);

//         return (
//           <div className="mod_hero banner mobile-stack" data-s3-module>
//             <div className="wrapper">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${heroBackgroundTexture.smallMobile}?auto=format,compress&w=420, ${heroBackgroundTexture.smallMobile}?auto=format,compress&w=630 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${heroBackgroundTexture.mobile}?auto=format,compress&w=800, ${heroBackgroundTexture.mobile}?auto=format,compress&w=1200 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${heroBackgroundTexture.tablet}?auto=format,compress&w=1400, ${heroBackgroundTexture.tablet}?auto=format,compress&w=2100 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="1994"
//                   height="1206"
//                   alt={
//                     heroModule.backgroundTexture.altText || "Background Texture"
//                   }
//                   draggable="false"
//                 />
//               </picture>
//               <div className="row">
//                 <div className="inner">
//                   <ul className="partial_breadcrumb" data-s3-partial>
//                     {heroModule.breadcrumbs.map((breadcrumb, index) => (
//                       <li key={index}>
//                         <a
//                           href={breadcrumb.url}
//                           role="link"
//                           aria-label={breadcrumb.ariaLabel}
//                         >
//                           {breadcrumb.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                   <h1>{heroModule.title}</h1>
//                   <div className="text">
//                     {heroModule.description && (
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: heroModule.description,
//                         }}
//                       />
//                     )}
//                     {heroModule.ctaButton.enabled && (
//                       <p>
//                         <a
//                           className={
//                             heroModule.ctaButton.className || "btn white"
//                           }
//                           href={heroModule.ctaButton.url}
//                           role="button"
//                         >
//                           {heroModule.ctaButton.label}
//                         </a>
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
//                     data-lazyload-srcset={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
//                     data-lazyload-srcset={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
//                     data-lazyload-srcset={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
//                   />
//                   <source
//                     srcSet={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
//                     data-lazyload-srcset={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
//                   />
//                   <img
//                     src={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
//                     width="1920"
//                     height="1206"
//                     alt={
//                       heroModule.mediaImage.altText ||
//                       "Woman applying face cream"
//                     }
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//         );

//       case "intro":
//         if (!introModule.enabled) return null;
//         const logoUrl = introModule.logo
//           ? getResponsiveImageUrls({ desktop: introModule.logo }).desktop
//           : "";

//         return (
//           <div
//             className={
//               introModule.className ||
//               "mod_intro container viewport option-1 wow fadeInUp"
//             }
//             data-s3-module
//           >
//             <div className="row ">
//               {logoUrl && (
//                 <picture className="logo">
//                   <img
//                     src={logoUrl}
//                     width={58}
//                     height={64}
//                     loading="lazy"
//                     alt={
//                       introModule.logoAltText || "Goldfingers aesthetic logo"
//                     }
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}
//               <div className="inner" data-api-key="content">
//                 {introModule.title && <h3>{introModule.title}</h3>}
//                 {introModule.content && (
//                   <div
//                     dangerouslySetInnerHTML={{ __html: introModule.content }}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       case "boxGrid1":
//         if (!boxGridModule1.enabled) return null;
//         const boxGrid1BgImage = getResponsiveImageUrls(
//           boxGridModule1.backgroundImage
//         );

//         return (
//           <div
//             className={
//               boxGridModule1.className ||
//               "mod_box_grid viewport five-boxes container option-1 default bkg-image wider"
//             }
//             data-s3-module
//           >
//             <div className="row">
//               <div className="boxes wider">
//                 {boxGridModule1.boxes.map((box, index) => (
//                   <div
//                     key={index}
//                     className={`box wow fadeInUp ${box.customClass || ""}`}
//                   >
//                     <h2>{box.title}</h2>
//                     {box.content && (
//                       <div dangerouslySetInnerHTML={{ __html: box.content }} />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${boxGrid1BgImage.smallMobile}?auto=format,compress&w=1000, ${boxGrid1BgImage.smallMobile}?auto=format,compress&w=1500 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${boxGrid1BgImage.mobile}?auto=format,compress&w=800, ${boxGrid1BgImage.mobile}?auto=format,compress&w=1200 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${boxGrid1BgImage.tablet}?auto=format,compress&w=1400, ${boxGrid1BgImage.tablet}?auto=format,compress&w=2100 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${boxGrid1BgImage.desktop}?auto=format,compress&w=2200`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${boxGrid1BgImage.desktop}?auto=format,compress&w=2200`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="1726"
//                 alt={
//                   boxGridModule1.backgroundImage.altText || "Background media"
//                 }
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "halfImage":
//         if (!halfImageModule.enabled) return null;
//         const halfImage = getResponsiveImageUrls(halfImageModule.image);

//         return (
//           <div
//             className={
//               halfImageModule.className ||
//               "mod_half_image viewport half-image container wow fadeInLeft"
//             }
//             data-s3-module
//           >
//             <div className="row half-image-row mt-80-desktop mt-40-tablet-down mb-80-desktop mb-40-tablet-down">
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImage.smallMobile}?auto=format,compress&w=420, ${halfImage.smallMobile}?auto=format,compress&w=630 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImage.mobile}?auto=format,compress&w=800, ${halfImage.mobile}?auto=format,compress&w=1200 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImage.tablet}?auto=format,compress&w=1400, ${halfImage.tablet}?auto=format,compress&w=2100 2x`}
//                   />
//                   <source
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImage.desktop}?auto=format,compress&w=1832`}
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src={`${halfImage.desktop}?auto=format,compress&w=1832`}
//                     loading="lazy"
//                     data-lazyload="img"
//                     width="1832"
//                     height="1824"
//                     alt={
//                       halfImageModule.image.altText ||
//                       "Nurse wearing gloves examines female patient's forehead"
//                     }
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div className="copy ">
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     <h2>
//                       {halfImageModule.title}
//                       {halfImageModule.subtitle && (
//                         <span className="block-desktop">
//                           {halfImageModule.subtitle}
//                         </span>
//                       )}
//                     </h2>
//                     {halfImageModule.content && (
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: halfImageModule.content,
//                         }}
//                       />
//                     )}
//                     {halfImageModule.listItems &&
//                       halfImageModule.listItems.length > 0 && (
//                         <ul>
//                           {halfImageModule.listItems.map((item, index) => (
//                             <li key={index}>{item.text}</li>
//                           ))}
//                         </ul>
//                       )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "banner":
//         if (!bannerModule.enabled) return null;
//         const bannerBgImage = getResponsiveImageUrls(
//           bannerModule.backgroundImage
//         );

//         return (
//           <div
//             className={
//               bannerModule.className ||
//               "mod_banner dark hide-divider viewport background-2"
//             }
//             data-s3-module
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 {bannerModule.title && <h2>{bannerModule.title}</h2>}
//                 {bannerModule.content && (
//                   <div
//                     dangerouslySetInnerHTML={{ __html: bannerModule.content }}
//                   />
//                 )}
//                 {bannerModule.enableTwoColumns && (
//                   <div className="columns-two">
//                     <div>
//                       {bannerModule.columnOneContent && (
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: bannerModule.columnOneContent,
//                           }}
//                         />
//                       )}
//                     </div>
//                     <div>
//                       {bannerModule.listItems &&
//                         bannerModule.listItems.length > 0 && (
//                           <ul
//                             className={
//                               bannerModule.listColumns === "columns"
//                                 ? "columns"
//                                 : ""
//                             }
//                           >
//                             {bannerModule.listItems.map((item, index) => (
//                               <li key={index}>{item.text}</li>
//                             ))}
//                           </ul>
//                         )}
//                     </div>
//                   </div>
//                 )}
//                 {bannerModule.bottomContent && (
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: bannerModule.bottomContent,
//                     }}
//                   />
//                 )}
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bannerBgImage.smallMobile}?auto=format,compress&w=800, ${bannerBgImage.smallMobile}?auto=format,compress&w=1200 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bannerBgImage.mobile}?auto=format,compress&w=800&q=85&sharp=5, ${bannerBgImage.mobile}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bannerBgImage.tablet}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerBgImage.tablet}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bannerBgImage.desktop}?auto=format,compress&w=2200&q=85&sharp=5`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${bannerBgImage.desktop}?auto=format,compress&w=2200&q=85&sharp=5`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={bannerModule.backgroundImage.altText || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "boxGrid2":
//         if (!boxGridModule2.enabled) return null;

//         return (
//           <div
//             className={
//               boxGridModule2.className ||
//               "mod_box_grid viewport five-boxes container option-1 default no-bg wider"
//             }
//             data-s3-module
//           >
//             <div className="row">
//               {boxGridModule2.contentBefore && (
//                 <div className="content-before">
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: boxGridModule2.contentBefore,
//                     }}
//                   />
//                 </div>
//               )}
//               <div className="boxes wider">
//                 {boxGridModule2.boxes.map((box, index) => (
//                   <div
//                     key={index}
//                     className={`box wow fadeInUp ${box.customClass || ""}`}
//                   >
//                     <h3>{box.title}</h3>
//                     {box.content && (
//                       <div dangerouslySetInnerHTML={{ __html: box.content }} />
//                     )}
//                   </div>
//                 ))}
//               </div>
//               {boxGridModule2.contentAfter && (
//                 <div className="content-after">
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: boxGridModule2.contentAfter,
//                     }}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

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
//       {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}

//       {sectionOrder.map((section, index) =>
//         section.enabled ? (
//           <React.Fragment key={index}>
//             {renderSection(section.sectionType, section.enabled)}
//           </React.Fragment>
//         ) : null
//       )}
//     </main>
//   );
// };

// export default SkinMedica;




"use client";

import React, { useEffect, useState } from "react";
import { getResponsiveImageUrls } from "@/lib/api/Gallery/non-surgical/BotoxPage";

// Lexical to HTML converter
function lexicalToHtml(lexicalJSON: any): string {
  if (!lexicalJSON || !lexicalJSON.root) return "";

  const processNode = (node: any): string => {
    if (!node) return "";

    if (node.type === "text") {
      let text = node.text || "";
      if (node.format) {
        if (node.format & 1) text = `<strong>${text}</strong>`;
        if (node.format & 2) text = `<em>${text}</em>`;
        if (node.format & 4) text = `<s>${text}</s>`;
        if (node.format & 8) text = `<u>${text}</u>`;
        if (node.format & 16) text = `<code>${text}</code>`;
      }
      return text;
    }

    if (node.children && Array.isArray(node.children)) {
      const childrenHtml = node.children.map(processNode).join("");

      switch (node.type) {
        case "paragraph":
          const format = node.format || "";
          const className = format === "center" ? ' class="text-center"' : "";
          return `<p${className}>${childrenHtml}</p>`;
        case "heading":
          const tag = node.tag || "h2";
          return `<${tag}>${childrenHtml}</${tag}>`;
        case "list":
          const listTag = node.listType === "number" ? "ol" : "ul";
          return `<${listTag}>${childrenHtml}</${listTag}>`;
        case "listitem":
          return `<li>${childrenHtml}</li>`;
        case "quote":
          return `<blockquote>${childrenHtml}</blockquote>`;
        case "link":
          const url = node.url || "#";
          const target = node.newTab
            ? ' target="_blank" rel="noopener noreferrer"'
            : "";
          return `<a href="${url}"${target}>${childrenHtml}</a>`;
        case "root":
          return childrenHtml;
        default:
          return childrenHtml;
      }
    }

    return "";
  };

  return processNode(lexicalJSON.root);
}

interface SkinMedicaPageData {
  componentName: string;
  slug: string;
  isActive: boolean;
  heroModule: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    backgroundTexture: {
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
    breadcrumbLinkColor?: string;
    breadcrumbHoverColor?: string;
    title: string;
    titleColor?: string;
    description?: any;
    descriptionColor?: string;
    ctaButton: {
      enabled: boolean;
      label?: string;
      url?: string;
      className?: string;
      backgroundColor?: string;
      textColor?: string;
      hoverBackgroundColor?: string;
    };
    mediaImage: {
      desktop?: any;
      tablet?: any;
      mobile?: any;
      smallMobile?: any;
      altText?: string;
    };
  };
  introModule: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    logo?: any;
    logoAltText?: string;
    title?: string;
    titleColor?: string;
    content?: any;
    contentColor?: string;
  };
  boxGridModule1: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    backgroundImage: {
      desktop?: any;
      tablet?: any;
      mobile?: any;
      smallMobile?: any;
      altText?: string;
    };
    boxes: Array<{
      title: string;
      titleColor?: string;
      content?: any;
      contentColor?: string;
      backgroundColor?: string;
      borderColor?: string;
      customClass?: string;
    }>;
    boxBackgroundColor?: string;
    boxBorderColor?: string;
    boxHoverEffect?: string;
  };
  halfImageModule: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    imagePosition?: string;
    image: {
      desktop?: any;
      tablet?: any;
      mobile?: any;
      smallMobile?: any;
      altText?: string;
    };
    title?: string;
    titleColor?: string;
    subtitle?: string;
    subtitleColor?: string;
    content?: any;
    contentColor?: string;
    listItems: Array<{
      text: string;
      textColor?: string;
    }>;
    listStyle?: string;
  };
  bannerModule: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    backgroundImage: {
      desktop?: any;
      tablet?: any;
      mobile?: any;
      smallMobile?: any;
      altText?: string;
    };
    title?: string;
    titleColor?: string;
    content?: any;
    contentColor?: string;
    enableTwoColumns?: boolean;
    columnOneContent?: any;
    columnTwoContent?: any;
    listItems: Array<{
      text: string;
      textColor?: string;
    }>;
    listColumns?: string;
    bottomContent?: any;
  };
  boxGridModule2: {
    enabled: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    contentBefore?: any;
    contentBeforeColor?: string;
    boxes: Array<{
      title: string;
      titleColor?: string;
      content?: any;
      contentColor?: string;
      backgroundColor?: string;
      borderColor?: string;
      customClass?: string;
    }>;
    contentAfter?: any;
    contentAfterColor?: string;
    boxBackgroundColor?: string;
    boxBorderColor?: string;
    boxHoverEffect?: string;
  };
  sectionOrder: Array<{
    sectionType: string;
    enabled: boolean;
    customId?: string;
    customClass?: string;
  }>;
  globalStyling: {
    containerBackgroundColor?: string;
    containerMaxWidth?: string;
    fontFamily?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    linkColor?: string;
    linkHoverColor?: string;
    customCss?: string;
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    ogImage?: any;
    canonicalUrl?: string;
  };
}

const SkinMedica: React.FC = () => {
  const [pageData, setPageData] = useState<SkinMedicaPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
            "http://localhost:3001/api"
          }/skinMedicaPage?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
          {
            next: { revalidate: 60 },
            cache: "force-cache",
          }
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch SkinMedica data: ${res.statusText}`);
        }
        const data = await res.json();
        const activeComponent =
          data.docs?.find((component: any) => component.isActive) || null;
        console.log("Fetched SkinMedica data:", activeComponent);
        setPageData(activeComponent);
      } catch (error) {
        console.error("Error fetching SkinMedica data:", error);
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

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const {
    heroModule,
    introModule,
    boxGridModule1,
    halfImageModule,
    bannerModule,
    boxGridModule2,
    sectionOrder,
    globalStyling,
    seo,
  } = pageData;

  const renderSection = (sectionType: string, enabled: boolean) => {
    if (!enabled) return null;

    switch (sectionType) {
      case "hero":
        if (!heroModule.enabled) return null;
        const heroBackgroundTexture = getResponsiveImageUrls(
          heroModule.backgroundTexture
        );
        const heroMediaImage = getResponsiveImageUrls(heroModule.mediaImage);

        return (
          <div className="mod_hero banner mobile-stack" data-s3-module>
            <div className="wrapper">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackgroundTexture.smallMobile}?auto=format,compress&w=420, ${heroBackgroundTexture.smallMobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackgroundTexture.mobile}?auto=format,compress&w=800, ${heroBackgroundTexture.mobile}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackgroundTexture.tablet}?auto=format,compress&w=1400, ${heroBackgroundTexture.tablet}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={`${heroBackgroundTexture.desktop}?auto=format,compress&w=1994`}
                  loading="lazy"
                  data-lazyload="img"
                  width="1994"
                  height="1206"
                  alt={
                    heroModule.backgroundTexture.altText || "Background Texture"
                  }
                  draggable="false"
                />
              </picture>
              <div className="row">
                <div className="inner">
                  <ul className="partial_breadcrumb" data-s3-partial>
                    {heroModule.breadcrumbs.map((breadcrumb, index) => (
                      <li key={index}>
                        <a
                          href={breadcrumb.url}
                          role="link"
                          aria-label={breadcrumb.ariaLabel}
                        >
                          {breadcrumb.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h1>{heroModule.title}</h1>
                  <div className="text">
                    {heroModule.description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(heroModule.description),
                        }}
                      />
                    )}
                    {heroModule.ctaButton.enabled && (
                      <p>
                        <a
                          className={
                            heroModule.ctaButton.className || "btn white"
                          }
                          href={heroModule.ctaButton.url}
                          role="button"
                        >
                          {heroModule.ctaButton.label}
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
                    srcSet={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
                    data-lazyload-srcset={`${heroMediaImage.smallMobile}?auto=format,compress&w=420, ${heroMediaImage.smallMobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
                    data-lazyload-srcset={`${heroMediaImage.mobile}?auto=format,compress&w=800, ${heroMediaImage.mobile}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
                    data-lazyload-srcset={`${heroMediaImage.tablet}?auto=format,compress&w=1400, ${heroMediaImage.tablet}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
                    data-lazyload-srcset={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
                  />
                  <img
                    src={`${heroMediaImage.desktop}?auto=format,compress&w=1920`}
                    width="1920"
                    height="1206"
                    alt={
                      heroModule.mediaImage.altText ||
                      "Woman applying face cream"
                    }
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "intro":
        if (!introModule.enabled) return null;
        const logoUrl = introModule.logo
          ? getResponsiveImageUrls({ desktop: introModule.logo }).desktop
          : "";

        return (
          <div
            className={
              introModule.className ||
              "mod_intro container viewport option-1 wow fadeInUp"
            }
            data-s3-module
          >
            <div className="row ">
              {logoUrl && (
                <picture className="logo">
                  <img
                    src={logoUrl}
                    width={58}
                    height={64}
                    loading="lazy"
                    alt={
                      introModule.logoAltText || "Goldfingers aesthetic logo"
                    }
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="inner" data-api-key="content">
                {introModule.title && <h3>{introModule.title}</h3>}
                {introModule.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(introModule.content),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        );

      case "boxGrid1":
        if (!boxGridModule1.enabled) return null;
        const boxGrid1BgImage = getResponsiveImageUrls(
          boxGridModule1.backgroundImage
        );

        return (
          <div
            className={
              boxGridModule1.className ||
              "mod_box_grid viewport five-boxes container option-1 default bkg-image wider"
            }
            data-s3-module
          >
            <div className="row">
              <div className="boxes wider">
                {boxGridModule1.boxes.map((box, index) => (
                  <div
                    key={index}
                    className={`box wow fadeInUp ${box.customClass || ""}`}
                  >
                    <h2>{box.title}</h2>
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
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxGrid1BgImage.smallMobile}?auto=format,compress&w=1000, ${boxGrid1BgImage.smallMobile}?auto=format,compress&w=1500 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxGrid1BgImage.mobile}?auto=format,compress&w=800, ${boxGrid1BgImage.mobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxGrid1BgImage.tablet}?auto=format,compress&w=1400, ${boxGrid1BgImage.tablet}?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxGrid1BgImage.desktop}?auto=format,compress&w=2200`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${boxGrid1BgImage.desktop}?auto=format,compress&w=2200`}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="1726"
                alt={
                  boxGridModule1.backgroundImage.altText || "Background media"
                }
                draggable="false"
              />
            </picture>
          </div>
        );

      case "halfImage":
        if (!halfImageModule.enabled) return null;
        const halfImage = getResponsiveImageUrls(halfImageModule.image);

        return (
          <div
            className={
              halfImageModule.className ||
              "mod_half_image viewport half-image container wow fadeInLeft"
            }
            data-s3-module
          >
            <div className="row half-image-row mt-80-desktop mt-40-tablet-down mb-80-desktop mb-40-tablet-down">
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImage.smallMobile}?auto=format,compress&w=420, ${halfImage.smallMobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImage.mobile}?auto=format,compress&w=800, ${halfImage.mobile}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImage.tablet}?auto=format,compress&w=1400, ${halfImage.tablet}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImage.desktop}?auto=format,compress&w=1832`}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={`${halfImage.desktop}?auto=format,compress&w=1832`}
                    loading="lazy"
                    data-lazyload="img"
                    width="1832"
                    height="1824"
                    alt={
                      halfImageModule.image.altText ||
                      "Nurse wearing gloves examines female patient's forehead"
                    }
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy ">
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2>
                      {halfImageModule.title}
                      {halfImageModule.subtitle && (
                        <span className="block-desktop">
                          {halfImageModule.subtitle}
                        </span>
                      )}
                    </h2>
                    {halfImageModule.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(halfImageModule.content),
                        }}
                      />
                    )}
                    {halfImageModule.listItems &&
                      halfImageModule.listItems.length > 0 && (
                        <ul>
                          {halfImageModule.listItems.map((item, index) => (
                            <li key={index}>{item.text}</li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "banner":
        if (!bannerModule.enabled) return null;
        const bannerBgImage = getResponsiveImageUrls(
          bannerModule.backgroundImage
        );

        return (
          <div
            className={
              bannerModule.className ||
              "mod_banner dark hide-divider viewport background-2"
            }
            data-s3-module
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                {bannerModule.title && <h2>{bannerModule.title}</h2>}
                {bannerModule.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerModule.content),
                    }}
                  />
                )}
                {bannerModule.enableTwoColumns && (
                  <div className="columns-two">
                    <div>
                      {bannerModule.columnOneContent && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: lexicalToHtml(
                              bannerModule.columnOneContent
                            ),
                          }}
                        />
                      )}
                    </div>
                    <div>
                      {bannerModule.listItems &&
                        bannerModule.listItems.length > 0 && (
                          <ul
                            className={
                              bannerModule.listColumns === "columns"
                                ? "columns"
                                : ""
                            }
                          >
                            {bannerModule.listItems.map((item, index) => (
                              <li key={index}>{item.text}</li>
                            ))}
                          </ul>
                        )}
                    </div>
                  </div>
                )}
                {bannerModule.bottomContent && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerModule.bottomContent),
                    }}
                  />
                )}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bannerBgImage.smallMobile}?auto=format,compress&w=800, ${bannerBgImage.smallMobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bannerBgImage.mobile}?auto=format,compress&w=800&q=85&sharp=5, ${bannerBgImage.mobile}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bannerBgImage.tablet}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerBgImage.tablet}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${bannerBgImage.desktop}?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${bannerBgImage.desktop}?auto=format,compress&w=2200&q=85&sharp=5`}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={bannerModule.backgroundImage.altText || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "boxGrid2":
        if (!boxGridModule2.enabled) return null;

        return (
          <div
            className={
              boxGridModule2.className ||
              "mod_box_grid viewport five-boxes container option-1 default no-bg wider"
            }
            data-s3-module
          >
            <div className="row">
              {boxGridModule2.contentBefore && (
                <div className="content-before">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(boxGridModule2.contentBefore),
                    }}
                  />
                </div>
              )}
              <div className="boxes wider">
                {boxGridModule2.boxes.map((box, index) => (
                  <div
                    key={index}
                    className={`box wow fadeInUp ${box.customClass || ""}`}
                  >
                    <h3>{box.title}</h3>
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
              {boxGridModule2.contentAfter && (
                <div className="content-after">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(boxGridModule2.contentAfter),
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
      {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}

      {sectionOrder.map((section, index) =>
        section.enabled ? (
          <React.Fragment key={index}>
            {renderSection(section.sectionType, section.enabled)}
          </React.Fragment>
        ) : null
      )}
    </main>
  );
};

export default SkinMedica;