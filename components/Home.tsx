


// // Type definitions
// interface HomePageData {
//   accessibilityMenu: {
//     enabled: boolean;
//     items: Array<{
//       text: string;
//       href: string;
//       ariaLabel?: string;
//     }>;
//   };
//   sections: Section[];
//   seo: {
//     metaTitle?: string;
//     metaDescription?: string;
//     ogImage?: any;
//   };
// }

// interface Section {
//   sectionType: string;
//   visibility: boolean;
//   customClasses?: string;
//   backgroundColor?: string;
//   textColor?: string;
//   heroBanner?: any;
//   anchorLinks?: any;
//   introSection?: any;
//   twoColumn?: any;
//   threeColumnStats?: any;
//   homeGrid?: any;
//   homeBanner?: any;
//   halfImage?: any;
//   reviewsSlider?: any;
//   doubleBanner?: any;
//   locationsBanner?: any;
//   ctaGallery?: any;
//   tabsModule?: any;
//   id: string;
// }

// // Helper function to get image URL
// const getImageUrl = (media: any): string => {
//   if (!media) return '';
//   if (typeof media === 'string') return media;
//   if (media.cloudinary_url) return media.cloudinary_url;
//   if (media.url) return `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'https://goldfingerbackend.vercel.app'}${media.url}`;
//   return '';
// };


// export default function Home() {
//     return (
//       <div className="home sticky-header">
//         <ul
//           className="partial_a11y_menu tresio-accessibility-menu"
//           aria-label="Accessibility Menu"
//           data-s3-partial=""
//         >
//           <li>
//             <a
//               href="#"
//               aria-label="Accessibility Tools"
//               className="tresio-ada-toggle"
//               role="button"
//             >
//               Accessibility Tools
//             </a>
//           </li>
//           <li>
//             <a href="#main" aria-label="Skip to main content" role="button">
//               Skip to main content
//             </a>
//           </li>
//         </ul>
        
