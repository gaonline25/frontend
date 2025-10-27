function ProviderSingle() {
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
                    className="provider-search-input"
                    placeholder="Search by provider name"
                    defaultValue=""
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
              <div className="result-detail active providers">
                <div className="result location">
                  <div className="result-content">
                    <div className="background">
                      <img
                        className="detail-background"
                        draggable="false"
                        src="https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&w=1000"
                        alt="crane on beach at sunset"
                        role=""
                      />
                      <img
                        className="detail-picture"
                        draggable="false"
                        src="https://www.datocms-assets.com/105497/1696451062-bria-bennie.jpg?auto=format,compress&w=1000"
                        alt="Bria Bennie"
                      />
                    </div>
                    <div className="foreground">
                      <div className="quick-view-button">View Provider</div>
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
                        <div className="heading">Bria Bennie</div>
                        <div className="subheading-row">
                          <div>
                            <div className="location-icon">
                              <img
                                src="/assets/images/location.png"
                                alt="Location"
                              />
                            </div>
                            <div className="location-distance">20.4 mi</div>
                          </div>
                          <div className="view-relations">
                            <div className="relations-amount">4</div>
                            <div className="relations-text">View Location</div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-right">
                        <div className="location-name">Clermont</div>
                        <div className="location-distance-wrapper">
                          <div className="location-icon">
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
                        data-type="provider"
                        data-id="165421211"
                        style={{ display: "none" }}
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
                  {/* Location results would be mapped here - showing one example */}
                  <div
                    className="result location"
                    data-type="location"
                    data-id="165420079"
                  >
                    <div className="result-content">
                      <div className="background">
                        <img
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1694093811-clearwater.jpg?auto=format,compress&w=600"
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
                          <div className="distance"></div>
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
                </div>

                <div className="results-container providers">
                  {/* Provider results would be mapped here - showing one example */}
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
                          src="/assets/images/provider-background.jpg?auto=format,compress&w=400"
                          alt="Bria Bennie"
                        />
                        <img
                          className="provider-picture"
                          draggable="false"
                          src="https://www.datocms-assets.com/105497/1696451062-bria-bennie.jpg?auto=format,compress&w=400"
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
                </div>
              </div>

              <div className="carousel active">
                <div
                  className="left-arrow"
                  aria-controls="tns2"
                  tabIndex={-1}
                  data-controls="prev"
                >
                  ▸
                </div>
                <p className="carousel-heading">More Locations Near You</p>
                <div className="carousel-content">
                  <div className="tns-outer" id="tns2-ow">
                    <div
                      className="tns-liveregion tns-visually-hidden"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      slide <span className="current">7 to 9</span> of 4
                    </div>
                    <div id="tns2-mw" className="tns-ovh">
                      <div className="tns-inner" id="tns2-iw">
                        <div
                          className="carousel-content-inner tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                          id="tns2"
                          style={{
                            transitionDuration: "0s",
                            transform: "translate3d(-37.5%, 0px, 0px)",
                          }}
                        >
                          {/* Carousel items would be mapped here */}
                          <div
                            className="carousel-item tns-item tns-slide-active active"
                            data-id="165421211"
                            data-type="location"
                            id="tns2-item0"
                          >
                            <div
                              className="carousel-item-image-wrapper"
                              data-id="165421211"
                              data-type="location"
                            >
                              <img
                                className="carousel-item-image"
                                src="https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&w=240"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="right-arrow"
                  aria-controls="tns2"
                  tabIndex={-1}
                  data-controls="next"
                >
                  ▸
                </div>
              </div>

              <div className="content-body-scrollbar active">
                <div className="content-body-scrollbar-line"></div>
                <div
                  className="content-body-scrollbar-handle"
                  style={{ height: "78%", top: "0%" }}
                ></div>
              </div>
            </div>
          </section>

          <section className="map-section" style={{ overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: "0px",
                left: "0px",
                backgroundColor: "rgb(229, 227, 223)",
              }}
            >
              <div>
                <button
                  draggable="false"
                  aria-label="Keyboard shortcuts"
                  title="Keyboard shortcuts"
                  type="button"
                  style={{
                    background: "none transparent",
                    display: "block",
                    border: "none",
                    margin: "0px",
                    padding: "0px",
                    textTransform: "none",
                    appearance: "none",
                    position: "absolute",
                    cursor: "pointer",
                    userSelect: "none",
                    zIndex: 1000002,
                    outlineOffset: "3px",
                    right: "0px",
                    bottom: "0px",
                    transform: "translateX(100%)",
                  }}
                ></button>
              </div>
            </div>
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
}

export default ProviderSingle;
