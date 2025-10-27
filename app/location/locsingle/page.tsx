import React from "react";

const LocatorSingleComponent = () => {
  return (
    <main id="main">
      {/* Page Layout */}
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
                  <div className="search-results-snippet active back">
                    &lt; Back
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              <div className="result-detail active locations">
                <div className="result location">
                  <div className="result-content">
                    <div className="background">
                      <img
                        className="detail-background"
                        draggable="false"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        alt=""
                        role="presentation"
                      />
                      <img
                        className="detail-picture"
                        draggable="false"
                        src="https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&amp;w=1000"
                        alt="crane on beach at sunset"
                      />
                    </div>
                    <div className="foreground">
                      <div className="quick-view-button">View Location</div>
                      <div className="top-right active">
                        <div className="reviews-stars">
                          <i
                            className="f-icon icon-star active"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star active"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star active"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star active"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star active"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                        </div>
                        <div className="reviews-text">82 Reviews</div>
                      </div>
                      <div className="bottom-left">
                        <div className="heading">Clermont</div>
                        <div className="subheading-row">
                          <div>
                            <div className="location-icon active">
                              <img
                                src="/assets/images/location.png"
                                alt="Location"
                              />
                            </div>
                            <div className="location-distance">20.4 mi</div>
                          </div>
                          <div className="view-relations">
                            <div className="relations-amount">2</div>
                            <div className="relations-text">View Provider</div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-right">
                        <div className="location-name">&nbsp;</div>
                        <div className="location-distance-wrapper">
                          <div className="location-icon active">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="location-distance">20.4 mi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-footer">
                    <div className="left">
                      <div className="address">
                        861 Oakley Seaver Dr., Suite B, Clermont, FL 34711
                      </div>
                      <div className="get-directions">Get Directions&gt;</div>
                      <div className="hours hidden">Business Hours&gt;</div>
                    </div>
                    <div className="right">
                      <div
                        className="cta-button schedule"
                        data-type="location"
                        data-id="165421211"
                        style={{ display: "block" }}
                      >
                        Schedule
                      </div>
                      <a className="tel ppc-href" href="tel:+14074618193">
                        (407) 461-8193
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="results">
                <div className="results-container locations">
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
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165421415"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165421415"
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
                            data-id="165421415"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="165421415"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="cyrV_0JPRiOINPOpoaWjBA"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1711550484-fl_west-florida_wesley-chapel_epperson-02-lagoon.webp?auto=format,compress&amp;w=600"
                          alt="epperson lagoon"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Wesley Chapel</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">32.7 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="cyrV_0JPRiOINPOpoaWjBA"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="cyrV_0JPRiOINPOpoaWjBA"
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
                            data-id="cyrV_0JPRiOINPOpoaWjBA"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+18134353474"
                            data-number="(813) 435-3474"
                            data-id="cyrV_0JPRiOINPOpoaWjBA"
                          >
                            <span className="ppc-number">(813) 435-3474</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="XUNLxThpSxCpaTGqfXvnog"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1712001072-tickets-studio3marketing.jpg?auto=format,compress&amp;w=600"
                          alt="Downtown Orlando | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Downtown Orlando</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">33.6 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="XUNLxThpSxCpaTGqfXvnog"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="XUNLxThpSxCpaTGqfXvnog"
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
                            data-id="XUNLxThpSxCpaTGqfXvnog"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="XUNLxThpSxCpaTGqfXvnog"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="178932259"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1738697899-lake-nona.jpg?auto=format,compress&amp;w=600"
                          alt="lake nona"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Lake Nona</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">34.4 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="178932259"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="178932259"
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
                            data-id="178932259"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="178932259"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165420749"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694094006-winter-park.jpg?auto=format,compress&amp;w=600"
                          alt="bench near sunset over lake"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Winter Park</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">36.6 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165420749"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165420749"
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
                            data-id="165420749"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="165420749"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165420728"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=600"
                          alt="daisies and palm trees at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Longwood</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">38.7 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165420728"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165420728"
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
                            data-id="165420728"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="165420728"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165421373"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=600"
                          alt="lake at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Mount Dora</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">39.8 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165421373"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165421373"
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
                            data-id="165421373"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="165421373"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165420430"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093976-tampa.jpg?auto=format,compress&amp;w=600"
                          alt="Tampa skyline"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Tampa (Northdale)</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">42.8 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165420430"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165420430"
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
                            data-id="165420430"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="165420430"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="178932285"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093986-winter-springs.jpg?auto=format,compress&amp;w=600"
                          alt="Winter Springs"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Winter Springs</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">42.9 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="178932285"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="178932285"
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
                            data-id="178932285"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075906156"
                            data-number="(407) 590-6156"
                            data-id="178932285"
                          >
                            <span className="ppc-number">(407) 590-6156</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165421400"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093854-lake-mary.jpg?auto=format,compress&amp;w=600"
                          alt="Geese over swampland at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Lake Mary</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">43.8 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165421400"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165421400"
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
                            data-id="165421400"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14074053388"
                            data-number="(407) 405-3388"
                            data-id="165421400"
                          >
                            <span className="ppc-number">(407) 405-3388</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="LniIwYtqSaqhafS9vCt4xg"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1711550498-shutterstock_360581066.jpg?auto=format,compress&amp;w=600"
                          alt="south tampa"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Downtown Tampa</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">44.3 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="LniIwYtqSaqhafS9vCt4xg"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="LniIwYtqSaqhafS9vCt4xg"
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
                            data-id="LniIwYtqSaqhafS9vCt4xg"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+18134353474"
                            data-number="(813) 435-3474"
                            data-id="LniIwYtqSaqhafS9vCt4xg"
                          >
                            <span className="ppc-number">(813) 435-3474</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165422054"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093996-the-villages.jpg?auto=format,compress&amp;w=600"
                          alt="cloudy sunset over lake"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Lady Lake / The Villages
                        </div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">48.2 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165422054"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165422054"
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
                            data-id="165422054"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+13527070707"
                            data-number="(352) 707-0707"
                            data-id="165422054"
                          >
                            <span className="ppc-number">(352) 707-0707</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165420079"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&amp;w=600"
                          alt="pier on beach at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Clearwater</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">56.3 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165420079"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165420079"
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
                            data-id="165420079"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+17273789338"
                            data-number="(727) 378-9338"
                            data-id="165420079"
                          >
                            <span className="ppc-number">(727) 378-9338</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="M2Y5AzNeTXKDpspcW8tmRQ"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1720635807-image_123650291-5.jpg?auto=format,compress&amp;w=600"
                          alt="St. Pete"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">St Petersburg</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">61 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="M2Y5AzNeTXKDpspcW8tmRQ"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="M2Y5AzNeTXKDpspcW8tmRQ"
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
                            data-id="M2Y5AzNeTXKDpspcW8tmRQ"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+17273105120"
                            data-number="(727) 310-5120"
                            data-id="M2Y5AzNeTXKDpspcW8tmRQ"
                          >
                            <span className="ppc-number">(727) 310-5120</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165422636"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093918-ocala.jpg?auto=format,compress&amp;w=600"
                          alt="private docks at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Ocala</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">64.9 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165422636"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165422636"
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
                            data-id="165422636"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+13527070707"
                            data-number="(352) 707-0707"
                            data-id="165422636"
                          >
                            <span className="ppc-number">(352) 707-0707</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165422074"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093903-new-smyrna.jpg?auto=format,compress&amp;w=600"
                          alt="pier at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">New Smyrna Beach</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">72.6 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165422074"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165422074"
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
                            data-id="165422074"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14075475891"
                            data-number="(407) 547-5891"
                            data-id="165422074"
                          >
                            <span className="ppc-number">(407) 547-5891</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165422621"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093956-port-orange.jpg?auto=format,compress&amp;w=600"
                          alt="boats in harbor at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Port Orange</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">77.8 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165422621"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165422621"
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
                            data-id="165422621"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+13868010024"
                            data-number="(386) 801-0024"
                            data-id="165422621"
                          >
                            <span className="ppc-number">(386) 801-0024</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="E-8k64O5Qqyi6OMBX1p9bw"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1723127222-istock-941086960.jpg?auto=format,compress&amp;w=600"
                          alt="sarasota"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Sarasota</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">77.8 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="E-8k64O5Qqyi6OMBX1p9bw"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="E-8k64O5Qqyi6OMBX1p9bw"
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
                            data-id="E-8k64O5Qqyi6OMBX1p9bw"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+19415992392"
                            data-number="941-599-2392"
                            data-id="E-8k64O5Qqyi6OMBX1p9bw"
                          >
                            <span className="ppc-number">941-599-2392</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result location active"
                    data-type="location"
                    data-id="165421472"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093838-daytona-beach.jpg?auto=format,compress&amp;w=600"
                          alt="lifeguard tower at sunset"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">Daytona Beach</div>
                        <div className="bottom-right">
                          <div className="distance-icon">
                            <img
                              src="/assets/images/location.png"
                              alt="Location"
                            />
                          </div>
                          <div className="distance">82.8 mi</div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id="165421472"
                        >
                          Schedule
                        </div>
                        <div
                          className="cta-link location"
                          data-type="location"
                          data-id="165421472"
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
                            data-id="165421472"
                            data-type="location"
                          >
                            View Location
                          </div>
                        </div>
                        <div className="detail-phone-number">
                          <a
                            className="tel ppc-href"
                            href="tel:+14077569062"
                            data-number="(407) 756-9062"
                            data-id="165421472"
                          >
                            <span className="ppc-number">(407) 756-9062</span>
                          </a>
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
                            data-id="aZU02WUuTom7FbiqiXlQ_A"
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
                          data-id="aZU02WUuTom7FbiqiXlQ_A"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463431"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Jay Wonderlich, PA"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694009962-jay-wonderlich-pa.jpg?auto=format,compress&amp;w=400"
                          alt="Jay Wonderlich, PA"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Jacob Wonderlich <span className="small">PA</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">25 mi</div>
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
                            data-id="171463431"
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
                          data-id="171463431"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463916"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Dr. Michael McClure"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694009934-dr-micheal-mcclure.jpg?auto=format,compress&amp;w=400"
                          alt="Dr. Michael McClure"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Michael McClure <span className="small">MD</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">36.6 mi</div>
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
                            data-id="171463916"
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
                          data-id="171463916"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171462943"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Christopher"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694009917-christopher-fratangelo-np.jpg?auto=format,compress&amp;w=400"
                          alt="Christopher"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Christopher Fratangelo{" "}
                          <span className="small">NP</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">38.7 mi</div>
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
                            data-id="171462943"
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
                          data-id="171462943"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="FcrlR_U2REavXiqYx-kvBw"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Amy Kang | Goldfingers Aesthetics"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1747758671-amy-kang-edited.png?auto=format,compress&amp;w=400"
                          alt="Amy Kang | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Amy Kang{" "}
                          <span className="small">MSN, APRN, FNP-C</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">39.8 mi</div>
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
                            data-id="FcrlR_U2REavXiqYx-kvBw"
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
                          data-id="FcrlR_U2REavXiqYx-kvBw"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463871"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Robert Franseckino, PA"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694010000-robert-franseckino-pa.jpg?auto=format,compress&amp;w=400"
                          alt="Robert Franseckino, PA"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Robert Franceskino <span className="small">PA-C</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">42.8 mi</div>
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
                            data-id="171463871"
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
                          data-id="171463871"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="173556864"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Susan Persaud, NP"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694010010-susan-persaud-np.jpg?auto=format,compress&amp;w=400"
                          alt="Susan Persaud, NP"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Susan Patel <span className="small">APRN</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">42.8 mi</div>
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
                            data-id="173556864"
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
                          data-id="173556864"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463921"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Eric Edwards, MD"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694713029-eric-edwards.jpg?auto=format,compress&amp;w=400"
                          alt="Eric Edwards, MD"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Eric Edwards <span className="small">MD</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">43.8 mi</div>
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
                            data-id="171463921"
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
                          data-id="171463921"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171462936"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Dr. James Young"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694009928-dr-james-young-do.jpg?auto=format,compress&amp;w=400"
                          alt="Dr. James Young"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          James Young <span className="small">MD</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">43.8 mi</div>
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
                            data-id="171462936"
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
                          data-id="171462936"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="TkzrzWyHRoSby01bJzh0nw"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Lihn D"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1720464732-image_123.jpg?auto=format,compress&amp;w=400"
                          alt="Lihn D"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Lihn Duong, NP <span className="small">NP </span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">44.3 mi</div>
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
                            data-id="TkzrzWyHRoSby01bJzh0nw"
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
                          data-id="TkzrzWyHRoSby01bJzh0nw"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463443"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Terri Clark, NP"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694010017-terri-clark-np.jpg?auto=format,compress&amp;w=400"
                          alt="Terri Clark, NP"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Terri Clark{" "}
                          <span className="small">RN, MSN, FNP-BC</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">48.2 mi</div>
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
                            data-id="171463443"
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
                          data-id="171463443"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463656"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Nilam Patel, NP"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694009987-nilam-patel-np.jpg?auto=format,compress&amp;w=400"
                          alt="Nilam Patel, NP"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Nilam Patel <span className="small">NP</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">56.3 mi</div>
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
                            data-id="171463656"
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
                          data-id="171463656"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="ZY7QFBGgQqWjS-9FmRKrTA"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Taesha Dastine | Goldfingers Aesthetics"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1747758732-taesha-dastine-edited.png?auto=format,compress&amp;w=400"
                          alt="Taesha Dastine | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Taesha Dastine <span className="small">BSN, MSN</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">64.9 mi</div>
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
                            data-id="ZY7QFBGgQqWjS-9FmRKrTA"
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
                          data-id="ZY7QFBGgQqWjS-9FmRKrTA"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="171463444"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Eliza"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694009949-eliza-renaud-np.jpg?auto=format,compress&amp;w=400"
                          alt="Eliza"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Eliza Renaud <span className="small">APRN</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">64.9 mi</div>
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
                            data-id="171463444"
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
                          data-id="171463444"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="result provider active"
                    data-type="provider"
                    data-id="DugXHDRpSeem3YO3SXC6fw"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="provider-background"
                          draggable="false"
                          src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                          alt="Cassie Bukaty, ARNP | Goldfingers Aesthetics"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1747759064-cassie-bukaty-edited.png?auto=format,compress&amp;w=400"
                          alt="Cassie Bukaty, ARNP | Goldfingers Aesthetics"
                        />
                      </div>
                      <div className="foreground">
                        <div className="quick-view-button">Quick View</div>
                        <div className="bottom-left">
                          Cassie Bukaty, ARNP{" "}
                          <span className="small">ARNP</span>
                        </div>
                        <div className="bottom-right">
                          <div className="distance">77.8 mi</div>
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
                            data-id="DugXHDRpSeem3YO3SXC6fw"
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
                          data-id="DugXHDRpSeem3YO3SXC6fw"
                        >
                          Schedule
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel active">
                <div
                  className="left-arrow"
                  aria-controls="tns1"
                  tabIndex="-1"
                  data-controls="prev"
                >
                  ▸
                </div>
                <p className="carousel-heading">More Locations Near You</p>
                <div className="carousel-content">
                  <div className="tns-outer" id="tns1-ow">
                    <div
                      className="tns-liveregion tns-visually-hidden"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      slide <span className="current">4 to 6</span> of 21
                    </div>
                    <div id="tns1-mw" className="tns-ovh">
                      <div className="tns-inner" id="tns1-iw">
                        <div
                          className="carousel-content-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                          id="tns1"
                          style={{
                            transitionDuration: "0s",
                            transform: "translate3d(-11.1111%, 0px, 0px)",
                          }}
                        >
                          <div
                            className="carousel-item tns-item tns-slide-cloned"
                            data-id="165422621"
                            data-type="location"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165422621"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093956-port-orange.jpg?auto=format,compress&amp;w=240"
                                alt="boats in harbor at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165422621"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Port Orange
                            </div>
                            <div className="carousel-item-distance">
                              77.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-cloned"
                            data-id="E-8k64O5Qqyi6OMBX1p9bw"
                            data-type="location"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="E-8k64O5Qqyi6OMBX1p9bw"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1723127222-istock-941086960.jpg?auto=format,compress&amp;w=240"
                                alt="sarasota"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="E-8k64O5Qqyi6OMBX1p9bw"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Sarasota</div>
                            <div className="carousel-item-distance">
                              77.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-cloned"
                            data-id="165421472"
                            data-type="location"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421472"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093838-daytona-beach.jpg?auto=format,compress&amp;w=240"
                                alt="lifeguard tower at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421472"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Daytona Beach
                            </div>
                            <div className="carousel-item-distance">
                              82.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-active active"
                            data-id="165421211"
                            data-type="location"
                            id="tns1-item0"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421211"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&amp;w=240"
                                alt="crane on beach at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421211"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Clermont</div>
                            <div className="carousel-item-distance">
                              20.4 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-active"
                            data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                            data-type="location"
                            id="tns1-item1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1752877682-winter-gardent-4.jpg?auto=format,compress&amp;w=240"
                                alt="Winter Garden | Goldfingers Aesthetics"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Winter Garden
                            </div>
                            <div className="carousel-item-distance">
                              24.1 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-active"
                            data-id="165421415"
                            data-type="location"
                            id="tns1-item2"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421415"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093930-orlando.jpg?auto=format,compress&amp;w=240"
                                alt="nighttime image of building"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421415"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Orlando / Dr. Phillips
                            </div>
                            <div className="carousel-item-distance">25 mi</div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="cyrV_0JPRiOINPOpoaWjBA"
                            data-type="location"
                            id="tns1-item3"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="cyrV_0JPRiOINPOpoaWjBA"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1711550484-fl_west-florida_wesley-chapel_epperson-02-lagoon.webp?auto=format,compress&amp;w=240"
                                alt="epperson lagoon"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="cyrV_0JPRiOINPOpoaWjBA"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Wesley Chapel
                            </div>
                            <div className="carousel-item-distance">
                              32.7 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="XUNLxThpSxCpaTGqfXvnog"
                            data-type="location"
                            id="tns1-item4"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="XUNLxThpSxCpaTGqfXvnog"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1712001072-tickets-studio3marketing.jpg?auto=format,compress&amp;w=240"
                                alt="Downtown Orlando | Goldfingers Aesthetics"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="XUNLxThpSxCpaTGqfXvnog"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Downtown Orlando
                            </div>
                            <div className="carousel-item-distance">
                              33.6 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="178932259"
                            data-type="location"
                            id="tns1-item5"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="178932259"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1738697899-lake-nona.jpg?auto=format,compress&amp;w=240"
                                alt="lake nona"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="178932259"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Lake Nona</div>
                            <div className="carousel-item-distance">
                              34.4 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165420749"
                            data-type="location"
                            id="tns1-item6"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165420749"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694094006-winter-park.jpg?auto=format,compress&amp;w=240"
                                alt="bench near sunset over lake"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165420749"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Winter Park
                            </div>
                            <div className="carousel-item-distance">
                              36.6 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165420728"
                            data-type="location"
                            id="tns1-item7"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165420728"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093874-longwood.jpg?auto=format,compress&amp;w=240"
                                alt="daisies and palm trees at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165420728"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Longwood</div>
                            <div className="carousel-item-distance">
                              38.7 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165421373"
                            data-type="location"
                            id="tns1-item8"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421373"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093889-mount-dora.jpg?auto=format,compress&amp;w=240"
                                alt="lake at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421373"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Mount Dora</div>
                            <div className="carousel-item-distance">
                              39.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165420430"
                            data-type="location"
                            id="tns1-item9"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165420430"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093976-tampa.jpg?auto=format,compress&amp;w=240"
                                alt="Tampa skyline"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165420430"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Tampa (Northdale)
                            </div>
                            <div className="carousel-item-distance">
                              42.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="178932285"
                            data-type="location"
                            id="tns1-item10"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="178932285"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093986-winter-springs.jpg?auto=format,compress&amp;w=240"
                                alt="Winter Springs"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="178932285"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Winter Springs
                            </div>
                            <div className="carousel-item-distance">
                              42.9 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165421400"
                            data-type="location"
                            id="tns1-item11"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421400"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093854-lake-mary.jpg?auto=format,compress&amp;w=240"
                                alt="Geese over swampland at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421400"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Lake Mary</div>
                            <div className="carousel-item-distance">
                              43.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="LniIwYtqSaqhafS9vCt4xg"
                            data-type="location"
                            id="tns1-item12"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="LniIwYtqSaqhafS9vCt4xg"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1711550498-shutterstock_360581066.jpg?auto=format,compress&amp;w=240"
                                alt="south tampa"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="LniIwYtqSaqhafS9vCt4xg"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Downtown Tampa
                            </div>
                            <div className="carousel-item-distance">
                              44.3 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165422054"
                            data-type="location"
                            id="tns1-item13"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165422054"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093996-the-villages.jpg?auto=format,compress&amp;w=240"
                                alt="cloudy sunset over lake"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165422054"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Lady Lake / The Villages
                            </div>
                            <div className="carousel-item-distance">
                              48.2 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165420079"
                            data-type="location"
                            id="tns1-item14"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165420079"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&amp;w=240"
                                alt="pier on beach at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165420079"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Clearwater</div>
                            <div className="carousel-item-distance">
                              56.3 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="M2Y5AzNeTXKDpspcW8tmRQ"
                            data-type="location"
                            id="tns1-item15"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="M2Y5AzNeTXKDpspcW8tmRQ"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1720635807-image_123650291-5.jpg?auto=format,compress&amp;w=240"
                                alt="St. Pete"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="M2Y5AzNeTXKDpspcW8tmRQ"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              St Petersburg
                            </div>
                            <div className="carousel-item-distance">61 mi</div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165422636"
                            data-type="location"
                            id="tns1-item16"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165422636"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093918-ocala.jpg?auto=format,compress&amp;w=240"
                                alt="private docks at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165422636"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Ocala</div>
                            <div className="carousel-item-distance">
                              64.9 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165422074"
                            data-type="location"
                            id="tns1-item17"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165422074"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093903-new-smyrna.jpg?auto=format,compress&amp;w=240"
                                alt="pier at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165422074"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              New Smyrna Beach
                            </div>
                            <div className="carousel-item-distance">
                              72.6 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165422621"
                            data-type="location"
                            id="tns1-item18"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165422621"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093956-port-orange.jpg?auto=format,compress&amp;w=240"
                                alt="boats in harbor at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165422621"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Port Orange
                            </div>
                            <div className="carousel-item-distance">
                              77.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="E-8k64O5Qqyi6OMBX1p9bw"
                            data-type="location"
                            id="tns1-item19"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="E-8k64O5Qqyi6OMBX1p9bw"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1723127222-istock-941086960.jpg?auto=format,compress&amp;w=240"
                                alt="sarasota"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="E-8k64O5Qqyi6OMBX1p9bw"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Sarasota</div>
                            <div className="carousel-item-distance">
                              77.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item"
                            data-id="165421472"
                            data-type="location"
                            id="tns1-item20"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421472"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093838-daytona-beach.jpg?auto=format,compress&amp;w=240"
                                alt="lifeguard tower at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421472"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Daytona Beach
                            </div>
                            <div className="carousel-item-distance">
                              82.8 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-cloned active"
                            data-id="165421211"
                            data-type="location"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421211"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&amp;w=240"
                                alt="crane on beach at sunset"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421211"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">Clermont</div>
                            <div className="carousel-item-distance">
                              20.4 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-cloned"
                            data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                            data-type="location"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1752877682-winter-gardent-4.jpg?auto=format,compress&amp;w=240"
                                alt="Winter Garden | Goldfingers Aesthetics"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="ZgdjsFQgSdmxsnW1yWH_oQ"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Winter Garden
                            </div>
                            <div className="carousel-item-distance">
                              24.1 mi
                            </div>
                          </div>
                          <div
                            className="carousel-item tns-item tns-slide-cloned"
                            data-id="165421415"
                            data-type="location"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421415"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093930-orlando.jpg?auto=format,compress&amp;w=240"
                                alt="nighttime image of building"
                              />
                            </div>
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id="165421415"
                            >
                              Schedule
                            </div>
                            <div className="carousel-item-name">
                              Orlando / Dr. Phillips
                            </div>
                            <div className="carousel-item-distance">25 mi</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="right-arrow"
                  aria-controls="tns1"
                  tabIndex="-1"
                  data-controls="next"
                >
                  ▸
                </div>
              </div>
              <div className="content-body-scrollbar active">
                <div className="content-body-scrollbar-line"></div>
                <div
                  className="content-body-scrollbar-handle"
                  style={{ height: "66%", top: "0%" }}
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

export default LocatorSingleComponent;
