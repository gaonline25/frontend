"use client";

import React from "react";
import {
  getResponsiveImageUrls,
  lexicalToHtml,
} from "@/lib/api/locations/fetchMembershipPageData";

interface MembershipContentProps {
  data: any;
}

const MembershipContent: React.FC<MembershipContentProps> = ({ data }) => {
  // Helper function to render sections based on order
  const renderSection = (sectionKey: string) => {
    switch (sectionKey) {
      case "hero":
        return (
          data.heroSection?.show && <HeroSection data={data.heroSection} />
        );
      case "intro":
        return (
          data.introSection?.show && <IntroSection data={data.introSection} />
        );
      case "halfImage1":
        return (
          data.halfImageSection1?.show && (
            <HalfImageSection data={data.halfImageSection1} />
          )
        );
      case "boxGrid1":
        return (
          data.boxGridSection1?.show && (
            <BoxGridSection data={data.boxGridSection1} />
          )
        );
      case "banner":
        return (
          data.bannerSection?.show && (
            <BannerSection data={data.bannerSection} />
          )
        );
      case "column":
        return (
          data.columnSection?.show && (
            <ColumnSection data={data.columnSection} />
          )
        );
      case "boxGrid2":
        return (
          data.boxGridSection2?.show && (
            <BoxGridSection data={data.boxGridSection2} isSecond />
          )
        );
      case "imageColumn":
        return (
          data.imageColumnSection?.show && (
            <ImageColumnSection data={data.imageColumnSection} />
          )
        );
      default:
        return null;
    }
  };

  return (
    <main id="main">
      {data.sectionOrder?.map((section: any, index: number) => (
        <React.Fragment key={`${section.section}-${index}`}>
          {renderSection(section.section)}
        </React.Fragment>
      ))}
    </main>
  );
};

