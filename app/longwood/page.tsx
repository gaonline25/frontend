// import React from "react";

// const LongwoodContent = () => {
//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Hero Module */}
//       <div className="mod_hero banner mobile-stack" data-s3-module="">
//         <div className="wrapper">
//           <picture className="background">
//             {" "}
//             <source
//               media="(max-width:420px)"
//               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=630 2x"
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=630 2x"
//             />{" "}
//             <source
//               media="(max-width:800px)"
//               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1200 2x"
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1200 2x"
//             />{" "}
//             <source
//               media="(max-width:1400px)"
//               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=2100 2x"
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=2100 2x"
//             />{" "}
//             <source
//               srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
//             />{" "}
//             <img
//               src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&amp;w=1994"
//               loading="lazy"
//               data-lazyload="img"
//               width="1994"
//               height="1206"
//               alt="Background Texture"
//               draggable="false"
//               data-lazyload-loaded="true"
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
//                     href="/longwood/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Longwood
//                   </a>
//                 </li>
//               </ul>
//               <h1>
//                 <span className="small">
//                   Goldfingers Aesthetics &amp; Plastic Surgery in
//                 </span>{" "}
//                 Longwood
//               </h1>
//               <div className="text">
//                 <p>
//                   Indulge in the world of beauty and transformation at
//                   Goldfingers Aesthetics &amp; Plastic Surgery in Longwood. Our
//                   medical aesthetic services include an array of innovative
//                   treatments, from BOTOX® and Dysport® to Restylane® and
//                   Juvéderm®. Embark on a journey of rejuvenation and empowerment
//                   with us today. We offer super-competitive prices for BOTOX,
//                   with injections performed by Specialist Aesthetic Injectors.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               {" "}
//               <source
//                 media="(max-width:420px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=630 2x"
//               />{" "}
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=1200 2x"
//               />{" "}
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=2100 2x"
//               />{" "}
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=1920"
//               />{" "}
//               <img
//                 src="https://www.datocms-assets.com/105497/1694093618-longwood-banner.jpg?auto=format,compress&amp;w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="sunset over lake from boardwalk"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>
//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module="">
//         <div className="row mb-30" data-api-key="content">
//           <picture className="logo">
//             {" "}
//             <img
//               src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
//               width="58"
//               height="64"
//               loading="lazy"
//               alt="Goldfingers aesthetic logo"
//               draggable="false"
//               data-api-key="logo"
//             />
//           </picture>
//           <div className="item">
//             <div className="mw-80 text-center">
//               <h2>
//                 <span className="small">Artistry in aesthetics:</span>{" "}
//                 Goldfingers Aesthetics in Longwood
//               </h2>
//               <p>
//                 At Goldfingers Aesthetics in Longwood, we view every treatment
//                 as a piece of art. We have an unwavering commitment to employing
//                 advanced techniques in every procedure. Our mission is to
//                 deliver an exceptional experience and results you love.
//               </p>
//               <p>
//                 <a href="/longwood/medical-spa/" className="btn">
//                   Explore Our Medical Spa Services
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport    container option-3 single  bkg-image"
//         data-s3-module=""
//       >
//         <div className="row">
//           <div className="boxes">
//             <div
//               className="box wow fadeInUp"
//               style={{ visibility: "hidden", animationName: "none" }}
//             >
//               <h2>A legacy of aesthetic excellence</h2>
//               <p>
//                 With a legacy spanning over two decades, Goldfingers Aesthetics
//                 stands as a beacon of expertise in the aesthetics industry. Our
//                 rich history ensures that your treatments are not only effective
//                 but also safe and satisfying, ensuring the outcomes you desire.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Two Column Module */}
//       <div className="mod_columns_two viewport container" data-s3-module="">
//         <div className="row pb-20">
//           <div className="content vertical-align">
//             <div
//               className="item wow fadeInLeft"
//               data-api-key="content_left"
//               style={{ visibility: "hidden", animationName: "none" }}
//             >
//               <h2>The Nation's Top 1% for BOTOX and Juvéderm</h2>
//             </div>
//             <div
//               className="item wow fadeInRight"
//               data-api-key="content_right"
//               style={{ visibility: "hidden", animationName: "none" }}
//             >
//               <p>
//                 Goldfingers Aesthetics &amp; Plastic Surgery proudly stands
//                 among the top 1% of providers nationwide for BOTOX and Juvéderm
//                 treatments. This distinguished recognition underscores our
//                 unwavering commitment to excellence and our dedication to
//                 delivering remarkable outcomes to our esteemed patients.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft"
//         data-s3-module=""
//         style={{ visibility: "hidden", animationName: "none" }}
//       >
//         <div className="row half-image-row mt-0 mb-0">
//           <div className="media">
//             <picture className="background">
//               {" "}
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=630 2x"
//               />{" "}
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1200 2x"
//               />{" "}
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1400, https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=2100 2x"
//               />{" "}
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1832"
//               />{" "}
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="daisies and palm trees at sunset"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded2">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>Florida's premier aesthetics center</h2>
//                 <p>
//                   Our journey has led Goldfingers Aesthetics to become Florida's
//                   premier aesthetics center. With 24 locations spanning the
//                   region, and a growing network, our commitment to providing
//                   accessible, top-tier care remains steadfast, providing
//                   individuals seeking beauty and well-being with unparalleled
//                   services.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Two Column Module */}
//       <div className="mod_columns_two viewport container" data-s3-module="">
//         <div className="row pt-20">
//           <h2 data-api-key="title">
//             <span className="small">Meet Christopher Fratangelo, NP</span> Your
//             expert provider.{" "}
//           </h2>
//           <div className="content ">
//             <div
//               className="item wow fadeInLeft"
//               data-api-key="content_left"
//               style={{ visibility: "hidden", animationName: "none" }}
//             >
//               <p>
//                 Christopher Fratangelo, NP, is your dedicated provider at our
//                 Longwood location. Christopher is an authority in the field with
//                 an illustrious career marked by accomplishments and expertise.
//                 His leadership has contributed to Goldfingers Aesthetics &amp;
//                 Plastic Surgery, achieving the esteemed Top 1% in the Nation
//                 award from Allergan, the creators of BOTOX® Cosmetic.&nbsp;
//               </p>
//             </div>
//             <div
//               className="item wow fadeInRight"
//               data-api-key="content_right"
//               style={{ visibility: "hidden", animationName: "none" }}
//             >
//               <p>
//                 Experience a journey tailored to enhance your appearance at
//                 Goldfingers Aesthetics &amp; Plastic Surgery in Longwood. Our
//                 approach is characterized by empathy, compassion, and
//                 exceptional skills, ensuring your experience is empowering and
//                 positive. With decades of expertise, we design each procedure to
//                 cater to your individual needs, ensuring remarkable and
//                 natural-looking results.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-13"
//         data-s3-module=""
//       >
//         <div
//           className="row wow fadeInUp"
//           style={{ visibility: "hidden", animationName: "none" }}
//         >
//           <div className="content" data-api-key="top_content">
//             <h2 className="text-center">Our services in Longwood</h2>
//             <p className="text-center">
//               Discover an array of transformative treatments at Goldfingers
//               Aesthetics &amp; Plastic Surgery in Longwood:
//             </p>
//             <ul className="columns">
//               <li>
//                 <a href="/longwood/medical-spa/botox/">
//                   <strong>BOTOX</strong>
//                 </a>
//                 : Turn back time with age-defying injections that effortlessly
//                 erase lines and wrinkles, unveiling a revitalized and youthful
//                 visage.
//               </li>
//               <li>
//                 <a href="/longwood/medical-spa/facial-fillers/">
//                   <strong>Dermal Fillers</strong>
//                 </a>
//                 : Restore and enhance your innate beauty with dermal fillers,
//                 harmonizing features, softening lines, and refining facial
//                 contours.
//               </li>
//               <li>
//                 <a href="/medical-spa/hands/">
//                   <strong>Hand Rejuvenation</strong>
//                 </a>
//                 : Reclaim the youthful vibrancy of your hands with our
//                 rejuvenation treatments, addressing volume loss and improving
//                 skin texture.
//               </li>
//               <li>
//                 <a href="/medical-spa/face-lift/">
//                   <strong>Non-Surgical Facelift</strong>
//                 </a>
//                 : Elevate, tighten, and refresh your appearance without
//                 resorting to surgery through our transformative non-surgical
//                 facelift, rejuvenating your features.
//               </li>
//               <li>
//                 <a href="/medical-spa/permanent-makeup/">
//                   <strong>Permanent Makeup</strong>
//                 </a>
//                 : Embrace effortless elegance with our expertly applied
//                 permanent makeup, accentuating your features with a touch of
//                 natural-looking enhancement.
//               </li>
//               <li>
//                 <a href="/medical-spa/micro-channeling/">
//                   <strong>Micro-Channeling</strong>
//                 </a>
//                 : Stimulate collagen production and unveil radiant skin with our
//                 micro-channeling treatment, elevating your skin's texture and
//                 tone.
//               </li>
//               <li>
//                 <a href="/longwood/medical-spa/weight-loss/">
//                   <strong>Semaglutide Injections</strong>
//                 </a>
//                 : Explore the innovative path to weight management with
//                 semaglutide injections, a groundbreaking approach to overall
//                 wellness.
//               </li>
//               <li>
//                 <a href="/medical-spa/skincare-services/">
//                   <strong>Advanced Skincare</strong>
//                 </a>
//                 : Elevate your skincare routine with our range of advanced
//                 skincare products, designed to maintain and amplify the outcomes
//                 of your treatments.
//               </li>
//               <li>
//                 <a href="/longwood/medical-spa/spa-services/">
//                   <strong>Spa Services</strong>
//                 </a>
//                 : Explore our rejuvenating spa services, featuring acne facials,
//                 dermaplaning, microneedling with ProCell serum, medical-grade
//                 chemical peels, and permanent makeup.
//               </li>
//             </ul>
//           </div>
//         </div>
//         <picture className="background">
//           {" "}
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=1200 2x"
//           />{" "}
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=800&amp;q=85&amp;sharp=5, https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=1200&amp;q=85&amp;sharp=5 2x"
//           />{" "}
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=1400&amp;q=85&amp;sharp=5, https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=2100&amp;q=85&amp;sharp=5 2x"
//           />{" "}
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=2200&amp;q=85&amp;sharp=5"
//           />{" "}
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257095-banner-bgd-13.jpg?auto=format,compress&amp;w=2200&amp;q=85&amp;sharp=5"
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
//         <div className="row mt-30 pb-20" data-api-key="content">
//           <div className="item">
//             <h2>Transformative plastic surgery&nbsp;</h2>
//             <p>
//               Goldfingers Aesthetics &amp; Plastic Surgery in Longwood offers a
//               gateway to transformative plastic surgery treatments tailored to
//               your unique aesthetic aspirations. Under the skillful guidance of
//               Christopher Fratangelo, NP, our expert team specializes in modern
//               plastic surgery techniques, bringing over two decades of
//               experience to each procedure. Our AAAASF-certified surgical center
//               in Lake Mary provides a safe and state-of-the-art environment for
//               your transformation.
//             </p>
//             <ul className="columns">
//               <li>
//                 <a href="/plastic-surgery/breast-augmentation/">
//                   <strong>Breast Augmentation</strong>
//                 </a>
//                 : Enhance your silhouette with precision-placed implants,
//                 achieving your desired size and shape with remarkable artistry.
//               </li>
//               <li>
//                 <a href="/plastic-surgery/breast-lift/">
//                   <strong>Breast Lift</strong>
//                 </a>
//                 : Reclaim youthful contours and confidence through a breast
//                 lift, lifting and reshaping sagging breasts for a rejuvenated
//                 appearance.
//               </li>
//               <li>
//                 <a href="/plastic-surgery/breast-reduction/">
//                   <strong>Breast Reduction</strong>
//                 </a>
//                 : Find relief from discomfort and achieve balance with a breast
//                 reduction, reducing excess tissue for improved aesthetics and
//                 comfort.
//               </li>
//               <li>
//                 <a href="/plastic-surgery/breast-revision/">
//                   <strong>Breast Revision</strong>
//                 </a>
//                 : Correct past procedures with breast revision, addressing
//                 concerns and achieving your desired outcomes.
//               </li>
//               <li>
//                 <a href="/plastic-surgery/mommy-makeover/">
//                   <strong>Mommy Makeover</strong>
//                 </a>
//                 : Experience a comprehensive transformation with a mommy
//                 makeover, combining procedures to restore your confidence.
//               </li>
//               <li>
//                 <a href="/plastic-surgery/liposuction/">
//                   <strong>Liposuction</strong>
//                 </a>
//                 : Sculpt your body by removing stubborn fat deposits with
//                 liposuction, achieving smoother and more defined contours.
//               </li>
//               <li>
//                 <strong>8-Point Facelift:</strong> Rejuvenate your face with the
//                 transformative 8-point facelift, addressing multiple areas for a
//                 youthful appearance.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* Column Module */}
//       <div
//         className="mod_column viewport container has-media"
//         data-s3-module=""
//       >
//         <div className="row  media-left" data-api-key="content">
//           <div className="item">
//             <h2>You deserve superior care and results you love.</h2>
//             <p>
//               At Goldfingers Aesthetics &amp; Plastic Surgery in Longwood, we
//               redefine aesthetics through our commitment to excellence and our
//               passion for beauty. Your journey with us unfolds in a realm of
//               medical spa treatments and plastic surgery that empower you to
//               discover your unique allure. Join us in unveiling the
//               transformative possibilities that await you.
//             </p>
//           </div>
//           <picture className="media">
//             {" "}
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025407-accent-5.jpg?auto=format,compress&amp;w=420, https://www.datocms-assets.com/105497/1694025407-accent-5.jpg?auto=format,compress&amp;w=630 2x"
//             />{" "}
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025407-accent-5.jpg?auto=format,compress&amp;w=800, https://www.datocms-assets.com/105497/1694025407-accent-5.jpg?auto=format,compress&amp;w=1200 2x"
//             />{" "}
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025407-accent-5.jpg?auto=format,compress&amp;w=904"
//             />{" "}
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694025407-accent-5.jpg?auto=format,compress&amp;w=904"
//               loading="lazy"
//               data-lazyload="img"
//               width="904"
//               height="1062"
//               alt="dock on the ocean"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default LongwoodContent;




