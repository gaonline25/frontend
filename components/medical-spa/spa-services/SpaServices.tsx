import React from "react";

const SpaServices: React.FC = () => {
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
                    href="/medical-spa/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Medical Spa
                  </a>
                </li>
                <li>
                  <a
                    href="/medical-spa/spa-services/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Spa Services
                  </a>
                </li>
              </ul>
              <h1>Spa Services</h1>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=2100 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
              />
              <img
                src="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1920"
                width="1920"
                height="1206"
                alt="Kristi Coody injecting a patient with filler"
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Index Static Module */}
      <div className="mod_index_static mod_index container" data-s3-module="">
        <div className="row subcontent">
          <div className="inner">
            <div className="item">
              <a href="/medical-spa/lash-extensions/" className="media-btn">
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      media="(max-width:1400px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=2100 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1920"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1920"
                      loading="lazy"
                      data-lazyload="img"
                      width="1920"
                      height="1206"
                      alt="Lash Media"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Lash Extensions</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a href="/medical-spa/lash-extensions/" className="title">
                  <h2>Lash Extensions</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a href="/medical-spa/mens-services/" className="media-btn">
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      media="(max-width:1400px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=2100 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1920"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1920"
                      loading="lazy"
                      data-lazyload="img"
                      width="1920"
                      height="1206"
                      alt="Men Media"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Men's Services</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a href="/medical-spa/mens-services/" className="title">
                  <h2>Men's Services</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a href="/medical-spa/micro-channeling/" className="media-btn">
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      media="(max-width:1400px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=2100 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1920"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1920"
                      loading="lazy"
                      data-lazyload="img"
                      width="1920"
                      height="1206"
                      alt="Micro-Channeling Media"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Micro-Channeling</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a href="/medical-spa/micro-channeling/" className="title">
                  <h2>Micro-Channeling</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a href="/medical-spa/permanent-makeup/" className="media-btn">
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      media="(max-width:1400px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=2100 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1920"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1920"
                      loading="lazy"
                      data-lazyload="img"
                      width="1920"
                      height="1206"
                      alt="Permanent Makeup Media"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Permanent Makeup</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a href="/medical-spa/permanent-makeup/" className="title">
                  <h2>Permanent Makeup</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a href="/medical-spa/skin-medica/" className="media-btn">
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      media="(max-width:1400px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=2100 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1920"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1920"
                      loading="lazy"
                      data-lazyload="img"
                      width="1920"
                      height="1206"
                      alt="SkinMedica Media"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>SkinMedica</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a href="/medical-spa/skin-medica/" className="title">
                  <h2>SkinMedica</h2>
                </a>
              </div>
            </div>

            <div className="item">
              <a href="/medical-spa/skincare-services/" className="media-btn">
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      media="(max-width:1400px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=2100 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1920"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1920"
                      loading="lazy"
                      data-lazyload="img"
                      width="1920"
                      height="1206"
                      alt="Skincare Services Media"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Skincare Services</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a href="/medical-spa/skincare-services/" className="title">
                  <h2>Skincare Services</h2>
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

export default SpaServices;
