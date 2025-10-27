// import React from "react";

// const DermalFillersPage: React.FC = () => {
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
//                     href="/medical-spa/dermal-fillers/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Dermal Fillers
//                   </a>
//                 </li>
//               </ul>
//               <h1>Dermal Fillers</h1>
//               <div className="text">
//                 <p>Smooth, Plump, and Shine with Dermal Filler Magic</p>
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
//                 srcSet="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Doctor working with patient"
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
//               <span className="small">Invest in Anti-Aging Treatments</span>
//               You're Worth it!
//             </h2>
//             <p>
//               Learn how to defy gravity in 30 minutes or less! Dermal fillers
//               are a remarkable and affordable way to achieve long-lasting,
//               immediate, natural results. If you want to improve the look of
//               smile lines, marionette lines, or chin wrinkles without looking
//               "done"—or worse, "overdone,"then dermal filler treatment at
//               Goldfingers Aesthetics is an excellent option!
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
//             <h2>Restore Your Youthful Radiance With Dermal Fillers</h2>
//             <div className="columns-two">
//               <div>
//                 <p>These fillers are ideal for:</p>
//                 <ul className="columns">
//                   <li>Plumping up the lips</li>
//                   <li>
//                     Softening deep lines and wrinkles in the nasolabial folds
//                   </li>
//                   <li>Volumizing sunken cheeks</li>
//                   <li>
//                     Filling smile lines around the mouth and tear troughs under
//                     your eyes.
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <p>
//                   Goldfingers Aesthetics &Plastic Surgery offers complimentary
//                   consultations to each patient to listen to your concerns and
//                   suggest the best product for the optimal outcome. Since there
//                   are so many dermal fillers and anti-aging injectables, it is
//                   best to consult our leading physicians to ensure you choose
//                   the best treatment for the desired results.
//                 </p>
//               </div>
//             </div>
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
//         <div className="row mt-30" data-api-key="content">
//           <div className="item">
//             <div className="columns-two vertical-align">
//               <div>
//                 <h2>
//                   What Can Dermal{" "}
//                   <span className="block-desktop">Fillers Be Used For?</span>
//                 </h2>
//               </div>
//               <div>
//                 <ul>
//                   <li>Acne scars</li>
//                   <li>Surgical scars</li>
//                   <li>Hand rejuvenation</li>
//                   <li>Facial lines, wrinkles, and furrows</li>
//                   <li>Lip augmentation to restore full and sensuous lips</li>
//                   <li>
//                     Cheek augmentation and facial contouring, including jawline,
//                     chin, and nose
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft "
//         data-s3-module
//       >
//         <div className="row half-image-row top-aligned mt-0">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009237-dermal-fillers.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="James working with his patient"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>Treatment Areas &Dermal Fillers</h2>
//                 <p>Choose your treatment area!</p>
//                 <ul className="columns">
//                   <li>
//                     <a href="/medical-spa/lips/">Lips</a>
//                   </li>
//                   <li>
//                     <a href="/medical-spa/hands/">Hands</a>
//                   </li>
//                   <li>
//                     <a href="/medical-spa/cheek-fillers/">Cheek fillers</a>
//                   </li>
//                   <li>
//                     <a href="/medical-spa/lines-and-wrinkles/">
//                       Lines &wrinkles
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/medical-spa/juvederm-volux/">Jawline</a>
//                   </li>
//                 </ul>
//                 <p>Here are some of the fillers you can choose from:</p>
//                 <ul className="columns">
//                   <li>KYBELLA ®&nbsp;</li>
//                   <li>SCULPTRA ®</li>
//                   <li>RESTYLANE ®</li>
//                   <li>JUVÉDERM ®XC</li>
//                   <li>JUVÉDERM ®VOLLURE</li>
//                   <li>JUVÉDERM ®VOLUMA XC</li>
//                   <li>JUVÉDERM VOLBELLA ®XC</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport  five-boxes  container option-1 default  bkg-image dark wider "
//         data-s3-module
//       >
//         <div className="row">
//           <div className="content-before">
//             <h2>Why Choose Goldfingers Aesthetics?</h2>
//             <p>
//               Discover the Goldfingers Aesthetics &Plastic Surgery difference in
//               dermal fillers. Our unwavering commitment to excellence,
//               experience, and refined injection techniques truly set us apart:
//             </p>
//           </div>
//           <div className="boxes wider">
//             <div className="box wow fadeInUp">
//               <h3>Dermal Filler Experts</h3>
//               <p>
//                 We specialize in the art of dermal fillers, offering you the
//                 expertise of practitioners who are skilled in enhancing your
//                 natural beauty with precision and finesse.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Over 25 Years of Aesthetic Experience</h3>
//               <p>
//                 With more than two decades in the aesthetics field, our
//                 experience is unmatched. Trust that you'll receive the highest
//                 quality care from seasoned professionals.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Top 1% in the Nation for BOTOX and Juvéderm</h3>
//               <p>
//                 Our exceptional reputation extends beyond dermal fillers. We are
//                 among the top 1% in the nation for BOTOX and Juvéderm
//                 treatments. Your satisfaction is our priority.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Largest Aesthetics Center in Florida</h3>
//               <p>
//                 With over 24 locations and growing, our accessibility and
//                 convenience are unparalleled. Experience the utmost convenience
//                 in your journey to beauty.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Allergan-Trained Facial Contour Aesthetic Injectors</h3>
//               <p>
//                 Our practitioners are trained by Allergan, showcasing our
//                 dedication to providing you with the best. Trust that your
//                 dermal filler experience is in expert hands.
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
//       <div className="mod_column viewport container" data-s3-module>
//         <div className="row mt-30 mb-30" data-api-key="content">
//           <div className="item">
//             <h2>What is Facial Contouring With Dermal Fillers?</h2>
//             <p>
//               Facial contouring is a customizable journey that holds the power
//               to address a multitude of concerns and reveal your best self.
//               Through the skilled application of treatments like fillers, fat
//               grafting, and other innovative techniques, we aim to achieve the
//               following goals:
//             </p>
//             <ul className="columns">
//               <li>
//                 Revitalized cheeks: Whether you're seeking to lift sagging
//                 cheeks or restore volume to hollow areas, our approach can help
//                 rejuvenate your appearance and restore youthful contours.
//               </li>
//               <li>
//                 Defined jawline: A lax jawline can be transformed into a
//                 sculpted masterpiece, enhancing your overall facial structure
//                 and elevating your profile.
//               </li>
//               <li>
//                 Elegantly sculpted cheekbones: The artistry of facial contouring
//                 allows us to create refined, well-defined cheekbones that
//                 enhance your facial symmetry.
//               </li>
//               <li>
//                 Restored temples: Hollow temples can be replenished with volume,
//                 lending a refreshed and youthful appearance to your entire face.
//               </li>
//               <li>
//                 Non-surgical nose reshaping: With precision and expertise, we
//                 can shape and refine your nose to achieve a more appealing and
//                 balanced facial harmony.
//               </li>
//               <li>
//                 Enhanced chin projection: A weak chin can be effortlessly
//                 transformed into a strong and balanced feature, completing your
//                 facial profile.
//               </li>
//             </ul>
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
//             <h2>Discover the Artistry of Facial Contouring &nbsp;</h2>
//             <p>
//               At Goldfingers Aesthetics &Plastic Surgery, we bring the artistry
//               of facial contouring to life through a range of transformative
//               treatments. Driven by an unwavering commitment to delivering
//               exceptional results, our practice, located across Florida,
//               specializes in the comprehensive enhancement of your facial
//               features. With an array of cutting-edge techniques and the mastery
//               that comes from years of experience, we strive to achieve natural,
//               stunning outcomes that harmoniously blend with your individual
//               beauty.
//             </p>
//             <p>
//               Dr. James Young and his team at Goldfingers Aesthetics &Plastic
//               Surgery bring over 25 years of expertise in aesthetics. As a
//               distinguished and trusted provider in Florida, our practice boasts
//               an extensive network of 24 locations and a reputation that places
//               us among the top 1% in the nation for BOTOX and Juvéderm
//               treatments. Our practitioners are not only highly skilled but also
//               Allergan-trained, ensuring your journey to enhanced facial harmony
//               is guided by excellence.
//             </p>
//             <p>
//               Choose Goldfingers Aesthetics &Plastic Surgery for your facial
//               contouring needs and experience the difference that exceptional
//               expertise, artistry, and dedication to your satisfaction can make.
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

