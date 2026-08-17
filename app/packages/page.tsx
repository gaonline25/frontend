// import React from 'react'

// function page() {
//   return (
//     <main id="main" style={{ margin: "0px auto;" }}>
    //   <div
    //     className="mod_hero banner banner mobile-stack"
    //     data-s3-module="true"
    //   >
    //     <div className="wrapper">
    //       <picture className="background">
    //         <img
    //           data-lazyload-src="https://res.cloudinary.com/dq0bv42no/image/upload/v1760248172/payload-media/1694632205-banner-left-with-text-5.avif?auto=format,compress&amp;w=1994"
    //           loading="lazy"
    //           data-lazyload="img"
    //           width="1994"
    //           height="1206"
    //           alt="Background Texture"
    //           draggable="false"
    //           src="https://res.cloudinary.com/dq0bv42no/image/upload/v1760248172/payload-media/1694632205-banner-left-with-text-5.avif?auto=format,compress&amp;w=1994"
    //           data-lazyload-loaded="true"
    //         />
    //       </picture>
    //       <div className="row">
    //         <div className="inner">
    //           <ul className="partial_breadcrumb" data-s3-partial="true">
    //             <li>
    //               <a
    //                 href="/"
    //                 role="link"
    //                 aria-label="Breadcrumbs to help navigate the user"
    //               >
    //                 Home
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="/specials-and-rewards/"
    //                 role="link"
    //                 aria-label="Breadcrumbs to help navigate the user"
    //               >
    //                 Specials And Rewards
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="/specials-and-rewards/alle/"
    //                 role="link"
    //                 aria-label="Breadcrumbs to help navigate the user"
    //               >
    //                 Alle
    //               </a>
    //             </li>
    //           </ul>
    //           <h1>Allē Rewards</h1>
    //         </div>
    //       </div>
    //       <div className="media">
    //         <picture className="background">
    //           <img
    //             width="1920"
    //             height="1206"
    //             alt="nurse smiling with woman"
    //             draggable="false"
    //             src="https://res.cloudinary.com/dq0bv42no/image/upload/v1760267850/payload-media/1694008812-alle-rewards-banner%20%281%29.avif?auto=format,compress&amp;w=1920"
    //           />
    //         </picture>
    //       </div>
    //     </div>
    //   </div>
//       <div className="wrap">
//         <div className="jump-nav">
//           <a href="#wesley-chapel">📍 Wesley Chapel</a>
//           <a href="#downtown-tampa">📍 Downtown Tampa</a>
//         </div>
//         <div className="loc-section" id="wesley-chapel">
//           <div className="loc-header">
//             <div className="loc-pin">📍</div>
//             <div className="loc-text">
//               <h2 className="display">Wesley Chapel</h2>
//               <span>27440 Cashford Cir #102, Wesley Chapel, FL 33544</span>
//             </div>
//           </div>
//           <div className="offer-row">
//             <div className="offer-card">
//               <div className="tag">Smoother. Younger.</div>
//               <div className="name display">Botox®</div>
//               <div className="desc">50 units</div>
//               <div className="price-row">
//                 <span className="now display">$475</span>
//                 <span className="was">$500</span>
//               </div>
//               <a
//                 href="https://link.clover.com/urlshortener/PvSjM6"
//                 target="_blank"
//                 rel="noopener"
//                 className="book-btn"
//               >
//                 Book Now
//               </a>
//             </div>
//             <div className="offer-card">
//               <div className="tag">Fuller. Softer.</div>
//               <div className="name display">Juvéderm® Lip Filler</div>
//               <div className="desc">1 syringe</div>
//               <div className="price-row">
//                 <span className="now display">$550</span>
//                 <span className="was">$750+</span>
//               </div>
//               <a
//                 href="https://link.clover.com/urlshortener/HcGgZw"
//                 target="_blank"
//                 rel="noopener"
//                 className="book-btn"
//               >
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="loc-section" id="downtown-tampa">
//           <div className="loc-header">
//             <div className="loc-pin">📍</div>
//             <div className="loc-text">
//               <h2 className="display">Downtown Tampa</h2>
//               <span>105 E Jackson St, Tampa, FL 33602</span>
//             </div>
//           </div>
//           <div className="offer-row">
//             <div className="offer-card">
//               <div className="tag">Smoother. Younger.</div>
//               <div className="name display">Botox®</div>
//               <div className="desc">50 units</div>
//               <div className="price-row">
//                 <span className="now display">$475</span>
//                 <span className="was">$500</span>
//               </div>
//               <a
//                 href="https://link.clover.com/urlshortener/6pQ2t4"
//                 target="_blank"
//                 rel="noopener"
//                 className="book-btn"
//               >
//                 Book Now
//               </a>
//             </div>
//             <div className="offer-card">
//               <div className="tag">Fuller. Softer.</div>
//               <div className="name display">Juvéderm® Lip Filler</div>
//               <div className="desc">1 syringe</div>
//               <div className="price-row">
//                 <span className="now display">$550</span>
//                 <span className="was">$750+</span>
//               </div>
//               <a
//                 href="https://link.clover.com/urlshortener/R2PqNM"
//                 target="_blank"
//                 rel="noopener"
//                 className="book-btn"
//               >
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="fine-print">
//           Cannot be combined with any other offer. Manufacturer rebate included.
//         </div>
//       </div>
//     </main>
//   );
// }