"use client";

import React, { useEffect, useState } from "react";
import {
  fetchLongwoodPageData,
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/locations/fetchLongwoodPageData";

// TypeScript interfaces for Payload CMS data structure
interface Image {
  mobile?: { id: string; url: string };
  tablet?: { id: string; url: string };
  desktop?: { id: string; url: string };
  large?: { id: string; url: string };
  alt: string;
}

interface Breadcrumb {
  label: string;
  url: string;
  ariaLabel?: string;
}

interface HeroSection {
  show: boolean;
  backgroundColor?: string;
  backgroundImage?: Image;
  breadcrumbs?: Breadcrumb[];
  title?: any; // richText can be string or Lexical JSON
  titleColor?: string;
  description?: any;
  descriptionColor?: string;
  mediaImage?: Image;
}

interface IntroColumnSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  logo?: { id: string; url: string; width?: number; height?: number };
  logoAlt?: string;
  heading?: any;
  headingColor?: string;
  content?: any;
  ctaButton?: {
    show: boolean;
    text?: string;
    url?: string;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
  };
}

interface BoxGridSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  boxes?: {
    heading: string;
    headingColor?: string;
    content?: any;
    textColor?: string;
  }[];
  backgroundImage?: Image;
}

interface TwoColumnSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  title?: any;
  titleColor?: string;
  columns?: { content: any; animationClass?: string; textColor?: string }[];
}