//         <main id="main">
//           <div
//             className="mod_home_hero banner slider dark center-placement"
//             data-s3-module=""
//           >
//             <div className="row">
//               <div className="inner">
//                 <picture className="logo">
//                   <img
//                     src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
//                     width={58}
//                     height={64}
//                     alt="Goldfingers aesthetic logo"
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//                 <h1>The Largest Aesthetics in Florida</h1>
//                 <div className="content">
//                   <p role="heading" aria-level={1}>
//                     Board Certified Plastic Surgery &amp;
//                     <span role="heading" aria-level={1}>
//                       Specialist Aesthetic Injectors
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="media">
//               <video
//                 className="background"
//                 muted
//                 autoPlay
//                 loop
//                 title="goldfingers aesthetics logo on a thumbnail"
//                 data-desktop-vid="https://videos.tresiocdn.com/xFFGVLSftcFmp9rDhUuR4ndkibIyYiGh/high.mp4"
//                 data-tablet-vid="https://videos.tresiocdn.com/xFFGVLSftcFmp9rDhUuR4ndkibIyYiGh/medium.mp4"
//                 data-mobile-vid="https://videos.tresiocdn.com/xFFGVLSftcFmp9rDhUuR4ndkibIyYiGh/low.mp4"
//               >
//                 <source
//                   media="(max-width:640px)"
//                   src="https://videos.tresiocdn.com/xFFGVLSftcFmp9rDhUuR4ndkibIyYiGh/low.mp4"
//                 />
//                 <source
//                   media="(max-width:920px)"
//                   src="https://videos.tresiocdn.com/xFFGVLSftcFmp9rDhUuR4ndkibIyYiGh/medium.mp4"
//                 />
//                 <source
//                   media="(min-width:921px)"
//                   src="https://videos.tresiocdn.com/xFFGVLSftcFmp9rDhUuR4ndkibIyYiGh/high.mp4"
//                 />
//               </video>
//               <div className="home-hero-slider">
//                 <div className="slide">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="
//               https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=850,
//               https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=1275 2x
//             "
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=850, https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=1275 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="
//               https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=800&q=90,
//               https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=1200&q=90 2x
//             "
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=800&q=90, https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=1200&q=90 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="
//               https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=1400&q=90,
//               https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=2100&q=90 2x
//             "
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=1400&q=90, https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=2100&q=90 2x"
//                     />
//                     <source
//                       srcSet="
//               https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=2200&q=90
//             "
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=2200&q=90"
//                     />
//                     <img
//                       src="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=2200&q=90"
//                       width={2200}
//                       height={1238}
//                       alt="gorgeous woman smiling"
//                       draggable="false"
//                     />
//                   </picture>
//                 </div>
//               </div>
//               <div className="slider-nav">
//                 <button
//                   type="button"
//                   className="prev"
//                   data-controls="prev"
//                   role="none"
//                   aria-label="Previous slide of slider"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   type="button"
//                   className="next"
//                   data-controls="next"
//                   role="none"
//                   aria-label="Next slide of slider"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="container mod_anchor_link" data-s3-module="">
//             <div className="row">
//               <div className="links">
//                 <a
//                   href="/medical-spa/botox/"
//                   role="link"
//                   aria-label="Link to BOTOX page"
//                 >
//                   BOTOX
//                 </a>
//                 <a
//                   href="/medical-spa/dermal-fillers/"
//                   role="link"
//                   aria-label="Link to Filler page"
//                 >
//                   Filler
//                 </a>
//                 <a
//                   href="/medical-spa/spa-services/"
//                   role="link"
//                   aria-label="Link to Aesthetics page"
//                 >
//                   Aesthetics
//                 </a>
//                 <a
//                   href="/plastic-surgery/"
//                   role="link"
//                   aria-label="Link to Surgery page"
//                 >
//                   Surgery
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_intro container viewport option-2 wide wow fadeInUp"
//             data-s3-module=""
//           >
//             <div className="row mb-10 text-center">
//               <div className="inner" data-api-key="content">
//                 <center>
//                   <h2>
//                     Receive 10 complimentary units of Botox® Cosmetic with your
//                     first treatment.
//                   </h2>
//                   <h4>
//                     <span>50 units purchase minimum.</span>
//                   </h4>
//                   <h4>
//                     <span>Valid at all locations. </span>
//                   </h4>
//                   <h4>
//                     <span>
//                       One-time use and new patients only. Cannot be combined
//                       with other offers.
//                     </span>
//                   </h4>
//                 </center>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_column viewport container has-media"
//             data-s3-module=""
//           >
//             <div className="row pt-20 media-left" data-api-key="content">
//               <div className="item">
//                 <h2>
//                   <span className="small" role="heading" aria-level={1}>
//                     Allergan Aesthetics Premier Partner{" "}
//                   </span>
//                   <span className="first-block">
//                     Ranked in the Top 1% in the{" "}
//                   </span>
//                   <span className="second-block">
//                     nation and #1 in Florida.
//                   </span>
//                 </h2>
//                 <p>
//                   Goldfingers Aesthetics provides an everyday indulgence that
//                   leaves you feeling invigorated with smoother, refreshed skin
//                   and an overall healthier YOU. These subtle, understated
//                   changes create the most dramatic differences. Our professional
//                   staff of highly trained skin care specialists and doctors use
//                   their creative abilities, specialties, and licensed training
//                   to give you the highest quality in cosmetic enhancement
//                   services. Our attention to detail, artistry, and consistency
//                   are echoed throughout our results and locations.
//                 </p>
//               </div>
//               <picture className="media">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="
//           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//         "
//                   data-lazyload-srcset="https://www.datocms-assets.com/105497/1692995669-3.png?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1692995669-3.png?auto=format,compress&w=630 2x"
//                 />
//                 <source
//                   srcSet="
//           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//         "
//                   data-lazyload-srcset="https://www.datocms-assets.com/105497/1692995669-3.png?auto=format,compress&w=708"
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src="https://www.datocms-assets.com/105497/1692995669-3.png?auto=format,compress&w=708"
//                   loading="lazy"
//                   data-lazyload="img"
//                   width={708}
//                   height={715}
//                   alt="top 50 status 2023 logo"
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//           <div
//             className="mod_columns_three viewport container"
//             data-s3-module=""
//           >
//             <div className="row">
//               <div className="content">
//                 <div className="wow fadeInLeft" data-api-key="content_left">
//                   <h2>50+</h2>
//                   <h3>
//                     <span className="small">
//                       Years of Combined
//                       <span className="block-desktop">Experience</span>
//                     </span>
//                   </h3>
//                 </div>
//                 <div className="wow fadeInLeft" data-api-key="content_center">
//                   <h2>20+</h2>
//                   <h3>
//                     <span className="small">
//                       Goldfingers
//                       <span className="block-desktop">
//                         Aesthetics Providers
//                       </span>
//                     </span>
//                   </h3>
//                 </div>
//                 <div className="wow fadeInRight" data-api-key="content_right">
//                   <h2>+19</h2>
//                   <h3>
//                     <span className="small">
//                       Goldfingers
//                       <span className="block-desktop">
//                         Aesthetics Locations
//                       </span>
//                     </span>
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_home_grid viewport container option-1"
//             data-s3-module=""
//           >
//             <div className="row">
//               <div className="grid">
//                 <div className="item">
//                   <div className="media">
//                     <picture className="">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1340"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1340"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={1340}
//                         height={880}
//                         alt="close up of woman looking at camera"
//                         draggable="false"
//                       />
//                     </picture>
//                     <h2 className="title">Spa Services</h2>
//                   </div>
//                   <div className="content">
//                     <p>
//                       <a
//                         href="/medical-spa/spa-services/"
//                         className="arrow-right"
//                       >
//                         Explore Spa Services
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="media">
//                     <picture className="">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236420-5.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693236420-5.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236420-5.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693236420-5.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236420-5.jpg?auto=format,compress&w=1340"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693236420-5.jpg?auto=format,compress&w=1340"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={1340}
//                         height={880}
//                         alt="close up on woman's breast in a bathing suit"
//                         draggable="false"
//                       />
//                     </picture>
//                     <h2 className="title">Plastic Surgery</h2>
//                   </div>
//                   <div className="content">
//                     <p>
//                       <a href="/plastic-surgery/" className="arrow-right">
//                         Explore Plastic Surgery
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="media">
//                     <picture className="">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         media="(max-width:1400px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=2100 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1624"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1624"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={1624}
//                         height={1880}
//                         alt="close up of pretty blonde woman"
//                         draggable="false"
//                       />
//                     </picture>
//                     <h2 className="title">Injectables</h2>
//                   </div>
//                   <div className="content">
//                     <p>
//                       <a
//                         href="/medical-spa/injectables/"
//                         className="arrow-right"
//                       >
//                         Explore Injectables
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_home_banner container gray-background mb-0 option-1 has-links viewport"
//             data-s3-module=""
//           >
//             <div className="wrapper">
//               <div className="row wow" data-wow-duration="2s">
//                 <div className="content" data-api-key="content">
//                   <h2>
//                     <span className="small">Goldfingers Aesthetics </span>
//                     <span className="first-block">
//                       The #1 Aesthetic Center for{" "}
//                     </span>
//                     <span className="second-block">
//                       BOTOX cosmetic treatment
//                     </span>
//                   </h2>
//                   <div className="columns-four">
//                     <div className="col">
//                       <p className="title">Largest in Florida</p>
//                       <p className="content">
//                         24 locations and growing, with centers across Florida to
//                         serve you.
//                       </p>
//                     </div>
//                     <div className="col">
//                       <p className="title">
//                         <span style={{ fontWeight: 400 }}>
//                           Allergan-Trained Specialists
//                         </span>
//                       </p>
//                       <p className="content">
//                         BOTOX treatments from specialist aesthetic injectors for
//                         extraordinary results.
//                       </p>
//                     </div>
//                     <div className="col">
//                       <p className="title">Super-Competitive Pricing</p>
//                       <p className="content">
//                         Affordable BOTOX performed by our specialist aesthetic
//                         injectors.
//                       </p>
//                     </div>
//                     <div className="col">
//                       <p className="title">Top 1% in the USA&nbsp;</p>
//                       <p className="content">
//                         We are proud to be in the top 1% in the USA for BOTOX
//                         and Juvéderm.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_half_image viewport half-image container wow fadeInLeft"
//             data-s3-module=""
//           >
//             <div className="row half-image-row no-watermark">
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=630 2x"
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=1200 2x"
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=2100 2x"
//                   />
//                   <source
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=1832"
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src="https://www.datocms-assets.com/105497/1693319641-7.jpg?auto=format,compress&w=1832"
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={1832}
//                     height={1824}
//                     alt="Dr. Young examinig a patient."
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div className="copy">
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     <h2>
//                       Look as young as you feel, the best version of yourself
//                     </h2>
//                     <p className="bold">
//                       We understand many of our patients want to look younger
//                       without the surgery. The area in which age is most
//                       unforgiving is the face, with lines appearing in men and
//                       women from the late twenties onwards.
//                     </p>
//                     <p>
//                       These wrinkle-reducing treatments give the skin an even,
//                       unwrinkled, and youthful look, which can make you appear
//                       visibly younger. The ideal result smoothes creases but
//                       leaves a much-desired natural expression so your face
//                       still looks like you. If you have fine lines and/or
//                       wrinkles that don’t reflect the age you feel, we’re here
//                       to help. From deepened frown lines between the eyebrows
//                       (glabella) and crow's feet around the eyes to deep laugh
//                       lines and lip lines, we have the tools, knowledge, and
//                       professional experience to help you!
//                     </p>
//                     <div className="button-holder">
//                       <a
//                         href="/medical-spa/botox/"
//                         className="btn white outline"
//                       >
//                         Explore BOTOX
//                       </a>
//                       <a
//                         href="/medical-spa/dysport/"
//                         className="btn white outline"
//                       >
//                         Explore Dysport
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_reviews_slider container wow option-1 fadeInUp"
//             data-wow-duration="2s"
//             data-s3-module=""
//           >
//             <picture className="logo">
//               <img
//                 src="https://www.datocms-assets.com/105497/1693320285-logo-module-navy.svg"
//                 width={55}
//                 height={61}
//                 loading="lazy"
//                 alt="Logo media"
//                 draggable="false"
//               />
//             </picture>
//             <h2 data-api-key="title">Words from Our Clients</h2>
//             <div className="row">
//               <div className="reviews-slider" data-items={3}>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       If you're looking for a great experience, I highly
//                       recommend checking out the Longwood location. The office
//                       is clean and the staff is incredibly welcoming, making you
//                       feel comfortable right from the start. Chris and Kim are
//                       truly amazing! They are not only ski...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–M.M.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       First time visiting the office. Laura was very helpful and
//                       professional. She makes you feel welcomed and for me that
//                       makes an office run. Dr. McClure explained the process and
//                       gave clear recommendations; I really appreciate that. I
//                       would recommend their servic...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–V.C.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       This was my second visit to Goldfinger Aesthetics. I am so
//                       impressed with Chris and the staff there. I came in on a
//                       recommendation and I’m very happy I found him and very
//                       pleased with the results. The way Chris does it, he takes
//                       you right to the edge giving yo...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–N.M.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       Chris and Kim were absolutely amazing!! They walked me
//                       through the process and it was easy peasy! Everyone is
//                       very professional and kind! I highly recommend this
//                       office!
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–S.N.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       Kristi- NSB Location was knowledgeable and professional.
//                       She listened to my questions and gave me great advise and
//                       insight on what procedures would be best for me. Kristi
//                       and the staff were very welcoming. I highly recommend
//                       them! Thank You Kristi!
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–S.S.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       Dr. Nguyen was incredible! He is extremely knowledgeable,
//                       patient, and is a true master of his craft. My lips have
//                       never looked so naturally defined! Super thankful to have
//                       found him in Lake Mary. Definitely, recommend!
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–T.S.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       Beyond impressed. I had my eyebrows done and a touch up
//                       was needed. I expected to be in and out in an hour, but
//                       the artist who did the touch up was incredible and a
//                       perfectionist. He is an. Stricter n Orlando and visits the
//                       facility every month. I always have ...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–R.A.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       So when I got my 40 units of Botox $8.99 per unit. Great
//                       value customer service I’ll give it a 10 the receptionist
//                       very polite offered me water. The gentleman who did my
//                       Botox extremely friendly the place is spotless very
//                       relaxing in and out no time very atten...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–D.L.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       I had a great experience getting Botox for the first time
//                       thanks to Cinthya (She's so lovely!) at the front desk and
//                       Jay. They were both very welcoming, caring, and made me
//                       feel relaxed throughout the process. Jay took the time to
//                       explain the procedures and af...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–S.J.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       Cynthia the receptionist is very welcoming and helpful and
//                       Jay the provider is very nice he gives you his opinion but
//                       doesn’t push you I felt comfortable and I saw results
//                       almost immediately after the Botox injection and that told
//                       me that they use a very good...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–A.N.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       This was my first time going to a med spa and getting lip
//                       fillers and botox. My experience at the clinic from check
//                       in with the receptionist to the actual service/procedure
//                       was absolutely fabulous. NP Nilam was amazing, she is very
//                       knowledgeable and very perso...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–A.L.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       I had the pleasure of meeting Dr.Michael McClure for the
//                       first time! This is by far the best experience I’ve had
//                       when it comes to a friendly practice, knowledgeable
//                       recommendations and professionalism. Ms. Laura was very
//                       welcoming and accommodating when I chec...
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–D.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="title">
//                     <h3 />
//                   </div>
//                   <div className="description">
//                     <p>
//                       My first experience with this location was great! Everyone
//                       was so welcoming and friendly. My lip filler came out
//                       AMAZING! I will definitely be returning!
//                     </p>
//                   </div>
//                   <div className="bottom">
//                     <span className="author">–C.T.</span>
//                     <span className="review-stars">
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                       <i className="f-icon icon-star" role="none" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <a href="/about/testimonials/" className="btn">
//               View all Testimonials
//             </a>
//           </div>
//           <div
//             className="mod_double_banner container fadeInLeft"
//             data-wow-duration="2s"
//             data-s3-module=""
//           >
//             <div className="row margin-overlap">
//               <div className="banner banner-left">
//                 <div className="title">
//                   <h2>Our Practice</h2>
//                 </div>
//                 <div className="content">
//                   <p className="bold" role="heading" aria-level={1}>
//                     our practice
//                   </p>
//                   <p>
//                     Goldfingers Aesthetics &amp; Plastic Surgery is the ultimate
//                     destination for beauty in Florida. With 24 locations and
//                     growing, we are proud to be in the top 1% in the nation for
//                     BOTOX and Juvéderm and the exceptional talents of our
//                     Allergan-trained facial contouring specialists.&nbsp;&nbsp;
//                   </p>
//                   <p>
//                     <a className="arrow-right" href="/locations/">
//                       Learn More About Our Practice
//                     </a>
//                   </p>
//                 </div>
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=630 2x"
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=1200 2x"
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=2100 2x"
//                   />
//                   <source
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=1484"
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src="https://www.datocms-assets.com/105497/1693489932-goldfingers-our-office-img.jpg?auto=format,compress&w=1484"
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={1484}
//                     height={1482}
//                     alt="Exterior of the office"
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//               <div className="banner banner-right">
//                 <div className="title">
//                   <h2>Our Providers</h2>
//                 </div>
//                 <div className="content">
//                   <p className="bold" role="heading" aria-level={1}>
//                     Our Providers
//                   </p>
//                   <p>
//                     At Goldfingers Aesthetics &amp; Plastic Surgery, our team of
//                     providers brings exceptional talent and precision to every
//                     treatment, from injectables to meticulously performed
//                     plastic surgery. When under the care of our team of
//                     board-certified medical specialists and injection
//                     specialists, you can expect superior outcomes.
//                   </p>
//                   <p>
//                     <a className="arrow-right" href="/about/meet-the-team/">
//                       Learn More About Our Providers
//                     </a>
//                   </p>
//                 </div>
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=630 2x"
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=1200 2x"
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=2100 2x"
//                   />
//                   <source
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=1514"
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src="https://www.datocms-assets.com/105497/1693489954-goldfingers-our-providers-img.jpg?auto=format,compress&w=1514"
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={1514}
//                     height={1416}
//                     alt="Doctor in a lab coat smiling."
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_locations_banner container viewport"
//             data-s3-module=""
//           >
//             <div className="row wow fadeIn" data-wow-duration="2s">
//               <div className="inner">
//                 <div className="content" data-api-key="content">
//                   <h2>
//                     <span className="small">Our Locations </span>Find the
//                     Goldfingers Aesthetics Location Closest to You
//                   </h2>
//                   <p>
//                     With 24 locations across Florida, you can find a convenient
//                     Goldfingers Aesthetics center near you, where we can help
//                     you look your best.
//                   </p>
//                   <p>
//                     <a className="btn white" href="/locations/">
//                       View All Locations
//                     </a>
//                   </p>
//                 </div>
//                 <div className="locations">
//                   <span
//                     className="location"
//                     style={{ left: "53%", top: "45%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Clearwater pin on a map"
//                       href="/clearwater/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Clearwater</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             2745 Fl-580
//                             <span className="block">Suite 101, </span>
//                             Clearwater, FL 33761
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+17273789338"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(727) 378-9338</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "83%", top: "32%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Clermont pin on a map"
//                       href="/clermont/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Clermont</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             861 Oakley Seaver Dr.,
//                             <span className="block">Suite B, </span>Clermont, FL
//                             34711
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14074618193"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 461-8193</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "99%", top: "17%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Daytona Beach pin on a map"
//                       href="/daytona-beach/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Daytona Beach</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             244 Seabreeze Blvd,
//                             <span className="block">
//                               Daytona Beach, FL 32118
//                             </span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14077569062"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 756-9062</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "75%", top: "24%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Lady Lake / The Villages pin on a map"
//                       href="/the-villages/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Lady Lake / The Villages</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             8550 N. East 138th Lane,
//                             <span className="block">Bldg 600, </span>Lady Lake,
//                             FL 32159
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+13527070707"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(352) 707-0707</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "93%", top: "28%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Lake Mary pin on a map"
//                       href="/lake-mary/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Lake Mary</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             115 International Pkwy
//                             <span className="block">Lake Mary, FL 32746</span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14074053388"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 405-3388</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span className="location" style={{ left: "%", top: "%" }}>
//                     <a
//                       className="pin-link"
//                       aria-label="Lake Nona pin on a map"
//                       href="/lake-nona/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Lake Nona</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             6982 Lake Nona Blvd, Suite 110, Orlando FL 32827
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14075906274"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 590-6274</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "90%", top: "31%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Longwood pin on a map"
//                       href="/longwood/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Longwood</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             165 Wekiva Springs Road,
//                             <span className="block">Suite C-135, </span>
//                             Longwood, FL 32779
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14074923169"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 492-3169</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "84%", top: "27%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Mount Dora pin on a map"
//                       href="/mount-dora/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Mount Dora</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             18770 US-441,
//                             <span className="block">Mount Dora, FL 32757</span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+13527070707"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(352) 707-0707</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "105%", top: "29%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="New Smyrna Beach pin on a map"
//                       href="/new-smyrna-beach/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>New Smyrna Beach</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             State Rd. 44 Unit 1976,
//                             <span className="block">
//                               New Smyrna Beach, FL 32168
//                             </span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14075475891"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 547-5891</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "72%", top: "19%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Ocala pin on a map"
//                       href="/ocala/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Ocala</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             303 SE 17 Street,
//                             <span className="block">Unit 309, </span>Ocala FL
//                             34471
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+13527070707"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(352) 707-0707</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "89%", top: "34%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Orlando / Dr. Phillips pin on a map"
//                       href="/orlando/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Orlando / Dr. Phillips</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             7653 Turkey Lake Rd.,
//                             <span className="block">Orlando, FL 32819</span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14078214983"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 821-4983</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "103%", top: "22%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Port Orange pin on a map"
//                       href="/port-orange/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Port Orange</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             851 Dunlawton Ave
//                             <span className="block">Suite 103, </span>Port
//                             Orange, FL 32127
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+13868010024"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(386) 801-0024</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "62.3363%", top: "72.5422%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Sarasota pin on a map"
//                       href="/sarasota/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Sarasota</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             1407 First St <br />
//                             Sarasota, FL 34236
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+19415992392"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">941-599-2392</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "61%", top: "43%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Downtown Tampa pin on a map"
//                       href="/downtown-tampa/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Downtown Tampa</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             <span className="block">
//                               105 E Jackson St, Tampa, FL 33602
//                               <br />
//                             </span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+18134353474"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(813) 435-3474</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "52.6608%", top: "48.7713%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="St Petersburg pin on a map"
//                       href="/st-petersburg/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>St Petersburg</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             <a
//                               href="https://www.google.com/maps/place/Goldfingers+Aesthetics+St.+Petersburg/@27.7716841,-82.6570198,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2e3a22bd61d09:0x1b60bfdb32964d67!8m2!3d27.7716841!4d-82.6570198!16s%2Fg%2F11y677nkdd?entry=ttu"
//                               target="_blank"
//                               rel="noopener"
//                             >
//                               1701 Central Ave N Ste 1739,{" "}
//                             </a>
//                             <br />
//                             <a
//                               href="https://www.google.com/maps/place/Goldfingers+Aesthetics+St.+Petersburg/@27.7716841,-82.6570198,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2e3a22bd61d09:0x1b60bfdb32964d67!8m2!3d27.7716841!4d-82.6570198!16s%2Fg%2F11y677nkdd?entry=ttu"
//                               target="_blank"
//                               rel="noopener"
//                             >
//                               St. Petersburg, FL 33713
//                             </a>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+17273105120"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(727) 310-5120</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "61%", top: "43%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Tampa (Northdale) pin on a map"
//                       href="/tampa/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Tampa (Northdale)</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             3861 Northdale Blvd.,
//                             <span className="block">Tampa, FL 33624</span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+18134351585"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(813) 435-1585</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span className="location" style={{ left: "%", top: "%" }}>
//                     <a
//                       className="pin-link"
//                       aria-label="Downtown Orlando pin on a map"
//                       href="/downtown-orlando/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Downtown Orlando</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             101 Lake Avenue.
//                             <span className="block">Suite 1. </span>Orlando
//                             32801
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14075054901"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 505-4901</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span className="location" style={{ left: "%", top: "%" }}>
//                     <a
//                       className="pin-link"
//                       aria-label="Wesley Chapel pin on a map"
//                       href="/wesley-chapel/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Wesley Chapel</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             27440 Cashford Cir Ste 102
//                             <br />
//                             Wesley Chapel, FL 33544
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+18132303778"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(813) 230-3778</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span className="location" style={{ left: "%", top: "%" }}>
//                     <a
//                       className="pin-link"
//                       aria-label="Winter Garden pin on a map"
//                       href="/winter-garden/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Winter Garden</h3>
//                         <hr />
//                         <span className="address">
//                           <div>
//                             1101 S Park Ave #500<span>&nbsp;</span>
//                             <span className="il">Winter Garden</span>, FL 34787
//                           </div>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14074031232"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">407-403-1232</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                   <span
//                     className="location"
//                     style={{ left: "87%", top: "29%" }}
//                   >
//                     <a
//                       className="pin-link"
//                       aria-label="Winter Park pin on a map"
//                       href="/winter-park/"
//                     >
//                       <span className="pin" />
//                     </a>
//                     <span className="tip">
//                       <span className="info">
//                         <h3>Winter Park</h3>
//                         <hr />
//                         <span className="address">
//                           <p>
//                             400 W Fairbanks Ave,
//                             <span className="block">Winter Park, FL 32789</span>
//                           </p>
//                         </span>
//                         <a
//                           className="tel ppc-href"
//                           href="tel:+14074624405"
//                           aria-label="Call Goldfingers Aesthetics on the phone"
//                           role="link"
//                         >
//                           <span className="ppc-number">(407) 462-4405</span>
//                         </a>
//                       </span>
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="
//         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//       "
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="
//         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//       "
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800&q=100, https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200&q=100 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="
//         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//       "
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1400&q=100, https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2100&q=100 2x"
//               />
//               <source
//                 srcSet="
//         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//       "
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width={2200}
//                 height={1208}
//                 alt="map of florida"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//           <div
//             className="mod_cta_gallery container cta viewport wow fadeInLeft"
//             data-s3-module=""
//           >
//             <div className="row half-image-row">
//               <div className="text">
//                 <h2>
//                   <span className="small">the best version of you</span>Gallery
//                 </h2>
//                 <p className="italics" role="heading" aria-level={1}>
//                   “I had an amazing experience with Goldfinger’s—I was so
//                   pleased with my results and the professionalism of the staff.”
//                 </p>
//                 <a
//                   className="btn"
//                   href="/gallery/"
//                   title="View additional gallery images"
//                   aria-label="View additional gallery images"
//                 >
//                   View All Before &amp; Afters
//                 </a>
//               </div>
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=630 2x"
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=800&q=90&sharp=5, https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=1200&q=90&sharp=5 2x"
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=1400&q=90&sharp=5, https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=2100&q=90&sharp=5 2x"
//                   />
//                   <source
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=1724&q=90&sharp=5"
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src="https://www.datocms-assets.com/105497/1693257727-11.jpg?auto=format,compress&w=1724&q=90&sharp=5"
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={1724}
//                     height={1742}
//                     alt="Gallery media"
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_tabs_module container dark half-image flipped viewport"
//             data-s3-module=""
//           >
//             <div className="wrapper">
//               <div className="tabs">
//                 <div className="tab active tab1">
//                   <div className="row">
//                     <div className="inner">
//                       <h2>
//                         <span className="small">injectables</span>The Natural
//                         Look You’ve Always Wanted
//                       </h2>
//                       <div className="desc">
//                         <p>
//                           At Goldfingers Aesthetics, our specialist aesthetic
//                           injectors have the most refined techniques at their
//                           fingertips. We are honored to be in the Top 1% of the
//                           nation for BOTOX and Juvéderm—and for our loyal
//                           clients who trust us to create pure, smooth, natural,
//                           and youthful beauty, time after time.
//                         </p>
//                         <div className="links-list">
//                           <a href="/medical-spa/botox/" className="link">
//                             BOTOX
//                           </a>
//                           <a href="/medical-spa/dysport/" className="link">
//                             Dysport
//                           </a>
//                         </div>
//                       </div>
//                       <a href="/medical-spa/injectables/" className="btn white">
//                         Learn More About Injectables
//                       </a>
//                     </div>
//                   </div>
//                   <div className="media">
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         media="(max-width:1400px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=2100 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=1834"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693588694-12.jpg?auto=format,compress&w=1834"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={1834}
//                         height={1824}
//                         alt="Tab media"
//                         draggable="false"
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="tab tab2">
//                   <div className="row">
//                     <div className="inner">
//                       <h2>
//                         <span className="small">Dermal Fillers</span>Refined
//                         Techniques Create a Look you Love
//                       </h2>
//                       <div className="desc">
//                         <p>
//                           Our injection specialists are among the most highly
//                           trained in the aesthetics industry. We deliver results
//                           that look extraordinarily natural and reveal the
//                           beauty of your natural features. Experience the
//                           ultimate in refined aesthetic techniques when under
//                           the care of our injection specialists.
//                         </p>
//                         <div className="links-list">
//                           <a href="/medical-spa/juvederm/" className="link">
//                             Juvederm
//                           </a>
//                           <a
//                             href="/medical-spa/juvederm-volux/"
//                             className="link"
//                           >
//                             Juvederm Volux
//                           </a>
//                           <a href="/medical-spa/restylane/" className="link">
//                             Restylane
//                           </a>
//                           <a
//                             href="/medical-spa/restylane-contour/"
//                             className="link"
//                           >
//                             Restylane Contour
//                           </a>
//                         </div>
//                       </div>
//                       <a
//                         href="/medical-spa/dermal-fillers/"
//                         className="btn white"
//                       >
//                         Learn More About Dermal Fillers
//                       </a>
//                     </div>
//                   </div>
//                   <div className="media">
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         media="(max-width:1400px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=2100 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=1834"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693588702-13.jpg?auto=format,compress&w=1834"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={1834}
//                         height={1824}
//                         alt="Tab media"
//                         draggable="false"
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="tab tab3">
//                   <div className="row">
//                     <div className="inner">
//                       <h2>
//                         <span className="small">Applications</span>Exceptional
//                         Techniques for Facial Contouring
//                       </h2>
//                       <div className="desc">
//                         <p>
//                           Our facial contouring injection specialists employ the
//                           most refined techniques in every treatment, delivering
//                           beautiful, natural results with lip fillers, cheek
//                           enhancements, hand rejuvenation, chin fillers, and
//                           non-surgical facelift techniques for a refreshed,
//                           youthful look.
//                         </p>
//                         <div className="links-list">
//                           <a
//                             href="/medical-spa/cheek-fillers/"
//                             className="link"
//                           >
//                             Cheek Fillers
//                           </a>
//                           <a
//                             href="/medical-spa/lines-and-wrinkles/"
//                             className="link"
//                           >
//                             Lines &amp; Wrinkles
//                           </a>
//                           <a href="/medical-spa/lips/" className="link">
//                             Lip Fillers
//                           </a>
//                           <a href="/medical-spa/chin/" className="link">
//                             Chin Fillers
//                           </a>
//                           <a href="/medical-spa/hands/" className="link">
//                             Hand Rejuvenation
//                           </a>
//                           <a href="/medical-spa/face-lift/" className="link">
//                             Non-Surgical Facelift
//                           </a>
//                         </div>
//                       </div>
//                       <a
//                         href="/medical-spa/spa-services/"
//                         className="btn white"
//                       >
//                         Learn More About Applications
//                       </a>
//                     </div>
//                   </div>
//                   <div className="media">
//                     <picture className="background">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         media="(max-width:1400px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=2100 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=1834"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693588707-14.jpg?auto=format,compress&w=1834"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={1834}
//                         height={1824}
//                         alt="Tab media"
//                         draggable="false"
//                       />
//                     </picture>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab-links">
//               <a
//                 href="javascript:void(0);"
//                 role="button"
//                 aria-label="Navigate to Injectables tab"
//                 className="active"
//               >
//                 Injectables
//               </a>
//               <a
//                 href="javascript:void(0);"
//                 role="button"
//                 aria-label="Navigate to Dermal Fillers tab"
//               >
//                 Dermal Fillers
//               </a>
//               <a
//                 href="javascript:void(0);"
//                 role="button"
//                 aria-label="Navigate to Applications tab"
//               >
//                 Applications
//               </a>
//             </div>
//           </div>
//           <div
//             className="mod_half_image viewport half-image container wow fadeInLeft"
//             data-s3-module=""
//           >
//             <div className="row half-image-row flipped no-watermark mb-40 mt-40">
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=630 2x"
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=1200 2x"
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=2100 2x"
//                   />
//                   <source
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=1740"
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src="https://www.datocms-assets.com/105497/1693602081-15.jpg?auto=format,compress&w=1740"
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={1740}
//                     height={1742}
//                     alt="Dr. James Young & My Pham Young"
//                     draggable="false"
//                     data-api-key="image"
//                   />
//                 </picture>
//               </div>
//               <div className="copy">
//                 <div className="inner">
//                   <div className="content" data-api-key="content">
//                     <h2>
//                       <span className="small">Our Founders, </span>Dr. James
//                       Young &amp; My Pham Young
//                     </h2>
//                     <p>
//                       Dr. James Young is a leader in the aesthetics industry in
//                       Florida. For over two decades, he has built Goldfinger
//                       Aesthetics &amp; Plastic Surgery to a remarkable 24
//                       locations. My Pham Young brings a visionary philosophy of
//                       superior care with hand-selected providers that reflect
//                       the highest standard of care and results.
//                     </p>
//                     <p>
//                       <a className="btn" href="/about/meet-the-team/">
//                         Learn More About Founders
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_home_banner container option-2 dark has-links viewport"
//             data-s3-module=""
//           >
//             <div className="wrapper">
//               <div className="row wow" data-wow-duration="2s">
//                 <div className="content" data-api-key="content">
//                   <picture className="logo">
//                     <img
//                       src="https://www.datocms-assets.com/105497/1693257414-logo-module-light.svg"
//                       width={58}
//                       height={64}
//                       loading="lazy"
//                       alt="white goldfinger aesthetics logo"
//                       draggable="false"
//                       data-api-key="logo"
//                     />
//                   </picture>
//                   <h3>
//                     Dr. James Young, D.O. For the last 20 years, Dr. Young has
//                     led Goldfingers Aesthetics &amp; Plastic Surgery, which is
//                     now the largest Aesthetics center in Florida.
//                   </h3>
//                 </div>
//               </div>
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet="
//           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//         "
//                   data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=630 2x"
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet="
//           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//         "
//                   data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=800&q=90, https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=1200&q=90 2x"
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet="
//           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//         "
//                   data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=1400&q=90, https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=2100&q=90 2x"
//                 />
//                 <source
//                   srcSet="
//           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//         "
//                   data-lazyload-srcset="https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=2200&q=90"
//                 />
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                   data-lazyload-src="https://www.datocms-assets.com/105497/1693602339-16.jpg?auto=format,compress&w=2200&q=90"
//                   loading="lazy"
//                   data-lazyload="img"
//                   width={2200}
//                   height={1077}
//                   alt="Dr. Young sitting on a sports car"
//                   draggable="false"
//                 />
//               </picture>
//             </div>
//           </div>
//           <div
//             className="mod_double_banner container fadeInLeft"
//             data-wow-duration="2s"
//             data-s3-module=""
//           >
//             <div className="title-main">
//               <h2>
//                 <span className="small">plastic surgery procedures</span>Be
//                 Proud of Your Body
//               </h2>
//             </div>
//             <div className="row">
//               <div className="banner banner-left">
//                 <div className="title">
//                   <h2>Body Procedures</h2>
//                 </div>
//                 <div className="content">
//                   <p className="bold" role="heading" aria-level={1}>
//                     Body Procedures
//                   </p>
//                   <p>
//                     We can enhance your figure and create a sculpted, firm look
//                     you love to reveal. When under the care of our
//                     board-certified plastic surgeon, we can reshape, resculpt,
//                     and refine your abdomen, arms, tummy, thighs, and buttocks.
//                   </p>
//                   <p>
//                     <a className="arrow-right" href="/plastic-surgery/body/">
//                       View All Body Procedures
//                     </a>
//                   </p>
//                 </div>
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=630 2x"
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=1200 2x"
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=2100 2x"
//                   />
//                   <source
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=1484"
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src="https://www.datocms-assets.com/105497/1693603298-17.jpg?auto=format,compress&w=1484"
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={1484}
//                     height={1852}
//                     alt="fit woman in black exercise clothes"
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//               <div className="banner banner-right">
//                 <div className="title">
//                   <h2>Breast Procedures</h2>
//                 </div>
//                 <div className="content">
//                   <p className="bold" role="heading" aria-level={1}>
//                     Breast Procedures
//                   </p>
//                   <p>
//                     At Goldfingers Aesthetics &amp; Plastic Surgery, we perform
//                     custom breast augmentations, reductions, breast lifts, and
//                     breast reconstruction. Imagine having lovely breasts,
//                     rounded, plump, and youthful, bringing out the beauty of
//                     your figure in the best possible way.
//                   </p>
//                   <p>
//                     <a className="arrow-right" href="/plastic-surgery/breast/">
//                       View All Breast Procedures
//                     </a>
//                   </p>
//                 </div>
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=630 2x"
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=1200 2x"
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=2100 2x"
//                   />
//                   <source
//                     srcSet="
//             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//           "
//                     data-lazyload-srcset="https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=1484"
//                   />
//                   <img
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                     data-lazyload-src="https://www.datocms-assets.com/105497/1693603356-18.jpg?auto=format,compress&w=1484"
//                     loading="lazy"
//                     data-lazyload="img"
//                     width={1484}
//                     height={1852}
//                     alt="African-American woman in sports bra"
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mod_home_grid viewport container option-3"
//             data-s3-module=""
//           >
//             <div className="row">
//               <div className="grid">
//                 <div className="item">
//                   <div className="media">
//                     <picture className="">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693924425-19.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693924425-19.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693924425-19.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693924425-19.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693924425-19.jpg?auto=format,compress&w=964"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693924425-19.jpg?auto=format,compress&w=964"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={964}
//                         height={866}
//                         alt="Doctor showing patient breast implant"
//                         draggable="false"
//                       />
//                     </picture>
//                     <h2 className="title" />
//                   </div>
//                   <div className="content">
//                     <h2 className="title">Blog</h2>
//                     <p>
//                       At Goldfingers Aesthetics, our blogs are created to keep
//                       our clients and patients informed of the latest advances
//                       in aesthetics.
//                     </p>
//                     <p>
//                       <a className="arrow-right" href="/blog/">
//                         Explore Our Blog
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="media">
//                     <picture className="">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1720631813-image0-4.jpeg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1720631813-image0-4.jpeg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1720631813-image0-4.jpeg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1720631813-image0-4.jpeg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1720631813-image0-4.jpeg?auto=format,compress&w=967"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1720631813-image0-4.jpeg?auto=format,compress&w=967"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={967}
//                         height={866}
//                         alt=""
//                         draggable="false"
//                       />
//                     </picture>
//                     <h2 className="title" />
//                   </div>
//                   <div className="content">
//                     <h2 className="title">Financing</h2>
//                     <p>
//                       When it is time for an aesthetic or plastic surgery
//                       treatment, we make the process easy for our clients and
//                       patients with several financing options.
//                     </p>
//                     <p>
//                       <a
//                         className="arrow-right"
//                         href="/resources/patient-financing/"
//                       >
//                         Explore Financing Options
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="media">
//                     <picture className="">
//                       <source
//                         media="(max-width:420px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693924545-21.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693924545-21.jpg?auto=format,compress&w=630 2x"
//                       />
//                       <source
//                         media="(max-width:800px)"
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693924545-21.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693924545-21.jpg?auto=format,compress&w=1200 2x"
//                       />
//                       <source
//                         srcSet="
//                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
//               "
//                         data-lazyload-srcset="https://www.datocms-assets.com/105497/1693924545-21.jpg?auto=format,compress&w=967"
//                       />
//                       <img
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                         data-lazyload-src="https://www.datocms-assets.com/105497/1693924545-21.jpg?auto=format,compress&w=967"
//                         loading="lazy"
//                         data-lazyload="img"
//                         width={967}
//                         height={866}
//                         alt="Doctor Young indicating patient's forehead in mirror"
//                         draggable="false"
//                       />
//                     </picture>
//                     <h2 className="title" />
//                   </div>
//                   <div className="content">
//                     <h2 className="title">Specials</h2>
//                     <p>
//                       Watch for our regular specials and take advantage of the
//                       treatments we deliver at 24 locations across Florida.
//                     </p>
//                     <p>
//                       <a className="arrow-right" href="/specials-and-rewards/">
//                         View All Specials
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
// }


