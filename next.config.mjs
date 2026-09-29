/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server runtime required so /api/economic-calendar can proxy the calendar feed.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
