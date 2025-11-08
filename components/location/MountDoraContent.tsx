"use client";

import React from "react";
// import { MountDoraPageData } from "../types/payload";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/locations/fetchMountDoraPageData";

export interface PayloadImage {
  cloudinary_url?: string;
  url?: string;
  alt?: string;
}

export interface ResponsiveImageGroup {
  mobile?: PayloadImage | string;
  tablet?: PayloadImage | string;
  desktop?: PayloadImage | string;
  large?: PayloadImage | string;
  alt?: string;
}

export interface LexicalContent {
  root: any;
}

export interface MountDoraPageData {
  componentName?: string;
  heroSection?: {
    show?: boolean;
    backgroundColor?: string;
    backgroundImage?: ResponsiveImageGroup;
    breadcrumbs?: Array<{
      label: string;
      url: string;
      ariaLabel?: string;
    }>;
    title?: LexicalContent;
    titleColor?: string;
    description?: LexicalContent;
    descriptionColor?: string;
    mediaImage?: ResponsiveImageGroup;
  };
  columnSection1?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    marginBottom?: string;
    logo?: PayloadImage | string;
    logoAlt?: string;
    heading?: LexicalContent;
    headingColor?: string;
    content?: LexicalContent;
    ctaButton?: {
      show?: boolean;
      text?: string;
      url?: string;
      className?: string;
      backgroundColor?: string;
      textColor?: string;
    };
  };
  boxGridSection?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    className?: string;
    boxes?: Array<{
      heading?: string;
      headingColor?: string;
      content?: LexicalContent;
      textColor?: string;
      animationClass?: string;
    }>;
    backgroundImage?: ResponsiveImageGroup;
  };
  columnMediaSection?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    marginTop?: string;
    paddingBottom?: string;
    mediaPosition?: string;
    heading?: string;
    headingColor?: string;
    content?: LexicalContent;
    mediaImage?: ResponsiveImageGroup;
  };
  twoColumnSection?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    columns?: Array<{
      content?: LexicalContent;
      animationClass?: string;
      textColor?: string;
    }>;
  };
  ctaGeneralSection?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    className?: string;
    marginTop?: string;
    marginBottom?: string;
    animationClass?: string;
    heading?: string;
    headingLink?: string;
    headingColor?: string;
    ctaButton?: {
      show?: boolean;
      text?: string;
      url?: string;
      className?: string;
      backgroundColor?: string;
      textColor?: string;
    };
  };
  halfImageSection1?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    flipped?: boolean;
    animationClass?: string;
    heading?: LexicalContent;
    headingColor?: string;
    content?: LexicalContent;
    image?: ResponsiveImageGroup;
  };
  dividerSection?: {
    show?: boolean;
    backgroundColor?: string;
    logo?: PayloadImage | string;
    logoAlt?: string;
  };
  halfImageSection2?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    flipped?: boolean;
    marginTop?: string;
    marginBottom?: string;
    animationClass?: string;
    heading?: LexicalContent;
    headingColor?: string;
    content?: LexicalContent;
    image?: ResponsiveImageGroup;
  };
  columnSection2?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    marginTop?: string;
    marginBottom?: string;
    heading?: string;
    headingColor?: string;
    introContent?: LexicalContent;
    servicesList?: Array<{
      serviceName?: string;
      serviceNameBold?: boolean;
      serviceUrl?: string;
      description?: string;
      textColor?: string;
    }>;
    columnsLayout?: boolean;
  };
  bannerSection?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    isDark?: boolean;
    hideDivider?: boolean;
    animationClass?: string;
    backgroundImage?: ResponsiveImageGroup;
    heading?: string;
    headingColor?: string;
    introContent?: LexicalContent;
    servicesList?: Array<{
      serviceName?: string;
      serviceNameBold?: boolean;
      serviceUrl?: string;
      description?: string;
      textColor?: string;
    }>;
  };
  finalColumnSection?: {
    show?: boolean;
    backgroundColor?: string;
    textColor?: string;
    marginTop?: string;
    layout?: string;
    columns?: Array<{
      content?: LexicalContent;
      textColor?: string;
    }>;
  };
  sectionOrder?: Array<{
    section: string;
  }>;
}

