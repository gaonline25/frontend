// import React from "react";

// const TestimonialsPage: React.FC = () => {
//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Hero Module */}
//       <div className="mod_hero banner mobile-stack" data-s3-module>
//         <div className="wrapper">
//           <picture className="background">
//             <source
//               media="(max-width:420px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
//             />
//             <source
//               media="(max-width:800px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
//             />
//             <source
//               media="(max-width:1400px)"
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
//             />
//             <source
//               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
//             />
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//               data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
//               loading="lazy"
//               data-lazyload="img"
//               width="1994"
//               height="1206"
//               alt="Background Texture"
//               draggable="false"
//             />
//           </picture>
//           <div className="row">
//             <div className="inner">
//               <ul className="partial_breadcrumb" data-s3-partial>
//                 <li>
//                   <a
//                     href="/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/about/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/about/testimonials/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Testimonials
//                   </a>
//                 </li>
//               </ul>
//               <h1>Testimonials</h1>
//             </div>
//           </div>
//           <div className="media">
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=630 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=630 2x"
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1200 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1200 2x"
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=2100 2x"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=2100 2x"
//               />
//               <source
//                 srcSet="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1920"
//                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1920"
//               />
//               <img
//                 src="https://www.datocms-assets.com/105497/1694009121-testimonials-banner.jpg?auto=format,compress&w=1920"
//                 width="1920"
//                 height="1206"
//                 alt="Brunette smiling up at woman holding clipboard"
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         </div>
//       </div>

