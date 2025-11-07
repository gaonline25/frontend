// import React from "react";

// const TummyTuckPage: React.FC = () => {
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
//                     href="/plastic-surgery/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Plastic Surgery
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/plastic-surgery/tummy-tuck/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Tummy Tuck
//                   </a>
//                 </li>
//               </ul>
//               <h1>Tummy Tuck</h1>
//               <div className="text">
//                 <p>
//                   Experience the Art of Tummy Transformation With Goldfingers'
//                   Precision
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
//                 srcSet="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="woman in white bikini smiling"
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
//             <h2>Sculpting a Flatter, Firmer Abdomen</h2>
//             <p>
//               A tummy tuck, or abdominoplasty, is a transformative surgical
//               procedure designed to address common concerns such as loose skin,
//               stretched abdominal muscles, and stubborn fat deposits in the
//               midsection. At Goldfingers Aesthetics &amp;Plastic Surgery, we
//               understand restoring a flat and toned abdomen can be challenging
//               after significant weight loss or pregnancy &ndash;or aging. Our
//               skilled plastic surgeons are committed to helping you achieve your
//               aesthetic goals by sculpting a tummy that reflects your desired
//               contours and enhances your self-confidence.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft "
//         data-s3-module
//       >
//         <div className="row half-image-row mt-0">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694715482-tummy-tuck.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="doctor's hands near woman on chair's stomach"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>
//                   What is a <span className="block-desktop">Tummy Tuck?</span>
//                 </h2>
//                 <p>
//                   A tummy tuck is a surgical procedure that targets the
//                   abdominal area, addressing excess skin, separated abdominal
//                   muscles, and unwanted fat. This procedure can provide dramatic
//                   results for individuals who have experienced significant
//                   weight loss, multiple pregnancies, or the effects of aging.
//                   Depending on your specific concerns, a tummy tuck can be
//                   tailored to your unique needs, whether you require a full
//                   tummy tuck or a mini tummy tuck.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport three-boxes   container option-1 default  bkg-image dark wider "
//         data-s3-module
//       >
//         <div className="row">
//           <div className="content-before">
//             <h2>
//               A firm, fit, sculpted abdomen{" "}
//               <span className="block-desktop">can be yours.</span>
//             </h2>
//             <p>
//               A tummy tuck involves several vital steps to sculpt a flatter and
//               firmer abdomen:
//             </p>
//           </div>
//           <div className="boxes wider">
//             <div className="box wow fadeInUp">
//               <h3>Removal of Excess Skin</h3>
//               <p>
//                 Loose and sagging skin is carefully removed to reveal a smoother
//                 and more youthful abdominal contour.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Fat Removal</h3>
//               <p>
//                 Stubborn pockets of fat can be strategically removed through
//                 liposuction to enhance your abdominal definition.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Tightening of Abdominal Muscles</h3>
//               <p>
//                 If necessary, weakened or separated abdominal muscles are
//                 repaired and tightened to restore a firmer foundation.
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

