// // import React from "react";

// // const BotoxPage: React.FC = () => {
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
// //                     href="/medical-spa/botox/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Botox
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>BOTOX</h1>
// //               <div className="text">
// //                 <p>
// //                   We understand many patients want to look younger but do not
// //                   need surgery. The area in which age is most unforgiving is the
// //                   face, with lines appearing in men and women from the late
// //                   twenties onwards. BOTOX wrinkle-reducing treatments give the
// //                   skin an even, smooth look, making you appear visibly younger,
// //                   well-rested, and refreshed.
// //                 </p>
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
// //                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="Kristi Coody injecting a patient with filler"
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
// //               width="58"
// //               height="64"
// //               loading="lazy"
// //               alt="Goldfingers aesthetic logo"
// //               draggable="false"
// //               data-api-key="logo"
// //             />
// //           </picture>
// //           <div className="inner" data-api-key="content">
// //             <h2>Rejuvenate Your Natural Beauty</h2>
// //             <p>
// //               The ideal result smooths creases without affecting your natural
// //               expressiveness, so you still look like you. At Goldfingers
// //               Aesthetics &amp;Plastic Surgery, our injectors use advanced
// //               injection techniques to create a look that appears refreshed while
// //               entirely natural. If you have fine lines or wrinkles that
// //               don&rsquo;t reflect the age you feel, we&rsquo;re here to help.
// //               From deepened frown lines between the eyebrows (glabella) and
// //               crow&rsquo;s feet around the eyes to deep laugh lines and lip
// //               lines, we have the tools, knowledge, and professional experience
// //               to achieve beautiful results!
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Column Module */}
// //       <div className="mod_column viewport container has-media" data-s3-module>
// //         <div className="row mb-30 media-left" data-api-key="content">
// //           <div className="item">
// //             <h2>Who Benefits</h2>
// //             <p>
// //               All of us eventually must deal with lines and wrinkles associated
// //               with aging. However, there is a great way to diminish the
// //               appearance of wrinkles with BOTOX&reg;Cosmetic.
// //             </p>
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
// //         className="mod_banner dark hide-divider viewport background-1"
// //         data-s3-module
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2>Benefits of BOTOX&reg;</h2>
// //             <ul>
// //               <li>
// //                 BOTOX&reg;Cosmetic is a non-surgical solution to lines and
// //                 wrinkles. It&rsquo;s minimally invasive and can help with
// //                 wrinkles in the forehead, glabella, and crow&rsquo;s feet.
// //               </li>
// //               <li>
// //                 BOTOX&reg;Cosmetic is proven to lift the brow &ndash;Over time,
// //                 your brow may fall victim to gravity. With BOTOX&reg;Cosmetic
// //                 treatments, you can raise the brow, making your face look less
// //                 tired and giving you a more youthful appearance. Getting that
// //                 perfect lift and the natural arch has never been easier.
// //               </li>
// //               <li>
// //                 BOTOX&reg;Cosmetic decreases excessive sweating &ndash;For many
// //                 men and women, excess sweating under the arms is an embarrassing
// //                 problem that must be dealt with daily. A simple
// //                 BOTOX&reg;Cosmetic treatment can lessen the amount of sweat
// //                 produced to minimize this often embarrassing problem. The term
// //                 is Hyperhidrosis and is widely treated with BOTOX&reg;Cosmetic
// //                 injections for immediate and long-lasting results.
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

// //       {/* Video Module */}
// //       <div className="mod_video container" data-s3-module>
// //         <div className="row">
// //           <div className="copy wow fadeInLeft" data-wow-duration="2s">
// //             <div className="inner">
// //               <h2>Dr. James Young & BOTOX&reg;Cosmetic</h2>
// //             </div>
// //           </div>
// //           <a
// //             className="media popup-video wow fadeInRight"
// //             href="https://www.youtube.com/watch?v=-S2C8MUAROI"
// //             title="Click to view video"
// //             aria-label="Click to view video"
// //           >
// //             <picture className="">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1713897003-botox.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1713897003-botox.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1713897003-botox.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1713897003-botox.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1713897003-botox.jpg?auto=format,compress&w=800"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1713897003-botox.jpg?auto=format,compress&w=800"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="800"
// //                 height="450"
// //                 alt=""
// //                 draggable="false"
// //               />
// //             </picture>
// //           </a>
// //         </div>
// //       </div>

// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image viewport half-image container wow fadeInLeft"
// //         data-s3-module
// //       >
// //         <div className="row half-image-row flipped top-aligned">
// //           <div className="media">
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
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy padded2">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>Dysport&reg;injections</h2>
// //                 <p>
// //                   <strong>Fight frown lines &amp;save - $9.99 per unit</strong>
// //                 </p>
// //                 <p>
// //                   Similar to BOTOX&reg;, Dysport&reg;(abobotulinumtoxinA) is a
// //                   wrinkle relaxer approved to smooth forehead wrinkles and frown
// //                   lines away. If you are ready to look younger and refreshed,
// //                   with lines and wrinkles fading, you deserve to be under the
// //                   care of our expert injectors at Goldfingers Aesthetics
// //                   &amp;Plastic Surgery.&nbsp;
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark hide-divider viewport background-3"
// //         data-s3-module
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2>
// //               Advanced Techniques Make the Difference at Goldfingers Aesthetics
// //               &amp;Plastic Surgery
// //             </h2>
// //             <p>
// //               Wrinkles aren&rsquo;t your style &ndash;but the &ldquo;frozen
// //               look&rdquo;isn&rsquo;t either. For adults who want a natural look,
// //               there&rsquo;s Dysport, a prescription injection proven to help
// //               smooth the appearance of moderate to severe frown lines between
// //               the eyebrows without changing the look or movement of the rest of
// //               your face. Untreated muscles still work normally, so you can
// //               continue to express your emotions naturally. It&rsquo;s the lines
// //               that disappear, not your expressions!
// //             </p>
// //             <p>
// //               Contact us today to learn more about which treatment is right for
// //               you!
// //             </p>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=1200 2x"
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
// //           />
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// //           />
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=2200&q=85&sharp=5"
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
// //       <div className="mod_column viewport container" data-s3-module>
// //         <div className="row mt-30 mb-30" data-api-key="content">
// //           <div className="item">
// //             <h2 className="text-center">Your BOTOX Treatment Experience</h2>
// //             <div className="columns-two">
// //               <div>
// //                 <p>
// //                   At Goldfingers Aesthetics, your BOTOX experience is carefully
// //                   tailored to ensure comfort and exceptional results. Our
// //                   skilled team of professionals will guide you through the
// //                   process, beginning with a comprehensive consultation so we
// //                   understand your unique goals and concerns. During the
// //                   treatment, a precise amount of BOTOX is strategically injected
// //                   into targeted muscles using ultra-fine needles, with minimal
// //                   discomfort and a sensation like a minor pinch. With our
// //                   expertise and commitment to excellence, you can trust that
// //                   your BOTOX treatment will be conducted with utmost care and
// //                   precision.
// //                 </p>
// //               </div>
// //               <div>
// //                 <p>
// //                   Our experience and knowledge with these injectables exceed
// //                   other aesthetic providers.
// //                 </p>
// //                 <ul className="columns">
// //                   <li>+25 years in Aesthetics</li>
// //                   <li>+ Top 1 % in the Nation for BOTOX and Juv&eacute;derm</li>
// //                   <li>Largest aesthetics center in Florida</li>
// //                   <li>Over 24 Locations to date</li>
// //                   <li>Allergan-trained facial contour aesthetic injectors</li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
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

// //       {/* Column Module */}
// //       <div className="mod_column viewport container has-media" data-s3-module>
// //         <div className="row mt-30 mb-30 media-left" data-api-key="content">
// //           <div className="item">
// //             <h2>How Long Will BOTOX or Dysport Take to Work?</h2>
// //             <p>
// //               BOTOX treatments are known to have a rapid onset. While individual
// //               responses vary, most patients see the first subtle improvements
// //               within a few days. However, the full effects gradually emerge
// //               throughout approximately one to two weeks. This natural
// //               progression allows for a more gradual and subtle transformation,
// //               ensuring your appearance remains authentic and refreshed. Our
// //               Goldfingers Aesthetics team focuses on a personalized approach
// //               with advanced injection techniques for an outcome you love.
// //             </p>
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

// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark hide-divider viewport background-2"
// //         data-s3-module
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2>Why Choose Us?</h2>
// //             <p>
// //               When it comes to enhancing your natural beauty and achieving your
// //               aesthetic goals, Goldfingers Aesthetics stands out as a premier
// //               choice. Led by a team of experienced professionals, including our
// //               esteemed Medical Director, Dr. James Young, we are dedicated to
// //               delivering exceptional results while prioritizing your comfort and
// //               well-being. Our state-of-the-art facilities and our commitment to
// //               the latest advancements in cosmetic treatments ensure that you
// //               receive top-tier care.&nbsp;
// //             </p>
// //             <p>
// //               Our personalized approach truly sets us apart. We take the time to
// //               understand your unique desires and concerns, crafting treatment
// //               plans that cater to your needs. With a range of non-surgical
// //               options, including BOTOX and Dysport, we offer the expertise,
// //               artistry, and care necessary to achieve the natural-looking and
// //               rejuvenating results you desire. Choose Goldfingers Aesthetics
// //               &amp;Plastic Surgery for a transformative experience that reflects
// //               your inner radiance. Visit our Specials to learn how to save on
// //               anti-aging treatments at Goldfingers Aesthetics.
// //             </p>
// //             <p>
// //               We offer Aspire&reg;and Brilliant Distinctions&reg;, two unique
// //               reward programs that give patients points toward instant savings
// //               on qualifying Allergan&reg;&amp;Galderma&reg;aesthetic treatments.
// //               You can save $10 for every 100 points earned. Sign Up Today to
// //               start saving!{" "}
// //               <a
// //                 href="https://www.brilliantdistinctions.ca/"
// //                 target="_blank"
// //                 rel="noopener"
// //               >
// //                 Brilliant Distinctions
// //               </a>
// //               .
// //             </p>
// //             <p>
// //               Receive an instant $20 treatment certificate when you sign up for
// //               ASPIRE Galderma Rewards.{" "}
// //               <a
// //                 href="https://www.aspirerewards.com/"
// //                 target="_blank"
// //                 rel="noopener"
// //               >
// //                 Sign Up Here!
// //               </a>
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