// export default page

"use client";

import { useState } from "react";
import "./of.css"

type Offer = {
  tag: string;
  name: string;
  meta: string;
  price: string;
    was: string;
    link: string;
};

type Location = {
  id: string;
  name: string;
  address: string;
  offers: Offer[];
};

const LOCATIONS: Location[] = [
  {
    id: "south-tampa",
    name: "SOUTH TAMPA",
    address: "27440 Cashford Cir #102, Wesley Chapel, FL 33544",
    offers: [
      {
        tag: "tag name",
        name: "SOUTH TAMPA - GOLDFINGERS AESTHETICS",
        meta: "goldfinger",
        price: "$550",
        was: "$600",
        link: "https://www.clover.com/pay-widgets/57329562-b13d-4c75-9808-d1fbe5bf0321",
      },
      //   {
      //     tag: "Fuller. Softer.",
      //     name: "Juv\u00E9derm\u00AE Lip Filler",
      //     meta: "1 syringe",
      //     price: "$550",
      //     was: "$750+",
      //   },
    ],
  },
  {
    id: "wesley-chapel",
    name: "WESLEY CHAPEL",
    address: "105 E Jackson St, Tampa, FL 33602",
    offers: [
      {
        tag: "tag name",
        name: "WESLEY CHAPEL - GOLDFINGERS AESTHETICS",
        meta: "meta tag",
        price: "$550",
        was: "$650",
        link: "https://www.clover.com/pay-widgets/60bd1379-020a-48dd-9bdc-2291648a2177",
      },
      {
        tag: "tag name",
        name: "WESLEY CHAPEL",
        meta: "meta tag",
        price: "$475",
        was: "$500",
        link: "https://www.clover.com/pay-widgets/3543b5e8-2ed6-48fa-b1db-8c9077c3f9a1",
      },
    ],
  },
];

function Pin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.2 6.1 12.2 6.36 12.5a.85.85 0 0 0 1.28 0C12.9 21.2 19 14.2 19 9a7 7 0 0 0-7-7Zm0 9.6A2.6 2.6 0 1 1 14.6 9 2.6 2.6 0 0 1 12 11.6Z"
      />
    </svg>
  );
}

