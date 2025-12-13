"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/locations/fetchLakeNonaPageData";

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
  title?: string;
  titleColor?: string;
  mediaImage?: Image;
}

interface IntroColumnSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  logo?: { id: string; url: string; width?: number; height?: number };
  logoAlt?: string;
  heading?: string;
  headingColor?: string;
  content?: any; // richText can be string or Lexical JSON
}

interface BoxGridSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  contentBeforeHeading?: any;
  contentBeforeText?: any;
  boxes?: {
    heading: string;
    headingColor?: string;
    content?: any;
    textColor?: string;
  }[];
  backgroundImage?: Image;
}

interface DividerSection {
  show: boolean;
  backgroundColor?: string;
  image?: { id: string; url: string; width?: number; height?: number };
  imageAlt?: string;
}

interface BannerSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  backgroundImage?: Image;
  columns?: { content: any; textColor?: string }[];
  heading?: string;
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

interface ServicesSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
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

interface StorySection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  heading?: string;
  headingColor?: string;
  content?: any;
}

interface TwoColumnSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  columns?: { content: any; animationClass?: string; textColor?: string }[];
}

interface CtaSection {
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  heading?: string;
  headingColor?: string;
  headingLink?: string;
  ctaButton?: {
    text: string;
    url: string;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
  };
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

interface LakeNonaPageData {
  heroSection: HeroSection;
  introColumnSection: IntroColumnSection;
  boxGridSection: BoxGridSection;
  dividerSection1: DividerSection;
  bannerSection1: BannerSection;
  servicesSection: ServicesSection;
  halfImageSection: HalfImageSection;
  storySection: StorySection;
  bannerSection2: BannerSection;
  twoColumnSection: TwoColumnSection;
  ctaSection: CtaSection;
  dividerSection2: DividerSection;
  bannerSection3: BannerSection;
  finalColumnMedia: FinalColumnMedia;
  sectionOrder?: SectionOrder[];
  globalStyles?: GlobalStyles;
}

interface LakeNonaContentProps {
  data: LakeNonaPageData;
}

const LakeNonaContent: React.FC<LakeNonaContentProps> = ({ data }) => {
  if (!data) {
    console.error("No data fetched for Lake Nona page");
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
    dividerSection2,
    bannerSection3,
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
                      {heroSection.title}
                    </h1>
                  )}

                  <p>
                    <a
                      className="btn white"
                      href="https://www.vagaro.com/goldfingersaestheticslakenona"
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
                    width="2121"
                    height="1414"
                    alt={heroMedia.alt || "lake nona"}
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
              <div className="content-before">
                {renderRichText(boxGridSection.contentBeforeHeading)}
                {renderRichText(boxGridSection.contentBeforeText)}
              </div>
              <div className="boxes wider">
                {boxGridSection.boxes?.map((box, idx) => (
                  <div
                    key={idx}
                    className="box wow fadeInUp"
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {box.heading && (
                      <h3 style={{ color: box.headingColor || undefined }}>
                        {box.heading}
                      </h3>
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

      case "divider1":
        if (!dividerSection1?.show) return null;
        const divider1Img = getImageUrl(dividerSection1?.image);

        return (
          <div className="mod_divider container" data-s3-module key="divider1">
            <div className="row">
              {divider1Img && (
                <div className="media">
                  <picture>
                    <img
                      src={divider1Img}
                      width={dividerSection1.image?.width || "55"}
                      height={dividerSection1.image?.height || "61"}
                      loading="lazy"
                      alt={dividerSection1.imageAlt || "Logo media"}
                      draggable="false"
                    />
                  </picture>
                </div>
              )}
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
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection1.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                <div className="columns-two vertical-align">
                  {bannerSection1.columns?.map((col, idx) => (
                    <div key={idx}>{renderRichText(col.content)}</div>
                  ))}
                </div>
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
                {servicesSection.servicesList?.length > 0 && (
                  <ul
                    className={servicesSection.columnsLayout ? "columns" : ""}
                  >
                    {servicesSection.servicesList.map((service, idx) => (
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

      case "halfImage":
        if (!halfImageSection?.show) return null;
        const halfImg = getResponsiveImageUrls(halfImageSection?.image);

        return (
          <div
            className={`mod_half_image viewport half-image container wow fadeInLeft background-navy ${
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
                    width="2200"
                    height="1468"
                    alt={halfImg.alt || ""}
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
                {storySection.heading && (
                  <h2 style={{ color: storySection.headingColor || undefined }}>
                    {storySection.heading}
                  </h2>
                )}
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
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection2.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                <div className="columns-two vertical-align">
                  {bannerSection2.columns?.map((col, idx) => (
                    <div key={idx}>{renderRichText(col.content)}</div>
                  ))}
                </div>
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

      case "cta":
        if (!ctaSection?.show) return null;

        return (
          <div
            className="mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-2"
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
                    style={{
                      backgroundColor:
                        ctaSection.ctaButton.backgroundColor || undefined,
                      color: ctaSection.ctaButton.textColor || undefined,
                    }}
                  >
                    {ctaSection.ctaButton.text || "Book an Appointment"}
                  </a>
                )}
              </div>
              <div className="media" />
            </div>
          </div>
        );

      case "divider2":
        if (!dividerSection2?.show) return null;
        const divider2Img = getImageUrl(dividerSection2?.image);

        return (
          <div className="mod_divider container" data-s3-module key="divider2">
            <div className="row">
              {divider2Img && (
                <div className="media">
                  <picture>
                    <img
                      src={divider2Img}
                      width={dividerSection2.image?.width || "55"}
                      height={dividerSection2.image?.height || "61"}
                      loading="lazy"
                      alt={dividerSection2.imageAlt || "Logo media"}
                      draggable="false"
                    />
                  </picture>
                </div>
              )}
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
            className="mod_banner dark hide-divider viewport background-14"
            data-s3-module
            key="banner3"
            style={{
              backgroundColor: bannerSection3.backgroundColor || undefined,
            }}
          >
            <div
              className="row wow fadeInUp"
              style={{
                visibility: "hidden",
                animationName: "none",
                color: bannerSection3.textColor || undefined,
              }}
            >
              <div className="content" data-api-key="top_content">
                {bannerSection3.heading && (
                  <h2 style={{ color: bannerSection3.textColor || undefined }}>
                    {bannerSection3.heading}
                  </h2>
                )}
                {renderRichText(bannerSection3.content)}
                {bannerSection3.servicesList?.length > 0 && (
                  <ul className={bannerSection3.columnsLayout ? "columns" : ""}>
                    {bannerSection3.servicesList.map((service, idx) => (
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
                  alt={finalMediaImg.alt || "sconce light fixture"}
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
          {renderSection("divider1")}
          {renderSection("banner1")}
          {renderSection("services")}
          {renderSection("halfImage")}
          {renderSection("story")}
          {renderSection("banner2")}
          {renderSection("twoColumn")}
          {renderSection("cta")}
          {renderSection("divider2")}
          {renderSection("banner3")}
          {renderSection("finalColumnMedia")}
        </>
      )}
    </main>
  );
};

export default LakeNonaContent;