// //       {/* Column Module */}
// //       <div className="mod_column viewport container has-media" data-s3-module>
// //         <div className="row mt-30 pb-0 media-left" data-api-key="content">
// //           <div className="item">
// //             <h2>BOTOX Locations Across Florida</h2>
// //             <ul className="columns">
// //               <li>
// //                 <a href="/clearwater/medical-spa/botox/">Clearwater</a>
// //               </li>
// //               <li>
// //                 <a href="/clermont/medical-spa/botox/">Clermont</a>
// //               </li>
// //               <li>
// //                 <a href="/daytona-beach/medical-spa/botox/">Daytona Beach</a>
// //               </li>
// //               <li>
// //                 <a href="/orlando/medical-spa/botox/">Orlando</a>
// //               </li>
// //               <li>
// //                 <a href="/lake-mary/medical-spa/botox/">Lake Mary</a>
// //               </li>
// //               <li>
// //                 <a href="/longwood/medical-spa/botox/">Longwood</a>
// //               </li>
// //               <li>
// //                 <a href="/mount-dora/medical-spa/botox/">Mount Dora</a>
// //               </li>
// //               <li>
// //                 <a href="/new-smyrna-beach/medical-spa/botox/">New Smyrna</a>
// //               </li>
// //               <li>
// //                 <a href="/ocala/medical-spa/botox/">Ocala</a>
// //               </li>
// //               <li>
// //                 <a href="/port-orange/medical-spa/botox/">Port Orange</a>
// //               </li>
// //               <li>
// //                 <a href="/tampa/medical-spa/botox/">Tampa</a>
// //               </li>
// //               <li>
// //                 <a href="/the-villages/medical-spa/botox/">The Villages</a>
// //               </li>
// //               <li>
// //                 <a href="/winter-park/medical-spa/botox/">Winter Park</a>
// //               </li>
// //             </ul>
// //           </div>
// //           <picture className="media">
// //             <source
// //               media="(max-width:420px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=630 2x"
// //             />
// //             <source
// //               media="(max-width:800px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=1200 2x"
// //             />
// //             <source
// //               media="(max-width:1400px)"
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=2100 2x"
// //             />
// //             <source
// //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=1832"
// //             />
// //             <img
// //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //               data-lazyload-src="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=1832"
// //               loading="lazy"
// //               data-lazyload="img"
// //               width="1832"
// //               height="1824"
// //               alt="pier on beach at sunset"
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       </div>

// //       {/* Page FAQ Module */}
// //       <div className="mod_faq container" data-s3-module>
// //         <div className="row">
// //           <div className="side">
// //             <div className="sticky-side">
// //               <h2>
// //                 <span className="small">BOTOX&reg;</span>
// //                 FAQ
// //               </h2>
// //               <div className="list">
// //                 <p>How does BOTOX work?</p>
// //                 <p>What to expect after your BOTOX treatment?</p>
// //                 <p>How long does BOTOX last?</p>
// //                 <p>What to avoid after BOTOX?</p>
// //                 <p>Do BOTOX injections hurt?</p>
// //                 <p>Are you a good candidate for BOTOX?</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="content">
// //             <div className="questions">
// //               <div className="question">
// //                 <h2 className="js-exclude">How does BOTOX work?</h2>
// //                 <div className="answer">
// //                   <p>
// //                     Normally, a topical numbing agent is applied to the skin in
// //                     the treated area to minimize any discomfort that may be
// //                     experienced during the treatment. The procedure can take
// //                     about 15 minutes or less, depending on the number of areas
// //                     being treated. BOTOX works by invoking temporary paralysis
// //                     of the muscles that induce wrinkling, providing a more
// //                     youthful and rejuvenated appearance.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">
// //                   What to expect after your BOTOX treatment?
// //                 </h2>
// //                 <div className="answer">
// //                   <p>
// //                     After the BOTOX treatment, the very minimal side effects
// //                     fade quickly. There may be slight swelling, bruising,
// //                     tenderness, and some redness at the injection site, which is
// //                     sometimes expected after treatment but is generally very
// //                     minor. Patients usually resume their daily routines
// //                     immediately after receiving treatment.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">How long does BOTOX last?</h2>
// //                 <div className="answer">
// //                   <p>
// //                     BOTOX results vary amongst patients but typically last 3-4
// //                     months. First-time patients may notice that their first set
// //                     of treatment results may not last as long, but after the
// //                     second treatment, the results tend to last longer.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">What to avoid after BOTOX?</h2>
// //                 <div className="answer">
// //                   <p>
// //                     <ul>
// //                       <li>
// //                         Avoid any exercise for at least 3 hours after treatment.
// //                       </li>
// //                       <li>No facials or head massages for 24 hours.</li>
// //                       <li>
// //                         Avoid lying down for at least 3 hours after treatment.
// //                       </li>
// //                       <li>
// //                         Avoid saunas, hot tubs, or tanning booths for at least 4
// //                         hours after treatment.
// //                       </li>
// //                     </ul>
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">Do BOTOX injections hurt?</h2>
// //                 <div className="answer">
// //                   <p>
// //                     Generally, there is very minimal discomfort when receiving
// //                     any BOTOX treatment. Usually, a local anesthetic or cold
// //                     compress is used to numb the areas being treated to decrease
// //                     the overall level of discomfort during the procedure.
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="question">
// //                 <h2 className="js-exclude">
// //                   Are you a good candidate for BOTOX?
// //                 </h2>
// //                 <div className="answer">
// //                   <p>
// //                     Not sure if you're a good candidate to receive BOTOX
// //                     treatment? Visit us at one of our medical spa locations near
// //                     you for a complimentary consultation. Our skilled aesthetic
// //                     injectors will provide the necessary information to
// //                     determine if BOTOX® or Dysport® is right for you.
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

