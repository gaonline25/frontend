// import React from "react";

// const MicroChanneling: React.FC = () => {
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
//               width={1994}
//               height={1206}
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
//                     href="/medical-spa/micro-channeling/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Micro Channeling
//                   </a>
//                 </li>
//               </ul>
//               <h1>Micro-Channeling</h1>
//               <div className="text">
//                 <p>
//                   Unlock the Secret to Glowing Skin at Goldfingers With
//                   Micro-Channeling
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
//                 srcSet="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1920"
//                 width={1920}
//                 height={1206}
//                 alt="Woman getting facial services"
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
//             <h2>Revitalize your complexion and reveal your inner glow</h2>
//             <p>
//               Collagen induction therapy, or a micro-channeling treatment,
//               stimulates your body &rsquo;s natural growth factors for a
//               remarkable degree of skin regeneration. Let Goldfingers help you
//               achieve a more youthful and radiant complexion &mdash;book your
//               appointment today to experience the excellent benefits of collagen
//               induction therapy!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-6"
//         data-s3-module
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2 className="text-center">
//               Transform Your Skin From The{" "}
//               <span className="block-desktop">
//                 Inside Out With Micro-Channeling
//               </span>
//             </h2>
//             <div className="columns-two">
//               <div>
//                 <p>
//                   Every day, our skin is exposed to various factors that
//                   contribute to visible and invisible aging, including:
//                 </p>
//                 <ul className="columns">
//                   <li>Sun damage</li>
//                   <li>Inflammation</li>
//                   <li>Chemicals</li>
//                   <li>The natural passage of time</li>
//                 </ul>
//                 <p>
//                   Unfortunately, as we age, the number of regenerative stem
//                   cells in our body decreases, making it harder for our skin to
//                   repair itself.
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   Collagen is a vital protein that helps keep our skin firm and
//                   youthful, but as we age, we lose collagen, leading to wrinkles
//                   and a loss of firmness. Micro-channeling is an innovative skin
//                   rejuvenation technique that combines micro-needling with
//                   nourishing serums to revitalize your complexion. Fine needles
//                   create microchannels in your skin, triggering a natural
//                   healing response that stimulates collagen and elastin
//                   production.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257057-banner-bgd-6.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width={2200}
//             height={802}
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module>
//         <div className="row mt-30 mb-30" data-api-key="content">
//           <div className="item">
//             <h2 className="text-center">
//               Experience This Groundbreaking Skin{" "}
//               <span className="block-desktop">
//                 Treatment At Goldfingers Aesthetics
//               </span>
//             </h2>
//             <div className="columns-two">
//               <div>
//                 <p>
//                   At Goldfingers Aesthetics, we pride ourselves on offering
//                   advanced and effective treatments backed by years of
//                   expertise. With 24 locations across Florida, our skilled
//                   practitioners are extensively trained in performing
//                   micro-channeling procedures, ensuring your comfort and safety
//                   throughout the treatment.
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   We understand your skin is unique, so we tailor every
//                   treatment to address your concerns and goals. With our
//                   commitment to delivering outstanding results, a welcoming
//                   environment, and a dedication to the art of aesthetics,
//                   choosing Goldfingers Aesthetics for your micro-channeling
//                   experience is a choice for superior care and rejuvenation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA General Module */}
//       <div
//         className="mod_cta_general viewport container cta  thin wow fadeInRight mt-0 mb-0 background-2"
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

//       {/* Column Module */}
//       <div className="mod_column viewport container has-media" data-s3-module>
//         <div className="row mt-30 mb-30 media-right" data-api-key="content">
//           <div className="item">
//             <h2>How Is Micro-Channeling Different From Microneedling?</h2>
//             <p>
//               Micro-channeling and microneedling are two popular skin
//               rejuvenation techniques that use tiny needles to create controlled
//               micro-injuries in the skin. While both treatments have
//               similarities, there are some critical differences between them.
//               Micro-channeling creates uniform micro-channels of the same size
//               and depth in the skin without scratching or damaging it, providing
//               a more precise and controlled delivery system for healing products
//               like serums and growth factors. Additionally, micro-channeling
//               stimulates collagen and elastin production, promoting natural skin
//               rejuvenation, while traditional microneedling primarily targets
//               the skin's surface. Overall, micro-channeling is a more advanced
//               and precise technique that can provide more significant and
//               long-lasting results. At Goldfingers, we use the latest technology
//               in micro-channeling to generate new healthy skin without utilizing
//               destructive and inflammatory techniques.
//             </p>
//           </div>
//           <picture className="media">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=904"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694025437-accent-10.jpg?auto=format,compress&w=904"
//               loading="lazy"
//               data-lazyload="img"
//               width={904}
//               height={1062}
//               alt="photo of Florida keys taken from the sky"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
//         data-s3-module
//       >
//         <div className="row half-image-row mt-0 mb-0">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009319-micro-channeling.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width={1832}
//                 height={1824}
//                 alt="Specialist working with patient"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>Micro-Channeling Benefits</h2>
//                 <p>
//                   Collagen production increases the thickness of the skin while
//                   improving the appearance of:
//                 </p>
//                 <ul className="columns">
//                   <li>Wrinkles</li>
//                   <li>Fine lines</li>
//                   <li>Uneven skin tone &amp;texture</li>
//                   <li>Reduces and minimizes acne scarring</li>
//                   <li>Hyperpigmentation</li>
//                   <li>Skin tightening</li>
//                   <li>Acne Scars/Surgical Scars</li>
//                   <li>Nourishes hair follicles</li>
//                   <li>Stretch marks</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module>
//         <div className="row mt-30 mb-30" data-api-key="content">
//           <div className="item">
//             <h2>Rejuvenate Your Skin With Precision</h2>
//             <p>
//               Your micro-channeling experience at Goldfingers Aesthetics begins
//               with a thorough consultation, where our experts assess your skin
//               and tailor the treatment to match your unique needs. During the
//               procedure, a specialized device creates controlled micro-injuries
//               in the skin, prompting the body &rsquo;s regenerative processes.
//               Nourishing serums are applied, allowing them to penetrate deeply
//               into the skin, flowing through the microchannels, for optimal skin
//               renewal. You will have the support of our professionals, who
//               genuinely care about ensuring your treatment is positive and
//               comfortable &ndash;and achieves the results you love.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-8"
//         data-s3-module
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2 className="text-center">
//               Your Journey To Fresh, Healthy Skin: Aftercare &nbsp;
//             </h2>
//             <div className="columns-three">
//               <div>
//                 <p>
//                   After receiving a micro-channeling treatment, you receive a
//                   take-home post-treatment kit with a three-day aftercare
//                   system. This system contains a blend of balanced growth
//                   factors and cytokines, potent peptides, and protective
//                   antioxidants that work together to promote cellular healing
//                   and rejuvenation.
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   This unique and valuable benefit sets micro-channeling apart
//                   from other standard micro-needling treatments available on the
//                   market. By continuing to use the post-treatment kit at home,
//                   you can extend the benefits of the treatment and support the
//                   healing process for optimal results.
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   You may experience mild redness and swelling, similar to a
//                   mild sunburn. This typically subsides within one to two days,
//                   and most individuals can resume regular activities comfortably
//                   immediately after the procedure. During this time, avoid
//                   direct sun exposure and apply sunscreen diligently to protect
//                   your skin during healing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257069-banner-bgd-8.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width={2200}
//             height={802}
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container has-media" data-s3-module>
//         <div className="row mt-30 media-left" data-api-key="content">
//           <div className="item">
//             <h2>
//               Achieve a Youthful and Radiant Complexion with Micro-Channeling
//             </h2>
//             <p>
//               By stimulating collagen and elastin production, micro-channeling
//               can help improve skin elasticity, firmness, and overall texture.
//               The treatment can also help reduce the appearance of pores and
//               enhance the skin's overall tone and radiance. Over time, the skin
//               becomes smoother, firmer, and even-toned, resulting in a more
//               youthful and radiant appearance. These results are long-lasting
//               and can continue to improve over time with a series of treatments.
//               Typically, a 4 to 6-week interval between treatments is
//               recommended. The more treatments you complete, the more
//               significant results you will likely achieve!
//             </p>
//           </div>
//           <picture className="media">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=904"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694025390-accent-2.jpg?auto=format,compress&w=904"
//               loading="lazy"
//               data-lazyload="img"
//               width={904}
//               height={1062}
//               alt="white sand beach"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default MicroChanneling;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import {
// //   fetchMicroFillersPageData,
// //   getResponsiveImageUrls,
// //   lexicalToHtml,
// // } from "@/lib/api/medicalSpa/fetchMicroChannelingPageComponent"; // Adjust path to your API utilities

