import React from "react";

const JuvedermGallery: React.FC = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial="">
        <div className="row">
          <div className="inner">
            <h1>JUVÉDERM Gallery</h1>
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
                  href="/gallery/non-surgical/juvederm/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Juvederm
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
                  <span>JUVÉDERM</span>
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
              href="/gallery/non-surgical/juvederm/item/Ula016RnQkWxAjVK9QiwEg/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1701293888-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="259"
                  alt="JUVÉDERM Before & After Gallery - Patient 341440 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/dcmBYu5xR7S2z33_YMbwmg/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1701293755-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293755-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1701293755-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="259"
                  alt="JUVÉDERM Before & After Gallery - Patient 146526 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/LKePUy_oTiKpwm61Lb7IXQ/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1701293668-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293668-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1701293668-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="259"
                  alt="JUVÉDERM Before & After Gallery - Patient 123022 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/UvPW2oMcTgqNB0WQiiyxJw/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1701293491-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293491-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1701293491-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="259"
                  alt="JUVÉDERM Before & After Gallery - Patient 619155 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/VTGvGkm3SnOkzRswzkQj9g/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1701293379-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1701293379-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1701293379-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="259"
                  alt="JUVÉDERM Before & After Gallery - Patient 353084 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/188992002/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1697059692-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1697059692-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1697059692-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="150"
                  alt="JUVÉDERM Before & After Gallery - Patient 188992002 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/168493172/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1694721141-4-2-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1694721141-4-2-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1694721141-4-2-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="281"
                  alt="JUVÉDERM Before & After Gallery - Patient 168493172 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/168486529/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1693329020-content-img2-5.jpeg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1693329020-content-img2-5.jpeg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1693329020-content-img2-5.jpeg?auto=format,compress&w=400"
                  width="400"
                  height="226"
                  alt="JUVÉDERM Before & After Gallery - Patient 168486529 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/177169538/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234070-female.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234070-female.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234070-female.png?auto=format,compress&w=400"
                  width="400"
                  height="398"
                  alt="JUVÉDERM Before & After Gallery - Patient 177169538 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/177169552/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234165-juvederm-voluma-avi-ba.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234165-juvederm-voluma-avi-ba.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234165-juvederm-voluma-avi-ba.jpg?auto=format,compress&w=400"
                  width="400"
                  height="400"
                  alt="JUVÉDERM Before & After Gallery - Patient 177169552 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/177169844/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234243-juvederm-voluma-ba-ashlyn-full-face.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234243-juvederm-voluma-ba-ashlyn-full-face.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234243-juvederm-voluma-ba-ashlyn-full-face.jpg?auto=format,compress&w=400"
                  width="400"
                  height="400"
                  alt="JUVÉDERM Before & After Gallery - Patient 177169844 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/177169850/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234303-juvederm-voluma-ba-batch-2-avi-full-faced.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234303-juvederm-voluma-ba-batch-2-avi-full-faced.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234303-juvederm-voluma-ba-batch-2-avi-full-faced.jpg?auto=format,compress&w=400"
                  width="400"
                  height="400"
                  alt="JUVÉDERM Before & After Gallery - Patient 177169850 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/177169851/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234333-male.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234333-male.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234333-male.png?auto=format,compress&w=400"
                  width="400"
                  height="401"
                  alt="JUVÉDERM Before & After Gallery - Patient 177169851 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/177170482/"
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
                  alt="JUVÉDERM Before & After Gallery - Patient 177170482 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
            <a
              href="/gallery/non-surgical/juvederm/item/177170483/"
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
                  alt="JUVÉDERM Before & After Gallery - Patient 177170483 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
          </div>
        </div>
      </div>

      <div className="partial_pagination pagination" data-s3-partial="">
        <a
          href="/gallery/non-surgical/juvederm/"
          className="page-numbers hide-phone current"
        >
          1
        </a>
        <a
          className="page-numbers hide-phone "
          href="/gallery/non-surgical/juvederm/2/"
        >
          2
        </a>
        <a className="page-numbers" href="/gallery/non-surgical/juvederm/2/">
          Next
        </a>
      </div>
    </main>
  );
};

export default JuvedermGallery;
