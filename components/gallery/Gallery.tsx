// import React from "react";

// const Gallery: React.FC = () => {
//   return (
//     <main id="main">
//       {/* Gallery Hero Partial */}
//       <div className="partial_gallery_hero banner bg" data-s3-partial>
//         <div className="row">
//           <div className="inner">
//             <h1>Gallery</h1>
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
//       <div className="partial_gallery_index container" data-s3-partial>
//         <div className="row">
//           <div className="group non-surgical">
//             <h2>
//               <span>Non-Surgical</span>
//             </h2>
//             <div className="links">
//               <ul>
//                 <li>
//                   <Link href="/gallery/non-surgical/lip-fillers/">Lip Fillers</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/botox/">BOTOX</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/juvederm/">JUVÉDERM</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/kybella/">KYBELLA</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/micro-channeling/">
//                     Micro-Channeling
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/restylane-r/">Restylane</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/skinmedica/">SkinMedica</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/dermal-filler/">
//                     Dermal Filler
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/cheek-contour/">
//                     Cheek Contour
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/liquid-chin-and-jaw-contouring/">
//                     Liquid Chin & Jaw Contouring
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/liquid-rhinoplasty/">
//                     Liquid Rhinoplasty
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/marionette-lines/">
//                     Marionette Lines
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/liquid-facelift/">
//                     Liquid (Non-Surgical) Facelift
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/weight-loss/">Weight Loss</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/non-surgical/lash-extensions/">
//                     Lash Extensions
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="group surgical">
//             <h2>
//               <span>Surgical</span>
//             </h2>
//             <div className="links">
//               <ul>
//                 <li>
//                   <Link href="/gallery/surgical/tummy-tuck/">Tummy Tuck</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/surgical/mommy-makeover/">Mommy Makeover</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/surgical/liposuction/">Liposuction</Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/surgical/breast-augmentation/">
//                     Breast Augmentation
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gallery/surgical/breast-lift/">Breast Lift</Link>
//                 </li>
//               </ul>
//             </div>
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

// export default Gallery;

// "use client";


import React from "react";
import {
  fetchGalleryData,
  getResponsiveImageUrls,
  getSectionByType,
  renderRichText,
} from "@/lib/api/Gallery/Gallery";
import Link from "next/link";

const Gallery: React.FC = async () => {
  const galleryData = await fetchGalleryData();

  if (!galleryData) {
    return <div>Loading...</div>;
  }

  const sections = galleryData.sections || [];
  const heroSection = getSectionByType(sections, "galleryHero");
  const indexSection = getSectionByType(sections, "galleryIndex");
  const ageRestrictionSection = getSectionByType(sections, "ageRestriction");

  // Get hero data
  const heroData = heroSection?.galleryHeroSection || {};
  const heroBackground = getResponsiveImageUrls(heroData.backgroundImage);
  const heroBreadcrumbs = heroData.breadcrumbs || [];
  const heroTitle = heroData.title || "Gallery";
  const heroClasses = heroData.cssClasses || "banner bg";

  // Get index data
  const indexData = indexSection?.galleryIndexSection || {};
  const indexGroups = indexData.groups || [];
  const indexClasses = indexData.cssClasses || "";
  const containerWidth = indexData.containerWidth || "container";

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
  if (heroData.titleColor) heroStyle.color = heroData.titleColor;

  const indexStyle: React.CSSProperties = {};
  if (indexData.backgroundColor)
    indexStyle.backgroundColor = indexData.backgroundColor;
  if (indexData.textColor) indexStyle.color = indexData.textColor;

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
      {indexSection && (
        <div
          className={`partial_gallery_index ${containerWidth} ${indexClasses}`}
          data-s3-partial
          style={indexStyle}
        >
          <div className="row">
            {indexGroups.map((group: any, groupIndex: number) => {
              const groupStyle: React.CSSProperties = {};
              if (group.backgroundColor)
                groupStyle.backgroundColor = group.backgroundColor;

              const headingStyle: React.CSSProperties = {};
              if (group.headingColor) headingStyle.color = group.headingColor;

              return (
                <div
                  key={groupIndex}
                  className={`group ${group.groupSlug}`}
                  style={groupStyle}
                >
                  <h2 style={headingStyle}>
                    <span>{group.groupName}</span>
                  </h2>
                  <div className="links">
                    <ul>
                      {group.links?.map((link: any, linkIndex: number) => {
                        const linkStyle: React.CSSProperties = {};
                        if (link.linkColor) linkStyle.color = link.linkColor;

                        return (
                          <li key={linkIndex}>
                            <Link
                              href={link.url}
                              style={linkStyle}
                              // onMouseEnter={(e) => {
                              //   if (link.hoverColor) {
                              //     e.currentTarget.style.color = link.hoverColor;
                              //   }
                              // }}
                              // onMouseLeave={(e) => {
                              //   if (link.linkColor) {
                              //     e.currentTarget.style.color = link.linkColor;
                              //   }
                              // }}
                            >
                              {link.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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

export default Gallery;