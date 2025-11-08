"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/locations/fetchPortOrangePageData";

// TypeScript interfaces for Payload CMS data structure
interface MediaItem {
  id: string;
  url: string;
  width?: number;
  height?: number;
}

interface Image {
  mobile?: MediaItem;
  tablet?: MediaItem;
  desktop?: MediaItem;
  large?: MediaItem;
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
  cssClasses?: string;
  backgroundImage?: Image;
  breadcrumbs?: Breadcrumb[];
  title?: string;
  titleSmall?: string;
  titleColor?: string;
  mediaImage?: Image;
}

interface IntroColumnSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  cssClasses?: string;
  rowCssClasses?: string;
  logo?: MediaItem;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  heading?: string;
  headingSpan?: string;
  headingColor?: string;
  content?: any;
  maxWidth?: string;
  textAlign?: string;
  ctaButton?: {
    text?: string;
    url?: string;
    className?: string;
  };
}

interface BannerSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  cssClasses?: string;
  animationClass?: string;
  backgroundImage?: Image;
  heading?: string;
  headingSpan?: string;
  headingColor?: string;
  headingAlign?: string;
  intro?: string;
  introAlign?: string;
  content?: any;
  services?: {
    name: string;
    url?: string;
    description: string;
  }[];
  columnsLayout?: boolean;
}

interface HalfImageSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  cssClasses?: string;
  flipped?: boolean;
  heading?: string;
  headingColor?: string;
  content?: any;
  bulletPoints?: { text: string }[];
  image?: Image;
}

interface CTASection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  cssClasses?: string;
  heading?: string;
  headingLink?: string;
  ctaButton?: {
    text: string;
    url: string;
    className?: string;
  };
}

interface ColumnMediaSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  cssClasses?: string;
  rowCssClasses?: string;
  mediaPosition?: string;
  heading?: string;
  headingSmall?: string;
  headingSpan?: string;
  headingBlockDesktop?: string;
  headingColor?: string;
  content?: any;
  mediaImage?: Image;
}

interface BoxGridSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  cssClasses?: string;
  heading?: string;
  headingColor?: string;
  intro?: any;
  boxes?: {
    heading: string;
    headingColor?: string;
    content?: string;
    ctaText?: string;
    ctaUrl?: string;
    ctaClassName?: string;
    animationClass?: string;
  }[];
}

interface SectionOrder {
  section: string;
}

interface GlobalStyles {
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  linkColor?: string;
  backgroundColor?: string;
}

interface PortOrangePageData {
  heroSection: HeroSection;
  introColumnSection: IntroColumnSection;
  bannerSection1: BannerSection;
  halfImageSection1: HalfImageSection;
  ctaSection1: CTASection;
  columnMediaSection1: ColumnMediaSection;
  columnMediaSection2: ColumnMediaSection;
  bannerSection2: BannerSection;
  boxGridSection: BoxGridSection;
  bannerSection3: BannerSection;
  sectionOrder?: SectionOrder[];
  globalStyles?: GlobalStyles;
}

interface PortOrangeContentProps {
  data: PortOrangePageData;
}

