// // import React from "react";

// // const DiamondGlow: React.FC = () => {
// //   return (
// //     <main id="main">
// //       {/* Page Layout */}
// //       {/* Hero Module */}
// //       <div className="mod_hero banner mobile-stack" data-s3-module="">
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
// //                     href="/medical-spa/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Medical Spa
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="/medical-spa/diamondglow/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Diamondglow
// //                   </a>
// //                 </li>
// //               </ul>
// //               <h1>DiamondGlow</h1>
// //               <div className="text">
// //                 <p>
// //                   Patients who are looking to revitalize and refresh their skin
// //                   can now achieve their goals with DiamondGlow. This
// //                   comprehensive skin care treatment can address a wide array of
// //                   concerns, allowing patients to enjoy smoother, more radiant
// //                   skin.&nbsp;
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
// //                 srcSet="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=2200"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=2200"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=2200"
// //                 width="2200"
// //                 height="1129"
// //                 alt="Woman touching her face and smiling"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Intro Module */}
// //       <div
// //         className="mod_intro container viewport option-1 wide wow fadeInUp"
// //         data-s3-module=""
// //       >
// //         <div className="row ">
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
// //             <h2>
// //               Overcome dull, damaged, and dry skin{" "}
// //               <span className="block">with DiamondGlow </span>
// //             </h2>
// //             <p>
// //               DiamondGlow is a cutting-edge skin resurfacing solution that
// //               involves a combination of extraction, exfoliation, and the
// //               application of special serums that can improve skin health and
// //               appearance. This non-invasive skin treatment gives patients the
// //               ability to achieve more hydrated, smoother, and firmer skin with
// //               virtually no downtime. Whether the patient is struggling with
// //               hyperpigmentation, acne, or redness, DiamondGlow can address it by
// //               exfoliating the skin and infusing it with potent serums.
// //             </p>
// //             <p>
// //               At Goldfinger Aesthetics, Doctors James and My Pham Young have
// //               helped countless patients achieve their cosmetic goals with
// //               DiamondGlow.&nbsp;
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Two Column Module */}
// //       <div className="mod_columns_two viewport container" data-s3-module="">
// //         <div className="row ">
// //           <h2 data-api-key="title">What is DiamondGlow?</h2>
// //           <div className="content ">
// //             <div className="item wow fadeInLeft" data-api-key="content_left">
// //               <p>
// //                 DiamondGlow goes beyond the benefits of a traditional facial
// //                 treatment. Unlike wet facial treatments, which involve a process
// //                 of chemical exfoliation to treat the skin at the surface level,
// //                 DiamondGlow's is equipped with a recessed diamond tip wand that
// //                 thoroughly resurfaces the skin, simultaneously vacuuming away
// //                 debris. Patients are left with skin that is clean and
// //                 rejuvenated.&nbsp;
// //               </p>
// //             </div>
// //             <div className="item wow fadeInRight" data-api-key="content_right">
// //               <p>
// //                 The treatment combines the powers of exfoliation, extraction,
// //                 and serum injections to improve the overall health and
// //                 appearance of the skin.
// //               </p>
// //               <p>
// //                 It can address specific skin concerns such as hydration, acne,
// //                 or hyperpigmentation.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark  hide-divider viewport background-1"
// //         data-s3-module=""
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <h2>What are the benefits of DiamondGlow?</h2>
// //             <p>
// //               DiamondGlow is designed to leave patients' skin looking
// //               rejuvenated with benefits that continue to improve long after the
// //               treatment session.
// //             </p>
// //             <div className="columns-two">
// //               <div>
// //                 <p>It is an ideal treatment for those struggling with:</p>
// //                 <ul>
// //                   <li>Skin dryness &nbsp;</li>
// //                   <li>
// //                     Signs of aging, such as fine lines and wrinkles &nbsp;
// //                   </li>
// //                   <li>Discoloration and dark spots</li>
// //                   <li>Dull-looking skin &nbsp;</li>
// //                   <li>Clogged pores &nbsp;</li>
// //                 </ul>
// //               </div>
// //               <div>
// //                 <p>Some of the most notable benefits include:</p>
// //                 <ul>
// //                   <li>Smoother skin texture</li>
// //                   <li>A major reduction in wrinkles and fine lines</li>
// //                   <li>Tighter skin</li>
// //                   <li>Improvements in tone and elasticity &nbsp;</li>
// //                   <li>Improvements in scarring and hyperpigmentation &nbsp;</li>
// //                   <li>Smaller pores &nbsp;</li>
// //                   <li>Improved hydration and radiance &nbsp;</li>
// //                 </ul>
// //               </div>
// //             </div>
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
// //       {/* Half Image Module */}
// //       <div
// //         className="mod_half_image  viewport half-image container wow fadeInLeft "
// //         data-s3-module=""
// //       >
// //         <div className="row half-image-row">
// //           <div className="media">
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=2119"
// //               />
// //               <img
// //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                 data-lazyload-src="https://www.datocms-assets.com/105497/1700500419-istock-459395425.jpg?auto=format,compress&w=2119"
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="2119"
// //                 height="1414"
// //                 alt=""
// //                 draggable="false"
// //                 data-api-key="image"
// //               />
// //             </picture>
// //           </div>
// //           <div className="copy padded2">
// //             <div className="inner">
// //               <div className="content" data-api-key="content">
// //                 <h2>
// //                   Who is a candidate{" "}
// //                   <span className="block">for DiamondGlow? </span>
// //                 </h2>
// //                 <p>
// //                   DiamondGlow is considered to be a safe and effective treatment
// //                   for patients of various skin types, tones, and textures.
// //                   Patients can address various concerns affecting their face or
// //                   body, which may have resulted from aging, sun damage, or other
// //                   environmental stressors. Some of these include stretch marks,
// //                   sun damage, and acne.&nbsp;
// //                 </p>
// //                 <p>
// //                   Whether you are looking to restore a youthful quality to your
// //                   skin or simply maintain it going forward, DiamondGlow is the
// //                   ideal treatment.&nbsp;
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Column Module */}
// //       <div className="mod_column viewport container" data-s3-module="">
// //         <div className="row " data-api-key="content">
// //           <div className="item">
// //             <h2>What is the treatment process like?</h2>
// //             <p>
// //               Prior to beginning the treatment process, a diamond tip gradient
// //               is chosen based on your skincare concerns. Dr. Young will go over
// //               the options with you during the consultation. Next, the diamond
// //               tip gently exfoliates the skin's surface layer, eliminating any
// //               dry or dead skin.
// //             </p>
// //             <div className="columns-two">
// //               <div>
// //                 <p>
// //                   Next is the extraction phase. This is accomplished by
// //                   employing a vacuum-like process to remove dead cells and
// //                   debris from within the skin pores. Following this, a
// //                   condition-specific serum is administered to the area. The
// //                   process of exfoliation and extraction enables the serums to
// //                   penetrate the skin at a depth where the dermal and epidermal
// //                   layers meet.&nbsp;
// //                 </p>
// //               </div>
// //               <div>
// //                 <p>
// //                   DiamondGlow is a versatile treatment that can be applied to
// //                   areas such as the face, hands, and body. This treatment is
// //                   carried out in-office and can last as little as 45 minutes.
// //                   Patients who are looking to rejuvenate and revitalize their
// //                   skin can finally achieve their goals with DiamondGlow.&nbsp;
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Banner Module */}
// //       <div
// //         className="mod_banner dark  hide-divider viewport background-3"
// //         data-s3-module=""
// //       >
// //         <div className="row wow fadeInUp">
// //           <div className="content" data-api-key="top_content">
// //             <div className="columns-two">
// //               <div>
// //                 <h2>What is the recovery period like?</h2>
// //                 <p>
// //                   One of DiamondGlow's most notable advantages is that it comes
// //                   with no downtime, enabling patients to return to their busy
// //                   schedules immediately following the treatment. While patients
// //                   may experience some slight redness following the treatment,
// //                   these effects are subtle and typically fade away within an
// //                   hour after the treatment.
// //                 </p>
// //                 <p>
// //                   That said, patients should make sure to avoid excessive sun
// //                   exposure for a few days after the procedure, as this could
// //                   exacerbate redness or negatively impact the results.&nbsp;
// //                 </p>
// //               </div>
// //               <div>
// //                 <h2>When will the results show up?</h2>
// //                 <p>
// //                   Patients will notice their results immediately following the
// //                   treatment. Patients typically leave our office with the
// //                   treatment areas looking smoother and feeling tighter.
// //                   DiamondGlow also increases the skin's volume by up to 70%
// //                   after the first three days.
// //                 </p>
// //                 <p>
// //                   The effects of DiamondGlow are long-lasting, enabling patients
// //                   to address their skin aging issues and achieve an optimal
// //                   glow. While benefits are noticeable immediately following the
// //                   treatment, it can take up to a full two weeks before the final
// //                   results are perceivable. Multiple sessions may be necessary
// //                   for patients to achieve their desired look.&nbsp;
// //                 </p>
// //               </div>
// //             </div>
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
// //       <div className="mod_column viewport container" data-s3-module="">
// //         <div className="row " data-api-key="content">
// //           <div className="item">
// //             <h2>Why choose Goldfinger Aesthetics?</h2>
// //             <p>
// //               At Goldfinger Aesthetics, Doctors James and My Pham Young always
// //               keep up-to-date with the latest developments in the world of
// //               cosmetology. Whether a patient is interested in surgery or
// //               something non-invasive, the team at Goldfinger Aesthetics applies
// //               their expertise to help them achieve their desired results. We
// //               have aided countless patients on their journey toward healthy,
// //               glowing skin with the innovative DiamondGlow device.&nbsp;
// //             </p>
// //             <p>
// //               Reach out to our office today to schedule a confidential
// //               consultation and learn more about your treatment options with
// //               DiamondGlow.&nbsp;
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default DiamondGlow;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchDiamondFillersPageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
// } from "@/lib/api/medicalSpa/fetchDiamondGlowPageComponent"; // Adjust path to your API utilities

