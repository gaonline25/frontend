import React from "react";

const BreastLiftGallery = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial>
        <div className="row">
          <div className="inner">
            <h1>Breast Lift Gallery</h1>
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
              <li>
                <a
                  href="/gallery/surgical/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Surgical
                </a>
              </li>
              <li>
                <a
                  href="/gallery/surgical/breast-lift/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Breast Lift
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
      <div className="container partial_gallery_item_index" data-s3-partial>
        <div className="row">
          <div className="partial_gallery_dropdown" data-s3-partial>
            <ul className="dropdown">
              <li>
                <div className="selector">
                  <span>Breast Lift</span>
                  <span className="icon-left-open"></span>
                  <ul className="children">
                    <li>
                      <a href="/gallery/surgical/tummy-tuck/">Tummy Tuck</a>
                    </li>
                    <li>
                      <a href="/gallery/surgical/mommy-makeover/">
                        Mommy Makeover
                      </a>
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
              </li>
            </ul>
            <a href="/gallery/surgical/" className="link">
              <span className="icon-left-open"></span>
              Back to Gallery
            </a>
          </div>
          <div className="partial_gallery_default_item_index" data-s3-partial>
            <a
              href="/gallery/surgical/breast-lift/item/175174054/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151755-1694804944-before-edited.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151755-1694804944-before-edited.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151755-1694804944-before-edited.jpg?auto=format,compress&w=400"
                  width="400"
                  height="307"
                  alt="Breast Lift Before & After Gallery - Patient 175174054 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151768-1694805000-after-edited.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151768-1694805000-after-edited.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151768-1694805000-after-edited.jpg?auto=format,compress&w=400"
                  width="400"
                  height="237"
                  alt="Breast Lift Before & After Gallery - Patient 175174054 - Image 2"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/surgical/breast-lift/item/175175418/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151782-1694805111-before-edited-1.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151782-1694805111-before-edited-1.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151782-1694805111-before-edited-1.jpg?auto=format,compress&w=400"
                  width="400"
                  height="206"
                  alt="Breast Lift Before & After Gallery - Patient 175175418 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151791-1694805127-after-edited-1.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151791-1694805127-after-edited-1.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151791-1694805127-after-edited-1.jpg?auto=format,compress&w=400"
                  width="400"
                  height="211"
                  alt="Breast Lift Before & After Gallery - Patient 175175418 - Image 2"
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

export default BreastLiftGallery;
