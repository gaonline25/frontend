import React from "react";

const GalleryHero: React.FC = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial="">
        <div className="row">
          <div className="inner">
            <h1>Dermal Filler Gallery</h1>
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
                  href="/gallery/non-surgical/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Non Surgical
                </a>
              </li>
              <li>
                <a
                  href="/gallery/non-surgical/dermal-filler/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Dermal Filler
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
      <div className="container partial_gallery_item_index" data-s3-partial="">
        <div className="row">
          <div className="partial_gallery_dropdown" data-s3-partial="">
            <ul className="dropdown">
              <li>
                <div className="selector">
                  <span>Dermal Filler</span>
                  <span className="icon-left-open"></span>
                  <ul className="children">
                    <li>
                      <a href="/gallery/non-surgical/lip-fillers/">
                        Lip Fillers
                      </a>
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
                      <a href="/gallery/non-surgical/weight-loss/">
                        Weight Loss
                      </a>
                    </li>
                    <li>
                      <a href="/gallery/non-surgical/lash-extensions/">
                        Lash Extensions
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <a href="/gallery/non-surgical/" className="link">
              <span className="icon-left-open"></span>
              Back to Gallery
            </a>
          </div>
          <div
            className="partial_gallery_default_item_index"
            data-s3-partial=""
          >
            <a
              href="/gallery/non-surgical/dermal-filler/item/177170479/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695238217-juvederm-volite-07-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695238217-juvederm-volite-07-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695238217-juvederm-volite-07-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="210"
                  alt="Dermal Filler Before & After Gallery - Patient 177170479 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/dermal-filler/item/177170478/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695238202-juvederm-before-and-after-scottsdale-2-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695238202-juvederm-before-and-after-scottsdale-2-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695238202-juvederm-before-and-after-scottsdale-2-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="162"
                  alt="Dermal Filler Before & After Gallery - Patient 177170478 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/dermal-filler/item/177170474/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695238162-images-1-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695238162-images-1-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695238162-images-1-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="212"
                  alt="Dermal Filler Before & After Gallery - Patient 177170474 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/dermal-filler/item/177170476/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695238180-images-3-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695238180-images-3-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695238180-images-3-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="210"
                  alt="Dermal Filler Before & After Gallery - Patient 177170476 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/dermal-filler/item/177170477/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234850-images-4.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234850-images-4.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234850-images-4.jpg?auto=format,compress&w=400"
                  width="400"
                  height="270"
                  alt="Dermal Filler Before & After Gallery - Patient 177170477 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryHero;