// interface DiamondGlowData {
//   componentName: string;
//   heroSection: {
//     show: boolean;
//     backgroundColor?: string;
//     backgroundImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
//     title: string;
//     titleColor?: string;
//     titleFontSize?: string;
//     description?: any;
//     descriptionColor?: string;
//     ctaButton: {
//       show: boolean;
//       text: string;
//       url: string;
//       backgroundColor?: string;
//       textColor?: string;
//       hoverBackgroundColor?: string;
//     };
//     mediaImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//   };
//   introSection: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     logo?: any;
//     logoAlt?: string;
//     heading: string;
//     headingColor?: string;
//     content: any;
//   };
//   twoColumnSection1: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     heading: string;
//     headingColor?: string;
//     leftColumnContent?: any;
//     rightColumnContent?: any;
//   };
//   bannerSection1: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//     heading: string;
//     headingColor?: string;
//     introText?: any;
//     leftColumn: { heading?: string; bulletPoints?: Array<{ text: string }> };
//     rightColumn: { heading?: string; bulletPoints?: Array<{ text: string }> };
//   };
//   halfImageSection: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     imagePosition?: string;
//     verticalAlignment?: string;
//     heading: string;
//     headingColor?: string;
//     content?: any;
//     image: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//   };
//   columnSection1: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     heading: string;
//     headingColor?: string;
//     introContent?: any;
//     layoutType?: string;
//     leftColumnContent?: any;
//     rightColumnContent?: any;
//   };
//   bannerSection2: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     backgroundImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//     leftColumn: { heading: string; headingColor?: string; content?: any };
//     rightColumn: { heading: string; headingColor?: string; content?: any };
//   };
//   columnSection2: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     heading: string;
//     headingColor?: string;
//     content?: any;
//   };
//   sectionOrder: Array<{ section: string }>;
//   globalStyles: {
//     containerMaxWidth?: string;
//     containerPadding?: string;
//     sectionSpacing?: string;
//     fontFamily?: string;
//     primaryColor?: string;
//     secondaryColor?: string;
//     textColor?: string;
//     linkColor?: string;
//     linkHoverColor?: string;
//     headingFontSize?: string;
//   };
//   typographySettings: {
//     h1FontSize?: string;
//     h1Color?: string;
//     h1FontWeight?: string;
//     h2FontSize?: string;
//     h2Color?: string;
//     h2FontWeight?: string;
//     bodyFontSize?: string;
//     bodyLineHeight?: string;
//   };
//   buttonStyles: {
//     defaultBackgroundColor?: string;
//     defaultTextColor?: string;
//     defaultHoverBackground?: string;
//     borderRadius?: string;
//     padding?: string;
//     fontSize?: string;
//     fontWeight?: string;
//   };
//   animationSettings: {
//     enableAnimations?: boolean;
//     fadeInDuration?: string;
//     slideInDuration?: string;
//     animationEasing?: string;
//   };
//   seoSettings: {
//     metaTitle?: string;
//     metaDescription?: string;
//     ogImage?: any;
//     keywords?: string;
//     canonicalUrl?: string;
//     robots?: string;
//   };
//   accessibilitySettings: {
//     skipToContent?: boolean;
//     ariaLabelsEnabled?: boolean;
//     altTextRequired?: boolean;
//     focusVisibleColor?: string;
//     contrastMode?: string;
//   };
//   mobileSettings: {
//     mobileBreakpoint?: string;
//     tabletBreakpoint?: string;
//     mobileFontSizeAdjustment?: string;
//     mobileSpacingAdjustment?: string;
//   };
//   isActive: boolean;
// }