interface HalfImageSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  flipped?: boolean;
  heading?: string;
  headingColor?: string;
  content?: any;
  image?: Image;
}

interface BannerSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  backgroundImage?: Image;
  heading?: string;
  headingColor?: string;
  introContent?: any;
  servicesList?: {
    serviceName: string;
    serviceNameBold: boolean;
    serviceUrl?: string;
    description?: string;
    textColor?: string;
  }[];
  columnsLayout?: boolean;
}

interface PlasticSurgerySection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  heading?: string;
  headingColor?: string;
  content?: any;
  servicesList?: {
    serviceName: string;
    serviceNameBold: boolean;
    serviceUrl?: string;
    description?: string;
    textColor?: string;
  }[];
  columnsLayout?: boolean;
}

interface FinalColumnMedia {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  mediaPosition?: "left" | "right";
  heading?: string;
  headingColor?: string;
  content?: any;
  mediaImage?: Image;
}

interface SectionOrder {
  section: string;
}

interface GlobalStyles {
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  linkColor?: string;
  linkHoverColor?: string;
}

interface LongwoodPageData {
  heroSection: HeroSection;
  introColumnSection: IntroColumnSection;
  boxGridSection: BoxGridSection;
  twoColumnSection1: TwoColumnSection;
  halfImageSection: HalfImageSection;
  twoColumnSection2: TwoColumnSection;
  bannerSection: BannerSection;
  plasticSurgerySection: PlasticSurgerySection;
  finalColumnMedia: FinalColumnMedia;
  sectionOrder?: SectionOrder[];
  globalStyles?: GlobalStyles;
}

