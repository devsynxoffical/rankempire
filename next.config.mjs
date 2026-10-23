/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: { unoptimized: true },
  // output: 'export'  // uncomment to produce a static /out folder for any host
};
export default nextConfig;
