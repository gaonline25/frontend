import React from "react";

const BotoxGallery: React.FC = () => {
  return (
    <main id="main">
      {/* Gallery Hero Partial */}
      <div className="partial_gallery_hero banner bg" data-s3-partial="">
        <div className="row">
          <div className="inner">
            <h1>BOTOX Gallery</h1>
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
                  href="/gallery/non-surgical/botox/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Botox
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
                  <span>BOTOX</span>
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
              href="/gallery/non-surgical/botox/item/Ic3ghOIDRna53Jxc-CMCWg/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559024-botox-2.png?auto=format,compress&w=400"
                  width="400"
                  height="100"
                  alt="BOTOX Before & After Gallery - Patient 872448 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/RIb1uz5DTQmUVTdB8ClD8Q/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1717559068-botox-cosmetic.png?auto=format,compress&w=400"
                  width="400"
                  height="132"
                  alt="BOTOX Before & After Gallery - Patient 295170 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/eNwS3ADdQgmEG541_vQYlQ/"
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
                  alt="BOTOX Before & After Gallery - Patient 278166 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/187063752/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1696876391-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="136"
                  alt="BOTOX Before & After Gallery - Patient 187063752 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/187063738/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1696876368-01.jpg?auto=format,compress&w=400"
                  width="400"
                  height="136"
                  alt="BOTOX Before & After Gallery - Patient 187063738 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/177168637/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695233411-25-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695233411-25-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695233411-25-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="266"
                  alt="BOTOX Before & After Gallery - Patient 177168637 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/177169279/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234038-botox-cosmetic-goldfingers.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234038-botox-cosmetic-goldfingers.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234038-botox-cosmetic-goldfingers.png?auto=format,compress&w=400"
                  width="400"
                  height="288"
                  alt="BOTOX Before & After Gallery - Patient 177169279 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/177169277/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234009-botox-cosmetic-4.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234009-botox-cosmetic-4.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234009-botox-cosmetic-4.png?auto=format,compress&w=400"
                  width="400"
                  height="168"
                  alt="BOTOX Before & After Gallery - Patient 177169277 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/177169263/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695233981-botox-3.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695233981-botox-3.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695233981-botox-3.png?auto=format,compress&w=400"
                  width="400"
                  height="170"
                  alt="BOTOX Before & After Gallery - Patient 177169263 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/168493197/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1694721016-botox-before-and-afters-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1694721016-botox-before-and-afters-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1694721016-botox-before-and-afters-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="136"
                  alt="BOTOX Before & After Gallery - Patient 168493197 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/177147963/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695220513-7-edited.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695220513-7-edited.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695220513-7-edited.png?auto=format,compress&w=400"
                  width="400"
                  height="157"
                  alt="BOTOX Before & After Gallery - Patient 177147963 - Image 1"
                  draggable="false"
                />
              </picture>
            </a>

            <a
              href="/gallery/non-surgical/botox/item/177169280/"
              className="item single"
            >
              <picture className="">
                <source
                  srcSet="https://www.datocms-assets.com/105497/1695234048-botox-neck.png?auto=format,compress&w=400"
                  data-lazyload-srcset="https://www.datocms-assets.com/105497/1695234048-botox-neck.png?auto=format,compress&w=400"
                />
                <img
                  src="https://www.datocms-assets.com/105497/1695234048-botox-neck.png?auto=format,compress&w=400"
                  width="400"
                  height="189"
                  alt="BOTOX Before & After Gallery - Patient 177169280 - Image 1"
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

export default BotoxGallery;
