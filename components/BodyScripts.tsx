// // // components/BodyScripts.tsx
// // import Script from "next/script";

// // interface BodyScriptsProps {
// //   gtmId?: string;
// //   appJsUrl?: string;
// //   captchaJsUrl?: string;
// // }

// // export default function BodyScripts({
// //   gtmId = "GTM-5QDJXBX",
// //   appJsUrl = "/assets/app.min.js",
// //   captchaJsUrl = "/master/assets/core/js/treCaptcha.min.js",
// // }: BodyScriptsProps) {
// //   return (
// //     <>
// //       {/* Lazy Loading Script - Runs first to handle image/video loading */}
// //       <Script id="lazyload-script" strategy="afterInteractive">
// //         {`
// //           (() => {
// //             var m = (t) => {
// //                 let o = document.readyState;
// //                 if (typeof $ != "function") {
// //                   setTimeout(() => {
// //                     m(t);
// //                   }, 100);
// //                   return;
// //                 }
// //                 o === "complete" ||
// //                 (o !== "loading" && !document.documentElement.doScroll)
// //                   ? t()
// //                   : document.addEventListener("DOMContentLoaded", t);
// //               },
// //               g = m;
// //             var y = () => {
// //                 [...document.querySelectorAll("video")].forEach((t, o) => {
// //                   let e = t.getAttribute("data-lazyload"),
// //                     i = t.getAttribute("data-lazyload-loaded"),
// //                     r = t.querySelectorAll("source");
// //                   if (!e || i) {
// //                     let u = t.getAttribute("src"),
// //                       a = window.innerWidth,
// //                       n = t.getAttribute("data-desktop-vid"),
// //                       f = t.getAttribute("data-tablet-vid"),
// //                       l = t.getAttribute("data-mobile-vid"),
// //                       s = a <= 640 ? l : a <= 920 ? f : n;
// //                     s !== null && s !== u && t.setAttribute("src", s);
// //                   }
// //                 });
// //               },
// //               E = (t) => ("scrollTop" in t ? t.scrollTop : t.pageYOffset),
// //               b = (t) => {
// //                 let o = t.getBoundingClientRect();
// //                 return {
// //                   top: o.top + window.scrollY,
// //                   left: o.left + window.scrollX,
// //                 };
// //               },
// //               C = (t) => {
// //                 for (var o = [], e = t.parentNode.firstChild; e; )
// //                   e.nodeType === 1 && e !== t && o.push(e), (e = e.nextSibling);
// //                 return o;
// //               },
// //               c = {
// //                 run() {
// //                   y(),
// //                     [...document.querySelectorAll("[data-lazyload]")].forEach(
// //                       function (t, o) {
// //                         var e = t.getAttribute("data-lazyload"),
// //                           i = t.getAttribute("data-lazyload-src");
// //                         let r = (window.tresioConfig || {}).lazyload || {};
// //                         var u = r.homeOffset !== undefined ? r.homeOffset : 300,
// //                           a = r.offset !== undefined ? r.offset : 300;
// //                         e === "bg" &&
// //                           (a =
// //                             r.backgroundOffset !== undefined
// //                               ? r.backgroundOffset
// //                               : 300);
// //                         var n = E(window),
// //                           f =
// //                             t.nodeName === "SOURCE"
// //                               ? b(t.parentNode).top
// //                               : b(t).top;
// //                         window.location.pathname === "/" &&
// //                           u !== undefined &&
// //                           n < 300 &&
// //                           (a = u);
// //                         var l = f - a,
// //                           s = l + t.getBoundingClientRect().height,
// //                           h = n + document.querySelector("html").clientHeight,
// //                           w = f - n,
// //                           A = l < -a,
// //                           S = (s > n && l < h) || w < a;
// //                         let z = t.style.display;
// //                         if (
// //                           S &&
// //                           z !== "none" &&
// //                           t.getAttribute("data-lazyload-loaded") !== "true" &&
// //                           !A
// //                         ) {
// //                           if (
// //                             (e === "bg" && (t.style.backgroundImage = \`url(\${i})\`),
// //                             e === "img" &&
// //                               (t.getAttribute("src") !== i &&
// //                                 t.setAttribute("src", i),
// //                               C(t).forEach((d, x) => {
// //                                 if (d.nodeName === "SOURCE") {
// //                                   let p = d.getAttribute("data-lazyload-srcset"),
// //                                     T = d.getAttribute("srcset");
// //                                   p && p !== T && d.setAttribute("srcset", p);
// //                                 }
// //                               })),
// //                             e === "video")
// //                           ) {
// //                             if (t.getAttribute("data-desktop-vid"))
// //                               t.setAttribute("data-lazyload-loaded", "true"), y();
// //                             else if (
// //                               (t.setAttribute("src", i), t.nodeName === "SOURCE")
// //                             ) {
// //                               let d = t.parentNode;
// //                               d.load && d.load();
// //                             }
// //                           }
// //                           t.setAttribute("data-lazyload-loaded", "true");
// //                         }
// //                       }
// //                     );
// //                 },
// //                 init() {
// //                   document.readyState === "loading" && c.run(),
// //                     g(() => {
// //                       window.addEventListener("resize", c.run, false),
// //                         window.addEventListener("scroll", c.run, false),
// //                         c.run();
// //                     });
// //                 },
// //               },
// //               v = c;
// //             v.init();
// //           })();
// //         `}
// //       </Script>