//       {/* Rating Box Module */}
//       <div className="container mod_rating_box" data-s3-module>
//         <div className="row">
//           <h2>Main Locations</h2>
//           <div className="ratings-slider" data-items="3">
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+clearwater&oq=goldfingers+aesthetics+clearwater&aqs=chrome.0.0i355i512j46i175i199i512j0i512j0i22i30j69i60.9987j0j7&sourceid=chrome&ie=UTF-8#lrd=0x88c2ed8f0492e1a1:0x68ba08384b66350a,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Clearwater reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Clearwater</h3>
//                   <p>4.9 Stars 71 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+Clermont&sca_esv=565654079&ei=q18EZcyXJr-kptQPs9KPwAs&ved=0ahUKEwiMmcLm36yBAxU_kokEHTPpA7gQ4dUDCBE&uact=5&oq=goldfingers+aesthetics+Clermont&gs_lp=Egxnd3Mtd2l6LXNlcnAiH2dvbGRmaW5nZXJzIGFlc3RoZXRpY3MgQ2xlcm1vbnQyCxAuGIAEGMcBGK8BMggQABiKBRiGAzIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIzwtQ7whY7whwAngBkAEAmAFwoAFwqgEDMC4xuAEDyAEA-AEC-AEBwgIKEAAYRxjWBBiwA-IDBBgAIEGIBgGQBgi6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x88e78fde38ff9671:0x7a715f3692541c7b,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Clermont reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Clermont</h3>
//                   <p>5 Stars 46 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+daytona+beach&sca_esv=565654079&ei=xGAEZdCCEP-oqtsP_-iK8AQ&gs_ssp=eJwNy7sNgCAQANDYmrgDhdZyfBQdwS0OOMDEYCIUuL2-_vXDHGeAJCBnsV282yfejKHFW0KrtJKG9M4bWq8kQEAhuAqrPMZ4Xz6cOdJTGFKpierpCvP41jsj-7tLH-AHHTM&oq=goldfingers+aesthetics+Daytona+beach&gs_lp=Egxnd3Mtd2l6LXNlcnAiJGdvbGRmaW5nZXJzIGFlc3RoZXRpY3MgRGF5dG9uYSBiZWFjaCoCCAIyCxAuGK8BGMcBGIAEMgUQABiABDIaEC4YrwEYxwEYgAQYlwUY3AQY3gQY4ATYAQFIzWBQyx5YikhwA3gBkAEAmAF7oAHHC6oBBDQuMTC4AQHIAQD4AQHCAgoQABhHGNYEGLADwgILEC4YgAQYxwEYrwHCAgYQABgWGB7CAggQABiKBRiGA8ICGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgINEC4YDRivARjHARiABMICBxAAGA0YgATCAhwQLhgNGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEB4gMEGAAgQYgGAZAGCLoGBggBEAEYFA&sclient=gws-wiz-serp#lrd=0x88e6dbeab45438e5:0xabd4311fa2204f73,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Daytona Beach reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Daytona Beach</h3>
//                   <p>4.5 Stars 71 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+orlando&sca_esv=565654079&ei=6WAEZYToMZu7qtsPr8mU2AM&ved=0ahUKEwjEgJ_-4KyBAxWbnWoFHa8kBTsQ4dUDCBE&uact=5&oq=goldfingers+aesthetics+orlando&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmdvbGRmaW5nZXJzIGFlc3RoZXRpY3Mgb3JsYW5kbzIGEAAYFhgeSIUTUNUGWKINcAF4AZABAJgBrAGgAbYFqgEDNS4yuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCxAuGK8BGMcBGIAEwgILEC4YgAQYxwEYrwHCAgUQABiABMICGhAuGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEBwgIIEAAYigUYhgPiAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp#ip=1&lrd=0x88e77f865ea60f97:0x73d0a1e2f4ff6009,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Orlando reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Orlando</h3>
//                   <p>4.8 Stars 100 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+lake+mary&sca_esv=565654079&ei=BmEEZfm9CLasqtsPpPahoAM&gs_ssp=eJwFwcsNgCAMANB4NXEHLp5pVaA4glsQLWj8BkjE7X2vbmSQiL7Y_dHvCdXYQiFiY7pZAZI2rHCE4pCtJoLeW092UJMI97H47Qock3Cc8sp5m5M43M7idPH7AV9qGzw&oq=goldfingers+aesthetics+lake+mary&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGdvbGRmaW5nZXJzIGFlc3RoZXRpY3MgbGFrZSBtYXJ5KgIIAjILEC4YgAQYxwEYrwEyBhAAGBYYHjIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIlSRQ_wlYuxFwAngBkAEAmAGQAaAB5geqAQMzLja4AQHIAQD4AQHCAgoQABhHGNYEGLADwgIOEC4YigUYxwEYrwEYkQLCAgUQABiABMICCBAAGIoFGIYD4gMEGAAgQYgGAZAGCLoGBggBEAEYFA&sclient=gws-wiz-serp#lrd=0x88e772c501867e51:0xa1e968803f9f8945,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Lake Mary reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Lake Mary</h3>
//                   <p>4.6 Stars 82 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+longwood&sca_esv=565654079&ei=JWEEZdmjC6qrqtsP3ue5-Ac&ved=0ahUKEwiZysaa4ayBAxWqlWoFHd5zDn8Q4dUDCBE&uact=5&oq=goldfingers+aesthetics+longwood&gs_lp=Egxnd3Mtd2l6LXNlcnAiH2dvbGRmaW5nZXJzIGFlc3RoZXRpY3MgbG9uZ3dvb2QyCxAuGIAEGMcBGK8BMgUQABiABDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI-CFQkwdYpxtwAngBkAEAmAGBAaABuQmqAQQxLjEwuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBhAAGBYYHsICCBAAGIoFGIYD4gMEGAAgQYgGAZAGCLoGBggBEAEYFA&sclient=gws-wiz-serp#lrd=0x88e773fd1014e039:0xc0e6563c7e26eb6a,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Longwood reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Longwood</h3>
//                   <p>4.7 Stars 147 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+mount+dora&sca_esv=565654079&ei=Q2EEZbfbHL6qqtsP0cuD6AY&gs_ssp=eJwFwUsOQDAQANDYStyhFtZm1P8IblGdmZLQipY4vvfyonY14gv29XIRZHMF3zjyYHRLTaO1XXua4UPiAQRRsJuMcLeULhwku3d8R2U4po3TbqM6w-OTonCbH7VuHNU&oq=goldfingers+aesthetics+mount+dor&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGdvbGRmaW5nZXJzIGFlc3RoZXRpY3MgbW91bnQgZG9yKgIIATIFEAAYgAQyCxAuGIAEGMcBGK8BMggQABiKBRiGA0jAIFDNB1ivEXACeAGQAQCYAXCgAYIHqgEDNC41uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBhAAGBYYHuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp#lrd=0x88e7a34d2233cb6d:0x1de70f11f159afe5,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Mount Dora reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Mount Dora</h3>
//                   <p>5 Stars 1 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+new+smyrna+beach&sca_esv=565654079&ei=XmEEZb3RNOeoqtsPiui7gA8&gs_ssp=eJwFwV0KhCAUBlB6DdqDL0OPXSvSWsLsQr2fFpSBSj-z-jmnbrrQSVkkX-_PDVQtH3q0huo98-gBa0Ze6JmhqJ8sDawV4O23DefOfosBKQuDXFaUzWURcYt8vCkaYWHc-geTlB-s&oq=goldfingers+aesthetics+new&gs_lp=Egxnd3Mtd2l6LXNlcnAiGmdvbGRmaW5nZXJzIGFlc3RoZXRpY3MgbmV3KgIIADILEC4YgAQYxwEYrwEyBRAAGIAEMgYQABgWGB4yGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSMcgUKcRWLsScAJ4AZABAJgBfaAByQKqAQMxLjK4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIIEAAYigUYhgPiAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp#lrd=0x88e72fdd4feeba4d:0x9e7026b03d87eefb,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - New Smyrna reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - New Smyrna</h3>
//                   <p>4.7 Stars 11 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+ocala&sca_esv=565654079&ei=d2EEZbPIN-CkqtsPhKmn4AY&gs_ssp=eJwFwTEKgDAMAEBcBX_g4OJsohSbPsFfhDRtxWLFivh879puihPikQKl6yVo3Aiftbp6o8GCGFl4dfCR1xksEoAimnnZ-liyD_sZ9a4Da32SPrvUoQhn_gEO-xoe&oq=goldfingers+aesthetics+ocala&gs_lp=Egxnd3Mtd2l6LXNlcnAiHGdvbGRmaW5nZXJzIGFlc3RoZXRpY3Mgb2NhbGEqAggCMgsQLhivARjHARiABDIGEAAYFhgeMhoQLhivARjHARiABBiXBRjcBBjeBBjgBNgBAUiaH1DXBligCnABeAGQAQCYAXagAZ8EqgEDMS40uAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICCxAuGIAEGMcBGK8BwgIFEAAYgATCAggQABiKBRiGA-IDBBgBIE7iAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp#lrd=0x88e7d5ef80c5c3a7:0x9de2081900e11523,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Ocala reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Ocala</h3>
//                   <p>4.5 Stars 8 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+port+orange&sca_esv=565654079&ei=n2EEZdjrJNupqtsPnpS-uAY&gs_ssp=eJwNyUEKgCAQAEC6Bv1Bgs6toWk-oU-E5mpGpKhQz6-5TtuNfqQ0bdPp-SOgUQO8UuJsF2ZAAgg5OwUvZ2i0nuzOHDfc0bX38bIu3B5zIRpLPbCGvZAUcyUx6z8-rasc1Q&oq=goldfingers+aesthetics+port&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2dvbGRmaW5nZXJzIGFlc3RoZXRpY3MgcG9ydCoCCAEyCxAuGIAEGMcBGK8BMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUibH1CnB1j0CnACeAGQAQCYAYEBoAGzA6oBAzEuM7gBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgWGB7iAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp#lrd=0x88e6d94b0800786f:0x54ebaa2dc4f5b5f1,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Port Orange reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Port Orange</h3>
//                   <p>5 Stars 94 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/maps/place/Goldfingers+Aesthetics+St.+Petersburg/@27.7716841,-82.6570198,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2e3a22bd61d09:0x1b60bfdb32964d67!8m2!3d27.7716841!4d-82.6570198!16s%2Fg%2F11y677nkdd?entry=ttu"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - St. Petersburg reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - St. Petersburg</h3>
//                   <p>5 Stars 1 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+tampa&sca_esv=565654079&ei=vWEEZZLwBqyqqtsP8ue58AE&gs_ssp=eJwFwTsKgDAQBUBsBW9gYWPtJn5IPIK3WF42UfxiAoqndyYvmtAotaIDfY-nbKzpNQYailrN0IbhRnr7QWBsa60W7yB2KsO5Ob8cQe5YscQ0S1oQq8T7xT8gKxru&oq=goldfingers+aesthetics+ta&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWdvbGRmaW5nZXJzIGFlc3RoZXRpY3MgdGEqAggDMgsQLhivARjHARiABDIFEAAYgAQyBRAAGIAEMhoQLhivARjHARiABBiXBRjcBBjeBBjgBNgBAUiiM1CXF1jUGHAFeAGQAQCYAX-gAfABqgEDMC4yuAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICCxAuGIAEGMcBGK8BwgIGEAAYFhge4gMEGAEgTuIDBBgAIEGIBgGQBgi6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x88c2c1032ac28acd:0x56ec893992efdce9,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Tampa reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Tampa</h3>
//                   <p>5 Stars 5 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+the+villages&sca_esv=565654079&ei=2WEEZajoOpSsqtsPgMmbwAY&gs_ssp=eJwNyEEKgCAQAEC6Bv1BiM7tYpn4hH6htpokFhlSv8_TwLTd6EfE63BJfFigUQO8UtJi52USTgCiMaoWgEHU6CxxaTa-9v6MmwvJ052Zpvzs9ASbWZWVEKP2lH_W9R07&oq=goldfingers+aesthetics+the&gs_lp=Egxnd3Mtd2l6LXNlcnAiGmdvbGRmaW5nZXJzIGFlc3RoZXRpY3MgdGhlKgIIATILEC4YgAQYxwEYrwEyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSLIVUIQHWNQIcAF4AZABAJgBcqABywKqAQMwLjO4AQHIAQD4AQHCAgoQABhHGNYEGLADwgILEC4YrwEYxwEYgATCAgUQABiABMICBhAAGBYYHsICGhAuGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEB4gMEGAEgTuIDBBgAIEGIBgGQBgi6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x88e7c5746f6011bb:0x800b11a1fce38bd3,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - The Villages reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - The Villages</h3>
//                   <p>4.8 Stars 26 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=goldfingers+aesthetics+winter+park&sca_esv=565654079&ei=7WEEZbqXJcWmqtsP6o6U6Ag&gs_ssp=eJwFwVsKgCAQAED6DbqDBH23Vu5KR-gWppuJvVChjt9M3fS-l_Ih2uCMB1RzB5_WTCTRDBbciKhm-MgZwlGxg8naVa9L6-_DbeHynLIwnMvOJdgs3nAVTuIxKf6irRyt&oq=goldfingers+aesthetics+wint&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2dvbGRmaW5nZXJzIGFlc3RoZXRpY3Mgd2ludCoCCAMyCxAuGIAEGMcBGK8BMgYQABgWGB4yBhAAGBYYHjIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI0CNQvgdYhhVwAngBkAEAmAGLAaAB4AaqAQM0LjS4AQHIAQD4AQHCAgoQABhHGNYEGLADwgIIEAAYigUYhgPCAgsQLhivARjHARiABMICBRAAGIAEwgIaEC4YrwEYxwEYgAQYlwUY3AQY3gQY4ATYAQHCAg4QLhivARjHARiKBRiRAuIDBBgAIEGIBgGQBgi6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x88e7716a2c0d3665:0x7da7635ed04ccb8b,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Winter Park reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Winter Park</h3>
//                   <p>4.9 Stars 86 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Rating Box Module */}
//       <div className="container mod_rating_box" data-s3-module>
//         <div className="row">
//           <h2>Salon Lofts Locations</h2>
//           <div className="ratings-slider" data-items="3">
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+College+Park+google+reviews&oq=salon+lofts+College+Park+google+reviews&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigAdIBCTEwMTkwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x88e77a637fa2a933:0xf3c2bb12b5de6af0,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - College Park reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - College Park</h3>
//                   <p>4.7 Stars 61 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+Lake+Nona+google+reviews&sca_esv=569475139&ei=K-EWZZiZJozOwbkPgcKmkAQ&ved=0ahUKEwjY2s_qhdCBAxUMZzABHQGhCUIQ4dUDCBE&uact=5&oq=salon+lofts+Lake+Nona+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiJHNhbG9uIGxvZnRzIExha2UgTm9uYSBnb29nbGUgcmV2aWV3czIIECEYoAEYwwQyCBAhGKABGMMEMggQIRigARjDBEiSDlA5WNANcAJ4AZABAJgBnQGgAYUCqgEDMC4yuAEDyAEA-AEC-AEBwgIKEAAYRxjWBBiwA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp#lrd=0x88dd8981989a5ee7:0xc7376633e900cf0f,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Lake Nona reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Lake Nona</h3>
//                   <p>4.9 Stars 36 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+Largo+google+reviews&sca_esv=569475139&ei=TeEWZcqWG9mVwbkPyKaIgAQ&ved=0ahUKEwiK8d_6hdCBAxXZSjABHUgTAkAQ4dUDCBE&uact=5&oq=salon+lofts+Largo+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiIHNhbG9uIGxvZnRzIExhcmdvIGdvb2dsZSByZXZpZXdzMggQIRigARjDBDIIECEYoAEYwwQyCBAhGKABGMMEMggQIRigARjDBEiHA1B5WHlwAXgBkAEAmAGBAaABgQGqAQMwLjG4AQPIAQD4AQL4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#lrd=0x88c2fa592985936d:0xfe164d19a457c671,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Largo reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Largo</h3>
//                   <p>4.6 Stars 133 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+Oldsmar+google+reviews&sca_esv=569475139&ei=a-EWZf6lKtyKwbkPwaSDiAQ&ved=0ahUKEwi-h5aJhtCBAxVcRTABHUHSAEEQ4dUDCBE&uact=5&oq=salon+lofts+Oldsmar+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiInNhbG9uIGxvZnRzIE9sZHNtYXIgZ29vZ2xlIHJldmlld3MyCBAhGKABGMMEMggQIRigARjDBEj0BVDNAVjNAXACeAGQAQCYAYkBoAGJAaoBAzAuMbgBA8gBAPgBAvgBAcICChAAGEcY1gQYsAPiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#lrd=0x88c2edaebd75d841:0xbe5fca49dc613f92,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Oldsmar reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Oldsmar</h3>
//                   <p>4.9 Stars 68 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+Savannah+Park+%2F+Sanford+google+reviews&sca_esv=569475139&ei=guEWZazfEvqIwbkPrYmjmAQ&ved=0ahUKEwisqPqThtCBAxV6RDABHa3ECEMQ4dUDCBE&uact=5&oq=salon+lofts+Savannah+Park+%2F+Sanford+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiMnNhbG9uIGxvZnRzIFNhdmFubmFoIFBhcmsgLyBTYW5mb3JkIGdvb2dsZSByZXZpZXdzMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMg0QABhHGNYEGMkDGLADSJIFUPQBWPQBcAJ4AZABAJgBAKABAKoBALgBA8gBAPgBAvgBAeIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp#lrd=0x88e70db5a5e0d4bf:0xa9f815bc8ce02ce3,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Savannah Park / Sanford reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Savannah Park / Sanford</h3>
//                   <p>4.6 Stars 33 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+West+Chase+google+reviews&sca_esv=569475139&ei=reEWZYSJK7mJwbkPm4OUoAQ&ved=0ahUKEwjEk9OohtCBAxW5RDABHZsBBUQQ4dUDCBE&uact=5&oq=salon+lofts+West+Chase+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiJXNhbG9uIGxvZnRzIFdlc3QgQ2hhc2UgZ29vZ2xlIHJldmlld3MyCBAhGKABGMMESN4BUABYAHAAeAGQAQCYAYcBoAGHAaoBAzAuMbgBA8gBAPgBAvgBAeIDBBgAIEGIBgE&sclient=gws-wiz-serp#lrd=0x88c2ea5b05ee087f:0x24aef909da934d54,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - West Chase reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - West Chase</h3>
//                   <p>4.7 Stars 61 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+Winter+Park+East+google+reviews&sca_esv=569475139&ei=zeEWZbeGBIWfkvQPm9Kk0AM&ved=0ahUKEwj3oM23htCBAxWFj4QIHRspCToQ4dUDCBE&uact=5&oq=salon+lofts+Winter+Park+East+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiK3NhbG9uIGxvZnRzIFdpbnRlciBQYXJrIEVhc3QgZ29vZ2xlIHJldmlld3MyCBAhGKABGMMEMggQIRigARjDBDIIECEYoAEYwwRIvwNQtAFYtAFwAXgBkAEAmAGbAaABmwGqAQMwLjG4AQPIAQD4AQL4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#lrd=0x88e76f99f47dfd1f:0xab500ca4160812c6,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Winter Park East reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Winter Park East</h3>
//                   <p>5 Stars 15 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="item">
//               <a
//                 href="https://www.google.com/search?q=salon+lofts+Winter+Springs+google+reviews&sca_esv=569475139&ei=4uEWZaGiIPOHwbkPxOywiAQ&ved=0ahUKEwihm-vBhtCBAxXzQzABHUQ2DEEQ4dUDCBE&uact=5&oq=salon+lofts+Winter+Springs+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiKXNhbG9uIGxvZnRzIFdpbnRlciBTcHJpbmdzIGdvb2dsZSByZXZpZXdzMggQIRigARjDBDIIECEYoAEYwwQyCBAhGKABGMMEMggQIRigARjDBEi_BVBLWEtwAXgBkAEAmAGOAaABjgGqAQMwLjG4AQPIAQD4AQL4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#lrd=0x88e76feb5f359805:0x46b064a4304872f6,1,,,,"
//                 target="_blank"
//                 rel="noopener"
//                 className="review-box"
//                 aria-label="Google - Winter Springs reviews that open in a new tab"
//                 role="link"
//               >
//                 <div className="reviews-holder block">
//                   <h3>Google - Winter Springs</h3>
//                   <p>4.8 Stars 62 Reviews</p>
//                   <div className="stars">
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                     <i className="f-icon icon-star"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Reviews List Module */}
//       <div className="mod_reviews_list container option-1" data-s3-module>
//         <div className="row">
//           <div className="reviews">
//             <div className="item">
//               <div className="content">
//                 <p>
//                   I love going to the Lake Mary location. The staff is super
//                   friendly and yet very professional I go to see Dr. Nguyen he
//                   is the best at injections I never have any bruising
//                 </p>
//               </div>
//               <p className="author">Marti R.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   I have been going to Goldfingers for years and will continue
//                   to go there as long as I can. The staff is extremely
//                   knowledgeable and the services are beyond my expectations each
//                   and every time. My face looks fantastic and they don't sell …
//                 </p>
//               </div>
//               <p className="author">jenniferc2016779087</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   Wonderful experience with always satisfied results. The staff
//                   is the main reason I won't go anywhere else
//                 </p>
//               </div>
//               <p className="author">susannc685915731</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   I love Goldfingr's and My and Dr. Jim. They totally care about
//                   their clients and I would never go anywhere else! Excellent is
//                   the best way I can describe GSC!
//                 </p>
//               </div>
//               <p className="author">LesleyFox48</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   Went to the dr Phillips location for Botox,excellent MD did my
//                   botox, his assistant was wonderful, have had Botox at 2 other
//                   places and this place by far is the best.. This place is the
//                   best.
//                 </p>
//               </div>
//               <p className="author">Britney M.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   Great spa! Love it there. Have used the services of all the
//                   staff members! Wouldn't go anywhere else.
//                 </p>
//               </div>
//               <p className="author">Jacque C.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   My experience at Goldfinger's has always been very positive.
//                   The office is clean, professional and efficient. Dr. Young and
//                   his assistant My work as a team to make sure that placement is
//                   appropriate with the fillers and just as a double check on
//                   everything, which I like. I have always been satisfied with
//                   the results and have never had to take them up on the offer to
//                   come back. I have been getting Botox for years in many
//                   different settings but since coming here a couple of years
//                   ago, I have stayed. I am very happy with this office, the
//                   staff and the products.
//                 </p>
//               </div>
//               <p className="author">Mary H.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   This place is where all people should go to. It's a
//                   beautifully decorated, clean and extremely cliented oriented
//                   Spa where the entire staff makes you feel so welcome and so
//                   comfortable from the minute you walk in the door you cannot
//                   wait to set your next appointment. You get the expertise of
//                   the amazingly talented doctors, their assistants and
//                   estheticians. They only use high quality products without the
//                   high price tags attached. Like most people products have
//                   always been a major concern of mine. There is absolutely no
//                   down side to this Spa and I highly recommend it, I've been
//                   traveling all the way from Clermont to go there for years and
//                   it's more than worth the trip every time I go.
//                 </p>
//               </div>
//               <p className="author">Dawn D.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   Everyone should experience true professionals - at lease once.
//                   Third time I have been to GFA and have to say that this will
//                   be the third time I am extremely happy with the results. So
//                   happy, I'm sending my mom... Arrived to the office to be
//                   treated with the upmost professionalism and left the office
//                   feeling not only confident and excited by the results of the
//                   procedures, but with my desision to attend Goldfinger
//                   Asthetics. Not only do the team have an impressive , and rare
//                   understanding of three dimensional facial mechanics - they are
//                   also true artists who know how to enhance with ease. They also
//                   clearly love their work. It showes in everything they have
//                   done for me. I didn't have a huge budget but was pleasantly
//                   surprised with the costings for the procedures. In addition,
//                   the administrative team also pinned down a number of
//                   manufacturer discounts and incentive programmes that saved me
//                   over $300.00 on my final billing. If you are considering anti
//                   aging procedures, Goldfinger is certainly worth the visit.....
//                 </p>
//               </div>
//               <p className="author">Scott A.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   This is an amazing experience with Goldfinger's. -- every
//                   element of care is with excellence and the highest care. I am
//                   always so pleased with my results and the professionalism of
//                   all the staff!.
//                 </p>
//               </div>
//               <p className="author">Karena E.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   The staff is incredible! Genuine sweet and knowledgeable, felt
//                   very comfortable and then wonderful walking out the door! Will
//                   be back!
//                 </p>
//               </div>
//               <p className="author">keris1234789752</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   I received the most wonderful facial by Lynn I've ever
//                   received. She uses the absolute right pressure, she never
//                   rushes, she makes you feel very relaxed. Only downside is that
//                   the insulation is not as sound. But the relaxing music is
//                   fabulous. So glad to have tried the facial.
//                 </p>
//               </div>
//               <p className="author">Beatriz V.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   Always treated as a member of a family. Very helpful and
//                   honest. I would recommend my friends to get any treatment here
//                   with confidence!
//                 </p>
//               </div>
//               <p className="author">Marsha I.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   My experience has been wonderful. The doctor is very nice. I
//                   switched from my old doctor because I had a better experience
//                   here.
//                 </p>
//               </div>
//               <p className="author">Pat S.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//             <div className="item">
//               <div className="content">
//                 <p>
//                   Every person I've met at Goldfingers has been friendly,
//                   helpful and sincerely interested in recommending the best
//                   treatment for the situation.
//                 </p>
//               </div>
//               <p className="author">Beverly B.</p>
//               <div className="review-stars">
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//                 <i className="f-icon icon-star"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default TestimonialsPage;



