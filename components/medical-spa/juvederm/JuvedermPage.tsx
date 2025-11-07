// // import React from "react";

// // const JuvedermPage: React.FC = () => {
// //   return (
// //     <main id="main">
// //       {/* Page Layout */}
// //       {/* Hero Module */}
// //       <div className="mod_hero banner mobile-stack" data-s3-module>
// //         <div className="wrapper">
// //           <picture className="background">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/ png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
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
// //                     href="/medical-spa/juvederm/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Juvederm
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>JUVÉDERM</h1>
// //               <div className="text">
// //                 <p>Experience the Artistry of Ageless Elegance with JUVÉDERM</p>
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
// //                 srcSet="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1919"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1919"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1919"
// //                 width="1919"
// //                 height="1206"
// //                 alt="Doctor applying dermal fillers to patient"
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
// //             <h2>
// //               Easily Achieve The Natural
// //               <span className="block-desktop">Look You've Always Wanted</span>
// //             </h2>
// //             <p>
// //               As the #1 JUVÉDERM®dermal filler provider throughout Florida,
// //               Goldfingers Aesthetics has over 20 years of experience in the
// //               business. We offer complimentary consultations to each patient so
// //               we can listen to your concerns and suggest which filler product is
// //               best for your medical aesthetic goals. Contact us today to
// //               schedule a consultation and discover how the JUVÉDERM®collection
// //               can help you achieve your desired look!
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Column Module */}
// //       <div className="mod_column viewport container has-media" data-s3-module>
// //         <div className="row mb-30 media-left" data-api-key="content">
// //           <div className="item">
// //             <h2>
// //               What Is The{" "}
// //               <span className="block-desktop">JUVÉDERM Collection?</span>
// //             </h2>
// //             <p>
// //               Looking for a way to achieve subtle, long-lasting results that
// //               lift, smooth, or plump your skin? Look no further than the
// //               JUVÉDERM®collection of gel dermal fillers at Goldfingers
// //               Aesthetics! In just 30 minutes or less, you can defy gravity and
// //               achieve natural-looking results that last.
// //             </p>
// //             <p>
// //               Our expert physicians are here to help you choose the best
// //               treatment for your desired results. With so many types of dermal
// //               fillers and anti-aging injectables available, it's essential to
// //               consult with our leading physicians to ensure you get the best
// //               treatment for your needs.
// //             </p>
// //           </div>
// //           <picture className="media">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695223680-accent-1.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695223680-accent-1.jpg?auto=format,compress&w=630 2x"
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695223680-accent-1.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695223680-accent-1.jpg?auto=format,compress&w=1200 2x"
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1695223680-accent-1.jpg?auto=format,compress&w=904"
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1695223680-accent-1.jpg?auto=format,compress&w=904"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="904"
// //               height="1062"
// //               alt="wood flooring"
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       </div>

// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark hide-divider viewport background-2"
// //         data-s3-module
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2 className="text-center">
// //               <span className="small">
// //                 Goldfingers and The JUVÉDERM Collection:
// //               </span>
// //               The Perfect Pairing For Smooth Skin
// //             </h2>
// //             <p>
// //               Choosing the right provider for your JUVÉDERM treatment is a
// //               significant decision that can impact your results and overall
// //               experience. At Goldfingers Aesthetics & Plastic Surgery, we offer
// //               a level of expertise and commitment that sets us apart. Here's why
// //               you should choose us for your JUVÉDERM injections:
// //             </p>
// //             <ul className="columns">
// //               <li>
// //                 <strong>Decades of experience:</strong>
// //                 With over 25 years of aesthetic experience, our team brings a
// //                 wealth of knowledge to every treatment, ensuring your safety and
// //                 satisfaction.
// //               </li>
// //               <li>
// //                 <strong>Top 1% nationally:</strong>
// //                 Our reputation speaks for itself. We stand among the top 1%
// //                 nationwide for BOTOX and Juvéderm treatments, reflecting our
// //                 dedication to excellence.
// //               </li>
// //               <li>
// //                 <strong>Florida's largest aesthetics center:</strong>
// //                 As the largest aesthetics center in Florida, our extensive
// //                 network of over 24 locations offers convenience and
// //                 accessibility for your aesthetic journey.
// //               </li>
// //               <li>
// //                 <strong>Allergan-Trained injection experts:</strong>
// //                 Our practitioners are highly skilled and Allergan-trained,
// //                 ensuring you receive treatments guided by the latest techniques
// //                 and standards.
// //               </li>
// //               <li>
// //                 <strong>A comprehensive range of fillers:</strong>
// //                 We offer a wide range of JUVÉDERM fillers, allowing us to tailor
// //                 each treatment to your needs and desired results.
// //               </li>
// //             </ul>
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
// //         className="mod_box_grid viewport five-boxes container option-1 default no-bg wider"
// //         data-s3-module
// //       >
// //         <div className="row">
// //           <div className="content-before">
// //             <h2>JUVÉDERM Filler Options at Goldfingers Aesthetics</h2>
// //             <p>
// //               At Goldfingers Aesthetics, we believe that beauty is unique to
// //               each individual. That's why we blend artistry with expertise to
// //               create stunning, personalized results that reflect your unique
// //               beauty. Our preferred fillers include:
// //             </p>
// //           </div>
// //           <div className="boxes wider">
// //             <div className="box wow fadeInUp">
// //               <h3>JUVÉDERM VOLUMA XC</h3>
// //               <p>
// //                 Restore age-related volume deficit in the mid-face and enhance
// //                 your chin profile for a revitalized and harmonious appearance.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>JUVÉDERM VOLUX XC</h3>
// //               <p>
// //                 Define your jawline with precision, addressing moderate to
// //                 severe loss of definition to achieve a sculpted and youthful
// //                 look.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>JUVÉDERM VOLLURE XC</h3>
// //               <p>
// //                 Correct moderate to severe facial wrinkles and folds, such as
// //                 nasolabial folds, for a smoother and rejuvenated complexion.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>JUVÉDERM VOLBELLA XC</h3>
// //               <p>
// //                 Enhance your lips, correct perioral rhytids, and improve
// //                 infraorbital hollowing to achieve balanced and natural-looking
// //                 results.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>JUVÉDERM Ultra Plus XC and JUVÉDERM Ultra XC</h3>
// //               <p>
// //                 Correct moderate to severe facial wrinkles and folds, including
// //                 nasolabial folds, while offering lip augmentation options for
// //                 complete facial enhancement.
// //               </p>
// //             </div>
// //           </div>
// //           <div className="content-after">
// //             <p>
// //               We also offer <strong>JUVÉDERM®XC</strong> and{" "}
// //               <strong>JUVÉDERM VOLLURE™XC</strong> to smooth parentheses lines
// //               and wrinkles around the nose and mouth. These fillers add volume
// //               to the skin's surface for subtle, long-lasting results.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image viewport half-image container wow fadeInLeft background-navy"
// //         data-s3-module
// //       >
// //         <div className="row half-image-row top-aligned mt-0 mb-0">
// //           <div className="media">
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
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy padded2">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>Get The Perfect Pout With Juvederm</h2>
// //                 <p>
// //                   For those looking to enhance their lips, we offer the
// //                   JUVÉDERM®lip collection, which includes:
// //                 </p>
// //                 <ul className="columns">
// //                   <li>JUVÉDERM®XC</li>
// //                   <li>JUVÉDERM®VOLUMA XC</li>
// //                   <li>JUVÉDERM®VOLLURE</li>
// //                   <li>JUVÉDERM VOLBELLA®XC</li>
// //                 </ul>
// //                 <p>
// //                   Depending on your unique needs, these fillers can help achieve
// //                   a fuller appearance or smooth away vertical lip lines.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Two Column Module */}
// //       <div className="mod_columns_two viewport container" data-s3-module>
// //         <div className="row pb-0">
// //           <div className="content vertical-align">
// //             <div className="item wow fadeInLeft" data-api-key="content_left">
// //               <h2>
// //                 The Non-Surgical Way To Achieve A Natural-Looking Cheek Lift
// //               </h2>
// //             </div>
// //             <div className="item wow fadeInRight" data-api-key="content_right">
// //               <p>
// //                 If you want to lift and contour your cheeks, JUVÉDERM VOLUMA®XC
// //                 is the perfect choice. This filler adds volume beneath the
// //                 skin's surface to address age-related midface volume loss and
// //                 achieve a subtle, lasting lift.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Column Module */}
// //       <div className="mod_column viewport container has-media" data-s3-module>
// //         <div className="row mb-30 media-right" data-api-key="content">
// //           <div className="item">
// //             <h2>What is Allē®?</h2>
// //             <p>
// //               Allē®is a free rewards program that earns you points every time
// //               you get treated with one of the injectable gels from the
// //               JUVÉDERM®collection of fillers. To make things even easier,
// //               download the Allē®app for iPhone®, iPad®, and iPod touch®. With
// //               this app, you can:
// //             </p>
// //             <ul className="columns">
// //               <li>Register for the rewards program</li>
// //               <li>Access your account</li>
// //               <li>Learn how to earn points</li>
// //               <li>Review your points and reward history</li>
// //               <li>Create and redeem coupons for instant savings</li>
// //             </ul>
// //             <p>
// //               It's the perfect way to save money and keep track of your rewards
// //               all in one place!
// //             </p>
// //             <p>
// //               <a
// //                 href="https://apps.apple.com/us/app/brilliant-distinctions/id720207987"
// //                 target="_blank"
// //                 rel="noopener"
// //                 className="btn"
// //               >
// //                 Click Here to download the Allē app
// //               </a>
// //             </p>
// //           </div>
// //           <picture className="media">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=630 2x"
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=1200 2x"
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=904"
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=904"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="904"
// //               height="1062"
// //               alt="photo of Florida keys taken from the sky"
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       </div>

