"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/locations/fetchDowntownTampaPageData";

interface DowntownTampaPageComponentProps {
  data: any;
}

const DowntownTampaPageComponent: React.FC<DowntownTampaPageComponentProps> = ({
  data,
}) => {
  if (!data) {
    console.error("No data fetched for Downtown Tampa page");
    return (
      <div className="text-center p-4">Error: Unable to load page content</div>
    );
  }

  const {
    heroSection,
    introColumnSection,
    boxGridSection,
    dividerSection1,
    bannerSection1,
    servicesSection,
    halfImageSection,
    storySection,
    bannerSection2,
    twoColumnSection,
    ctaSection,
    finalColumnMedia,
    sectionOrder,
    globalStyles,
  } = data;

  const renderRichText = (content: any) => {
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

  const renderSection = (sectionKey: string) => {
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
                    <h1 style={{ color: heroSection.titleColor || undefined }}>
                      {renderRichText(heroSection.title)}
                    </h1>
                  )}
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
                    alt={heroMedia.alt || "south tampa"}
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
            <div className="row mb-30" data-api-key="content">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width="58"
                    height="64"
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
                  className="mw-80 text-center"
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
            className="mod_box_grid viewport container option-2 default bkg-image wider"
            data-s3-module
            key="boxGrid"
            style={{
              backgroundColor: boxGridSection.backgroundColor || undefined,
            }}
          >
            <div className="row">
              <div
                className="content-before"
                style={{ color: boxGridSection.textColor || undefined }}
              >
                {renderRichText(boxGridSection.contentBeforeHeading)}
                {renderRichText(boxGridSection.contentBeforeText)}
              </div>
              <div className="boxes wider">
                {boxGridSection.boxes &&
                  Array.isArray(boxGridSection.boxes) &&
                  boxGridSection.boxes.map((box: any, idx: number) => (
                    <div key={idx} className="box wow fadeInUp">
                      <h3>{box.heading}</h3>
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

      case "divider1":
        if (!dividerSection1?.show) return null;
        const dividerImage = getImageUrl(dividerSection1?.image);

        return (
          <div className="mod_divider container" data-s3-module key="divider1">
            <div className="row">
              <div className="media">
                {dividerImage && (
                  <picture>
                    <img
                      src={dividerImage}
                      width="55"
                      height="61"
                      loading="lazy"
                      alt={dividerSection1.imageAlt || "Logo media"}
                      draggable="false"
                    />
                  </picture>
                )}
              </div>
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
            className="mod_banner dark hide-divider viewport background-3"
            data-s3-module
            key="banner1"
            style={{
              backgroundColor: bannerSection1.backgroundColor || undefined,
            }}
          >
            <div
              className="row wow fadeInUp"
              style={{ color: bannerSection1.textColor || undefined }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection1.columns &&
                  Array.isArray(bannerSection1.columns) && (
                    <div className="columns-two vertical-align">
                      {bannerSection1.columns.map((col: any, idx: number) => (
                        <div key={idx}>{renderRichText(col.content)}</div>
                      ))}
                    </div>
                  )}
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

      case "services":
        if (!servicesSection?.show) return null;

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="services"
            style={{
              backgroundColor: servicesSection.backgroundColor || undefined,
            }}
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div
                className="item"
                style={{ color: servicesSection.textColor || undefined }}
              >
                {servicesSection.heading && (
                  <h2
                    className="text-center"
                    style={{ color: servicesSection.headingColor || undefined }}
                  >
                    {servicesSection.heading}
                  </h2>
                )}
                {renderRichText(servicesSection.introContent)}
                {servicesSection.servicesList &&
                  Array.isArray(servicesSection.servicesList) && (
                    <ul className="columns">
                      {servicesSection.servicesList.map(
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
              </div>
            </div>
          </div>
        );

      case "halfImage":
        if (!halfImageSection?.show) return null;
        const halfImg = getResponsiveImageUrls(halfImageSection?.image);

        return (
          <div
            className="mod_half_image viewport half-image container wow fadeInLeft background-navy"
            data-s3-module
            key="halfImage"
            style={{
              backgroundColor: halfImageSection.backgroundColor || undefined,
            }}
          >
            <div
              className={`row half-image-row ${halfImageSection.flipped ? "flipped" : ""} mt-0 mb-0`}
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
                    alt={halfImg.alt || "Tampa skyline"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded">
                <div className="inner">
                  <div
                    className="content"
                    data-api-key="content"
                    style={{ color: halfImageSection.textColor || undefined }}
                  >
                    {halfImageSection.heading && (
                      <h2>{halfImageSection.heading}</h2>
                    )}
                    {renderRichText(halfImageSection.content)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "story":
        if (!storySection?.show) return null;

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="story"
            style={{
              backgroundColor: storySection.backgroundColor || undefined,
            }}
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div
                className="item"
                style={{ color: storySection.textColor || undefined }}
              >
                {storySection.heading && <h2>{storySection.heading}</h2>}
                {renderRichText(storySection.content)}
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
            className="mod_banner dark hide-divider viewport background-3"
            data-s3-module
            key="banner2"
            style={{
              backgroundColor: bannerSection2.backgroundColor || undefined,
            }}
          >
            <div
              className="row wow fadeInUp"
              style={{ color: bannerSection2.textColor || undefined }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection2.columns &&
                  Array.isArray(bannerSection2.columns) && (
                    <div className="columns-two vertical-align">
                      {bannerSection2.columns.map((col: any, idx: number) => (
                        <div key={idx}>{renderRichText(col.content)}</div>
                      ))}
                    </div>
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

      case "twoColumn":
        if (!twoColumnSection?.show) return null;

        return (
          <div
            className="mod_columns_two viewport container"
            data-s3-module
            key="twoColumn"
            style={{
              backgroundColor: twoColumnSection.backgroundColor || undefined,
            }}
          >
            <div className="row pb-0">
              <div
                className="content vertical-align"
                style={{ color: twoColumnSection.textColor || undefined }}
              >
                {twoColumnSection.columns &&
                  Array.isArray(twoColumnSection.columns) && (
                    <>
                      <div
                        className={`item wow ${twoColumnSection.columns[0]?.animationClass || "fadeInLeft"}`}
                        data-api-key="content_left"
                      >
                        {renderRichText(twoColumnSection.columns[0]?.content)}
                      </div>
                      <div
                        className={`item wow ${twoColumnSection.columns[1]?.animationClass || "fadeInRight"}`}
                        data-api-key="content_right"
                      >
                        {renderRichText(twoColumnSection.columns[1]?.content)}
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        );

      case "cta":
        if (!ctaSection?.show) return null;

        return (
          <div
            className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-2"
            data-s3-module
            key="cta"
            style={{ backgroundColor: ctaSection.backgroundColor || undefined }}
          >
            <div className="row">
              <div className="text">
                {ctaSection.heading && (
                  <h2>
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

      case "finalColumnMedia":
        if (!finalColumnMedia?.show) return null;
        const fcMedia = getResponsiveImageUrls(finalColumnMedia?.mediaImage);

        return (
          <div
            className="mod_column viewport container has-media"
            data-s3-module
            key="finalColumnMedia"
            style={{
              backgroundColor: finalColumnMedia.backgroundColor || undefined,
            }}
          >
            <div
              className={`row media-${finalColumnMedia.mediaPosition || "left"}`}
              data-api-key="content"
            >
              <div className="item">
                {finalColumnMedia.heading && (
                  <h2>{finalColumnMedia.heading}</h2>
                )}
                {renderRichText(finalColumnMedia.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${fcMedia.mobile}, ${fcMedia.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${fcMedia.tablet}, ${fcMedia.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={fcMedia.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={fcMedia.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={fcMedia.alt || "sconce light fixture"}
                  draggable="false"
                />
              </picture>
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
        sectionOrder.map((section: any, idx: number) =>
          renderSection(section.section)
        )
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("introColumn")}
          {renderSection("boxGrid")}
          {renderSection("divider1")}
          {renderSection("banner1")}
          {renderSection("services")}
          {renderSection("halfImage")}
          {renderSection("story")}
          {renderSection("banner2")}
          {renderSection("twoColumn")}
          {renderSection("cta")}
          {renderSection("finalColumnMedia")}
        </>
      )}
    </main>
  );
};

export default DowntownTampaPageComponent;