export default function LocationOffers() {
  const [active, setActive] = useState<string>(LOCATIONS[0]!.id);
  const visible = LOCATIONS.filter((l) => l.id === active);

    return (
      <main id="main" style={{ margin: "0px auto;" }}>
        <div
          className="mod_hero banner banner mobile-stack"
          data-s3-module="true"
        >
          <div className="wrapper">
            <picture className="background">
              <img
                data-lazyload-src="https://res.cloudinary.com/dq0bv42no/image/upload/v1760248172/payload-media/1694632205-banner-left-with-text-5.avif?auto=format,compress&amp;w=1994"
                loading="lazy"
                data-lazyload="img"
                width="1994"
                height="1206"
                alt="Background Texture"
                draggable="false"
                src="https://res.cloudinary.com/dq0bv42no/image/upload/v1760248172/payload-media/1694632205-banner-left-with-text-5.avif?auto=format,compress&amp;w=1994"
                data-lazyload-loaded="true"
              />
            </picture>
            <div className="row">
              <div className="inner">
                <ul className="partial_breadcrumb" data-s3-partial="true">
                  <li>
                    <a
                      href="/"
                      role="link"
                      aria-label="Breadcrumbs to help navigate the user"
                    >
                      Home
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/specials-and-rewards/"
                      role="link"
                      aria-label="Breadcrumbs to help navigate the user"
                    >
                      Specials And Rewards
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/packages/"
                      role="link"
                      aria-label="Breadcrumbs to help navigate the user"
                    >
                      Packages
                    </a>
                  </li>
                </ul>
                <h1>Packages</h1>
              </div>
            </div>
            <div className="media">
              <picture className="background">
                <img
                  width="1920"
                  height="1206"
                  alt="nurse smiling with woman"
                  draggable="false"
                  src="https://res.cloudinary.com/dq0bv42no/image/upload/v1760248172/payload-media/1694632205-banner-left-with-text-5.avif?auto=format,compress&amp;w=1994"
                />
              </picture>
            </div>
          </div>
        </div>
        <section className="xkqm__zr" aria-labelledby="kprt__tt_id">
          <div className="wlph__vn">
            <div className="qmsx__hd">
              <h1 className="kprt__tt" id="kprt__tt_id">
                Current Offers by Location
              </h1>
              <p className="vnwx__sb">
                Member-favorite treatments at limited-time pricing. Choose your
                studio to see what&rsquo;s available near you.
              </p>
            </div>

            <div
              className="lmrt__tb"
              role="tablist"
              aria-label="Choose a location"
            >
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  role="tab"
                  className="xzqp__bt"
                  aria-selected={active === loc.id}
                  aria-controls={`xzqp__pn_${loc.id}`}
                  onClick={() => setActive(loc.id)}
                >
                  <Pin className="xzqp__pn" />
                  {loc.name}
                </button>
              ))}
            </div>

            <div className="nwvk__ls">
              {visible.map((loc) => (
                <article
                  className="nwvk__im"
                  key={loc.id}
                  id={`xzqp__pn_${loc.id}`}
                  role="tabpanel"
                  aria-label={`${loc.name} offers`}
                >
                  <div className="nwvk__hd">
                    <span className="nwvk__pn" aria-hidden="true">
                      <Pin />
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <h2 className="nwvk__nm">{loc.name}</h2>
                      <p className="nwvk__ad">{loc.address}</p>
                    </div>
                  </div>

                  <div className="pkql__gd">
                    {loc.offers.map((offer) => (
                      <div className="pkql__im" key={offer.name}>
                        <span className="pkql__tg">{offer.tag}</span>
                        <h3 className="pkql__nm">{offer.name}</h3>
                        <p className="pkql__mt">{offer.meta}</p>
                        <p className="pkql__pr">
                          <span className="pkql__nw">{offer.price}</span>
                          <span className="pkql__ws">{offer.was}</span>
                        </p>
                        <a
                          className="pkql__ct"
                          href={offer.link}
                          aria-label={`Book ${offer.name} at ${loc.name}`}
                        >
                          Book Now
                        </a>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="xkqm__nt">
              Pricing shown is per treatment and cannot be combined with other
              promotions. Offers valid while supplies last at the selected
              location.
            </p>
          </div>
        </section>
      </main>
    );
}
