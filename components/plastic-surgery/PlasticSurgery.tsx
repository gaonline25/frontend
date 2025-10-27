// import React from "react";

// const PlasticSurgery: React.FC = () => {
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
//               </ul>
//               <h1>Plastic Surgery</h1>
//               <div className="text">
//                 <p>
//                   Contact Goldfingers Aesthetics &amp;Plastic Surgery today for
//                   your personal, confidential, one on one consultation with Dr.
//                   McClure to determine whether or not plastic surgery is right
//                   for you. This is your one-on-one time with our elite medical
//                   experts. Ask your questions. Get the doctor&rsquo;s expertise.
//                   It&rsquo;s a inviting, comfortable experience.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=1918"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=1918"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694009046-plastic-surgery-banner.jpg?auto=format,compress&w=1918"
//                 width="1918"
//                 height="1206"
//                 alt="Doctor Jay giving consultation"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Page Index List Module */}
//       <div className="mod_index_list option-1 container" data-s3-module>
//         <div className="row ">
//           <div className="inner">
//             <a
//               href="/plastic-surgery/breast/"
//               className="item"
//               title="Opens Breast page"
//               aria-label="Opens Breast page"
//             >
//               <span>Breast</span>
//             </a>
//             <a
//               href="/plastic-surgery/breast-augmentation/"
//               className="item"
//               title="Opens Breast Augmentation page"
//               aria-label="Opens Breast Augmentation page"
//             >
//               <span>Breast Augmentation</span>
//             </a>
//             <a
//               href="/plastic-surgery/breast-lift/"
//               className="item"
//               title="Opens Breast Lift page"
//               aria-label="Opens Breast Lift page"
//             >
//               <span>Breast Lift</span>
//             </a>
//             <a
//               href="/plastic-surgery/breast-reduction/"
//               className="item"
//               title="Opens Breast Reduction page"
//               aria-label="Opens Breast Reduction page"
//             >
//               <span>Breast Reduction</span>
//             </a>
//             <a
//               href="/plastic-surgery/breast-revision/"
//               className="item"
//               title="Opens Breast Revision page"
//               aria-label="Opens Breast Revision page"
//             >
//               <span>Breast Revision</span>
//             </a>
//             <a
//               href="/plastic-surgery/body/"
//               className="item"
//               title="Opens Body page"
//               aria-label="Opens Body page"
//             >
//               <span>Body</span>
//             </a>
//             <a
//               href="/plastic-surgery/liposuction/"
//               className="item"
//               title="Opens Liposuction page"
//               aria-label="Opens Liposuction page"
//             >
//               <span>Liposuction</span>
//             </a>
//             <a
//               href="/plastic-surgery/mommy-makeover/"
//               className="item"
//               title="Opens Mommy Makeover page"
//               aria-label="Opens Mommy Makeover page"
//             >
//               <span>Mommy Makeover</span>
//             </a>
//             <a
//               href="/plastic-surgery/tummy-tuck/"
//               className="item"
//               title="Opens Tummy Tuck page"
//               aria-label="Opens Tummy Tuck page"
//             >
//               <span>Tummy Tuck</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module>
//         <div className="row pb-0" data-api-key="content">
//           <div className="item">
//             <div className="mw-80">
//               <p className="text-center">
//                 <img
//                   src="https://www.datocms-assets.com/105497/1694541996-content-img4-ptry7hqn40022n70jq2p174cumchyhxo6ci45eaei8.png"
//                   width="151"
//                   height="95"
//                 />
//               </p>
//               <h2 className="text-center">Plastic Surgery in Orlando</h2>
//               <p>
//                 The Goldfingers Aesthetics &amp;Plastic Surgery philosophy is
//                 how we set ourselves apart from other Orlando Plastic Surgery
//                 practices. Our commitment is to giving patients the best,
//                 cutting-edge plastic surgery treatments at the hands of Dr.
//                 Michael McClure and our hand-picked team of top surgical staff
//                 and patient coordinators. Our goal in the practice of plastic
//                 surgery is to deliver the highest quality patient care by
//                 applying knowledge and technical expertise within a caring and
//                 personal environment. Our beautiful plastic surgery center is
//                 located in Lake Mary, Florida, with an onsite, fully accredited
//                 AAAA surgical center for our patients' comfort and
//                 convenience.&nbsp;Whether you are searching for a slimmer
//                 waistline or more symmetrical breasts, Goldfingers Plastic
//                 Surgery offers the Gold Standard in Cosmetic and Plastic
//                 Surgery.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Page Index Module */}
//       <div className="mod_index container" data-s3-module>
//         <div className="row subcontent ">
//           <div className="inner">
//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/breast/"
//                 title="Opens Breast page"
//                 aria-label="Opens Breast page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008860-breast-banner.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="Doctor showing breast implant to patient"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Breast</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/breast/"
//                   className="title"
//                   title="Opens Breast page"
//                   aria-label="Opens Breast page"
//                 >
//                   <h2>Breast</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/breast-augmentation/"
//                 title="Opens Breast Augmentation page"
//                 aria-label="Opens Breast Augmentation page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008851-breast-augmentation-banner.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="doctor handing a breast implant to woman in towel"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Breast Augmentation</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/breast-augmentation/"
//                   className="title"
//                   title="Opens Breast Augmentation page"
//                   aria-label="Opens Breast Augmentation page"
//                 >
//                   <h2>Breast Augmentation</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/breast-lift/"
//                 title="Opens Breast Lift page"
//                 aria-label="Opens Breast Lift page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008871-breast-lift-banner.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="doctor measuring a womans breasts"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Breast Lift</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/breast-lift/"
//                   className="title"
//                   title="Opens Breast Lift page"
//                   aria-label="Opens Breast Lift page"
//                 >
//                   <h2>Breast Lift</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/breast-reduction/"
//                 title="Opens Breast Reduction page"
//                 aria-label="Opens Breast Reduction page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008879-breast-reduction-banner.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="woman in chair smiling at doctor holding clipboard"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Breast Reduction</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/breast-reduction/"
//                   className="title"
//                   title="Opens Breast Reduction page"
//                   aria-label="Opens Breast Reduction page"
//                 >
//                   <h2>Breast Reduction</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/breast-revision/"
//                 title="Opens Breast Revision page"
//                 aria-label="Opens Breast Revision page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1695393892-breast-revision-banner.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="woman walking with nurse"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Breast Revision</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/breast-revision/"
//                   className="title"
//                   title="Opens Breast Revision page"
//                   aria-label="Opens Breast Revision page"
//                 >
//                   <h2>Breast Revision</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/body/"
//                 title="Opens Body page"
//                 aria-label="Opens Body page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="Doctor McClure consulting with patient"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Body</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/body/"
//                   className="title"
//                   title="Opens Body page"
//                   aria-label="Opens Body page"
//                 >
//                   <h2>Body</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/liposuction/"
//                 title="Opens Liposuction page"
//                 aria-label="Opens Liposuction page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1696526233-istock-155153677.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1696526233-istock-155153677.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1696526233-istock-155153677.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1696526233-istock-155153677.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1696526233-istock-155153677.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1696526233-istock-155153677.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="565"
//                       alt="female torso"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Liposuction</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/liposuction/"
//                   className="title"
//                   title="Opens Liposuction page"
//                   aria-label="Opens Liposuction page"
//                 >
//                   <h2>Liposuction</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/mommy-makeover/"
//                 title="Opens Mommy Makeover page"
//                 aria-label="Opens Mommy Makeover page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="woman wearing white bikini sitting down"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Mommy Makeover</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/mommy-makeover/"
//                   className="title"
//                   title="Opens Mommy Makeover page"
//                   aria-label="Opens Mommy Makeover page"
//                 >
//                   <h2>Mommy Makeover</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a
//                 className="media-btn"
//                 href="/plastic-surgery/tummy-tuck/"
//                 title="Opens Tummy Tuck page"
//                 aria-label="Opens Tummy Tuck page"
//               >
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=850"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=850"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="850"
//                       height="534"
//                       alt="woman in white bikini smiling"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Tummy Tuck</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a
//                   href="/plastic-surgery/tummy-tuck/"
//                   className="title"
//                   title="Opens Tummy Tuck page"
//                   aria-label="Opens Tummy Tuck page"
//                 >
//                   <h2>Tummy Tuck</h2>
//                 </a>
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
//             <h2>Credentials / Experience</h2>
//           </div>
//           <div className="boxes wider">
//             <div className="box wow fadeInUp">
//               <h3>Certifications</h3>
//               <ul>
//                 <li>
//                   Board Certified by the American Board of Plastic Surgery
//                 </li>
//                 <li>Member Florida Society of Plastic Surgery</li>
//                 <li>Member A.S.P.S. (American Society of Plastic Surgery)</li>
//               </ul>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Experience</h3>
//               <ul>
//                 <li>General Surgery Board Eligible/Board Certified surgeon</li>
//                 <li>
//                   Surgical hospitalist at Veterans Administration Hospital in
//                   Jackson, MS
//                 </li>
//                 <li>Trauma Surgeon Faculty University South Alabama</li>
//               </ul>
//             </div>
//             <div className="box wow fadeInUp">
//               <h3>Training</h3>
//               <ul className="columns">
//                 <li>General Surgery Residency</li>
//                 <li>Chief Resident General Surgery</li>
//                 <li>Fellowship in Breast Oncoplastic Surgery</li>
//                 <li>Fellowship in minimally invasive/laparoscopic surgery</li>
//                 <li>Residency in Plastic and Reconstructive Surgery</li>
//                 <li>Chief Resident in Plastic and Reconstructive Surgery</li>
//               </ul>
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
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default PlasticSurgery;



