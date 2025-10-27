// import React from "react";

// const NonSurgicalGallery: React.FC = () => {
//   return (
//     <main id="main">
//       {/* Gallery Hero Partial */}
//       <div className="partial_gallery_hero banner bg" data-s3-partial>
//         <div className="row">
//           <div className="inner">
//             <h1>Non-Surgical Gallery</h1>
//             <ul className="partial_breadcrumb" data-s3-partial>
//               <li>
//                 <Link
//                   href="/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/gallery/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/gallery/non-surgical/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Non Surgical
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=630 2x"
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=630 2x"
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1200 2x"
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1200 2x"
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2100 2x"
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2100 2x"
//           />
//           <source
//             srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
//             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
//           />
//           <img
//             src="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
//             width="2200"
//             height="691"
//             alt="Marble"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       {/* Gallery index Partial */}
//       <div
//         className="partial_gallery_index sub-index container"
//         data-s3-partial
//       >
//         <div className="row">
//           <div className="group lip-fillers">
//             <h2>
//               <Link href="/gallery/non-surgical/lip-fillers/">Lip Fillers</Link>
//             </h2>
//           </div>
//           <div className="group botox">
//             <h2>
//               <Link href="/gallery/non-surgical/botox/">BOTOX</Link>
//             </h2>
//           </div>
//           <div className="group juvederm">
//             <h2>
//               <Link href="/gallery/non-surgical/juvederm/">JUVÉDERM</Link>
//             </h2>
//           </div>
//           <div className="group kybella">
//             <h2>
//               <Link href="/gallery/non-surgical/kybella/">KYBELLA</Link>
//             </h2>
//           </div>
//           <div className="group micro-channeling">
//             <h2>
//               <Link href="/gallery/non-surgical/micro-channeling/">
//                 Micro-Channeling
//               </Link>
//             </h2>
//           </div>
//           <div className="group restylane-r">
//             <h2>
//               <Link href="/gallery/non-surgical/restylane-r/">Restylane</Link>
//             </h2>
//           </div>
//           <div className="group skinmedica">
//             <h2>
//               <Link href="/gallery/non-surgical/skinmedica/">SkinMedica</Link>
//             </h2>
//           </div>
//           <div className="group dermal-filler">
//             <h2>
//               <Link href="/gallery/non-surgical/dermal-filler/">Dermal Filler</Link>
//             </h2>
//           </div>
//           <div className="group cheek-contour">
//             <h2>
//               <Link href="/gallery/non-surgical/cheek-contour/">Cheek Contour</Link>
//             </h2>
//           </div>
//           <div className="group liquid-chin-and-jaw-contouring">
//             <h2>
//               <Link href="/gallery/non-surgical/liquid-chin-and-jaw-contouring/">
//                 Liquid Chin & Jaw Contouring
//               </Link>
//             </h2>
//           </div>
//           <div className="group liquid-rhinoplasty">
//             <h2>
//               <Link href="/gallery/non-surgical/liquid-rhinoplasty/">
//                 Liquid Rhinoplasty
//               </Link>
//             </h2>
//           </div>
//           <div className="group marionette-lines">
//             <h2>
//               <Link href="/gallery/non-surgical/marionette-lines/">
//                 Marionette Lines
//               </Link>
//             </h2>
//           </div>
//           <div className="group liquid-facelift">
//             <h2>
//               <Link href="/gallery/non-surgical/liquid-facelift/">
//                 Liquid (Non-Surgical) Facelift
//               </Link>
//             </h2>
//           </div>
//           <div className="group weight-loss">
//             <h2>
//               <Link href="/gallery/non-surgical/weight-loss/">Weight Loss</Link>
//             </h2>
//           </div>
//           <div className="group lash-extensions">
//             <h2>
//               <Link href="/gallery/non-surgical/lash-extensions/">
//                 Lash Extensions
//               </Link>
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="age-restricted hidden">
//         <div className="popup">
//           <div className="inner">
//             <h3>Warning:</h3>
//             <p>
//               This gallery contains nudity. Please click OK to confirm you are
//               at least 18 years of age and are not offended by this material.
//             </p>
//             <button className="btn">Ok</button>
//           </div>
//           <span className="close"></span>
//         </div>
//         <div className="overlay"></div>
//       </div>
//     </main>
//   );
// };