// //       {/* CTA General Module */}
// //       <div
// //         className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
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

// //       {/* Page FAQ Module */}
// //       <div className="mod_faq container" data-s3-module>
// //         <div className="row">
// //           <div className="side">
// //             <div className="sticky-side">
// //               <h2>
// //                 <span className="small">JUVÉDERM</span>
// //                 FAQ
// //               </h2>
// //               <div className="list">
// //                 <p>How long do the results of Juvéderm last?</p>
// //                 <p>Is Juvéderm safe for consumers?</p>
// //                 <p>How is the Juvéderm procedure done?</p>
// //                 <p>How many sessions of Juvéderm treatment should I get?</p>
// //                 <p>
// //                   What are some things to avoid after receiving Juvéderm
// //                   treatment?
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="content">
// //             <div className="questions">
// //               <div className="question">
// //                 <h2 className="js-exclude">
// //                   How long do the results of Juvéderm last?
// //                 </h2>
// //                 <div className="answer">
// //                   <p>
// //                     Juvéderm has a collection of different gels with results
// //                     that last approximately up to 12 months, with touch-up
// //                     treatments at the six to nine-month mark. It is essential to
// //                     receive continued treatment to continually reduce the
// //                     appearance of lines, wrinkles, and additional signs of
// //                     aging.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">Is Juvéderm safe for consumers?</h2>
// //                 <div className="answer">
// //                   <p>
// //                     When administered by a trained medical professional,
// //                     Juvéderm is generally safe. It is common to receive slight
// //                     bruises and temporary redness at the injection site after
// //                     treatment, which typically disappears within a day or two.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">
// //                   How is the Juvéderm procedure done?
// //                 </h2>
// //                 <div className="answer">
// //                   <p>
// //                     The medical personnel ensures that the treated area is
// //                     thoroughly cleansed, and then a topical injectable or
// //                     anesthetic is applied to the injection site. Then the
// //                     JUVÉDERM is carefully injected into the target areas.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">
// //                   How many sessions of Juvéderm treatment should I get?
// //                 </h2>
// //                 <div className="answer">
// //                   <p>
// //                     The need for additional treatment varies from patient to
// //                     patient. It mainly depends on a variety of factors and
// //                     desired goals, such as the severity of wrinkles, skin
// //                     elasticity, and dermal thickness at the injection site. Our
// //                     medical team will inform you of the need for multiple
// //                     sessions once the initial consultation is completed.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">
// //                   What are some things to avoid after receiving Juvéderm
// //                   treatment?
// //                 </h2>
// //                 <div className="answer">
// //                   <p>
// //                     During the first 24 hours after treatment, patients should
// //                     avoid strenuous exercise, extensive sun or heat exposure,
// //                     and consumption of alcoholic beverages. Exposure to any
// //                     factors may lead to swelling, temporary redness, or itching
// //                     at the injection site.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default JuvedermPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchJuvedermPageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
//   getImageUrl,
// } from "@/lib/api/medicalSpa/fetchJuvedermPageData";

// const JuvedermPage: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       const pageData = await fetchJuvedermPageData();
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
//     introSection,
//     columnSection1,
//     bannerSection1,
//     boxGridSection,
//     halfImageSection,
//     twoColumnSection,
//     columnSection2,
//     ctaGeneralSection,
//     faqSection,
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
//             className="mod_hero banner mobile-stack"
//             data-s3-module
//             key="hero"
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
//                     {heroSection.title || "JUVÉDERM"}
//                   </h1>
//                   {heroSection.description && (
//                     <div
//                       className="text"
//                       style={{
//                         color: heroSection.descriptionColor || undefined,
//                       }}
//                     >
//                       {renderRichText(heroSection.description)}
//                     </div>
//                   )}
//                   {heroSection.ctaButton?.show && (
//                     <div className="text">
//                       <p>
//                         <a
//                           className={
//                             heroSection.ctaButton.buttonClasses || "btn white"
//                           }
//                           href={heroSection.ctaButton.url || "/contact/"}
//                           role="button"
//                           style={{
//                             backgroundColor:
//                               heroSection.ctaButton.backgroundColor ||
//                               undefined,
//                             color: heroSection.ctaButton.textColor || undefined,
//                           }}
//                         >
//                           {heroSection.ctaButton.text || "Book an Appointment"}
//                         </a>
//                       </p>
//                     </div>
//                   )}
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
//                     width="1919"
//                     height="1206"
//                     alt={
//                       heroMedia.alt ||
//                       "Doctor applying dermal fillers to patient"
//                     }
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//         );