// // export default BotoxPage;


// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchBotoxPageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
// } from "@/lib/api/medicalSpa/fetchBotoxPageData";

// const BotoxPage: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       const pageData = await fetchBotoxPageData();
//       setData(pageData);
//       setLoading(false);
//     };
//     loadData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!data) {
//     return <div>No data available</div>;
//   }

//   const {
//     heroSection,
//     introSection,
//     columnSection1,
//     bannerSection1,
//     videoSection,
//     halfImageSection,
//     bannerSection2,
//     columnSection2,
//     ctaGeneralSection,
//     columnSection3,
//     bannerSection3,
//     columnSection4,
//     faqSection,
//     sectionOrder,
//     globalStyles,
//     animationSettings,
//   } = data;

//   // Helper function to render rich text content
//   const renderRichText = (content: any) => {
//     if (!content) return null;
//     const html = lexicalToHtml(content);
//     return <div dangerouslySetInnerHTML={{ __html: html }} />;
//   };

//   // Render sections based on order
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
//                   alt={heroBackground.alt}
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
//                     {heroSection.title}
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
//                           href={heroSection.ctaButton.url}
//                           role="button"
//                           style={{
//                             backgroundColor:
//                               heroSection.ctaButton.backgroundColor ||
//                               undefined,
//                             color: heroSection.ctaButton.textColor || undefined,
//                           }}
//                         >
//                           {heroSection.ctaButton.text}
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
//                     alt={heroMedia.alt}
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
//             style={{
//               backgroundColor: introSection.backgroundColor || undefined,
//               color: introSection.textColor || undefined,
//             }}
//           >
//             <div className="row pb-0">
//               {introLogo && (
//                 <picture className="logo">
//                   <img
//                     src={introLogo}
//                     width="58"
//                     height="64"
//                     loading="lazy"
//                     alt={introSection.logoAlt}
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}
//               <div className="inner" data-api-key="content">
//                 <h2 style={{ color: introSection.headingColor || undefined }}>
//                   {introSection.heading}
//                 </h2>
//                 {renderRichText(introSection.content)}
//               </div>
//             </div>
//           </div>
//         );

//       case "columnSection1":
//         if (!columnSection1?.show) return null;
//         const col1Media = getResponsiveImageUrls(columnSection1?.mediaImage);
//         const col1MediaLeft = columnSection1?.mediaPosition === "left";

//         return (
//           <div
//             className="mod_column viewport container has-media"
//             data-s3-module
//             key="columnSection1"
//             style={{
//               backgroundColor: columnSection1.backgroundColor || undefined,
//               color: columnSection1.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row mb-30 ${
//                 col1MediaLeft ? "media-left" : "media-right"
//               }`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 <h2 style={{ color: columnSection1.headingColor || undefined }}>
//                   {columnSection1.heading}
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
//                   alt={col1Media.alt}
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
//             className="mod_banner dark hide-divider viewport background-1"
//             data-s3-module
//             key="bannerSection1"
//             style={{
//               backgroundColor: bannerSection1.backgroundColor || undefined,
//               color: bannerSection1.textColor || undefined,
//             }}
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 <h2>{bannerSection1.heading}</h2>
//                 {renderRichText(bannerSection1.content)}
//                 {bannerSection1.bulletPoints &&
//                   bannerSection1.bulletPoints.length > 0 && (
//                     <ul>
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
//                 alt={banner1Bg.alt}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "videoSection":
//         if (!videoSection?.show) return null;
//         const videoThumb = getResponsiveImageUrls(videoSection?.thumbnailImage);

//         return (
//           <div
//             className="mod_video container"
//             data-s3-module
//             key="videoSection"
//             style={{
//               backgroundColor: videoSection.backgroundColor || undefined,
//             }}
//           >
//             <div className="row">
//               <div className="copy wow fadeInLeft" data-wow-duration="2s">
//                 <div className="inner">
//                   <h2 style={{ color: videoSection.headingColor || undefined }}>
//                     {videoSection.heading}
//                   </h2>
//                 </div>
//               </div>
//               <a
//                 className="media popup-video wow fadeInRight"
//                 href={videoSection.videoUrl}
//                 title={videoSection.linkText}
//                 aria-label={videoSection.ariaLabel}
//               >
//                 <picture className="">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${videoThumb.mobile}, ${videoThumb.mobile} 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={`${videoThumb.tablet}, ${videoThumb.tablet} 2x`}
//                   />
//                   <source
//                     srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-srcset={videoThumb.desktop}
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src={videoThumb.desktop}
//                     loading="lazy"
//                     data-lazyload="img"
//                     width="800"
//                     height="450"
//                     alt={videoThumb.alt}
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//             </div>
//           </div>
//         );

