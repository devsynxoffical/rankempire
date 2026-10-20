import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/our-team",
        destination: "/about-us/",
        permanent: true,
      },
      {
        source: "/our-team/",
        destination: "/about-us/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
