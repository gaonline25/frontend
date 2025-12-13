"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/locations/fetchLongwoodPageData";

// TypeScript interfaces for Payload CMS data structure
interface Image {
  mobile?: { id: string; url: string };
  tablet?: { id: string; url: string };
  desktop?: { id: string; url: string };
  large?: { id: string; url: string };
  alt: string;
}

interface Breadcrumb {
  label: string;
  url: string;
  ariaLabel?: string;
}

interface HeroSection {
  show: boolean;
  backgroundColor?: string;
  backgroundImage?: Image;
  breadcrumbs?: Breadcrumb[];
  title?: any; // richText can be string or Lexical JSON
  titleColor?: string;
  description?: any;
  descriptionColor?: string;
  mediaImage?: Image;
}

interface IntroColumnSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  logo?: { id: string; url: string; width?: number; height?: number };
  logoAlt?: string;
  heading?: any;
  headingColor?: string;
  content?: any;
  ctaButton?: {
    show: boolean;
    text?: string;
    url?: string;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
  };
}

interface BoxGridSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  boxes?: {
    heading: string;
    headingColor?: string;
    content?: any;
    textColor?: string;
  }[];
  backgroundImage?: Image;
}

interface TwoColumnSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  title?: any;
  titleColor?: string;
  columns?: { content: any; animationClass?: string; textColor?: string }[];
}

interface HalfImageSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  flipped?: boolean;
  heading?: string;
  headingColor?: string;
  content?: any;
  image?: Image;
}

interface BannerSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  backgroundImage?: Image;
  heading?: string;
  headingColor?: string;
  introContent?: any;
  servicesList?: {
    serviceName: string;
    serviceNameBold: boolean;
    serviceUrl?: string;
    description?: string;
    textColor?: string;
  }[];
  columnsLayout?: boolean;
}

interface PlasticSurgerySection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  heading?: string;
  headingColor?: string;
  content?: any;
  servicesList?: {
    serviceName: string;
    serviceNameBold: boolean;
    serviceUrl?: string;
    description?: string;
    textColor?: string;
  }[];
  columnsLayout?: boolean;
}

interface FinalColumnMedia {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  mediaPosition?: "left" | "right";
  heading?: string;
  headingColor?: string;
  content?: any;
  mediaImage?: Image;
}

interface SectionOrder {
  section: string;
}

interface GlobalStyles {
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  linkColor?: string;
  linkHoverColor?: string;
}

interface LongwoodPageData {
  heroSection: HeroSection;
  introColumnSection: IntroColumnSection;
  boxGridSection: BoxGridSection;
  twoColumnSection1: TwoColumnSection;
  halfImageSection: HalfImageSection;
  twoColumnSection2: TwoColumnSection;
  bannerSection: BannerSection;
  plasticSurgerySection: PlasticSurgerySection;
  finalColumnMedia: FinalColumnMedia;
  sectionOrder?: SectionOrder[];
  globalStyles?: GlobalStyles;
}

interface LongwoodContentProps {
  data: LongwoodPageData;
}