const LongwoodContent: React.FC = () => {
  const [data, setData] = useState<LongwoodPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const pageData = await fetchLongwoodPageData();
        console.log("Fetched Longwood data:", pageData);
        setData(pageData);
      } catch (error) {
        console.error("Error fetching Longwood data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!data) {
    console.error("No data fetched for Longwood page");
    return (
      <div className="text-center p-4">Error: Unable to load page content</div>
    );
  }

  const {
    heroSection,
    introColumnSection,
    boxGridSection,
    twoColumnSection1,
    halfImageSection,
    twoColumnSection2,
    bannerSection,
    plasticSurgerySection,
    finalColumnMedia,
    sectionOrder,
    globalStyles,
  } = data;

  const renderRichText = (content: any): JSX.Element | null => {
    if (!content) {
      console.log("renderRichText: Content is null or undefined");
      return null;
    }
    if (typeof content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    if (content && typeof content === "object" && content.root) {
      try {
        const html = lexicalToHtml(content);
        if (!html) {
          console.warn(
            "renderRichText: Empty HTML output for content",
            content
          );
        }
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      } catch (error) {
        console.error(
          "renderRichText: Error processing Lexical JSON",
          error,
          content
        );
        return null;
      }
    }
    console.warn("renderRichText: Unhandled content type", content);
    return null;
  };

  const renderSection = (sectionKey: string): JSX.Element | null => {
    console.log(`Rendering section: ${sectionKey}`);
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
            <div
              className="wrapper"
              style={{
                backgroundColor: heroSection.backgroundColor || undefined,
              }}
            >
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
                  {heroSection.breadcrumbs?.length > 0 && (
                    <ul className="partial_breadcrumb" data-s3-partial>
                      {heroSection.breadcrumbs.map((crumb, idx) => (
                        <li key={idx}>
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
                  {heroSection.title && (
                    <h1 style={{ color: heroSection.titleColor || undefined }}>
                      {renderRichText(heroSection.title)}
                    </h1>
                  )}
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
                </div>
              </div>
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={heroMedia.desktop}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={heroMedia.desktop}
                    loading="lazy"
                    data-lazyload="img"
                    width="1920"
                    height="1206"
                    alt={heroMedia.alt || "sunset over lake from boardwalk"}
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
            className="mod_column viewport container"
            data-s3-module
            key="introColumn"
            style={{
              backgroundColor: introColumnSection.backgroundColor || undefined,
            }}
          >
            <div className="row mb-30" data-api-key="content">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width={introColumnSection.logo?.width || "58"}
                    height={introColumnSection.logo?.height || "64"}
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
                  className="mw-80 text-center"
                  style={{ color: introColumnSection.textColor || undefined }}
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
                        {introColumnSection.ctaButton.text ||
                          "Explore Our Medical Spa Services"}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case "boxGrid":
        if (!boxGridSection?.show) return null;
        const boxBg = getResponsiveImageUrls(boxGridSection?.backgroundImage);

        return (
          <div
            className="mod_box_grid viewport container option-3 single bkg-image"
            data-s3-module
            key="boxGrid"
            style={{
              backgroundColor: boxGridSection.backgroundColor || undefined,
            }}
          >
            <div className="row">
              <div className="boxes">
                {boxGridSection.boxes?.map((box, idx) => (
                  <div
                    key={idx}
                    className="box wow fadeInUp"
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {box.heading && (
                      <h2 style={{ color: box.headingColor || undefined }}>
                        {box.heading}
                      </h2>
                    )}
                    {renderRichText(box.content)}
                  </div>
                ))}
              </div>
            </div>
            {boxBg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg.mobile}, ${boxBg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg.tablet}, ${boxBg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg.desktop}, ${boxBg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={boxBg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={boxBg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="802"
                  alt={boxBg.alt || "Background media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "twoColumn1":
        if (!twoColumnSection1?.show) return null;

        return (
          <div
            className="mod_columns_two viewport container"
            data-s3-module
            key="twoColumn1"
            style={{
              backgroundColor: twoColumnSection1.backgroundColor || undefined,
            }}
          >
            <div className="row pb-20">
              <div
                className="content vertical-align"
                style={{ color: twoColumnSection1.textColor || undefined }}
              >
                {twoColumnSection1.columns?.map((col, idx) => (
                  <div
                    key={idx}
                    className={`item wow ${
                      col.animationClass ||
                      (idx === 0 ? "fadeInLeft" : "fadeInRight")
                    }`}
                    data-api-key={`content_${idx === 0 ? "left" : "right"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {renderRichText(col.content)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "halfImage":
        if (!halfImageSection?.show) return null;
        const halfImg = getResponsiveImageUrls(halfImageSection?.image);

        return (
          <div
            className={`mod_half_image viewport half-image container wow fadeInLeft ${
              halfImageSection.flipped ? "flipped" : ""
            }`}
            data-s3-module
            key="halfImage"
            style={{
              backgroundColor: halfImageSection.backgroundColor || undefined,
              visibility: "hidden",
              animationName: "none",
            }}
          >
            <div className="row half-image-row mt-0 mb-0">
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
                    alt={halfImg.alt || "daisies and palm trees at sunset"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded2">
                <div className="inner">
                  <div
                    className="content"
                    data-api-key="content"
                    style={{ color: halfImageSection.textColor || undefined }}
                  >
                    {halfImageSection.heading && (
                      <h2
                        style={{
                          color: halfImageSection.headingColor || undefined,
                        }}
                      >
                        {halfImageSection.heading}
                      </h2>
                    )}
                    {renderRichText(halfImageSection.content)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "twoColumn2":
        if (!twoColumnSection2?.show) return null;

        return (
          <div
            className="mod_columns_two viewport container"
            data-s3-module
            key="twoColumn2"
            style={{
              backgroundColor: twoColumnSection2.backgroundColor || undefined,
            }}
          >
            <div className="row pt-20">
              {twoColumnSection2.title && (
                <h2
                  data-api-key="title"
                  style={{ color: twoColumnSection2.titleColor || undefined }}
                >
                  {renderRichText(twoColumnSection2.title)}
                </h2>
              )}
              <div
                className="content"
                style={{ color: twoColumnSection2.textColor || undefined }}
              >
                {twoColumnSection2.columns?.map((col, idx) => (
                  <div
                    key={idx}
                    className={`item wow ${
                      col.animationClass ||
                      (idx === 0 ? "fadeInLeft" : "fadeInRight")
                    }`}
                    data-api-key={`content_${idx === 0 ? "left" : "right"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {renderRichText(col.content)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "banner":
        if (!bannerSection?.show) return null;
        const bannerBg = getResponsiveImageUrls(bannerSection?.backgroundImage);

        return (
          <div
            className="mod_banner dark hide-divider viewport background-13"
            data-s3-module
            key="banner"
            style={{
              backgroundColor: bannerSection.backgroundColor || undefined,
            }}
          >
            <div
              className="row wow fadeInUp"
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection.heading && (
                  <h2
                    className="text-center"
                    style={{ color: bannerSection.headingColor || undefined }}
                  >
                    {bannerSection.heading}
                  </h2>
                )}
                {renderRichText(bannerSection.introContent)}
                {bannerSection.servicesList?.length > 0 && (
                  <ul className={bannerSection.columnsLayout ? "columns" : ""}>
                    {bannerSection.servicesList.map((service, idx) => (
                      <li
                        key={idx}
                        style={{ color: service.textColor || undefined }}
                      >
                        {service.serviceUrl ? (
                          <a href={service.serviceUrl}>
                            {service.serviceNameBold ? (
                              <strong>{service.serviceName}</strong>
                            ) : (
                              service.serviceName
                            )}
                          </a>
                        ) : service.serviceNameBold ? (
                          <strong>{service.serviceName}</strong>
                        ) : (
                          service.serviceName
                        )}
                        {service.description && `: ${service.description}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {bannerBg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${bannerBg.mobile}, ${bannerBg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${bannerBg.tablet}, ${bannerBg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${bannerBg.desktop}, ${bannerBg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={bannerBg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={bannerBg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="802"
                  alt={bannerBg.alt || "Banner media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "plasticSurgery":
        if (!plasticSurgerySection?.show) return null;

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="plasticSurgery"
            style={{
              backgroundColor:
                plasticSurgerySection.backgroundColor || undefined,
            }}
          >
            <div className="row mt-30 pb-20" data-api-key="content">
              <div
                className="item"
                style={{ color: plasticSurgerySection.textColor || undefined }}
              >
                {plasticSurgerySection.heading && (
                  <h2
                    style={{
                      color: plasticSurgerySection.headingColor || undefined,
                    }}
                  >
                    {plasticSurgerySection.heading}
                  </h2>
                )}
                {renderRichText(plasticSurgerySection.content)}
                {plasticSurgerySection.servicesList?.length > 0 && (
                  <ul
                    className={
                      plasticSurgerySection.columnsLayout ? "columns" : ""
                    }
                  >
                    {plasticSurgerySection.servicesList.map((service, idx) => (
                      <li
                        key={idx}
                        style={{ color: service.textColor || undefined }}
                      >
                        {service.serviceUrl ? (
                          <a href={service.serviceUrl}>
                            {service.serviceNameBold ? (
                              <strong>{service.serviceName}</strong>
                            ) : (
                              service.serviceName
                            )}
                          </a>
                        ) : service.serviceNameBold ? (
                          <strong>{service.serviceName}</strong>
                        ) : (
                          service.serviceName
                        )}
                        {service.description && `: ${service.description}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );

      case "finalColumnMedia":
        if (!finalColumnMedia?.show) return null;
        const finalMediaImg = getResponsiveImageUrls(
          finalColumnMedia?.mediaImage
        );

        return (
          <div
            className={`mod_column viewport container has-media`}
            data-s3-module
            key="finalColumnMedia"
            style={{
              backgroundColor: finalColumnMedia.backgroundColor || undefined,
            }}
          >
            <div
              className={`row media-${
                finalColumnMedia.mediaPosition || "left"
              }`}
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: finalColumnMedia.textColor || undefined }}
              >
                {finalColumnMedia.heading && (
                  <h2
                    style={{
                      color: finalColumnMedia.headingColor || undefined,
                    }}
                  >
                    {finalColumnMedia.heading}
                  </h2>
                )}
                {renderRichText(finalColumnMedia.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${finalMediaImg.mobile}, ${finalMediaImg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${finalMediaImg.tablet}, ${finalMediaImg.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={finalMediaImg.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={finalMediaImg.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={finalMediaImg.alt || "dock on the ocean"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      default:
        console.warn(`Unknown section: ${sectionKey}`);
        return null;
    }
  };

  return (
    <main id="main" style={{ color: globalStyles?.textColor || undefined }}>
      {sectionOrder && Array.isArray(sectionOrder) ? (
        sectionOrder.map((section, idx) => renderSection(section.section))
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("introColumn")}
          {renderSection("boxGrid")}
          {renderSection("twoColumn1")}
          {renderSection("halfImage")}
          {renderSection("twoColumn2")}
          {renderSection("banner")}
          {renderSection("plasticSurgery")}
          {renderSection("finalColumnMedia")}
        </>
      )}
    </main>
  );
};

export default LongwoodContent;