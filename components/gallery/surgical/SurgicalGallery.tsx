// import React from "react";

// const SurgicalGallery: React.FC = () => {
//   return (
//     <main id="main">
//       {/* Gallery Hero Partial */}
//       <div className="partial_gallery_hero banner bg" data-s3-partial="">
//         <div className="row">
//           <div className="inner">
//             <h1>Surgical Gallery</h1>
//             <ul className="partial_breadcrumb" data-s3-partial="">
//               <li>
//                 <a
//                   href="/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/gallery/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Gallery
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/gallery/surgical/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Surgical
//                 </a>
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
//         data-s3-partial=""
//       >
//         <div className="row">
//           <div className="group tummy-tuck">
//             <h2>
//               <a href="/gallery/surgical/tummy-tuck/">Tummy Tuck</a>
//             </h2>
//           </div>
//           <div className="group mommy-makeover">
//             <h2>
//               <a href="/gallery/surgical/mommy-makeover/">Mommy Makeover</a>
//             </h2>
//           </div>
//           <div className="group liposuction">
//             <h2>
//               <a href="/gallery/surgical/liposuction/">Liposuction</a>
//             </h2>
//           </div>
//           <div className="group breast-augmentation">
//             <h2>
//               <a href="/gallery/surgical/breast-augmentation/">
//                 Breast Augmentation
//               </a>
//             </h2>
//           </div>
//           <div className="group breast-lift">
//             <h2>
//               <a href="/gallery/surgical/breast-lift/">Breast Lift</a>
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

// export default SurgicalGallery;


import React from "react";
import {
  fetchSurgicalGalleryData,
  getSectionByType,
  getResponsiveImageUrls,
  renderRichText,
} from "@/lib/api/Gallery/surgical/fetchSurgicalGalleryData";

