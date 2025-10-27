import React from "react";

const Sitemap: React.FC = () => {
  return (
    <main id="main">
      <div className="mod_hero banner mobile-stack no-bg" data-s3-module="">
        <div className="wrapper">
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
            />
            <source
              media="(max-width:800px)"
              srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
            />
            <source
              media="(max-width:1400px)"
              srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
            />
            <source
              srcSet="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
            />
            <img
              src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
              data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
              loading="lazy"
              data-lazyload="img"
              width="1994"
              height="1206"
              alt="Background Texture"
              draggable="false"
              data-lazyload-loaded="true"
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
                    href="/sitemap/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
              <h1>Sitemap</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mod_sitemap " data-s3-module="">
        <div className="row">
          <nav
            className="tresio-nav tresio-nav--loaded type-vertical variant-default"
            data-type-desktop="vertical"
            data-type-tablet="vertical"
            data-type-mobile="vertical"
            data-variant-desktop="default"
            data-variant-tablet="default"
            data-variant-mobile="default"
            data-type="vertical"
            data-variant="default"
            style={
              {
                "--tresio-nav-hamburger-color": "#000000",
                "--tresio-nav-hamburger-color-expanded": "#000000",
                "--tresio-nav-menu-offset": "0px",
                "--tresio-nav-menu-offset-mobile": "0px",
              } as React.CSSProperties
            }
          >
            <ul
              className="list partial_nav tresio-nav__main tresio-nav__list level-1"
              data-s3-partial=""
              role="menubar"
              aria-label="Main navigation"
            >
              <li
                className="partial_nav_item tresio-nav__list-item level-1 home"
                data-s3-partial=""
                role="menuitem"
              >
                <a href="/" className="tresio-nav__link level-1" role="link">
                  Home
                </a>
              </li>

              <li
                className="partial_nav_item tresio-nav__list-item level-1 about tresio-nav__list-item--has-children"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/about/"
                  className="tresio-nav__link level-1"
                  role="link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <a
                  className="tresio-nav__dropdown level-1"
                  href="#"
                  aria-label="About dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  ▾
                </a>
                <ul
                  className="tresio-nav__list level-2"
                  role="menu"
                  aria-label="Submenu"
                >
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 our-founders"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/about/our-founders/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Our Founders
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 providers"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/locations/?tab=providers"
                      rel="noopener"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Providers
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 testimonials"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/about/testimonials/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 blog"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/blog/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Blog
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 videos"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/about/resource-center/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Videos
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 privacy-policy"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/about/confidentiality-statement/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="partial_nav_item tresio-nav__list-item level-1 gallery tresio-nav__list-item--has-children"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/gallery/"
                  className="tresio-nav__link level-1"
                  role="link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <a
                  className="tresio-nav__dropdown level-1"
                  href="#"
                  aria-label="Gallery dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  ▾
                </a>
                <ul
                  className="tresio-nav__list level-2"
                  role="menu"
                  aria-label="Submenu"
                >
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 non-surgical tresio-nav__list-item--has-children"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/gallery/non-surgical/"
                      className="tresio-nav__link level-2"
                      role="link"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Non-Surgical
                    </a>
                    <a
                      className="tresio-nav__dropdown level-2"
                      href="#"
                      aria-label="Non-Surgical dropdown"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="button"
                    >
                      ▾
                    </a>
                    <ul
                      className="tresio-nav__list level-3"
                      role="menu"
                      aria-label="Submenu"
                    >
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 lip-fillers"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/lip-fillers/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Lip Fillers
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 botox"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/botox/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          BOTOX
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 juvderm"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/juvederm/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          JUVÉDERM
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 kybella"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/kybella/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          KYBELLA
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 micro-channeling"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/micro-channeling/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Micro-Channeling
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 restylane"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/restylane-r/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Restylane
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 skinmedica"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/skinmedica/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          SkinMedica
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 dermal-filler"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/dermal-filler/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Dermal Filler
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 cheek-contour"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/cheek-contour/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Cheek Contour
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 liquid-chin--jaw-contouring"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/liquid-chin-and-jaw-contouring/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Liquid Chin &amp; Jaw Contouring
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 liquid-rhinoplasty"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/liquid-rhinoplasty/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Liquid Rhinoplasty
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 marionette-lines"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/marionette-lines/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Marionette Lines
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 liquid-non-surgical-facelift"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/liquid-facelift/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Liquid (Non-Surgical) Facelift
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 weight-loss"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/weight-loss/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Weight Loss
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 lash-extensions"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/non-surgical/lash-extensions/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Lash Extensions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 surgical tresio-nav__list-item--has-children"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/gallery/surgical/"
                      className="tresio-nav__link level-2"
                      role="link"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Surgical
                    </a>
                    <a
                      className="tresio-nav__dropdown level-2"
                      href="#"
                      aria-label="Surgical dropdown"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="button"
                    >
                      ▾
                    </a>
                    <ul
                      className="tresio-nav__list level-3"
                      role="menu"
                      aria-label="Submenu"
                    >
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 tummy-tuck"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/surgical/tummy-tuck/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Tummy Tuck
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 mommy-makeover"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/surgical/mommy-makeover/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Mommy Makeover
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 liposuction"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/surgical/liposuction/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Liposuction
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 breast-augmentation"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/surgical/breast-augmentation/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Breast Augmentation
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 breast-lift"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/gallery/surgical/breast-lift/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Breast Lift
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li
                className="partial_nav_item mega-menu tresio-nav__list-item level-1 medical-spa tresio-nav__list-item--has-children"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/medical-spa/"
                  className="tresio-nav__link level-1"
                  role="link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Medical Spa
                </a>
                <a
                  className="tresio-nav__dropdown level-1"
                  href="#"
                  aria-label="Medical Spa dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  ▾
                </a>
                <ul
                  className="tresio-nav__list level-2"
                  role="menu"
                  aria-label="Submenu"
                >
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 injectables subcat-title"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/injectables/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Injectables
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 botox"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/botox/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      BOTOX
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 dysport"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/dysport/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Dysport
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 dermal-fillers"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/dermal-fillers/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Dermal Fillers
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 juvderm"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/juvederm/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      JUVÉDERM
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 juvederm-volux"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/juvederm-volux/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Juvederm Volux
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 restylane"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/restylane/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Restylane
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 restylane-contour"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/restylane-contour/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Restylane Contour
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 cheek-fillers"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/cheek-fillers/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Cheek Fillers
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 lines--wrinkles"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/lines-and-wrinkles/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Lines &amp; Wrinkles
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 lip-fillers"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/lips/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Lip Fillers
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 chin-fillers"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/chin/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Chin Fillers
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 hand-rejuvenation"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/hands/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Hand Rejuvenation
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 liquid-non-surgical-facelift"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/liquid-facelift/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Liquid (Non-Surgical) Facelift
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 liquid-non-surgical-rhinoplasty"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/liquid-non-surgical-rhinoplasty/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Liquid (Non-Surgical) Rhinoplasty
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 skinvive"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/skinvive/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      SkinVive
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 spa-services subcat-title"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/spa-services/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Spa Services
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 lash-extensions"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/lash-extensions/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Lash Extensions
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 mens-services"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/mens-services/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Men's Services
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 micro-channeling"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/micro-channeling/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Micro-Channeling
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 permanent-makeup"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/permanent-makeup/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Permanent Makeup
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 diamondglow"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/diamondglow/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      DiamondGlow
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 skinmedica"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/skin-medica/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      SkinMedica
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 skincare-services"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/skincare-services/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Skincare Services
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 weight-loss subcat-title"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/weightloss/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Weight Loss
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 semaglutide-injections"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/medical-spa/semaglutide-injections/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Semaglutide Injections
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="partial_nav_item tresio-nav__list-item level-1 plastic-surgery tresio-nav__list-item--has-children"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/plastic-surgery/"
                  className="tresio-nav__link level-1"
                  role="link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Plastic Surgery
                </a>
                <a
                  className="tresio-nav__dropdown level-1"
                  href="#"
                  aria-label="Plastic Surgery dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  ▾
                </a>
                <ul
                  className="tresio-nav__list level-2"
                  role="menu"
                  aria-label="Submenu"
                >
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 breast subcat-title"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/breast/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Breast
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 breast-augmentation"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/breast-augmentation/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Breast Augmentation
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 breast-lift"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/breast-lift/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Breast Lift
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 breast-reduction"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/breast-reduction/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Breast Reduction
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 breast-revision"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/breast-revision/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Breast Revision
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 body subcat-title"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/body/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Body
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 liposuction"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/liposuction/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Liposuction
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 mommy-makeover"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/mommy-makeover/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Mommy Makeover
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 tummy-tuck"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/plastic-surgery/tummy-tuck/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Tummy Tuck
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="partial_nav_item tresio-nav__list-item level-1 specials--rewards tresio-nav__list-item--has-children"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/specials-and-rewards/"
                  className="tresio-nav__link level-1"
                  role="link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Specials &amp; Rewards
                </a>
                <a
                  className="tresio-nav__dropdown level-1"
                  href="#"
                  aria-label="Specials &amp; Rewards dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  ▾
                </a>
                <ul
                  className="tresio-nav__list level-2"
                  role="menu"
                  aria-label="Submenu"
                >
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 specials"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/specials-and-rewards/specials/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Specials
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 alle-rewards"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/specials-and-rewards/alle/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Alle Rewards
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 aspire-rewards"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/specials-and-rewards/aspire-rewards/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Aspire Rewards
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 gift-cards"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/specials-and-rewards/gift-cards/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="partial_nav_item tresio-nav__list-item level-1 financing"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/financing/"
                  className="tresio-nav__link level-1"
                  role="link"
                >
                  Financing
                </a>
              </li>

              <li
                className="partial_nav_item tresio-nav__list-item level-1 contact"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/contact/"
                  className="tresio-nav__link level-1"
                  role="link"
                >
                  Contact
                </a>
              </li>

              <li
                className="partial_nav_item tresio-nav__list-item level-1 training tresio-nav__list-item--has-children"
                data-s3-partial=""
                role="menuitem"
              >
                <a
                  href="/training/"
                  className="tresio-nav__link level-1"
                  role="link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Training
                </a>
                <a
                  className="tresio-nav__dropdown level-1"
                  href="#"
                  aria-label="Training dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  ▾
                </a>
                <ul
                  className="tresio-nav__list level-2"
                  role="menu"
                  aria-label="Submenu"
                >
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 training-program-details tresio-nav__list-item--has-children"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/training/training-program-details/"
                      className="tresio-nav__link level-2"
                      role="link"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Training Program Details
                    </a>
                    <a
                      className="tresio-nav__dropdown level-2"
                      href="#"
                      aria-label="Training Program Details dropdown"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="button"
                    >
                      ▾
                    </a>
                    <ul
                      className="tresio-nav__list level-3"
                      role="menu"
                      aria-label="Submenu"
                    >
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 comprehensive-injectables"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/training/training-program-details/comprehensive-injectables/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Comprehensive Injectables
                        </a>
                      </li>
                      <li
                        className="partial_nav_item tresio-nav__list-item level-3 foundational-injectables"
                        data-s3-partial=""
                        role="menuitem"
                      >
                        <a
                          href="/training/training-program-details/foundational-injectables/"
                          className="tresio-nav__link level-3"
                          role="link"
                        >
                          Foundational Injectables
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 enrollment--faqs"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/training/enrollment-faqs/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Enrollment &amp; FAQs
                    </a>
                  </li>
                  <li
                    className="partial_nav_item tresio-nav__list-item level-2 apply-for-your-training-spot-today-"
                    data-s3-partial=""
                    role="menuitem"
                  >
                    <a
                      href="/training/apply-for-your-training-spot-today/"
                      className="tresio-nav__link level-2"
                      role="link"
                    >
                      Apply for Your Training Spot Today{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="ignore" role="menuitem">
                <div className="info">
                  <ul
                    className="partial_socials"
                    data-s3-partial=""
                    role="menu"
                  >
                    <li role="menuitem">
                      <a
                        rel="noopener"
                        title="Goldfingers Aesthetics on Instagram"
                        href="https://www.instagram.com/goldfingers.aesthetics/"
                        target="_blank"
                        aria-label="Goldfingers Aesthetics on Instagram opens in a new tab"
                      >
                        <span className="instagram-icon"></span>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a
                        rel="noopener"
                        title="Goldfingers Aesthetics on Facebook"
                        href="https://www.facebook.com/goldfingersaesthetics/"
                        target="_blank"
                        aria-label="Goldfingers Aesthetics on Facebook opens in a new tab"
                      >
                        <span className="facebook-icon"></span>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a
                        rel="noopener"
                        title="Goldfingers Aesthetics on Youtube"
                        href="https://www.youtube.com/channel/UCGb3ma3A8U69pmhGnccOtfQ"
                        target="_blank"
                        aria-label="Goldfingers Aesthetics on Youtube opens in a new tab"
                      >
                        <span className="youtube-icon"></span>
                      </a>
                    </li>
                  </ul>
                  <p>
                    <a
                      className="tel ppc-href"
                      href="tel:+14073334300"
                      data-s3-event="Phone - Mobile Nav"
                      role="link"
                      aria-label="Give Goldfingers Aesthetics a phone call"
                    >
                      <span className="ppc-number">(407) 333-4300</span>
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Sitemap;