// // interface MicroChannelingData {
// //   componentName: string;
// //   heroSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
// //     title: string;
// //     titleColor?: string;
// //     titleFontSize?: string;
// //     description?: any;
// //     descriptionColor?: string;
// //     ctaButton: {
// //       show: boolean;
// //       text: string;
// //       url: string;
// //       buttonClass?: string;
// //       backgroundColor?: string;
// //       textColor?: string;
// //       hoverBackgroundColor?: string;
// //     };
// //     mediaImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //   };
// //   introSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     className?: string;
// //     logo?: any;
// //     logoAlt?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content: any;
// //   };
// //   bannerSection1: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     isDark?: boolean;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     heading: string;
// //     headingColor?: string;
// //     headingAlignment?: string;
// //     headingBreakDesktop?: string;
// //     content?: any;
// //     useColumnLayout?: boolean;
// //     bulletPoints?: Array<{ text: string }>;
// //     bulletColumns?: boolean;
// //   };
// //   columnSection1: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingColor?: string;
// //     headingAlignment?: string;
// //     headingBreakDesktop?: string;
// //     content?: any;
// //     useColumnLayout?: boolean;
// //   };
// //   ctaGeneralSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     className?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingLink?: string;
// //     headingColor?: string;
// //     ctaButton: {
// //       text: string;
// //       url: string;
// //       buttonClass?: string;
// //       backgroundColor?: string;
// //       textColor?: string;
// //       hoverBackgroundColor?: string;
// //     };
// //   };
// //   columnSection2: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     hasMedia?: boolean;
// //     mediaPosition?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //     mediaImage: { mobile?: any; tablet?: any; desktop?: any; alt?: string };
// //   };
// //   halfImageSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     imagePosition?: string;
// //     verticalAlignment?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //     bulletPoints?: Array<{ text: string }>;
// //     bulletColumns?: boolean;
// //     contentPadded?: boolean;
// //     image: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //   };
// //   columnSection3: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //   };
// //   bannerSection2: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     isDark?: boolean;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     heading: string;
// //     headingColor?: string;
// //     headingAlignment?: string;
// //     content?: any;
// //     columnLayout?: string;
// //   };
// //   columnSection4: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     hasMedia?: boolean;
// //     mediaPosition?: string;
// //     paddingTop?: string;
// //     paddingBottom?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //     mediaImage: { mobile?: any; tablet?: any; desktop?: any; alt?: string };
// //   };
// //   sectionOrder: Array<{ section: string }>;
// //   globalStyles: {
// //     containerMaxWidth?: string;
// //     containerPadding?: string;
// //     sectionSpacing?: string;
// //     fontFamily?: string;
// //     primaryColor?: string;
// //     secondaryColor?: string;
// //     navyColor?: string;
// //     textColor?: string;
// //     linkColor?: string;
// //     linkHoverColor?: string;
// //     headingFontSize?: string;
// //   };
// //   typographySettings: {
// //     h1FontSize?: string;
// //     h1Color?: string;
// //     h1FontWeight?: string;
// //     h2FontSize?: string;
// //     h2Color?: string;
// //     h2FontWeight?: string;
// //     bodyFontSize?: string;
// //     bodyLineHeight?: string;
// //     textCenterClass?: string;
// //     blockDesktopClass?: string;
// //   };
// //   buttonStyles: {
// //     defaultBackgroundColor?: string;
// //     defaultTextColor?: string;
// //     defaultHoverBackground?: string;
// //     whiteBackgroundColor?: string;
// //     whiteTextColor?: string;
// //     whiteHoverBackground?: string;
// //     borderRadius?: string;
// //     padding?: string;
// //     fontSize?: string;
// //     fontWeight?: string;
// //   };
// //   listStyles: {
// //     bulletColor?: string;
// //     bulletStyle?: string;
// //     columnsBulletClass?: string;
// //   };
// //   columnLayoutSettings: {
// //     twoColumnClass?: string;
// //     threeColumnClass?: string;
// //     columnGap?: string;
// //   };
// //   animationSettings: {
// //     enableAnimations?: boolean;
// //     fadeInDuration?: string;
// //     animationEasing?: string;
// //     viewportAnimations?: Array<{ section: string; animationType: string }>;
// //   };
// //   accessibilitySettings: {
// //     skipToContent?: boolean;
// //     ariaLabelsEnabled?: boolean;
// //     altTextRequired?: boolean;
// //     focusVisibleColor?: string;
// //     contrastMode?: string;
// //   };
// //   mobileSettings: {
// //     mobileBreakpoint?: string;
// //     tabletBreakpoint?: string;
// //     mobileFontSizeAdjustment?: string;
// //     mobileSpacingAdjustment?: string;
// //     mobileStackBehavior?: boolean;
// //   };
// //   cssClassNames: {
// //     heroModuleClass?: string;
// //     introModuleClass?: string;
// //     bannerModuleClass?: string;
// //     columnModuleClass?: string;
// //     ctaGeneralModuleClass?: string;
// //     halfImageModuleClass?: string;
// //   };
// //   isActive: boolean;
// // }

// // const MicroChanneling: React.FC = () => {
// //   const [pageData, setPageData] = useState<MicroChannelingData | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const data = await fetchMicroFillersPageData(
// //           "micro-channeling-page-component"
// //         );
// //         setPageData(data);
// //       } catch (error) {
// //         console.error("Error fetching MicroChanneling page data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (loading) return <div>Loading...</div>;
// //   if (!pageData) return <div>No data available</div>;

