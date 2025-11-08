"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/locations/fetchOrlandoLocationPageComponent";

interface OrlandoPageProps {
  data: any;
}

const OrlandoPage: React.FC<OrlandoPageProps> = ({ data }) => {
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
  const columnMediaSection1 = data.columnMediaSection1 || {};
  const columnMedia1Images = getResponsiveImageUrls(
    columnMediaSection1.mediaImage
  );
  const ctaSection1 = data.ctaSection1 || {};
  const simpleColumnSection1 = data.simpleColumnSection1 || {};
  const bannerSection1 = data.bannerSection1 || {};
  const bannerImages = getResponsiveImageUrls(bannerSection1.backgroundImage);
  const servicesSection = data.servicesSection || {};
  const halfImageSection = data.halfImageSection || {};
  const halfImages = getResponsiveImageUrls(halfImageSection.image);
  const storySection = data.storySection || {};
  const boxGridSection2 = data.boxGridSection2 || {};
  const boxGrid2BgImages = getResponsiveImageUrls(
    boxGridSection2.backgroundImage
  );
  const plasticSurgerySection = data.plasticSurgerySection || {};
  const finalColumnMedia = data.finalColumnMedia || {};
  const finalMediaImages = getResponsiveImageUrls(finalColumnMedia.mediaImage);

  return (
    <main id="main">
      {heroSection.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module="">
          <div className="wrapper">
            <picture className="background">
              {heroImages.mobile && (
                <>
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroImages.mobile}, ${heroImages.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroImages.tablet}, ${heroImages.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroImages.desktop}, ${heroImages.desktop} 2x`}
                  />
                  <source srcSet={heroImages.large} />
                  <img
                    src={heroImages.large || heroImages.desktop}
                    loading="lazy"
                    width="1994"
                    height="1206"
                    alt={heroImages.alt}
                    draggable="false"
                  />
                </>
              )}
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
                    style={{ color: heroSection.titleColor || undefined }}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(heroSection.title),
                    }}
                  />
                )}
                {heroSection.description && (
                  <div
                    className="text"
                    style={{ color: heroSection.descriptionColor || undefined }}
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(heroSection.description),
                    }}
                  />
                )}
              </div>
            </div>
            {heroMediaImages.mobile && (
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImages.mobile}, ${heroMediaImages.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImages.tablet}, ${heroMediaImages.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImages.desktop}, ${heroMediaImages.desktop} 2x`}
                  />
                  <source srcSet={heroMediaImages.large} />
                  <img
                    src={heroMediaImages.large || heroMediaImages.desktop}
                    width="1920"
                    height="1206"
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
            "mod_box_grid viewport container option-3 single bkg-image"
          }
          data-s3-module=""
          style={{
            backgroundColor: boxGridSection1.backgroundColor || undefined,
            color: boxGridSection1.textColor || undefined,
          }}
        >
          <div className="row">
            <div className="boxes">
              {boxGridSection1.boxes &&
                boxGridSection1.boxes.map((box: any, index: number) => (
                  <div
                    key={index}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {box.heading && (
                      <h2 style={{ color: box.headingColor || undefined }}>
                        {box.heading}
                      </h2>
                    )}
                    {box.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(box.content),
                        }}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {columnMediaSection1.show && (
        <div
          className={
            columnMediaSection1.cssClasses ||
            "mod_column viewport container has-media"
          }
          data-s3-module=""
          style={{
            backgroundColor: columnMediaSection1.backgroundColor || undefined,
            color: columnMediaSection1.textColor || undefined,
          }}
        >
          <div
            className={`row mt-30 mb-30 ${
              columnMediaSection1.mediaPosition === "right"
                ? "media-right"
                : "media-left"
            }`}
            data-api-key="content"
          >
            <div className="item">
              {columnMediaSection1.heading && (
                <h2
                  style={{
                    color: columnMediaSection1.headingColor || undefined,
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      columnMediaSection1.heading.replace(
                        /\n/g,
                        '<span className="block-desktop">'
                      ) +
                      (columnMediaSection1.heading.includes("\n")
                        ? "</span>"
                        : ""),
                  }}
                />
              )}
              {columnMediaSection1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnMediaSection1.content),
                  }}
                />
              )}
            </div>
            {columnMedia1Images.mobile && (
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-srcset={`${columnMedia1Images.mobile}, ${columnMedia1Images.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-srcset={`${columnMedia1Images.tablet}, ${columnMedia1Images.tablet} 2x`}
                />
                <source
                  srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-srcset={columnMedia1Images.desktop}
                />
                <img
                  src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-src={columnMedia1Images.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={columnMedia1Images.alt}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        </div>
      )}

      {ctaSection1.show && (
        <div
          className={
            ctaSection1.cssClasses ||
            "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1"
          }
          data-s3-module=""
          style={{
            backgroundColor: ctaSection1.backgroundColor || undefined,
            color: ctaSection1.textColor || undefined,
            visibility: "hidden",
            animationName: "none",
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
          <div className="row mt-30 mb-30" data-api-key="content">
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

      {bannerSection1.show && (
        <div
          className={
            bannerSection1.cssClasses ||
            "mod_banner dark hide-divider viewport background-9"
          }
          data-s3-module=""
          style={{
            backgroundColor: bannerSection1.backgroundColor || undefined,
            color: bannerSection1.textColor || undefined,
          }}
        >
          <div
            className={`row wow ${bannerSection1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              {bannerSection1.columns && bannerSection1.columns.length > 0 && (
                <div className="columns-two vertical-align">
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
          {bannerImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${bannerImages.mobile}, ${bannerImages.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${bannerImages.tablet}, ${bannerImages.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${bannerImages.desktop}, ${bannerImages.desktop} 2x`}
              />
              <source
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={bannerImages.large}
              />
              <img
                src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-src={bannerImages.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={bannerImages.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {servicesSection.show && (
        <div
          className={
            servicesSection.cssClasses || "mod_column viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: servicesSection.backgroundColor || undefined,
            color: servicesSection.textColor || undefined,
          }}
        >
          <div className="row mt-30" data-api-key="content">
            <div className="item">
              {servicesSection.heading && (
                <h2
                  style={{ color: servicesSection.headingColor || undefined }}
                >
                  {servicesSection.heading}
                </h2>
              )}
              {servicesSection.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(servicesSection.introContent),
                  }}
                />
              )}
              {servicesSection.servicesList &&
                servicesSection.servicesList.length > 0 && (
                  <ul className="columns">
                    {servicesSection.servicesList.map(
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
        </div>
      )}

      {halfImageSection.show && (
        <div
          className={
            halfImageSection.cssClasses ||
            "mod_half_image viewport half-image container wow fadeInLeft"
          }
          data-s3-module=""
          style={{
            backgroundColor: halfImageSection.backgroundColor || undefined,
            color: halfImageSection.textColor || undefined,
            visibility: "hidden",
            animationName: "none",
          }}
        >
          <div
            className={`row half-image-row ${
              halfImageSection.flipped ? "flipped" : ""
            } mt-0 mb-0`}
          >
            {halfImages.mobile && (
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                    data-lazyload-srcset={`${halfImages.mobile}, ${halfImages.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                    data-lazyload-srcset={`${halfImages.tablet}, ${halfImages.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                    data-lazyload-srcset={`${halfImages.desktop}, ${halfImages.desktop} 2x`}
                  />
                  <source
                    srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                    data-lazyload-srcset={halfImages.large}
                  />
                  <img
                    src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                    data-lazyload-src={halfImages.large}
                    loading="lazy"
                    data-lazyload="img"
                    width="1832"
                    height="1824"
                    alt={halfImages.alt}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
            )}
            <div className="copy padded2">
              <div className="inner">
                <div className="content" data-api-key="content">
                  {halfImageSection.heading && (
                    <h2
                      style={{
                        color: halfImageSection.headingColor || undefined,
                      }}
                      dangerouslySetInnerHTML={{
                        __html:
                          halfImageSection.heading.replace(
                            /\n/g,
                            '<span className="block-desktop">'
                          ) +
                          (halfImageSection.heading.includes("\n")
                            ? "</span>"
                            : ""),
                      }}
                    />
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

      {storySection.show && (
        <div
          className={storySection.cssClasses || "mod_column viewport container"}
          data-s3-module=""
          style={{
            backgroundColor: storySection.backgroundColor || undefined,
            color: storySection.textColor || undefined,
          }}
        >
          <div className="row mb-30" data-api-key="content">
            <div className="item">
              {storySection.heading && (
                <h2 style={{ color: storySection.headingColor || undefined }}>
                  {storySection.heading}
                </h2>
              )}
              {storySection.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(storySection.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {boxGridSection2.show && (
        <div
          className={
            boxGridSection2.cssClasses ||
            "mod_box_grid viewport container option-1 single bkg-image"
          }
          data-s3-module=""
          style={{
            backgroundColor: boxGridSection2.backgroundColor || undefined,
            color: boxGridSection2.textColor || undefined,
          }}
        >
          <div className="row">
            <div className="boxes">
              {boxGridSection2.boxes &&
                boxGridSection2.boxes.map((box: any, index: number) => (
                  <div
                    key={index}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    {box.heading && (
                      <h2 style={{ color: box.headingColor || undefined }}>
                        {box.heading}
                      </h2>
                    )}
                    {box.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(box.content),
                        }}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
          {boxGrid2BgImages.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${boxGrid2BgImages.mobile}, ${boxGrid2BgImages.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${boxGrid2BgImages.tablet}, ${boxGrid2BgImages.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${boxGrid2BgImages.desktop}, ${boxGrid2BgImages.desktop} 2x`}
              />
              <source
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={boxGrid2BgImages.large}
              />
              <img
                src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-src={boxGrid2BgImages.large}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="1726"
                alt={boxGrid2BgImages.alt}
                draggable="false"
              />
            </picture>
          )}
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
          <div className="row mt-30 pb-20" data-api-key="content">
            <div className="item">
              {plasticSurgerySection.heading && (
                <h2
                  style={{
                    color: plasticSurgerySection.headingColor || undefined,
                  }}
                >
                  {plasticSurgerySection.heading}
                </h2>
              )}
              {plasticSurgerySection.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(plasticSurgerySection.introContent),
                  }}
                />
              )}
              {plasticSurgerySection.servicesList &&
                plasticSurgerySection.servicesList.length > 0 && (
                  <ul className="columns">
                    {plasticSurgerySection.servicesList.map(
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
            className={`row ${
              finalColumnMedia.mediaPosition === "left"
                ? "media-left"
                : "media-right"
            }`}
            data-api-key="content"
          >
            <div className="item">
              {finalColumnMedia.heading && (
                <h2
                  style={{ color: finalColumnMedia.headingColor || undefined }}
                  dangerouslySetInnerHTML={{
                    __html:
                      finalColumnMedia.heading.replace(
                        /\n/g,
                        '<span className="block-desktop">'
                      ) +
                      (finalColumnMedia.heading.includes("\n")
                        ? "</span>"
                        : ""),
                  }}
                />
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
                  srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-srcset={`${finalMediaImages.mobile}, ${finalMediaImages.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-srcset={`${finalMediaImages.tablet}, ${finalMediaImages.tablet} 2x`}
                />
                <source
                  srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-srcset={finalMediaImages.desktop}
                />
                <img
                  src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  data-lazyload-src={finalMediaImages.desktop}
                  loading="lazy"
                  data-lazyload="img"
                  width="904"
                  height="1062"
                  alt={finalMediaImages.alt}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default OrlandoPage;
