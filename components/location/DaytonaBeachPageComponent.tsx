"use client";

import React from "react";

interface DaytonaBeachData {
  heroSection?: any;
  introColumnSection?: any;
  boxGridSection1?: any;
  columnSection1?: any;
  bannerSection1?: any;
  columnSection2?: any;
  halfImageSection1?: any;
  columnSection3?: any;
  bannerSection2?: any;
  columnSection4?: any;
  ctaSection?: any;
  twoColumnSection?: any;
  columnSection5?: any;
  sectionOrder?: Array<{ section: string }>;
}

interface DaytonaBeachPageProps {
  data: DaytonaBeachData;
}

const getImageUrl = (imageField: any): string => {
  if (!imageField) return "";
  if (typeof imageField === "object" && imageField.cloudinary_url) {
    return imageField.cloudinary_url;
  }
  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }
  if (typeof imageField === "string") {
    return imageField;
  }
  return "";
};

const DaytonaBeachPageComponent: React.FC<DaytonaBeachPageProps> = ({
  data,
}) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const hero = data.heroSection;
  const intro = data.introColumnSection;
  const boxGrid = data.boxGridSection1;
  const col1 = data.columnSection1;
  const banner1 = data.bannerSection1;
  const col2 = data.columnSection2;
  const halfImg = data.halfImageSection1;
  const col3 = data.columnSection3;
  const banner2 = data.bannerSection2;
  const col4 = data.columnSection4;
  const cta = data.ctaSection;
  const twoCol = data.twoColumnSection;
  const col5 = data.columnSection5;

  return (
    <main id="main">
      {/* Hero Module */}
      {hero?.show && (
        <div className="mod_hero banner mobile-stack" data-s3-module="">
          <div className="wrapper">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${getImageUrl(hero.backgroundImage?.mobile) || hero.backgroundImage?.url}?auto=format,compress&w=420, ${getImageUrl(hero.backgroundImage?.mobile) || hero.backgroundImage?.url}?auto=format,compress&w=630 2x`}
                data-lazyload-srcset={`${getImageUrl(hero.backgroundImage?.mobile) || hero.backgroundImage?.url}?auto=format,compress&w=420, ${getImageUrl(hero.backgroundImage?.mobile) || hero.backgroundImage?.url}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${getImageUrl(hero.backgroundImage?.tablet) || hero.backgroundImage?.url}?auto=format,compress&w=800, ${getImageUrl(hero.backgroundImage?.tablet) || hero.backgroundImage?.url}?auto=format,compress&w=1200 2x`}
                data-lazyload-srcset={`${getImageUrl(hero.backgroundImage?.tablet) || hero.backgroundImage?.url}?auto=format,compress&w=800, ${getImageUrl(hero.backgroundImage?.tablet) || hero.backgroundImage?.url}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${getImageUrl(hero.backgroundImage?.desktop) || hero.backgroundImage?.url}?auto=format,compress&w=1400, ${getImageUrl(hero.backgroundImage?.desktop) || hero.backgroundImage?.url}?auto=format,compress&w=2100 2x`}
                data-lazyload-srcset={`${getImageUrl(hero.backgroundImage?.desktop) || hero.backgroundImage?.url}?auto=format,compress&w=1400, ${getImageUrl(hero.backgroundImage?.desktop) || hero.backgroundImage?.url}?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet={`${getImageUrl(hero.backgroundImage?.large) || hero.backgroundImage?.url}?auto=format,compress&w=1994`}
                data-lazyload-srcset={`${getImageUrl(hero.backgroundImage?.large) || hero.backgroundImage?.url}?auto=format,compress&w=1994`}
              />
              <img
                src={`${getImageUrl(hero.backgroundImage?.large) || hero.backgroundImage?.url}?auto=format,compress&w=1994`}
                data-lazyload-src={`${getImageUrl(hero.backgroundImage?.large) || hero.backgroundImage?.url}?auto=format,compress&w=1994`}
                loading="lazy"
                data-lazyload="img"
                width="1994"
                height="1206"
                alt={hero.backgroundImage?.alt || "Background Texture"}
                draggable="false"
                data-lazyload-loaded="true"
              />
            </picture>
            <div className="row">
              <div className="inner">
                <ul className="partial_breadcrumb" data-s3-partial="">
                  {hero.breadcrumbs?.map((crumb: any, idx: number) => (
                    <li key={idx}>
                      <a
                        href={crumb.url}
                        role="link"
                        aria-label={crumb.ariaLabel}
                      >
                        {crumb.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <h1>{hero.title}</h1>

                <div className="text">
                  <p>{hero.contentText}</p>
                </div>
                <p>
                  <a
                    className="btn white"
                    href="https://www.vagaro.com/goldfingersaestheticsdaytona"
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
                  srcSet={`${getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url}?auto=format,compress&w=420, ${getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url}?auto=format,compress&w=630 2x`}
                  data-lazyload-srcset={`${getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url}?auto=format,compress&w=420, ${getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${getImageUrl(hero.mediaImage?.tablet) || hero.mediaImage?.url}?auto=format,compress&w=800, ${getImageUrl(hero.mediaImage?.tablet) || hero.mediaImage?.url}?auto=format,compress&w=1200 2x`}
                  data-lazyload-srcset={`${getImageUrl(hero.mediaImage?.tablet) || hero.mediaImage?.url}?auto=format,compress&w=800, ${getImageUrl(hero.mediaImage?.tablet) || hero.mediaImage?.url}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${getImageUrl(hero.mediaImage?.desktop) || hero.mediaImage?.url}?auto=format,compress&w=1400, ${getImageUrl(hero.mediaImage?.desktop) || hero.mediaImage?.url}?auto=format,compress&w=2100 2x`}
                  data-lazyload-srcset={`${getImageUrl(hero.mediaImage?.desktop) || hero.mediaImage?.url}?auto=format,compress&w=1400, ${getImageUrl(hero.mediaImage?.desktop) || hero.mediaImage?.url}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={`${getImageUrl(hero.mediaImage?.large) || hero.mediaImage?.url}?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${getImageUrl(hero.mediaImage?.large) || hero.mediaImage?.url}?auto=format,compress&w=1920`}
                />
                <img
                  src={`${getImageUrl(hero.mediaImage?.large) || hero.mediaImage?.url}?auto=format,compress&w=1920`}
                  width="1920"
                  height="1206"
                  alt={hero.mediaImage?.alt || "scenic view of pier from beach"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Column Module - Intro */}
      {intro?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div className="row mb-30" data-api-key="content">
            <picture className="logo">
              <img
                src={getImageUrl(intro.logo) || intro.logoUrl}
                width={intro.logoWidth}
                height={intro.logoHeight}
                loading="lazy"
                alt={intro.logoAlt}
                draggable="false"
                data-api-key="logo"
              />
            </picture>
            <div className="item">
              <div className="mw-80 text-center">
                <h2>{intro.heading}</h2>
                <p>{intro.contentText}</p>
                {intro.button?.show && (
                  <p>
                    <a
                      href={intro.button.url}
                      className={intro.button.cssClass}
                    >
                      {intro.button.text}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Box Grid Module */}
      {boxGrid?.show && (
        <div
          className="mod_box_grid viewport    container option-2 default  bkg-image wider"
          data-s3-module=""
        >
          <div className="row">
            <div className="content-before">
              <h2>
                {boxGrid.heading}{" "}
                {boxGrid.headingSpan && (
                  <span className="block-desktop">{boxGrid.headingSpan}</span>
                )}
              </h2>
              <p>{boxGrid.introText}</p>
            </div>
            <div className="boxes wider">
              {boxGrid.boxes?.map((box: any, idx: number) => (
                <div
                  key={idx}
                  className={`box wow ${box.animationClass || "fadeInUp"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <h3>{box.heading}</h3>
                  <p>{box.content}</p>
                </div>
              ))}
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet={`${getImageUrl(boxGrid.backgroundImage?.mobile) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1000, ${getImageUrl(boxGrid.backgroundImage?.mobile) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1500 2x`}
              data-lazyload-srcset={`${getImageUrl(boxGrid.backgroundImage?.mobile) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1000, ${getImageUrl(boxGrid.backgroundImage?.mobile) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1500 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet={`${getImageUrl(boxGrid.backgroundImage?.tablet) || boxGrid.backgroundImage?.url}?auto=format,compress&w=800, ${getImageUrl(boxGrid.backgroundImage?.tablet) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1200 2x`}
              data-lazyload-srcset={`${getImageUrl(boxGrid.backgroundImage?.tablet) || boxGrid.backgroundImage?.url}?auto=format,compress&w=800, ${getImageUrl(boxGrid.backgroundImage?.tablet) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet={`${getImageUrl(boxGrid.backgroundImage?.desktop) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1400, ${getImageUrl(boxGrid.backgroundImage?.desktop) || boxGrid.backgroundImage?.url}?auto=format,compress&w=2100 2x`}
              data-lazyload-srcset={`${getImageUrl(boxGrid.backgroundImage?.desktop) || boxGrid.backgroundImage?.url}?auto=format,compress&w=1400, ${getImageUrl(boxGrid.backgroundImage?.desktop) || boxGrid.backgroundImage?.url}?auto=format,compress&w=2100 2x`}
            />
            <source
              srcSet={`${getImageUrl(boxGrid.backgroundImage?.large) || boxGrid.backgroundImage?.url}?auto=format,compress&w=2200`}
              data-lazyload-srcset={`${getImageUrl(boxGrid.backgroundImage?.large) || boxGrid.backgroundImage?.url}?auto=format,compress&w=2200`}
            />
            <img
              src={`${getImageUrl(boxGrid.backgroundImage?.large) || boxGrid.backgroundImage?.url}?auto=format,compress&w=2200`}
              data-lazyload-src={`${getImageUrl(boxGrid.backgroundImage?.large) || boxGrid.backgroundImage?.url}?auto=format,compress&w=2200`}
              loading="lazy"
              data-lazyload="img"
              width="2200"
              height="979"
              alt={boxGrid.backgroundImage?.alt || "Background media"}
              draggable="false"
              data-lazyload-loaded="true"
            />
          </picture>
        </div>
      )}

      {/* Column Module - Provider */}
      {col1?.show && (
        <div
          className="mod_column viewport container has-media"
          data-s3-module=""
        >
          <div className="row mt-30 mb-30 media-right" data-api-key="content">
            <div className="item">
              <h2>{col1.heading}</h2>
              <p>{col1.contentText}</p>
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${getImageUrl(col1.image?.mobile) || col1.image?.url}?auto=format,compress&w=420, ${getImageUrl(col1.image?.mobile) || col1.image?.url}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${getImageUrl(col1.image?.tablet) || col1.image?.url}?auto=format,compress&w=800, ${getImageUrl(col1.image?.tablet) || col1.image?.url}?auto=format,compress&w=1200 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${getImageUrl(col1.image?.desktop) || col1.image?.url}?auto=format,compress&w=904`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${getImageUrl(col1.image?.desktop) || col1.image?.url}?auto=format,compress&w=904`}
                loading="lazy"
                data-lazyload="img"
                width={col1.image?.width || 904}
                height={col1.image?.height || 1062}
                alt={col1.image?.alt || "dock on the ocean"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {/* Banner Module - Focus */}
      {banner1?.show && (
        <div
          className="mod_banner dark  hide-divider viewport background-3"
          data-s3-module=""
        >
          <div
            className="row wow fadeInUp"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <div className="columns-two vertical-align">
                <div>
                  <h2>{banner1.heading}</h2>
                </div>
                <div>
                  <p>{banner1.contentText}</p>
                </div>
              </div>
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner1.backgroundImage?.mobile) || banner1.backgroundImage?.url}?auto=format,compress&w=800, ${getImageUrl(banner1.backgroundImage?.mobile) || banner1.backgroundImage?.url}?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner1.backgroundImage?.tablet) || banner1.backgroundImage?.url}?auto=format,compress&w=800&q=85&sharp=5, ${getImageUrl(banner1.backgroundImage?.tablet) || banner1.backgroundImage?.url}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner1.backgroundImage?.desktop) || banner1.backgroundImage?.url}?auto=format,compress&w=1400&q=85&sharp=5, ${getImageUrl(banner1.backgroundImage?.desktop) || banner1.backgroundImage?.url}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner1.backgroundImage?.large) || banner1.backgroundImage?.url}?auto=format,compress&w=2200&q=85&sharp=5`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={`${getImageUrl(banner1.backgroundImage?.large) || banner1.backgroundImage?.url}?auto=format,compress&w=2200&q=85&sharp=5`}
              loading="lazy"
              data-lazyload="img"
              width="2200"
              height="802"
              alt={banner1.backgroundImage?.alt || "Banner media"}
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Column Module - Services */}
      {col2?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div className="row mt-30 mb-30" data-api-key="content">
            <div className="item">
              <h2 className="text-center">{col2.heading}</h2>
              <p className="text-center">{col2.subheading}</p>
              <ul>
                <ul className="columns">
                  {col2.serviceLinks?.map((service: any, idx: number) => (
                    <li key={idx}>
                      <a href={service.url}>
                        <strong>{service.title}</strong>
                      </a>
                      : {service.description}
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Half Image Module */}
      {halfImg?.show && (
        <div
          className="mod_half_image  viewport half-image container wow fadeInLeft background-navy"
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="row half-image-row flipped mt-0 mb-0">
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${getImageUrl(halfImg.image?.mobile) || halfImg.image?.url}?auto=format,compress&w=420, ${getImageUrl(halfImg.image?.mobile) || halfImg.image?.url}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${getImageUrl(halfImg.image?.tablet) || halfImg.image?.url}?auto=format,compress&w=800, ${getImageUrl(halfImg.image?.tablet) || halfImg.image?.url}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${getImageUrl(halfImg.image?.desktop) || halfImg.image?.url}?auto=format,compress&w=1400, ${getImageUrl(halfImg.image?.desktop) || halfImg.image?.url}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${getImageUrl(halfImg.image?.large) || halfImg.image?.url}?auto=format,compress&w=1832`}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={`${getImageUrl(halfImg.image?.large) || halfImg.image?.url}?auto=format,compress&w=1832`}
                  loading="lazy"
                  data-lazyload="img"
                  width="1832"
                  height="1824"
                  alt={halfImg.image?.alt || "lifeguard tower at sunset"}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2>{halfImg.heading}</h2>
                  <p>{halfImg.contentText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Column Module - Story */}
      {col3?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div className="row mt-30 mb-30" data-api-key="content">
            <div className="item">
              <h2>{col3.heading}</h2>
              <p>{col3.contentText}</p>
            </div>
          </div>
        </div>
      )}

      {/* Banner Module - Elevate */}
      {banner2?.show && (
        <div
          className="mod_banner dark  hide-divider viewport background-3"
          data-s3-module=""
        >
          <div
            className="row wow fadeInUp"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <div className="columns-two vertical-align">
                <div>
                  <h2>
                    {banner2.heading}{" "}
                    {banner2.headingSpan && (
                      <span className="block-desktop">
                        {banner2.headingSpan}
                      </span>
                    )}
                  </h2>
                </div>
                <div>
                  <p>{banner2.contentText}</p>
                </div>
              </div>
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner2.backgroundImage?.mobile) || banner2.backgroundImage?.url}?auto=format,compress&w=800, ${getImageUrl(banner2.backgroundImage?.mobile) || banner2.backgroundImage?.url}?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner2.backgroundImage?.tablet) || banner2.backgroundImage?.url}?auto=format,compress&w=800&q=85&sharp=5, ${getImageUrl(banner2.backgroundImage?.tablet) || banner2.backgroundImage?.url}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner2.backgroundImage?.desktop) || banner2.backgroundImage?.url}?auto=format,compress&w=1400&q=85&sharp=5, ${getImageUrl(banner2.backgroundImage?.desktop) || banner2.backgroundImage?.url}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${getImageUrl(banner2.backgroundImage?.large) || banner2.backgroundImage?.url}?auto=format,compress&w=2200&q=85&sharp=5`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={`${getImageUrl(banner2.backgroundImage?.large) || banner2.backgroundImage?.url}?auto=format,compress&w=2200&q=85&sharp=5`}
              loading="lazy"
              data-lazyload="img"
              width="2200"
              height="802"
              alt={banner2.backgroundImage?.alt || "Banner media"}
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Plastic Surgery Column */}
      {col4?.show && (
        <div className="mod_column viewport container" data-s3-module="">
          <div className="row mt-30 mb-30" data-api-key="content">
            <div className="item">
              <h2 className="text-center">
                {col4.heading}{" "}
                {col4.headingSmall && (
                  <span className="small">{col4.headingSmall}</span>
                )}
              </h2>
              <p>{col4.subheading}</p>
              <ul className="columns">
                {col4.serviceLinks?.map((service: any, idx: number) => (
                  <li key={idx}>
                    {service.url ? (
                      <a href={service.url}>
                        <strong>{service.title}</strong>
                      </a>
                    ) : (
                      <strong>{service.title}:</strong>
                    )}
                    {service.url ? ": " : " "}
                    {service.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* CTA General Module */}
      {cta?.show && (
        <div
          className="mod_cta_general viewport container cta  thin wow fadeInRight mt-0 mb-0 background-2"
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="row">
            <div className="text">
              <h2>
                <a href={cta.headingUrl}>{cta.heading}</a>
              </h2>
              {cta.button?.show && (
                <a href={cta.button.url} className={cta.button.cssClass}>
                  {cta.button.text}
                </a>
              )}
            </div>
            <div className="media"></div>
          </div>
        </div>
      )}

      {/* Two Column Module */}
      {twoCol?.show && (
        <div className="mod_columns_two viewport container" data-s3-module="">
          <div className="row pb-0">
            <div className="content vertical-align">
              <div
                className="item wow fadeInLeft"
                data-api-key="content_left"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h2>
                  {twoCol.leftHeading}{" "}
                  {twoCol.leftHeadingSmall && (
                    <span className="small">{twoCol.leftHeadingSmall}</span>
                  )}
                </h2>
              </div>
              <div
                className="item wow fadeInRight"
                data-api-key="content_right"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <p>{twoCol.rightContent}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Column Module - Experience */}
      {col5?.show && (
        <div
          className="mod_column viewport container has-media"
          data-s3-module=""
        >
          <div className="row  media-left" data-api-key="content">
            <div className="item">
              <h2>{col5.heading}</h2>
              <p>{col5.contentText}</p>
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${getImageUrl(col5.image?.mobile) || col5.image?.url}?auto=format,compress&w=420, ${getImageUrl(col5.image?.mobile) || col5.image?.url}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${getImageUrl(col5.image?.tablet) || col5.image?.url}?auto=format,compress&w=800, ${getImageUrl(col5.image?.tablet) || col5.image?.url}?auto=format,compress&w=1200 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${getImageUrl(col5.image?.desktop) || col5.image?.url}?auto=format,compress&w=904`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={`${getImageUrl(col5.image?.desktop) || col5.image?.url}?auto=format,compress&w=904`}
                loading="lazy"
                data-lazyload="img"
                width={col5.image?.width || 904}
                height={col5.image?.height || 1062}
                alt={col5.image?.alt || "sconce light fixture"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}
    </main>
  );
};

export default DaytonaBeachPageComponent;
