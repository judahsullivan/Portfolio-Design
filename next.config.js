/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      }
    ]
  }
};

module.exports = nextConfig;
