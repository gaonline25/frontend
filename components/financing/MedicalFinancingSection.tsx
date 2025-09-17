import React from "react";

const MedicalFinancingSection: React.FC = () => {
  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      <div className="mod_hero banner mobile-stack" data-s3-module>
        <div className="wrapper">
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
              loading="lazy"
              data-lazyload="img"
              width="1994"
              height="1206"
              alt="Background Texture"
              draggable="false"
            />
          </picture>
          <div className="row">
            <div className="inner">
              <ul className="partial_breadcrumb" data-s3-partial>
                <li>
                  <a
                    href="/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/financing/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Financing
                  </a>
                </li>
              </ul>
              <h1 className="long-title">
                Medical Aesthetic{" "}
                <span className="block-desktop">Treatment Financing</span>
              </h1>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=630 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=1200 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=2100 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=1920"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=1920"
              />
              <img
                src="https://www.datocms-assets.com/105497/1695226866-patient-financing-banner.jpg?auto=format,compress&w=1920"
                width="1920"
                height="1206"
                alt="Person entering their credit card information on their cell phone"
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>
      {/* Two Column Module */}
      <div className="mod_columns_two viewport container" data-s3-module>
        <div className="row ">
          <div className="content vertical-align">
            <div className="item wow fadeInLeft" data-api-key="content_left">
              <p>
                <img
                  src="https://www.datocms-assets.com/105497/1749499196-alle_logo_black-scaled-2-jpg-370x370-2x.jpg"
                  alt=""
                />
              </p>
            </div>
            <div className="item wow fadeInRight" data-api-key="content_right">
              <h2>
                Get treated now.&nbsp;
                <br />
                Pay over time.
              </h2>
              <p>
                Considering a new treatment or just want to maintain your look?
                Allē helps make your goals a reality while considering your
                financial needs. Find a payment plan that works for you with an
                APR starting as low as 0%.
              </p>
              <p></p>
              <p></p>
              <p>
                <a
                  href="https://alle.com/lp/payment-plans"
                  target="_blank"
                  className="btn"
                  rel="noopener"
                >
                  Try Allē Today
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default MedicalFinancingSection;
