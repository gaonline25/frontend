// import React from "react";

// const PlasticSurgeryBody: React.FC = () => {
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
//                     href="/plastic-surgery/body/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Body
//                   </a>
//                 </li>
//               </ul>
//               <h1>Body</h1>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694008833-body-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Doctor McClure consulting with patient"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Index Static Module */}
//       <div className="mod_index_static mod_index container" data-s3-module>
//         <div className="row subcontent">
//           <div className="inner">
//             <div className="item">
//               <a href="/plastic-surgery/liposuction/" className="media-btn">
//                 <div className="media">
//                   <picture className="background">
//                     <source
//                       media="(max-width:420px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=630 2x"
//                     />
//                     <source
//                       media="(max-width:800px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=1200 2x"
//                     />
//                     <source
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694715404-liposuction-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Liposuction Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Liposuction</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/plastic-surgery/liposuction/" className="title">
//                   <h2>Liposuction</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a href="/plastic-surgery/mommy-makeover/" className="media-btn">
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
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694638085-mommy-makeover-banner.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Mommy Makeover Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Mommy Makeover</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/plastic-surgery/mommy-makeover/" className="title">
//                   <h2>Mommy Makeover</h2>
//                 </a>
//               </div>
//             </div>

//             <div className="item">
//               <a href="/plastic-surgery/tummy-tuck/" className="media-btn">
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
//                       media="(max-width:1400px)"
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=2100 2x"
//                     />
//                     <source
//                       srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1920"
//                     />
//                     <img
//                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                       data-lazyload-src="https://www.datocms-assets.com/105497/1694009139-tummy-tuck.jpg?auto=format,compress&w=1920"
//                       loading="lazy"
//                       data-lazyload="img"
//                       width="1920"
//                       height="1206"
//                       alt="Tummy Tuck Media"
//                       draggable="false"
//                     />
//                   </picture>
//                   <div className="content">
//                     <span>Tummy Tuck</span>
//                   </div>
//                 </div>
//               </a>
//               <div className="copy">
//                 <a href="/plastic-surgery/tummy-tuck/" className="title">
//                   <h2>Tummy Tuck</h2>
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

// export default PlasticSurgeryBody;


"use client";

import React, { useEffect, useState } from "react";
import {
  fetchPlasticSurgeryBodyData,
  getResponsiveImageUrls,
} from "@/lib/api/plasticSurgery/fetchPlasticSurgeryBodyComponent";

interface PlasticSurgeryBodyData {
  heroSection: any;
  indexStaticSection: any;
}

const PlasticSurgeryBody: React.FC = () => {
  const [pageData, setPageData] = useState<PlasticSurgeryBodyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlasticSurgeryBodyData(
          "plastic-surgery-body-page-component"
        );
        setPageData(data);
      } catch (error) {
        console.error("Error fetching Plastic Surgery Body page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>No data available</div>;

  const { heroSection, indexStaticSection } = pageData;

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
                    "Doctor McClure consulting with patient"
                  }
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Index Static Module */}
      {indexStaticSection?.show && (
        <div className="mod_index_static mod_index container" data-s3-module>
          <div className="row subcontent">
            <div className="inner">
              {indexStaticSection.items?.map((item: any, index: number) => (
                <div key={index} className="item">
                  <a href={item.url} className="media-btn">
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
                          media="(max-width:1400px)"
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={getResponsiveSrcSet(
                            item.image,
                            1400
                          )}
                        />
                        <source
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={`${
                            getResponsiveImageUrls(item.image).large
                          }?auto=format,compress&w=1920`}
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-src={`${
                            getResponsiveImageUrls(item.image).large
                          }?auto=format,compress&w=1920`}
                          loading="lazy"
                          data-lazyload="img"
                          width="1920"
                          height="1206"
                          alt={item.image?.alt || `${item.title} Media`}
                          draggable="false"
                        />
                      </picture>
                      <div className="content">
                        <span>{item.overlayText || item.title}</span>
                      </div>
                    </div>
                  </a>
                  <div className="copy">
                    <a href={item.url} className="title">
                      <h2>{item.title}</h2>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PlasticSurgeryBody;