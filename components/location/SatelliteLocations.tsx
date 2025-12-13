"use client";

import React from "react";

interface LocationData {
  locationName: string;
  animationClass: string;
  mapSettings: {
    embedUrl: string;
    width: string;
    height: number;
    grayscale: boolean;
  };
  contactInfo: {
    headingPaddingTop: string;
    phone: string;
    phoneDisplay?: string;
    address: string;
    googleMapsUrl: string;
    email?: string;
    additionalInfo?: string;
  };
}

interface LocationSection {
  sectionName: string;
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  cssClasses: string;
  rowCssClasses: string;
  paddingBottom?: string;
  locations: LocationData[];
}

interface PayloadData {
  heroSection: {
    show: boolean;
    backgroundColor?: string;
    cssClasses: string;
    backgroundImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt: string;
      url: string;
    };
    breadcrumbs: Array<{
      label: string;
      url: string;
      ariaLabel: string;
    }>;
    title: string;
    titleColor?: string;
    subtitle: string;
    subtitleColor?: string;
    mediaImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt: string;
      url: string;
    };
  };
  locationSections: LocationSection[];
}

interface SatelliteLocationsProps {
  data: PayloadData | null;
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

const SatelliteLocations: React.FC<SatelliteLocationsProps> = ({ data }) => {
  if (!data) {
    return null; // Error handled in server component
  }

  return (
    <main id="main">
      {/* Hero Module */}
      {data.heroSection?.show && (
        <div className={data.heroSection.cssClasses} data-s3-module="">
          <div className="wrapper">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=420, ${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=630 2x`}
                data-lazyload-srcset={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=420, ${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=630 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=800, ${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1200 2x`}
                data-lazyload-srcset={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=800, ${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1400, ${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=2100 2x`}
                data-lazyload-srcset={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1400, ${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=2100 2x`}
              />
              <source
                srcSet={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1994`}
                data-lazyload-srcset={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1994`}
              />
              <img
                src={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1994`}
                data-lazyload-src={`${getImageUrl(
                  data.heroSection.backgroundImage
                )}?auto=format,compress&w=1994`}
                loading="lazy"
                data-lazyload="img"
                width="1994"
                height="1206"
                alt={data.heroSection.backgroundImage.alt}
                draggable="false"
                data-lazyload-loaded="true"
              />
            </picture>
            <div className="row">
              <div className="inner">
                <ul className="partial_breadcrumb" data-s3-partial="">
                  {data.heroSection.breadcrumbs?.map((breadcrumb, index) => (
                    <li key={index}>
                      <a
                        href={breadcrumb.url}
                        role="link"
                        aria-label={breadcrumb.ariaLabel}
                      >
                        {breadcrumb.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <h1
                  style={
                    data.heroSection.titleColor
                      ? { color: data.heroSection.titleColor }
                      : undefined
                  }
                >
                  {data.heroSection.title}
                </h1>
                <div className="text">
                  <p
                    style={
                      data.heroSection.subtitleColor
                        ? { color: data.heroSection.subtitleColor }
                        : undefined
                    }
                  >
                    {data.heroSection.subtitle}
                  </p>
                </div>

                <p>
                  <a
                    className="btn white"
                    href=""
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
                  srcSet={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=420, ${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=630 2x`}
                  data-lazyload-srcset={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=420, ${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=800, ${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=1200 2x`}
                  data-lazyload-srcset={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=800, ${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=1400, ${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=2100 2x`}
                  data-lazyload-srcset={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=1400, ${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=1920`}
                />
                <img
                  src={`${getImageUrl(
                    data.heroSection.mediaImage
                  )}?auto=format,compress&w=1920`}
                  width="1920"
                  height="1206"
                  alt={data.heroSection.mediaImage.alt}
                  draggable="false"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* Location Sections */}
      {data.locationSections?.map((section, sectionIndex) => {
        if (!section.show) return null;

        return (
          <div
            key={sectionIndex}
            className={section.cssClasses}
            data-s3-module=""
            style={{
              backgroundColor: section.backgroundColor || undefined,
              color: section.textColor || undefined,
            }}
          >
            <div className={section.rowCssClasses}>
              <div className="content ">
                {section.locations?.map((location, locationIndex) => (
                  <div
                    key={locationIndex}
                    className={`item wow ${location.animationClass}`}
                    data-api-key={
                      locationIndex === 0 ? "content_left" : "content_right"
                    }
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    <div
                      style={{
                        WebkitFilter: location.mapSettings.grayscale
                          ? "grayscale(100%)"
                          : "none",
                        filter: location.mapSettings.grayscale
                          ? "grayscale(100%)"
                          : "none",
                      }}
                    >
                      <iframe
                        src={location.mapSettings.embedUrl}
                        width={location.mapSettings.width}
                        height={location.mapSettings.height}
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <h3 className={location.contactInfo.headingPaddingTop}>
                      {location.locationName}
                    </h3>
                    <p>
                      <a href={`tel:${location.contactInfo.phone}`}>
                        {location.contactInfo.phoneDisplay ||
                          location.contactInfo.phone}
                      </a>
                      <br />
                      <a
                        href={location.contactInfo.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {location.contactInfo.address}
                      </a>
                      {location.contactInfo.email && (
                        <>
                          <br />
                          <a href={`mailto:${location.contactInfo.email}`}>
                            {location.contactInfo.email}
                          </a>
                        </>
                      )}
                      {location.contactInfo.additionalInfo && (
                        <>
                          <br />
                          {location.contactInfo.additionalInfo}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default SatelliteLocations;
