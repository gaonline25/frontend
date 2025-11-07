// // import React from "react";

// // const AboutHero: React.FC = () => {
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
// //                   <Link
// //                     href="/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     Home
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/about/"
// //                     role="link"
// //                     aria-label="Breadcrumbs to help navigate the user"
// //                   >
// //                     About
// //                   </Link>
// //                 </li>
// //               </ul>
// //               <h1>About</h1>
// //             </div>
// //           </div>
// //           <div className="media">
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=630 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=630 2x"
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1200 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1200 2x"
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=2100 2x"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=2100 2x"
// //               />
// //               <source
// //                 srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1920"
// //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1920"
// //               />
// //               <img
// //                 src="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1920"
// //                 width="1920"
// //                 height="1206"
// //                 alt="Goldfinger's building"
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Page Index List Module */}
// //       <div className="mod_index_list option-1 container" data-s3-module="">
// //         <div className="row ">
// //           <div className="inner">
// //             <Link
// //               href="/about/our-founders/"
// //               className="item"
// //               title="Opens Our Founders page"
// //               aria-label="Opens Our Founders page"
// //             >
// //               <span>Our Founders</span>
// //             </Link>
// //             <Link
// //               href="/locations/?tab=providers"
// //               className="item"
// //               title="Opens Providers page"
// //               aria-label="Opens Providers page"
// //             >
// //               <span>Providers</span>
// //             </Link>
// //             <Link
// //               href="/about/testimonials/"
// //               className="item"
// //               title="Opens Testimonials page"
// //               aria-label="Opens Testimonials page"
// //             >
// //               <span>Testimonials</span>
// //             </Link>
// //             <Link
// //               href="/blog/"
// //               className="item"
// //               title="Opens Blog page"
// //               aria-label="Opens Blog page"
// //             >
// //               <span>Blog</span>
// //             </Link>
// //             <Link
// //               href="/about/resource-center/"
// //               className="item"
// //               title="Opens Videos page"
// //               aria-label="Opens Videos page"
// //             >
// //               <span>Videos</span>
// //             </Link>
// //             <Link
// //               href="/about/confidentiality-statement/"
// //               className="item"
// //               title="Opens Privacy Policy page"
// //               aria-label="Opens Privacy Policy page"
// //             >
// //               <span>Privacy Policy</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Page Index Module */}
// //       <div className="mod_index container" data-s3-module="">
// //         <div className="row subcontent ">
// //           <div className="inner">
// //             <div className="item">
// //               <Link
// //                 className="media-btn"
// //                 href="/about/our-founders/"
// //                 title="Opens Our Founders page"
// //                 aria-label="Opens Our Founders page"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=850"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=850"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="850"
// //                       height="534"
// //                       alt="Dr. James Young & woman with long red hair"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Our Founders</span>
// //                   </div>
// //                 </div>
// //               </Link>
// //               <div className="copy">
// //                 <Link
// //                   href="/about/our-founders/"
// //                   className="title"
// //                   title="Opens Our Founders page"
// //                   aria-label="Opens Our Founders page"
// //                 >
// //                   <h2>Our Founders</h2>
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <Link
// //                 className="media-btn"
// //                 href="/locations/?tab=providers"
// //                 title="Opens Providers page"
// //                 aria-label="Opens Providers page"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=850"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=850"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="850"
// //                       height="534"
// //                       alt="Goldfingers partners"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Providers</span>
// //                   </div>
// //                 </div>
// //               </Link>
// //               <div className="copy">
// //                 <Link
// //                   href="/locations/?tab=providers"
// //                   className="title"
// //                   title="Opens Providers page"
// //                   aria-label="Opens Providers page"
// //                 >
// //                   <h2>Providers</h2>
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <Link
// //                 className="media-btn"
// //                 href="/about/testimonials/"
// //                 title="Opens Testimonials page"
// //                 aria-label="Opens Testimonials page"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=850"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=850"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="850"
// //                       height="534"
// //                       alt="Brunette smiling up at woman holding clipboard"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Testimonials</span>
// //                   </div>
// //                 </div>
// //               </Link>
// //               <div className="copy">
// //                 <Link
// //                   href="/about/testimonials/"
// //                   className="title"
// //                   title="Opens Testimonials page"
// //                   aria-label="Opens Testimonials page"
// //                 >
// //                   <h2>Testimonials</h2>
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <Link
// //                 className="media-btn"
// //                 href="/blog/"
// //                 title="Opens Blog page"
// //                 aria-label="Opens Blog page"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=850"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=850"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="850"
// //                       height="534"
// //                       alt="woman looking in hand mirror pointing to her face"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Blog</span>
// //                   </div>
// //                 </div>
// //               </Link>
// //               <div className="copy">
// //                 <Link
// //                   href="/blog/"
// //                   className="title"
// //                   title="Opens Blog page"
// //                   aria-label="Opens Blog page"
// //                 >
// //                   <h2>Blog</h2>
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <Link
// //                 className="media-btn"
// //                 href="/about/resource-center/"
// //                 title="Opens Videos page"
// //                 aria-label="Opens Videos page"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=850"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=850"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="850"
// //                       height="638"
// //                       alt="Doctor James Young"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Videos</span>
// //                   </div>
// //                 </div>
// //               </Link>
// //               <div className="copy">
// //                 <Link
// //                   href="/about/resource-center/"
// //                   className="title"
// //                   title="Opens Videos page"
// //                   aria-label="Opens Videos page"
// //                 >
// //                   <h2>Videos</h2>
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="item">
// //               <Link
// //                 className="media-btn"
// //                 href="/about/confidentiality-statement/"
// //                 title="Opens Privacy Policy page"
// //                 aria-label="Opens Privacy Policy page"
// //               >
// //                 <div className="media">
// //                   <picture className="background">
// //                     <source
// //                       media="(max-width:420px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=630 2x"
// //                     />
// //                     <source
// //                       media="(max-width:800px)"
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=1200 2x"
// //                     />
// //                     <source
// //                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=850"
// //                     />
// //                     <img
// //                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //                       data-lazyload-src="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=850"
// //                       loading="lazy"
// //                       data-lazyload="img"
// //                       width="850"
// //                       height="534"
// //                       alt="Beach in Clearwater, FL"
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                   <div className="content">
// //                     <span>Privacy Policy</span>
// //                   </div>
// //                 </div>
// //               </Link>
// //               <div className="copy">
// //                 <Link
// //                   href="/about/confidentiality-statement/"
// //                   className="title"
// //                   title="Opens Privacy Policy page"
// //                   aria-label="Opens Privacy Policy page"
// //                 >
// //                   <h2>Privacy Policy</h2>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default AboutHero;


