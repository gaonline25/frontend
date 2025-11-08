"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/locations/fetchNewSmyrnaPageComponent";

interface GoldfingersPageProps {
  data: any;
}

const GoldfingersPage: React.FC<GoldfingersPageProps> = ({
  data: pageData,
}) => {
  if (!pageData) {
    return <div>No data available</div>;
  }

  const heroSection = pageData.heroSection;
  const columnSection1 = pageData.columnSection1;
  const bannerSection1 = pageData.bannerSection1;
  const columnMediaSection = pageData.columnMediaSection;
  const ctaGeneralSection = pageData.ctaGeneralSection;
  const halfImageSection = pageData.halfImageSection;
  const columnSection2 = pageData.columnSection2;
  const boxGridSection = pageData.boxGridSection;
  const columnSection3 = pageData.columnSection3;

  const heroBackgroundImages = getResponsiveImageUrls(
    heroSection?.backgroundImage
  );
  const heroMediaImages = getResponsiveImageUrls(heroSection?.mediaImage);
  const bannerBackgroundImages = getResponsiveImageUrls(
    bannerSection1?.backgroundImage
  );
  const columnMediaImages = getResponsiveImageUrls(
    columnMediaSection?.mediaImage
  );
  const halfImages = getResponsiveImageUrls(halfImageSection?.image);
  const boxGridBackgroundImages = getResponsiveImageUrls(
    boxGridSection?.backgroundImage
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(heroSection.title),
                      }}
                    />
                  </h1>
                )}
                {heroSection.description && (
                  <div
                    className="text"
                    style={
                      heroSection.descriptionColor
                        ? { color: heroSection.descriptionColor }
                        : undefined
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(heroSection.description),
                      }}
                    />
                  </div>
                )}
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

      {columnSection1?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div
            className={`row ${columnSection1.marginBottom || "mb-30"}`}
            data-api-key="content"
          >
            {columnSection1.logo && (
              <picture className="logo">
                <img
                  src={
                    columnSection1.logo.url ||
                    columnSection1.logo.cloudinary_url ||
                    columnSection1.logo
                  }
                  width={columnSection1.logoWidth || 58}
                  height={columnSection1.logoHeight || 64}
                  loading="lazy"
                  alt={columnSection1.logoAlt}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="item">
              <div
                className={`${columnSection1.maxWidth || "mw-80"} ${
                  columnSection1.textAlign || "text-center"
                }`}
              >
                {columnSection1.heading && (
                  <h2
                    style={
                      columnSection1.headingColor
                        ? { color: columnSection1.headingColor }
                        : undefined
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(columnSection1.heading),
                      }}
                    />
                  </h2>
                )}
                {columnSection1.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnSection1.content),
                    }}
                  />
                )}
                {columnSection1.ctaButton?.show && (
                  <p>
                    <a
                      href={columnSection1.ctaButton.url}
                      className={columnSection1.ctaButton.className || "btn"}
                      style={{
                        backgroundColor:
                          columnSection1.ctaButton.backgroundColor,
                        color: columnSection1.ctaButton.textColor,
                      }}
                    >
                      {columnSection1.ctaButton.text}
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
          className={`mod_banner ${bannerSection1.isDark ? "dark" : ""} ${
            bannerSection1.hideDivider ? "hide-divider" : ""
          } viewport ${bannerSection1.backgroundColor || "background-5"}`}
          data-s3-module=""
        >
          <div
            className={`row wow ${bannerSection1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              {bannerSection1.heading && (
                <h2
                  style={
                    bannerSection1.headingColor
                      ? { color: bannerSection1.headingColor }
                      : undefined
                  }
                >
                  {bannerSection1.heading}
                </h2>
              )}
              {bannerSection1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(bannerSection1.content),
                  }}
                />
              )}
            </div>
          </div>
          {bannerBackgroundImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${bannerBackgroundImages.mobile}?auto=format,compress&w=800, ${bannerBackgroundImages.mobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${bannerBackgroundImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${bannerBackgroundImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${bannerBackgroundImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerBackgroundImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet={`${bannerBackgroundImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src={
                  bannerBackgroundImages.large || bannerBackgroundImages.desktop
                }
                loading="lazy"
                width="2200"
                height="802"
                alt={bannerBackgroundImages.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {columnMediaSection?.show && (
        <div
          className="mod_column viewport container has-media"
          data-s3-module=""
        >
          <div
            className={`row ${columnMediaSection.marginTop || "mt-30"} ${
              columnMediaSection.marginBottom || "mb-30"
            } ${columnMediaSection.mediaPosition || "media-left"}`}
            data-api-key="content"
          >
            <div className="item">
              {columnMediaSection.heading && (
                <h2
                  style={
                    columnMediaSection.headingColor
                      ? { color: columnMediaSection.headingColor }
                      : undefined
                  }
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(columnMediaSection.heading),
                    }}
                  />
                </h2>
              )}
              {columnMediaSection.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnMediaSection.content),
                  }}
                />
              )}
            </div>
            <picture className="media">
              {columnMediaImages.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${columnMediaImages.mobile}?auto=format,compress&w=420, ${columnMediaImages.mobile}?auto=format,compress&w=630 2x`}
                />
              )}
              {columnMediaImages.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${columnMediaImages.tablet}?auto=format,compress&w=800, ${columnMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                />
              )}
              {columnMediaImages.desktop && (
                <source
                  srcSet={`${columnMediaImages.desktop}?auto=format,compress&w=904`}
                />
              )}
              <img
                src={
                  columnMediaImages.desktop ||
                  columnMediaImages.tablet ||
                  columnMediaImages.mobile
                }
                loading="lazy"
                width="904"
                height="1062"
                alt={columnMediaImages.alt}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {ctaGeneralSection?.show && (
        <div
          className={`mod_cta_general viewport container ${
            ctaGeneralSection.className || "cta thin"
          } wow ${ctaGeneralSection.animationClass || "fadeInRight"} ${
            ctaGeneralSection.marginTop || "mt-0"
          } ${ctaGeneralSection.marginBottom || "mb-0"} ${
            ctaGeneralSection.backgroundColor || "background-3"
          }`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="row">
            <div className="text">
              {ctaGeneralSection.heading && (
                <h2
                  style={
                    ctaGeneralSection.headingColor
                      ? { color: ctaGeneralSection.headingColor }
                      : undefined
                  }
                >
                  {ctaGeneralSection.headingLink ? (
                    <a href={ctaGeneralSection.headingLink}>
                      {ctaGeneralSection.heading}
                    </a>
                  ) : (
                    ctaGeneralSection.heading
                  )}
                </h2>
              )}
              {ctaGeneralSection.ctaButton?.show && (
                <a
                  href={ctaGeneralSection.ctaButton.url}
                  className={
                    ctaGeneralSection.ctaButton.className || "btn white"
                  }
                  style={{
                    backgroundColor:
                      ctaGeneralSection.ctaButton.backgroundColor,
                    color: ctaGeneralSection.ctaButton.textColor,
                  }}
                >
                  {ctaGeneralSection.ctaButton.text}
                </a>
              )}
            </div>
            <div className="media"></div>
          </div>
        </div>
      )}

      {halfImageSection?.show && (
        <div
          className={`mod_half_image viewport half-image container wow ${
            halfImageSection.animationClass || "fadeInLeft"
          } ${halfImageSection.backgroundColor || "background-navy"}`}
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={`row half-image-row ${
              halfImageSection.marginTop || "mt-0"
            } ${halfImageSection.marginBottom || "mb-0"}`}
          >
            <div className="media">
              <picture className="background">
                {halfImages.mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImages.mobile}?auto=format,compress&w=420, ${halfImages.mobile}?auto=format,compress&w=630 2x`}
                  />
                )}
                {halfImages.tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${halfImages.tablet}?auto=format,compress&w=800, ${halfImages.tablet}?auto=format,compress&w=1200 2x`}
                  />
                )}
                {halfImages.desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${halfImages.desktop}?auto=format,compress&w=1400, ${halfImages.desktop}?auto=format,compress&w=2100 2x`}
                  />
                )}
                {halfImages.large && (
                  <source
                    srcSet={`${halfImages.large}?auto=format,compress&w=1832`}
                  />
                )}
                <img
                  src={
                    halfImages.large ||
                    halfImages.desktop ||
                    halfImages.tablet ||
                    halfImages.mobile
                  }
                  loading="lazy"
                  width="1832"
                  height="1824"
                  alt={halfImages.alt}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {halfImageSection.heading && (
                    <h2
                      style={
                        halfImageSection.headingColor
                          ? { color: halfImageSection.headingColor }
                          : undefined
                      }
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(halfImageSection.heading),
                        }}
                      />
                    </h2>
                  )}
                  {halfImageSection.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImageSection.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {columnSection2?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div
            className={`row ${columnSection2.marginTop || "mt-30"} ${
              columnSection2.marginBottom || "mb-30"
            }`}
            data-api-key="content"
          >
            <div className="item">
              {columnSection2.heading && (
                <h2
                  style={
                    columnSection2.headingColor
                      ? { color: columnSection2.headingColor }
                      : undefined
                  }
                >
                  {columnSection2.heading}
                </h2>
              )}
              {columnSection2.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnSection2.introContent),
                  }}
                />
              )}
              {columnSection2.servicesList &&
                columnSection2.servicesList.length > 0 && (
                  <ul className={columnSection2.columnsLayout ? "columns" : ""}>
                    {columnSection2.servicesList.map(
                      (service: any, index: number) => (
                        <li
                          key={index}
                          style={
                            service.textColor
                              ? { color: service.textColor }
                              : undefined
                          }
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
                          {service.description && ` ${service.description}`}
                        </li>
                      )
                    )}
                  </ul>
                )}
            </div>
          </div>
        </div>
      )}

      {boxGridSection?.show && (
        <div
          className={`mod_box_grid viewport seven-boxes container ${
            boxGridSection.className || "option-1 default bkg-image wider"
          }`}
          data-s3-module=""
        >
          <div className="row">
            {boxGridSection.contentBefore && (
              <div className="content-before">
                {boxGridSection.contentBefore.heading && (
                  <h2
                    style={
                      boxGridSection.contentBefore.headingColor
                        ? { color: boxGridSection.contentBefore.headingColor }
                        : undefined
                    }
                  >
                    {boxGridSection.contentBefore.heading}
                  </h2>
                )}
                {boxGridSection.contentBefore.content && (
                  <div
                    style={
                      boxGridSection.contentBefore.textColor
                        ? { color: boxGridSection.contentBefore.textColor }
                        : undefined
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(
                          boxGridSection.contentBefore.content
                        ),
                      }}
                    />
                  </div>
                )}
              </div>
            )}
            {boxGridSection.boxes && boxGridSection.boxes.length > 0 && (
              <div className="boxes wider">
                {boxGridSection.boxes.map((box: any, index: number) => {
                  const HeadingTag = box.headingTag || "h3";
                  return (
                    <div
                      key={index}
                      className={`box wow ${box.animationClass || "fadeInUp"}`}
                      style={{ visibility: "hidden", animationName: "none" }}
                    >
                      <HeadingTag
                        style={
                          box.headingColor
                            ? { color: box.headingColor }
                            : undefined
                        }
                      >
                        {box.heading}
                      </HeadingTag>
                      {box.content && (
                        <div
                          style={
                            box.textColor ? { color: box.textColor } : undefined
                          }
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: lexicalToHtml(box.content),
                            }}
                          />
                        </div>
                      )}
                      {box.ctaButton?.show && (
                        <p>
                          <a
                            className={box.ctaButton.className || "btn"}
                            href={box.ctaButton.url}
                            style={{
                              backgroundColor: box.ctaButton.backgroundColor,
                              color: box.ctaButton.textColor,
                            }}
                          >
                            {box.ctaButton.text}
                          </a>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {boxGridBackgroundImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${boxGridBackgroundImages.mobile}?auto=format,compress&w=1000, ${boxGridBackgroundImages.mobile}?auto=format,compress&w=1500 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${boxGridBackgroundImages.tablet}?auto=format,compress&w=800, ${boxGridBackgroundImages.tablet}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${boxGridBackgroundImages.desktop}?auto=format,compress&w=1400, ${boxGridBackgroundImages.desktop}?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet={`${boxGridBackgroundImages.large}?auto=format,compress&w=2200`}
              />
              <img
                src={
                  boxGridBackgroundImages.large ||
                  boxGridBackgroundImages.desktop
                }
                loading="lazy"
                width="2200"
                height="1726"
                alt={boxGridBackgroundImages.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {columnSection3?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div
            className={`row ${columnSection3.marginTop || "mt-30"}`}
            data-api-key="content"
          >
            <div className="item">
              {columnSection3.heading && (
                <h2
                  style={
                    columnSection3.headingColor
                      ? { color: columnSection3.headingColor }
                      : undefined
                  }
                >
                  {columnSection3.heading}
                </h2>
              )}
              {columnSection3.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnSection3.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default GoldfingersPage;
