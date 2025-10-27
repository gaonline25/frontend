import React from "react";

const LocatorListComponent = () => {
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
                <div className="menu-item active" data-id="locations">
                  <h1>Locations</h1>
                </div>
                <div className="menu-item" data-id="providers">
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
                    className="google-search-input pac-target-input active"
                    placeholder="Search by address or zip code"
                    value=""
                    autoComplete="off"
                  />
                  <input
                    id="provider-search-input"
                    name="provider-search-input"
                    className="provider-search-input"
                    placeholder="Search by provider name"
                    value=""
                  />
                  <div className="filter-pill">
                    <div className="name">Clear Lake</div>
                    <div className="close">✖</div>
                  </div>
                  <div className="search-results-snippet active">
                    21 Locations
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              <div className="result-detail locations">
                <div className="result location">
                  <div className="result-content">
                    <div className="background">
                      <img
                        className="detail-background"
                        draggable="false"
                        src=""
                        alt=""
                      />
                      <img
                        className="detail-picture"
                        draggable="false"
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="foreground">
                      <div className="quick-view-button">View Website</div>
                      <div className="top-right">
                        <div className="reviews-stars">
                          <i
                            className="f-icon icon-star active"
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
                        <div className="heading">Clearwater</div>
                        <div className="subheading-row">
                          <div>
                            <div className="location-icon">
                              <img
                                src="/assets/images/location.png"
                                alt="Location"
                              />
                            </div>
                            <div className="location-distance">&nbsp;</div>
                          </div>
                          <div className="view-relations">
                            <div className="relations-amount"></div>
                            <div className="relations-text"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-right">
                        <div className="location-name">&nbsp;</div>
                        <div className="location-distance-wrapper">
                          <div className="location-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="location-distance">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-footer">
                    <div className="left">
                      <div className="address">
                        2745 Fl-580 Suite 101, Clearwater, FL 33761
                      </div>
                      <div className="get-directions">Get Directions&gt;</div>
                      <div className="hours">Business Hours&gt;</div>
                    </div>
                    <div className="right">
                      <div className="cta-button schedule">Schedule</div>
                      <a className="tel ppc-href" href="tel:+17273789338">
                        <span className="ppc-number">(727) 378-9338</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="results">
                <div className="results-container locations active">
                  <div
                    className="result location"
                    data-type="location"
                    data-id="185286945"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="undefined?auto=format,compress&amp;w=600"
                          alt="Landing | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Landing</div>
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
                          data-id="185286945"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="185286945"
                        >
                          View Location
                        </div>
                      </div>
                      <div className="right no-number show-number">
                        <div className="icon-text">
                          <div className="result-footer-icon">
                            <img
                              src="/assets/images/web.png"
                              alt="View Location"
                            />
                          </div>
                          <div
                            className="text view-website"
                            data-id="185286945"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+1"
                            data-number=""
                            data-id="185286945"
                          >
                            <span className="ppc-number"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location"
                    data-type="location"
                    data-id="FzVTKkx3SKyGqQ3NZdWqRA"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="undefined?auto=format,compress&amp;w=600"
                          alt="Landing (Fillers) | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Landing (Fillers)</div>
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
                          data-id="FzVTKkx3SKyGqQ3NZdWqRA"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="FzVTKkx3SKyGqQ3NZdWqRA"
                        >
                          View Location
                        </div>
                      </div>
                      <div className="right no-number show-number">
                        <div className="icon-text">
                          <div className="result-footer-icon">
                            <img
                              src="/assets/images/web.png"
                              alt="View Location"
                            />
                          </div>
                          <div
                            className="text view-website"
                            data-id="FzVTKkx3SKyGqQ3NZdWqRA"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+1"
                            data-number=""
                            data-id="FzVTKkx3SKyGqQ3NZdWqRA"
                          >
                            <span className="ppc-number"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165421211"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&amp;w=600"
                          alt="crane on beach at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Clermont</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">20.4 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165421211"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165421211"
                        >
                          View Location
                        </div>
                      </div>
                      <div className="right has-number show-number">
                        <div className="icon-text">
                          <div className="result-footer-icon">
                            <img
                              src="/assets/images/web.png"
                              alt="View Location"
                            />
                          </div>
                          <div
                            className="text view-website"
                            data-id="165421211"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14074618193"
                            data-number="(407) 461-8193"
                            data-id="165421211"
                          >
                            <span className="ppc-number">(407) 461-8193</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1752877682-winter-gardent-4.jpg?auto=format,compress&amp;w=600"
                          alt="Winter Garden | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Winter Garden</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">24.1 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                        >
                          View Location
                        </div>
                      </div>
                      <div className="right has-number show-number">
                        <div className="icon-text">
                          <div className="result-footer-icon">
                            <img
                              src="/assets/images/web.png"
                              alt="View Location"
                            />
                          </div>
                          <div
                            className="text view-website"
                            data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14074031232"
                            data-number="407-403-1232"
                            data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                          >
                            <span className="ppc-number">407-403-1232</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165421415"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093930-orlando.jpg?auto=format,compress&amp;w=600"
                          alt="nighttime image of building"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Orlando / Dr. Phillips
                        </div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">25 mi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="results-container providers">
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463919"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Bria Bennie"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1696451062-bria-bennie.jpg?auto=format,compress&amp;w=400"
                          alt="Bria Bennie"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Bria Bennie <span className="small">PA-C</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">20.4 mi</div>
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
                            data-id="171463919"
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
                          data-id="171463919"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463440"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Norma Ojeda, NP"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694009993-norma-ojeda-np.jpg?auto=format,compress&amp;w=400"
                          alt="Norma Ojeda, NP"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Norma Ojeda <span className="small">MSN, APRN</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">20.4 mi</div>
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
                            data-id="171463440"
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
                          data-id="171463440"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="aZU02WUuTom7FbiqiXlQ_A"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Karla Y. Rodriguez, APRN-AGPNP | Goldfingers Aesthetics"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1747758790-karla-rodriguez-edited.png?auto=format,compress&amp;w=400"
                          alt="Karla Y. Rodriguez, APRN-AGPNP | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Karla Y. Rodriguez, APRN-AGPNP{" "}
                          <span className="small">APRN-AGPNP</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">25 mi</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  style={{ height: "13%", top: "0%" }}
                ></div>
              </div>
            </div>
          </section>
          <section className="map-section">
            <div className="mobile-footer">
              <div className="mobile-footer-tab active" data-action="details">
                Details
              </div>
              <div className="mobile-footer-tab" data-action="map">
                Map
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LocatorListComponent;