// // "use client";
// // // app/page.tsx
// // import { fetchHomePage } from '@/lib/api/home';
// // import { useEffect, useState } from "react";

// // // Helper function to get image URL
// // // Helper function to get image URL
// // // lib/api/home.ts (single source of truth)
// // function getImageUrl(media: any): string {
// //   if (!media) return "";

// //   // Prefer Cloudinary first
// //   if (media.cloudinary_url) return media.cloudinary_url;

// //   // Fallback: check nested structure
// //   if (media.media?.cloudinary_url) return media.media.cloudinary_url;

// //   // Payload's default URL
// //   if (media.url) {
// //     const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";
// //     return `${PAYLOAD_URL}${media.url}`;
// //   }

// //   if (media.media?.url) {
// //     const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";
// //     return `${PAYLOAD_URL}${media.media.url}`;
// //   }

// //   // If it's just a string
// //   if (typeof media === "string") return media;

// //   // Fallback: construct from ID
// //   if (media.id) {
// //     const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";
// //     return `${PAYLOAD_URL}/api/media/file/${media.id}`;
// //   }

// //   return "";
// // }


// // export default function Home() {
// //   const [data, setData] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const getData = async () => {
// //       try {
// //         const homeData = await fetchHomePage();
// //         console.log(homeData, "this is home data");