// //   const {
// //     heroSection,
// //     introSection,
// //     bannerSection1,
// //     columnSection1,
// //     ctaGeneralSection,
// //     columnSection2,
// //     halfImageSection,
// //     columnSection3,
// //     bannerSection2,
// //     columnSection4,
// //     sectionOrder,
// //     globalStyles,
// //     typographySettings,
// //     buttonStyles,
// //     listStyles,
// //     columnLayoutSettings,
// //     animationSettings,
// //     accessibilitySettings,
// //     mobileSettings,
// //     cssClassNames,
// //   } = pageData;

// //   const getAnimationClass = (section: string) => {
// //     if (!animationSettings.enableAnimations) return "";
// //     const anim = animationSettings.viewportAnimations?.find(
// //       (a) => a.section === section
// //     );
// //     switch (anim?.animationType) {
// //       case "fadeInUp":
// //         return `wow fadeInUp`;
// //       case "fadeInLeft":
// //         return `wow fadeInLeft`;
// //       case "fadeInRight":
// //         return `wow fadeInRight`;
// //       case "fadeIn":
// //         return `wow fadeIn`;
// //       default:
// //         return "";
// //     }
// //   };

// //   const getColumnClass = (layout: string | undefined) => {
// //     switch (layout) {
// //       case "two":
// //         return columnLayoutSettings.twoColumnClass || "columns-two";
// //       case "three":
// //         return columnLayoutSettings.threeColumnClass || "columns-three";
// //       default:
// //         return "";
// //     }
// //   };

// //   const renderSection = (section: string) => {
// //     switch (section) {
// //       case "hero":
// //         if (!heroSection.show) return null;
// //         const heroBgImages = getResponsiveImageUrls(
// //           heroSection.backgroundImage
// //         );
// //         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
// //         return (
// //           <div
// //             className={
// //               cssClassNames.heroModuleClass || "mod_hero banner mobile-stack"
// //             }
// //             data-s3-module
// //             style={{ backgroundColor: heroSection.backgroundColor }}
// //           >
// //             <div className="wrapper">
// //               <picture className="background">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet={heroBgImages.mobile}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet={heroBgImages.tablet}
// //                 />
// //                 <source
// //                   media="(max-width:1400px)"
// //                   srcSet={heroBgImages.desktop}
// //                 />
// //                 <source srcSet={heroBgImages.large} />
// //                 <img
// //                   src={heroBgImages.large}
// //                   loading="lazy"
// //                   alt={heroBgImages.alt || "Background Texture"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //               <div className="row">
// //                 <div className="inner">
// //                   <ul className="partial_breadcrumb" data-s3-partial>
// //                     {heroSection.breadcrumbs.map((crumb, index) => (
// //                       <li key={index}>
// //                         <a
// //                           href={crumb.url}
// //                           role="link"
// //                           aria-label={
// //                             accessibilitySettings.ariaLabelsEnabled
// //                               ? crumb.ariaLabel
// //                               : undefined
// //                           }
// //                           style={{ color: globalStyles.linkColor }}
// //                           onMouseOver={(e) =>
// //                             globalStyles.linkHoverColor &&
// //                             (e.currentTarget.style.color =
// //                               globalStyles.linkHoverColor)
// //                           }
// //                           onMouseOut={(e) =>
// //                             globalStyles.linkColor &&
// //                             (e.currentTarget.style.color =
// //                               globalStyles.linkColor)
// //                           }
// //                         >
// //                           {crumb.label}
// //                         </a>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <h1
// //                     style={{
// //                       color: heroSection.titleColor,
// //                       fontSize:
// //                         heroSection.titleFontSize ||
// //                         typographySettings.h1FontSize,
// //                       fontWeight: typographySettings.h1FontWeight,
// //                     }}
// //                   >
// //                     {heroSection.title}
// //                   </h1>
// //                   <div
// //                     className="text"
// //                     style={{
// //                       color:
// //                         heroSection.descriptionColor || globalStyles.textColor,
// //                     }}
// //                   >
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(heroSection.description),
// //                       }}
// //                     />
// //                     {heroSection.ctaButton.show && (
// //                       <p>
// //                         <a
// //                           className={`btn ${
// //                             heroSection.ctaButton.buttonClass || "white"
// //                           }`}
// //                           href={heroSection.ctaButton.url}
// //                           role="button"
// //                           style={{
// //                             backgroundColor:
// //                               heroSection.ctaButton.backgroundColor ||
// //                               (heroSection.ctaButton.buttonClass === "white"
// //                                 ? buttonStyles.whiteBackgroundColor
// //                                 : buttonStyles.defaultBackgroundColor),
// //                             color:
// //                               heroSection.ctaButton.textColor ||
// //                               (heroSection.ctaButton.buttonClass === "white"
// //                                 ? buttonStyles.whiteTextColor
// //                                 : buttonStyles.defaultTextColor),
// //                             borderRadius: buttonStyles.borderRadius,
// //                             padding: buttonStyles.padding,
// //                             fontSize: buttonStyles.fontSize,
// //                             fontWeight: buttonStyles.fontWeight,
// //                           }}
// //                           onMouseOver={(e) => {
// //                             const hoverColor =
// //                               heroSection.ctaButton.hoverBackgroundColor ||
// //                               (heroSection.ctaButton.buttonClass === "white"
// //                                 ? buttonStyles.whiteHoverBackground
// //                                 : buttonStyles.defaultHoverBackground);
// //                             hoverColor &&
// //                               (e.currentTarget.style.backgroundColor =
// //                                 hoverColor);
// //                           }}
// //                           onMouseOut={(e) => {
// //                             const bgColor =
// //                               heroSection.ctaButton.backgroundColor ||
// //                               (heroSection.ctaButton.buttonClass === "white"
// //                                 ? buttonStyles.whiteBackgroundColor
// //                                 : buttonStyles.defaultBackgroundColor);
// //                             bgColor &&
// //                               (e.currentTarget.style.backgroundColor = bgColor);
// //                           }}
// //                         >
// //                           {heroSection.ctaButton.text}
// //                         </a>
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="media">
// //                 <picture className="background">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={heroMediaImages.mobile}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={heroMediaImages.tablet}
// //                   />
// //                   <source
// //                     media="(max-width:1400px)"
// //                     srcSet={heroMediaImages.desktop}
// //                   />
// //                   <source srcSet={heroMediaImages.large} />
// //                   <img
// //                     src={heroMediaImages.large}
// //                     loading="lazy"
// //                     alt={heroMediaImages.alt || "Woman getting facial services"}
// //                     draggable="false"
// //                   />
// //                 </picture>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "intro":
// //         if (!introSection.show) return null;
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.introModuleClass ||
// //               "mod_intro container viewport option-1 wide"
// //             } ${getAnimationClass("intro")}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: introSection.backgroundColor,
// //               color: introSection.textColor,
// //             }}
// //           >
// //             <div className="row">
// //               {introSection.logo && (
// //                 <picture className="logo">
// //                   <img
// //                     src={getResponsiveImageUrls(introSection.logo).large}
// //                     loading="lazy"
// //                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
// //                     draggable="false"
// //                     data-api-key="logo"
// //                   />
// //                 </picture>
// //               )}
// //               <div className="inner" data-api-key="content">
// //                 <h2
// //                   style={{
// //                     color:
// //                       introSection.headingColor || typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {introSection.heading}
// //                 </h2>
// //                 <div
// //                   dangerouslySetInnerHTML={{
// //                     __html: lexicalToHtml(introSection.content),
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "bannerSection1":
// //         if (!bannerSection1.show) return null;
// //         const banner1Images = getResponsiveImageUrls(
// //           bannerSection1.backgroundImage
// //         );
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.bannerModuleClass ||
// //               "mod_banner dark hide-divider viewport"
// //             } background-6 ${getAnimationClass("bannerSection1")}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: bannerSection1.backgroundColor,
// //               color: bannerSection1.textColor,
// //             }}
// //           >
// //             <div className={`row ${getAnimationClass("bannerSection1")}`}>
// //               <div className="content" data-api-key="top_content">
// //                 <h2
// //                   className={
// //                     bannerSection1.headingAlignment === "center"
// //                       ? typographySettings.textCenterClass || "text-center"
// //                       : ""
// //                   }
// //                   style={{
// //                     color:
// //                       bannerSection1.headingColor || typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {bannerSection1.heading}
// //                   {bannerSection1.headingBreakDesktop && (
// //                     <span
// //                       className={
// //                         typographySettings.blockDesktopClass || "block-desktop"
// //                       }
// //                     >
// //                       {bannerSection1.headingBreakDesktop}
// //                     </span>
// //                   )}
// //                 </h2>
// //                 <div
// //                   className={
// //                     bannerSection1.useColumnLayout ? getColumnClass("two") : ""
// //                   }
// //                 >
// //                   {bannerSection1.content && (
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(bannerSection1.content),
// //                       }}
// //                     />
// //                   )}
// //                   {bannerSection1.bulletPoints && (
// //                     <ul
// //                       className={
// //                         bannerSection1.bulletColumns
// //                           ? listStyles.columnsBulletClass || "columns"
// //                           : ""
// //                       }
// //                       style={{
// //                         listStyleType: listStyles.bulletStyle,
// //                         color: listStyles.bulletColor,
// //                       }}
// //                     >
// //                       {bannerSection1.bulletPoints.map((point, index) => (
// //                         <li key={index}>{point.text}</li>
// //                       ))}
// //                     </ul>
// //                   )}
// //                   {bannerSection1.useColumnLayout && <div />}
// //                 </div>
// //               </div>
// //             </div>
// //             <picture className="background">
// //               <source media="(max-width:420px)" srcSet={banner1Images.mobile} />
// //               <source media="(max-width:800px)" srcSet={banner1Images.tablet} />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet={banner1Images.desktop}
// //               />
// //               <source srcSet={banner1Images.large} />
// //               <img
// //                 src={banner1Images.large}
// //                 loading="lazy"
// //                 alt={banner1Images.alt || "Banner media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         );

