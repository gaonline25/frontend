"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  getImageUrl,
  lexicalToHtml,
} from "@/lib/api/locations/fetchOcalaLocationPageComponent";

interface OcalaLocationPageProps {
  data: any;
}

const OcalaLocationPage: React.FC<OcalaLocationPageProps> = ({
  data: pageData,
}) => {
  if (!pageData) {
    return <div>No data available</div>;
  }

  const heroSection = pageData.heroSection;
  const introColumnSection = pageData.introColumnSection;
  const bannerSection1 = pageData.bannerSection1;
  const halfImageSection1 = pageData.halfImageSection1;
  const ctaSection1 = pageData.ctaSection1;
  const columnMediaSection1 = pageData.columnMediaSection1;
  const halfImageSection2 = pageData.halfImageSection2;
  const dividerSection = pageData.dividerSection;
  const halfImageSection3 = pageData.halfImageSection3;
  const columnMediaSection2 = pageData.columnMediaSection2;
  const bannerSection2 = pageData.bannerSection2;
  const boxGridSection = pageData.boxGridSection;
  const bannerSection3 = pageData.bannerSection3;

  const heroBackgroundImages = getResponsiveImageUrls(
    heroSection?.backgroundImage
  );
  const heroMediaImages = getResponsiveImageUrls(heroSection?.mediaImage);
  const banner1BackgroundImages = getResponsiveImageUrls(
    bannerSection1?.backgroundImage
  );
  const halfImage1Images = getResponsiveImageUrls(halfImageSection1?.image);
  const columnMedia1Images = getResponsiveImageUrls(
    columnMediaSection1?.mediaImage
  );
  const halfImage2Images = getResponsiveImageUrls(halfImageSection2?.image);
  const halfImage3Images = getResponsiveImageUrls(halfImageSection3?.image);
  const columnMedia2Images = getResponsiveImageUrls(
    columnMediaSection2?.mediaImage
  );
  const banner2BackgroundImages = getResponsiveImageUrls(
    bannerSection2?.backgroundImage
  );
  const banner3BackgroundImages = getResponsiveImageUrls(
    bannerSection3?.backgroundImage
  );

  return (
    <main id="main">
      {heroSection?.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module="">
          <div className="wrapper">
            <picture className="background">
              {heroBackgroundImages.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${heroBackgroundImages.mobile}?auto=format,compress&w=420, ${heroBackgroundImages.mobile}?auto=format,compress&w=630 2x`}
                />
              )}
              {heroBackgroundImages.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${heroBackgroundImages.tablet}?auto=format,compress&w=800, ${heroBackgroundImages.tablet}?auto=format,compress&w=1200 2x`}
                />
              )}
              {heroBackgroundImages.desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${heroBackgroundImages.desktop}?auto=format,compress&w=1400, ${heroBackgroundImages.desktop}?auto=format,compress&w=2100 2x`}
                />
              )}
              {heroBackgroundImages.large && (
                <source
                  srcSet={`${heroBackgroundImages.large}?auto=format,compress&w=1994`}
                />
              )}
              <img
                src={
                  heroBackgroundImages.large ||
                  heroBackgroundImages.desktop ||
                  heroBackgroundImages.tablet ||
                  heroBackgroundImages.mobile
                }
                loading="lazy"
                width="1994"
                height="1206"
                alt={heroBackgroundImages.alt}
                draggable="false"
              />
            </picture>
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
                  <h1
                    style={
                      heroSection.titleColor
                        ? { color: heroSection.titleColor }
                        : undefined
                    }
                  >
                    {heroSection.title}
                  </h1>
                )}

                <p>
                  <a
                    className="btn white"
                    href="https://www.vagaro.com/goldfingersaestheticsocala"
                    role="button"
                  >
                    Book now
                  </a>
                </p>
              </div>
            </div>
            <div className="media">
              <picture className="background">
                {heroMediaImages.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
                  />
                )}
                {heroMediaImages.tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                  />
                )}
                {heroMediaImages.desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
                  />
                )}
                {heroMediaImages.large && (
                  <source
                    srcSet={`${heroMediaImages.large}?auto=format,compress&w=1920`}
                  />
                )}
                <img
                  src={
                    heroMediaImages.large ||
                    heroMediaImages.desktop ||
                    heroMediaImages.tablet ||
                    heroMediaImages.mobile
                  }
                  width="1920"
                  height="1206"
                  alt={heroMediaImages.alt}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {introColumnSection?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div className="row mb-30" data-api-key="content">
            {introColumnSection.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(introColumnSection.logo)}
                  width="58"
                  height="64"
                  loading="lazy"
                  alt={introColumnSection.logoAlt}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="item">
              <div className="mw-80 text-center">
                {introColumnSection.heading && (
                  <h2
                    style={
                      introColumnSection.headingColor
                        ? { color: introColumnSection.headingColor }
                        : undefined
                    }
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

      {bannerSection1?.show && (
        <div
          className={`mod_banner ${
            bannerSection1.cssClasses ||
            "dark hide-divider viewport background-2"
          }`}
          data-s3-module=""
        >
          <div
            className={`row wow ${bannerSection1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <div className="mw-80">
                {bannerSection1.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerSection1.content),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          {banner1BackgroundImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner1BackgroundImages.mobile}?auto=format,compress&w=800, ${banner1BackgroundImages.mobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner1BackgroundImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${banner1BackgroundImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner1BackgroundImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${banner1BackgroundImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet={`${banner1BackgroundImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src={
                  banner1BackgroundImages.large ||
                  banner1BackgroundImages.desktop
                }
                loading="lazy"
                width="2200"
                height="802"
                alt={banner1BackgroundImages.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {halfImageSection1?.show && (
        <div
          className={`mod_half_image ${
            halfImageSection1.cssClasses ||
            "viewport half-image container wow fadeInLeft"
          }`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={`row half-image-row mt-80-desktop mt-40-tablet-down ${
              halfImageSection1.flipped ? "flipped" : ""
            }`}
          >
            <div className="media">
              <picture className="background">
                {halfImage1Images.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImage1Images.mobile}?auto=format,compress&w=420, ${halfImage1Images.mobile}?auto=format,compress&w=630 2x`}
                  />
                )}
                {halfImage1Images.tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${halfImage1Images.tablet}?auto=format,compress&w=800, ${halfImage1Images.tablet}?auto=format,compress&w=1200 2x`}
                  />
                )}
                {halfImage1Images.desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${halfImage1Images.desktop}?auto=format,compress&w=1400, ${halfImage1Images.desktop}?auto=format,compress&w=2100 2x`}
                  />
                )}
                {halfImage1Images.large && (
                  <source
                    srcSet={`${halfImage1Images.large}?auto=format,compress&w=1832`}
                  />
                )}
                <img
                  src={
                    halfImage1Images.large ||
                    halfImage1Images.desktop ||
                    halfImage1Images.tablet ||
                    halfImage1Images.mobile
                  }
                  loading="lazy"
                  width="1832"
                  height="1824"
                  alt={halfImage1Images.alt}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {halfImageSection1.heading && (
                    <h2>{halfImageSection1.heading}</h2>
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

      {ctaSection1?.show && (
        <div
          className={`mod_cta_general ${
            ctaSection1.cssClasses ||
            "viewport container cta thin wow fadeInRight background-1"
          }`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
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

      {columnMediaSection1?.show && (
        <div
          className={`mod_column ${
            columnMediaSection1.cssClasses || "viewport container has-media"
          }`}
          data-s3-module=""
        >
          <div
            className={`row mb-40 media-${
              columnMediaSection1.mediaPosition || "right"
            }`}
            data-api-key="content"
          >
            <div className="item">
              {columnMediaSection1.heading && (
                <h2>{columnMediaSection1.heading}</h2>
              )}
              {columnMediaSection1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnMediaSection1.content),
                  }}
                />
              )}
            </div>
            <picture className="media">
              {columnMedia1Images.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${columnMedia1Images.mobile}?auto=format,compress&w=420, ${columnMedia1Images.mobile}?auto=format,compress&w=630 2x`}
                />
              )}
              {columnMedia1Images.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${columnMedia1Images.tablet}?auto=format,compress&w=800, ${columnMedia1Images.tablet}?auto=format,compress&w=1200 2x`}
                />
              )}
              {columnMedia1Images.desktop && (
                <source
                  srcSet={`${columnMedia1Images.desktop}?auto=format,compress&w=904`}
                />
              )}
              <img
                src={
                  columnMedia1Images.desktop ||
                  columnMedia1Images.tablet ||
                  columnMedia1Images.mobile
                }
                loading="lazy"
                width="904"
                height="1062"
                alt={columnMedia1Images.alt}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {halfImageSection2?.show && (
        <div
          className={`mod_half_image ${
            halfImageSection2.cssClasses ||
            "viewport half-image container wow fadeInLeft background-navy"
          }`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={`row half-image-row ${
              halfImageSection2.flipped ? "flipped" : ""
            }`}
          >
            <div className="media">
              <picture className="background">
                {halfImage2Images.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImage2Images.mobile}?auto=format,compress&w=420, ${halfImage2Images.mobile}?auto=format,compress&w=630 2x`}
                  />
                )}
                {halfImage2Images.tablet && (
                  <source
                    srcSet={`${
                      halfImage2Images.tablet || halfImage2Images.mobile
                    }?auto=format,compress&w=660`}
                  />
                )}
                <img
                  src={
                    halfImage2Images.desktop ||
                    halfImage2Images.tablet ||
                    halfImage2Images.mobile
                  }
                  loading="lazy"
                  width="660"
                  height="800"
                  alt={halfImage2Images.alt}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {halfImageSection2.heading && (
                    <h2>{halfImageSection2.heading}</h2>
                  )}
                  {halfImageSection2.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImageSection2.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {dividerSection?.show && (
        <div className="mod_divider container" data-s3-module="">
          <div className="row">
            <div className="media">
              <picture className="">
                <img
                  src={getImageUrl(dividerSection.image)}
                  width="55"
                  height="61"
                  loading="lazy"
                  alt={dividerSection.imageAlt}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {halfImageSection3?.show && (
        <div
          className={`mod_half_image ${
            halfImageSection3.cssClasses ||
            "viewport half-image container wow fadeInLeft background-navy"
          }`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={`row half-image-row ${
              halfImageSection3.flipped ? "flipped" : ""
            }`}
          >
            <div className="media">
              <picture className="background">
                {halfImage3Images.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImage3Images.mobile}?auto=format,compress&w=420, ${halfImage3Images.mobile}?auto=format,compress&w=630 2x`}
                  />
                )}
                {halfImage3Images.tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${halfImage3Images.tablet}?auto=format,compress&w=800, ${halfImage3Images.tablet}?auto=format,compress&w=1200 2x`}
                  />
                )}
                {halfImage3Images.desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${halfImage3Images.desktop}?auto=format,compress&w=1400, ${halfImage3Images.desktop}?auto=format,compress&w=2100 2x`}
                  />
                )}
                {halfImage3Images.large && (
                  <source
                    srcSet={`${halfImage3Images.large}?auto=format,compress&w=2047`}
                  />
                )}
                <img
                  src={
                    halfImage3Images.large ||
                    halfImage3Images.desktop ||
                    halfImage3Images.tablet ||
                    halfImage3Images.mobile
                  }
                  loading="lazy"
                  width="2047"
                  height="1365"
                  alt={halfImage3Images.alt}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {halfImageSection3.heading && (
                    <h2>{halfImageSection3.heading}</h2>
                  )}
                  {halfImageSection3.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImageSection3.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {columnMediaSection2?.show && (
        <div
          className={`mod_column ${
            columnMediaSection2.cssClasses || "viewport container has-media"
          }`}
          data-s3-module=""
        >
          <div
            className={`row mt-40 mb-40 media-${
              columnMediaSection2.mediaPosition || "right"
            }`}
            data-api-key="content"
          >
            <div className="item">
              {columnMediaSection2.heading && (
                <h2>{columnMediaSection2.heading}</h2>
              )}
              {columnMediaSection2.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnMediaSection2.content),
                  }}
                />
              )}
            </div>
            <picture className="media">
              {columnMedia2Images.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${columnMedia2Images.mobile}?auto=format,compress&w=420, ${columnMedia2Images.mobile}?auto=format,compress&w=630 2x`}
                />
              )}
              {columnMedia2Images.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${columnMedia2Images.tablet}?auto=format,compress&w=800, ${columnMedia2Images.tablet}?auto=format,compress&w=1200 2x`}
                />
              )}
              {columnMedia2Images.desktop && (
                <source
                  srcSet={`${columnMedia2Images.desktop}?auto=format,compress&w=904`}
                />
              )}
              <img
                src={
                  columnMedia2Images.desktop ||
                  columnMedia2Images.tablet ||
                  columnMedia2Images.mobile
                }
                loading="lazy"
                width="904"
                height="1062"
                alt={columnMedia2Images.alt}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {bannerSection2?.show && (
        <div
          className={`mod_banner ${
            bannerSection2.cssClasses ||
            "dark hide-divider viewport background-6"
          }`}
          data-s3-module=""
        >
          <div
            className={`row wow ${bannerSection2.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              {bannerSection2.heading && (
                <h2
                  className={bannerSection2.headingAlignment || "text-center"}
                >
                  {bannerSection2.heading}
                </h2>
              )}
              {bannerSection2.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(bannerSection2.introContent),
                  }}
                />
              )}
              {bannerSection2.servicesList &&
                bannerSection2.servicesList.length > 0 && (
                  <ul className="columns">
                    {bannerSection2.servicesList.map(
                      (service: any, index: number) => (
                        <li key={index}>
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
          {banner2BackgroundImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner2BackgroundImages.mobile}?auto=format,compress&w=800, ${banner2BackgroundImages.mobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner2BackgroundImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${banner2BackgroundImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner2BackgroundImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${banner2BackgroundImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet={`${banner2BackgroundImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src={
                  banner2BackgroundImages.large ||
                  banner2BackgroundImages.desktop
                }
                loading="lazy"
                width="2200"
                height="802"
                alt={banner2BackgroundImages.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {boxGridSection?.show && (
        <div
          className={`mod_box_grid ${
            boxGridSection.cssClasses ||
            "viewport seven-boxes container option-2 default no-bg wider"
          }`}
          data-s3-module=""
        >
          <div className="row">
            <div className="content-before">
              {boxGridSection.contentBeforeHeading && (
                <h2>{boxGridSection.contentBeforeHeading}</h2>
              )}
              {boxGridSection.contentBeforeText && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(boxGridSection.contentBeforeText),
                  }}
                />
              )}
            </div>
            {boxGridSection.boxes && boxGridSection.boxes.length > 0 && (
              <div className="boxes wider">
                {boxGridSection.boxes.map((box: any, index: number) => (
                  <div
                    key={index}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    <h3>{box.heading}</h3>
                    {box.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(box.content),
                        }}
                      />
                    )}
                    {box.ctaButton?.text && (
                      <p>
                        <a
                          href={box.ctaButton.url}
                          className={box.ctaButton.className || "btn"}
                        >
                          {box.ctaButton.text}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {bannerSection3?.show && (
        <div
          className={`mod_banner ${
            bannerSection3.cssClasses ||
            "dark hide-divider viewport background-1"
          }`}
          data-s3-module=""
        >
          <div
            className={`row wow ${bannerSection3.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <div className="mw-80">
                {bannerSection3.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(bannerSection3.content),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          {banner3BackgroundImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner3BackgroundImages.mobile}?auto=format,compress&w=800, ${banner3BackgroundImages.mobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner3BackgroundImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${banner3BackgroundImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner3BackgroundImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${banner3BackgroundImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet={`${banner3BackgroundImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src={
                  banner3BackgroundImages.large ||
                  banner3BackgroundImages.desktop
                }
                loading="lazy"
                width="2200"
                height="802"
                alt={banner3BackgroundImages.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}
    </main>
  );
};

export default OcalaLocationPage;