const LongwoodContent: React.FC<LongwoodContentProps> = ({ data }) => {
  if (!data) {
    console.error("No data provided for Longwood page");
    return (
      <div className="text-center p-4">Error: Unable to load page content</div>
    );
  }

  const {
    heroSection,
    introColumnSection,
    boxGridSection,
    twoColumnSection1,
    halfImageSection,
    twoColumnSection2,
    bannerSection,
    plasticSurgerySection,
    finalColumnMedia,
    sectionOrder,
    globalStyles,
  } = data;

  const renderRichText = (content: any): JSX.Element | null => {
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

  const renderSection = (sectionKey: string): JSX.Element | null => {
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
                      href="https://www.vagaro.com/goldfingersaestheticslongwood"
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
                    width="1920"
                    height="1206"
                    alt={heroMedia.alt || "sunset over lake from boardwalk"}
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
                  className="mw-80 text-center"
                  style={{ color: introColumnSection.textColor || undefined }}
                >
                  {introColumnSection.heading && (
                    <h2
                      style={{
                        color: introColumnSection.headingColor || undefined,
                      }}
                    >
                      {renderRichText(introColumnSection.heading)}
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
                        style={{
                          backgroundColor:
                            introColumnSection.ctaButton.backgroundColor ||
                            undefined,
                          color:
                            introColumnSection.ctaButton.textColor || undefined,
                        }}
                      >
                        {introColumnSection.ctaButton.text ||
                          "Explore Our Medical Spa Services"}
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
            className="mod_box_grid viewport container option-3 single bkg-image"
            data-s3-module
            key="boxGrid"
            style={{
              backgroundColor: boxGridSection.backgroundColor || undefined,
            }}
          >
            <div className="row">
              <div className="boxes">
                {boxGridSection.boxes?.map((box, idx) => (
                  <div
                    key={idx}
                    className="box wow fadeInUp"
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
                  height="802"
                  alt={boxBg.alt || "Background media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "twoColumn1":
        if (!twoColumnSection1?.show) return null;

        return (
          <div
            className="mod_columns_two viewport container"
            data-s3-module
            key="twoColumn1"
            style={{
              backgroundColor: twoColumnSection1.backgroundColor || undefined,
            }}
          >
            <div className="row pb-20">
              <div
                className="content vertical-align"
                style={{ color: twoColumnSection1.textColor || undefined }}
              >
                {twoColumnSection1.columns?.map((col, idx) => (
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
            className={`mod_half_image viewport half-image container wow fadeInLeft ${
              halfImageSection.flipped ? "flipped" : ""
            }`}
            data-s3-module
            key="halfImage"
            style={{
              backgroundColor: halfImageSection.backgroundColor || undefined,
              visibility: "hidden",
              animationName: "none",
            }}
          >
            <div className="row half-image-row mt-0 mb-0">
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
                    alt={halfImg.alt || "daisies and palm trees at sunset"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy padded2">
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

      case "twoColumn2":
        if (!twoColumnSection2?.show) return null;

        return (
          <div
            className="mod_columns_two viewport container"
            data-s3-module
            key="twoColumn2"
            style={{
              backgroundColor: twoColumnSection2.backgroundColor || undefined,
            }}
          >
            <div className="row pt-20">
              {twoColumnSection2.title && (
                <h2
                  data-api-key="title"
                  style={{ color: twoColumnSection2.titleColor || undefined }}
                >
                  {renderRichText(twoColumnSection2.title)}
                </h2>
              )}
              <div
                className="content"
                style={{ color: twoColumnSection2.textColor || undefined }}
              >
                {twoColumnSection2.columns?.map((col, idx) => (
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

      case "banner":
        if (!bannerSection?.show) return null;
        const bannerBg = getResponsiveImageUrls(bannerSection?.backgroundImage);

        return (
          <div
            className="mod_banner dark hide-divider viewport background-13"
            data-s3-module
            key="banner"
            style={{
              backgroundColor: bannerSection.backgroundColor || undefined,
            }}
          >
            <div
              className="row wow fadeInUp"
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection.heading && (
                  <h2
                    className="text-center"
                    style={{ color: bannerSection.headingColor || undefined }}
                  >
                    {bannerSection.heading}
                  </h2>
                )}
                {renderRichText(bannerSection.introContent)}
                {bannerSection.servicesList?.length > 0 && (
                  <ul className={bannerSection.columnsLayout ? "columns" : ""}>
                    {bannerSection.servicesList.map((service, idx) => (
                      <li
                        key={idx}
                        style={{ color: service.textColor || undefined }}
                      >
                        {service.serviceUrl ? (
                          <a href={service.serviceUrl}>
                            {service.serviceNameBold ? (
                              <strong>{service.serviceName}</strong>
                            ) : (
                              service.serviceName
                            )}
                          </a>
                        ) : service.serviceNameBold ? (
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
            {bannerBg.large && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${bannerBg.mobile}, ${bannerBg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${bannerBg.tablet}, ${bannerBg.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${bannerBg.desktop}, ${bannerBg.desktop} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={bannerBg.large}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={bannerBg.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="2200"
                  height="802"
                  alt={bannerBg.alt || "Banner media"}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        );

      case "plasticSurgery":
        if (!plasticSurgerySection?.show) return null;

        return (
          <div
            className="mod_column viewport container"
            data-s3-module
            key="plasticSurgery"
            style={{
              backgroundColor:
                plasticSurgerySection.backgroundColor || undefined,
            }}
          >
            <div className="row mt-30 pb-20" data-api-key="content">
              <div
                className="item"
                style={{ color: plasticSurgerySection.textColor || undefined }}
              >
                {plasticSurgerySection.heading && (
                  <h2
                    style={{
                      color: plasticSurgerySection.headingColor || undefined,
                    }}
                  >
                    {plasticSurgerySection.heading}
                  </h2>
                )}
                {renderRichText(plasticSurgerySection.content)}
                {plasticSurgerySection.servicesList?.length > 0 && (
                  <ul
                    className={
                      plasticSurgerySection.columnsLayout ? "columns" : ""
                    }
                  >
                    {plasticSurgerySection.servicesList.map((service, idx) => (
                      <li
                        key={idx}
                        style={{ color: service.textColor || undefined }}
                      >
                        {service.serviceUrl ? (
                          <a href={service.serviceUrl}>
                            {service.serviceNameBold ? (
                              <strong>{service.serviceName}</strong>
                            ) : (
                              service.serviceName
                            )}
                          </a>
                        ) : service.serviceNameBold ? (
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
          </div>
        );

      case "finalColumnMedia":
        if (!finalColumnMedia?.show) return null;
        const finalMediaImg = getResponsiveImageUrls(
          finalColumnMedia?.mediaImage
        );

        return (
          <div
            className={`mod_column viewport container has-media`}
            data-s3-module
            key="finalColumnMedia"
            style={{
              backgroundColor: finalColumnMedia.backgroundColor || undefined,
            }}
          >
            <div
              className={`row media-${
                finalColumnMedia.mediaPosition || "left"
              }`}
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: finalColumnMedia.textColor || undefined }}
              >
                {finalColumnMedia.heading && (
                  <h2
                    style={{
                      color: finalColumnMedia.headingColor || undefined,
                    }}
                  >
                    {finalColumnMedia.heading}
                  </h2>
                )}
                {renderRichText(finalColumnMedia.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${finalMediaImg.mobile}, ${finalMediaImg.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${finalMediaImg.tablet}, ${finalMediaImg.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={finalMediaImg.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={finalMediaImg.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={finalMediaImg.alt || "dock on the ocean"}
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
        sectionOrder.map((section, idx) => renderSection(section.section))
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("introColumn")}
          {renderSection("boxGrid")}
          {renderSection("twoColumn1")}
          {renderSection("halfImage")}
          {renderSection("twoColumn2")}
          {renderSection("banner")}
          {renderSection("plasticSurgery")}
          {renderSection("finalColumnMedia")}
        </>
      )}
    </main>
  );
};

export default LongwoodContent;