// //       case "columnSection1":
// //         if (!columnSection1.show) return null;
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.columnModuleClass || "mod_column viewport container"
// //             }`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: columnSection1.backgroundColor,
// //               color: columnSection1.textColor,
// //               paddingTop: columnSection1.paddingTop,
// //               paddingBottom: columnSection1.paddingBottom,
// //             }}
// //           >
// //             <div className="row mt-30 mb-30" data-api-key="content">
// //               <div className="item">
// //                 <h2
// //                   className={
// //                     columnSection1.headingAlignment === "center"
// //                       ? typographySettings.textCenterClass || "text-center"
// //                       : ""
// //                   }
// //                   style={{
// //                     color:
// //                       columnSection1.headingColor || typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {columnSection1.heading}
// //                   {columnSection1.headingBreakDesktop && (
// //                     <span
// //                       className={
// //                         typographySettings.blockDesktopClass || "block-desktop"
// //                       }
// //                     >
// //                       {columnSection1.headingBreakDesktop}
// //                     </span>
// //                   )}
// //                 </h2>
// //                 <div
// //                   className={
// //                     columnSection1.useColumnLayout ? getColumnClass("two") : ""
// //                   }
// //                 >
// //                   {columnSection1.content && (
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(columnSection1.content),
// //                       }}
// //                     />
// //                   )}
// //                   {columnSection1.useColumnLayout && <div />}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "ctaGeneralSection":
// //         if (!ctaGeneralSection.show) return null;
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.ctaGeneralModuleClass ||
// //               "mod_cta_general viewport container cta thin"
// //             } background-2 ${getAnimationClass("ctaGeneralSection")}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: ctaGeneralSection.backgroundColor,
// //               color: ctaGeneralSection.textColor,
// //               paddingTop: ctaGeneralSection.paddingTop,
// //               paddingBottom: ctaGeneralSection.paddingBottom,
// //             }}
// //           >
// //             <div className="row">
// //               <div className="text">
// //                 <h2
// //                   style={{
// //                     color:
// //                       ctaGeneralSection.headingColor ||
// //                       typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {ctaGeneralSection.headingLink ? (
// //                     <a href={ctaGeneralSection.headingLink}>
// //                       {ctaGeneralSection.heading}
// //                     </a>
// //                   ) : (
// //                     ctaGeneralSection.heading
// //                   )}
// //                 </h2>
// //                 <a
// //                   className={`btn ${
// //                     ctaGeneralSection.ctaButton.buttonClass || "white"
// //                   }`}
// //                   href={ctaGeneralSection.ctaButton.url}
// //                   role="button"
// //                   style={{
// //                     backgroundColor:
// //                       ctaGeneralSection.ctaButton.backgroundColor ||
// //                       (ctaGeneralSection.ctaButton.buttonClass === "white"
// //                         ? buttonStyles.whiteBackgroundColor
// //                         : buttonStyles.defaultBackgroundColor),
// //                     color:
// //                       ctaGeneralSection.ctaButton.textColor ||
// //                       (ctaGeneralSection.ctaButton.buttonClass === "white"
// //                         ? buttonStyles.whiteTextColor
// //                         : buttonStyles.defaultTextColor),
// //                     borderRadius: buttonStyles.borderRadius,
// //                     padding: buttonStyles.padding,
// //                     fontSize: buttonStyles.fontSize,
// //                     fontWeight: buttonStyles.fontWeight,
// //                   }}
// //                   onMouseOver={(e) => {
// //                     const hoverColor =
// //                       ctaGeneralSection.ctaButton.hoverBackgroundColor ||
// //                       (ctaGeneralSection.ctaButton.buttonClass === "white"
// //                         ? buttonStyles.whiteHoverBackground
// //                         : buttonStyles.defaultHoverBackground);
// //                     hoverColor &&
// //                       (e.currentTarget.style.backgroundColor = hoverColor);
// //                   }}
// //                   onMouseOut={(e) => {
// //                     const bgColor =
// //                       ctaGeneralSection.ctaButton.backgroundColor ||
// //                       (ctaGeneralSection.ctaButton.buttonClass === "white"
// //                         ? buttonStyles.whiteBackgroundColor
// //                         : buttonStyles.defaultBackgroundColor);
// //                     bgColor &&
// //                       (e.currentTarget.style.backgroundColor = bgColor);
// //                   }}
// //                 >
// //                   {ctaGeneralSection.ctaButton.text}
// //                 </a>
// //               </div>
// //               <div className="media"></div>
// //             </div>
// //           </div>
// //         );