// //       {/* Main App Script - Loads after lazy loading is initialized */}
// //       <Script
// //         src={appJsUrl}
// //         strategy="lazyOnload"
// //         onLoad={() => {
// //           // Trigger CMS initialization when jQuery is available
// //           if (typeof window !== "undefined" && (window as any).$) {
// //             (window as any).$(document).trigger("cms.init");
// //           }
// //         }}
// //       />

// //       {/* reCAPTCHA Script */}
// //       <Script src={captchaJsUrl} strategy="lazyOnload" />

// //       {/* Google Tag Manager NoScript Fallback */}
// //       <noscript>
// //         <iframe
// //           src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
// //           height="0"
// //           width="0"
// //           style={{ display: "none", visibility: "hidden" }}
// //         />
// //       </noscript>
// //     </>
// //   );
// // }

// // components/BodyScripts.tsx
// import Script from 'next/script'

// interface BodyScriptsProps {
//   gtmId?: string;
//   appJsUrl?: string;
//   captchaJsUrl?: string;
//   gaId?: string;
//   googleAdsId?: string;
//   iconNodeId?: string;
// }

// export default function BodyScripts({
//   gtmId = "GTM-5QDJXBX",
//   appJsUrl = "/assets/app.min.js",
//   captchaJsUrl = "/master/assets/core/js/treCaptcha.min.js",
//   gaId = "G-0ZWSKYX3K7",
//   googleAdsId = "AW-997436413",
//   iconNodeId = "115546"
// }: BodyScriptsProps) {
//   return (
//     <>
//       {/* Site Flushing Script - Remove this in production */}
//       <Script id="site-flush" strategy="afterInteractive">
//         {`
//           document.addEventListener("DOMContentLoaded", () => {
//             window.addEventListener("keydown", (e) => {
//               let ctrl = e.ctrlKey || e.metaKey;
//               const key = String(e.key);
//               if (ctrl && ["0", ".", "5"].includes(key)) {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 if (key === ".") {
//                   return (window.location = \`\${window.location.origin}\${window.location.pathname}s3admin\`);
//                 }
//                 let div = document.createElement("div");
//                 const styles = {
//                   position: "fixed",
//                   left: "0",
//                   right: "0",
//                   margin: "auto",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   zIndex: 9999999999,
//                   background: "#000",
//                   color: "#fff",
//                   height: "80px",
//                   lineHeight: "75px",
//                   width: "fit-content",
//                   userSelect: "none",
//                   textAlign: "center",
//                   borderRadius: "3px",
//                   fontSize: "32px",
//                   border: "2px solid white",
//                   padding: "0 32px",
//                   fontWeight: "500",
//                   fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif;",
//                 };
//                 Object.keys(styles).forEach((n) => (div.style[n] = styles[n]));
//                 div.innerHTML = "FLUSHING SITE...";
//                 document.body.append(div);
//                 fetch("/api/ping/?flushAll=2", {
//                   method: "POST",
//                   cache: "no-store",
//                 }).then(() => {
//                   setTimeout(() => {
//                     window.location.reload(true);
//                   }, 100);
//                 });
//               }
//             });
//           });
//         `}
//       </Script>

//       {/* Tresio Tracking Script */}
//       <Script
//         src="https://tracking.tresio.co/dist/bundle.js"
//         strategy="afterInteractive"
//       />

