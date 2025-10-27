// import React from "react";

// const VideoGallery: React.FC = () => {
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
//                     href="/about/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/about/resource-center/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Resource Center
//                   </a>
//                 </li>
//               </ul>
//               <h1>Videos</h1>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1440"
//                 alt="Doctor James Young"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Intro Module */}
//       <div
//         className="mod_intro container viewport option-1 wow fadeInUp"
//         data-s3-module
//       >
//         <div className="row pb-0">
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
//             <p>
//               We are very excited to provide you with some of our most popular
//               videos from our digital library. We hope you will find them
//               helpful as you begin to learn which of our many opportunities are
//               just right for you. In addition to these resources, we look
//               forward to meeting you and answering all of your questions during
//               an <a href="/contact/">in-person consultation</a>.&nbsp;
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Video Grid Module */}
//       <div className="container mod_video_grid" data-s3-module>
//         <div className="row ">
//           <div className="video-grid-container">
//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=CFn2tvYQLV0"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://www.datocms-assets.com/105497/1698108612-semaglutide-thumb.jpg?auto=format,compress"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=CFn2tvYQLV0"
//                   className="popup-video no-icon video"
//                 >
//                   Semaglutide Break Down with Dr. James Young
//                 </a>
//               </p>
//             </div>

//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=-S2C8MUAROI"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://www.datocms-assets.com/105497/1698108916-botox-thumb.jpg?auto=format,compress"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=-S2C8MUAROI"
//                   className="popup-video no-icon video"
//                 >
//                   Dr. James Young & Botox Cosmetic
//                 </a>
//               </p>
//             </div>

//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=ScBG1SllRIY"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://www.datocms-assets.com/105497/1694009546-screen-shot-2023-09-06-at-10-03-59-am.png?auto=format,compress"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=ScBG1SllRIY"
//                   className="popup-video no-icon video"
//                 >
//                   Goldfingers Aesthetics Medical Spa Winter Park
//                 </a>
//               </p>
//             </div>

//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=gAbxnbaLOmw"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://img.youtube.com/vi/gAbxnbaLOmw/mqdefault.jpg?1=1"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=gAbxnbaLOmw"
//                   className="popup-video no-icon video"
//                 >
//                   8 Locations + Complimentary Consults
//                 </a>
//               </p>
//             </div>

//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=L5sE0FKpV8U"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://img.youtube.com/vi/L5sE0FKpV8U/mqdefault.jpg?1=1"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=L5sE0FKpV8U"
//                   className="popup-video no-icon video"
//                 >
//                   BOTOX® Cosmetic. Real Stories & Real Results
//                 </a>
//               </p>
//             </div>

//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=Zdvmd_N3UT8"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://img.youtube.com/vi/Zdvmd_N3UT8/mqdefault.jpg?1=1"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=Zdvmd_N3UT8"
//                   className="popup-video no-icon video"
//                 >
//                   BOTOX® Cosmetic
//                 </a>
//               </p>
//             </div>

//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=RgkRM5j1LBA"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://img.youtube.com/vi/RgkRM5j1LBA/mqdefault.jpg?1=1"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=RgkRM5j1LBA"
//                   className="popup-video no-icon video"
//                 >
//                   Florida's #1 Botox and Juvederm Aesthetic Center
//                 </a>
//               </p>
//             </div>

//             <div className="video">
//               <a
//                 href="https://www.youtube.com/watch?v=BI4tUaA9XCM"
//                 className="popup-video media"
//               >
//                 <picture className="">
//                   <img
//                     src="https://img.youtube.com/vi/BI4tUaA9XCM/mqdefault.jpg?1=1"
//                     loading="lazy"
//                     alt="Goldfingers Aesthetics"
//                     draggable="false"
//                   />
//                 </picture>
//               </a>
//               <p className="title">
//                 <a
//                   href="https://www.youtube.com/watch?v=BI4tUaA9XCM"
//                   className="popup-video no-icon video"
//                 >
//                   JUVÉDERM IT
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default VideoGallery;


import React from "react";



import {
  fetchVideoGalleryData,
  getResponsiveImageUrls,
  getImageUrl,
  getYouTubeThumbnail,
} from "@/lib/api/VideoGalleryApi";
import { lexicalToHtml } from "@/lib/api/home";

const VideoGallery: React.FC = async () => {
  const data = await fetchVideoGalleryData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const heroSection = data.heroSection || {};
  const introSection = data.introSection || {};
  const videoGridSection = data.videoGridSection || {};

  const heroBgImages = getResponsiveImageUrls(heroSection.backgroundImage);
  const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
  const logoUrl = getImageUrl(introSection.logo?.image);

  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      <div className="mod_hero banner mobile-stack" data-s3-module>
        <div className="wrapper">
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
              loading="lazy"
              data-lazyload="img"
              width="1994"
              height="1206"
              alt={heroBgImages.alt}
              draggable="false"
            />
          </picture>
          <div className="row">
            <div className="inner">
              <ul className="partial_breadcrumb" data-s3-partial>
                {heroSection.breadcrumbs?.map(
                  (breadcrumb: any, index: number) => (
                    <li key={index}>
                      <a
                        href={breadcrumb.url}
                        role="link"
                        aria-label={breadcrumb.ariaLabel}
                      >
                        {breadcrumb.label}
                      </a>
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
                {heroSection.title || "Videos"}
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
                height="1440"
                alt={heroMediaImages.alt}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Intro Module */}
      <div
        className={`mod_intro container viewport option-1 ${
          introSection.animationClass || "wow fadeInUp"
        }`}
        data-s3-module
        style={{
          backgroundColor: introSection.backgroundColor || undefined,
          color: introSection.textColor || undefined,
        }}
      >
        <div
          className="row pb-0"
          style={{ paddingBottom: introSection.paddingBottom || undefined }}
        >
          <picture className="logo">
            <img
              src={logoUrl}
              width={introSection.logo?.width || 58}
              height={introSection.logo?.height || 64}
              loading="lazy"
              alt={introSection.logo?.alt || "Goldfingers aesthetic logo"}
              draggable="false"
              data-api-key="logo"
            />
          </picture>
          <div
            className="inner"
            data-api-key="content"
            // dangerouslySetInnerHTML={{ __html: introSection.content || "" }}
            dangerouslySetInnerHTML={{
              __html: lexicalToHtml(introSection.description),
            }}
          />
        </div>
      </div>

      {/* Video Grid Module */}
      <div
        className="container mod_video_grid"
        data-s3-module
        style={{
          backgroundColor: videoGridSection.backgroundColor || undefined,
        }}
      >
        <div className="row ">
          <div className="video-grid-container">
            {videoGridSection.videos?.map((video: any, index: number) => {
              const thumbnailUrl = video.thumbnail?.customThumbnail
                ? getImageUrl(video.thumbnail.customThumbnail)
                : getYouTubeThumbnail(video.youtubeUrl);

              return (
                <div className="video" key={index}>
                  <a href={video.youtubeUrl} className="popup-video media">
                    <picture className="">
                      <img
                        src={thumbnailUrl}
                        loading="lazy"
                        alt={video.thumbnail?.alt || "Goldfingers Aesthetics"}
                        draggable="false"
                      />
                    </picture>
                  </a>
                  <p
                    className="title"
                    style={{ color: video.titleColor || undefined }}
                  >
                    <a
                      href={video.youtubeUrl}
                      className="popup-video no-icon video"
                    >
                      {video.title}
                    </a>
                  </p>
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

export default VideoGallery;