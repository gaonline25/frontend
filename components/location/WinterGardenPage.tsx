"use client";

import React from "react";

interface WinterGardenData {
  heroSection?: any;
  introColumnSection?: any;
  halfImageSection1?: any;
  columnSection1?: any;
  dividerSection?: any;
  threeColumnSection1?: any;
  twoColumnSection1?: any;
  twoColumnSection2?: any;
  bannerSection1?: any;
  twoColumnSection3?: any;
  sectionOrder?: Array<{ section: string }>;
}

// Props interface
interface WinterGardenPageProps {
  data: WinterGardenData | null;
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

const WinterGardenPage: React.FC<WinterGardenPageProps> = ({ data }) => {
  if (!data) {
    return null; // Server component handles error UI
  }

  const hero = data.heroSection || {};
  const intro = data.introColumnSection || {};
  const halfImage1 = data.halfImageSection1 || {};
  const column1 = data.columnSection1 || {};
  const divider = data.dividerSection || {};
  const threeCol1 = data.threeColumnSection1 || {};
  const twoCol1 = data.twoColumnSection1 || {};
  const twoCol2 = data.twoColumnSection2 || {};
  const banner1 = data.bannerSection1 || {};
  const twoCol3 = data.twoColumnSection3 || {};

  return (
    <main id="main">
      {/* Hero Module */}
      {hero.show && (
        <div
          className={hero.cssClasses || "mod_hero banner mobile-stack"}
          data-s3-module=""
        >
          <div className="wrapper">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${
                  getImageUrl(hero.backgroundImage?.mobile) ||
                  hero.backgroundImage?.url
                }?auto=format,compress&w=420, ${
                  getImageUrl(hero.backgroundImage?.mobile) ||
                  hero.backgroundImage?.url
                }?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${
                  getImageUrl(hero.backgroundImage?.tablet) ||
                  hero.backgroundImage?.url
                }?auto=format,compress&w=800, ${
                  getImageUrl(hero.backgroundImage?.tablet) ||
                  hero.backgroundImage?.url
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${
                  getImageUrl(hero.backgroundImage?.desktop) ||
                  hero.backgroundImage?.url
                }?auto=format,compress&w=1400, ${
                  getImageUrl(hero.backgroundImage?.desktop) ||
                  hero.backgroundImage?.url
                }?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet={`${
                  getImageUrl(hero.backgroundImage?.large) ||
                  hero.backgroundImage?.url
                }?auto=format,compress&w=1994`}
              />
              <img
                src={
                  getImageUrl(hero.backgroundImage?.large) ||
                  hero.backgroundImage?.url ||
                  ""
                }
                loading="lazy"
                width="1994"
                height="1206"
                alt={hero.backgroundImage?.alt || "Background Texture"}
                draggable="false"
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
                <h1 style={{ color: hero.titleColor }}>
                  {hero.title || "Winter Garden"}
                </h1>
              </div>
            </div>
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={`${
                    getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url
                  }?auto=format,compress&w=420, ${
                    getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url
                  }?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${
                    getImageUrl(hero.mediaImage?.tablet) || hero.mediaImage?.url
                  }?auto=format,compress&w=800, ${
                    getImageUrl(hero.mediaImage?.tablet) || hero.mediaImage?.url
                  }?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${
                    getImageUrl(hero.mediaImage?.desktop) ||
                    hero.mediaImage?.url
                  }?auto=format,compress&w=1400, ${
                    getImageUrl(hero.mediaImage?.desktop) ||
                    hero.mediaImage?.url
                  }?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={`${
                    getImageUrl(hero.mediaImage?.large) || hero.mediaImage?.url
                  }?auto=format,compress&w=2121`}
                />
                <img
                  src={
                    getImageUrl(hero.mediaImage?.large) ||
                    hero.mediaImage?.url ||
                    ""
                  }
                  width="2121"
                  height="1414"
                  alt={hero.mediaImage?.alt || ""}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Column Module */}
      {intro.show && (
        <div
          className={intro.cssClasses || "mod_column viewport container"}
          data-s3-module=""
        >
          <div
            className={intro.rowCssClasses || "row mb-30"}
            data-api-key="content"
          >
            <picture className="logo">
              <img
                src={getImageUrl(intro.logo) || intro.logoUrl || ""}
                width={intro.logoWidth || 58}
                height={intro.logoHeight || 64}
                loading="lazy"
                alt={intro.logoAlt || "Goldfingers aesthetic logo"}
                draggable="false"
                data-api-key="logo"
              />
            </picture>
            <div className="item">
              <div
                className={`${intro.maxWidth || "mw-80"} ${
                  intro.textAlign || "text-center"
                }`}
              >
                <h2 style={{ color: intro.headingColor }}>{intro.heading}</h2>
                {intro.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(intro.content),
                    }}
                  />
                ) : (
                  <p>{intro.contentText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Half Image Module */}
      {halfImage1.show && (
        <div
          className={
            halfImage1.cssClasses ||
            "mod_half_image viewport half-image container wow fadeInLeft background-navy"
          }
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={
              halfImage1.rowCssClasses || "row half-image-row mt-0 mb-0"
            }
          >
            <div className="media">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${
                    getImageUrl(halfImage1.image?.mobile) ||
                    halfImage1.image?.url
                  }?auto=format,compress&w=420, ${
                    getImageUrl(halfImage1.image?.mobile) ||
                    halfImage1.image?.url
                  }?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${
                    getImageUrl(halfImage1.image?.tablet) ||
                    halfImage1.image?.url
                  }?auto=format,compress&w=800, ${
                    getImageUrl(halfImage1.image?.tablet) ||
                    halfImage1.image?.url
                  }?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${
                    getImageUrl(halfImage1.image?.desktop) ||
                    halfImage1.image?.url
                  }?auto=format,compress&w=1400, ${
                    getImageUrl(halfImage1.image?.desktop) ||
                    halfImage1.image?.url
                  }?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-srcset={`${
                    getImageUrl(halfImage1.image?.large) ||
                    halfImage1.image?.url
                  }?auto=format,compress&w=2121`}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-lazyload-src={
                    getImageUrl(halfImage1.image?.large) ||
                    halfImage1.image?.url ||
                    ""
                  }
                  loading="lazy"
                  data-lazyload="img"
                  width="2121"
                  height="1414"
                  alt={halfImage1.image?.alt || ""}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy padded">
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2 style={{ color: halfImage1.headingColor }}>
                    {halfImage1.heading}
                  </h2>
                  {halfImage1.content ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImage1.content),
                      }}
                    />
                  ) : (
                    <p>{halfImage1.contentText}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Column Module */}
      {column1.show && (
        <div
          className={column1.cssClasses || "mod_column viewport container"}
          data-s3-module=""
        >
          <div
            className={column1.rowCssClasses || "row mt-30 mb-30"}
            data-api-key="content"
          >
            <div className="item">
              <h2
                className={column1.headingAlign || "text-center"}
                style={{ color: column1.headingColor }}
              >
                {column1.heading}
              </h2>
              <p className={column1.introAlign || "text-center"}>
                {column1.introText}
              </p>
              {column1.useColumns ? (
                <ul>
                  <ul className="columns">
                    {column1.bulletPoints?.map((point: any, idx: number) => (
                      <li key={idx}>
                        <strong>{point.title}</strong>: {point.description}
                      </li>
                    ))}
                  </ul>
                </ul>
              ) : (
                <ul>
                  {column1.bulletPoints?.map((point: any, idx: number) => (
                    <li key={idx}>
                      <strong>{point.title}</strong>: {point.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Divider Module */}
      {divider.show && (
        <div
          className={divider.cssClasses || "mod_divider container"}
          data-s3-module=""
        >
          <div className="row">
            <div className="media">
              <picture className="">
                <img
                  src={getImageUrl(divider.logo) || divider.logoUrl || ""}
                  width={divider.logoWidth || 55}
                  height={divider.logoHeight || 61}
                  loading="lazy"
                  alt={divider.logoAlt || "Logo media"}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Three Column Module */}
      {threeCol1.show && (
        <div
          className={
            threeCol1.cssClasses || "mod_columns_three viewport container"
          }
          data-s3-module=""
        >
          <div className={threeCol1.rowCssClasses || "row"}>
            <div className="content">
              <div
                className={`wow ${
                  threeCol1.leftColumn?.animationClass || "fadeInLeft"
                }`}
                data-api-key="content_left"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h3 style={{ color: threeCol1.leftColumn?.headingColor }}>
                  {threeCol1.leftColumn?.heading}{" "}
                  {threeCol1.leftColumn?.headingSpan && (
                    <span className="block-desktop">
                      {threeCol1.leftColumn.headingSpan}
                    </span>
                  )}
                </h3>
                {threeCol1.leftColumn?.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(threeCol1.leftColumn.content),
                    }}
                  />
                ) : (
                  <p>{threeCol1.leftColumn?.contentText}</p>
                )}
              </div>
              <div
                className={`wow ${
                  threeCol1.centerColumn?.animationClass || "fadeInLeft"
                }`}
                data-api-key="content_center"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h3 style={{ color: threeCol1.centerColumn?.headingColor }}>
                  {threeCol1.centerColumn?.heading}
                </h3>
                {threeCol1.centerColumn?.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(threeCol1.centerColumn.content),
                    }}
                  />
                ) : (
                  <p>{threeCol1.centerColumn?.contentText}</p>
                )}
              </div>
              <div
                className={`wow ${
                  threeCol1.rightColumn?.animationClass || "fadeInRight"
                }`}
                data-api-key="content_right"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h3 style={{ color: threeCol1.rightColumn?.headingColor }}>
                  {threeCol1.rightColumn?.heading}
                </h3>
                {threeCol1.rightColumn?.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(threeCol1.rightColumn.content),
                    }}
                  />
                ) : (
                  <p>{threeCol1.rightColumn?.contentText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Two Column Module 1 */}
      {twoCol1.show && (
        <div
          className={twoCol1.cssClasses || "mod_columns_two viewport container"}
          data-s3-module=""
        >
          <div className={twoCol1.rowCssClasses || "row"}>
            <div
              className={`content ${
                twoCol1.verticalAlign ? "vertical-align" : ""
              }`}
            >
              <div
                className={`item wow ${
                  twoCol1.leftColumn?.animationClass || "fadeInLeft"
                }`}
                data-api-key="content_left"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h2 style={{ color: twoCol1.leftColumn?.headingColor }}>
                  {twoCol1.leftColumn?.heading}
                </h2>
                {twoCol1.leftColumn?.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(twoCol1.leftColumn.content),
                    }}
                  />
                ) : (
                  <p>{twoCol1.leftColumn?.contentText}</p>
                )}
              </div>
              <div
                className={`item wow ${
                  twoCol1.rightColumn?.animationClass || "fadeInRight"
                }`}
                data-api-key="content_right"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                {twoCol1.rightColumn?.image && (
                  <p>
                    <img
                      alt={
                        twoCol1.rightColumn.image.alt || "Blonde woman laughing"
                      }
                      src={
                        getImageUrl(twoCol1.rightColumn.image.upload) ||
                        twoCol1.rightColumn.image.url ||
                        ""
                      }
                      width={twoCol1.rightColumn.image.width || 542}
                      height={twoCol1.rightColumn.image.height || 540}
                    />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Two Column Module 2 */}
      {twoCol2.show && (
        <div
          className={twoCol2.cssClasses || "mod_columns_two viewport container"}
          data-s3-module=""
        >
          <div className={twoCol2.rowCssClasses || "row"}>
            <div
              className={`content ${
                twoCol2.verticalAlign ? "vertical-align" : ""
              }`}
            >
              <div
                className={`item wow ${
                  twoCol2.leftColumn?.animationClass || "fadeInLeft"
                }`}
                data-api-key="content_left"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                {twoCol2.leftColumn?.image && (
                  <p>
                    <img
                      alt={
                        twoCol2.leftColumn.image.alt ||
                        "woman holding mirror to her face while doctor points to her chin"
                      }
                      src={
                        getImageUrl(twoCol2.leftColumn.image.upload) ||
                        twoCol2.leftColumn.image.url ||
                        ""
                      }
                      width={twoCol2.leftColumn.image.width || 540}
                      height={twoCol2.leftColumn.image.height || 538}
                    />
                  </p>
                )}
              </div>
              <div
                className={`item wow ${
                  twoCol2.rightColumn?.animationClass || "fadeInRight"
                }`}
                data-api-key="content_right"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h2 style={{ color: twoCol2.rightColumn?.headingColor }}>
                  {twoCol2.rightColumn?.heading}
                </h2>
                {twoCol2.rightColumn?.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(twoCol2.rightColumn.content),
                    }}
                  />
                ) : (
                  <p>{twoCol2.rightColumn?.contentText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner Module */}
      {banner1.show && (
        <div
          className={
            banner1.cssClasses ||
            "mod_banner dark hide-divider viewport background-3"
          }
          data-s3-module=""
        >
          <div
            className={`row wow ${banner1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              {banner1.useTwoColumns ? (
                <div
                  className={`columns-two ${
                    banner1.verticalAlign ? "vertical-align" : ""
                  }`}
                >
                  <div>
                    <h2 style={{ color: banner1.leftContent?.headingColor }}>
                      {banner1.leftContent?.heading}{" "}
                      {banner1.leftContent?.headingSpan && (
                        <span className="block-desktop">
                          {banner1.leftContent.headingSpan}
                        </span>
                      )}
                    </h2>
                  </div>
                  <div>
                    {banner1.rightContent?.content ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(banner1.rightContent.content),
                        }}
                      />
                    ) : (
                      <p>{banner1.rightContent?.contentText}</p>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <h2>{banner1.leftContent?.heading}</h2>
                </div>
              )}
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner1.backgroundImage?.mobile) ||
                banner1.backgroundImage?.url
              }?auto=format,compress&w=800, ${
                getImageUrl(banner1.backgroundImage?.mobile) ||
                banner1.backgroundImage?.url
              }?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner1.backgroundImage?.tablet) ||
                banner1.backgroundImage?.url
              }?auto=format,compress&w=800&q=85&sharp=5, ${
                getImageUrl(banner1.backgroundImage?.tablet) ||
                banner1.backgroundImage?.url
              }?auto=format,compress&w=1200&q=85&sharp=5 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner1.backgroundImage?.desktop) ||
                banner1.backgroundImage?.url
              }?auto=format,compress&w=1400&q=85&sharp=5, ${
                getImageUrl(banner1.backgroundImage?.desktop) ||
                banner1.backgroundImage?.url
              }?auto=format,compress&w=2100&q=85&sharp=5 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner1.backgroundImage?.large) ||
                banner1.backgroundImage?.url
              }?auto=format,compress&w=2200&q=85&sharp=5`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={
                getImageUrl(banner1.backgroundImage?.large) ||
                banner1.backgroundImage?.url ||
                ""
              }
              loading="lazy"
              data-lazyload="img"
              width="2200"
              height="802"
              alt="Banner media"
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Two Column Module 3 */}
      {twoCol3.show && (
        <div
          className={twoCol3.cssClasses || "mod_columns_two viewport container"}
          data-s3-module=""
        >
          <div className={twoCol3.rowCssClasses || "row pb-0"}>
            <div
              className={`content ${
                twoCol3.verticalAlign ? "vertical-align" : ""
              }`}
            >
              <div
                className={`item wow ${
                  twoCol3.leftColumn?.animationClass || "fadeInLeft"
                }`}
                data-api-key="content_left"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h2 style={{ color: twoCol3.leftColumn?.headingColor }}>
                  {twoCol3.leftColumn?.heading}{" "}
                  {twoCol3.leftColumn?.headingSmall && (
                    <span className="small">
                      {twoCol3.leftColumn.headingSmall}
                    </span>
                  )}
                </h2>
                {twoCol3.leftColumn?.useSmallText ? (
                  <p>
                    <span className="small">
                      {twoCol3.leftColumn.contentText}
                    </span>
                  </p>
                ) : twoCol3.leftColumn?.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(twoCol3.leftColumn.content),
                    }}
                  />
                ) : (
                  <p>{twoCol3.leftColumn?.contentText}</p>
                )}
              </div>
              <div
                className={`item wow ${
                  twoCol3.rightColumn?.animationClass || "fadeInRight"
                }`}
                data-api-key="content_right"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                {twoCol3.rightColumn?.image && (
                  <p>
                    <img
                      alt={twoCol3.rightColumn.image.alt || "woman smiling"}
                      src={
                        getImageUrl(twoCol3.rightColumn.image.upload) ||
                        twoCol3.rightColumn.image.url ||
                        ""
                      }
                      width={twoCol3.rightColumn.image.width || 526}
                      height={twoCol3.rightColumn.image.height || 524}
                    />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default WinterGardenPage;
