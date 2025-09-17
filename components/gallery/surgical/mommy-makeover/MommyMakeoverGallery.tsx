import React from "react";

const MommyMakeoverGallery: React.FC = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial="">
        <div className="row">
          <div className="inner">
            <h1>Mommy Makeover Gallery</h1>
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
              <li>
                <a
                  href="/gallery/surgical/mommy-makeover/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Mommy Makeover
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
                  <span>Mommy Makeover</span>
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
          <div
            className="partial_gallery_default_item_index"
            data-s3-partial=""
          >
            <a
              href="/gallery/surgical/mommy-makeover/item/175151883/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151355-1694785350-before.jpg?auto=format,compress&w=400"
                  width="400"
                  height="534"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151883 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151376-1694785325-after.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151376-1694785325-after.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151376-1694785325-after.jpg?auto=format,compress&w=400"
                  width="400"
                  height="466"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151883 - Image 2"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/surgical/mommy-makeover/item/175151884/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151399-1694785692-before.jpg?auto=format,compress&w=400"
                  width="400"
                  height="534"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151884 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695393366-1694785684-after-edited-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695393366-1694785684-after-edited-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695393366-1694785684-after-edited-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="337"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151884 - Image 2"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/surgical/mommy-makeover/item/175151888/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695394115-1694785939-before-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695394115-1694785939-before-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695394115-1694785939-before-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="271"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151888 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695394138-1694785931-after-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695394138-1694785931-after-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695394138-1694785931-after-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="266"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151888 - Image 2"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/surgical/mommy-makeover/item/175151889/"
              className="item"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695151581-1694786076-before.jpg?auto=format,compress&w=400"
                  width="400"
                  height="534"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151889 - Image 1"
                  draggable="false"
                />
              </picture>
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695394065-1694786068-after-edited-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695394065-1694786068-after-edited-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695394065-1694786068-after-edited-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="399"
                  alt="Mommy Makeover Before & After Gallery - Patient 175151889 - Image 2"
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

export default MommyMakeoverGallery;
