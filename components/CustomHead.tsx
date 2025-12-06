// // components/CustomHead.tsx
// import Head from "next/head";
// import Script from "next/script";

// interface CustomHeadProps {
//   title?: string;
//   description?: string;
//   canonical?: string;
//   ogImage?: string;
// }

// export default function CustomHead({
//   title = "Your Site Title",
//   description = "Your site description here",
//   canonical = "https://yoursite.com/",
//   ogImage = "https://yoursite.com/og-image.jpg",
// }: CustomHeadProps) {
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//         {/* Canonical URL */}
//         <link rel="canonical" href={canonical} />

//         {/* Favicon - Update with your own */}
//         <link href="/favicon.ico" rel="icon" type="image/x-icon" />

//         {/* Open Graph Meta Tags */}
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:type" content="Website" />
//         <meta property="og:url" content={canonical} />
//         <meta property="og:image" content={ogImage} />
//         <meta property="og:image:alt" content="" />

//         {/* Social Media */}
//         <meta
//           property="article:author"
//           content="https://www.facebook.com/goldfingersaesthetics/"
//         />
//         <meta
//           property="article:publisher"
//           content="https://www.facebook.com/goldfingersaesthetics/"
//         />
//         <meta name="twitter:card" content={ogImage} />

//         {/* DNS Prefetch */}
//         <link rel="dns-prefetch" href="https://www.datocms-assets.com/" />
//         <link rel="dns-prefetch" href="https://js.tresiocdn.com/" />
//         <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
//         <link rel="dns-prefetch" href="https://scripts.iconnode.com" />
//         <link rel="dns-prefetch" href="https://use.typekit.net" />

//         {/* Preload Critical Images */}
//         <link
//           rel="preload"
//           href="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=850"
//           as="image"
//           media="(max-width: 420px)"
//         />
//         <link
//           rel="preload"
//           href="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=2200&q=90"
//           as="image"
//           media="(min-width: 1401px)"
//         />

//         {/* Preload Fonts */}
//         <link
//           rel="preload"
//           as="font"
//           href="/master/assets/v2/font/fontello.woff2"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />

//         {/* TypeKit Font Preloads */}
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/26af7d/000000000000000077359a20/30/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n3&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/946b5d/000000000000000077359a32/30/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/624f00/00000000000000003b9af037/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/de021d/00000000000000003b9af036/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/8de0c1/00000000000000003b9af03a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />

//         {/* Google Site Verification */}
//         <meta
//           name="google-site-verification"
//           content="85YZIFma5GlfgQ9POPKBPdzIsBwjRNuOn5XYlsIDrxI"
//         />
//       </Head>

//       {/* Site Flushing Script - Use carefully in production */}
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

//       {/* Tresio Tracking Configuration */}
//       <Script id="tresio-config" strategy="beforeInteractive">
//         {`
//           window._s3trackingConfig = { disableFormFields: true };
//           window.tresioConfig = ${JSON.stringify({
//             siteSettings: {
//               galleryType: "default",
//               enableCookiesPolicy: false,
//               client: "Goldfingers Aesthetics",
//               galleryConfig: null,
//             },
//             s3TrackingConfig: { disableFormFields: true },
//             isLeadloopClient: false,
//             recaptchaV2DevSiteKey: "6LdUwjsiAAAAALeTc9NRvEu6zziz8DS5LQhbCqH3",
//             recaptchaV3DevSiteKey: "6LeLfe4jAAAAAM9LLoajZbTpOp-54-zl8ineedlQ",
//             recaptchaVersion: "v3",
//             recaptchaV2SiteKey: "6LfyI0MoAAAAAEgoAwtpvVL20sgNBkvfKxiId1HU",
//             recaptchaV3SiteKey: "6Ld_IUMoAAAAACbvVwzNHpecemezVGlzKKL_Zjup",
//             environment: "production",
//           })};
//         `}
//       </Script>

//       {/* Tresio Tracking Script */}
//       <Script
//         src="https://tracking.tresio.co/dist/bundle.js"
//         strategy="afterInteractive"
//       />

//       {/* Google Analytics */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-0ZWSKYX3K7"
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-0ZWSKYX3K7', {
//             cookie_flags: 'secure;samesite=none',
//           });
//           gtag('config', 'AW-997436413', {
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
//           })(window,document,'script','dataLayer','GTM-5QDJXBX');
//         `}
//       </Script>

//       {/* IconNode Script */}
//       <Script
//         src="https://scripts.iconnode.com/115546.js"
//         strategy="afterInteractive"
//       />
//     </>
//   );
// }



// // components/CustomHead.tsx
// import Head from 'next/head'
// import Script from 'next/script'

// interface CustomHeadProps {
//   title?: string;
//   description?: string;
//   canonical?: string;
//   ogImage?: string;
// }

// export default function CustomHead({ 
//   title = "Your Site Title",
//   description = "Your site description here",
//   canonical = "https://yoursite.com/",
//   ogImage = "https://yoursite.com/og-image.jpg"
// }: CustomHeadProps) {
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
//         {/* Canonical URL */}
//         <link rel="canonical" href={canonical} />
        
//         {/* Favicon - Update with your own */}
//         <link 
//           href="/favicon.ico" 
//           rel="icon" 
//           type="image/x-icon" 
//         />

