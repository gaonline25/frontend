// import React from "react";

// const LashExtensions: React.FC = () => {
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
//                     href="/medical-spa/lash-extensions/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Lash Extensions
//                   </a>
//                 </li>
//               </ul>
//               <h1>Lash Extensions</h1>
//               <div className="text">
//                 <p>Flutter, Flaunt, and Flourish</p>
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
//                 srcSet="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Womans eyelashes being brushed"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Intro Module */}
//       <div
//         className="mod_intro container viewport option-1 wide wow fadeInUp"
//         data-s3-module=""
//       >
//         <div className="row ">
//           <picture className="logo">
//             <img
//               src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
//               width="58"
//               height="64"
//               loading="lazy"
//               alt="Goldfingers aesthetic logo"
//               draggable="false"
//               data-api-key="logo"
//             />
//           </picture>
//           <div className="inner" data-api-key="content">
//             <h2>
//               Enhance your look with lush,{" "}
//               <span className="block-desktop">
//                 natural-looking lash extensions
//               </span>
//             </h2>
//             <p>
//               Lash extensions are a popular beauty trend, making it possible to
//               have long, voluminous, and fluttery lashes to frame your eyes and
//               increase your allure. At Goldfingers Aesthetics, we provide expert
//               lash extension services that deliver dramatic and natural-looking
//               results. Discover how lash extensions can transform your eyes and
//               elevate your look!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Banner Module */}
//       <div
//         className="mod_banner dark  hide-divider viewport background-2"
//         data-s3-module=""
//       >
//         <div className="row wow fadeInUp">
//           <div className="content" data-api-key="top_content">
//             <h2 className="text-center">
//               Beautiful Eyes Framed By Lush Lashes
//             </h2>
//             <div className="columns-two">
//               <div>
//                 <p>
//                   If you constantly reach for mascara to achieve the desired
//                   length and volume, lash extensions can provide a lasting and
//                   hassle-free alternative. These synthetic or natural fibers
//                   attach to your existing eyelashes, creating a longer, fuller,
//                   and more defined lash line.
//                 </p>
//                 <p>
//                   Lash extensions come in various lengths, thicknesses, and curl
//                   types, allowing for customized results that suit your desired
//                   aesthetic. They offer a transformative solution for sparse,
//                   pale, or shorter lashes.
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   These extensions are ideal for individuals who wish to wake up
//                   with effortlessly beautiful lashes, saving time and
//                   frustration in their daily routine. Whether you have naturally
//                   light-colored lashes that fade into the background or shorter
//                   lashes that lack the desired impact, lash extensions can
//                   address these concerns, providing you with lush, defined, and
//                   captivating eyes. With the expertise of our skilled and
//                   meticulous technicians at Goldfingers Aesthetics, you can
//                   achieve the luscious lashes you've always dreamed of,
//                   enhancing your natural beauty and boosting your confidence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2200&q=85&sharp=5"
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2200&q=85&sharp=5"
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
//       <div className="mod_column viewport container" data-s3-module="">
//         <div className="row mt-30 pb-0" data-api-key="content">
//           <div className="item">
//             <h2>The Benefits Of Lash Extensions</h2>
//             <p>
//               Here are some of the most significant benefits of lash extensions:
//             </p>
//             <ul>
//               <ul className="columns">
//                 <li>
//                   <strong>Enhanced Appearance:</strong>
//                   Lash extensions instantly add length, volume, and definition
//                   to your lashes, making your eyes appear larger and more
//                   attractive.
//                 </li>
//                 <li>
//                   <strong>Natural-Looking:</strong>
//                   When applied by trained professionals, lash extensions can
//                   look incredibly natural, enhancing your features, whether
//                   subtly or with a dramatic look.
//                 </li>
//                 <li>
//                   <strong>Time-Saving:</strong>
//                   Lash extensions reduce the need to apply mascara or curl your
//                   lashes, saving you time in your daily beauty routine.
//                 </li>
//                 <li>
//                   <strong>Customizable: </strong>
//                   With different lengths, thicknesses, and curls available, lash
//                   extensions can be tailored to your preferences, whether you
//                   desire a subtle enhancement or a bold and glamorous look.
//                 </li>
//                 <li>
//                   <strong>Long-Lasting: </strong>
//                   Properly applied lash extensions can last several weeks,
//                   maintaining their appearance through various activities,
//                   including swimming and exercising.
//                 </li>
//               </ul>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Half Image Module */}
//       <div
//         className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
//         data-s3-module=""
//       >
//         <div className="row half-image-row  mt-0 mb-0">
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=1832"
//               />
//               <img
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                 data-lazyload-src="https://www.datocms-assets.com/105497/1694009286-lash-extensions.jpg?auto=format,compress&w=1832"
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="1832"
//                 height="1824"
//                 alt="Woman with long eyelashes"
//                 draggable="false"
//                 data-api-key="image"
//               />
//             </picture>
//           </div>
//           <div className="copy padded">
//             <div className="inner">
//               <div className="content" data-api-key="content">
//                 <h2>Let Us Find The Ideal Lash Extensions For You</h2>
//                 <p>
//                   We believe that your natural lashes deserve the best care and
//                   attention. That's why our trained lash technicians prioritize
//                   your lashes' beauty and health when applying extensions. We
//                   take pride in our precise application techniques, ensuring
//                   that your lashes are enhanced while maintaining the integrity
//                   of your existing lashes.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Column Module */}
//       <div className="mod_column viewport container" data-s3-module="">
//         <div className="row mt-30 mb-30" data-api-key="content">
//           <div className="item">
//             <h2>Tailored Lash Styles</h2>
//             <p>
//               Goldfingers offers a variety of lash styles to match your personal
//               preferences, whether you want a natural, wispy look or more
//               dramatic and voluminous lashes. Our meticulous technicians take
//               around 1 &frac12;to 2 hours to complete the process of getting
//               lash extensions. Throughout the procedure, we prioritize your
//               comfort and satisfaction, ensuring you leave our salon with the
//               desired lash look.
//               <br />
//               &nbsp;
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CTA General Module */}
//       <div
//         className="mod_cta_general viewport container cta  thin wow fadeInRight mt-0 mb-0 background-1"
//         data-s3-module=""
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
//       <div className="mod_column viewport container" data-s3-module="">
//         <div className="row mt-30" data-api-key="content">
//           <div className="item">
//             <h2>
//               Elevate Your Look With Luxurious Lash Extensions At Goldfingers
//               Aesthetics
//             </h2>
//             <p>
//               Here are some of the reasons why you should choose us for your
//               lash extension experience:
//             </p>
//             <ul>
//               <ul className="columns">
//                 <li>
//                   Expertise: Our lash technicians have extensive experience and
//                   training in lash extension application, ensuring you receive
//                   stunning and safe results for your natural lashes.
//                 </li>
//                 <li>
//                   Personalization: We work closely with you to understand your
//                   desired lash style, considering your eye shape, natural
//                   lashes, and overall aesthetic goals.
//                 </li>
//                 <li>
//                   Quality Products: We exclusively use high-quality lash
//                   extension products to ensure longevity, comfort, and a
//                   beautiful finish.
//                 </li>
//                 <li>
//                   Attention to Detail: Every lash is meticulously applied to
//                   create a seamless, flawless look that enhances natural beauty.
//                 </li>
//                 <li>
//                   Comfortable Environment: Our clinic provides a comfortable and
//                   relaxing setting where you can enjoy your lash extension
//                   experience.
//                 </li>
//               </ul>
//             </ul>
//             <p>
//               At Goldfingers Aesthetics, we are committed to providing safe and
//               effective treatments that help you look and feel your best.
//               Contact us today to schedule an appointment and discover how our
//               skilled lash technicians can enhance your natural beauty with
//               precision and care.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default LashExtensions;

