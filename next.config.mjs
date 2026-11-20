/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: { unoptimized: true },
  // STATIC_EXPORT=1 builds a static /out folder for Hostinger or any static host
  ...(process.env.STATIC_EXPORT ? { output: 'export' } : {}),
};
export default nextConfig;