interface MountDoraContentProps {
  data: MountDoraPageData;
}

const MountDoraContent: React.FC<MountDoraContentProps> = ({ data }) => {
  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <p>No data available</p>
      </div>
    );
  }

  const heroBgImage = getResponsiveImageUrls(data.heroSection?.backgroundImage);
  const heroMediaImage = getResponsiveImageUrls(data.heroSection?.mediaImage);
  const columnSection1Logo = getImageUrl(data.columnSection1?.logo);
  const boxGridBgImage = getResponsiveImageUrls(
    data.boxGridSection?.backgroundImage
  );
  const columnMediaImage = getResponsiveImageUrls(
    data.columnMediaSection?.mediaImage
  );
  const halfImage1 = getResponsiveImageUrls(data.halfImageSection1?.image);
  const dividerLogo = getImageUrl(data.dividerSection?.logo);
  const halfImage2 = getResponsiveImageUrls(data.halfImageSection2?.image);
  const bannerBgImage = getResponsiveImageUrls(
    data.bannerSection?.backgroundImage
  );

  return (
    <main id="main">
      {/* Hero Module */}
      {data.heroSection?.show !== false && (
        <div className="mod_hero banner mobile-stack" data-s3-module="">
          <div className="wrapper">
            <picture className="background">
              {heroBgImage.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${heroBgImage.mobile}, ${heroBgImage.mobile} 2x`}
                />
              )}
              {heroBgImage.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${heroBgImage.tablet}, ${heroBgImage.tablet} 2x`}
                />
              )}
              {heroBgImage.desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${heroBgImage.desktop}, ${heroBgImage.desktop} 2x`}
                />
              )}
              {heroBgImage.large && <source srcSet={heroBgImage.large} />}
              <img
                src={
                  heroBgImage.large || heroBgImage.desktop || "/placeholder.jpg"
                }
                loading="lazy"
                width="1994"
                height="1206"
                alt={heroBgImage.alt || "Background Texture"}
                draggable="false"
              />
            </picture>
            <div className="row">
              <div className="inner">
                {data.heroSection?.breadcrumbs &&
                  data.heroSection.breadcrumbs.length > 0 && (
                    <ul className="partial_breadcrumb" data-s3-partial="">
                      {data.heroSection.breadcrumbs.map((crumb, index) => (
                        <li key={index}>
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
                {data.heroSection?.title && (
                  <h1
                    style={{ color: data.heroSection?.titleColor }}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(data.heroSection.title),
                    }}
                  />
                )}
                {data.heroSection?.description && (
                  <div
                    className="text"
                    style={{ color: data.heroSection?.descriptionColor }}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(data.heroSection.description),
                    }}
                  />
                )}
              </div>
            </div>
            <div className="media">
              <picture className="background">
                {heroMediaImage.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImage.mobile}, ${heroMediaImage.mobile} 2x`}
                  />
                )}
                {heroMediaImage.tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImage.tablet}, ${heroMediaImage.tablet} 2x`}
                  />
                )}
                {heroMediaImage.desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImage.desktop}, ${heroMediaImage.desktop} 2x`}
                  />
                )}
                {heroMediaImage.large && (
                  <source srcSet={heroMediaImage.large} />
                )}
                <img
                  src={
                    heroMediaImage.large ||
                    heroMediaImage.desktop ||
                    "/placeholder.jpg"
                  }
                  width="1920"
                  height="1206"
                  alt={heroMediaImage.alt || "empty pier at sunset"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Column Module */}
      {data.columnSection1?.show !== false && (
        <div className="mod_column viewport container" data-s3-module="">
          <div
            className={`row ${data.columnSection1?.marginBottom || "mb-30"}`}
            data-api-key="content"
          >
            {columnSection1Logo && (
              <picture className="logo">
                <img
                  src={columnSection1Logo}
                  width="58"
                  height="64"
                  loading="lazy"
                  alt={
                    data.columnSection1?.logoAlt || "Goldfingers aesthetic logo"
                  }
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="item">
              <div className="mw-80 text-center">
                {data.columnSection1?.heading && (
                  <div
                    style={{ color: data.columnSection1?.headingColor }}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(data.columnSection1.heading),
                    }}
                  />
                )}
                {data.columnSection1?.content && (
                  <div
                    style={{ color: data.columnSection1?.textColor }}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(data.columnSection1.content),
                    }}
                  />
                )}
                {data.columnSection1?.ctaButton?.show !== false &&
                  data.columnSection1?.ctaButton?.url && (
                    <p>
                      <a
                        href={data.columnSection1.ctaButton.url}
                        className={
                          data.columnSection1.ctaButton.className || "btn"
                        }
                        style={{
                          backgroundColor:
                            data.columnSection1.ctaButton.backgroundColor,
                          color: data.columnSection1.ctaButton.textColor,
                        }}
                      >
                        {data.columnSection1.ctaButton.text ||
                          "Explore Our Medical Spa Services"}
                      </a>
                    </p>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Box Grid Module */}
      {data.boxGridSection?.show !== false && (
        <div
          className={`mod_box_grid viewport container ${
            data.boxGridSection?.className || "option-1 single bkg-image"
          }`}
          data-s3-module=""
        >
          <div className="row">
            <div className="boxes">
              {data.boxGridSection?.boxes?.map((box, index) => (
                <div
                  key={index}
                  className={`box wow ${box.animationClass || "fadeInUp"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  {box.heading && (
                    <h2 style={{ color: box.headingColor }}>{box.heading}</h2>
                  )}
                  {box.content && (
                    <div
                      style={{ color: box.textColor }}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(box.content),
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          {boxGridBgImage.large && (
            <picture className="background">
              {boxGridBgImage.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${boxGridBgImage.mobile}, ${boxGridBgImage.mobile} 2x`}
                />
              )}
              {boxGridBgImage.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${boxGridBgImage.tablet}, ${boxGridBgImage.tablet} 2x`}
                />
              )}
              {boxGridBgImage.desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${boxGridBgImage.desktop}, ${boxGridBgImage.desktop} 2x`}
                />
              )}
              <source srcSet={boxGridBgImage.large} />
              <img
                src={boxGridBgImage.large}
                loading="lazy"
                width="2200"
                height="1726"
                alt={boxGridBgImage.alt || "Background media"}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Column Module with Media */}
      {data.columnMediaSection?.show !== false && (
        <div
          className="mod_column viewport container has-media"
          data-s3-module=""
        >
          <div
            className={`row ${data.columnMediaSection?.marginTop || "mt-30"} ${
              data.columnMediaSection?.paddingBottom || "pb-0"
            } ${data.columnMediaSection?.mediaPosition || "media-left"}`}
            data-api-key="content"
          >
            <div className="item">
              {data.columnMediaSection?.heading && (
                <h2 style={{ color: data.columnMediaSection?.headingColor }}>
                  {data.columnMediaSection.heading}
                </h2>
              )}
              {data.columnMediaSection?.content && (
                <div
                  style={{ color: data.columnMediaSection?.textColor }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(data.columnMediaSection.content),
                  }}
                />
              )}
            </div>
            <picture className="media">
              {columnMediaImage.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${columnMediaImage.mobile}, ${columnMediaImage.mobile} 2x`}
                />
              )}
              {columnMediaImage.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${columnMediaImage.tablet}, ${columnMediaImage.tablet} 2x`}
                />
              )}
              {columnMediaImage.desktop && (
                <source srcSet={columnMediaImage.desktop} />
              )}
              <img
                src={
                  columnMediaImage.desktop ||
                  columnMediaImage.tablet ||
                  "/placeholder.jpg"
                }
                loading="lazy"
                width="904"
                height="1062"
                alt={columnMediaImage.alt || "skyline"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {/* Two Column Module */}
      {data.twoColumnSection?.show !== false && (
        <div className="mod_columns_two viewport container" data-s3-module="">
          <div className="row">
            <div className="content">
              {data.twoColumnSection?.columns?.map((column, index) => (
                <div
                  key={index}
                  className={`item wow ${column.animationClass || ""}`}
                  data-api-key={`content_${index === 0 ? "left" : "right"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  {column.content && (
                    <div
                      style={{ color: column.textColor }}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(column.content),
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA General Module */}
      {data.ctaGeneralSection?.show !== false && (
        <div
          className={`mod_cta_general viewport container ${
            data.ctaGeneralSection?.className || "cta thin"
          } wow ${data.ctaGeneralSection?.animationClass || "fadeInRight"} ${
            data.ctaGeneralSection?.marginTop || "mt-0"
          } ${data.ctaGeneralSection?.marginBottom || "mb-0"} ${
            data.ctaGeneralSection?.backgroundColor || "background-2"
          }`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="row">
            <div className="text">
              {data.ctaGeneralSection?.heading && (
                <h2 style={{ color: data.ctaGeneralSection?.headingColor }}>
                  {data.ctaGeneralSection.headingLink ? (
                    <a href={data.ctaGeneralSection.headingLink}>
                      {data.ctaGeneralSection.heading}
                    </a>
                  ) : (
                    data.ctaGeneralSection.heading
                  )}
                </h2>
              )}
              {data.ctaGeneralSection?.ctaButton?.show !== false &&
                data.ctaGeneralSection?.ctaButton?.url && (
                  <a
                    href={data.ctaGeneralSection.ctaButton.url}
                    className={
                      data.ctaGeneralSection.ctaButton.className || "btn white"
                    }
                    style={{
                      backgroundColor:
                        data.ctaGeneralSection.ctaButton.backgroundColor,
                      color: data.ctaGeneralSection.ctaButton.textColor,
                    }}
                  >
                    {data.ctaGeneralSection.ctaButton.text ||
                      "Book an Appointment"}
                  </a>
                )}
            </div>
            <div className="media" />
          </div>
        </div>
      )}

      {/* Half Image Module 1 */}
      {data.halfImageSection1?.show !== false && (
        <div
          className={`mod_half_image viewport half-image container wow ${
            data.halfImageSection1?.animationClass || "fadeInLeft"
          } ${data.halfImageSection1?.backgroundColor || "background-navy"}`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={`row half-image-row ${
              data.halfImageSection1?.flipped ? "flipped" : ""
            }`}
          >
            <div className="media">
              <picture className="background">
                {halfImage1.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImage1.mobile}, ${halfImage1.mobile} 2x`}
                  />
                )}
                {halfImage1.tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${halfImage1.tablet}, ${halfImage1.tablet} 2x`}
                  />
                )}
                {halfImage1.desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${halfImage1.desktop}, ${halfImage1.desktop} 2x`}
                  />
                )}
                {halfImage1.large && <source srcSet={halfImage1.large} />}
                <img
                  src={
                    halfImage1.large || halfImage1.desktop || "/placeholder.jpg"
                  }
                  loading="lazy"
                  width="1832"
                  height="1824"
                  alt={halfImage1.alt || "provider portrait"}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {data.halfImageSection1?.heading && (
                    <div
                      style={{ color: data.halfImageSection1?.headingColor }}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(data.halfImageSection1.heading),
                      }}
                    />
                  )}
                  {data.halfImageSection1?.content && (
                    <div
                      style={{ color: data.halfImageSection1?.textColor }}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(data.halfImageSection1.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divider Module */}
      {data.dividerSection?.show !== false && (
        <div className="mod_divider container" data-s3-module="">
          <div className="row">
            <div className="media">
              {dividerLogo && (
                <picture className="">
                  <img
                    src={dividerLogo}
                    width="55"
                    height="61"
                    loading="lazy"
                    alt={data.dividerSection?.logoAlt || "Logo media"}
                    draggable="false"
                  />
                </picture>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Half Image Module 2 */}
      {data.halfImageSection2?.show !== false && (
        <div
          className={`mod_half_image viewport half-image container wow ${
            data.halfImageSection2?.animationClass || "fadeInLeft"
          } ${data.halfImageSection2?.backgroundColor || "background-navy"}`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={`row half-image-row ${
              data.halfImageSection2?.flipped ? "flipped" : ""
            } ${data.halfImageSection2?.marginTop || "mt-0"} ${
              data.halfImageSection2?.marginBottom || "mb-0"
            }`}
          >
            <div className="media">
              <picture className="background">
                {halfImage2.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImage2.mobile}, ${halfImage2.mobile} 2x`}
                  />
                )}
                {halfImage2.tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${halfImage2.tablet}, ${halfImage2.tablet} 2x`}
                  />
                )}
                {halfImage2.desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${halfImage2.desktop}, ${halfImage2.desktop} 2x`}
                  />
                )}
                {halfImage2.large && <source srcSet={halfImage2.large} />}
                <img
                  src={
                    halfImage2.large || halfImage2.desktop || "/placeholder.jpg"
                  }
                  loading="lazy"
                  width="1832"
                  height="1824"
                  alt={halfImage2.alt || "lake at sunset"}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {data.halfImageSection2?.heading && (
                    <div
                      style={{ color: data.halfImageSection2?.headingColor }}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(data.halfImageSection2.heading),
                      }}
                    />
                  )}
                  {data.halfImageSection2?.content && (
                    <div
                      style={{ color: data.halfImageSection2?.textColor }}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(data.halfImageSection2.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Column Module 2 (Services) */}
      {data.columnSection2?.show !== false && (
        <div className="mod_column viewport container" data-s3-module="">
          <div
            className={`row ${data.columnSection2?.marginTop || "mt-30"} ${
              data.columnSection2?.marginBottom || "mb-30"
            }`}
            data-api-key="content"
          >
            <div className="item">
              {data.columnSection2?.heading && (
                <h2 style={{ color: data.columnSection2?.headingColor }}>
                  {data.columnSection2.heading}
                </h2>
              )}
              {data.columnSection2?.introContent && (
                <div
                  style={{ color: data.columnSection2?.textColor }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(data.columnSection2.introContent),
                  }}
                />
              )}
              {data.columnSection2?.servicesList &&
                data.columnSection2.servicesList.length > 0 && (
                  <ul
                    className={
                      data.columnSection2?.columnsLayout ? "columns" : ""
                    }
                  >
                    {data.columnSection2.servicesList.map((service, index) => (
                      <li key={index} style={{ color: service.textColor }}>
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
      )}

      {/* Banner Module */}
      {data.bannerSection?.show !== false && (
        <div
          className={`mod_banner ${data.bannerSection?.isDark ? "dark" : ""} ${
            data.bannerSection?.hideDivider ? "hide-divider" : ""
          } viewport ${data.bannerSection?.backgroundColor || "background-2"}`}
          data-s3-module=""
        >
          <div
            className={`row wow ${
              data.bannerSection?.animationClass || "fadeInUp"
            }`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              {data.bannerSection?.heading && (
                <h2 style={{ color: data.bannerSection?.headingColor }}>
                  {data.bannerSection.heading}
                </h2>
              )}
              {data.bannerSection?.introContent && (
                <div
                  style={{ color: data.bannerSection?.textColor }}
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(data.bannerSection.introContent),
                  }}
                />
              )}
              {data.bannerSection?.servicesList &&
                data.bannerSection.servicesList.length > 0 && (
                  <ul>
                    {data.bannerSection.servicesList.map((service, index) => (
                      <li key={index} style={{ color: service.textColor }}>
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
          {bannerBgImage.large && (
            <picture className="background">
              {bannerBgImage.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${bannerBgImage.mobile}, ${bannerBgImage.mobile} 2x`}
                />
              )}
              {bannerBgImage.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${bannerBgImage.tablet}, ${bannerBgImage.tablet} 2x`}
                />
              )}
              {bannerBgImage.desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${bannerBgImage.desktop}, ${bannerBgImage.desktop} 2x`}
                />
              )}
              <source srcSet={bannerBgImage.large} />
              <img
                src={bannerBgImage.large}
                loading="lazy"
                width="2200"
                height="802"
                alt={bannerBgImage.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Final Column Module */}
      {data.finalColumnSection?.show !== false && (
        <div className="mod_column viewport container" data-s3-module="">
          <div
            className={`row ${data.finalColumnSection?.marginTop || "mt-30"}`}
            data-api-key="content"
          >
            <div className="item">
              <div
                className={
                  data.finalColumnSection?.layout ||
                  "columns-two vertical-align"
                }
              >
                {data.finalColumnSection?.columns?.map((column, index) => (
                  <div key={index}>
                    {column.content && (
                      <div
                        style={{ color: column.textColor }}
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(column.content),
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MountDoraContent;
