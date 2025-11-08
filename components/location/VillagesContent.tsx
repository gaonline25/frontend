"use client";

import { useEffect, useState } from "react";

interface ImageGroup {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  large?: string;
  alt?: string;
}

interface PageData {
  heroSection?: any;
  introColumnSection?: any;
  boxGridSection1?: any;
  halfImageSection1?: any;
  ctaSection?: any;
  columnMediaSection?: any;
  bannerSection1?: any;
  boxGridSection2?: any;
  bannerSection2?: any;
  sectionOrder?: Array<{ section: string }>;
}

// Props interface to accept data from server component
interface VillagesContentProps {
  data: PageData | null;
}

function getImageUrl(imageField: any): string {
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
}

function getResponsiveImageUrls(imageGroup: any): ImageGroup {
  if (!imageGroup) {
    return {
      mobile: "",
      tablet: "",
      desktop: "",
      large: "",
      alt: "",
    };
  }
  return {
    mobile: getImageUrl(imageGroup.mobile),
    tablet: getImageUrl(imageGroup.tablet),
    desktop: getImageUrl(imageGroup.desktop),
    large: getImageUrl(imageGroup.large),
    alt: imageGroup.alt || "",
  };
}

function lexicalToHtml(lexicalJSON: any): string {
  if (!lexicalJSON || !lexicalJSON.root) return "";
  const processNode = (node: any): string => {
    if (!node) return "";
    if (node.type === "text") {
      let text = node.text || "";
      if (node.format) {
        if (node.format & 1) text = `<strong>${text}</strong>`;
        if (node.format & 2) text = `<em>${text}</em>`;
        if (node.format & 4) text = `<s>${text}</s>`;
        if (node.format & 8) text = `<u>${text}</u>`;
        if (node.format & 16) text = `<code>${text}</code>`;
      }
      return text;
    }
    if (node.children && Array.isArray(node.children)) {
      const childrenHtml = node.children.map(processNode).join("");
      switch (node.type) {
        case "paragraph":
          const format = node.format || "";
          const className = format === "center" ? ' class="text-center"' : "";
          return `<p${className}>${childrenHtml}</p>`;
        case "heading":
          const tag = node.tag || "h2";
          return `<${tag}>${childrenHtml}</${tag}>`;
        case "list":
          const listTag = node.listType === "number" ? "ol" : "ul";
          return `<${listTag}>${childrenHtml}</${listTag}>`;
        case "listitem":
          return `<li>${childrenHtml}</li>`;
        case "quote":
          return `<blockquote>${childrenHtml}</blockquote>`;
        case "link":
          const url = node.url || "#";
          const target = node.newTab
            ? ' target="_blank" rel="noopener noreferrer"'
            : "";
          return `<a href="${url}"${target}>${childrenHtml}</a>`;
        case "root":
          return childrenHtml;
        default:
          return childrenHtml;
      }
    }
    return "";
  };
  return processNode(lexicalJSON.root);
}

