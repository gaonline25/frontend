import React from "react";

const SurgicalGallery: React.FC = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial="">
        <div className="row">
          <div className="inner">
            <h1>Surgical Gallery</h1>
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
                  href="/gallery/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/gallery/surgical/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Surgical
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
      <div
        className="partial_gallery_index sub-index container"
        data-s3-partial=""
      >
        <div className="row">
          <div className="group tummy-tuck">
            <h2>
              <a href="/gallery/surgical/tummy-tuck/">Tummy Tuck</a>
            </h2>
          </div>
          <div className="group mommy-makeover">
            <h2>
              <a href="/gallery/surgical/mommy-makeover/">Mommy Makeover</a>
            </h2>
          </div>
          <div className="group liposuction">
            <h2>
              <a href="/gallery/surgical/liposuction/">Liposuction</a>
            </h2>
          </div>
          <div className="group breast-augmentation">
            <h2>
              <a href="/gallery/surgical/breast-augmentation/">
                Breast Augmentation
              </a>
            </h2>
          </div>
          <div className="group breast-lift">
            <h2>
              <a href="/gallery/surgical/breast-lift/">Breast Lift</a>
            </h2>
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

export default SurgicalGallery;