"use client";

import React, { useEffect, useState } from "react";
import {
  fetchLashFillersPageData,
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/medicalSpa/fetchLashExtensionsPageComponent"; // Adjust path to your API utilities

interface LashExtensionsData {
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
    containerClass?: string;
    logo?: any;
    logoAlt?: string;
    heading: string;
    headingColor?: string;
    content: any;
  };
  bannerSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    darkMode?: boolean;
    backgroundImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
    heading: string;
    headingAlignment?: string;
    content?: any;
    bottomContent?: any;
    columnLayout?: string;
  };
  columnSection1: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    content?: any;
    bulletPoints?: Array<{ title?: string; content: any }>;
    listStyle?: string;
  };
  halfImageSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    imagePosition?: string;
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
  columnSection2: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    content?: any;
  };
  ctaGeneralSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingLink?: string;
    headingColor?: string;
    ctaButton: {
      text: string;
      url: string;
      backgroundColor?: string;
      textColor?: string;
      hoverBackgroundColor?: string;
    };
    thin?: boolean;
  };
  columnSection3: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    introContent?: any;
    bulletPoints?: Array<{ title?: string; content: any }>;
    closingContent?: any;
    listStyle?: string;
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
  buttonStyles: {
    defaultBackgroundColor?: string;
    defaultTextColor?: string;
    defaultHoverBackground?: string;
    whiteButtonBackground?: string;
    whiteButtonTextColor?: string;
    whiteButtonHoverBackground?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  animationSettings: {
    enableAnimations?: boolean;
    fadeInUpClass?: string;
    fadeInLeftClass?: string;
    fadeInRightClass?: string;
    animationDuration?: string;
    animationEasing?: string;
  };
}