function VillagesContent({ data }: VillagesContentProps) {
  // No fetching — use data directly
  if (!data) {
    return null; // Server component already handles error state
  }

  const hero = data.heroSection;
  const introColumn = data.introColumnSection;
  const boxGrid1 = data.boxGridSection1;
  const halfImage1 = data.halfImageSection1;
  const cta = data.ctaSection;
  const columnMedia = data.columnMediaSection;
  const banner1 = data.bannerSection1;
  const boxGrid2 = data.boxGridSection2;
  const banner2 = data.bannerSection2;

  return (
    <main id="main">
      {hero?.show && (
        <div
          className={hero.cssClasses || "mod_hero banner mobile-stack"}
          data-s3-module=""
        >
          <div className="wrapper">
            {hero.backgroundImage && (
              <picture className="background">
                {getResponsiveImageUrls(hero.backgroundImage).mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${
                      getResponsiveImageUrls(hero.backgroundImage).mobile
                    }, ${
                      getResponsiveImageUrls(hero.backgroundImage).mobile
                    } 2x`}
                  />
                )}
                {getResponsiveImageUrls(hero.backgroundImage).tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${
                      getResponsiveImageUrls(hero.backgroundImage).tablet
                    }, ${
                      getResponsiveImageUrls(hero.backgroundImage).tablet
                    } 2x`}
                  />
                )}
                {getResponsiveImageUrls(hero.backgroundImage).desktop && (
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${
                      getResponsiveImageUrls(hero.backgroundImage).desktop
                    }, ${
                      getResponsiveImageUrls(hero.backgroundImage).desktop
                    } 2x`}
                  />
                )}
                {getResponsiveImageUrls(hero.backgroundImage).large && (
                  <source
                    srcSet={getResponsiveImageUrls(hero.backgroundImage).large}
                  />
                )}
                <img
                  src={
                    getResponsiveImageUrls(hero.backgroundImage).large ||
                    getResponsiveImageUrls(hero.backgroundImage).desktop
                  }
                  alt={getResponsiveImageUrls(hero.backgroundImage).alt}
                  draggable="false"
                />
              </picture>
            )}
            <div className="row">
              <div className="inner">
                {hero.breadcrumbs && hero.breadcrumbs.length > 0 && (
                  <ul className="partial_breadcrumb" data-s3-partial="">
                    {hero.breadcrumbs.map((crumb: any, index: number) => (
                      <li key={index}>
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
                )}
                <h1
                  style={
                    hero.titleColor ? { color: hero.titleColor } : undefined
                  }
                >
                  {hero.title}{" "}
                  {hero.titleSmall && (
                    <span className="small">{hero.titleSmall}</span>
                  )}
                </h1>
              </div>
            </div>
            {hero.mediaImage && (
              <div className="media">
                <picture className="background">
                  {getResponsiveImageUrls(hero.mediaImage).mobile && (
                    <source
                      media="(max-width:420px)"
                      srcSet={`${
                        getResponsiveImageUrls(hero.mediaImage).mobile
                      }, ${getResponsiveImageUrls(hero.mediaImage).mobile} 2x`}
                    />
                  )}
                  {getResponsiveImageUrls(hero.mediaImage).tablet && (
                    <source
                      media="(max-width:800px)"
                      srcSet={`${
                        getResponsiveImageUrls(hero.mediaImage).tablet
                      }, ${getResponsiveImageUrls(hero.mediaImage).tablet} 2x`}
                    />
                  )}
                  {getResponsiveImageUrls(hero.mediaImage).desktop && (
                    <source
                      media="(max-width:1400px)"
                      srcSet={`${
                        getResponsiveImageUrls(hero.mediaImage).desktop
                      }, ${getResponsiveImageUrls(hero.mediaImage).desktop} 2x`}
                    />
                  )}
                  {getResponsiveImageUrls(hero.mediaImage).large && (
                    <source
                      srcSet={getResponsiveImageUrls(hero.mediaImage).large}
                    />
                  )}
                  <img
                    src={
                      getResponsiveImageUrls(hero.mediaImage).large ||
                      getResponsiveImageUrls(hero.mediaImage).desktop
                    }
                    alt={getResponsiveImageUrls(hero.mediaImage).alt}
                    draggable="false"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      )}

      {introColumn?.show && (
        <div
          className={introColumn.cssClasses || "mod_column viewport container"}
          data-s3-module=""
        >
          <div
            className={introColumn.rowCssClasses || "row mb-30"}
            data-api-key="content"
          >
            {introColumn.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(introColumn.logo)}
                  width={introColumn.logoWidth || 58}
                  height={introColumn.logoHeight || 64}
                  loading="lazy"
                  alt={introColumn.logoAlt || ""}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="item">
              <div className="mw-80 text-center">
                <h2
                  style={
                    introColumn.headingColor
                      ? { color: introColumn.headingColor }
                      : undefined
                  }
                >
                  {introColumn.heading}
                </h2>
                {introColumn.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(introColumn.content),
                    }}
                  />
                )}
                {introColumn.ctaButton?.text && (
                  <p>
                    <a
                      href={introColumn.ctaButton.url}
                      className={introColumn.ctaButton.className || "btn"}
                    >
                      {introColumn.ctaButton.text}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {boxGrid1?.show && (
        <div
          className={
            boxGrid1.cssClasses ||
            "mod_box_grid viewport container option-2 default bkg-image wider"
          }
          data-s3-module=""
        >
          <div className="row">
            <div className="boxes wider">
              {boxGrid1.boxes?.map((box: any, index: number) => (
                <div
                  key={index}
                  className={`box wow ${box.animationClass || "fadeInUp"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <h2
                    style={
                      box.headingColor ? { color: box.headingColor } : undefined
                    }
                  >
                    {box.heading}
                  </h2>
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
          {boxGrid1.backgroundImage && (
            <picture className="background">
              {getResponsiveImageUrls(boxGrid1.backgroundImage).mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${
                    getResponsiveImageUrls(boxGrid1.backgroundImage).mobile
                  }, ${
                    getResponsiveImageUrls(boxGrid1.backgroundImage).mobile
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(boxGrid1.backgroundImage).tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${
                    getResponsiveImageUrls(boxGrid1.backgroundImage).tablet
                  }, ${
                    getResponsiveImageUrls(boxGrid1.backgroundImage).tablet
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(boxGrid1.backgroundImage).desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${
                    getResponsiveImageUrls(boxGrid1.backgroundImage).desktop
                  }, ${
                    getResponsiveImageUrls(boxGrid1.backgroundImage).desktop
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(boxGrid1.backgroundImage).large && (
                <source
                  srcSet={
                    getResponsiveImageUrls(boxGrid1.backgroundImage).large
                  }
                />
              )}
              <img
                src={
                  getResponsiveImageUrls(boxGrid1.backgroundImage).large ||
                  getResponsiveImageUrls(boxGrid1.backgroundImage).desktop
                }
                loading="lazy"
                alt={getResponsiveImageUrls(boxGrid1.backgroundImage).alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {halfImage1?.show && (
        <div
          className={
            halfImage1.cssClasses ||
            "mod_half_image viewport half-image container wow fadeInLeft"
          }
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className={halfImage1.rowCssClasses || "row half-image-row"}>
            <div className="media">
              {halfImage1.image && (
                <picture className="background">
                  {getResponsiveImageUrls(halfImage1.image).mobile && (
                    <source
                      media="(max-width:420px)"
                      srcSet={`${
                        getResponsiveImageUrls(halfImage1.image).mobile
                      }, ${getResponsiveImageUrls(halfImage1.image).mobile} 2x`}
                    />
                  )}
                  {getResponsiveImageUrls(halfImage1.image).tablet && (
                    <source
                      media="(max-width:800px)"
                      srcSet={`${
                        getResponsiveImageUrls(halfImage1.image).tablet
                      }, ${getResponsiveImageUrls(halfImage1.image).tablet} 2x`}
                    />
                  )}
                  {getResponsiveImageUrls(halfImage1.image).desktop && (
                    <source
                      media="(max-width:1400px)"
                      srcSet={`${
                        getResponsiveImageUrls(halfImage1.image).desktop
                      }, ${
                        getResponsiveImageUrls(halfImage1.image).desktop
                      } 2x`}
                    />
                  )}
                  {getResponsiveImageUrls(halfImage1.image).large && (
                    <source
                      srcSet={getResponsiveImageUrls(halfImage1.image).large}
                    />
                  )}
                  <img
                    src={
                      getResponsiveImageUrls(halfImage1.image).large ||
                      getResponsiveImageUrls(halfImage1.image).desktop
                    }
                    loading="lazy"
                    alt={getResponsiveImageUrls(halfImage1.image).alt}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              )}
            </div>
            <div className={`copy ${halfImage1.copyPadding || "padded"}`}>
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2
                    style={
                      halfImage1.headingColor
                        ? { color: halfImage1.headingColor }
                        : undefined
                    }
                  >
                    {halfImage1.heading}
                  </h2>
                  {halfImage1.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImage1.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {cta?.show && (
        <div
          className={
            cta.cssClasses ||
            "mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-2"
          }
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="row">
            <div className="text">
              <h2
                style={
                  cta.headingColor ? { color: cta.headingColor } : undefined
                }
              >
                {cta.headingLink ? (
                  <a href={cta.headingLink}>{cta.heading}</a>
                ) : (
                  cta.heading
                )}
              </h2>
              {cta.ctaButton?.text && (
                <a
                  href={cta.ctaButton.url}
                  className={cta.ctaButton.className || "btn white"}
                >
                  {cta.ctaButton.text}
                </a>
              )}
            </div>
            <div className="media"></div>
          </div>
        </div>
      )}

      {columnMedia?.show && (
        <div
          className={
            columnMedia.cssClasses || "mod_column viewport container has-media"
          }
          data-s3-module=""
        >
          <div
            className={
              columnMedia.rowCssClasses ||
              `row mt-30 mb-30 media-${columnMedia.mediaPosition || "right"}`
            }
            data-api-key="content"
          >
            <div className="item">
              <h2
                style={
                  columnMedia.headingColor
                    ? { color: columnMedia.headingColor }
                    : undefined
                }
              >
                {columnMedia.heading}
              </h2>
              {columnMedia.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnMedia.content),
                  }}
                />
              )}
            </div>
            {columnMedia.mediaImage && (
              <picture className="media">
                {getResponsiveImageUrls(columnMedia.mediaImage).mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${
                      getResponsiveImageUrls(columnMedia.mediaImage).mobile
                    }, ${
                      getResponsiveImageUrls(columnMedia.mediaImage).mobile
                    } 2x`}
                  />
                )}
                {getResponsiveImageUrls(columnMedia.mediaImage).tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${
                      getResponsiveImageUrls(columnMedia.mediaImage).tablet
                    }, ${
                      getResponsiveImageUrls(columnMedia.mediaImage).tablet
                    } 2x`}
                  />
                )}
                {getResponsiveImageUrls(columnMedia.mediaImage).desktop && (
                  <source
                    srcSet={
                      getResponsiveImageUrls(columnMedia.mediaImage).desktop
                    }
                  />
                )}
                <img
                  src={
                    getResponsiveImageUrls(columnMedia.mediaImage).desktop ||
                    getResponsiveImageUrls(columnMedia.mediaImage).tablet
                  }
                  loading="lazy"
                  alt={getResponsiveImageUrls(columnMedia.mediaImage).alt}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        </div>
      )}

      {banner1?.show && (
        <div
          className={
            banner1.cssClasses ||
            "mod_banner dark hide-divider viewport background-12"
          }
          data-s3-module=""
        >
          <div
            className={`row wow ${banner1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <h2
                style={
                  banner1.headingColor
                    ? { color: banner1.headingColor }
                    : undefined
                }
              >
                {banner1.heading}
              </h2>
              {banner1.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(banner1.introContent),
                  }}
                />
              )}
              {banner1.servicesList && banner1.servicesList.length > 0 && (
                <ul className={banner1.columnsLayout ? "columns" : ""}>
                  {banner1.servicesList.map((service: any, index: number) => (
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
                  ))}
                </ul>
              )}
            </div>
          </div>
          {banner1.backgroundImage && (
            <picture className="background">
              {getResponsiveImageUrls(banner1.backgroundImage).mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${
                    getResponsiveImageUrls(banner1.backgroundImage).mobile
                  }, ${
                    getResponsiveImageUrls(banner1.backgroundImage).mobile
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(banner1.backgroundImage).tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${
                    getResponsiveImageUrls(banner1.backgroundImage).tablet
                  }, ${
                    getResponsiveImageUrls(banner1.backgroundImage).tablet
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(banner1.backgroundImage).desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${
                    getResponsiveImageUrls(banner1.backgroundImage).desktop
                  }, ${
                    getResponsiveImageUrls(banner1.backgroundImage).desktop
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(banner1.backgroundImage).large && (
                <source
                  srcSet={getResponsiveImageUrls(banner1.backgroundImage).large}
                />
              )}
              <img
                src={
                  getResponsiveImageUrls(banner1.backgroundImage).large ||
                  getResponsiveImageUrls(banner1.backgroundImage).desktop
                }
                loading="lazy"
                alt={getResponsiveImageUrls(banner1.backgroundImage).alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {boxGrid2?.show && (
        <div
          className={
            boxGrid2.cssClasses ||
            "mod_box_grid viewport container option-1 default no-bg wider"
          }
          data-s3-module=""
        >
          <div className="row">
            {boxGrid2.heading && (
              <div className="content-before">
                <h2
                  style={
                    boxGrid2.headingColor
                      ? { color: boxGrid2.headingColor }
                      : undefined
                  }
                >
                  {boxGrid2.heading}
                </h2>
                {boxGrid2.introContent && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(boxGrid2.introContent),
                    }}
                  />
                )}
              </div>
            )}
            <div className="boxes wider">
              {boxGrid2.boxes?.map((box: any, index: number) => (
                <div
                  key={index}
                  className={`box wow ${box.animationClass || "fadeInUp"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <h3
                    style={
                      box.headingColor ? { color: box.headingColor } : undefined
                    }
                  >
                    {box.heading}
                  </h3>
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
          </div>
        </div>
      )}

      {banner2?.show && (
        <div
          className={
            banner2.cssClasses ||
            "mod_banner dark hide-divider viewport background-6"
          }
          data-s3-module=""
        >
          <div
            className={`row wow ${banner2.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <h2
                className="text-center"
                style={
                  banner2.headingColor
                    ? { color: banner2.headingColor }
                    : undefined
                }
              >
                {banner2.heading}
              </h2>
              {banner2.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(banner2.content),
                  }}
                />
              )}
            </div>
          </div>
          {banner2.backgroundImage && (
            <picture className="background">
              {getResponsiveImageUrls(banner2.backgroundImage).mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${
                    getResponsiveImageUrls(banner2.backgroundImage).mobile
                  }, ${
                    getResponsiveImageUrls(banner2.backgroundImage).mobile
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(banner2.backgroundImage).tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${
                    getResponsiveImageUrls(banner2.backgroundImage).tablet
                  }, ${
                    getResponsiveImageUrls(banner2.backgroundImage).tablet
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(banner2.backgroundImage).desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${
                    getResponsiveImageUrls(banner2.backgroundImage).desktop
                  }, ${
                    getResponsiveImageUrls(banner2.backgroundImage).desktop
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(banner2.backgroundImage).large && (
                <source
                  srcSet={getResponsiveImageUrls(banner2.backgroundImage).large}
                />
              )}
              <img
                src={
                  getResponsiveImageUrls(banner2.backgroundImage).large ||
                  getResponsiveImageUrls(banner2.backgroundImage).desktop
                }
                loading="lazy"
                alt={getResponsiveImageUrls(banner2.backgroundImage).alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}
    </main>
  );
}

export default VillagesContent;