//       case "intro":
//         if (!introSection?.show) return null;
//         const introLogo = getImageUrl(introSection?.logo);

//         return (
//           <div
//             className="mod_intro container viewport option-1 wide wow fadeInUp"
//             data-s3-module
//             key="intro"
//           >
//             <div className="row pb-0">
//               {introLogo && (
//                 <picture className="logo">
//                   <img
//                     src={introLogo}
//                     width="58"
//                     height="64"
//                     loading="lazy"
//                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}
//               <div className="inner" data-api-key="content">
//                 <h2>
//                   {introSection.heading ||
//                     "Easily Achieve The Natural Look You've Always Wanted"}
//                 </h2>
//                 {renderRichText(introSection.content)}
//               </div>
//             </div>
//           </div>
//         );

//       case "columnSection1":
//         if (!columnSection1?.show) return null;
//         const col1Media = getResponsiveImageUrls(columnSection1?.mediaImage);

//         return (
//           <div
//             className="mod_column viewport container has-media"
//             data-s3-module
//             key="columnSection1"
//           >
//             <div className="row mb-30 media-left" data-api-key="content">
//               <div className="item">
//                 <h2>
//                   {columnSection1.heading || "What Is The JUVÉDERM Collection?"}
//                 </h2>
//                 {renderRichText(columnSection1.content)}
//               </div>
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col1Media.mobile}, ${col1Media.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col1Media.tablet}, ${col1Media.tablet} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={col1Media.desktop}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={col1Media.desktop}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="904"
//                   height="1062"
//                   alt={col1Media.alt || "wood flooring"}
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         );

//       case "bannerSection1":
//         if (!bannerSection1?.show) return null;
//         const banner1Bg = getResponsiveImageUrls(
//           bannerSection1?.backgroundImage
//         );