// import React from "react";
// import {
//   fetchAboutHeroData,
//   getResponsiveImageUrls,
// } from "@/lib/api/About"; 
// import Link from "next/link";

// const AboutHero: React.FC = async () => {
//   const data = await fetchAboutHeroData();

//   if (!data) {
//     return null;
//   }

//   const heroSection = data.heroSection || {};
//   const indexListSection = data.indexListSection || {};
//   const pageIndexSection = data.pageIndexSection || {};

//   const bgImages = getResponsiveImageUrls(heroSection.backgroundImage);
//   const mediaImages = getResponsiveImageUrls(heroSection.mediaImage);

//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Hero Module */}
//       <div
//         className="mod_hero banner mobile-stack"
//         data-s3-module=""
//         style={{
//           backgroundColor: heroSection.backgroundColor || undefined,
//         }}
//       >
//         <div className="wrapper">
//           <picture className="background">
//             {bgImages.mobile && (
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgImages.mobile}?auto=format,compress&w=420, ${bgImages.mobile}?auto=format,compress&w=630 2x`}
//               />
//             )}
//             {bgImages.tablet && (
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgImages.tablet}?auto=format,compress&w=800, ${bgImages.tablet}?auto=format,compress&w=1200 2x`}
//               />
//             )}
//             {bgImages.desktop && (
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgImages.desktop}?auto=format,compress&w=1400, ${bgImages.desktop}?auto=format,compress&w=2100 2x`}
//               />
//             )}
//             {bgImages.large && (
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset={`${bgImages.large}?auto=format,compress&w=1994`}
//               />
//             )}
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src={`${bgImages.large}?auto=format,compress&w=1994`}
//               loading="lazy"
//               data-lazyload="img"
//               width="1994"
//               height="1206"
//               alt={bgImages.alt}
//               draggable="false"
//             />
//           </picture>
//           <div className="row">
//             <div className="inner">
//               <ul className="partial_breadcrumb" data-s3-partial="">
//                 {heroSection.breadcrumbs?.map(
//                   (breadcrumb: any, index: number) => (
//                     <li key={index}>
//                       <Link
//                         href={breadcrumb.url}
//                         role="link"
//                         aria-label={breadcrumb.ariaLabel}
//                       >
//                         {breadcrumb.label}
//                       </Link>
//                     </li>
//                   )
//                 )}
//               </ul>
//               <h1
//                 style={{
//                   color: heroSection.titleColor || undefined,
//                   fontSize: heroSection.titleFontSize || undefined,
//                 }}
//               >
//                 {heroSection.title}
//               </h1>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               {mediaImages.mobile && (
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={`${mediaImages.mobile}?auto=format,compress&w=420, ${mediaImages.mobile}?auto=format,compress&w=630 2x`}
//                   data-lazyload-srcset={`${mediaImages.mobile}?auto=format,compress&w=420, ${mediaImages.mobile}?auto=format,compress&w=630 2x`}
//                 />
//               )}
//               {mediaImages.tablet && (
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={`${mediaImages.tablet}?auto=format,compress&w=800, ${mediaImages.tablet}?auto=format,compress&w=1200 2x`}
//                   data-lazyload-srcset={`${mediaImages.tablet}?auto=format,compress&w=800, ${mediaImages.tablet}?auto=format,compress&w=1200 2x`}
//                 />
//               )}
//               {mediaImages.desktop && (
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={`${mediaImages.desktop}?auto=format,compress&w=1400, ${mediaImages.desktop}?auto=format,compress&w=2100 2x`}
//                   data-lazyload-srcset={`${mediaImages.desktop}?auto=format,compress&w=1400, ${mediaImages.desktop}?auto=format,compress&w=2100 2x`}
//                 />
//               )}
//               {mediaImages.large && (
//                 <source
//                   srcSet={`${mediaImages.large}?auto=format,compress&w=1920`}
//                   data-lazyload-srcset={`${mediaImages.large}?auto=format,compress&w=1920`}
//                 />
//               )}
//               <img
//                 src={`${mediaImages.large}?auto=format,compress&w=1920`}
//                 width="1920"
//                 height="1206"
//                 alt={mediaImages.alt}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Page Index List Module */}
//       <div
//         className="mod_index_list option-1 container"
//         data-s3-module=""
//         style={{
//           backgroundColor: indexListSection.backgroundColor || undefined,
//         }}
//       >
//         <div className="row ">
//           <div className="inner">
//             {indexListSection.items?.map((item: any, index: number) => (
//               <Link
//                 key={index}
//                 href={item.url}
//                 className="item"
//                 title={item.title}
//                 aria-label={item.ariaLabel}
//                 style={{
//                   color: indexListSection.textColor || undefined,
//                 }}
//               >
//                 <span>{item.label}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Page Index Module */}
//       <div
//         className="mod_index container"
//         data-s3-module=""
//         style={{
//           backgroundColor: pageIndexSection.backgroundColor || undefined,
//         }}
//       >
//         <div className="row subcontent ">
//           <div className="inner">
//             {pageIndexSection.cards?.map((card: any, index: number) => {
//               const cardImages = getResponsiveImageUrls(card.image);
//               const cardBgColor =
//                 card.customBackgroundColor ||
//                 pageIndexSection.cardBackgroundColor;
//               const cardTextColor =
//                 card.customTextColor || pageIndexSection.cardTextColor;

//               return (
//                 <div className="item" key={index}>
//                   <Link
//                     className="media-btn"
//                     href={card.url}
//                     title={card.titleAttribute}
//                     aria-label={card.ariaLabel}
//                   >
//                     <div
//                       className="media"
//                       style={{
//                         backgroundColor: cardBgColor || undefined,
//                       }}
//                     >
//                       <picture className="background">
//                         {cardImages.mobile && (
//                           <source
//                             media="(max-width:420px)"
//                             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                             data-lazyload-srcset={`${cardImages.mobile}?auto=format,compress&w=420, ${cardImages.mobile}?auto=format,compress&w=630 2x`}
//                           />
//                         )}
//                         {cardImages.tablet && (
//                           <source
//                             media="(max-width:800px)"
//                             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                             data-lazyload-srcset={`${cardImages.tablet}?auto=format,compress&w=800, ${cardImages.tablet}?auto=format,compress&w=1200 2x`}
//                           />
//                         )}
//                         {cardImages.desktop && (
//                           <source
//                             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                             data-lazyload-srcset={`${cardImages.desktop}?auto=format,compress&w=850`}
//                           />
//                         )}
//                         <img
//                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                           data-lazyload-src={`${cardImages.desktop}?auto=format,compress&w=850`}
//                           loading="lazy"
//                           data-lazyload="img"
//                           width="850"
//                           height="534"
//                           alt={cardImages.alt}
//                           draggable="false"
//                         />
//                       </picture>
//                       <div className="content">
//                         <span style={{ color: cardTextColor || undefined }}>
//                           {card.labelText || card.title}
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                   <div className="copy">
//                     <Link
//                       href={card.url}
//                       className="title"
//                       title={card.titleAttribute}
//                       aria-label={card.ariaLabel}
//                     >
//                       <h2 style={{ color: cardTextColor || undefined }}>
//                         {card.title}
//                       </h2>
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default AboutHero;



// components/About.tsx
import React from "react";
import Link from "next/link";
import { getResponsiveImageUrls } from "@/lib/api/About";

interface AboutHeroProps {
  pageData: any;
}

const AboutHero: React.FC<AboutHeroProps> = ({ pageData }) => {
  if (!pageData) return null;

  const heroSection = pageData.heroSection || {};
  const indexListSection = pageData.indexListSection || {};
  const pageIndexSection = pageData.pageIndexSection || {};

  const bgImages = getResponsiveImageUrls(heroSection.backgroundImage);
  const mediaImages = getResponsiveImageUrls(heroSection.mediaImage);

  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      <div
        className="mod_hero banner mobile-stack"
        data-s3-module=""
        style={{
          backgroundColor: heroSection.backgroundColor || undefined,
        }}
      >
        <div className="wrapper">
          <picture className="background">
            {bgImages.mobile && (
              <source
                media="(max-width:420px)"
                srcSet={`${bgImages.mobile}?auto=format,compress&w=420, ${bgImages.mobile}?auto=format,compress&w=630 2x`}
              />
            )}
            {bgImages.tablet && (
              <source
                media="(max-width:800px)"
                srcSet={`${bgImages.tablet}?auto=format,compress&w=800, ${bgImages.tablet}?auto=format,compress&w=1200 2x`}
              />
            )}
            {bgImages.desktop && (
              <source
                media="(max-width:1400px)"
                srcSet={`${bgImages.desktop}?auto=format,compress&w=1400, ${bgImages.desktop}?auto=format,compress&w=2100 2x`}
              />
            )}
            {bgImages.large && (
              <source
                srcSet={`${bgImages.large}?auto=format,compress&w=1994`}
              />
            )}
            <img
              src={
                bgImages.large
                  ? `${bgImages.large}?auto=format,compress&w=1994`
                  : "/fallback.jpg"
              }
              loading="eager"
              width="1994"
              height="1206"
              alt={bgImages.alt || "About Goldfingers Aesthetics"}
              draggable="false"
            />
          </picture>

          <div className="row">
            <div className="inner">
              <ul className="partial_breadcrumb" data-s3-partial="">
                {heroSection.breadcrumbs?.map(
                  (breadcrumb: any, index: number) => (
                    <li key={index}>
                      <Link
                        href={breadcrumb.url || "#"}
                        role="link"
                        aria-label={breadcrumb.ariaLabel || breadcrumb.label}
                      >
                        {breadcrumb.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <h1
                style={{
                  color: heroSection.titleColor || undefined,
                  fontSize: heroSection.titleFontSize || undefined,
                }}
              >
                {heroSection.title}
              </h1>
            </div>
          </div>

          <div className="media">
            <picture className="background">
              {mediaImages.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${mediaImages.mobile}?auto=format,compress&w=420, ${mediaImages.mobile}?auto=format,compress&w=630 2x`}
                />
              )}
              {mediaImages.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${mediaImages.tablet}?auto=format,compress&w=800, ${mediaImages.tablet}?auto=format,compress&w=1200 2x`}
                />
              )}
              {mediaImages.desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${mediaImages.desktop}?auto=format,compress&w=1400, ${mediaImages.desktop}?auto=format,compress&w=2100 2x`}
                />
              )}
              {mediaImages.large && (
                <source
                  srcSet={`${mediaImages.large}?auto=format,compress&w=1920`}
                />
              )}
              <img
                src={
                  mediaImages.large
                    ? `${mediaImages.large}?auto=format,compress&w=1920`
                    : "/fallback.jpg"
                }
                width="1920"
                height="1206"
                alt={mediaImages.alt || "Goldfingers Aesthetics About"}
                draggable="false"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Page Index List Module */}
      <div
        className="mod_index_list option-1 container"
        data-s3-module=""
        style={{
          backgroundColor: indexListSection.backgroundColor || undefined,
        }}
      >
        <div className="row">
          <div className="inner">
            {indexListSection.items?.map((item: any, index: number) => (
              <Link
                key={index}
                href={item.url || "#"}
                className="item"
                title={item.title}
                aria-label={item.ariaLabel || item.label}
                style={{
                  color: indexListSection.textColor || undefined,
                }}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Page Index Module */}
      <div
        className="mod_index container"
        data-s3-module=""
        style={{
          backgroundColor: pageIndexSection.backgroundColor || undefined,
        }}
      >
        <div className="row subcontent">
          <div className="inner">
            {pageIndexSection.cards?.map((card: any, index: number) => {
              const cardImages = getResponsiveImageUrls(card.image);
              const cardBgColor =
                card.customBackgroundColor ||
                pageIndexSection.cardBackgroundColor;
              const cardTextColor =
                card.customTextColor || pageIndexSection.cardTextColor;

              return (
                <div className="item" key={index}>
                  <Link
                    className="media-btn"
                    href={card.url || "#"}
                    title={card.titleAttribute}
                    aria-label={card.ariaLabel || card.title}
                  >
                    <div
                      className="media"
                      style={{
                        backgroundColor: cardBgColor || undefined,
                      }}
                    >
                      <picture className="background">
                        {cardImages.mobile && (
                          <source
                            media="(max-width:420px)"
                            srcSet={`${cardImages.mobile}?auto=format,compress&w=420, ${cardImages.mobile}?auto=format,compress&w=630 2x`}
                          />
                        )}
                        {cardImages.tablet && (
                          <source
                            media="(max-width:800px)"
                            srcSet={`${cardImages.tablet}?auto=format,compress&w=800, ${cardImages.tablet}?auto=format,compress&w=1200 2x`}
                          />
                        )}
                        {cardImages.desktop && (
                          <source
                            srcSet={`${cardImages.desktop}?auto=format,compress&w=850`}
                          />
                        )}
                        <img
                          src={
                            cardImages.desktop
                              ? `${cardImages.desktop}?auto=format,compress&w=850`
                              : "/fallback.jpg"
                          }
                          loading="lazy"
                          width="850"
                          height="534"
                          alt={cardImages.alt || card.title}
                          draggable="false"
                        />
                      </picture>
                      <div className="content">
                        <span style={{ color: cardTextColor || undefined }}>
                          {card.labelText || card.title}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="copy">
                    <Link
                      href={card.url || "#"}
                      className="title"
                      title={card.titleAttribute}
                      aria-label={card.ariaLabel || card.title}
                    >
                      <h2 style={{ color: cardTextColor || undefined }}>
                        {card.title}
                      </h2>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default AboutHero;
