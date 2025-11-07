// // import React from "react";

// // const RestylanePageComponent: React.FC = () => {
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
// //                     href="/medical-spa/restylane/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Restylane
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>Restylane</h1>
// //               <div className="text">
// //                 <p>Effortless Beauty, Timeless Results With Restylane</p>
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
// //                 srcSet="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1920"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="Woman receiving facial injection"
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
// //               Unlock the Secret to Age-Defying Beauty with Restylane Fillers
// //             </h2>
// //             <p>
// //               At Goldfingers Aesthetics, we proudly offer our valued patients
// //               the Restylane family of fillers. With a wide range of products
// //               tailored to address various facial concerns, Restylane
// //               consistently delivers natural-looking results that enhance your
// //               beauty while maintaining your unique features. Whether you're
// //               seeking smoother skin, fuller lips, or facial contouring, our
// //               skilled injectors at Goldfingers Aesthetics are here to help you
// //               look and feel your best!
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image  viewport half-image container wow fadeInLeft "
// //         data-s3-module
// //       >
// //         <div className="row half-image-row top-aligned mt-0">
// //           <div className="media">
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
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy ">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>Timeless Beauty, Effortlessly Yours</h2>
// //                 <p>
// //                   The Restylane ®collection comprises hyaluronic acid gel
// //                   fillers designed for personalized facial enhancements. What
// //                   sets this injectable line apart is the innovative XpresHAn
// //                   Technology ™, which preserves your natural facial expressions.
// //                   Your smiles, laughter, frowns, and kisses will appear and feel
// //                   soft and authentically you.
// //                 </p>
// //                 <p>
// //                   Under the guidance of renowned aesthetic practitioner Dr.
// //                   Young, you can anticipate stunning results. Dr. Young's
// //                   exceptional skills have earned him the prestigious
// //                   Presidential Champion Award for 2017 from Galderma,
// //                   recognizing him as one of the foremost Restylane, Dysport ®,
// //                   and Sculptra aesthetic injectors in the country.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark  hide-divider viewport background-1"
// //         data-s3-module
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2 className="text-center">
// //               The Goldfingers Aesthetics Difference
// //             </h2>
// //             <p>
// //               At Goldfingers Aesthetics &amp;Plastic Surgery, we combine
// //               extensive training, years of clinical experience, and a passion
// //               for artistic enhancement to provide exceptional facial contouring
// //               results that enhance your natural beauty. Here are some reasons
// //               why you should choose us:
// //             </p>
// //             <ul className="columns">
// //               <li>
// //                 <strong>Expert Practitioners:</strong>
// //                 Our skilled and certified practitioners are extensively trained
// //                 in administering Restylane treatments, ensuring safe and precise
// //                 injections that deliver natural-looking results.
// //               </li>
// //               <li>
// //                 <strong>Years of Experience:</strong>
// //                 With over two decades of experience in the aesthetics industry,
// //                 we have honed our craft and mastered the art of facial
// //                 contouring with Restylane, providing you with the highest
// //                 quality care.
// //               </li>
// //               <li>
// //                 <strong>Personalized Approach:</strong>
// //                 We understand that every face is unique, and we tailor our
// //                 treatments to enhance your features, ensuring a result that
// //                 harmonizes with your natural beauty.
// //               </li>
// //               <li>
// //                 <strong>Cutting-Edge Techniques:</strong>
// //                 Our practice stays at the forefront of the latest advancements
// //                 in facial contouring techniques and Restylane products, offering
// //                 you the most innovative and effective solutions.
// //               </li>
// //               <li>
// //                 <strong>Patient-Centered Care:</strong>
// //                 Your comfort, safety, and satisfaction are our top priorities.
// //                 We provide a warm and welcoming environment where you can
// //                 confidently discuss your goals and concerns.
// //               </li>
// //               <li>
// //                 <strong>Comprehensive Consultation:</strong>
// //                 Our in-depth consultations allow us to understand your desires
// //                 and design a customized treatment plan that aligns with your
// //                 aesthetic goals.
// //               </li>
// //               <li>
// //                 <strong>Beautiful, Natural Results:</strong>
// //                 Our commitment to delivering subtle, natural results means
// //                 you'll leave our practice feeling refreshed and rejuvenated
// //                 without an overly done appearance.
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200 2x"
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
// //           />
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// //           />
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
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
// //         className="mod_box_grid viewport   seven-boxes container option-1 default  no-bg wider "
// //         data-s3-module
// //       >
// //         <div className="row">
// //           <div className="content-before">
// //             <h2>
// //               Our Favorite Restylane{" "}
// //               <span className="block-desktop">Facial Fillers</span>
// //             </h2>
// //             <p>
// //               With over 30 million treatments worldwide and counting, the
// //               Restylane line of hyaluronic dermal fillers provides
// //               natural-looking results:
// //             </p>
// //           </div>
// //           <div className="boxes wider">
// //             <div className="box wow fadeInUp">
// //               <h2>Restylane Lyft</h2>
// //               <p>
// //                 Restylane Lyft is a trusted and versatile dermal filler within
// //                 the Restylane family, renowned for its ability to address
// //                 various facial concerns. With its unique formulation of
// //                 hyaluronic acid, Restylane Lyft provides lasting volume and
// //                 lift, making it an excellent choice for:
// //               </p>
// //               <ul className="columns">
// //                 <li>Enhancing cheeks</li>
// //                 <li>Smoothing nasolabial folds</li>
// //                 <li>Rejuvenating the hands</li>
// //                 <li>Restoring lost volume</li>
// //                 <li>Refining facial contours</li>
// //               </ul>
// //               <p>
// //                 Its adaptability and natural results set it apart. Lyft helps
// //                 individuals achieve a more youthful and refreshed appearance. It
// //                 offers minimal downtime, allowing patients to quickly return to
// //                 their daily routines with enhanced confidence and a revitalized
// //                 look.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Restylane Defyne</h3>
// //               <p>
// //                 Defyne addresses deeper facial wrinkles and lines while
// //                 preserving natural movement and facial expressions. Its advanced
// //                 XpresHAn Technology ™allows for a flexible yet long-lasting
// //                 correction, making it an ideal choice for smoothing nasolabial
// //                 folds and marionette lines. Restylane Defyne offers a harmonious
// //                 balance between effective wrinkle correction and maintaining a
// //                 lifelike appearance, ensuring that your smiles, laughs, and
// //                 other expressions remain naturally you.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Restylane Refyne</h3>
// //               <p>
// //                 Refyne is revered for its exceptional ability to address
// //                 moderate to severe facial wrinkles and lines while preserving
// //                 natural facial expressions. Thanks to its cutting-edge XpresHAn
// //                 Technology ™, Restylane Refyne offers a unique balance between
// //                 effective correction and maintaining natural movement, making it
// //                 an excellent choice for smoothing nasolabial folds and
// //                 marionette lines. This advanced filler provides a soft and
// //                 natural-looking result, ensuring that your facial expressions,
// //                 including smiles and frowns, remain genuine.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Restylane Kysse</h3>
// //               <p>
// //                 Restylane Kysse stands out as a premier lip filler in the
// //                 Restylane line, prized for its exceptional ability to enhance
// //                 and redefine the lips while maintaining a remarkably natural
// //                 feel and appearance. Its innovative XpresHAn Technology ™ensures
// //                 that your lips remain soft, flexible, and expressive, allowing
// //                 for a harmonious blend of volume and movement. Whether you
// //                 desire fuller, more luscious lips or want to redefine your lip
// //                 borders, Restylane Kysse offers precise and long-lasting
// //                 results.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Restylane Silk</h3>
// //               <p>
// //                 Silk is designed specifically to enhance the delicate and
// //                 sensitive areas around the lips and mouth. Recognized for its
// //                 precision and finesse, Restylane Silk is a go-to choice for
// //                 those seeking subtle yet impactful improvements in lip volume,
// //                 fine lines, and wrinkles. With its unique formulation of
// //                 hyaluronic acid, this filler offers a natural and soft look,
// //                 ensuring that the results blend seamlessly with the surrounding
// //                 skin.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Restylane Contour</h3>
// //               <p>
// //                 Contour sculpts and redefines facial contours with precision and
// //                 elegance. This advanced filler, formulated with hyaluronic acid,
// //                 offers tailored solutions for enhancing cheekbones, restoring
// //                 volume, and refining facial symmetry. What sets Restylane
// //                 Contour apart is its capacity to provide natural-looking results
// //                 that harmonize with an individual's unique features. With FDA
// //                 approval for cheek augmentation and mid-face contour correction
// //                 in adults over 21, Restylane Contour is a trusted choice for
// //                 those seeking to rejuvenate their appearance without surgery.
// //               </p>
// //             </div>
// //             <div className="box wow fadeInUp">
// //               <h3>Restylane ®</h3>
// //               <p>
// //                 Restylane ®, as the original hyaluronic acid gel dermal filler,
// //                 has consistently set the standard for safe and effective
// //                 aesthetic enhancements. Comprising hyaluronic acid, Restylane
// //                 ®has been a trusted choice for individuals seeking to combat the
// //                 signs of aging and enhance their facial features. Whether
// //                 softening wrinkles, adding volume to the lips, or restoring
// //                 youthful contours, Restylane ®offers a comprehensive range of
// //                 products to cater to diverse aesthetic needs.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Column Module */}
// //       <div className="mod_column viewport container has-media" data-s3-module>
// //         <div className="row pt-0 mb-30 media-right" data-api-key="content">
// //           <div className="item">
// //             <h2>14 Locations To Serve You</h2>
// //             <p>
// //               Goldfingers Aesthetics has 14 locations throughout Florida to
// //               serve you. Looking for a place where you can enhance your look
// //               most naturally? At Goldfingers Aesthetics, we are proud of our
// //               reputation for excellence in injectables, including the Restylane
// //               line of fillers. You can find a location near you and experience
// //               superior care and beautiful results:
// //             </p>
// //             <div className="columns-three">
// //               <div>
// //                 <ul>
// //                   <li>Clearwater</li>
// //                   <li>Clermont</li>
// //                   <li>Daytona Beach</li>
// //                   <li>Orlando</li>
// //                   <li>Lake Mary</li>
// //                 </ul>
// //               </div>
// //               <div>
// //                 <ul>
// //                   <li>Longwood</li>
// //                   <li>Mount Dora</li>
// //                   <li>New Smyrna</li>
// //                   <li>Ocala</li>
// //                   <li>Port Orange</li>
// //                 </ul>
// //               </div>
// //               <div>
// //                 <ul>
// //                   <li>Safety Harbor</li>
// //                   <li>Tampa</li>
// //                   <li>The Villages</li>
// //                   <li>Winter Park</li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //           <picture className="media">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=630 2x"
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=1200 2x"
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=904"
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=904"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="904"
// //               height="1062"
// //               alt="white sand beach"
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       </div>

// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark  hide-divider viewport background-12"
// //         data-s3-module
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2 className="text-center">Perks &amp;Rewards</h2>
// //             <div className="columns-two">
// //               <div>
// //                 <p>
// //                   Make your Restylane treatments even more rewarding experiences
// //                   by joining ASPIRE Galderma Rewards. We give you simple ways to
// //                   earn exclusive rewards, bonuses, and discounts throughout your
// //                   facial aesthetic journey. Points are earned for treatments
// //                   with the entire Galderma portfolio, including:
// //                 </p>
// //               </div>
// //               <div>
// //                 <ul className="columns mt-0">
// //                   <li>Restylane ®Silk</li>
// //                   <li>Restylane ®Lyft</li>
// //                   <li>Restylane ®</li>
// //                   <li>Restylane ®Refyne</li>
// //                   <li>Restylane ®Defyne</li>
// //                   <li>
// //                     Sculptra ®Aesthetic and Dysport ®* (abobotulinumtoxinA)
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=1200 2x"
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
// //           />
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// //           />
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1693257090-banner-bgd-12.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// //             loading="lazy"
// //             data-lazyload="img"
// //             width="2200"
// //             height="802"
// //             alt="Banner media"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default RestylanePageComponent;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchRestylanePageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
//   getImageUrl,
// } from "@/lib/api/medicalSpa/fetchRestylanePageData";