import React from "react";
import {
  fetchTestimonialsData,
  getResponsiveImageUrls,
} from "@/lib/api/fetchTestimonialsData";

import { Star } from "lucide-react";

const TestimonialsPage: React.FC = async () => {
  const testimonialsData = await fetchTestimonialsData();

  if (!testimonialsData) {
    return <div>Loading...</div>;
  }

  const { heroSection, ratingBoxSections, reviewsListSection, globalStyles } =
    testimonialsData;

  // Get hero images
  const backgroundImage = getResponsiveImageUrls(
    heroSection?.backgroundImage || {}
  );
  const mediaImage = getResponsiveImageUrls(heroSection?.mediaImage || {});

  return (
    <main
      id="main"
      style={{
        backgroundColor: globalStyles?.backgroundColor,
        color: globalStyles?.textColor,
        fontFamily: globalStyles?.fontFamily,
      }}
    >
      {/* Hero Module */}
      <div
        className="mod_hero banner mobile-stack"
        data-s3-module
        style={{ backgroundColor: heroSection?.backgroundColor }}
      >
        <div className="wrapper">
          <picture className="background">
            {backgroundImage.mobile && (
              <source
                media="(max-width:420px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${backgroundImage.mobile}?auto=format,compress&w=420, ${backgroundImage.mobile}?auto=format,compress&w=630 2x`}
              />
            )}
            {backgroundImage.tablet && (
              <source
                media="(max-width:800px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${backgroundImage.tablet}?auto=format,compress&w=800, ${backgroundImage.tablet}?auto=format,compress&w=1200 2x`}
              />
            )}
            {backgroundImage.desktop && (
              <source
                media="(max-width:1400px)"
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${backgroundImage.desktop}?auto=format,compress&w=1400, ${backgroundImage.desktop}?auto=format,compress&w=2100 2x`}
              />
            )}
            {backgroundImage.large && (
              <source
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                data-lazyload-srcset={`${backgroundImage.large}?auto=format,compress&w=1994`}
              />
            )}
            <img
              src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
              data-lazyload-src={`${backgroundImage.large}?auto=format,compress&w=1994`}
              loading="lazy"
              data-lazyload="img"
              width="1994"
              height="1206"
              alt={backgroundImage.alt || "Background Texture"}
              draggable="false"
            />
          </picture>
          <div className="row">
            <div className="inner">
              <ul className="partial_breadcrumb" data-s3-partial>
                {heroSection?.breadcrumbs?.map(
                  (breadcrumb: any, index: number) => (
                    <li key={index}>
                      <a
                        href={breadcrumb.url}
                        role="link"
                        aria-label={breadcrumb.ariaLabel}
                      >
                        {breadcrumb.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
              <h1
                style={{
                  color: heroSection?.titleColor,
                  fontSize: heroSection?.titleFontSize,
                }}
              >
                {heroSection?.title || "Testimonials"}
              </h1>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              {mediaImage.mobile && (
                <source
                  media="(max-width:420px)"
                  srcSet={`${mediaImage.mobile}?auto=format,compress&w=420, ${mediaImage.mobile}?auto=format,compress&w=630 2x`}
                  data-lazyload-srcset={`${mediaImage.mobile}?auto=format,compress&w=420, ${mediaImage.mobile}?auto=format,compress&w=630 2x`}
                />
              )}
              {mediaImage.tablet && (
                <source
                  media="(max-width:800px)"
                  srcSet={`${mediaImage.tablet}?auto=format,compress&w=800, ${mediaImage.tablet}?auto=format,compress&w=1200 2x`}
                  data-lazyload-srcset={`${mediaImage.tablet}?auto=format,compress&w=800, ${mediaImage.tablet}?auto=format,compress&w=1200 2x`}
                />
              )}
              {mediaImage.desktop && (
                <source
                  media="(max-width:1400px)"
                  srcSet={`${mediaImage.desktop}?auto=format,compress&w=1400, ${mediaImage.desktop}?auto=format,compress&w=2100 2x`}
                  data-lazyload-srcset={`${mediaImage.desktop}?auto=format,compress&w=1400, ${mediaImage.desktop}?auto=format,compress&w=2100 2x`}
                />
              )}
              {mediaImage.large && (
                <source
                  srcSet={`${mediaImage.large}?auto=format,compress&w=1920`}
                  data-lazyload-srcset={`${mediaImage.large}?auto=format,compress&w=1920`}
                />
              )}
              <img
                src={
                  mediaImage.large
                    ? `${mediaImage.large}?auto=format,compress&w=1920`
                    : ""
                }
                width="1920"
                height="1206"
                alt={mediaImage.alt || "Hero image"}
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Rating Box Sections */}
      {ratingBoxSections?.map((section: any, sectionIndex: number) => (
        <div
          key={sectionIndex}
          className="container mod_rating_box"
          data-s3-module
          style={{
            backgroundColor: section.backgroundColor,
            color: section.textColor,
          }}
        >
          <div className="row">
            <h2>{section.sectionTitle}</h2>
            <div
              className="ratings-slider"
              data-items={section.itemsPerRow || 3}
            >
              {section.locations?.map((location: any, locIndex: number) => {
                const displayName =
                  location.displayName ||
                  `${location.platform} - ${location.name}`;

                return (
                  <div className="item" key={locIndex}>
                    <a
                      href={location.url}
                      target={location.openInNewTab ? "_blank" : "_self"}
                      rel={location.openInNewTab ? "noopener" : ""}
                      className="review-box"
                      aria-label={
                        location.ariaLabel ||
                        `${displayName} reviews that open in a new tab`
                      }
                      role="link"
                      style={{
                        backgroundColor: location.backgroundColor,
                        color: location.textColor,
                      }}
                    >
                      <div className="reviews-holder block">
                        <h3>{displayName}</h3>
                        <p>
                          {location.rating} Stars {location.reviewCount} Reviews
                        </p>
                        <div
                          className="stars"
                          style={{
                            color:
                              location.starColor ||
                              globalStyles?.defaultStarColor ||
                              "#FFD700",
                          }}
                        >
                          {[...Array(5)].map((_, starIndex) => (
                            // <i key={starIndex} className="f-icon icon-star"></i>
                            <Star
                              key={starIndex}
                              className="f-icon icon-star text-black"
                              style={{ fill: "#000" }}
                              // className="text-yellow-500"
                            />
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      {/* Reviews List Module */}
      <div
        className={`mod_reviews_list container ${
          reviewsListSection?.displayOption || "option-1"
        }`}
        data-s3-module
        style={{
          backgroundColor: reviewsListSection?.backgroundColor,
          color: reviewsListSection?.textColor,
        }}
      >
        <div className="row">
          <div className="reviews">
            {reviewsListSection?.reviews?.map(
              (review: any, reviewIndex: number) => (
                <div
                  className="item"
                  key={reviewIndex}
                  style={{
                    backgroundColor: review.backgroundColor,
                    color: review.textColor,
                  }}
                >
                  <div className="content">
                    <p>{review.content}</p>
                  </div>
                  <p className="author">{review.author}</p>
                  <div
                    className="review-stars"
                    style={{
                      color:
                        review.starColor ||
                        globalStyles?.defaultStarColor ||
                        "#FFD700",
                    }}
                  >
                    {[...Array(review.rating || 5)].map((_, starIndex) => (
                      // <i key={starIndex} className="f-icon icon-star"></i>
                      <Star className="f-icon icon-star" style={{fill: '#000'}} />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;