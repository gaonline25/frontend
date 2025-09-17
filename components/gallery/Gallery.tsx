import React from "react";

const Gallery: React.FC = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial>
        <div className="row">
          <div className="inner">
            <h1>Gallery</h1>
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
                  href="/gallery/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
        <picture className="background">
          <source
            media="(max-width:420px)"
            srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=630 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=630 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1200 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2100 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2100 2x"
          />
          <source
            srcSet="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
          />
          <img
            src="https://www.datocms-assets.com/105497/1694101214-gallery-banner-bgd.jpg?auto=format,compress&w=2200"
            width="2200"
            height="691"
            alt="Marble"
            draggable="false"
          />
        </picture>
      </div>

      {/* Gallery index Partial */}
      <div className="partial_gallery_index container" data-s3-partial>
        <div className="row">
          <div className="group non-surgical">
            <h2>
              <span>Non-Surgical</span>
            </h2>
            <div className="links">
              <ul>
                <li>
                  <a href="/gallery/non-surgical/lip-fillers/">Lip Fillers</a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/botox/">BOTOX</a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/juvederm/">JUVÉDERM</a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/kybella/">KYBELLA</a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/micro-channeling/">
                    Micro-Channeling
                  </a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/restylane-r/">Restylane</a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/skinmedica/">SkinMedica</a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/dermal-filler/">
                    Dermal Filler
                  </a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/cheek-contour/">
                    Cheek Contour
                  </a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/liquid-chin-and-jaw-contouring/">
                    Liquid Chin & Jaw Contouring
                  </a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/liquid-rhinoplasty/">
                    Liquid Rhinoplasty
                  </a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/marionette-lines/">
                    Marionette Lines
                  </a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/liquid-facelift/">
                    Liquid (Non-Surgical) Facelift
                  </a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/weight-loss/">Weight Loss</a>
                </li>
                <li>
                  <a href="/gallery/non-surgical/lash-extensions/">
                    Lash Extensions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="group surgical">
            <h2>
              <span>Surgical</span>
            </h2>
            <div className="links">
              <ul>
                <li>
                  <a href="/gallery/surgical/tummy-tuck/">Tummy Tuck</a>
                </li>
                <li>
                  <a href="/gallery/surgical/mommy-makeover/">Mommy Makeover</a>
                </li>
                <li>
                  <a href="/gallery/surgical/liposuction/">Liposuction</a>
                </li>
                <li>
                  <a href="/gallery/surgical/breast-augmentation/">
                    Breast Augmentation
                  </a>
                </li>
                <li>
                  <a href="/gallery/surgical/breast-lift/">Breast Lift</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="age-restricted hidden">
        <div className="popup">
          <div className="inner">
            <h3>Warning:</h3>
            <p>
              This gallery contains nudity. Please click OK to confirm you are
              at least 18 years of age and are not offended by this material.
            </p>
            <button className="btn">Ok</button>
          </div>
          <span className="close"></span>
        </div>
        <div className="overlay"></div>
      </div>
    </main>
  );
};

export default Gallery;