//         {/* Open Graph Meta Tags */}
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:type" content="Website" />
//         <meta property="og:url" content={canonical} />
//         <meta property="og:image" content={ogImage} />
//         <meta property="og:image:alt" content="" />

//         {/* Social Media */}
//         <meta property="article:author" content="https://www.facebook.com/goldfingersaesthetics/" />
//         <meta property="article:publisher" content="https://www.facebook.com/goldfingersaesthetics/" />
//         <meta name="twitter:card" content={ogImage} />

//         {/* DNS Prefetch */}
//         <link rel="dns-prefetch" href="https://www.datocms-assets.com/" />
//         <link rel="dns-prefetch" href="https://js.tresiocdn.com/" />
//         <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
//         <link rel="dns-prefetch" href="https://scripts.iconnode.com" />
//         <link rel="dns-prefetch" href="https://use.typekit.net" />

//         {/* Preload Critical Images */}
//         <link
//           rel="preload"
//           href="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=850"
//           as="image"
//           media="(max-width: 420px)"
//         />
//         <link
//           rel="preload"
//           href="https://www.datocms-assets.com/105497/1692884588-2.jpg?auto=format,compress&w=2200&q=90"
//           as="image"
//           media="(min-width: 1401px)"
//         />

//         {/* Preload Fonts */}
//         <link
//           rel="preload"
//           as="font"
//           href="/master/assets/v2/font/fontello.woff2"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />

//         {/* TypeKit Font Preloads */}
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/26af7d/000000000000000077359a20/30/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n3&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/946b5d/000000000000000077359a32/30/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/624f00/00000000000000003b9af037/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/de021d/00000000000000003b9af036/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="https://use.typekit.net/af/8de0c1/00000000000000003b9af03a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />

//         {/* Google Site Verification */}
//         <meta name="google-site-verification" content="85YZIFma5GlfgQ9POPKBPdzIsBwjRNuOn5XYlsIDrxI" />
//       </Head>

//         {/* Tresio Tracking Configuration - Inline in head for immediate availability */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window._s3trackingConfig = { disableFormFields: true };
//               window.tresioConfig = ${JSON.stringify({
//                 siteSettings: {
//                   galleryType: "default",
//                   enableCookiesPolicy: false,
//                   client: "Your Site Name",
//                   galleryConfig: null,
//                 },
//                 s3TrackingConfig: { disableFormFields: true },
//                 isLeadloopClient: false,
//                 recaptchaV2DevSiteKey: "6LdUwjsiAAAAALeTc9NRvEu6zziz8DS5LQhbCqH3",
//                 recaptchaV3DevSiteKey: "6LeLfe4jAAAAAM9LLoajZbTpOp-54-zl8ineedlQ",
//                 recaptchaVersion: "v3",
//                 recaptchaV2SiteKey: "6LfyI0MoAAAAAEgoAwtpvVL20sgNBkvfKxiId1HU",
//                 recaptchaV3SiteKey: "6Ld_IUMoAAAAACbvVwzNHpecemezVGlzKKL_Zjup",
//                 environment: "production",
//               })};
//             `,
//           }}
//         />
//     </>
//   )
// }



// components/CustomHead.tsx
"use client";

import Script from "next/script";

interface CustomHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function CustomHead({
  title = "Goldfingers Aesthetics | Florida’s Premier Med Spa",
  description = "Goldfingers Aesthetics offers expert Botox, fillers, and aesthetic treatments across Florida. Experience beauty, confidence, and innovation with our award-winning med spa.",
  canonical = "https://www.goldfingersaesthetics.com/",
  ogImage = "https://res.cloudinary.com/dk3v64cs6/image/upload/v1700000000/default-og.jpg",
}: CustomHeadProps) {
  return (
    <>
      {/* Basic meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.datocms-assets.com/" />
      <link rel="dns-prefetch" href="https://js.tresiocdn.com/" />

      {/* Preload assets */}
      <link
        rel="preload"
        href="/master/assets/v2/font/fontello.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Google verification */}
      <meta
        name="google-site-verification"
        content="85YZIFma5GlfgQ9POPKBPdzIsBwjRNuOn5XYlsIDrxI"
      />

      {/* External Scripts */}
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      {/* Inline script (tracking config) */}
      <Script id="tresio-config" strategy="beforeInteractive">
        {`
          window._s3trackingConfig = { disableFormFields: true };
          window.tresioConfig = {
            siteSettings: {
              galleryType: "default",
              enableCookiesPolicy: false,
              client: "Your Site Name",
              galleryConfig: null,
            },
            s3TrackingConfig: { disableFormFields: true },
            isLeadloopClient: false,
            recaptchaV2DevSiteKey: "6LdUwjsiAAAAALeTc9NRvEu6zziz8DS5LQhbCqH3",
            recaptchaV3DevSiteKey: "6LeLfe4jAAAAAM9LLoajZbTpOp-54-zl8ineedlQ",
            recaptchaVersion: "v3",
            recaptchaV2SiteKey: "6LfyI0MoAAAAAEgoAwtpvVL20sgNBkvfKxiId1HU",
            recaptchaV3SiteKey: "6Ld_IUMoAAAAACbvVwzNHpecemezVGlzKKL_Zjup",
            environment: "production",
          };
        `}
      </Script>
    </>
  );
}