// Individual Section Components
const HeroSection: React.FC<{ data: any }> = ({ data }) => {
  const bgImages = getResponsiveImageUrls(data.backgroundImage);
  const mediaImages = getResponsiveImageUrls(data.mediaImage);

  return (
    <div className={`mod_hero ${data.className || ""}`} data-s3-module>
      <div className="wrapper">
        <picture className="background">
          {bgImages.mobile && (
            <source
              media="(max-width:420px)"
              srcSet={`${bgImages.mobile} 1x, ${bgImages.mobile} 2x`}
            />
          )}
          {bgImages.tablet && (
            <source
              media="(max-width:800px)"
              srcSet={`${bgImages.tablet} 1x, ${bgImages.tablet} 2x`}
            />
          )}
          {bgImages.desktop && (
            <source
              media="(max-width:1400px)"
              srcSet={`${bgImages.desktop} 1x, ${bgImages.desktop} 2x`}
            />
          )}
          <img
            src={bgImages.large || bgImages.desktop || "/placeholder.jpg"}
            loading="lazy"
            alt={bgImages.alt}
            draggable="false"
          />
        </picture>

        <div className="row">
          <div className="inner">
            {data.breadcrumbs && data.breadcrumbs.length > 0 && (
              <ul className="partial_breadcrumb" data-s3-partial>
                {data.breadcrumbs.map((crumb: any, index: number) => (
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
              style={{ color: data.titleColor, fontSize: data.titleFontSize }}
            >
              {data.title}
            </h1>
          </div>
        </div>

        {mediaImages.mobile && (
          <div className="media">
            <picture className="background">
              {mediaImages.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${mediaImages.mobile} 2x`}
                />
              )}
              <img
                src={
                  mediaImages.large || mediaImages.desktop || "/placeholder.jpg"
                }
                alt={mediaImages.alt}
                draggable="false"
              />
            </picture>
          </div>
        )}
      </div>
    </div>
  );
};

const IntroSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div
      className={`mod_intro ${data.className || ""}`}
      data-s3-module
      style={{
        backgroundColor: data.backgroundColor,
        color: data.textColor,
        paddingBottom: data.paddingBottom,
      }}
    >
      <div className="row pb-0">
        {data.logo && (
          <picture className="logo">
            <img
              src={data.logo.url || data.logo}
              width={data.logoWidth || 58}
              height={data.logoHeight || 64}
              loading="lazy"
              alt={data.logoAlt}
              draggable="false"
            />
          </picture>
        )}
        <div className="inner">
          <h3 style={{ color: data.headingColor }}>{data.heading}</h3>
          {data.contentParagraph1 && (
            <div
              dangerouslySetInnerHTML={{
                __html: lexicalToHtml(data.contentParagraph1),
              }}
            />
          )}
          {data.contentParagraph2 && (
            <div
              dangerouslySetInnerHTML={{
                __html: lexicalToHtml(data.contentParagraph2),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const HalfImageSection: React.FC<{ data: any }> = ({ data }) => {
  const images = getResponsiveImageUrls(data.image);

  return (
    <div
      className={`mod_half_image ${data.className || ""}`}
      data-s3-module
      style={{ backgroundColor: data.backgroundColor, color: data.textColor }}
    >
      <div
        className={`row half-image-row ${data.imagePosition === "flipped" ? "flipped" : ""} ${data.marginBottom}`}
      >
        <div className="media">
          <picture className="background">
            {images.mobile && (
              <source
                media="(max-width:420px)"
                srcSet={`${images.mobile}, ${images.mobile} 2x`}
              />
            )}
            {images.tablet && (
              <source
                media="(max-width:800px)"
                srcSet={`${images.tablet}, ${images.tablet} 2x`}
              />
            )}
            {images.desktop && (
              <source
                media="(max-width:1400px)"
                srcSet={`${images.desktop}, ${images.desktop} 2x`}
              />
            )}
            <img
              src={images.large || images.desktop || "/placeholder.jpg"}
              loading="lazy"
              alt={images.alt}
              draggable="false"
            />
          </picture>
        </div>
        <div className={`copy ${data.copyPadding ? "padded" : ""}`}>
          <div className="inner">
            <div className="content">
              <h2 style={{ color: data.headingColor }}>{data.heading}</h2>
              {data.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(data.content),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BoxGridSection: React.FC<{ data: any; isSecond?: boolean }> = ({
  data,
  isSecond,
}) => {
  return (
    <div
      className={`mod_box_grid ${data.className || ""}`}
      data-s3-module
      style={{ backgroundColor: data.backgroundColor, color: data.textColor }}
    >
      <div className="row">
        {data.headingBefore && (
          <div className="content-before">
            <h2 style={{ color: data.headingBeforeColor }}>
              {data.headingBefore}
            </h2>
            {data.contentBefore && (
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(data.contentBefore),
                }}
              />
            )}
          </div>
        )}

        {data.boxes && data.boxes.length > 0 && (
          <div className="boxes wider">
            {data.boxes.map(
              (box: any, index: number) =>
                box.display !== false && (
                  <div
                    key={index}
                    className="box wow fadeInUp"
                    style={{
                      backgroundColor:
                        box.customBackgroundColor || data.boxBackgroundColor,
                      color: data.boxTextColor,
                    }}
                  >
                    {box.icon && (
                      <img
                        src={box.icon.url || box.icon}
                        alt={box.iconAlt || ""}
                        className="box-icon"
                      />
                    )}
                    <h3 style={{ color: box.headingColor }}>{box.heading}</h3>
                    {box.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: lexicalToHtml(box.content),
                        }}
                      />
                    )}
                    {box.link?.url && (
                      <a
                        href={box.link.url}
                        target={box.link.openInNewTab ? "_blank" : "_self"}
                        rel={
                          box.link.openInNewTab
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {box.link.text}
                      </a>
                    )}
                  </div>
                )
            )}
          </div>
        )}

        {data.contentAfter && (
          <div className="content-after">
            <div
              dangerouslySetInnerHTML={{
                __html: lexicalToHtml(data.contentAfter),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const BannerSection: React.FC<{ data: any }> = ({ data }) => {
  const bgImages = getResponsiveImageUrls(data.backgroundImage);

  return (
    <div
      className={`mod_banner ${data.className || ""}`}
      data-s3-module
      style={{ backgroundColor: data.backgroundColor, color: data.textColor }}
    >
      <div className="row wow fadeInUp">
        <div className="content">
          <h2 className="text-center" style={{ color: data.headingColor }}>
            {data.subheading && (
              <span className="small" style={{ color: data.subheadingColor }}>
                {data.subheading}
              </span>
            )}
            <div dangerouslySetInnerHTML={{ __html: data.heading }} />
          </h2>
          <div className={data.columnLayout || "columns-two"}>
            {data.leftColumnContent && (
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(data.leftColumnContent),
                }}
              />
            )}
            {data.rightColumnContent && (
              <div
                dangerouslySetInnerHTML={{
                  __html: lexicalToHtml(data.rightColumnContent),
                }}
              />
            )}
          </div>
        </div>
      </div>

      {bgImages.mobile && (
        <picture className="background">
          {bgImages.mobile && (
            <source
              media="(max-width:420px)"
              srcSet={`${bgImages.mobile}, ${bgImages.mobile} 2x`}
            />
          )}
          {bgImages.tablet && (
            <source
              media="(max-width:800px)"
              srcSet={`${bgImages.tablet}, ${bgImages.tablet} 2x`}
            />
          )}
          {bgImages.desktop && (
            <source
              media="(max-width:1400px)"
              srcSet={`${bgImages.desktop}, ${bgImages.desktop} 2x`}
            />
          )}
          <img
            src={bgImages.large || bgImages.desktop || "/placeholder.jpg"}
            loading="lazy"
            alt={bgImages.alt}
            draggable="false"
          />
        </picture>
      )}
    </div>
  );
};

const ColumnSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div
      className={`mod_column ${data.className || ""}`}
      data-s3-module
      style={{ backgroundColor: data.backgroundColor, color: data.textColor }}
    >
      <div className="row" style={{ textAlign: data.textAlign }}>
        <div className="item">
          <h2 style={{ color: data.headingColor }}>{data.heading}</h2>
          {data.content && (
            <div
              dangerouslySetInnerHTML={{ __html: lexicalToHtml(data.content) }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ImageColumnSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div
      className={`mod_column ${data.className || ""}`}
      data-s3-module
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className="row" style={{ textAlign: data.textAlign }}>
        <div className="item">
          {data.image && (
            <img
              src={data.image.url || data.image}
              width={data.imageWidth || 578}
              height={data.imageHeight || 723}
              alt={data.imageAlt || ""}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipContent;
