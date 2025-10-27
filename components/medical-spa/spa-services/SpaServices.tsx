// import React from "react";

// const SpaServices: React.FC = () => {
//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Hero Module */}
//       <div className="mod_hero banner mobile-stack" data-s3-module="">
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
//                     href="/medical-spa/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Medical Spa
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/medical-spa/spa-services/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Spa Services
//                   </a>
//                 </li>
//               </ul>
//               <h1>Spa Services</h1>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Kristi Coody injecting a patient with filler"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Index Static Module */}
//       <div className="mod_index_static mod_index container" data-s3-module="">
//         <div className="row subcontent">
//           <div className="inner">
//             <div className="item">
//               <a href="/medical-spa/lash-extensions/" className="media-btn">
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Lash Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Lash Extensions</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/medical-spa/lash-extensions/" className="title">
//                   <h2>Lash Extensions</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a href="/medical-spa/mens-services/" className="media-btn">
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Men Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Men's Services</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/medical-spa/mens-services/" className="title">
//                   <h2>Men's Services</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a href="/medical-spa/micro-channeling/" className="media-btn">
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Micro-Channeling Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Micro-Channeling</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/medical-spa/micro-channeling/" className="title">
//                   <h2>Micro-Channeling</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a href="/medical-spa/permanent-makeup/" className="media-btn">
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Permanent Makeup Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Permanent Makeup</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/medical-spa/permanent-makeup/" className="title">
//                   <h2>Permanent Makeup</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a href="/medical-spa/skin-medica/" className="media-btn">
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="SkinMedica Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>SkinMedica</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/medical-spa/skin-medica/" className="title">
//                   <h2>SkinMedica</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a href="/medical-spa/skincare-services/" className="media-btn">
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Skincare Services Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Skincare Services</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/medical-spa/skincare-services/" className="title">
//                   <h2>Skincare Services</h2>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default SpaServices;



"use client";

import React, { useEffect, useState } from "react";
import { fetchSpaFillersPageData, getResponsiveImageUrls } from "@/lib/api/medicalSpa/fetchSpaServicesPageComponent"; // Adjust path to your API utilities

interface SpaServicesData {
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
    mediaImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
  };
  servicesSection: {
    show: boolean;
    backgroundColor?: string;
    containerClass?: string;
    serviceItems: Array<{
      title: string;
      url: string;
      overlayText?: string;
      image: {
        mobile?: any;
        tablet?: any;
        desktop?: any;
        large?: any;
        alt?: string;
      };
      imageBackgroundColor?: string;
      overlayColor?: string;
      overlayBackgroundColor?: string;
      titleColor?: string;
      titleHoverColor?: string;
    }>;
    itemsPerRow?: string;
    itemSpacing?: string;
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
}

const SpaServices: React.FC = () => {
  const [pageData, setPageData] = useState<SpaServicesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSpaFillersPageData();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching Spa Services page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const { heroSection, servicesSection, sectionOrder, globalStyles } = pageData;

  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

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
            data-s3-module=""
            style={{ backgroundColor: heroSection.backgroundColor }}
          >
            <div className="wrapper">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
                />
                <img
                  src={placeholder}
                  data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
                  loading="lazy"
                  data-lazyload="img"
                  width="1994"
                  height="1206"
                  alt={heroBgImages.alt || "Background Texture"}
                  draggable="false"
                />
              </picture>
              <div className="row">
                <div className="inner">
                  <ul className="partial_breadcrumb" data-s3-partial="">
                    {heroSection.breadcrumbs.map((crumb, index) => (
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
                  <h1
                    style={{
                      color: heroSection.titleColor,
                      fontSize: heroSection.titleFontSize,
                    }}
                  >
                    {heroSection.title}
                  </h1>
                </div>
              </div>
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
                    data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                    data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
                    data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet={`${heroMediaImages.large}?auto=format,compress&w=1920`}
                    data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1920`}
                  />
                  <img
                    src={`${heroMediaImages.large}?auto=format,compress&w=1920`}
                    width="1920"
                    height="1206"
                    alt={
                      heroMediaImages.alt ||
                      "Kristi Coody injecting a patient with filler"
                    }
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "services":
        if (!servicesSection.show) return null;
        return (
          <div
            className={`mod_index_static mod_index ${
              servicesSection.containerClass || "container"
            }`}
            data-s3-module=""
            style={{ backgroundColor: servicesSection.backgroundColor }}
          >
            <div className="row subcontent">
              <div className="inner">
                {servicesSection.serviceItems.map((service, index) => {
                  const serviceImages = getResponsiveImageUrls(service.image);
                  return (
                    <div className="item" key={index}>
                      <a href={service.url} className="media-btn">
                        <div className="media">
                          <picture className="background">
                            <source
                              media="(max-width:420px)"
                              srcSet={placeholder}
                              data-lazyload-srcset={`${serviceImages.mobile}?auto=format,compress&w=420, ${serviceImages.mobile}?auto=format,compress&w=630 2x`}
                            />
                            <source
                              media="(max-width:800px)"
                              srcSet={placeholder}
                              data-lazyload-srcset={`${serviceImages.tablet}?auto=format,compress&w=800, ${serviceImages.tablet}?auto=format,compress&w=1200 2x`}
                            />
                            <source
                              media="(max-width:1400px)"
                              srcSet={placeholder}
                              data-lazyload-srcset={`${serviceImages.desktop}?auto=format,compress&w=1400, ${serviceImages.desktop}?auto=format,compress&w=2100 2x`}
                            />
                            <source
                              srcSet={placeholder}
                              data-lazyload-srcset={`${serviceImages.large}?auto=format,compress&w=1920`}
                            />
                            <img
                              src={placeholder}
                              data-lazyload-src={`${serviceImages.large}?auto=format,compress&w=1920`}
                              loading="lazy"
                              data-lazyload="img"
                              width="1920"
                              height="1206"
                              alt={
                                serviceImages.alt || `${service.title} Media`
                              }
                              draggable="false"
                            />
                          </picture>
                          <div className="content">
                            <span style={{ color: service.overlayColor }}>
                              {service.overlayText || service.title}
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="copy">
                        <a
                          href={service.url}
                          className="title"
                          style={{ color: service.titleColor }}
                        >
                          <h2>{service.title}</h2>
                        </a>
                      </div>
                    </div>
                  );
                })}
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
      {/* Page Layout */}
      {sectionOrder.map((item, index) => (
        <React.Fragment key={index}>
          {renderSection(item.section)}
        </React.Fragment>
      ))}
      {/* /Page Layout */}
    </main>
  );
};

export default SpaServices;