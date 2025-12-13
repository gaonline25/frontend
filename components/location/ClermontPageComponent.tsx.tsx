"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/locations/fetchClermontPageData";

interface ClermontPageComponentProps {
  data: any;
}

const ClermontPageComponent: React.FC<ClermontPageComponentProps> = ({
  data,
}) => {
  if (!data) {
    return <div className="text-center p-4">No data available</div>;
  }

  const {
    heroSection,
    experienceSection,
    pathToBannerSection,
    personalizedCareSection,
    goldfingersWayBannerSection,
    nonSurgicalEnhancementsSection,
    goldfingersStoryBannerSection,
    refreshRenewRestoreSection,
    plasticSurgeryServicesSection,
    experienceGoldfingersBannerSection,
    whyChooseUsSection,
    sectionOrder,
    globalStyles,
    accessibilitySettings,
  } = data;

  const renderRichText = (content: any) => {
    if (!content) return null;
    const html = lexicalToHtml(content);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const renderSection = (sectionKey: string) => {
    switch (sectionKey) {
      case "hero":
        if (!heroSection?.show) return null;
        const heroBackground = getResponsiveImageUrls(
          heroSection?.backgroundImage
        );
        const heroMedia = getResponsiveImageUrls(heroSection?.mediaImage);

        return (
          <div
            className="mod_hero banner mobile-stack"
            data-s3-module
            key="hero"
          >
            <div className="wrapper">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackground.mobile}, ${heroBackground.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackground.tablet}, ${heroBackground.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${heroBackground.desktop}, ${heroBackground.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={heroBackground.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={heroBackground.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="1994"
                  height="1206"
                  alt={heroBackground.alt || "Background Texture"}
                  draggable="false"
                />
              </picture>
              <div className="row">
                <div className="inner">
                  {heroSection.breadcrumbs &&
                    heroSection.breadcrumbs.length > 0 && (
                      <ul className="partial_breadcrumb" data-s3-partial>
                        {heroSection.breadcrumbs.map(
                          (crumb: any, idx: number) => (
                            <li key={idx}>
                              <a
                                href={crumb.url}
                                role="link"
                                aria-label={crumb.ariaLabel}
                              >
                                {crumb.label}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  {heroSection.title && (
                    <h1
                      style={{
                        color: heroSection.titleColor || undefined,
                        fontSize: heroSection.titleFontSize || undefined,
                      }}
                    >
                      {renderRichText(heroSection.title)}
                    </h1>
                  )}
                  {heroSection.description && (
                    <div
                      className="text"
                      style={{
                        color: heroSection.descriptionColor || undefined,
                      }}
                    >
                      {renderRichText(heroSection.description)}
                    </div>
                  )}
                  <p>
                    <a
                      className="btn white"
                      href="https://www.vagaro.com/goldfingersaestheticsclermont"
                      role="button"
                    >
                      Book now
                    </a>
                  </p>
                </div>
              </div>
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
                    data-lazyload-srcset={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
                    data-lazyload-srcset={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
                    data-lazyload-srcset={`${heroMedia.desktop}, ${heroMedia.desktop} 2x`}
                  />
                  <source
                    srcSet={heroMedia.large}
                    data-lazyload-srcset={heroMedia.large}
                  />
                  <img
                    src={heroMedia.large}
                    width="1919"
                    height="1206"
                    alt={heroMedia.alt || "Park in Clermont, FL"}
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "experience":
        if (!experienceSection?.show) return null;
        const expLogo = getImageUrl(experienceSection?.logo);

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="experience"
            style={{
              backgroundColor: experienceSection.backgroundColor || undefined,
              color: experienceSection.textColor || undefined,
              paddingTop: experienceSection.paddingTop || undefined,
              paddingBottom: experienceSection.paddingBottom || undefined,
            }}
          >
            <div className="row mb-30" data-api-key="content">
              {expLogo && (
                <picture className="logo">
                  <img
                    src={expLogo}
                    width={experienceSection.logoWidth || "58"}
                    height={experienceSection.logoHeight || "64"}
                    loading="lazy"
                    alt={
                      experienceSection.logoAlt || "Goldfingers aesthetic logo"
                    }
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="item">
                <div
                  className={`mw-80 text-${
                    experienceSection.contentAlignment || "center"
                  }`}
                >
                  {experienceSection.heading && (
                    <h2
                      style={{
                        color: experienceSection.headingColor || undefined,
                      }}
                    >
                      {renderRichText(experienceSection.heading)}
                    </h2>
                  )}
                  {renderRichText(experienceSection.content)}
                  {experienceSection.ctaButton?.show && (
                    <p>
                      <a
                        href={experienceSection.ctaButton.url || "#"}
                        className={
                          experienceSection.ctaButton.className || "btn"
                        }
                        style={{
                          backgroundColor:
                            experienceSection.ctaButton.backgroundColor ||
                            undefined,
                          color:
                            experienceSection.ctaButton.textColor || undefined,
                        }}
                      >
                        {experienceSection.ctaButton.text || "Learn More"}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case "pathToBanner":
        if (!pathToBannerSection?.show) return null;
        const pathBg = getResponsiveImageUrls(
          pathToBannerSection?.backgroundImage
        );

        return (
          <div
            className={`mod_banner ${
              pathToBannerSection.className || "dark hide-divider viewport"
            }`}
            data-s3-module
            key="pathToBanner"
            style={{
              backgroundColor: pathToBannerSection.backgroundColor || undefined,
              color: pathToBannerSection.textColor || undefined,
            }}
          >
            <div
              className={`row wow ${
                pathToBannerSection.animationClass || "fadeInUp"
              }`}
            >
              <div className="content" data-api-key="top_content">
                {pathToBannerSection.columns &&
                  Array.isArray(pathToBannerSection.columns) && (
                    <div className="columns-two vertical-align">
                      {pathToBannerSection.columns.map(
                        (col: any, idx: number) => (
                          <div key={idx}>
                            {col.heading && renderRichText(col.heading)}
                            {renderRichText(col.content)}
                            {col.bulletPoints &&
                              Array.isArray(col.bulletPoints) && (
                                <ul>
                                  {col.bulletPoints.map(
                                    (bullet: any, bIdx: number) => (
                                      <li key={bIdx}>{bullet.text}</li>
                                    )
                                  )}
                                </ul>
                              )}
                          </div>
                        )
                      )}
                    </div>
                  )}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${pathBg.mobile}, ${pathBg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${pathBg.tablet}, ${pathBg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${pathBg.desktop}, ${pathBg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={pathBg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={pathBg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={pathBg.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "personalizedCare":
        if (!personalizedCareSection?.show) return null;

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="personalizedCare"
            style={{
              backgroundColor:
                personalizedCareSection.backgroundColor || undefined,
              color: personalizedCareSection.textColor || undefined,
              paddingTop: personalizedCareSection.paddingTop || "30px",
              paddingBottom: personalizedCareSection.paddingBottom || "30px",
            }}
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                <h2
                  style={{
                    color: personalizedCareSection.headingColor || undefined,
                  }}
                >
                  {personalizedCareSection.heading ||
                    "Personalized care, beautiful results."}
                </h2>
                {renderRichText(personalizedCareSection.content)}
              </div>
            </div>
          </div>
        );

      case "goldfingersWayBanner":
        if (!goldfingersWayBannerSection?.show) return null;
        const gfWayBg = getResponsiveImageUrls(
          goldfingersWayBannerSection?.backgroundImage
        );

        return (
          <div
            className={`mod_banner ${
              goldfingersWayBannerSection.className ||
              "dark hide-divider viewport"
            }`}
            data-s3-module
            key="goldfingersWayBanner"
            style={{
              backgroundColor:
                goldfingersWayBannerSection.backgroundColor || undefined,
              color: goldfingersWayBannerSection.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2
                  style={{
                    color:
                      goldfingersWayBannerSection.headingColor || undefined,
                  }}
                >
                  {goldfingersWayBannerSection.heading || "The Goldfingers way"}
                </h2>
                {renderRichText(goldfingersWayBannerSection.description)}
                {goldfingersWayBannerSection.servicesList &&
                  Array.isArray(goldfingersWayBannerSection.servicesList) && (
                    <ul className="columns">
                      {goldfingersWayBannerSection.servicesList.map(
                        (service: any, idx: number) => (
                          <li key={idx}>
                            {service.serviceUrl ? (
                              <a href={service.serviceUrl}>
                                <strong>{service.serviceName}</strong>
                              </a>
                            ) : (
                              <strong>{service.serviceName}</strong>
                            )}
                            {service.description && `: ${service.description}`}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                {renderRichText(goldfingersWayBannerSection.closingContent)}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfWayBg.mobile}, ${gfWayBg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfWayBg.tablet}, ${gfWayBg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfWayBg.desktop}, ${gfWayBg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={gfWayBg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={gfWayBg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={gfWayBg.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "nonSurgicalEnhancements":
        if (!nonSurgicalEnhancementsSection?.show) return null;
        const nsMedia = getResponsiveImageUrls(
          nonSurgicalEnhancementsSection?.mediaImage
        );
        const mediaClass =
          nonSurgicalEnhancementsSection.mediaPosition === "left"
            ? "media-left"
            : "media-right";

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="nonSurgicalEnhancements"
            style={{
              backgroundColor:
                nonSurgicalEnhancementsSection.backgroundColor || undefined,
              color: nonSurgicalEnhancementsSection.textColor || undefined,
              paddingTop: nonSurgicalEnhancementsSection.paddingTop || "30px",
              paddingBottom:
                nonSurgicalEnhancementsSection.paddingBottom || "30px",
            }}
          >
            <div
              className={`row mt-30 mb-30 ${mediaClass}`}
              data-api-key="content"
            >
              <div className="item">
                <h2
                  style={{
                    color:
                      nonSurgicalEnhancementsSection.headingColor || undefined,
                  }}
                >
                  {nonSurgicalEnhancementsSection.heading ||
                    "Non-surgical enhancements"}
                </h2>
                {renderRichText(nonSurgicalEnhancementsSection.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${nsMedia.mobile}, ${nsMedia.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${nsMedia.tablet}, ${nsMedia.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={nsMedia.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={nsMedia.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={nsMedia.alt || "skyline"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "goldfingersStoryBanner":
        if (!goldfingersStoryBannerSection?.show) return null;
        const gfStoryBg = getResponsiveImageUrls(
          goldfingersStoryBannerSection?.backgroundImage
        );

        return (
          <div
            className={`mod_banner ${
              goldfingersStoryBannerSection.className ||
              "dark hide-divider viewport"
            }`}
            data-s3-module
            key="goldfingersStoryBanner"
            style={{
              backgroundColor:
                goldfingersStoryBannerSection.backgroundColor || undefined,
              color: goldfingersStoryBannerSection.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <h2
                  style={{
                    color:
                      goldfingersStoryBannerSection.headingColor || undefined,
                  }}
                >
                  {goldfingersStoryBannerSection.heading ||
                    "The Goldfingers Aesthetics story"}
                </h2>
                {renderRichText(goldfingersStoryBannerSection.content)}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfStoryBg.mobile}, ${gfStoryBg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfStoryBg.tablet}, ${gfStoryBg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${gfStoryBg.desktop}, ${gfStoryBg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={gfStoryBg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={gfStoryBg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={gfStoryBg.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "refreshRenewRestore":
        if (!refreshRenewRestoreSection?.show) return null;
        const refreshImg = getResponsiveImageUrls(
          refreshRenewRestoreSection?.image
        );

        return (
          <div
            className={`mod_half_image viewport half-image container wow ${
              refreshRenewRestoreSection.animationClass || "fadeInLeft"
            }`}
            data-s3-module
            key="refreshRenewRestore"
            style={{
              backgroundColor:
                refreshRenewRestoreSection.backgroundColor || undefined,
              color: refreshRenewRestoreSection.textColor || undefined,
            }}
          >
            <div className="row half-image-row mb-0">
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${refreshImg.mobile}, ${refreshImg.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${refreshImg.tablet}, ${refreshImg.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${refreshImg.desktop}, ${refreshImg.desktop} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={refreshImg.large}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={refreshImg.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="1832"
                    height="1824"
                    alt={refreshImg.alt || "crane on beach at sunset"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div
                className={`copy ${
                  refreshRenewRestoreSection.paddingClass || "padded"
                }`}
              >
                <div className="inner">
                  <div className="content" data-api-key="content">
                    <h2
                      style={{
                        color:
                          refreshRenewRestoreSection.headingColor || undefined,
                      }}
                    >
                      {refreshRenewRestoreSection.heading ||
                        "Refresh, renew, and restore"}
                    </h2>
                    {renderRichText(refreshRenewRestoreSection.content)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "plasticSurgeryServices":
        if (!plasticSurgeryServicesSection?.show) return null;
        const psMedia = getResponsiveImageUrls(
          plasticSurgeryServicesSection?.mediaImage
        );
        const psMediaClass =
          plasticSurgeryServicesSection.mediaPosition === "left"
            ? "media-left"
            : "media-right";

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="plasticSurgeryServices"
            style={{
              backgroundColor:
                plasticSurgeryServicesSection.backgroundColor || undefined,
              color: plasticSurgeryServicesSection.textColor || undefined,
              paddingBottom:
                plasticSurgeryServicesSection.paddingBottom || "30px",
            }}
          >
            <div className={`row mb-30 ${psMediaClass}`} data-api-key="content">
              <div className="item">
                {plasticSurgeryServicesSection.heading && (
                  <h2
                    style={{
                      color:
                        plasticSurgeryServicesSection.headingColor || undefined,
                    }}
                  >
                    {renderRichText(plasticSurgeryServicesSection.heading)}
                  </h2>
                )}
                {renderRichText(plasticSurgeryServicesSection.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${psMedia.mobile}, ${psMedia.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${psMedia.tablet}, ${psMedia.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={psMedia.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={psMedia.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={psMedia.alt || "Goldfingers medspa room"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "experienceGoldfingersBanner":
        if (!experienceGoldfingersBannerSection?.show) return null;
        const expGfBg = getResponsiveImageUrls(
          experienceGoldfingersBannerSection?.backgroundImage
        );

        return (
          <div
            className={`mod_banner ${
              experienceGoldfingersBannerSection.className ||
              "dark hide-divider viewport"
            }`}
            data-s3-module
            key="experienceGoldfingersBanner"
            style={{
              backgroundColor:
                experienceGoldfingersBannerSection.backgroundColor || undefined,
              color: experienceGoldfingersBannerSection.textColor || undefined,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                {experienceGoldfingersBannerSection.columns &&
                  Array.isArray(experienceGoldfingersBannerSection.columns) && (
                    <div className="columns-two vertical-align">
                      {experienceGoldfingersBannerSection.columns.map(
                        (col: any, idx: number) => (
                          <div key={idx}>
                            {col.heading && <h2>{col.heading}</h2>}
                            {renderRichText(col.content)}
                          </div>
                        )
                      )}
                    </div>
                  )}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${expGfBg.mobile}, ${expGfBg.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${expGfBg.tablet}, ${expGfBg.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${expGfBg.desktop}, ${expGfBg.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={expGfBg.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={expGfBg.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={expGfBg.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "whyChooseUs":
        if (!whyChooseUsSection?.show) return null;

        return (
          <div
            className="mod_columns_two viewport container"
            data-s3-module
            key="whyChooseUs"
            style={{
              backgroundColor: whyChooseUsSection.backgroundColor || undefined,
              color: whyChooseUsSection.textColor || undefined,
            }}
          >
            <div className="row">
              <h2
                data-api-key="title"
                style={{
                  color: whyChooseUsSection.headingColor || undefined,
                }}
              >
                {whyChooseUsSection.heading || "Why choose us?"}
              </h2>
              {whyChooseUsSection.columns &&
                Array.isArray(whyChooseUsSection.columns) && (
                  <div className="content">
                    {whyChooseUsSection.columns.map((col: any, idx: number) => (
                      <div
                        key={idx}
                        className={`item wow ${
                          col.animationClass || "fadeInLeft"
                        }`}
                        data-api-key={
                          idx === 0 ? "content_left" : "content_right"
                        }
                      >
                        {renderRichText(col.content)}
                      </div>
                    ))}
                  </div>
                )}
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
        fontFamily: globalStyles?.fontFamily || undefined,
        color: globalStyles?.textColor || undefined,
      }}
    >
      {accessibilitySettings?.skipToContent && (
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
      )}
      {sectionOrder && Array.isArray(sectionOrder) ? (
        sectionOrder.map((section: any, idx: number) =>
          renderSection(section.section)
        )
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("experience")}
          {renderSection("pathToBanner")}
          {renderSection("personalizedCare")}
          {renderSection("goldfingersWayBanner")}
          {renderSection("nonSurgicalEnhancements")}
          {renderSection("goldfingersStoryBanner")}
          {renderSection("refreshRenewRestore")}
          {renderSection("plasticSurgeryServices")}
          {renderSection("experienceGoldfingersBanner")}
          {renderSection("whyChooseUs")}
        </>
      )}
    </main>
  );
};

export default ClermontPageComponent;