// const RestylanePageComponent: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       const pageData = await fetchRestylanePageData();
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
//     halfImageSection,
//     bannerSection1,
//     boxGridSection,
//     columnSection,
//     bannerSection2,
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
//                     {heroSection.title || "Restylane"}
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
//                           className="btn white"
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
//                     width="1920"
//                     height="1206"
//                     alt={heroMedia.alt || "Woman receiving facial injection"}
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
//             <div className="row">
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
//                     "Unlock the Secret to Age-Defying Beauty with Restylane Fillers"}
//                 </h2>
//                 {renderRichText(introSection.content)}
//               </div>
//             </div>
//           </div>
//         );

//       case "halfImageSection":
//         if (!halfImageSection?.show) return null;
//         const halfImg = getResponsiveImageUrls(halfImageSection?.image);

//         return (
//           <div
//             className="mod_half_image viewport half-image container wow fadeInLeft"
//             data-s3-module
//             key="halfImageSection"
//           >
//             <div className="row half-image-row top-aligned mt-0">
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
//                     alt={halfImg.alt || "Woman in robe looking at mirror"}
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div className="copy">
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     <h2>
//                       {halfImageSection.heading ||
//                         "Timeless Beauty, Effortlessly Yours"}
//                     </h2>
//                     {renderRichText(halfImageSection.content)}
//                   </div>
//                 </div>
//               </div>
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
//             className="mod_banner dark hide-divider viewport background-1"
//             data-s3-module
//             key="bannerSection1"
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 <h2 className="text-center">
//                   {bannerSection1.heading ||
//                     "The Goldfingers Aesthetics Difference"}
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
//             className="mod_box_grid viewport seven-boxes container option-1 default no-bg wider"
//             data-s3-module
//             key="boxGridSection"
//           >
//             <div className="row">
//               <div className="content-before">
//                 <h2>
//                   {boxGridSection.heading ||
//                     "Our Favorite Restylane Facial Fillers"}
//                 </h2>
//                 {renderRichText(boxGridSection.subheading)}
//               </div>
//               <div className="boxes wider">
//                 {boxGridSection.boxes &&
//                   Array.isArray(boxGridSection.boxes) &&
//                   boxGridSection.boxes.map((box: any, idx: number) => (
//                     <div
//                       className={`box ${box.animationClass || "wow fadeInUp"}`}
//                       key={idx}
//                     >
//                       <h3>{box.title || "Box Title"}</h3>
//                       {renderRichText(box.content)}
//                       {box.bulletPoints && Array.isArray(box.bulletPoints) && (
//                         <ul className="columns">
//                           {box.bulletPoints.map((bullet: any, bIdx: number) => (
//                             <li key={bIdx}>{bullet.text || "Bullet"}</li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         );