"use client";

import React, { useEffect, useState } from "react";
import {
  fetchPlasticSurgeryPageData,
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/plasticSurgery/fetchPlasticSurgeryPageComponent";

interface PlasticSurgeryData {
  heroSection: any;
  pageIndexListSection: any;
  columnSection: any;
  pageIndexSection: any;
  boxGridSection: any;
  globalStyles: any;
}

const PlasticSurgeryPage: React.FC = () => {
  const [pageData, setPageData] = useState<PlasticSurgeryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlasticSurgeryPageData(
          "plastic-surgery-page-component"
        );
        setPageData(data);
      } catch (error) {
        console.error("Error fetching Plastic Surgery page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const {
    heroSection,
    pageIndexListSection,
    columnSection,
    pageIndexSection,
    boxGridSection,
  } = pageData;

  const getResponsiveSrcSet = (images: any, width: number) => {
    const baseUrl = getResponsiveImageUrls(images);
    return `${baseUrl.large}?auto=format,compress&w=${width}, ${
      baseUrl.large
    }?auto=format,compress&w=${width * 1.5} 2x`;
  };

  return (
    <main id="main">
      {/* Page Layout */}
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
                alt={heroSection.backgroundImage.alt || "Background Texture"}
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
                <div className="text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(heroSection.description),
                    }}
                  />
                </div>
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
                  }?auto=format,compress&w=1918`}
                  data-lazyload-srcset={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1918`}
                />
                <img
                  src={`${
                    getResponsiveImageUrls(heroSection.mediaImage).large
                  }?auto=format,compress&w=1918`}
                  width="1918"
                  height="1206"
                  alt={
                    heroSection.mediaImage.alt ||
                    "Doctor Jay giving consultation"
                  }
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Page Index List Module */}
      {pageIndexListSection?.show && (
        <div
          className={`mod_index_list ${
            pageIndexListSection.option || "option-1"
          } container`}
          data-s3-module
        >
          <div className="row ">
            <div className="inner">
              {pageIndexListSection.links?.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  className="item"
                  title={link.title}
                  aria-label={link.ariaLabel}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Column Module */}
      {columnSection?.show && (
        <div className="mod_column viewport container" data-s3-module>
          <div
            className={`row ${columnSection.paddingBottom || "pb-0"}`}
            data-api-key="content"
          >
            <div className="item">
              <div className={columnSection.maxWidth || "mw-80"}>
                {columnSection.logo && (
                  <p className="text-center">
                    <img
                      src={
                        columnSection.logo.cloudinary_url ||
                        columnSection.logo.url
                      }
                      width={columnSection.logoWidth || 151}
                      height={columnSection.logoHeight || 95}
                      alt={columnSection.logoAlt || ""}
                    />
                  </p>
                )}
                <h2 className={columnSection.headingAlignment || "text-center"}>
                  {columnSection.heading}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnSection.content),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Index Module */}
      {pageIndexSection?.show && (
        <div className="mod_index container" data-s3-module>
          <div className="row subcontent ">
            <div className="inner">
              {pageIndexSection.items?.map((item: any, index: number) => (
                <div key={index} className="item">
                  <a
                    className="media-btn"
                    href={item.url}
                    title={item.linkTitle}
                    aria-label={item.ariaLabel}
                  >
                    <div className="media">
                      <picture className="background">
                        <source
                          media="(max-width:420px)"
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={getResponsiveSrcSet(
                            item.image,
                            420
                          )}
                        />
                        <source
                          media="(max-width:800px)"
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={getResponsiveSrcSet(
                            item.image,
                            800
                          )}
                        />
                        <source
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={`${
                            getResponsiveImageUrls(item.image).desktop
                          }?auto=format,compress&w=850`}
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-src={`${
                            getResponsiveImageUrls(item.image).desktop
                          }?auto=format,compress&w=850`}
                          loading="lazy"
                          data-lazyload="img"
                          width="850"
                          height="534"
                          alt={item.image.alt || ""}
                          draggable="false"
                        />
                      </picture>
                      <div className="content">
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </a>
                  <div className="copy">
                    <a
                      href={item.url}
                      className="title"
                      title={item.linkTitle}
                      aria-label={item.ariaLabel}
                    >
                      <h2>{item.title}</h2>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Box Grid Module */}
      {boxGridSection?.show && (
        <div
          className={`mod_box_grid viewport ${
            boxGridSection.gridLayout || "three-boxes"
          }   container ${boxGridSection.gridLayout || "option-1"} default  ${
            boxGridSection.hasBackground ? "bkg-image" : ""
          } ${boxGridSection.theme} wider `}
          data-s3-module
        >
          <div className="row">
            <div className="content-before">
              <h2>{boxGridSection.heading}</h2>
            </div>
            <div className="boxes wider">
              {boxGridSection.boxes?.map((box: any, index: number) => (
                <div key={index} className="box wow fadeInUp">
                  <h3>{box.heading}</h3>
                  {box.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(box.content),
                      }}
                    />
                  )}
                  {box.bulletPoints && box.bulletPoints.length > 0 && (
                    <ul
                      className={
                        box.bulletPointsLayout === "columns" ? "columns" : ""
                      }
                    >
                      {box.bulletPoints.map((point: any, idx: number) => (
                        <li key={idx}>{point.text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          {boxGridSection.hasBackground && boxGridSection.backgroundImage && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).mobile
                }?auto=format,compress&w=1000, ${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).mobile
                }?auto=format,compress&w=1500 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).tablet
                }?auto=format,compress&w=800, ${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).tablet
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).desktop
                }?auto=format,compress&w=1400, ${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).desktop
                }?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).large
                }?auto=format,compress&w=2200`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${
                  getResponsiveImageUrls(boxGridSection.backgroundImage).large
                }?auto=format,compress&w=2200`}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="1726"
                alt={boxGridSection.backgroundImage.alt || "Background media"}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}
      {/* /Page Layout */}
    </main>
  );
};

export default PlasticSurgeryPage;