// //         // Manually populate slide images if they're just IDs
// //         const heroBannerSection = homeData?.sections?.find(
// //           (s) => s.sectionType === "hero_banner"
// //         );
// //         if (heroBannerSection?.heroBanner?.slides) {
// //           const slidesWithImages = await Promise.all(
// //             heroBannerSection.heroBanner.slides.map(async (slide: any) => {
// //               if (typeof slide.image === "string") {
// //                 // It's just an ID, fetch from the public globals endpoint with depth
// //                 try {
// //                   // Fetch the entire home data again but with higher depth to get this specific image
// //                   const res = await fetch(
// //                     `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/home?depth=10`
// //                   );
// //                   if (res.ok) {
// //                     const deepData = await res.json();
// //                     const deepHeroBanner = deepData?.sections?.find(
// //                       (s) => s.sectionType === "hero_banner"
// //                     )?.heroBanner;
// //                     const matchingSlide = deepHeroBanner?.slides?.find(
// //                       (s: any) => s.id === slide.id
// //                     );
// //                     if (
// //                       matchingSlide?.image &&
// //                       typeof matchingSlide.image === "object"
// //                     ) {
// //                       return { ...slide, image: matchingSlide.image };
// //                     }
// //                   }
// //                 } catch (err) {
// //                   console.error("Failed to fetch image:", err);
// //                 }
// //               }
// //               return slide;
// //             })
// //           );

// //           heroBannerSection.heroBanner.slides = slidesWithImages;
// //         }

// //         setData(homeData);
// //       } catch (error) {
// //         console.error("Error loading home page:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     getData();
// //   }, []);

// //   // Helper function to get image URL - FIXED VERSION
// //   const getImageUrl = (media: any): string => {
// //     if (!media) return "";

// //     // If media is an object with cloudinary_url
// //     if (typeof media === "object" && media?.cloudinary_url) {
// //       return media.cloudinary_url;
// //     }

// //     // If media is an object with url property
// //     if (typeof media === "object" && media?.url) {
// //       return `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${media.url}`;
// //     }

// //     // If media is a string URL
// //     if (typeof media === "string" && media.startsWith("http")) {
// //       return media;
// //     }

// //     // Fallback: construct URL from ID
// //     return `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/media/file/${media}`;
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (!data) {
// //     return <div>No data available</div>;
// //   }
  
// //   // Find specific sections by type
// //   const heroBanner = data?.sections?.find(s => s.sectionType === 'hero_banner')?.heroBanner;
// //   const anchorLinks = data?.sections?.find(s => s.sectionType === 'anchor_links')?.anchorLinks;
// //   const introSection = data?.sections?.find(s => s.sectionType === 'intro_section')?.introSection;
// //   const twoColumn = data?.sections?.find(s => s.sectionType === 'two_column')?.twoColumn;
// //   const threeColumnStats = data?.sections?.find(s => s.sectionType === 'three_column_stats')?.threeColumnStats;
// //   const homeGrid = data?.sections?.find(s => s.sectionType === 'home_grid')?.homeGrid;
// //   const homeBanner = data?.sections?.find(s => s.sectionType === 'home_banner')?.homeBanner;
// //   const halfImage = data?.sections?.find(s => s.sectionType === 'half_image')?.halfImage;
// //   const reviewsSlider = data?.sections?.find(s => s.sectionType === 'reviews_slider')?.reviewsSlider;
// //   const doubleBanner = data?.sections?.find(s => s.sectionType === 'double_banner')?.doubleBanner;
// //   const locationsBanner = data?.sections?.find(s => s.sectionType === 'locations_banner')?.locationsBanner;
// //   const ctaGallery = data?.sections?.find(s => s.sectionType === 'cta_gallery')?.ctaGallery;
// //   const tabsModule = data?.sections?.find(s => s.sectionType === 'tabs_module')?.tabsModule;

// //   console.log(data, 'this is home data')

// //   return (
// //     <div className="home sticky-header">
// //       <ul
// //         className="partial_a11y_menu tresio-accessibility-menu"
// //         aria-label="Accessibility Menu"
// //         data-s3-partial=""
// //       >
// //         {data?.accessibilityMenu?.enabled && data.accessibilityMenu.items?.map((item, idx) => (
// //           <li key={idx}>
// //             <a
// //               href={item.href}
// //               aria-label={item.ariaLabel}
// //               className="tresio-ada-toggle"
// //               role="button"
// //             >
// //               {item.text}
// //             </a>
// //           </li>
// //         ))}
// //         <li>
// //           <a href="#main" aria-label="Skip to main content" role="button">
// //             Skip to main content
// //           </a>
// //         </li>
// //       </ul>
      
// //       <main id="main">
// //         {/* HERO BANNER */}
// //         <div
// //           className="mod_home_hero banner slider dark center-placement"
// //           data-s3-module=""
// //         >
// //           <div className="row">
// //             <div className="inner">
// //               {heroBanner?.logo && (
// //                 <picture className="logo">
// //                   <img
// //                     src={getImageUrl(heroBanner.logo)}
// //                     width={heroBanner.logoWidth || 58}
// //                     height={heroBanner.logoHeight || 64}
// //                     alt={heroBanner.logoAlt || "Goldfingers aesthetic logo"}
// //                     draggable="false"
// //                     data-api-key="logo"
// //                   />
// //                 </picture>
// //               )}
// //               <h1>{heroBanner?.mainHeading || "The Largest Aesthetics in Florida"}</h1>
// //               <div className="content">
// //                 <p role="heading" aria-level={1}>
// //                   {heroBanner?.subHeadingLine1 || "Board Certified Plastic Surgery &"}
// //                   <span role="heading" aria-level={1}>
// //                     {heroBanner?.subHeadingLine2 || "Specialist Aesthetic Injectors"}
// //                   </span>
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="media">
// //             {heroBanner?.backgroundVideo?.enabled && (
// //               <video
// //                 className="background"
// //                 muted
// //                 autoPlay
// //                 loop
// //                 title={heroBanner.backgroundVideo.videoTitle || "goldfingers aesthetics logo on a thumbnail"}
// //                 data-desktop-vid={heroBanner.backgroundVideo.desktopUrl}
// //                 data-tablet-vid={heroBanner.backgroundVideo.tabletUrl}
// //                 data-mobile-vid={heroBanner.backgroundVideo.mobileUrl}
// //               >
// //                 <source
// //                   media="(max-width:640px)"
// //                   src={heroBanner.backgroundVideo.mobileUrl}
// //                 />
// //                 <source
// //                   media="(max-width:920px)"
// //                   src={heroBanner.backgroundVideo.tabletUrl}
// //                 />
// //                 <source
// //                   media="(min-width:921px)"
// //                   src={heroBanner.backgroundVideo.desktopUrl}
// //                 />
// //               </video>
// //             )}
// //             <div className="home-hero-slider">
// //               {heroBanner?.slides?.map((slide, idx) => (
// //                 <div key={idx} className="slide">
// //                   <picture className="background">
// //                     <img
// //                       src={getImageUrl(slide.image)}
// //                       width={2200}
// //                       height={1238}
// //                       alt={slide.imageAlt || "gorgeous woman smiling"}
// //                       draggable="false"
// //                     />
// //                   </picture>
// //                 </div>
// //               ))}
// //             </div>
// //             <div className="slider-nav">
// //               <button
// //                 type="button"
// //                 className="prev"
// //                 data-controls="prev"
// //                 role="none"
// //                 aria-label="Previous slide of slider"
// //               >
// //                 Previous
// //               </button>
// //               <button
// //                 type="button"
// //                 className="next"
// //                 data-controls="next"
// //                 role="none"
// //                 aria-label="Next slide of slider"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ANCHOR LINKS */}
// //         <div className="container mod_anchor_link" data-s3-module="">
// //           <div className="row">
// //             <div className="links">
// //               {anchorLinks?.links?.map((link, idx) => (
// //                 <a
// //                   key={idx}
// //                   href={link.url}
// //                   role="link"
// //                   aria-label={link.ariaLabel}
// //                 >
// //                   {link.text}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* INTRO SECTION */}
// //         <div
// //           className="mod_intro container viewport option-2 wide wow fadeInUp"
// //           data-s3-module=""
// //         >
// //           <div className="row mb-10 text-center">
// //             <div className="inner" data-api-key="content">
// //               <center>
// //                 {introSection?.heading && <h2>{introSection.heading}</h2>}
// //                 {introSection?.subheadings?.map((sub, idx) => (
// //                   <h4 key={idx}>
// //                     <span>{sub.text}</span>
// //                   </h4>
// //                 ))}
// //               </center>
// //             </div>
// //           </div>
// //         </div>

// //         {/* TWO COLUMN */}
// //         <div
// //           className="mod_column viewport container has-media"
// //           data-s3-module=""
// //         >
// //           <div className={`row pt-20 ${twoColumn?.mediaPosition || 'media-left'}`} data-api-key="content">
// //             <div className="item">
// //               <h2>
// //                 {twoColumn?.smallHeading && (
// //                   <span className="small" role="heading" aria-level={1}>
// //                     {twoColumn.smallHeading}
// //                   </span>
// //                 )}
// //                 {twoColumn?.mainHeadingLine1 && (
// //                   <span className="first-block">
// //                     {twoColumn.mainHeadingLine1}
// //                   </span>
// //                 )}
// //                 {twoColumn?.mainHeadingLine2 && (
// //                   <span className="second-block">
// //                     {twoColumn.mainHeadingLine2}
// //                   </span>
// //                 )}
// //               </h2>
// //               {twoColumn?.content && <p>{twoColumn.content}</p>}
// //             </div>
// //             {twoColumn?.media && (
// //               <picture className="media">
// //                 <img
// //                   src={getImageUrl(twoColumn.media)}
// //                   loading="lazy"
// //                   width={twoColumn.mediaWidth || 708}
// //                   height={twoColumn.mediaHeight || 715}
// //                   alt={twoColumn.mediaAlt || "top 50 status 2023 logo"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //             )}
// //           </div>
// //         </div>

// //         {/* THREE COLUMN STATS */}
// //         <div
// //           className="mod_columns_three viewport container"
// //           data-s3-module=""
// //         >
// //           <div className="row">
// //             <div className="content">
// //               {threeColumnStats?.columns?.map((col, idx) => (
// //                 <div key={idx} className="wow fadeInLeft" data-api-key={`content_${idx === 0 ? 'left' : idx === 1 ? 'center' : 'right'}`}>
// //                   <h2>{col.number}</h2>
// //                   <h3>
// //                     <span className="small">
// //                       {col.titleSmall}
// //                       {col.titleLine1 && <span className="block-desktop">{col.titleLine1}</span>}
// //                       {col.titleLine2 && <span className="block-desktop">{col.titleLine2}</span>}
// //                     </span>
// //                   </h3>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* HOME GRID */}
// //         <div
// //           className={`mod_home_grid viewport container ${homeGrid?.gridOption || 'option-1'}`}
// //           data-s3-module=""
// //         >
// //           <div className="row">
// //             <div className="grid">
// //               {homeGrid?.items?.map((item, idx) => (
// //                 <div key={idx} className="item">
// //                   <div className="media">
// //                     {item.image && (
// //                       <picture className="">
// //                         <img
// //                           src={getImageUrl(item.image)}
// //                           loading="lazy"
// //                           width={1340}
// //                           height={880}
// //                           alt={item.imageAlt || "close up of woman looking at camera"}
// //                           draggable="false"
// //                         />
// //                       </picture>
// //                     )}
// //                     {item.title && <h2 className="title">{item.title}</h2>}
// //                   </div>
// //                   <div className="content">
// //                     {item.content && <p>{item.content}</p>}
// //                     {item.linkUrl && (
// //                       <p>
// //                         <a href={item.linkUrl} className="arrow-right">
// //                           {item.linkText || "Learn More"}
// //                         </a>
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* HOME BANNER */}
// //         <div
// //           className={`mod_home_banner container gray-background mb-0 ${homeBanner?.option || 'option-1'} has-links viewport`}
// //           data-s3-module=""
// //         >
// //           <div className="wrapper">
// //             <div className="row wow" data-wow-duration="2s">
// //               <div className="content" data-api-key="content">
// //                 <h2>
// //                   {homeBanner?.smallHeading && <span className="small">{homeBanner.smallHeading}</span>}
// //                   {homeBanner?.mainHeadingLine1 && <span className="first-block">{homeBanner.mainHeadingLine1}</span>}
// //                   {homeBanner?.mainHeadingLine2 && <span className="second-block">{homeBanner.mainHeadingLine2}</span>}
// //                 </h2>
// //                 {homeBanner?.option === 'option-1' && homeBanner?.columns && (
// //                   <div className="columns-four">
// //                     {homeBanner.columns.map((col, idx) => (
// //                       <div key={idx} className="col">
// //                         <p className="title">{col.title}</p>
// //                         <p className="content">{col.content}</p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //                 {homeBanner?.option === 'option-2' && homeBanner?.quoteText && (
// //                   <blockquote>{homeBanner.quoteText}</blockquote>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* HALF IMAGE */}
// //         <div
// //           className="mod_half_image viewport half-image container wow fadeInLeft"
// //           data-s3-module=""
// //         >
// //           <div className={`row half-image-row no-watermark ${halfImage?.flipped ? 'flipped' : ''}`}>
// //             <div className="media">
// //               {halfImage?.image && (
// //                 <picture className="background">
// //                   <img
// //                     src={getImageUrl(halfImage.image)}
// //                     loading="lazy"
// //                     width={1832}
// //                     height={1824}
// //                     alt={halfImage.imageAlt || "Dr. Young examining a patient."}
// //                     draggable="false"
// //                     data-api-key="image"
// //                   />
// //                 </picture>
// //               )}
// //             </div>
// //             <div className="copy">
// //               <div className="inner">
// //                 <div className="content" data-api-key="content">
// //                   {halfImage?.heading && <h2>{halfImage.heading}</h2>}
// //                   {halfImage?.contentBold && <p className="bold">{halfImage.contentBold}</p>}
// //                   {halfImage?.content && <p>{halfImage.content}</p>}
// //                   {halfImage?.buttons && halfImage.buttons.length > 0 && (
// //                     <div className="button-holder">
// //                       {halfImage.buttons.map((btn, idx) => (
// //                         <a key={idx} href={btn.url} className={btn.classes || "btn white outline"}>
// //                           {btn.text}
// //                         </a>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* REVIEWS SLIDER */}
// //         <div
// //           className="mod_reviews_slider container wow option-1 fadeInUp"
// //           data-wow-duration="2s"
// //           data-s3-module=""
// //         >
// //           {reviewsSlider?.logo && (
// //             <picture className="logo">
// //               <img
// //                 src={getImageUrl(reviewsSlider.logo)}
// //                 width={reviewsSlider.logoWidth || 55}
// //                 height={reviewsSlider.logoHeight || 61}
// //                 loading="lazy"
// //                 alt={reviewsSlider.logoAlt || "Logo media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           )}
// //           {reviewsSlider?.title && <h2 data-api-key="title">{reviewsSlider.title}</h2>}
// //           <div className="row">
// //             <div className="reviews-slider" data-items={reviewsSlider?.itemsToShow || 3}>
// //               {reviewsSlider?.reviews?.map((review, idx) => (
// //                 <div key={idx} className="item">
// //                   <div className="title">
// //                     <h3 />
// //                   </div>
// //                   <div className="description">
// //                     <p>{review.description}</p>
// //                   </div>
// //                   <div className="bottom">
// //                     <span className="author">{review.author}</span>
// //                     <span className="review-stars">
// //                       {[...Array(review.rating || 5)].map((_, i) => (
// //                         <i key={i} className="f-icon icon-star" role="none" />
// //                       ))}
// //                     </span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           {reviewsSlider?.ctaUrl && (
// //             <a href={reviewsSlider.ctaUrl} className="btn">
// //               {reviewsSlider.ctaText || "View all Testimonials"}
// //             </a>
// //           )}
// //         </div>