// //       case "columnSection2":
// //         if (!columnSection2.show) return null;
// //         const column2Images = getResponsiveImageUrls(columnSection2.mediaImage);
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.columnModuleClass || "mod_column viewport container"
// //             } ${columnSection2.hasMedia ? "has-media" : ""}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: columnSection2.backgroundColor,
// //               color: columnSection2.textColor,
// //               paddingTop: columnSection2.paddingTop,
// //               paddingBottom: columnSection2.paddingBottom,
// //             }}
// //           >
// //             <div
// //               className={`row mt-30 mb-30 media-${
// //                 columnSection2.mediaPosition || "right"
// //               }`}
// //               data-api-key="content"
// //             >
// //               <div className="item">
// //                 <h2
// //                   style={{
// //                     color:
// //                       columnSection2.headingColor || typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {columnSection2.heading}
// //                 </h2>
// //                 {columnSection2.content && (
// //                   <div
// //                     dangerouslySetInnerHTML={{
// //                       __html: lexicalToHtml(columnSection2.content),
// //                     }}
// //                   />
// //                 )}
// //               </div>
// //               {columnSection2.hasMedia && columnSection2.mediaImage && (
// //                 <picture className="media">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={column2Images.mobile}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={column2Images.tablet}
// //                   />
// //                   <source srcSet={column2Images.desktop} />
// //                   <img
// //                     src={column2Images.desktop}
// //                     loading="lazy"
// //                     alt={column2Images.alt}
// //                     draggable="false"
// //                   />
// //                 </picture>
// //               )}
// //             </div>
// //           </div>
// //         );

// //       case "halfImageSection":
// //         if (!halfImageSection.show) return null;
// //         const halfImages = getResponsiveImageUrls(halfImageSection.image);
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.halfImageModuleClass ||
// //               "mod_half_image viewport half-image container"
// //             } background-navy ${getAnimationClass("halfImageSection")}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor:
// //                 halfImageSection.backgroundColor || globalStyles.navyColor,
// //               color: halfImageSection.textColor,
// //               paddingTop: halfImageSection.paddingTop,
// //               paddingBottom: halfImageSection.paddingBottom,
// //             }}
// //           >
// //             <div
// //               className={`row half-image-row mt-0 mb-0 ${
// //                 halfImageSection.imagePosition === "right" ? "flipped" : ""
// //               } align-${halfImageSection.verticalAlignment || "center"}`}
// //             >
// //               <div className="media">
// //                 <picture className="background">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={halfImages.mobile}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={halfImages.tablet}
// //                   />
// //                   <source
// //                     media="(max-width:1400px)"
// //                     srcSet={halfImages.desktop}
// //                   />
// //                   <source srcSet={halfImages.large} />
// //                   <img
// //                     src={halfImages.large}
// //                     loading="lazy"
// //                     alt={halfImages.alt}
// //                     draggable="false"
// //                     data-api-key="image"
// //                   />
// //                 </picture>
// //               </div>
// //               <div
// //                 className={`copy ${
// //                   halfImageSection.contentPadded ? "padded" : ""
// //                 }`}
// //               >
// //                 <div className="inner">
// //                   <div className="content" data-api-key="content">
// //                     <h2
// //                       style={{
// //                         color:
// //                           halfImageSection.headingColor ||
// //                           typographySettings.h2Color,
// //                         fontSize: typographySettings.h2FontSize,
// //                         fontWeight: typographySettings.h2FontWeight,
// //                       }}
// //                     >
// //                       {halfImageSection.heading}
// //                     </h2>
// //                     {halfImageSection.content && (
// //                       <div
// //                         dangerouslySetInnerHTML={{
// //                           __html: lexicalToHtml(halfImageSection.content),
// //                         }}
// //                       />
// //                     )}
// //                     {halfImageSection.bulletPoints && (
// //                       <ul
// //                         className={
// //                           halfImageSection.bulletColumns
// //                             ? listStyles.columnsBulletClass || "columns"
// //                             : ""
// //                         }
// //                         style={{
// //                           listStyleType: listStyles.bulletStyle,
// //                           color: listStyles.bulletColor,
// //                         }}
// //                       >
// //                         {halfImageSection.bulletPoints.map((point, index) => (
// //                           <li key={index}>{point.text}</li>
// //                         ))}
// //                       </ul>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "columnSection3":
// //         if (!columnSection3.show) return null;
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.columnModuleClass || "mod_column viewport container"
// //             }`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: columnSection3.backgroundColor,
// //               color: columnSection3.textColor,
// //               paddingTop: columnSection3.paddingTop,
// //               paddingBottom: columnSection3.paddingBottom,
// //             }}
// //           >
// //             <div className="row mt-30 mb-30" data-api-key="content">
// //               <div className="item">
// //                 <h2
// //                   style={{
// //                     color:
// //                       columnSection3.headingColor || typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {columnSection3.heading}
// //                 </h2>
// //                 {columnSection3.content && (
// //                   <div
// //                     dangerouslySetInnerHTML={{
// //                       __html: lexicalToHtml(columnSection3.content),
// //                     }}
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "bannerSection2":
// //         if (!bannerSection2.show) return null;
// //         const banner2Images = getResponsiveImageUrls(
// //           bannerSection2.backgroundImage
// //         );
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.bannerModuleClass ||
// //               "mod_banner dark hide-divider viewport"
// //             } background-8 ${getAnimationClass("bannerSection2")}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: bannerSection2.backgroundColor,
// //               color: bannerSection2.textColor,
// //             }}
// //           >
// //             <div className={`row ${getAnimationClass("bannerSection2")}`}>
// //               <div className="content" data-api-key="top_content">
// //                 <h2
// //                   className={
// //                     bannerSection2.headingAlignment === "center"
// //                       ? typographySettings.textCenterClass || "text-center"
// //                       : ""
// //                   }
// //                   style={{
// //                     color:
// //                       bannerSection2.headingColor || typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {bannerSection2.heading}
// //                 </h2>
// //                 <div
// //                   className={
// //                     bannerSection2.columnLayout
// //                       ? getColumnClass(bannerSection2.columnLayout)
// //                       : ""
// //                   }
// //                 >
// //                   {bannerSection2.content && (
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(bannerSection2.content),
// //                       }}
// //                     />
// //                   )}
// //                   {bannerSection2.columnLayout &&
// //                     bannerSection2.columnLayout !== "one" && (
// //                       <>
// //                         <div />
// //                         {bannerSection2.columnLayout === "three" && <div />}
// //                       </>
// //                     )}
// //                 </div>
// //               </div>
// //             </div>
// //             <picture className="background">
// //               <source media="(max-width:420px)" srcSet={banner2Images.mobile} />
// //               <source media="(max-width:800px)" srcSet={banner2Images.tablet} />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet={banner2Images.desktop}
// //               />
// //               <source srcSet={banner2Images.large} />
// //               <img
// //                 src={banner2Images.large}
// //                 loading="lazy"
// //                 alt={banner2Images.alt || "Banner media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         );

