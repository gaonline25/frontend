"use client";

import React from "react";

interface WinterParkData {
  heroSection?: any;
  introColumnSection?: any;
  halfImageSection1?: any;
  bannerSection1?: any;
  columnSection1?: any;
  boxGridSection1?: any;
  boxGridSection2?: any;
  bannerSection2?: any;
  columnSection2?: any;
  boxGridSection3?: any;
  columnSection3?: any;
  sectionOrder?: Array<{ section: string }>;
}

interface WinterParkPageProps {
  data: WinterParkData | null;
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
          return `<p>${childrenHtml}</p>`;
        case "heading":
          const tag = node.tag || "h2";
          return `<${tag}>${childrenHtml}</${tag}>`;
        case "list":
          const listTag = node.listType === "number" ? "ol" : "ul";
          return `<${listTag}>${childrenHtml}</${listTag}>`;
        case "listitem":
          return `<li>${childrenHtml}</li>`;
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

const WinterParkPage: React.FC<WinterParkPageProps> = ({ data }) => {
  if (!data) {
    return null; // Error handled in server component
  }

  const hero = data.heroSection || {};
  const intro = data.introColumnSection || {};
  const halfImage1 = data.halfImageSection1 || {};
  const banner1 = data.bannerSection1 || {};
  const column1 = data.columnSection1 || {};
  const boxGrid1 = data.boxGridSection1 || {};
  const boxGrid2 = data.boxGridSection2 || {};
  const banner2 = data.bannerSection2 || {};
  const column2 = data.columnSection2 || {};
  const boxGrid3 = data.boxGridSection3 || {};
  const column3 = data.columnSection3 || {};

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
                data-lazyload-srcset={`${
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
                data-lazyload-srcset={`${
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
                data-lazyload-srcset={`${
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
                data-lazyload-srcset={`${
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
                data-lazyload-src={
                  getImageUrl(hero.backgroundImage?.large) ||
                  hero.backgroundImage?.url ||
                  ""
                }
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
                <h1 style={{ color: hero.titleColor }}>
                  {hero.title}{" "}
                  {hero.titleSmall && (
                    <span className="small">{hero.titleSmall}</span>
                  )}
                </h1>

                <p>
                  <a
                    className="btn white"
                    href="https://www.vagaro.com/goldfingersaestheticswinterpark"
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
                  srcSet={`${
                    getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url
                  }?auto=format,compress&w=420, ${
                    getImageUrl(hero.mediaImage?.mobile) || hero.mediaImage?.url
                  }?auto=format,compress&w=630 2x`}
                  data-lazyload-srcset={`${
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
                  data-lazyload-srcset={`${
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
                  data-lazyload-srcset={`${
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
                  }?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${
                    getImageUrl(hero.mediaImage?.large) || hero.mediaImage?.url
                  }?auto=format,compress&w=1920`}
                />
                <img
                  src={
                    getImageUrl(hero.mediaImage?.large) ||
                    hero.mediaImage?.url ||
                    ""
                  }
                  width="1920"
                  height="1206"
                  alt={hero.mediaImage?.alt || "winter park location"}
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
          <div className={intro.rowCssClasses || "row"} data-api-key="content">
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
                <h2 style={{ color: intro.headingColor }}>
                  {intro.heading}{" "}
                  {intro.headingSpan && (
                    <span className="block-desktop">{intro.headingSpan}</span>
                  )}
                </h2>
                {intro.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(intro.content),
                    }}
                  />
                ) : (
                  <p>{intro.contentText}</p>
                )}
                {intro.button?.show && (
                  <p>
                    <a
                      href={intro.button.url}
                      className={intro.button.cssClass || "btn"}
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

      {/* Half Image Module */}
      {halfImage1.show && (
        <div
          className={
            halfImage1.cssClasses ||
            "mod_half_image viewport half-image container wow fadeInLeft"
          }
          data-s3-module=""
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className={
              halfImage1.rowCssClasses ||
              "row half-image-row mb-80-desktop mb-40-tablet-down"
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
                  }?auto=format,compress&w=1859`}
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
                  width="1859"
                  height="1512"
                  alt={halfImage1.image?.alt || ""}
                  draggable="false"
                  data-api-key="image"
                />
              </picture>
            </div>
            <div className="copy">
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2
                    className={halfImage1.textAlign || "text-center"}
                    style={{ color: halfImage1.headingColor }}
                  >
                    {halfImage1.headingSmall && (
                      <span className="small">{halfImage1.headingSmall} </span>
                    )}
                    {halfImage1.headingSpan && (
                      <span className="block-desktop">
                        {halfImage1.headingSpan}{" "}
                      </span>
                    )}
                    {halfImage1.subheading}
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
                  {halfImage1.bulletPoints &&
                    halfImage1.bulletPoints.length > 0 && (
                      <ul>
                        {halfImage1.bulletPoints.map(
                          (point: any, idx: number) => (
                            <li key={idx}>{point.text}</li>
                          )
                        )}
                      </ul>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner Module 1 */}
      {banner1.show && (
        <div
          className={
            banner1.cssClasses ||
            "mod_banner dark hide-divider viewport background-1"
          }
          data-s3-module=""
        >
          <div
            className={`row wow ${banner1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <div className={banner1.maxWidth || "mw-80"}>
                <h2 style={{ color: banner1.headingColor }}>
                  {banner1.heading}
                </h2>
                {banner1.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(banner1.content),
                    }}
                  />
                ) : (
                  <p>{banner1.contentText}</p>
                )}
              </div>
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

      {/* Column Module 1 */}
      {column1.show && (
        <div
          className={
            column1.cssClasses || "mod_column viewport container has-media"
          }
          data-s3-module=""
        >
          <div
            className={`${column1.rowCssClasses || "row mt-40 mb-40"} ${
              column1.mediaPosition || "media-right"
            }`}
            data-api-key="content"
          >
            <div className="item">
              <h2 style={{ color: column1.headingColor }}>
                {column1.headingSmall && (
                  <span className="small">{column1.headingSmall} </span>
                )}
                {column1.headingMain}{" "}
                {column1.headingSpan && (
                  <span className="block-desktop">{column1.headingSpan}</span>
                )}
              </h2>
              {column1.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(column1.content),
                  }}
                />
              ) : (
                <p>{column1.contentText}</p>
              )}
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column1.image?.mobile) || column1.image?.url
                }?auto=format,compress&w=420, ${
                  getImageUrl(column1.image?.mobile) || column1.image?.url
                }?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column1.image?.tablet) || column1.image?.url
                }?auto=format,compress&w=800, ${
                  getImageUrl(column1.image?.tablet) || column1.image?.url
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column1.image?.large) || column1.image?.url
                }?auto=format,compress&w=${column1.image?.width || 904}`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={
                  getImageUrl(column1.image?.upload) || column1.image?.url || ""
                }
                loading="lazy"
                data-lazyload="img"
                width={column1.image?.width || 904}
                height={column1.image?.height || 1062}
                alt={column1.image?.alt || "skyline"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {/* Box Grid Module 1 */}
      {boxGrid1.show && (
        <div
          className={
            boxGrid1.cssClasses ||
            "mod_box_grid viewport container option-2 default bkg-image dark wider"
          }
          data-s3-module=""
        >
          <div className="row">
            <div className="content-before">
              <h2 style={{ color: boxGrid1.headingColor }}>
                {boxGrid1.heading}
              </h2>
              <p>{boxGrid1.introText}</p>
            </div>
            <div className="boxes wider">
              {boxGrid1.boxes?.map((box: any, idx: number) => (
                <div
                  key={idx}
                  className={`box wow ${box.animationClass || "fadeInUp"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <h3>{box.heading}</h3>
                  <p>{box.content}</p>
                  {box.button?.show && (
                    <p>
                      <a
                        href={box.button.url}
                        className={box.button.cssClass || "btn"}
                      >
                        {box.button.text}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid1.backgroundImage?.mobile) ||
                boxGrid1.backgroundImage?.url
              }?auto=format,compress&w=1000, ${
                getImageUrl(boxGrid1.backgroundImage?.mobile) ||
                boxGrid1.backgroundImage?.url
              }?auto=format,compress&w=1500 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid1.backgroundImage?.tablet) ||
                boxGrid1.backgroundImage?.url
              }?auto=format,compress&w=800, ${
                getImageUrl(boxGrid1.backgroundImage?.tablet) ||
                boxGrid1.backgroundImage?.url
              }?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid1.backgroundImage?.desktop) ||
                boxGrid1.backgroundImage?.url
              }?auto=format,compress&w=1400, ${
                getImageUrl(boxGrid1.backgroundImage?.desktop) ||
                boxGrid1.backgroundImage?.url
              }?auto=format,compress&w=2100 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid1.backgroundImage?.large) ||
                boxGrid1.backgroundImage?.url
              }?auto=format,compress&w=2200`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={
                getImageUrl(boxGrid1.backgroundImage?.large) ||
                boxGrid1.backgroundImage?.url ||
                ""
              }
              loading="lazy"
              data-lazyload="img"
              width="2200"
              height="979"
              alt="Background media"
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Box Grid Module 2 */}
      {boxGrid2.show && (
        <div
          className={
            boxGrid2.cssClasses ||
            "mod_box_grid viewport container option-1 default no-bg wider"
          }
          data-s3-module=""
        >
          <div className="row">
            <div className="boxes wider">
              {boxGrid2.boxes?.map((box: any, idx: number) => (
                <div
                  key={idx}
                  className={`box wow ${box.animationClass || "fadeInUp"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <h3>{box.heading}</h3>
                  <p>{box.content}</p>
                  {box.button?.show && (
                    <p>
                      <a
                        href={box.button.url}
                        className={box.button.cssClass || "btn"}
                      >
                        {box.button.text}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Banner Module 2 */}
      {banner2.show && (
        <div
          className={
            banner2.cssClasses ||
            "mod_banner dark hide-divider viewport background-2"
          }
          data-s3-module=""
        >
          <div
            className={`row wow ${banner2.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <h2 style={{ color: banner2.headingColor }}>{banner2.heading}</h2>
              {banner2.contentParagraphs?.map((para: any, idx: number) => (
                <p key={idx}>{para.text}</p>
              ))}
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner2.backgroundImage?.mobile) ||
                banner2.backgroundImage?.url
              }?auto=format,compress&w=800, ${
                getImageUrl(banner2.backgroundImage?.mobile) ||
                banner2.backgroundImage?.url
              }?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner2.backgroundImage?.tablet) ||
                banner2.backgroundImage?.url
              }?auto=format,compress&w=800&q=85&sharp=5, ${
                getImageUrl(banner2.backgroundImage?.tablet) ||
                banner2.backgroundImage?.url
              }?auto=format,compress&w=1200&q=85&sharp=5 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner2.backgroundImage?.desktop) ||
                banner2.backgroundImage?.url
              }?auto=format,compress&w=1400&q=85&sharp=5, ${
                getImageUrl(banner2.backgroundImage?.desktop) ||
                banner2.backgroundImage?.url
              }?auto=format,compress&w=2100&q=85&sharp=5 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(banner2.backgroundImage?.large) ||
                banner2.backgroundImage?.url
              }?auto=format,compress&w=2200&q=85&sharp=5`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={
                getImageUrl(banner2.backgroundImage?.large) ||
                banner2.backgroundImage?.url ||
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

      {/* Column Module 2 */}
      {column2.show && (
        <div
          className={
            column2.cssClasses || "mod_column viewport container has-media"
          }
          data-s3-module=""
        >
          <div
            className={`${column2.rowCssClasses || "row mt-30 mb-30"} ${
              column2.mediaPosition || "media-right"
            }`}
            data-api-key="content"
          >
            <div className="item">
              <h2 style={{ color: column2.headingColor }}>
                {column2.heading}{" "}
                {column2.headingSpan && (
                  <span className="block-desktop">{column2.headingSpan}</span>
                )}
              </h2>
              {column2.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(column2.content),
                  }}
                />
              ) : (
                <p>{column2.contentText}</p>
              )}
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column2.image?.mobile) || column2.image?.url
                }?auto=format,compress&w=420, ${
                  getImageUrl(column2.image?.mobile) || column2.image?.url
                }?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column2.image?.tablet) || column2.image?.url
                }?auto=format,compress&w=800, ${
                  getImageUrl(column2.image?.tablet) || column2.image?.url
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column2.image?.large) || column2.image?.url
                }?auto=format,compress&w=${column2.image?.width || 904}`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={
                  getImageUrl(column2.image?.upload) || column2.image?.url || ""
                }
                loading="lazy"
                data-lazyload="img"
                width={column2.image?.width || 904}
                height={column2.image?.height || 1062}
                alt={column2.image?.alt || "skyline"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}

      {/* Box Grid Module 3 */}
      {boxGrid3.show && (
        <div
          className={
            boxGrid3.cssClasses ||
            "mod_box_grid viewport container option-1 default bkg-image dark wider"
          }
          data-s3-module=""
        >
          <div className="row">
            <div className="content-before">
              <h2 style={{ color: boxGrid3.headingColor }}>
                {boxGrid3.heading}
              </h2>
              <p>{boxGrid3.introText}</p>
            </div>
            <div className="boxes wider">
              {boxGrid3.boxes?.map((box: any, idx: number) => (
                <div
                  key={idx}
                  className={`box wow ${box.animationClass || "fadeInUp"}`}
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <h3>{box.heading}</h3>
                  {box.content && <p>{box.content}</p>}
                  {box.button?.show && (
                    <p>
                      <a
                        href={box.button.url}
                        className={box.button.cssClass || "btn"}
                      >
                        {box.button.text}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid3.backgroundImage?.mobile) ||
                boxGrid3.backgroundImage?.url
              }?auto=format,compress&w=1000, ${
                getImageUrl(boxGrid3.backgroundImage?.mobile) ||
                boxGrid3.backgroundImage?.url
              }?auto=format,compress&w=1500 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid3.backgroundImage?.tablet) ||
                boxGrid3.backgroundImage?.url
              }?auto=format,compress&w=800, ${
                getImageUrl(boxGrid3.backgroundImage?.tablet) ||
                boxGrid3.backgroundImage?.url
              }?auto=format,compress&w=1200 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid3.backgroundImage?.desktop) ||
                boxGrid3.backgroundImage?.url
              }?auto=format,compress&w=1400, ${
                getImageUrl(boxGrid3.backgroundImage?.desktop) ||
                boxGrid3.backgroundImage?.url
              }?auto=format,compress&w=2100 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${
                getImageUrl(boxGrid3.backgroundImage?.large) ||
                boxGrid3.backgroundImage?.url
              }?auto=format,compress&w=2200`}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={
                getImageUrl(boxGrid3.backgroundImage?.large) ||
                boxGrid3.backgroundImage?.url ||
                ""
              }
              loading="lazy"
              data-lazyload="img"
              width="2200"
              height="1726"
              alt="Background media"
              draggable="false"
            />
          </picture>
        </div>
      )}

      {/* Column Module 3 */}
      {column3.show && (
        <div
          className={
            column3.cssClasses || "mod_column viewport container has-media"
          }
          data-s3-module=""
        >
          <div
            className={`${column3.rowCssClasses || "row mt-30"} ${
              column3.mediaPosition || "media-left"
            }`}
            data-api-key="content"
          >
            <div className="item">
              <h2 style={{ color: column3.headingColor }}>
                {column3.heading}{" "}
                {column3.headingSmall && (
                  <span className="small">
                    {column3.headingSmall}{" "}
                    {column3.headingSpan && (
                      <span className="block-desktop">
                        {column3.headingSpan}
                      </span>
                    )}
                  </span>
                )}
              </h2>
              {column3.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(column3.content),
                  }}
                />
              ) : (
                <p>{column3.contentText}</p>
              )}
            </div>
            <picture className="media">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column3.image?.mobile) || column3.image?.url
                }?auto=format,compress&w=420, ${
                  getImageUrl(column3.image?.mobile) || column3.image?.url
                }?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column3.image?.tablet) || column3.image?.url
                }?auto=format,compress&w=800, ${
                  getImageUrl(column3.image?.tablet) || column3.image?.url
                }?auto=format,compress&w=1200 2x`}
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset={`${
                  getImageUrl(column3.image?.large) || column3.image?.url
                }?auto=format,compress&w=${column3.image?.width || 904}`}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src={
                  getImageUrl(column3.image?.upload) || column3.image?.url || ""
                }
                loading="lazy"
                data-lazyload="img"
                width={column3.image?.width || 904}
                height={column3.image?.height || 1062}
                alt={column3.image?.alt || "dock on the ocean"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      )}
    </main>
  );
};

export default WinterParkPage;
