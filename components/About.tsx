import React from "react";

const AboutHero: React.FC = () => {
  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      <div className="mod_hero banner mobile-stack" data-s3-module="">
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
              <ul className="partial_breadcrumb" data-s3-partial="">
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
                    href="/about/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    About
                  </a>
                </li>
              </ul>
              <h1>About</h1>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=630 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1200 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=2100 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1920"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1920"
              />
              <img
                src="https://www.datocms-assets.com/105497/1694719607-about-banner.jpg?auto=format,compress&w=1920"
                width="1920"
                height="1206"
                alt="Goldfinger's building"
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Page Index List Module */}
      <div className="mod_index_list option-1 container" data-s3-module="">
        <div className="row ">
          <div className="inner">
            <a
              href="/about/our-founders/"
              className="item"
              title="Opens Our Founders page"
              aria-label="Opens Our Founders page"
            >
              <span>Our Founders</span>
            </a>
            <a
              href="/locations/?tab=providers"
              className="item"
              title="Opens Providers page"
              aria-label="Opens Providers page"
            >
              <span>Providers</span>
            </a>
            <a
              href="/about/testimonials/"
              className="item"
              title="Opens Testimonials page"
              aria-label="Opens Testimonials page"
            >
              <span>Testimonials</span>
            </a>
            <a
              href="/blog/"
              className="item"
              title="Opens Blog page"
              aria-label="Opens Blog page"
            >
              <span>Blog</span>
            </a>
            <a
              href="/about/resource-center/"
              className="item"
              title="Opens Videos page"
              aria-label="Opens Videos page"
            >
              <span>Videos</span>
            </a>
            <a
              href="/about/confidentiality-statement/"
              className="item"
              title="Opens Privacy Policy page"
              aria-label="Opens Privacy Policy page"
            >
              <span>Privacy Policy</span>
            </a>
          </div>
        </div>
      </div>

      {/* Page Index Module */}
      <div className="mod_index container" data-s3-module="">
        <div className="row subcontent ">
          <div className="inner">
            <div className="item">
              <a
                className="media-btn"
                href="/about/our-founders/"
                title="Opens Our Founders page"
                aria-label="Opens Our Founders page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Dr. James Young & woman with long red hair"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Our Founders</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/about/our-founders/"
                  className="title"
                  title="Opens Our Founders page"
                  aria-label="Opens Our Founders page"
                >
                  <h2>Our Founders</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a
                className="media-btn"
                href="/locations/?tab=providers"
                title="Opens Providers page"
                aria-label="Opens Providers page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694800463-providers-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Goldfingers partners"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Providers</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/locations/?tab=providers"
                  className="title"
                  title="Opens Providers page"
                  aria-label="Opens Providers page"
                >
                  <h2>Providers</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a
                className="media-btn"
                href="/about/testimonials/"
                title="Opens Testimonials page"
                aria-label="Opens Testimonials page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Brunette smiling up at woman holding clipboard"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Testimonials</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/about/testimonials/"
                  className="title"
                  title="Opens Testimonials page"
                  aria-label="Opens Testimonials page"
                >
                  <h2>Testimonials</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a
                className="media-btn"
                href="/blog/"
                title="Opens Blog page"
                aria-label="Opens Blog page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694547746-blog-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="woman looking in hand mirror pointing to her face"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Blog</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/blog/"
                  className="title"
                  title="Opens Blog page"
                  aria-label="Opens Blog page"
                >
                  <h2>Blog</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a
                className="media-btn"
                href="/about/resource-center/"
                title="Opens Videos page"
                aria-label="Opens Videos page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1695325753-resource-center-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="638"
                      alt="Doctor James Young"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Videos</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/about/resource-center/"
                  className="title"
                  title="Opens Videos page"
                  aria-label="Opens Videos page"
                >
                  <h2>Videos</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a
                className="media-btn"
                href="/about/confidentiality-statement/"
                title="Opens Privacy Policy page"
                aria-label="Opens Privacy Policy page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694032588-clearwater-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Beach in Clearwater, FL"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Privacy Policy</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/about/confidentiality-statement/"
                  className="title"
                  title="Opens Privacy Policy page"
                  aria-label="Opens Privacy Policy page"
                >
                  <h2>Privacy Policy</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default AboutHero;