//       {/* Box Grid Module */}
//       <div
//         className="mod_box_grid viewport    container option-1 default  no-bg wider "
//         data-s3-module
//       >
//         <div className="row">
//           <div className="content-before">
//             <h2>
//               Am I a candidate{" "}
//               <span className="block-desktop">for a tummy tuck?</span>
//             </h2>
//             <p>
//               A tummy tuck can be a transformative procedure for individuals who
//               are looking to achieve a flatter, firmer, and more contoured
//               abdomen. If you are considering a tummy tuck, it's important to
//               determine whether you are a suitable candidate for the procedure.
//               While each individual's case is unique, there are common factors
//               that can indicate whether a tummy tuck is a suitable option for
//               you. Candidates for a Tummy Tuck typically include individuals who
//               have:
//             </p>
//           </div>
//           <div className="boxes wider">
//             <div className="box wow fadeInUp">
//               <h3>Weak or Split Abdominal Muscles</h3>
//               <p>
//                 Women who have undergone multiple pregnancies or individuals who
//                 have experienced significant weight fluctuations may have
//                 weakened or separated abdominal muscles. A tummy tuck can
//                 address this concern by tightening and repairing the muscles.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Excess Skin</h3>
//               <p>
//                 If you have loose or sagging skin in the abdominal area due to
//                 weight loss, pregnancy, or aging, a tummy tuck can help remove
//                 the excess skin and provide a smoother appearance.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Stubborn Fat Deposits</h3>
//               <p>
//                 Despite diet and exercise efforts, certain areas of fat in the
//                 abdominal region can be difficult to eliminate. Liposuction can
//                 be combined with a tummy tuck to remove these stubborn fat
//                 deposits.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Good Overall Health</h3>
//               <p>
//                 Candidates for a tummy tuck should be healthy and free from any
//                 medical conditions that could impair healing. A thorough medical
//                 evaluation will be conducted before the procedure.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>A Complete Family</h3>
//               <p>
//                 If you are planning to have more children, it's advisable to
//                 postpone a tummy tuck until after completing your family.
//                 Pregnancy can reverse the effects of surgery.
//               </p>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>A Stable Weight</h3>
//               <p>
//                 Ideally, candidates should be at a stable and healthy weight
//                 before undergoing a tummy tuck. Significant weight fluctuations
//                 after the surgery can affect the results.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Before & After Feed Module */}
//       <div
//         className="mod_cta_ba_feed cta container wow fadeInUp "
//         data-s3-module
//       >
//         <div className="row restricted">
//           <div className="text">
//             <h2 data-api-key="title">
//               <span className="small">Tummy Tuck</span>
//               Before & After
//             </h2>
//             <div className="patients" data-api-key="patients">
//               <div className="patient-wrap pslider" data-items="2">
//                 <div>
//                   <a
//                     href="/gallery/surgical/tummy-tuck/item/175151533/"
//                     className="patient double"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="1601"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151376-1694785325-after.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695151376-1694785325-after.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151376-1694785325-after.jpg?auto=format,compress&w=500"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695151376-1694785325-after.jpg?auto=format,compress&w=500"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="500"
//                         height="582"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/surgical/tummy-tuck/item/175151697/"
//                     className="patient double"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="1601"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393366-1694785684-after-edited-edited.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695393366-1694785684-after-edited-edited.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393366-1694785684-after-edited-edited.png?auto=format,compress&w=500"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695393366-1694785684-after-edited-edited.png?auto=format,compress&w=500"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="500"
//                         height="421"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/surgical/tummy-tuck/item/175151698/"
//                     className="patient double"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151462-1694789399-before-edited.jpeg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695151462-1694789399-before-edited.jpeg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151462-1694789399-before-edited.jpeg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695151462-1694789399-before-edited.jpeg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151462-1694789399-before-edited.jpeg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695151462-1694789399-before-edited.jpeg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="1397"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151479-1694785790-after.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695151479-1694785790-after.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151479-1694785790-after.jpg?auto=format,compress&w=500"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695151479-1694785790-after.jpg?auto=format,compress&w=500"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="500"
//                         height="639"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/surgical/tummy-tuck/item/175151756/"
//                     className="patient double"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151510-1694785939-before.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695151510-1694785939-before.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151510-1694785939-before.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695151510-1694785939-before.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151510-1694785939-before.jpg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695151510-1694785939-before.jpg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="900"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695394229-1694785931-after-edited.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695394229-1694785931-after-edited.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695394229-1694785931-after-edited.png?auto=format,compress&w=500"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695394229-1694785931-after-edited.png?auto=format,compress&w=500"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="500"
//                         height="329"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="/gallery/surgical/tummy-tuck/item/175151770/"
//                     className="patient double"
//                   >
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=1200"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=1200"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="1200"
//                         height="1601"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393273-1694786068-after-edited-edited.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695393273-1694786068-after-edited-edited.png?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393273-1694786068-after-edited-edited.png?auto=format,compress&w=500"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1695393273-1694786068-after-edited-edited.png?auto=format,compress&w=500"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width="500"
//                         height="422"
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//               </div>
//               <div className="age-restricted">
//                 <div className="inner">
//                   <h3>Warning:</h3>
//                   <p>
//                     This gallery contains nudity. Please click OK to confirm you
//                     are at least 18 years of age and are not offended by this
//                     material.
//                   </p>
//                   <a className="btn">Ok</a>
//                 </div>
//               </div>
//             </div>
//             <a
//               href="/gallery/surgical/tummy-tuck/"
//               className="btn view-more"
//               title="View before and after gallery images"
//               aria-label="View before and after gallery images"
//             >
//               View Gallery
//             </a>
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
//             <h2>
//               Your consultation with us{" "}
//               <span className="block-desktop">
//                 at Goldfingers Aesthetics &amp;Plastic Surgery
//               </span>
//             </h2>
//             <p>
//               The best way to determine if you are a suitable candidate for a
//               tummy tuck is through a consultation with a skilled and
//               experienced plastic surgeon. At Goldfingers Aesthetics
//               &amp;Plastic Surgery, our board-certified plastic surgeons will
//               assess your needs and goals to determine whether a tummy tuck is
//               right for you. We will provide you with detailed information,
//               answer your questions, and create a personalized treatment plan to
//               achieve your desired results. Contact us today to schedule your
//               consultation and take the first step toward achieving a more
//               contoured and confident abdomen.
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

//       {/* Column Module */}
//       <div className="mod_column viewport container has-media" data-s3-module>
//         <div className="row mt-40 mb-40 media-right" data-api-key="content">
//           <div className="item">
//             <h2>Recovery and results</h2>
//             <p>
//               Recovery from a tummy tuck procedure will depend on the extent of
//               the surgery. While you can expect some swelling, bruising, and
//               discomfort initially, these symptoms fade as the days and weeks
//               pass. Our team will provide you with detailed post-operative
//               instructions to ensure a smooth and uneventful recovery. As your
//               body heals, you'll begin to see the beautiful and transformative
//               results of your tummy tuck, enjoying a flatter, firmer, and more
//               youthful abdomen.
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
//               width="904"
//               height="1062"
//               alt="white sand beach"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-7"
//         data-s3-module
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2 className="text-center">
//               Why choose Goldfingers{" "}
//               <span className="block-desktop">
//                 Aesthetics &amp;Plastic Surgery?
//               </span>
//             </h2>
//             <ul className="columns">
//               <li>
//                 <strong>Experienced, talented Tummy Tuck surgeon</strong>: Our
//                 board-certified plastic surgeons, led by Dr. Michael McClure,
//                 are experienced and skilled in performing tummy tuck procedures.
//               </li>
//               <li>
//                 <strong>Personalized Approach:</strong>
//                 We understand that each patient's body is unique. Our approach
//                 is tailored to your anatomy and goals for the most
//                 natural-looking results.
//               </li>
//               <li>
//                 <strong>State-of-the-Art Facilities</strong>: Your safety and
//                 comfort are our top priorities. We perform tummy tuck surgeries
//                 in our advanced surgical center equipped with the latest
//                 technology.
//               </li>
//               <li>
//                 <strong>Comprehensive Care</strong>: From your initial
//                 consultation to your post-operative appointments, our team
//                 provides compassionate care and support at every step of your
//                 tummy tuck journey.
//               </li>
//             </ul>
//             <p>
//               Sculpt a flatter, firmer, and more youthful abdomen with a tummy
//               tuck procedure at Goldfingers Aesthetics &amp;Plastic Surgery. Our
//               experienced team is dedicated to helping you achieve your
//               aesthetic goals and restoring your confidence. Contact us today to
//               schedule a consultation and learn more about how a tummy tuck can
//               enhance your physique.
//             </p>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257063-banner-bgd-7.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="802"
//             alt="Banner media"
//             draggable="false"
//           />
//         </picture>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default TummyTuckPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchTummyTuckPageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
// } from "@/lib/api/plasticSurgery/fetchTummyTuckPageComponent";

