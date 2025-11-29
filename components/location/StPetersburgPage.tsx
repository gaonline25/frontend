"use client";

import { useState } from "react";

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
  "https://backend-orpin-six-56.vercel.app/api";

interface PageData {
  heroSection?: any;
  introSection?: any;
  halfImageSection1?: any;
  servicesColumnSection?: any;
  bannerSection1?: any;
  dividerSection?: any;
  bannerSection2?: any;
  finalColumnSection?: any;
  sectionOrder?: Array<{ section: string }>;
}

function StPetersburgPage({ data }: { data: PageData | null }) {
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
  const intro = pageData.introSection;
  const halfImage1 = pageData.halfImageSection1;
  const servicesColumn = pageData.servicesColumnSection;
  const banner1 = pageData.bannerSection1;
  const divider = pageData.dividerSection;
  const banner2 = pageData.bannerSection2;
  const finalColumn = pageData.finalColumnSection;

  const heroBackgroundImage = getResponsiveImageUrls(hero?.backgroundImage);
  const heroMediaImage = getResponsiveImageUrls(hero?.mediaImage);
  const halfImage1Image = getResponsiveImageUrls(halfImage1?.image);
  const banner1BackgroundImage = getResponsiveImageUrls(
    banner1?.backgroundImage
  );
  const banner2BackgroundImage = getResponsiveImageUrls(
    banner2?.backgroundImage
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
                <h1
                  className={hero.titleCssClass || "long-title"}
                  style={hero.titleColor ? { color: hero.titleColor } : {}}
                >
                  {hero.title}
                </h1>
                {hero.showDescription && hero.description && (
                  <div
                    className="text"
                    style={
                      hero.descriptionColor
                        ? { color: hero.descriptionColor }
                        : {}
                    }
                    dangerouslySetInnerHTML={{
                      __html: lexicalToHtml(hero.description),
                    }}
                  />
                )}
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
                  <source srcSet={heroMediaImage.desktop} />
                  <img
                    src={heroMediaImage.desktop}
                    width="1000"
                    height="667"
                    alt={heroMediaImage.alt}
                    draggable="false"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Intro Module */}
      {intro?.show && (
        <div
          className={
            intro.cssClasses ||
            "mod_intro container viewport option-1 wide wow fadeInUp"
          }
          data-s3-module=""
          style={{
            visibility: "hidden",
            animationName: "none",
            backgroundColor: intro.backgroundColor || undefined,
            color: intro.textColor || undefined,
          }}
        >
          <div className={intro.rowCssClasses || "row pb-0"}>
            {intro.logo && (
              <picture className="logo">
                <img
                  src={getImageUrl(intro.logo)}
                  width={intro.logoWidth || 58}
                  height={intro.logoHeight || 64}
                  loading="lazy"
                  alt={intro.logoAlt}
                  draggable="false"
                  data-api-key="logo"
                />
              </picture>
            )}
            <div className="inner" data-api-key="content">
              <h2
                style={intro.headingColor ? { color: intro.headingColor } : {}}
              >
                {intro.heading}{" "}
                {intro.headingSpan && (
                  <span className="block">{intro.headingSpan}</span>
                )}
              </h2>
              {intro.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(intro.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Half Image Module */}
      {halfImage1?.show && (
        <div
          className={
            halfImage1.cssClasses ||
            "mod_half_image viewport half-image container wow fadeInLeft"
          }
          data-s3-module=""
          style={{
            visibility: "hidden",
            animationName: "none",
            backgroundColor: halfImage1.backgroundColor || undefined,
            color: halfImage1.textColor || undefined,
          }}
        >
          <div className={halfImage1.rowCssClasses || "row half-image-row"}>
            {halfImage1Image.mobile && (
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${halfImage1Image.mobile}, ${halfImage1Image.mobile} 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${halfImage1Image.tablet}, ${halfImage1Image.tablet} 2x`}
                  />
                  <source srcSet={halfImage1Image.desktop} />
                  <img
                    src={halfImage1Image.desktop}
                    loading="lazy"
                    width="1125"
                    height="1540"
                    alt={halfImage1Image.alt}
                    draggable="false"
                    data-api-key="image"
                  />
                </picture>
              </div>
            )}
            <div className={`copy ${halfImage1.copyPadding || ""}`}>
              <div className="inner">
                <div className="content" data-api-key="content">
                  <h2
                    style={
                      halfImage1.headingColor
                        ? { color: halfImage1.headingColor }
                        : {}
                    }
                  >
                    {halfImage1.headingSmall && (
                      <span className="small">{halfImage1.headingSmall} </span>
                    )}
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

      {/* Column Module */}
      {servicesColumn?.show && (
        <div
          className={
            servicesColumn.cssClasses || "mod_column viewport container"
          }
          data-s3-module=""
          style={{
            backgroundColor: servicesColumn.backgroundColor || undefined,
            color: servicesColumn.textColor || undefined,
          }}
        >
          <div
            className={servicesColumn.rowCssClasses || "row mt-30 mb-30"}
            data-api-key="content"
          >
            <div className="item">
              <h2
                className={servicesColumn.headingAlign || "text-center"}
                style={
                  servicesColumn.headingColor
                    ? { color: servicesColumn.headingColor }
                    : {}
                }
              >
                {servicesColumn.heading}
              </h2>
              {servicesColumn.intro && (
                <p className={servicesColumn.introAlign || "text-center"}>
                  {servicesColumn.intro}
                </p>
              )}
              {servicesColumn.services &&
                servicesColumn.services.length > 0 && (
                  <ul>
                    <ul
                      className={servicesColumn.columnsLayout ? "columns" : ""}
                    >
                      {servicesColumn.services.map(
                        (service: any, idx: number) => (
                          <li key={idx}>
                            <strong>{service.name}</strong>:{" "}
                            {service.description}
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

      {/* Banner Module */}
      {banner1?.show && (
        <div
          className={
            banner1.cssClasses ||
            "mod_banner dark hide-divider viewport background-3"
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
                style={
                  banner1.headingColor ? { color: banner1.headingColor } : {}
                }
              >
                {banner1.heading}
              </h2>
              {banner1.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(banner1.content),
                  }}
                />
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

      {/* Divider Module */}
      {divider?.show && (
        <div
          className={divider.cssClasses || "mod_divider container"}
          data-s3-module=""
          style={{ backgroundColor: divider.backgroundColor || undefined }}
        >
          <div className="row">
            <div className="media">
              {divider.logo && (
                <picture className="">
                  <img
                    src={getImageUrl(divider.logo)}
                    width={divider.logoWidth || 55}
                    height={divider.logoHeight || 61}
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

      {/* Banner Module - Plastic Surgery */}
      {banner2?.show && (
        <div
          className={
            banner2.cssClasses ||
            "mod_banner dark hide-divider viewport background-14"
          }
          data-s3-module=""
          style={{
            backgroundColor: banner2.backgroundColor || undefined,
            color: banner2.textColor || undefined,
          }}
        >
          <div
            className={`row wow ${banner2.animationClass || "fadeInUp"}`}
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="content" data-api-key="top_content">
              <h2
                style={
                  banner2.headingColor ? { color: banner2.headingColor } : {}
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
              {banner2.procedures && banner2.procedures.length > 0 && (
                <ul>
                  <ul className={banner2.columnsLayout ? "columns" : ""}>
                    {banner2.procedures.map((procedure: any, idx: number) => (
                      <li key={idx}>
                        {procedure.url ? (
                          <a href={procedure.url}>
                            <strong>{procedure.name}</strong>
                          </a>
                        ) : (
                          <strong>{procedure.name}</strong>
                        )}
                        : {procedure.description}
                      </li>
                    ))}
                  </ul>
                </ul>
              )}
            </div>
          </div>
          {banner2BackgroundImage.mobile && (
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${banner2BackgroundImage.mobile}, ${banner2BackgroundImage.mobile} 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${banner2BackgroundImage.tablet}, ${banner2BackgroundImage.tablet} 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${banner2BackgroundImage.desktop}, ${banner2BackgroundImage.desktop} 2x`}
              />
              <source
                srcSet={
                  banner2BackgroundImage.large || banner2BackgroundImage.desktop
                }
              />
              <img
                src={
                  banner2BackgroundImage.large || banner2BackgroundImage.desktop
                }
                loading="lazy"
                width="2200"
                height="802"
                alt={banner2BackgroundImage.alt}
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
          <div
            className={finalColumn.rowCssClasses || "row"}
            data-api-key="content"
          >
            <div className="item">
              <h2
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

export default StPetersburgPage;
