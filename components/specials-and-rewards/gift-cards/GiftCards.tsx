import React from "react";

const GiftCards: React.FC = () => {
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
                    href="/specials-and-rewards/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Specials And Rewards
                  </a>
                </li>
                <li>
                  <a
                    href="/specials-and-rewards/gift-cards/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
              <h1>Gift Cards</h1>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=630 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1200 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=2100 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1920"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1920"
              />
              <img
                src="https://www.datocms-assets.com/105497/1694790371-gift-cards-banner.jpg?auto=format,compress&w=1920"
                width="1920"
                height="1206"
                alt="woman smiling at nurse holding clipboard"
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Intro Module */}
      <div
        className="mod_intro container viewport option-1 wide wow fadeInUp"
        data-s3-module
      >
        <div className="row pb-0">
          <picture className="logo">
            <img
              src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
              width={58}
              height={64}
              loading="lazy"
              alt="Goldfingers aesthetic logo"
              draggable="false"
              data-api-key="logo"
            />
          </picture>
          <div className="inner" data-api-key="content">
            <h2>Goldfingers Aesthetics Specials</h2>
            <p>
              Goldfingers Aesthetics offers instant online gift certificates for
              friends, family, and co-workers. It &rsquo;s the perfect
              last-minute online gift for a birthday, graduation, wedding,
              holiday, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Half Image Module */}
      <div
        className="mod_half_image  viewport half-image container wow fadeInLeft "
        data-s3-module
      >
        <div className="row half-image-row">
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1832"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src="https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg?auto=format,compress&w=1832"
                loading="lazy"
                data-lazyload="img"
                width="1832"
                height="1824"
                alt="Blonde woman laughing"
                draggable="false"
                data-api-key="image"
              />
            </picture>
          </div>
          <div className="copy ">
            <div className="inner">
              <div className="content" data-api-key="content">
                <h2>Goldfingers Aesthetics Gift Cards</h2>
                <p>
                  Now, you can enhance your natural beauty with Goldfingers
                  Aesthetics &mdash;like BOTOX, Skin Rejuvenation, and Facial
                  Services &mdash;in a trusted and relaxing environment.
                </p>
                <ul>
                  <li>
                    Our gift certificates can be used at any Goldfingers
                    Aesthetic location for any treatment or product.
                  </li>
                  <li>Gift certificates never expire.</li>
                  <li>No cash refunds are given for our gift certificates.</li>
                  <li>
                    We gladly offer gift certificate transfers from patient to
                    patient.
                  </li>
                  <li>
                    We require 24 hours notice for cancellation of treatments to
                    avoid any charges.
                  </li>
                  <li>
                    Gift certificates cannot be reissued if lost or stolen.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default GiftCards;