// export default NonSurgicalGallery;


import React from "react";
import {
  fetchNonSurgicalGalleryData,
  getResponsiveImageUrls,
  getSectionByType,
  renderRichText,
} from "@/lib/api/Gallery/non-surgical/NonSurgicalGalleryDataFetcher";

import Link from "next/link"

const NonSurgicalGallery: React.FC = async () => {
  const galleryData = await fetchNonSurgicalGalleryData();

  if (!galleryData) {
    return <div>Loading...</div>;
  }

  const sections = galleryData.sections || [];
  const heroSection = getSectionByType(sections, "galleryHero");
  const subIndexSection = getSectionByType(sections, "subIndex");
  const ageRestrictionSection = getSectionByType(sections, "ageRestriction");

  // Get hero data
  const heroData = heroSection?.galleryHeroSection || {};
  const heroBackground = getResponsiveImageUrls(heroData.backgroundImage);
  const heroBreadcrumbs = heroData.breadcrumbs || [];
  const heroTitle = heroData.title || "Non-Surgical Gallery";
  const heroClasses = heroData.cssClasses || "banner bg";

  // Get sub-index data
  const subIndexData = subIndexSection?.subIndexSection || {};
  const categoryGroups = subIndexData.categoryGroups || [];
  const subIndexClasses = subIndexData.cssClasses || "sub-index";
  const containerWidth = subIndexData.containerWidth || "container";

  // Get age restriction data
  const ageData = ageRestrictionSection?.ageRestrictionSection || {};
  const ageEnabled = ageData.enabled || false;
  const ageHeading = ageData.heading || "Warning:";
  const ageMessage =
    renderRichText(ageData.message) ||
    "This gallery contains nudity. Please click OK to confirm you are at least 18 years of age and are not offended by this material.";
  const ageButtonText = ageData.buttonText || "Ok";
  const ageClasses = ageData.cssClasses || "";

  // Apply inline styles if provided
  const heroStyle: React.CSSProperties = {};
  if (heroData.backgroundColor)
    heroStyle.backgroundColor = heroData.backgroundColor;

  const subIndexStyle: React.CSSProperties = {};
  if (subIndexData.backgroundColor)
    subIndexStyle.backgroundColor = subIndexData.backgroundColor;
  if (subIndexData.textColor) subIndexStyle.color = subIndexData.textColor;

  const agePopupStyle: React.CSSProperties = {};
  if (ageData.backgroundColor)
    agePopupStyle.backgroundColor = ageData.backgroundColor;
  if (ageData.textColor) agePopupStyle.color = ageData.textColor;

  const ageOverlayStyle: React.CSSProperties = {};
  if (ageData.overlayColor)
    ageOverlayStyle.backgroundColor = ageData.overlayColor;

  const ageButtonStyle: React.CSSProperties = {};
  if (ageData.buttonBackgroundColor)
    ageButtonStyle.backgroundColor = ageData.buttonBackgroundColor;
  if (ageData.buttonTextColor) ageButtonStyle.color = ageData.buttonTextColor;

  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      {heroSection && (
        <div
          className={`partial_gallery_hero ${heroClasses}`}
          data-s3-partial
          style={heroStyle}
        >
          <div className="row">
            <div className="inner">
              <h1 style={{ color: heroData.titleColor || undefined }}>
                {heroTitle}
              </h1>
              {heroBreadcrumbs.length > 0 && (
                <ul className="partial_breadcrumb" data-s3-partial>
                  {heroBreadcrumbs.map((crumb: any, index: number) => (
                    <li key={index}>
                      <Link
                        href={crumb.url}
                        role="link"
                        aria-label={
                          crumb.ariaLabel ||
                          "Breadcrumbs to help navigate the user"
                        }
                      >
                        {crumb.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {heroBackground.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${heroBackground.mobile}?auto=format,compress&w=420, ${heroBackground.mobile}?auto=format,compress&w=630 2x`}
                data-lazyload-srcset={`${heroBackground.mobile}?auto=format,compress&w=420, ${heroBackground.mobile}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${
                  heroBackground.tablet || heroBackground.mobile
                }?auto=format,compress&w=800, ${
                  heroBackground.tablet || heroBackground.mobile
                }?auto=format,compress&w=1200 2x`}
                data-lazyload-srcset={`${
                  heroBackground.tablet || heroBackground.mobile
                }?auto=format,compress&w=800, ${
                  heroBackground.tablet || heroBackground.mobile
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${
                  heroBackground.desktop ||
                  heroBackground.tablet ||
                  heroBackground.mobile
                }?auto=format,compress&w=1400, ${
                  heroBackground.desktop ||
                  heroBackground.tablet ||
                  heroBackground.mobile
                }?auto=format,compress&w=2100 2x`}
                data-lazyload-srcset={`${
                  heroBackground.desktop ||
                  heroBackground.tablet ||
                  heroBackground.mobile
                }?auto=format,compress&w=1400, ${
                  heroBackground.desktop ||
                  heroBackground.tablet ||
                  heroBackground.mobile
                }?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet={`${
                  heroBackground.large ||
                  heroBackground.desktop ||
                  heroBackground.mobile
                }?auto=format,compress&w=2200`}
                data-lazyload-srcset={`${
                  heroBackground.large ||
                  heroBackground.desktop ||
                  heroBackground.mobile
                }?auto=format,compress&w=2200`}
              />
              <img
                src={`${
                  heroBackground.large ||
                  heroBackground.desktop ||
                  heroBackground.mobile
                }?auto=format,compress&w=2200`}
                width={heroBackground.width}
                height={heroBackground.height}
                alt={heroBackground.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Gallery index Partial */}
      {subIndexSection && (
        <div
          className={`partial_gallery_index ${subIndexClasses} ${containerWidth}`}
          data-s3-partial
          style={subIndexStyle}
        >
          <div className="row">
            {categoryGroups.map((category: any, index: number) => {
              const groupStyle: React.CSSProperties = {};
              if (category.backgroundColor)
                groupStyle.backgroundColor = category.backgroundColor;
              if (category.borderColor)
                groupStyle.borderColor = category.borderColor;

              const headingStyle: React.CSSProperties = {};
              if (category.headingColor)
                headingStyle.color = category.headingColor;

              const linkStyle: React.CSSProperties = {};
              if (category.linkColor) linkStyle.color = category.linkColor;

              return (
                <div
                  key={index}
                  className={`group ${category.categorySlug}`}
                  style={groupStyle}
                >
                  <h2 style={headingStyle}>
                    <Link
                      href={category.url}
                      style={linkStyle}
                      // onMouseEnter={(e) => {
                      //   if (category.linkHoverColor) {
                      //     e.currentTarget.style.color = category.linkHoverColor;
                      //   }
                      // }}
                      // onMouseLeave={(e) => {
                      //   if (category.linkColor) {
                      //     e.currentTarget.style.color = category.linkColor;
                      //   }
                      // }}
                    >
                      {category.categoryName}
                    </Link>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Age Restriction Popup */}
      {ageRestrictionSection && (
        <div
          className={`age-restricted ${
            !ageEnabled ? "hidden" : ""
          } ${ageClasses}`}
        >
          <div className="popup" style={agePopupStyle}>
            <div className="inner">
              <h3 style={{ color: ageData.headingColor || undefined }}>
                {ageHeading}
              </h3>
              <p>{ageMessage}</p>
              <button className="btn" style={ageButtonStyle}>
                {ageButtonText}
              </button>
            </div>
            {ageData.showCloseButton !== false && (
              <span className="close"></span>
            )}
          </div>
          <div className="overlay" style={ageOverlayStyle}></div>
        </div>
      )}
    </main>
  );
};

export default NonSurgicalGallery;