// //       case "columnSection4":
// //         if (!columnSection4.show) return null;
// //         const column4Images = getResponsiveImageUrls(columnSection4.mediaImage);
// //         return (
// //           <div
// //             className={`${
// //               cssClassNames.columnModuleClass || "mod_column viewport container"
// //             } ${columnSection4.hasMedia ? "has-media" : ""}`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: columnSection4.backgroundColor,
// //               color: columnSection4.textColor,
// //               paddingTop: columnSection4.paddingTop,
// //               paddingBottom: columnSection4.paddingBottom,
// //             }}
// //           >
// //             <div
// //               className={`row mt-30 media-${
// //                 columnSection4.mediaPosition || "left"
// //               }`}
// //               data-api-key="content"
// //             >
// //               <div className="item">
// //                 <h2
// //                   style={{
// //                     color:
// //                       columnSection4.headingColor || typographySettings.h2Color,
// //                     fontSize: typographySettings.h2FontSize,
// //                     fontWeight: typographySettings.h2FontWeight,
// //                   }}
// //                 >
// //                   {columnSection4.heading}
// //                 </h2>
// //                 {columnSection4.content && (
// //                   <div
// //                     dangerouslySetInnerHTML={{
// //                       __html: lexicalToHtml(columnSection4.content),
// //                     }}
// //                   />
// //                 )}
// //               </div>
// //               {columnSection4.hasMedia && columnSection4.mediaImage && (
// //                 <picture className="media">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={column4Images.mobile}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={column4Images.tablet}
// //                   />
// //                   <source srcSet={column4Images.desktop} />
// //                   <img
// //                     src={column4Images.desktop}
// //                     loading="lazy"
// //                     alt={column4Images.alt}
// //                     draggable="false"
// //                   />
// //                 </picture>
// //               )}
// //             </div>
// //           </div>
// //         );

// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <main
// //       id="main"
// //       style={{
// //         maxWidth: globalStyles.containerMaxWidth,
// //         padding: globalStyles.containerPadding,
// //         fontFamily: globalStyles.fontFamily,
// //         color: globalStyles.textColor,
// //         margin: "0 auto",
// //       }}
// //     >
// //       {accessibilitySettings.skipToContent && (
// //         <a
// //           href="#main"
// //           className="skip-to-content"
// //           style={{ position: "absolute", left: "-9999px", top: 0 }}
// //         >
// //           Skip to content
// //         </a>
// //       )}
// //       {sectionOrder.map((item, index) => (
// //         <React.Fragment key={index}>
// //           {renderSection(item.section)}
// //         </React.Fragment>
// //       ))}
// //     </main>
// //   );
// // };

// // export default MicroChanneling;

"use client";

import React, { useEffect, useState } from "react";

interface MicroChannelingData {
  heroSection: {
    show: boolean;
    backgroundColor?: string;
    backgroundImage: any;
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
    mediaImage: any;
  };
  introSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    layout?: string;
    showViewport?: boolean;
    animationType?: string;
    logo?: any;
    logoAlt?: string;
    logoWidth?: string;
    logoHeight?: string;
    heading: string;
    headingColor?: string;
    content: any;
  };
  bannerSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    theme?: string;
    hideDivider?: boolean;
    backgroundStyle?: string;
    showViewport?: boolean;
    animationType?: string;
    backgroundImage: any;
    heading: string;
    headingAlignment?: string;
    headingColor?: string;
    columnLayout?: string;
    columns?: Array<{
      content?: any;
      listItems?: Array<{ item: string }>;
      listStyle?: string;
    }>;
  };
  columnSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    showViewport?: boolean;
    marginTop?: string;
    marginBottom?: string;
    heading: string;
    headingColor?: string;
    headingAlignment?: string;
    columnLayout?: string;
    columns?: Array<{ content?: any }>;
  };
  ctaGeneralSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    backgroundStyle?: string;
    showViewport?: boolean;
    animationType?: string;
    marginTop?: string;
    marginBottom?: string;
    heading: string;
    headingUrl?: string;
    headingColor?: string;
    ctaButton: {
      show: boolean;
      text: string;
      url: string;
      style?: string;
      backgroundColor?: string;
      textColor?: string;
    };
    mediaImage?: any;
  };
  columnMediaSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    showViewport?: boolean;
    marginTop?: string;
    marginBottom?: string;
    imagePosition?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    image: any;
  };
  halfImageSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    imagePosition?: string;
    verticalAlignment?: string;
    showViewport?: boolean;
    animationType?: string;
    backgroundStyle?: string;
    marginTop?: string;
    marginBottom?: string;
    contentPadding?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    listItems?: Array<{ item: string }>;
    listStyle?: string;
    image: any;
  };
  columnSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    showViewport?: boolean;
    marginTop?: string;
    marginBottom?: string;
    heading: string;
    headingColor?: string;
    content?: any;
  };
  bannerSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    theme?: string;
    hideDivider?: boolean;
    backgroundStyle?: string;
    showViewport?: boolean;
    animationType?: string;
    backgroundImage: any;
    heading: string;
    headingAlignment?: string;
    headingColor?: string;
    columnLayout?: string;
    columns?: Array<{ content?: any }>;
  };
  columnMediaSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    showViewport?: boolean;
    marginTop?: string;
    marginBottom?: string;
    imagePosition?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    image: any;
  };
  globalStyles?: any;
  buttonStyles?: any;
}

export function getImageUrl(imageField: any): string {
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
}

// Helper function to get responsive image URLs
export function getResponsiveImageUrls(imageGroup: any) {
  if (!imageGroup) {
    return {
      mobile: "",
      tablet: "",
      desktop: "",
      large: "",
      alt: "",
    };
  }
  return {
    mobile: getImageUrl(imageGroup.mobile),
    tablet: getImageUrl(imageGroup.tablet),
    desktop: getImageUrl(imageGroup.desktop),
    large: getImageUrl(imageGroup.large),
    alt: imageGroup.alt || "",
  };
}

const lexicalToHtml = (content: any) => {
  if (!content) return "";
  // Simple conversion - you may need to adjust based on your Lexical structure
  if (typeof content === "string") return content;

  // Handle Lexical JSON structure
  if (content.root && content.root.children) {
    return content.root.children
      .map((node: any) => {
        if (node.type === "paragraph") {
          const text = node.children
            ?.map((child: any) => child.text || "")
            .join("");
          return `<p>${text}</p>`;
        }
        return "";
      })
      .join("");
  }

  return JSON.stringify(content);
};