// interface TummyTuckData {
//   heroSection: any;
//   introSection: any;
//   halfImageSection: any;
//   boxGridSection1: any;
//   boxGridSection2: any;
//   ctaBeforeAfterSection: any;
//   bannerSection1: any;
//   columnMediaSection: any;
//   bannerSection2: any;
// }

// const TummyTuckPage: React.FC = () => {
//   const [pageData, setPageData] = useState<TummyTuckData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchTummyTuckPageData("tummy-tuck-page-component");
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching Tummy Tuck page data:", error);
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
//     halfImageSection,
//     boxGridSection1,
//     boxGridSection2,
//     ctaBeforeAfterSection,
//     bannerSection1,
//     columnMediaSection,
//     bannerSection2,
//   } = pageData;

//   const getResponsiveSrcSet = (images: any, width: number) => {
//     const baseUrl = getResponsiveImageUrls(images);
//     return `${baseUrl.large}?auto=format,compress&w=${width}, ${
//       baseUrl.large
//     }?auto=format,compress&w=${Math.floor(width * 1.5)} 2x`;
//   };

//   return (
//     <main id="main">
//       {/* Hero Module */}
//       {heroSection?.show && (
//         <div className="mod_hero banner mobile-stack" data-s3-module>
//           <div className="wrapper">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   heroSection.backgroundImage,
//                   420
//                 )}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   heroSection.backgroundImage,
//                   800
//                 )}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   heroSection.backgroundImage,
//                   1400
//                 )}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   getResponsiveImageUrls(heroSection.backgroundImage).large
//                 }?auto=format,compress&w=1994`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${
//                   getResponsiveImageUrls(heroSection.backgroundImage).large
//                 }?auto=format,compress&w=1994`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1994"
//                 height="1206"
//                 alt={heroSection.backgroundImage?.alt || "Background Texture"}
//                 draggable="false"
//               />
//             </picture>
//             <div className="row">
//               <div className="inner">
//                 <ul className="partial_breadcrumb" data-s3-partial>
//                   {heroSection.breadcrumbs?.map((crumb: any, index: number) => (
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
//                 <h1>{heroSection.title}</h1>
//                 {heroSection.description && (
//                   <div className="text">
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(heroSection.description),
//                       }}
//                     />
//                     {heroSection.ctaButton?.show && (
//                       <p>
//                         <a
//                           className={
//                             heroSection.ctaButton.className || "btn white"
//                           }
//                           href={heroSection.ctaButton.url}
//                           role="button"
//                         >
//                           {heroSection.ctaButton.text}
//                         </a>
//                       </p>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="media">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={getResponsiveSrcSet(heroSection.mediaImage, 420)}
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     heroSection.mediaImage,
//                     420
//                   )}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={getResponsiveSrcSet(heroSection.mediaImage, 800)}
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     heroSection.mediaImage,
//                     800
//                   )}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={getResponsiveSrcSet(heroSection.mediaImage, 1400)}
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     heroSection.mediaImage,
//                     1400
//                   )}
//                 />
//                 <source
//                   srcSet={`${
//                     getResponsiveImageUrls(heroSection.mediaImage).large
//                   }?auto=format,compress&w=1920`}
//                   data-lazyload-srcset={`${
//                     getResponsiveImageUrls(heroSection.mediaImage).large
//                   }?auto=format,compress&w=1920`}
//                 />
//                 <img
//                   src={`${
//                     getResponsiveImageUrls(heroSection.mediaImage).large
//                   }?auto=format,compress&w=1920`}
//                   width="1920"
//                   height="1206"
//                   alt={
//                     heroSection.mediaImage?.alt ||
//                     "woman in white bikini smiling"
//                   }
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Intro Module */}
//       {introSection?.show && (
//         <div className={introSection.className} data-s3-module>
//           <div className="row ">
//             {introSection.logo && (
//               <picture className="logo">
//                 <img
//                   src={
//                     introSection.logo.cloudinary_url || introSection.logo.url
//                   }
//                   width={introSection.logoWidth || 58}
//                   height={introSection.logoHeight || 64}
//                   loading="lazy"
//                   alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
//                   draggable="false"
//                   data-api-key="logo"
//                 />
//               </picture>
//             )}
//             <div className="inner" data-api-key="content">
//               <h2>{introSection.heading}</h2>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: lexicalToHtml(introSection.content),
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Half Image Module */}
//       {halfImageSection?.show && (
//         <div className={halfImageSection.className} data-s3-module>
//           <div className={halfImageSection.rowClassName}>
//             <div className="media">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     halfImageSection.image,
//                     420
//                   )}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     halfImageSection.image,
//                     800
//                   )}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={getResponsiveSrcSet(
//                     halfImageSection.image,
//                     1400
//                   )}
//                 />
//                 <source
//                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-srcset={`${
//                     getResponsiveImageUrls(halfImageSection.image).large ||
//                     getResponsiveImageUrls(halfImageSection.image).desktop
//                   }?auto=format,compress&w=1832`}
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src={`${
//                     getResponsiveImageUrls(halfImageSection.image).large ||
//                     getResponsiveImageUrls(halfImageSection.image).desktop
//                   }?auto=format,compress&w=1832`}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="1832"
//                   height="1824"
//                   alt={
//                     halfImageSection.image?.alt ||
//                     "doctor's hands near woman on chair's stomach"
//                   }
//                   draggable="false"
//                   data-api-key="image"
//                 />
//               </picture>
//             </div>
//             <div className={halfImageSection.copyClassName}>
//               <div className="inner">
//                 <div className="content" data-api-key="content">
//                   <h2
//                     dangerouslySetInnerHTML={{
//                       __html: halfImageSection.heading,
//                     }}
//                   />
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: lexicalToHtml(halfImageSection.content),
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Box Grid Module 1 */}
//       {boxGridSection1?.show && (
//         <div className={boxGridSection1.className} data-s3-module>
//           <div className="row">
//             <div className="content-before">
//               <h2
//                 dangerouslySetInnerHTML={{ __html: boxGridSection1.heading }}
//               />
//               {boxGridSection1.introContent && (
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(boxGridSection1.introContent),
//                   }}
//                 />
//               )}
//             </div>
//             <div className="boxes wider">
//               {boxGridSection1.boxes?.map((box: any, index: number) => (
//                 <div key={index} className="box wow fadeInUp">
//                   <h3>{box.heading}</h3>
//                   {box.content && (
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(box.content),
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           {boxGridSection1.backgroundImage && (
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage).mobile
//                 }?auto=format,compress&w=1000, ${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage).mobile
//                 }?auto=format,compress&w=1500 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage).tablet
//                 }?auto=format,compress&w=800, ${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage).tablet
//                 }?auto=format,compress&w=1200 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage)
//                     .desktop
//                 }?auto=format,compress&w=1400, ${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage)
//                     .desktop
//                 }?auto=format,compress&w=2100 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage).large
//                 }?auto=format,compress&w=2200`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${
//                   getResponsiveImageUrls(boxGridSection1.backgroundImage).large
//                 }?auto=format,compress&w=2200`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="1726"
//                 alt={boxGridSection1.backgroundImage?.alt || "Background media"}
//                 draggable="false"
//               />
//             </picture>
//           )}
//         </div>
//       )}

//       {/* Box Grid Module 2 */}
//       {boxGridSection2?.show && (
//         <div className={boxGridSection2.className} data-s3-module>
//           <div className="row">
//             <div className="content-before">
//               <h2
//                 dangerouslySetInnerHTML={{ __html: boxGridSection2.heading }}
//               />
//               {boxGridSection2.introContent && (
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(boxGridSection2.introContent),
//                   }}
//                 />
//               )}
//             </div>
//             <div className="boxes wider">
//               {boxGridSection2.boxes?.map((box: any, index: number) => (
//                 <div key={index} className="box wow fadeInUp">
//                   <h3>{box.heading}</h3>
//                   {box.content && (
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(box.content),
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Before & After Feed Module */}
//       {ctaBeforeAfterSection?.show && (
//         <div className={ctaBeforeAfterSection.className} data-s3-module>
//           <div className="row restricted">
//             <div className="text">
//               <h2 data-api-key="title">
//                 {ctaBeforeAfterSection.titleSmall && (
//                   <span className="small">
//                     {ctaBeforeAfterSection.titleSmall}
//                   </span>
//                 )}
//                 {ctaBeforeAfterSection.title}
//               </h2>
//               <div className="patients" data-api-key="patients">
//                 <div className="patient-wrap pslider" data-items="2">
//                   {ctaBeforeAfterSection.patients?.map(
//                     (patient: any, index: number) => (
//                       <div key={index}>
//                         <a href={patient.url} className="patient double">
//                           <picture className="background">
//                             <source
//                               media="(max-width:420px)"
//                               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                               data-lazyload-srcset={getResponsiveSrcSet(
//                                 patient.beforeImage,
//                                 420
//                               )}
//                             />
//                             <source
//                               media="(max-width:800px)"
//                               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                               data-lazyload-srcset={getResponsiveSrcSet(
//                                 patient.beforeImage,
//                                 800
//                               )}
//                             />
//                             <source
//                               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                               data-lazyload-srcset={`${
//                                 getResponsiveImageUrls(patient.beforeImage)
//                                   .desktop ||
//                                 getResponsiveImageUrls(patient.beforeImage)
//                                   .large
//                               }?auto=format,compress&w=1200`}
//                             />
//                             <img
//                               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                               data-lazyload-src={`${
//                                 getResponsiveImageUrls(patient.beforeImage)
//                                   .desktop ||
//                                 getResponsiveImageUrls(patient.beforeImage)
//                                   .large
//                               }?auto=format,compress&w=1200`}
//                               loading="lazy"
//                               data-lazyload="img"
//                               width="1200"
//                               height="1601"
//                               alt={patient.beforeImage?.alt || ""}
//                               draggable="false"
//                             />
//                           </picture>
//                           <picture className="background">
//                             <source
//                               media="(max-width:420px)"
//                               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                               data-lazyload-srcset={getResponsiveSrcSet(
//                                 patient.afterImage,
//                                 420
//                               )}
//                             />
//                             <source
//                               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                               data-lazyload-srcset={`${
//                                 getResponsiveImageUrls(patient.afterImage)
//                                   .desktop ||
//                                 getResponsiveImageUrls(patient.afterImage).large
//                               }?auto=format,compress&w=500`}
//                             />
//                             <img
//                               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                               data-lazyload-src={`${
//                                 getResponsiveImageUrls(patient.afterImage)
//                                   .desktop ||
//                                 getResponsiveImageUrls(patient.afterImage).large
//                               }?auto=format,compress&w=500`}
//                               loading="lazy"
//                               data-lazyload="img"
//                               width="500"
//                               height="476"
//                               alt={patient.afterImage?.alt || ""}
//                               draggable="false"
//                             />
//                           </picture>
//                         </a>
//                       </div>
//                     )
//                   )}
//                 </div>
//                 {ctaBeforeAfterSection.ageRestricted?.enabled && (
//                   <div className="age-restricted">
//                     <div className="inner">
//                       <h3>
//                         {ctaBeforeAfterSection.ageRestricted.heading ||
//                           "Warning:"}
//                       </h3>
//                       <p>{ctaBeforeAfterSection.ageRestricted.message}</p>
//                       <a className="btn">
//                         {ctaBeforeAfterSection.ageRestricted.buttonText || "Ok"}
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <a
//                 href={ctaBeforeAfterSection.viewGalleryButton?.url}
//                 className="btn view-more"
//                 title={ctaBeforeAfterSection.viewGalleryButton?.title}
//                 aria-label={ctaBeforeAfterSection.viewGalleryButton?.ariaLabel}
//               >
//                 {ctaBeforeAfterSection.viewGalleryButton?.text}
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Banner Module 1 */}
//       {bannerSection1?.show && (
//         <div className={bannerSection1.className} data-s3-module>
//           <div className="row wow fadeInUp">
//             <div className="content" data-api-key="top_content">
//               <h2
//                 dangerouslySetInnerHTML={{ __html: bannerSection1.heading }}
//               />
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: lexicalToHtml(bannerSection1.content),
//                 }}
//               />
//             </div>
//           </div>
//           {bannerSection1.backgroundImage && (
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection1.backgroundImage.mobile?.cloudinary_url ||
//                   bannerSection1.backgroundImage.mobile?.url
//                 }?auto=format,compress&w=800, ${
//                   bannerSection1.backgroundImage.mobile?.cloudinary_url ||
//                   bannerSection1.backgroundImage.mobile?.url
//                 }?auto=format,compress&w=1200 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection1.backgroundImage.tablet?.cloudinary_url ||
//                   bannerSection1.backgroundImage.tablet?.url
//                 }?auto=format,compress&w=800&q=85&sharp=5, ${
//                   bannerSection1.backgroundImage.tablet?.cloudinary_url ||
//                   bannerSection1.backgroundImage.tablet?.url
//                 }?auto=format,compress&w=1200&q=85&sharp=5 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection1.backgroundImage.desktop?.cloudinary_url ||
//                   bannerSection1.backgroundImage.desktop?.url
//                 }?auto=format,compress&w=1400&q=85&sharp=5, ${
//                   bannerSection1.backgroundImage.desktop?.cloudinary_url ||
//                   bannerSection1.backgroundImage.desktop?.url
//                 }?auto=format,compress&w=2100&q=85&sharp=5 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection1.backgroundImage.large?.cloudinary_url ||
//                   bannerSection1.backgroundImage.large?.url
//                 }?auto=format,compress&w=2200&q=85&sharp=5`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${
//                   bannerSection1.backgroundImage.large?.cloudinary_url ||
//                   bannerSection1.backgroundImage.large?.url
//                 }?auto=format,compress&w=2200&q=85&sharp=5`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={bannerSection1.backgroundImage?.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           )}
//         </div>
//       )}

