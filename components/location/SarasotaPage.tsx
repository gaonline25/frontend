"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/locations/fetchSarasotaPageData";

interface SarasotaPageProps {
  data: any;
}

const SarasotaPage: React.FC<SarasotaPageProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No data available</p>
      </div>
    );
  }

  const heroSection = data.heroSection || {};
  const heroImages = getResponsiveImageUrls(heroSection.backgroundImage);
  const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);

  const introColumnSection = data.introColumnSection || {};
  const boxGridSection1 = data.boxGridSection1 || {};
  const boxGrid1BgImages = getResponsiveImageUrls(
    boxGridSection1.backgroundImage
  );
  const dividerSection = data.dividerSection || {};
  const bannerSection1 = data.bannerSection1 || {};
  const banner1Images = getResponsiveImageUrls(bannerSection1.backgroundImage);
  const servicesColumnSection = data.servicesColumnSection || {};
  const halfImageSection1 = data.halfImageSection1 || {};
  const halfImage1Images = getResponsiveImageUrls(halfImageSection1.image);
  const simpleColumnSection1 = data.simpleColumnSection1 || {};
  const bannerSection2 = data.bannerSection2 || {};
  const banner2Images = getResponsiveImageUrls(bannerSection2.backgroundImage);
  const twoColumnSection = data.twoColumnSection || {};
  const ctaSection1 = data.ctaSection1 || {};
  const plasticSurgerySection = data.plasticSurgerySection || {};
  const bannerSection3 = data.bannerSection3 || {};
  const banner3Images = getResponsiveImageUrls(bannerSection3.backgroundImage);
  const finalColumnMedia = data.finalColumnMedia || {};
  const finalMediaImages = getResponsiveImageUrls(finalColumnMedia.mediaImage);

  return (
    <main id="main">
      {heroSection.show && (
        <div
          className={heroSection.cssClasses || "mod_hero banner mobile-stack"}
          data-s3-module=""
          style={{
            backgroundColor: heroSection.backgroundColor || undefined,
          }}
        >
          <div className="wrapper">
            {heroImages.mobile && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={`${heroImages.mobile}, ${heroImages.mobile} 2x`}
                  data-lazyload-srcset={`${heroImages.mobile}, ${heroImages.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${heroImages.tablet}, ${heroImages.tablet} 2x`}
                  data-lazyload-srcset={`${heroImages.tablet}, ${heroImages.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${heroImages.desktop}, ${heroImages.desktop} 2x`}
                  data-lazyload-srcset={`${heroImages.desktop}, ${heroImages.desktop} 2x`}
                />
                <source
                  srcSet={heroImages.large}
                  data-lazyload-srcset={heroImages.large}
                />
                <img
                  src={heroImages.large || heroImages.desktop}
                  data-lazyload-src={heroImages.large || heroImages.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="1994"
                  height="1206"
                  alt={heroImages.alt}
                  draggable="false"
                  data-lazyload-loaded="true"
                />
              </picture>
            )}
            <div className="row">
              <div className="inner">
                {heroSection.breadcrumbs &&
                  heroSection.breadcrumbs.length > 0 && (
                    <ul className="partial_breadcrumb" data-s3-partial="">
                      {heroSection.breadcrumbs.map(
                        (crumb: any, index: number) => (
                          <li key={index}>
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
                    {heroSection.title}
                  </h1>
                )}

                <p>
                  <a
                    className="btn white"
                    href="https://www.vagaro.com/goldfingersaestheticssarasota"
                    role="button"
                  >
                    Book now
                  </a>
                </p>
              </div>
            </div>
            {heroMediaImages.mobile && (
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImages.mobile}, ${heroMediaImages.mobile} 2x`}
                    data-lazyload-srcset={`${heroMediaImages.mobile}, ${heroMediaImages.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImages.tablet}, ${heroMediaImages.tablet} 2x`}
                    data-lazyload-srcset={`${heroMediaImages.tablet}, ${heroMediaImages.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImages.desktop}, ${heroMediaImages.desktop} 2x`}
                    data-lazyload-srcset={`${heroMediaImages.desktop}, ${heroMediaImages.desktop} 2x`}
                  />
                  <source
                    srcSet={heroMediaImages.large}
                    data-lazyload-srcset={heroMediaImages.large}
                  />
                  <img
                    src={heroMediaImages.large || heroMediaImages.desktop}
                    width="2120"
                    height="1415"
                    alt={heroMediaImages.alt}
                    draggable="false"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      )}

      {introColumnSection.show && (
        <div
          className={
            introColumnSection.cssClasses || "mod_column viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: introColumnSection.backgroundColor || undefined,
            color: introColumnSection.textColor || undefined,
          }}
        >
          <div
            className={introColumnSection.rowCssClasses || "row mb-30"}
            data-api-key="content"
          >
            {introColumnSection.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(introColumnSection.logo)}
                  width={introColumnSection.logoWidth || 58}
                  height={introColumnSection.logoHeight || 64}
                  loading="lazy"
                  alt={introColumnSection.logoAlt}
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
                {introColumnSection.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(introColumnSection.content),
                    }}
                  />
                )}
                {introColumnSection.ctaButton?.text && (
                  <p>
                    <a
                      href={introColumnSection.ctaButton.url}
                      className={
                        introColumnSection.ctaButton.className || "btn"
                      }
                    >
                      {introColumnSection.ctaButton.text}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {boxGridSection1.show && (
        <div
          className={
            boxGridSection1.cssClasses ||
            "mod_box_grid viewport container option-2 default bkg-image wider"
          }
          data-s3-module=""
          style={{
            backgroundColor: boxGridSection1.backgroundColor || undefined,
            color: boxGridSection1.textColor || undefined,
          }}
        >
          <div className="row">
            {(boxGridSection1.heading || boxGridSection1.intro) && (
              <div className="content-before">
                {boxGridSection1.heading && (
                  <h2
                    style={{
                      color: boxGridSection1.headingColor || undefined,
                    }}
                  >
                    {boxGridSection1.heading}{" "}
                    {boxGridSection1.headingSpan && (
                      <span className="block-desktop">
                        {boxGridSection1.headingSpan}
                      </span>
                    )}
                  </h2>
                )}
                {boxGridSection1.intro && <p>{boxGridSection1.intro}</p>}
              </div>
            )}
            {boxGridSection1.boxes && boxGridSection1.boxes.length > 0 && (
              <div className="boxes wider">
                {boxGridSection1.boxes.map((box: any, index: number) => (
                  <div
                    key={index}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    {box.heading && (
                      <h3 style={{ color: box.headingColor || undefined }}>
                        {box.heading}
                      </h3>
                    )}
                    {box.content && <p>{box.content}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
          {boxGrid1BgImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${boxGrid1BgImages.mobile}, ${boxGrid1BgImages.mobile} 2x`}
                data-lazyload-srcset={`${boxGrid1BgImages.mobile}, ${boxGrid1BgImages.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${boxGrid1BgImages.tablet}, ${boxGrid1BgImages.tablet} 2x`}
                data-lazyload-srcset={`${boxGrid1BgImages.tablet}, ${boxGrid1BgImages.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${boxGrid1BgImages.desktop}, ${boxGrid1BgImages.desktop} 2x`}
                data-lazyload-srcset={`${boxGrid1BgImages.desktop}, ${boxGrid1BgImages.desktop} 2x`}
              />
              <source
                srcSet={boxGrid1BgImages.large}
                data-lazyload-srcset={boxGrid1BgImages.large}
              />
              <img
                src={boxGrid1BgImages.large}
                data-lazyload-src={boxGrid1BgImages.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="979"
                alt={boxGrid1BgImages.alt}
                draggable="false"
                data-lazyload-loaded="true"
              />
            </picture>
          )}
        </div>
      )}

      {dividerSection.show && (
        <div
          className={dividerSection.cssClasses || "mod_divider container"}
          data-s3-module=""
          style={{
            backgroundColor: dividerSection.backgroundColor || undefined,
          }}
        >
          <div className="row">
            <div className="media">
              {dividerSection.logo && (
                <picture className="">
                  <img
                    src={getImageUrl(dividerSection.logo)}
                    width={dividerSection.logoWidth || 55}
                    height={dividerSection.logoHeight || 61}
                    loading="lazy"
                    alt={dividerSection.logoAlt}
                    draggable="false"
                  />
                </picture>
              )}
            </div>
          </div>
        </div>
      )}

      {bannerSection1.show && (
        <div
          className={
            bannerSection1.cssClasses ||
            "mod_banner dark hide-divider viewport background-3"
          }
          data-s3-module=""
          style={{
            backgroundColor: bannerSection1.backgroundColor || undefined,
            color: bannerSection1.textColor || undefined,
          }}
        >
          <div
            className={`row wow ${bannerSection1.animationClass || "fadeInUp"}`}
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div className="content" data-api-key="top_content">
              {bannerSection1.columns && bannerSection1.columns.length > 0 && (
                <div
                  className={`${bannerSection1.layoutType || "columns-two"} ${
                    bannerSection1.verticalAlign ? "vertical-align" : ""
                  }`}
                >
                  {bannerSection1.columns.map((column: any, index: number) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(column.content),
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          {banner1Images.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner1Images.mobile}, ${banner1Images.mobile} 2x`}
                data-lazyload-srcset={`${banner1Images.mobile}, ${banner1Images.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner1Images.tablet}, ${banner1Images.tablet} 2x`}
                data-lazyload-srcset={`${banner1Images.tablet}, ${banner1Images.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner1Images.desktop}, ${banner1Images.desktop} 2x`}
                data-lazyload-srcset={`${banner1Images.desktop}, ${banner1Images.desktop} 2x`}
              />
              <source
                srcSet={banner1Images.large}
                data-lazyload-srcset={banner1Images.large}
              />
              <img
                src={banner1Images.large}
                data-lazyload-src={banner1Images.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={banner1Images.alt}
                draggable="false"
                data-lazyload-loaded="true"
              />
            </picture>
          )}
        </div>
      )}

      {servicesColumnSection.show && (
        <div
          className={
            servicesColumnSection.cssClasses || "mod_column viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: servicesColumnSection.backgroundColor || undefined,
            color: servicesColumnSection.textColor || undefined,
          }}
        >
          <div
            className={servicesColumnSection.rowCssClasses || "row mt-30 mb-30"}
            data-api-key="content"
          >
            <div className="item">
              {servicesColumnSection.heading && (
                <h2
                  className={
                    servicesColumnSection.headingAlign || "text-center"
                  }
                  style={{
                    color: servicesColumnSection.headingColor || undefined,
                  }}
                >
                  {servicesColumnSection.heading}
                </h2>
              )}
              {servicesColumnSection.intro && (
                <p
                  className={servicesColumnSection.introAlign || "text-center"}
                >
                  {servicesColumnSection.intro}
                </p>
              )}
              {servicesColumnSection.services &&
                servicesColumnSection.services.length > 0 && (
                  <ul>
                    <ul
                      className={
                        servicesColumnSection.columnsLayout ? "columns" : ""
                      }
                    >
                      {servicesColumnSection.services.map(
                        (service: any, index: number) => (
                          <li key={index}>
                            <strong>{service.name}</strong>
                            {service.description && `: ${service.description}`}
                          </li>
                        )
                      )}
                    </ul>
                  </ul>
                )}
            </div>
          </div>
        </div>
      )}

      {halfImageSection1.show && (
        <div
          className={
            halfImageSection1.cssClasses ||
            "mod_half_image viewport half-image container wow fadeInLeft background-navy"
          }
          data-s3-module=""
          style={{
            backgroundColor: halfImageSection1.backgroundColor || undefined,
            color: halfImageSection1.textColor || undefined,
            visibility: "visible",
            animationName: "fadeInLeft",
          }}
        >
          <div
            className={
              halfImageSection1.rowCssClasses ||
              "row half-image-row flipped mt-0 mb-0"
            }
          >
            {halfImage1Images.mobile && (
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImage1Images.mobile}, ${halfImage1Images.mobile} 2x`}
                    data-lazyload-srcset={`${halfImage1Images.mobile}, ${halfImage1Images.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${halfImage1Images.tablet}, ${halfImage1Images.tablet} 2x`}
                    data-lazyload-srcset={`${halfImage1Images.tablet}, ${halfImage1Images.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${halfImage1Images.desktop}, ${halfImage1Images.desktop} 2x`}
                    data-lazyload-srcset={`${halfImage1Images.desktop}, ${halfImage1Images.desktop} 2x`}
                  />
                  <source
                    srcSet={halfImage1Images.large}
                    data-lazyload-srcset={halfImage1Images.large}
                  />
                  <img
                    src={halfImage1Images.large}
                    data-lazyload-src={halfImage1Images.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="2120"
                    height="1415"
                    alt={halfImage1Images.alt}
                    draggable="false"
                    data-api-key="image"
                    data-lazyload-loaded="true"
                  />
                </picture>
              </div>
            )}
            <div className={`copy ${halfImageSection1.padded ? "padded" : ""}`}>
              <div className="inner">
                <div className="content" data-api-key="content">
                  {halfImageSection1.heading && (
                    <h2
                      style={{
                        color: halfImageSection1.headingColor || undefined,
                      }}
                    >
                      {halfImageSection1.heading}
                    </h2>
                  )}
                  {halfImageSection1.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImageSection1.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {simpleColumnSection1.show && (
        <div
          className={
            simpleColumnSection1.cssClasses || "mod_column viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: simpleColumnSection1.backgroundColor || undefined,
            color: simpleColumnSection1.textColor || undefined,
          }}
        >
          <div
            className={simpleColumnSection1.rowCssClasses || "row mt-30 mb-30"}
            data-api-key="content"
          >
            <div className="item">
              {simpleColumnSection1.heading && (
                <h2
                  style={{
                    color: simpleColumnSection1.headingColor || undefined,
                  }}
                >
                  {simpleColumnSection1.heading}
                </h2>
              )}
              {simpleColumnSection1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(simpleColumnSection1.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {bannerSection2.show && (
        <div
          className={
            bannerSection2.cssClasses ||
            "mod_banner dark hide-divider viewport background-3"
          }
          data-s3-module=""
          style={{
            backgroundColor: bannerSection2.backgroundColor || undefined,
            color: bannerSection2.textColor || undefined,
          }}
        >
          <div
            className={`row wow ${bannerSection2.animationClass || "fadeInUp"}`}
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div className="content" data-api-key="top_content">
              {bannerSection2.columns && bannerSection2.columns.length > 0 && (
                <div
                  className={`${bannerSection2.layoutType || "columns-two"} ${
                    bannerSection2.verticalAlign ? "vertical-align" : ""
                  }`}
                >
                  {bannerSection2.columns.map((column: any, index: number) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(column.content),
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          {banner2Images.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner2Images.mobile}, ${banner2Images.mobile} 2x`}
                data-lazyload-srcset={`${banner2Images.mobile}, ${banner2Images.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner2Images.tablet}, ${banner2Images.tablet} 2x`}
                data-lazyload-srcset={`${banner2Images.tablet}, ${banner2Images.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner2Images.desktop}, ${banner2Images.desktop} 2x`}
                data-lazyload-srcset={`${banner2Images.desktop}, ${banner2Images.desktop} 2x`}
              />
              <source
                srcSet={banner2Images.large}
                data-lazyload-srcset={banner2Images.large}
              />
              <img
                src={banner2Images.large}
                data-lazyload-src={banner2Images.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={banner2Images.alt}
                draggable="false"
                data-lazyload-loaded="true"
              />
            </picture>
          )}
        </div>
      )}

      {twoColumnSection.show && (
        <div
          className={
            twoColumnSection.cssClasses || "mod_columns_two viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: twoColumnSection.backgroundColor || undefined,
            color: twoColumnSection.textColor || undefined,
          }}
        >
          <div className={twoColumnSection.rowCssClasses || "row pb-0"}>
            <div
              className={`content ${
                twoColumnSection.verticalAlign ? "vertical-align" : ""
              }`}
            >
              <div
                className={`item wow ${
                  twoColumnSection.leftColumn?.animationClass || "fadeInLeft"
                }`}
                data-api-key="content_left"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                {twoColumnSection.leftColumn?.heading && (
                  <h2
                    style={{
                      color:
                        twoColumnSection.leftColumn.headingColor || undefined,
                    }}
                  >
                    {twoColumnSection.leftColumn.heading}{" "}
                    {twoColumnSection.leftColumn.headingSmall && (
                      <span className="small">
                        {twoColumnSection.leftColumn.headingSmall}
                      </span>
                    )}
                  </h2>
                )}
                {twoColumnSection.leftColumn?.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(
                        twoColumnSection.leftColumn.content
                      ),
                    }}
                  />
                )}
              </div>
              <div
                className={`item wow ${
                  twoColumnSection.rightColumn?.animationClass || "fadeInRight"
                }`}
                data-api-key="content_right"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                {twoColumnSection.rightColumn?.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(
                        twoColumnSection.rightColumn.content
                      ),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {ctaSection1.show && (
        <div
          className={
            ctaSection1.cssClasses ||
            "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-2"
          }
          data-s3-module=""
          style={{
            backgroundColor: ctaSection1.backgroundColor || undefined,
            color: ctaSection1.textColor || undefined,
            visibility: "visible",
            animationName: "fadeInRight",
          }}
        >
          <div className="row">
            <div className="text">
              {ctaSection1.heading && (
                <h2>
                  {ctaSection1.headingLink ? (
                    <a href={ctaSection1.headingLink}>{ctaSection1.heading}</a>
                  ) : (
                    ctaSection1.heading
                  )}
                </h2>
              )}
              {ctaSection1.ctaButton?.text && (
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
      )}

      {plasticSurgerySection.show && (
        <div
          className={
            plasticSurgerySection.cssClasses || "mod_column viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: plasticSurgerySection.backgroundColor || undefined,
            color: plasticSurgerySection.textColor || undefined,
          }}
        >
          <div
            className={plasticSurgerySection.rowCssClasses || "row mt-30 mb-30"}
            data-api-key="content"
          >
            <div className="item">
              {plasticSurgerySection.heading && (
                <h2
                  className={
                    plasticSurgerySection.headingAlign || "text-center"
                  }
                  style={{
                    color: plasticSurgerySection.headingColor || undefined,
                  }}
                >
                  {plasticSurgerySection.heading}
                </h2>
              )}
              {plasticSurgerySection.intro && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(plasticSurgerySection.intro),
                  }}
                />
              )}
              {plasticSurgerySection.procedures &&
                plasticSurgerySection.procedures.length > 0 && (
                  <ul
                    className={
                      plasticSurgerySection.columnsLayout ? "columns" : ""
                    }
                  >
                    {plasticSurgerySection.procedures.map(
                      (procedure: any, index: number) => (
                        <li key={index}>
                          <strong>{procedure.name}</strong>
                          {procedure.description &&
                            ` – ${procedure.description}`}
                        </li>
                      )
                    )}
                  </ul>
                )}
            </div>
          </div>
        </div>
      )}

      {bannerSection3.show && (
        <div
          className={
            bannerSection3.cssClasses ||
            "mod_banner dark hide-divider viewport background-14"
          }
          data-s3-module=""
          style={{
            backgroundColor: bannerSection3.backgroundColor || undefined,
            color: bannerSection3.textColor || undefined,
          }}
        >
          <div
            className={`row wow ${bannerSection3.animationClass || "fadeInUp"}`}
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div className="content" data-api-key="top_content">
              {bannerSection3.heading && (
                <h2 style={{ color: bannerSection3.headingColor || undefined }}>
                  {bannerSection3.heading}
                </h2>
              )}
              {bannerSection3.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(bannerSection3.content),
                  }}
                />
              )}
              {bannerSection3.procedures &&
                bannerSection3.procedures.length > 0 && (
                  <ul>
                    <ul
                      className={bannerSection3.columnsLayout ? "columns" : ""}
                    >
                      {bannerSection3.procedures.map(
                        (procedure: any, index: number) => (
                          <li key={index}>
                            {procedure.url ? (
                              <a href={procedure.url}>
                                <strong>{procedure.name}</strong>
                              </a>
                            ) : (
                              <strong>{procedure.name}:</strong>
                            )}
                            {procedure.description &&
                              ` ${procedure.description}`}
                          </li>
                        )
                      )}
                    </ul>
                  </ul>
                )}
            </div>
          </div>
          {banner3Images.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner3Images.mobile}, ${banner3Images.mobile} 2x`}
                data-lazyload-srcset={`${banner3Images.mobile}, ${banner3Images.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner3Images.tablet}, ${banner3Images.tablet} 2x`}
                data-lazyload-srcset={`${banner3Images.tablet}, ${banner3Images.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner3Images.desktop}, ${banner3Images.desktop} 2x`}
                data-lazyload-srcset={`${banner3Images.desktop}, ${banner3Images.desktop} 2x`}
              />
              <source
                srcSet={banner3Images.large}
                data-lazyload-srcset={banner3Images.large}
              />
              <img
                src={banner3Images.large}
                data-lazyload-src={banner3Images.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={banner3Images.alt}
                draggable="false"
                data-lazyload-loaded="true"
              />
            </picture>
          )}
        </div>
      )}

      {finalColumnMedia.show && (
        <div
          className={
            finalColumnMedia.cssClasses ||
            "mod_column viewport container has-media"
          }
          data-s3-module=""
          style={{
            backgroundColor: finalColumnMedia.backgroundColor || undefined,
            color: finalColumnMedia.textColor || undefined,
          }}
        >
          <div
            className={
              finalColumnMedia.rowCssClasses ||
              `row ${
                finalColumnMedia.mediaPosition === "left"
                  ? "media-left"
                  : "media-right"
              }`
            }
            data-api-key="content"
          >
            <div className="item">
              {finalColumnMedia.heading && (
                <h2
                  style={{ color: finalColumnMedia.headingColor || undefined }}
                >
                  {finalColumnMedia.heading}
                </h2>
              )}
              {finalColumnMedia.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(finalColumnMedia.content),
                  }}
                />
              )}
            </div>
            {finalMediaImages.mobile && (
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet={`${finalMediaImages.mobile}, ${finalMediaImages.mobile} 2x`}
                  data-lazyload-srcset={`${finalMediaImages.mobile}, ${finalMediaImages.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${finalMediaImages.tablet}, ${finalMediaImages.tablet} 2x`}
                  data-lazyload-srcset={`${finalMediaImages.tablet}, ${finalMediaImages.tablet} 2x`}
                />
                <source
                  srcSet={finalMediaImages.desktop}
                  data-lazyload-srcset={finalMediaImages.desktop}
                />
                <img
                  src={finalMediaImages.desktop}
                  data-lazyload-src={finalMediaImages.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={finalMediaImages.alt}
                  draggable="false"
                  data-lazyload-loaded="true"
                />
              </picture>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default SarasotaPage;