const PortOrangeContent: React.FC<PortOrangeContentProps> = ({ data }) => {
  if (!data) {
    console.error("No data provided for Port Orange page");
    return (
      <div className="text-center p-4">Error: Unable to load page content</div>
    );
  }

  const {
    heroSection,
    introColumnSection,
    bannerSection1,
    halfImageSection1,
    ctaSection1,
    columnMediaSection1,
    columnMediaSection2,
    bannerSection2,
    boxGridSection,
    bannerSection3,
    sectionOrder,
    globalStyles,
  } = data;

  const renderRichText = (content: any): JSX.Element | null => {
    if (!content) {
      return null;
    }
    if (typeof content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    if (content && typeof content === "object" && content.root) {
      try {
        const html = lexicalToHtml(content);
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      } catch (error) {
        console.error("renderRichText: Error processing Lexical JSON", error);
        return null;
      }
    }
    return null;
  };

  const renderSection = (sectionKey: string): JSX.Element | null => {
    switch (sectionKey) {
      case "hero":
        if (!heroSection?.show) return null;
        const heroBackground = getResponsiveImageUrls(
          heroSection?.backgroundImage
        );
        const heroMedia = getResponsiveImageUrls(heroSection?.mediaImage);

        return (
          <div
            className={heroSection.cssClasses || "mod_hero banner mobile-stack"}
            data-s3-module=""
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
                  srcSet={`${heroBackground.mobile}, ${heroBackground.mobile} 2x`}
                  data-lazyload-srcset={`${heroBackground.mobile}, ${heroBackground.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${heroBackground.tablet}, ${heroBackground.tablet} 2x`}
                  data-lazyload-srcset={`${heroBackground.tablet}, ${heroBackground.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${heroBackground.desktop}, ${heroBackground.desktop} 2x`}
                  data-lazyload-srcset={`${heroBackground.desktop}, ${heroBackground.desktop} 2x`}
                />
                <source
                  srcSet={heroBackground.large}
                  data-lazyload-srcset={heroBackground.large}
                />
                <img
                  src={heroBackground.large}
                  data-lazyload-src={heroBackground.large}
                  loading="lazy"
                  data-lazyload="img"
                  width="1994"
                  height="1206"
                  alt={heroBackground.alt || "Background Texture"}
                  draggable="false"
                  data-lazyload-loaded="true"
                />
              </picture>
              <div className="row">
                <div className="inner">
                  {heroSection.breadcrumbs &&
                    heroSection.breadcrumbs.length > 0 && (
                      <ul className="partial_breadcrumb" data-s3-partial="">
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
                      {heroSection.title}{" "}
                      {heroSection.titleSmall && (
                        <span className="small">{heroSection.titleSmall}</span>
                      )}
                    </h1>
                  )}
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
                    src={heroMedia.desktop}
                    width="1920"
                    height="1206"
                    alt={heroMedia.alt || "boats at sunset"}
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
            data-s3-module=""
            key="introColumn"
            style={{
              backgroundColor: introColumnSection.backgroundColor || undefined,
            }}
          >
            <div
              className={introColumnSection.rowCssClasses || "row mb-30"}
              data-api-key="content"
            >
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width={introColumnSection.logoWidth || 58}
                    height={introColumnSection.logoHeight || 64}
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
                      {introColumnSection.heading}{" "}
                      {introColumnSection.headingSpan && (
                        <span className="block-desktop">
                          {introColumnSection.headingSpan}
                        </span>
                      )}
                    </h2>
                  )}
                  {renderRichText(introColumnSection.content)}
                  {introColumnSection.ctaButton && (
                    <p>
                      <a
                        href={
                          introColumnSection.ctaButton.url ||
                          "/port-orange/medical-spa/"
                        }
                        className={
                          introColumnSection.ctaButton.className || "btn"
                        }
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

      case "banner1":
        if (!bannerSection1?.show) return null;
        const banner1Bg = getResponsiveImageUrls(
          bannerSection1?.backgroundImage
        );

        return (
          <div
            className={
              bannerSection1.cssClasses ||
              "mod_banner dark hide-divider viewport background-1"
            }
            data-s3-module=""
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

      case "halfImage1":
        if (!halfImageSection1?.show) return null;
        const halfImg1 = getResponsiveImageUrls(halfImageSection1?.image);

        return (
          <div
            className={
              halfImageSection1.cssClasses ||
              "mod_half_image viewport half-image container wow fadeInLeft"
            }
            data-s3-module=""
            key="halfImage1"
            style={{
              backgroundColor: halfImageSection1.backgroundColor || undefined,
              visibility: "hidden",
              animationName: "none",
            }}
          >
            <div className="row half-image-row">
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg1.mobile}, ${halfImg1.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg1.tablet}, ${halfImg1.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={`${halfImg1.desktop}, ${halfImg1.desktop} 2x`}
                  />
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-srcset={halfImg1.large}
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src={halfImg1.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="1832"
                    height="1824"
                    alt={halfImg1.alt || "boats in harbor at sunset"}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
              <div className="copy">
                <div className="inner">
                  <div
                    className="content"
                    data-api-key="content"
                    style={{ color: halfImageSection1.textColor || undefined }}
                  >
                    {halfImageSection1.heading && (
                      <h2
                        style={{
                          color: halfImageSection1.headingColor || undefined,
                        }}
                      >
                        {halfImageSection1.heading}
                      </h2>
                    )}
                    {renderRichText(halfImageSection1.content)}
                    {halfImageSection1.bulletPoints &&
                      halfImageSection1.bulletPoints.length > 0 && (
                        <ul>
                          {halfImageSection1.bulletPoints.map((bullet, idx) => (
                            <li key={idx}>{bullet.text}</li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              </div>
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
            data-s3-module=""
            key="cta1"
            style={{
              backgroundColor: ctaSection1.backgroundColor || undefined,
              visibility: "hidden",
              animationName: "none",
            }}
          >
            <div className="row">
              <div
                className="text"
                style={{ color: ctaSection1.textColor || undefined }}
              >
                {ctaSection1.heading && (
                  <h2>
                    <a
                      href={
                        ctaSection1.headingLink ||
                        "/contact/?location=165422621"
                      }
                    >
                      {ctaSection1.heading}
                    </a>
                  </h2>
                )}
                {ctaSection1.ctaButton && (
                  <a
                    href={ctaSection1.ctaButton.url}
                    className={ctaSection1.ctaButton.className || "btn white"}
                  >
                    {ctaSection1.ctaButton.text}
                  </a>
                )}
              </div>
              <div className="media"></div>
            </div>
          </div>
        );

      case "columnMedia1":
        if (!columnMediaSection1?.show) return null;
        const colMedia1 = getResponsiveImageUrls(
          columnMediaSection1?.mediaImage
        );

        return (
          <div
            className={
              columnMediaSection1.cssClasses ||
              "mod_column viewport container has-media"
            }
            data-s3-module=""
            key="columnMedia1"
            style={{
              backgroundColor: columnMediaSection1.backgroundColor || undefined,
            }}
          >
            <div
              className={
                columnMediaSection1.rowCssClasses ||
                "row mt-30 mb-30 media-right"
              }
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: columnMediaSection1.textColor || undefined }}
              >
                {columnMediaSection1.heading && (
                  <h2
                    style={{
                      color: columnMediaSection1.headingColor || undefined,
                    }}
                  >
                    {columnMediaSection1.headingSmall && (
                      <span className="small">
                        {columnMediaSection1.headingSmall}{" "}
                      </span>
                    )}
                    {columnMediaSection1.heading}
                    {columnMediaSection1.headingSpan && (
                      <>{columnMediaSection1.headingSpan}</>
                    )}{" "}
                    {columnMediaSection1.headingBlockDesktop && (
                      <span className="block-desktop">
                        {columnMediaSection1.headingBlockDesktop}
                      </span>
                    )}
                  </h2>
                )}
                {renderRichText(columnMediaSection1.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${colMedia1.mobile}, ${colMedia1.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${colMedia1.tablet}, ${colMedia1.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={colMedia1.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={colMedia1.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={colMedia1.alt || "dock on the ocean"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        );

      case "columnMedia2":
        if (!columnMediaSection2?.show) return null;
        const colMedia2 = getResponsiveImageUrls(
          columnMediaSection2?.mediaImage
        );

        return (
          <div
            className={
              columnMediaSection2.cssClasses ||
              "mod_column viewport container has-media"
            }
            data-s3-module=""
            key="columnMedia2"
            style={{
              backgroundColor: columnMediaSection2.backgroundColor || undefined,
            }}
          >
            <div
              className={
                columnMediaSection2.rowCssClasses ||
                "row mt-30 mb-30 media-right"
              }
              data-api-key="content"
            >
              <div
                className="item"
                style={{ color: columnMediaSection2.textColor || undefined }}
              >
                {columnMediaSection2.heading && (
                  <h2
                    style={{
                      color: columnMediaSection2.headingColor || undefined,
                    }}
                  >
                    {columnMediaSection2.heading}{" "}
                    {columnMediaSection2.headingBlockDesktop && (
                      <span className="block-desktop">
                        {columnMediaSection2.headingBlockDesktop}
                      </span>
                    )}
                  </h2>
                )}
                {renderRichText(columnMediaSection2.content)}
              </div>
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${colMedia2.mobile}, ${colMedia2.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${colMedia2.tablet}, ${colMedia2.tablet} 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={colMedia2.desktop}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={colMedia2.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={colMedia2.alt || "sconce light fixture"}
                  draggable="false"
                />
              </picture>
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
            className={
              bannerSection2.cssClasses ||
              "mod_banner dark hide-divider viewport background-6"
            }
            data-s3-module=""
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
                    className={bannerSection2.headingAlign || "text-center"}
                    style={{ color: bannerSection2.headingColor || undefined }}
                  >
                    {bannerSection2.heading}
                  </h2>
                )}
                {bannerSection2.intro && (
                  <p className={bannerSection2.introAlign || "text-center"}>
                    {bannerSection2.intro}
                  </p>
                )}
                {bannerSection2.services &&
                  bannerSection2.services.length > 0 && (
                    <ul
                      className={bannerSection2.columnsLayout ? "columns" : ""}
                    >
                      {bannerSection2.services.map((service, idx) => (
                        <li key={idx}>
                          {service.url ? (
                            <a href={service.url}>
                              <strong>{service.name}</strong>
                            </a>
                          ) : (
                            <strong>{service.name}</strong>
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

      case "boxGrid":
        if (!boxGridSection?.show) return null;

        return (
          <div
            className={
              boxGridSection.cssClasses ||
              "mod_box_grid viewport seven-boxes container option-2 default no-bg wider"
            }
            data-s3-module=""
            key="boxGrid"
            style={{
              backgroundColor: boxGridSection.backgroundColor || undefined,
            }}
          >
            <div className="row">
              <div className="content-before">
                {boxGridSection.heading && (
                  <h2
                    style={{ color: boxGridSection.headingColor || undefined }}
                  >
                    {boxGridSection.heading}
                  </h2>
                )}
                {renderRichText(boxGridSection.intro)}
              </div>
              <div className="boxes wider">
                {boxGridSection.boxes?.map((box, idx) => (
                  <div
                    key={idx}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {box.heading && (
                      <h3 style={{ color: box.headingColor || undefined }}>
                        {box.heading}
                      </h3>
                    )}
                    {box.content && <p>{box.content}</p>}
                    {box.ctaText && box.ctaUrl && (
                      <p>
                        <a
                          href={box.ctaUrl}
                          className={box.ctaClassName || "btn"}
                        >
                          {box.ctaText}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
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
            className={
              bannerSection3.cssClasses ||
              "mod_banner dark hide-divider viewport background-5"
            }
            data-s3-module=""
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
                    {bannerSection3.heading}{" "}
                    {bannerSection3.headingSpan && (
                      <span className="block-desktop">
                        {bannerSection3.headingSpan}
                      </span>
                    )}
                  </h2>
                )}
                {renderRichText(bannerSection3.content)}
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

      default:
        console.warn(`Unknown section: ${sectionKey}`);
        return null;
    }
  };

  return (
    <main id="main" style={{ color: globalStyles?.textColor || undefined }}>
      {sectionOrder && Array.isArray(sectionOrder) ? (
        sectionOrder.map((section, idx) => (
          <React.Fragment key={idx}>
            {renderSection(section.section)}
          </React.Fragment>
        ))
      ) : (
        <>
          {renderSection("hero")}
          {renderSection("introColumn")}
          {renderSection("banner1")}
          {renderSection("halfImage1")}
          {renderSection("cta1")}
          {renderSection("columnMedia1")}
          {renderSection("columnMedia2")}
          {renderSection("banner2")}
          {renderSection("boxGrid")}
          {renderSection("banner3")}
        </>
      )}
    </main>
  );
};

export default PortOrangeContent;
