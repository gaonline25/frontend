"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/locations/fetchDowntownOrlandoPageData";

interface DowntownOrlandoPageComponentProps {
  data: any;
}

const DowntownOrlandoPageComponent: React.FC<
  DowntownOrlandoPageComponentProps
> = ({ data }) => {
  if (!data) {
    console.error("No data fetched for Downtown Orlando page");
    return (
      <div className="text-center p-4">Error: Unable to load page content</div>
    );
  }

  const {
    heroSection,
    introColumnSection,
    boxGridSection1,
    columnMediaSection1,
    ctaSection1,
    simpleColumnSection1,
    bannerSection1,
    servicesSection,
    halfImageSection,
    storySection,
    boxGridSection2,
    plasticSurgerySection,
    finalColumnMedia,
    sectionOrder,
    globalStyles,
    seoSettings,
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
                  {heroSection.title && renderRichText(heroSection.title)}
                  <p>
                    <a
                      className="btn white"
                      href=""
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
                    width="1920"
                    height="1206"
                    alt={heroMedia.alt || "orlando skyline seen from the water"}
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
            className={
              introColumnSection.cssClasses || "mod_column viewport container"
            }
            data-s3-module
            key="introColumn"
          >
            <div className="row mb-30" data-api-key="content">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width="232"
                    height="65"
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
                <div className="mw-80 text-center">
                  {introColumnSection.heading && (
                    <h2>{introColumnSection.heading}</h2>
                  )}
                  {renderRichText(introColumnSection.content)}
                  {introColumnSection.ctaButton && (
                    <a
                      href={introColumnSection.ctaButton.url || "#"}
                      className={
                        introColumnSection.ctaButton.className || "btn"
                      }
                    >
                      {introColumnSection.ctaButton.text || "Explore"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case "boxGrid1":
        if (!boxGridSection1?.show) return null;
        const boxBg1 = getResponsiveImageUrls(boxGridSection1?.backgroundImage);

        return (
          <div
            className={
              boxGridSection1.cssClasses ||
              "mod_box_grid viewport container option-3 single bkg-image"
            }
            data-s3-module
            key="boxGrid1"
          >
            <div className="row">
              <div className="boxes">
                {boxGridSection1.boxes &&
                  Array.isArray(boxGridSection1.boxes) &&
                  boxGridSection1.boxes.map((box: any, idx: number) => (
                    <div
                      key={idx}
                      className={`box wow ${box.animationClass || "fadeInUp"}`}
                    >
                      <h3>{box.heading}</h3>
                      {renderRichText(box.content)}
                    </div>
                  ))}
              </div>
            </div>
            {boxBg1.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg1.mobile}, ${boxBg1.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg1.tablet}, ${boxBg1.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${boxBg1.desktop}, ${boxBg1.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={boxBg1.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={boxBg1.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="1726"
                  alt={boxBg1.alt || "Background media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "columnMedia1":
        if (!columnMediaSection1?.show) return null;
        const cmMedia = getResponsiveImageUrls(columnMediaSection1?.mediaImage);

        return (
          <div
            className={
              columnMediaSection1.cssClasses ||
              "mod_column viewport container has-media"
            }
            data-s3-module
            key="columnMedia1"
          >
            <div
              className={`row media-${columnMediaSection1.mediaPosition || "right"}`}
              data-api-key="content"
            >
              <div className="item">
                {columnMediaSection1.heading && (
                  <h2>{columnMediaSection1.heading}</h2>
                )}
                {renderRichText(columnMediaSection1.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${cmMedia.mobile}, ${cmMedia.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${cmMedia.tablet}, ${cmMedia.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={cmMedia.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={cmMedia.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={cmMedia.alt || "sconce light fixture"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "cta1":
        if (!ctaSection1?.show) return null;

        return (
          <div
            className={
              ctaSection1.cssClasses ||
              "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
            }
            data-s3-module
            key="cta1"
          >
            <div className="row">
              <div className="text">
                {ctaSection1.heading && (
                  <h2>
                    {ctaSection1.headingLink ? (
                      <a href={ctaSection1.headingLink}>
                        {ctaSection1.heading}
                      </a>
                    ) : (
                      ctaSection1.heading
                    )}
                  </h2>
                )}
                {ctaSection1.ctaButton && (
                  <a
                    href={ctaSection1.ctaButton.url || "#"}
                    className={ctaSection1.ctaButton.className || "btn white"}
                  >
                    {ctaSection1.ctaButton.text || "Book an Appointment"}
                  </a>
                )}
              </div>
              <div className="media" />
            </div>
          </div>
        );

      case "simpleColumn1":
        if (!simpleColumnSection1?.show) return null;

        return (
          <div
            className={
              simpleColumnSection1.cssClasses || "mod_column viewport container"
            }
            data-s3-module
            key="simpleColumn1"
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                {simpleColumnSection1.heading && (
                  <h2>{simpleColumnSection1.heading}</h2>
                )}
                {renderRichText(simpleColumnSection1.content)}
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
            className={
              bannerSection1.cssClasses ||
              "mod_banner dark hide-divider viewport background-9"
            }
            data-s3-module
            key="banner1"
          >
            <div
              className={`row wow ${bannerSection1.animationClass || "fadeInUp"}`}
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
          </div>
        );

      case "services":
        if (!servicesSection?.show) return null;

        return (
          <div
            className={
              servicesSection.cssClasses || "mod_column viewport container"
            }
            data-s3-module
            key="services"
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                {servicesSection.heading && (
                  <h2 className="text-center">{servicesSection.heading}</h2>
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
            className={
              halfImageSection.cssClasses ||
              "mod_half_image viewport half-image container wow fadeInLeft"
            }
            data-s3-module
            key="halfImage"
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
                    alt={halfImg.alt || "nighttime image of building"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded">
                <div className="inner">
                  <div className="content" data-api-key="content">
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
            className={
              storySection.cssClasses || "mod_column viewport container"
            }
            data-s3-module
            key="story"
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                {storySection.heading && <h2>{storySection.heading}</h2>}
                {renderRichText(storySection.content)}
              </div>
            </div>
          </div>
        );

      case "boxGrid2":
        if (!boxGridSection2?.show) return null;
        const boxBg2 = getResponsiveImageUrls(boxGridSection2?.backgroundImage);

        return (
          <div
            className={
              boxGridSection2.cssClasses ||
              "mod_box_grid viewport container option-1 single bkg-image"
            }
            data-s3-module
            key="boxGrid2"
          >
            <div className="row">
              <div className="boxes">
                {boxGridSection2.boxes &&
                  Array.isArray(boxGridSection2.boxes) &&
                  boxGridSection2.boxes.map((box: any, idx: number) => (
                    <div
                      key={idx}
                      className={`box wow ${box.animationClass || "fadeInUp"}`}
                    >
                      <h3>{box.heading}</h3>
                      {renderRichText(box.content)}
                    </div>
                  ))}
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxBg2.mobile}, ${boxBg2.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxBg2.tablet}, ${boxBg2.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${boxBg2.desktop}, ${boxBg2.desktop} 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={boxBg2.large}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={boxBg2.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="1726"
                alt={boxBg2.alt || "Background media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "plasticSurgery":
        if (!plasticSurgerySection?.show) return null;

        return (
          <div
            className={
              plasticSurgerySection.cssClasses ||
              "mod_column viewport container"
            }
            data-s3-module
            key="plasticSurgery"
          >
            <div className="row mt-30 mb-30" data-api-key="content">
              <div className="item">
                {plasticSurgerySection.heading && (
                  <h2 className="text-center">
                    {plasticSurgerySection.heading}
                  </h2>
                )}
                {renderRichText(plasticSurgerySection.introContent)}
                {plasticSurgerySection.servicesList &&
                  Array.isArray(plasticSurgerySection.servicesList) && (
                    <ul className="columns">
                      {plasticSurgerySection.servicesList.map(
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

      case "finalColumnMedia":
        if (!finalColumnMedia?.show) return null;
        const fcMedia = getResponsiveImageUrls(finalColumnMedia?.mediaImage);

        return (
          <div
            className={
              finalColumnMedia.cssClasses ||
              "mod_column viewport container has-media"
            }
            data-s3-module
            key="finalColumnMedia"
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
                  alt={fcMedia.alt || "Goldfingers medspa room"}
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
          {renderSection("boxGrid1")}
          {renderSection("columnMedia1")}
          {renderSection("cta1")}
          {renderSection("simpleColumn1")}
          {renderSection("banner1")}
          {renderSection("services")}
          {renderSection("halfImage")}
          {renderSection("story")}
          {renderSection("boxGrid2")}
          {renderSection("plasticSurgery")}
          {renderSection("finalColumnMedia")}
        </>
      )}
    </main>
  );
};

export default DowntownOrlandoPageComponent;
