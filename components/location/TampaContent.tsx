"use client";

import { useState } from "react";

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
  "https://goldfingerbackend.vercel.app/api";

interface PageData {
  heroSection?: any;
  introColumnSection?: any;
  boxGridSection1?: any;
  dividerSection?: any;
  simpleColumnSection1?: any;
  bannerSection1?: any;
  columnMediaSection1?: any;
  boxGridSection2?: any;
  finalColumnSection?: any;
  sectionOrder?: Array<{ section: string }>;
}

function TampaContent({ data }: { data: PageData | null }) {
  const [pageData, setPageData] = useState<PageData | null>(data);
  const [loading, setLoading] = useState(!data);

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

  const getResponsiveImageUrls = (imageGroup: any) => {
    if (!imageGroup) {
      return { mobile: "", tablet: "", desktop: "", large: "", alt: "" };
    }
    return {
      mobile: getImageUrl(imageGroup.mobile),
      tablet: getImageUrl(imageGroup.tablet),
      desktop: getImageUrl(imageGroup.desktop),
      large: getImageUrl(imageGroup.large),
      alt: imageGroup.alt || "",
    };
  };

  const lexicalToHtml = (lexicalJSON: any): string => {
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
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>No page data available</p>
      </div>
    );
  }

  const hero = pageData.heroSection;
  const introColumn = pageData.introColumnSection;
  const boxGrid1 = pageData.boxGridSection1;
  const divider = pageData.dividerSection;
  const simpleColumn1 = pageData.simpleColumnSection1;
  const banner1 = pageData.bannerSection1;
  const columnMedia1 = pageData.columnMediaSection1;
  const boxGrid2 = pageData.boxGridSection2;
  const finalColumn = pageData.finalColumnSection;

  const heroBackgroundImage = getResponsiveImageUrls(hero?.backgroundImage);
  const heroMediaImage = getResponsiveImageUrls(hero?.mediaImage);
  const boxGrid1BackgroundImage = getResponsiveImageUrls(
    boxGrid1?.backgroundImage
  );
  const banner1BackgroundImage = getResponsiveImageUrls(
    banner1?.backgroundImage
  );
  const columnMedia1Image = getResponsiveImageUrls(columnMedia1?.mediaImage);
  const boxGrid2BackgroundImage = getResponsiveImageUrls(
    boxGrid2?.backgroundImage
  );

  return (
    <main id="main">
      {/* Hero Module */}
      {hero?.show && (
        <div
          className={hero.cssClasses || "mod_hero banner mobile-stack"}
          data-s3-module=""
        >
          <div className="wrapper">
            {heroBackgroundImage.mobile && (
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={`${heroBackgroundImage.mobile}, ${heroBackgroundImage.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${heroBackgroundImage.tablet}, ${heroBackgroundImage.tablet} 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${heroBackgroundImage.desktop}, ${heroBackgroundImage.desktop} 2x`}
                />
                <source
                  srcSet={
                    heroBackgroundImage.large || heroBackgroundImage.desktop
                  }
                />
                <img
                  src={heroBackgroundImage.large || heroBackgroundImage.desktop}
                  loading="lazy"
                  width="1994"
                  height="1206"
                  alt={heroBackgroundImage.alt}
                  draggable="false"
                />
              </picture>
            )}
            <div className="row">
              <div className="inner">
                {hero.breadcrumbs && hero.breadcrumbs.length > 0 && (
                  <ul className="partial_breadcrumb" data-s3-partial="">
                    {hero.breadcrumbs.map((crumb: any, idx: number) => (
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
                )}
                <h1 style={hero.titleColor ? { color: hero.titleColor } : {}}>
                  {hero.title}
                </h1>
              </div>
            </div>
            {heroMediaImage.mobile && (
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImage.mobile}, ${heroMediaImage.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImage.tablet}, ${heroMediaImage.tablet} 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImage.desktop}, ${heroMediaImage.desktop} 2x`}
                  />
                  <source
                    srcSet={heroMediaImage.large || heroMediaImage.desktop}
                  />
                  <img
                    src={heroMediaImage.large || heroMediaImage.desktop}
                    width="1832"
                    height="1193"
                    alt={heroMediaImage.alt}
                    draggable="false"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Column Module - Intro */}
      {introColumn?.show && (
        <div
          className={introColumn.cssClasses || "mod_column viewport container"}
          data-s3-module=""
          style={{
            backgroundColor: introColumn.backgroundColor || undefined,
            color: introColumn.textColor || undefined,
          }}
        >
          <div className="row " data-api-key="content">
            {introColumn.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(introColumn.logo)}
                  width="58"
                  height="64"
                  loading="lazy"
                  alt={introColumn.logoAlt}
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
                      : {}
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
                      href={introColumn.ctaButton.url || "#"}
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

      {/* Box Grid Module 1 */}
      {boxGrid1?.show && (
        <div
          className={
            boxGrid1.cssClasses ||
            "mod_box_grid viewport container option-2 default bkg-image wider"
          }
          data-s3-module=""
          style={{
            backgroundColor: boxGrid1.backgroundColor || undefined,
            color: boxGrid1.textColor || undefined,
          }}
        >
          <div className="row">
            <div className="content-before">
              <h2
                style={
                  boxGrid1.headingColor ? { color: boxGrid1.headingColor } : {}
                }
              >
                {boxGrid1.heading}
              </h2>
              {boxGrid1.introContent && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(boxGrid1.introContent),
                  }}
                />
              )}
            </div>
            {boxGrid1.boxes && boxGrid1.boxes.length > 0 && (
              <div className="boxes wider">
                {boxGrid1.boxes.map((box: any, idx: number) => (
                  <div
                    key={idx}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    <h3
                      style={
                        box.headingColor ? { color: box.headingColor } : {}
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
                  </div>
                ))}
              </div>
            )}
          </div>
          {boxGrid1BackgroundImage.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${boxGrid1BackgroundImage.mobile}, ${boxGrid1BackgroundImage.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${boxGrid1BackgroundImage.tablet}, ${boxGrid1BackgroundImage.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${boxGrid1BackgroundImage.desktop}, ${boxGrid1BackgroundImage.desktop} 2x`}
              />
              <source
                srcSet={
                  boxGrid1BackgroundImage.large ||
                  boxGrid1BackgroundImage.desktop
                }
              />
              <img
                src={
                  boxGrid1BackgroundImage.large ||
                  boxGrid1BackgroundImage.desktop
                }
                loading="lazy"
                width="2200"
                height="979"
                alt={boxGrid1BackgroundImage.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Divider Module */}
      {divider?.show && (
        <div
          className={divider.cssClasses || "mod_divider container"}
          data-s3-module=""
        >
          <div className="row">
            <div className="media">
              {divider.logo && (
                <picture className="">
                  <img
                    src={getImageUrl(divider.logo)}
                    width="55"
                    height="61"
                    loading="lazy"
                    alt={divider.logoAlt}
                    draggable="false"
                  />
                </picture>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Column Module - Simple */}
      {simpleColumn1?.show && (
        <div
          className={
            simpleColumn1.cssClasses || "mod_column viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: simpleColumn1.backgroundColor || undefined,
            color: simpleColumn1.textColor || undefined,
          }}
        >
          <div className="row " data-api-key="content">
            <div className="item">
              <center>
                <h2
                  style={
                    simpleColumn1.headingColor
                      ? { color: simpleColumn1.headingColor }
                      : {}
                  }
                >
                  {simpleColumn1.heading}
                </h2>
                {simpleColumn1.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(simpleColumn1.content),
                    }}
                  />
                )}
              </center>
            </div>
          </div>
        </div>
      )}

      {/* Banner Module */}
      {banner1?.show && (
        <div
          className={
            banner1.cssClasses ||
            "mod_banner dark hide-divider viewport background-1"
          }
          data-s3-module=""
          style={{
            backgroundColor: banner1.backgroundColor || undefined,
            color: banner1.textColor || undefined,
          }}
        >
          <div
            className={`row wow ${banner1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <h2
                className="text-center"
                style={
                  banner1.headingColor ? { color: banner1.headingColor } : {}
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
                <ul className="columns">
                  {banner1.servicesList.map((service: any, idx: number) => (
                    <li key={idx}>
                      {service.serviceUrl ? (
                        <a
                          href={service.serviceUrl}
                          style={{ letterSpacing: "0px" }}
                        >
                          <strong>{service.serviceName}</strong>
                        </a>
                      ) : (
                        <strong>{service.serviceName}</strong>
                      )}
                      {service.description && (
                        <span
                          style={{
                            backgroundColor: "transparent",
                            fontFamily: "inherit",
                            fontSize: "inherit",
                            fontStyle: "inherit",
                            fontVariantLigatures: "inherit",
                            fontVariantCaps: "inherit",
                            fontWeight: "inherit",
                            letterSpacing: "0px",
                          }}
                        >
                          : {service.description}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {banner1BackgroundImage.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner1BackgroundImage.mobile}, ${banner1BackgroundImage.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner1BackgroundImage.tablet}, ${banner1BackgroundImage.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner1BackgroundImage.desktop}, ${banner1BackgroundImage.desktop} 2x`}
              />
              <source
                srcSet={
                  banner1BackgroundImage.large || banner1BackgroundImage.desktop
                }
              />
              <img
                src={
                  banner1BackgroundImage.large || banner1BackgroundImage.desktop
                }
                loading="lazy"
                width="2200"
                height="802"
                alt={banner1BackgroundImage.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Column Module with Media */}
      {columnMedia1?.show && (
        <div
          className={
            columnMedia1.cssClasses || "mod_column viewport container has-media"
          }
          data-s3-module=""
          style={{
            backgroundColor: columnMedia1.backgroundColor || undefined,
            color: columnMedia1.textColor || undefined,
          }}
        >
          <div
            className={`row mt-30 mb-30 ${
              columnMedia1.mediaPosition === "left"
                ? "media-left"
                : "media-right"
            }`}
            data-api-key="content"
          >
            <div className="item">
              <h2
                style={
                  columnMedia1.headingColor
                    ? { color: columnMedia1.headingColor }
                    : {}
                }
              >
                {columnMedia1.heading}
              </h2>
              {columnMedia1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnMedia1.content),
                  }}
                />
              )}
            </div>
            {columnMedia1Image.mobile && (
              <picture className="media">
                <source
                  media="(max-width:420px)"
                  srcSet={`${columnMedia1Image.mobile}, ${columnMedia1Image.mobile} 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${columnMedia1Image.tablet}, ${columnMedia1Image.tablet} 2x`}
                />
                <source srcSet={columnMedia1Image.desktop} />
                <img
                  src={columnMedia1Image.desktop}
                  loading="lazy"
                  width="904"
                  height="1062"
                  alt={columnMedia1Image.alt}
                  draggable="false"
                />
              </picture>
            )}
          </div>
        </div>
      )}

      {/* Box Grid Module 2 - Plastic Surgery */}
      {boxGrid2?.show && (
        <div
          className={
            boxGrid2.cssClasses ||
            "mod_box_grid viewport seven-boxes container option-2 default bkg-image dark wider"
          }
          data-s3-module=""
          style={{
            backgroundColor: boxGrid2.backgroundColor || undefined,
            color: boxGrid2.textColor || undefined,
          }}
        >
          <div className="row">
            <div className="content-before">
              <h2
                style={
                  boxGrid2.headingColor ? { color: boxGrid2.headingColor } : {}
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
            {boxGrid2.boxes && boxGrid2.boxes.length > 0 && (
              <div className="boxes wider">
                {boxGrid2.boxes.map((box: any, idx: number) => (
                  <div
                    key={idx}
                    className={`box wow ${box.animationClass || "fadeInUp"}`}
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    <h3
                      style={
                        box.headingColor ? { color: box.headingColor } : {}
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
                          href={box.ctaButton.url || "#"}
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
          {boxGrid2BackgroundImage.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${boxGrid2BackgroundImage.mobile}, ${boxGrid2BackgroundImage.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${boxGrid2BackgroundImage.tablet}, ${boxGrid2BackgroundImage.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${boxGrid2BackgroundImage.desktop}, ${boxGrid2BackgroundImage.desktop} 2x`}
              />
              <source
                srcSet={
                  boxGrid2BackgroundImage.large ||
                  boxGrid2BackgroundImage.desktop
                }
              />
              <img
                src={
                  boxGrid2BackgroundImage.large ||
                  boxGrid2BackgroundImage.desktop
                }
                loading="lazy"
                width="2200"
                height="979"
                alt={boxGrid2BackgroundImage.alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {/* Column Module - Final */}
      {finalColumn?.show && (
        <div
          className={finalColumn.cssClasses || "mod_column viewport container"}
          data-s3-module=""
          style={{
            backgroundColor: finalColumn.backgroundColor || undefined,
            color: finalColumn.textColor || undefined,
          }}
        >
          <div className="row mt-40" data-api-key="content">
            <div className="item">
              <h2
                className="text-center"
                style={
                  finalColumn.headingColor
                    ? { color: finalColumn.headingColor }
                    : {}
                }
              >
                {finalColumn.heading}
              </h2>
              {finalColumn.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(finalColumn.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default TampaContent;
