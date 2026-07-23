// // // // // import type { NextConfig } from "next";

// // // // // const nextConfig: NextConfig = {
// // // // //   /* config options here */
// // // // // };

// // // // // export default nextConfig;

// // // // import type { NextConfig } from "next";

// // // // const nextConfig: NextConfig = {
// // // //   // Bypass TypeScript type checking during build
// // // //   typescript: {
// // // //     ignoreBuildErrors: true,
// // // //   },
// // // //   // Bypass ESLint during build
// // // //   // eslint: {
// // // //   //   ignoreDuringBuilds: true,
// // // //   // },
// // // //   /* config options here */
// // // // };

// // // // export default nextConfig;




// // // import type { NextConfig } from "next";

// // // const nextConfig: NextConfig = {
// // //   experimental: {
// // //     serverComponentsExternalPackages: [
// // //       "payload",
// // //       "pino",
// // //       "thread-stream",
// // //     ],
// // //   },
// // //   typescript: {
// // //     ignoreBuildErrors: true,
// // //   },
// // // };

// // // export default nextConfig;




// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   experimental: {
// //     serverComponentsExternalPackages: ["payload", "pino", "thread-stream"],
// //   },

// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },

// //   // 🔥 FORCE OLD URL FORMAT
// //   trailingSlash: true,

// //   async redirects() {
// //     return [
// //       // NON-WWW → WWW
// //       {
// //         source: "/:path*",
// //         has: [
// //           {
// //             type: "host",
// //             value: "goldfingersaesthetics.com",
// //           },
// //         ],
// //         destination: "https://www.goldfingersaesthetics.com/:path*",
// //         permanent: true,
// //       },
// //     ];
// //   },
// // };

// // export default nextConfig;




// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     serverComponentsExternalPackages: ["payload", "pino", "thread-stream"],
//   },

//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   // ❌ REMOVE trailingSlash
//   // ❌ REMOVE redirects from here
// };

// export default nextConfig;





import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["payload", "pino", "thread-stream"],
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: "/medical-spa/l",
        destination: "/medical-spa",
        permanent: true,
      },
      {
  source: "/medical-spa/face-lift",
  destination: "/medical-spa/liquid-facelift",
  permanent: true,
},
      {
        source: "/gallery/non-surgical/svvsv",
        destination: "/gallery/non-surgical",
        permanent: true,
      },
      {
        source: "/gallery/non-surgical/dgdgd",
        destination: "/gallery/non-surgical",
        permanent: true,
      },
      {
        source: "/the-villages/medical-spa/spa-services",
        destination: "/the-villages",
        permanent: true,
      },
      {
        source: "/the-villages/medical-spa/botox",
        destination: "/the-villages",
        permanent: true,
      },
      {
        source: "/port-orange/medical-spa",
        destination: "/port-orange",
        permanent: true,
      },
      {
        source: "/new-smyrna-beach/medical-spa",
        destination: "/new-smyrna-beach",
        permanent: true,
      },
      {
        source: "/mount-dora/medical-spa",
        destination: "/mount-dora",
        permanent: true,
      },
      {
        source: "/medical-spa/facial-fillers",
        destination: "/medical-spa/injectables",
        permanent: true,
      },
      {
        source: "/longwood/medical-spa",
        destination: "/longwood",
        permanent: true,
      },
      {
        source: "/daytona-beach/medical-spa",
        destination: "/daytona-beach",
        permanent: true,
      },
      {
        source: "/apply-for-your-training-spot-today",
        destination: "/training/apply-for-your-training-spot-today",
        permanent: true,
      },
      {
        source: "/about/our-founders",
        destination: "/about/founder",
        permanent: true,
      },
      {
        source: "/about/our-founder",
        destination: "/about/founder",
        permanent: true,
      },
      {
        source: "/about/meet-the-team",
        destination: "/location?tab=providers",
        permanent: true,
      },
      {
        source: "/non-surgical/cheek-contour",
        destination: "/medical-spa/cheek-fillers",
        permanent: true,
      },
      {
        source: "/non-surgical/dermal-filler",
        destination: "/medical-spa/dermal-fillers",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/about/testimonials",
        permanent: true,
      },
      {
        source: "/resource-center",
        destination: "/about/resource-center",
        permanent: true,
      },
      {
        source: "/medical-spa/weight-loss",
        destination: "/medical-spa/weightloss",
        permanent: true,
      },
      {
        source: "/medical-spa/lip-fillers",
        destination: "/medical-spa/lips",
        permanent: true,
      },
      {
        source: "/medical-spa/hand-rejuvenation",
        destination: "/medical-spa/hands",
        permanent: true,
      },
      {
        source: "/medical-spa/chin-fillers",
        destination: "/medical-spa/chin",
        permanent: true,
      },
      {
        source: "/founders",
        destination: "/about/founder",
        permanent: true,
      },
      {
        source: "/confidentiality-statement",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },

  skipTrailingSlashRedirect: true,
};

export default nextConfig;