//       {/* Google Analytics */}
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${gaId}', {
//             cookie_flags: 'secure;samesite=none',
//           });
//           gtag('config', '${googleAdsId}', {
//             cookie_flags: 'secure;samesite=none',
//           });
//         `}
//       </Script>

//       {/* Google Tag Manager */}
//       <Script id="google-tag-manager" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','${gtmId}');
//         `}
//       </Script>

//       {/* IconNode Script */}
//       <Script
//         src={`https://scripts.iconnode.com/${iconNodeId}.js`}
//         strategy="afterInteractive"
//       />

//       {/* Lazy Loading Script - Runs first to handle image/video loading */}
//       <Script id="lazyload-script" strategy="afterInteractive">
//         {`
//           (() => {
//             var m = (t) => {
//                 let o = document.readyState;
//                 if (typeof $ != "function") {
//                   setTimeout(() => {
//                     m(t);
//                   }, 100);
//                   return;
//                 }
//                 o === "complete" ||
//                 (o !== "loading" && !document.documentElement.doScroll)
//                   ? t()
//                   : document.addEventListener("DOMContentLoaded", t);
//               },
//               g = m;
//             var y = () => {
//                 [...document.querySelectorAll("video")].forEach((t, o) => {
//                   let e = t.getAttribute("data-lazyload"),
//                     i = t.getAttribute("data-lazyload-loaded"),
//                     r = t.querySelectorAll("source");
//                   if (!e || i) {
//                     let u = t.getAttribute("src"),
//                       a = window.innerWidth,
//                       n = t.getAttribute("data-desktop-vid"),
//                       f = t.getAttribute("data-tablet-vid"),
//                       l = t.getAttribute("data-mobile-vid"),
//                       s = a <= 640 ? l : a <= 920 ? f : n;
//                     s !== null && s !== u && t.setAttribute("src", s);
//                   }
//                 });
//               },
//               E = (t) => ("scrollTop" in t ? t.scrollTop : t.pageYOffset),
//               b = (t) => {
//                 let o = t.getBoundingClientRect();
//                 return {
//                   top: o.top + window.scrollY,
//                   left: o.left + window.scrollX,
//                 };
//               },
//               C = (t) => {
//                 for (var o = [], e = t.parentNode.firstChild; e; )
//                   e.nodeType === 1 && e !== t && o.push(e), (e = e.nextSibling);
//                 return o;
//               },
//               c = {
//                 run() {
//                   y(),
//                     [...document.querySelectorAll("[data-lazyload]")].forEach(
//                       function (t, o) {
//                         var e = t.getAttribute("data-lazyload"),
//                           i = t.getAttribute("data-lazyload-src");
//                         let r = (window.tresioConfig || {}).lazyload || {};
//                         var u = r.homeOffset !== undefined ? r.homeOffset : 300,
//                           a = r.offset !== undefined ? r.offset : 300;
//                         e === "bg" &&
//                           (a =
//                             r.backgroundOffset !== undefined
//                               ? r.backgroundOffset
//                               : 300);
//                         var n = E(window),
//                           f =
//                             t.nodeName === "SOURCE"
//                               ? b(t.parentNode).top
//                               : b(t).top;
//                         window.location.pathname === "/" &&
//                           u !== undefined &&
//                           n < 300 &&
//                           (a = u);
//                         var l = f - a,
//                           s = l + t.getBoundingClientRect().height,
//                           h = n + document.querySelector("html").clientHeight,
//                           w = f - n,
//                           A = l < -a,
//                           S = (s > n && l < h) || w < a;
//                         let z = t.style.display;
//                         if (
//                           S &&
//                           z !== "none" &&
//                           t.getAttribute("data-lazyload-loaded") !== "true" &&
//                           !A
//                         ) {
//                           if (
//                             (e === "bg" && (t.style.backgroundImage = \`url(\${i})\`),
//                             e === "img" &&
//                               (t.getAttribute("src") !== i &&
//                                 t.setAttribute("src", i),
//                               C(t).forEach((d, x) => {
//                                 if (d.nodeName === "SOURCE") {
//                                   let p = d.getAttribute("data-lazyload-srcset"),
//                                     T = d.getAttribute("srcset");
//                                   p && p !== T && d.setAttribute("srcset", p);
//                                 }
//                               })),
//                             e === "video")
//                           ) {
//                             if (t.getAttribute("data-desktop-vid"))
//                               t.setAttribute("data-lazyload-loaded", "true"), y();
//                             else if (
//                               (t.setAttribute("src", i), t.nodeName === "SOURCE")
//                             ) {
//                               let d = t.parentNode;
//                               d.load && d.load();
//                             }
//                           }
//                           t.setAttribute("data-lazyload-loaded", "true");
//                         }
//                       }
//                     );
//                 },
//                 init() {
//                   document.readyState === "loading" && c.run(),
//                     g(() => {
//                       window.addEventListener("resize", c.run, false),
//                         window.addEventListener("scroll", c.run, false),
//                         c.run();
//                     });
//                 },
//               },
//               v = c;
//             v.init();
//           })();
//         `}
//       </Script>