const LashExtensions: React.FC = () => {
  const [pageData, setPageData] = useState<LashExtensionsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLashFillersPageData(
          "lash-extensions-page-component"
        );
        setPageData(data);
      } catch (error) {
        console.error("Error fetching LashExtensions page data:", error);
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
    introSection,
    bannerSection1,
    columnSection1,
    halfImageSection,
    columnSection2,
    ctaGeneralSection,
    columnSection3,
    sectionOrder,
    globalStyles,
    buttonStyles,
    animationSettings,
  } = pageData;

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
            className={`mod_hero banner ${
              pageData.mobileSettings?.mobileStackClass || "mobile-stack"
            }`}
            data-s3-module=""
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
                  <ul className="partial_breadcrumb" data-s3-partial="">
                    {heroSection.breadcrumbs.map((crumb, index) => (
                      <li key={index}>
                        <a
                          href={crumb.url}
                          role="link"
                          aria-label={crumb.ariaLabel}
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
                      fontSize: heroSection.titleFontSize,
                    }}
                  >
                    {heroSection.title}
                  </h1>
                  <div
                    className="text"
                    style={{ color: heroSection.descriptionColor }}
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
                              buttonStyles.whiteButtonBackground,
                            color:
                              heroSection.ctaButton.textColor ||
                              buttonStyles.whiteButtonTextColor,
                            borderRadius: buttonStyles.borderRadius,
                            padding: buttonStyles.padding,
                            fontSize: buttonStyles.fontSize,
                            fontWeight: buttonStyles.fontWeight,
                          }}
                          onMouseOver={(e) => {
                            const hoverColor =
                              heroSection.ctaButton.hoverBackgroundColor ||
                              buttonStyles.whiteButtonHoverBackground;
                            hoverColor &&
                              (e.currentTarget.style.backgroundColor =
                                hoverColor);
                          }}
                          onMouseOut={(e) => {
                            const bgColor =
                              heroSection.ctaButton.backgroundColor ||
                              buttonStyles.whiteButtonBackground;
                            bgColor &&
                              (e.currentTarget.style.backgroundColor = bgColor);
                          }}
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
                      heroMediaImages.alt || "Womans eyelashes being brushed"
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
            className={`mod_intro ${
              introSection.containerClass || "container viewport option-1 wide"
            } ${
              animationSettings.enableAnimations
                ? animationSettings.fadeInUpClass
                : ""
            }`}
            data-s3-module=""
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
                <h2 style={{ color: introSection.headingColor }}>
                  {introSection.heading}
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

      case "bannerSection1":
        if (!bannerSection1.show) return null;
        const bannerImages = getResponsiveImageUrls(
          bannerSection1.backgroundImage
        );
        return (
          <div
            className={`mod_banner ${
              bannerSection1.darkMode ? "dark" : ""
            } hide-divider viewport background-2 ${
              animationSettings.enableAnimations
                ? animationSettings.fadeInUpClass
                : ""
            }`}
            data-s3-module=""
            style={{
              backgroundColor: bannerSection1.backgroundColor,
              color: bannerSection1.textColor,
            }}
          >
            <div className="row">
              <div className="content" data-api-key="top_content">
                <h2
                  className={`text-${
                    bannerSection1.headingAlignment || "center"
                  }`}
                >
                  {bannerSection1.heading}
                </h2>
                <div
                  className={`columns-${bannerSection1.columnLayout || "two"}`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerSection1.content),
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerSection1.bottomContent),
                    }}
                  />
                </div>
              </div>
            </div>
            <picture className="background">
              <source media="(max-width:420px)" srcSet={bannerImages.mobile} />
              <source media="(max-width:800px)" srcSet={bannerImages.tablet} />
              <source
                media="(max-width:1400px)"
                srcSet={bannerImages.desktop}
              />
              <source srcSet={bannerImages.large} />
              <img
                src={bannerImages.large}
                loading="lazy"
                alt={bannerImages.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "columnSection1":
        if (!columnSection1.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module=""
            style={{
              backgroundColor: columnSection1.backgroundColor,
              color: columnSection1.textColor,
            }}
          >
            <div
              className={`row ${
                pageData.spacingSettings?.mt30Class || "mt-30"
              } ${pageData.spacingSettings?.pb0Class || "pb-0"}`}
              data-api-key="content"
            >
              <div className="item">
                <h2 style={{ color: columnSection1.headingColor }}>
                  {columnSection1.heading}
                </h2>
                {columnSection1.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection1.content),
                    }}
                  />
                )}
                {columnSection1.bulletPoints && (
                  <ul>
                    <ul className={columnSection1.listStyle || "columns"}>
                      {columnSection1.bulletPoints.map((point, index) => (
                        <li key={index}>
                          {point.title && <strong>{point.title}</strong>}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: lexicalToHtml(point.content),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </ul>
                )}
              </div>
            </div>
          </div>
        );

      case "halfImageSection":
        if (!halfImageSection.show) return null;
        const halfImages = getResponsiveImageUrls(halfImageSection.image);
        return (
          <div
            className={`mod_half_image viewport half-image container ${
              animationSettings.enableAnimations
                ? animationSettings.fadeInLeftClass
                : ""
            } background-navy`}
            data-s3-module=""
            style={{
              backgroundColor: halfImageSection.backgroundColor,
              color: halfImageSection.textColor,
            }}
          >
            <div
              className={`row half-image-row ${
                pageData.spacingSettings?.mt0Class || "mt-0"
              } ${pageData.spacingSettings?.mb0Class || "mb-0"} ${
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
              <div className="copy padded">
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2 style={{ color: halfImageSection.headingColor }}>
                      {halfImageSection.heading}
                    </h2>
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
        );

      case "columnSection2":
        if (!columnSection2.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module=""
            style={{
              backgroundColor: columnSection2.backgroundColor,
              color: columnSection2.textColor,
            }}
          >
            <div
              className={`row ${
                pageData.spacingSettings?.mt30Class || "mt-30"
              } ${pageData.spacingSettings?.mb30Class || "mb-30"}`}
              data-api-key="content"
            >
              <div className="item">
                <h2 style={{ color: columnSection2.headingColor }}>
                  {columnSection2.heading}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnSection2.content),
                  }}
                />
              </div>
            </div>
          </div>
        );

      case "ctaGeneralSection":
        if (!ctaGeneralSection.show) return null;
        return (
          <div
            className={`mod_cta_general viewport container cta ${
              ctaGeneralSection.thin ? "thin" : ""
            } ${
              animationSettings.enableAnimations
                ? animationSettings.fadeInRightClass
                : ""
            } ${pageData.spacingSettings?.mt0Class || "mt-0"} ${
              pageData.spacingSettings?.mb0Class || "mb-0"
            } background-1`}
            data-s3-module=""
            style={{
              backgroundColor: ctaGeneralSection.backgroundColor,
              color: ctaGeneralSection.textColor,
            }}
          >
            <div className="row">
              <div className="text">
                <h2 style={{ color: ctaGeneralSection.headingColor }}>
                  {ctaGeneralSection.headingLink ? (
                    <a href={ctaGeneralSection.headingLink}>
                      {ctaGeneralSection.heading}
                    </a>
                  ) : (
                    ctaGeneralSection.heading
                  )}
                </h2>
                <a
                  href={ctaGeneralSection.ctaButton.url}
                  className="btn white"
                  style={{
                    backgroundColor:
                      ctaGeneralSection.ctaButton.backgroundColor ||
                      buttonStyles.whiteButtonBackground,
                    color:
                      ctaGeneralSection.ctaButton.textColor ||
                      buttonStyles.whiteButtonTextColor,
                    borderRadius: buttonStyles.borderRadius,
                    padding: buttonStyles.padding,
                    fontSize: buttonStyles.fontSize,
                    fontWeight: buttonStyles.fontWeight,
                  }}
                  onMouseOver={(e) => {
                    const hoverColor =
                      ctaGeneralSection.ctaButton.hoverBackgroundColor ||
                      buttonStyles.whiteButtonHoverBackground;
                    hoverColor &&
                      (e.currentTarget.style.backgroundColor = hoverColor);
                  }}
                  onMouseOut={(e) => {
                    const bgColor =
                      ctaGeneralSection.ctaButton.backgroundColor ||
                      buttonStyles.whiteButtonBackground;
                    bgColor &&
                      (e.currentTarget.style.backgroundColor = bgColor);
                  }}
                >
                  {ctaGeneralSection.ctaButton.text}
                </a>
              </div>
              <div className="media"></div>
            </div>
          </div>
        );

      case "columnSection3":
        if (!columnSection3.show) return null;
        return (
          <div
            className="mod_column viewport container"
            data-s3-module=""
            style={{
              backgroundColor: columnSection3.backgroundColor,
              color: columnSection3.textColor,
            }}
          >
            <div
              className={`row ${
                pageData.spacingSettings?.mt30Class || "mt-30"
              }`}
              data-api-key="content"
            >
              <div className="item">
                <h2 style={{ color: columnSection3.headingColor }}>
                  {columnSection3.heading}
                </h2>
                {columnSection3.introContent && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection3.introContent),
                    }}
                  />
                )}
                {columnSection3.bulletPoints && (
                  <ul>
                    <ul className={columnSection3.listStyle || "columns"}>
                      {columnSection3.bulletPoints.map((point, index) => (
                        <li key={index}>
                          {point.title && <strong>{point.title}</strong>}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: lexicalToHtml(point.content),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </ul>
                )}
                {columnSection3.closingContent && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection3.closingContent),
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
      {sectionOrder.map((item, index) => (
        <React.Fragment key={index}>
          {renderSection(item.section)}
        </React.Fragment>
      ))}
    </main>
  );
};

export default LashExtensions;