import React from "react";

const LipFillersGallery: React.FC = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial>
        <div className="row">
          <div className="inner">
            <h1>Lip Fillers Gallery</h1>
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
                  href="/gallery/non-surgical/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Non Surgical
                </a>
              </li>
              <li>
                <a
                  href="/gallery/non-surgical/lip-fillers/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Lip Fillers
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
                  <span>Lip Fillers</span>
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

          <div className="partial_gallery_default_item_index" data-s3-partial>
            <a
              href="/gallery/non-surgical/lip-fillers/item/boDwe75GS56dHaOuM4zk7g/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559581-lip-filler.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559581-lip-filler.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559581-lip-filler.png?auto=format,compress&w=400"
                  width="400"
                  height="330"
                  alt="Lip Fillers Before & After Gallery - Patient 141877 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/e1XcACqISHSsvKsDvqEHKg/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559550-lip-filler-11.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559550-lip-filler-11.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559550-lip-filler-11.png?auto=format,compress&w=400"
                  width="400"
                  height="401"
                  alt="Lip Fillers Before & After Gallery - Patient 151255 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/ei9OtCvsSKKHu0f8c1VuQw/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559522-lip-filler-10.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559522-lip-filler-10.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559522-lip-filler-10.png?auto=format,compress&w=400"
                  width="400"
                  height="399"
                  alt="Lip Fillers Before & After Gallery - Patient 213241 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/GIKVhR51SCeLXy9ZTQirOw/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559493-lip-filler-9.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559493-lip-filler-9.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559493-lip-filler-9.png?auto=format,compress&w=400"
                  width="400"
                  height="386"
                  alt="Lip Fillers Before & After Gallery - Patient 421283 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/c4x8WBNITSSBTVzl93SRdQ/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559463-lip-filler-8.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559463-lip-filler-8.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559463-lip-filler-8.png?auto=format,compress&w=400"
                  width="400"
                  height="398"
                  alt="Lip Fillers Before & After Gallery - Patient 370320 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/PhEnPRP0Qtu-juxUbEYcfQ/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559419-lip-filler-7.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559419-lip-filler-7.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559419-lip-filler-7.png?auto=format,compress&w=400"
                  width="400"
                  height="352"
                  alt="Lip Fillers Before & After Gallery - Patient 658693 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/eUDJ1_R7SIeTUMDuKQL5yg/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559351-lip-filler-6.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559351-lip-filler-6.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559351-lip-filler-6.png?auto=format,compress&w=400"
                  width="400"
                  height="398"
                  alt="Lip Fillers Before & After Gallery - Patient 335871 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/aB4g7jCfQxicKontdZE-fg/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559336-lip-filler-4.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559336-lip-filler-4.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559336-lip-filler-4.png?auto=format,compress&w=400"
                  width="400"
                  height="373"
                  alt="Lip Fillers Before & After Gallery - Patient 134116 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/BIpqcPZHT9qnSHHiFCOjPQ/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559322-lip-filler-3.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559322-lip-filler-3.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559322-lip-filler-3.png?auto=format,compress&w=400"
                  width="400"
                  height="395"
                  alt="Lip Fillers Before & After Gallery - Patient 710517 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/CGLFXimzRly1ODfHuqfzPg/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559309-lip-filler-2.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559309-lip-filler-2.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559309-lip-filler-2.png?auto=format,compress&w=400"
                  width="400"
                  height="302"
                  alt="Lip Fillers Before & After Gallery - Patient 250138 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/fx5iIDG0TDeS4BeNK_bF6Q/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559297-lip-filler-1.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559297-lip-filler-1.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559297-lip-filler-1.png?auto=format,compress&w=400"
                  width="400"
                  height="300"
                  alt="Lip Fillers Before & After Gallery - Patient 574663 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/GIKahRttSzy1g40414QLEA/"
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
                  alt="Lip Fillers Before & After Gallery - Patient 351771 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/R0Td-qvGQ86vI7tQ37ofKA/"
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
                  alt="Lip Fillers Before & After Gallery - Patient 246977 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/KtYv_fZkTm6rr0r0D1sivA/"
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
                  alt="Lip Fillers Before & After Gallery - Patient 416674 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/lip-fillers/item/188992022/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1697057613-03.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1697057613-03.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1697057613-03.jpg?auto=format,compress&w=400"
                  width="400"
                  height="93"
                  alt="Lip Fillers Before & After Gallery - Patient 188992022 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>
          </div>
        </div>
      </div>

      <div className="partial_pagination pagination" data-s3-partial>
        <a
          href="/gallery/non-surgical/lip-fillers/"
          className="page-numbers hide-phone current"
        >
          1
        </a>
        <a
          className="page-numbers hide-phone "
          href="/gallery/non-surgical/lip-fillers/2/"
        >
          2
        </a>
        <a
          className="page-numbers hide-phone "
          href="/gallery/non-surgical/lip-fillers/3/"
        >
          3
        </a>
        <a
          className="page-numbers hide-phone "
          href="/gallery/non-surgical/lip-fillers/4/"
        >
          4
        </a>
        <a className="page-numbers" href="/gallery/non-surgical/lip-fillers/2/">
          Next
        </a>
      </div>
    </main>
  );
};

export default LipFillersGallery;