//         return (
//           <div
//             className="mod_banner dark hide-divider viewport background-2"
//             data-s3-module
//             key="bannerSection1"
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 <h2 className="text-center">
//                   {bannerSection1.subheading && (
//                     <span className="small">{bannerSection1.subheading}</span>
//                   )}
//                   {bannerSection1.heading ||
//                     "The Perfect Pairing For Smooth Skin"}
//                 </h2>
//                 {renderRichText(bannerSection1.content)}
//                 {bannerSection1.bulletPoints &&
//                   Array.isArray(bannerSection1.bulletPoints) && (
//                     <ul className="columns">
//                       {bannerSection1.bulletPoints.map(
//                         (bullet: any, idx: number) => (
//                           <li key={idx}>{renderRichText(bullet.content)}</li>
//                         )
//                       )}
//                     </ul>
//                   )}
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner1Bg.mobile}, ${banner1Bg.mobile} 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner1Bg.tablet}, ${banner1Bg.tablet} 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner1Bg.desktop}, ${banner1Bg.desktop} 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={banner1Bg.large}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={banner1Bg.large}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={banner1Bg.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "boxGridSection":
//         if (!boxGridSection?.show) return null;

//         return (
//           <div
//             className="mod_box_grid viewport five-boxes container option-1 default no-bg wider"
//             data-s3-module
//             key="boxGridSection"
//           >
//             <div className="row">
//               <div className="content-before">
//                 <h2>
//                   {boxGridSection.heading ||
//                     "JUVÉDERM Filler Options at Goldfingers Aesthetics"}
//                 </h2>
//                 {renderRichText(boxGridSection.contentBefore)}
//               </div>
//               <div className="boxes wider">
//                 {boxGridSection.boxes &&
//                   Array.isArray(boxGridSection.boxes) &&
//                   boxGridSection.boxes.map((box: any, idx: number) => (
//                     <div
//                       className={`box ${box.animationClass || "wow fadeInUp"}`}
//                       key={box.id || idx}
//                     >
//                       <h3>{box.title || "Box Title"}</h3>
//                       {renderRichText(box.content)}
//                     </div>
//                   ))}
//               </div>
//               <div className="content-after">
//                 {renderRichText(boxGridSection.contentAfter)}
//               </div>
//             </div>
//           </div>
//         );

//       case "halfImageSection":
//         if (!halfImageSection?.show) return null;
//         const halfImg = getResponsiveImageUrls(halfImageSection?.image);

//         return (
//           <div
//             className="mod_half_image viewport half-image container wow fadeInLeft background-navy"
//             data-s3-module
//             key="halfImageSection"
//           >
//             <div className="row half-image-row top-aligned mt-0 mb-0">
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImg.mobile}, ${halfImg.mobile} 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImg.tablet}, ${halfImg.tablet} 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${halfImg.desktop}, ${halfImg.desktop} 2x`}
//                   />
//                   <source
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={halfImg.large}
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src={halfImg.large}
//                     loading="lazy"
//                     data-lazyload="img"
//                     width="1832"
//                     height="1824"
//                     alt={halfImg.alt || "Brunnette woman looking in mirror"}
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div className="copy padded2">
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     <h2>
//                       {halfImageSection.heading ||
//                         "Get The Perfect Pout With Juvederm"}
//                     </h2>
//                     {renderRichText(halfImageSection.content)}
//                     {halfImageSection.bulletPoints &&
//                       Array.isArray(halfImageSection.bulletPoints) && (
//                         <ul className="columns">
//                           {halfImageSection.bulletPoints.map(
//                             (bullet: any, idx: number) => (
//                               <li key={idx}>{bullet.text || "Bullet"}</li>
//                             )
//                           )}
//                         </ul>
//                       )}
//                     {renderRichText(halfImageSection["after content"])}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "twoColumnSection":
//         if (!twoColumnSection?.show) return null;

//         return (
//           <div
//             className="mod_columns_two viewport container"
//             data-s3-module
//             key="twoColumnSection"
//           >
//             <div className="row pb-0">
//               <div className="content vertical-align">
//                 <div
//                   className="item wow fadeInLeft"
//                   data-api-key="content_left"
//                 >
//                   {renderRichText(twoColumnSection.leftColumn)}
//                 </div>
//                 <div
//                   className="item wow fadeInRight"
//                   data-api-key="content_right"
//                 >
//                   {renderRichText(twoColumnSection.rightColumn)}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "columnSection2":
//         if (!columnSection2?.show) return null;
//         const col2Media = getResponsiveImageUrls(columnSection2?.mediaImage);

//         return (
//           <div
//             className="mod_column viewport container has-media"
//             data-s3-module
//             key="columnSection2"
//           >
//             <div className="row mb-30 media-right" data-api-key="content">
//               <div className="item">
//                 <h2>{columnSection2.heading || "What is Allē?"}</h2>
//                 {renderRichText(columnSection2.content)}
//                 {columnSection2.bulletPoints &&
//                   Array.isArray(columnSection2.bulletPoints) && (
//                     <ul className="columns">
//                       {columnSection2.bulletPoints.map(
//                         (bullet: any, idx: number) => (
//                           <li key={idx}>{bullet.text || "Bullet"}</li>
//                         )
//                       )}
//                     </ul>
//                   )}
//                 {renderRichText(columnSection2["after content"])}
//                 {columnSection2.ctaButton?.show && (
//                   <p>
//                     <a
//                       href={columnSection2.ctaButton.url || "#"}
//                       target={columnSection2.ctaButton.target || "_blank"}
//                       rel="noopener"
//                       className="btn"
//                       style={{
//                         backgroundColor:
//                           columnSection2.ctaButton.backgroundColor || undefined,
//                         color: columnSection2.ctaButton.textColor || undefined,
//                       }}
//                     >
//                       {columnSection2.ctaButton.text || "Click Here"}
//                     </a>
//                   </p>
//                 )}
//               </div>
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col2Media.mobile}, ${col2Media.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col2Media.tablet}, ${col2Media.tablet} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={col2Media.desktop}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={col2Media.desktop}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="904"
//                   height="1062"
//                   alt={
//                     col2Media.alt || "photo of Florida keys taken from the sky"
//                   }
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         );

//       case "ctaGeneralSection":
//         if (!ctaGeneralSection?.show) return null;

//         return (
//           <div
//             className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
//             data-s3-module
//             key="ctaGeneralSection"
//           >
//             <div className="row">
//               <div className="text">
//                 <h2>
//                   {ctaGeneralSection.headingLink ? (
//                     <a href={ctaGeneralSection.headingLink}>
//                       {ctaGeneralSection.heading || "Schedule a Consultation"}
//                     </a>
//                   ) : (
//                     ctaGeneralSection.heading || "Schedule a Consultation"
//                   )}
//                 </h2>
//                 <a
//                   href={ctaGeneralSection.ctaButton.url || "/contact/"}
//                   className={
//                     ctaGeneralSection.ctaButton.buttonClasses || "btn white"
//                   }
//                   style={{
//                     backgroundColor:
//                       ctaGeneralSection.ctaButton.backgroundColor || undefined,
//                     color: ctaGeneralSection.ctaButton.textColor || undefined,
//                   }}
//                 >
//                   {ctaGeneralSection.ctaButton.text || "Book an Appointment"}
//                 </a>
//               </div>
//               <div className="media"></div>
//             </div>
//           </div>
//         );

//       case "faqSection":
//         if (!faqSection?.show) return null;

//         return (
//           <div className="mod_faq container" data-s3-module key="faqSection">
//             <div className="row">
//               <div
//                 className="side"
//                 style={{
//                   backgroundColor:
//                     faqSection.sidebarBackgroundColor || undefined,
//                 }}
//               >
//                 <div className="sticky-side">
//                   <h2 style={{ color: faqSection.headingColor || undefined }}>
//                     {faqSection.subheading && (
//                       <span className="small">{faqSection.subheading}</span>
//                     )}
//                     {faqSection.heading || "FAQ"}
//                   </h2>
//                   {faqSection.questions &&
//                     Array.isArray(faqSection.questions) && (
//                       <div className="list">
//                         {faqSection.questions.map((q: any, idx: number) => (
//                           <p
//                             key={idx}
//                             style={{
//                               color: faqSection.questionColor || undefined,
//                             }}
//                           >
//                             {q.question || "Question"}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                 </div>
//               </div>
//               <div className="content">
//                 <div className="questions">
//                   {faqSection.questions &&
//                     Array.isArray(faqSection.questions) &&
//                     faqSection.questions.map((q: any, idx: number) => (
//                       <div className="question" key={idx}>
//                         <h2
//                           className="js-exclude"
//                           style={{
//                             color: faqSection.questionColor || undefined,
//                           }}
//                         >
//                           {q.question || "Question"}
//                         </h2>
//                         <div
//                           className="answer"
//                           style={{ color: faqSection.answerColor || undefined }}
//                         >
//                           {renderRichText(q.answer)}
//                         </div>
//                       </div>
//                     ))}
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
//           {renderSection("intro")}
//           {renderSection("columnSection1")}
//           {renderSection("bannerSection1")}
//           {renderSection("boxGridSection")}
//           {renderSection("halfImageSection")}
//           {renderSection("twoColumnSection")}
//           {renderSection("columnSection2")}
//           {renderSection("ctaGeneralSection")}
//           {renderSection("faqSection")}
//         </>
//       )}
//     </main>
//   );
// };

// export default JuvedermPage;

"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/medicalSpa/fetchJuvedermPageData";

const JuvedermPage: React.FC<{ data: any }> = ({ data }) => {
  if (!data) {
    return <div className="text-center p-4">No data available</div>;
  }

  const {
    heroSection,
    introSection,
    columnSection1,
    bannerSection1,
    boxGridSection,
    halfImageSection,
    twoColumnSection,
    columnSection2,
    ctaGeneralSection,
    faqSection,
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
            className="mod_hero banner mobile-stack"
            data-s3-module
            key="hero"
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
                    {heroSection.title || "JUVÉDERM"}
                  </h1>
                  {heroSection.description && (
                    <div
                      className="text"
                      style={{
                        color: heroSection.descriptionColor || undefined,
                      }}
                    >
                      {renderRichText(heroSection.description)}
                    </div>
                  )}
                  {heroSection.ctaButton?.show && (
                    <div className="text">
                      <p>
                        <a
                          className={
                            heroSection.ctaButton.buttonClasses || "btn white"
                          }
                          href={heroSection.ctaButton.url || "/contact/"}
                          role="button"
                          style={{
                            backgroundColor:
                              heroSection.ctaButton.backgroundColor ||
                              undefined,
                            color: heroSection.ctaButton.textColor || undefined,
                          }}
                        >
                          {heroSection.ctaButton.text || "Book an Appointment"}
                        </a>
                      </p>
                    </div>
                  )}
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
                    width="1919"
                    height="1206"
                    alt={
                      heroMedia.alt ||
                      "Doctor applying dermal fillers to patient"
                    }
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "intro":
        if (!introSection?.show) return null;
        const introLogo = getImageUrl(introSection?.logo);

        return (
          <div
            className="mod_intro container viewport option-1 wide wow fadeInUp"
            data-s3-module
            key="intro"
          >
            <div className="row pb-0">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width="58"
                    height="64"
                    loading="lazy"
                    alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="inner" data-api-key="content">
                <h2>
                  {introSection.heading ||
                    "Easily Achieve The Natural Look You've Always Wanted"}
                </h2>
                {renderRichText(introSection.content)}
              </div>
            </div>
          </div>
        );

      case "columnSection1":
        if (!columnSection1?.show) return null;
        const col1Media = getResponsiveImageUrls(columnSection1?.mediaImage);

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="columnSection1"
          >
            <div className="row mb-30 media-left" data-api-key="content">
              <div className="item">
                <h2>
                  {columnSection1.heading || "What Is The JUVÉDERM Collection?"}
                </h2>
                {renderRichText(columnSection1.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col1Media.mobile}, ${col1Media.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col1Media.tablet}, ${col1Media.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={col1Media.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={col1Media.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={col1Media.alt || "wood flooring"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "bannerSection1":
        if (!bannerSection1?.show) return null;
        const banner1Bg = getResponsiveImageUrls(
          bannerSection1?.backgroundImage
        );

        return (
          <div
            className="mod_banner dark hide-divider viewport background-2"
            data-s3-module
            key="bannerSection1"
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2 className="text-center">
                  {bannerSection1.subheading && (
                    <span className="small">{bannerSection1.subheading}</span>
                  )}
                  {bannerSection1.heading ||
                    "The Perfect Pairing For Smooth Skin"}
                </h2>
                {renderRichText(bannerSection1.content)}
                {bannerSection1.bulletPoints &&
                  Array.isArray(bannerSection1.bulletPoints) && (
                    <ul className="columns">
                      {bannerSection1.bulletPoints.map(
                        (bullet: any, idx: number) => (
                          <li key={idx}>{renderRichText(bullet.content)}</li>
                        )
                      )}
                    </ul>
                  )}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner1Bg.mobile}, ${banner1Bg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner1Bg.tablet}, ${banner1Bg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner1Bg.desktop}, ${banner1Bg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={banner1Bg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={banner1Bg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={banner1Bg.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "boxGridSection":
        if (!boxGridSection?.show) return null;

        return (
          <div
            className="mod_box_grid viewport five-boxes container option-1 default no-bg wider"
            data-s3-module
            key="boxGridSection"
          >
            <div className="row">
              <div className="content-before">
                <h2>
                  {boxGridSection.heading ||
                    "JUVÉDERM Filler Options at Goldfingers Aesthetics"}
                </h2>
                {renderRichText(boxGridSection.contentBefore)}
              </div>
              <div className="boxes wider">
                {boxGridSection.boxes &&
                  Array.isArray(boxGridSection.boxes) &&
                  boxGridSection.boxes.map((box: any, idx: number) => (
                    <div
                      className={`box ${box.animationClass || "wow fadeInUp"}`}
                      key={box.id || idx}
                    >
                      <h3>{box.title || "Box Title"}</h3>
                      {renderRichText(box.content)}
                    </div>
                  ))}
              </div>
              <div className="content-after">
                {renderRichText(boxGridSection.contentAfter)}
              </div>
            </div>
          </div>
        );

      case "halfImageSection":
        if (!halfImageSection?.show) return null;
        const halfImg = getResponsiveImageUrls(halfImageSection?.image);

        return (
          <div
            className="mod_half_image viewport half-image container wow fadeInLeft background-navy"
            data-s3-module
            key="halfImageSection"
          >
            <div className="row half-image-row top-aligned mt-0 mb-0">
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg.mobile}, ${halfImg.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg.tablet}, ${halfImg.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg.desktop}, ${halfImg.desktop} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={halfImg.large}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={halfImg.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="1832"
                    height="1824"
                    alt={halfImg.alt || "Brunnette woman looking in mirror"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded2">
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2>
                      {halfImageSection.heading ||
                        "Get The Perfect Pout With Juvederm"}
                    </h2>
                    {renderRichText(halfImageSection.content)}
                    {halfImageSection.bulletPoints &&
                      Array.isArray(halfImageSection.bulletPoints) && (
                        <ul className="columns">
                          {halfImageSection.bulletPoints.map(
                            (bullet: any, idx: number) => (
                              <li key={idx}>{bullet.text || "Bullet"}</li>
                            )
                          )}
                        </ul>
                      )}
                    {renderRichText(halfImageSection["after content"])}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "twoColumnSection":
        if (!twoColumnSection?.show) return null;

        return (
          <div
            className="mod_columns_two viewport container"
            data-s3-module
            key="twoColumnSection"
          >
            <div className="row pb-0">
              <div className="content vertical-align">
                <div
                  className="item wow fadeInLeft"
                  data-api-key="content_left"
                >
                  {renderRichText(twoColumnSection.leftColumn)}
                </div>
                <div
                  className="item wow fadeInRight"
                  data-api-key="content_right"
                >
                  {renderRichText(twoColumnSection.rightColumn)}
                </div>
              </div>
            </div>
          </div>
        );

      case "columnSection2":
        if (!columnSection2?.show) return null;
        const col2Media = getResponsiveImageUrls(columnSection2?.mediaImage);

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="columnSection2"
          >
            <div className="row mb-30 media-right" data-api-key="content">
              <div className="item">
                <h2>{columnSection2.heading || "What is Allē?"}</h2>
                {renderRichText(columnSection2.content)}
                {columnSection2.bulletPoints &&
                  Array.isArray(columnSection2.bulletPoints) && (
                    <ul className="columns">
                      {columnSection2.bulletPoints.map(
                        (bullet: any, idx: number) => (
                          <li key={idx}>{bullet.text || "Bullet"}</li>
                        )
                      )}
                    </ul>
                  )}
                {renderRichText(columnSection2["after content"])}
                {columnSection2.ctaButton?.show && (
                  <p>
                    <a
                      href={columnSection2.ctaButton.url || "#"}
                      target={columnSection2.ctaButton.target || "_blank"}
                      rel="noopener"
                      className="btn"
                      style={{
                        backgroundColor:
                          columnSection2.ctaButton.backgroundColor || undefined,
                        color: columnSection2.ctaButton.textColor || undefined,
                      }}
                    >
                      {columnSection2.ctaButton.text || "Click Here"}
                    </a>
                  </p>
                )}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col2Media.mobile}, ${col2Media.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col2Media.tablet}, ${col2Media.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={col2Media.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={col2Media.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={
                    col2Media.alt || "photo of Florida keys taken from the sky"
                  }
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "ctaGeneralSection":
        if (!ctaGeneralSection?.show) return null;

        return (
          <div
            className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
            data-s3-module
            key="ctaGeneralSection"
          >
            <div className="row">
              <div className="text">
                <h2>
                  {ctaGeneralSection.headingLink ? (
                    <a href={ctaGeneralSection.headingLink}>
                      {ctaGeneralSection.heading || "Schedule a Consultation"}
                    </a>
                  ) : (
                    ctaGeneralSection.heading || "Schedule a Consultation"
                  )}
                </h2>
                <a
                  href={ctaGeneralSection.ctaButton.url || "/contact/"}
                  className={
                    ctaGeneralSection.ctaButton.buttonClasses || "btn white"
                  }
                  style={{
                    backgroundColor:
                      ctaGeneralSection.ctaButton.backgroundColor || undefined,
                    color: ctaGeneralSection.ctaButton.textColor || undefined,
                  }}
                >
                  {ctaGeneralSection.ctaButton.text || "Book an Appointment"}
                </a>
              </div>
              <div className="media"></div>
            </div>
          </div>
        );

      case "faqSection":
        if (!faqSection?.show) return null;

        return (
          <div className="mod_faq container" data-s3-module key="faqSection">
            <div className="row">
              <div
                className="side"
                style={{
                  backgroundColor:
                    faqSection.sidebarBackgroundColor || undefined,
                }}
              >
                <div className="sticky-side">
                  <h2 style={{ color: faqSection.headingColor || undefined }}>
                    {faqSection.subheading && (
                      <span className="small">{faqSection.subheading}</span>
                    )}
                    {faqSection.heading || "FAQ"}
                  </h2>
                  {faqSection.questions &&
                    Array.isArray(faqSection.questions) && (
                      <div className="list">
                        {faqSection.questions.map((q: any, idx: number) => (
                          <p
                            key={idx}
                            style={{
                              color: faqSection.questionColor || undefined,
                            }}
                          >
                            {q.question || "Question"}
                          </p>
                        ))}
                      </div>
                    )}
                </div>
              </div>
              <div className="content">
                <div className="questions">
                  {faqSection.questions &&
                    Array.isArray(faqSection.questions) &&
                    faqSection.questions.map((q: any, idx: number) => (
                      <div className="question" key={idx}>
                        <h2
                          className="js-exclude"
                          style={{
                            color: faqSection.questionColor || undefined,
                          }}
                        >
                          {q.question || "Question"}
                        </h2>
                        <div
                          className="answer"
                          style={{ color: faqSection.answerColor || undefined }}
                        >
                          {renderRichText(q.answer)}
                        </div>
                      </div>
                    ))}
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
          {renderSection("intro")}
          {renderSection("columnSection1")}
          {renderSection("bannerSection1")}
          {renderSection("boxGridSection")}
          {renderSection("halfImageSection")}
          {renderSection("twoColumnSection")}
          {renderSection("columnSection2")}
          {renderSection("ctaGeneralSection")}
          {renderSection("faqSection")}
        </>
      )}
    </main>
  );
};

export default JuvedermPage;