// //         {/* Continue with remaining sections... */}
// //         {/* For brevity, I'm showing the pattern. You would continue similarly for: */}
// //         {/* - doubleBanner */}
// //         {/* - locationsBanner */}
// //         {/* - ctaGallery */}
// //         {/* - tabsModule */}
// //         {/* And any other static sections */}

// //       </main>
// //     </div>
// //   );
// // }


// // app/page.tsx
// import { fetchHomePage, getImageUrl, HomePageData, Section } from '@/lib/api/home';
// import { Metadata } from 'next';

// // Generate metadata from Payload data
// export async function generateMetadata(): Promise<Metadata> {
//   const data = await fetchHomePage();
  
//   if (!data?.seo) {
//     return {
//       title: 'Goldfingers Aesthetics',
//       description: 'The Largest Aesthetics in Florida',
//     };
//   }

//   return {
//     title: data.seo.metaTitle || 'Goldfingers Aesthetics',
//     description: data.seo.metaDescription || '',
//     openGraph: data.seo.ogImage ? {
//       images: [getImageUrl(data.seo.ogImage)],
//     } : undefined,
//   };
// }

// export default async function Home() {
//   const data = await fetchHomePage();

//   console.log(data, 'this is home data')

//   if (!data) {
//     return <div>Error loading page data</div>;
//   }

//   return (
//     <div className="home sticky-header">
//       {/* Accessibility Menu */}
//       {data.accessibilityMenu?.enabled && (
//         <ul
//           className="partial_a11y_menu tresio-accessibility-menu"
//           aria-label="Accessibility Menu"
//           data-s3-partial=""
//         >
//           {data.accessibilityMenu.items?.map((item, idx) => (
//             <li key={idx}>
//               <a
//                 href={item.href}
//                 aria-label={item.ariaLabel || item.text}
//                 className={idx === 0 ? "tresio-ada-toggle" : ""}
//                 role="button"
//               >
//                 {item.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
      
//       <main id="main">
//         {/* Render all sections dynamically */}
//         {data.sections?.map((section) => {
//           if (!section.visibility) return null;
          
//           return (
//             <SectionRenderer 
//               key={section.id} 
//               section={section}
//             />
//           );
//         })}
//       </main>
//     </div>
//   );
// }

// // Section Renderer Component
// function SectionRenderer({ section }: { section: Section }) {
//   const { sectionType, customClasses, backgroundColor, textColor } = section;

//   const sectionStyle: React.CSSProperties = {
//     ...(backgroundColor && { backgroundColor }),
//     ...(textColor && { color: textColor }),
//   };

//   switch (sectionType) {
//     case 'hero_banner':
//       return <HeroBannerSection section={section} style={sectionStyle} />;
//     case 'anchor_links':
//       return <AnchorLinksSection section={section} style={sectionStyle} />;
//     case 'intro_section':
//       return <IntroSection section={section} style={sectionStyle} />;
//     case 'two_column':
//       return <TwoColumnSection section={section} style={sectionStyle} />;
//     case 'three_column_stats':
//       return <ThreeColumnStatsSection section={section} style={sectionStyle} />;
//     case 'home_grid':
//       return <HomeGridSection section={section} style={sectionStyle} />;
//     case 'home_banner':
//       return <HomeBannerSection section={section} style={sectionStyle} />;
//     case 'half_image':
//       return <HalfImageSection section={section} style={sectionStyle} />;
//     case 'reviews_slider':
//       return <ReviewsSliderSection section={section} style={sectionStyle} />;
//     case 'double_banner':
//       return <DoubleBannerSection section={section} style={sectionStyle} />;
//     case 'locations_banner':
//       return <LocationsBannerSection section={section} style={sectionStyle} />;
//     case 'cta_gallery':
//       return <CTAGallerySection section={section} style={sectionStyle} />;
//     case 'tabs_module':
//       return <TabsModuleSection section={section} style={sectionStyle} />;
//     default:
//       return null;
//   }
// }

// // Hero Banner Section
// function HeroBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.heroBanner;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_home_hero banner slider dark center-placement ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="row">
//         <div className="inner">
//           {data.logo && (
//             <picture className="logo">
//               <img
//                 src={getImageUrl(data.logo)}
//                 width={data.logoWidth || 58}
//                 height={data.logoHeight || 64}
//                 alt={data.logoAlt || "Logo"}
//                 draggable="false"
//                 data-api-key="logo"
//               />
//             </picture>
//           )}
//           {data.mainHeading && <h1>{data.mainHeading}</h1>}
//           {(data.subHeadingLine1 || data.subHeadingLine2) && (
//             <div className="content">
//               <p role="heading" aria-level={1}>
//                 {data.subHeadingLine1}
//                 {data.subHeadingLine2 && (
//                   <span role="heading" aria-level={1}>
//                     {data.subHeadingLine2}
//                   </span>
//                 )}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="media">
//         {data.backgroundVideo?.enabled && (
//           <video
//             className="background"
//             muted
//             autoPlay
//             loop
//             title={data.backgroundVideo.videoTitle || "Background video"}
//             data-desktop-vid={data.backgroundVideo.desktopUrl}
//             data-tablet-vid={data.backgroundVideo.tabletUrl}
//             data-mobile-vid={data.backgroundVideo.mobileUrl}
//           >
//             {data.backgroundVideo.mobileUrl && (
//               <source
//                 media="(max-width:640px)"
//                 src={data.backgroundVideo.mobileUrl}
//               />
//             )}
//             {data.backgroundVideo.tabletUrl && (
//               <source
//                 media="(max-width:920px)"
//                 src={data.backgroundVideo.tabletUrl}
//               />
//             )}
//             {data.backgroundVideo.desktopUrl && (
//               <source
//                 media="(min-width:921px)"
//                 src={data.backgroundVideo.desktopUrl}
//               />
//             )}
//           </video>
//         )}
//         {data.slides && data.slides.length > 0 && (
//           <div className="home-hero-slider">
//             {data.slides.map((slide: any, idx: number) => (
//               <div className="slide" key={idx}>
//                 <picture className="background">
//                   <img
//                     src={getImageUrl(slide.image)}
//                     width={2200}
//                     height={1238}
//                     alt={slide.imageAlt || "Slide image"}
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="slider-nav">
//           <button
//             type="button"
//             className="prev"
//             data-controls="prev"
//             role="none"
//             aria-label="Previous slide of slider"
//           >
//             Previous
//           </button>
//           <button
//             type="button"
//             className="next"
//             data-controls="next"
//             role="none"
//             aria-label="Next slide of slider"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Anchor Links Section
// function AnchorLinksSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.anchorLinks;
//   if (!data?.links) return null;

//   return (
//     <div className={`container mod_anchor_link ${section.customClasses || ''}`} style={style} data-s3-module="">
//       <div className="row">
//         <div className="links">
//           {data.links.map((link: any, idx: number) => (
//             <a
//               key={idx}
//               href={link.url}
//               role="link"
//               aria-label={link.ariaLabel || link.text}
//             >
//               {link.text}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Intro Section
// function IntroSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.introSection;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_intro container viewport option-2 wide wow fadeInUp ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="row mb-10 text-center">
//         <div className="inner" data-api-key="content">
//           <center>
//             {data.heading && <h2>{data.heading}</h2>}
//             {data.subheadings?.map((subheading: any, idx: number) => (
//               <h4 key={idx}>
//                 <span>{subheading.text}</span>
//               </h4>
//             ))}
//           </center>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Two Column Section
// function TwoColumnSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.twoColumn;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_column viewport container has-media ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className={`row pt-20 ${data.mediaPosition || 'media-left'}`} data-api-key="content">
//         <div className="item">
//           <h2>
//             {data.smallHeading && (
//               <span className="small" role="heading" aria-level={1}>
//                 {data.smallHeading}{' '}
//               </span>
//             )}
//             {data.mainHeadingLine1 && (
//               <span className="first-block">
//                 {data.mainHeadingLine1}{' '}
//               </span>
//             )}
//             {data.mainHeadingLine2 && (
//               <span className="second-block">
//                 {data.mainHeadingLine2}
//               </span>
//             )}
//           </h2>
//           {data.content && <p>{data.content}</p>}
//         </div>
//         {data.media && (
//           <picture className="media">
//             <img
//               src={getImageUrl(data.media)}
//               loading="lazy"
//               width={data.mediaWidth || 708}
//               height={data.mediaHeight || 715}
//               alt={data.mediaAlt || "Media"}
//               draggable="false"
//             />
//           </picture>
//         )}
//       </div>
//     </div>
//   );
// }

