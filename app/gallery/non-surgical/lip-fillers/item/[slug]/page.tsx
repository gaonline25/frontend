import React from "react";

interface GalleryItemProps {
  category?: string;
  procedure?: string;
  itemId?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  category = "non-surgical",
  procedure = "lip-fillers",
  itemId = "boDwe75GS56dHaOuM4zk7g",
}) => {
  const galleryItems = [
    {
      id: "boDwe75GS56dHaOuM4zk7g",
      image: "https://www.datocms-assets.com/105497/1717559581-lip-filler.png",
      alt: "Lip Fillers Before & After Gallery - Patient 141877 - Image 1",
      patient: "141877",
    },
    {
      id: "e1XcACqISHSsvKsDvqEHKg",
      image:
        "https://www.datocms-assets.com/105497/1717559550-lip-filler-11.png",
      alt: "Lip Fillers Before & After Gallery - Patient 151255 - Image 1",
      patient: "151255",
    },
    {
      id: "ei9OtCvsSKKHu0f8c1VuQw",
      image:
        "https://www.datocms-assets.com/105497/1717559522-lip-filler-10.png",
      alt: "Lip Fillers Before & After Gallery - Patient 213241 - Image 1",
      patient: "213241",
    },
    {
      id: "GIKVhR51SCeLXy9ZTQirOw",
      image:
        "https://www.datocms-assets.com/105497/1717559493-lip-filler-9.png",
      alt: "Lip Fillers Before & After Gallery - Patient 421283 - Image 1",
      patient: "421283",
    },
    {
      id: "c4x8WBNITSSBTVzl93SRdQ",
      image:
        "https://www.datocms-assets.com/105497/1717559463-lip-filler-8.png",
      alt: "Lip Fillers Before & After Gallery - Patient 370320 - Image 1",
      patient: "370320",
    },
    {
      id: "PhEnPRP0Qtu-juxUbEYcfQ",
      image:
        "https://www.datocms-assets.com/105497/1717559419-lip-filler-7.png",
      alt: "Lip Fillers Before & After Gallery - Patient 658693 - Image 1",
      patient: "658693",
    },
    {
      id: "eUDJ1_R7SIeTUMDuKQL5yg",
      image:
        "https://www.datocms-assets.com/105497/1717559351-lip-filler-6.png",
      alt: "Lip Fillers Before & After Gallery - Patient 335871 - Image 1",
      patient: "335871",
    },
    {
      id: "aB4g7jCfQxicKontdZE-fg",
      image:
        "https://www.datocms-assets.com/105497/1717559336-lip-filler-4.png",
      alt: "Lip Fillers Before & After Gallery - Patient 134116 - Image 1",
      patient: "134116",
    },
    {
      id: "BIpqcPZHT9qnSHHiFCOjPQ",
      image:
        "https://www.datocms-assets.com/105497/1717559322-lip-filler-3.png",
      alt: "Lip Fillers Before & After Gallery - Patient 710517 - Image 1",
      patient: "710517",
    },
    {
      id: "CGLFXimzRly1ODfHuqfzPg",
      image:
        "https://www.datocms-assets.com/105497/1717559309-lip-filler-2.png",
      alt: "Lip Fillers Before & After Gallery - Patient 250138 - Image 1",
      patient: "250138",
    },
    {
      id: "fx5iIDG0TDeS4BeNK_bF6Q",
      image:
        "https://www.datocms-assets.com/105497/1717559297-lip-filler-1.png",
      alt: "Lip Fillers Before & After Gallery - Patient 574663 - Image 1",
      patient: "574663",
    },
    {
      id: "GIKahRttSzy1g40414QLEA",
      image: "https://www.datocms-assets.com/105497/1701293379-01.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 351771 - Image 1",
      patient: "351771",
    },
    {
      id: "R0Td-qvGQ86vI7tQ37ofKA",
      image: "https://www.datocms-assets.com/105497/1701293491-01.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 246977 - Image 1",
      patient: "246977",
    },
    {
      id: "KtYv_fZkTm6rr0r0D1sivA",
      image: "https://www.datocms-assets.com/105497/1701293755-01.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 416674 - Image 1",
      patient: "416674",
    },
    {
      id: "188992022",
      image: "https://www.datocms-assets.com/105497/1697057613-03.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 188992022 - Image 1",
      patient: "188992022",
    },
    {
      id: "187063733",
      image:
        "https://www.datocms-assets.com/105497/1696876299-image_6487327-2.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 187063733 - Image 1",
      patient: "187063733",
    },
    {
      id: "174893721",
      image:
        "https://www.datocms-assets.com/105497/1694719897-lip-filler-medical-aesthetics-spa-before-and-afters-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 174893721 - Image 1",
      patient: "174893721",
    },
    {
      id: "174893722",
      image:
        "https://www.datocms-assets.com/105497/1694719794-lip-filler-enhancement-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 174893722 - Image 1",
      patient: "174893722",
    },
    {
      id: "168495736",
      image:
        "https://www.datocms-assets.com/105497/1694719821-lip-filler-enhancement-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 168495736 - Image 1",
      patient: "168495736",
    },
    {
      id: "176816246",
      image: "https://www.datocms-assets.com/105497/1695148777-img_0954.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816246 - Image 1",
      patient: "176816246",
    },
    {
      id: "176816247",
      image: "https://www.datocms-assets.com/105497/1695148790-img_1093.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816247 - Image 1",
      patient: "176816247",
    },
    {
      id: "176816248",
      image: "https://www.datocms-assets.com/105497/1695148802-img_1227.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816248 - Image 1",
      patient: "176816248",
    },
    {
      id: "176816249",
      image: "https://www.datocms-assets.com/105497/1695148812-img_1343.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816249 - Image 1",
      patient: "176816249",
    },
    {
      id: "176816250",
      image: "https://www.datocms-assets.com/105497/1695148839-img_1704.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816250 - Image 1",
      patient: "176816250",
    },
    {
      id: "176816251",
      image: "https://www.datocms-assets.com/105497/1695148897-img_1932.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816251 - Image 1",
      patient: "176816251",
    },
    {
      id: "176816252",
      image: "https://www.datocms-assets.com/105497/1695148879-img_1937.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816252 - Image 1",
      patient: "176816252",
    },
    {
      id: "176816253",
      image: "https://www.datocms-assets.com/105497/1695148951-img_2052.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816253 - Image 1",
      patient: "176816253",
    },
    {
      id: "176816254",
      image: "https://www.datocms-assets.com/105497/1695148962-img_2343.jpeg",
      alt: "Lip Fillers Before & After Gallery - Patient 176816254 - Image 1",
      patient: "176816254",
    },
    {
      id: "177147587",
      image: "https://www.datocms-assets.com/105497/1695220335-4-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177147587 - Image 1",
      patient: "177147587",
    },
    {
      id: "177147953",
      image: "https://www.datocms-assets.com/105497/1695220450-6-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177147953 - Image 1",
      patient: "177147953",
    },
    {
      id: "177147986",
      image: "https://www.datocms-assets.com/105497/1695220565-8-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177147986 - Image 1",
      patient: "177147986",
    },
    {
      id: "177148000",
      image: "https://www.datocms-assets.com/105497/1695220676-9-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177148000 - Image 1",
      patient: "177148000",
    },
    {
      id: "177149566",
      image: "https://www.datocms-assets.com/105497/1695220786-11-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177149566 - Image 1",
      patient: "177149566",
    },
    {
      id: "177149688",
      image: "https://www.datocms-assets.com/105497/1695221780-13-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177149688 - Image 1",
      patient: "177149688",
    },
    {
      id: "177149689",
      image: "https://www.datocms-assets.com/105497/1695221911-14-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177149689 - Image 1",
      patient: "177149689",
    },
    {
      id: "177168477",
      image:
        "https://www.datocms-assets.com/105497/1695233184-20-edited-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177168477 - Image 1",
      patient: "177168477",
    },
    {
      id: "177168479",
      image: "https://www.datocms-assets.com/105497/1695233230-21-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177168479 - Image 1",
      patient: "177168479",
    },
    {
      id: "177168480",
      image: "https://www.datocms-assets.com/105497/1695233266-22-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177168480 - Image 1",
      patient: "177168480",
    },
    {
      id: "177168485",
      image: "https://www.datocms-assets.com/105497/1695233304-23-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177168485 - Image 1",
      patient: "177168485",
    },
    {
      id: "177168642",
      image: "https://www.datocms-assets.com/105497/1695233464-26-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177168642 - Image 1",
      patient: "177168642",
    },
    {
      id: "177169066",
      image:
        "https://www.datocms-assets.com/105497/1695233532-27-edited-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177169066 - Image 1",
      patient: "177169066",
    },
    {
      id: "177169067",
      image: "https://www.datocms-assets.com/105497/1695233574-28-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177169067 - Image 1",
      patient: "177169067",
    },
    {
      id: "177169205",
      image: "https://www.datocms-assets.com/105497/1695233626-29-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177169205 - Image 1",
      patient: "177169205",
    },
    {
      id: "176839008",
      image: "https://www.datocms-assets.com/105497/1695157399-2-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 176839008 - Image 1",
      patient: "176839008",
    },
    {
      id: "177166875",
      image: "https://www.datocms-assets.com/105497/1695231862-17-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177166875 - Image 1",
      patient: "177166875",
    },
    {
      id: "177147941",
      image: "https://www.datocms-assets.com/105497/1695220388-5-edited.png",
      alt: "Lip Fillers Before & After Gallery - Patient 177147941 - Image 1",
      patient: "177147941",
    },
    {
      id: "174893720",
      image:
        "https://www.datocms-assets.com/105497/1694720307-lip-filler-img8.jpg",
      alt: "Lip Fillers Before & After Gallery - Patient 174893720 - Image 1",
      patient: "174893720",
    },
  ];

  const currentIndex = galleryItems.findIndex((item) => item.id === itemId);
  const currentItem = galleryItems[currentIndex];
  const previousItem = currentIndex > 0 ? galleryItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < galleryItems.length - 1
      ? galleryItems[currentIndex + 1]
      : null;

  const procedures = [
    { name: "Lip Fillers", slug: "lip-fillers" },
    { name: "BOTOX", slug: "botox" },
    { name: "JUVÉDERM", slug: "juvederm" },
    { name: "KYBELLA", slug: "kybella" },
    { name: "Micro-Channeling", slug: "micro-channeling" },
    { name: "Restylane", slug: "restylane-r" },
    { name: "SkinMedica", slug: "skinmedica" },
    { name: "Dermal Filler", slug: "dermal-filler" },
    { name: "Cheek Contour", slug: "cheek-contour" },
    {
      name: "Liquid Chin & Jaw Contouring",
      slug: "liquid-chin-and-jaw-contouring",
    },
    { name: "Liquid Rhinoplasty", slug: "liquid-rhinoplasty" },
    { name: "Marionette Lines", slug: "marionette-lines" },
    { name: "Liquid (Non-Surgical) Facelift", slug: "liquid-facelift" },
    { name: "Weight Loss", slug: "weight-loss" },
    { name: "Lash Extensions", slug: "lash-extensions" },
  ];

  const currentProcedure = procedures.find((p) => p.slug === procedure);

  return (
    <main id="main">
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
      <div className="partial_gallery_item container" data-s3-partial>
        <div className="row">
          <div className="partial_gallery_dropdown" data-s3-partial>
            <ul className="dropdown">
              <li>
                <div className="selector">
                  <span>{currentProcedure?.name || "Lip Fillers"}</span>
                  <span className="icon-left-open"></span>
                  <ul className="children">
                    {procedures.map((proc) => (
                      <li key={proc.slug}>
                        <a href={`/gallery/non-surgical/${proc.slug}/`}>
                          {proc.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <a href={`/gallery/non-surgical/${procedure}/`} className="link">
              <span className="icon-left-open"></span>
              Back to Gallery
            </a>
          </div>
          <div className="partial_gallery_item_sliders single" data-s3-partial>
            <div className="item-slider one">
              <div className="item">
                <picture className="">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${currentItem?.image}?auto=format,compress&w=420, ${currentItem?.image}?auto=format,compress&w=630 2x`}
                    data-lazyload-srcset={`${currentItem?.image}?auto=format,compress&w=420, ${currentItem?.image}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${currentItem?.image}?auto=format,compress&w=800, ${currentItem?.image}?auto=format,compress&w=1200 2x`}
                    data-lazyload-srcset={`${currentItem?.image}?auto=format,compress&w=800, ${currentItem?.image}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${currentItem?.image}?auto=format,compress&w=1400, ${currentItem?.image}?auto=format,compress&w=2100 2x`}
                    data-lazyload-srcset={`${currentItem?.image}?auto=format,compress&w=1400, ${currentItem?.image}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet={`${currentItem?.image}?auto=format,compress&w=1613`}
                    data-lazyload-srcset={`${currentItem?.image}?auto=format,compress&w=1613`}
                  />
                  <img
                    src={`${currentItem?.image}?auto=format,compress&w=1613`}
                    width="1613"
                    height="1329"
                    alt={currentItem?.alt}
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="partial_gallery_modules_slider" data-s3-partial>
            <div className="buttons">
              <button className={`prev ${!previousItem ? "disabled" : ""}`}>
                {previousItem ? (
                  <a
                    href={`/gallery/${category}/${procedure}/item/${previousItem.id}/`}
                  >
                    Previous
                  </a>
                ) : (
                  <span aria-disabled="true">Previous</span>
                )}
              </button>
              <button className={`next ${!nextItem ? "disabled" : ""}`}>
                {nextItem ? (
                  <a
                    href={`/gallery/${category}/${procedure}/item/${nextItem.id}/`}
                  >
                    Next
                  </a>
                ) : (
                  <span aria-disabled="true">Next</span>
                )}
              </button>
            </div>
            <div className="content">
              <h2>View Other Patients</h2>
              <div className="modules-slider">
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className={`item ${item.id === itemId ? "active" : ""}`}
                  >
                    <a
                      href={`/gallery/${category}/${procedure}/item/${item.id}/`}
                    >
                      <picture className="">
                        <source
                          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-srcset={`${item.image}?auto=format,compress&w=400`}
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          data-lazyload-src={`${item.image}?auto=format,compress&w=400`}
                          loading="lazy"
                          data-lazyload="img"
                          width="400"
                          height="330"
                          alt={item.alt}
                          draggable="false"
                        />
                      </picture>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryItem;