const SurgicalGallery: React.FC = async () => {
  const data = await fetchSurgicalGalleryData();

  if (!data) {
    return (
      <main id="main">
        <div>Failed to load surgical gallery data</div>
      </main>
    );
  }

  const sections = data.sections || [];
  const galleryHeroSection = getSectionByType(sections, "galleryHero");
  const galleryIndexSection = getSectionByType(sections, "galleryIndex");
  const ageRestrictionSection = getSectionByType(sections, "ageRestriction");

  // Get hero section data
  const heroData = galleryHeroSection?.galleryHeroSection;
  const backgroundImages = getResponsiveImageUrls(heroData?.backgroundImage);
  const breadcrumbs = heroData?.breadcrumbs || [];
  const heroTitle = heroData?.title || "Surgical Gallery";
  const heroCssClasses = heroData?.cssClasses || "banner bg";

  // Get gallery index data
  const indexData = galleryIndexSection?.galleryIndexSection;
  const categoryGroups = indexData?.categoryGroups || [];
  const indexCssClasses = indexData?.cssClasses || "sub-index container";

  // Get age restriction data
  const ageData = ageRestrictionSection?.ageRestrictionSection;
  const ageEnabled = ageData?.enabled || false;
  const ageIsHidden = ageData?.isHidden !== false;
  const ageHeading = ageData?.heading || "Warning:";
  const ageMessage =
    renderRichText(ageData?.message) ||
    "This gallery contains nudity. Please click OK to confirm you are at least 18 years of age and are not offended by this material.";
  const ageButtonText = ageData?.buttonText || "Ok";
  const showCloseButton = ageData?.showCloseButton !== false;

  // Helper function to generate srcSet
  const generateSrcSet = (url: string, width: number) => {
    if (!url) return "";
    return `${url}?auto=format,compress&w=${width}, ${url}?auto=format,compress&w=${
      width * 1.5
    } 2x`;
  };

  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      {galleryHeroSection && (
        <div
          className={`partial_gallery_hero ${heroCssClasses}`}
          data-s3-partial=""
          style={{
            backgroundColor: heroData?.backgroundColor || undefined,
          }}
        >
          <div className="row">
            <div className="inner">
              <h1
                style={{
                  color: heroData?.titleColor || undefined,
                }}
              >
                {heroTitle}
              </h1>
              {breadcrumbs.length > 0 && (
                <ul className="partial_breadcrumb" data-s3-partial="">
                  {breadcrumbs.map((breadcrumb: any, index: number) => (
                    <li key={index}>
                      <a
                        href={breadcrumb.url}
                        role="link"
                        aria-label={
                          breadcrumb.ariaLabel ||
                          "Breadcrumbs to help navigate the user"
                        }
                      >
                        {breadcrumb.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {backgroundImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={generateSrcSet(backgroundImages.mobile, 420)}
                data-lazyload-srcset={generateSrcSet(
                  backgroundImages.mobile,
                  420
                )}
              />
              <source
                media="(max-width:800px)"
                srcSet={generateSrcSet(
                  backgroundImages.tablet || backgroundImages.mobile,
                  800
                )}
                data-lazyload-srcset={generateSrcSet(
                  backgroundImages.tablet || backgroundImages.mobile,
                  800
                )}
              />
              <source
                media="(max-width:1400px)"
                srcSet={generateSrcSet(
                  backgroundImages.desktop ||
                    backgroundImages.tablet ||
                    backgroundImages.mobile,
                  1400
                )}
                data-lazyload-srcset={generateSrcSet(
                  backgroundImages.desktop ||
                    backgroundImages.tablet ||
                    backgroundImages.mobile,
                  1400
                )}
              />
              <source
                srcSet={generateSrcSet(
                  backgroundImages.large ||
                    backgroundImages.desktop ||
                    backgroundImages.mobile,
                  2200
                )}
                data-lazyload-srcset={generateSrcSet(
                  backgroundImages.large ||
                    backgroundImages.desktop ||
                    backgroundImages.mobile,
                  2200
                )}
              />
              <img
                src={`${
                  backgroundImages.large ||
                  backgroundImages.desktop ||
                  backgroundImages.mobile
                }?auto=format,compress&w=${backgroundImages.width}`}
                width={backgroundImages.width}
                height={backgroundImages.height}
                alt={backgroundImages.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Gallery index Partial */}
      {galleryIndexSection && (
        <div
          className={`partial_gallery_index ${indexCssClasses}`}
          data-s3-partial=""
          style={{
            backgroundColor: indexData?.backgroundColor || undefined,
            color: indexData?.textColor || undefined,
          }}
        >
          <div className="row">
            {categoryGroups.map((category: any, index: number) => (
              <div
                key={index}
                className={`group ${category.categorySlug}`}
                style={{
                  backgroundColor: category.backgroundColor || undefined,
                  borderColor: category.borderColor || undefined,
                  padding: category.padding || undefined,
                  margin: category.margin || undefined,
                }}
              >
                <h2
                  style={{
                    color: category.headingColor || undefined,
                  }}
                >
                  <a
                    href={category.url}
                    style={{
                      color: category.linkColor || undefined,
                    }}
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
                  </a>
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Age Restriction Popup */}
      {ageRestrictionSection && ageEnabled && (
        <div
          className={`age-restricted ${ageIsHidden ? "hidden" : ""}`}
          style={{
            backgroundColor: ageData?.overlayBackgroundColor || undefined,
          }}
        >
          <div
            className="popup"
            style={{
              backgroundColor: ageData?.popupBackgroundColor || undefined,
              borderColor: ageData?.popupBorderColor || undefined,
              borderRadius: ageData?.popupBorderRadius || undefined,
            }}
          >
            <div
              className="inner"
              style={{
                padding: ageData?.popupPadding || undefined,
                color: ageData?.popupTextColor || undefined,
              }}
            >
              <h3
                style={{
                  color: ageData?.headingColor || undefined,
                  fontSize: ageData?.headingFontSize || undefined,
                }}
              >
                {ageHeading}
              </h3>
              <p
                style={{
                  fontSize: ageData?.messageFontSize || undefined,
                }}
              >
                {ageMessage}
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: ageData?.buttonBackgroundColor || undefined,
                  color: ageData?.buttonTextColor || undefined,
                  borderColor: ageData?.buttonBorderColor || undefined,
                  borderRadius: ageData?.buttonBorderRadius || undefined,
                  padding: ageData?.buttonPadding || undefined,
                }}
                onMouseEnter={(e) => {
                  if (ageData?.buttonHoverBackgroundColor) {
                    e.currentTarget.style.backgroundColor =
                      ageData.buttonHoverBackgroundColor;
                  }
                  if (ageData?.buttonHoverTextColor) {
                    e.currentTarget.style.color = ageData.buttonHoverTextColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (ageData?.buttonBackgroundColor) {
                    e.currentTarget.style.backgroundColor =
                      ageData.buttonBackgroundColor;
                  }
                  if (ageData?.buttonTextColor) {
                    e.currentTarget.style.color = ageData.buttonTextColor;
                  }
                }}
              >
                {ageButtonText}
              </button>
            </div>
            {showCloseButton && (
              <span
                className="close"
                style={{
                  color: ageData?.closeButtonColor || undefined,
                  fontSize: ageData?.closeButtonSize || undefined,
                }}
                onMouseEnter={(e) => {
                  if (ageData?.closeButtonHoverColor) {
                    e.currentTarget.style.color = ageData.closeButtonHoverColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (ageData?.closeButtonColor) {
                    e.currentTarget.style.color = ageData.closeButtonColor;
                  }
                }}
              ></span>
            )}
          </div>
          <div className="overlay"></div>
        </div>
      )}
    </main>
  );
};

export default SurgicalGallery;