//       case "halfImageSection":
//         if (!halfImageSection?.show) return null;
//         const halfImg = getResponsiveImageUrls(halfImageSection?.image);
//         const halfImgLeft = halfImageSection?.imagePosition === "left";
//         const vertAlign = halfImageSection?.verticalAlignment || "top";

//         return (
//           <div
//             className="mod_half_image viewport half-image container wow fadeInLeft"
//             data-s3-module
//             key="halfImageSection"
//             style={{
//               backgroundColor: halfImageSection.backgroundColor || undefined,
//               color: halfImageSection.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row half-image-row ${
//                 !halfImgLeft ? "flipped" : ""
//               } ${vertAlign}-aligned`}
//             >
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
//                     alt={halfImg.alt}
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div className="copy padded2">
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     <h2
//                       style={{
//                         color: halfImageSection.headingColor || undefined,
//                       }}
//                     >
//                       {halfImageSection.heading}
//                     </h2>
//                     {renderRichText(halfImageSection.content)}
//                   </div>
//                 </div>
//               </div>
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
//             className="mod_banner dark hide-divider viewport background-3"
//             data-s3-module
//             key="bannerSection2"
//             style={{
//               backgroundColor: bannerSection2.backgroundColor || undefined,
//               color: bannerSection2.textColor || undefined,
//             }}
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 <h2>{bannerSection2.heading}</h2>
//                 {renderRichText(bannerSection2.content)}
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
//                 alt={banner2Bg.alt}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "columnSection2":
//         if (!columnSection2?.show) return null;
//         const headingAlign = columnSection2?.headingAlignment || "center";

//         return (
//           <div
//             className="mod_column viewport container"
//             data-s3-module
//             key="columnSection2"
//             style={{
//               backgroundColor: columnSection2.backgroundColor || undefined,
//               color: columnSection2.textColor || undefined,
//             }}
//           >
//             <div className="row mt-30 mb-30" data-api-key="content">
//               <div className="item">
//                 <h2
//                   className={`text-${headingAlign}`}
//                   style={{ color: columnSection2.headingColor || undefined }}
//                 >
//                   {columnSection2.heading}
//                 </h2>
//                 {columnSection2.columns &&
//                   columnSection2.columns.length > 0 && (
//                     <div className="columns-two">
//                       {columnSection2.columns.map(
//                         (column: any, idx: number) => (
//                           <div key={idx}>
//                             {renderRichText(column.content)}
//                             {column.bulletPoints &&
//                               column.bulletPoints.length > 0 && (
//                                 <ul className="columns">
//                                   {column.bulletPoints.map(
//                                     (bullet: any, bIdx: number) => (
//                                       <li key={bIdx}>{bullet.text}</li>
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
//           </div>
//         );

//       case "ctaGeneralSection":
//         if (!ctaGeneralSection?.show) return null;

//         return (
//           <div
//             className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
//             data-s3-module
//             key="ctaGeneralSection"
//             style={{
//               backgroundColor: ctaGeneralSection.backgroundColor || undefined,
//               color: ctaGeneralSection.textColor || undefined,
//             }}
//           >
//             <div className="row">
//               <div className="text">
//                 <h2
//                   style={{ color: ctaGeneralSection.headingColor || undefined }}
//                 >
//                   {ctaGeneralSection.headingLink ? (
//                     <a href={ctaGeneralSection.headingLink}>
//                       {ctaGeneralSection.heading}
//                     </a>
//                   ) : (
//                     ctaGeneralSection.heading
//                   )}
//                 </h2>
//                 {ctaGeneralSection.ctaButton && (
//                   <a
//                     href={ctaGeneralSection.ctaButton.url}
//                     className="btn white"
//                     style={{
//                       backgroundColor:
//                         ctaGeneralSection.ctaButton.backgroundColor ||
//                         undefined,
//                       color: ctaGeneralSection.ctaButton.textColor || undefined,
//                     }}
//                   >
//                     {ctaGeneralSection.ctaButton.text}
//                   </a>
//                 )}
//               </div>
//               <div className="media"></div>
//             </div>
//           </div>
//         );

//       case "columnSection3":
//         if (!columnSection3?.show) return null;
//         const col3Media = getResponsiveImageUrls(columnSection3?.mediaImage);
//         const col3MediaLeft = columnSection3?.mediaPosition === "left";

//         return (
//           <div
//             className="mod_column viewport container has-media"
//             data-s3-module
//             key="columnSection3"
//             style={{
//               backgroundColor: columnSection3.backgroundColor || undefined,
//               color: columnSection3.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row mt-30 mb-30 ${
//                 col3MediaLeft ? "media-left" : "media-right"
//               }`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 <h2 style={{ color: columnSection3.headingColor || undefined }}>
//                   {columnSection3.heading}
//                 </h2>
//                 {renderRichText(columnSection3.content)}
//               </div>
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col3Media.mobile}, ${col3Media.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col3Media.tablet}, ${col3Media.tablet} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={col3Media.desktop}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={col3Media.desktop}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="904"
//                   height="1062"
//                   alt={col3Media.alt}
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         );

