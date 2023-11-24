/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io', 'images.unsplash.com', 'source.unsplash.com']
  }
};

module.exports = nextConfig;