//       case "columnSection":
//         if (!columnSection?.show) return null;
//         const colMedia = getResponsiveImageUrls(columnSection?.mediaImage);

//         return (
//           <div
//             className="mod_column viewport container has-media"
//             data-s3-module
//             key="columnSection"
//           >
//             <div className="row pt-0 mb-30 media-right" data-api-key="content">
//               <div className="item">
//                 <h2>{columnSection.heading || "14 Locations To Serve You"}</h2>
//                 {renderRichText(columnSection.content)}
//                 {columnSection.locationColumns &&
//                   Array.isArray(columnSection.locationColumns) && (
//                     <div className="columns-three">
//                       {columnSection.locationColumns.map(
//                         (col: any, idx: number) => (
//                           <div key={idx}>
//                             <ul>
//                               {col.locations &&
//                                 Array.isArray(col.locations) &&
//                                 col.locations.map((loc: any, lIdx: number) => (
//                                   <li key={lIdx}>
//                                     <a href={loc.url || "#"}>
//                                       {loc.name || "Location"}
//                                     </a>
//                                   </li>
//                                 ))}
//                             </ul>
//                           </div>
//                         )
//                       )}
//                     </div>
//                   )}
//               </div>
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${colMedia.mobile}, ${colMedia.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${colMedia.tablet}, ${colMedia.tablet} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={colMedia.desktop}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={colMedia.desktop}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="904"
//                   height="1062"
//                   alt={colMedia.alt || "white sand beach"}
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         );

//       case "bannerSection2":
//         if (!bannerSection2?.show) return null;
//         const banner2Bg = getResponsiveImageUrls(
//           bannerSection2?.backgroundImage
//         );

