"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/locations/fetchLakeMaryPageComponent";

interface LakeMaryContentProps {
  data: any;
}

const LakeMaryContent: React.FC<LakeMaryContentProps> = ({ data }) => {
  if (!data) {
    console.error("No data fetched for Lake Mary page");
    return (
      <div className="text-center p-4">Error: Unable to load page content</div>
    );
  }

  const {
    heroSection,
    introColumnSection,
    boxGridSection,
    columnMediaSection,
    bannerSection1,
    twoColumnSection,
    halfImageSection,
    storyColumnSection,
    bannerSection2,
    columnMediaSection2,
    ctaSection,
    storyColumnSection2,
    bannerSection3,
    finalStorySection,
    sectionOrder,
    globalStyles,
  } = data;

  const renderRichText = (content) => {
    if (!content) {
      console.log("renderRichText: Content is null or undefined");
      return null;
    }
    if (typeof content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    if (content && typeof content === "object" && content.root) {
      try {
        const html = lexicalToHtml(content);
        if (!html) {
          console.warn(
            "renderRichText: Empty HTML output for content",
            content
          );
        }
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      } catch (error) {
        console.error(
          "renderRichText: Error processing Lexical JSON",
          error,
          content
        );
        return null;
      }
    }
    console.warn("renderRichText: Unhandled content type", content);
    return null;
  };

  const renderSection = (sectionKey) => {
    console.log(`Rendering section: ${sectionKey}`);
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
            <div
              className="wrapper"
              style={{
                backgroundColor: heroSection.backgroundColor || undefined,
              }}
            >
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
                  {heroSection.breadcrumbs?.length > 0 && (
                    <ul className="partial_breadcrumb" data-s3-partial>
                      {heroSection.breadcrumbs.map((crumb, idx) => (
                        <li key={idx}>
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
                  )}
                  {heroSection.title && (
                    <h1 style={{ color: heroSection.titleColor || undefined }}>
                      {heroSection.title.smallText && (
                        <span className="small">
                          {heroSection.title.smallText}
                        </span>
                      )}{" "}
                      {heroSection.title.mainText}
                    </h1>
                  )}
                  {heroSection.description && (
                    <div
                      className="text"
                      style={{
                        color: heroSection.descriptionColor || undefined,
                      }}
                    >
                      <p>{heroSection.description}</p>
                    </div>
                  )}

                  <p>
                    <a
                      className="btn white"
                      href="https://www.vagaro.com/goldfingersaestheticslakemary"
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
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${heroMedia.mobile}, ${heroMedia.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${heroMedia.tablet}, ${heroMedia.tablet} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={heroMedia.desktop}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={heroMedia.desktop}
                    loading="lazy"
                    data-lazyload="img"
                    width="1000"
                    height="662"
                    alt={heroMedia.alt || "sunset over scenic swampland"}
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "introColumn":
        if (!introColumnSection?.show) return null;
        const introLogo = getImageUrl(introColumnSection?.logo);

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="introColumn"
            style={{
              backgroundColor: introColumnSection.backgroundColor || undefined,
            }}
          >
            <div
              className={`row ${
                introColumnSection.paddingBottom ? "pb-0" : "mb-30"
              }`}
              data-api-key="content"
            >
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width={introColumnSection.logo?.width || "58"}
                    height={introColumnSection.logo?.height || "64"}
                    loading="lazy"
                    alt={
                      introColumnSection.logoAlt || "Goldfingers aesthetic logo"
                    }
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="item">
                <div
                  className={`${introColumnSection.maxWidth || "mw-80"} ${
                    introColumnSection.textAlign || "text-center"
                  }`}
                  style={{ color: introColumnSection.textColor || undefined }}
                >
                  {introColumnSection.heading && (
                    <h2
                      style={{
                        color: introColumnSection.headingColor || undefined,
                      }}
                    >
                      {introColumnSection.heading}
                    </h2>
                  )}
                  {renderRichText(introColumnSection.content)}
                  {introColumnSection.ctaButton?.show && (
                    <p>
                      <a
                        href={introColumnSection.ctaButton.url || "#"}
                        className={
                          introColumnSection.ctaButton.className || "btn"
                        }
                      >
                        {introColumnSection.ctaButton.text || "Learn More"}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case "boxGrid":
        if (!boxGridSection?.show) return null;
        const boxBg = getResponsiveImageUrls(boxGridSection?.backgroundImage);

        return (
          <div
            className={`mod_box_grid viewport container ${
              boxGridSection.layoutOption || "option-1"
            } ${boxGridSection.noBg ? "no-bg" : ""} ${
              boxGridSection.wider ? "wider" : ""
            }`}
            data-s3-module
            key="boxGrid"
            style={{
              backgroundColor: boxGridSection.backgroundColor || undefined,
            }}
          >
            <div className="row">
              <div className={`boxes ${boxGridSection.wider ? "wider" : ""}`}>
                {boxGridSection.boxes?.map((box, idx) => (
                  <div
                    key={idx}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {box.heading && (
                      <h2 style={{ color: box.headingColor || undefined }}>
                        {box.heading}
                      </h2>
                    )}
                    {renderRichText(box.content)}
                  </div>
                ))}
              </div>
            </div>
            {boxBg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg.mobile}, ${boxBg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg.tablet}, ${boxBg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg.desktop}, ${boxBg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={boxBg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={boxBg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="979"
                  alt={boxBg.alt || "Background media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "columnMedia1":
        if (!columnMediaSection?.show) return null;
        const columnMedia1Img = getResponsiveImageUrls(
          columnMediaSection?.mediaImage
        );

        return (
          <div
            className={`mod_column viewport container has-media`}
            data-s3-module
            key="columnMedia1"
            style={{
              backgroundColor: columnMediaSection.backgroundColor || undefined,
            }}
          >
            <div
              className={`row ${columnMediaSection.paddingTop ? "pt-0" : ""} ${
                columnMediaSection.marginBottom || "mb-30"
              } ${columnMediaSection.mediaPosition || "media-left"}`}
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: columnMediaSection.textColor || undefined }}
              >
                {columnMediaSection.heading && (
                  <h2
                    style={{
                      color: columnMediaSection.headingColor || undefined,
                    }}
                  >
                    {columnMediaSection.heading}
                  </h2>
                )}
                {renderRichText(columnMediaSection.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${columnMedia1Img.mobile}, ${columnMedia1Img.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${columnMedia1Img.tablet}, ${columnMedia1Img.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={columnMedia1Img.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={columnMedia1Img.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={columnMedia1Img.alt || "white sand beach"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "banner1":
        if (!bannerSection1?.show) return null;
        const banner1Bg = getResponsiveImageUrls(
          bannerSection1?.backgroundImage
        );

        return (
          <div
            className={`mod_banner ${bannerSection1.darkMode ? "dark" : ""} ${
              bannerSection1.hideDivider ? "hide-divider" : ""
            } viewport ${bannerSection1.backgroundClass || "background-2"}`}
            data-s3-module
            key="banner1"
            style={{
              backgroundColor: bannerSection1.backgroundColor || undefined,
            }}
          >
            <div
              className={`row wow ${
                bannerSection1.animationClass || "fadeInUp"
              }`}
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection1.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection1.heading && (
                  <h2
                    style={{ color: bannerSection1.headingColor || undefined }}
                  >
                    {bannerSection1.heading}
                  </h2>
                )}
                {renderRichText(bannerSection1.content)}
              </div>
            </div>
            {banner1Bg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner1Bg.mobile}, ${banner1Bg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner1Bg.tablet}, ${banner1Bg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner1Bg.desktop}, ${banner1Bg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={banner1Bg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={banner1Bg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="802"
                  alt={banner1Bg.alt || "Banner media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "twoColumn":
        if (!twoColumnSection?.show) return null;

        return (
          <div
            className={`mod_columns_two viewport container`}
            data-s3-module
            key="twoColumn"
            style={{
              backgroundColor: twoColumnSection.backgroundColor || undefined,
            }}
          >
            <div className={`row ${twoColumnSection.paddingBottom || "pb-20"}`}>
              <div
                className={`content ${
                  twoColumnSection.verticalAlign ? "vertical-align" : ""
                }`}
                style={{ color: twoColumnSection.textColor || undefined }}
              >
                {twoColumnSection.columns?.map((col, idx) => (
                  <div
                    key={idx}
                    className={`item wow ${
                      col.animationClass ||
                      (idx === 0 ? "fadeInLeft" : "fadeInRight")
                    }`}
                    data-api-key={`content_${idx === 0 ? "left" : "right"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {renderRichText(col.content)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "halfImage":
        if (!halfImageSection?.show) return null;
        const halfImg = getResponsiveImageUrls(halfImageSection?.image);

        return (
          <div
            className={`mod_half_image viewport half-image container wow ${
              halfImageSection.animationClass || "fadeInLeft"
            }`}
            data-s3-module
            key="halfImage"
            style={{
              backgroundColor: halfImageSection.backgroundColor || undefined,
              visibility: "hidden",
              animationName: "none",
            }}
          >
            <div
              className={`row half-image-row ${
                halfImageSection.marginTop || "mt-0"
              } ${halfImageSection.marginBottom || "mb-0"} ${
                halfImageSection.flipped ? "flipped" : ""
              }`}
            >
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg.mobile}, ${halfImg.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg.tablet}, ${halfImg.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg.desktop}, ${halfImg.desktop} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={halfImg.large}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={halfImg.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="1832"
                    height="1824"
                    alt={halfImg.alt || "Geese over swampland at sunset"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div
                className={`copy ${
                  halfImageSection.paddedContent ? "padded2" : "padded"
                }`}
              >
                <div className="inner">
                  <div
                    className="content"
                    data-api-key="content"
                    style={{ color: halfImageSection.textColor || undefined }}
                  >
                    {halfImageSection.heading && (
                      <h2
                        style={{
                          color: halfImageSection.headingColor || undefined,
                        }}
                      >
                        {halfImageSection.heading}
                      </h2>
                    )}
                    {renderRichText(halfImageSection.content)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "story1":
        if (!storyColumnSection?.show) return null;

        return (
          <div
            className={`mod_column viewport container`}
            data-s3-module
            key="story1"
            style={{
              backgroundColor: storyColumnSection.backgroundColor || undefined,
            }}
          >
            <div
              className={`row ${storyColumnSection.marginBottom || "mb-30"}`}
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: storyColumnSection.textColor || undefined }}
              >
                <div
                  className={`${
                    storyColumnSection.twoColumns ? "columns-two" : ""
                  } ${
                    storyColumnSection.verticalAlign ? "vertical-align" : ""
                  }`}
                >
                  <div>{renderRichText(storyColumnSection.heading)}</div>
                  {renderRichText(storyColumnSection.content)}
                </div>
              </div>
            </div>
          </div>
        );

      case "banner2":
        if (!bannerSection2?.show) return null;
        const banner2Bg = getResponsiveImageUrls(
          bannerSection2?.backgroundImage
        );

        return (
          <div
            className={`mod_banner ${bannerSection2.darkMode ? "dark" : ""} ${
              bannerSection2.hideDivider ? "hide-divider" : ""
            } viewport ${bannerSection2.backgroundClass || "background-4"}`}
            data-s3-module
            key="banner2"
            style={{
              backgroundColor: bannerSection2.backgroundColor || undefined,
            }}
          >
            <div
              className={`row wow ${
                bannerSection2.animationClass || "fadeInUp"
              }`}
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection2.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection2.heading && (
                  <h2
                    style={{ color: bannerSection2.headingColor || undefined }}
                  >
                    {bannerSection2.heading}
                  </h2>
                )}
                {renderRichText(bannerSection2.content)}
                {bannerSection2.servicesList?.length > 0 && (
                  <ul className={bannerSection2.listColumns ? "columns" : ""}>
                    {bannerSection2.servicesList.map((service, idx) => (
                      <li key={idx}>
                        {service.serviceUrl ? (
                          <a href={service.serviceUrl}>
                            {service.isBold ? (
                              <strong>{service.serviceName}</strong>
                            ) : (
                              service.serviceName
                            )}
                          </a>
                        ) : service.isBold ? (
                          <strong>{service.serviceName}</strong>
                        ) : (
                          service.serviceName
                        )}
                        {service.description && `: ${service.description}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {banner2Bg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner2Bg.mobile}, ${banner2Bg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner2Bg.tablet}, ${banner2Bg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner2Bg.desktop}, ${banner2Bg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={banner2Bg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={banner2Bg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="802"
                  alt={banner2Bg.alt || "Banner media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "columnMedia2":
        if (!columnMediaSection2?.show) return null;
        const columnMedia2Img = getResponsiveImageUrls(
          columnMediaSection2?.mediaImage
        );

        return (
          <div
            className={`mod_column viewport container has-media`}
            data-s3-module
            key="columnMedia2"
            style={{
              backgroundColor: columnMediaSection2.backgroundColor || undefined,
            }}
          >
            <div
              className={`row ${columnMediaSection2.marginTop || "mt-30"} ${
                columnMediaSection2.marginBottom || "mb-30"
              } ${columnMediaSection2.mediaPosition || "media-right"}`}
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: columnMediaSection2.textColor || undefined }}
              >
                {renderRichText(columnMediaSection2.heading)}
                {renderRichText(columnMediaSection2.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${columnMedia2Img.mobile}, ${columnMedia2Img.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${columnMedia2Img.tablet}, ${columnMedia2Img.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={columnMedia2Img.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={columnMedia2Img.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={columnMedia2Img.alt || "sconce light fixture"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "cta":
        if (!ctaSection?.show) return null;

        return (
          <div
            className={`mod_cta_general viewport container cta ${
              ctaSection.thin ? "thin" : ""
            } wow ${ctaSection.animationClass || "fadeInRight"} ${
              ctaSection.marginTop || "mt-0"
            } ${ctaSection.marginBottom || "mb-0"} ${
              ctaSection.backgroundClass || "background-3"
            }`}
            data-s3-module
            key="cta"
            style={{
              backgroundColor: ctaSection.backgroundColor || undefined,
              visibility: "hidden",
              animationName: "none",
            }}
          >
            <div className="row">
              <div className="text">
                {ctaSection.heading && (
                  <h2 style={{ color: ctaSection.headingColor || undefined }}>
                    {ctaSection.headingLink ? (
                      <a href={ctaSection.headingLink}>{ctaSection.heading}</a>
                    ) : (
                      ctaSection.heading
                    )}
                  </h2>
                )}
                {ctaSection.ctaButton && (
                  <a
                    href={ctaSection.ctaButton.url || "#"}
                    className={ctaSection.ctaButton.className || "btn white"}
                  >
                    {ctaSection.ctaButton.text || "Book an Appointment"}
                  </a>
                )}
              </div>
              <div className="media" />
            </div>
          </div>
        );

      case "story2":
        if (!storyColumnSection2?.show) return null;

        return (
          <div
            className={`mod_column viewport container`}
            data-s3-module
            key="story2"
            style={{
              backgroundColor: storyColumnSection2.backgroundColor || undefined,
            }}
          >
            <div
              className={`row ${storyColumnSection2.marginTop || "mt-30"} ${
                storyColumnSection2.marginBottom || "mb-30"
              }`}
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: storyColumnSection2.textColor || undefined }}
              >
                {storyColumnSection2.heading && (
                  <h2
                    style={{
                      color: storyColumnSection2.headingColor || undefined,
                    }}
                  >
                    {storyColumnSection2.heading}
                  </h2>
                )}
                {renderRichText(storyColumnSection2.content)}
              </div>
            </div>
          </div>
        );

      case "banner3":
        if (!bannerSection3?.show) return null;
        const banner3Bg = getResponsiveImageUrls(
          bannerSection3?.backgroundImage
        );

        return (
          <div
            className={`mod_banner ${bannerSection3.darkMode ? "dark" : ""} ${
              bannerSection3.hideDivider ? "hide-divider" : ""
            } viewport ${bannerSection3.backgroundClass || "background-14"}`}
            data-s3-module
            key="banner3"
            style={{
              backgroundColor: bannerSection3.backgroundColor || undefined,
            }}
          >
            <div
              className={`row wow ${
                bannerSection3.animationClass || "fadeInUp"
              }`}
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection3.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection3.heading && (
                  <h2
                    style={{ color: bannerSection3.headingColor || undefined }}
                  >
                    {bannerSection3.heading}
                  </h2>
                )}
                {renderRichText(bannerSection3.content)}
                {bannerSection3.servicesList?.length > 0 && (
                  <ul className={bannerSection3.listColumns ? "columns" : ""}>
                    {bannerSection3.servicesList.map((service, idx) => (
                      <li key={idx}>
                        {service.serviceUrl ? (
                          <a href={service.serviceUrl}>
                            {service.isBold ? (
                              <strong>{service.serviceName}</strong>
                            ) : (
                              service.serviceName
                            )}
                          </a>
                        ) : service.isBold ? (
                          <strong>{service.serviceName}</strong>
                        ) : (
                          service.serviceName
                        )}
                        {service.description && `: ${service.description}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {banner3Bg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner3Bg.mobile}, ${banner3Bg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner3Bg.tablet}, ${banner3Bg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${banner3Bg.desktop}, ${banner3Bg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={banner3Bg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={banner3Bg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="802"
                  alt={banner3Bg.alt || "Banner media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "finalStory":
        if (!finalStorySection?.show) return null;

        return (
          <div
            className={`mod_column viewport container`}
            data-s3-module
            key="finalStory"
            style={{
              backgroundColor: finalStorySection.backgroundColor || undefined,
            }}
          >
            <div
              className={`row ${finalStorySection.marginTop || "mt-30"}`}
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: finalStorySection.textColor || undefined }}
              >
                {finalStorySection.heading && (
                  <h2
                    style={{
                      color: finalStorySection.headingColor || undefined,
                    }}
                  >
                    {finalStorySection.heading}
                  </h2>
                )}
                {renderRichText(finalStorySection.content)}
              </div>
            </div>
          </div>
        );

      default:
        console.warn(`Unknown section: ${sectionKey}`);
        return null;
    }
  };

  return (
    <main id="main" style={{ color: globalStyles?.textColor || undefined }}>
      {sectionOrder && Array.isArray(sectionOrder) ? (
        sectionOrder.map((section, idx) => renderSection(section.section))
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("introColumn")}
          {renderSection("boxGrid")}
          {renderSection("columnMedia1")}
          {renderSection("banner1")}
          {renderSection("twoColumn")}
          {renderSection("halfImage")}
          {renderSection("story1")}
          {renderSection("banner2")}
          {renderSection("columnMedia2")}
          {renderSection("cta")}
          {renderSection("story2")}
          {renderSection("banner3")}
          {renderSection("finalStory")}
        </>
      )}
    </main>
  );
};

export default LakeMaryContent;