// // Three Column Stats Section
// function ThreeColumnStatsSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.threeColumnStats;
//   if (!data?.columns) return null;

//   return (
//     <div
//       className={`mod_columns_three viewport container ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="row">
//         <div className="content">
//           {data.columns.map((col: any, idx: number) => (
//             <div 
//               key={idx} 
//               className={idx === 0 ? 'wow fadeInLeft' : idx === 2 ? 'wow fadeInRight' : 'wow fadeInLeft'}
//             >
//               <h2>{col.number}</h2>
//               <h3>
//                 {col.titleSmall && (
//                   <span className="small">
//                     {col.titleSmall}
//                     {col.titleLine1 && (
//                       <span className="block-desktop">
//                         {col.titleLine1}
//                       </span>
//                     )}
//                   </span>
//                 )}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Home Grid Section
// function HomeGridSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.homeGrid;
//   if (!data?.items) return null;

//   return (
//     <div
//       className={`mod_home_grid viewport container ${data.gridOption || 'option-1'} ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="row">
//         <div className="grid">
//           {data.items.map((item: any, idx: number) => (
//             <div className="item" key={idx}>
//               <div className="media">
//                 {item.image && (
//                   <picture>
//                     <img
//                       src={getImageUrl(item.image)}
//                       loading="lazy"
//                       width={1340}
//                       height={880}
//                       alt={item.imageAlt || item.title}
//                       draggable="false"
//                     />
//                   </picture>
//                 )}
//                 {data.gridOption === 'option-1' && item.title && (
//                   <h2 className="title">{item.title}</h2>
//                 )}
//               </div>
//               <div className="content">
//                 {data.gridOption === 'option-3' && item.title && (
//                   <h2 className="title">{item.title}</h2>
//                 )}
//                 {item.content && <p>{item.content}</p>}
//                 {item.linkText && item.linkUrl && (
//                   <p>
//                     <a href={item.linkUrl} className="arrow-right">
//                       {item.linkText}
//                     </a>
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Home Banner Section
// function HomeBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.homeBanner;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_home_banner container gray-background mb-0 ${data.option || 'option-1'} has-links viewport ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="wrapper">
//         <div className="row wow" data-wow-duration="2s">
//           <div className="content" data-api-key="content">
//             {data.logo && (
//               <picture className="logo">
//                 <img
//                   src={getImageUrl(data.logo)}
//                   width={data.logoWidth || 58}
//                   height={data.logoHeight || 64}
//                   loading="lazy"
//                   alt={data.logoAlt || "Logo"}
//                   draggable="false"
//                   data-api-key="logo"
//                 />
//               </picture>
//             )}
//             <h2>
//               {data.smallHeading && (
//                 <span className="small">{data.smallHeading} </span>
//               )}
//               {data.mainHeadingLine1 && (
//                 <span className="first-block">
//                   {data.mainHeadingLine1}{' '}
//                 </span>
//               )}
//               {data.mainHeadingLine2 && (
//                 <span className="second-block">
//                   {data.mainHeadingLine2}
//                 </span>
//               )}
//             </h2>
//             {data.option === 'option-1' && data.columns && (
//               <div className="columns-four">
//                 {data.columns.map((col: any, idx: number) => (
//                   <div className="col" key={idx}>
//                     {col.title && <p className="title">{col.title}</p>}
//                     {col.content && <p className="content">{col.content}</p>}
//                   </div>
//                 ))}
//               </div>
//             )}
//             {data.option === 'option-2' && data.quoteText && (
//               <h3>{data.quoteText}</h3>
//             )}
//           </div>
//         </div>
//         {data.backgroundImage && (
//           <picture className="background">
//             <img
//               src={getImageUrl(data.backgroundImage)}
//               loading="lazy"
//               width={2200}
//               height={1077}
//               alt="Background"
//               draggable="false"
//             />
//           </picture>
//         )}
//       </div>
//     </div>
//   );
// }

// // Half Image Section
// function HalfImageSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.halfImage;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_half_image viewport half-image container wow fadeInLeft ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className={`row half-image-row no-watermark ${data.flipped ? 'flipped' : ''}`}>
//         <div className="media">
//           {data.image && (
//             <picture className="background">
//               <img
//                 src={getImageUrl(data.image)}
//                 loading="lazy"
//                 width={1832}
//                 height={1824}
//                 alt={data.imageAlt || "Image"}
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           )}
//         </div>
//         <div className="copy">
//           <div className="inner">
//             <div className="content" data-api-key="content">
//               {data.heading && <h2>{data.heading}</h2>}
//               {data.contentBold && <p className="bold">{data.contentBold}</p>}
//               {data.content && <p>{data.content}</p>}
//               {data.buttons && data.buttons.length > 0 && (
//                 <div className="button-holder">
//                   {data.buttons.map((btn: any, idx: number) => (
//                     <a
//                       key={idx}
//                       href={btn.url}
//                       className={btn.classes || 'btn white outline'}
//                     >
//                       {btn.text}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reviews Slider Section
// function ReviewsSliderSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.reviewsSlider;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_reviews_slider container wow option-1 fadeInUp ${section.customClasses || ''}`}
//       style={style}
//       data-wow-duration="2s"
//       data-s3-module=""
//     >
//       {data.logo && (
//         <picture className="logo">
//           <img
//             src={getImageUrl(data.logo)}
//             width={data.logoWidth || 55}
//             height={data.logoHeight || 61}
//             loading="lazy"
//             alt={data.logoAlt || "Logo"}
//             draggable="false"
//           />
//         </picture>
//       )}
//       {data.title && <h2 data-api-key="title">{data.title}</h2>}
//       <div className="row">
//         <div className="reviews-slider" data-items={data.itemsToShow || 3}>
//           {data.reviews?.map((review: any, idx: number) => (
//             <div className="item" key={idx}>
//               <div className="title">
//                 <h3 />
//               </div>
//               <div className="description">
//                 <p>{review.description}</p>
//               </div>
//               <div className="bottom">
//                 <span className="author">–{review.author}</span>
//                 <span className="review-stars">
//                   {[...Array(review.rating || 5)].map((_, i) => (
//                     <i key={i} className="f-icon icon-star" role="none" />
//                   ))}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {data.ctaText && data.ctaUrl && (
//         <a href={data.ctaUrl} className="btn">
//           {data.ctaText}
//         </a>
//       )}
//     </div>
//   );
// }

