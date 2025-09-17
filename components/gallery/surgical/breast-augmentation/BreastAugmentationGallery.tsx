import React from "react";

const BreastAugmentationGallery = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial>
        <div className="row">
          <div className="inner">
            <h1>Breast Augmentation Gallery</h1>
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
                  href="/gallery/surgical/breast-augmentation/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Breast Augmentation
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
                  <span>Breast Augmentation</span>
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
              href="/gallery/surgical/breast-augmentation/item/175151911/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151622-1694802695-before-edited.jpeg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151622-1694802695-before-edited.jpeg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151622-1694802695-before-edited.jpeg?auto=format,compress&w=400"
                  width="400"
                  height="318"
                  alt="Breast Augmentation Before & After Gallery - Patient 175151911 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151645-1694802723-after-edited.jpeg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151645-1694802723-after-edited.jpeg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151645-1694802723-after-edited.jpeg?auto=format,compress&w=400"
                  width="400"
                  height="289"
                  alt="Breast Augmentation Before & After Gallery - Patient 175151911 - Image 2"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/surgical/breast-augmentation/item/175151919/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151712-1694802831-before-edited.jpeg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151712-1694802831-before-edited.jpeg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151712-1694802831-before-edited.jpeg?auto=format,compress&w=400"
                  width="400"
                  height="345"
                  alt="Breast Augmentation Before & After Gallery - Patient 175151919 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151729-1694802968-after-edited.jpeg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151729-1694802968-after-edited.jpeg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151729-1694802968-after-edited.jpeg?auto=format,compress&w=400"
                  width="400"
                  height="243"
                  alt="Breast Augmentation Before & After Gallery - Patient 175151919 - Image 2"
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

export default BreastAugmentationGallery;