// const DiamondGlowPage: React.FC = () => {
//   const [pageData, setPageData] = useState<DiamondGlowData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchDiamondFillersPageData(
//           "diamondglow-page-component"
//         );
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching DiamondGlow page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const {
//     heroSection,
//     introSection,
//     twoColumnSection1,
//     bannerSection1,
//     halfImageSection,
//     columnSection1,
//     bannerSection2,
//     columnSection2,
//     sectionOrder,
//     globalStyles,
//     typographySettings,
//     buttonStyles,
//     animationSettings,
//     accessibilitySettings,
//     mobileSettings,
//   } = pageData;

//   const getAnimationClass = (section: string) => {
//     if (!animationSettings.enableAnimations) return "";
//     switch (section) {
//       case "intro":
//         return `wow fadeInUp`;
//       case "twoColumnSection1":
//         return `wow fadeInUp`;
//       case "bannerSection1":
//         return `wow fadeInUp`;
//       case "halfImageSection":
//         return `wow fadeInLeft`;
//       case "bannerSection2":
//         return `wow fadeInUp`;
//       default:
//         return "";
//     }
//   };

//   const renderSection = (section: string) => {
//     switch (section) {
//       case "hero":
//         if (!heroSection.show) return null;
//         const heroBgImages = getResponsiveImageUrls(
//           heroSection.backgroundImage
//         );
//         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
//         return (
//           <div
//             className="mod_hero banner mobile-stack"
//             data-s3-module
//             style={{ backgroundColor: heroSection.backgroundColor }}
//           >
//             <div className="wrapper">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={heroBgImages.mobile}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={heroBgImages.tablet}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={heroBgImages.desktop}
//                 />
//                 <source srcSet={heroBgImages.large} />
//                 <img
//                   src={heroBgImages.large}
//                   loading="lazy"
//                   alt={heroBgImages.alt || "Background Texture"}
//                   draggable="false"
//                 />
//               </picture>
//               <div className="row">
//                 <div className="inner">
//                   <ul className="partial_breadcrumb" data-s3-partial>
//                     {heroSection.breadcrumbs.map((crumb, index) => (
//                       <li key={index}>
//                         <a
//                           href={crumb.url}
//                           role="link"
//                           aria-label={
//                             accessibilitySettings.ariaLabelsEnabled
//                               ? crumb.ariaLabel
//                               : undefined
//                           }
//                           style={{ color: globalStyles.linkColor }}
//                           onMouseOver={(e) =>
//                             globalStyles.linkHoverColor &&
//                             (e.currentTarget.style.color =
//                               globalStyles.linkHoverColor)
//                           }
//                           onMouseOut={(e) =>
//                             globalStyles.linkColor &&
//                             (e.currentTarget.style.color =
//                               globalStyles.linkColor)
//                           }
//                         >
//                           {crumb.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                   <h1
//                     style={{
//                       color: heroSection.titleColor,
//                       fontSize:
//                         heroSection.titleFontSize ||
//                         typographySettings.h1FontSize,
//                       fontWeight: typographySettings.h1FontWeight,
//                     }}
//                   >
//                     {heroSection.title}
//                   </h1>
//                   <div
//                     className="text"
//                     style={{
//                       color:
//                         heroSection.descriptionColor || globalStyles.textColor,
//                     }}
//                   >
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(heroSection.description),
//                       }}
//                     />
//                     {heroSection.ctaButton.show && (
//                       <p>
//                         <a
//                           className="btn white"
//                           href={heroSection.ctaButton.url}
//                           role="button"
//                           style={{
//                             backgroundColor:
//                               heroSection.ctaButton.backgroundColor ||
//                               buttonStyles.defaultBackgroundColor,
//                             color:
//                               heroSection.ctaButton.textColor ||
//                               buttonStyles.defaultTextColor,
//                             borderRadius: buttonStyles.borderRadius,
//                             padding: buttonStyles.padding,
//                             fontSize: buttonStyles.fontSize,
//                             fontWeight: buttonStyles.fontWeight,
//                           }}
//                           onMouseOver={(e) =>
//                             heroSection.ctaButton.hoverBackgroundColor &&
//                             (e.currentTarget.style.backgroundColor =
//                               heroSection.ctaButton.hoverBackgroundColor)
//                           }
//                           onMouseOut={(e) =>
//                             heroSection.ctaButton.backgroundColor &&
//                             (e.currentTarget.style.backgroundColor =
//                               heroSection.ctaButton.backgroundColor ||
//                               buttonStyles.defaultBackgroundColor)
//                           }
//                         >
//                           {heroSection.ctaButton.text}
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
//                     srcSet={heroMediaImages.mobile}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={heroMediaImages.tablet}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={heroMediaImages.desktop}
//                   />
//                   <source srcSet={heroMediaImages.large} />
//                   <img
//                     src={heroMediaImages.large}
//                     loading="lazy"
//                     alt={
//                       heroMediaImages.alt ||
//                       "Woman touching her face and smiling"
//                     }
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//         );

//       case "intro":
//         if (!introSection.show) return null;
//         return (
//           <div
//             className={`mod_intro container viewport option-1 wide ${getAnimationClass(
//               "intro"
//             )}`}
//             data-s3-module
//             style={{
//               backgroundColor: introSection.backgroundColor,
//               color: introSection.textColor,
//             }}
//           >
//             <div className="row">
//               {introSection.logo && (
//                 <picture className="logo">
//                   <img
//                     src={getResponsiveImageUrls(introSection.logo).large}
//                     loading="lazy"
//                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}
//               <div className="inner" data-api-key="content">
//                 <h2
//                   style={{
//                     color:
//                       introSection.headingColor || typographySettings.h2Color,
//                     fontSize: typographySettings.h2FontSize,
//                     fontWeight: typographySettings.h2FontWeight,
//                   }}
//                 >
//                   {introSection.heading.includes("with DiamondGlow") ? (
//                     <>
//                       {introSection.heading.replace(" with DiamondGlow", "")}
//                       <span className="block">with DiamondGlow</span>
//                     </>
//                   ) : (
//                     introSection.heading
//                   )}
//                 </h2>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(introSection.content),
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         );

