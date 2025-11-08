"use client";

interface ImageGroup {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  large?: string;
  alt?: string;
  url?: string;
}

interface PageData {
  heroSection?: any;
  introColumnSection?: any;
  halfImageSection1?: any;
  boxGridSection1?: any;
  columnSection1?: any;
  columnMediaSection1?: any;
  bannerSection1?: any;
  twoColumnSection1?: any;
  columnSection2?: any;
  boxGridSection2?: any;
  sectionOrder?: Array<{ section: string }>;
}

// Props interface
interface WesleyChapelProps {
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
      url: "",
    };
  }
  return {
    mobile: getImageUrl(imageGroup.mobile),
    tablet: getImageUrl(imageGroup.tablet),
    desktop: getImageUrl(imageGroup.desktop),
    large: getImageUrl(imageGroup.large),
    alt: imageGroup.alt || "",
    url: imageGroup.url || "",
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

function WesleyChapel({ data }: WesleyChapelProps) {
  if (!data) {
    return null; // Server component handles error UI
  }

  const hero = data.heroSection;
  const introColumn = data.introColumnSection;
  const halfImage1 = data.halfImageSection1;
  const boxGrid1 = data.boxGridSection1;
  const column1 = data.columnSection1;
  const columnMedia1 = data.columnMediaSection1;
  const banner1 = data.bannerSection1;
  const twoColumn1 = data.twoColumnSection1;
  const column2 = data.columnSection2;
  const boxGrid2 = data.boxGridSection2;

  const getImageSrc = (imageGroup: any) => {
    const urls = getResponsiveImageUrls(imageGroup);
    return urls.large || urls.desktop || urls.url || "";
  };

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
                  src={getImageSrc(hero.backgroundImage)}
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
                  {hero.title}
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
                      srcSet={getResponsiveImageUrls(hero.mediaImage).desktop}
                    />
                  )}
                  <img
                    src={getImageSrc(hero.mediaImage)}
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
            className={introColumn.rowCssClasses || "row"}
            data-api-key="content"
          >
            {(introColumn.logo || introColumn.logoUrl) && (
              <picture className="logo">
                <img
                  src={getImageUrl(introColumn.logo) || introColumn.logoUrl}
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
              <div
                className={`${introColumn.maxWidth || "mw-80"} ${
                  introColumn.textAlign || "text-center"
                }`}
              >
                <h2
                  style={
                    introColumn.headingColor
                      ? { color: introColumn.headingColor }
                      : undefined
                  }
                >
                  {introColumn.heading}{" "}
                  {introColumn.headingSpan && (
                    <span className="block-desktop">
                      {introColumn.headingSpan}
                    </span>
                  )}
                </h2>
                {introColumn.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(introColumn.content),
                    }}
                  />
                ) : (
                  introColumn.contentText && <p>{introColumn.contentText}</p>
                )}
              </div>
            </div>
          </div>
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
          <div
            className={halfImage1.rowCssClasses || "row half-image-row mt-0"}
          >
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
                    src={getImageSrc(halfImage1.image)}
                    loading="lazy"
                    alt={getResponsiveImageUrls(halfImage1.image).alt}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              )}
            </div>
            <div className="copy padded">
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
                  {halfImage1.content ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(halfImage1.content),
                      }}
                    />
                  ) : (
                    halfImage1.contentText && <p>{halfImage1.contentText}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {boxGrid1?.show && (
        <div
          className={
            boxGrid1.cssClasses ||
            "mod_box_grid viewport container option-3 single bkg-image"
          }
          data-s3-module=""
        >
          <div className="row">
            <div className="boxes">
              <div
                className="box wow fadeInUp"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h2
                  style={
                    boxGrid1.headingColor
                      ? { color: boxGrid1.headingColor }
                      : undefined
                  }
                >
                  {boxGrid1.heading}{" "}
                  {boxGrid1.headingSmall && (
                    <span className="small">{boxGrid1.headingSmall}</span>
                  )}
                </h2>
                {boxGrid1.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(boxGrid1.content),
                    }}
                  />
                ) : (
                  boxGrid1.contentText && <p>{boxGrid1.contentText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {column1?.show && (
        <div
          className={column1.cssClasses || "mod_column viewport container"}
          data-s3-module=""
        >
          <div
            className={column1.rowCssClasses || "row mt-30 pb-20"}
            data-api-key="content"
          >
            <div className="item">
              <h2
                className={column1.headingAlign || "text-center"}
                style={
                  column1.headingColor
                    ? { color: column1.headingColor }
                    : undefined
                }
              >
                {column1.headingSmall && (
                  <span className="small">{column1.headingSmall}</span>
                )}{" "}
                {column1.heading}
              </h2>
              {column1.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(column1.content),
                  }}
                />
              ) : (
                column1.contentText && <p>{column1.contentText}</p>
              )}
              {column1.bulletPoints && column1.bulletPoints.length > 0 && (
                <ul className={column1.useColumns ? "columns" : ""}>
                  {column1.bulletPoints.map((point: any, index: number) => (
                    <li key={index}>
                      <strong>{point.title}</strong> – {point.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {columnMedia1?.show && (
        <div
          className={
            columnMedia1.cssClasses || "mod_column viewport container has-media"
          }
          data-s3-module=""
        >
          <div
            className={
              columnMedia1.rowCssClasses ||
              `row mb-30 ${columnMedia1.mediaPosition || "media-right"}`
            }
            data-api-key="content"
          >
            <div className="item">
              <h2
                style={
                  columnMedia1.headingColor
                    ? { color: columnMedia1.headingColor }
                    : undefined
                }
              >
                {columnMedia1.heading}{" "}
                {columnMedia1.headingSmall && (
                  <span className="small">{columnMedia1.headingSmall}</span>
                )}
              </h2>
              {columnMedia1.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(columnMedia1.content),
                  }}
                />
              ) : (
                columnMedia1.contentText && <p>{columnMedia1.contentText}</p>
              )}
            </div>
            {columnMedia1.mediaImage && (
              <picture className="media">
                {getResponsiveImageUrls(columnMedia1.mediaImage).mobile && (
                  <source
                    media="(max-width:420px)"
                    srcSet={`${
                      getResponsiveImageUrls(columnMedia1.mediaImage).mobile
                    }, ${
                      getResponsiveImageUrls(columnMedia1.mediaImage).mobile
                    } 2x`}
                  />
                )}
                {getResponsiveImageUrls(columnMedia1.mediaImage).tablet && (
                  <source
                    media="(max-width:800px)"
                    srcSet={`${
                      getResponsiveImageUrls(columnMedia1.mediaImage).tablet
                    }, ${
                      getResponsiveImageUrls(columnMedia1.mediaImage).tablet
                    } 2x`}
                  />
                )}
                {getResponsiveImageUrls(columnMedia1.mediaImage).desktop && (
                  <source
                    srcSet={
                      getResponsiveImageUrls(columnMedia1.mediaImage).desktop
                    }
                  />
                )}
                <img
                  src={getImageSrc(columnMedia1.mediaImage)}
                  loading="lazy"
                  alt={getResponsiveImageUrls(columnMedia1.mediaImage).alt}
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
            "mod_banner dark hide-divider viewport background-1"
          }
          data-s3-module=""
        >
          <div
            className={`row wow ${banner1.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <h2
                className={banner1.headingAlign || "text-center"}
                style={
                  banner1.headingColor
                    ? { color: banner1.headingColor }
                    : undefined
                }
              >
                {banner1.heading}
              </h2>
              {banner1.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(banner1.content),
                  }}
                />
              ) : (
                banner1.contentText && <p>{banner1.contentText}</p>
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
                src={getImageSrc(banner1.backgroundImage)}
                loading="lazy"
                alt={getResponsiveImageUrls(banner1.backgroundImage).alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}

      {twoColumn1?.show && (
        <div
          className={
            twoColumn1.cssClasses || "mod_columns_two viewport container"
          }
          data-s3-module=""
        >
          <div className={twoColumn1.rowCssClasses || "row"}>
            <div
              className={`content ${
                twoColumn1.verticalAlign ? "vertical-align" : ""
              }`}
            >
              <div
                className={`item wow ${
                  twoColumn1.leftColumn?.animationClass || "fadeInLeft"
                }`}
                data-api-key="content_left"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                {twoColumn1.leftColumn?.heading && (
                  <h2
                    style={
                      twoColumn1.leftColumn.headingColor
                        ? { color: twoColumn1.leftColumn.headingColor }
                        : undefined
                    }
                  >
                    {twoColumn1.leftColumn.heading}
                  </h2>
                )}
                {twoColumn1.leftColumn?.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(twoColumn1.leftColumn.content),
                    }}
                  />
                )}
              </div>
              <div
                className={`item wow ${
                  twoColumn1.rightColumn?.animationClass || "fadeInRight"
                }`}
                data-api-key="content_right"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                {twoColumn1.rightColumn?.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(twoColumn1.rightColumn.content),
                    }}
                  />
                ) : (
                  twoColumn1.rightColumn?.contentText && (
                    <p>{twoColumn1.rightColumn.contentText}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {column2?.show && (
        <div
          className={column2.cssClasses || "mod_column viewport container"}
          data-s3-module=""
        >
          <div
            className={column2.rowCssClasses || "row mt-30 mb-30"}
            data-api-key="content"
          >
            <div className="item">
              <h2
                className={column2.headingAlign || "text-center"}
                style={
                  column2.headingColor
                    ? { color: column2.headingColor }
                    : undefined
                }
              >
                {column2.heading}
              </h2>
              {column2.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(column2.content),
                  }}
                />
              ) : (
                column2.contentText && <p>{column2.contentText}</p>
              )}
              {column2.bulletPoints && column2.bulletPoints.length > 0 && (
                <ul className={column2.useColumns ? "columns" : ""}>
                  {column2.bulletPoints.map((point: any, index: number) => (
                    <li key={index}>
                      <strong>{point.title}</strong> – {point.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {boxGrid2?.show && (
        <div
          className={
            boxGrid2.cssClasses ||
            "mod_box_grid viewport container option-2 single bkg-image"
          }
          data-s3-module=""
        >
          <div className="row">
            <div className="boxes">
              <div
                className="box wow fadeInUp"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <h2
                  style={
                    boxGrid2.headingColor
                      ? { color: boxGrid2.headingColor }
                      : undefined
                  }
                >
                  {boxGrid2.heading}
                </h2>
                {boxGrid2.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(boxGrid2.content),
                    }}
                  />
                ) : (
                  boxGrid2.contentText && <p>{boxGrid2.contentText}</p>
                )}
              </div>
            </div>
          </div>
          {boxGrid2.backgroundImage && (
            <picture className="background">
              {getResponsiveImageUrls(boxGrid2.backgroundImage).mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${
                    getResponsiveImageUrls(boxGrid2.backgroundImage).mobile
                  }, ${
                    getResponsiveImageUrls(boxGrid2.backgroundImage).mobile
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(boxGrid2.backgroundImage).tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${
                    getResponsiveImageUrls(boxGrid2.backgroundImage).tablet
                  }, ${
                    getResponsiveImageUrls(boxGrid2.backgroundImage).tablet
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(boxGrid2.backgroundImage).desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${
                    getResponsiveImageUrls(boxGrid2.backgroundImage).desktop
                  }, ${
                    getResponsiveImageUrls(boxGrid2.backgroundImage).desktop
                  } 2x`}
                />
              )}
              {getResponsiveImageUrls(boxGrid2.backgroundImage).large && (
                <source
                  srcSet={
                    getResponsiveImageUrls(boxGrid2.backgroundImage).large
                  }
                />
              )}
              <img
                src={getImageSrc(boxGrid2.backgroundImage)}
                loading="lazy"
                alt={getResponsiveImageUrls(boxGrid2.backgroundImage).alt}
                draggable="false"
              />
            </picture>
          )}
        </div>
      )}
    </main>
  );
}

export default WesleyChapel;
