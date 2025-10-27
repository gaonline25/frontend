"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const LocationProviderLocator = () => {
  const router = useRouter();
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [view, setView] = useState("list"); // 'list' or 'detail'
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Sample data for all locations and providers
  const locations = [
    {
      id: "165420079",
      name: "Clearwater",
      image:
        "https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=600",
      phone: "(727) 378-9338",
      alt: "pier on beach at sunset",
      address: "2745 Fl-580 Suite 101, Clearwater, FL 33761",
    },
    {
      id: "165421211",
      name: "Clermont",
      image:
        "https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&w=600",
      phone: "(407) 461-8193",
      alt: "crane on beach at sunset",
      address: "861 Oakley Seaver Dr., Suite B, Clermont, FL 34711",
    },
    {
      id: "165421472",
      name: "Daytona Beach",
      image:
        "https://www.datocms-assets.com/105497/1694093838-daytona-beach.jpg?auto=format,compress&w=600",
      phone: "(407) 756-9062",
      alt: "lifeguard tower at sunset",
      address: "123 Beach Blvd, Daytona Beach, FL 32118",
    },
    {
      id: "165422054",
      name: "Lady Lake / The Villages",
      image:
        "https://www.datocms-assets.com/105497/1694093996-the-villages.jpg?auto=format,compress&w=600",
      phone: "(352) 707-0707",
      alt: "cloudy sunset over lake",
      address: "456 Village Way, Lady Lake, FL 32159",
    },
  ];

  const providers = [
    {
      id: "171463919",
      name: "Bria Bennie",
      title: "PA-C",
      image:
        "https://www.datocms-assets.com/105497/1696451062-bria-bennie.jpg?auto=format,compress&w=400",
      distance: "20.4 mi",
      locationId: "165421211",
      slug: "bria-bennie",
    },
    {
      id: "171463440",
      name: "Norma Ojeda",
      title: "MSN, APRN",
      image:
        "https://www.datocms-assets.com/105497/1694009993-norma-ojeda-np.jpg?auto=format,compress&w=400",
      distance: "20.4 mi",
      locationId: "165420079",
      slug: "norma-ojeda",
    },
    {
      id: "aZU02WUuTom7FbiqiXlQ_A",
      name: "Karla Y. Rodriguez",
      title: "APRN-AGPNP",
      image:
        "https://www.datocms-assets.com/105497/1747758790-karla-rodriguez-edited.png?auto=format,compress&w=400",
      distance: "25 mi",
      locationId: "165421472",
      slug: "karla-rodriguez",
    },
    {
      id: "171463431",
      name: "Jacob Wonderlich",
      title: "PA",
      image:
        "https://www.datocms-assets.com/105497/1694009962-jay-wonderlich-pa.jpg?auto=format,compress&w=400",
      distance: "25 mi",
      locationId: "165422054",
      slug: "jacob-wonderlich",
    },
  ];

  // Initialize Google Map
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (mapRef.current && window.google) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: 28.2898, lng: -85.5713 },
          zoom: 7,
          mapTypeId: "roadmap",
          styles: [
            {
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }],
            },
            {
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#616161" }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#f5f5f5" }],
            },
          ],
        });

        setMap(mapInstance);

        const sampleLocations = [
          { lat: 28.0, lng: -82.7, title: "Clearwater" },
          { lat: 28.5, lng: -81.7, title: "Orlando" },
          { lat: 27.9, lng: -82.4, title: "Tampa" },
        ];

        sampleLocations.forEach((location) => {
          new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: mapInstance,
            title: location.title,
            icon: "/assets/images/mapicon.png",
          });
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleProviderClick = (provider) => {
    const location = locations.find((loc) => loc.id === provider.locationId);
    setSelectedProvider(provider);
    setSelectedLocation(location);
    setView("detail");
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedProvider(null);
    setSelectedLocation(null);
  };

  const handleViewProvider = () => {
    if (selectedProvider) {
      router.push(`/providers/${selectedProvider.slug}`);
    }
  };

  return (
    <main id="main">
      <div className="mod_locator" data-s3-module="">
        <div className="locator">
          <section className="content-section">
            <div className="content-header">
              <div className="menu">
                <div className="menu-icon">
                  <img
                    draggable="false"
                    src="/assets/images/search.png"
                    alt="Search"
                  />
                </div>
                <div className="menu-item" data-id="locations">
                  <h1>Locations</h1>
                </div>
                <div className="menu-item active" data-id="providers">
                  <h2>Providers</h2>
                </div>
              </div>
              <div className="breadcrumb"></div>
              <div className="use-my-location">
                <div className="use-my-location-icon" title="Use my location">
                  <img
                    src="/assets/images/crosshair.png"
                    alt="Use my location"
                  />
                  <div className="use-my-location-icon-loader">&nbsp;</div>
                </div>
                <div className="use-my-location-label">
                  <div>Use My Location</div>
                </div>
              </div>
              <div className="search">
                <div className="search-wrapper">
                  <input
                    id="google-search-input"
                    name="google-search-input"
                    className="google-search-input pac-target-input"
                    placeholder="Search by address or zip code"
                    defaultValue=""
                    autoComplete="off"
                  />
                  <input
                    id="provider-search-input"
                    name="provider-search-input"
                    className="provider-search-input active"
                    placeholder="Search by provider name"
                    defaultValue=""
                  />

                  <div className="filter-pill">
                    <div className="name">Clear Lake</div>
                    <div className="close">✖</div>
                  </div>

                  {view === "list" ? (
                    <div className="search-results-snippet active">
                      {providers.length} Providers
                    </div>
                  ) : (
                    <div
                      className="search-results-snippet active back"
                      onClick={handleBackToList}
                      style={{ cursor: "pointer" }}
                    >
                      &lt; Back
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="content-body">
              {/* Detail View */}
              {view === "detail" && selectedProvider && selectedLocation && (
                <div className="result-detail active providers">
                  <div className="result location">
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="detail-background"
                          draggable="false"
                          src={selectedLocation.image}
                          alt={selectedLocation.alt}
                        />
                        <img
                          className="detail-picture"
                          draggable="false"
                          src={selectedProvider.image}
                          alt={selectedProvider.name}
                        />
                      </div>
                      <div className="foreground">
                        <div
                          className="quick-view-button"
                          onClick={handleViewProvider}
                          style={{ cursor: "pointer" }}
                        >
                          View Provider
                        </div>
                        <div className="top-right">
                          <div className="reviews-stars">
                            <i
                              className="f-icon icon-star"
                              role="presentation"
                              aria-label="Review Star"
                            ></i>
                            <i
                              className="f-icon icon-star"
                              role="presentation"
                              aria-label="Review Star"
                            ></i>
                            <i
                              className="f-icon icon-star"
                              role="presentation"
                              aria-label="Review Star"
                            ></i>
                            <i
                              className="f-icon icon-star"
                              role="presentation"
                              aria-label="Review Star"
                            ></i>
                            <i
                              className="f-icon icon-star"
                              role="presentation"
                              aria-label="Review Star"
                            ></i>
                          </div>
                          <div className="reviews-text">0 Reviews</div>
                        </div>
                        <div className="bottom-left">
                          <div className="heading">{selectedProvider.name}</div>
                          <div className="subheading-row">
                            <div>
                              <div className="location-icon">
                                <img
                                  src="/assets/images/location.png"
                                  alt="Location"
                                />
                              </div>
                              <div className="location-distance">
                                {selectedProvider.distance}
                              </div>
                            </div>
                            <div className="view-relations">
                              <div className="relations-amount">4</div>
                              <div className="relations-text">
                                View Location
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-right">
                          <div className="location-name">
                            {selectedLocation.name}
                          </div>
                          <div className="location-distance-wrapper">
                            <div className="location-icon">
                              <img
                                src="/assets/images/location.png"
                                alt="Location"
                              />
                            </div>
                            <div className="location-distance">
                              {selectedProvider.distance}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div className="address">
                          {selectedLocation.address}
                        </div>
                        <div className="get-directions">Get Directions&gt;</div>
                        <div className="hours hidden">Business Hours&gt;</div>
                      </div>
                      <div className="right">
                        <div
                          className="cta-button schedule"
                          style={{ display: "none" }}
                        >
                          Schedule
                        </div>
                        <a
                          className="tel ppc-href"
                          href={`tel:+1${selectedLocation.phone.replace(
                            /[^0-9]/g,
                            ""
                          )}`}
                        >
                          {selectedLocation.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* List View */}
              <div className={`results ${view === "detail" ? "hidden" : ""}`}>
                <div className="results-container locations">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="result location"
                      data-type="location"
                      data-id={location.id}
                    >
                      <div className="result-content">
                        <div className="background">
                          <img
                            draggable="false"
                            src={location.image}
                            alt={location.alt}
                          />
                        </div>
                        <div className="foreground">
                          <div className="quick-view-button">Quick View</div>
                          <div className="bottom-left">{location.name}</div>
                          <div className="bottom-right">
                            <div className="distance-icon">
                              <img
                                src="/assets/images/location.png"
                                alt="Location"
                              />
                            </div>
                            <div className="distance"></div>
                          </div>
                        </div>
                      </div>
                      <div className="result-footer">
                        <div className="left">
                          <div
                            className="cta-button schedule"
                            data-type="location"
                            data-id={location.id}
                          >
                            Schedule
                          </div>
                          <div
                            className="cta-link location"
                            data-type="location"
                            data-id={location.id}
                          >
                            View Location
                          </div>
                        </div>
                        <div className="right has-number">
                          <div className="icon-text">
                            <div className="result-footer-icon">
                              <img
                                src="/assets/images/web.png"
                                alt="View Location"
                              />
                            </div>
                            <div
                              className="text view-website"
                              data-id={location.id}
                              data-type="location"
                            >
                              View Location
                            </div>
                          </div>
                          <div className="detail-phone-number">
                            <a
                              className="tel ppc-href"
                              href={`tel:+1${location.phone.replace(
                                /[^0-9]/g,
                                ""
                              )}`}
                              data-number={location.phone}
                              data-id={location.id}
                            >
                              <span className="ppc-number">
                                {location.phone}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="results-container providers active">
                  {providers.map((provider) => (
                    <div
                      key={provider.id}
                      className="result provider active"
                      data-type="provider"
                      data-id={provider.id}
                      onClick={() => handleProviderClick(provider)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="result-content">
                        <div className="background">
                          <img
                            className="provider-background"
                            draggable="false"
                            src="/assets/images/provider-background.jpg?auto=format,compress&w=400"
                            alt={provider.name}
                          />
                          <img
                            className="provider-picture"
                            draggable="false"
                            src={provider.image}
                            alt={provider.name}
                          />
                        </div>
                        <div className="foreground">
                          <div className="quick-view-button">Quick View</div>
                          <div className="bottom-left">
                            {provider.name}{" "}
                            <span className="small">{provider.title}</span>
                          </div>
                          <div className="bottom-right">
                            <div className="distance">{provider.distance}</div>
                          </div>
                        </div>
                      </div>
                      <div className="result-footer">
                        <div className="left">
                          <div className="icon-text">
                            <div className="result-footer-icon">
                              <img
                                src="/assets/images/web.png"
                                alt="View Location"
                              />
                            </div>
                            <div
                              className="text view-website"
                              data-id={provider.id}
                              data-type="provider"
                            >
                              View Provider
                            </div>
                          </div>
                        </div>
                        <div className="right show-number">
                          <div
                            className="cta-button schedule"
                            data-type="provider"
                            data-id={provider.id}
                          >
                            Schedule
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel">
                <div className="left-arrow">▸</div>
                <p className="carousel-heading">More Locations Near You</p>
                <div className="carousel-content">
                  <div className="carousel-content-inner"></div>
                </div>
                <div className="right-arrow">▸</div>
              </div>
              <div className="content-body-scrollbar active">
                <div className="content-body-scrollbar-line"></div>
                <div
                  className="content-body-scrollbar-handle"
                  style={{ height: "17%", top: "0%" }}
                ></div>
              </div>
            </div>
          </section>

          <section className="map-section" style={{ overflow: "hidden" }}>
            <div
              ref={mapRef}
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
            ></div>
          </section>

          <section className="mobile-footer-tabs">
            <div className="mobile-footer-tab active" data-action="details">
              Details
            </div>
            <div className="mobile-footer-tab" data-action="map">
              Map
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LocationProviderLocator;