//       case "twoColumnSection1":
//         if (!twoColumnSection1.show) return null;
//         return (
//           <div
//             className={`mod_columns_two viewport container ${getAnimationClass(
//               "twoColumnSection1"
//             )}`}
//             data-s3-module
//             style={{
//               backgroundColor: twoColumnSection1.backgroundColor,
//               color: twoColumnSection1.textColor,
//             }}
//           >
//             <div className="row">
//               <h2
//                 data-api-key="title"
//                 style={{
//                   color:
//                     twoColumnSection1.headingColor ||
//                     typographySettings.h2Color,
//                   fontSize: typographySettings.h2FontSize,
//                   fontWeight: typographySettings.h2FontWeight,
//                 }}
//               >
//                 {twoColumnSection1.heading}
//               </h2>
//               <div className="content">
//                 {twoColumnSection1.leftColumnContent && (
//                   <div
//                     className="item wow fadeInLeft"
//                     data-api-key="content_left"
//                   >
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(
//                           twoColumnSection1.leftColumnContent
//                         ),
//                       }}
//                     />
//                   </div>
//                 )}
//                 {twoColumnSection1.rightColumnContent && (
//                   <div
//                     className="item wow fadeInRight"
//                     data-api-key="content_right"
//                   >
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(
//                           twoColumnSection1.rightColumnContent
//                         ),
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       case "bannerSection1":
//         if (!bannerSection1.show) return null;
//         const banner1Images = getResponsiveImageUrls(
//           bannerSection1.backgroundImage
//         );
//         return (
//           <div
//             className={`mod_banner dark hide-divider viewport background-1 ${getAnimationClass(
//               "bannerSection1"
//             )}`}
//             data-s3-module
//             style={{
//               backgroundColor: bannerSection1.backgroundColor,
//               color: bannerSection1.textColor,
//             }}
//           >
//             <div className="row">
//               <div className="content" data-api-key="top_content">
//                 <h2
//                   style={{
//                     color:
//                       bannerSection1.headingColor || typographySettings.h2Color,
//                     fontSize: typographySettings.h2FontSize,
//                     fontWeight: typographySettings.h2FontWeight,
//                   }}
//                 >
//                   {bannerSection1.heading}
//                 </h2>
//                 {bannerSection1.introText && (
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(bannerSection1.introText),
//                     }}
//                   />
//                 )}
//                 <div className="columns-two">
//                   {bannerSection1.leftColumn && (
//                     <div>
//                       {bannerSection1.leftColumn.heading && (
//                         <p>{bannerSection1.leftColumn.heading}</p>
//                       )}
//                       {bannerSection1.leftColumn.bulletPoints && (
//                         <ul>
//                           {bannerSection1.leftColumn.bulletPoints.map(
//                             (point, index) => (
//                               <li key={index}>{point.text}</li>
//                             )
//                           )}
//                         </ul>
//                       )}
//                     </div>
//                   )}
//                   {bannerSection1.rightColumn && (
//                     <div>
//                       {bannerSection1.rightColumn.heading && (
//                         <p>{bannerSection1.rightColumn.heading}</p>
//                       )}
//                       {bannerSection1.rightColumn.bulletPoints && (
//                         <ul>
//                           {bannerSection1.rightColumn.bulletPoints.map(
//                             (point, index) => (
//                               <li key={index}>{point.text}</li>
//                             )
//                           )}
//                         </ul>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <picture className="background">
//               <source media="(max-width:420px)" srcSet={banner1Images.mobile} />
//               <source media="(max-width:800px)" srcSet={banner1Images.tablet} />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet={banner1Images.desktop}
//               />
//               <source srcSet={banner1Images.large} />
//               <img
//                 src={banner1Images.large}
//                 loading="lazy"
//                 alt={banner1Images.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "halfImageSection":
//         if (!halfImageSection.show) return null;
//         const halfImages = getResponsiveImageUrls(halfImageSection.image);
//         return (
//           <div
//             className={`mod_half_image viewport half-image container ${getAnimationClass(
//               "halfImageSection"
//             )} ${halfImageSection.verticalAlignment || "center"}`}
//             data-s3-module
//             style={{
//               backgroundColor: halfImageSection.backgroundColor,
//               color: halfImageSection.textColor,
//             }}
//           >
//             <div
//               className={`row half-image-row ${
//                 halfImageSection.imagePosition === "right" ? "flipped" : ""
//               }`}
//             >
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={halfImages.mobile}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={halfImages.tablet}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={halfImages.desktop}
//                   />
//                   <source srcSet={halfImages.large} />
//                   <img
//                     src={halfImages.large}
//                     loading="lazy"
//                     alt={halfImages.alt}
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
//                         color:
//                           halfImageSection.headingColor ||
//                           typographySettings.h2Color,
//                         fontSize: typographySettings.h2FontSize,
//                         fontWeight: typographySettings.h2FontWeight,
//                       }}
//                     >
//                       {halfImageSection.heading.includes("for DiamondGlow") ? (
//                         <>
//                           {halfImageSection.heading.replace(
//                             " for DiamondGlow",
//                             ""
//                           )}
//                           <span className="block">for DiamondGlow</span>
//                         </>
//                       ) : (
//                         halfImageSection.heading
//                       )}
//                     </h2>
//                     {halfImageSection.content && (
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: lexicalToHtml(halfImageSection.content),
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "columnSection1":
//         if (!columnSection1.show) return null;
//         return (
//           <div
//             className="mod_column viewport container"
//             data-s3-module
//             style={{
//               backgroundColor: columnSection1.backgroundColor,
//               color: columnSection1.textColor,
//             }}
//           >
//             <div className="row" data-api-key="content">
//               <div className="item">
//                 <h2
//                   style={{
//                     color:
//                       columnSection1.headingColor || typographySettings.h2Color,
//                     fontSize: typographySettings.h2FontSize,
//                     fontWeight: typographySettings.h2FontWeight,
//                   }}
//                 >
//                   {columnSection1.heading}
//                 </h2>
//                 {columnSection1.introContent && (
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(columnSection1.introContent),
//                     }}
//                   />
//                 )}
//                 {columnSection1.layoutType === "two-columns" && (
//                   <div className="columns-two">
//                     {columnSection1.leftColumnContent && (
//                       <div>
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: lexicalToHtml(
//                               columnSection1.leftColumnContent
//                             ),
//                           }}
//                         />
//                       </div>
//                     )}
//                     {columnSection1.rightColumnContent && (
//                       <div>
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: lexicalToHtml(
//                               columnSection1.rightColumnContent
//                             ),
//                           }}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       case "bannerSection2":
//         if (!bannerSection2.show) return null;
//         const banner2Images = getResponsiveImageUrls(
//           bannerSection2.backgroundImage
//         );
//         return (
//           <div
//             className={`mod_banner dark hide-divider viewport background-3 ${getAnimationClass(
//               "bannerSection2"
//             )}`}
//             data-s3-module
//             style={{
//               backgroundColor: bannerSection2.backgroundColor,
//               color: bannerSection2.textColor,
//             }}
//           >
//             <div className="row">
//               <div className="content" data-api-key="top_content">
//                 <div className="columns-two">
//                   <div>
//                     <h2
//                       style={{
//                         color:
//                           bannerSection2.leftColumn.headingColor ||
//                           typographySettings.h2Color,
//                         fontSize: typographySettings.h2FontSize,
//                         fontWeight: typographySettings.h2FontWeight,
//                       }}
//                     >
//                       {bannerSection2.leftColumn.heading}
//                     </h2>
//                     {bannerSection2.leftColumn.content && (
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: lexicalToHtml(
//                             bannerSection2.leftColumn.content
//                           ),
//                         }}
//                       />
//                     )}
//                   </div>
//                   <div>
//                     <h2
//                       style={{
//                         color:
//                           bannerSection2.rightColumn.headingColor ||
//                           typographySettings.h2Color,
//                         fontSize: typographySettings.h2FontSize,
//                         fontWeight: typographySettings.h2FontWeight,
//                       }}
//                     >
//                       {bannerSection2.rightColumn.heading}
//                     </h2>
//                     {bannerSection2.rightColumn.content && (
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: lexicalToHtml(
//                             bannerSection2.rightColumn.content
//                           ),
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <picture className="background">
//               <source media="(max-width:420px)" srcSet={banner2Images.mobile} />
//               <source media="(max-width:800px)" srcSet={banner2Images.tablet} />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet={banner2Images.desktop}
//               />
//               <source srcSet={banner2Images.large} />
//               <img
//                 src={banner2Images.large}
//                 loading="lazy"
//                 alt={banner2Images.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "columnSection2":
//         if (!columnSection2.show) return null;
//         return (
//           <div
//             className="mod_column viewport container"
//             data-s3-module
//             style={{
//               backgroundColor: columnSection2.backgroundColor,
//               color: columnSection2.textColor,
//             }}
//           >
//             <div className="row" data-api-key="content">
//               <div className="item">
//                 <h2
//                   style={{
//                     color:
//                       columnSection2.headingColor || typographySettings.h2Color,
//                     fontSize: typographySettings.h2FontSize,
//                     fontWeight: typographySettings.h2FontWeight,
//                   }}
//                 >
//                   {columnSection2.heading}
//                 </h2>
//                 {columnSection2.content && (
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(columnSection2.content),
//                     }}
//                   />
//                 )}
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
//         maxWidth: globalStyles.containerMaxWidth,
//         padding: globalStyles.containerPadding,
//         fontFamily: globalStyles.fontFamily,
//         color: globalStyles.textColor,
//         margin: "0 auto",
//       }}
//     >
//       {accessibilitySettings.skipToContent && (
//         <a
//           href="#main"
//           className="skip-to-content"
//           style={{ position: "absolute", left: "-9999px", top: 0 }}
//         >
//           Skip to content
//         </a>
//       )}
//       {sectionOrder.map((item, index) => (
//         <React.Fragment key={index}>
//           {renderSection(item.section)}
//         </React.Fragment>
//       ))}
//     </main>
//   );
// };

// export default DiamondGlowPage;

"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchDiamondGlowPageComponent"; // Adjust path to your API utilities

interface DiamondGlowData {
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
  twoColumnSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    leftColumnContent?: any;
    rightColumnContent?: any;
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
    introText?: any;
    leftColumn: { heading?: string; bulletPoints?: Array<{ text: string }> };
    rightColumn: { heading?: string; bulletPoints?: Array<{ text: string }> };
  };
  halfImageSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    imagePosition?: string;
    verticalAlignment?: string;
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
  columnSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    introContent?: any;
    layoutType?: string;
    leftColumnContent?: any;
    rightColumnContent?: any;
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
    leftColumn: { heading: string; headingColor?: string; content?: any };
    rightColumn: { heading: string; headingColor?: string; content?: any };
  };
  columnSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    content?: any;
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

interface DiamondGlowPageProps {
  data: DiamondGlowData;
}

const DiamondGlowPage: React.FC<DiamondGlowPageProps> = ({ data }) => {
  if (!data) return <div>No data available</div>;

  const {
    heroSection,
    introSection,
    twoColumnSection1,
    bannerSection1,
    halfImageSection,
    columnSection1,
    bannerSection2,
    columnSection2,
    sectionOrder,
    globalStyles,
    typographySettings,
    buttonStyles,
    animationSettings,
    accessibilitySettings,
    mobileSettings,
  } = data;

  const getAnimationClass = (section: string) => {
    if (!animationSettings.enableAnimations) return "";
    switch (section) {
      case "intro":
        return `wow fadeInUp`;
      case "twoColumnSection1":
        return `wow fadeInUp`;
      case "bannerSection1":
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
                    alt={
                      heroMediaImages.alt ||
                      "Woman touching her face and smiling"
                    }
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
            <div className="row">
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
                  {introSection.heading.includes("with DiamondGlow") ? (
                    <>
                      {introSection.heading.replace(" with DiamondGlow", "")}
                      <span className="block">with DiamondGlow</span>
                    </>
                  ) : (
                    introSection.heading
                  )}
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

      case "twoColumnSection1":
        if (!twoColumnSection1.show) return null;
        return (
          <div
            className={`mod_columns_two viewport container ${getAnimationClass(
              "twoColumnSection1"
            )}`}
            data-s3-module
            style={{
              backgroundColor: twoColumnSection1.backgroundColor,
              color: twoColumnSection1.textColor,
            }}
          >
            <div className="row">
              <h2
                data-api-key="title"
                style={{
                  color:
                    twoColumnSection1.headingColor ||
                    typographySettings.h2Color,
                  fontSize: typographySettings.h2FontSize,
                  fontWeight: typographySettings.h2FontWeight,
                }}
              >
                {twoColumnSection1.heading}
              </h2>
              <div className="content">
                {twoColumnSection1.leftColumnContent && (
                  <div
                    className="item wow fadeInLeft"
                    data-api-key="content_left"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(
                          twoColumnSection1.leftColumnContent
                        ),
                      }}
                    />
                  </div>
                )}
                {twoColumnSection1.rightColumnContent && (
                  <div
                    className="item wow fadeInRight"
                    data-api-key="content_right"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(
                          twoColumnSection1.rightColumnContent
                        ),
                      }}
                    />
                  </div>
                )}
              </div>
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
                {bannerSection1.introText && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerSection1.introText),
                    }}
                  />
                )}
                <div className="columns-two">
                  {bannerSection1.leftColumn && (
                    <div>
                      {bannerSection1.leftColumn.heading && (
                        <p>{bannerSection1.leftColumn.heading}</p>
                      )}
                      {bannerSection1.leftColumn.bulletPoints && (
                        <ul>
                          {bannerSection1.leftColumn.bulletPoints.map(
                            (point, index) => (
                              <li key={index}>{point.text}</li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  )}
                  {bannerSection1.rightColumn && (
                    <div>
                      {bannerSection1.rightColumn.heading && (
                        <p>{bannerSection1.rightColumn.heading}</p>
                      )}
                      {bannerSection1.rightColumn.bulletPoints && (
                        <ul>
                          {bannerSection1.rightColumn.bulletPoints.map(
                            (point, index) => (
                              <li key={index}>{point.text}</li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
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

      case "halfImageSection":
        if (!halfImageSection.show) return null;
        const halfImages = getResponsiveImageUrls(halfImageSection.image);
        return (
          <div
            className={`mod_half_image viewport half-image container ${getAnimationClass(
              "halfImageSection"
            )} ${halfImageSection.verticalAlignment || "center"}`}
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
                    alt={halfImages.alt}
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
                        color:
                          halfImageSection.headingColor ||
                          typographySettings.h2Color,
                        fontSize: typographySettings.h2FontSize,
                        fontWeight: typographySettings.h2FontWeight,
                      }}
                    >
                      {halfImageSection.heading.includes("for DiamondGlow") ? (
                        <>
                          {halfImageSection.heading.replace(
                            " for DiamondGlow",
                            ""
                          )}
                          <span className="block">for DiamondGlow</span>
                        </>
                      ) : (
                        halfImageSection.heading
                      )}
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

      case "columnSection1":
        if (!columnSection1.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            style={{
              backgroundColor: columnSection1.backgroundColor,
              color: columnSection1.textColor,
            }}
          >
            <div className="row" data-api-key="content">
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
                {columnSection1.introContent && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection1.introContent),
                    }}
                  />
                )}
                {columnSection1.layoutType === "two-columns" && (
                  <div className="columns-two">
                    {columnSection1.leftColumnContent && (
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: lexicalToHtml(
                              columnSection1.leftColumnContent
                            ),
                          }}
                        />
                      </div>
                    )}
                    {columnSection1.rightColumnContent && (
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: lexicalToHtml(
                              columnSection1.rightColumnContent
                            ),
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
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
            className={`mod_banner dark hide-divider viewport background-3 ${getAnimationClass(
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
                <div className="columns-two">
                  <div>
                    <h2
                      style={{
                        color:
                          bannerSection2.leftColumn.headingColor ||
                          typographySettings.h2Color,
                        fontSize: typographySettings.h2FontSize,
                        fontWeight: typographySettings.h2FontWeight,
                      }}
                    >
                      {bannerSection2.leftColumn.heading}
                    </h2>
                    {bannerSection2.leftColumn.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(
                            bannerSection2.leftColumn.content
                          ),
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <h2
                      style={{
                        color:
                          bannerSection2.rightColumn.headingColor ||
                          typographySettings.h2Color,
                        fontSize: typographySettings.h2FontSize,
                        fontWeight: typographySettings.h2FontWeight,
                      }}
                    >
                      {bannerSection2.rightColumn.heading}
                    </h2>
                    {bannerSection2.rightColumn.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(
                            bannerSection2.rightColumn.content
                          ),
                        }}
                      />
                    )}
                  </div>
                </div>
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
            <div className="row" data-api-key="content">
              <div className="item">
                <h2
                  style={{
                    color:
                      columnSection2.headingColor || typographySettings.h2Color,
                    fontSize: typographySettings.h2FontSize,
                    fontWeight: typographySettings.h2FontWeight,
                  }}
                >
                  {columnSection2.heading}
                </h2>
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

export default DiamondGlowPage;