//       case "bannerSection3":
//         if (!bannerSection3?.show) return null;
//         const banner3Bg = getResponsiveImageUrls(
//           bannerSection3?.backgroundImage
//         );

//         return (
//           <div
//             className="mod_banner dark hide-divider viewport background-2"
//             data-s3-module
//             key="bannerSection3"
//             style={{
//               backgroundColor: bannerSection3.backgroundColor || undefined,
//               color: bannerSection3.textColor || undefined,
//             }}
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 <h2>{bannerSection3.heading}</h2>
//                 {renderRichText(bannerSection3.content)}
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner3Bg.mobile}, ${banner3Bg.mobile} 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner3Bg.tablet}, ${banner3Bg.tablet} 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${banner3Bg.desktop}, ${banner3Bg.desktop} 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={banner3Bg.large}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={banner3Bg.large}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={banner3Bg.alt}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "columnSection4":
//         if (!columnSection4?.show) return null;
//         const col4Media = getResponsiveImageUrls(columnSection4?.mediaImage);
//         const col4MediaLeft = columnSection4?.mediaPosition === "left";

//         return (
//           <div
//             className="mod_column viewport container has-media"
//             data-s3-module
//             key="columnSection4"
//             style={{
//               backgroundColor: columnSection4.backgroundColor || undefined,
//               color: columnSection4.textColor || undefined,
//             }}
//           >
//             <div
//               className={`row mt-30 pb-0 ${
//                 col4MediaLeft ? "media-left" : "media-right"
//               }`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 <h2 style={{ color: columnSection4.headingColor || undefined }}>
//                   {columnSection4.heading}
//                 </h2>
//                 {columnSection4.locations &&
//                   columnSection4.locations.length > 0 && (
//                     <ul className="columns">
//                       {columnSection4.locations.map(
//                         (location: any, idx: number) => (
//                           <li key={idx}>
//                             <a href={location.url}>{location.label}</a>
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   )}
//               </div>
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col4Media.mobile}, ${col4Media.mobile} 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col4Media.tablet}, ${col4Media.tablet} 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${col4Media.desktop}, ${col4Media.desktop} 2x`}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={col4Media.large}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={col4Media.large}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="1832"
//                   height="1824"
//                   alt={col4Media.alt}
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         );

//       case "faqSection":
//         if (!faqSection?.show) return null;

//         return (
//           <div
//             className="mod_faq container"
//             data-s3-module
//             key="faqSection"
//             style={{
//               backgroundColor: faqSection.backgroundColor || undefined,
//               color: faqSection.textColor || undefined,
//             }}
//           >
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
//                     {faqSection.heading}
//                   </h2>
//                   {faqSection.questions && faqSection.questions.length > 0 && (
//                     <div className="list">
//                       {faqSection.questions.map((q: any, idx: number) => (
//                         <p
//                           key={idx}
//                           style={{
//                             color: faqSection.questionColor || undefined,
//                           }}
//                         >
//                           {q.question}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="content">
//                 <div className="questions">
//                   {faqSection.questions &&
//                     faqSection.questions.map((q: any, idx: number) => (
//                       <div className="question" key={idx}>
//                         <h2
//                           className="js-exclude"
//                           style={{
//                             color: faqSection.questionColor || undefined,
//                           }}
//                         >
//                           {q.question}
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

//   const getImageUrl = (imageField: any): string => {
//     if (!imageField) return "";
//     if (typeof imageField === "object" && imageField.cloudinary_url) {
//       return imageField.cloudinary_url;
//     }
//     if (typeof imageField === "object" && imageField.url) {
//       return imageField.url;
//     }
//     if (typeof imageField === "string") {
//       return imageField;
//     }
//     return "";
//   };

//   return (
//     <main
//       id="main"
//       style={{
//         fontFamily: globalStyles?.fontFamily || undefined,
//         color: globalStyles?.textColor || undefined,
//       }}
//     >
//       {sectionOrder && sectionOrder.length > 0 ? (
//         sectionOrder.map((section: any, idx: number) =>
//           renderSection(section.section)
//         )
//       ) : (
//         <>
//           {renderSection("hero")}
//           {renderSection("intro")}
//           {renderSection("columnSection1")}
//           {renderSection("bannerSection1")}
//           {renderSection("videoSection")}
//           {renderSection("halfImageSection")}
//           {renderSection("bannerSection2")}
//           {renderSection("columnSection2")}
//           {renderSection("ctaGeneralSection")}
//           {renderSection("columnSection3")}
//           {renderSection("bannerSection3")}
//           {renderSection("columnSection4")}
//           {renderSection("faqSection")}
//         </>
//       )}
//     </main>
//   );
// };

// export default BotoxPage;



"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchBotoxPageData";

interface BotoxPageProps {
  data: any;
}

const BotoxPage: React.FC<BotoxPageProps> = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const {
    heroSection,
    introSection,
    columnSection1,
    bannerSection1,
    videoSection,
    halfImageSection,
    bannerSection2,
    columnSection2,
    ctaGeneralSection,
    columnSection3,
    bannerSection3,
    columnSection4,
    faqSection,
    sectionOrder,
    globalStyles,
    animationSettings,
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
                  alt={heroBackground.alt}
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
                    {heroSection.title}
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
                          href={heroSection.ctaButton.url}
                          role="button"
                          style={{
                            backgroundColor:
                              heroSection.ctaButton.backgroundColor ||
                              undefined,
                            color: heroSection.ctaButton.textColor || undefined,
                          }}
                        >
                          {heroSection.ctaButton.text}
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
                    alt={heroMedia.alt}
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
            style={{
              backgroundColor: introSection.backgroundColor || undefined,
              color: introSection.textColor || undefined,
            }}
          >
            <div className="row pb-0">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width="58"
                    height="64"
                    loading="lazy"
                    alt={introSection.logoAlt}
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="inner" data-api-key="content">
                <h2 style={{ color: introSection.headingColor || undefined }}>
                  {introSection.heading}
                </h2>
                {renderRichText(introSection.content)}
              </div>
            </div>
          </div>
        );

      case "columnSection1":
        if (!columnSection1?.show) return null;
        const col1Media = getResponsiveImageUrls(columnSection1?.mediaImage);
        const col1MediaLeft = columnSection1?.mediaPosition === "left";

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="columnSection1"
            style={{
              backgroundColor: columnSection1.backgroundColor || undefined,
              color: columnSection1.textColor || undefined,
            }}
          >
            <div
              className={`row mb-30 ${
                col1MediaLeft ? "media-left" : "media-right"
              }`}
              data-api-key="content"
            >
              <div className="item">
                <h2 style={{ color: columnSection1.headingColor || undefined }}>
                  {columnSection1.heading}
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
                  alt={col1Media.alt}
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
            className="mod_banner dark hide-divider viewport background-1"
            data-s3-module
            key="bannerSection1"
            style={{
              backgroundColor: bannerSection1.backgroundColor || undefined,
              color: bannerSection1.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2>{bannerSection1.heading}</h2>
                {renderRichText(bannerSection1.content)}
                {bannerSection1.bulletPoints &&
                  bannerSection1.bulletPoints.length > 0 && (
                    <ul>
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
                alt={banner1Bg.alt}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "videoSection":
        if (!videoSection?.show) return null;
        const videoThumb = getResponsiveImageUrls(videoSection?.thumbnailImage);

        return (
          <div
            className="mod_video container"
            data-s3-module
            key="videoSection"
            style={{
              backgroundColor: videoSection.backgroundColor || undefined,
            }}
          >
            <div className="row">
              <div className="copy wow fadeInLeft" data-wow-duration="2s">
                <div className="inner">
                  <h2 style={{ color: videoSection.headingColor || undefined }}>
                    {videoSection.heading}
                  </h2>
                </div>
              </div>
              <a
                className="media popup-video wow fadeInRight"
                href={videoSection.videoUrl}
                title={videoSection.linkText}
                aria-label={videoSection.ariaLabel}
              >
                <picture className="">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${videoThumb.mobile}, ${videoThumb.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${videoThumb.tablet}, ${videoThumb.tablet} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={videoThumb.desktop}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={videoThumb.desktop}
                    loading="lazy"
                    data-lazyload="img"
                    width="800"
                    height="450"
                    alt={videoThumb.alt}
                    draggable="false"
                  />
                </picture>
              </a>
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
            className="mod_half_image viewport half-image container wow fadeInLeft"
            data-s3-module
            key="halfImageSection"
            style={{
              backgroundColor: halfImageSection.backgroundColor || undefined,
              color: halfImageSection.textColor || undefined,
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
                    alt={halfImg.alt}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded2">
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
                  </div>
                </div>
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
            className="mod_banner dark hide-divider viewport background-3"
            data-s3-module
            key="bannerSection2"
            style={{
              backgroundColor: bannerSection2.backgroundColor || undefined,
              color: bannerSection2.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2>{bannerSection2.heading}</h2>
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
                alt={banner2Bg.alt}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "columnSection2":
        if (!columnSection2?.show) return null;
        const headingAlign = columnSection2?.headingAlignment || "center";

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="columnSection2"
            style={{
              backgroundColor: columnSection2.backgroundColor || undefined,
              color: columnSection2.textColor || undefined,
            }}
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                <h2
                  className={`text-${headingAlign}`}
                  style={{ color: columnSection2.headingColor || undefined }}
                >
                  {columnSection2.heading}
                </h2>
                {columnSection2.columns &&
                  columnSection2.columns.length > 0 && (
                    <div className="columns-two">
                      {columnSection2.columns.map(
                        (column: any, idx: number) => (
                          <div key={idx}>
                            {renderRichText(column.content)}
                            {column.bulletPoints &&
                              column.bulletPoints.length > 0 && (
                                <ul className="columns">
                                  {column.bulletPoints.map(
                                    (bullet: any, bIdx: number) => (
                                      <li key={bIdx}>{bullet.text}</li>
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
          </div>
        );

      case "ctaGeneralSection":
        if (!ctaGeneralSection?.show) return null;

        return (
          <div
            className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
            data-s3-module
            key="ctaGeneralSection"
            style={{
              backgroundColor: ctaGeneralSection.backgroundColor || undefined,
              color: ctaGeneralSection.textColor || undefined,
            }}
          >
            <div className="row">
              <div className="text">
                <h2
                  style={{ color: ctaGeneralSection.headingColor || undefined }}
                >
                  {ctaGeneralSection.headingLink ? (
                    <a href={ctaGeneralSection.headingLink}>
                      {ctaGeneralSection.heading}
                    </a>
                  ) : (
                    ctaGeneralSection.heading
                  )}
                </h2>
                {ctaGeneralSection.ctaButton && (
                  <a
                    href={ctaGeneralSection.ctaButton.url}
                    className="btn white"
                    style={{
                      backgroundColor:
                        ctaGeneralSection.ctaButton.backgroundColor ||
                        undefined,
                      color: ctaGeneralSection.ctaButton.textColor || undefined,
                    }}
                  >
                    {ctaGeneralSection.ctaButton.text}
                  </a>
                )}
              </div>
              <div className="media"></div>
            </div>
          </div>
        );

      case "columnSection3":
        if (!columnSection3?.show) return null;
        const col3Media = getResponsiveImageUrls(columnSection3?.mediaImage);
        const col3MediaLeft = columnSection3?.mediaPosition === "left";

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="columnSection3"
            style={{
              backgroundColor: columnSection3.backgroundColor || undefined,
              color: columnSection3.textColor || undefined,
            }}
          >
            <div
              className={`row mt-30 mb-30 ${
                col3MediaLeft ? "media-left" : "media-right"
              }`}
              data-api-key="content"
            >
              <div className="item">
                <h2 style={{ color: columnSection3.headingColor || undefined }}>
                  {columnSection3.heading}
                </h2>
                {renderRichText(columnSection3.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col3Media.mobile}, ${col3Media.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col3Media.tablet}, ${col3Media.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={col3Media.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={col3Media.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={col3Media.alt}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "bannerSection3":
        if (!bannerSection3?.show) return null;
        const banner3Bg = getResponsiveImageUrls(
          bannerSection3?.backgroundImage
        );

        return (
          <div
            className="mod_banner dark hide-divider viewport background-2"
            data-s3-module
            key="bannerSection3"
            style={{
              backgroundColor: bannerSection3.backgroundColor || undefined,
              color: bannerSection3.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2>{bannerSection3.heading}</h2>
                {renderRichText(bannerSection3.content)}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner3Bg.mobile}, ${banner3Bg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner3Bg.tablet}, ${banner3Bg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${banner3Bg.desktop}, ${banner3Bg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={banner3Bg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={banner3Bg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={banner3Bg.alt}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "columnSection4":
        if (!columnSection4?.show) return null;
        const col4Media = getResponsiveImageUrls(columnSection4?.mediaImage);
        const col4MediaLeft = columnSection4?.mediaPosition === "left";

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="columnSection4"
            style={{
              backgroundColor: columnSection4.backgroundColor || undefined,
              color: columnSection4.textColor || undefined,
            }}
          >
            <div
              className={`row mt-30 pb-0 ${
                col4MediaLeft ? "media-left" : "media-right"
              }`}
              data-api-key="content"
            >
              <div className="item">
                <h2 style={{ color: columnSection4.headingColor || undefined }}>
                  {columnSection4.heading}
                </h2>
                {columnSection4.locations &&
                  columnSection4.locations.length > 0 && (
                    <ul className="columns">
                      {columnSection4.locations.map(
                        (location: any, idx: number) => (
                          <li key={idx}>
                            <a href={location.url}>{location.label}</a>
                          </li>
                        )
                      )}
                    </ul>
                  )}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col4Media.mobile}, ${col4Media.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col4Media.tablet}, ${col4Media.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${col4Media.desktop}, ${col4Media.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={col4Media.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={col4Media.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="1832"
                  height="1824"
                  alt={col4Media.alt}
                  draggable="false"
                />
              </picture>
            </div>
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
                  <h2 style={{ color: faqSection.headingColor || undefined }}>
                    {faqSection.subheading && (
                      <span className="small">{faqSection.subheading}</span>
                    )}
                    {faqSection.heading}
                  </h2>
                  {faqSection.questions && faqSection.questions.length > 0 && (
                    <div className="list">
                      {faqSection.questions.map((q: any, idx: number) => (
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
                  )}
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

  const getImageUrl = (imageField: any): string => {
    if (!imageField) return "";
    if (typeof imageField === "object" && imageField.cloudinary_url) {
      return imageField.cloudinary_url;
    }
    if (typeof imageField === "object" && imageField.url) {
      return imageField.url;
    }
    if (typeof imageField === "string") {
      return imageField;
    }
    return "";
  };

  return (
    <main
      id="main"
      style={{
        fontFamily: globalStyles?.fontFamily || undefined,
        color: globalStyles?.textColor || undefined,
      }}
    >
      {sectionOrder && sectionOrder.length > 0 ? (
        sectionOrder.map((section: any, idx: number) =>
          renderSection(section.section)
        )
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("intro")}
          {renderSection("columnSection1")}
          {renderSection("bannerSection1")}
          {renderSection("videoSection")}
          {renderSection("halfImageSection")}
          {renderSection("bannerSection2")}
          {renderSection("columnSection2")}
          {renderSection("ctaGeneralSection")}
          {renderSection("columnSection3")}
          {renderSection("bannerSection3")}
          {renderSection("columnSection4")}
          {renderSection("faqSection")}
        </>
      )}
    </main>
  );
};

export default BotoxPage;