// // Double Banner Section
// function DoubleBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.doubleBanner;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_double_banner container fadeInLeft ${section.customClasses || ''}`}
//       style={style}
//       data-wow-duration="2s"
//       data-s3-module=""
//     >
//       {(data.mainTitleSmall || data.mainTitle) && (
//         <div className="title-main">
//           <h2>
//             {data.mainTitleSmall && (
//               <span className="small">{data.mainTitleSmall}</span>
//             )}
//             {data.mainTitle}
//           </h2>
//         </div>
//       )}
//       <div className="row margin-overlap">
//         {data.leftBanner && (
//           <div className="banner banner-left">
//             {data.leftBanner.title && (
//               <div className="title">
//                 <h2>{data.leftBanner.title}</h2>
//               </div>
//             )}
//             <div className="content">
//               {data.leftBanner.contentBold && (
//                 <p className="bold" role="heading" aria-level={1}>
//                   {data.leftBanner.contentBold}
//                 </p>
//               )}
//               {data.leftBanner.content && <p>{data.leftBanner.content}</p>}
//               {data.leftBanner.linkText && data.leftBanner.linkUrl && (
//                 <p>
//                   <a className="arrow-right" href={data.leftBanner.linkUrl}>
//                     {data.leftBanner.linkText}
//                   </a>
//                 </p>
//               )}
//             </div>
//             {data.leftBanner.image && (
//               <picture className="background">
//                 <img
//                   src={getImageUrl(data.leftBanner.image)}
//                   loading="lazy"
//                   width={1484}
//                   height={1482}
//                   alt={data.leftBanner.imageAlt || "Banner image"}
//                   draggable="false"
//                 />
//               </picture>
//             )}
//           </div>
//         )}
//         {data.rightBanner && (
//           <div className="banner banner-right">
//             {data.rightBanner.title && (
//               <div className="title">
//                 <h2>{data.rightBanner.title}</h2>
//               </div>
//             )}
//             <div className="content">
//               {data.rightBanner.contentBold && (
//                 <p className="bold" role="heading" aria-level={1}>
//                   {data.rightBanner.contentBold}
//                 </p>
//               )}
//               {data.rightBanner.content && <p>{data.rightBanner.content}</p>}
//               {data.rightBanner.linkText && data.rightBanner.linkUrl && (
//                 <p>
//                   <a className="arrow-right" href={data.rightBanner.linkUrl}>
//                     {data.rightBanner.linkText}
//                   </a>
//                 </p>
//               )}
//             </div>
//             {data.rightBanner.image && (
//               <picture className="background">
//                 <img
//                   src={getImageUrl(data.rightBanner.image)}
//                   loading="lazy"
//                   width={1514}
//                   height={1416}
//                   alt={data.rightBanner.imageAlt || "Banner image"}
//                   draggable="false"
//                 />
//               </picture>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Locations Banner Section
// function LocationsBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.locationsBanner;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_locations_banner container viewport ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="row wow fadeIn" data-wow-duration="2s">
//         <div className="inner">
//           <div className="content" data-api-key="content">
//             <h2>
//               {data.smallHeading && (
//                 <span className="small">{data.smallHeading} </span>
//               )}
//               {data.mainHeading}
//             </h2>
//             {data.description && <p>{data.description}</p>}
//             {data.ctaText && data.ctaUrl && (
//               <p>
//                 <a className="btn white" href={data.ctaUrl}>
//                   {data.ctaText}
//                 </a>
//               </p>
//             )}
//           </div>
//           <div className="locations">
//             {data.locations?.map((loc: any, idx: number) => (
//               <span
//                 key={idx}
//                 className="location"
//                 style={{ 
//                   left: loc.leftPosition ? `${loc.leftPosition}%` : undefined, 
//                   top: loc.topPosition ? `${loc.topPosition}%` : undefined 
//                 }}
//               >
//                 <a
//                   className="pin-link"
//                   aria-label={loc.ariaLabel || `${loc.name} pin on a map`}
//                   href={loc.url || '#'}
//                 >
//                   <span className="pin" />
//                 </a>
//                 <span className="tip">
//                   <span className="info">
//                     <h3>{loc.name}</h3>
//                     <hr />
//                     <span className="address">
//                       <p>
//                         {loc.addressLine1}
//                         {loc.addressLine2 && (
//                           <span className="block">{loc.addressLine2}</span>
//                         )}
//                       </p>
//                     </span>
//                     {loc.phone && loc.phoneLink && (
//                       <a
//                         className="tel ppc-href"
//                         href={loc.phoneLink}
//                         aria-label="Call Goldfingers Aesthetics on the phone"
//                         role="link"
//                       >
//                         <span className="ppc-number">{loc.phone}</span>
//                       </a>
//                     )}
//                   </span>
//                 </span>
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       {data.mapImage && (
//         <picture className="background">
//           <img
//             src={getImageUrl(data.mapImage)}
//             loading="lazy"
//             width={2200}
//             height={1208}
//             alt="map of florida"
//             draggable="false"
//           />
//         </picture>
//       )}
//     </div>
//   );
// }

// // CTA Gallery Section
// function CTAGallerySection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.ctaGallery;
//   if (!data) return null;

//   return (
//     <div
//       className={`mod_cta_gallery container cta viewport wow fadeInLeft ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="row half-image-row">
//         <div className="text">
//           <h2>
//             {data.smallHeading && (
//               <span className="small">{data.smallHeading}</span>
//             )}
//             {data.mainHeading}
//           </h2>
//           {data.testimonial && (
//             <p className="italics" role="heading" aria-level={1}>
//               {data.testimonial}
//             </p>
//           )}
//           {data.buttonText && data.buttonUrl && (
//             <a
//               className="btn"
//               href={data.buttonUrl}
//               title={data.buttonTitle || data.buttonText}
//               aria-label={data.buttonAriaLabel || data.buttonText}
//             >
//               {data.buttonText}
//             </a>
//           )}
//         </div>
//         <div className="media">
//           {data.image && (
//             <picture className="background">
//               <img
//                 src={getImageUrl(data.image)}
//                 loading="lazy"
//                 width={1724}
//                 height={1742}
//                 alt={data.imageAlt || "Gallery media"}
//                 draggable="false"
//               />
//             </picture>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Tabs Module Section
// function TabsModuleSection({ section, style }: { section: Section; style: React.CSSProperties }) {
//   const data = section.tabsModule;
//   if (!data?.tabs || data.tabs.length === 0) return null;

//   return (
//     <div
//       className={`mod_tabs_module container dark half-image flipped viewport ${section.customClasses || ''}`}
//       style={style}
//       data-s3-module=""
//     >
//       <div className="wrapper">
//         <div className="tabs">
//           {data.tabs.map((tab: any, idx: number) => (
//             <div key={idx} className={`tab ${idx === 0 ? 'active' : ''} tab${idx + 1}`}>
//               <div className="row">
//                 <div className="inner">
//                   <h2>
//                     {tab.smallHeading && (
//                       <span className="small">{tab.smallHeading}</span>
//                     )}
//                     {tab.mainHeading}
//                   </h2>
//                   <div className="desc">
//                     {tab.description && <p>{tab.description}</p>}
//                     {tab.links && tab.links.length > 0 && (
//                       <div className="links-list">
//                         {tab.links.map((link: any, linkIdx: number) => (
//                           <a key={linkIdx} href={link.url} className="link">
//                             {link.text}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   {tab.buttonText && tab.buttonUrl && (
//                     <a href={tab.buttonUrl} className={tab.buttonClasses || 'btn white'}>
//                       {tab.buttonText}
//                     </a>
//                   )}
//                 </div>
//               </div>
//               <div className="media">
//                 {tab.media && (
//                   <picture className="background">
//                     <img
//                       src={getImageUrl(tab.media)}
//                       loading="lazy"
//                       width={1834}
//                       height={1824}
//                       alt={tab.mediaAlt || "Tab media"}
//                       draggable="false"
//                     />
//                   </picture>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="tab-links">
//         {data.tabs.map((tab: any, idx: number) => (
//           <a
//             key={idx}
//             href="javascript:void(0);"
//             role="button"
//             aria-label={`Navigate to ${tab.tabLabel} tab`}
//             className={idx === 0 ? 'active' : ''}
//           >
//             {tab.tabLabel}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }



// app/page.tsx
import { fetchHomePage, getImageUrl, HomePageData, Section } from '@/lib/api/home';
import { Star } from 'lucide-react';
import { Metadata } from 'next';

// Generate metadata from Payload data
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchHomePage();
  
  if (!data?.seo) {
    return {
      title: 'Goldfingers Aesthetics',
      description: 'The Largest Aesthetics in Florida',
    };
  }

  return {
    title: data.seo.metaTitle || 'Goldfingers Aesthetics',
    description: data.seo.metaDescription || '',
    openGraph: data.seo.ogImage ? {
      images: [getImageUrl(data.seo.ogImage)],
    } : undefined,
  };
}

export default async function Home() {
  const data = await fetchHomePage();

  console.log(data, 'this is home data')

  if (!data) {
    return <div>Error loading page data</div>;
  }

  return (
    <div className="home sticky-header">
      {/* Accessibility Menu */}
      {data.accessibilityMenu?.enabled && (
        <ul
          className="partial_a11y_menu tresio-accessibility-menu"
          aria-label="Accessibility Menu"
          data-s3-partial=""
        >
          {data.accessibilityMenu.items?.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                aria-label={item.ariaLabel || item.text}
                className={idx === 0 ? "tresio-ada-toggle" : ""}
                role="button"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
      
      <main id="main">
        {/* Render all sections dynamically */}
        {data.sections?.map((section) => {
          if (!section.visibility) return null;
          
          return (
            <SectionRenderer 
              key={section.id} 
              section={section}
            />
          );
        })}
      </main>
    </div>
  );
}

// Section Renderer Component
function SectionRenderer({ section }: { section: Section }) {
  const { sectionType, customClasses, backgroundColor, textColor } = section;

  const sectionStyle: React.CSSProperties = {
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
  };

  switch (sectionType) {
    case 'hero_banner':
      return <HeroBannerSection section={section} style={sectionStyle} />;
    case 'anchor_links':
      return <AnchorLinksSection section={section} style={sectionStyle} />;
    case 'intro_section':
      return <IntroSection section={section} style={sectionStyle} />;
    case 'two_column':
      return <TwoColumnSection section={section} style={sectionStyle} />;
    case 'three_column_stats':
      return <ThreeColumnStatsSection section={section} style={sectionStyle} />;
    case 'home_grid':
      return <HomeGridSection section={section} style={sectionStyle} />;
    case 'home_banner':
      return <HomeBannerSection section={section} style={sectionStyle} />;
    case 'half_image':
      return <HalfImageSection section={section} style={sectionStyle} />;
    case 'reviews_slider':
      return <ReviewsSliderSection section={section} style={sectionStyle} />;
    case 'double_banner':
      return <DoubleBannerSection section={section} style={sectionStyle} />;
    case 'locations_banner':
      return <LocationsBannerSection section={section} style={sectionStyle} />;
    case 'cta_gallery':
      return <CTAGallerySection section={section} style={sectionStyle} />;
    case 'tabs_module':
      return <TabsModuleSection section={section} style={sectionStyle} />;
    case 'founders_section':
      return <FoundersSectionComponent section={section} style={sectionStyle} />;
    case 'quote_banner':
      return <QuoteBannerSection section={section} style={sectionStyle} />;
    case 'procedures_banner':
      return <ProceduresBannerSection section={section} style={sectionStyle} />;
    default:
      return null;
  }
}

// Hero Banner Section
function HeroBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.heroBanner;
  if (!data) return null;

  return (
    <div
      className={`mod_home_hero banner slider dark center-placement ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="row">
        <div className="inner">
          {data.logo && (
            <picture className="logo">
              <img
                src={getImageUrl(data.logo)}
                width={data.logoWidth || 58}
                height={data.logoHeight || 64}
                alt={data.logoAlt || "Logo"}
                draggable="false"
                data-api-key="logo"
              />
            </picture>
          )}
          {data.mainHeading && <h1>{data.mainHeading}</h1>}
          {(data.subHeadingLine1 || data.subHeadingLine2) && (
            <div className="content">
              <p role="heading" aria-level={1}>
                {data.subHeadingLine1}
                {data.subHeadingLine2 && (
                  <span role="heading" aria-level={1}>
                    {data.subHeadingLine2}
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="media">
        {data.backgroundVideo?.enabled && (
          <video
            className="background"
            muted
            autoPlay
            loop
            title={data.backgroundVideo.videoTitle || "Background video"}
            data-desktop-vid={data.backgroundVideo.desktopUrl}
            data-tablet-vid={data.backgroundVideo.tabletUrl}
            data-mobile-vid={data.backgroundVideo.mobileUrl}
          >
            {data.backgroundVideo.mobileUrl && (
              <source
                media="(max-width:640px)"
                src={data.backgroundVideo.mobileUrl}
              />
            )}
            {data.backgroundVideo.tabletUrl && (
              <source
                media="(max-width:920px)"
                src={data.backgroundVideo.tabletUrl}
              />
            )}
            {data.backgroundVideo.desktopUrl && (
              <source
                media="(min-width:921px)"
                src={data.backgroundVideo.desktopUrl}
              />
            )}
          </video>
        )}
        {data.slides && data.slides.length > 0 && (
          <div className="home-hero-slider">
            {data.slides.map((slide: any, idx: number) => (
              <div className="slide" key={idx}>
                <picture className="background">
                  <img
                    src={getImageUrl(slide.image)}
                    width={2200}
                    height={1238}
                    alt={slide.imageAlt || "Slide image"}
                    draggable="false"
                  />
                </picture>
              </div>
            ))}
          </div>
        )}
        <div className="slider-nav">
          <button
            type="button"
            className="prev"
            data-controls="prev"
            role="none"
            aria-label="Previous slide of slider"
          >
            Previous
          </button>
          <button
            type="button"
            className="next"
            data-controls="next"
            role="none"
            aria-label="Next slide of slider"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// Anchor Links Section
function AnchorLinksSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.anchorLinks;
  if (!data?.links) return null;

  return (
    <div className={`container mod_anchor_link ${section.customClasses || ''}`} style={style} data-s3-module="">
      <div className="row">
        <div className="links">
          {data.links.map((link: any, idx: number) => (
            <a
              key={idx}
              href={link.url}
              role="link"
              aria-label={link.ariaLabel || link.text}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Intro Section
function IntroSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.introSection;
  if (!data) return null;

  return (
    <div
      className={`mod_intro container viewport option-2 wide wow fadeInUp ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="row mb-10 text-center">
        <div className="inner" data-api-key="content">
          <center>
            {data.heading && <h2>{data.heading}</h2>}
            {data.subheadings?.map((subheading: any, idx: number) => (
              <h4 key={idx}>
                <span>{subheading.text}</span>
              </h4>
            ))}
          </center>
        </div>
      </div>
    </div>
  );
}

// Two Column Section
function TwoColumnSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.twoColumn;
  if (!data) return null;

  return (
    <div
      className={`mod_column viewport container has-media ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className={`row pt-20 ${data.mediaPosition || 'media-left'}`} data-api-key="content">
        <div className="item">
          <h2>
            {data.smallHeading && (
              <span className="small" role="heading" aria-level={1}>
                {data.smallHeading}{' '}
              </span>
            )}
            {data.mainHeadingLine1 && (
              <span className="first-block">
                {data.mainHeadingLine1}{' '}
              </span>
            )}
            {data.mainHeadingLine2 && (
              <span className="second-block">
                {data.mainHeadingLine2}
              </span>
            )}
          </h2>
          {data.content && <p>{data.content}</p>}
        </div>
        {data.media && (
          <picture className="media">
            <img
              src={getImageUrl(data.media)}
              loading="lazy"
              width={data.mediaWidth || 708}
              height={data.mediaHeight || 715}
              alt={data.mediaAlt || "Media"}
              draggable="false"
            />
          </picture>
        )}
      </div>
    </div>
  );
}

// Three Column Stats Section
function ThreeColumnStatsSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.threeColumnStats;
  if (!data?.columns) return null;

  return (
    <div
      className={`mod_columns_three viewport container ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="row">
        <div className="content">
          {data.columns.map((col: any, idx: number) => (
            <div 
              key={idx} 
              className={idx === 0 ? 'wow fadeInLeft' : idx === 2 ? 'wow fadeInRight' : 'wow fadeInLeft'}
            >
              <h2>{col.number}</h2>
              <h3>
                {col.titleSmall && (
                  <span className="small">
                    {col.titleSmall}
                    {col.titleLine1 && (
                      <span className="block-desktop">
                        {col.titleLine1}
                      </span>
                    )}
                  </span>
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Home Grid Section
function HomeGridSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.homeGrid;
  if (!data?.items) return null;

  return (
    <div
      className={`mod_home_grid viewport container ${data.gridOption || 'option-1'} ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="row">
        <div className="grid">
          {data.items.map((item: any, idx: number) => (
            <div className="item" key={idx}>
              <div className="media">
                {item.image && (
                  <picture>
                    <img
                      src={getImageUrl(item.image)}
                      loading="lazy"
                      width={1340}
                      height={880}
                      alt={item.imageAlt || item.title}
                      draggable="false"
                    />
                  </picture>
                )}
                {data.gridOption === 'option-1' && item.title && (
                  <h2 className="title">{item.title}</h2>
                )}
              </div>
              <div className="content">
                {data.gridOption === 'option-3' && item.title && (
                  <h2 className="title">{item.title}</h2>
                )}
                {item.content && <p>{item.content}</p>}
                {item.linkText && item.linkUrl && (
                  <p>
                    <a href={item.linkUrl} className="arrow-right">
                      {item.linkText}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Home Banner Section
function HomeBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.homeBanner;
  if (!data) return null;

  return (
    <div
      className={`mod_home_banner container gray-background mb-0 ${data.option || 'option-1'} has-links viewport ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="wrapper">
        <div className="row wow" data-wow-duration="2s">
          <div className="content" data-api-key="content">
            {data.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(data.logo)}
                  width={data.logoWidth || 58}
                  height={data.logoHeight || 64}
                  loading="lazy"
                  alt={data.logoAlt || "Logo"}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <h2>
              {data.smallHeading && (
                <span className="small">{data.smallHeading} </span>
              )}
              {data.mainHeadingLine1 && (
                <span className="first-block">
                  {data.mainHeadingLine1}{' '}
                </span>
              )}
              {data.mainHeadingLine2 && (
                <span className="second-block">
                  {data.mainHeadingLine2}
                </span>
              )}
            </h2>
            {data.option === 'option-1' && data.columns && (
              <div className="columns-four">
                {data.columns.map((col: any, idx: number) => (
                  <div className="col" key={idx}>
                    {col.title && <p className="title">{col.title}</p>}
                    {col.content && <p className="content">{col.content}</p>}
                  </div>
                ))}
              </div>
            )}
            {data.option === 'option-2' && data.quoteText && (
              <h3>{data.quoteText}</h3>
            )}
          </div>
        </div>
        {data.backgroundImage && (
          <picture className="background">
            <img
              src={getImageUrl(data.backgroundImage)}
              loading="lazy"
              width={2200}
              height={1077}
              alt="Background"
              draggable="false"
            />
          </picture>
        )}
      </div>
    </div>
  );
}

// Half Image Section
function HalfImageSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.halfImage;
  if (!data) return null;

  return (
    <div
      className={`mod_half_image viewport half-image container wow fadeInLeft ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className={`row half-image-row no-watermark ${data.flipped ? 'flipped' : ''}`}>
        <div className="media">
          {data.image && (
            <picture className="background">
              <img
                src={getImageUrl(data.image)}
                loading="lazy"
                width={1832}
                height={1824}
                alt={data.imageAlt || "Image"}
                draggable="false"
                data-api-key="image"
              />
            </picture>
          )}
        </div>
        <div className="copy">
          <div className="inner">
            <div className="content" data-api-key="content">
              {data.heading && <h2>{data.heading}</h2>}
              {data.contentBold && <p className="bold">{data.contentBold}</p>}
              {data.content && <p>{data.content}</p>}
              {data.buttons && data.buttons.length > 0 && (
                <div className="button-holder">
                  {data.buttons.map((btn: any, idx: number) => (
                    <a
                      key={idx}
                      href={btn.url}
                      className={btn.classes || 'btn white outline'}
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reviews Slider Section
function ReviewsSliderSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.reviewsSlider;
  if (!data) return null;

  return (
    <div
      className={`mod_reviews_slider container wow option-1 fadeInUp ${section.customClasses || ''}`}
      style={style}
      data-wow-duration="2s"
      data-s3-module=""
    >
      {data.logo && (
        <picture className="logo">
          <img
            src={getImageUrl(data.logo)}
            width={data.logoWidth || 55}
            height={data.logoHeight || 61}
            loading="lazy"
            alt={data.logoAlt || "Logo"}
            draggable="false"
          />
        </picture>
      )}
      {data.title && <h2 data-api-key="title">{data.title}</h2>}
      <div className="row">
        <div className="reviews-slider" data-items={data.itemsToShow || 3}>
          {data.reviews?.map((review: any, idx: number) => (
            <div className="item" key={idx}>
              <div className="title">
                <h3 />
              </div>
              <div className="description">
                <p>{review.description}</p>
              </div>
              <div className="bottom">
                <span className="author">–{review.author}</span>
                <span className="review-stars">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    // <i key={i} className="f-icon icon-star" role="none" />
                    <Star key={i} className="f-icon icon-star" />
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data.ctaText && data.ctaUrl && (
        <a href={data.ctaUrl} className="btn">
          {data.ctaText}
        </a>
      )}
    </div>
  );
}

// Double Banner Section
function DoubleBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.doubleBanner;
  if (!data) return null;

  return (
    <div
      className={`mod_double_banner container fadeInLeft ${section.customClasses || ''}`}
      style={style}
      data-wow-duration="2s"
      data-s3-module=""
    >
      {(data.mainTitleSmall || data.mainTitle) && (
        <div className="title-main">
          <h2>
            {data.mainTitleSmall && (
              <span className="small">{data.mainTitleSmall}</span>
            )}
            {data.mainTitle}
          </h2>
        </div>
      )}
      <div className="row margin-overlap">
        {data.leftBanner && (
          <div className="banner banner-left">
            {data.leftBanner.title && (
              <div className="title">
                <h2>{data.leftBanner.title}</h2>
              </div>
            )}
            <div className="content">
              {data.leftBanner.contentBold && (
                <p className="bold" role="heading" aria-level={1}>
                  {data.leftBanner.contentBold}
                </p>
              )}
              {data.leftBanner.content && <p>{data.leftBanner.content}</p>}
              {data.leftBanner.linkText && data.leftBanner.linkUrl && (
                <p>
                  <a className="arrow-right" href={data.leftBanner.linkUrl}>
                    {data.leftBanner.linkText}
                  </a>
                </p>
              )}
            </div>
            {data.leftBanner.image && (
              <picture className="background">
                <img
                  src={getImageUrl(data.leftBanner.image)}
                  loading="lazy"
                  width={1484}
                  height={1482}
                  alt={data.leftBanner.imageAlt || "Banner image"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        )}
        {data.rightBanner && (
          <div className="banner banner-right">
            {data.rightBanner.title && (
              <div className="title">
                <h2>{data.rightBanner.title}</h2>
              </div>
            )}
            <div className="content">
              {data.rightBanner.contentBold && (
                <p className="bold" role="heading" aria-level={1}>
                  {data.rightBanner.contentBold}
                </p>
              )}
              {data.rightBanner.content && <p>{data.rightBanner.content}</p>}
              {data.rightBanner.linkText && data.rightBanner.linkUrl && (
                <p>
                  <a className="arrow-right" href={data.rightBanner.linkUrl}>
                    {data.rightBanner.linkText}
                  </a>
                </p>
              )}
            </div>
            {data.rightBanner.image && (
              <picture className="background">
                <img
                  src={getImageUrl(data.rightBanner.image)}
                  loading="lazy"
                  width={1514}
                  height={1416}
                  alt={data.rightBanner.imageAlt || "Banner image"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Locations Banner Section
function LocationsBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.locationsBanner;
  if (!data) return null;

  return (
    <div
      className={`mod_locations_banner container viewport ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="row wow fadeIn" data-wow-duration="2s">
        <div className="inner">
          <div className="content" data-api-key="content">
            <h2>
              {data.smallHeading && (
                <span className="small">{data.smallHeading} </span>
              )}
              {data.mainHeading}
            </h2>
            {data.description && <p>{data.description}</p>}
            {data.ctaText && data.ctaUrl && (
              <p>
                <a className="btn white" href={data.ctaUrl}>
                  {data.ctaText}
                </a>
              </p>
            )}
          </div>
          <div className="locations">
            {data.locations?.map((loc: any, idx: number) => (
              <span
                key={idx}
                className="location"
                style={{ 
                  left: loc.leftPosition ? `${loc.leftPosition}%` : undefined, 
                  top: loc.topPosition ? `${loc.topPosition}%` : undefined 
                }}
              >
                <a
                  className="pin-link"
                  aria-label={loc.ariaLabel || `${loc.name} pin on a map`}
                  href={loc.url || '#'}
                >
                  <span className="pin" />
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>{loc.name}</h3>
                    <hr />
                    <span className="address">
                      <p>
                        {loc.addressLine1}
                        {loc.addressLine2 && (
                          <span className="block">{loc.addressLine2}</span>
                        )}
                      </p>
                    </span>
                    {loc.phone && loc.phoneLink && (
                      <a
                        className="tel ppc-href"
                        href={loc.phoneLink}
                        aria-label="Call Goldfingers Aesthetics on the phone"
                        role="link"
                      >
                        <span className="ppc-number">{loc.phone}</span>
                      </a>
                    )}
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      {data.mapImage && (
        <picture className="background">
          <img
            src={getImageUrl(data.mapImage)}
            loading="lazy"
            width={2200}
            height={1208}
            alt="map of florida"
            draggable="false"
          />
        </picture>
      )}
    </div>
  );
}

// CTA Gallery Section
function CTAGallerySection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.ctaGallery;
  if (!data) return null;

  return (
    <div
      className={`mod_cta_gallery container cta viewport wow fadeInLeft ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="row half-image-row">
        <div className="text">
          <h2>
            {data.smallHeading && (
              <span className="small">{data.smallHeading}</span>
            )}
            {data.mainHeading}
          </h2>
          {data.testimonial && (
            <p className="italics" role="heading" aria-level={1}>
              {data.testimonial}
            </p>
          )}
          {data.buttonText && data.buttonUrl && (
            <a
              className="btn"
              href={data.buttonUrl}
              title={data.buttonTitle || data.buttonText}
              aria-label={data.buttonAriaLabel || data.buttonText}
            >
              {data.buttonText}
            </a>
          )}
        </div>
        <div className="media">
          {data.image && (
            <picture className="background">
              <img
                src={getImageUrl(data.image)}
                loading="lazy"
                width={1724}
                height={1742}
                alt={data.imageAlt || "Gallery media"}
                draggable="false"
              />
            </picture>
          )}
        </div>
      </div>
    </div>
  );
}

// Tabs Module Section
function TabsModuleSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.tabsModule;
  if (!data?.tabs || data.tabs.length === 0) return null;

  return (
    <div
      className={`mod_tabs_module container dark half-image flipped viewport ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="wrapper">
        <div className="tabs">
          {data.tabs.map((tab: any, idx: number) => (
            <div key={idx} className={`tab ${idx === 0 ? 'active' : ''} tab${idx + 1}`}>
              <div className="row">
                <div className="inner">
                  <h2>
                    {tab.smallHeading && (
                      <span className="small">{tab.smallHeading}</span>
                    )}
                    {tab.mainHeading}
                  </h2>
                  <div className="desc">
                    {tab.description && <p>{tab.description}</p>}
                    {tab.links && tab.links.length > 0 && (
                      <div className="links-list">
                        {tab.links.map((link: any, linkIdx: number) => (
                          <a key={linkIdx} href={link.url} className="link">
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  {tab.buttonText && tab.buttonUrl && (
                    <a href={tab.buttonUrl} className={tab.buttonClasses || 'btn white'}>
                      {tab.buttonText}
                    </a>
                  )}
                </div>
              </div>
              <div className="media">
                {tab.media && (
                  <picture className="background">
                    <img
                      src={getImageUrl(tab.media)}
                      loading="lazy"
                      width={1834}
                      height={1824}
                      alt={tab.mediaAlt || "Tab media"}
                      draggable="false"
                    />
                  </picture>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tab-links">
        {data.tabs.map((tab: any, idx: number) => (
          <a
            key={idx}
            href="javascript:void(0);"
            role="button"
            aria-label={`Navigate to ${tab.tabLabel} tab`}
            className={idx === 0 ? 'active' : ''}
          >
            {tab.tabLabel}
          </a>
        ))}
      </div>
    </div>
  );
}

// NEW: Founders Section Component
function FoundersSectionComponent({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.foundersSection;
  if (!data) return null;

  return (
    <div
      className={`mod_half_image viewport half-image container wow fadeInLeft ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className={`row half-image-row ${data.flipped ? 'flipped' : ''} ${data.hasWatermark ? '' : 'no-watermark'} mb-40 mt-40`}>
        <div className="media">
          {data.image && (
            <picture className="background">
              <img
                src={getImageUrl(data.image)}
                loading="lazy"
                width={data.imageWidth || 1740}
                height={data.imageHeight || 1742}
                alt={data.imageAlt || "Dr. James Young & My Pham Young"}
                draggable="false"
                data-api-key="image"
              />
            </picture>
          )}
        </div>
        <div className="copy">
          <div className="inner">
            <div className="content" data-api-key="content">
              <h2>
                {data.smallHeading && (
                  <span className="small">{data.smallHeading} </span>
                )}
                {data.mainHeading}
              </h2>
              {data.content && <p>{data.content}</p>}
              {data.buttonText && data.buttonUrl && (
                <p>
                  <a className="btn" href={data.buttonUrl}>
                    {data.buttonText}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// NEW: Quote Banner Section
function QuoteBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.quoteBanner;
  if (!data) return null;

  return (
    <div
      className={`mod_home_banner container ${data.isDark ? 'dark' : ''} option-2 ${data.hasLinks ? 'has-links' : ''} viewport ${section.customClasses || ''}`}
      style={style}
      data-s3-module=""
    >
      <div className="wrapper">
        <div className="row wow" data-wow-duration="2s">
          <div className="content" data-api-key="content">
            {data.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(data.logo)}
                  width={data.logoWidth || 58}
                  height={data.logoHeight || 64}
                  loading="lazy"
                  alt={data.logoAlt || "white goldfinger aesthetics logo"}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            {data.quoteText && <h3>{data.quoteText}</h3>}
          </div>
        </div>
        {data.backgroundImage && (
          <picture className="background">
            <img
              src={getImageUrl(data.backgroundImage)}
              loading="lazy"
              width={data.backgroundImageWidth || 2200}
              height={data.backgroundImageHeight || 1077}
              alt={data.backgroundImageAlt || "Background"}
              draggable="false"
            />
          </picture>
        )}
      </div>
    </div>
  );
}

// NEW: Procedures Banner Section
function ProceduresBannerSection({ section, style }: { section: Section; style: React.CSSProperties }) {
  const data = section.proceduresBanner;
  if (!data) return null;

  return (
    <div
      className={`mod_double_banner container fadeInLeft ${section.customClasses || ''}`}
      style={style}
      data-wow-duration="2s"
      data-s3-module=""
    >
      {(data.mainTitleSmall || data.mainTitle) && (
        <div className="title-main">
          <h2>
            {data.mainTitleSmall && (
              <span className="small">{data.mainTitleSmall}</span>
            )}
            {data.mainTitle}
          </h2>
        </div>
      )}
      <div className="row">
        {data.leftBanner && (
          <div className="banner banner-left">
            {data.leftBanner.title && (
              <div className="title">
                <h2>{data.leftBanner.title}</h2>
              </div>
            )}
            <div className="content">
              {data.leftBanner.contentBold && (
                <p className="bold" role="heading" aria-level={1}>
                  {data.leftBanner.contentBold}
                </p>
              )}
              {data.leftBanner.content && <p>{data.leftBanner.content}</p>}
              {data.leftBanner.linkText && data.leftBanner.linkUrl && (
                <p>
                  <a className="arrow-right" href={data.leftBanner.linkUrl}>
                    {data.leftBanner.linkText}
                  </a>
                </p>
              )}
            </div>
            {data.leftBanner.image && (
              <picture className="background">
                <img
                  src={getImageUrl(data.leftBanner.image)}
                  loading="lazy"
                  width={data.leftBanner.imageWidth || 1484}
                  height={data.leftBanner.imageHeight || 1852}
                  alt={data.leftBanner.imageAlt || "fit woman in black exercise clothes"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        )}
        {data.rightBanner && (
          <div className="banner banner-right">
            {data.rightBanner.title && (
              <div className="title">
                <h2>{data.rightBanner.title}</h2>
              </div>
            )}
            <div className="content">
              {data.rightBanner.contentBold && (
                <p className="bold" role="heading" aria-level={1}>
                  {data.rightBanner.contentBold}
                </p>
              )}
              {data.rightBanner.content && <p>{data.rightBanner.content}</p>}
              {data.rightBanner.linkText && data.rightBanner.linkUrl && (
                <p>
                  <a className="arrow-right" href={data.rightBanner.linkUrl}>
                    {data.rightBanner.linkText}
                  </a>
                </p>
              )}
            </div>
            {data.rightBanner.image && (
              <picture className="background">
                <img
                  src={getImageUrl(data.rightBanner.image)}
                  loading="lazy"
                  width={data.rightBanner.imageWidth || 1484}
                  height={data.rightBanner.imageHeight || 1852}
                  alt={data.rightBanner.imageAlt || "African-American woman in sports bra"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        )}
      </div>
    </div>
  );
}