const fetchMicroChannelingPageData = async (slug: string) => {
  try {
    const response = await fetch(
      `https://goldfingerbackend.vercel.app/api/micro-channeling-page-component?where[componentName][equals]=${slug}`
    );
    const data = await response.json();
    return data.docs[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const MicroChanneling: React.FC = () => {
  const [pageData, setPageData] = useState<MicroChannelingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMicroChannelingPageData(
          "Micro Channeling Page Component"
        );
        setPageData(data);
      } catch (error) {
        console.error("Error fetching MicroChanneling page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const heroImages = getResponsiveImageUrls(
    pageData.heroSection.backgroundImage
  );
  const heroMediaImages = getResponsiveImageUrls(
    pageData.heroSection.mediaImage
  );
  const introLogo = pageData.introSection.logo;
  const banner1Images = getResponsiveImageUrls(
    pageData.bannerSection1.backgroundImage
  );
  const columnMedia1Images = getResponsiveImageUrls(
    pageData.columnMediaSection1.image
  );
  const halfImage1Images = getResponsiveImageUrls(
    pageData.halfImageSection1.image
  );
  const banner2Images = getResponsiveImageUrls(
    pageData.bannerSection2.backgroundImage
  );
  const columnMedia2Images = getResponsiveImageUrls(
    pageData.columnMediaSection2.image
  );

  return (
    <main id="main">
      {/* Hero Module */}
      {pageData.heroSection.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module>
          <div className="wrapper">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${heroImages?.mobile}?auto=format,compress&w=420, ${heroImages?.mobile}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${heroImages?.tablet}?auto=format,compress&w=800, ${heroImages?.tablet}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${heroImages?.desktop}?auto=format,compress&w=1400, ${heroImages?.desktop}?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${heroImages?.large}?auto=format,compress&w=1994`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${heroImages?.large}?auto=format,compress&w=1994`}
                loading="lazy"
                data-lazyload="img"
                width={1994}
                height={1206}
                alt={heroImages?.alt || "Background Texture"}
                draggable="false"
              />
            </picture>
            <div className="row">
              <div className="inner">
                <ul className="partial_breadcrumb" data-s3-partial>
                  {pageData.heroSection.breadcrumbs.map((crumb, index) => (
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
                <h1>{pageData.heroSection.title}</h1>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(pageData.heroSection.description),
                  }}
                />
                {pageData.heroSection.ctaButton.show && (
                  <p>
                    <a
                      className="btn white"
                      href={pageData.heroSection.ctaButton.url}
                      role="button"
                    >
                      {pageData.heroSection.ctaButton.text}
                    </a>
                  </p>
                )}
              </div>
            </div>
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={`${heroMediaImages?.mobile}?auto=format,compress&w=420, ${heroMediaImages?.mobile}?auto=format,compress&w=630 2x`}
                  data-lazyload-srcset={`${heroMediaImages?.mobile}?auto=format,compress&w=420, ${heroMediaImages?.mobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${heroMediaImages?.tablet}?auto=format,compress&w=800, ${heroMediaImages?.tablet}?auto=format,compress&w=1200 2x`}
                  data-lazyload-srcset={`${heroMediaImages?.tablet}?auto=format,compress&w=800, ${heroMediaImages?.tablet}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${heroMediaImages?.desktop}?auto=format,compress&w=1400, ${heroMediaImages?.desktop}?auto=format,compress&w=2100 2x`}
                  data-lazyload-srcset={`${heroMediaImages?.desktop}?auto=format,compress&w=1400, ${heroMediaImages?.desktop}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={`${heroMediaImages?.large}?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${heroMediaImages?.large}?auto=format,compress&w=1920`}
                />
                <img
                  src={`${heroMediaImages?.large}?auto=format,compress&w=1920`}
                  width={heroMediaImages?.width || 1920}
                  height={heroMediaImages?.height || 1206}
                  alt={heroMediaImages?.alt || "Woman getting facial services"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Intro Module */}
      {pageData.introSection.show && (
        <div
          className={`mod_intro container viewport ${pageData.introSection.layout || "option-1"} ${pageData.introSection.containerWidth || "wide"} wow ${pageData.introSection.animationType || "fadeInUp"}`}
          data-s3-module
        >
          <div className="row">
            {introLogo && (
              <picture className="logo">
                <img
                  src={introLogo.url}
                  width={pageData.introSection.logoWidth || 58}
                  height={pageData.introSection.logoHeight || 64}
                  loading="lazy"
                  alt={
                    pageData.introSection.logoAlt ||
                    "Goldfingers aesthetic logo"
                  }
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="inner" data-api-key="content">
              <h2>{pageData.introSection.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(pageData.introSection.content),
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Banner Module 1 */}
      {pageData.bannerSection1.show && (
        <div
          className={`mod_banner ${pageData.bannerSection1.theme || "dark"} ${pageData.bannerSection1.hideDivider ? "hide-divider" : ""} viewport ${pageData.bannerSection1.backgroundStyle || "background-6"}`}
          data-s3-module
        >
          <div
            className={`row wow ${pageData.bannerSection1.animationType || "fadeInUp"}`}
          >
            <div className="content" data-api-key="top_content">
              <h2
                className={
                  pageData.bannerSection1.headingAlignment === "center"
                    ? "text-center"
                    : ""
                }
              >
                {pageData.bannerSection1.heading}
              </h2>
              <div
                className={
                  pageData.bannerSection1.columnLayout || "columns-two"
                }
              >
                {pageData.bannerSection1.columns?.map((column, index) => (
                  <div key={index}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(column.content),
                      }}
                    />
                    {column.listItems && column.listItems.length > 0 && (
                      <ul
                        className={
                          column.listStyle === "columns" ? "columns" : ""
                        }
                      >
                        {column.listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner1Images?.mobile}?auto=format,compress&w=800, ${banner1Images?.mobile}?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner1Images?.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${banner1Images?.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner1Images?.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${banner1Images?.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner1Images?.large}?auto=format,compress&w=2200&q=85&sharp=5`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={`${banner1Images?.large}?auto=format,compress&w=2200&q=85&sharp=5`}
              loading="lazy"
              data-lazyload="img"
              width={2200}
              height={802}
              alt={banner1Images?.alt || "Banner media"}
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Column Module 1 */}
      {pageData.columnSection1.show && (
        <div className="mod_column viewport container" data-s3-module>
          <div
            className={`row ${pageData.columnSection1.marginTop || "mt-30"} ${pageData.columnSection1.marginBottom || "mb-30"}`}
            data-api-key="content"
          >
            <div className="item">
              <h2
                className={
                  pageData.columnSection1.headingAlignment || "text-center"
                }
              >
                {pageData.columnSection1.heading}
              </h2>
              <div
                className={
                  pageData.columnSection1.columnLayout || "columns-two"
                }
              >
                {pageData.columnSection1.columns?.map((column, index) => (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(column.content),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA General Module */}
      {pageData.ctaGeneralSection1.show && (
        <div
          className={`mod_cta_general viewport container cta ${pageData.ctaGeneralSection1.containerWidth || "thin"} wow ${pageData.ctaGeneralSection1.animationType || "fadeInRight"} ${pageData.ctaGeneralSection1.marginTop || "mt-0"} ${pageData.ctaGeneralSection1.marginBottom || "mb-0"} ${pageData.ctaGeneralSection1.backgroundStyle || "background-2"}`}
          data-s3-module
        >
          <div className="row">
            <div className="text">
              <h2>
                <a href={pageData.ctaGeneralSection1.headingUrl}>
                  {pageData.ctaGeneralSection1.heading}
                </a>
              </h2>
              {pageData.ctaGeneralSection1.ctaButton.show && (
                <a
                  href={pageData.ctaGeneralSection1.ctaButton.url}
                  className={`btn ${pageData.ctaGeneralSection1.ctaButton.style || "white"}`}
                >
                  {pageData.ctaGeneralSection1.ctaButton.text}
                </a>
              )}
            </div>
            <div className="media"></div>
          </div>
        </div>
      )}

      {/* Column Module with Media 1 */}
      {pageData.columnMediaSection1.show && (
        <div className="mod_column viewport container has-media" data-s3-module>
          <div
            className={`row ${pageData.columnMediaSection1.marginTop || "mt-30"} ${pageData.columnMediaSection1.marginBottom || "mb-30"} ${pageData.columnMediaSection1.imagePosition || "media-right"}`}
            data-api-key="content"
          >
            <div className="item">
              <h2>{pageData.columnMediaSection1.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(pageData.columnMediaSection1.content),
                }}
              />
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${columnMedia1Images?.mobile}?auto=format,compress&w=420, ${columnMedia1Images?.mobile}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${columnMedia1Images?.tablet}?auto=format,compress&w=800, ${columnMedia1Images?.tablet}?auto=format,compress&w=1200 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${columnMedia1Images?.desktop}?auto=format,compress&w=904`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${columnMedia1Images?.desktop}?auto=format,compress&w=904`}
                loading="lazy"
                data-lazyload="img"
                width={columnMedia1Images?.width || 904}
                height={columnMedia1Images?.height || 1062}
                alt={
                  columnMedia1Images?.alt ||
                  "photo of Florida keys taken from the sky"
                }
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {/* Half Image Module */}
      {pageData.halfImageSection1.show && (
        <div
          className={`mod_half_image viewport half-image container wow ${pageData.halfImageSection1.animationType || "fadeInLeft"} ${pageData.halfImageSection1.backgroundStyle || "background-navy"}`}
          data-s3-module
        >
          <div
            className={`row half-image-row ${pageData.halfImageSection1.marginTop || "mt-0"} ${pageData.halfImageSection1.marginBottom || "mb-0"}`}
          >
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${halfImage1Images?.mobile}?auto=format,compress&w=420, ${halfImage1Images?.mobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${halfImage1Images?.tablet}?auto=format,compress&w=800, ${halfImage1Images?.tablet}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${halfImage1Images?.desktop}?auto=format,compress&w=1400, ${halfImage1Images?.desktop}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${halfImage1Images?.large}?auto=format,compress&w=1832`}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={`${halfImage1Images?.large}?auto=format,compress&w=1832`}
                  loading="lazy"
                  data-lazyload="img"
                  width={halfImage1Images?.width || 1832}
                  height={halfImage1Images?.height || 1824}
                  alt={
                    halfImage1Images?.alt || "Specialist working with patient"
                  }
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div
              className={`copy ${pageData.halfImageSection1.contentPadding || "padded"}`}
            >
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2>{pageData.halfImageSection1.heading}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(pageData.halfImageSection1.content),
                    }}
                  />
                  {pageData.halfImageSection1.listItems &&
                    pageData.halfImageSection1.listItems.length > 0 && (
                      <ul
                        className={
                          pageData.halfImageSection1.listStyle === "columns"
                            ? "columns"
                            : ""
                        }
                      >
                        {pageData.halfImageSection1.listItems.map(
                          (item, index) => (
                            <li key={index}>{item.item}</li>
                          )
                        )}
                      </ul>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Column Module 2 */}
      {pageData.columnSection2.show && (
        <div className="mod_column viewport container" data-s3-module>
          <div
            className={`row ${pageData.columnSection2.marginTop || "mt-30"} ${pageData.columnSection2.marginBottom || "mb-30"}`}
            data-api-key="content"
          >
            <div className="item">
              <h2>{pageData.columnSection2.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(pageData.columnSection2.content),
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Banner Module 2 */}
      {pageData.bannerSection2.show && (
        <div
          className={`mod_banner ${pageData.bannerSection2.theme || "dark"} ${pageData.bannerSection2.hideDivider ? "hide-divider" : ""} viewport ${pageData.bannerSection2.backgroundStyle || "background-8"}`}
          data-s3-module
        >
          <div
            className={`row wow ${pageData.bannerSection2.animationType || "fadeInUp"}`}
          >
            <div className="content" data-api-key="top_content">
              <h2
                className={
                  pageData.bannerSection2.headingAlignment === "center"
                    ? "text-center"
                    : ""
                }
              >
                {pageData.bannerSection2.heading}
              </h2>
              <div
                className={
                  pageData.bannerSection2.columnLayout || "columns-three"
                }
              >
                {pageData.bannerSection2.columns?.map((column, index) => (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(column.content),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner2Images?.mobile}?auto=format,compress&w=800, ${banner2Images?.mobile}?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner2Images?.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${banner2Images?.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner2Images?.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${banner2Images?.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${banner2Images?.large}?auto=format,compress&w=2200&q=85&sharp=5`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={`${banner2Images?.large}?auto=format,compress&w=2200&q=85&sharp=5`}
              loading="lazy"
              data-lazyload="img"
              width={2200}
              height={802}
              alt={banner2Images?.alt || "Banner media"}
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Column Module with Media 2 */}
      {pageData.columnMediaSection2.show && (
        <div className="mod_column viewport container has-media" data-s3-module>
          <div
            className={`row ${pageData.columnMediaSection2.marginTop || "mt-30"} ${pageData.columnMediaSection2.imagePosition || "media-left"}`}
            data-api-key="content"
          >
            <div className="item">
              <h2>{pageData.columnMediaSection2.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(pageData.columnMediaSection2.content),
                }}
              />
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${columnMedia2Images?.mobile}?auto=format,compress&w=420, ${columnMedia2Images?.mobile}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${columnMedia2Images?.tablet}?auto=format,compress&w=800, ${columnMedia2Images?.tablet}?auto=format,compress&w=1200 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${columnMedia2Images?.desktop}?auto=format,compress&w=904`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${columnMedia2Images?.desktop}?auto=format,compress&w=904`}
                loading="lazy"
                data-lazyload="img"
                width={columnMedia2Images?.width || 904}
                height={columnMedia2Images?.height || 1062}
                alt={columnMedia2Images?.alt || "white sand beach"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}
    </main>
  );
};

export default MicroChanneling;