//       {/* Page FAQ Module */}
//       <div className="mod_faq container" data-s3-module>
//         <div className="row ">
//           <div className="side">
//             <div className="sticky-side">
//               <h2>
//                 <span className="small">Dermal Fillers</span>
//                 FAQ
//               </h2>
//               <div className="list">
//                 <p>Are dermal fillers worth it?</p>
//                 <p>Are there any disadvantages to receiving dermal fillers?</p>
//                 <p>Am I a good candidate for dermal fillers?</p>
//                 <p>How long does it take for my dermal fillers to settle?</p>
//                 <p>What to avoid after receiving my dermal fillers?</p>
//                 <p>How long do dermal fillers take?</p>
//                 <p>How long do dermal fillers last?</p>
//                 <p>What to expect from my dermal fillers?</p>
//                 <p>How often should I get my dermal fillers touched up?</p>
//                 <p>
//                   Why is it important to continually receive dermal fillers?
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="questions">
//               <div className="question">
//                 <h2 className="js-exclude">Are dermal fillers worth it?</h2>
//                 <div className="answer">
//                   <p>
//                     Being able to reduce the appearance of unwanted lines and
//                     wrinkles safely is how successful dermal filler treatments
//                     work. Studies by the FDA have shown that generally, people
//                     who have received dermal fillers have reported being quite
//                     satisfied with the treatment results. Dermal fillers can
//                     also treat acne scars and help restore fat facial loss in
//                     certain areas and increase fullness.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">
//                   Are there any disadvantages to receiving dermal fillers?
//                 </h2>
//                 <div className="answer">
//                   <p>
//                     If not administered by a trained and licensed medical
//                     professional, patients can experience a lot of harmful risks
//                     associated with dermal fillers. For instance, lumps at the
//                     injection site, infections, and damage to the skin can
//                     result in scarring.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">
//                   Am I a good candidate for dermal fillers?
//                 </h2>
//                 <div className="answer">
//                   <p>
//                     The best and safest way to determine that you would be a
//                     good candidate for dermal fillers is to go in and receive a
//                     consultation with one of our licensed professionals. They
//                     will look at the areas of interest and make evaluations to
//                     ensure that the patient will not be at any harmful risk as a
//                     result of receiving the dermal fillers. If you have any
//                     bleeding disorders or specific allergies, you may not be a
//                     good patient for dermal filler treatments.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">
//                   How long does it take for my dermal fillers to settle?
//                 </h2>
//                 <div className="answer">
//                   <p>
//                     Immediately after receiving the dermal fillers, you will be
//                     able to see results and a difference in the area(s) that was
//                     treated. However, you will begin to see the dermal fillers
//                     fully settle in and experience the true results within the
//                     2-4 week mark after having received the injections.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">
//                   What to avoid after receiving my dermal fillers?
//                 </h2>
//                 <div className="answer">
//                   <p>
//                     Normally after receiving dermal fillers, patients can return
//                     to their normal activities. There are a few things that
//                     should be avoided, like facials, exposure to intense heat,
//                     strenuous exercise, and direct pressure on the area treated.
//                     It is also recommended to avoid alcohol and any oil-based
//                     makeup within 24 hours of treatment.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">How long do dermal fillers take?</h2>
//                 <div className="answer">
//                   <p>
//                     The injection procedure for dermal fillers typically takes
//                     5-30 minutes per area being injected. Usually, the injection
//                     site is numbed before the injection with a topical numbing
//                     cream and, in some instances, with a lidocaine injection.
//                     The time taken for this process does not include the time
//                     taken for the consultation that takes place prior to the
//                     injections, and the time taken for the consultation may
//                     vary.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">How long do dermal fillers last?</h2>
//                 <div className="answer">
//                   <p>
//                     The length of time may vary depending on the type of filler
//                     you receive. Some fillers may last 6-12 months; in areas
//                     with more facial movement, they tend to dissolve quicker. On
//                     the other hand, some fillers can last up to 12 months.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">
//                   What to expect from my dermal fillers?
//                 </h2>
//                 <div className="answer">
//                   <p>
//                     Immediately after receiving dermal fillers, some patients
//                     may experience slight swelling, bruising, and redness at the
//                     injection site. Patients may also experience temporary
//                     numbness or hypersensitivity reaction at the injection site.
//                     In some cases, patients may experience an "overfilled"
//                     appearance at the injection area, but as the dermal fillers
//                     settle, they will start to see a more natural appearance.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">
//                   How often should I get my dermal fillers touched up?
//                 </h2>
//                 <div className="answer">
//                   <p>
//                     The frequency of receiving touch-ups for your dermal fillers
//                     mainly depends on the type of filler and the area in which
//                     the filler was injected. Some areas require touch-ups every
//                     3-6 months, and some may be able to be stretched a little
//                     longer. However, to be sure which timeline works best for
//                     you, you should be sure to speak with your medical
//                     professional, and they will be able to better advise you on
//                     what is best.
//                   </p>
//                 </div>
//               </div>
//               <div className="question">
//                 <h2 className="js-exclude">
//                   Why is it important to continually receive dermal fillers?
//                 </h2>
//                 <div className="answer">
//                   <p>
//                     It is important to continually receive dermal fillers so
//                     that you can maintain the results achieved. In order to
//                     maintain fullness and reduce the appearance of lines and
//                     wrinkles, it is important to be consistent with treatments
//                     so that the dermal filler can continue to work. If you stop
//                     getting fillers, it is likely that the area that was treated
//                     will eventually return to its original state.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default DermalFillersPage;

