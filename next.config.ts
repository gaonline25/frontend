// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Bypass TypeScript type checking during build
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   // Bypass ESLint during build
//   // eslint: {
//   //   ignoreDuringBuilds: true,
//   // },
//   /* config options here */
// };

// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "payload",
      "pino",
      "thread-stream",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