//       {/* Column Module with Media */}
//       {columnMediaSection?.show && (
//         <div className={columnMediaSection.className} data-s3-module>
//           <div
//             className={columnMediaSection.rowClassName}
//             data-api-key="content"
//           >
//             <div className="item">
//               <h2>{columnMediaSection.heading}</h2>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: lexicalToHtml(columnMediaSection.content),
//                 }}
//               />
//             </div>
//             <picture className="media">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   columnMediaSection.image,
//                   420
//                 )}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={getResponsiveSrcSet(
//                   columnMediaSection.image,
//                   800
//                 )}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   getResponsiveImageUrls(columnMediaSection.image).desktop ||
//                   getResponsiveImageUrls(columnMediaSection.image).large
//                 }?auto=format,compress&w=904`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${
//                   getResponsiveImageUrls(columnMediaSection.image).desktop ||
//                   getResponsiveImageUrls(columnMediaSection.image).large
//                 }?auto=format,compress&w=904`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="904"
//                 height="1062"
//                 alt={columnMediaSection.image?.alt || "white sand beach"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       )}

//       {/* Banner Module 2 */}
//       {bannerSection2?.show && (
//         <div className={bannerSection2.className} data-s3-module>
//           <div className="row wow fadeInUp">
//             <div className="content" data-api-key="top_content">
//               <h2
//                 className={bannerSection2.headingAlignment || "text-center"}
//                 dangerouslySetInnerHTML={{ __html: bannerSection2.heading }}
//               />
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: lexicalToHtml(bannerSection2.content),
//                 }}
//               />
//             </div>
//           </div>
//           {bannerSection2.backgroundImage && (
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection2.backgroundImage.mobile?.cloudinary_url ||
//                   bannerSection2.backgroundImage.mobile?.url
//                 }?auto=format,compress&w=800, ${
//                   bannerSection2.backgroundImage.mobile?.cloudinary_url ||
//                   bannerSection2.backgroundImage.mobile?.url
//                 }?auto=format,compress&w=1200 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection2.backgroundImage.tablet?.cloudinary_url ||
//                   bannerSection2.backgroundImage.tablet?.url
//                 }?auto=format,compress&w=800&q=85&sharp=5, ${
//                   bannerSection2.backgroundImage.tablet?.cloudinary_url ||
//                   bannerSection2.backgroundImage.tablet?.url
//                 }?auto=format,compress&w=1200&q=85&sharp=5 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection2.backgroundImage.desktop?.cloudinary_url ||
//                   bannerSection2.backgroundImage.desktop?.url
//                 }?auto=format,compress&w=1400&q=85&sharp=5, ${
//                   bannerSection2.backgroundImage.desktop?.cloudinary_url ||
//                   bannerSection2.backgroundImage.desktop?.url
//                 }?auto=format,compress&w=2100&q=85&sharp=5 2x`}
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${
//                   bannerSection2.backgroundImage.large?.cloudinary_url ||
//                   bannerSection2.backgroundImage.large?.url
//                 }?auto=format,compress&w=2200&q=85&sharp=5`}
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src={`${
//                   bannerSection2.backgroundImage.large?.cloudinary_url ||
//                   bannerSection2.backgroundImage.large?.url
//                 }?auto=format,compress&w=2200&q=85&sharp=5`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={bannerSection2.backgroundImage?.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           )}
//         </div>
//       )}
//     </main>
//   );
// };

// export default TummyTuckPage;

"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/plasticSurgery/fetchTummyTuckPageComponent";

interface TummyTuckData {
  heroSection: any;
  introSection: any;
  halfImageSection: any;
  boxGridSection1: any;
  boxGridSection2: any;
  ctaBeforeAfterSection: any;
  bannerSection1: any;
  columnMediaSection: any;
  bannerSection2: any;
}

interface TummyTuckPageProps {
  data: TummyTuckData;
}

const TummyTuckPage: React.FC<TummyTuckPageProps> = ({ data }) => {
  const {
    heroSection,
    introSection,
    halfImageSection,
    boxGridSection1,
    boxGridSection2,
    ctaBeforeAfterSection,
    bannerSection1,
    columnMediaSection,
    bannerSection2,
  } = data;

  const getResponsiveSrcSet = (images: any, width: number) => {
    const baseUrl = getResponsiveImageUrls(images);
    return `${baseUrl.large}?auto=format,compress&w=${width}, ${
      baseUrl.large
    }?auto=format,compress&w=${Math.floor(width * 1.5)} 2x`;
  };

  return (
    <main id="main">
      {/* Hero Module */}
      {heroSection?.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module>
          <div className="wrapper">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  heroSection.backgroundImage,
                  420
                )}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  heroSection.backgroundImage,
                  800
                )}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  heroSection.backgroundImage,
                  1400
                )}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(heroSection.backgroundImage).large
                }?auto=format,compress&w=1994`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${
                  getResponsiveImageUrls(heroSection.backgroundImage).large
                }?auto=format,compress&w=1994`}
                loading="lazy"
                data-lazyload="img"
                width="1994"
                height="1206"
                alt={heroSection.backgroundImage?.alt || "Background Texture"}
                draggable="false"
              />
            </picture>
            <div className="row">
              <div className="inner">
                <ul className="partial_breadcrumb" data-s3-partial>
                  {heroSection.breadcrumbs?.map((crumb: any, index: number) => (
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
                <h1>{heroSection.title}</h1>
                {heroSection.description && (
                  <div className="text">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(heroSection.description),
                      }}
                    />
                    {heroSection.ctaButton?.show && (
                      <p>
                        <a
                          className={
                            heroSection.ctaButton.className || "btn white"
                          }
                          href={heroSection.ctaButton.url}
                          role="button"
                        >
                          {heroSection.ctaButton.text}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={getResponsiveSrcSet(heroSection.mediaImage, 420)}
                  data-lazyload-srcset={getResponsiveSrcSet(
                    heroSection.mediaImage,
                    420
                  )}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={getResponsiveSrcSet(heroSection.mediaImage, 800)}
                  data-lazyload-srcset={getResponsiveSrcSet(
                    heroSection.mediaImage,
                    800
                  )}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={getResponsiveSrcSet(heroSection.mediaImage, 1400)}
                  data-lazyload-srcset={getResponsiveSrcSet(
                    heroSection.mediaImage,
                    1400
                  )}
                />
                <source
                  srcSet={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1920`}
                />
                <img
                  src={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1920`}
                  width="1920"
                  height="1206"
                  alt={
                    heroSection.mediaImage?.alt ||
                    "woman in white bikini smiling"
                  }
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Intro Module */}
      {introSection?.show && (
        <div className={introSection.className} data-s3-module>
          <div className="row ">
            {introSection.logo && (
              <picture className="logo">
                <img
                  src={
                    introSection.logo.cloudinary_url || introSection.logo.url
                  }
                  width={introSection.logoWidth || 58}
                  height={introSection.logoHeight || 64}
                  loading="lazy"
                  alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="inner" data-api-key="content">
              <h2>{introSection.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(introSection.content),
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Half Image Module */}
      {halfImageSection?.show && (
        <div className={halfImageSection.className} data-s3-module>
          <div className={halfImageSection.rowClassName}>
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={getResponsiveSrcSet(
                    halfImageSection.image,
                    420
                  )}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={getResponsiveSrcSet(
                    halfImageSection.image,
                    800
                  )}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={getResponsiveSrcSet(
                    halfImageSection.image,
                    1400
                  )}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${
                    getResponsiveImageUrls(halfImageSection.image).large ||
                    getResponsiveImageUrls(halfImageSection.image).desktop
                  }?auto=format,compress&w=1832`}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={`${
                    getResponsiveImageUrls(halfImageSection.image).large ||
                    getResponsiveImageUrls(halfImageSection.image).desktop
                  }?auto=format,compress&w=1832`}
                  loading="lazy"
                  data-lazyload="img"
                  width="1832"
                  height="1824"
                  alt={
                    halfImageSection.image?.alt ||
                    "doctor's hands near woman on chair's stomach"
                  }
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className={halfImageSection.copyClassName}>
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: halfImageSection.heading,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(halfImageSection.content),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Box Grid Module 1 */}
      {boxGridSection1?.show && (
        <div className={boxGridSection1.className} data-s3-module>
          <div className="row">
            <div className="content-before">
              <h2
                dangerouslySetInnerHTML={{ __html: boxGridSection1.heading }}
              />
              {boxGridSection1.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(boxGridSection1.introContent),
                  }}
                />
              )}
            </div>
            <div className="boxes wider">
              {boxGridSection1.boxes?.map((box: any, index: number) => (
                <div key={index} className="box wow fadeInUp">
                  <h3>{box.heading}</h3>
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
          {boxGridSection1.backgroundImage && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage).mobile
                }?auto=format,compress&w=1000, ${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage).mobile
                }?auto=format,compress&w=1500 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage).tablet
                }?auto=format,compress&w=800, ${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage).tablet
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage)
                    .desktop
                }?auto=format,compress&w=1400, ${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage)
                    .desktop
                }?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage).large
                }?auto=format,compress&w=2200`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${
                  getResponsiveImageUrls(boxGridSection1.backgroundImage).large
                }?auto=format,compress&w=2200`}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="1726"
                alt={boxGridSection1.backgroundImage?.alt || "Background media"}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Box Grid Module 2 */}
      {boxGridSection2?.show && (
        <div className={boxGridSection2.className} data-s3-module>
          <div className="row">
            <div className="content-before">
              <h2
                dangerouslySetInnerHTML={{ __html: boxGridSection2.heading }}
              />
              {boxGridSection2.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(boxGridSection2.introContent),
                  }}
                />
              )}
            </div>
            <div className="boxes wider">
              {boxGridSection2.boxes?.map((box: any, index: number) => (
                <div key={index} className="box wow fadeInUp">
                  <h3>{box.heading}</h3>
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
        </div>
      )}

      {/* CTA Before & After Feed Module */}
      {ctaBeforeAfterSection?.show && (
        <div className={ctaBeforeAfterSection.className} data-s3-module>
          <div className="row restricted">
            <div className="text">
              <h2 data-api-key="title">
                {ctaBeforeAfterSection.titleSmall && (
                  <span className="small">
                    {ctaBeforeAfterSection.titleSmall}
                  </span>
                )}
                {ctaBeforeAfterSection.title}
              </h2>
              <div className="patients" data-api-key="patients">
                <div className="patient-wrap pslider" data-items="2">
                  {ctaBeforeAfterSection.patients?.map(
                    (patient: any, index: number) => (
                      <div key={index}>
                        <a href={patient.url} className="patient double">
                          <picture className="background">
                            <source
                              media="(max-width:420px)"
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              data-lazyload-srcset={getResponsiveSrcSet(
                                patient.beforeImage,
                                420
                              )}
                            />
                            <source
                              media="(max-width:800px)"
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              data-lazyload-srcset={getResponsiveSrcSet(
                                patient.beforeImage,
                                800
                              )}
                            />
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              data-lazyload-srcset={`${
                                getResponsiveImageUrls(patient.beforeImage)
                                  .desktop ||
                                getResponsiveImageUrls(patient.beforeImage)
                                  .large
                              }?auto=format,compress&w=1200`}
                            />
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              data-lazyload-src={`${
                                getResponsiveImageUrls(patient.beforeImage)
                                  .desktop ||
                                getResponsiveImageUrls(patient.beforeImage)
                                  .large
                              }?auto=format,compress&w=1200`}
                              loading="lazy"
                              data-lazyload="img"
                              width="1200"
                              height="1601"
                              alt={patient.beforeImage?.alt || ""}
                              draggable="false"
                            />
                          </picture>
                          <picture className="background">
                            <source
                              media="(max-width:420px)"
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              data-lazyload-srcset={getResponsiveSrcSet(
                                patient.afterImage,
                                420
                              )}
                            />
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              data-lazyload-srcset={`${
                                getResponsiveImageUrls(patient.afterImage)
                                  .desktop ||
                                getResponsiveImageUrls(patient.afterImage).large
                              }?auto=format,compress&w=500`}
                            />
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              data-lazyload-src={`${
                                getResponsiveImageUrls(patient.afterImage)
                                  .desktop ||
                                getResponsiveImageUrls(patient.afterImage).large
                              }?auto=format,compress&w=500`}
                              loading="lazy"
                              data-lazyload="img"
                              width="500"
                              height="476"
                              alt={patient.afterImage?.alt || ""}
                              draggable="false"
                            />
                          </picture>
                        </a>
                      </div>
                    )
                  )}
                </div>
                {ctaBeforeAfterSection.ageRestricted?.enabled && (
                  <div className="age-restricted">
                    <div className="inner">
                      <h3>
                        {ctaBeforeAfterSection.ageRestricted.heading ||
                          "Warning:"}
                      </h3>
                      <p>{ctaBeforeAfterSection.ageRestricted.message}</p>
                      <a className="btn">
                        {ctaBeforeAfterSection.ageRestricted.buttonText || "Ok"}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a
                href={ctaBeforeAfterSection.viewGalleryButton?.url}
                className="btn view-more"
                title={ctaBeforeAfterSection.viewGalleryButton?.title}
                aria-label={ctaBeforeAfterSection.viewGalleryButton?.ariaLabel}
              >
                {ctaBeforeAfterSection.viewGalleryButton?.text}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Banner Module 1 */}
      {bannerSection1?.show && (
        <div className={bannerSection1.className} data-s3-module>
          <div className="row wow fadeInUp">
            <div className="content" data-api-key="top_content">
              <h2
                dangerouslySetInnerHTML={{ __html: bannerSection1.heading }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(bannerSection1.content),
                }}
              />
            </div>
          </div>
          {bannerSection1.backgroundImage && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection1.backgroundImage.mobile?.cloudinary_url ||
                  bannerSection1.backgroundImage.mobile?.url
                }?auto=format,compress&w=800, ${
                  bannerSection1.backgroundImage.mobile?.cloudinary_url ||
                  bannerSection1.backgroundImage.mobile?.url
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection1.backgroundImage.tablet?.cloudinary_url ||
                  bannerSection1.backgroundImage.tablet?.url
                }?auto=format,compress&w=800&q=85&sharp=5, ${
                  bannerSection1.backgroundImage.tablet?.cloudinary_url ||
                  bannerSection1.backgroundImage.tablet?.url
                }?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection1.backgroundImage.desktop?.cloudinary_url ||
                  bannerSection1.backgroundImage.desktop?.url
                }?auto=format,compress&w=1400&q=85&sharp=5, ${
                  bannerSection1.backgroundImage.desktop?.cloudinary_url ||
                  bannerSection1.backgroundImage.desktop?.url
                }?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection1.backgroundImage.large?.cloudinary_url ||
                  bannerSection1.backgroundImage.large?.url
                }?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${
                  bannerSection1.backgroundImage.large?.cloudinary_url ||
                  bannerSection1.backgroundImage.large?.url
                }?auto=format,compress&w=2200&q=85&sharp=5`}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={bannerSection1.backgroundImage?.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Column Module with Media */}
      {columnMediaSection?.show && (
        <div className={columnMediaSection.className} data-s3-module>
          <div
            className={columnMediaSection.rowClassName}
            data-api-key="content"
          >
            <div className="item">
              <h2>{columnMediaSection.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(columnMediaSection.content),
                }}
              />
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  columnMediaSection.image,
                  420
                )}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={getResponsiveSrcSet(
                  columnMediaSection.image,
                  800
                )}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(columnMediaSection.image).desktop ||
                  getResponsiveImageUrls(columnMediaSection.image).large
                }?auto=format,compress&w=904`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${
                  getResponsiveImageUrls(columnMediaSection.image).desktop ||
                  getResponsiveImageUrls(columnMediaSection.image).large
                }?auto=format,compress&w=904`}
                loading="lazy"
                data-lazyload="img"
                width="904"
                height="1062"
                alt={columnMediaSection.image?.alt || "white sand beach"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {/* Banner Module 2 */}
      {bannerSection2?.show && (
        <div className={bannerSection2.className} data-s3-module>
          <div className="row wow fadeInUp">
            <div className="content" data-api-key="top_content">
              <h2
                className={bannerSection2.headingAlignment || "text-center"}
                dangerouslySetInnerHTML={{ __html: bannerSection2.heading }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(bannerSection2.content),
                }}
              />
            </div>
          </div>
          {bannerSection2.backgroundImage && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection2.backgroundImage.mobile?.cloudinary_url ||
                  bannerSection2.backgroundImage.mobile?.url
                }?auto=format,compress&w=800, ${
                  bannerSection2.backgroundImage.mobile?.cloudinary_url ||
                  bannerSection2.backgroundImage.mobile?.url
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection2.backgroundImage.tablet?.cloudinary_url ||
                  bannerSection2.backgroundImage.tablet?.url
                }?auto=format,compress&w=800&q=85&sharp=5, ${
                  bannerSection2.backgroundImage.tablet?.cloudinary_url ||
                  bannerSection2.backgroundImage.tablet?.url
                }?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection2.backgroundImage.desktop?.cloudinary_url ||
                  bannerSection2.backgroundImage.desktop?.url
                }?auto=format,compress&w=1400&q=85&sharp=5, ${
                  bannerSection2.backgroundImage.desktop?.cloudinary_url ||
                  bannerSection2.backgroundImage.desktop?.url
                }?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  bannerSection2.backgroundImage.large?.cloudinary_url ||
                  bannerSection2.backgroundImage.large?.url
                }?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${
                  bannerSection2.backgroundImage.large?.cloudinary_url ||
                  bannerSection2.backgroundImage.large?.url
                }?auto=format,compress&w=2200&q=85&sharp=5`}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={bannerSection2.backgroundImage?.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}
    </main>
  );
};

export default TummyTuckPage;