"use client";

import React, { useEffect, useState } from "react";
import {
  fetchDermalFillersPageData,
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/medicalSpa/fetchDermalFillersPageData";

const DermalFillersPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const pageData = await fetchDermalFillersPageData();
      setData(pageData);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center p-4">No data available</div>;
  }

  const {
    heroSection,
    introSection,
    bannerSection1,
    columnSection1,
    halfImageSection,
    boxGridSection,
    columnSection2,
    bannerSection2,
    faqSection,
    sectionOrder,
    globalStyles,
    animationSettings,
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
                                aria-label={
                                  crumb.ariaLabel ||
                                  "Breadcrumbs to help navigate the user"
                                }
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
                    {heroSection.title || "Dermal Fillers"}
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
                    width="1920"
                    height="1206"
                    alt={heroMedia.alt || "Doctor working with patient"}
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
            className={`mod_intro container viewport ${
              introSection.customClasses || "option-1 wide wow fadeInUp"
            }`}
            data-s3-module
            key="intro"
            style={{
              backgroundColor: introSection.backgroundColor || undefined,
              color: introSection.textColor || undefined,
              paddingBottom: introSection.paddingBottom || undefined,
            }}
          >
            <div className="row pb-0">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width={introSection.logoWidth || "58"}
                    height={introSection.logoHeight || "64"}
                    loading="lazy"
                    alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="inner" data-api-key="content">
                {renderRichText(introSection.heading)}
                {renderRichText(introSection.content)}
              </div>
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
            className={`mod_banner dark hide-divider viewport ${
              bannerSection1.backgroundColorClass || "background-9"
            }`}
            data-s3-module
            key="bannerSection1"
            style={{
              backgroundColor: bannerSection1.backgroundColor || undefined,
              color: bannerSection1.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2 style={{ color: bannerSection1.headingColor || undefined }}>
                  {bannerSection1.heading ||
                    "Restore Your Youthful Radiance With Dermal Fillers"}
                </h2>
                {bannerSection1.useColumnsLayout ? (
                  <div className="columns-two">
                    <div>
                      {renderRichText(bannerSection1.leftColumn?.content)}
                    </div>
                    <div>
                      {renderRichText(bannerSection1.rightColumn?.content)}
                    </div>
                  </div>
                ) : (
                  <>
                    {renderRichText(bannerSection1.leftColumn?.content)}
                    {renderRichText(bannerSection1.rightColumn?.content)}
                  </>
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

      case "columnSection1":
        if (!columnSection1?.show) return null;

        return (
          <div
            className={`mod_column viewport container ${
              columnSection1.customClasses || ""
            }`}
            data-s3-module
            key="columnSection1"
            style={{
              backgroundColor: columnSection1.backgroundColor || undefined,
              color: columnSection1.textColor || undefined,
              marginTop: columnSection1.marginTop || "mt-30",
              marginBottom: columnSection1.marginBottom || undefined,
            }}
          >
            <div className="row" data-api-key="content">
              <div className="item">
                {columnSection1.useTwoColumns ? (
                  <div
                    className={
                      columnSection1.useVerticalAlign
                        ? "columns-two vertical-align"
                        : "columns-two"
                    }
                  >
                    <div>
                      {renderRichText(columnSection1.leftColumn?.content)}
                    </div>
                    <div>
                      {renderRichText(columnSection1.rightColumn?.content)}
                    </div>
                  </div>
                ) : (
                  <>
                    {renderRichText(columnSection1.leftColumn?.content)}
                    {renderRichText(columnSection1.rightColumn?.content)}
                  </>
                )}
              </div>
            </div>
          </div>
        );

      case "halfImageSection":
        if (!halfImageSection?.show) return null;
        const halfImg = getResponsiveImageUrls(halfImageSection?.image);
        const halfImgLeft = halfImageSection?.imagePosition === "left";
        const vertAlign = halfImageSection?.verticalAlignment || "top";

        return (
          <div
            className={`mod_half_image viewport half-image container ${
              halfImageSection.customClasses || "wow fadeInLeft"
            } ${halfImageSection.backgroundColorClass || ""}`}
            data-s3-module
            key="halfImageSection"
            style={{
              backgroundColor: halfImageSection.backgroundColor || undefined,
              color: halfImageSection.textColor || undefined,
              marginTop: halfImageSection.marginTop || "mt-0",
              marginBottom: halfImageSection.marginBottom || undefined,
            }}
          >
            <div
              className={`row half-image-row ${
                !halfImgLeft ? "flipped" : ""
              } ${vertAlign}-aligned`}
            >
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
                    alt={halfImg.alt || "Half image"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div
                className={halfImageSection.copyPadded ? "copy padded" : "copy"}
              >
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2
                      style={{
                        color: halfImageSection.headingColor || undefined,
                      }}
                    >
                      {halfImageSection.heading}
                    </h2>
                    {renderRichText(halfImageSection.content)}
                    {halfImageSection.treatmentAreaLinks &&
                      halfImageSection.treatmentAreaLinks.length > 0 && (
                        <ul className="columns">
                          {halfImageSection.treatmentAreaLinks.map(
                            (link: any, idx: number) => (
                              <li key={idx}>
                                <a href={link.url}>{link.label}</a>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    {halfImageSection.fillersList &&
                      halfImageSection.fillersList.length > 0 && (
                        <ul className="columns">
                          {halfImageSection.fillersList.map(
                            (filler: any, idx: number) => (
                              <li key={idx}>{filler.name}</li>
                            )
                          )}
                        </ul>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "boxGridSection":
        if (!boxGridSection?.show) return null;
        const boxGridBg = getResponsiveImageUrls(
          boxGridSection?.backgroundImage
        );

        return (
          <div
            className={`mod_box_grid viewport container ${
              boxGridSection.customClasses ||
              "five-boxes option-1 default bkg-image dark wider"
            }`}
            data-s3-module
            key="boxGridSection"
            style={{
              backgroundColor: boxGridSection.backgroundColor || undefined,
              color: boxGridSection.textColor || undefined,
            }}
          >
            <div className="row">
              <div className="content-before">
                <h2 style={{ color: boxGridSection.headingColor || undefined }}>
                  {boxGridSection.headingBefore ||
                    "Why Choose Goldfingers Aesthetics?"}
                </h2>
                {renderRichText(boxGridSection.contentBefore)}
              </div>
              <div className="boxes wider">
                {boxGridSection.boxes &&
                  boxGridSection.boxes.map((box: any, idx: number) => (
                    <div
                      className={`box ${box.animationClass || "wow fadeInUp"}`}
                      key={box.id || idx}
                      style={{
                        backgroundColor: box.backgroundColor || undefined,
                        color: box.textColor || undefined,
                      }}
                    >
                      <h3>{box.heading}</h3>
                      {renderRichText(box.content)}
                    </div>
                  ))}
              </div>
              <div className="content-after">
                {renderRichText(boxGridSection.contentAfter)}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxGridBg.mobile}, ${boxGridBg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxGridBg.tablet}, ${boxGridBg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxGridBg.desktop}, ${boxGridBg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={boxGridBg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={boxGridBg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="1726"
                alt={boxGridBg.alt || "Background media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "columnSection2":
        if (!columnSection2?.show) return null;

        return (
          <div
            className={`mod_column viewport container ${
              columnSection2.customClasses || ""
            }`}
            data-s3-module
            key="columnSection2"
            style={{
              backgroundColor: columnSection2.backgroundColor || undefined,
              color: columnSection2.textColor || undefined,
              marginTop: columnSection2.marginTop || "mt-30",
              marginBottom: columnSection2.marginBottom || "mb-30",
            }}
          >
            <div className="row" data-api-key="content">
              <div className="item">
                <h2 style={{ color: columnSection2.headingColor || undefined }}>
                  {columnSection2.heading ||
                    "What is Facial Contouring With Dermal Fillers?"}
                </h2>
                {renderRichText(columnSection2.content)}
              </div>
            </div>
          </div>
        );

      case "bannerSection2":
        if (!bannerSection2?.show) return null;
        const banner2Bg = getResponsiveImageUrls(
          bannerSection2?.backgroundImage
        );

        return (
          <div
            className={`mod_banner dark hide-divider viewport ${
              bannerSection2.backgroundColorClass || "background-1"
            }`}
            data-s3-module
            key="bannerSection2"
            style={{
              backgroundColor: bannerSection2.backgroundColor || undefined,
              color: bannerSection2.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2 style={{ color: bannerSection2.headingColor || undefined }}>
                  {bannerSection2.heading || "Discover the Artistry"}
                </h2>
                {renderRichText(bannerSection2.content)}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner2Bg.mobile}, ${banner2Bg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner2Bg.tablet}, ${banner2Bg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner2Bg.desktop}, ${banner2Bg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={banner2Bg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={banner2Bg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={banner2Bg.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "faqSection":
        if (!faqSection?.show) return null;

        return (
          <div
            className="mod_faq container"
            data-s3-module
            key="faqSection"
            style={{
              backgroundColor: faqSection.backgroundColor || undefined,
              color: faqSection.textColor || undefined,
            }}
          >
            <div className="row">
              <div
                className="side"
                style={{
                  backgroundColor:
                    faqSection.sidebarBackgroundColor || undefined,
                }}
              >
                <div className="sticky-side">
                  {renderRichText(faqSection.heading)}
                  <div className="list">
                    {faqSection.questions &&
                      faqSection.questions.map((q: any, idx: number) => (
                        <p
                          key={idx}
                          style={{
                            color: faqSection.questionColor || undefined,
                          }}
                        >
                          {q.question}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="questions">
                  {faqSection.questions &&
                    faqSection.questions.map((q: any, idx: number) => (
                      <div className="question" key={idx}>
                        <h2
                          className="js-exclude"
                          style={{
                            color: faqSection.questionColor || undefined,
                          }}
                        >
                          {q.question}
                        </h2>
                        <div
                          className="answer"
                          style={{
                            color: faqSection.answerColor || undefined,
                          }}
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
      {sectionOrder && sectionOrder.length > 0 ? (
        sectionOrder.map((section: any, idx: number) =>
          renderSection(section.section)
        )
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("intro")}
          {renderSection("bannerSection1")}
          {renderSection("columnSection1")}
          {renderSection("halfImageSection")}
          {renderSection("boxGridSection")}
          {renderSection("columnSection2")}
          {renderSection("bannerSection2")}
          {renderSection("faqSection")}
        </>
      )}
    </main>
  );
};

export default DermalFillersPage;