//       {/* Main App Script - Loads after lazy loading is initialized */}
//       <Script
//         src="https://www.goldfingersaesthetics.com/assets/app.min.js?build=b17fec170fb738dd70ed3e81fd2a78172e899b53"
//         strategy="lazyOnload"
//         onLoad={() => {
//           // Trigger CMS initialization when jQuery is available
//           if (typeof window !== "undefined" && (window as any).$) {
//             (window as any).$(document).trigger("cms.init");
//           }
//         }}
//       />

//       {/* reCAPTCHA Script */}
//       <Script
//         src="https://www.goldfingersaesthetics.com/master/assets/core/js/treCaptcha.min.js?build=b17fec170fb738dd70ed3e81fd2a78172e899b53
// "
//         strategy="lazyOnload"
//       />

//       {/* Google Tag Manager NoScript Fallback */}
//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-5QDJXBX"
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//         />
//       </noscript>
//     </>
//   );
// }

import Script from "next/script";

interface BodyScriptsProps {
  gtmId?: string;
  appJsUrl?: string;
  captchaJsUrl?: string;
  gaId?: string;
  googleAdsId?: string;
  iconNodeId?: string;
}

export default function BodyScripts({
  gtmId = "GTM-5QDJXBX",
  appJsUrl = "/assets/app.min.js", // Now points to your local file
  captchaJsUrl = "/assets/treCaptcha.min.js", // Now points to your local file
  gaId = "G-0ZWSKYX3K7",
  googleAdsId = "AW-997436413",
  iconNodeId = "115546",
}: BodyScriptsProps) {
  return (
    <>
      {/* All your other scripts remain the same */}

      {/* Site Flushing Script */}
      <Script id="site-flush" strategy="afterInteractive">
        {`
          document.addEventListener("DOMContentLoaded", () => {
            window.addEventListener("keydown", (e) => {
              let ctrl = e.ctrlKey || e.metaKey;
              const key = String(e.key);
              if (ctrl && ["0", ".", "5"].includes(key)) {
                e.preventDefault();
                e.stopPropagation();
                if (key === ".") {
                  return (window.location = \`\${window.location.origin}\${window.location.pathname}s3admin\`);
                }
                let div = document.createElement("div");
                const styles = {
                  position: "fixed",
                  left: "0",
                  right: "0",
                  margin: "auto",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 9999999999,
                  background: "#000",
                  color: "#fff",
                  height: "80px",
                  lineHeight: "75px",
                  width: "fit-content",
                  userSelect: "none",
                  textAlign: "center",
                  borderRadius: "3px",
                  fontSize: "32px",
                  border: "2px solid white",
                  padding: "0 32px",
                  fontWeight: "500",
                  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif;",
                };
                Object.keys(styles).forEach((n) => (div.style[n] = styles[n]));
                div.innerHTML = "FLUSHING SITE...";
                document.body.append(div);
                fetch("/api/ping/?flushAll=2", {
                  method: "POST",
                  cache: "no-store",
                }).then(() => {
                  setTimeout(() => {
                    window.location.reload(true);
                  }, 100);
                });
              }
            });
          });
        `}
      </Script>

      {/* Tresio Tracking Script */}
      <Script
        src="https://tracking.tresio.co/dist/bundle.js"
        strategy="afterInteractive"
      />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            cookie_flags: 'secure;samesite=none',
          });
          gtag('config', '${googleAdsId}', {
            cookie_flags: 'secure;samesite=none',
          });
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>

      {/* IconNode Script */}
      <Script
        src={`https://scripts.iconnode.com/${iconNodeId}.js`}
        strategy="afterInteractive"
      />

      {/* Lazy Loading Script */}
      <Script id="lazyload-script" strategy="afterInteractive">
        {`
          (() => {
            var m = (t) => {
                let o = document.readyState;
                if (typeof $ != "function") {
                  setTimeout(() => {
                    m(t);
                  }, 100);
                  return;
                }
                o === "complete" ||
                (o !== "loading" && !document.documentElement.doScroll)
                  ? t()
                  : document.addEventListener("DOMContentLoaded", t);
              },
              g = m;
            var y = () => {
                [...document.querySelectorAll("video")].forEach((t, o) => {
                  let e = t.getAttribute("data-lazyload"),
                    i = t.getAttribute("data-lazyload-loaded"),
                    r = t.querySelectorAll("source");
                  if (!e || i) {
                    let u = t.getAttribute("src"),
                      a = window.innerWidth,
                      n = t.getAttribute("data-desktop-vid"),
                      f = t.getAttribute("data-tablet-vid"),
                      l = t.getAttribute("data-mobile-vid"),
                      s = a <= 640 ? l : a <= 920 ? f : n;
                    s !== null && s !== u && t.setAttribute("src", s);
                  }
                });
              },
              E = (t) => ("scrollTop" in t ? t.scrollTop : t.pageYOffset),
              b = (t) => {
                let o = t.getBoundingClientRect();
                return {
                  top: o.top + window.scrollY,
                  left: o.left + window.scrollX,
                };
              },
              C = (t) => {
                for (var o = [], e = t.parentNode.firstChild; e; )
                  e.nodeType === 1 && e !== t && o.push(e), (e = e.nextSibling);
                return o;
              },
              c = {
                run() {
                  y(),
                    [...document.querySelectorAll("[data-lazyload]")].forEach(
                      function (t, o) {
                        var e = t.getAttribute("data-lazyload"),
                          i = t.getAttribute("data-lazyload-src");
                        let r = (window.tresioConfig || {}).lazyload || {};
                        var u = r.homeOffset !== undefined ? r.homeOffset : 300,
                          a = r.offset !== undefined ? r.offset : 300;
                        e === "bg" &&
                          (a =
                            r.backgroundOffset !== undefined
                              ? r.backgroundOffset
                              : 300);
                        var n = E(window),
                          f =
                            t.nodeName === "SOURCE"
                              ? b(t.parentNode).top
                              : b(t).top;
                        window.location.pathname === "/" &&
                          u !== undefined &&
                          n < 300 &&
                          (a = u);
                        var l = f - a,
                          s = l + t.getBoundingClientRect().height,
                          h = n + document.querySelector("html").clientHeight,
                          w = f - n,
                          A = l < -a,
                          S = (s > n && l < h) || w < a;
                        let z = t.style.display;
                        if (
                          S &&
                          z !== "none" &&
                          t.getAttribute("data-lazyload-loaded") !== "true" &&
                          !A
                        ) {
                          if (
                            (e === "bg" && (t.style.backgroundImage = \`url(\${i})\`),
                            e === "img" &&
                              (t.getAttribute("src") !== i &&
                                t.setAttribute("src", i),
                              C(t).forEach((d, x) => {
                                if (d.nodeName === "SOURCE") {
                                  let p = d.getAttribute("data-lazyload-srcset"),
                                    T = d.getAttribute("srcset");
                                  p && p !== T && d.setAttribute("srcset", p);
                                }
                              })),
                            e === "video")
                          ) {
                            if (t.getAttribute("data-desktop-vid"))
                              t.setAttribute("data-lazyload-loaded", "true"), y();
                            else if (
                              (t.setAttribute("src", i), t.nodeName === "SOURCE")
                            ) {
                              let d = t.parentNode;
                              d.load && d.load();
                            }
                          }
                          t.setAttribute("data-lazyload-loaded", "true");
                        }
                      }
                    );
                },
                init() {
                  document.readyState === "loading" && c.run(),
                    g(() => {
                      window.addEventListener("resize", c.run, false),
                        window.addEventListener("scroll", c.run, false),
                        c.run();
                    });
                },
              },
              v = c;
            v.init();
          })();
        `}
      </Script>

      {/* Main App Script - Now from local public folder */}
      <Script
        src={appJsUrl}
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).$) {
            (window as any).$(document).trigger("cms.init");
          }
        }}
      />

      {/* reCAPTCHA Script - Now from local public folder */}
      <Script src={captchaJsUrl} strategy="lazyOnload" />

      {/* Google Tag Manager NoScript Fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}  