//         return (
//           <div
//             className="mod_banner dark hide-divider viewport background-12"
//             data-s3-module
//             key="bannerSection2"
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 <h2 className="text-center">
//                   {bannerSection2.heading || "Perks & Rewards"}
//                 </h2>
//                 {bannerSection2.contentColumns &&
//                   Array.isArray(bannerSection2.contentColumns) && (
//                     <div className="columns-two">
//                       {bannerSection2.contentColumns.map(
//                         (col: any, idx: number) => (
//                           <div key={idx}>
//                             {renderRichText(col.content)}
//                             {col.bulletPoints &&
//                               Array.isArray(col.bulletPoints) && (
//                                 <ul className="columns mt-0">
//                                   {col.bulletPoints.map(
//                                     (bullet: any, bIdx: number) => (
//                                       <li key={bIdx}>
//                                         {bullet.text || "Bullet"}
//                                       </li>
//                                     )
//                                   )}
//                                 </ul>
//                               )}
//                           </div>
//                         )
//                       )}
//                     </div>
//                   )}
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner2Bg.mobile}, ${banner2Bg.mobile} 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner2Bg.tablet}, ${banner2Bg.tablet} 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner2Bg.desktop}, ${banner2Bg.desktop} 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={banner2Bg.large}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={banner2Bg.large}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={banner2Bg.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
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
//           {renderSection("halfImageSection")}
//           {renderSection("bannerSection1")}
//           {renderSection("boxGridSection")}
//           {renderSection("columnSection")}
//           {renderSection("bannerSection2")}
//         </>
//       )}
//     </main>
//   );
// };

// export default RestylanePageComponent;

"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/medicalSpa/fetchRestylanePageData";

interface RestylanePageData {
  heroSection?: {
    show?: boolean;
    backgroundImage?: any;
    mediaImage?: any;
    breadcrumbs?: Array<{ label: string; url: string; ariaLabel?: string }>;
    title?: string;
    titleColor?: string;
    titleFontSize?: string;
    description?: any;
    descriptionColor?: string;
    ctaButton?: {
      show?: boolean;
      text?: string;
      url?: string;
      backgroundColor?: string;
      textColor?: string;
    };
  };
  introSection?: {
    show?: boolean;
    logo?: any;
    logoAlt?: string;
    heading?: string;
    content?: any;
  };
  halfImageSection?: {
    show?: boolean;
    image?: any;
    heading?: string;
    content?: any;
  };
  bannerSection1?: {
    show?: boolean;
    backgroundImage?: any;
    heading?: string;
    content?: any;
    bulletPoints?: Array<{ content?: any }>;
  };
  boxGridSection?: {
    show?: boolean;
    heading?: string;
    subheading?: any;
    boxes?: Array<{
      title?: string;
      content?: any;
      bulletPoints?: Array<{ text?: string }>;
      animationClass?: string;
    }>;
  };
  columnSection?: {
    show?: boolean;
    heading?: string;
    content?: any;
    mediaImage?: any;
    locationColumns?: Array<{
      locations?: Array<{ name?: string; url?: string }>;
    }>;
  };
  bannerSection2?: {
    show?: boolean;
    backgroundImage?: any;
    heading?: string;
    contentColumns?: Array<{
      content?: any;
      bulletPoints?: Array<{ text?: string }>;
    }>;
  };
  sectionOrder?: Array<{ section: string }>;
  globalStyles?: {
    fontFamily?: string;
    textColor?: string;
  };
  accessibilitySettings?: {
    skipToContent?: boolean;
  };
}

interface RestylanePageComponentProps {
  data: RestylanePageData | null;
}

const RestylanePageComponent: React.FC<RestylanePageComponentProps> = ({
  data,
}) => {
  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">
          Unable to load Restylane page content.
        </p>
      </main>
    );
  }

  const {
    heroSection,
    introSection,
    halfImageSection,
    bannerSection1,
    boxGridSection,
    columnSection,
    bannerSection2,
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
                    {heroSection.title || "Restylane"}
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
                          className="btn white"
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
                    alt={heroMedia.alt || "Woman receiving facial injection"}
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
            <div className="row">
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
                    "Unlock the Secret to Age-Defying Beauty with Restylane Fillers"}
                </h2>
                {renderRichText(introSection.content)}
              </div>
            </div>
          </div>
        );

      case "halfImageSection":
        if (!halfImageSection?.show) return null;
        const halfImg = getResponsiveImageUrls(halfImageSection?.image);

        return (
          <div
            className="mod_half_image viewport half-image container wow fadeInLeft"
            data-s3-module
            key="halfImageSection"
          >
            <div className="row half-image-row top-aligned mt-0">
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
                    alt={halfImg.alt || "Woman in robe looking at mirror"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy">
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2>
                      {halfImageSection.heading ||
                        "Timeless Beauty, Effortlessly Yours"}
                    </h2>
                    {renderRichText(halfImageSection.content)}
                  </div>
                </div>
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
            className="mod_banner dark hide-divider viewport background-1"
            data-s3-module
            key="bannerSection1"
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2 className="text-center">
                  {bannerSection1.heading ||
                    "The Goldfingers Aesthetics Difference"}
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
            className="mod_box_grid viewport seven-boxes container option-1 default no-bg wider"
            data-s3-module
            key="boxGridSection"
          >
            <div className="row">
              <div className="content-before">
                <h2>
                  {boxGridSection.heading ||
                    "Our Favorite Restylane Facial Fillers"}
                </h2>
                {renderRichText(boxGridSection.subheading)}
              </div>
              <div className="boxes wider">
                {boxGridSection.boxes &&
                  Array.isArray(boxGridSection.boxes) &&
                  boxGridSection.boxes.map((box: any, idx: number) => (
                    <div
                      className={`box ${box.animationClass || "wow fadeInUp"}`}
                      key={idx}
                    >
                      <h3>{box.title || "Box Title"}</h3>
                      {renderRichText(box.content)}
                      {box.bulletPoints && Array.isArray(box.bulletPoints) && (
                        <ul className="columns">
                          {box.bulletPoints.map((bullet: any, bIdx: number) => (
                            <li key={bIdx}>{bullet.text || "Bullet"}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      case "columnSection":
        if (!columnSection?.show) return null;
        const colMedia = getResponsiveImageUrls(columnSection?.mediaImage);

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="columnSection"
          >
            <div className="row pt-0 mb-30 media-right" data-api-key="content">
              <div className="item">
                <h2>{columnSection.heading || "14 Locations To Serve You"}</h2>
                {renderRichText(columnSection.content)}
                {columnSection.locationColumns &&
                  Array.isArray(columnSection.locationColumns) && (
                    <div className="columns-three">
                      {columnSection.locationColumns.map(
                        (col: any, idx: number) => (
                          <div key={idx}>
                            <ul>
                              {col.locations &&
                                Array.isArray(col.locations) &&
                                col.locations.map((loc: any, lIdx: number) => (
                                  <li key={lIdx}>
                                    <a href={loc.url || "#"}>
                                      {loc.name || "Location"}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  )}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${colMedia.mobile}, ${colMedia.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${colMedia.tablet}, ${colMedia.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={colMedia.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={colMedia.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={colMedia.alt || "white sand beach"}
                  draggable="false"
                />
              </picture>
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
            className="mod_banner dark hide-divider viewport background-12"
            data-s3-module
            key="bannerSection2"
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2 className="text-center">
                  {bannerSection2.heading || "Perks & Rewards"}
                </h2>
                {bannerSection2.contentColumns &&
                  Array.isArray(bannerSection2.contentColumns) && (
                    <div className="columns-two">
                      {bannerSection2.contentColumns.map(
                        (col: any, idx: number) => (
                          <div key={idx}>
                            {renderRichText(col.content)}
                            {col.bulletPoints &&
                              Array.isArray(col.bulletPoints) && (
                                <ul className="columns mt-0">
                                  {col.bulletPoints.map(
                                    (bullet: any, bIdx: number) => (
                                      <li key={bIdx}>
                                        {bullet.text || "Bullet"}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </div>
                        )
                      )}
                    </div>
                  )}
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
        sectionOrder.map((section: any, idx: number) => (
          <React.Fragment key={idx}>
            {renderSection(section.section)}
          </React.Fragment>
        ))
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("intro")}
          {renderSection("halfImageSection")}
          {renderSection("bannerSection1")}
          {renderSection("boxGridSection")}
          {renderSection("columnSection")}
          {renderSection("bannerSection2")}
        </>
      )}
    </main>
  );
};

export default RestylanePageComponent;